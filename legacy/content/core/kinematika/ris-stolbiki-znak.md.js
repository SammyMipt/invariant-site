/* Обёртка к рисунку stolbiki-znak (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/stolbiki-znak.svg.js. */
window.BLOCK(String.raw`
---
id: ris-stolbiki-znak
type: рисунок
title: Площадь со знаком и площадь по модулю
links: [integrirovanie-skorosti, put]
fig: stolbiki-znak
---

Слева проекция скорости $v_x = 3 - 2t$ меняет знак, столбики уходят под ось и входят в перемещение со знаком минус: за три секунды точка набирает $2{,}25$ м вперёд и столько же теряет, перемещение равно нулю. Справа те же столбики сложены по модулю и дают путь $4{,}5$ м.
`);
