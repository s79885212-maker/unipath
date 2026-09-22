/* ============================================================
   UniPath — "Find my match"

   The student enters IELTS, GPA, SAT and a yearly budget; every
   university is sorted by comparing those numbers with what the
   university itself publishes:
     - English: the published minimum (a hard line), otherwise the
       competitive score, otherwise a labelled UniPath estimate;
     - SAT / GPA: the published middle-50% range or average of
       admitted students (US Common Data Set), otherwise the labelled
       estimate band;
     - budget: data/match.js, converted with ECB reference rates.
   Nothing here predicts admission. Where a figure is not published
   the page says so instead of guessing.
   ============================================================ */
(function (global) {
  'use strict';
  var U = global.UP;
  var esc = U.esc;
  var KEY = 'unipath.match.v1';

  function has(v) { return v !== null && v !== undefined && v !== ''; }
  function num(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : null; }
  function firstNumber(s) { var m = /(\d+(?:\.\d+)?)/.exec(String(s || '')); return m ? parseFloat(m[1]) : null; }
  function data() { return U.DB.match || { rates: { perEUR: { EUR: 1 } }, annualCost: {} }; }

  function convert(amount, from, to) {
    var r = data().rates.perEUR;
    if (!r[from] || !r[to]) return null;
    return amount / r[from] * r[to];
  }
  function money(amount, cur) {
    var step = cur === 'JPY' || cur === 'KRW' ? 1000 : 100;
    return U.money(Math.round(amount / step) * step, cur);
  }

  /* ---------------- evaluation ---------------- */

  function evaluate(u, input) {
    var checks = [];   /* { level: 'ok' | 'soft' | 'hard' | 'info', text } */
    var st = u.stats || {}, off = st.official || {}, tg = st.targets || {};

    /* English */
    var t = u.english && u.english.ielts;
    if (input.ielts !== null) {
      if (t && has(t.min)) {
        if (input.ielts < t.min) checks.push({ level: 'hard', text: 'IELTS ' + input.ielts + ' is below the published minimum of ' + t.min + '.' });
        else checks.push({ level: 'ok', text: 'IELTS ' + input.ielts + ' meets the published minimum of ' + t.min + '.' +
          (t.lowestLevel ? ' Some courses ask for more.' : '') });
      } else if (t && typeof t.recommended === 'number') {
        if (input.ielts < t.recommended) checks.push({ level: 'soft', text: 'IELTS ' + input.ielts + ' is below the competitive score of ' + t.recommended + '.' });
        else checks.push({ level: 'ok', text: 'IELTS ' + input.ielts + ' is at or above the competitive score of ' + t.recommended + '.' });
      } else if (t && has(t.estimate) && firstNumber(t.estimate) !== null) {
        var est = firstNumber(t.estimate);
        if (input.ielts < est) checks.push({ level: 'soft', text: 'IELTS ' + input.ielts + ' is below the UniPath estimate of ' + t.estimate + ' (not an official requirement).' });
        else checks.push({ level: 'ok', text: 'IELTS ' + input.ielts + ' reaches the UniPath estimate of ' + t.estimate + ' (not an official requirement).' });
      } else {
        checks.push({ level: 'info', text: 'No IELTS figure is published.' });
      }
    }

    /* SAT */
    var policy = U.satPolicy(u);
    if (input.sat !== null) {
      var comp = off.sat && off.sat.composite;
      if (policy === 'not-used') {
        checks.push({ level: 'info', text: 'The SAT is not used for admission here.' });
      } else if (comp) {
        if (input.sat >= comp[2]) checks.push({ level: 'ok', text: 'SAT ' + input.sat + ' is at or above the 75th percentile of admitted students (' + comp[2] + ').' });
        else if (input.sat >= comp[0]) checks.push({ level: 'ok', text: 'SAT ' + input.sat + ' is within the middle 50% of admitted students (' + comp[0] + '–' + comp[2] + ').' });
        else checks.push({ level: 'soft', text: 'SAT ' + input.sat + ' is below the 25th percentile of admitted students (' + comp[0] + ').' });
      } else if (has(tg.sat) && firstNumber(tg.sat) !== null && firstNumber(tg.sat) > 400) {
        var satEst = firstNumber(tg.sat);
        if (input.sat < satEst) checks.push({ level: 'soft', text: 'SAT ' + input.sat + ' is below the UniPath estimate of ' + satEst + '+ (not an official requirement).' });
        else checks.push({ level: 'ok', text: 'SAT ' + input.sat + ' reaches the UniPath estimate of ' + satEst + '+ (not an official requirement).' });
      } else if (policy !== 'unknown') {
        checks.push({ level: 'info', text: 'No SAT range for admitted students is published.' });
      }
    } else if (policy === 'required') {
      checks.push({ level: 'soft', text: 'SAT or ACT is required, and no score was entered.' });
    } else if (policy === 'required-alternatives') {
      checks.push({ level: 'info', text: 'Testing is required, but other exams can replace the SAT/ACT in the cases the university lists.' });
    }

    /* GPA — only where a published average exists */
    if (input.gpa !== null && off.gpa && typeof off.gpa.average === 'number') {
      if (input.gpa < off.gpa.average) checks.push({ level: 'soft', text: 'GPA ' + input.gpa + ' is below the average of admitted students (' + off.gpa.average + ').' });
      else checks.push({ level: 'ok', text: 'GPA ' + input.gpa + ' is at or above the average of admitted students (' + off.gpa.average + ').' });
    }

    /* Selectivity */
    var rate = off.admitRate && typeof off.admitRate.value === 'number' ? off.admitRate.value : null;
    if (rate !== null && rate < 15) {
      checks.push({ level: 'soft', text: 'Acceptance rate ' + rate + '% — admission is uncertain even with top scores.' });
    }

    var levels = checks.map(function (c) { return c.level; });
    var category = levels.indexOf('hard') > -1 ? 'below'
      : levels.indexOf('soft') > -1 ? 'reach'
      : levels.indexOf('ok') > -1 ? 'match'
      : 'unknown';

    return { checks: checks, category: category, budget: budget(u, input) };
  }

  function budget(u, input) {
    var c = data().annualCost[u.id];
    if (!c) return { status: 'unknown', text: 'No yearly cost is published' };
    if (input.budget === null) return { status: 'none', text: costText(c, c.currency) };
    var lo = convert(c.min, c.currency, input.currency), hi = convert(c.max, c.currency, input.currency);
    if (lo === null) return { status: 'unknown', text: 'No yearly cost is published' };
    var status = hi <= input.budget ? 'fits' : lo <= input.budget ? 'maybe' : 'over';
    return { status: status, text: costText(c, input.currency) };
  }

  function costText(c, cur) {
    var lo = convert(c.min, c.currency, cur), hi = convert(c.max, c.currency, cur);
    var amount = c.max === 0 ? 'no tuition' : (Math.round(lo) === Math.round(hi) ? money(lo, cur) : money(lo, cur) + ' – ' + money(hi, cur));
    var label = c.basis === 'total' ? 'Full cost a year: ' + amount : 'Tuition a year: ' + amount + ' — living costs extra';
    if (c.example) label += ' (one programme’s fee)';
    return label;
  }

  /* ---------------- rendering ---------------- */

  var GROUPS = [
    { key: 'match',   title: 'You meet the published requirements', note: 'Your scores reach every published figure we could compare. Admission is still not guaranteed.' },
    { key: 'reach',   title: 'Possible, but competitive', note: 'Below a competitive score or estimate, or a very selective university. Worth applying to a few of these.' },
    { key: 'below',   title: 'Scores not enough yet', note: 'Below a published minimum — an application would not be valid until that score improves.' },
    { key: 'unknown', title: 'Not enough published data to compare', note: 'Enter more scores, or check these universities’ requirements on their official pages.' }
  ];
  var BUDGET_BADGE = {
    fits: '<span class="badge badge-ok">Within budget</span>',
    maybe: '<span class="badge badge-warn">Depends on programme</span>',
    over: '<span class="badge">Above budget</span>',
    unknown: '<span class="badge">Cost not published</span>',
    none: ''
  };
  var LEVEL_ICON = { ok: '✓', soft: '!', hard: '✕', info: 'ℹ' };

  function readSaved() {
    try { return JSON.parse(global.localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function save(v) {
    try { global.localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {}
  }

  function field(id, label, attrs, value, hint) {
    return '<label class="match-field"><span>' + label + '</span>' +
      '<input id="' + id + '" ' + attrs + ' value="' + esc(has(value) ? value : '') + '">' +
      (hint ? '<small class="muted">' + hint + '</small>' : '') + '</label>';
  }

  function render(main) {
    document.title = 'Find my match — UniPath';
    var s = readSaved();
    var countryOpts = '<option value="">All countries</option>' + U.DB.countries.map(function (c) {
      return '<option value="' + esc(c.code) + '"' + (s.country === c.code ? ' selected' : '') + '>' + c.flag + ' ' + esc(c.name) + '</option>';
    }).join('');
    var fieldOpts = '<option value="">Any field</option>' + U.DB.fields.map(function (f) {
      return '<option value="' + esc(f.id) + '"' + (s.field === f.id ? ' selected' : '') + '>' + f.icon + ' ' + esc(f.label) + '</option>';
    }).join('');
    var curOpts = ['USD', 'EUR', 'GBP', 'JPY', 'KRW'].map(function (c) {
      return '<option value="' + c + '"' + ((s.currency || 'USD') === c ? ' selected' : '') + '>' + c + '</option>';
    }).join('');
    var r = data().rates;

    main.innerHTML =
      '<section class="page-head"><div class="wrap"><h1>Find my match</h1>' +
        '<p>Enter your scores and budget. Every university is compared with the figures it publishes — minimum English scores, the SAT range and GPA of admitted students, and the yearly cost.</p>' +
      '</div></section>' +
      '<section class="section"><div class="wrap">' +
        '<div class="notice notice-warn"><span class="ico">⚠️</span><div>This is a rough guide built from published figures, not a prediction. Universities look at far more than scores, requirements differ by programme, and some comparisons use UniPath estimates, which are labelled. Always confirm on the official page.</div></div>' +
        '<form class="card match-form" id="match-form" autocomplete="off" onsubmit="return false"><div class="card-body">' +
          '<div class="match-grid">' +
            field('m-ielts', 'IELTS (overall)', 'type="number" inputmode="decimal" min="0" max="9" step="0.5" placeholder="e.g. 7.0"', s.ielts, null) +
            field('m-gpa', 'GPA (4.0 scale)', 'type="number" inputmode="decimal" min="0" max="5" step="0.01" placeholder="e.g. 3.8"', s.gpa, 'Compared only where a university publishes an average.') +
            field('m-sat', 'SAT (total)', 'type="number" inputmode="numeric" min="400" max="1600" step="10" placeholder="optional"', s.sat, null) +
            '<label class="match-field"><span>Budget per year</span><div class="match-budget">' +
              '<input id="m-budget" type="number" inputmode="numeric" min="0" step="100" placeholder="e.g. 30000" value="' + esc(has(s.budget) ? s.budget : '') + '">' +
              '<select id="m-currency" aria-label="Currency">' + curOpts + '</select></div>' +
              '<small class="muted">Converted with ECB reference rates of <span>' + esc(r.date || '') + '</span> — approximate.</small></label>' +
            '<label class="match-field"><span>Country</span><select id="m-country">' + countryOpts + '</select></label>' +
            '<label class="match-field"><span>Field of study</span><select id="m-field">' + fieldOpts + '</select></label>' +
          '</div>' +
          '<label class="match-check"><input id="m-english" type="checkbox"' + (s.englishOnly === false ? '' : ' checked') + '> <span>Only fields taught fully in English</span></label>' +
        '</div></form>' +
        '<div id="match-out" style="margin-top:26px"></div>' +
      '</div></section>';

    var form = document.getElementById('match-form');
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    update();
  }

  function readInput() {
    var val = function (id) { var el = document.getElementById(id); return el ? el.value : ''; };
    var input = {
      ielts: num(val('m-ielts')), gpa: num(val('m-gpa')), sat: num(val('m-sat')),
      budget: num(val('m-budget')), currency: val('m-currency') || 'USD',
      country: val('m-country'), field: val('m-field'),
      englishOnly: !!(document.getElementById('m-english') || {}).checked
    };
    if (input.ielts !== null && (input.ielts < 0 || input.ielts > 9)) input.ielts = null;
    if (input.sat !== null && (input.sat < 400 || input.sat > 1600)) input.sat = null;
    if (input.gpa !== null && (input.gpa < 0 || input.gpa > 5)) input.gpa = null;
    if (input.budget !== null && input.budget < 0) input.budget = null;
    return input;
  }

  function update() {
    var input = readInput();
    save({ ielts: input.ielts, gpa: input.gpa, sat: input.sat, budget: input.budget, currency: input.currency,
           country: input.country, field: input.field, englishOnly: input.englishOnly });

    var list = U.DB.universities.filter(function (u) {
      if (input.country && u.country !== input.country) return false;
      if (input.englishOnly && u.englishTaught !== true) return false;
      if (input.field) {
        var fields = input.englishOnly ? U.englishPrograms(u) : (u.programs || []);
        if (fields.indexOf(input.field) < 0) return false;
      }
      return true;
    });

    var out = document.getElementById('match-out');
    if (!out) return;
    if (input.ielts === null && input.gpa === null && input.sat === null && input.budget === null) {
      out.innerHTML = '<div class="empty-state"><h3>Enter at least one score or a budget</h3><p>Results appear as you type.</p></div>';
      return;
    }
    if (!list.length) {
      out.innerHTML = '<div class="empty-state"><h3>No universities match these filters</h3><p>Try another country or field, or include fields that are not fully English-taught.</p></div>';
      return;
    }

    var rows = list.map(function (u) { return { u: u, r: evaluate(u, input) }; });
    var budgetRank = { fits: 0, maybe: 1, none: 2, unknown: 3, over: 4 };
    var html = '<p class="muted small" style="margin-bottom:18px">' + rows.length + ' universities compared</p>';
    GROUPS.forEach(function (g) {
      var items = rows.filter(function (x) { return x.r.category === g.key; });
      if (!items.length) return;
      items.sort(function (a, b) {
        return (budgetRank[a.r.budget.status] - budgetRank[b.r.budget.status]) || a.u.name.localeCompare(b.u.name);
      });
      html += '<section class="match-group match-' + g.key + '"><h2>' + esc(g.title) + ' <span class="match-count">' + items.length + '</span></h2>' +
        '<p class="small muted">' + esc(g.note) + '</p><div class="match-list">' +
        items.map(function (x) { return itemHtml(x.u, x.r); }).join('') + '</div></section>';
    });
    out.innerHTML = html;
  }

  function itemHtml(u, r) {
    var c = U.country(u.country);
    var fr = U.fullRide(u);
    var checks = r.checks.map(function (ch) {
      return '<li class="lvl-' + ch.level + '"><span class="ico" aria-hidden="true">' + LEVEL_ICON[ch.level] + '</span><span>' + esc(ch.text) + '</span></li>';
    }).join('');
    return '<article class="card match-item"><div class="card-body">' +
      '<div class="match-head"><div><div class="loc small muted">' + c.flag + ' <span>' + esc(u.city) + '</span>, <span>' + esc(c.name) + '</span></div>' +
        '<h3><a href="' + U.uniUrl(u) + '">' + esc(u.name) + '</a></h3></div>' +
        '<div class="pill-row">' + BUDGET_BADGE[r.budget.status] +
          (fr.available === true && fr.internationalEligible === true ? '<span class="badge">★ Full scholarship route</span>' : '') + '</div></div>' +
      (checks ? '<ul class="match-checks">' + checks + '</ul>' : '') +
      '<p class="small muted" style="margin:8px 0 0">' + esc(r.budget.text) + '</p>' +
      '</div></article>';
  }

  global.UPMatch = { render: render, evaluate: evaluate };
})(window);
