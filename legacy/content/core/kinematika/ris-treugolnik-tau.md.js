/* Обёртка к рисунку treugolnik-tau (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/treugolnik-tau.svg.js. */
window.BLOCK(String.raw`
---
id: ris-treugolnik-tau
type: рисунок
title: Равнобедренный треугольник из двух $\vec\tau$
links: [normalnoe-i-tangencialnoe, radius-krivizny]
fig: treugolnik-tau
---

Два единичных касательных вектора отложены из одной точки под малым углом $d\alpha$, и основанием треугольника оказывается приращение $d\vec\tau$. Углы при основании равны $90^\circ - d\alpha/2$, поэтому при $d\alpha \to 0$ они становятся прямыми, и приращение встаёт поперёк $\vec\tau$. Длина основания есть хорда единичной окружности, то есть $|d\vec\tau| = d\alpha$.
`);
