/* Обёртка к рисунку dva-tela-centr-mass (11.09, бриф
   briefs/risunki_nedelya03.md, №5; имя длиннее, чем у соседей, чтобы не
   путать с dva-tela из задачи двух тел). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/02/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/dva-tela-centr-mass.svg.js;
   печатная пара стоит в 03_3_mass_center.tex. Числа из блока centr-mass:
   1 кг и 3 кг на 1 м, центр масс в 0,75 м от лёгкой точки; простое среднее
   дало бы 0,5 м, ошибка 0,25 м. */
window.BLOCK(String.raw`
---
id: ris-dva-tela-centr-mass
type: рисунок
title: Центр масс двух точек
links: [centr-mass]
fig: dva-tela-centr-mass
---

Центр масс двух точек лежит на отрезке между ними и делит его обратно пропорционально массам: плечо лёгкой втрое длиннее плеча тяжёлой, так что $1\cdot0{,}75 = 3\cdot0{,}25$. Простое среднее поставило бы точку в середину отрезка и ошиблось бы на четверть метра.
`);
