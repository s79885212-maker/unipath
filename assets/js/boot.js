/* Show a recoverable error if the application never replaces its loading screen. */
(function (global) {
  'use strict';
  var doc = global.document, failed = false;
  function isRussian() {
    var m = /[?&]lang=([a-z]{2})\b/.exec(global.location.search || '');
    if (m) return m[1] === 'ru';
    try { var saved = global.localStorage.getItem('unipath.lang'); if (saved) return saved === 'ru'; } catch (e) {}
    return /^ru/i.test((global.navigator.languages || [])[0] || global.navigator.language || '');
  }
  function showError() {
    if (!doc.body || doc.getElementById('boot-error')) return;
    var box = doc.createElement('div'), ru = isRussian();
    box.id = 'boot-error'; box.className = 'wrap section'; box.setAttribute('role', 'alert');
    var message = doc.createElement('p');
    message.textContent = ru ? 'Не удалось полностью загрузить сайт. Проверьте подключение и повторите попытку.' : 'The site could not finish loading. Check your connection and try again.';
    var retry = doc.createElement('button'); retry.type = 'button'; retry.className = 'btn btn-primary';
    retry.textContent = ru ? 'Повторить загрузку' : 'Retry loading';
    retry.addEventListener('click', function () { global.location.reload(); });
    box.appendChild(message); box.appendChild(retry);
    var boot = doc.querySelector('.boot-screen');
    if (boot) boot.remove();
    doc.body.insertBefore(box, doc.getElementById('main'));
  }
  /* Only first-party application dependencies; a failed photo or external widget is unrelated. */
  global.addEventListener('error', function (event) {
    var target = event.target;
    var source = target && target.tagName === 'SCRIPT' ? target.src : event.filename;
    if (!source) return;
    var url;
    try { url = new URL(source, global.location.href); } catch (e) { return; }
    if (url.origin !== global.location.origin || !/\/(?:data\/(?:i18n\/ru|registry|countries|universities\.[a-z0-9]+|admission-profiles|degrees|test-policy|english-details|award-details|news|match)|assets\/js\/(?:i18n|app|pages|views|news|match|router))\.js$/.test(url.pathname)) return;
    failed = true; showError();
  }, true);
  function watch() {
    if (failed) showError();
    global.setTimeout(function () {
      if (doc.querySelector('.boot-screen')) showError();
    }, 20000);
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', watch);
  else watch();
})(window);
