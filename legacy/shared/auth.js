/* Сессия LMS на страницах статики: vanilla, без сборки.

   Хранение токена — то же, что в кабинете (web/frontend/src/api/client.js):
   JWT в localStorage.token (вход с «запомнить») или sessionStorage.token,
   пользователь — JSON в ключе user. Благодаря общему формату кабинет и
   статика читают одну сессию, когда живут на одном origin; между разными
   origin токен передаётся при переходе (см. topbar.js).

   Ошибки API статику не роняют: нет сети, CORS, протухший токен —
   страница живёт гостевой, в консоли warning. */

(function (global) {
  'use strict';

  var cfg = global.PLATFORM_CONFIG || {};
  var sessionPromise = null; /* кэш на страницу: /auth/me зовём один раз */

  function getToken() {
    try {
      return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
    } catch (e) {
      return '';
    }
  }

  function getStoredUser() {
    try {
      var raw = localStorage.getItem('user') || sessionStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setAuth(token, user, remember) {
    var into = remember === false ? sessionStorage : localStorage;
    var other = remember === false ? localStorage : sessionStorage;
    into.setItem('token', token);
    into.setItem('user', JSON.stringify(user));
    other.removeItem('token');
    other.removeItem('user');
    sessionPromise = null;
  }

  function clearAuth() {
    [localStorage, sessionStorage].forEach(function (s) {
      try {
        s.removeItem('token');
        s.removeItem('user');
      } catch (e) { /* приватный режим */ }
    });
    sessionPromise = null;
  }

  /* fetch к API LMS с Bearer-заголовком; path — от корня, '/api/...' */
  function authFetch(path, opts) {
    if (!cfg.lmsApi) {
      return Promise.reject(new Error('PLATFORM_CONFIG.lmsApi не задан'));
    }
    opts = opts || {};
    var headers = {};
    for (var k in (opts.headers || {})) headers[k] = opts.headers[k];
    var token = getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;
    if (opts.body && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }
    var merged = {};
    for (var o in opts) merged[o] = opts[o];
    merged.headers = headers;
    /* Ответ зависит от роли в токене — кешировать его нельзя ни на секунду:
       после смены роли браузер отдал бы старое. */
    merged.cache = 'no-store';
    return fetch(cfg.lmsApi + path, merged);
  }

  /* Сессия: есть валидный токен — объект пользователя из /api/auth/me,
     иначе null. 401 чистит хранилище (токен протух или отозван);
     сетевые ошибки токен не трогают — LMS могла быть просто выключена. */
  function getSession() {
    if (sessionPromise) return sessionPromise;
    if (!getToken()) return Promise.resolve(null);
    sessionPromise = authFetch('/api/auth/me')
      .then(function (r) {
        if (r.status === 401) {
          clearAuth();
          return null;
        }
        if (!r.ok) throw new Error('auth/me: HTTP ' + r.status);
        return r.json();
      })
      .catch(function (e) {
        if (global.console && console.warn) {
          console.warn('[auth] сессия недоступна, страница гостевая:', e.message || e);
        }
        sessionPromise = null; /* не кэшируем сетевую ошибку */
        return null;
      });
    return sessionPromise;
  }

  function postJson(path, payload) {
    return authFetch(path, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (!r.ok) {
          var msg = data && typeof data.detail === 'string' ? data.detail : null;
          var err = new Error(msg || ('HTTP ' + r.status));
          err.status = r.status;
          throw err;
        }
        return data;
      });
    });
  }

  /* Шаг 1: код на почту. Ответ API включает totp_enabled — тогда код
     ждём из приложения-аутентификатора, письмо не отправлялось. */
  function requestCode(email, fallback) {
    return postJson('/api/auth/email/request', {
      email: String(email),
      fallback: !!fallback
    });
  }

  /* Шаг 2: код из письма -> JWT в хранилище. */
  function verify(email, code, remember) {
    return postJson('/api/auth/email/verify', {
      email: String(email),
      code: String(code),
      remember: remember !== false
    }).then(function (data) {
      setAuth(data.access_token, data.user, remember !== false);
      return data.user;
    });
  }

  /* Шаг 2 для тех, у кого настроен аутентификатор. */
  function verifyTotp(email, code, remember) {
    return postJson('/api/auth/totp/verify', {
      email: String(email),
      code: String(code),
      remember: remember !== false
    }).then(function (data) {
      setAuth(data.access_token, data.user, remember !== false);
      return data.user;
    });
  }

  /* Вход без кода: работает, только пока API поднят с APP_ENV=dev — в другом
     режиме эндпоинта просто нет и запрос вернёт 404. Нужен на стенде, где
     письма никуда не уходят, а посмотреть систему надо всеми ролями сразу. */
  function devLogin(email, remember) {
    return postJson('/api/auth/dev-login', {
      email: String(email)
    }).then(function (data) {
      setAuth(data.access_token, data.user, remember !== false);
      return data.user;
    });
  }

  /* Режим стенда подтверждает сам API: статику можно открыть и с боевого
     домена, и с локальной сборки, по адресу об этом не догадаешься. */
  function isDev() {
    return authFetch('/api/health')
      .then(function (r) { return r.json(); })
      .then(function (d) { return !!d && d.app_env === 'dev'; })
      .catch(function () { return false; });
  }

  function logout() {
    clearAuth();
  }

  /* Роль LMS -> роль страниц (blocks-runtime): владелец видит материалы
     преподавателя, у неизвестной роли гостевой доступ. */
  function pageRole(user) {
    if (!user) return 'гость';
    if (user.role === 'student') return 'студент';
    if (user.role === 'teacher' || user.role === 'owner') return 'преподаватель';
    return 'гость';
  }

  /* Подпись роли для шапки. */
  function roleLabel(user) {
    if (!user) return '';
    return { student: 'студент', teacher: 'преподаватель', owner: 'владелец' }[user.role] || user.role;
  }

  global.PlatformAuth = {
    config: cfg,
    getToken: getToken,
    getStoredUser: getStoredUser,
    getSession: getSession,
    authFetch: authFetch,
    requestCode: requestCode,
    verify: verify,
    verifyTotp: verifyTotp,
    devLogin: devLogin,
    isDev: isDev,
    logout: logout,
    pageRole: pageRole,
    roleLabel: roleLabel
  };
})(window);
