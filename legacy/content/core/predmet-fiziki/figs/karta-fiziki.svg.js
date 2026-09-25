/* Карта физики: разделы курса и переходы между ними.

   Композиция своя — приборная панель из четырёх зон, а не пейзаж:
   слева классика семью строками, справа от неё относительность
   (вверх) и квантовая физика (вниз), крайняя правая колонка пунктиром —
   граница знания. Рамка с акцентом внутри классики показывает, что
   именно берёт первый семестр. Референс идеи «карта физики по областям» —
   Map of Physics Доминика Уоллимана; исполнение не заимствуется,
   строка ссылки стоит в нижнем правом углу рисунка.

   Цвета — только токены: контуры и подписи currentColor (тема красит
   сама), зоны помечены --fig-a / --fig-b / --fig-unit / --muted,
   курс — --accent, подложки панелей --chip. Поэтому рисунок одинаково
   живёт на светлой главе и на тёмном слайде колоды.

   Геометрия: холст 1280x700. Колонки A x14..500, B и C x540..986
   (B y14..262, C y278..656), D x1026..1266; между колонками
   сорокапиксельные разрывы под стрелки переходов. Ширины подобраны под
   реальные длины подписей, измеренные в браузере: самая длинная строка
   зоны B («ТЕОРИЯ ОТНОСИТЕЛЬНОСТИ», 364 ед.) и определила границу.
   Пиктограммы рисуются в локальном квадрате 48x48 и ставятся transform-ом:
   translate(cx-24s, cy-24s) scale(s). */
