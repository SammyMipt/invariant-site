/* Обёртка к рисунку samolet-dva-voprosa (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/samolet-dva-voprosa.svg.js. */
window.BLOCK(String.raw`
---
id: ris-samolet-dva-voprosa
type: рисунок
title: Один самолёт в двух вопросах
links: [materialnaya-tochka, otnositelnost-dvizheniya]
fig: samolet-dva-voprosa
---

Границу модели назначает вопрос, а не тело. Слева спрашивают, во сколько машина сядет, и она сжимается в точку. В ответ входят только путь и скорость, размах крыла в него не вошёл. Справа спрашивают, почему она летит, и точка не годится совсем, потому что подъёмную силу рождает форма крыла.
`);
