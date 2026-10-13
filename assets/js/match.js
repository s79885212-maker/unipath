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
    /* The same currency is not converted: a division and a multiplication
       would move the figure by a rounding error, and a budget exactly equal to
       the published cost would read as "above budget". */
    if (from === to) return amount;
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
        /* What the figure is decides the wording: an average or a typical
           score describes past applicants and is never a requirement that
           is met or missed; a recommendation is the university's advice. */
        var rb = U.recBasis(t), what = REC_TEXT[rb], kind = U.recInfo(t).kind;
        if (input.ielts < t.recommended) checks.push({ level: 'soft', basis: kind, text: 'IELTS ' + input.ielts + ' is below ' + what + ' (' + t.recommended + ').' + (kind === 'statistic' ? ' This is a statistic, not a minimum.' : '') });
        else checks.push({ level: 'ok', basis: kind, text: 'IELTS ' + input.ielts + ' is at or above ' + what + ' (' + t.recommended + ').' + (kind === 'statistic' ? ' This is a statistic, not a requirement met.' : '') });
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
        var who = U.cohortLabel(off.sat.cohort);
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

    /* GPA — compared only with a published figure on the same scale and of the
       same kind. A weighted average, or one whose scale the source does not
       state, is shown for information and never compared; nothing is
       converted from one scale to another. */
    var g = off.gpa;
    if (input.gpa === null) {
      unchecked.push('GPA and school grades — not entered');
    } else if (!(g && typeof g.average === 'number')) {
      unchecked.push('GPA — no official figure to compare with');
    } else {
      var gWho = U.cohortLabel(g.cohort);
      if (U.gpaComparable(g)) {
        if (input.gpa < g.average) checks.push({ level: 'soft', basis: 'statistic', text: 'GPA ' + input.gpa + ' is below the average unweighted GPA of ' + gWho + ' (' + g.average + ' on the 4.0 scale).' });
        else checks.push({ level: 'ok', basis: 'statistic', text: 'GPA ' + input.gpa + ' is at or above the average unweighted GPA of ' + gWho + ' (' + g.average + ' on the 4.0 scale).' });
      } else {
        checks.push({ level: 'info', text: 'A direct GPA comparison is not possible. The published average for ' + gWho + ' is ' + g.average + ', and ' + U.gpaBasisNote(g) + '.' });
        unchecked.push('GPA — the published figure cannot be compared with a 4.0-scale GPA');
      }
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

  var REC_TEXT = {
    recommended: 'the score the university recommends',
    competitive: 'the level the university describes as competitive',
    threshold: 'the higher level the university publishes',
    stated: 'the level the university lists',
    typical: 'the typical score of successful applicants the university describes',
    average: 'the average score the university reports'
  };

  /* The yearly figure of a university, with the required costs its profile
     lists outside the published total. */
  function costOf(u) {
    /* Guaranteed aid covers the main costs: there is no yearly figure to
       compare, only what the profile says is covered and what remains. */
    var aa = U.costAfterAid(u);
    if (aa) return { covered: aa, currency: U.costCurrency(u) };
    var c = data().annualCost[u.id];
    if (!c) return null;
    /* Two official sources, two totals: both travel with the record. */
    var figures = U.costConflict(u);
    if (figures) {
      var both = {};
      Object.keys(c).forEach(function (k) { both[k] = c[k]; });
      both.basis = 'total';
      both.conflict = figures;
      both.min = figures[0].amount;
      both.max = figures[figures.length - 1].amount;
      return both;
    }
    var ex = c.basis === 'total' && !c.label ? U.costExtras(u) : [];
    if (!ex.length) return c;
    var out = {};
    Object.keys(c).forEach(function (k) { out[k] = c[k]; });
    out.extras = ex.reduce(function (a, x) { return a + x.amount; }, 0);
    out.extrasLabel = ex[0].label;
    out.extrasMore = ex.length > 1;
    return out;
  }

  function budget(u, input) {
    var c = costOf(u);
    if (!c) {
      /* A figure for an earlier year is shown for what it is and is not compared. */
      if (U.costStatus(u) === 'previous-cycle' && U.budgetText(u)) return { status: 'unknown',
        text: 'Only a figure for an earlier year is published: ' + U.budgetText(u) + ' (' + (U.costYear(u) || 'year not stated') + '). It is not compared with your budget.' };
      return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    }
    /* Whatever the budget — 0 or any other number — covered main costs with
       unpriced remaining expenses are never called "within budget". */
    if (c.covered) return { status: input.budget === null ? 'none' : 'core-covered', text: coveredText(c.covered), html: coveredHtml(c.covered) };
    if (input.budget === null) return { status: 'none', text: costText(c, c.currency), html: c.conflict ? conflictHtml(c, c.currency) : null };
    var lo = convert(c.min, c.currency, input.currency), hi = convert(c.max, c.currency, input.currency);
    if (lo === null) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    /* A full cost of zero is not a published figure: nobody studies for nothing. */
    if (c.basis === 'total' && c.max === 0) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    /* Sources that disagree are not a range of programme prices: a budget
       between the two figures is neither enough nor too little until the
       university says which figure holds. */
    if (c.conflict) {
      return { status: hi <= input.budget ? 'fits' : lo > input.budget ? 'over' : 'conflict',
        text: costText(c, input.currency), html: conflictHtml(c, input.currency) };
    }
    /* A required cost the university leaves out of its published total is
       added before a budget is called sufficient. */
    var extra = typeof c.extras === 'number' ? convert(c.extras, c.currency, input.currency) : 0;
    var status = hi + extra <= input.budget ? 'fits'
      : hi <= input.budget ? 'fits-no-extras'
      : lo <= input.budget ? 'maybe' : 'over';
    /* Only a published full budget inside the budget is a full year inside it. */
    if (status === 'fits' && c.basis === 'billed') status = 'fits-billed';
    else if (status === 'fits' && c.basis !== 'total') status = 'fits-tuition';
    return { status: status, text: costText(c, input.currency) };
  }

  /* Covered main costs: each part of the profile's record under its own name. */
  function coveredParts(aa) {
    return [['Covered', aa.covered], ['Paid by the student', aa.personal], ['Not stated', aa.notStated], ['One-off deposit', aa.deposit]]
      .filter(function (p) { return has(p[1]); });
  }
  function coveredHtml(aa) {
    return '<strong>Main costs are covered; whether a budget is enough is not determined.</strong> ' +
      '<span>The remaining expenses have no published yearly amount, so no budget — not even a large one — is confirmed here.</span>' +
      '<ul class="conflict-figures">' + coveredParts(aa).map(function (p) {
        return '<li><strong><span>' + esc(p[0]) + '</span>:</strong> <span>' + esc(p[1]) + '</span></li>';
      }).join('') + '</ul>' +
      (has(aa.source) ? '<a href="' + esc(aa.source) + '" target="_blank" rel="noopener">Official page ↗</a>' +
        (has(aa.verified) ? ' · <span>Checked ' + esc(aa.verified) + '</span>' : '') : '');
  }
  function coveredText(aa) {
    return 'Main costs are covered; whether a budget is enough is not determined. ' +
      coveredParts(aa).map(function (p) { return p[0] + ': ' + p[1]; }).join(' ');
  }

  function shown(c, cur) {
    return cur === c.currency ? function (x) { return U.money(Math.round(x), cur); } : function (x) { return money(x, cur); };
  }
  /* Both figures, each with its year and a link to its source. */
  function conflictHtml(c, cur) {
    var show = shown(c, cur);
    return '<strong>Official sources differ — the budget needs checking.</strong> <span>Full cost a year, as each source gives it:</span>' +
      '<ul class="conflict-figures">' + c.conflict.map(function (f) {
        return '<li><strong>' + esc(show(convert(f.amount, c.currency, cur))) + '</strong> — ' +
          '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.label + ' ↗') + '</a>' +
          (has(f.year) ? ' · <span>Year in the source:</span> <span>' + esc(f.year) + '</span>' : '') +
          (has(f.yearNote) ? ' <span class="muted">(<span>' + esc(f.yearNote) + '</span>)</span>' : '') + '</li>';
      }).join('') + '</ul>' +
      '<span>Neither figure is chosen here. Ask the university which one applies to your year before relying on it.</span>';
  }
  function costText(c, cur) {
    if (c.label) return c.label;
    if (c.conflict) {
      var sh = shown(c, cur);
      return 'Official sources differ — the budget needs checking: ' + c.conflict.map(function (f) {
        return sh(convert(f.amount, c.currency, cur)) + ' (' + f.label + (f.year ? ', ' + f.year : '') + ')';
      }).join(' and ');
    }
    var lo = convert(c.min, c.currency, cur), hi = convert(c.max, c.currency, cur);
    /* A figure in its own currency is shown exactly; only a converted one is
       rounded, because the conversion is approximate. */
    var show = cur === c.currency ? function (x) { return U.money(Math.round(x), cur); } : function (x) { return money(x, cur); };
    var range = function (a, b) { return Math.round(a) === Math.round(b) ? show(a) : show(a) + ' – ' + show(b); };
    var amount = c.max === 0 ? 'no tuition' : range(lo, hi);
    var label = c.basis === 'total' ? 'Full cost a year: ' + amount
      : c.basis === 'billed' ? 'Billed by the university a year: ' + amount + ' — books, travel, personal costs and insurance extra'
      : 'Tuition a year: ' + amount + ' — living costs extra';
    if (c.example) label += ' (one programme’s fee)';
    if (c.calc === 'two-semesters') label += '. Two semesters at the published per-semester rates — calculated by UniPath, not a figure the university prints';
    if (c.calc === 'lines') label += '. The sum of the lines the page lists — the page prints no total';
    if (typeof c.extras === 'number') {
      var ex = convert(c.extras, c.currency, cur);
      label += '. Not included: ' + show(ex) + ' — ' + (c.extrasLabel || 'a required cost') + (c.extrasMore ? ' and other required costs' : '') +
        ', required and outside the published total. With it: ' + range(lo + ex, hi + ex) + ' (calculated by UniPath)';
    }
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
    'fits-no-extras': '<span class="badge badge-warn">Published total within budget — required extra costs are not</span>',
    'fits-billed': '<span class="badge badge-warn">University charges within budget — other costs not included</span>',
    conflict: '<span class="badge badge-warn">Official sources differ — the budget needs checking</span>',
    'core-covered': '<span class="badge badge-warn">Main costs covered — budget sufficiency not determined</span>',
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
      '<input id="' + id + '" ' + attrs + ' aria-describedby="' + id + '-err" value="' + esc(has(value) ? value : '') + '">' +
      '<small class="field-error" id="' + id + '-err" role="alert" hidden></small>' +
      (hint ? '<small class="muted">' + hint + '</small>' : '') + '</label>';
  }

  /* The limits of each score field. A value outside them is reported next to
     the field and is not used for any comparison. */
  var LIMITS = {
    'm-ielts': { key: 'ielts', min: 0, max: 9, error: 'Enter an IELTS band from 0 to 9. This value is not used.' },
    'm-gpa': { key: 'gpa', min: 0, max: 4, error: 'Enter a GPA from 0 to 4.0. This field uses the 4.0 scale, so this value is not used.' },
    'm-sat': { key: 'sat', min: 400, max: 1600, error: 'Enter a total SAT score from 400 to 1600. This value is not used.' },
    'm-budget': { key: 'budget', min: 0, max: Infinity, error: 'Enter a budget of 0 or more. This value is not used.' }
  };
  /* raw → { value: number | null, invalid: boolean } */
  function checkField(id, raw) {
    var lim = LIMITS[id], text = String(raw === null || raw === undefined ? '' : raw).trim();
    if (text === '') return { value: null, invalid: false };
    var n = num(text);
    if (n === null || n < lim.min || n > lim.max) return { value: null, invalid: true };
    return { value: n, invalid: false };
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
            field('m-gpa', 'GPA (4.0 scale)', 'type="number" inputmode="decimal" min="0" max="4" step="0.01" placeholder="e.g. 3.8"', s.gpa, 'Unweighted, from 0 to 4.0. Compared only with a published average on the same scale; school grades are never converted.') +
            field('m-sat', 'SAT (total)', 'type="number" inputmode="numeric" min="400" max="1600" step="10" placeholder="optional"', s.sat, null) +
            '<label class="match-field"><span>Budget per year</span><div class="match-budget">' +
              '<input id="m-budget" type="number" inputmode="numeric" min="0" step="100" placeholder="e.g. 30000" aria-describedby="m-budget-err" value="' + esc(has(s.budget) ? s.budget : '') + '">' +
              '<select id="m-currency" aria-label="Currency">' + curOpts + '</select></div>' +
              '<small class="field-error" id="m-budget-err" role="alert" hidden></small>' +
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
      currency: val('m-currency') || 'USD',
      country: val('m-country'), field: val('m-field'),
      englishOnly: !!(document.getElementById('m-english') || {}).checked,
      invalid: []
    };
    Object.keys(LIMITS).forEach(function (id) {
      var el = document.getElementById(id);
      /* A number field reports text it cannot parse as an empty value. */
      var bad = !!(el && el.validity && el.validity.badInput);
      var r = bad ? { value: null, invalid: true } : checkField(id, val(id));
      input[LIMITS[id].key] = r.value;
      if (r.invalid) input.invalid.push(LIMITS[id].key);
      var err = document.getElementById(id + '-err');
      if (err) { err.hidden = !r.invalid; err.textContent = r.invalid ? LIMITS[id].error : ''; }
      if (el && el.setAttribute) el.setAttribute('aria-invalid', r.invalid ? 'true' : 'false');
    });
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
      out.innerHTML = input.invalid.length
        ? '<div class="empty-state"><h3>No valid score or budget to compare</h3><p>Correct the fields marked above. A value outside the allowed range is not used.</p></div>'
        : '<div class="empty-state"><h3>Enter at least one score or a budget</h3><p>Results appear as you type.</p></div>';
      return;
    }
    if (!list.length) {
      out.innerHTML = '<div class="empty-state"><h3>No institutions match these filters</h3><p>Try another country or field, or include fields that are not fully English-taught.</p></div>';
      return;
    }

    var rows = list.map(function (u) { return { u: u, r: evaluate(u, input) }; });
    var budgetRank = { fits: 0, 'fits-no-extras': 1, 'fits-billed': 1, 'fits-tuition': 1, 'core-covered': 1, conflict: 2, maybe: 2, none: 3, unknown: 4, over: 5 };
    var entered = [], missing = [];
    (input.ielts !== null ? entered : missing).push('IELTS');
    (input.sat !== null ? entered : missing).push('SAT');
    (input.gpa !== null ? entered : missing).push('GPA');
    var gap = input.field ? U.DB.universities.filter(function (u) {
      return (!input.country || u.country === input.country) && (!input.englishOnly || u.englishTaught === true) && !U.programsChecked(u);
    }).length : 0;
    var html = '<p class="muted small" style="margin-bottom:6px">' + rows.length + ' institutions compared</p>' +
      (gap ? '<p class="muted small" style="margin:0 0 6px"><span>Not included under this field:</span> ' + gap + ' <span>institutions whose list of majors has not been checked.</span></p>' : '') +
      '<p class="small" style="margin:0 0 18px"><strong>Compared:</strong> <span>' + (entered.length ? entered.join(', ') : 'budget only') + '</span>' +
      (missing.length ? ' · <strong>Not entered, so not compared:</strong> <span>' + missing.join(', ') + '</span>' : '') + '</p>' +
      (input.invalid.length ? '<p class="small warn-text" style="margin:-10px 0 18px">A value outside the allowed range was entered and is not used.</p>' : '') +
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
      (r.budget.html
        ? '<div class="small match-conflict" style="margin:8px 0 0">' + r.budget.html + '</div>'
        : '<p class="small muted" style="margin:8px 0 0">' + esc(r.budget.text) + '</p>') +
      '</div></article>';
  }

  global.UPMatch = { render: render, evaluate: evaluate, checkField: checkField, costOf: costOf };
})(window);
