/* Demo3D — общий трёхмерный код интерактивных демок.

   Вынесен из poryadok-povorotov.html (вторая неделя) для трёх демок шестой
   недели: гантель на моторе, гироскоп, свободное вращение. Сама демка второй
   недели не менялась и живёт на своей копии этого кода.

   ПОДКЛЮЧЕНИЕ. После demo-core.js, до кода демки. От ядра нужны C.tones
   (чернила темы) и C.label (подпись); без ядра файл работает, но с тёмными
   тонами по умолчанию.

       <script src="../shared/demo-core.js"></script>
       <script src="../shared/demo-3d.js"></script>

   Файл без сборки, регистрирует один глобальный объект window.Demo3D.

   ══ СОГЛАШЕНИЯ ══

   Мир правый, ось z вверх. Вектор — массив [x, y, z]. Матрица 3×3 — плоский
   массив из девяти чисел по строкам [m00 m01 m02 m10 … m22]. Матрица
   ориентации тела R переводит координаты тела в мировые (v_мир = R·v_тело),
   её столбцы — оси тела в мире. Углы в радианах, кроме углов камеры az и el
   (градусы). Положительный поворот идёт против часовой стрелки, если смотреть
   с конца оси на её начало (правый винт). Кватернион — [w, x, y, z], поворот
   вектора как q·v·q*. Цвет — '#rrggbb', '#rgb', 'r,g,b' (как отдаёт C.tones),
   'rgb(…)' или массив [r, g, b]. Кегль подписей не меньше 17 (контракт демок,
   п. 7): меньшее значение поднимается.

   ПРАВАЯ ТРОЙКА НА ЭКРАНЕ. Камера правая: смотрящий из первого октанта видит
   ось x влево-вниз, y вправо-вниз, z вверх, и поворот x к y выглядит
   против часовой стрелки, как положено. В poryadok-povorotov проекция
   зеркальна (x вправо, y влево): карточке это не мешает, а демке с вектором ω
   и правилом правого винта помешало бы. Масштаб тот же: в изометрии единичный
   отрезок вдоль любой оси даёт на экране ровно scale пикселей.

   ══ ВЕКТОРЫ И МАТРИЦЫ ══

   add(a, b)  sub(a, b)  mul(a, k)  dot(a, b)  cross(a, b)  len(a)
   unit(a)          единичный вектор; нулевой остаётся нулевым
   lerp(a, b, t)    точка между a и b
   perp(a)          какой-нибудь единичный вектор, перпендикулярный a
   angle(a, b)      угол между векторами, 0…π

   ident()          единичная матрица
   matMul(A, B, …)  произведение, сколько угодно сомножителей: A·B·…
   matT(A)          транспонирование (для поворота — обратная матрица)
   matVec(M, v)     M·v
   rotX(t) rotY(t) rotZ(t)   поворот вокруг оси координат
   rotAxis(ось, t)           поворот вокруг произвольной оси (ось не обязана быть единичной)
   rotate(v, ось, t)         то же сразу для вектора
   matAngle(M)      угол поворота, 0…π, из следа и антисимметричной части: без NaN у нуля
   matAxis(M)       единичная ось поворота; null, если угол около нуля; около π знак оси условный
   orthonormalize(M) возвращает матрице ортонормированность: дрейф накопленных шагов

   ══ КВАТЕРНИОНЫ (ориентация тела) ══

   quat(ось, t)  quatMul(p, q)  quatConj(q)  quatNorm(q)  quatAngle(q)
   quatToMat(q)       матрица ориентации; неединичный q даёт всё равно ортогональную матрицу
   matToQuat(M)       обратное преобразование, любой угол
   quatRotate(q, v)
   quatStep(q, ω, dt, вТеле)
       Новый кватернион после поворота на |ω|·dt вокруг ω: точное экспоненциальное
       отображение, а не линейная добавка, и сразу нормировка. ω мировая, при
       вТеле = true — в осях тела (q·dq вместо dq·q). Для постоянной ω ошибки нет.

   ══ КАМЕРА ══

   var cam = Demo3D.camera({ cx: 500, cy: 230, scale: 150, az: 45, el: 35.264, target: [0, 0, 0] })
       cx, cy     где на канве (логические координаты сцены) стоит точка target
       scale      пикселей на единицу длины вдоль оси в изометрии
       az, el     положение зрителя, градусы: азимут от +x к +y и высота над
                  плоскостью xy. По умолчанию изометрия (45° и 35,264°)
   cam.project(p)       [X, Y, глубина]: X, Y на канве, глубина растёт к зрителю
   cam.px(r)            длина r в пикселях (радиус шара)
   cam.rotate(dAz, dEl) повернуть камеру; el зажимается в ±89,5°
   cam.frame()          {r, u, v}: вправо, вверх и на зрителя в мировых осях
   Углы можно присваивать прямо (cam.az = 60): кадр пересчитается сам.
   Demo3D.dragCamera(canvas, cam, onChange, { speed: 0.4 })
       Вращение мышью и пальцем: тянете вправо — сцена идёт вправо. Возвращает
       функцию снятия обработчиков; в React-демке вешать в useEffect по ref канвы.

   ══ РИСОВАНИЕ ══ (ctx, cam, геометрия в мировых координатах, стиль)

   segment(ctx, cam, a, b, { color, width, alpha, dash, cap })
   arrow(ctx, cam, a, b, { color, width, head, alpha, dash, dot,
                           label, labelSize, labelColor, labelGap, labelDx, labelDy })
       Стрелка от a к b с остриём; подпись стоит у конца и разворачивается так,
       чтобы не наезжать на остриё. dot — радиус кружка в начале (точка приложения).
       Возвращает [X, Y] конца на канве. Стрелка короче 1,5 px не рисуется.
   ball(ctx, cam, c, r, { color, alpha })      шар с бликом от света Demo3D.light
   curve(ctx, cam, точки, { color, width, alpha, dash, closed, fill, fillAlpha,
                            dimBehind, backAlpha })
       Ломаная по точкам мира. dimBehind = центр: часть линии за этим центром
       (дальше от зрителя) рисуется бледнее, backAlpha, по умолчанию 0,3.
   circle3(ctx, cam, c, нормаль, r, { …как curve, from, to, ref, n })
       Окружность или дуга (from, to в радианах от направления ref).
   wireSphere(ctx, cam, c, R, { color, alpha, width, rings })
       Контур шара и три большие окружности (rings — список их нормалей).
   label3(ctx, cam, p, 'текст', { color, size, dx, dy, align })
       Текст у точки мира; dx, dy в пикселях, по умолчанию текст центрирован на точке.
   axes(ctx, cam, o, L, { color, colors, labels, tail, width, head, labelSize })
       Оси x, y, z длиной L из точки o; tail — длина хвоста в долях L (0,3), labels: false убирает подписи.
   grid(ctx, cam, o, половина, шаг, { color, width })    сетка в плоскости z = o[2]

   Многогранники. Грани сортируются по глубине, дальние первыми, тыльные
   отсекаются по нормали (cull: false для прозрачных тел). Освещение — по
   нормали грани, как в poryadok-povorotov. Цвет грани: face.color, иначе st.color.
   boxMesh(центр, R, полуразмеры, цвета)   вершины и 6 граней бруска; порядок граней
                                           +x −x +y −y +z −z; полуразмеры число или [hx, hy, hz];
                                           R — матрица ориентации или кватернион
   prismMesh(центр, ось, радиус, высота, сторон, ref)   правильная призма: диск, цилиндр
   solid(ctx, cam, сетка, { color, alpha, edge, edgeWidth, cull })
       У грани может быть face.after(ctx, точки): вызывается сразу после заливки
       этой грани, чтобы нарисовать на ней метку.
   box(ctx, cam, центр, R, полуразмеры, { colors, … })
   disk(ctx, cam, центр, ось, радиус, толщина, { color, sides, spin, marks, ref,
                                                  markColor, markWidth, … })
       Диск как призма из sides сторон (36). marks — число спиц на торцах, spin —
       угол их поворота вокруг оси: без меток вращение гладкого диска не видно.
       ref — направление на нулевую спицу, если оно привязано к телу.

   ══ СЛОЙ: общая сортировка по глубине ══

   Шар перед штангой, стрелка за валом: порядок задаёт слой. Каждый вызов
   откладывается с глубиной своей опорной точки (середина отрезка, центр шара,
   центр тела), flush рисует от дальнего к ближнему, подписи стрелок и label —
   поверх всего. Длинную деталь режьте на куски (pieces) или задайте
   depth вручную: у любого вызова слоя стиль принимает depth.

   var L = Demo3D.layer(cam);                 // можно держать один на всю демку
   L.segment(a, b, st)  L.arrow(a, b, st)  L.ball(c, r, st)  L.curve(точки, st)
   L.circle3(c, n, r, st)  L.solid(сетка, st)  L.box(c, R, h, st)
   L.disk(c, ось, r, толщина, st)  L.label(p, текст, st)
   L.add(глубина, function (ctx) { … })       произвольная отрисовка
   L.flush(ctx)                               рисует и очищает слой
   segment принимает pieces (по умолчанию 1): число кусков с отдельной глубиной.
   Сетку и wireSphere рисуйте до flush (фон), оси до или после.

   ══ ЦВЕТ ══

   rgba(цвет, α)    строка 'rgba(r,g,b,α)' из любого цвета
   mix(c1, c2, t)   смесь цветов, массив [r, g, b]
   palette          { blue, teal, amber, orange, green, red } — цвета данных
                    из соседних демок, одинаковые в обеих темах
   Demo3D.light     направление света в мире; можно заменить на unit([...])

   ══ ПРИМЕР: гантель ══

   var cam = Demo3D.camera({ cx: 380, cy: 240, scale: 420 });
   var L = Demo3D.layer(cam);
   function draw(ctx) {
     var e = [Math.sin(a) * Math.cos(phi), Math.sin(a) * Math.sin(phi), Math.cos(a)];
     var A = Demo3D.mul(e, 0.2), B = Demo3D.mul(e, -0.2);
     L.segment([0, 0, -0.3], [0, 0, 0.45], { color: '#8c93ac', width: 5, pieces: 4 });
     L.segment(A, B, { color: '#c8cde0', width: 6, pieces: 4 });
     L.ball(A, 0.04, { color: Demo3D.palette.orange });
     L.ball(B, 0.04, { color: Demo3D.palette.orange });
     L.arrow([0, 0, 0.45], [0, 0, 0.7], { color: Demo3D.palette.teal, width: 5, label: 'ω' });
     L.flush(ctx);
   }

   ══ ПРИМЕР: тело без опор ══

   q = Demo3D.quatStep(q, omegaWorld, dt);              // ориентация, |q| = 1
   var R = Demo3D.quatToMat(q);
   Demo3D.box(ctx, cam, [0, 0, 0], R, [0.15, 0.3, 0.45], { colors: [...шесть цветов] });
   Если ориентация копится матрицей, раз в сотни шагов: R = Demo3D.orthonormalize(R). */

