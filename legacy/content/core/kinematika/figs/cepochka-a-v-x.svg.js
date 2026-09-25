/* Собран конвейером из sources/physics1_summary/inputs/01/pics/cepochka_a_v_x.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kinematika cepochka-a-v-x.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['cepochka-a-v-x'] = String.raw`<svg class="fig-tikz" width="570" height="191" viewBox="0 0 570 191" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Три графика подряд: постоянное ускорение с прямоугольной площадью at, скорость v0 плюс at с площадью из прямоугольника v0t и треугольника at в квадрате пополам, и парабола координаты; между графиками стрелки с подписью площадь">
<style>text.cepochka-a-v-x-f0{font-family:cmmi10;font-size:10.909px}text.cepochka-a-v-x-f1{font-family:cmr9;font-size:8.966px}text.cepochka-a-v-x-f2{font-family:cmr10;font-size:10.909px}text.cepochka-a-v-x-f3{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(97.766 91.070) scale(1.375011)">

<g id='page1'>
<path d='m-69.609 36.164v-42.52h85.039v42.52z' fill="currentColor" fill-opacity="0.078"/>
<g fill='none' stroke-miterlimit='10'>
<path d='m-69.609 36.164v-42.52h85.039v42.52z' stroke="var(--fig-a)" stroke-width='.598'/>
<path d='m-69.609-6.356h89.293' stroke="currentColor" stroke-width='.797'/>
<path d='m-69.609 36.164h88.539' stroke="currentColor" stroke-width='.399'/>
</g>
<path d='m22.516 36.164c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<path d='m-69.609 36.164v-88.539' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-69.609-55.965c-.199 1.063-.797 2.793-1.492 3.988h2.988c-.699-1.195-1.297-2.926-1.496-3.988'/>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(37.667 -18.613)' fill="var(--fig-a)">at</text>
<path d='m87.715 36.164v-22.68h85.039v22.68z' fill="currentColor" fill-opacity="0.078"/>
<path d='m87.715 36.164v-22.68h85.039v22.68z' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m87.715 13.484h85.039v-42.52z' fill="currentColor" fill-opacity="0.078"/>
<g fill='none' stroke-miterlimit='10'>
<path d='m87.715 13.484h85.039v-42.52z' stroke="var(--fig-a)" stroke-width='.598'/>
<path d='m87.715 13.484l89.289-44.645' stroke="currentColor" stroke-width='.797'/>
<path d='m87.715 36.164h88.539' stroke="currentColor" stroke-width='.399'/>
</g>
<path d='m179.84 36.164c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<path d='m87.715 36.164v-88.539' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m87.715-55.965c-.199 1.063-.797 2.793-1.496 3.988h2.988c-.695-1.195-1.293-2.926-1.492-3.988'/>
<path d='m84.879 13.484h5.668' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<g transform='translate(185.589 -9.703)' fill="var(--fig-a)">
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163'>v</text>
<text class="cepochka-a-v-x-f1" x='-64.321' y='38.183'>0</text>
<text class="cepochka-a-v-x-f0" x='-59.215' y='36.163'>t</text>
</g>
<g transform='translate(200.647 -29.093)' fill="var(--fig-a)">
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163'>at</text>
<text class="cepochka-a-v-x-f1" x='-59.903' y='32.204'>2</text>
<text class="cepochka-a-v-x-f0" x='-56.615' y='36.163'>/</text>
<text class="cepochka-a-v-x-f2" x='-51.161' y='36.163'>2</text>
</g>
<path d='m245.035 24.117c0 0 1.539-.652 2.129-.91s1.535-.68 2.125-.949c.59-.273 1.535-.715 2.125-.996c.59-.285 1.535-.746 2.125-1.043c.59-.293 1.535-.777 2.125-1.086c.59-.305 1.535-.809 2.125-1.129c.59-.316 1.535-.84 2.125-1.172s1.535-.875 2.125-1.219s1.535-.906 2.125-1.262s1.539-.938 2.129-1.305c.59-.371 1.535-.969 2.125-1.352c.59-.379 1.535-1 2.125-1.395s1.535-1.031 2.125-1.438s1.535-1.066 2.125-1.484s1.535-1.098 2.125-1.527s1.535-1.129 2.125-1.57c.59-.445 1.535-1.164 2.125-1.617c.59-.457 1.539-1.195 2.129-1.66c.59-.469 1.535-1.227 2.125-1.707c.59-.477 1.535-1.258 2.125-1.746c.59-.492 1.535-1.289 2.125-1.793s1.535-1.324 2.125-1.84s1.535-1.352 2.125-1.879c.59-.531 1.535-1.387 2.125-1.926c.59-.543 1.535-1.418 2.125-1.973c.59-.551 1.539-1.449 2.125-2.016c.59-.563 1.539-1.481 2.129-2.059c.59-.574 1.535-1.512 2.125-2.102s1.535-1.547 2.125-2.148s1.535-1.578 2.125-2.191s1.535-1.609 2.125-2.234c.59-.629 1.535-1.641 2.125-2.281c.59-.637 1.535-1.672 2.125-2.324s1.535-1.703 2.125-2.367s1.539-1.738 2.129-2.414s1.535-1.77 2.125-2.457s1.535-1.801 2.125-2.5c.59-.703 1.535-1.836 2.125-2.547s1.535-1.863 2.125-2.59s2.125-2.637 2.125-2.637' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m245.035 36.164h88.543' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m337.164 36.164c-1.063-.199-2.789-.797-3.988-1.496v2.988c1.199-.695 2.926-1.293 3.988-1.492'/>
<path d='m245.035 36.164v-88.539' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m245.035-55.965c-.199 1.063-.797 2.793-1.492 3.988h2.988c-.699-1.195-1.297-2.926-1.496-3.988'/>
<path d='m242.203 24.117h5.668' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m36.691-7.773h36.782' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m79.211-7.773c-1.703-.32-4.465-1.277-6.379-2.391v4.781c1.914-1.117 4.676-2.074 6.379-2.391' fill="var(--fig-b)"/>
<path d='m194.012-7.773h36.781' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m236.531-7.773c-1.699-.32-4.461-1.277-6.375-2.391v4.781c1.914-1.117 4.676-2.074 6.375-2.391'/>
<text class="cepochka-a-v-x-f3" x='-69.609' y='36.163' transform='translate(106.017 -55.229)'>площадь</text>
<text class="cepochka-a-v-x-f3" x='-69.609' y='36.163' transform='translate(263.34 -55.229)'>площадь</text>
</g>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(9.769 -97.573)'>a</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(167.092 -97.573)'>v</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(324.415 -97.573)'>x</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(94.808 12.568)'>t</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(252.131 12.568)'>t</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(409.454 12.568)'>t</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(135.743 -21.339)'>v</text>
<text class="cepochka-a-v-x-f1" x='-64.321' y='38.183' transform='translate(135.743 -21.339)'>0</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(292.119 -10.709)'>x</text>
<text class="cepochka-a-v-x-f1" x='-63.374' y='38.183' transform='translate(292.119 -10.709)'>0</text>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163' transform='translate(19.909 33.827)'>a</text>
<text class="cepochka-a-v-x-f2" x='-60.812' y='36.163' transform='translate(19.909 33.827)'>=<tspan x='-49.297'>const</tspan></text>
<g transform='translate(173.014 32.817)'>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163'>v</text>
<text class="cepochka-a-v-x-f2" x='-60.899' y='36.163'>=</text>
<text class="cepochka-a-v-x-f0" x='-49.384' y='36.163'>v</text>
<text class="cepochka-a-v-x-f1" x='-44.096' y='38.183'>0</text>
<text class="cepochka-a-v-x-f2" x='-36.566' y='36.163'>+</text>
<text class="cepochka-a-v-x-f0" x='-25.657' y='36.163'>at</text>
</g>
<g transform='translate(307.745 33.977)'>
<text class="cepochka-a-v-x-f0" x='-69.609' y='36.163'>x</text>
<text class="cepochka-a-v-x-f2" x='-60.344' y='36.163'>=</text>
<text class="cepochka-a-v-x-f0" x='-48.829' y='36.163'>x</text>
<text class="cepochka-a-v-x-f1" x='-42.594' y='38.183'>0</text>
<text class="cepochka-a-v-x-f2" x='-35.064' y='36.163'>+</text>
<text class="cepochka-a-v-x-f0" x='-24.155' y='36.163'>v</text>
<text class="cepochka-a-v-x-f1" x='-18.867' y='38.183'>0</text>
<text class="cepochka-a-v-x-f0" x='-13.761' y='36.163'>t</text>
<text class="cepochka-a-v-x-f2" x='-7.397' y='36.163'>+</text>
<text class="cepochka-a-v-x-f0" x='3.512' y='36.163'>at</text>
<text class="cepochka-a-v-x-f1" x='13.217' y='32.204'>2</text>
<text class="cepochka-a-v-x-f0" x='18.323' y='36.163'>/</text>
<text class="cepochka-a-v-x-f2" x='23.778' y='36.163'>2</text>
</g>
</g>
</g>
</svg>`;
