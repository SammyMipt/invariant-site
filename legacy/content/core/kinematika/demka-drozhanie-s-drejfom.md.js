/* Обёртка к демке «Дрожание с дрейфом» (07.09, бриф briefs/demki_nedelya02.md, №6).
   Сама демка — platform/demos/drozhanie-s-drejfom.html. */
window.BLOCK(String.raw`
---
id: demka-drozhanie-s-drejfom
type: демка
title: Дрожание с дрейфом
links: [ravnouskorennoe-dvizhenie, integrirovanie-skorosti, uskorenie]
src: demos/drozhanie-s-drejfom.html
---

Ускорение качается по синусу, и среднее его по периоду равно нулю. Интуиция говорит, что тело останется на месте; три графика подряд показывают, что нет. Скорость $v = (a_0/\omega)(1-\cos\omega t)$ знака не меняет, поэтому координата уезжает прямой со средней скоростью $a_0/\omega$, и переключатель знака первого толчка решает, в какую сторону. Всё интегрируется честно, шагом мельче двухсотой периода.
`);
