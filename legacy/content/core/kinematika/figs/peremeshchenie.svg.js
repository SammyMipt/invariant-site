/* Собран конвейером из sources/physics1_summary/inputs/01/pics/displacement.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kinematika peremeshchenie.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['peremeshchenie'] = String.raw`<svg class="fig-tikz" width="350" height="238" viewBox="0 0 350 238" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Радиус-векторы двух моментов времени задают точки A и B на траектории; их разность, вектор перемещения, соединяет точки хордой, а выделенная дуга между теми же точками показывает путь, который заметно длиннее хорды">
<style>text.peremeshchenie-f0{font-family:cmmi10;font-size:10.909px}text.peremeshchenie-f1{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(95.616 95.713) scale(1.375011)">

<g id='page1'>
<path d='m-4.668 57.223h174.695' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m174.692 57.223c-1.383-.258-3.625-1.035-5.18-1.941v3.887c1.555-.906 3.797-1.684 5.18-1.945'/>
<path d='m-4.668 57.223v-122.168' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-4.668-69.609c-.262 1.383-1.039 3.625-1.945 5.18h3.887c-.906-1.555-1.684-3.797-1.941-5.18'/>
<path d='m-4.668 57.223l-52.492 35.015' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-61.039 94.824c1.293-.551 3.59-1.148 5.387-1.258l-2.156-3.23c-.789 1.617-2.227 3.508-3.23 4.488'/>
<g fill='none' stroke-miterlimit='10'>
<path d='m18.391 5.977c7.687-5.762 18.129-11.848 34.593-21.778c42.278-25.625 76.868-33.309 93.524 15.375c5.379 15.758 8.965 23.059 14.09 30.746' stroke="currentColor" stroke-width='1.196'/>
<path d='m52.984-15.801c42.278-25.625 76.868-33.309 93.524 15.375' stroke="var(--fig-const)" stroke-width='2.192' stroke-linecap='round'/>
<path d='m-4.668 57.223l53.43-67.676' stroke="var(--fig-a)" stroke-width='1.594'/>
</g>
<path d='m52.984-15.801c-1.551 1.352-4.473 3.223-6.922 4.184l4.457 3.52c.367-2.605 1.508-5.883 2.465-7.703' fill="var(--fig-a)"/>
<path d='m-4.668 57.223l144.809-55.223' stroke="var(--fig-a)" fill='none' stroke-width='1.594' stroke-miterlimit='10'/>
<path d='m146.508-.426c-2.023 .363-5.492 .473-8.086 .043l2.02 5.305c1.652-2.047 4.313-4.277 6.066-5.348' fill="var(--fig-a)"/>
<path d='m52.984-15.801l86.797 14.27' stroke="var(--fig-b)" fill='none' stroke-width='1.594' stroke-miterlimit='10'/>
<path d='m146.508-.426c-1.934-.703-4.984-2.355-7.012-4.031l-.922 5.602c2.457-.937 5.879-1.527 7.934-1.57' fill="var(--fig-b)"/>
<path d='m55.543-15.801c0 1.414-1.145 2.563-2.559 2.563c-1.418 0-2.562-1.148-2.562-2.563s1.144-2.563 2.562-2.563c1.414 0 2.559 1.149 2.559 2.563z'/>
<path d='m149.07-.426c0 1.414-1.148 2.563-2.562 2.563c-1.418 0-2.563-1.149-2.563-2.563c0-1.418 1.145-2.562 2.563-2.562c1.414 0 2.562 1.144 2.562 2.562z'/>
<text class="peremeshchenie-f0" x='-100.755' y='-102.919' transform='translate(279.93 163.987)'>x</text>
<text class="peremeshchenie-f0" x='-100.755' y='-102.919' transform='translate(101.211 39.716)'>y</text>
<text class="peremeshchenie-f0" x='-100.755' y='-102.919' transform='translate(30.748 206.264)'>z</text>
<text class="peremeshchenie-f0" x='-100.755' y='-102.919' transform='translate(139.15 80.712)'>A</text>
<text class="peremeshchenie-f0" x='-100.755' y='-102.919' transform='translate(252.386 97.367)'>B</text>
<g transform='translate(70.75 131.958)' fill="var(--fig-a)">
<text class="peremeshchenie-f0" x='-101.103' y='-102.919'><tspan x='-100.755'>r</tspan></text>
<text class="peremeshchenie-f1" x='-95.53' y='-102.919'>(</text>
<text class="peremeshchenie-f0" x='-91.288' y='-102.919'>t</text>
<text class="peremeshchenie-f1" x='-87.348' y='-102.919'>)</text>
</g>
<g transform='translate(167.83 148.613)' fill="var(--fig-a)">
<text class="peremeshchenie-f0" x='-101.103' y='-102.919'><tspan x='-100.755'>r</tspan></text>
<text class="peremeshchenie-f1" x='-95.53' y='-102.919'>(</text>
<text class="peremeshchenie-f0" x='-91.288' y='-102.919'>t</text>
<text class="peremeshchenie-f1" x='-84.924' y='-102.919'>+<tspan x='-74.015'>∆</tspan></text>
<text class="peremeshchenie-f0" x='-64.924' y='-102.919'>t</text>
<text class="peremeshchenie-f1" x='-60.985' y='-102.919'>)</text>
</g>
<text class="peremeshchenie-f1" x='-100.755' y='-102.919' transform='translate(185.014 111.46)' fill="var(--fig-b)">∆</text>
<text class="peremeshchenie-f0" x='-92.012' y='-102.919' transform='translate(185.014 111.46)' fill="var(--fig-b)"><tspan x='-91.664'>r</tspan></text>
<text class="peremeshchenie-f0" x='-100.755' y='-102.919' transform='translate(204.989 88.399)' fill="var(--fig-const)">s</text>
</g>
</g>
</svg>`;
