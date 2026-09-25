/* Обёртка к рисунку traektoriya-izlom-razryv (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/traektoriya-izlom-razryv.svg.js. */
window.BLOCK(String.raw`
---
id: ris-traektoriya-izlom-razryv
type: рисунок
title: Два запрещённых случая: разрыв и излом
links: [traektoriya, skorost]
fig: traektoriya-izlom-razryv
---

Оба требования к закону движения видны там, где они нарушены. Слева линия обрывается и продолжается в стороне, а такой прыжок означал бы телепортацию. Справа машина проходит угол не сбавляя хода, и скорость мгновенно меняется с $(0;\ v)$ на $(v;\ 0)$. При $v = 10$ м/с это $10\sqrt{2} \approx 14$ м/с за нулевое время, поэтому производной у закона движения в этой точке нет.
`);
