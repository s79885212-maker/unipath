/* ============================================================
   UniPath — application logic
   Plain ES5-compatible browser JS. No build step, no framework.
   Works when opened directly from disk (file://).
   ============================================================ */
(function (global) {
  'use strict';

  var DB = global.UNIPATH || { countries: [], universities: [], fields: [] };
  var UNKNOWN = '<span class="unknown">Not confirmed — check the official source</span>';
  var DISCLAIMER = 'Information on this website is provided for research purposes. University requirements, deadlines, tuition fees and scholarship policies can change. Always verify important information on the university’s official website before applying.';

  /* ---------------- theme ---------------- */

  var THEME_KEY = 'unipath.theme';
  function systemTheme() {
    return global.matchMedia && global.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || systemTheme();
  }
  function syncThemeMeta() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', currentTheme() === 'dark' ? '#0a111e' : '#0b1b3a');
    var btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
  }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { global.localStorage.setItem(THEME_KEY, t); } catch (e) {}
    syncThemeMeta();
  }
  (function applySavedTheme() {
    try {
      var t = global.localStorage.getItem(THEME_KEY);
      if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
    } catch (e) {}
  })();

  /* ---------------- helpers ---------------- */

  function esc(s) {
    if (s === null || s === undefined) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function has(v) {
    if (v === null || v === undefined || v === '') return false;
    if (Array.isArray(v)) return v.length > 0;
    return true;
  }
  function or(v) { return has(v) ? esc(v) : UNKNOWN; }
  function orRaw(v) { return has(v) ? v : UNKNOWN; }

  /* Query params live in the hash route: #/universities?q=Business */
  function qs(name) {
    var hash = global.location.hash || '';
    var i = hash.indexOf('?');
    var search = i > -1 ? hash.slice(i) : '';
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  var CURRENCY_SYMBOL = { USD: '$', JPY: '¥', KRW: '₩', GBP: '£' };
  function money(amount, currency) {
    if (!has(amount)) return UNKNOWN;
    var sym = CURRENCY_SYMBOL[currency] || '';
    return sym + Number(amount).toLocaleString('en-US');
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  /* ---------------- data access ---------------- */

  /* Merge the admission-statistics and photo layers into the base records.
     The merge lives in data/registry.js so the build step that writes the
     static university pages uses exactly the same data. */
  DB.applyLayers();

  var countryByCode = {};
  DB.countries.forEach(function (c) { countryByCode[c.code] = c; });

  var fieldById = {};
  DB.fields.forEach(function (f) { fieldById[f.id] = f; });

  function country(code) { return countryByCode[code] || { name: code, flag: '', code: code }; }
  function field(id) { return fieldById[id] || { id: id, label: id, icon: '✨' }; }

  function uniById(id) {
    for (var i = 0; i < DB.universities.length; i++) {
      if (DB.universities[i].id === id) return DB.universities[i];
    }
    return null;
  }
  function unisByCountry(code) {
    return DB.universities.filter(function (u) { return u.country === code; });
  }
  function displayName(u) { return u.shortName || u.name; }
  function uniUrl(u) { return '#/university/' + encodeURIComponent(u.id); }

  /* ---------------- derived facets ---------------- */

  function satPolicy(u) {
    var p = u.academics && u.academics.sat ? u.academics.sat.policy : null;
    if (p === 'required') return 'required';
    if (p === 'optional') return 'optional';
    if (p === 'accepted') return 'accepted';
    if (p === 'not-used') return 'not-used';
    return 'unstated';
  }
  function satLabel(u) {
    var p = satPolicy(u);
    return p === 'required' ? 'SAT/ACT required'
      : p === 'optional' ? 'Test-optional'
      : p === 'accepted' ? 'SAT/ACT accepted'
      : p === 'not-used' ? 'SAT/ACT not used'
      : 'Policy not confirmed';
  }
  function hasIelts(u) { return !!(u.english && u.english.ielts); }
  /* True only when the university itself publishes an IELTS minimum or
     recommended score — a UniPath estimate alone does not count. */
  function ieltsPublished(u) {
    var t = u.english && u.english.ielts;
    return !!t && (has(t.min) || has(t.recommended));
  }
  function ieltsMin(u) {
    return (u.english && u.english.ielts && has(u.english.ielts.min)) ? u.english.ielts.min : null;
  }
  /* Short IELTS label for cards/compare: minimum, else competitive, else estimate. */
  function ieltsLabel(u) {
    var t = u.english && u.english.ielts;
    if (!t) return null;
    if (has(t.min)) return 'Min ' + t.min + (t.lowestLevel ? ' (varies by course)' : '');
    if (has(t.recommended)) return typeof t.recommended === 'number' ? t.recommended + '+ competitive' : String(t.recommended);
    if (has(t.estimate)) return t.estimate + ' · UniPath estimate';
    return 'Accepted';
  }
  function statsOf(u) { return u.stats || null; }
  function toeflMin(u) {
    return (u.english && u.english.toefl && has(u.english.toefl.min)) ? u.english.toefl.min : null;
  }
  /* TOEFL changed to a 1–6 scale for tests taken from 21 January 2026, so
     universities may publish two sets of scores. Each line is plain text
     (escape before inserting). Falls back to the single published values. */
  var TOEFL_PERIOD = {
    pre2026: 'Tests taken before 21 Jan 2026',
    post2026: 'Tests taken from 21 Jan 2026 (1–6 scale)'
  };
  function scoreParts(x, lowest) {
    var parts = [];
    if (has(x.min)) parts.push((lowest ? 'lowest minimum ' : 'minimum ') + x.min);
    if (has(x.recommended)) parts.push('recommended ' + x.recommended);
    return parts.join(', ');
  }
  function toeflLines(u) {
    var t = u.english && u.english.toefl;
    if (!t) return [];
    if (t.scales && t.scales.length) {
      return t.scales.map(function (sc) {
        var label = TOEFL_PERIOD[sc.period] || sc.period;
        if (sc.accepted === false) return label + ': not accepted';
        var parts = scoreParts(sc, t.lowestLevel);
        return parts ? label + ': ' + parts : label + ': not published';
      });
    }
    var one = scoreParts(t, t.lowestLevel);
    if (one) return [one.charAt(0).toUpperCase() + one.slice(1)];
    if (has(t.estimate)) return [t.estimate + ' · UniPath estimate'];
    return [];
  }
  function fullRide(u) { return u.scholarships && u.scholarships.fullRide ? u.scholarships.fullRide : {}; }
  function meritList(u) { return (u.scholarships && u.scholarships.merit) || []; }
  function needBased(u) { return (u.scholarships && u.scholarships.needBased) || {}; }

  function feeAmount(u) {
    var f = u.admissions && u.admissions.applicationFee;
    return f && has(f.amount) ? f.amount : null;
  }
  function feeWaiver(u) {
    var f = u.admissions && u.admissions.applicationFee;
    return f && has(f.waiver) ? f.waiver : null;
  }
  function feeLabel(u) {
    var f = u.admissions && u.admissions.applicationFee;
    if (!f) return UNKNOWN;
    if (f.amount === 0) return 'No application fee';
    if (!has(f.amount)) return UNKNOWN;
    return money(f.amount, f.currency || 'USD');
  }
  function firstDeadline(u) {
    var d = u.admissions && u.admissions.deadlines;
    if (!d || !d.length) return null;
    return d[0];
  }
  function costHeadline(u) {
    return (u.costs && has(u.costs.headline)) ? u.costs.headline : null;
  }
  function totalCostText(u) {
    if (!u.costs) return null;
    if (has(u.costs.totalText)) return u.costs.totalText;
    if (has(u.costs.headline)) return u.costs.headline;
    return null;
  }

  /* ---------------- search index ---------------- */

  var index = DB.universities.map(function (u) {
    var parts = [
      u.name, u.shortName || '', u.city, u.region || '',
      country(u.country).name, u.type, u.description || '',
      satLabel(u),
      hasIelts(u) ? 'IELTS ' + (ieltsMin(u) || (ieltsPublished(u) ? u.english.ielts.recommended : 'accepted')) : '',
      toeflMin(u) ? 'TOEFL ' + toeflMin(u) : '',
      u.englishTaught === true ? 'English-taught english taught' : '',
      fullRide(u).available === true ? 'full scholarship full ride full funding' : '',
      needBased(u).availableToInternational === true ? 'need-based financial aid need based' : '',
      meritList(u).length ? 'merit scholarship' : '',
      (u.programs || []).map(function (p) { return field(p).label; }).join(' '),
      meritList(u).map(function (m) { return m.name + ' ' + (m.amount || ''); }).join(' '),
      costHeadline(u) || ''
    ];
    var text = parts.join(' · ');
    /* In a translated UI, visitors search in that language too. */
    if (global.I18N && global.I18N.lang !== 'en') {
      var tr = function (p) { return global.I18N.lookup(p) || ''; };
      /* Facet labels are translated one by one so e.g. "полная стипендия" matches. */
      var facets = [country(u.country).name, u.city, satLabel(u)];
      (u.programs || []).forEach(function (p) { facets.push(field(p).label); });
      if (u.englishTaught === true) facets.push('English-taught');
      if (fullRide(u).available === true) facets.push('Full scholarship', 'Full-ride / full scholarship');
      if (needBased(u).availableToInternational === true) facets.push('Need-based aid');
      if (meritList(u).length) facets.push('Merit scholarships');
      text += ' · ' + parts.concat(facets).map(tr).join(' · ');
    }
    return { u: u, text: text.toLowerCase() };
  });

  function search(query, limit) {
    var q = String(query || '').trim().toLowerCase();
    if (!q) return [];
    var terms = q.split(/\s+/);
    var hits = [];
    index.forEach(function (row) {
      var score = 0, ok = true;
      for (var i = 0; i < terms.length; i++) {
        var t = terms[i];
        if (row.text.indexOf(t) === -1) { ok = false; break; }
        score += 1;
        if (row.u.name.toLowerCase().indexOf(t) === 0) score += 6;
        else if (row.u.name.toLowerCase().indexOf(t) > -1) score += 3;
        if ((row.u.shortName || '').toLowerCase() === t) score += 8;
        if (row.u.city.toLowerCase().indexOf(t) > -1) score += 2;
      }
      if (ok) hits.push({ u: row.u, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score || a.u.name.localeCompare(b.u.name); });
    return hits.slice(0, limit || 8).map(function (h) { return h.u; });
  }

  /* ---------------- filters ---------------- */

  var FILTER_GROUPS = [
    {
      id: 'country', title: 'Country',
      options: DB.countries.map(function (c) {
        return { id: c.code, label: c.flag + ' ' + c.name, test: function (u) { return u.country === c.code; } };
      })
    },
    {
      id: 'scholarship', title: 'Scholarships & aid',
      options: [
        { id: 'full-ride', label: 'Full scholarship available', test: function (u) { return fullRide(u).available === true; } },
        { id: 'full-ride-intl', label: 'Full scholarship open to internationals', test: function (u) { return fullRide(u).available === true && fullRide(u).internationalEligible === true; } },
        { id: 'full-tuition', label: 'Full tuition covered', test: function (u) {
            if (fullRide(u).covers && fullRide(u).covers.tuition === true) return true;
            return meritList(u).some(function (m) { return /full tuition|value of tuition|100%|full dues|tuition exemption|full scholarship/i.test(String(m.amount || '')); });
          } },
        { id: 'merit', label: 'Merit scholarships', test: function (u) { return meritList(u).length > 0; } },
        { id: 'need', label: 'Need-based aid for internationals', test: function (u) { return needBased(u).availableToInternational === true; } },
        { id: 'meets-need', label: 'Meets full demonstrated need', test: function (u) { return needBased(u).meetsFullNeed === true; } }
      ]
    },
    {
      id: 'testing', title: 'Testing',
      options: [
        { id: 'sat-required', label: 'SAT/ACT required', test: function (u) { return satPolicy(u) === 'required'; } },
        { id: 'sat-optional', label: 'SAT/ACT optional', test: function (u) { return satPolicy(u) === 'optional'; } },
        { id: 'sat-none', label: 'SAT/ACT not required', test: function (u) { var p = satPolicy(u); return p === 'optional' || p === 'unstated' || p === 'accepted' || p === 'not-used'; } },
        { id: 'ielts', label: 'IELTS score published', test: function (u) { return ieltsPublished(u); } }
      ]
    },
    {
      id: 'language', title: 'Language of study',
      options: [
        { id: 'english-yes', label: 'English-taught degree available', test: function (u) { return u.englishTaught === true; } },
        { id: 'english-no', label: 'Not fully English-taught', test: function (u) { return u.englishTaught !== true; } }
      ]
    },
    {
      id: 'application', title: 'Application',
      options: [
        { id: 'no-fee', label: 'No application fee', test: function (u) { return feeAmount(u) === 0; } },
        { id: 'has-fee', label: 'Application fee charged', test: function (u) { return feeAmount(u) > 0; } },
        { id: 'waiver', label: 'Fee waiver available', test: function (u) { return !!feeWaiver(u); } }
      ]
    },
    {
      id: 'degree', title: 'Degree level',
      options: [
        { id: 'bachelor', label: 'Bachelor’s', test: function () { return true; } }
      ]
    },
    {
      id: 'field', title: 'Field of study',
      options: DB.fields.map(function (f) {
        return { id: f.id, label: f.icon + ' ' + f.label, test: function (u) { return (u.programs || []).indexOf(f.id) > -1; } };
      })
    }
  ];

  function optionById(groupId, optId) {
    var g = FILTER_GROUPS.filter(function (x) { return x.id === groupId; })[0];
    if (!g) return null;
    return g.options.filter(function (o) { return o.id === optId; })[0] || null;
  }

  /* Selected = { groupId: [optId, ...] }. Within a group: OR. Across groups: AND. */
  function applyFilters(list, selected) {
    return list.filter(function (u) {
      for (var gid in selected) {
        if (!selected.hasOwnProperty(gid)) continue;
        var ids = selected[gid];
        if (!ids || !ids.length) continue;
        var any = ids.some(function (oid) {
          var o = optionById(gid, oid);
          return o ? o.test(u) : true;
        });
        if (!any) return false;
      }
      return true;
    });
  }

  /* ---------------- compare store ---------------- */

  var COMPARE_KEY = 'unipath.compare.v1';
  var COMPARE_MAX = 3;

  function compareGet() {
    try {
      var raw = global.localStorage.getItem(COMPARE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(uniById) : [];
    } catch (e) { return []; }
  }
  function compareSet(arr) {
    try { global.localStorage.setItem(COMPARE_KEY, JSON.stringify(arr)); } catch (e) {}
    renderTray();
    document.dispatchEvent(new CustomEvent('unipath:compare'));
  }
  function compareHas(id) { return compareGet().indexOf(id) > -1; }
  function compareToggle(id) {
    var arr = compareGet();
    var i = arr.indexOf(id);
    if (i > -1) arr.splice(i, 1);
    else {
      if (arr.length >= COMPARE_MAX) {
        alert('You can compare up to ' + COMPARE_MAX + ' universities at once. Remove one first.');
        return false;
      }
      arr.push(id);
    }
    compareSet(arr);
    return true;
  }
  function compareClear() { compareSet([]); }

  /* ---------------- shared chrome ---------------- */

  var NAV = [
    { href: '#/', label: 'Home', key: 'home' },
    { href: '#/countries', label: 'Countries', key: 'countries' },
    { href: '#/universities', label: 'Universities', key: 'universities' },
    { href: '#/scholarships', label: 'Scholarships', key: 'scholarships' },
    { href: '#/compare', label: 'Compare', key: 'compare' },
    { href: '#/about', label: 'About', key: 'about' }
  ];

  function renderHeader(active) {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' aria-current="page"' : '') + '>' + n.label + '</a>';
    }).join('');
    return '' +
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header">' +
        '<div class="wrap nav">' +
          '<a class="logo" href="#/"><span class="logo-mark"><span>UP</span></span> UniPath</a>' +
          '<nav class="nav-links" data-nav-links aria-label="Main">' + links +
            '<div class="nav-tools"><a class="btn btn-primary btn-sm" href="#/universities">🔍 Search</a></div>' +
          '</nav>' +
          '<div class="nav-bar-tools">' +
            (global.I18N ? '<button class="lang-toggle" type="button" data-lang-toggle data-no-i18n aria-label="' +
              (global.I18N.lang === 'ru' ? 'Switch to English' : 'Переключить на русский') + '" title="' +
              (global.I18N.lang === 'ru' ? 'English' : 'Русский') + '">' +
              (global.I18N.lang === 'ru' ? 'EN' : 'RU') + '</button>' : '') +
            '<button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch between light and dark theme" title="Light / dark theme">' +
              '<span class="when-light" aria-hidden="true">🌙</span><span class="when-dark" aria-hidden="true">☀️</span></button>' +
            '<button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" data-nav-toggle><span></span></button>' +
          '</div>' +
        '</div>' +
      '</header>';
  }

  function renderFooter() {
    var countryLinks = DB.countries.map(function (c) {
      return '<li><a href="#/country/' + c.code + '">' + c.flag + ' <span>' + esc(c.name) + '</span></a></li>';
    }).join('');
    return '' +
      '<footer class="site-footer">' +
        '<div class="wrap">' +
          '<div class="footer-grid">' +
            '<div>' +
              '<a class="logo" href="#/"><span class="logo-mark"><span>UP</span></span> UniPath</a>' +
              '<p>A research tool for international students: universities, admission requirements, scholarships, costs and official application links in one place.</p>' +
            '</div>' +
            '<div><h4>Countries</h4><ul>' + countryLinks + '</ul></div>' +
            '<div><h4>Explore</h4><ul>' +
              '<li><a href="#/universities">All universities</a></li>' +
              '<li><a href="#/scholarships">Scholarships</a></li>' +
              '<li><a href="#/compare">Compare universities</a></li>' +
            '</ul></div>' +
            '<div><h4>About</h4><ul>' +
              '<li><a href="#/about">About this project</a></li>' +
              '<li><a href="#/about">How the data is sourced</a></li>' +
              '<li><a href="#/about">Disclaimer</a></li>' +
            '</ul></div>' +
          '</div>' +
          '<div class="footer-disclaimer"><strong>Disclaimer.</strong> ' + esc(DISCLAIMER) + '</div>' +
          '<div class="footer-bottom">' +
            '<span>UniPath — independent research project. Not affiliated with any university.</span>' +
            '<span>' + DB.universities.length + ' universities · ' + DB.countries.length + ' countries</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function renderTray() {
    var tray = document.getElementById('compare-tray');
    if (!tray) return;
    var ids = compareGet();
    if (!ids.length) {
      tray.classList.remove('is-open'); tray.innerHTML = '';
      document.body.classList.remove('tray-open');
      return;
    }
    var chips = ids.map(function (id) {
      var u = uniById(id);
      return '<span class="tray-chip">' + esc(displayName(u)) +
        '<button type="button" aria-label="Remove ' + esc(displayName(u)) + '" data-tray-remove="' + esc(id) + '">×</button></span>';
    }).join('');
    tray.innerHTML = '<div class="wrap">' +
      '<strong class="small">Comparing (' + ids.length + '/' + COMPARE_MAX + ')</strong>' +
      '<div class="tray-items">' + chips + '</div>' +
      '<a class="btn btn-primary btn-sm" href="#/compare">Compare now</a>' +
      '<button class="btn btn-quiet btn-sm" type="button" data-tray-clear>Clear</button>' +
      '</div>';
    tray.classList.add('is-open');
    document.body.classList.add('tray-open');
  }

  /* ---------------- card renderers ---------------- */

  function mediaBlock(u, extraClass) {
    var b = u.brand || {};
    var style = 'style="--c1:' + esc(b.c1 || '#1b3d78') + ';--c2:' + esc(b.c2 || '#0b1b3a') + '"';
    var inner = u.photos && u.photos.main
      ? '<img src="' + esc(u.photos.thumb || u.photos.main) + '" alt="' + esc(u.name) + ' campus" loading="lazy">'
      : '<span class="media-mono">' + esc(b.initials || displayName(u).slice(0, 3)) + '</span><span class="media-note">Photo placeholder</span>';
    return '<div class="media ' + (extraClass || '') + '" ' + style + ' aria-hidden="true">' + inner + '</div>';
  }

  function scholarBadge(u) {
    if (fullRide(u).available === true && fullRide(u).internationalEligible === true) {
      return '<span class="badge badge-ok">★ Full scholarship for internationals</span>';
    }
    if (needBased(u).meetsFullNeed === true) {
      return '<span class="badge badge-ok">Meets full need</span>';
    }
    if (meritList(u).length) {
      return '<span class="badge badge-accent">' + meritList(u).length + ' merit scholarship' + (meritList(u).length > 1 ? 's' : '') + '</span>';
    }
    return '<span class="badge">Aid not confirmed</span>';
  }

  function uniCard(u) {
    var c = country(u.country);
    var deadline = firstDeadline(u);
    return '' +
      '<article class="card card-link uni-card">' +
        '<button class="compare-toggle" type="button" data-compare="' + esc(u.id) + '" aria-pressed="' + (compareHas(u.id) ? 'true' : 'false') + '">' +
          (compareHas(u.id) ? '✓ Comparing' : '+ Compare') + '</button>' +
        mediaBlock(u) +
        '<div class="card-body">' +
          '<div class="loc">' + c.flag + ' <span>' + esc(u.city) + '</span>, <span>' + esc(c.name) + '</span></div>' +
          '<h3><a href="' + uniUrl(u) + '">' + esc(u.name) + '</a></h3>' +
          '<div class="pill-row">' + scholarBadge(u) +
            (u.englishTaught === true ? '<span class="badge badge-info">English-taught</span>' : '') +
          '</div>' +
          '<dl class="uni-facts">' +
            '<div><dt>Cost</dt><dd>' + (costHeadline(u) ? esc(costHeadline(u)) : '<span class="unknown">Not listed</span>') + '</dd></div>' +
            '<div><dt>Testing</dt><dd>' + esc(satLabel(u)) + '</dd></div>' +
            '<div><dt>IELTS</dt><dd>' + (ieltsLabel(u) ? esc(ieltsLabel(u)) : '<span class="unknown">Not listed</span>') + '</dd></div>' +
            '<div><dt>Deadline</dt><dd>' + (deadline ? esc(deadline.date) : '<span class="unknown">Check site</span>') + '</dd></div>' +
          '</dl>' +
        '</div>' +
        '<div class="uni-card-actions">' +
          '<a class="btn btn-primary btn-sm" href="' + uniUrl(u) + '">View profile</a>' +
          '<a class="btn btn-ghost btn-sm" href="' + esc(u.links.website) + '" target="_blank" rel="noopener">Official site ↗</a>' +
        '</div>' +
      '</article>';
  }

  function countryCard(c) {
    var n = unisByCountry(c.code).length;
    return '' +
      '<article class="card card-link country-card">' +
        '<div class="card-body">' +
          '<span class="flag">' + c.flag + '</span>' +
          '<h3>' + esc(c.name) + '</h3>' +
          '<p class="desc">' + esc(c.tagline) + '</p>' +
          '<div class="country-meta">' +
            '<div><b>' + n + '</b><span>Universities listed</span></div>' +
            '<div><b>' + c.currency + '</b><span>Currency</span></div>' +
          '</div>' +
          '<a class="btn btn-primary btn-block card-cover-link" href="#/country/' + c.code + '">Explore universities</a>' +
        '</div>' +
      '</article>';
  }

  /* ---------------- search box wiring ---------------- */

  function wireSearchBox(root) {
    var input = root.querySelector('input');
    var box = root.querySelector('[data-suggest]');
    if (!input || !box) return;
    var active = -1, current = [];

    function close() { box.hidden = true; active = -1; }
    function render(list) {
      current = list;
      if (!list.length) {
        box.innerHTML = '<div class="suggest-empty">No matches. Try “Business”, “full scholarship”, “Japan” or “test-optional”.</div>';
        box.hidden = false; return;
      }
      box.innerHTML = list.map(function (u, i) {
        var c = country(u.country);
        return '<a href="' + uniUrl(u) + '" data-i="' + i + '">' +
          '<div class="s-title">' + esc(u.name) + '</div>' +
          '<div class="s-meta">' + c.flag + ' <span>' + esc(u.city) + '</span>, <span>' + esc(c.name) + '</span> · <span>' + esc(satLabel(u)) + '</span></div></a>';
      }).join('');
      box.hidden = false;
    }
    input.addEventListener('input', function () {
      var v = input.value.trim();
      if (v.length < 2) { close(); return; }
      render(search(v, 8));
    });
    input.addEventListener('keydown', function (e) {
      if (box.hidden) {
        if (e.key === 'Enter') { go(); }
        return;
      }
      var items = box.querySelectorAll('a');
      if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, items.length - 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, -1); }
      else if (e.key === 'Enter') {
        if (active > -1 && items[active]) { e.preventDefault(); global.location.href = items[active].getAttribute('href'); return; }
        go(); return;
      } else if (e.key === 'Escape') { close(); return; }
      for (var i = 0; i < items.length; i++) items[i].classList.toggle('is-active', i === active);
    });
    function go() {
      var v = input.value.trim();
      if (!v) return;
      global.location.href = '#/universities?q=' + encodeURIComponent(v);
    }
    var btn = root.querySelector('button[data-search-go]');
    if (btn) btn.addEventListener('click', go);
    document.addEventListener('click', function (e) { if (!root.contains(e.target)) close(); });
  }

  /* ---------------- global wiring ---------------- */

  function setActiveNav(active) {
    var links = document.querySelectorAll('[data-nav-links] > a[href]');
    for (var i = 0; i < links.length; i++) {
      var n = NAV.filter(function (x) { return x.href === links[i].getAttribute('href'); })[0];
      if (!n) continue;
      if (n.key === active) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
  }

  function mount(active) {
    var head = document.getElementById('site-header');
    if (head) head.outerHTML = renderHeader(active);
    var foot = document.getElementById('site-footer');
    if (foot) foot.outerHTML = renderFooter();

    var tray = document.createElement('div');
    tray.id = 'compare-tray';
    tray.className = 'compare-tray';
    document.body.appendChild(tray);
    renderTray();

    document.addEventListener('click', function (e) {
      var t = e.target;

      if (t.closest && t.closest('[data-lang-toggle]') && global.I18N) {
        global.I18N.setLang(global.I18N.lang === 'ru' ? 'en' : 'ru');
        return;
      }

      if (t.closest && t.closest('[data-theme-toggle]')) {
        setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
        return;
      }

      var toggle = t.closest ? t.closest('[data-nav-toggle]') : null;
      if (toggle) {
        var links = document.querySelector('[data-nav-links]');
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        if (links && global.matchMedia('(max-width: 1024px)').matches) links.hidden = open;
        return;
      }

      var cmp = t.closest ? t.closest('[data-compare]') : null;
      if (cmp) {
        e.preventDefault();
        var id = cmp.getAttribute('data-compare');
        if (compareToggle(id)) {
          var on = compareHas(id);
          document.querySelectorAll('[data-compare="' + id + '"]').forEach(function (b) {
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
            if (b.classList.contains('compare-toggle')) b.textContent = on ? '✓ Comparing' : '+ Compare';
            else b.textContent = on ? '✓ Added to comparison' : '⊕ Add to comparison';
          });
        }
        return;
      }

      var rm = t.closest ? t.closest('[data-tray-remove]') : null;
      if (rm) { compareToggle(rm.getAttribute('data-tray-remove')); location.reload(); return; }
      if (t.closest && t.closest('[data-tray-clear]')) { compareClear(); location.reload(); return; }
    });

    function syncNav() {
      var links = document.querySelector('[data-nav-links]');
      if (!links) return;
      links.hidden = global.matchMedia('(max-width: 1024px)').matches &&
        document.querySelector('[data-nav-toggle]').getAttribute('aria-expanded') !== 'true';
    }
    syncNav();
    global.addEventListener('resize', syncNav);

    syncThemeMeta();
    if (global.matchMedia) {
      var mq = global.matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', syncThemeMeta);
    }

    document.querySelectorAll('[data-searchbox]').forEach(wireSearchBox);
  }

  /* ---------------- public API ---------------- */

  global.UP = {
    DB: DB, esc: esc, has: has, or: or, orRaw: orRaw, qs: qs, money: money, el: el, UNKNOWN: UNKNOWN,
    DISCLAIMER: DISCLAIMER,
    country: country, field: field, uniById: uniById, unisByCountry: unisByCountry,
    displayName: displayName, uniUrl: uniUrl,
    satPolicy: satPolicy, satLabel: satLabel, hasIelts: hasIelts, ieltsPublished: ieltsPublished, ieltsMin: ieltsMin, toeflLines: toeflLines, ieltsLabel: ieltsLabel, statsOf: statsOf, toeflMin: toeflMin,
    fullRide: fullRide, meritList: meritList, needBased: needBased,
    feeAmount: feeAmount, feeWaiver: feeWaiver, feeLabel: feeLabel,
    firstDeadline: firstDeadline, costHeadline: costHeadline, totalCostText: totalCostText,
    search: search, FILTER_GROUPS: FILTER_GROUPS, applyFilters: applyFilters, optionById: optionById,
    compareGet: compareGet, compareSet: compareSet, compareHas: compareHas, compareToggle: compareToggle, compareClear: compareClear,
    COMPARE_MAX: COMPARE_MAX,
    setActiveNav: setActiveNav, renderTray: renderTray, wireSearchBox: wireSearchBox,
    uniCard: uniCard, countryCard: countryCard, mediaBlock: mediaBlock, scholarBadge: scholarBadge,
    mount: mount
  };
})(window);
