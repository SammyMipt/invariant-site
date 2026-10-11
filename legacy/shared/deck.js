/* Рендер колоды: window.DECK (spec из slides.js) -> DOM-секции reveal.js.
   Обычный скрипт без модулей — колода обязана открываться с file:// без сети
   и без сборки. Контент попадает в DOM только через textContent. */

(function () {
  'use strict';

  var spec = window.DECK;
  var root = document.getElementById('slides');
  if (!spec || !root) {
    console.error('deck.js: нет window.DECK или #slides');
    return;
  }

  /* Короткие слова (предлоги, союзы, одиночные буквы) не должны висеть
     в конце строки: заголовок кеглем 47 px ломается очень заметно.
     Дважды — чтобы поймать цепочки вида «и у щели». */
  function nbsp(text) {
    var re = /(^|[\s(«„])([a-zA-Zа-яёА-ЯЁ]{1,2})\s+/g;
    /* число держится за следующее слово, единица через косую черту
       («м/с») не рвётся: U+2060 запрещает перенос после «/»; та же правка
       в app/src/lib/deck.ts */
    return String(text)
      .replace(re, '$1$2\u00a0')
      .replace(re, '$1$2\u00a0')
      .replace(/(\d) +(?=[a-zA-Zа-яёА-ЯЁ%°])/g, '$1\u00a0')
      .replace(/([a-zA-Zа-яёА-ЯЁ])\/(?=[a-zA-Zа-яёА-ЯЁ])/g, '$1/\u2060');
  }

  /* Формула внутри строки: кусок между долларами отдаётся KaTeX, остальное
     по-прежнему идёт через textContent. Заведено 08.09 вместе с такой же
     правкой в сборочном рендерере (app/src/lib/deck.ts, txt): математика в
     буллетах и подписях стояла обычным текстом и читалась как опечатка
     рядом с настоящими формулами соседних блоков.

     Строка без долларов идёт коротким путём и ведёт себя ровно как прежде,
     то есть правило «контент попадает в DOM только через textContent» для
     обычного текста в силе. KaTeX подключён на странице колоды; если его
     нет, формула остаётся видимым текстом с долларами, и это лучше пустоты. */
  function tekst(n, text) {
    var s = String(text);
    if (s.indexOf('$') < 0 || !window.katex) {
      n.textContent = nbsp(s);
      return n;
    }
    var chasti = s.split(/(\$[^$]+\$)/g);
    for (var i = 0; i < chasti.length; i++) {
      var ch = chasti[i];
      if (ch.length > 1 && ch.charAt(0) === '$' && ch.charAt(ch.length - 1) === '$') {
        var span = document.createElement('span');
        try {
          window.katex.render(ch.slice(1, -1), span, { throwOnError: false });
        } catch (e) {
          span.textContent = ch;
        }
        n.appendChild(span);
      } else if (ch) {
        n.appendChild(document.createTextNode(nbsp(ch)));
      }
    }
    return n;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) tekst(n, text);
    return n;
  }

  /* Путь от корня сайта (например /karta, /legacy/assets/...) в офлайн-колоде
     под file:// указывал бы в корень диска. Уводим такие пути на сайт:
     адрес задаёт PLATFORM_SITE в index.html колоды. Общий помощник для
     любого блока со ссылкой — демки, видео, картинки. */
  function platformSrc(src) {
    if (src && src.charAt(0) === '/' && window.PLATFORM_SITE) {
      return window.PLATFORM_SITE + src;
    }
    return src;
  }

  /* ── разметка поверх картинки ──────────────────────────────────────
     Один шаг разметки — один фрагмент reveal: лектор ведёт измерение
     кликами, а зал видит, как из снимка получается число. Примитивов
     ровно три, больше пока не понадобилось: отрезок, дуга и подпись.
     Вид задаётся классами в base.css, здесь только геометрия. */

  var SVGNS = 'http://www.w3.org/2000/svg';

  function svg(tag, cls, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    if (cls) n.setAttribute('class', cls);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    return n;
  }

  var SHAPES = {
    line: function (s) {
      return svg('line', 'mark-line', { x1: s.from[0], y1: s.from[1], x2: s.to[0], y2: s.to[1] });
    },
    /* Верхняя полудуга вокруг точки: показывает, что шар считают шаром */
    arc: function (s) {
      var x = s.at[0], y = s.at[1], r = s.r;
      return svg('path', 'mark-arc',
        { d: 'M ' + (x - r) + ' ' + y + ' A ' + r + ' ' + r + ' 0 0 1 ' + (x + r) + ' ' + y });
    },
    text: function (s) {
      var t = svg('text', 'mark-text', { x: s.at[0], y: s.at[1], 'text-anchor': s.anchor || 'middle' });
      t.textContent = nbsp(s.text);
      return t;
    }
  };

  function marksLayer(steps, natural) {
    var root = svg('svg', 'image-marks',
      { viewBox: '0 0 ' + natural[0] + ' ' + natural[1], 'aria-hidden': 'true' });
    steps.forEach(function (step) {
      var g = svg('g', 'fragment');
      (step || []).forEach(function (s) {
        var make = SHAPES[s.kind];
        if (make) g.appendChild(make(s));
        else console.warn('deck.js: неизвестный примитив разметки', s.kind);
      });
      root.appendChild(g);
    });
    return root;
  }

  var BLOCKS = {
    lead: function (b) {
      return el('div', 'blk blk-lead', b.text);
    },
    bullets: function (b) {
      var ul = el('ul', 'blk blk-bullets');
      /* fragment: пункты выходят по одному — зал читает вместе с лектором,
         а не убегает вперёд. В простой колоде по умолчанию выключено, но
         блок может попросить сам: reveal:true. Так сделан слайд, где зал
         называет параметры, а лектор открывает их по одному. */
      var byOne = (spec.meta && spec.meta.plain) ? !!b.reveal : b.reveal !== false;
      b.items.forEach(function (t) {
        ul.appendChild(el('li', byOne ? 'fragment' : null, t));
      });
      return ul;
    },
    formula: function (b) {
      var box = el('div', 'blk blk-formula');
      var line = el('div', 'formula-text' + (b.size === 'small' ? ' small' : ''));
      /* tex рендерится KaTeX'ом, text остаётся простым текстом: у части
         формул руками набранная строка читается лучше набора. */
      if (b.tex && window.katex) {
        try {
          window.katex.render(b.tex, line, { throwOnError: false, displayMode: true });
        } catch (e) { line.textContent = b.text || b.tex; }
      } else {
        line.textContent = b.text || b.tex || '';
      }
      box.appendChild(line);
      if (b.caption) box.appendChild(el('div', 'formula-caption', b.caption));
      return box;
    },
    /* Разбор размерностей: несколько строк формул с подписями, чтобы
       показать вывод по шагам, а не одним прыжком. */
    derive: function (b) {
      var box = el('div', 'blk blk-derive');
      (b.steps || []).forEach(function (st) {
        var row = el('div', 'derive-row');
        var f = el('div', 'derive-tex');
        /* Строчный бокс, но display-стиль: `\displaystyle` перед формулой.
           В строчном стиле KaTeX ставит индексы у lim, суммы и интеграла
           сбоку и петитом, и с задних рядов они не читаются; в display-стиле
           индексы встают под знак и над ним полным кеглем. Полный displayMode
           не годится — он завернул бы формулу в блок с центрированием, а
           цепочка вывода левая и стоит в строке рядом с подписью. Та же
           правка в сборочном рендерере, app/src/lib/deck.ts, case 'derive'. */
        if (st.tex && window.katex) {
          try { window.katex.render('\\displaystyle ' + st.tex, f, { throwOnError: false, displayMode: false }); }
          catch (e) { f.textContent = st.tex; }
        } else f.textContent = st.tex || '';
        row.appendChild(f);
        if (st.note) row.appendChild(el('div', 'derive-note', st.note));
        box.appendChild(row);
      });
      return box;
    },
    demo: function (b) {
      /* bare: иллюстрация, а не прибор. Рамку, фон и тень снимаем — картинка
         должна читаться частью слайда, а не панелью с показаниями. */
      var box = el('div', 'blk blk-demo' + (b.bare ? ' is-bare' : ''));
      /* Метка только у ненаписанных демок: где демка есть, зал видит её саму */
      if (!b.src) box.appendChild(el('div', 'blk-label', 'ЗАГЛУШКА · ИНТЕРАКТИВНАЯ ДЕМКА'));
      if (b.src) {
        box.classList.add('has-frame');
        var f = el('iframe', 'demo-frame');
        f.setAttribute('data-src', platformSrc(b.src)); /* reveal лениво подгружает по data-src */
        f.setAttribute('data-preload', ''); /* прогрев в пределах viewDistance — демка не стартует холодной на глазах у зала */
        f.setAttribute('allow', 'fullscreen');
        box.appendChild(f);
      }
      if (b.desc) box.appendChild(el('div', 'blk-desc', b.desc));
      return box;
    },
    live: function (b) {
      var box = el('div', 'blk blk-live');
      box.appendChild(el('div', 'blk-label', 'ЖИВОЙ ОПЫТ · РЕКВИЗИТ'));
      box.appendChild(el('div', 'blk-desc', b.desc));
      return box;
    },
    /* Таблица: head — список заголовков, rows — список строк.
       Первая колонка выделяется акцентом, как ключ строки. */
    table: function (b) {
      var box = el('div', 'blk blk-table');
      var t = el('table', 'tbl');
      if (b.head) {
        var thead = el('thead');
        var hr = el('tr');
        b.head.forEach(function (h) { hr.appendChild(el('th', null, h)); });
        thead.appendChild(hr);
        t.appendChild(thead);
      }
      var tbody = el('tbody');
      (b.rows || []).forEach(function (row) {
        var tr = el('tr');
        row.forEach(function (cell, i) {
          tr.appendChild(el('td', i === 0 ? 'tbl-key' : null, cell));
        });
        tbody.appendChild(tr);
      });
      t.appendChild(tbody);
      box.appendChild(t);
      if (b.caption) box.appendChild(el('div', 'blk-caption', b.caption));
      return box;
    },
    compare: function (b) {
      var row = el('div', 'blk blk-compare');
      [b.left, b.right].forEach(function (col) {
        var c = el('div', 'compare-col');
        c.appendChild(el('div', 'compare-title', col.title));
        c.appendChild(el('div', 'compare-body', col.body));
        row.appendChild(c);
      });
      return row;
    },
    video: function (b) {
      var box = el('div', 'blk blk-video');
      if (b.src) {
        /* Локальный файл -> <video> (офлайн), иначе iframe (YouTube: нужна сеть) */
        if (/\.(mp4|webm|ogv|ogg)(\?|#|$)/i.test(b.src)) {
          var v = el('video', 'video-frame');
          v.setAttribute('data-src', platformSrc(b.src)); /* ленивая загрузка reveal */
          v.setAttribute('playsinline', '');
          /* controls: false — когда кадр на паузе несёт смысл: Chrome держит
             панель плеера показанной и она ложится поперёк кадра */
          v.controls = b.controls !== false;
          v.muted = b.muted !== false;      /* по умолчанию без звука */
          if (b.autoplay) v.setAttribute('data-autoplay', ''); /* reveal запускает при показе слайда */
          if (b.poster) v.setAttribute('poster', platformSrc(b.poster));

          /* Фрагмент start/end в секундах. Медиа-фрагменты в URL (#t=) reveal
             затирает, перематывая видео в начало при автозапуске, — держим
             границы сами. loop зацикливает именно фрагмент. */
          var start = b.start || 0, end = b.end || 0;
          if (start || end) {
            var toStart = function () { v.currentTime = start; };
            v.addEventListener('loadedmetadata', toStart);
            v.addEventListener('play', function () {
              if (v.currentTime < start - 0.3 || (end && v.currentTime >= end - 0.05)) toStart();
            });
            if (end) {
              v.addEventListener('timeupdate', function () {
                if (v.currentTime < end) return;
                if (b.loop) toStart();
                else v.pause();
              });
            }
            if (b.loop && !end) v.loop = true;
          } else if (b.loop) {
            v.loop = true;
          }
          box.appendChild(v);
        } else if (b.poster) {
          /* Заглушка встроенного ролика: свой кадр, кнопка и ссылка. Офлайн-
             колода с диска идёт без реферера, YouTube отвечает ей ошибкой
             153, и без заглушки на кадре был бы пустой плеер. Плеер грузится
             по нажатию внутрь той же рамки; ссылка и кнопка «Кадр» остаются
             поверх него на случай отказа YouTube. При уходе со слайда плеер
             закрывается. */
          var embed = b.src;
          var fac = el('div', 'video-facade');
          var im = el('img', 'video-facade__poster');
          im.setAttribute('data-src', platformSrc(b.poster));
          if (b.alt) im.setAttribute('alt', b.alt);
          var btn = el('button', 'video-facade__play', '▶');
          btn.setAttribute('type', 'button');
          btn.setAttribute('aria-label', 'Запустить ролик');
          var tools = el('div', 'video-facade__tools');
          var back = el('button', 'video-facade__back', 'Кадр');
          back.setAttribute('type', 'button');
          tools.appendChild(back);
          var yid = /youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/.exec(embed);
          if (yid) {
            var ln = el('a', 'video-facade__link', 'Открыть на YouTube');
            ln.setAttribute('href', 'https://www.youtube.com/watch?v=' + yid[1]);
            ln.setAttribute('target', '_blank');
            ln.setAttribute('rel', 'noopener');
            tools.appendChild(ln);
          }
          fac.appendChild(im);
          fac.appendChild(btn);
          fac.appendChild(tools);
          var closeFac = function () {
            var old = fac.querySelector('iframe');
            if (old && old.parentNode) old.parentNode.removeChild(old);
            fac.classList.remove('is-playing');
          };
          back.addEventListener('click', function (ev) {
            ev.stopPropagation();
            closeFac();
          });
          fac.addEventListener('click', function (ev) {
            if (ev.target && ev.target.closest && ev.target.closest('a')) return;
            if (fac.classList.contains('is-playing')) return;
            var fr = el('iframe', 'video-facade__frame');
            fr.setAttribute('allow', 'autoplay; fullscreen');
            fr.setAttribute('allowfullscreen', '');
            fr.setAttribute('src', embed + (embed.indexOf('?') >= 0 ? '&' : '?') + 'autoplay=1');
            fac.appendChild(fr);
            fac.classList.add('is-playing');
            if (window.Reveal && Reveal.on) {
              var offFac = function () {
                closeFac();
                if (Reveal.off) Reveal.off('slidechanged', offFac);
              };
              Reveal.on('slidechanged', offFac);
            }
          });
          box.appendChild(fac);
        } else {
          var f = el('iframe', 'video-frame');
          f.setAttribute('data-src', platformSrc(b.src));
          f.setAttribute('allow', 'autoplay; fullscreen');
          box.appendChild(f);
        }
      } else {
        box.appendChild(el('div', 'blk-label', 'ЗАГЛУШКА · ВИДЕО'));
      }
      if (b.caption) box.appendChild(el('div', 'blk-desc', b.caption));
      return box;
    },
    image: function (b) {
      var box = el('div', 'blk blk-image');
      var img = el('img', 'image-frame');
      img.setAttribute('data-src', platformSrc(b.src));
      if (b.alt) img.setAttribute('alt', b.alt);

      /* Разметка поверх снимка: шаги выходят по клику, как фрагменты reveal.
         Координаты — в пикселях исходного файла, поэтому размечать можно
         прямо по нему, не пересчитывая под экран. Чтобы это работало,
         картинка и слой обязаны занимать один и тот же прямоугольник:
         отсюда обёртка с aspect-ratio вместо object-fit, который сам решает,
         где внутри блока показать кадр, и слой уезжает от снимка. */
      if (b.marks && b.natural) {
        var stage = el('div', 'image-stage');
        stage.style.aspectRatio = b.natural[0] + ' / ' + b.natural[1];
        stage.appendChild(img);
        stage.appendChild(marksLayer(b.marks, b.natural));
        box.appendChild(stage);
      } else {
        box.appendChild(img);
      }

      if (b.caption) box.appendChild(el('div', 'blk-desc', b.caption));
      return box;
    },
    /* [платформа] Инлайновый SVG из реестра window.FIGS: рисунки ядра
       вставляются в DOM, чтобы их красили токены темы (currentColor),
       чего <img> не умеет. Ставится адаптером deck-blocks.js. */
    figure: function (b) {
      var box = el('div', 'blk blk-image');
      var holder = el('div', 'fig-inline');
      if (window.FIGS && window.FIGS[b.fig]) holder.innerHTML = window.FIGS[b.fig];
      else holder.textContent = 'нет рисунка: ' + b.fig;
      box.appendChild(holder);
      if (b.caption) box.appendChild(el('div', 'blk-desc', b.caption));
      return box;
    },
    row: function (b) {
      /* Горизонтальная раскладка вложенных блоков (два видео рядом и т.п.) */
      var row = el('div', 'blk blk-row');
      (b.blocks || []).forEach(function (nb) {
        var render = BLOCKS[nb.kind];
        if (render) {
          var cell = el('div', 'row-cell');
          cell.appendChild(render(nb));
          row.appendChild(cell);
        }
      });
      return row;
    }
  };

  /* Кикер вида «ШАГ 3 · ВАУ» разбирается на номер беата и фазу: номер
     оформляется отдельно, а первый слайд каждого беата получает класс
     beat-start — по нему тема даёт «прогрев экрана». */
  function kickerParts(text) {
    var m = /^\s*ШАГ\s+(\d+)\s*·\s*(.+)$/i.exec(text || '');
    return m ? { step: m[1], phase: m[2] } : { step: null, phase: text };
  }

  var seenBeat = null;

  spec.slides.forEach(function (sl) {
    var s = document.createElement('section');
    var inner = el('div', 'slide-inner');

    if (sl.type === 'title' || sl.type === 'closing') {
      s.className = 'slide-accent slide-' + sl.type;
      seenBeat = null; /* после разворота следующий беат снова «прогревается» */
      inner.appendChild(el('h1', 'accent-title', sl.title));
      if (sl.subtitle) inner.appendChild(el('p', 'accent-subtitle', sl.subtitle));
      if (sl.tag) inner.appendChild(el('p', 'accent-tag', sl.tag));
    } else {
      /* layout:'media' — видео/картинка во весь слайд: обвязка ужимается */
      s.className = 'slide-content' + (sl.layout ? ' slide-' + sl.layout : '');
      if (sl.kicker) {
        var kp = kickerParts(sl.kicker);
        var k = el('p', 'kicker');
        if (kp.step) {
          k.appendChild(el('span', 'kicker-step', 'ШАГ ' + kp.step));
          if (kp.step !== seenBeat) { s.classList.add('beat-start'); seenBeat = kp.step; }
          s.setAttribute('data-beat', kp.step);
        }
        k.appendChild(el('span', 'kicker-phase', kp.phase));
        inner.appendChild(k);
      }
      inner.appendChild(el('h2', 'heading', sl.heading));
      var wrap = el('div', 'blocks');
      (sl.blocks || []).forEach(function (b) {
        var render = BLOCKS[b.kind];
        if (render) {
          var node = render(b);
          /* fragment: блок ждёт клика — так открывается ответ на вопрос залу */
          if (b.fragment && node && node.classList) node.classList.add('fragment');
          wrap.appendChild(node);
        } else console.warn('deck.js: неизвестный тип блока', b.kind);
      });
      inner.appendChild(wrap);
    }

    /* Слайды, на которых живёт фоновая струя. Она общая на несколько слайдов
       подряд и не перезапускается на границе: зал видит продолжение той же
       картинки, а не новый дым. Кто именно её показывает — дело контента. */
    if (sl.smoke) s.setAttribute('data-smoke', '');

    s.appendChild(inner);
    if (sl.notes) s.appendChild(el('aside', 'notes', sl.notes));
    root.appendChild(s);
  });

  if (spec.meta && spec.meta.title) {
    document.title = spec.meta.title + (spec.meta.event ? ' — ' + spec.meta.event : '');
  }

  /* [платформа] Сквозная навигация: ненавязчивая ссылка «← назад к неделе»
     в углу поверх колоды. Адрес и подпись приходят из meta.back = { href,
     label } спеки; без meta.back ничего не рендерится. Служебный хром вне
     слайдов; из печати и ?print-pdf убирается стилем в base.css. */
  if (spec.meta && spec.meta.back && spec.meta.back.href) {
    var back = document.createElement('a');
    back.className = 'deck-back';
    back.href = spec.meta.back.href;
    back.textContent = '← ' + (spec.meta.back.label || 'Назад');
    document.body.appendChild(back);
  }

  Reveal.initialize({
    width: 1280,
    height: 720,
    margin: 0.04,
    hash: true,                       /* ссылка на конкретный слайд */
    center: false,
    transition: 'none',               /* переходы держим сами, ниже */
    controls: false,
    progress: true,
    slideNumber: true,
    /* null: iframe с data-preload прогреваются заранее (viewDistance), остальные — при показе.
       Кликер (PageUp/PageDown) работает из коробки: дефолтные клавиши reveal 5.x. */
    preloadIframes: null,
    /* Буллеты выходят фрагментами, а reveal по умолчанию печатает каждый
       фрагмент отдельной страницей: у «Турбулентности» это дало бы 14 лишних
       листов. Аварийный PDF должен быть один слайд — одна страница. */
    pdfSeparateFragments: false,
    plugins: [RevealNotes]
  });

  /* ── Непрерывность вместо перещёлкивания ───────────────────────────
     Экран не подменяет одну карточку другой, а перерисовывается: сверху
     вниз проходит луч кадровой развёртки, и содержимое встаёт за ним.
     Внутри одного беата шапка остаётся неподвижной и едет только начинка —
     зал видит продолжение сцены, а не новый слайд. */

  /* Эстетика электронно-лучевой трубки — луч развёртки, сканлайны, прогрев
     экрана — придумана под «Электрон» и там работает метафорой. В лекции про
     течения она означала бы ровно ничего, поэтому колода может от неё
     отказаться: meta.plain в slides.js. Тогда остаётся чистая типографика. */
  var PLAIN = !!(spec.meta && spec.meta.plain);
  if (PLAIN) document.documentElement.classList.add('deck-plain');

  var scan = document.createElement('div');
  scan.className = 'frame-scan';
  /* Луч живёт ВНУТРИ масштабируемого контейнера reveal, в тех же локальных
     1280×720, что и слайд. Иначе он едет в экранных пикселях, а маска
     раскрывается в масштабированных, и кромки расходятся. */
  (document.querySelector('.reveal .slides') || document.body).appendChild(scan);

  var prevIndex = -1;
  var SCAN_PERIOD = 2600;   /* совпадает с frame-scan-loop и phosphor в base.css */
  var SLIDE_H = 720;

  /* Затухание люминофора обязано совпадать с проходом луча: строка вспыхивает
     тогда, когда кромка развёртки доходит до её низа, а не в начале цикла.
     Фаза задаётся отрицательной задержкой — анимация стартует сразу в нужной
     точке. Координаты локальные (offsetTop внутри секции): луч живёт в том же
     пространстве 1280x720. */
  function phaseTitle(section) {
    var kids = section.querySelectorAll('.slide-inner > *');
    for (var i = 0; i < kids.length; i++) {
      var node = kids[i];
      var bottom = node.offsetTop + node.offsetHeight;
      var f = Math.max(0, Math.min(1, bottom / SLIDE_H));
      node.style.animationDelay = Math.round(f * SCAN_PERIOD - SCAN_PERIOD) + 'ms';
    }
  }

  function animateSlide(section, forward) {
    if (!section || PLAIN) return;   /* простая колода листается без затей */
    var prev = section.previousElementSibling;
    var beat = section.getAttribute('data-beat');
    var sameBeat = !!beat && !!prev && prev.getAttribute('data-beat') === beat
                   && !section.classList.contains('beat-start');

    section.setAttribute('data-nav', forward ? 'fwd' : 'back');
    section.classList.toggle('same-beat', sameBeat);

    /* перезапуск анимаций: класс снимается, форсируется reflow, ставится назад */
    section.classList.remove('anim');
    void section.offsetWidth;
    section.classList.add('anim');

    /* Луч бежит только на «крупных» переходах: внутри беата он мешал бы
       читать продолжение той же мысли. Бесконечная петля — только на первом
       слайде колоды. Внутри лекции есть другие слайды type:'title' — это
       развороты ради кегля, и живая развёртка там только мешает. */
    var isOpening = section.classList.contains('slide-title') && !section.previousElementSibling;
    scan.classList.remove('on', 'loop');
    void scan.offsetWidth;
    if (isOpening) {
      section.classList.add('scan-loop');
      scan.classList.add('loop');
      phaseTitle(section);
    } else if (!sameBeat) {
      scan.classList.add('on');
    }
  }

  Reveal.on('ready', function (e) {
    prevIndex = e.indexh;
    animateSlide(e.currentSlide, true);
  });

  Reveal.on('slidechanged', function (e) {
    var forward = e.indexh >= prevIndex;
    prevIndex = e.indexh;
    animateSlide(e.currentSlide, forward);
  });
})();
