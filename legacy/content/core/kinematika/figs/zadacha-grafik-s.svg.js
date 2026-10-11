/* График пути s(t) к решению задачи 1.2: перерисовка tikz-графика
   методички (solutions.tex). Параболические участки построены честно:
   квадратичные кривые Безье с опорной точкой на пересечении касательных
   дают в точности параболу. Оси — currentColor, кривая — --fig-a.
   ПРИВЕДЁН К КАНОНУ 06.09: viewBox 660×480, содержимое завёрнуто в группу
   с масштабом 1.34694, поэтому посчитанные координаты в файле те же, что были.
   Кегли заданы так, чтобы на экране давать канонические пиксели: буква 15,
   индекс 12, число и короткая метка 13. */
window.FIGS = window.FIGS || {};
window.FIGS['zadacha-grafik-s'] = String.raw`
<svg viewBox="0 0 660 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="График пути: параболы на разгоне и торможении, прямые на ровном ходе, полки на остановках, итог 6 метров">
<g transform="translate(-0 34.592) scale(1.34694)">
  <g fill="none" stroke="currentColor" stroke-width="1.188">
    <line x1="40" y1="265" x2="462" y2="265"/>
    <line x1="40" y1="265" x2="40" y2="28"/>
  </g>
  <g fill="currentColor">
    <path d="M 462 265 l -10 -4 v 8 z"/>
    <path d="M 40 28 l -4 10 h 8 z"/>
  </g>
  <!-- деления -->
  <g stroke="currentColor" stroke-width="0.965">
    <line x1="120" y1="261" x2="120" y2="269"/>
    <line x1="200" y1="261" x2="200" y2="269"/>
    <line x1="280" y1="261" x2="280" y2="269"/>
    <line x1="360" y1="261" x2="360" y2="269"/>
    <line x1="440" y1="261" x2="440" y2="269"/>
    <line x1="36" y1="228.3" x2="44" y2="228.3"/>
    <line x1="36" y1="191.7" x2="44" y2="191.7"/>
    <line x1="36" y1="155" x2="44" y2="155"/>
    <line x1="36" y1="118.3" x2="44" y2="118.3"/>
    <line x1="36" y1="81.7" x2="44" y2="81.7"/>
    <line x1="36" y1="45" x2="44" y2="45"/>
  </g>
  <g font-family="system-ui, sans-serif" font-size="9.65" fill="currentColor">
    <text x="120" y="285" text-anchor="middle">2</text>
    <text x="200" y="285" text-anchor="middle">4</text>
    <text x="280" y="285" text-anchor="middle">6</text>
    <text x="360" y="285" text-anchor="middle">8</text>
    <text x="440" y="285" text-anchor="middle">10</text>
    <text x="29" y="233" text-anchor="end">1</text>
    <text x="29" y="197" text-anchor="end">2</text>
    <text x="29" y="160" text-anchor="end">3</text>
    <text x="29" y="123" text-anchor="end">4</text>
    <text x="29" y="87" text-anchor="end">5</text>
    <text x="29" y="50" text-anchor="end">6</text>
  </g>
  <!-- график пути: параболы (Q) и прямые (L) -->
  <path d="M 40 265 Q 60 265 80 246.7 L 160 173.3 Q 180 155 200 155 L 280 155
           Q 300 155 320 136.7 L 400 63.3 Q 420 45 440 45"
        fill="none" stroke="var(--fig-a, #0f7a8a)" stroke-width="2.227"/>
  <g fill="var(--fig-a, #0f7a8a)">
    <circle cx="40" cy="265" r="2.67"/><circle cx="80" cy="246.7" r="2.67"/>
    <circle cx="160" cy="173.3" r="2.67"/><circle cx="200" cy="155" r="2.67"/>
    <circle cx="280" cy="155" r="2.67"/><circle cx="320" cy="136.7" r="2.67"/>
    <circle cx="400" cy="63.3" r="2.67"/><circle cx="440" cy="45" r="2.67"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="9.65" fill="currentColor">
    <text x="468" y="284"><tspan font-style="italic">t</tspan>, с</text>
    <text x="50" y="40"><tspan font-style="italic">s</tspan>, м</text>
  </g>

</g>
</svg>`;
