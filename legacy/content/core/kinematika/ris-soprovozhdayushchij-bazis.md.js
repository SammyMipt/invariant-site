/* Обёртка к рисунку soprovozhdayushchij-bazis (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/soprovozhdayushchij-bazis.svg.js. */
window.BLOCK(String.raw`
---
id: ris-soprovozhdayushchij-bazis
type: рисунок
title: Оси, посаженные на точку
links: [normalnoe-i-tangencialnoe, radius-krivizny]
fig: soprovozhdayushchij-bazis
---

В каждой точке кривой построена своя пара единичных векторов. Касательный $\vec\tau$ идёт вдоль траектории, нормаль $\vec n$ поперёк, к центру кривизны. Между двумя положениями пара повернулась почти на прямой угол. Такие оси сели на точку и поехали вместе с ней, и это пятая договорённость главы.
`);
