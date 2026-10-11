/* DemoOsc — общий счёт колебательных демок седьмой недели.

   Решение рамки лекции 07 № 6 (briefs/lekciya07_ramka.md, «Решения,
   принятые без автора»): один файл счёта на демки «Одна яма», «Маятник на
   большой амплитуде», «Эллипс и спираль», «Добротность», «Кривая периода
   физического маятника», по образцу shared/demo-3d.js шестой недели.
   Схемы по решению № 7: скоростной Верле для нелинейных уравнений, точный
   шаг e^{Ah} для линейного осциллятора с трением. Всё в действительной
   записи: комплексных чисел нет ни в главе недели, ни здесь.

   ПОДКЛЮЧЕНИЕ. После demo-core.js, до кода демки. От ядра файл не зависит
   и работает и в node (для прогона без браузера: globalThis.window =
   globalThis, затем require или eval файла).

       <script src="../shared/demo-core.js"></script>
       <script src="../shared/demo-osc.js"></script>

   Регистрирует один глобальный объект window.DemoOsc. В него не пишут:
   чего демке не хватает, она держит у себя и называет в отчёте.

   ══ API ══

   verlet(s, acc, h)
       Один шаг скоростного Верле. s = { t, q, v, a }: время, координата,
       скорость, ускорение в начале шага (a можно не задавать, тогда оно
       считается). acc(q, t) возвращает ускорение; от скорости оно зависеть
       не должно. Меняет s на месте и возвращает его; после шага s.a есть
       ускорение в конце шага, и его удобно отдавать в crossing.feed.
   verletN(s, acc, h)
       То же для нескольких координат: s.q, s.v, s.a массивы, acc(q, t)
       возвращает массив той же длины. Массивы s меняются на месте.
   expm2(M, h)
       e^{Mh} для матрицы 2×2, M = [m00, m01, m10, m11] по строкам. Ряд
       Тейлора с масштабированием и возведением в квадрат: матрица делится
       на 2^s, пока её норма не станет меньше 1/2, ряд суммируется до
       машинной точности, результат s раз возводится в квадрат. Возвращает
       [p00, p01, p10, p11].
   propagator(omega0, gamma, h)
       Точный шаг уравнения ẍ + 2γẋ + ω0²x = 0: P = e^{Ah},
       A = [0, 1, −ω0², −2γ]. Возвращает { P, h, step(s) }; step(s) двигает
       s = { t, x, v } на h и возвращает s. Режим (колебательный,
       критический, апериодический) код не различает: он выходит из следа.
   hermite(t0, y0, d0, t1, y1, d1, t)
       Кубическая вставка Эрмита по значениям y и производным d на концах
       шага. Значение в момент t. Ошибка O(h⁴): положение в момент разворота
       по координате и скорости, значение максимума.
   crossing(dir)
       Счётчик пересечений нуля сигналом. dir: +1 только снизу вверх, −1
       только сверху вниз, 0 оба направления.
         c.feed(t0, s0, t1, s1, d0, d1)  сигнал на концах шага; если внутри
             (t0, t1] он пересёк ноль в нужную сторону, момент записывается
             и возвращается, иначе null. С производными d0, d1 момент берётся
             корнем кубики Эрмита (ошибка O(h⁴)), без них линейной вставкой.
             Снизу вверх значит s0 < 0 и s1 ≥ 0; ровно ноль в начале шага не
             считается, он уже засчитан предыдущим шагом.
         c.mark(t, dir)  записать пересечение руками: отпущенный из покоя
             груз разворачивается в момент отпускания.
         c.period()  время между последним пересечением и предпоследним того
             же направления (при dir = 0 через одно), или null.
         c.half()    время между двумя последними пересечениями, или null.
         c.times, c.dirs   последние 16 моментов и направлений; c.count
             всего записано; c.last, c.lastDir последнее; c.reset().
       Период удобно снимать по нулям скорости (разворотам): у
       консервативной системы время от разворота до разворота равно
       половине периода и при несимметричной яме, по обратимости движения,
       а у нулей координаты половинки в несимметричной яме разные.
   vertex3(t0, y0, t1, y1, t2, y2)
       Вершина параболы через три точки: { t, y } или null, если точки на
       прямой. Максимумы по трём соседним отсчётам, как в описи демок.
   agm(a, b)
       Арифметико-геометрическое среднее.
   ellipK(k, kc)
       Полный эллиптический интеграл первого рода по модулю k (не по
       параметру m = k²): K = π / (2·agm(1, k′)), k′ = √(1 − k²). У k около
       единицы √(1 − k²) теряет знаки, поэтому k′ можно отдать вторым
       аргументом. При k ≥ 1 возвращает Infinity.
   pendulumPeriod(omega0, amp)
       Точный период маятника θ̈ = −ω0² sin θ, отпущенного из покоя на угол
       amp (радианы): 4K(sin(amp/2))/ω0, k′ = cos(amp/2) берётся прямо.

   ══ ПРИМЕРЫ ══

   Нелинейный маятник, шаг T0/400, период по разворотам:
       var w0 = Math.sqrt(9.81), h = 2 * Math.PI / w0 / 400;
       var acc = function (q) { return -w0 * w0 * Math.sin(q); };
       var s = { t: 0, q: amp, v: 0 };
       var turns = DemoOsc.crossing(0);
       turns.mark(0, -1);                    // отпущен справа: разворот в t = 0
       function shag() {
         var t0 = s.t, v0 = s.v, a0 = s.a == null ? acc(s.q) : s.a;
         DemoOsc.verlet(s, acc, h);
         turns.feed(t0, v0, s.t, s.v, a0, s.a);   // скорость и её производная
       }
       var T = turns.period() || (turns.half() && 2 * turns.half());

   Затухание, шаг 1/100 периода собственных колебаний:
       var P = DemoOsc.propagator(10, 0.477, 2 * Math.PI / 10 / 100);
       var s = { t: 0, x: 0.05, v: 0 };
       P.step(s);
   Максимум x: момент по нулю скорости (производная скорости
   −ω0²x − 2γv), значение hermite(t0, x0, v0, t1, x1, v1, момент).

   ══ ТОЧНОСТЬ ══ (проверено 09.10 прогоном в node, отчёт
   briefs/demki_nedelya07_odna-yama_REPORT.md, раздел о demo-osc.js)

   Верле на маятнике ω0² = 9,81 при шаге T0/400: период по разворотам с
   Эрмитом против 4K(k)/ω0 короче на 1,0·10⁻⁵ при 14° и 8,3·10⁻⁶ при 70°,
   длиннее на 2,2·10⁻⁶ при 170° и 6,6·10⁻⁶ при 179,9°; энергия колеблется
   в пределах 6·10⁻⁵ своей величины (при T0/100 в пределах 10⁻³) и за
   тысячу периодов не уходит. Точный шаг при 1/100 периода против решений
   главы в действительном виде за 20 с: не хуже 6·10⁻¹⁴ при γ/ω0 = 0,01;
   0,25; 1 и 2, матрица против замкнутой формы до 9·10⁻¹⁶. Декремент по
   соседним максимумам у осциллятора главы (k = 10 Н/м, m = 0,1 кг) при
   β = 0,0954 кг/с, d = 0,3000: с Эрмитом до 4·10⁻⁸ относительных,
   параболой по трём отсчётам до 8·10⁻⁷. K(k) против scipy до 1,2·10⁻¹⁶
   при k ≤ 0,99; у k = 0,999999 расхождение 7·10⁻¹³, столько стоит сама
   двоичная запись такого k. */

