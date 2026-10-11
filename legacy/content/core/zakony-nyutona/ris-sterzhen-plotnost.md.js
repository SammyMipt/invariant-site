/* Обёртка к рисунку sterzhen-plotnost (11.09, бриф
   briefs/risunki_nedelya03.md, №6). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/02/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/sterzhen-plotnost.svg.js;
   печатная пара стоит в 03_3_mass_center.tex. Числа из блока
   centr-mass-plotnost: λ = λ₀x/L, X = 2L/3 против L/2; доля массы в правой
   половине посчитана: ∫ от L/2 до L λ dx = 3λ₀L/8 = 3M/4. Однородный
   стержень на рисунке взят той же массы, плотность λ₀/2. */
window.BLOCK(String.raw`
---
id: ris-sterzhen-plotnost
type: рисунок
title: Стержень с растущей плотностью
links: [centr-mass-plotnost, primer-sterzhen]
fig: sterzhen-plotnost
---

Плотность растёт вдоль стержня от нуля, и правая половина несёт три четверти массы, поэтому центр масс уходит от середины к тяжёлому концу на шестую часть длины. У однородного стержня той же массы и длины, показанного ниже бледнее, он стоит ровно посередине.
`);
