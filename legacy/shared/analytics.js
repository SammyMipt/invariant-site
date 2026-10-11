/* Аналитика, пока без счётчика: единый модуль-заглушка.

   Схема имён событий фиксируется с первого дня (REQUIREMENTS §7),
   счётчик (Яндекс.Метрика) подключится позже заменой тела track —
   вызовы по страницам уже расставлены и не поменяются.

   События публичного контура:
     page_view      просмотр страницы            { page }
     deck_open      открытие колоды              { deck }
     slide_reached  доехали до слайда            { deck, index }
     demo_open      открытие демки               { demo }
     demo_interact  первое взаимодействие        { demo }
     pdf_download   скачивание PDF               { file }                */

(function (global) {
  'use strict';

  var log = [];

  global.track = function (event, props) {
    var rec = { t: Date.now(), event: event, props: props || {} };
    log.push(rec);
    if (global.console && console.debug) console.debug('[track]', event, rec.props);
    /* сюда встанет ym(COUNTER_ID, 'reachGoal', event, props) */
  };

  global.__trackLog = log;

  /* Демкам достаточно подключить этот файл с ?demo=имя:
     demo_open уходит сразу, demo_interact — по первому действию. */
  var me = document.currentScript && document.currentScript.src;
  var m = me && /[?&]demo=([\w-]+)/.exec(me);
  if (m) {
    var demo = m[1], touched = false;
    global.track('demo_open', { demo: demo });
    ['pointerdown', 'keydown'].forEach(function (ev) {
      global.addEventListener(ev, function () {
        if (touched) return;
        touched = true;
        global.track('demo_interact', { demo: demo });
      }, { capture: true, passive: true });
    });
  }
})(window);
