/* Обёртка к рисунку parabola-krivizna (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/parabola-krivizna.svg.js. */
window.BLOCK(String.raw`
---
id: ris-parabola-krivizna
type: рисунок
title: Две окружности кривизны на параболе броска
links: [radius-krivizny, normalnoe-i-tangencialnoe, ravnouskorennoe-dvizhenie]
fig: parabola-krivizna
---

В вершине скорость горизонтальна, всё ускорение поперечно, и радиус кривизны равен $5{,}1$ м. В наклонной точке $\vec g$ разложен вдоль скорости и поперёк неё, поперечная составляющая меньше, и радиус вырастает до $6{,}8$ м. Здесь два маршрута счёта кривизны сходятся в одной точке.
`);
