/* НОВЫЙ РИСУНОК 05.10 по вычитке автора (замечание 10,
   briefs/lekciya06_vychitka_avtora_05-10.md; бриф briefs/vychitka06_pravki.md,
   «Первая половина»). Исходник sources/physics1_summary/inputs/05/pics/sterzhen_dx.tex,
   конвейер tikz. Буквы сверены с moment-inercii-sterzhnya (l, x от середины,
   dx, сдвиг оси на l/2); интегралы 1/12 и 1/3 проверены квадратурой в шапке
   исходника; чисел на рисунке нет. */
window.BLOCK(String.raw`
---
id: ris-sterzhen-dx
type: рисунок
title: Стержень и две оси
links: [moment-inercii-sterzhnya, teorema-gyujgensa-shtejnera]
fig: sterzhen-dx
---

Кусок стержня длины $dx$ отстоит от оси через середину на $x$ и даёт в момент инерции $x^2\,dm$; сумма таких вкладов от $-l/2$ до $l/2$ равна $ml^2/12$. Ось через конец сдвинута от средней на $l/2$, и вокруг неё момент инерции вчетверо больше, $ml^2/3$: это даёт и тот же интеграл в пределах от $0$ до $l$, и перенос оси.
`);
