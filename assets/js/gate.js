/* ============================================================
   UniPath — invisible bot check (Cloudflare Turnstile)

   How it behaves:
   • Real visitors: the site opens immediately. Turnstile runs in the
     background and, for normal browsers, finishes without any clicks.
   • Suspicious visitors: if Cloudflare decides interaction is needed,
     a full-screen check appears and blocks the site until it is solved.
   • Search engines and link-preview bots are never challenged, so the
     site can still be indexed and shared.
   • A pass is remembered for TTL_HOURS.

   SETUP: create a free widget in Cloudflare dashboard → Turnstile →
   Add widget, hostname = your domain (e.g. unipath-edu.netlify.app),
   widget mode = "Managed" (or "Invisible"). Paste its SITE KEY below.
   Local previews (localhost / 127.0.0.1) automatically use Cloudflare's
   always-pass test key; add ?botcheck=challenge there to preview the
   visible challenge.

   LIMITATION: the check runs in the browser. It stops casual scrapers,
   but a determined scraper can still download the data files directly.
   Real enforcement needs server-side verification (e.g. Cloudflare in
   front of a custom domain with Bot Fight Mode).
   ============================================================ */
(function (global) {
  'use strict';

  var TEST_KEY = '1x00000000000000000000AA';          // test key: always passes
  var TEST_KEY_CHALLENGE = '3x00000000000000000000FF'; // test key: forces a challenge

  var CONFIG = {
    ENABLED: true,
    SITE_KEY: '0x4AAAAAAE6BW1wHjpWjMwSt',   // UniPath widget (hostname: unipath-edu.netlify.app)
    TTL_HOURS: 24,
    STORAGE_KEY: 'unipath.human.v1'
  };

  /* Search engines, link previews and audit tools are not challenged. */
  var CRAWLERS = /bot\b|bot\/|crawler|spider|slurp|googlebot|google-inspectiontool|bingbot|yandex|duckduckbot|baiduspider|applebot|facebookexternalhit|twitterbot|telegrambot|whatsapp|linkedinbot|discordbot|slackbot|lighthouse|pagespeed/i;

  var doc = global.document;
  var root = doc.documentElement;

  function now() { return Date.now(); }
  function passedRecently() {
    try {
      var t = Number(global.localStorage.getItem(CONFIG.STORAGE_KEY));
      return t && now() - t < CONFIG.TTL_HOURS * 3600 * 1000;
    } catch (e) { return false; }
  }
  function remember() {
    try { global.localStorage.setItem(CONFIG.STORAGE_KEY, String(now())); } catch (e) {}
  }

  if (!CONFIG.ENABLED ||
      global.location.protocol === 'file:' ||      /* Turnstile needs a real web origin */
      CRAWLERS.test(global.navigator.userAgent || '') ||
      passedRecently()) return;

  /* The real key only works on the hostnames registered in Cloudflare, so
     local previews fall back to the always-pass test key. On a local
     preview, ?botcheck=challenge forces the visible challenge. */
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(global.location.hostname);
  var siteKey = isLocal ? TEST_KEY : CONFIG.SITE_KEY;
  if (isLocal && /[?&]botcheck=challenge\b/.test(global.location.search)) {
    siteKey = TEST_KEY_CHALLENGE;
  }

  /* The widget lives in an off-screen holder; if Cloudflare asks for
     interaction, the holder is shown on top of the modal card. */
  var holder, modal;

  function build() {
    holder = doc.createElement('div');
    holder.id = 'gate-widget';
    holder.className = 'gate-hidden-holder';
    doc.body.appendChild(holder);
  }

  function showModal() {
    if (modal) return;
    root.classList.add('is-gated');
    modal = doc.createElement('div');
    modal.id = 'human-gate';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'human-gate-title');
    modal.innerHTML =
      '<div class="gate-card">' +
        '<div class="gate-logo"><span class="logo-mark"><span>UP</span></span> UniPath</div>' +
        '<h1 id="human-gate-title">Quick security check</h1>' +
        '<p>We couldn’t confirm automatically that you are a person. Please complete the check below to continue.</p>' +
        '<div class="gate-widget" id="gate-slot"></div>' +
        '<p class="gate-status" id="gate-status" aria-live="polite"></p>' +
      '</div>';
    doc.body.appendChild(modal);
    /* Moving the widget would reload Cloudflare's iframe, so it stays in
       place and is simply positioned over the card's empty slot. */
    holder.className = 'gate-visible-holder';
  }

  function status(msg) {
    var s = doc.getElementById('gate-status');
    if (s) s.textContent = msg;
  }

  function unlock() {
    remember();
    root.classList.remove('is-gated');
    if (modal) {
      modal.classList.add('is-done');
      var m = modal;
      global.setTimeout(function () { if (m.parentNode) m.parentNode.removeChild(m); }, 400);
      modal = null;
    }
    if (holder && holder.parentNode) holder.parentNode.removeChild(holder);
  }

  global.__unipathTurnstileReady = function () {
    global.turnstile.render(holder, {
      sitekey: siteKey,
      theme: 'auto',
      appearance: 'interaction-only',
      'before-interactive-callback': showModal,
      callback: function () { status('Verified — welcome!'); global.setTimeout(unlock, modal ? 350 : 0); },
      'error-callback': function () {
        if (modal) status('The check could not complete. Please reload the page.');
        return true; /* handled — do not throw */
      },
      'expired-callback': function () { if (modal) status('The check expired — please try again.'); },
      'unsupported-callback': unlock   /* very old browsers: never lock real students out */
    });
  };

  function loadScript() {
    var s = doc.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__unipathTurnstileReady&render=explicit';
    s.async = true;
    s.defer = true;
    /* If Cloudflare is unreachable, fail open rather than lock real students out. */
    s.onerror = unlock;
    doc.head.appendChild(s);
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', function () { build(); loadScript(); });
  } else { build(); loadScript(); }
})(window);
