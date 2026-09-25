/* Преобразование масштаба к доказательству формулы размерностей: одно и то же
   Г-образное тело до и после умножения всех линейных размеров на k = 1,5.
   Форма сохраняется, набор размеров A = (a1, a2, a3) переходит в kA.
   Аксонометрия: (x, y, z) -> (x + 0,50y, -z - 0,42y), обе фигуры на одной
   базовой линии. Грани — currentColor с прозрачностью, три размерных ребра —
   токен --fig-a, стрелка масштабирования — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['masshtabirovanie'] = String.raw`
<svg viewBox="38 12 607 302" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Тело с тремя разными линейными размерами a1, a2, a3 и его копия, увеличенная в k раз: форма та же, каждый размер умножен на k">
  <defs>
    <marker id="fig-arr-rz-msh" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
  </defs>

  <!-- тело с размерами a1, a2, a3 -->
  <g stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" fill="currentColor">
    <path d="M 95 187 L 195 187 L 195 154.2 L 140 154.2 L 140 109 L 95 109 Z" fill-opacity="0.07"/>
    <path d="M 195 187 L 222.5 163.9 L 222.5 131.1 L 195 154.2 Z" fill-opacity="0.04"/>
    <path d="M 140 154.2 L 195 154.2 L 222.5 131.1 L 167.5 131.1 Z" fill-opacity="0.16"/>
    <path d="M 140 154.2 L 140 109 L 167.5 85.9 L 167.5 131.1 Z" fill-opacity="0.04"/>
    <path d="M 95 109 L 140 109 L 167.5 85.9 L 122.5 85.9 Z" fill-opacity="0.16"/>
  </g>
  <path d="M 95 109 L 95 187 L 195 187 L 222.5 163.9" fill="none"
        stroke="var(--fig-a, #0f7a8a)" stroke-width="4"
        stroke-linecap="round" stroke-linejoin="round"/>

  <!-- то же тело, все размеры умножены на k = 1,5 -->
  <g stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" fill="currentColor">
    <path d="M 400 187 L 550 187 L 550 137.8 L 467.5 137.8 L 467.5 70 L 400 70 Z" fill-opacity="0.07"/>
    <path d="M 550 187 L 591.25 152.35 L 591.25 103.15 L 550 137.8 Z" fill-opacity="0.04"/>
    <path d="M 467.5 137.8 L 550 137.8 L 591.25 103.15 L 508.75 103.15 Z" fill-opacity="0.16"/>
    <path d="M 467.5 137.8 L 467.5 70 L 508.75 35.35 L 508.75 103.15 Z" fill-opacity="0.04"/>
    <path d="M 400 70 L 467.5 70 L 508.75 35.35 L 441.25 35.35 Z" fill-opacity="0.16"/>
  </g>
  <path d="M 400 70 L 400 187 L 550 187 L 591.25 152.35" fill="none"
        stroke="var(--fig-a, #0f7a8a)" stroke-width="4"
        stroke-linecap="round" stroke-linejoin="round"/>

  <!-- само преобразование масштаба -->
  <line x1="258" y1="57" x2="390" y2="57" stroke="var(--fig-b, #c2571a)"
        stroke-width="2.6" marker-end="url(#fig-arr-rz-msh)"/>
  <text x="324" y="44" text-anchor="middle" font-size="17"
        font-family="Georgia, 'Times New Roman', serif" fill="var(--fig-b, #c2571a)">&#1074;&#1089;&#1077; &#1088;&#1072;&#1079;&#1084;&#1077;&#1088;&#1099; &#215;&#8201;k</text>

  <!-- линейные размеры -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="24"
     fill="var(--fig-a, #0f7a8a)">
    <text x="86" y="156" text-anchor="end">a<tspan baseline-shift="sub" font-size="16">3</tspan></text>
    <text x="145" y="212" text-anchor="middle">a<tspan baseline-shift="sub" font-size="16">1</tspan></text>
    <text x="222" y="199">a<tspan baseline-shift="sub" font-size="16">2</tspan></text>
    <text x="391" y="137" text-anchor="end">ka<tspan baseline-shift="sub" font-size="16">3</tspan></text>
    <text x="475" y="212" text-anchor="middle">ka<tspan baseline-shift="sub" font-size="16">1</tspan></text>
    <text x="584" y="193">ka<tspan baseline-shift="sub" font-size="16">2</tspan></text>
  </g>

  <!-- набор размеров и объём -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21"
     fill="currentColor" text-anchor="middle">
    <text x="160" y="252">A = (a<tspan baseline-shift="sub" font-size="14">1</tspan>, a<tspan baseline-shift="sub" font-size="14">2</tspan>, a<tspan baseline-shift="sub" font-size="14">3</tspan>)</text>
    <text x="160" y="284">V = f(A)</text>
    <text x="490" y="252">kA = (ka<tspan baseline-shift="sub" font-size="14">1</tspan>, ka<tspan baseline-shift="sub" font-size="14">2</tspan>, ka<tspan baseline-shift="sub" font-size="14">3</tspan>)</text>
    <text x="490" y="284">f(kA) = k<tspan baseline-shift="super" font-size="14">3</tspan>V</text>
  </g>
</svg>`;