(function (global) {
  'use strict';

  /* ── Верле ─────────────────────────────────────────────────── */

  function verlet(s, acc, h) {
    if (s.a == null) s.a = acc(s.q, s.t);
    var vh = s.v + 0.5 * h * s.a;
    s.q += h * vh;
    s.t += h;
    s.a = acc(s.q, s.t);
    s.v = vh + 0.5 * h * s.a;
    return s;
  }

  function verletN(s, acc, h) {
    var n = s.q.length, i;
    if (s.a == null) s.a = acc(s.q, s.t);
    for (i = 0; i < n; i++) {
      s.v[i] += 0.5 * h * s.a[i];
      s.q[i] += h * s.v[i];
    }
    s.t += h;
    var a = acc(s.q, s.t);
    for (i = 0; i < n; i++) {
      s.a[i] = a[i];
      s.v[i] += 0.5 * h * a[i];
    }
    return s;
  }

  /* ── экспонента матрицы 2×2 ────────────────────────────────── */

  function mul2(A, B) {
    return [A[0] * B[0] + A[1] * B[2], A[0] * B[1] + A[1] * B[3],
            A[2] * B[0] + A[3] * B[2], A[2] * B[1] + A[3] * B[3]];
  }

  function expm2(M, h) {
    var X = [M[0] * h, M[1] * h, M[2] * h, M[3] * h];
    /* ∞-норма; после деления на 2^s она не больше 1/2, и члены ряда
       убывают быстрее 2^−k/k!: двадцати хватает с запасом */
    var nrm = Math.max(Math.abs(X[0]) + Math.abs(X[1]), Math.abs(X[2]) + Math.abs(X[3]));
    var s = 0;
    while (nrm > 0.5 && s < 60) { nrm /= 2; s++; }
    var f = Math.pow(2, -s);
    X = [X[0] * f, X[1] * f, X[2] * f, X[3] * f];
    var E = [1, 0, 0, 1], T = [1, 0, 0, 1];
    for (var k = 1; k <= 40; k++) {
      T = mul2(T, X);
      T = [T[0] / k, T[1] / k, T[2] / k, T[3] / k];
      E = [E[0] + T[0], E[1] + T[1], E[2] + T[2], E[3] + T[3]];
      var tm = Math.max(Math.abs(T[0]), Math.abs(T[1]), Math.abs(T[2]), Math.abs(T[3]));
      var em = Math.max(Math.abs(E[0]), Math.abs(E[1]), Math.abs(E[2]), Math.abs(E[3]));
      if (tm <= 1e-18 * em) break;
    }
    for (var i = 0; i < s; i++) E = mul2(E, E);
    return E;
  }

  function propagator(omega0, gamma, h) {
    var P = expm2([0, 1, -omega0 * omega0, -2 * gamma], h);
    return {
      P: P, h: h, omega0: omega0, gamma: gamma,
      step: function (s) {
        var x = s.x, v = s.v;
        s.x = P[0] * x + P[1] * v;
        s.v = P[2] * x + P[3] * v;
        s.t += h;
        return s;
      }
    };
  }

  /* ── вставки ───────────────────────────────────────────────── */

  /* Базис Эрмита в доле шага u ∈ [0, 1]; производные на концах умножены
     на длину шага, чтобы кубика была в той же переменной u. */
  function herm(u, y0, m0, y1, m1) {
    var u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * y0 + (u3 - 2 * u2 + u) * m0 +
           (-2 * u3 + 3 * u2) * y1 + (u3 - u2) * m1;
  }
  function hermD(u, y0, m0, y1, m1) {
    var u2 = u * u;
    return (6 * u2 - 6 * u) * y0 + (3 * u2 - 4 * u + 1) * m0 +
           (-6 * u2 + 6 * u) * y1 + (3 * u2 - 2 * u) * m1;
  }

  function hermite(t0, y0, d0, t1, y1, d1, t) {
    var h = t1 - t0;
    return herm((t - t0) / h, y0, d0 * h, y1, d1 * h);
  }

  /* Корень кубики Эрмита на [0, 1], где она меняет знак. Ньютон от
     линейной вставки внутри вилки; шаг, ушедший из вилки, заменяется
     делением пополам. */
  function hermRoot(s0, m0, s1, m1) {
    var lo = 0, hi = 1, flo = s0;
    var u = s0 / (s0 - s1);
    for (var i = 0; i < 40; i++) {
      var f = herm(u, s0, m0, s1, m1);
      if (f === 0) return u;
      if ((f < 0) === (flo < 0)) { lo = u; flo = f; } else hi = u;
      var d = hermD(u, s0, m0, s1, m1);
      var un = d !== 0 ? u - f / d : NaN;
      if (!(un > lo && un < hi)) un = 0.5 * (lo + hi);
      if (Math.abs(un - u) < 1e-15) return un;
      u = un;
    }
    return u;
  }

  function vertex3(t0, y0, t1, y1, t2, y2) {
    var d01 = (y1 - y0) / (t1 - t0), d12 = (y2 - y1) / (t2 - t1);
    var A = (d12 - d01) / (t2 - t0);
    if (A === 0 || !isFinite(A)) return null;
    var t = 0.5 * (t0 + t1) - d01 / (2 * A);
    return { t: t, y: y0 + d01 * (t - t0) + A * (t - t0) * (t - t1) };
  }

  /* ── пересечения нуля ──────────────────────────────────────── */

  function crossing(dir) {
    var MAXN = 16;
    var c = { dir: dir || 0, times: [], dirs: [], count: 0, last: null, lastDir: 0 };
    function record(t, d) {
      c.times.push(t); c.dirs.push(d);
      if (c.times.length > MAXN) { c.times.shift(); c.dirs.shift(); }
      c.count++; c.last = t; c.lastDir = d;
    }
    c.feed = function (t0, s0, t1, s1, d0, d1) {
      var up = s0 < 0 && s1 >= 0, down = s0 > 0 && s1 <= 0;
      if (!up && !down) return null;
      var d = up ? 1 : -1;
      if (c.dir && d !== c.dir) return null;
      var h = t1 - t0, u;
      if (d0 != null && d1 != null) u = hermRoot(s0, d0 * h, s1, d1 * h);
      else u = s0 / (s0 - s1);
      var t = t0 + u * h;
      record(t, d);
      return t;
    };
    c.mark = function (t, d) { record(t, d || 0); };
    c.period = function () {
      var n = c.times.length;
      if (c.dir) return n >= 2 ? c.times[n - 1] - c.times[n - 2] : null;
      return n >= 3 ? c.times[n - 1] - c.times[n - 3] : null;
    };
    c.half = function () {
      var n = c.times.length;
      return n >= 2 ? c.times[n - 1] - c.times[n - 2] : null;
    };
    c.reset = function () {
      c.times = []; c.dirs = []; c.count = 0; c.last = null; c.lastDir = 0;
    };
    return c;
  }

  /* ── эллиптический интеграл ────────────────────────────────── */

  function agm(a, b) {
    for (var i = 0; i < 60; i++) {
      var an = 0.5 * (a + b), bn = Math.sqrt(a * b);
      if (Math.abs(an - bn) <= 1e-16 * an) return an;
      a = an; b = bn;
    }
    return 0.5 * (a + b);
  }

  function ellipK(k, kc) {
    if (kc == null) {
      if (Math.abs(k) >= 1) return Infinity;
      kc = Math.sqrt((1 - k) * (1 + k));
    }
    if (kc <= 0) return Infinity;
    return Math.PI / (2 * agm(1, kc));
  }

  function pendulumPeriod(omega0, amp) {
    var a = Math.abs(amp) / 2;
    return 4 * ellipK(Math.sin(a), Math.cos(a)) / omega0;
  }

  global.DemoOsc = {
    verlet: verlet, verletN: verletN,
    expm2: expm2, propagator: propagator,
    hermite: hermite, crossing: crossing, vertex3: vertex3,
    agm: agm, ellipK: ellipK, pendulumPeriod: pendulumPeriod
  };
})(typeof window !== 'undefined' ? window : globalThis);
