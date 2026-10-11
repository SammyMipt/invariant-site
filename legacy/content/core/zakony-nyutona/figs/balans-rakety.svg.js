/* Собран конвейером из sources/physics1_summary/inputs/02/pics/balans_rakety.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs zakony-nyutona balans-rakety.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['balans-rakety'] = String.raw`<svg class="fig-tikz" width="459" height="124" viewBox="0 0 459 124" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Два кадра с ракетой, летящей вправо. Слева, в момент t, ракета массы m со стрелкой скорости v. Справа, в момент t плюс dt, ракета массы m плюс dm со стрелкой скорости v плюс dv, а позади её сопла порция газа dm газ со стрелкой скорости v газ, направленной назад. Внизу слева наблюдатель, стоящий вне ракеты.">
<style>text.balans-rakety-f0{font-family:larm0900;font-size:8.966px}text.balans-rakety-f1{font-family:cmmi10;font-size:10.909px}text.balans-rakety-f2{font-family:cmr10;font-size:10.909px}text.balans-rakety-f3{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 90.891) scale(1.375011)">

<g id='page1'>
<path d='m67.871 2.414v-66.613' stroke="currentColor" stroke-opacity="0.251" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 2.989'/>
<text class="balans-rakety-f3" x='-86.617' y='-25.933' transform='translate(49.011 -32.598)'>момент</text>
<text class="balans-rakety-f1" x='-46.845' y='-25.933' transform='translate(49.011 -32.598)'>t</text>
<path d='m-61.106-34.438h51.024l19.844 8.504l-19.844 8.504h-51.024z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m-61.106-34.438h51.024l19.844 8.504l-19.844 8.504h-51.024z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-61.106-34.438l-8.504-8.504l22.676 8.504z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m-61.106-34.438l-8.504-8.504l22.676 8.504z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-61.106-17.43l-8.504 8.504l22.676-8.504z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m-61.106-17.43l-8.504 8.504l22.676-8.504z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-61.106-30.184l-8.504-1.984v12.473l8.504-1.984z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m-61.106-30.184l-8.504-1.984v12.473l8.504-1.984z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="balans-rakety-f1" x='-86.617' y='-25.933' transform='translate(47.652 2.349)'>m</text>
<path d='m12.594-25.934h28.277' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m46.609-25.934c-1.699-.316-4.461-1.273-6.375-2.391v4.781c1.914-1.113 4.676-2.07 6.375-2.391' fill="var(--fig-a)"/>
<text class="balans-rakety-f1" x='-87.041' y='-25.933' transform='translate(113.381 -5.102)' fill="var(--fig-a)"><tspan x='-86.617'>v</tspan></text>
<g transform='translate(238.795 -32.598)'>
<text class="balans-rakety-f3" x='-86.617' y='-25.933'>момент</text>
<text class="balans-rakety-f1" x='-46.845' y='-25.933'>t</text>
<text class="balans-rakety-f2" x='-40.482' y='-25.933'>+</text>
<text class="balans-rakety-f1" x='-29.573' y='-25.933'>dt</text>
</g>
<path d='m129.098-30.184c-1.133-1.965-.629-3.648-2.266-4.594s-2.836 .34-5.102 .34s-3.468-1.285-5.101-.34c-1.637 .945-1.137 2.629-2.27 4.594c-1.132 1.961-2.836 2.363-2.836 4.25s1.704 2.289 2.836 4.254c1.133 1.961 .633 3.648 2.27 4.59c1.633 .945 2.836-.34 5.101-.34s3.465 1.285 5.102 .34c1.637-.941 1.133-2.629 2.266-4.59c1.132-1.965 2.836-2.367 2.836-4.254s-1.704-2.289-2.836-4.25z' fill="var(--fig-b)" fill-opacity="0.20"/>
<path d='m129.098-30.184c-1.133-1.965-.629-3.648-2.266-4.594s-2.836 .34-5.102 .34s-3.468-1.285-5.101-.34c-1.637 .945-1.137 2.629-2.27 4.594c-1.132 1.961-2.836 2.363-2.836 4.25s1.704 2.289 2.836 4.254c1.133 1.961 .633 3.648 2.27 4.59c1.633 .945 2.836-.34 5.101-.34s3.465 1.285 5.102 .34c1.637-.941 1.133-2.629 2.266-4.59c1.132-1.965 2.836-2.367 2.836-4.254s-1.704-2.289-2.836-4.25z' stroke="var(--fig-b)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="balans-rakety-f1" x='-86.617' y='-25.933' transform='translate(194.199 20.409)' fill="var(--fig-b)">dm</text>
<text class="balans-rakety-f0" x='-71.361' y='-24.296' transform='translate(194.199 20.409)' fill="var(--fig-b)">г<tspan x='-67.522'>аз</tspan></text>
<path d='m108.973-25.934h-22.606' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m80.625-25.934c1.703 .32 4.465 1.277 6.379 2.391v-4.781c-1.914 1.117-4.676 2.074-6.379 2.391'/>
<text class="balans-rakety-f1" x='-87.041' y='-25.933' transform='translate(172.254 -5.102)'><tspan x='-86.617'>v</tspan></text>
<text class="balans-rakety-f0" x='-81.329' y='-24.296' transform='translate(172.254 -5.102)'>г<tspan x='-77.49'>аз</tspan></text>
</g>
<path d='m151.492-34.438h51.024l19.843 8.504l-19.843 8.504h-51.024z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m151.492-34.438h51.024l19.843 8.504l-19.843 8.504h-51.024z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m151.492-34.438l-8.504-8.504l22.68 8.504z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m151.492-34.438l-8.504-8.504l22.68 8.504z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m151.492-17.43l-8.504 8.504l22.68-8.504z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m151.492-17.43l-8.504 8.504l22.68-8.504z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m151.492-30.184l-8.504-1.984v12.473l8.504-1.984z' fill="var(--fig-a)" fill-opacity="0.15"/>
<path d='m151.492-30.184l-8.504-1.984v12.473l8.504-1.984z' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g transform='translate(245.955 3.333)'>
<text class="balans-rakety-f1" x='-86.617' y='-25.933'>m</text>
<text class="balans-rakety-f2" x='-74.614' y='-25.933'>+</text>
<text class="balans-rakety-f1" x='-63.705' y='-25.933'>dm</text>
</g>
<path d='m225.195-25.934h32.528' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m263.461-25.934c-1.699-.316-4.461-1.273-6.375-2.391v4.781c1.914-1.113 4.676-2.07 6.375-2.391'/>
<g transform='translate(315.618 -5.102)'>
<text class="balans-rakety-f1" x='-87.041' y='-25.933'><tspan x='-86.617'>v</tspan></text>
<text class="balans-rakety-f2" x='-78.514' y='-25.933'>+</text>
<text class="balans-rakety-f1" x='-67.604' y='-25.933'>d<tspan x='-62.35'></tspan><tspan x='-61.926'>v</tspan></text>
</g>
</g>
<g stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'>
<path d='m-63.941 23.672h34.016'/>
<path d='m-43.246-5.523c0-2.035-1.652-3.684-3.688-3.684s-3.684 1.648-3.684 3.684s1.648 3.684 3.684 3.684s3.688-1.649 3.688-3.684z'/>
<path d='m-46.934-1.84v14.176'/>
<path d='m-46.934 12.336l-4.25 11.336'/>
<path d='m-46.934 12.336l4.254 11.336'/>
<path d='m-46.934 2.414l-4.535 7.938'/>
<path d='m-46.934 2.414l4.535 7.938'/>
</g>
<text class="balans-rakety-f3" x='-86.617' y='-25.933' transform='translate(66.462 39.685)'>наблю<tspan x='-55.886'>датель</tspan></text>
</g>
</g>
</svg>`;
