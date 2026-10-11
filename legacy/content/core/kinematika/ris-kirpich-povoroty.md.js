/* Обёртка к рисунку kirpich-povoroty (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/kirpich-povoroty.svg.js. */
window.BLOCK(String.raw`
---
id: ris-kirpich-povoroty
type: рисунок
title: Два поворота в разном порядке
links: [uglovaya-skorost, itog-chetyre-vozvrata]
fig: kirpich-povoroty
---

Кирпич поворачивают на $90^\circ$ вокруг двух осей. В верхнем ряду сначала вокруг продольной, потом вокруг поперечной; в нижнем те же два поворота в обратном порядке. Отмеченная точка приходит в разные места, и конечные положения кирпича разные. Конечные повороты не перестановочны, поэтому вектором они не складываются.
`);
