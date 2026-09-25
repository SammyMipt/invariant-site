/* Сквозная шапка статики: одна на всех страницах, подключается script-тегом
   после config.js и auth.js (по образцу analytics.js).

   Гость видит «Войти», вошедший — имя с ролью, ссылку в кабинет LMS
   и «Выйти». Кабинет живёт на другом origin, поэтому при переходе токен
   и пользователь передаются во фрагменте адреса (#pt=...&pu=...):
   фрагмент не уходит на сервер, кабинет забирает его до старта приложения
   и сразу стирает из адресной строки (web/frontend/src/main.js). */

(function (global) {
  'use strict';

  var Auth = global.PlatformAuth;
  if (!Auth) return;

  /* Корень платформы из адреса самого скрипта: .../shared/topbar.js */
  var me = document.currentScript && document.currentScript.src;
  var root = me ? me.replace(/shared\/topbar\.js.*$/, '') : '../';

  var bar = document.createElement('div');
  bar.className = 'topbar';
  var inner = document.createElement('div');
  inner.className = 'topbar-inner';
  bar.appendChild(inner);

  var home = document.createElement('a');
  home.className = 'topbar-home';
  home.href = root + 'site/index.html';
  home.textContent = 'Физика 1';
  inner.appendChild(home);

  var right = document.createElement('span');
  right.className = 'topbar-right';
  inner.appendChild(right);

  function renderGuest() {
    var login = document.createElement('a');
    login.className = 'topbar-btn';
    login.href = root + 'site/login.html?next=' + encodeURIComponent(location.href);
    login.textContent = 'Войти';
    right.appendChild(login);
  }

  function renderUser(user) {
    var who = document.createElement('span');
    who.className = 'topbar-user';
    who.textContent = (user.name || user.id) + ' · ' + Auth.roleLabel(user);
    right.appendChild(who);

    var cab = Auth.config.lmsCabinet;
    if (cab) {
      var link = document.createElement('a');
      link.className = 'topbar-btn';
      link.textContent = 'Кабинет';
      /* Токен НЕ вписывается в href заранее (иначе он постоянно висит в DOM,
         виден в hover-статусе и копируется через контекстное меню) — адрес с
         фрагментом сессии собирается только в момент клика. Средний клик и
         «копировать адрес» получают чистый URL кабинета: там сработает
         обычный вход. */
      link.href = cab + '/';
      link.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = cab + '/#pt=' +
          encodeURIComponent(Auth.getToken()) +
          '&pu=' + encodeURIComponent(JSON.stringify(user));
      });
      right.appendChild(link);
    }

    var out = document.createElement('button');
    out.className = 'topbar-btn topbar-logout';
    out.type = 'button';
    out.textContent = 'Выйти';
    out.addEventListener('click', function () {
      Auth.logout();
      location.reload();
    });
    right.appendChild(out);
  }

  function mount() {
    document.body.insertBefore(bar, document.body.firstChild);
    Auth.getSession().then(function (user) {
      if (user) renderUser(user);
      else renderGuest();
    });
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})(window);
