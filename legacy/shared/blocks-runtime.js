/* Рантайм блоков ядра: window.BLOCK(строка) -> реестр window.BLOCKS.

   Блок хранится в файле <id>.md.js: Markdown с фронтматтером внутри
   обёртки window.BLOCK(String.raw`...`). Обёртка нужна ровно затем,
   чтобы блок грузился обычным <script> с file:// — fetch локальных
   файлов браузер запрещает, а этапа сборки у платформы нет.

   Один и тот же блок читают все витрины: глава рендерит его целиком
   (renderInto), колода забирает формулы по якорям (formula('id#name')),
   страница недели решает по access, кому блок показывать. Поэтому
   правка блока меняет сразу всё, что из него собрано. */

(function (global) {
  'use strict';

  var REGISTRY = {};

  /* ── фронтматтер ─────────────────────────────────────────────── */

  function parseFront(text) {
    var meta = {}, body = text;
    var m = /^\s*---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
    if (m) {
      m[1].split('\n').forEach(function (line) {
        var kv = /^([\wа-яё-]+):\s*(.*)$/i.exec(line.trim());
        if (!kv) return;
        var key = kv[1], val = kv[2].trim();
        if (/^\[.*\]$/.test(val)) {
          meta[key] = val.slice(1, -1).split(',')
            .map(function (s) { return s.trim(); })
            .filter(Boolean);
        } else {
          meta[key] = val;
        }
      });
      body = m[2];
    }
    return { meta: meta, body: body };
  }

  /* ── разбор тела: строки -> токены ───────────────────────────── */

  function parseBody(body) {
    var lines = body.split('\n');
    var tokens = [], para = [], i, line;

    function flushPara(target) {
      if (para.length) {
        target.push({ kind: 'p', text: para.join(' ') });
        para = [];
      }
    }

    function parseInto(target, stopAt) {
      while (i < lines.length) {
        line = lines[i];

        if (stopAt && line.trim() === stopAt) { flushPara(target); i++; return; }

        /* $$#имя или $$ — витринная формула до закрывающего $$ */
        var dm = /^\s*\$\$(?:#([\w-]+))?\s*$/.exec(line);
        if (dm) {
          flushPara(target);
          i++;
          var tex = [];
          while (i < lines.length && !/^\s*\$\$\s*$/.test(lines[i])) { tex.push(lines[i]); i++; }
          i++; /* закрывающий $$ */
          target.push({ kind: 'math', tex: tex.join('\n').trim(), anchor: dm[1] || null });
          continue;
        }

        /* ::: решение — доступ только преподавателю */
        var fence = /^\s*:::\s*(.+)$/.exec(line);
        if (fence && fence[1] !== ':') {
          flushPara(target);
          i++;
          var inner = [];
          parseInto(inner, ':::');
          target.push({ kind: 'gated', label: fence[1].trim(), tokens: inner });
          continue;
        }

        if (/^\s*$/.test(line)) { flushPara(target); i++; continue; }

        var h = /^(#{2,4})\s+(.*)$/.exec(line);
        if (h) { flushPara(target); target.push({ kind: 'h', text: h[2] }); i++; continue; }

        var img = /^!\[([^\]]*)\]\(([^)]+)\)\s*$/.exec(line);
        if (img) { flushPara(target); target.push({ kind: 'fig', caption: img[1], src: img[2] }); i++; continue; }

        if (/^\s*[-*]\s+/.test(line)) {
          flushPara(target);
          var items = [];
          while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
            items.push(lines[i].replace(/^\s*[-*]\s+/, ''));
            i++;
          }
          target.push({ kind: 'ul', items: items });
          continue;
        }

        if (/^\s*\d+[.)]\s+/.test(line)) {
          flushPara(target);
          var oitems = [];
          while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
            oitems.push(lines[i].replace(/^\s*\d+[.)]\s+/, ''));
            i++;
          }
          target.push({ kind: 'ol', items: oitems });
          continue;
        }

        para.push(line.trim());
        i++;
      }
      flushPara(target);
    }

    i = 0;
    parseInto(tokens, null);
    return tokens;
  }

  /* ── регистрация ─────────────────────────────────────────────── */

  global.BLOCK = function (text) {
    var f = parseFront(text);
    if (!f.meta.id) { console.error('BLOCK: нет id во фронтматтере', text.slice(0, 80)); return; }
    var b = {
      id: f.meta.id,
      type: f.meta.type || 'концепт',
      title: f.meta.title || f.meta.id,
      links: f.meta.links || [],
      access: f.meta.access || 'public',
      src: f.meta.src || null,     /* демка: страница демки от корня платформы */
      fig: f.meta.fig || null,     /* рисунок: SVG от корня платформы */
      tokens: parseBody(f.body),
      formulas: {}
    };
    b.tokens.forEach(function walk(t) {
      if (t.kind === 'math' && t.anchor) b.formulas[t.anchor] = t.tex;
      if (t.tokens) t.tokens.forEach(walk);
    });
    REGISTRY[b.id] = b;
  };

  /* ── доступ по ролям ─────────────────────────────────────────── */

  var RANK = { 'гость': 0, 'студент': 1, 'преподаватель': 2 };
  var NEED = { public: 0, student: 1, teacher: 2 };

  function visible(id, role) {
    var b = REGISTRY[id];
    if (!b) return false;
    return (RANK[role] || 0) >= (NEED[b.access] || 0);
  }

  /* ── инлайн-разметка внутри абзаца ───────────────────────────── */

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inline(text) {
    var math = [];
    /* математику прячем до обработки разметки: звёздочки и подчёркивания
       внутри TeX не должны превращаться в курсив */
    var s = text.replace(/\$([^$]+)\$/g, function (_, tex) {
      math.push(tex);
      return '\0' + (math.length - 1) + '\0';
    });
    s = escapeHtml(s);
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\[\[([\w-]+)\]\]/g, function (_, id) {
      var b = REGISTRY[id];
      var t = b ? b.title : id;
      return '<a class="blk-ref" href="#blk-' + id + '">' + escapeHtml(t) + '</a>';
    });
    s = s.replace(/\0(\d+)\0/g, function (_, n) {
      var tex = math[+n];
      if (global.katex) {
        try { return global.katex.renderToString(tex, { throwOnError: false }); }
        catch (e) { /* падаем в текст ниже */ }
      }
      return '<code>' + escapeHtml(tex) + '</code>';
    });
    return s;
  }

  /* ── рендер в DOM ────────────────────────────────────────────── */

  function el(tag, cls, htmlStr) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (htmlStr != null) n.innerHTML = htmlStr;
    return n;
  }

  function renderTokens(tokens, box, role) {
    tokens.forEach(function (t) {
      if (t.kind === 'p') box.appendChild(el('p', null, inline(t.text)));
      else if (t.kind === 'h') box.appendChild(el('h4', 'blk-sub', inline(t.text)));
      else if (t.kind === 'math') {
        var d = el('div', 'blk-math');
        if (global.katex) {
          try { global.katex.render(t.tex, d, { throwOnError: false, displayMode: true }); }
          catch (e) { d.textContent = t.tex; }
        } else d.textContent = t.tex;
        box.appendChild(d);
      }
      else if (t.kind === 'ul' || t.kind === 'ol') {
        var list = el(t.kind === 'ul' ? 'ul' : 'ol');
        t.items.forEach(function (it) { list.appendChild(el('li', null, inline(it))); });
        box.appendChild(list);
      }
      else if (t.kind === 'fig') {
        var f = el('figure', 'blk-fig');
        f.appendChild(figNode(t.src, t.caption));
        if (t.caption) f.appendChild(el('figcaption', null, inline(t.caption)));
        box.appendChild(f);
      }
      else if (t.kind === 'gated') {
        if ((RANK[role] || 0) >= 2) {
          var g = el('div', 'blk-gated');
          g.appendChild(el('div', 'blk-gated-label', escapeHtml(t.label) +
            ' · <span class="blk-gated-badge">доступ: преподаватель</span>'));
          renderTokens(t.tokens, g, role);
          box.appendChild(g);
        } else {
          box.appendChild(el('div', 'blk-gated-stub',
            escapeHtml(t.label) + ' — доступно преподавателям'));
        }
      }
    });
  }

  /* Рисунок: SVG живут в реестре window.FIGS (файлы figs/*.svg.js) и
     вставляются В ДОКУМЕНТ, а не через <img>: только инлайновый SVG
     наследует CSS-токены страницы (currentColor и переменные), то есть
     перекрашивается темой. Растр и внешние файлы — обычным <img>. */
  function figNode(ref, alt) {
    if (global.FIGS && global.FIGS[ref]) {
      var holder = el('div', 'fig-inline');
      holder.innerHTML = global.FIGS[ref];
      return holder;
    }
    var img = el('img');
    img.src = (global.PLATFORM_BASE || '') + ref;
    img.alt = alt || '';
    return img;
  }

  /* opts: { role, title:false — не выводить заголовок блока } */
  function renderInto(container, id, opts) {
    opts = opts || {};
    var role = opts.role || 'гость';
    var b = REGISTRY[id];
    if (!b) {
      container.appendChild(el('div', 'blk-missing', 'нет блока: ' + escapeHtml(id)));
      return null;
    }
    var art = el('article', 'block block-type-' + b.type);
    art.id = 'blk-' + b.id;

    if (b.type === 'рисунок') {
      var f = el('figure', 'blk-fig');
      f.appendChild(figNode(b.fig, b.title));
      var cap = el('figcaption');
      renderTokens(b.tokens, cap, role);
      f.appendChild(cap);
      art.appendChild(f);
    } else if (b.type === 'демка') {
      var card = el('div', 'blk-demo-card');
      card.appendChild(el('div', 'blk-kicker', 'демка'));
      card.appendChild(el('h3', 'block-title', escapeHtml(b.title)));
      renderTokens(b.tokens, card, role);
      var a = el('a', 'demo-link', 'Открыть демку');
      a.href = (global.PLATFORM_BASE || '') + b.src;
      card.appendChild(a);
      art.appendChild(card);
    } else {
      if (b.type === 'вопрос' || b.type === 'задача') {
        art.appendChild(el('div', 'blk-kicker', b.type));
      }
      if (opts.title !== false) art.appendChild(el('h3', 'block-title', escapeHtml(b.title)));
      renderTokens(b.tokens, art, role);
    }
    container.appendChild(art);
    return art;
  }

  /* ── формулы для колоды ──────────────────────────────────────── */

  function formula(ref) {
    var parts = ref.split('#');
    var b = REGISTRY[parts[0]];
    if (!b) { console.error('нет блока для формулы:', ref); return ref; }
    var tex = b.formulas[parts[1]];
    if (tex == null) { console.error('нет якоря формулы:', ref); return ref; }
    return tex;
  }

  global.BLOCKS = REGISTRY;
  global.Blocks = {
    get: function (id) { return REGISTRY[id]; },
    all: function () { return Object.keys(REGISTRY); },
    visible: visible,
    renderInto: renderInto,
    formula: formula
  };
})(window);
