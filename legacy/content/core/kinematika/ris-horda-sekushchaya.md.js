/* Обёртка к рисунку horda-sekushchaya (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/horda-sekushchaya.svg.js. */
window.BLOCK(String.raw`
---
id: ris-horda-sekushchaya
type: рисунок
title: Хорда, секущая и касательная
links: [skorost, traektoriya]
fig: horda-sekushchaya
---

Точка $B$ пододвигается к $A$, хорда укорачивается, и секущая через две точки поворачивается, ложась на касательную в $A$. Направление отношения устанавливается, пока сама хорда исчезает: это и есть первый возврат языка.
`);
