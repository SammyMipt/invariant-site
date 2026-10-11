/* Обёртка к рисунку sfericheskie-koordinaty (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/sfericheskie-koordinaty.svg.js. */
window.BLOCK(String.raw`
---
id: ris-sfericheskie-koordinaty
type: рисунок
title: Сферические и цилиндрические координаты
links: [sistema-otscheta]
fig: sfericheskie-koordinaty
---

Слева точка на сфере задана расстоянием $r$ до начала, углом $\theta$ от оси $z$ и углом $\varphi$ в плоскости $xy$. Справа та же точка задана расстоянием $\rho$ до оси $z$, тем же углом $\varphi$ и высотой $z$. Полярные координаты получаются из цилиндрических, если выбросить $z$.
`);
