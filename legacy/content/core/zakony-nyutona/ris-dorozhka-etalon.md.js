/* Обёртка к рисунку dorozhka-etalon (11.09, бриф briefs/risunki_nedelya03.md,
   №2). Исходник рисунка — tikz в sources/physics1_summary/inputs/02/pics/,
   оттуда его собирает platform/app/scripts/tikz-figs.mjs в
   figs/dorozhka-etalon.svg.js; печатная пара стоит в 01_2_mass_definition.tex.
   Числа те же, что в блоке massa-i-impuls и в демке dorozhka-etalon:
   m_2/m_1 = 0,5, Δv_1 = +0,30 м/с, Δv_2 = −0,60 м/с. */
window.BLOCK(String.raw`
---
id: ris-dorozhka-etalon
type: рисунок
title: Две тележки на воздушной дорожке
links: [massa-i-impuls, demka-dorozhka-etalon]
fig: dorozhka-etalon
---

Тележки отпущены из покоя, между ними сжатая пружина. После того как она распрямилась, тележки расходятся в противоположные стороны, и лёгкая набирает вдвое большую скорость, чем эталон: отношение $|\Delta\vec v_1|/|\Delta\vec v_2| = 0{,}30/0{,}60$ и даёт $m_2/m_1 = 0{,}5$. Какое бы взаимодействие ни стояло на месте пружины, магниты или удар, отношение выходит тем же.
`);
