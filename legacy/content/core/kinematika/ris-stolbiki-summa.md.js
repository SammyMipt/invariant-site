/* Обёртка к рисунку stolbiki-summa (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/stolbiki-summa.svg.js. */
window.BLOCK(String.raw`
---
id: ris-stolbiki-summa
type: рисунок
title: Сумма столбиков садится на площадь
links: [integrirovanie-skorosti, put]
fig: stolbiki-summa
---

Скорость $v(t) = t^2$ на промежутке от нуля до двух секунд. Два широких столбика дают $2{,}5$ м, восемь узких дают $2{,}656$ м, а точное значение интеграла равно $8/3 \approx 2{,}667$ м. При каждом удвоении числа столбиков ошибка падает вчетверо.
`);
