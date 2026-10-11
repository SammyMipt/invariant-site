/* Собран конвейером из sources/physics1_summary/inputs/04/pics/tri_mnozhitelya.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs moment-impulsa tri-mnozhitelya.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['tri-mnozhitelya'] = String.raw`<svg class="fig-tikz" width="513" height="204" viewBox="0 0 513 204" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Три панели с одной и той же парой тел, 1 и 2, и силами их взаимодействия на линии между ними. В первой силы умножены на общий промежуток времени dt. Во второй у тел разные перемещения dr1 и dr2. В третьей из полюса O проведены радиус-векторы тел, и вектор r1 минус r2 лежит на той же линии, что и силы">
<style>text.tri-mnozhitelya-f0{font-family:cmsy10;font-size:10.909px}text.tri-mnozhitelya-f1{font-family:cmmi10;font-size:10.909px}text.tri-mnozhitelya-f2{font-family:cmr9;font-size:8.966px}text.tri-mnozhitelya-f3{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 90.891) scale(1.375011)">

<g id='page1'>
<path d='m-62.637-31.578l90.426 31.184' stroke="currentColor" stroke-opacity="0.349" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-62.637-31.578l22.578 7.793' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m-34.633-21.91c-1.504-.855-3.805-2.664-5.25-4.34l-1.559 4.52c2.172-.434 5.094-.434 6.809-.18' fill="var(--fig-b)"/>
<path d='m27.789-.395l-22.574-7.797' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m-.211-10.063c1.504 .855 3.805 2.664 5.246 4.34l1.563-4.52c-2.172 .43-5.098 .434-6.809 .18' fill="var(--fig-b)"/>
<path d='m-55.66-31.578c0-3.852-3.125-6.973-6.977-6.973s-6.973 3.121-6.973 6.973s3.121 6.977 6.973 6.977s6.977-3.125 6.977-6.977z' fill="var(--fig-back)"/>
<path d='m-55.66-31.578c0-3.852-3.125-6.973-6.977-6.973s-6.973 3.121-6.973 6.973s3.121 6.977 6.973 6.977s6.977-3.125 6.977-6.977z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m34.765-.395c0-3.852-3.125-6.977-6.976-6.977s-6.973 3.125-6.973 6.977s3.121 6.973 6.973 6.973s6.976-3.121 6.976-6.973z' fill="var(--fig-back)"/>
<path d='m34.765-.395c0-3.852-3.125-6.977-6.976-6.977s-6.973 3.125-6.973 6.977s3.121 6.973 6.973 6.973s6.976-3.121 6.976-6.973z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(8.202 -51.065)'>1</text>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(98.627 -19.884)'>2</text>
<path d='m71.445-31.578l90.426 31.184' stroke="currentColor" stroke-opacity="0.349" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m71.445-31.578l6.332-24.07' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m79.238-61.199c-.738 1.562-2.367 3.992-3.934 5.559l4.625 1.215c-.594-2.133-.816-5.047-.691-6.773'/>
<path d='m161.871-.395l23.953 3.781' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m191.492 4.281c-1.629-.582-4.211-1.957-5.926-3.355l-.746 4.723c2.063-.805 4.941-1.316 6.672-1.367'/>
<path d='m71.445-31.578l22.574 7.793' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m99.445-21.91c-1.504-.855-3.805-2.664-5.246-4.34l-1.562 4.52c2.172-.434 5.098-.434 6.809-.18' fill="var(--fig-b)"/>
<path d='m161.871-.395l-22.578-7.797' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m133.867-10.063c1.504 .855 3.805 2.66 5.25 4.34l1.559-4.52c-2.172 .43-5.098 .434-6.809 .18' fill="var(--fig-b)"/>
<path d='m78.418-31.578c0-3.852-3.121-6.973-6.973-6.973c-3.851 0-6.976 3.121-6.976 6.973s3.125 6.977 6.976 6.977c3.852 0 6.973-3.125 6.973-6.977z' fill="var(--fig-back)"/>
<path d='m78.418-31.578c0-3.852-3.121-6.973-6.973-6.973c-3.851 0-6.976 3.121-6.976 6.973s3.125 6.977 6.976 6.977c3.852 0 6.973-3.125 6.973-6.977z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m168.844-.395c0-3.852-3.122-6.977-6.973-6.977s-6.977 3.125-6.977 6.977s3.125 6.973 6.977 6.973s6.973-3.121 6.973-6.973z' fill="var(--fig-back)"/>
<path d='m168.844-.395c0-3.852-3.122-6.977-6.973-6.977s-6.977 3.125-6.977 6.977s3.125 6.973 6.977 6.973s6.973-3.121 6.973-6.973z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(142.281 -51.065)'>1</text>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(232.707 -19.884)'>2</text>
<path d='m205.523-31.578l90.426 31.184' stroke="currentColor" stroke-opacity="0.349" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m241.383 52.613l-30.493-71.613' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m208.641-24.281c.375 1.687 .578 4.605 .301 6.805l4.398-1.875c-1.777-1.324-3.738-3.488-4.699-4.93'/>
<path d='m241.383 52.613l44.773-43.492' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m290.273 5.125c-1.441 .953-4.09 2.191-6.238 2.727l3.332 3.43c.594-2.133 1.91-4.746 2.906-6.156'/>
<path d='m242.777 52.613c0-.774-.625-1.395-1.394-1.395c-.77 0-1.395 .621-1.395 1.395c0 .77 .625 1.395 1.395 1.395c.769 0 1.394-.625 1.394-1.395z'/>
<path d='m289.34-29.051l-55.536-19.148' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m228.378-50.066c1.504 .855 3.805 2.66 5.25 4.336l1.559-4.52c-2.172 .43-5.098 .434-6.809 .184' fill="var(--fig-a)"/>
<path d='m205.523-31.578l22.578 7.793' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m233.523-21.91c-1.504-.855-3.801-2.664-5.246-4.34l-1.559 4.52c2.172-.434 5.094-.434 6.805-.18' fill="var(--fig-b)"/>
<path d='m295.949-.395l-22.578-7.797' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m267.95-10.062c1.504 .855 3.801 2.66 5.246 4.34l1.559-4.52c-2.172 .43-5.094 .434-6.805 .18' fill="var(--fig-b)"/>
<path d='m212.496-31.578c0-3.852-3.121-6.973-6.973-6.973s-6.972 3.121-6.972 6.973s3.121 6.977 6.972 6.977s6.973-3.125 6.973-6.977z' fill="var(--fig-back)"/>
<path d='m212.496-31.578c0-3.852-3.121-6.973-6.973-6.973s-6.972 3.121-6.972 6.973s3.121 6.977 6.972 6.977s6.973-3.125 6.973-6.977z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m302.922-.395c0-3.852-3.121-6.977-6.973-6.977s-6.973 3.125-6.973 6.977s3.121 6.973 6.973 6.973s6.973-3.121 6.973-6.973z' fill="var(--fig-back)"/>
<path d='m302.922-.395c0-3.852-3.121-6.977-6.973-6.977s-6.973 3.125-6.973 6.977s3.121 6.973 6.973 6.973s6.973-3.121 6.973-6.973z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(276.361 -51.065)'>1</text>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(366.787 -19.884)'>2</text>
<g transform='translate(11.798 -28.815)' fill="var(--fig-b)">
<text class="tri-mnozhitelya-f1" x='-71.941' y='20.232'><tspan x='-73.549' y='22.99'>F</tspan></text>
<text class="tri-mnozhitelya-f2" x='-66.534' y='25.011'>12</text>
<text class="tri-mnozhitelya-f1" x='-55.002' y='22.99'>dt</text>
</g>
<g transform='translate(68.61 -9.234)' fill="var(--fig-b)">
<text class="tri-mnozhitelya-f1" x='-71.941' y='20.232'><tspan x='-73.549' y='22.99'>F</tspan></text>
<text class="tri-mnozhitelya-f2" x='-66.534' y='25.011'>21</text>
<text class="tri-mnozhitelya-f1" x='-55.002' y='22.99'>dt</text>
</g>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(35.789 54.009)' fill="currentColor" fill-opacity="0.6">импу<tspan x='-49.144'>льс</tspan></text>
<text class="tri-mnozhitelya-f1" x='-73.549' y='22.99' transform='translate(158.447 -81.303)'>d<tspan x='-68.219'></tspan><tspan x='-67.871'>r</tspan></text>
<text class="tri-mnozhitelya-f2" x='-62.949' y='25.011' transform='translate(158.447 -81.303)'>1</text>
<text class="tri-mnozhitelya-f1" x='-73.549' y='22.99' transform='translate(257.188 -26.388)'>d<tspan x='-68.219'></tspan><tspan x='-67.871'>r</tspan></text>
<text class="tri-mnozhitelya-f2" x='-62.949' y='25.011' transform='translate(257.188 -26.388)'>2</text>
<g fill="var(--fig-b)">
<text class="tri-mnozhitelya-f1" x='-71.941' y='20.232' transform='translate(151.596 -28.815)'><tspan x='-73.549' y='22.99'>F</tspan></text>
<text class="tri-mnozhitelya-f2" x='-66.534' y='25.011' transform='translate(151.596 -28.815)'>12</text>
<text class="tri-mnozhitelya-f1" x='-71.941' y='20.232' transform='translate(208.408 -9.234)'><tspan x='-73.549' y='22.99'>F</tspan></text>
<text class="tri-mnozhitelya-f2" x='-66.534' y='25.011' transform='translate(208.408 -9.234)'>21</text>
</g>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(173.785 56.826)' fill="currentColor" fill-opacity="0.6">работ<tspan x='-46.13'>а</tspan></text>
<g transform='translate(318.972 -78.118)' fill="var(--fig-a)">
<text class="tri-mnozhitelya-f1" x='-73.897' y='22.99'><tspan x='-73.549'>r</tspan></text>
<text class="tri-mnozhitelya-f2" x='-68.627' y='25.011'>1</text>
<text class="tri-mnozhitelya-f0" x='-61.097' y='22.99'>−</text>
<text class="tri-mnozhitelya-f1" x='-50.536' y='22.99'><tspan x='-50.188'>r</tspan></text>
<text class="tri-mnozhitelya-f2" x='-45.266' y='25.011'>2</text>
</g>
<text class="tri-mnozhitelya-f1" x='-73.549' y='22.99' transform='translate(300.96 42.424)'>O</text>
<text class="tri-mnozhitelya-f1" x='-73.897' y='22.99' transform='translate(281.315 -9.586)'><tspan x='-73.549'>r</tspan></text>
<text class="tri-mnozhitelya-f2" x='-68.627' y='25.011' transform='translate(281.315 -9.586)'>1</text>
<text class="tri-mnozhitelya-f1" x='-73.897' y='22.99' transform='translate(354.64 16.883)'><tspan x='-73.549'>r</tspan></text>
<text class="tri-mnozhitelya-f2" x='-68.627' y='25.011' transform='translate(354.64 16.883)'>2</text>
<g fill="var(--fig-b)">
<text class="tri-mnozhitelya-f1" x='-71.941' y='20.232' transform='translate(288.949 -59.036)'><tspan x='-73.549' y='22.99'>F</tspan></text>
<text class="tri-mnozhitelya-f2" x='-66.534' y='25.011' transform='translate(288.949 -59.036)'>12</text>
<text class="tri-mnozhitelya-f1" x='-71.941' y='20.232' transform='translate(345.761 -39.422)'><tspan x='-73.549' y='22.99'>F</tspan></text>
<text class="tri-mnozhitelya-f2" x='-66.534' y='25.011' transform='translate(345.761 -39.422)'>21</text>
</g>
<text class="tri-mnozhitelya-f3" x='-73.549' y='22.99' transform='translate(306.208 54.009)' fill="currentColor" fill-opacity="0.6">момент</text>
</g>
</g>
</svg>`;
