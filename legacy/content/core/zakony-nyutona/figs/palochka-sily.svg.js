/* Задача 2.1: палочка AC на гладком столе, сила F толкает правый конец.
   Перерисовка tikz-рисунка из tasks.tex методички. Сила — токен --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['palochka-sily'] = String.raw`
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Палочка AC с отмеченной точкой B и силой F, приложенной к концу C">
  <defs>
    <marker id="zn-ps-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="zn-ps-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
  </defs>

  <!-- палочка и засечки концов и точки B -->
  <g stroke="currentColor" stroke-width="4.5" stroke-linecap="round">
    <line x1="60" y1="105" x2="400" y2="105"/>
  </g>
  <g stroke="currentColor" stroke-width="2.4">
    <line x1="60" y1="93" x2="60" y2="117"/>
    <line x1="332" y1="93" x2="332" y2="117"/>
    <line x1="400" y1="93" x2="400" y2="117"/>
  </g>

  <!-- размеры -->
  <g fill="none" stroke="currentColor" stroke-width="1.6"
     marker-start="url(#zn-ps-c)" marker-end="url(#zn-ps-c)">
    <line x1="60" y1="62" x2="332" y2="62"/>
    <line x1="332" y1="62" x2="400" y2="62"/>
  </g>

  <!-- сила F толкает конец C влево, вдоль палочки -->
  <line x1="505" y1="105" x2="413" y2="105" fill="none"
        stroke="var(--fig-b, #c2571a)" stroke-width="3.4" marker-end="url(#zn-ps-b)"/>

  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" fill="currentColor">
    <g font-size="22">
      <text x="52" y="148">A</text>
      <text x="324" y="148">B</text>
      <text x="393" y="148">C</text>
    </g>
    <g font-size="19">
      <text x="178" y="50">4l/5</text>
      <text x="352" y="50">l/5</text>
      <text x="452" y="86" fill="var(--fig-b, #c2571a)">F</text>
    </g>
  </g>
  <!-- стрелка над буквой силы -->
  <line x1="450" y1="68" x2="464" y2="68" fill="none" stroke="var(--fig-b, #c2571a)"
        stroke-width="1.4" marker-end="url(#zn-ps-b)"/>
</svg>`;
