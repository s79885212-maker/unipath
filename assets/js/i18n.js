/* ============================================================
   UniPath — translation layer

   How it works
   • The site is written and rendered in English. When another
     language is active, every text node (and the placeholder /
     aria-label / title attributes) is looked up in that language's
     dictionary and replaced — including text added later, via a
     MutationObserver.
   • Dictionary keys are the English text itself, so data files never
     need to change. Anything without a translation simply stays in
     English, so a missing entry can never break the page.
   • Keys may contain placeholders {0} {1} … for text with numbers or
     names in it, e.g. "{#0} universities" → "{0} университетов".
     {#n} only matches a number; {n} matches any text.
     Captured values are translated too when an entry exists.

   Dictionaries live in data/i18n/<lang>.js and register themselves in
   window.UNIPATH_I18N.<lang>.

   Language choice: ?lang=xx in the URL → saved choice → browser
   language → English.

   Debugging: add ?i18n=collect to the URL; untranslated strings are
   gathered in I18N.missing (a Set).
   ============================================================ */
(function (global) {
  'use strict';

  var SUPPORTED = ['en', 'ru'];
  var LABELS = { en: 'EN', ru: 'RU' };
  var KEY = 'unipath.lang';
  var doc = global.document;

  function pickLang() {
    var m = /[?&]lang=([a-z]{2})\b/.exec(global.location.search);
    if (m && SUPPORTED.indexOf(m[1]) > -1) {
      try { global.localStorage.setItem(KEY, m[1]); } catch (e) {}
      return m[1];
    }
    try {
      var saved = global.localStorage.getItem(KEY);
      if (saved && SUPPORTED.indexOf(saved) > -1) return saved;
    } catch (e) {}
    var nav = (global.navigator.languages && global.navigator.languages[0]) || global.navigator.language || 'en';
    nav = String(nav).slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) > -1 ? nav : 'en';
  }

  var lang = pickLang();
  var collect = /[?&]i18n=collect\b/.test(global.location.search);
  var missing = new Set();

  var exact = null, templates = null;

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function build() {
    if (exact) return;
    exact = new Map();
    templates = [];
    var dict = (global.UNIPATH_I18N && global.UNIPATH_I18N[lang]) || {};
    Object.keys(dict).forEach(function (k) {
      var key = norm(k);
      if (/\{#?\d+\}/.test(key)) {
        var order = [];
        /* {0} matches any text; {#0} matches only a number such as 1,334 or 7.5 */
        var src = escRe(key).replace(/\\\{(#?)(\d+)\\\}/g, function (_, num, n) {
          order.push(+n);
          return num ? '([0-9][0-9,.]*)' : '(.+?)';
        });
        templates.push({ re: new RegExp('^' + src + '$'), order: order, out: dict[k] });
      } else {
        exact.set(key, dict[k]);
      }
    });
    /* Longer templates first, so the most specific pattern wins. */
    templates.sort(function (a, b) { return b.re.source.length - a.re.source.length; });
  }

  /* Translate a whole string; returns null when there is no entry. */
  function lookup(text) {
    if (lang === 'en') return null;
    build();
    var key = norm(text);
    if (!key) return null;
    if (exact.has(key)) return exact.get(key);
    for (var i = 0; i < templates.length; i++) {
      var t = templates[i], m = t.re.exec(key);
      if (!m) continue;
      var out = t.out;
      t.order.forEach(function (n, idx) {
        var part = m[idx + 1];
        var tr = exact.get(norm(part));
        out = out.split('{' + n + '}').join(tr != null ? tr : part);
      });
      return out;
    }
    return null;
  }

  /* Text that never needs translating: numbers, money, URLs, codes, symbols. */
  function ignorable(key) {
    if (!/[A-Za-z]{2}/.test(key)) return true;           // no words at all
    if (/^(https?:\/\/|www\.)\S+$/.test(key)) return true;
    if (/[Ѐ-ӿ]/.test(key)) return true;        // already Cyrillic
    return false;
  }

  function t(text) {
    var r = lookup(text);
    if (r == null) {
      if (collect && lang !== 'en' && !ignorable(norm(text))) missing.add(norm(text));
      return text;
    }
    return r;
  }

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, PRE: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title'];

  function translateText(node) {
    var v = node.nodeValue;
    if (!v || !/\S/.test(v)) return;
    var p = node.parentNode;
    if (!p || SKIP[p.nodeName] || (p.closest && p.closest('[data-no-i18n]'))) return;
    if (p.closest && p.closest('[data-i18n-html]')) return;
    var r = lookup(v);
    if (r == null) {
      if (collect && !ignorable(norm(v))) missing.add(norm(v));
      return;
    }
    var lead = /^\s*/.exec(v)[0], trail = /\s*$/.exec(v)[0];
    var next = lead + r + trail;
    if (next !== v) node.nodeValue = next;
  }

  /* Sentences with inline markup (<strong>, <em>, <a>) are marked with
     data-i18n-html and translated as one HTML string. */
  function translateHtml(el) {
    if (el.getAttribute('data-i18n-html') === 'done') return;
    var key = el.innerHTML;
    var r = lookup(key);
    if (r == null) {
      if (collect && !ignorable(norm(key))) missing.add(norm(key));
      return;
    }
    el.setAttribute('data-i18n-html', 'done');
    el.innerHTML = r;
  }

  function translateEl(el) {
    if (el.nodeType !== 1 || SKIP[el.nodeName]) return;
    if (el.closest && el.closest('[data-no-i18n]')) return;
    if (el.hasAttribute('data-i18n-html')) translateHtml(el);
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var r = lookup(el.getAttribute(a));
      if (r != null) el.setAttribute(a, r);
      else if (collect && !ignorable(norm(el.getAttribute(a)))) missing.add(norm(el.getAttribute(a)));
    });
  }

  function translateTree(root) {
    if (lang === 'en' || !root) return;
    if (root.nodeType === 3) { translateText(root); return; }
    if (root.nodeType !== 1) return;
    translateEl(root);
    var walker = doc.createTreeWalker(root, 1 | 4 /* elements + text */);
    var n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === 3) translateText(n); else translateEl(n);
    }
  }

  function translateTitle() {
    var r = lookup(doc.title);
    if (r != null && r !== doc.title) doc.title = r;
  }

  function start() {
    doc.documentElement.setAttribute('lang', lang);
    if (lang === 'en') return;
    translateTree(doc.body);
    translateTitle();
    var obs = new MutationObserver(function (records) {
      records.forEach(function (rec) {
        if (rec.type === 'characterData') translateText(rec.target);
        else if (rec.type === 'attributes') translateEl(rec.target);
        else rec.addedNodes.forEach(translateTree);
      });
    });
    obs.observe(doc.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    var titleEl = doc.querySelector('title');
    if (titleEl) new MutationObserver(translateTitle).observe(titleEl, { childList: true, characterData: true, subtree: true });
  }

  function setLang(next) {
    if (SUPPORTED.indexOf(next) === -1 || next === lang) return;
    try { global.localStorage.setItem(KEY, next); } catch (e) {}
    /* Drop ?lang= so the saved choice applies; the hash route is kept. */
    var search = global.location.search
      .replace(/([?&])lang=[a-z]{2}(&|$)/, function (_, a, b) { return b ? a : ''; })
      .replace(/[?&]$/, '');
    if (search !== global.location.search) global.location.search = search;
    else global.location.reload();
  }

  global.I18N = {
    get lang() { return lang; },
    supported: SUPPORTED,
    labels: LABELS,
    t: t,
    lookup: lookup,
    setLang: setLang,
    translateTree: translateTree,
    missing: missing,
    start: start
  };

  doc.documentElement.setAttribute('lang', lang);
})(window);
