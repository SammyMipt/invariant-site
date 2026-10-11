/* НОВЫЙ РИСУНОК 05.10 по вычитке автора (замечание 7,
   briefs/lekciya06_vychitka_avtora_05-10.md; бриф briefs/vychitka06_pravki.md,
   «Первая половина»). Исходник sources/physics1_summary/inputs/05/pics/razlozhenie_k_osi.tex,
   конвейер tikz. Буквы сверены с uravnenie-momentov-os (#razlozhenie,
   #proekciya): в брифе r_∥, в тексте блока r_z, взято из текста. Проекция
   (r × v)·e_z = (r_⊥ × v)·e_z и её независимость от сдвига полюса посчитаны в
   шапке исходника; чисел на рисунке нет. */
window.BLOCK(String.raw`
---
id: ris-razlozhenie-k-osi
type: рисунок
title: Радиус-вектор вдоль оси и поперёк неё
links: [uravnenie-momentov-os, vrashchenie-vokrug-osi]
fig: razlozhenie-k-osi
---

Точка тела идёт по окружности вокруг оси $z$, полюс $O$ стоит на оси. Радиус-вектор точки раскладывается на $\vec r_z$ вдоль оси и $\vec r_\perp$ от оси к точке; скорость $\vec v$ лежит поперёк оси и перпендикулярна $\vec r_\perp$, поэтому $\vec v_z = 0$. На ось проецируется только $\vec r_\perp\times\vec v$, и сдвиг полюса вдоль оси, который меняет одно $\vec r_z$, проекцию момента импульса не меняет.
`);
