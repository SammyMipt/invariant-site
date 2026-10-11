/* Собран конвейером из sources/physics1_summary/inputs/04/pics/ellips_fokusy.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs moment-impulsa ellips-fokusy.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['ellips-fokusy'] = String.raw`<svg class="fig-tikz" width="399" height="239" viewBox="0 0 399 239" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эллипс с фокусами F1 и F2, большой осью 2a, малой осью 2b и точкой P, соединённой с фокусами отрезками r1 и r2">
<style>text.ellips-fokusy-f0{font-family:cmmi10;font-size:10.909px}text.ellips-fokusy-f1{font-family:cmr9;font-size:8.966px}text.ellips-fokusy-f2{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 96.262) scale(1.375011)">

<g id='page1'>
<path d='m219.524 17.082l-.336-6.07l-1.063-6.023l-1.781-5.93l-2.41-5.879l-3.133-5.781l-3.758-5.59l-4.433-5.445l-5.059-5.254l-5.637-5.012l-6.218-4.77l-6.746-4.48l-7.278-4.242l-7.711-3.856l-8.145-3.566l-8.574-3.227l-8.918-2.844l-9.203-2.457l-9.492-2.074l-9.688-1.684l-9.879-1.254l-9.973-.82l-10.074-.434h-10.117l-10.07 .434l-9.977 .82l-9.879 1.254l-9.688 1.684l-9.492 2.074l-9.203 2.457l-8.914 2.844l-8.578 3.227l-8.145 3.566l-7.711 3.856l-7.278 4.242l-6.746 4.48l-6.215 4.77l-5.64 5.012l-5.059 5.254l-4.434 5.445l-3.757 5.59l-3.133 5.781l-2.41 5.879l-1.782 5.93l-1.062 6.023l-.336 6.07l.336 6.074l1.062 6.023l1.782 5.926l2.41 5.879l3.133 5.781l3.757 5.59l4.434 5.445l5.059 5.254l5.64 5.012l6.215 4.77l6.746 4.484l7.278 4.238l7.711 3.856l8.145 3.566l8.578 3.23l8.914 2.84l9.203 2.461l9.492 2.07l9.688 1.688l9.879 1.25l9.977 .82l10.07 .434h10.117l10.074-.434l9.973-.82l9.879-1.25l9.688-1.688l9.492-2.07l9.203-2.461l8.918-2.84l8.574-3.23l8.145-3.566l7.711-3.856l7.278-4.238l6.746-4.484l6.218-4.77l5.637-5.012l5.059-5.254l4.433-5.445l3.758-5.59l3.133-5.781l2.41-5.879l1.781-5.926l1.063-6.023z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-65.484 17.082h280.883' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-69.609 17.082c1.223 .23 3.207 .918 4.582 1.719v-3.438c-1.375 .805-3.359 1.488-4.582 1.719' fill="var(--fig-a)"/>
<path d='m219.524 17.082c-1.223-.23-3.207-.914-4.582-1.719v3.438c1.375-.801 3.359-1.488 4.582-1.719' fill="var(--fig-a)"/>
<path d='m74.957 99.699v-165.23' stroke="var(--fig-b)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m74.957 103.824c.23-1.223 .918-3.211 1.719-4.586h-3.438c.805 1.375 1.488 3.363 1.719 4.586' fill="var(--fig-b)"/>
<path d='m74.957-69.656c-.23 1.223-.914 3.207-1.719 4.582h3.438c-.801-1.375-1.488-3.359-1.719-4.582' fill="var(--fig-b)"/>
<path d='m-40.695 17.082l203.094-64.711' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m167.867-49.371c-1.719 .215-4.641 .141-6.801-.34l1.449 4.555c1.484-1.645 3.828-3.395 5.352-4.215'/>
<path d='m190.61 17.082l-20.887-61.023' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m167.867-49.371c.246 1.715 .238 4.637-.199 6.809l4.523-1.551c-1.676-1.445-3.473-3.75-4.324-5.258'/>
<path d='m-38.902 17.082c0-.988-.801-1.793-1.793-1.793s-1.793 .805-1.793 1.793c0 .992 .801 1.793 1.793 1.793s1.793-.801 1.793-1.793z'/>
<path d='m192.403 17.082c0-.988-.801-1.793-1.793-1.793c-.989 0-1.793 .805-1.793 1.793c0 .992 .804 1.793 1.793 1.793c.992 0 1.793-.801 1.793-1.793z'/>
<path d='m170.059-49.371c0-1.211-.984-2.191-2.191-2.191c-1.211 0-2.195 .981-2.195 2.191s.984 2.191 2.195 2.191c1.207 0 2.191-.981 2.191-2.191z' fill="var(--fig-b)"/>
<text class="ellips-fokusy-f0" x='74.958' y='17.083' transform='translate(-121.714 15.41)'>F</text>
<text class="ellips-fokusy-f1" x='81.973' y='19.103' transform='translate(-121.714 15.41)'>1</text>
<text class="ellips-fokusy-f0" x='74.958' y='17.083' transform='translate(109.592 15.41)'>F</text>
<text class="ellips-fokusy-f1" x='81.973' y='19.103' transform='translate(109.592 15.41)'>2</text>
<text class="ellips-fokusy-f2" x='74.958' y='17.083' transform='translate(-63.437 -6.027)' fill="var(--fig-a)">2</text>
<text class="ellips-fokusy-f0" x='80.412' y='17.083' transform='translate(-63.437 -6.027)' fill="var(--fig-a)">a</text>
<text class="ellips-fokusy-f2" x='74.958' y='17.083' transform='translate(6.991 -44.401)' fill="var(--fig-b)">2</text>
<text class="ellips-fokusy-f0" x='80.412' y='17.083' transform='translate(6.991 -44.401)' fill="var(--fig-b)">b</text>
<text class="ellips-fokusy-f0" x='74.958' y='17.083' transform='translate(-26.464 -40.287)'>r</text>
<text class="ellips-fokusy-f1" x='79.879' y='19.103' transform='translate(-26.464 -40.287)'>1</text>
<text class="ellips-fokusy-f0" x='74.958' y='17.083' transform='translate(111.272 -31.864)'>r</text>
<text class="ellips-fokusy-f1" x='79.879' y='19.103' transform='translate(111.272 -31.864)'>2</text>
<text class="ellips-fokusy-f0" x='74.958' y='17.083' transform='translate(98.935 -72.48)' fill="var(--fig-b)">P</text>
</g>
</g>
</svg>`;
