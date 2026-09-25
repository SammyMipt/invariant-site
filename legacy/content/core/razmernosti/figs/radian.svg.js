/* Радиан: длина дуги равна радиусу — перерисовка tikz-иллюстрации
   конспекта (circle_angle_illustration). Контуры — currentColor,
   акценты — токены --fig-a/--fig-b: тема красит рисунок сама. */
window.FIGS = window.FIGS || {};
window.FIGS['radian'] = String.raw`
<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Угол в радианах: отношение дуги к радиусу">
  <g fill="none" stroke="currentColor" stroke-width="2.5">
    <circle cx="150" cy="160" r="120"/>
    <line x1="150" y1="160" x2="270" y2="160"/>
    <line x1="150" y1="160" x2="234.9" y2="75.1"/>
  </g>
  <path d="M 270 160 A 120 120 0 0 0 234.9 75.1" fill="none"
        stroke="var(--fig-a, #0f7a8a)" stroke-width="4" stroke-linecap="round"/>
  <path d="M 194 160 A 44 44 0 0 0 181.1 128.9" fill="none"
        stroke="var(--fig-b, #c2571a)" stroke-width="3" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="24">
    <text x="208" y="184" fill="currentColor">r</text>
    <text x="276" y="112" fill="var(--fig-a, #0f7a8a)">s</text>
    <text x="200" y="144" fill="var(--fig-b, #c2571a)">&#952;</text>
  </g>
</svg>`;
