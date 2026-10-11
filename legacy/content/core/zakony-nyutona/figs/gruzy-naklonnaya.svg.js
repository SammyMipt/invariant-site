/* Задача 2.5: наклонная плоскость с блоком, груз m1 на плоскости и
   висящий груз m2. Перерисовка tikz-рисунка из tasks.tex методички.
   Грузы — токены --fig-a и --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['gruzy-naklonnaya'] = String.raw`
<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Наклонная плоскость с блоком наверху: груз m1 на плоскости связан нитью с висящим грузом m2">
  <!-- наклонная плоскость -->
  <path d="M 60 290 L 340 115 L 340 290 Z" fill="currentColor" fill-opacity="0.07"
        stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>

  <!-- нить: вдоль плоскости и вертикально к грузу m2 -->
  <g stroke="currentColor" stroke-width="1.8">
    <line x1="116" y1="230" x2="327" y2="98"/>
    <line x1="361" y1="115" x2="361" y2="206"/>
  </g>

  <!-- блок на вершине -->
  <circle cx="340" cy="115" r="21" fill="currentColor" fill-opacity="0.15"
          stroke="currentColor" stroke-width="2.2"/>
  <circle cx="340" cy="115" r="3" fill="currentColor"/>

  <!-- груз m1 на плоскости -->
  <circle cx="116" cy="230" r="21.5" fill="var(--fig-a, #0f7a8a)" fill-opacity="0.3"
          stroke="currentColor" stroke-width="2.2"/>

  <!-- висящий груз m2 -->
  <rect x="347" y="206" width="28" height="28" fill="var(--fig-b, #c2571a)" fill-opacity="0.3"
        stroke="currentColor" stroke-width="2.2"/>

  <!-- угол наклона -->
  <path d="M 95 290 A 35 35 0 0 0 89.7 271.5" fill="none" stroke="currentColor" stroke-width="1.8"/>

  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" fill="currentColor">
    <g font-size="21">
      <text x="118" y="188">m<tspan font-size="14" dy="5">1</tspan></text>
      <text x="398" y="228">m<tspan font-size="14" dy="5">2</tspan></text>
    </g>
    <text x="104" y="284" font-size="19">&#945;</text>
  </g>
</svg>`;
