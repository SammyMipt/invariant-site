/* Обёртка к рисунку poezd-chashka (11.09, бриф briefs/risunki_nedelya03.md,
   рисунок 1, билдер Р4). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/02/pics/poezd_chashka.tex, оттуда его
   собирает platform/app/scripts/tikz-figs.mjs в figs/poezd-chashka.svg.js.
   Числа те же, что в демке poezd-s-chashkoj: 20 м/с и 2 м/с². */
window.BLOCK(String.raw`
---
id: ris-poezd-chashka
type: рисунок
title: Чашка в вагоне и с платформы
links: [ot-kinematiki-k-dinamike, pervyj-zakon, sistema-otscheta]
fig: poezd-chashka
---

Одно торможение, два тела отсчёта. В вагоне стены и стол стоят, окно зашторено, и чашка трогается к краю стола без видимой причины. С платформы чашка как шла со своими $20$ м/с, так и идёт, а вагон тормозит с ускорением $2$ м/с², и стол уезжает из-под неё. Причина у движения есть только во втором описании.
`);
