/* График скорости v(t) к задаче 1.2: перерисовка tikz-графика методички
   (tasks.tex) один в один — трапеции разгона, ровного хода и торможения.
   Оси — currentColor, кривая — токен --fig-a.
   ПРИВЕДЁН К КАНОНУ 06.09: viewBox 660×320, содержимое завёрнуто в группу
   с масштабом 1.34694, поэтому посчитанные координаты в файле те же, что были.
   Кегли заданы так, чтобы на экране давать канонические пиксели: буква 15,
   индекс 12, число и короткая метка 13. */
window.FIGS = window.FIGS || {};
window.FIGS['zadacha-grafik-v'] = String.raw`
<svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Кусочно-линейный график скорости: разгон до 1 м/с, ровный ход, торможение, остановка и повтор">
<g transform="translate(-0 8.469) scale(1.34694)">
  <g fill="none" stroke="currentColor" stroke-width="1.188">
    <line x1="40" y1="180" x2="462" y2="180"/>
    <line x1="40" y1="180" x2="40" y2="30"/>
  </g>
  <g fill="currentColor">
    <path d="M 462 180 l -10 -4 v 8 z"/>
    <path d="M 40 30 l -4 10 h 8 z"/>
  </g>
  <!-- деления -->
  <g stroke="currentColor" stroke-width="0.965">
    <line x1="120" y1="176" x2="120" y2="184"/>
    <line x1="200" y1="176" x2="200" y2="184"/>
    <line x1="280" y1="176" x2="280" y2="184"/>
    <line x1="360" y1="176" x2="360" y2="184"/>
    <line x1="440" y1="176" x2="440" y2="184"/>
    <line x1="36" y1="125" x2="44" y2="125"/>
    <line x1="36" y1="70" x2="44" y2="70"/>
  </g>
  <g font-family="system-ui, sans-serif" font-size="9.65" fill="currentColor">
    <text x="120" y="200" text-anchor="middle">2</text>
    <text x="200" y="200" text-anchor="middle">4</text>
    <text x="280" y="200" text-anchor="middle">6</text>
    <text x="360" y="200" text-anchor="middle">8</text>
    <text x="440" y="200" text-anchor="middle">10</text>
    <text x="29" y="130" text-anchor="end">1</text>
    <text x="29" y="75" text-anchor="end">2</text>
  </g>
  <!-- график скорости -->
  <polyline points="40,180 80,125 160,125 200,180 280,180 320,125 400,125 440,180"
            fill="none" stroke="var(--fig-a, #0f7a8a)" stroke-width="2.227"/>
  <g fill="var(--fig-a, #0f7a8a)">
    <circle cx="40" cy="180" r="2.67"/><circle cx="80" cy="125" r="2.67"/>
    <circle cx="160" cy="125" r="2.67"/><circle cx="200" cy="180" r="2.67"/>
    <circle cx="280" cy="180" r="2.67"/><circle cx="320" cy="125" r="2.67"/>
    <circle cx="400" cy="125" r="2.67"/><circle cx="440" cy="180" r="2.67"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="9.65" fill="currentColor">
    <text x="468" y="199"><tspan font-style="italic">t</tspan>, с</text>
    <text x="50" y="42"><tspan font-style="italic">v</tspan>, м/с</text>
  </g>

</g>
</svg>`;
