/* Собран конвейером из sources/physics1_summary/inputs/01/pics/traektoriya_izlom_razryv.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kinematika traektoriya-izlom-razryv.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['traektoriya-izlom-razryv'] = String.raw`<svg class="fig-tikz" width="489" height="234" viewBox="0 0 489 234" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Два запрещённых случая. Слева траектория обрывается и продолжается в стороне: такой прыжок означал бы телепортацию. Справа машина едет на север и без остановки уходит на восток, и в углу вектор скорости скачком меняется с (0; v) на (v; 0)">
<style>text.traektoriya-izlom-razryv-f0{font-family:cmmi10;font-size:10.909px}text.traektoriya-izlom-razryv-f1{font-family:cmr10;font-size:10.909px}text.traektoriya-izlom-razryv-f2{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 90.991) scale(1.375011)">

<g id='page1'>
<path d='m-69.609 66.551c20.691-15.024 35.715-32.598 51.875-53.856' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m41.227 40.191c16.156-13.891 30.046-31.464 42.23-47.328' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m86.297-10.832c-1.047 .937-3.031 2.242-4.695 2.922l3.078 2.367c.23-1.785 .98-4.039 1.617-5.289'/>
<path d='m-15.145 12.695c0-1.433-1.16-2.59-2.59-2.59s-2.59 1.157-2.59 2.59c0 1.43 1.16 2.59 2.59 2.59s2.59-1.16 2.59-2.59z' fill="var(--fig-back)"/>
<path d='m-15.145 12.695c0-1.433-1.16-2.59-2.59-2.59s-2.59 1.157-2.59 2.59c0 1.43 1.16 2.59 2.59 2.59s2.59-1.16 2.59-2.59z' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m43.816 40.191c0-1.434-1.16-2.59-2.589-2.59c-1.434 0-2.59 1.156-2.59 2.59c0 1.43 1.156 2.59 2.59 2.59c1.429 0 2.589-1.16 2.589-2.59z' fill="var(--fig-back)"/>
<path d='m43.816 40.191c0-1.434-1.16-2.59-2.589-2.59c-1.434 0-2.59 1.156-2.59 2.59c0 1.43 1.156 2.59 2.59 2.59c1.429 0 2.589-1.16 2.589-2.59z' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-13.199 14.68l44.945 21.148' stroke="var(--fig-b)" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 2.989'/>
<path d='m34.988 37.355c-.875-.633-2.184-1.91-2.969-3.051l-1.273 2.707c1.379-.121 3.195 .07 4.242 .344' fill="var(--fig-b)"/>
<text class="traektoriya-izlom-razryv-f2" x='-104.192' y='115.308' transform='translate(100.872 -173.902)'>обрыв</text>
<text class="traektoriya-izlom-razryv-f2" x='-104.192' y='115.308' transform='translate(54.546 -13.736)' fill="currentColor" fill-opacity="0.698">телепорт<tspan x='-60.502'>ация</tspan><tspan x='-33.534'>запрещена</tspan></text>
<path d='m190.328 81.574v-70.297h82.926' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m277.918 11.277c-1.383-.262-3.625-1.035-5.18-1.945v3.887c1.555-.906 3.797-1.684 5.18-1.941'/>
<path d='m192.121 11.277c0-.992-.805-1.793-1.793-1.793c-.992 0-1.793 .801-1.793 1.793c0 .989 .801 1.793 1.793 1.793c.988 0 1.793-.804 1.793-1.793z'/>
<path d='m190.328 11.277v-31.679' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m190.329-26.141c-.32 1.699-1.277 4.465-2.391 6.375h4.781c-1.117-1.91-2.074-4.676-2.391-6.375' fill="var(--fig-a)"/>
<path d='m190.328 11.277h31.68' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m227.747 11.277c-1.703-.32-4.465-1.277-6.379-2.391v4.781c1.914-1.117 4.676-2.074 6.379-2.391' fill="var(--fig-a)"/>
<path d='m195.145-23.875l26.558 26.559' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m225.762 6.742c-.977-1.43-2.254-4.059-2.82-6.199l-3.379 3.379c2.141 .566 4.77 1.844 6.199 2.82' fill="var(--fig-b)"/>
<g transform='translate(257.233 -135.037)' fill="var(--fig-a)">
<text class="traektoriya-izlom-razryv-f1" x='-104.192' y='115.308'>(0;</text>
<text class="traektoriya-izlom-razryv-f0" x='-86.029' y='115.308'>v</text>
<text class="traektoriya-izlom-razryv-f1" x='-80.35' y='115.308'>)</text>
</g>
<g transform='translate(342.84 -112.076)' fill="var(--fig-a)">
<text class="traektoriya-izlom-razryv-f1" x='-104.192' y='115.308'>(</text>
<text class="traektoriya-izlom-razryv-f0" x='-99.949' y='115.308'>v</text>
<text class="traektoriya-izlom-razryv-f1" x='-94.27' y='115.308'>;<tspan x='-85.804'>0)</tspan></text>
</g>
<text class="traektoriya-izlom-razryv-f2" x='-104.192' y='115.308' transform='translate(292.229 -174.25)'>излом</text>
<text class="traektoriya-izlom-razryv-f2" x='-104.192' y='115.308' transform='translate(244.338 -61.925)'>на<tspan x='-89.125'>север</tspan></text>
<text class="traektoriya-izlom-razryv-f2" x='-104.192' y='115.308' transform='translate(342.715 -86.093)'>на<tspan x='-89.125'>восток</tspan></text>
<text class="traektoriya-izlom-razryv-f2" x='-104.192' y='115.308' transform='translate(290.42 -12.676)' fill="var(--fig-b)">ск<tspan x='-93.646'>а</tspan><tspan x='-88.523'>чок</tspan></text>
</g>
</g>
</svg>`;