window.FIGS = window.FIGS || {};
window.FIGS['karta-fiziki'] = String.raw`
<svg viewBox="0 0 1280 700" xmlns="http://www.w3.org/2000/svg" role="img"
     aria-label="Карта физики: классическая физика, теория относительности, квантовая физика и граница знания; рамкой выделены механика и термодинамика — материал первого семестра"
     font-family="Onest, 'Golos Text', system-ui, -apple-system, 'Segoe UI', sans-serif">

  <defs>
    <marker id="kf-tip" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <g id="kf-ray">
      <path d="M 40 24 H 45.5"/>
      <path d="M 42.6 21.6 L 45.5 24 L 42.6 26.4"/>
    </g>
  </defs>

  <!-- ═══ подложки зон ═══ -->
  <g fill="var(--chip, #eef0ea)" stroke="currentColor" stroke-width="1.4">
    <rect x="14" y="14" width="486" height="642" rx="16" stroke-opacity="0.22"/>
    <rect x="540" y="14" width="446" height="248" rx="16" stroke-opacity="0.22"/>
    <rect x="540" y="278" width="446" height="378" rx="16" stroke-opacity="0.22"/>
    <rect x="1026" y="14" width="240" height="642" rx="16"
          stroke-opacity="0.32" stroke-dasharray="7 6"/>
  </g>

  <!-- ═══ переходы между зонами ═══ -->
  <g stroke="currentColor" stroke-width="2.6" opacity="0.55" fill="none"
     marker-end="url(#kf-tip)">
    <path d="M 505 133 H 532"/>
    <path d="M 505 467 H 532"/>
    <path d="M 991 133 H 1018"/>
    <path d="M 991 467 H 1018"/>
  </g>

  <!-- ═══════════════ ЗОНА A · классическая физика ═══════════════ -->

  <rect x="30" y="32" width="5" height="30" rx="2.5" fill="var(--fig-a, #0f7a8a)"/>
  <text x="46" y="55" font-size="26" font-weight="700" letter-spacing="1.1"
        fill="currentColor">КЛАССИЧЕСКАЯ ФИЗИКА</text>
  <text x="46" y="80" font-size="18" fill="var(--muted, #5e6a72)">мир привычных скоростей и размеров</text>

  <!-- рамка первого семестра -->
  <rect x="26" y="94" width="462" height="188" rx="12"
        fill="var(--accent, #0f7a8a)" fill-opacity="0.1"
        stroke="var(--accent, #0f7a8a)" stroke-width="2.2"/>
  <text x="44" y="120" font-size="15.5" font-weight="700" letter-spacing="2.2"
        fill="var(--accent, #0f7a8a)">ПЕРВЫЙ СЕМЕСТР</text>
  <text x="470" y="120" font-size="15.5" text-anchor="end" fill="var(--accent, #0f7a8a)"
        fill-opacity="0.8">Физика 1 · осень 2026</text>
  <line x1="44" y1="200" x2="470" y2="200" stroke="var(--accent, #0f7a8a)"
        stroke-width="1.2" opacity="0.3"/>

  <!-- краем осенью: гидродинамику и механические колебания курс задевает,
       но целиком не берёт — рамка пунктиром и без заливки -->
  <rect x="26" y="300" width="462" height="140" rx="12"
        fill="none" stroke="var(--accent, #0f7a8a)" stroke-width="1.8"
        stroke-dasharray="6 6" opacity="0.55"/>
  <text x="470" y="320" font-size="14" text-anchor="end"
        fill="var(--accent, #0f7a8a)" fill-opacity="0.75">осенью краем</text>

  <!-- второй семестр: колебания попадают и сюда, поэтому рамка налезает
       на пунктирную сверху -->
  <rect x="36" y="386" width="452" height="212" rx="12"
        fill="var(--fig-a, #0f7a8a)" fill-opacity="0.12"
        stroke="var(--fig-a, #0f7a8a)" stroke-width="2.2"/>
  <text x="478" y="590" font-size="15.5" text-anchor="end"
        fill="var(--fig-a, #0f7a8a)" fill-opacity="0.9">Физика 2 · весна 2027</text>

  <!-- маятник · механика -->
  <g transform="translate(48,140)" fill="none" stroke="var(--accent, #0f7a8a)"
     stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 8 9 H 40"/>
    <g stroke-width="1.5" opacity="0.5">
      <path d="M 13 9 l -3.5 -4.5"/><path d="M 21 9 l -3.5 -4.5"/>
      <path d="M 29 9 l -3.5 -4.5"/><path d="M 37 9 l -3.5 -4.5"/>
    </g>
    <path d="M 24 9 L 15 37" opacity="0.3"/>
    <path d="M 15 37 A 29.4 29.4 0 0 0 33 37" stroke-dasharray="3 4" opacity="0.45"/>
    <path d="M 24 9 L 33 37"/>
    <circle cx="33" cy="37" r="5" fill="var(--accent, #0f7a8a)" stroke="none"/>
  </g>
  <text x="112" y="171" font-size="20.5" fill="currentColor">Механика</text>

  <!-- чайник · термодинамика -->
  <g transform="translate(48,212)" fill="none" stroke="var(--accent, #0f7a8a)"
     stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 19 19 c 3.6 -3 -3.6 -6.6 0 -9.6" opacity="0.7"/>
    <path d="M 29 19 c 3.6 -3 -3.6 -6.6 0 -9.6" opacity="0.7"/>
    <circle cx="24" cy="22.4" r="2"/>
    <path d="M 11 27 H 37"/>
    <path d="M 12.5 27 L 15 41 Q 15.5 43.5 18 43.5 H 31 Q 33.5 43.5 34 41 L 36.5 27"/>
    <path d="M 36.4 28.6 L 44.8 23.6 L 45.8 27 L 37.6 32.2"/>
  </g>
  <text x="112" y="229" font-size="20.5" fill="currentColor">Термодинамика и</text>
  <text x="112" y="251" font-size="20.5" fill="currentColor">статистическая физика</text>

  <!-- разделители строк -->
  <g stroke="currentColor" stroke-width="1" opacity="0.12">
    <line x1="44" y1="368" x2="486" y2="368"/>
    <line x1="44" y1="440" x2="486" y2="440"/>
    <line x1="44" y1="512" x2="486" y2="512"/>
    <line x1="44" y1="584" x2="486" y2="584"/>
  </g>

  <!-- крыло в потоке · гидродинамика -->
  <g transform="translate(48,308)" fill="none" stroke="currentColor"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 2 9 C 16 9 30 4.5 46 9"/>
    <path d="M 2 16 C 14 16 26 8 43.5 14"/>
    <path d="M 40.2 11.9 L 43.5 14 L 40.4 16.6"/>
    <path d="M 2 41.5 C 16 41.5 30 45 46 42.5"/>
    <path d="M 9 29 C 18 17 32 21 44 36 C 32 32 19 32 9 29 Z"
          fill="currentColor" fill-opacity="0.16"/>
  </g>
  <text x="112" y="339" font-size="20.5" fill="currentColor">Гидродинамика и сплошные среды</text>

  <!-- волна · колебания и волны -->
  <g transform="translate(48,380)" fill="none" stroke="currentColor"
     stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 2 24 H 46" stroke-dasharray="3 4" stroke-width="1.4" opacity="0.35"/>
    <path d="M 4 24 q 5 -13 10 0 t 10 0 t 10 0 t 10 0"/>
  </g>
  <text x="112" y="411" font-size="20.5" fill="currentColor">Колебания и волны</text>

  <!-- линза · оптика -->
  <g transform="translate(48,452)" fill="none" stroke="currentColor"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 2 13 H 20.5"/><path d="M 2 24 H 18.5"/><path d="M 2 35 H 20.5"/>
    <path d="M 27.5 13 L 38 24 L 45.5 31.9"/>
    <path d="M 29.5 24 L 45.5 24"/>
    <path d="M 27.5 35 L 38 24 L 45.5 16.1"/>
    <path d="M 24 7 C 32 15 32 33 24 41 C 16 33 16 15 24 7 Z"
          fill="currentColor" fill-opacity="0.13"/>
    <circle cx="38" cy="24" r="1.9" fill="currentColor" stroke="none"/>
  </g>
  <text x="112" y="483" font-size="20.5" fill="currentColor">Оптика</text>

  <!-- катушка · электромагнетизм -->
  <g transform="translate(48,524)" fill="none" stroke="currentColor"
     stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 5 31 L 9 31"/>
    <path d="M 9 31 C 9 12 17.5 12 17.5 31 C 17.5 12 26 12 26 31 C 26 12 34.5 12 34.5 31 C 34.5 12 43 12 43 31"/>
    <path d="M 43 31 L 47 31"/>
    <g opacity="0.5" stroke-width="1.8">
      <path d="M 13 40 H 39"/>
      <path d="M 35.6 37.8 L 39 40 L 35.6 42.2"/>
    </g>
  </g>
  <text x="112" y="555" font-size="20.5" fill="currentColor">Электромагнетизм</text>

  <!-- аттрактор · теория хаоса -->
  <g transform="translate(48,596)" fill="none" stroke="currentColor"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="17" cy="27" rx="12.5" ry="6.4" transform="rotate(-45,17,27)"/>
    <ellipse cx="31" cy="27" rx="12.5" ry="6.4" transform="rotate(45,31,27)"/>
    <ellipse cx="16" cy="28" rx="8" ry="3.9" transform="rotate(-45,16,28)" opacity="0.55"/>
    <ellipse cx="32" cy="28" rx="8" ry="3.9" transform="rotate(45,32,28)" opacity="0.55"/>
    <path d="M 24 20.5 C 24.5 15 26 11.5 28.5 8.5" opacity="0.5" stroke-width="1.6"/>
  </g>
  <text x="112" y="627" font-size="20.5" fill="currentColor">Теория хаоса</text>

  <!-- ═══════════════ ЗОНА B · теория относительности ═══════════════ -->

  <rect x="556" y="32" width="5" height="30" rx="2.5" fill="var(--fig-b, #c2571a)"/>
  <text x="572" y="55" font-size="23" font-weight="700" letter-spacing="1"
        fill="currentColor">ТЕОРИЯ ОТНОСИТЕЛЬНОСТИ</text>
  <text x="572" y="80" font-size="18" fill="var(--muted, #5e6a72)">когда скорость близка к световой</text>

  <line x1="570" y1="172" x2="956" y2="172" stroke="currentColor"
        stroke-width="1" opacity="0.12"/>

  <!-- световой конус · СТО -->
  <g transform="translate(558,109)" fill="none" stroke="var(--fig-b, #c2571a)"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 24 3 V 45" stroke-dasharray="3 4" stroke-width="1.4" opacity="0.4"/>
    <ellipse cx="24" cy="8" rx="13" ry="4.2"/>
    <ellipse cx="24" cy="40" rx="13" ry="4.2"/>
    <path d="M 11 8 L 24 24 L 37 8"/>
    <path d="M 11 40 L 24 24 L 37 40"/>
    <circle cx="24" cy="24" r="1.9" fill="var(--fig-b, #c2571a)" stroke="none"/>
  </g>
  <text x="620" y="130" font-size="20.5" fill="currentColor">Специальная теория</text>
  <text x="620" y="152" font-size="20.5" fill="currentColor">относительности</text>

  <!-- прогнутый лист · ОТО (сетка посчитана: X=24+10.5(u-v),
       Y=22+4.2(u+v)+13*exp(-2.6(u^2+v^2)), u,v от -1 до 1) -->
  <g transform="translate(558,187)" fill="none" stroke="var(--fig-b, #c2571a)"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <g opacity="0.75">
      <path d="M 24 13.7 L 22.3 14.5 L 20.5 15.3 L 18.8 16.2 L 17 17.1 L 15.3 18 L 13.5 18.8 L 11.8 19.4 L 10 19.9 L 8.3 20.4 L 6.5 20.9 L 4.8 21.5 L 3 22.1"/>
      <path d="M 29.3 16.2 L 27.5 17.5 L 25.8 19.2 L 24 21.3 L 22.3 23.6 L 20.5 25.5 L 18.8 26.7 L 17 26.9 L 15.3 26.4 L 13.5 25.5 L 11.8 24.8 L 10 24.5 L 8.3 24.6"/>
      <path d="M 34.5 18.8 L 32.8 20.6 L 31 23.3 L 29.3 26.7 L 27.5 30.3 L 25.8 33.4 L 24 35 L 22.3 34.8 L 20.5 33.1 L 18.8 30.9 L 17 28.9 L 15.3 27.6 L 13.5 27.2"/>
      <path d="M 39.8 20.4 L 38 21.7 L 36.3 23.4 L 34.5 25.5 L 32.8 27.8 L 31 29.7 L 29.3 30.9 L 27.5 31.1 L 25.8 30.6 L 24 29.7 L 22.3 29 L 20.5 28.7 L 18.8 28.8"/>
      <path d="M 45 22.1 L 43.3 22.9 L 41.5 23.7 L 39.8 24.6 L 38 25.5 L 36.3 26.4 L 34.5 27.2 L 32.8 27.8 L 31 28.3 L 29.3 28.8 L 27.5 29.3 L 25.8 29.9 L 24 30.5"/>
      <path d="M 24 13.7 L 25.8 14.5 L 27.5 15.3 L 29.3 16.2 L 31 17.1 L 32.8 18 L 34.5 18.8 L 36.3 19.4 L 38 19.9 L 39.8 20.4 L 41.5 20.9 L 43.3 21.5 L 45 22.1"/>
      <path d="M 18.8 16.2 L 20.5 17.5 L 22.3 19.2 L 24 21.3 L 25.8 23.6 L 27.5 25.5 L 29.3 26.7 L 31 26.9 L 32.8 26.4 L 34.5 25.5 L 36.3 24.8 L 38 24.5 L 39.8 24.6"/>
      <path d="M 13.5 18.8 L 15.3 20.6 L 17 23.3 L 18.8 26.7 L 20.5 30.3 L 22.3 33.4 L 24 35 L 25.8 34.8 L 27.5 33.1 L 29.3 30.9 L 31 28.9 L 32.8 27.6 L 34.5 27.2"/>
      <path d="M 8.3 20.4 L 10 21.7 L 11.8 23.4 L 13.5 25.5 L 15.3 27.8 L 17 29.7 L 18.8 30.9 L 20.5 31.1 L 22.3 30.6 L 24 29.7 L 25.8 29 L 27.5 28.7 L 29.3 28.8"/>
      <path d="M 3 22.1 L 4.8 22.9 L 6.5 23.7 L 8.3 24.6 L 10 25.5 L 11.8 26.4 L 13.5 27.2 L 15.3 27.8 L 17 28.3 L 18.8 28.8 L 20.5 29.3 L 22.3 29.9 L 24 30.5"/>
    </g>
    <circle cx="24" cy="34.6" r="3.6" fill="var(--fig-b, #c2571a)" stroke="none"/>
  </g>
  <text x="620" y="208" font-size="20.5" fill="currentColor">Общая теория</text>
  <text x="620" y="230" font-size="20.5" fill="currentColor">относительности</text>

  <!-- ═══════════════ ЗОНА C · квантовая физика ═══════════════ -->

  <rect x="556" y="296" width="5" height="30" rx="2.5" fill="var(--fig-unit, #c95f6a)"/>
  <text x="572" y="319" font-size="23" font-weight="700" letter-spacing="1"
        fill="currentColor">КВАНТОВАЯ ФИЗИКА</text>
  <text x="572" y="344" font-size="18" fill="var(--muted, #5e6a72)">когда масштабы атомные и меньше</text>

  <g stroke="currentColor" stroke-width="1" opacity="0.12">
    <line x1="570" y1="416" x2="956" y2="416"/>
    <line x1="570" y1="474" x2="956" y2="474"/>
    <line x1="570" y1="532" x2="956" y2="532"/>
    <line x1="570" y1="590" x2="956" y2="590"/>
  </g>

  <!-- атом · атомная физика -->
  <g transform="translate(558,365) scale(0.9167)" fill="none" stroke="var(--fig-unit, #c95f6a)"
     stroke-width="2.4" stroke-linecap="round">
    <ellipse cx="24" cy="24" rx="18" ry="6.8"/>
    <ellipse cx="24" cy="24" rx="18" ry="6.8" transform="rotate(60,24,24)"/>
    <ellipse cx="24" cy="24" rx="18" ry="6.8" transform="rotate(120,24,24)"/>
    <circle cx="24" cy="24" r="3.4" fill="var(--fig-unit, #c95f6a)" stroke="none"/>
    <circle cx="42" cy="24" r="2.4" fill="var(--fig-unit, #c95f6a)" stroke="none"/>
  </g>
  <text x="616" y="394" font-size="20.5" fill="currentColor">Атомная физика</text>

  <!-- решётка · конденсированное состояние -->
  <g transform="translate(558,423) scale(0.9167)" fill="none" stroke="var(--fig-unit, #c95f6a)"
     stroke-width="2.2" stroke-linecap="round">
    <g opacity="0.55">
      <path d="M 12 12 V 36"/><path d="M 24 12 V 36"/><path d="M 36 12 V 36"/>
      <path d="M 12 12 H 36"/><path d="M 12 24 H 36"/><path d="M 12 36 H 36"/>
    </g>
    <g fill="var(--fig-unit, #c95f6a)" stroke="none">
      <circle cx="12" cy="12" r="3.2"/><circle cx="24" cy="12" r="3.2"/><circle cx="36" cy="12" r="3.2"/>
      <circle cx="12" cy="24" r="3.2"/><circle cx="24" cy="24" r="3.2"/><circle cx="36" cy="24" r="3.2"/>
      <circle cx="12" cy="36" r="3.2"/><circle cx="24" cy="36" r="3.2"/><circle cx="36" cy="36" r="3.2"/>
    </g>
  </g>
  <text x="616" y="441" font-size="20.5" fill="currentColor">Физика конденсированного</text>
  <text x="616" y="463" font-size="20.5" fill="currentColor">состояния</text>

  <!-- деление ядра · ядерная физика -->
  <g transform="translate(558,481) scale(0.9167)" fill="none" stroke="var(--fig-unit, #c95f6a)"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 24 6 L 21.5 13 L 26.5 20 L 21.5 27 L 24 34" opacity="0.4" stroke-width="1.6"/>
    <g fill="var(--fig-unit, #c95f6a)" fill-opacity="0.22">
      <circle cx="12" cy="14" r="4.4"/><circle cx="17.2" cy="20" r="4.4"/><circle cx="11" cy="24.5" r="4.4"/>
      <circle cx="36" cy="14" r="4.4"/><circle cx="30.8" cy="20" r="4.4"/><circle cx="37" cy="24.5" r="4.4"/>
    </g>
    <g>
      <path d="M 13 32 L 5 39"/><path d="M 5 39 L 6.4 34.7"/><path d="M 5 39 L 9.4 38.7"/>
      <path d="M 35 32 L 43 39"/><path d="M 43 39 L 41.6 34.7"/><path d="M 43 39 L 38.6 38.7"/>
    </g>
  </g>
  <text x="616" y="510" font-size="20.5" fill="currentColor">Ядерная физика</text>

  <!-- таблица частиц · стандартная модель -->
  <g transform="translate(558,539) scale(0.9167)" fill="none" stroke="var(--fig-unit, #c95f6a)"
     stroke-width="1.7" stroke-linejoin="round">
    <g>
      <rect x="7" y="7" width="8.5" height="8.5" rx="1.8"/>
      <rect x="17.5" y="7" width="8.5" height="8.5" rx="1.8"/>
      <rect x="28" y="7" width="8.5" height="8.5" rx="1.8"/>
      <rect x="7" y="17.5" width="8.5" height="8.5" rx="1.8"/>
      <rect x="17.5" y="17.5" width="8.5" height="8.5" rx="1.8"/>
      <rect x="28" y="17.5" width="8.5" height="8.5" rx="1.8"/>
      <rect x="7" y="28" width="8.5" height="8.5" rx="1.8"/>
      <rect x="17.5" y="28" width="8.5" height="8.5" rx="1.8"/>
      <rect x="28" y="28" width="8.5" height="8.5" rx="1.8"/>
      <rect x="7" y="38.5" width="8.5" height="8.5" rx="1.8"/>
      <rect x="17.5" y="38.5" width="8.5" height="8.5" rx="1.8"/>
      <rect x="28" y="38.5" width="8.5" height="8.5" rx="1.8"/>
    </g>
    <g fill="var(--fig-unit, #c95f6a)" fill-opacity="0.28">
      <rect x="38.5" y="7" width="8.5" height="8.5" rx="1.8"/>
      <rect x="38.5" y="17.5" width="8.5" height="8.5" rx="1.8"/>
      <rect x="38.5" y="28" width="8.5" height="8.5" rx="1.8"/>
      <rect x="38.5" y="38.5" width="8.5" height="8.5" rx="1.8"/>
    </g>
  </g>
  <text x="616" y="557" font-size="20.5" fill="currentColor">Физика частиц</text>
  <text x="616" y="579" font-size="20.5" fill="currentColor">и Стандартная модель</text>

  <!-- диаграмма Фейнмана · квантовая теория поля -->
  <g transform="translate(558,597) scale(0.9167)" fill="none" stroke="var(--fig-unit, #c95f6a)"
     stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 4 11 L 16 24"/><path d="M 4 37 L 16 24"/>
    <path d="M 34 24 L 46 11"/><path d="M 34 24 L 46 37"/>
    <path d="M 16 24 q 2.25 -4.6 4.5 0 t 4.5 0 t 4.5 0 t 4.5 0"/>
    <g fill="var(--fig-unit, #c95f6a)" stroke="none">
      <circle cx="16" cy="24" r="2"/><circle cx="34" cy="24" r="2"/>
    </g>
  </g>
  <text x="616" y="626" font-size="20.5" fill="currentColor">Квантовая теория поля</text>

  <!-- ═══════════════ ЗОНА D · граница знания ═══════════════ -->

  <text x="1146" y="55" font-size="20" font-weight="700" letter-spacing="0.9"
        text-anchor="middle" fill="currentColor">ГРАНИЦА ЗНАНИЯ</text>
  <rect x="1126" y="66" width="40" height="4" rx="2" fill="var(--muted, #5e6a72)"/>
  <g font-size="18" text-anchor="middle" fill="var(--muted, #5e6a72)">
    <text x="1146" y="94">где теории</text>
    <text x="1146" y="114">пока не сходятся</text>
  </g>

  <g stroke="currentColor" stroke-width="1" opacity="0.12" stroke-dasharray="5 5">
    <line x1="1050" y1="300" x2="1242" y2="300"/>
    <line x1="1050" y1="474" x2="1242" y2="474"/>
  </g>

  <!-- галактика с гало · тёмная материя -->
  <g transform="translate(1114,152) scale(1.35)" fill="none" stroke="var(--muted, #5e6a72)"
     stroke-width="1.9" stroke-linecap="round">
    <circle cx="24" cy="24" r="21.5" stroke-dasharray="3 4.5" opacity="0.55" stroke-width="1.5"/>
    <path d="M 26.5 20 C 34 18.5 39.5 25.5 36 32 C 32.5 38.5 21 40 14 33.5"/>
    <path d="M 21.5 28 C 14 29.5 8.5 22.5 12 16 C 15.5 9.5 27 8 34 14.5"/>
    <circle cx="24" cy="24" r="3.2" fill="var(--muted, #5e6a72)" stroke="none"/>
  </g>
  <text x="1146" y="243" font-size="20.5" text-anchor="middle" fill="currentColor">Тёмная материя</text>

  <!-- разбегание · тёмная энергия -->
  <g transform="translate(1114,326) scale(1.35)" fill="none" stroke="var(--muted, #5e6a72)"
     stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="24" r="1.8" fill="var(--muted, #5e6a72)" stroke="none" opacity="0.55"/>
    <g fill="var(--muted, #5e6a72)" stroke="none" opacity="0.85">
      <circle cx="36" cy="24" r="2.6"/><circle cx="30" cy="13.6" r="2.6"/>
      <circle cx="18" cy="13.6" r="2.6"/><circle cx="12" cy="24" r="2.6"/>
      <circle cx="18" cy="34.4" r="2.6"/><circle cx="30" cy="34.4" r="2.6"/>
    </g>
    <g stroke-width="1.9">
      <use href="#kf-ray"/>
      <use href="#kf-ray" transform="rotate(60,24,24)"/>
      <use href="#kf-ray" transform="rotate(120,24,24)"/>
      <use href="#kf-ray" transform="rotate(180,24,24)"/>
      <use href="#kf-ray" transform="rotate(240,24,24)"/>
      <use href="#kf-ray" transform="rotate(300,24,24)"/>
    </g>
  </g>
  <text x="1146" y="417" font-size="20.5" text-anchor="middle" fill="currentColor">Тёмная энергия</text>

  <!-- геометрия, собранная из петель · квантовая гравитация -->
  <g transform="translate(1114,500) scale(1.35)" fill="none" stroke="var(--muted, #5e6a72)"
     stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 24 12 L 44 24 L 24 36 L 4 24 Z" opacity="0.3" stroke-dasharray="3 3.5"/>
    <g fill="var(--muted, #5e6a72)" stroke="none" opacity="0.8">
      <circle cx="24" cy="12" r="1.5"/><circle cx="19" cy="15" r="1.5"/><circle cx="14" cy="18" r="1.5"/>
      <circle cx="9" cy="21" r="1.5"/><circle cx="4" cy="24" r="1.5"/>
      <circle cx="29" cy="15" r="1.5"/><circle cx="24" cy="18" r="1.5"/><circle cx="19" cy="21" r="1.5"/>
      <circle cx="14" cy="24" r="1.5"/><circle cx="9" cy="27" r="1.5"/>
      <circle cx="34" cy="18" r="1.5"/><circle cx="29" cy="21" r="1.5"/><circle cx="24" cy="24" r="1.5"/>
      <circle cx="19" cy="27" r="1.5"/><circle cx="14" cy="30" r="1.5"/>
      <circle cx="39" cy="21" r="1.5"/><circle cx="34" cy="24" r="1.5"/><circle cx="29" cy="27" r="1.5"/>
      <circle cx="24" cy="30" r="1.5"/><circle cx="19" cy="33" r="1.5"/>
      <circle cx="44" cy="24" r="1.5"/><circle cx="39" cy="27" r="1.5"/><circle cx="34" cy="30" r="1.5"/>
      <circle cx="29" cy="33" r="1.5"/><circle cx="24" cy="36" r="1.5"/>
    </g>
    <g stroke-width="2.1">
      <circle cx="24" cy="24" r="4.6"/>
      <circle cx="32" cy="19.5" r="3.2"/>
      <circle cx="16" cy="28.5" r="3.2"/>
    </g>
  </g>
  <text x="1146" y="591" font-size="20.5" text-anchor="middle" fill="currentColor">Квантовая</text>
  <text x="1146" y="613" font-size="20.5" text-anchor="middle" fill="currentColor">гравитация</text>

  <!-- ═══ ссылка на референс ═══ -->
  <text x="1266" y="684" font-size="15" text-anchor="end"
        fill="var(--muted, #5e6a72)" opacity="0.85">по мотивам Map of Physics, Dominic Walliman (Domain of Science)</text>
</svg>`;
