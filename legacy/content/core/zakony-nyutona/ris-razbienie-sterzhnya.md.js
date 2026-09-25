/* Обёртка к рисунку razbienie-sterzhnya. Исходник рисунка — tikz в
   sources/physics1_summary/inputs/02/pics/razbienie_sterzhnya.tex, оттуда
   его собирает platform/app/scripts/tikz-figs.mjs в
   figs/razbienie-sterzhnya.svg.js.
   ПЕРЕРИСОВАН 11.09 по канону (briefs/risunki_nedelya03.md, 0б). Подпись
   приведена к тексту блока primer-sterzhen: x_i — координата центра i-го
   отрезка, Δx — его ширина. Прежняя подпись говорила об отрезке от x_i до
   x_i + Δx, а высота столбика на рисунке всегда бралась в центре. */
window.BLOCK(String.raw`
---
id: ris-razbienie-sterzhnya
type: рисунок
title: Разбиение стержня
links: [primer-sterzhen]
fig: razbienie-sterzhnya
---

Разбиение стержня: вклад отрезка шириной $\Delta x$ с центром в точке $x_i$ равен $x_i \Delta x$, площади столбика высотой $x_i$; при $\Delta x \to 0$ ступенчатая фигура превращается в треугольник под прямой $y = x$, и сумма переходит в интеграл.
`);
