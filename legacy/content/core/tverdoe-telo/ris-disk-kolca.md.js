/* НОВЫЙ РИСУНОК 05.10 по вычитке автора (замечание 10,
   briefs/lekciya06_vychitka_avtora_05-10.md; бриф briefs/vychitka06_pravki.md,
   «Первая половина»). Исходник sources/physics1_summary/inputs/05/pics/disk_kolca.tex,
   конвейер tikz. Буквы сверены с shar-i-disk (#kolco, #disk: R, r, dr, ось z);
   I_z = mR²/2 проверен квадратурой в шапке исходника; чисел на рисунке нет. */
window.BLOCK(String.raw`
---
id: ris-disk-kolca
type: рисунок
title: Диск из тонких колец
links: [shar-i-disk]
fig: disk-kolca
---

Диск разрезан на тонкие кольца вокруг оси $z$. Вся масса кольца радиуса $r$ и ширины $dr$ стоит на одном расстоянии $r$ от оси, поэтому кольцо даёт в момент инерции $r^2\,dm$, а его масса пропорциональна площади $2\pi r\,dr$. Кольца от $0$ до $R$ складываются в $\frac12\,mR^2$.
`);
