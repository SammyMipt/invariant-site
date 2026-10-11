/* Обёртка к рисунку odno-dva-tri (11.09, рисунок №10 списка
   briefs/risunki_nedelya03.md). Исходник рисунка — tikz в
   sources/physics1_summary/inputs/02/pics/, оттуда его собирает
   platform/app/scripts/tikz-figs.mjs в figs/odno-dva-tri.svg.js.
   Печатная пара стоит в inputs/02/01_4_system_of_point.tex после
   абзаца «Подведём счёт первого акта». */
window.BLOCK(String.raw`
---
id: ris-odno-dva-tri
type: рисунок
title: Три закона из одного предположения
links: [sistema-tochek, massa-i-impuls, vtoroj-zakon, tretij-zakon, pervyj-zakon, princip-superpozicii]
fig: odno-dva-tri
---

Всё, что стоит под предположением об изолированной паре, из него и получено: масса как коэффициент в его записи, сила как имя производной импульса, второй закон как та же запись в роли закона, третий как следствие самого предположения. Первый закон в этот вывод не входит. Он принят, и принят не о телах, а о том, откуда смотреть, поэтому и стоит в стороне. Суперпозиция принята сверх счёта: трём законам она не нужна, а без неё не сложить силы в системе многих точек.
`);
