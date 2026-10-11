/* Обёртка к рисунку snaryad-parabola (11.09, briefs/risunki_nedelya03.md
   №7). Исходник рисунка — tikz в sources/physics1_summary/inputs/02/pics/,
   оттуда его собирает platform/app/scripts/tikz-figs.mjs в
   figs/snaryad-parabola.svg.js. Парабола та же, что в radius-krivizny;
   осколки посчитаны так, что сумма их импульсов равна импульсу снаряда
   (числа в комментарии tikz). */
window.BLOCK(String.raw`
---
id: ris-snaryad-parabola
type: рисунок
title: Осколки и центр масс на параболе
links: [teorema-o-centre-mass, ravnouskorennoe-dvizhenie]
fig: snaryad-parabola
---

Снаряд разорвался в вершине на два осколка: лёгкий отброшен назад, тяжёлый ушёл вперёд, и сумма их импульсов равна импульсу снаряда. Точки поставлены через равные промежутки времени. В каждый момент центр масс осколков лежит на отрезке между ними, вдвое ближе к тяжёлому, и идёт по той же параболе, по которой летел снаряд: внешняя сила у системы одна, тяжесть, и разрыв её не изменил.
`);
