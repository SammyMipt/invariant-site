/* Обёртка к рисунку cepochka-a-v-x (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/cepochka-a-v-x.svg.js. */
window.BLOCK(String.raw`
---
id: ris-cepochka-a-v-x
type: рисунок
title: От ускорения к скорости и к координате
links: [ravnouskorennoe-dvizhenie, integrirovanie-skorosti, uskorenie]
fig: cepochka-a-v-x
---

Каждый график получается из предыдущего одним действием, площадью. Под горизонтальной прямой $a(t)$ лежит прямоугольник, и площадь растёт как $t$. Под наклонной $v(t)$ к прямоугольнику прибавляется треугольник, и площадь растёт как $t^2$. Отсюда и разница между $t$ в одной формуле и $t^2$ в другой.
`);
