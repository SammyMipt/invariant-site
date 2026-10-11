/* Собран конвейером из sources/physics1_summary/inputs/01/pics/obod_kolesa.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kinematika obod-kolesa.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['obod-kolesa'] = String.raw`<svg class="fig-tikz" width="549" height="385" viewBox="0 0 549 385" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Одна и та же точка обода катящегося колеса в четырёх наборах осей: в неподвижных осях с началом на дороге она вычерчивает циклоиду с остриями и получает координаты 3,14R и 2R; в тех же осях, повёрнутых на 30 градусов, кривая та же, а числа становятся 3,72R и 0,16R; в осях, едущих с центром колеса, кривая становится окружностью с координатами 0 и R; в осях, привинченных к ободу, точка стоит на месте с координатами 0 и минус R">
<style>text.obod-kolesa-f0{font-family:cmsy9;font-size:8.966px}text.obod-kolesa-f1{font-family:cmsy10;font-size:10.909px}text.obod-kolesa-f2{font-family:cmmi10;font-size:10.909px}text.obod-kolesa-f3{font-family:cmr10;font-size:10.909px}text.obod-kolesa-f4{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.147 90.899) scale(1.375011)">

<g id='page1'>
<path d='m-45.691 16.281h169.781' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m127.676 16.281c-1.063-.203-2.789-.801-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(177.467 2.349)'>x</text>
<path d='m-45.691 16.281v-61.273' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-45.691-48.578c-.199 1.063-.797 2.789-1.492 3.984h2.988c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(-9.84 -63.569)'>y</text>
<path d='m57.621-8.664c0-13.777-11.168-24.945-24.945-24.945s-24.945 11.168-24.945 24.945c0 13.774 11.168 24.945 24.945 24.945s24.945-11.172 24.945-24.945z' fill="currentColor" fill-opacity="0.039"/>
<path d='m57.621-8.664c0-13.777-11.168-24.945-24.945-24.945s-24.945 11.168-24.945 24.945c0 13.774 11.168 24.945 24.945 24.945s24.945-11.172 24.945-24.945z' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m33.871-8.664c0-.66-.535-1.195-1.195-1.195s-1.195 .535-1.195 1.195s.535 1.195 1.195 1.195s1.195-.535 1.195-1.195z'/>
<g fill='none' stroke-miterlimit='10'>
<path d='m-45.691 16.281c0 0 0-.043 .004-.098c.004-.051 .008-.18 .02-.285c.012-.102 .031-.313 .051-.469c.023-.156 .066-.449 .102-.656c.039-.207 .109-.578 .168-.832s.164-.703 .246-1.004s.23-.824 .344-1.168c.109-.348 .305-.938 .449-1.328c.141-.387 .395-1.043 .57-1.469c.18-.426 .492-1.141 .707-1.605c.219-.461 .594-1.23 .852-1.727c.258-.492 .707-1.313 1.008-1.832c.305-.523 .824-1.387 1.172-1.934c.352-.547 .949-1.441 1.344-2.008c.398-.566 1.078-1.492 1.523-2.078c.449-.582 1.207-1.527 1.707-2.125c.5-.594 1.34-1.555 1.891-2.156c.555-.602 1.481-1.57 2.082-2.172c.605-.605 1.617-1.574 2.273-2.176s1.75-1.563 2.461-2.156c.707-.594 1.887-1.543 2.649-2.125c.758-.582 2.02-1.508 2.828-2.074c.813-.566 2.152-1.465 3.012-2.012s2.274-1.406 3.18-1.93s2.399-1.34 3.348-1.836c.949-.492 2.508-1.266 3.5-1.727s2.617-1.176 3.648-1.606c1.031-.426 2.715-1.082 3.781-1.469s2.805-.981 3.902-1.324c1.098-.348 2.887-.867 4.012-1.172c1.129-.301 2.957-.746 4.109-1.004c1.148-.254 3.016-.625 4.188-.832c1.168-.207 3.063-.5 4.25-.656s3.106-.363 4.301-.469c1.199-.105 3.129-.23 4.336-.285c1.203-.051 3.145-.094 4.352-.094s3.145 .043 4.348 .094c1.207 .055 3.137 .18 4.336 .285c1.199 .102 3.113 .313 4.301 .469s3.082 .449 4.254 .656c1.172 .203 3.035 .578 4.188 .832c1.148 .254 2.98 .703 4.105 1.004s2.914 .824 4.012 1.168c1.098 .348 2.84 .938 3.902 1.328c1.067 .387 2.754 1.043 3.782 1.469c1.031 .426 2.656 1.141 3.648 1.606c.992 .461 2.551 1.23 3.504 1.723c.949 .496 2.437 1.316 3.344 1.836c.906 .523 2.324 1.383 3.183 1.93c.86 .547 2.2 1.445 3.008 2.012c.813 .566 2.07 1.492 2.832 2.074c.762 .586 1.942 1.531 2.649 2.125s1.804 1.559 2.461 2.16c.656 .598 1.668 1.57 2.273 2.172c.602 .602 1.527 1.574 2.082 2.172c.551 .602 1.391 1.566 1.891 2.16s1.257 1.543 1.707 2.125c.449 .582 1.125 1.508 1.523 2.074c.399 .566 .996 1.465 1.344 2.012s.867 1.406 1.172 1.93c.301 .523 .75 1.34 1.008 1.836c.257 .492 .636 1.266 .851 1.727s.531 1.176 .707 1.605c.176 .426 .43 1.082 .574 1.469c.141 .387 .34 .98 .45 1.324c.109 .348 .257 .867 .339 1.172c.082 .301 .192 .75 .25 1.004c.055 .254 .129 .625 .164 .832c.04 .207 .083 .5 .102 .656c.02 .156 .043 .363 .051 .469c.012 .105 .019 .23 .019 .285c.004 .051 .004 .094 .004 .094' stroke="var(--fig-a)" stroke-width='1.196'/>
<g stroke="var(--fig-b)" stroke-width='.399'>
<path d='m32.676-33.609v49.891' stroke-dasharray='2.989 2.989'/>
<path d='m32.676-33.609h-78.367' stroke-dasharray='2.989 2.989'/>
<path d='m32.676 18.773v-4.988'/>
<path d='m-48.184-33.609h4.988'/>
</g>
</g>
<path d='m35.066-33.609c0-1.32-1.07-2.391-2.391-2.391s-2.391 1.07-2.391 2.391s1.07 2.391 2.391 2.391s2.391-1.07 2.391-2.391z' fill="var(--fig-a)"/>
<path d='m110.84 27.504l.125-9.23' stroke="currentColor" stroke-opacity="0.349" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<g transform='translate(64.487 15.139)' fill="var(--fig-b)">
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>3</text>
<text class="obod-kolesa-f2" x='-40.236' y='16.279'>,</text>
<text class="obod-kolesa-f3" x='-37.205' y='16.279'>14</text>
<text class="obod-kolesa-f2" x='-26.296' y='16.279'>R</text>
</g>
<text class="obod-kolesa-f3" x='-45.69' y='16.279' transform='translate(-20.417 -42.421)' fill="var(--fig-b)">2</text>
<text class="obod-kolesa-f2" x='-40.236' y='16.279' transform='translate(-20.417 -42.421)' fill="var(--fig-b)">R</text>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(8.928 -62.146)' fill="var(--fig-a)">циклоида</text>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(139.732 20.745)'>острия</text>
<g transform='translate(50.557 32.661)' fill="var(--fig-b)">
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>(3</text>
<text class="obod-kolesa-f2" x='-35.993' y='16.279'>,</text>
<text class="obod-kolesa-f3" x='-32.963' y='16.279'>14</text>
<text class="obod-kolesa-f2" x='-22.054' y='16.279'>R</text>
<text class="obod-kolesa-f3" x='-13.686' y='16.279'>;<tspan x='-5.221'>2</tspan></text>
<text class="obod-kolesa-f2" x='.234' y='16.279'>R</text>
<text class="obod-kolesa-f3" x='8.601' y='16.279'>)</text>
</g>
<g transform='translate(54.831 45.69)'>
<text class="obod-kolesa-f4" x='-45.69' y='16.279'>при</text>
<text class="obod-kolesa-f2" x='-23.996' y='16.279'>ϕ</text>
<text class="obod-kolesa-f3" x='-13.829' y='16.279'>=</text>
<text class="obod-kolesa-f2" x='-2.314' y='16.279'>π</text>
</g>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(39.601 -76.042)'>оси<tspan x='-25.803'>прикручены</tspan></text>
<path d='m166.344 16.281h167.129' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m171.332 16.281l89.789-51.84' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m264.226-37.352c-1.02 .359-2.812 .703-4.199 .699l1.496 2.586c.687-1.199 1.883-2.582 2.703-3.285'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(314.016 -49.162)'>x</text>
<text class="obod-kolesa-f0" x='-39.455' y='12.321' transform='translate(314.016 -49.162)'></text>
<path d='m171.332 16.281l-33.129-57.387' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m136.411-44.211c.355 1.02 .703 2.816 .695 4.199l2.59-1.496c-1.203-.684-2.582-1.883-3.285-2.703'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(169.256 -57.08)'>y</text>
<text class="obod-kolesa-f0" x='-39.95' y='12.321' transform='translate(169.256 -57.08)'></text>
<g fill='none' stroke-miterlimit='10'>
<path d='m171.332 16.281c0 0 0-.043 .004-.098c0-.051 .008-.18 .02-.285c.008-.102 .027-.313 .051-.469c.019-.156 .062-.449 .101-.656c.035-.207 .109-.578 .164-.832c.059-.254 .168-.703 .25-1.004s.231-.824 .34-1.168c.109-.348 .309-.938 .449-1.328c.145-.387 .395-1.043 .574-1.469c.176-.426 .489-1.141 .707-1.605c.215-.461 .594-1.23 .852-1.727c.258-.492 .703-1.313 1.008-1.832c.301-.523 .82-1.387 1.172-1.934c.347-.547 .945-1.441 1.343-2.008c.399-.566 1.075-1.492 1.524-2.078c.445-.582 1.203-1.527 1.703-2.125c.5-.594 1.344-1.555 1.895-2.156c.55-.602 1.476-1.57 2.082-2.172c.601-.605 1.613-1.574 2.269-2.176c.66-.602 1.754-1.563 2.461-2.156c.711-.594 1.891-1.543 2.649-2.125c.761-.582 2.019-1.508 2.832-2.074c.808-.566 2.148-1.465 3.007-2.012s2.278-1.406 3.184-1.93s2.394-1.34 3.344-1.836c.953-.492 2.511-1.266 3.504-1.727c.992-.461 2.617-1.176 3.644-1.606c1.031-.426 2.715-1.082 3.781-1.469c1.067-.387 2.809-.981 3.907-1.324c1.097-.348 2.882-.867 4.011-1.172c1.125-.301 2.953-.746 4.106-1.004c1.152-.254 3.015-.625 4.187-.832s3.067-.5 4.254-.656c1.184-.156 3.102-.363 4.301-.469s3.129-.23 4.332-.285c1.207-.051 3.145-.094 4.352-.094s3.144 .043 4.351 .094c1.203 .055 3.137 .18 4.332 .285c1.199 .102 3.117 .313 4.305 .469c1.183 .156 3.078 .449 4.25 .656c1.172 .203 3.039 .578 4.187 .832c1.153 .254 2.981 .703 4.11 1.004c1.125 .301 2.914 .824 4.011 1.168c1.098 .348 2.836 .938 3.903 1.328c1.066 .387 2.75 1.043 3.781 1.469s2.656 1.141 3.649 1.606c.988 .461 2.55 1.23 3.5 1.723c.949 .496 2.441 1.316 3.347 1.836c.906 .523 2.32 1.383 3.18 1.93s2.199 1.445 3.012 2.012c.808 .566 2.07 1.492 2.832 2.074c.757 .586 1.937 1.531 2.644 2.125c.711 .594 1.805 1.559 2.461 2.16c.66 .598 1.668 1.57 2.274 2.172s1.531 1.574 2.082 2.172c.55 .602 1.394 1.566 1.894 2.16s1.258 1.543 1.703 2.125c.449 .582 1.125 1.508 1.524 2.074c.398 .566 .996 1.465 1.343 2.012c.352 .547 .871 1.406 1.172 1.93c.305 .523 .75 1.34 1.008 1.836c.262 .492 .637 1.266 .856 1.727c.214 .461 .527 1.176 .703 1.605c.179 .426 .433 1.082 .574 1.469s.34 .98 .449 1.324c.113 .348 .262 .867 .344 1.172c.082 .301 .187 .75 .246 1.004s.129 .625 .168 .832c.035 .207 .078 .5 .101 .656c.02 .156 .04 .363 .051 .469c.008 .105 .016 .23 .02 .285c.004 .051 .004 .094 .004 .094' stroke="var(--fig-a)" stroke-width='1.196'/>
<g stroke="var(--fig-b)" stroke-width='.399'>
<path d='m249.7-33.609l2.011 3.484' stroke-dasharray='2.989 2.989'/>
<path d='m249.7-33.609l-80.379 46.402' stroke-dasharray='2.989 2.989'/>
<path d='m249.715-33.582l3.988 6.91'/>
<path d='m165.864 14.789l6.914-3.988'/>
<path d='m207.5 16.281c0-6.348-1.672-12.59-4.843-18.086'/>
<path d='m155.117 2.559l11.848 9.355'/>
</g>
</g>
<path d='m252.09-33.609c0-1.32-1.07-2.391-2.39-2.391s-2.391 1.07-2.391 2.391s1.07 2.391 2.391 2.391s2.39-1.07 2.39-2.391z' fill="var(--fig-a)"/>
<g fill="var(--fig-b)">
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(257.166 -7.629)'>α</text>
<g transform='translate(270.911 -16.666)'>
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>3</text>
<text class="obod-kolesa-f2" x='-40.236' y='16.279'>,</text>
<text class="obod-kolesa-f3" x='-37.205' y='16.279'>72</text>
<text class="obod-kolesa-f2" x='-26.296' y='16.279'>R</text>
</g>
<g transform='translate(166.451 -13.547)'>
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>0</text>
<text class="obod-kolesa-f2" x='-40.236' y='16.279'>,</text>
<text class="obod-kolesa-f3" x='-37.205' y='16.279'>16</text>
<text class="obod-kolesa-f2" x='-26.296' y='16.279'>R</text>
</g>
</g>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(217.629 -62.322)' fill="var(--fig-a)">т<tspan x='-40.568'>а</tspan><tspan x='-31.527'>ж</tspan><tspan x='-22.792'>е</tspan><tspan x='-14.353'>кривая</tspan></text>
<g transform='translate(258.738 32.661)' fill="var(--fig-b)">
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>(3</text>
<text class="obod-kolesa-f2" x='-35.993' y='16.279'>,</text>
<text class="obod-kolesa-f3" x='-32.963' y='16.279'>72</text>
<text class="obod-kolesa-f2" x='-22.054' y='16.279'>R</text>
<text class="obod-kolesa-f3" x='-13.686' y='16.279'>;<tspan x='-5.221'>0</tspan></text>
<text class="obod-kolesa-f2" x='.234' y='16.279'>,</text>
<text class="obod-kolesa-f3" x='3.264' y='16.279'>16</text>
<text class="obod-kolesa-f2" x='14.173' y='16.279'>R</text>
<text class="obod-kolesa-f3" x='22.54' y='16.279'>)</text>
</g>
<g transform='translate(269.981 45.69)'>
<text class="obod-kolesa-f4" x='-45.69' y='16.279'>при</text>
<text class="obod-kolesa-f2" x='-23.996' y='16.279'>ϕ</text>
<text class="obod-kolesa-f3" x='-13.829' y='16.279'>=</text>
<text class="obod-kolesa-f2" x='-2.314' y='16.279'>π</text>
</g>
<g transform='translate(241.318 -74.394)'>
<text class="obod-kolesa-f4" x='-45.69' y='16.279'>оси<tspan x='-25.803'>повёрнуты</tspan><tspan x='30.541'>на</tspan></text>
<text class="obod-kolesa-f3" x='45.608' y='16.279'>30</text>
<text class="obod-kolesa-f0" x='56.517' y='12.321'>◦</text>
</g>
<path d='m-31.348 162.832h140.316' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m52.844 137.886c0-13.777-11.168-24.945-24.945-24.945s-24.945 11.168-24.945 24.945s11.168 24.946 24.945 24.946s24.945-11.168 24.945-24.946z' fill="currentColor" fill-opacity="0.039"/>
<path d='m27.898 137.886h65.011' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m96.496 137.886c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(146.286 123.956)'>x</text>
<path d='m27.898 137.886v-48.175' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m27.898 86.125c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(63.748 71.134)'>y</text>
<path d='m52.844 137.886c0-13.777-11.168-24.945-24.945-24.945s-24.945 11.168-24.945 24.945s11.168 24.946 24.945 24.946s24.945-11.168 24.945-24.946z' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m29.094 137.886c0-.66-.535-1.195-1.195-1.195s-1.195 .535-1.195 1.195c0 .661 .535 1.196 1.195 1.196s1.195-.535 1.195-1.196z'/>
<path d='m30.09 162.832c0-1.211-.98-2.192-2.191-2.192s-2.191 .981-2.191 2.192s.981 2.191 2.191 2.191s2.191-.98 2.191-2.191z' stroke="currentColor" stroke-opacity="0.349" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m25.402 112.941h4.988' stroke="var(--fig-b)" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m30.289 112.941c0-1.32-1.07-2.391-2.391-2.391s-2.391 1.07-2.391 2.391s1.07 2.391 2.391 2.391s2.391-1.07 2.391-2.391z' fill="var(--fig-a)"/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(76.389 115.357)' fill="var(--fig-b)">R</text>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(91.306 103.563)' fill="var(--fig-a)">окружность</text>
<g transform='translate(58.202 181.084)'>
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>(0;</text>
<text class="obod-kolesa-f2" x='-27.528' y='16.279'>R</text>
<text class="obod-kolesa-f3" x='-19.16' y='16.279'>)</text>
</g>
<g transform='translate(48.595 193.989)'>
<text class="obod-kolesa-f4" x='-45.69' y='16.279'>при</text>
<text class="obod-kolesa-f2" x='-23.996' y='16.279'>ϕ</text>
<text class="obod-kolesa-f3" x='-13.829' y='16.279'>=</text>
<text class="obod-kolesa-f2" x='-2.314' y='16.279'>π</text>
</g>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(26.883 63.65)'>оси<tspan x='-25.803'>едут</tspan><tspan x='-.19'>с</tspan><tspan x='8.248'>к</tspan><tspan x='13.973'>олесом</tspan></text>
<path d='m180.688 162.832h112.25' stroke="currentColor" stroke-opacity="0.251" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m258.641 137.886c0-13.777-11.168-24.945-24.945-24.945c-13.778 0-24.946 11.168-24.946 24.945s11.168 24.946 24.946 24.946c13.777 0 24.945-11.168 24.945-24.946z' fill="currentColor" fill-opacity="0.039"/>
<g fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m258.641 137.886c0-13.777-11.168-24.945-24.945-24.945c-13.778 0-24.946 11.168-24.946 24.945s11.168 24.946 24.946 24.946c13.777 0 24.945-11.168 24.945-24.946z' stroke="currentColor"/>
<path d='m233.696 137.886h43.652' stroke="currentColor" stroke-opacity="0.224" stroke-dasharray='2.989 2.989'/>
<path d='m233.696 137.886v-51.136' stroke="currentColor" stroke-opacity="0.224" stroke-dasharray='2.989 2.989'/>
<path d='m235.887 162.832c0-1.211-.98-2.192-2.191-2.192s-2.192 .981-2.192 2.192s.981 2.191 2.192 2.191s2.191-.98 2.191-2.191z' stroke="currentColor" stroke-opacity="0.298"/>
<path d='m233.696 137.886l20.031 34.7' stroke="currentColor"/>
</g>
<path d='m255.519 175.692c-.359-1.02-.703-2.816-.695-4.199l-2.59 1.496c1.203 .684 2.582 1.883 3.285 2.703'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(303.452 169.731)'>x</text>
<text class="obod-kolesa-f0" x='-39.455' y='12.321' transform='translate(303.452 169.731)'></text>
<path d='m233.696 137.886l41.175-23.777' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m277.977 112.316c-1.02 .359-2.813 .707-4.199 .699l1.496 2.59c.688-1.203 1.883-2.582 2.703-3.289'/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(327.767 99.448)'>y</text>
<text class="obod-kolesa-f0" x='-39.95' y='12.321' transform='translate(327.767 99.448)'></text>
<path d='m266.121 137.886c0 11.582-6.179 22.293-13.105 26.289' stroke="var(--fig-b)" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m249.906 165.969c1.023-.355 2.816-.703 4.199-.695l-1.492-2.59c-.687 1.203-1.883 2.582-2.707 3.285' fill="var(--fig-b)"/>
<path d='m234.891 137.886c0-.66-.535-1.195-1.195-1.195c-.661 0-1.196 .535-1.196 1.195c0 .661 .535 1.196 1.196 1.196c.66 0 1.195-.535 1.195-1.196z'/>
<path d='m214.485 150.359c0-1.32-1.075-2.391-2.395-2.391s-2.39 1.071-2.39 2.391s1.07 2.391 2.39 2.391s2.395-1.071 2.395-2.391z' fill="var(--fig-a)"/>
<text class="obod-kolesa-f2" x='-45.69' y='16.279' transform='translate(313.233 144.099)' fill="var(--fig-b)">ϕ</text>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(196.374 105.246)' fill="var(--fig-a)">точк<tspan x='-23.093'>а</tspan><tspan x='-14.052'>стоит</tspan></text>
<g transform='translate(259.755 181.084)'>
<text class="obod-kolesa-f3" x='-45.69' y='16.279'>(0;</text>
<text class="obod-kolesa-f1" x='-27.528' y='16.279'>−</text>
<text class="obod-kolesa-f2" x='-19.043' y='16.279'>R</text>
<text class="obod-kolesa-f3" x='-10.676' y='16.279'>)</text>
</g>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(247.042 195.397)'>при<tspan x='-23.996'>любом</tspan></text>
<text class="obod-kolesa-f2" x='11.858' y='16.279' transform='translate(247.042 195.397)'>ϕ</text>
<text class="obod-kolesa-f4" x='-45.69' y='16.279' transform='translate(248.498 65.236)'>оси<tspan x='-25.803'>на</tspan><tspan x='-10.736'>обо</tspan><tspan x='5.234'>де</tspan></text>
</g>
</g>
</svg>`;
