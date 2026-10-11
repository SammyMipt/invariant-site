/* Обёртка к рисунку izlom-i-peregib (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/izlom-i-peregib.svg.js. */
window.BLOCK(String.raw`
---
id: ris-izlom-i-peregib
type: рисунок
title: Где конструкция не работает
links: [normalnoe-i-tangencialnoe, traektoriya, radius-krivizny]
fig: izlom-i-peregib
---

Два места, в которых картинка «кривая есть набор окружностей» кончается. По обе стороны от перегиба окружности кривизны прилегают к кривой и лежат по разные её стороны; в самой точке перегиба кривизна проходит через ноль, радиус обращается в бесконечность, и окружности нет, хотя касательная есть. В изломе нет и касательной, а значит нет $\vec\tau$ и сажать оси не на что.
`);
