/* Собран конвейером из sources/physics1_summary/inputs/05/pics/dve_tochki_tela.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs tverdoe-telo dve-tochki-tela.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['dve-tochki-tela'] = String.raw`<svg class="fig-tikz" width="253" height="149" viewBox="0 0 253 149" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две точки тела 1 и 2 и вектор r1 − r2 между ними: скорости v1 и v2 разные, а их разность v1 − v2, построенная у точки 1, перпендикулярна отрезку; силы F12 и F21 лежат на прямой между точками">
<style>text.dve-tochki-tela-f0{font-family:cmsy10;font-size:10.909px}text.dve-tochki-tela-f1{font-family:cmmi10;font-size:10.909px}text.dve-tochki-tela-f2{font-family:cmr9;font-size:8.966px}text.dve-tochki-tela-f3{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.898 90.892) scale(1.375011)">

<g id='page1'>
<path d='m96.539-29.57l-.765-1.504l-1.02-1.418l-1.246-1.332l-1.445-1.191l-1.617-1.106l-1.844-.965l-1.985-.879l-2.125-.762l-2.296-.652l-2.407-.566l-2.555-.457l-2.633-.367l-2.75-.254l-2.836-.199l-2.949-.086h-3.004l-3.09 .113l-3.176 .172l-3.258 .254l-3.316 .367l-3.402 .457l-3.457 .566l-3.516 .652l-3.574 .762l-3.625 .852l-3.66 .992l-3.684 1.078l-3.715 1.191l-3.684 1.274l-3.684 1.418l-3.66 1.504l-3.598 1.613l-3.516 1.672l-3.457 1.789l-3.348 1.84l-3.23 1.93l-3.09 1.957l-2.977 2.039l-2.805 2.043l-2.637 2.066l-2.465 2.098l-2.297 2.098l-2.156 2.098l-1.953 2.098l-1.789 2.07l-1.644 2.07l-1.5 2.012l-1.332 2.012l-1.191 1.984l-1.078 1.957l-.965 1.926l-.848 1.871l-.711 1.871l-.621 1.871l-.512 1.816l-.426 1.812l-.281 1.758l-.172 1.758l-.055 1.73l.082 1.699l.227 1.672l.371 1.617l.566 1.586l.738 1.504l.934 1.445l1.133 1.387l1.332 1.25l1.59 1.191l1.785 1.047l2.039 .938l2.242 .762l2.465 .652l2.664 .512l2.891 .313l3.063 .168h3.203l3.375-.168l3.516-.313l3.598-.48l3.656-.652l3.742-.793l3.77-.91l3.77-1.047l3.801-1.164l3.742-1.274l3.711-1.363l3.66-1.414l3.57-1.531l3.516-1.559l3.457-1.617l3.375-1.645l3.285-1.699l3.203-1.703l3.148-1.758l3.063-1.758l3.004-1.813l2.949-1.785l2.863-1.844l2.805-1.871l2.777-1.871l2.695-1.926l2.605-1.93l2.551-1.984l2.469-1.984l2.379-2.039l2.297-2.043l2.153-2.066l2.015-2.098l1.871-2.098l1.7-2.129l1.531-2.098l1.332-2.066l1.105-2.07l.907-2.043l.652-1.984l.426-1.926l.199-1.871l-.059-1.785l-.312-1.73z' fill="currentColor" fill-opacity="0.051"/>
<path d='m96.539-29.57l-.765-1.504l-1.02-1.418l-1.246-1.332l-1.445-1.191l-1.617-1.106l-1.844-.965l-1.985-.879l-2.125-.762l-2.296-.652l-2.407-.566l-2.555-.457l-2.633-.367l-2.75-.254l-2.836-.199l-2.949-.086h-3.004l-3.09 .113l-3.176 .172l-3.258 .254l-3.316 .367l-3.402 .457l-3.457 .566l-3.516 .652l-3.574 .762l-3.625 .852l-3.66 .992l-3.684 1.078l-3.715 1.191l-3.684 1.274l-3.684 1.418l-3.66 1.504l-3.598 1.613l-3.516 1.672l-3.457 1.789l-3.348 1.84l-3.23 1.93l-3.09 1.957l-2.977 2.039l-2.805 2.043l-2.637 2.066l-2.465 2.098l-2.297 2.098l-2.156 2.098l-1.953 2.098l-1.789 2.07l-1.644 2.07l-1.5 2.012l-1.332 2.012l-1.191 1.984l-1.078 1.957l-.965 1.926l-.848 1.871l-.711 1.871l-.621 1.871l-.512 1.816l-.426 1.812l-.281 1.758l-.172 1.758l-.055 1.73l.082 1.699l.227 1.672l.371 1.617l.566 1.586l.738 1.504l.934 1.445l1.133 1.387l1.332 1.25l1.59 1.191l1.785 1.047l2.039 .938l2.242 .762l2.465 .652l2.664 .512l2.891 .313l3.063 .168h3.203l3.375-.168l3.516-.313l3.598-.48l3.656-.652l3.742-.793l3.77-.91l3.77-1.047l3.801-1.164l3.742-1.274l3.711-1.363l3.66-1.414l3.57-1.531l3.516-1.559l3.457-1.617l3.375-1.645l3.285-1.699l3.203-1.703l3.148-1.758l3.063-1.758l3.004-1.813l2.949-1.785l2.863-1.844l2.805-1.871l2.777-1.871l2.695-1.926l2.605-1.93l2.551-1.984l2.469-1.984l2.379-2.039l2.297-2.043l2.153-2.066l2.015-2.098l1.871-2.098l1.7-2.129l1.531-2.098l1.332-2.066l1.105-2.07l.907-2.043l.652-1.984l.426-1.926l.199-1.871l-.059-1.785l-.312-1.73z' stroke="currentColor" stroke-opacity="0.349" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-13.191 15.016l74.371-30.219' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m65.5-16.957c-1.375 .277-3.75 .402-5.531 .148l1.465 3.602c1.098-1.426 2.883-2.992 4.066-3.75'/>
<path d='m61.277-15.231l-4.254-10.516l10.488-4.281' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m71.793-19.508l19.629-7.988' stroke="var(--fig-const)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m96.738-29.656c-1.695 .344-4.613 .5-6.805 .187l1.801 4.43c1.352-1.754 3.551-3.684 5.004-4.617' fill="var(--fig-const)"/>
<path d='m-18.918 17.34l-19.629 7.988' stroke="var(--fig-const)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m-43.863 27.488c1.695-.344 4.617-.5 6.809-.188l-1.801-4.43c-1.352 1.754-3.551 3.684-5.008 4.617' fill="var(--fig-const)"/>
<path d='m94.387-45.219l-33.856-9.57' stroke="var(--fig-a)" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='1.993,1.594'/>
<path d='m57.082-55.766c.969 .48 2.469 1.527 3.426 2.523l.816-2.875c-1.34 .344-3.164 .449-4.242 .352' fill="var(--fig-a)"/>
<path d='m71.793-19.508l18.805-21.402' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m94.387-45.219c-1.363 1.066-3.906 2.512-6.004 3.211l3.59 3.156c.426-2.176 1.531-4.879 2.414-6.367' fill="var(--fig-a)"/>
<path d='m-18.918 17.34l31.812 8.988' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m18.418 27.887c-1.551-.77-3.949-2.441-5.488-4.035l-1.301 4.602c2.145-.551 5.066-.723 6.789-.566' fill="var(--fig-a)"/>
<path d='m71.793-19.508l-12.555-30.941' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m57.082-55.766c.344 1.695 .496 4.617 .18 6.809l4.434-1.797c-1.754-1.355-3.68-3.555-4.613-5.012' fill="var(--fig-a)"/>
<path d='m77.969-19.508c0-3.414-2.766-6.18-6.176-6.18s-6.176 2.766-6.176 6.18c0 3.41 2.766 6.176 6.176 6.176s6.176-2.766 6.176-6.176z' fill="var(--fig-back)"/>
<path d='m77.969-19.508c0-3.414-2.766-6.18-6.176-6.18s-6.176 2.766-6.176 6.18c0 3.41 2.766 6.176 6.176 6.176s6.176-2.766 6.176-6.176z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-12.738 17.34c0-3.41-2.766-6.176-6.18-6.176c-3.41 0-6.176 2.766-6.176 6.176c0 3.414 2.766 6.18 6.176 6.18c3.414 0 6.18-2.766 6.18-6.18z' fill="var(--fig-back)"/>
<path d='m-12.738 17.34c0-3.41-2.766-6.176-6.18-6.176c-3.41 0-6.176 2.766-6.176 6.176c0 3.414 2.766 6.18 6.176 6.18c3.414 0 6.18-2.766 6.18-6.18z' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="dve-tochki-tela-f3" x='-18.916' y='17.342' transform='translate(87.998 -33.349)'>1</text>
<text class="dve-tochki-tela-f3" x='-18.916' y='17.342' transform='translate(-2.712 3.502)'>2</text>
<g fill="var(--fig-a)">
<text class="dve-tochki-tela-f1" x='-19.34' y='17.342' transform='translate(117.969 -68.682)'><tspan x='-18.916'>v</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-13.628' y='19.362' transform='translate(117.969 -68.682)'>1</text>
<text class="dve-tochki-tela-f1" x='-19.34' y='17.342' transform='translate(43.134 13.999)'><tspan x='-18.916'>v</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-13.628' y='19.362' transform='translate(43.134 13.999)'>2</text>
<g transform='translate(85.211 -75.656)'>
<text class="dve-tochki-tela-f0" x='-18.916' y='17.342'>−</text>
<text class="dve-tochki-tela-f1" x='-10.855' y='17.342'><tspan x='-10.431'>v</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-5.144' y='19.362'>2</text>
</g>
<g transform='translate(38.74 -62.226)'>
<text class="dve-tochki-tela-f1" x='-19.34' y='17.342'><tspan x='-18.916'>v</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-13.628' y='19.362'>1</text>
<text class="dve-tochki-tela-f0" x='-6.098' y='17.342'>−</text>
<text class="dve-tochki-tela-f1" x='4.387' y='17.342'><tspan x='4.811'>v</tspan>
</text>
<text class="dve-tochki-tela-f2" x='10.099' y='19.362'>2</text>
</g>
</g>
<g fill="var(--fig-const)">
<text class="dve-tochki-tela-f1" x='-17.308' y='14.584' transform='translate(121.172 -42.734)'><tspan x='-18.916' y='17.342'>F</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-11.901' y='19.362' transform='translate(121.172 -42.734)'>12</text>
<text class="dve-tochki-tela-f1" x='-17.308' y='14.584' transform='translate(-47.191 14.414)'><tspan x='-18.916' y='17.342'>F</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-11.901' y='19.362' transform='translate(-47.191 14.414)'>21</text>
</g>
<g transform='translate(52.857 -3.98)'>
<text class="dve-tochki-tela-f1" x='-19.264' y='17.342'><tspan x='-18.916'>r</tspan>
</text>
<text class="dve-tochki-tela-f2" x='-13.995' y='19.362'>1</text>
<text class="dve-tochki-tela-f0" x='-6.465' y='17.342'>−</text>
<text class="dve-tochki-tela-f1" x='4.097' y='17.342'><tspan x='4.445'>r</tspan>
</text>
<text class="dve-tochki-tela-f2" x='9.366' y='19.362'>2</text>
</g>
</g>
</g>
</svg>`;
