/* Груз на пружине в двух состояниях — перерисовка tikz-иллюстрации
   методички (_inputs/pictures/week_4_task_2): слева груз растянул
   пружину на 2 см, справа внешняя сила утроила удлинение до 6 см.
   Уровень «без нагрузки» пунктиром, размеры — токен --fig-a,
   силы — --fig-b. Рисунок задачи: печатная пара в методичке, поэтому
   рукописный. 15.09 viewBox приведён к канону рукописного рисунка
   (0 0 660 400); содержимое сдвинуто группой без масштаба, толщины и
   кегли остались в отображаемых пикселях. */
window.FIGS = window.FIGS || {};
window.FIGS['pruzhina-gruz'] = String.raw`
<svg viewBox="0 0 660 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Два состояния груза на пружине: слева удлинение 2 см под собственным весом, справа удлинение 6 см под весом и внешней силой">
  <defs>
    <pattern id="fig-hatch-potolok" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1.1" opacity="0.5"/>
    </pattern>
  </defs>
  <g transform="translate(95 37)">
  <g font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13.5" font-weight="600" fill="currentColor">
    <text x="130" y="14" text-anchor="middle">Состояние 1</text>
    <text x="390" y="14" text-anchor="middle">Состояние 2</text>
  </g>
  <!-- потолки -->
  <rect x="55" y="22" width="150" height="12" fill="url(#fig-hatch-potolok)"/>
  <line x1="55" y1="34" x2="205" y2="34" stroke="currentColor" stroke-width="2.4"/>
  <rect x="315" y="22" width="150" height="12" fill="url(#fig-hatch-potolok)"/>
  <line x1="315" y1="34" x2="465" y2="34" stroke="currentColor" stroke-width="2.4"/>
  <!-- уровень без нагрузки -->
  <line x1="66" y1="104" x2="194" y2="104" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.6"/>
  <line x1="326" y1="104" x2="454" y2="104" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.6"/>
  <text x="66" y="96" text-anchor="end" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="12" fill="currentColor" opacity="0.7">без нагрузки</text>
  <!-- пружины -->
  <polyline fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"
    points="130,34 130,44 119,51.5 141,66.5 119,81.5 141,96.5 119,111.5 141,126.5 130,134 130,144"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"
    points="390,34 390,46 379,56.8 401,77.5 379,98.3 401,119 379,139.8 401,160.5 379,181.3 390,202 390,224"/>
  <!-- грузы -->
  <rect x="98" y="144" width="64" height="38" rx="4" fill="currentColor" opacity="0.08"/>
  <rect x="98" y="144" width="64" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="130" y="170" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor">m</text>
  <rect x="358" y="224" width="64" height="38" rx="4" fill="currentColor" opacity="0.08"/>
  <rect x="358" y="224" width="64" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="390" y="250" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor">m</text>
  <!-- размеры удлинений -->
  <g stroke="var(--fig-a, #0f7a8a)" stroke-width="2">
    <line x1="74" y1="107" x2="74" y2="141"/>
    <line x1="334" y1="107" x2="334" y2="221"/>
  </g>
  <g fill="var(--fig-a, #0f7a8a)">
    <polygon points="74,104 71.4,112 76.6,112"/>
    <polygon points="74,144 71.4,136 76.6,136"/>
    <polygon points="334,104 331.4,112 336.6,112"/>
    <polygon points="334,224 331.4,216 336.6,216"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="var(--fig-a, #0f7a8a)">
    <text x="64" y="130" text-anchor="end">&#916;x&#8321; = 2 &#1089;&#1084;</text>
    <text x="324" y="170" text-anchor="end">&#916;x&#8322; = 6 &#1089;&#1084;</text>
  </g>
  <!-- силы -->
  <g stroke="var(--fig-b, #c2571a)" stroke-width="2.6">
    <line x1="130" y1="186" x2="130" y2="214"/>
    <line x1="378" y1="266" x2="378" y2="294"/>
    <line x1="402" y1="266" x2="402" y2="294"/>
  </g>
  <g fill="var(--fig-b, #c2571a)">
    <polygon points="130,220 125,209 135,209"/>
    <polygon points="378,300 373,289 383,289"/>
    <polygon points="402,300 397,289 407,289"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="var(--fig-b, #c2571a)">
    <text x="130" y="238" text-anchor="middle">mg</text>
    <text x="366" y="316" text-anchor="middle">mg</text>
    <text x="414" y="316" text-anchor="middle">F<tspan dy="4" font-size="12.5">&#1074;&#1085;&#1077;&#1096;</tspan></text>
  </g>
  </g>
</svg>`;