(function (global) {
  'use strict';

  var PI = Math.PI, DEG = PI / 180;
  /* Изометрия: зритель смотрит вдоль (1,1,1), высота над плоскостью xy
     arctan(1/√2). Множитель √(3/2) приводит ортографическую проекцию к
     «изометрическому масштабу» чертежа: единичный отрезок вдоль любой оси
     занимает ровно scale пикселей, а не √(2/3) от них. Так же было в
     poryadok-povorotov. */
  var ISO_EL = Math.atan(1 / Math.SQRT2) / DEG;
  var K_ISO = Math.sqrt(1.5);
  var FONT_MIN = 17;
  var BIG = 1e9;

  /* ── векторы ─────────────────────────────────────────────── */

  function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function mul(a, k) { return [a[0] * k, a[1] * k, a[2] * k]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function len(a) { return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]); }
  function unit(a) {
    var n = len(a);
    return n === 0 ? [0, 0, 0] : [a[0] / n, a[1] / n, a[2] / n];
  }
  function lerp(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  /* Угол между векторами, 0…π. atan2 от длины векторного произведения и
     скалярного, а не arccos косинуса: у нуля и у π arccos теряет точность. */
  function angle(a, b) { return Math.atan2(len(cross(a, b)), dot(a, b)); }

  /* Перпендикуляр к a. Вспомогательная ось берётся наименее похожей на a,
     иначе векторное произведение почти нулевое и направление шумит. */
  function perp(a) {
    var u = unit(a);
    var h = Math.abs(u[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
    return unit(cross(u, h));
  }

  /* ── матрицы ─────────────────────────────────────────────── */

  function ident() { return [1, 0, 0, 0, 1, 0, 0, 0, 1]; }

  function mat2(A, B) {
    var M = new Array(9);
    for (var i = 0; i < 3; i++)
      for (var j = 0; j < 3; j++)
        M[i * 3 + j] = A[i * 3] * B[j] + A[i * 3 + 1] * B[3 + j] + A[i * 3 + 2] * B[6 + j];
    return M;
  }

  function matMul(A, B) {
    var M = A;
    for (var i = 1; i < arguments.length; i++) M = mat2(M, arguments[i]);
    return M;
  }

  function matT(A) { return [A[0], A[3], A[6], A[1], A[4], A[7], A[2], A[5], A[8]]; }

  function matVec(M, p) {
    return [
      M[0] * p[0] + M[1] * p[1] + M[2] * p[2],
      M[3] * p[0] + M[4] * p[1] + M[5] * p[2],
      M[6] * p[0] + M[7] * p[1] + M[8] * p[2]
    ];
  }

  function rotX(t) { var c = Math.cos(t), s = Math.sin(t); return [1, 0, 0, 0, c, -s, 0, s, c]; }
  function rotY(t) { var c = Math.cos(t), s = Math.sin(t); return [c, 0, s, 0, 1, 0, -s, 0, c]; }
  function rotZ(t) { var c = Math.cos(t), s = Math.sin(t); return [c, -s, 0, s, c, 0, 0, 0, 1]; }

  /* Формула Родрига: R = cos·I + (1 − cos)·a·aᵀ + sin·[a]×. */
  function rotAxis(axis, t) {
    var a = unit(axis);
    if (a[0] === 0 && a[1] === 0 && a[2] === 0) return ident();
    var c = Math.cos(t), s = Math.sin(t), k = 1 - c, x = a[0], y = a[1], z = a[2];
    return [
      c + k * x * x, k * x * y - s * z, k * x * z + s * y,
      k * x * y + s * z, c + k * y * y, k * y * z - s * x,
      k * x * z - s * y, k * y * z + s * x, c + k * z * z
    ];
  }

  function rotate(v, axis, t) {
    var a = unit(axis), c = Math.cos(t), s = Math.sin(t), d = dot(a, v) * (1 - c);
    var w = cross(a, v);
    return [v[0] * c + w[0] * s + a[0] * d, v[1] * c + w[1] * s + a[1] * d,
            v[2] * c + w[2] * s + a[2] * d];
  }

  /* След равен 1 + 2·cos θ, а антисимметричная часть даёт 2·sin θ. Угол по
     atan2 из обеих величин, а не arccos следа: arccos теряет точность у нуля
     и у π, а при следе чуть выше трёх на 1e−16 возвращает NaN. */
  function matAngle(M) {
    var a = M[7] - M[5], b = M[2] - M[6], c = M[3] - M[1];
    return Math.atan2(Math.sqrt(a * a + b * b + c * c) / 2, (M[0] + M[4] + M[8] - 1) / 2);
  }

  /* Ось из антисимметричной части: она равна 2·sin θ·ось. У нуля оси нет
     (null, а не мусор от деления на малое). Около π антисимметричная часть
     тоже уходит в ноль, и ось берётся из симметричной: (M + I)/2 = a·aᵀ, то
     есть любой столбец пропорционален a. Знак при этом условный: поворот на π
     вокруг a и вокруг −a одна и та же матрица. */
  function matAxis(M) {
    var a = [M[7] - M[5], M[2] - M[6], M[3] - M[1]], n = len(a);
    if (M[0] + M[4] + M[8] < 0 && n < 1e-6) {
      var d = [M[0] + 1, M[4] + 1, M[8] + 1];
      var k = d[0] >= d[1] && d[0] >= d[2] ? 0 : (d[1] >= d[2] ? 1 : 2);
      return unit([M[k] + (k === 0 ? 1 : 0), M[3 + k] + (k === 1 ? 1 : 0),
                   M[6 + k] + (k === 2 ? 1 : 0)]);
    }
    if (n < 1e-9) return null;
    return [a[0] / n, a[1] / n, a[2] / n];
  }

  /* Ближайшая ортогональная матрица итерацией Ньютона–Шульца:
     X ← X·(3I − XᵀX)/2. Для матрицы, отошедшей от ортогональной на 1e−6 и
     меньше, хватает одного шага, три берутся с запасом. Подходит для
     периодической чистки ориентации, накопленной произведением матриц. */
  function orthonormalize(M) {
    var X = M.slice();
    for (var it = 0; it < 3; it++) {
      var Y = mat2(X, mat2(matT(X), X));
      for (var i = 0; i < 9; i++) X[i] = 1.5 * X[i] - 0.5 * Y[i];
    }
    return X;
  }

  /* ── кватернионы ─────────────────────────────────────────── */

  function quat(axis, t) {
    var a = unit(axis), s = Math.sin(t / 2);
    return [Math.cos(t / 2), a[0] * s, a[1] * s, a[2] * s];
  }

  function quatMul(p, q) {
    return [
      p[0] * q[0] - p[1] * q[1] - p[2] * q[2] - p[3] * q[3],
      p[0] * q[1] + p[1] * q[0] + p[2] * q[3] - p[3] * q[2],
      p[0] * q[2] - p[1] * q[3] + p[2] * q[0] + p[3] * q[1],
      p[0] * q[3] + p[1] * q[2] - p[2] * q[1] + p[3] * q[0]
    ];
  }

  function quatConj(q) { return [q[0], -q[1], -q[2], -q[3]]; }

  function quatNorm(q) {
    var n = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
    return n === 0 ? [1, 0, 0, 0] : [q[0] / n, q[1] / n, q[2] / n, q[3] / n];
  }

  /* Угол поворота кватерниона, 0…π. atan2 вместо 2·arccos(w): у нуля arccos
     даёт ошибку порядка корня из машинной точности. */
  function quatAngle(q) {
    return 2 * Math.atan2(Math.sqrt(q[1] * q[1] + q[2] * q[2] + q[3] * q[3]), Math.abs(q[0]));
  }

  /* Множитель 2/|q|² делает матрицу ортогональной и у неединичного q: ошибка
     нормировки не превращается в растяжение тела на экране. */
  function quatToMat(q) {
    var w = q[0], x = q[1], y = q[2], z = q[3];
    var n = w * w + x * x + y * y + z * z, s = n > 0 ? 2 / n : 0;
    var xx = x * x * s, yy = y * y * s, zz = z * z * s;
    var xy = x * y * s, xz = x * z * s, yz = y * z * s;
    var wx = w * x * s, wy = w * y * s, wz = w * z * s;
    return [1 - yy - zz, xy - wz, xz + wy,
            xy + wz, 1 - xx - zz, yz - wx,
            xz - wy, yz + wx, 1 - xx - yy];
  }

  /* Метод Шеппарда: ветвь выбирается по наибольшему из следа и диагонали,
     поэтому делитель никогда не близок к нулю, при любом угле. */
  function matToQuat(M) {
    var tr = M[0] + M[4] + M[8], q, s;
    if (tr > 0) {
      s = Math.sqrt(tr + 1) * 2;
      q = [s / 4, (M[7] - M[5]) / s, (M[2] - M[6]) / s, (M[3] - M[1]) / s];
    } else if (M[0] > M[4] && M[0] > M[8]) {
      s = Math.sqrt(1 + M[0] - M[4] - M[8]) * 2;
      q = [(M[7] - M[5]) / s, s / 4, (M[1] + M[3]) / s, (M[2] + M[6]) / s];
    } else if (M[4] > M[8]) {
      s = Math.sqrt(1 + M[4] - M[0] - M[8]) * 2;
      q = [(M[2] - M[6]) / s, (M[1] + M[3]) / s, s / 4, (M[5] + M[7]) / s];
    } else {
      s = Math.sqrt(1 + M[8] - M[0] - M[4]) * 2;
      q = [(M[3] - M[1]) / s, (M[2] + M[6]) / s, (M[5] + M[7]) / s, s / 4];
    }
    return quatNorm(q);
  }

  function quatRotate(q, v) { return matVec(quatToMat(q), v); }

  function quatStep(q, omega, dt, inBody) {
    var th = len(omega) * dt;
    if (th === 0) return quatNorm(q);
    var d = quat(omega, th);
    return quatNorm(inBody ? quatMul(q, d) : quatMul(d, q));
  }

  /* ── камера ──────────────────────────────────────────────── */

  /* Зритель в направлении v = (cos el·cos az, cos el·sin az, sin el) и
     смотрит в начало. Вправо на экране r = (−sin az, cos az, 0), вверх
     u = (−sin el·cos az, −sin el·sin az, cos el); тройка (r, u, v) правая:
     r × u = v. Проверяется в тесте: у проекции второй недели знак обратный.
     Глубина — проекция на v, чем больше, тем ближе к зрителю. */
  function camera(o) {
    o = o || {};
    var cam = {
      cx: o.cx != null ? o.cx : 500,
      cy: o.cy != null ? o.cy : 220,
      scale: o.scale != null ? o.scale : 150,
      az: o.az != null ? o.az : 45,
      el: o.el != null ? o.el : ISO_EL,
      target: o.target || [0, 0, 0]
    };
    var az0 = NaN, el0 = NaN;
    var f = { r: [1, 0, 0], u: [0, 0, 1], v: [0, 1, 0] };

    function sync() {
      if (cam.az === az0 && cam.el === el0) return;
      cam.el = clamp(cam.el, -89.5, 89.5);
      az0 = cam.az; el0 = cam.el;
      var a = cam.az * DEG, e = cam.el * DEG;
      var sa = Math.sin(a), ca = Math.cos(a), se = Math.sin(e), ce = Math.cos(e);
      f = { r: [-sa, ca, 0], u: [-se * ca, -se * sa, ce], v: [ce * ca, ce * sa, se] };
    }

    cam.frame = function () { sync(); return f; };

    cam.project = function (p) {
      sync();
      var t = cam.target, x = p[0] - t[0], y = p[1] - t[1], z = p[2] - t[2];
      var s = cam.scale * K_ISO, r = f.r, u = f.u, v = f.v;
      return [cam.cx + s * (x * r[0] + y * r[1] + z * r[2]),
              cam.cy - s * (x * u[0] + y * u[1] + z * u[2]),
              x * v[0] + y * v[1] + z * v[2]];
    };

    cam.px = function (r) { return r * cam.scale * K_ISO; };

    cam.rotate = function (dAz, dEl) {
      cam.az += dAz;
      cam.el = clamp(cam.el + dEl, -89.5, 89.5);
    };

    sync();
    return cam;
  }

  /* Вращение мышью и пальцем. Знаки по правилу «берём сцену рукой»: ближняя
     к зрителю поверхность идёт за курсором. Вправо: ближняя сторона вправо,
     то есть камера обходит сцену по часовой стрелке сверху, az убывает.
     Вниз: сверху становится видно больше, el растёт. Прокрутке страницы
     палец на канве не мешает только пока жест тянется: touchmove отменяется
     при активном жесте, а touch-action в стили демки не добавляем. */
  function dragCamera(canvas, cam, onChange, opt) {
    var k = opt && opt.speed != null ? opt.speed : 0.4;
    var id = null, x0 = 0, y0 = 0;

    function down(e) {
      if (e.button != null && e.button !== 0) return;
      id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
      try { canvas.setPointerCapture(id); } catch (err) {}
    }
    function move(e) {
      if (id === null || e.pointerId !== id) return;
      var dx = e.clientX - x0, dy = e.clientY - y0;
      x0 = e.clientX; y0 = e.clientY;
      cam.rotate(-dx * k, dy * k);
      if (onChange) onChange(cam);
    }
    function up(e) {
      if (e.pointerId !== id) return;
      id = null;
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    }
    function touch(e) { if (id !== null && e.cancelable) e.preventDefault(); }

    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('touchmove', touch, { passive: false });
    return function () {
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', up);
      canvas.removeEventListener('pointercancel', up);
      canvas.removeEventListener('touchmove', touch);
    };
  }

  /* ── цвет и текст ────────────────────────────────────────── */

  /* Цвета данных от темы не зависят и пишутся как есть; палитра собрана из
     соседних демок (sharik-na-niti, dva-tela, demo.css), чтобы три
     трёхмерные демки не расходились оттенками. */
  var palette = {
    blue: '#7aa6ff', teal: '#4db6c6', amber: '#f2b84b',
    orange: '#e08a52', green: '#a6c35a', red: '#ff7a66'
  };

  function rgbOf(c) {
    if (Array.isArray(c)) return c;
    if (typeof c !== 'string') return [200, 200, 200];
    var m = /^#([0-9a-f]{6})$/i.exec(c), n;
    if (m) { n = parseInt(m[1], 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
    m = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(c);
    if (m) return [parseInt(m[1] + m[1], 16), parseInt(m[2] + m[2], 16), parseInt(m[3] + m[3], 16)];
    m = /(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/.exec(c);
    if (m) return [+m[1], +m[2], +m[3]];
    return [200, 200, 200];
  }

  function rgba(c, a) {
    var v = rgbOf(c);
    return 'rgba(' + Math.round(v[0]) + ',' + Math.round(v[1]) + ',' + Math.round(v[2]) +
           ',' + (a == null ? 1 : a) + ')';
  }

  function mix(c1, c2, t) {
    var a = rgbOf(c1), b = rgbOf(c2);
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }

  /* Освещение грани: как в poryadok-povorotov, 0,46 в тени и до 1,0 на свету. */
  function lit(c, n) {
    var v = rgbOf(c), k = 0.46 + 0.54 * Math.max(0, dot(n, api.light));
    return 'rgb(' + Math.round(Math.min(255, v[0] * k)) + ',' + Math.round(Math.min(255, v[1] * k)) +
           ',' + Math.round(Math.min(255, v[2] * k)) + ')';
  }

  /* Чернила темы строками 'r,g,b'. Слайд колоды тёмный, полотно главы
     светлое или тёмное по теме сайта: цвета подписей и осей берутся у ядра
     (C.tones), а не зашиты. Вызов дешёвый и нужен только там, где у стиля
     нет своего цвета. */
  function tones(ctx) {
    var core = global.DemoCore;
    if (core && core.tones) return core.tones(ctx);
    return { ink: '236,238,246', muted: '140,147,172', accent: '255,180,84' };
  }

  var FONT = '"Golos Text", system-ui, sans-serif';

  function text(ctx, x, y, s, size, color, align) {
    var core = global.DemoCore;
    if (core && core.label) { core.label(ctx, x, y, s, size, color, align); return; }
    ctx.fillStyle = color; ctx.font = size + 'px ' + FONT;
    ctx.textAlign = align || 'center'; ctx.fillText(s, x, y);
  }

  function textWidth(ctx, s, size) {
    ctx.font = size + 'px ' + FONT;
    return ctx.measureText(s).width;
  }

  /* ── отрезок, стрелка ───────────────────────────────────── */

  function segment(ctx, cam, a, b, st) {
    st = st || {};
    var pa = cam.project(a), pb = cam.project(b);
    ctx.save();
    ctx.globalAlpha = st.alpha != null ? st.alpha : 1;
    ctx.strokeStyle = st.color || 'rgba(' + tones(ctx).ink + ',.9)';
    ctx.lineWidth = st.width || 2;
    ctx.lineCap = st.cap || 'round';
    ctx.setLineDash(st.dash || []);
    ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pb[0], pb[1]); ctx.stroke();
    ctx.restore();
  }

  /* Стрелка с залитым остриём. Острие не удлиняет вектор: древко кончается
     за его основанием, и нарисованная длина отвечает числу. Размеры те же,
     что у плоских стрелок соседних демок (uskorenie-v-povorote). part:
     undefined — всё, 'shaft' — без подписи, 'label' — только подпись. */
  function arrowDraw(ctx, cam, a, b, st, part) {
    var pa = cam.project(a), pb = cam.project(b);
    var col = st.color || 'rgb(' + tones(ctx).ink + ')';
    var dx = pb[0] - pa[0], dy = pb[1] - pa[1], L = Math.sqrt(dx * dx + dy * dy);
    if (L < 1.5) return [pb[0], pb[1]];
    var ux = dx / L, uy = dy / L, w = st.width || 4;
    var hl = Math.min(st.head || Math.max(14, 3.2 * w), L * 0.55);

    ctx.save();
    ctx.globalAlpha = st.alpha != null ? st.alpha : 1;
    if (part !== 'label') {
      ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round';
      ctx.setLineDash(st.dash || []);
      ctx.beginPath(); ctx.moveTo(pa[0], pa[1]);
      ctx.lineTo(pb[0] - ux * hl * 0.8, pb[1] - uy * hl * 0.8); ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(pb[0], pb[1]);
      ctx.lineTo(pb[0] - ux * hl - uy * hl * 0.42, pb[1] - uy * hl + ux * hl * 0.42);
      ctx.lineTo(pb[0] - ux * hl + uy * hl * 0.42, pb[1] - uy * hl - ux * hl * 0.42);
      ctx.closePath(); ctx.fill();
      if (st.dot) { ctx.beginPath(); ctx.arc(pa[0], pa[1], st.dot, 0, 2 * PI); ctx.fill(); }
    }
    if (part !== 'shaft' && st.label) {
      /* Подпись отодвигается от конца вдоль стрелки на зазор плюс
         полуразмер её рамки в этом направлении: так она не наезжает на
         остриё ни у горизонтальной стрелки, ни у вертикальной. */
      var size = Math.max(FONT_MIN, st.labelSize || 19);
      var tw = textWidth(ctx, st.label, size), th = size * 0.55;
      var gap = (st.labelGap != null ? st.labelGap : 8) + Math.abs(ux) * tw / 2 + Math.abs(uy) * th;
      text(ctx, pb[0] + ux * gap + (st.labelDx || 0),
           pb[1] + uy * gap + (st.labelDy || 0) + size * 0.34,
           st.label, size, st.labelColor || col, 'center');
    }
    ctx.restore();
    return [pb[0], pb[1]];
  }

  function arrow(ctx, cam, a, b, st) { return arrowDraw(ctx, cam, a, b, st || {}); }

  function label3(ctx, cam, p, s, st) {
    st = st || {};
    var q = cam.project(p), size = Math.max(FONT_MIN, st.size || 19);
    ctx.save();
    text(ctx, q[0] + (st.dx || 0), q[1] + (st.dy || 0) + size * 0.34, s, size,
         st.color || 'rgb(' + tones(ctx).ink + ')', st.align || 'center');
    ctx.restore();
  }

  /* ── шар ─────────────────────────────────────────────────── */

  /* Шар в ортографической проекции — всегда круг радиуса cam.px(r).
     Блик стоит там, где нормаль шара совпадает со светом: это точка на
     круге, смещённая от центра на проекцию света на экран. */
  function ball(ctx, cam, c, r, st) {
    st = st || {};
    var p = cam.project(c), R = cam.px(r), f = cam.frame();
    if (!(R > 0)) return;                                      /* нулевой радиус или NaN: рисовать нечего */
    var base = rgbOf(st.color || palette.amber);
    var lx = dot(api.light, f.r), ly = -dot(api.light, f.u);
    var g = ctx.createRadialGradient(p[0] + 0.55 * R * lx, p[1] + 0.55 * R * ly, 0.08 * R,
                                     p[0], p[1], R);
    g.addColorStop(0, rgba(mix(base, [255, 255, 255], 0.55)));
    g.addColorStop(0.5, rgba(base));
    g.addColorStop(1, rgba(mix(base, [0, 0, 0], 0.5)));
    ctx.save();
    ctx.globalAlpha = st.alpha != null ? st.alpha : 1;
    ctx.beginPath(); ctx.arc(p[0], p[1], R, 0, 2 * PI);
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = 'rgba(10,12,20,.4)'; ctx.lineWidth = 1.2; ctx.stroke();
    ctx.restore();
  }

  /* ── ломаные, окружности, сфера ─────────────────────────── */

  /* Ломаная по точкам мира. С dimBehind линия режется на куски по тому,
     по какую сторону от центра она лежит относительно зрителя: ближние
     куски полной яркости, дальние бледные. Куски одной яркости идут одним
     путём, иначе на стыках отдельных штрихов с альфой видны тёмные точки. */
  function curve(ctx, cam, pts, st) {
    st = st || {};
    if (pts.length < 2) return;
    var P = pts.map(function (p) { return cam.project(p); });
    var alpha = st.alpha != null ? st.alpha : 1;
    ctx.save();
    ctx.strokeStyle = st.color || 'rgba(' + tones(ctx).ink + ',.9)';
    ctx.lineWidth = st.width || 2;
    ctx.lineJoin = 'round'; ctx.lineCap = 'butt';

    if (st.fill) {
      ctx.globalAlpha = st.fillAlpha != null ? st.fillAlpha : 0.18;
      ctx.fillStyle = st.fill;
      ctx.beginPath();
      P.forEach(function (q, i) { if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
      ctx.closePath(); ctx.fill();
    }

    function stroke(a) { ctx.globalAlpha = a; ctx.setLineDash(st.dash || []); ctx.stroke(); }

    if (!st.dimBehind) {
      ctx.beginPath();
      P.forEach(function (q, i) { if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
      if (st.closed) ctx.closePath();
      stroke(alpha);
    } else {
      var v = cam.frame().v, back0 = st.backAlpha != null ? st.backAlpha : 0.3, run = null;
      var n = st.closed ? P.length : P.length - 1;
      for (var i = 0; i < n; i++) {
        var j = (i + 1) % P.length;
        var mid = lerp(pts[i], pts[j], 0.5);
        var back = dot(sub(mid, st.dimBehind), v) < 0;
        if (back !== run) {
          if (run !== null) stroke(run ? alpha * back0 : alpha);
          ctx.beginPath(); ctx.moveTo(P[i][0], P[i][1]);
          run = back;
        }
        ctx.lineTo(P[j][0], P[j][1]);
      }
      if (run !== null) stroke(run ? alpha * back0 : alpha);
    }
    ctx.restore();
  }

  function circlePoints(c, n, r, st) {
    var nu = unit(n);
    var u = st.ref ? sub(st.ref, mul(nu, dot(st.ref, nu))) : null;
    u = u && len(u) > 1e-9 ? unit(u) : perp(nu);
    var w = cross(nu, u);
    var a0 = st.from || 0, a1 = st.to != null ? st.to : 2 * PI;
    var N = Math.max(8, Math.ceil((st.n || 72) * Math.abs(a1 - a0) / (2 * PI)));
    var pts = [];
    for (var i = 0; i <= N; i++) {
      var t = a0 + (a1 - a0) * i / N, ct = Math.cos(t) * r, stt = Math.sin(t) * r;
      pts.push([c[0] + ct * u[0] + stt * w[0], c[1] + ct * u[1] + stt * w[1],
                c[2] + ct * u[2] + stt * w[2]]);
    }
    return pts;
  }

  function circle3(ctx, cam, c, n, r, st) {
    st = st || {};
    curve(ctx, cam, circlePoints(c, n, r, st), st);
  }

  /* Контур шара и большие окружности. Контур — круг радиуса cam.px(R);
     окружности рисуются с приглушённой дальней половиной, по ним на глаз
     читается, где перед, где зад. */
  function wireSphere(ctx, cam, c, R, st) {
    st = st || {};
    var col = st.color || 'rgba(' + tones(ctx).muted + ',.9)', alpha = st.alpha != null ? st.alpha : 0.55;
    var p = cam.project(c);
    ctx.save();
    ctx.globalAlpha = alpha; ctx.strokeStyle = col; ctx.lineWidth = st.width || 1.2;
    ctx.beginPath(); ctx.arc(p[0], p[1], cam.px(R), 0, 2 * PI); ctx.stroke();
    ctx.restore();
    (st.rings || [[0, 0, 1], [1, 0, 0], [0, 1, 0]]).forEach(function (n) {
      circle3(ctx, cam, c, n, R, { color: col, width: st.width || 1.2, alpha: alpha, dimBehind: c });
    });
  }

  /* ── оси и сетка ─────────────────────────────────────────── */

  function axes(ctx, cam, o, L, st) {
    st = st || {};
    var col = st.color || 'rgba(' + tones(ctx).muted + ',.95)';
    var names = st.labels === false ? [] : (st.labels || ['x', 'y', 'z']);
    var tail = st.tail != null ? st.tail : 0.3;
    var E = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    for (var k = 0; k < 3; k++) {
      var c = st.colors ? st.colors[k] : col;
      if (tail > 0) {
        segment(ctx, cam, o, add(o, mul(E[k], -tail * L)),
                { color: c, width: st.width || 1.6, alpha: 0.4, cap: 'butt' });
      }
      arrow(ctx, cam, o, add(o, mul(E[k], L)),
            { color: c, width: st.width || 1.6, head: st.head || 11, label: names[k],
              labelSize: st.labelSize || 17 });
    }
  }

  function grid(ctx, cam, o, half, step, st) {
    st = st || {};
    var n = Math.max(1, Math.round(half / step)), ext = n * step;
    ctx.save();
    ctx.strokeStyle = st.color || 'rgba(' + tones(ctx).muted + ',.22)';
    ctx.lineWidth = st.width || 1;
    ctx.beginPath();
    for (var i = -n; i <= n; i++) {
      var s = i * step;
      var a = cam.project([o[0] + s, o[1] - ext, o[2]]), b = cam.project([o[0] + s, o[1] + ext, o[2]]);
      ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
      a = cam.project([o[0] - ext, o[1] + s, o[2]]); b = cam.project([o[0] + ext, o[1] + s, o[2]]);
      ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
    }
    ctx.stroke();
    ctx.restore();
  }

  /* ── многогранники ───────────────────────────────────────── */

  /* Углы единичной коробки: номер угла 4·[x>0] + 2·[y>0] + [z>0]. Шесть
     граней: ось нормали, знак и четыре угла по кругу. Обход по кругу важен:
     полигон, обойдённый крест-накрест, заливается бабочкой. У граней с
     отрицательным знаком порядок обращён, чтобы обход везде шёл против
     часовой стрелки, если смотреть снаружи. Порядок граней: +x −x +y −y +z −z. */
  var BOX_PAIRS = [[1, 2], [2, 0], [0, 1]];
  var BOX_RING = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  var BOX_SIGNS = [];
  var BOX_FACES = [];
  (function () {
    var ix, iy, iz, k, sg;
    for (ix = -1; ix <= 1; ix += 2)
      for (iy = -1; iy <= 1; iy += 2)
        for (iz = -1; iz <= 1; iz += 2) BOX_SIGNS.push([ix, iy, iz]);
    for (k = 0; k < 3; k++)
      for (sg = 1; sg >= -1; sg -= 2) {
        var idx = BOX_RING.map(function (p) {
          var s = [0, 0, 0];
          s[k] = sg; s[BOX_PAIRS[k][0]] = p[0]; s[BOX_PAIRS[k][1]] = p[1];
          return ((s[0] + 1) / 2) * 4 + ((s[1] + 1) / 2) * 2 + ((s[2] + 1) / 2);
        });
        if (sg < 0) idx.reverse();
        BOX_FACES.push({ axis: k, sign: sg, idx: idx });
      }
  })();

  function boxMesh(center, R, half, colors) {
    if (R.length === 4) R = quatToMat(R);                      /* ориентация и кватернионом */
    var h = Array.isArray(half) ? half : [half, half, half];
    var v = BOX_SIGNS.map(function (s) {
      return add(center, matVec(R, [s[0] * h[0], s[1] * h[1], s[2] * h[2]]));
    });
    /* colors: ничего, один цвет (строка или [r, g, b]) или массив из шести
       цветов. Массив длины шесть — всегда по граням: тройка [r, g, b]
       короче. */
    var perFace = Array.isArray(colors) && colors.length === 6;
    var f = BOX_FACES.map(function (g, i) {
      var n = [R[g.axis], R[3 + g.axis], R[6 + g.axis]];       /* столбец R: ось тела в мире */
      return { i: g.idx.slice(), n: mul(n, g.sign), color: perFace ? colors[i] : colors };
    });
    return { v: v, f: f };
  }

  /* Призма: n-угольник в основании. u, w, ось — правая тройка (u × w = ось),
     поэтому обход основания при росте угла идёт против часовой стрелки,
     если смотреть с конца оси. ref задаёт направление на нулевую вершину. */
  function prismMesh(center, axis, radius, height, sides, ref) {
    var a = unit(axis), n = sides || 36;
    var u = ref ? sub(ref, mul(a, dot(ref, a))) : null;
    u = u && len(u) > 1e-9 ? unit(u) : perp(a);
    var w = cross(a, u), hh = height / 2, v = [], f = [], i, ph;
    for (i = 0; i < n; i++) {
      ph = 2 * PI * i / n;
      var ring = add(mul(u, Math.cos(ph) * radius), mul(w, Math.sin(ph) * radius));
      v.push(add(add(center, ring), mul(a, -hh)));
    }
    for (i = 0; i < n; i++) v.push(add(v[i], mul(a, height)));
    var top = [], bot = [];
    for (i = 0; i < n; i++) { top.push(n + i); bot.push(n - 1 - i); }
    f.push({ i: top, n: a, cap: 1 });
    f.push({ i: bot, n: mul(a, -1), cap: -1 });
    for (i = 0; i < n; i++) {
      var j = (i + 1) % n;
      ph = 2 * PI * (i + 0.5) / n;
      f.push({ i: [i, j, n + j, n + i],
               n: add(mul(u, Math.cos(ph)), mul(w, Math.sin(ph))) });
    }
    return { v: v, f: f, u: u, w: w, a: a, c: center, r: radius, h: height };
  }

  /* Грани по глубине. Для выпуклого тела отсечения тыльных граней по нормали
     уже хватает; сортировка нужна, когда тело прозрачное или собрано из
     нескольких кусков. Глубина грани — среднее по её вершинам. */
  function solid(ctx, cam, mesh, st) {
    st = st || {};
    var v = cam.frame().v;
    var P = mesh.v.map(function (p) { return cam.project(p); });
    var list = [];
    mesh.f.forEach(function (f) {
      if (st.cull !== false && dot(f.n, v) <= 1e-9) return;
      var d = 0;
      f.i.forEach(function (k) { d += P[k][2]; });
      list.push({ f: f, d: d / f.i.length });
    });
    list.sort(function (a, b) { return a.d - b.d; });

    ctx.save();
    ctx.globalAlpha = st.alpha != null ? st.alpha : 1;
    ctx.lineJoin = 'round';
    list.forEach(function (it) {
      var pts = it.f.i.map(function (k) { return P[k]; });
      ctx.beginPath();
      pts.forEach(function (q, j) { if (j) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
      ctx.closePath();
      ctx.fillStyle = lit(it.f.color || st.color || palette.blue, it.f.n);
      ctx.fill();
      ctx.strokeStyle = st.edge || 'rgba(18,20,28,.5)';
      ctx.lineWidth = st.edgeWidth != null ? st.edgeWidth : 1.2;
      ctx.stroke();
      if (it.f.after) it.f.after(ctx, pts);
    });
    ctx.restore();
  }

  function box(ctx, cam, center, R, half, st) {
    st = st || {};
    solid(ctx, cam, boxMesh(center, R, half, st.colors || st.color), st);
  }

  /* Диск: призма, на торцах которой спицы. Спицы стоят в пространстве, а не
     на экране: рисуются через ту же проекцию от центра торца к точкам
     обода, повёрнутым на spin вокруг оси. */
  function diskMesh(cam, center, axis, radius, thickness, st) {
    var m = prismMesh(center, axis, radius, thickness, st.sides || 36, st.ref);
    var marks = st.marks || 0, spin = st.spin || 0;
    if (marks > 0) {
      var spoke = function (ctxx, sign) {
        var c = add(m.c, mul(m.a, sign * thickness / 2)), pc = cam.project(c);
        ctxx.strokeStyle = st.markColor || 'rgba(18,20,28,.55)';
        ctxx.lineWidth = st.markWidth || 2.2; ctxx.lineCap = 'round';
        ctxx.beginPath();
        for (var j = 0; j < marks; j++) {
          var t = spin + 2 * PI * j / marks;
          var p = cam.project(add(c, add(mul(m.u, Math.cos(t) * radius * 0.92),
                                         mul(m.w, Math.sin(t) * radius * 0.92))));
          ctxx.moveTo(pc[0], pc[1]); ctxx.lineTo(p[0], p[1]);
        }
        ctxx.stroke();
      };
      m.f[0].after = function (ctxx) { spoke(ctxx, 1); };
      m.f[1].after = function (ctxx) { spoke(ctxx, -1); };
    }
    return m;
  }

  function disk(ctx, cam, center, axis, radius, thickness, st) {
    st = st || {};
    solid(ctx, cam, diskMesh(cam, center, axis, radius, thickness, st), st);
  }

  /* ── слой: общая сортировка по глубине ───────────────────── */

  function layer(cam) {
    var items = [];
    var Ly = {};

    function depthOf(p) { return cam.project(p)[2]; }
    function put(st, d, fn) {
      items.push({ d: st && st.depth != null ? st.depth : d, fn: fn });
      return Ly;
    }
    function centroid(pts) {
      var s = [0, 0, 0];
      pts.forEach(function (p) { s = add(s, p); });
      return mul(s, 1 / pts.length);
    }

    Ly.add = function (depth, fn) { items.push({ d: depth, fn: fn }); return Ly; };

    Ly.segment = function (a, b, st) {
      st = st || {};
      var n = Math.max(1, st.pieces || 1);
      for (var i = 0; i < n; i++) {
        (function (p, q) {
          put(st, depthOf(lerp(p, q, 0.5)), function (ctx) { segment(ctx, cam, p, q, st); });
        })(lerp(a, b, i / n), lerp(a, b, (i + 1) / n));
      }
      return Ly;
    };

    Ly.arrow = function (a, b, st) {
      st = st || {};
      put(st, depthOf(lerp(a, b, 0.5)), function (ctx) { arrowDraw(ctx, cam, a, b, st, 'shaft'); });
      if (st.label) put({ depth: BIG }, 0, function (ctx) { arrowDraw(ctx, cam, a, b, st, 'label'); });
      return Ly;
    };

    Ly.ball = function (c, r, st) {
      return put(st, depthOf(c), function (ctx) { ball(ctx, cam, c, r, st); });
    };

    Ly.curve = function (pts, st) {
      return put(st, pts.length ? depthOf(centroid(pts)) : 0,
                 function (ctx) { curve(ctx, cam, pts, st); });
    };

    Ly.circle3 = function (c, n, r, st) {
      return put(st, depthOf(c), function (ctx) { circle3(ctx, cam, c, n, r, st); });
    };

    Ly.solid = function (mesh, st) {
      return put(st, depthOf(centroid(mesh.v)), function (ctx) { solid(ctx, cam, mesh, st); });
    };

    Ly.box = function (c, R, h, st) {
      return put(st, depthOf(c), function (ctx) { box(ctx, cam, c, R, h, st); });
    };

    Ly.disk = function (c, axis, r, t, st) {
      return put(st, depthOf(c), function (ctx) { disk(ctx, cam, c, axis, r, t, st); });
    };

    Ly.label = function (p, s, st) {
      return put({ depth: BIG }, 0, function (ctx) { label3(ctx, cam, p, s, st); });
    };

    Ly.flush = function (ctx) {
      var list = items; items = [];
      list.sort(function (a, b) { return a.d - b.d; });
      list.forEach(function (it) { it.fn(ctx); });
    };

    return Ly;
  }

  /* ── экспорт ─────────────────────────────────────────────── */

  var api = {
    add: add, sub: sub, mul: mul, dot: dot, cross: cross, len: len, unit: unit,
    lerp: lerp, perp: perp, angle: angle,
    ident: ident, matMul: matMul, matT: matT, matVec: matVec,
    rotX: rotX, rotY: rotY, rotZ: rotZ, rotAxis: rotAxis, rotate: rotate,
    matAngle: matAngle, matAxis: matAxis, orthonormalize: orthonormalize,
    quat: quat, quatMul: quatMul, quatConj: quatConj, quatNorm: quatNorm,
    quatAngle: quatAngle, quatToMat: quatToMat, matToQuat: matToQuat,
    quatRotate: quatRotate, quatStep: quatStep,
    camera: camera, dragCamera: dragCamera,
    segment: segment, arrow: arrow, ball: ball, curve: curve, circle3: circle3,
    wireSphere: wireSphere, label3: label3, axes: axes, grid: grid,
    boxMesh: boxMesh, prismMesh: prismMesh, solid: solid, box: box, disk: disk,
    layer: layer,
    rgba: rgba, mix: mix, palette: palette,
    light: unit([0.35, 0.45, 1])        /* направление на источник света, как в poryadok-povorotov */
  };
  global.Demo3D = api;
})(window);
