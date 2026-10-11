/* НОВЫЙ РИСУНОК 05.10 по вычитке автора (замечание 10,
   briefs/lekciya06_vychitka_avtora_05-10.md; бриф briefs/vychitka06_pravki.md,
   «Первая половина»). Исходник sources/physics1_summary/inputs/05/pics/perpendikulyarnye_osi.tex,
   конвейер tikz. Буквы сверены с moment-inercii-tochki (#ploskie: плоскость xy,
   оси x, y, z через O, dm, r как в J_O); пластина неправильной формы, правило
   проверено численно на ней же в шапке исходника; чисел на рисунке нет. */
window.BLOCK(String.raw`
---
id: ris-perpendikulyarnye-osi
type: рисунок
title: Перпендикулярные оси у пластины
links: [moment-inercii-tochki]
fig: perpendikulyarnye-osi
---

Все точки пластины лежат в плоскости $xy$, и у элемента $dm$ координата $z$ равна нулю. Поэтому от оси $x$ он отстоит на $|y|$, от оси $y$ на $|x|$, а от оси $z$ на $r$, и $r^2 = x^2 + y^2$. Отсюда $I_x + I_y = I_z$, если все три оси проходят через одну точку $O$.
`);
