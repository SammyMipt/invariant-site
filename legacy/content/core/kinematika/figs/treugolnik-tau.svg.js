/* Собран конвейером из sources/physics1_summary/inputs/01/pics/treugolnik_tau.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kinematika treugolnik-tau.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['treugolnik-tau'] = String.raw`<svg class="fig-tikz" width="363" height="198" viewBox="0 0 363 198" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Два единичных касательных вектора тау отложены из одной точки под малым углом d альфа. Они образуют равнобедренный треугольник, основание которого есть приращение d тау. Углы при основании подписаны и равны девяносто градусов минус d альфа пополам, поэтому при стремлении угла к нулю они становятся прямыми, а само основание есть хорда единичной окружности длиной d альфа.">
<style>text.treugolnik-tau-f0{font-family:cmsy9;font-size:8.966px}text.treugolnik-tau-f1{font-family:cmsy10;font-size:10.909px}text.treugolnik-tau-f2{font-family:cmmi10;font-size:10.909px}text.treugolnik-tau-f3{font-family:cmr10;font-size:10.909px}text.treugolnik-tau-f4{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.268 90.891) scale(1.375011)">

<g id='page1'>
<g fill='none' stroke-miterlimit='10'>
<path d='m23.727-41.078c27.551-10.027 57.77-10.027 85.32 0' stroke="currentColor" stroke-opacity="0.349" stroke-width='.598' stroke-dasharray='2.989 2.989'/>
<g stroke="currentColor" stroke-width='.399'>
<path d='m52.734 38.621c8.816-3.211 18.488-3.211 27.305 0'/>
<path d='m29.531-25.137c6.699-2.437 11.16-8.808 11.16-15.941'/>
<path d='m92.082-41.078c0 7.129 4.461 13.5 11.16 15.941'/>
</g>
<path d='m66.387 76.125l-40.695-111.813' stroke="var(--fig-a)" stroke-width='1.196'/>
</g>
<path d='m23.727-41.078c.285 1.707 .328 4.629-.066 6.809l4.496-1.633c-1.703-1.418-3.547-3.688-4.43-5.176' fill="var(--fig-a)"/>
<path d='m66.387 76.125l40.695-111.813' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m109.047-41.078c-.883 1.488-2.727 3.758-4.43 5.176l4.496 1.633c-.395-2.18-.352-5.102-.066-6.809' fill="var(--fig-a)"/>
<path d='m23.727-41.078h79.582' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m109.047-41.078c-1.703-.32-4.465-1.273-6.379-2.391v4.781c1.914-1.117 4.676-2.07 6.379-2.391' fill="var(--fig-b)"/>
<path d='m68.379 76.125c0-1.102-.891-1.992-1.992-1.992s-1.992 .891-1.992 1.992s.891 1.992 1.992 1.992s1.992-.891 1.992-1.992z'/>
<path d='m-10.941-54.211l31.43 9.106' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m143.715-54.211l-31.43 9.106' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="treugolnik-tau-f2" x='66.125' y='76.125' transform='translate(-52.891 -127.064)' fill="var(--fig-a)"><tspan x='66.387'>τ</tspan></text>
<text class="treugolnik-tau-f2" x='66.125' y='76.125' transform='translate(49.382 -127.064)' fill="var(--fig-a)"><tspan x='66.387'>τ</tspan></text>
<text class="treugolnik-tau-f2" x='66.387' y='76.125' transform='translate(-5.841 -99.624)' fill="var(--fig-b)">d<tspan x='71.803'></tspan><tspan x='72.065'>τ</tspan></text>
<text class="treugolnik-tau-f2" x='66.387' y='76.125' transform='translate(-6.349 -134.656)'>dα</text>
<text class="treugolnik-tau-f2" x='66.387' y='76.125' transform='translate(-6.349 -46.101)'>dα</text>
<text class="treugolnik-tau-f4" x='66.387' y='76.125' transform='translate(-33.644 -49.879)'>1</text>
<text class="treugolnik-tau-f4" x='66.387' y='76.125' transform='translate(28.22 -49.879)'>1</text>
<g transform='translate(-132.494 -132.972)'>
<text class="treugolnik-tau-f3" x='66.387' y='76.125'>90</text>
<text class="treugolnik-tau-f0" x='77.296' y='72.166'>◦</text>
<text class="treugolnik-tau-f1" x='84.826' y='76.125'>−</text>
<text class="treugolnik-tau-f2" x='95.735' y='76.125'>dα<tspan x='108.432'>/</tspan></text>
<text class="treugolnik-tau-f3" x='113.886' y='76.125'>2</text>
</g>
<g transform='translate(79.539 -132.972)'>
<text class="treugolnik-tau-f3" x='66.387' y='76.125'>90</text>
<text class="treugolnik-tau-f0" x='77.296' y='72.166'>◦</text>
<text class="treugolnik-tau-f1" x='84.826' y='76.125'>−</text>
<text class="treugolnik-tau-f2" x='95.735' y='76.125'>dα<tspan x='108.432'>/</tspan></text>
<text class="treugolnik-tau-f3" x='113.886' y='76.125'>2</text>
</g>
</g>
</g>
</svg>`;
