/* График ускорения a(t) к решению задачи 1.2: перерисовка tikz-графика
   методички (solutions.tex) — ступеньки +1, 0, −1 м/с².
   Оси — currentColor, кривая — --fig-b.
   ПРИВЕДЁН К КАНОНУ 06.09: viewBox 660×400, содержимое завёрнуто в группу
   с масштабом 1.34694, поэтому посчитанные координаты в файле те же, что были.
   Кегли заданы так, чтобы на экране давать канонические пиксели: буква 15,
   индекс 12, число и короткая метка 13. */
window.FIGS = window.FIGS || {};
window.FIGS['zadacha-grafik-a'] = String.raw`
<svg viewBox="0 0 660 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ступенчатый график ускорения: плюс один на разгонах, ноль на ровном ходе, минус один на торможениях">
<g transform="translate(-0 31.633) scale(1.34694)">
  <g fill="none" stroke="currentColor" stroke-width="1.188">
    <line x1="40" y1="120" x2="462" y2="120"/>
    <line x1="40" y1="215" x2="40" y2="28"/>
  </g>
  <g fill="currentColor">
    <path d="M 462 120 l -10 -4 v 8 z"/>
    <path d="M 40 28 l -4 10 h 8 z"/>
  </g>
  <!-- деления -->
  <g stroke="currentColor" stroke-width="0.965">
    <line x1="120" y1="116" x2="120" y2="124"/>
    <line x1="200" y1="116" x2="200" y2="124"/>
    <line x1="280" y1="116" x2="280" y2="124"/>
    <line x1="360" y1="116" x2="360" y2="124"/>
    <line x1="440" y1="116" x2="440" y2="124"/>
    <line x1="36" y1="60" x2="44" y2="60"/>
    <line x1="36" y1="180" x2="44" y2="180"/>
  </g>
  <g font-family="system-ui, sans-serif" font-size="9.65" fill="currentColor">
    <text x="114" y="138" text-anchor="middle">2</text>
    <text x="194" y="138" text-anchor="middle">4</text>
    <text x="286" y="138" text-anchor="middle">6</text>
    <text x="360" y="138" text-anchor="middle">8</text>
    <text x="446" y="138" text-anchor="middle">10</text>
    <text x="29" y="65" text-anchor="end">1</text>
    <text x="29" y="185" text-anchor="end">&#8722;1</text>
  </g>
  <!-- график ускорения: ступеньки -->
  <path d="M 40 60 L 80 60 L 80 120 L 160 120 L 160 180 L 200 180 L 200 120
           L 280 120 L 280 60 L 320 60 L 320 120 L 400 120 L 400 180 L 440 180"
        fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.227"/>
  <g fill="var(--fig-b, #c2571a)">
    <circle cx="40" cy="60" r="2.52"/><circle cx="80" cy="60" r="2.52"/>
    <circle cx="80" cy="120" r="2.52"/><circle cx="160" cy="120" r="2.52"/>
    <circle cx="160" cy="180" r="2.52"/><circle cx="200" cy="180" r="2.52"/>
    <circle cx="200" cy="120" r="2.52"/><circle cx="280" cy="120" r="2.52"/>
    <circle cx="280" cy="60" r="2.52"/><circle cx="320" cy="60" r="2.52"/>
    <circle cx="320" cy="120" r="2.52"/><circle cx="400" cy="120" r="2.52"/>
    <circle cx="400" cy="180" r="2.52"/><circle cx="440" cy="180" r="2.52"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="9.65" fill="currentColor">
    <text x="468" y="139"><tspan font-style="italic">t</tspan>, с</text>
    <text x="50" y="40"><tspan font-style="italic">a</tspan>, м/с&#178;</text>
  </g>

</g>
</svg>`;
