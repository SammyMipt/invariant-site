/* Адаптер «блоки ядра -> спека колоды». Подключается после slides.js
   и ПЕРЕД deck.js: проходит window.DECK и разворачивает ссылки на блоки
   в конкретные значения, которые понимает вендоренный deck.js.

   Слайд не копирует контент, а ссылается:
     { kind:'formula', ref:'pi-teorema#statement' }   тело формулы из блока
     { kind:'derive', steps:[{ ref:'id#имя', note }]} строки вывода из блоков
     { kind:'image',  block:'ris-radian' }            SVG и подпись из блока-рисунка
     { kind:'demo',   block:'demka-mayatnik' }        адрес демки из блока-демки
     { kind:'demo',   block:'…', query:'rezhim=…' }   та же демка в нужном режиме

   Так у колоды и главы один источник: правится блок — меняются обе. */

(function () {
  'use strict';

  var spec = window.DECK;
  if (!spec || !window.Blocks) return;

  function plain(tokens) {
    /* первый абзац тела блока простым текстом — дежурная подпись */
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i].kind === 'p') {
        return tokens[i].text.replace(/\$[^$]*\$/g, '').replace(/\*\*?/g, '').trim();
      }
    }
    return '';
  }

  function resolve(b) {
    if (b.ref && (b.kind === 'formula' || !b.kind)) {
      b.tex = window.Blocks.formula(b.ref);
    }
    if (b.kind === 'derive' && b.steps) {
      b.steps.forEach(function (st) {
        if (st.ref) st.tex = window.Blocks.formula(st.ref);
      });
    }
    if (b.block) {
      var blk = window.Blocks.get(b.block);
      if (!blk) { console.error('deck-blocks: нет блока', b.block); return; }
      if (b.kind === 'image' && blk.fig) {
        /* SVG ядра инлайнится (kind: figure в deck.js), растр остаётся <img> */
        if (window.FIGS && window.FIGS[blk.fig]) {
          b.kind = 'figure';
          b.fig = blk.fig;
        } else {
          b.src = (window.PLATFORM_BASE || '') + blk.fig;
        }
        if (b.caption == null) b.caption = plain(blk.tokens);
      }
      if (b.kind === 'demo' && blk.src) {
        b.src = (window.PLATFORM_BASE || '') + blk.src +
          (b.query ? (blk.src.indexOf('?') < 0 ? '?' : '&') + b.query : '');
      }
    }
    /* Медиа платформы (assets/media/…) адресуется от её корня: базу
       подставляет рендерер, и офлайн-колода берёт файл с диска, а не с
       зеркала сайта, как было бы с абсолютным путём. */
    if (b.src && b.src.indexOf('assets/') === 0) {
      b.src = (window.PLATFORM_BASE || '') + b.src;
    }
    if (b.poster && b.poster.indexOf('assets/') === 0) {
      b.poster = (window.PLATFORM_BASE || '') + b.poster;
    }
    if (b.blocks) b.blocks.forEach(resolve);
  }

  spec.slides.forEach(function (sl) {
    (sl.blocks || []).forEach(resolve);
  });
})();
