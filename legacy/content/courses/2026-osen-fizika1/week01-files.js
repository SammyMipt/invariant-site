/* Манифест файлов недели 01: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/predmet-fiziki/chto-takoe-fizika.md.js',
    'content/core/predmet-fiziki/figs/karta-fiziki.svg.js',
    'content/core/predmet-fiziki/ris-karta-fiziki.md.js',
    'content/core/predmet-fiziki/fizika-dlya-ml.md.js',
    'content/core/predmet-fiziki/ustrojstvo-kursa.md.js',
    'content/core/razmernosti/zachem-izmereniya.md.js',
    'content/core/razmernosti/gradusy-i-radiany.md.js',
    'content/core/razmernosti/ris-radian.md.js',
    'content/core/razmernosti/metricheskaya-sistema.md.js',
    'content/core/razmernosti/ris-desyatichnye-chasy.md.js',
    'content/core/razmernosti/etalony.md.js',
    'content/core/razmernosti/si-cherez-konstanty.md.js',
    'content/core/razmernosti/ris-si-konstanty.md.js',
    'content/core/razmernosti/sgs.md.js',
    'content/core/razmernosti/plankovskie-edinicy.md.js',
    'content/core/razmernosti/princip-invariantnosti.md.js',
    'content/core/razmernosti/rost-obektivnosti.md.js',
    'content/core/razmernosti/proverka-po-razmernosti.md.js',
    'content/core/razmernosti/podobie.md.js',
    'content/core/razmernosti/obezrazmerivanie-priznakov.md.js',
    'content/core/razmernosti/formula-razmernosti.md.js',
    'content/core/razmernosti/formula-razmernosti-dokazatelstvo.md.js',
    'content/core/razmernosti/vopros-logarifm.md.js',
    'content/core/razmernosti/razmernaya-zavisimost.md.js',
    'content/core/razmernosti/primer-davlenie.md.js',
    'content/core/razmernosti/pi-teorema.md.js',
    'content/core/razmernosti/pi-teorema-dokazatelstvo.md.js',
    'content/core/razmernosti/primer-svobodnoe-padenie.md.js',
    'content/core/razmernosti/primer-trinity.md.js',
    'content/core/razmernosti/primer-vyazkoe-trenie.md.js',
    'content/core/razmernosti/demka-konstruktor-razmernostej.md.js',
    'content/core/razmernosti/demka-mayatnik.md.js',
    'content/core/razmernosti/vopros-01.md.js',
    'content/core/razmernosti/vopros-02.md.js',
    'content/core/razmernosti/vopros-03.md.js',
    'content/core/razmernosti/vopros-04.md.js',
    'content/core/razmernosti/vopros-05.md.js',
    'content/core/razmernosti/vopros-06.md.js',
    'content/core/razmernosti/vopros-07.md.js',
    'content/core/razmernosti/vopros-08.md.js',
    'content/core/razmernosti/vopros-09.md.js',
    'content/core/razmernosti/vopros-10.md.js',
    'content/core/razmernosti/zadacha-entropiya.md.js',
    'content/core/razmernosti/figs/radian.svg.js',
    'content/core/razmernosti/figs/desyatichnye-chasy.svg.js',
    'content/core/razmernosti/figs/si-konstanty.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/deformacii-gidrodinamika/chislo-rejnoldsa.md.js',
    'content/core/vtoroe-nachalo/opredelenie-entropii.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
