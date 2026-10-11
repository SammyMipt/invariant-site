/* Страница недели: общий сценарий для всех weekNN/index.html.

   До интеграции с LMS роль выбиралась концепт-переключателем в localStorage;
   теперь источник истины — сессия (shared/auth.js): есть JWT — роль
   из /api/auth/me, нет — гость с кнопкой «Войти». Состав секций и разметка
   доступа не менялись: контент по-прежнему статический, живые данные
   (сдача, преподаватель, дедлайн LMS) добавляются блоком «Моя неделя».

   Ошибки API не роняют страницу: любая беда с LMS оставляет её гостевой,
   подробность — в консоли. */

(function (global) {
  'use strict';

  var WEEK = global.WEEK;
  var Auth = global.PlatformAuth;
  var page = 'week' + String(WEEK.n < 10 ? '0' : '') + WEEK.n;

  /* ── статическая часть: то, что видит любой посетитель ──────── */

  document.getElementById('topics').textContent = WEEK.topics;

  var pdf = document.getElementById('pdf-card');
  pdf.href = global.PLATFORM_BASE + WEEK.pdf;
  pdf.addEventListener('click', function () {
    global.track('pdf_download', { file: WEEK.pdf });
  });

  /* методичка — курсоспецифичный текст из спеки недели */
  var met = document.getElementById('methodology');
  WEEK.methodology.forEach(function (m) {
    var art = document.createElement('article');
    art.className = 'block';
    var h = document.createElement('h3');
    h.className = 'block-title';
    h.textContent = m.t;
    var p = document.createElement('p');
    p.textContent = m.text;
    art.appendChild(h);
    art.appendChild(p);
    met.appendChild(art);
  });

  document.getElementById('deadlines').textContent = WEEK.deadlines.length
    ? WEEK.deadlines.map(function (d) { return d.t + ': ' + d.d; }).join(' · ')
    : 'Дедлайны недели объявляются при старте семестра.';

  /* ── роль из сессии ──────────────────────────────────────────── */

  var RANK = { 'гость': 0, 'студент': 1, 'преподаватель': 2 };

  function apply(role) {
    var rank = RANK[role] || 0;
    document.getElementById('sec-student').hidden = rank < 1;
    document.getElementById('sec-teacher').hidden = rank < 2;

    /* вопросы и задачи рендерятся под текущую роль: решения внутри
       задач открываются только преподавателю */
    var q = document.getElementById('questions');
    q.innerHTML = '';
    WEEK.questions.forEach(function (id) {
      global.Blocks.renderInto(q, id, { role: role });
    });
    var t = document.getElementById('task');
    t.innerHTML = '';
    WEEK.tasks.forEach(function (id) {
      global.Blocks.renderInto(t, id, { role: role });
    });
  }

  /* полоса под шапкой: гостю — вход, преподавателю — проверки недели */
  var bar = document.getElementById('role-bar');

  function showGuestBar() {
    bar.hidden = false;
    var link = document.createElement('a');
    link.className = 'role-login';
    link.href = '../login.html?next=' + encodeURIComponent(location.href);
    link.textContent = 'Войти';
    var note = document.createElement('span');
    note.className = 'role-note';
    note.textContent = 'Вопросы, задача и материалы преподавателя открываются после входа.';
    bar.appendChild(link);
    bar.appendChild(note);
  }

  function showTeacherBar(user) {
    var cab = Auth.config.lmsCabinet;
    if (!cab) return;
    bar.hidden = false;
    var link = document.createElement('a');
    link.className = 'role-login';
    link.href = cab + '/teacher/check-work';
    link.textContent = 'Проверка работ этой недели';
    bar.appendChild(link);
  }

  /* ── «Моя неделя»: живые данные LMS для студента ─────────────── */

  function filesWord(n) {
    var r10 = n % 10, r100 = n % 100;
    if (r10 === 1 && r100 !== 11) return 'файл';
    if (r10 >= 2 && r10 <= 4 && (r100 < 10 || r100 >= 20)) return 'файла';
    return 'файлов';
  }

  function fmtDeadline(ts) {
    return new Date(ts * 1000).toLocaleString('ru-RU', {
      day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
    });
  }

  function line(box, label, value) {
    var p = document.createElement('p');
    var b = document.createElement('strong');
    b.textContent = label + ': ';
    p.appendChild(b);
    p.appendChild(document.createTextNode(value));
    box.appendChild(p);
  }

  function renderMyWeek(week, files) {
    var sec = document.getElementById('my-week');
    if (!sec) return;

    var h = document.createElement('h2');
    h.textContent = 'Моя неделя';
    sec.appendChild(h);

    var card = document.createElement('div');
    card.className = 'myweek-card';

    line(card, 'Сдача', files.length
      ? 'загружено ' + files.length + ' ' + filesWord(files.length)
      : 'работа ещё не загружена');

    if (files.length) {
      var ul = document.createElement('ul');
      ul.className = 'myweek-files';
      files.forEach(function (f) {
        var li = document.createElement('li');
        var name = String(f.path || '').split(/[\\/]/).pop() || ('файл #' + f.id);
        var kb = Math.max(1, Math.round((f.size_bytes || 0) / 1024));
        li.textContent = name + ' · ' + kb + ' КБ';
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    line(card, 'Преподаватель', week.teacher_name || 'пока не назначен');

    if (week.deadline_ts_utc) {
      line(card, 'Дедлайн сдачи', fmtDeadline(week.deadline_ts_utc));
    }

    var cab = Auth.config.lmsCabinet;
    if (cab) {
      var act = document.createElement('p');
      act.className = 'myweek-actions';
      var slot = document.createElement('a');
      slot.className = 'demo-link';
      slot.href = cab + '/student/bookings';
      slot.textContent = 'Записаться на слот';
      act.appendChild(slot);
      card.appendChild(act);
    }

    sec.appendChild(card);
    sec.hidden = false;
  }

  function loadMyWeek() {
    Auth.authFetch('/api/student/weeks')
      .then(function (r) {
        if (!r.ok) throw new Error('student/weeks: HTTP ' + r.status);
        return r.json();
      })
      .then(function (weeks) {
        var mine = null;
        (weeks || []).forEach(function (w) {
          if (w.week_num === WEEK.n) mine = w;
        });
        if (!mine) {
          console.warn('[week] недели ' + WEEK.n + ' нет в LMS — блок «Моя неделя» скрыт');
          return;
        }
        Auth.authFetch('/api/student/submissions/' + WEEK.n)
          .then(function (r) { return r.ok ? r.json() : []; })
          .catch(function () { return []; })
          .then(function (files) { renderMyWeek(mine, files || []); });
      })
      .catch(function (e) {
        console.warn('[week] «Моя неделя» недоступна, страница гостевая:', e.message || e);
      });
  }

  /* ── старт ───────────────────────────────────────────────────── */

  apply('гость');

  if (Auth) {
    Auth.getSession().then(function (user) {
      var role = Auth.pageRole(user);
      if (role === 'гость') {
        showGuestBar();
        return;
      }
      apply(role);
      if (user.role === 'student') loadMyWeek();
      else showTeacherBar(user);
    });
  } else {
    showGuestBar();
  }

  global.track('page_view', { page: page });
})(window);
