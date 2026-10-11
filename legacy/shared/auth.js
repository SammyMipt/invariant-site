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

  /* Тексты ошибок входа. Ответила ли сама система курса, видно по телу: её
     отказы всегда приходят объектом с полем detail. Остальное пришло не от
     неё: сеть не довела запрос, прокси площадки или фильтр сети университета
     ответили своей страницей. До 29.09 такой отказ показывался как «HTTP 403»
     или сырое «Failed to fetch» (WORK.md, лог решений 29.09). Тексты те же,
     что у кабинета LMS: lms/web/frontend/src/utils/errors.js.

     Витрина ходит в API с чужого origin, и ответ без заголовков CORS браузер
     ей не показывает: отказ прокси, 502 контейнера и необработанный 500 LMS
     приходят сюда так же, как обрыв связи, TypeError без кода. Различает их
     контрольный запрос в режиме no-cors: если сервер ответил хоть чем-то, он
     проходит, если связи нет, падает. */
  var TEXT_OFFLINE = 'Нет связи с системой курса. Вне кампуса она открывается ' +
    'только через VPN университета; если VPN включён или вы в кампусе, ' +
    'попробуйте другую сеть.';
  var TEXT_TIMEOUT = 'Система курса не ответила за 30 секунд. Попробуйте ещё ' +
    'раз через минуту.';
  var TEXT_BROKEN_ANSWER = 'Система курса прислала неполный или чужой ответ. ' +
    'Попробуйте ещё раз; если повторится, смените сеть или переподключите VPN ' +
    'университета.';
  var TEXT_NOT_SAVED = 'Код принят, но браузер не сохранил вход. Обновите ' +
    'страницу и запросите новый код.';
  /* Только для витрины: код ответа отсюда не виден, а в кабинете виден. */
  var TEXT_HIDDEN_REFUSAL = 'Система курса или прокси по дороге к ней ответили ' +
    'отказом, но браузер не показывает его этой странице. Попробуйте ещё раз ' +
    'через несколько минут или войдите через кабинет курса: там будет виден ' +
    'код ошибки.';
  var TIMEOUT_MS = 30000;
  var PROBE_TIMEOUT_MS = 5000;

  function statusText(status) {
    if (status === 403) {
      return 'Сеть или прокси не пропустили запрос к системе курса (ошибка ' +
        '403). Попробуйте другую сеть или VPN университета.';
    }
    if (status === 429) {
      return 'Сеть или прокси ограничили число запросов (ошибка 429). ' +
        'Подождите несколько минут и попробуйте снова.';
    }
    if (status >= 500) {
      return 'Система курса сейчас недоступна (ошибка ' + status + '). ' +
        'Попробуйте через несколько минут.';
    }
    return 'Запрос к системе курса не прошёл (ошибка ' + status + ').';
  }

  function isObject(data) {
    return data !== null && typeof data === 'object' && !Array.isArray(data);
  }

  /* Ошибка с готовым текстом для человека; loginError отличает её от сырых
     ошибок браузера, которые ещё предстоит разобрать. */
  function requestError(text, status, extra) {
    var err = new Error(text);
    err.loginError = true;
    if (status) err.status = status;
    for (var k in (extra || {})) err[k] = extra[k];
    return err;
  }

  /* Без таймаута fetch ждёт ответа сколько угодно, и форма висит молча. */
  function timeoutSignal(ms) {
    try {
      return typeof AbortSignal !== 'undefined' && AbortSignal.timeout
        ? AbortSignal.timeout(ms) : undefined;
    } catch (e) {
      return undefined;
    }
  }

  function isTimeout(e) {
    var name = e && e.name;
    return name === 'TimeoutError' || name === 'AbortError';
  }

  /* Ответил ли сервер хоть чем-то: true, false. */
  function serverAnswers() {
    var url = cfg.lmsApi + '/api/health';
    return fetch(url, { mode: 'no-cors', cache: 'no-store', signal: timeoutSignal(PROBE_TIMEOUT_MS) })
      .then(function () { return true; }, function () { return false; });
  }

  /* Обрыв без кода. Живой сервер значит, что отказ скрыл браузер. */
  function hiddenOrOffline() {
    return serverAnswers().then(function (alive) {
      return alive
        ? requestError(TEXT_HIDDEN_REFUSAL, 0, { cabinet: cfg.lmsCabinet || '' })
        : requestError(TEXT_OFFLINE);
    });
  }

  /* Таймаут запроса. Адрес системы снаружи кампуса молча глотает соединения,
     и на Mac, Linux и телефонах браузер ждёт дольше 30 секунд: без проверки
     студент без VPN читал бы «не ответила», а не подсказку про VPN. */
  function slowOrOffline() {
    return serverAnswers().then(function (alive) {
      return requestError(alive ? TEXT_TIMEOUT : TEXT_OFFLINE);
    });
  }

  function postJson(path, payload) {
    return authFetch(path, {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: timeoutSignal(TIMEOUT_MS)
    }).then(function (r) {
      return r.json().catch(function (e) {
        /* Не JSON — значит, тело чужое. Обрыв или таймаут на середине тела
           разбираются ниже как ошибки связи. */
        if (e && e.name === 'SyntaxError') return null;
        if (isTimeout(e)) throw requestError(TEXT_TIMEOUT);
        throw requestError(TEXT_BROKEN_ANSWER, r.status);
      }).then(function (data) {
        if (!r.ok) {
          if (isObject(data) && 'detail' in data) {
            var detail = typeof data.detail === 'string' ? data.detail.trim() : '';
            throw requestError(detail || ('Система курса отклонила запрос (ошибка ' +
              r.status + ').'), r.status);
          }
          throw requestError(statusText(r.status), r.status);
        }
        /* Успешный код без объекта: иначе форма решила бы, что код
           отправлен, или записала бы токен «undefined». */
        if (!isObject(data)) throw requestError(TEXT_BROKEN_ANSWER, r.status);
        return data;
      });
    }, function (e) {
      if (e && e.message === 'PLATFORM_CONFIG.lmsApi не задан') throw e;
      var check = isTimeout(e) ? slowOrOffline() : hiddenOrOffline();
      return check.then(function (err) { throw err; });
    });
  }

  /* Вход записывается в хранилище браузера. Код к этому моменту уже
     погашен, и отказ записи нельзя показывать как неверный код. */
  function saveLogin(data, remember) {
    try {
      setAuth(data.access_token, data.user, remember !== false);
    } catch (e) {
      throw requestError(TEXT_NOT_SAVED);
    }
    return data.user;
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
      return saveLogin(data, remember);
    });
  }

  /* Шаг 2 для тех, у кого настроен аутентификатор. */
  function verifyTotp(email, code, remember) {
    return postJson('/api/auth/totp/verify', {
      email: String(email),
      code: String(code),
      remember: remember !== false
    }).then(function (data) {
      return saveLogin(data, remember);
    });
  }

  /* Вход без кода: работает, только пока API поднят с APP_ENV=dev — в другом
     режиме эндпоинта просто нет и запрос вернёт 404. Нужен на стенде, где
     письма никуда не уходят, а посмотреть систему надо всеми ролями сразу. */
  function devLogin(email, remember) {
    return postJson('/api/auth/dev-login', {
      email: String(email)
    }).then(function (data) {
      return saveLogin(data, remember);
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
