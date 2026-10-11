/* Структура СИ после 2018 года: семь точных констант определяют семь
   базовых единиц. Перерисовка инфографики из конспекта по смыслу:
   зелёные стрелки — «константа задаёт единицу», пунктир — какие уже
   определённые единицы нужны для определения следующей (секунда — корень
   всей системы). Значения констант — с исходной инфографики. */
window.FIGS = window.FIGS || {};
window.FIGS['si-konstanty'] = String.raw`
<svg viewBox="0 0 660 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Семь констант СИ и семь базовых единиц">
  <defs>
    <marker id="si-ar-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-const, #8fae2e)"/>
    </marker>
    <marker id="si-ar-d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <!-- зависимости между единицами: что уже нужно уметь мерить -->
  <g stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 5" opacity="0.28"
     fill="none" marker-end="url(#si-ar-d)">
    <line x1="290.4" y1="169.1" x2="254.1" y2="186.5"/>
    <line x1="369.6" y1="169.1" x2="405.9" y2="186.5"/>
    <line x1="256.7" y1="206.5" x2="401.3" y2="206.5"/>
    <line x1="302.6" y1="184.4" x2="212.5" y2="297.4"/>
    <line x1="419.9" y1="240.9" x2="293.6" y2="399.2"/>
    <line x1="222.5" y1="249.4" x2="254.7" y2="390.4"/>
    <line x1="320.2" y1="192.9" x2="275.1" y2="390.4"/>
    <line x1="437.5" y1="249.4" x2="405.3" y2="390.4"/>
    <line x1="240.1" y1="240.9" x2="366.4" y2="399.2"/>
    <line x1="339.8" y1="192.9" x2="384.9" y2="390.4"/>
  </g>

  <!-- константа определяет свою единицу -->
  <g stroke="var(--fig-const, #8fae2e)" stroke-width="2.6" fill="none" marker-end="url(#si-ar-c)">
    <line x1="330" y1="68" x2="330" y2="106"/>
    <line x1="511.4" y1="155.3" x2="481.5" y2="179.2"/>
    <line x1="556.2" y1="351.6" x2="518.6" y2="343.0"/>
    <line x1="430.7" y1="509.0" x2="414.1" y2="475.0"/>
    <line x1="229.3" y1="509.0" x2="245.9" y2="475.0"/>
    <line x1="103.8" y1="351.6" x2="141.4" y2="343.0"/>
    <line x1="148.6" y1="155.3" x2="178.5" y2="179.2"/>
  </g>

  <!-- базовые единицы -->
  <g text-anchor="middle">
    <g>
      <circle cx="330" cy="150" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="330" y="147" font-size="23" font-weight="700" fill="#ffffff">с</text>
      <text x="330" y="167" font-size="11" fill="#ffffff">секунда</text>
    </g>
    <g>
      <circle cx="447.3" cy="206.5" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="447.3" y="203" font-size="21" font-weight="700" fill="#ffffff">кг</text>
      <text x="447.3" y="223" font-size="11" fill="#ffffff">килограмм</text>
    </g>
    <g>
      <circle cx="476.2" cy="333.4" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="476.2" y="340" font-size="19" font-weight="700" fill="#ffffff">моль</text>
    </g>
    <g>
      <circle cx="395.1" cy="435.2" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="395.1" y="432" font-size="21" font-weight="700" fill="#ffffff">кд</text>
      <text x="395.1" y="452" font-size="11" fill="#ffffff">кандела</text>
    </g>
    <g>
      <circle cx="264.9" cy="435.2" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="264.9" y="432" font-size="21" font-weight="700" fill="#ffffff">К</text>
      <text x="264.9" y="452" font-size="11" fill="#ffffff">кельвин</text>
    </g>
    <g>
      <circle cx="183.8" cy="333.4" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="183.8" y="330" font-size="21" font-weight="700" fill="#ffffff">А</text>
      <text x="183.8" y="350" font-size="11" fill="#ffffff">ампер</text>
    </g>
    <g>
      <circle cx="212.7" cy="206.5" r="36" fill="var(--fig-unit, #c95f6a)"/>
      <text x="212.7" y="203" font-size="21" font-weight="700" fill="#ffffff">м</text>
      <text x="212.7" y="223" font-size="11" fill="#ffffff">метр</text>
    </g>
  </g>

  <!-- константы -->
  <g text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <g>
      <circle cx="330" cy="40" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="330" y="46" font-size="19" fill="#141a10">&#916;&#957;<tspan font-size="11" dy="4" font-style="normal">Cs</tspan></text>
    </g>
    <g>
      <circle cx="533.3" cy="137.9" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="533.3" y="145" font-size="21" fill="#141a10">h</text>
    </g>
    <g>
      <circle cx="583.5" cy="357.9" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="583.5" y="364" font-size="20" fill="#141a10">N<tspan font-size="12" dy="5" font-style="normal">A</tspan></text>
    </g>
    <g>
      <circle cx="442.8" cy="534.3" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="442.8" y="541" font-size="19" fill="#141a10">K<tspan font-size="11" dy="5" font-style="normal">cd</tspan></text>
    </g>
    <g>
      <circle cx="217.2" cy="534.3" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="217.2" y="541" font-size="20" fill="#141a10">k<tspan font-size="12" dy="5" font-style="normal">B</tspan></text>
    </g>
    <g>
      <circle cx="76.5" cy="357.9" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="76.5" y="364" font-size="21" fill="#141a10">e</text>
    </g>
    <g>
      <circle cx="126.7" cy="137.9" r="28" fill="var(--fig-const, #8fae2e)"/>
      <text x="126.7" y="145" font-size="21" fill="#141a10">c</text>
    </g>
  </g>

  <!-- точные значения констант -->
  <g text-anchor="middle" font-size="13.5" fill="currentColor" opacity="0.85">
    <text x="437" y="26">9 192 631 770 &#1043;&#1094;</text>
    <text x="126.7" y="100">299 792 458 &#1084;/&#1089;</text>
    <text x="533.3" y="100">6,626&#8201;070&#8201;15&#183;10&#8315;&#179;&#8308; &#1044;&#1078;&#183;&#1089;</text>
    <text x="583.5" y="400">6,022&#8201;140&#8201;76&#183;10&#178;&#179; &#1084;&#1086;&#1083;&#1100;&#8315;&#185;</text>
    <text x="442.8" y="578">683 &#1082;&#1076;&#183;&#1089;&#1088;/&#1042;&#1090;</text>
    <text x="217.2" y="578">1,380&#8201;649&#183;10&#8315;&#178;&#179; &#1044;&#1078;/&#1050;</text>
    <text x="76.5" y="400">1,602&#8201;176&#8201;634&#183;10&#8315;&#185;&#8313; &#1050;&#1083;</text>
  </g>
</svg>`;
