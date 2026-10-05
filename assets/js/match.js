/* ============================================================
   UniPath — "Find my match"

   The student enters IELTS, GPA, SAT and a yearly budget; each entered
   number is compared only with a figure the institution itself
   publishes, and every comparison says which kind of figure it was:
     - minimum     — an official minimum requirement (a hard line);
     - recommended — a level the university recommends or calls
                     competitive;
     - statistic   — scores of past admitted or enrolled students
                     (middle-50% range, average). A statistic is never
                     a requirement.
   Nothing is estimated: where no official figure exists the score is
   simply not compared. Requirements that were not entered or cannot be
   checked here (grades, subjects, essays, portfolio, programme rules)
   are listed as unchecked, never counted as met. Nothing here predicts
   admission.
   ============================================================ */
(function (global) {
  'use strict';
  var U = global.UP;
  var esc = U.esc;
  var KEY = 'unipath.match.v1';

  function has(v) { return v !== null && v !== undefined && v !== ''; }
  function num(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : null; }
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
    var checks = [];   /* { level: 'ok' | 'soft' | 'hard' | 'info', basis: 'minimum' | 'recommended' | 'statistic' | null, text } */
    var unchecked = [];
    var st = u.stats || {}, off = st.official || {};

    /* English */
    var t = u.english && u.english.ielts;
    if (input.ielts !== null) {
      var prof = (U.testVaries(t) && t.profiles) || [];
      var levels = prof.filter(function (p) { return p.kind !== 'competitive' && typeof p.overall === 'number'; })
        .map(function (p) { return p.overall; });
      var comp = prof.filter(function (p) { return p.kind === 'competitive' && typeof p.overall === 'number'; })
        .map(function (p) { return p.overall; });
      if (U.testVaries(t) && has(t.min) && input.ielts < t.min) {
        checks.push({ level: 'hard', basis: 'minimum', text: 'IELTS ' + Number(input.ielts).toFixed(1) + ' is below the university-wide minimum of ' + Number(t.min).toFixed(1) + '.' });
      } else if (U.testVaries(t) && levels.length) {
        var lo = Math.min.apply(null, levels), hi = Math.max.apply(null, levels);
        var band = function (x) { return Number(x).toFixed(1); };
        var range = lo === hi ? band(lo) : band(lo) + '–' + band(hi);
        var you = 'IELTS ' + band(input.ielts);
        /* Only a complete list of levels can rule every programme out or in. */
        if (input.ielts < lo) checks.push({ basis: 'minimum', level: t.profilesComplete ? 'hard' : 'soft',
          text: you + ' is below every programme level listed (' + range + '). Check the level for your course.' });
        else if (input.ielts < hi) checks.push({ basis: 'minimum', level: 'soft',
          text: you + ' meets some programme levels but not all (' + range + '). Check the level for your course.' });
        else if (t.profilesComplete) checks.push({ level: 'ok', basis: 'minimum', text: you + ' meets every programme level (' + range + ').' });
        else checks.push({ level: 'ok', basis: 'minimum', text: you + ' meets the programme levels listed here (' + range + '). Other programmes may ask for more.' });
      } else if (U.testVaries(t) && comp.length) {
        var c = Math.min.apply(null, comp);
        if (input.ielts < c) checks.push({ level: 'soft', basis: 'recommended', text: 'IELTS ' + Number(input.ielts).toFixed(1) + ' is below the competitive level of ' + c.toFixed(1) + ' published for some programmes.' });
        else checks.push({ level: 'ok', basis: 'recommended', text: 'IELTS ' + Number(input.ielts).toFixed(1) + ' reaches the competitive level of ' + c.toFixed(1) + ' published for some programmes.' });
      } else if (U.testVaries(t)) {
        checks.push({ level: 'info', text: 'The IELTS requirement varies by programme. Check the level for your course.' });
      } else if (t && has(t.min)) {
        if (input.ielts < t.min) checks.push({ level: 'hard', basis: 'minimum', text: 'IELTS ' + input.ielts + ' is below the published minimum of ' + t.min + '.' });
        else checks.push({ level: 'ok', basis: 'minimum', text: 'IELTS ' + input.ielts + ' meets the published minimum of ' + t.min + '.' });
      } else if (t && typeof t.recommended === 'number') {
        if (input.ielts < t.recommended) checks.push({ level: 'soft', basis: 'recommended', text: 'IELTS ' + input.ielts + ' is below the competitive score of ' + t.recommended + '.' });
        else checks.push({ level: 'ok', basis: 'recommended', text: 'IELTS ' + input.ielts + ' is at or above the competitive score of ' + t.recommended + '.' });
      } else {
        checks.push({ level: 'info', text: 'No official IELTS figure is recorded for this institution, so your score was not compared.' });
      }
    } else {
      unchecked.push('English test score — not entered');
    }

    /* SAT */
    var policy = U.satPolicy(u);
    if (input.sat !== null) {
      var comp = off.sat && off.sat.composite;
      if (policy === 'not-used') {
        checks.push({ level: 'info', text: 'The SAT is not used for admission here.' });
      } else if (policy === 'not-applicable' && !(off.sat && off.sat.composite)) {
        checks.push({ level: 'info', text: 'The SAT is not part of this admission route, so your score is not compared.' });
      } else if (comp && has(comp[0]) && has(comp[2])) {
        /* Name the sample the source reports on; CDS figures are enrolled students. */
        var who = off.sat.cohort === 'admitted' ? 'admitted students' : off.sat.cohort === 'enrolled' ? 'enrolled first-year students' : 'the published sample';
        if (input.sat >= comp[2]) checks.push({ level: 'ok', basis: 'statistic', text: 'SAT ' + input.sat + ' is at or above the 75th percentile of ' + who + ' (' + comp[2] + ').' });
        else if (input.sat >= comp[0]) checks.push({ level: 'ok', basis: 'statistic', text: 'SAT ' + input.sat + ' is within the middle 50% of ' + who + ' (' + comp[0] + '–' + comp[2] + ').' });
        else checks.push({ level: 'soft', basis: 'statistic', text: 'SAT ' + input.sat + ' is below the 25th percentile of ' + who + ' (' + comp[0] + ').' });
      } else if (off.sat && (off.sat.rw || off.sat.math)) {
        checks.push({ level: 'info', text: 'The university publishes SAT section scores only, with no total SAT range, so a total score cannot be compared.' });
      } else if (policy !== 'unknown') {
        checks.push({ level: 'info', text: 'No official SAT statistics are confirmed for this university, so your score was not compared.' });
      } else {
        checks.push({ level: 'info', text: 'The SAT/ACT policy of this institution is not confirmed, so your score was not compared.' });
      }
      if (policy === 'optional') checks.push({ level: 'info', text: 'Test-optional for admission. A scholarship or a particular programme may still ask for a score.' });
    } else if (policy === 'required') {
      checks.push({ level: 'soft', basis: 'minimum', text: 'SAT or ACT is required, and no score was entered.' });
    } else if (policy === 'required-alternatives') {
      checks.push({ level: 'info', text: 'Testing is required, but other exams can replace the SAT/ACT in the cases the university lists.' });
      unchecked.push('Required test (SAT/ACT or an accepted alternative) — not entered');
    } else if (policy === 'unknown' || policy === 'accepted') {
      unchecked.push('SAT/ACT — the policy is not confirmed');
    }

    /* A community college is a different degree route, not an easier bachelor’s.
       What it awards is read from its own record. */
    if (U.isCommunityCollege(u)) {
      checks.push({ level: 'info', text: U.degreesOf(u).indexOf('bachelor') > -1
        ? 'A community college: mainly associate degrees and certificates. Its catalogue lists a few bachelor’s programmes, but whether an international student can enter them must be confirmed with the college.'
        : 'A community college: associate degrees and certificates. No bachelor’s programme is recorded here, so a bachelor’s degree would need a later transfer, which is not guaranteed.' });
    }

    /* GPA — only where a published average exists */
    if (input.gpa === null) {
      unchecked.push('GPA and school grades — not entered');
    } else if (!(off.gpa && typeof off.gpa.average === 'number')) {
      unchecked.push('GPA — no official figure to compare with');
    }
    if (input.gpa !== null && off.gpa && typeof off.gpa.average === 'number') {
      if (input.gpa < off.gpa.average) checks.push({ level: 'soft', basis: 'statistic', text: 'GPA ' + input.gpa + ' is below the average of admitted students (' + off.gpa.average + ').' });
      else checks.push({ level: 'ok', basis: 'statistic', text: 'GPA ' + input.gpa + ' is at or above the average of admitted students (' + off.gpa.average + ').' });
    }

    /* Selectivity */
    var rate = off.admitRate && typeof off.admitRate.value === 'number' ? off.admitRate.value : null;
    if (rate !== null && rate < 15) {
      checks.push({ level: 'soft', basis: 'statistic', text: 'Acceptance rate ' + rate + '% — admission is uncertain even with top scores.' });
    }
    /* Never checked by this tool, whatever was entered. */
    unchecked.push('Required school subjects, essays, recommendations, portfolio or interview');
    unchecked.push('Programme-specific and intake-specific requirements');

    var levels = checks.map(function (c) { return c.level; });
    var category = levels.indexOf('hard') > -1 ? 'below'
      : levels.indexOf('soft') > -1 ? 'reach'
      : levels.indexOf('ok') > -1 ? 'match'
      : 'unknown';

    /* Which kinds of figure the positive comparisons rest on. */
    var oks = checks.filter(function (c) { return c.level === 'ok'; });
    var bases = {};
    oks.forEach(function (c) { if (c.basis) bases[c.basis] = true; });
    return { checks: checks, category: category, unchecked: unchecked, bases: bases, budget: budget(u, input) };
  }

  function budget(u, input) {
    var c = data().annualCost[u.id];
    if (!c) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    if (input.budget === null) return { status: 'none', text: costText(c, c.currency) };
    var lo = convert(c.min, c.currency, input.currency), hi = convert(c.max, c.currency, input.currency);
    if (lo === null) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    var status = hi <= input.budget ? 'fits' : lo <= input.budget ? 'maybe' : 'over';
    /* A tuition-only figure inside the budget is not a full year inside the budget. */
    if (status === 'fits' && c.basis !== 'total') status = 'fits-tuition';
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
    { key: 'match',   title: 'Entered scores match the verified figures', note: 'Every score you entered reaches the official figure it could be compared with. This does not mean you meet the admission requirements: anything listed under “Not checked” still has to be met, and admission is never guaranteed.' },
    { key: 'reach',   title: 'Below a recommended level or the usual range', note: 'At least one entered score is below a level the university recommends or below the range of its past students, or the institution admits very few applicants.' },
    { key: 'below',   title: 'Below an official minimum', note: 'At least one entered score is below a published minimum requirement.' },
    { key: 'unknown', title: 'Not enough verified data to compare', note: 'None of the scores you entered could be compared with an official figure. Check these institutions’ requirements on their official pages.' }
  ];
  var BUDGET_BADGE = {
    fits: '<span class="badge badge-ok">Full cost within budget</span>',
    'fits-tuition': '<span class="badge badge-warn">Tuition within budget — living costs not included</span>',
    maybe: '<span class="badge badge-warn">Depends on programme</span>',
    over: '<span class="badge">Above budget</span>',
    unknown: '<span class="badge">Cost not recorded</span>',
    none: ''
  };
  var LEVEL_ICON = { ok: '✓', soft: '!', hard: '✕', info: 'ℹ' };
  var BASIS_LABEL = { minimum: 'Official minimum', recommended: 'University recommendation', statistic: 'Student statistics' };

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
        '<p>Enter your scores and budget. Each number is compared only with a figure the institution itself publishes, and every result says whether that figure is a minimum requirement, a recommendation or a statistic about past students.</p>' +
      '</div></section>' +
      '<section class="section"><div class="wrap">' +
        '<div class="notice notice-warn"><span class="ico">⚠️</span><div>This is a comparison of the numbers you enter with official figures, not a prediction and not a check of all requirements. Falling inside the score range of past students is not a requirement met and says nothing certain about admission. Grades, school subjects, essays, portfolios and programme rules are not checked. Always confirm on the official page.</div></div>' +
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
      out.innerHTML = '<div class="empty-state"><h3>No institutions match these filters</h3><p>Try another country or field, or include fields that are not fully English-taught.</p></div>';
      return;
    }

    var rows = list.map(function (u) { return { u: u, r: evaluate(u, input) }; });
    var budgetRank = { fits: 0, 'fits-tuition': 1, maybe: 2, none: 3, unknown: 4, over: 5 };
    var entered = [], missing = [];
    (input.ielts !== null ? entered : missing).push('IELTS');
    (input.sat !== null ? entered : missing).push('SAT');
    (input.gpa !== null ? entered : missing).push('GPA');
    var html = '<p class="muted small" style="margin-bottom:6px">' + rows.length + ' institutions compared</p>' +
      '<p class="small" style="margin:0 0 18px"><strong>Compared:</strong> <span>' + (entered.length ? entered.join(', ') : 'budget only') + '</span>' +
      (missing.length ? ' · <strong>Not entered, so not compared:</strong> <span>' + missing.join(', ') + '</span>' : '') + '</p>' +
      (input.field ? '<p class="small muted" style="margin:0 0 18px">Field of study is a broad subject area, not a named degree. Check that the exact programme exists and is open to your intake.</p>' : '');
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
      return '<li class="lvl-' + ch.level + '"><span class="ico" aria-hidden="true">' + LEVEL_ICON[ch.level] + '</span><span>' +
        (ch.basis ? '<span class="basis-tag basis-' + ch.basis + '">' + esc(BASIS_LABEL[ch.basis]) + '</span> ' : '') + '<span>' + esc(ch.text) + '</span></span></li>';
    }).join('');
    var unchecked = (r.unchecked || []).length
      ? '<details class="match-unchecked"><summary>Not checked (' + r.unchecked.length + ')</summary><ul>' +
        r.unchecked.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></details>' : '';
    return '<article class="card match-item"><div class="card-body">' +
      '<div class="match-head"><div><div class="loc small muted">' + c.flag + ' <span>' + esc(u.city) + '</span>, <span>' + esc(c.name) + '</span></div>' +
        '<h3><a href="' + U.uniUrl(u) + '">' + esc(u.name) + '</a></h3></div>' +
        '<div class="pill-row">' + BUDGET_BADGE[r.budget.status] +
          (fr.available === true && fr.internationalEligible === true ? '<span class="badge">★ <span>' + esc(U.awardLabel(u)) + '</span></span>' : '') + '</div></div>' +
      (checks ? '<ul class="match-checks">' + checks + '</ul>' : '') + unchecked +
      '<p class="small muted" style="margin:8px 0 0">' + esc(r.budget.text) + '</p>' +
      '</div></article>';
  }

  global.UPMatch = { render: render, evaluate: evaluate };
})(window);
