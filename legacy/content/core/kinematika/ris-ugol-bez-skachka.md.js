/* Обёртка к рисунку ugol-bez-skachka (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/ugol-bez-skachka.svg.js. */
window.BLOCK(String.raw`
---
id: ris-ugol-bez-skachka
type: рисунок
title: Угол, в котором машина останавливается
links: [skorost, traektoriya]
fig: ugol-bez-skachka
---

Здесь машина доходит до угла, останавливается и уходит на восток. Скачка скорости нет, скорость в углу равна нулю, направления у неё не осталось, и касательной в этой точке нет. Это другой случай, чем излом без остановки в [[traektoriya]].
`);
