/* Обёртка к рисунку dva-tela. Исходник рисунка — tikz в
   sources/physics1_summary/inputs/02/pics/dva_tela.tex, оттуда его
   собирает platform/app/scripts/tikz-figs.mjs в figs/dva-tela.svg.js.
   ПЕРЕРИСОВАН 11.09 по канону (briefs/risunki_nedelya03.md, 0б): силы
   отнесены от линии r, чтобы её остриё у второй точки было видно; точки
   подписаны массами m_1 и m_2, как в тексте блока. */
window.BLOCK(String.raw`
---
id: ris-dva-tela
type: рисунок
title: Задача двух тел
links: [zadacha-dvuh-tel]
fig: dva-tela
---

Задача двух тел: положения точек задают радиус-векторы $\vec{r}_1$ и $\vec{r}_2$, их разность $\vec{r} = \vec{r}_2 - \vec{r}_1$ соединяет точки; сила $\vec{F}_{12}$ приложена к первой точке, парная ей $\vec{F}_{21}$ — ко второй.
`);
