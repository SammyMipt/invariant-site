/* Обёртка к рисунку sfericheskij-treugolnik (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/sfericheskij-treugolnik.svg.js.
   ПРАВКА 06.09: рисунок разделён надвое, нижняя пара панелей уехала в
   ris-krivizna-prostranstva, и подпись сокращена до верхней пары. */
window.BLOCK(String.raw`
---
id: ris-sfericheskij-treugolnik
type: рисунок
title: Треугольник на сфере против плоского
links: [prostranstvo-i-vremya, ris-krivizna-prostranstva, parallaks-i-zatmenie]
fig: sfericheskij-treugolnik
---

Треугольник из четверти экватора и двух меридианов даёт сумму углов $270^\circ$ вместо $180^\circ$, и все три его угла прямые. На проекции прямой угол прямым не выглядит, поэтому квадратики поставлены по касательным, посчитанным в трёх измерениях. Справа тот же вопрос на плоскости, где сумма равна $180^\circ$.
`);
