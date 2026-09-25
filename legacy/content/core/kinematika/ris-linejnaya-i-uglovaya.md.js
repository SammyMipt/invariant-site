/* Обёртка к рисунку linejnaya-i-uglovaya (06.09). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/01/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/linejnaya-i-uglovaya.svg.js. */
window.BLOCK(String.raw`
---
id: ris-linejnaya-i-uglovaya
type: рисунок
title: Хорда и дуга при малом угле
links: [uglovaya-skorost, skorost]
fig: linejnaya-i-uglovaya
---

На левой окружности угол $\Delta\varphi$ взят большим, и хорда $2R\sin(\Delta\varphi/2)$ заметно короче дуги $R\Delta\varphi$. На правой тот же угол мал, и они сливаются. Отсюда и берётся связь $v = \omega R$, потому что в пределе отношение хорды к дуге стремится к единице.
`);
