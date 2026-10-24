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
    if (typeof amount !== 'number' || !isFinite(amount) || !from || !to) return null;
    /* The same currency is not converted: a division and a multiplication
       would move the figure by a rounding error, and a budget exactly equal to
       the published cost would read as "above budget". */
    if (from === to) return amount;
    var r = (data().rates || {}).perEUR || {};
    if (typeof r[from] !== 'number' || !isFinite(r[from]) || r[from] <= 0 ||
        typeof r[to] !== 'number' || !isFinite(r[to]) || r[to] <= 0) return null;
    var result = amount / r[from] * r[to];
    return isFinite(result) ? result : null;
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
    } else if (policy === 'conditional') {
      checks.push({ level: 'info', text: 'Testing requirements depend on your school system and programme; see the scoped evidence in the profile.' });
      unchecked.push('SAT/ACT — school-system requirements need individual checking');
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
    if (U.costStatus(u) === 'previous-cycle') return null;
    var c = data().annualCost[u.id];
    if (!c) return null;
    if (['total', 'billed', 'tuition'].indexOf(c.basis) < 0 ||
        (c.period && c.period !== 'year' && c.period !== 'annual')) return null;
    if (c.calc === 'credit-load') {
      if (c.basis !== 'tuition' || c.period !== 'year' ||
          typeof c.perCredit !== 'number' || !isFinite(c.perCredit) || c.perCredit <= 0 ||
          typeof c.creditsPerYear !== 'number' || !isFinite(c.creditsPerYear) || c.creditsPerYear <= 0 || c.creditsPerYear % 1 ||
          !/^https:\/\//.test(c.source || '') || !/^https:\/\//.test(c.workloadSource || '') ||
          !/^\d{4}-\d{2}-\d{2}$/.test(c.verified || '') || !/^\d{4}-\d{2}-\d{2}$/.test(c.workloadVerified || '') ||
          !has(c.academicYear) || c.academicYear !== U.costYear(u) ||
          c.min !== Math.round(c.perCredit * c.creditsPerYear * 100) / 100 || c.max !== c.min) return null;
    }
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
    if (c.conflict) return { status: 'conflict', text: costText(c, c.currency), html: conflictHtml(c, c.currency) };
    if (input.budget === null) return { status: 'none', text: costText(c, c.currency) };
    var lo = convert(c.min, c.currency, input.currency), hi = convert(c.max, c.currency, input.currency);
    if (lo === null || hi === null || lo < 0 || hi < lo) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    /* A full cost of zero is not a published figure: nobody studies for nothing. */
    if (c.basis === 'total' && c.max === 0) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
    /* A required cost the university leaves out of its published total is
       added before a budget is called sufficient. */
    var extra = typeof c.extras === 'number' ? convert(c.extras, c.currency, input.currency) : 0;
    if (extra === null) return { status: 'unknown', text: 'No comparable yearly cost is recorded' };
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
    if (c.calc === 'credit-load') label += '. ' + c.creditsPerYear + ' ' + 'credits per academic year at the published per-credit rate — calculated by UniPath; mandatory fees, insurance, housing and food are extra';
    if (typeof c.extras === 'number') {
      var ex = convert(c.extras, c.currency, cur);
      label += '. Not included: ' + show(ex) + ' — ' + (c.extrasLabel || 'a required cost') + (c.extrasMore ? ' and other required costs' : '') +
        ', required and outside the published total. With it: ' + range(lo + ex, hi + ex) + ' (calculated by UniPath)';
    }
    if (has(c.academicYear) && has(c.note) && (c.calc === 'credit-load' || c.calc === 'two-semesters')) {
      label += '. Scope: ' + c.note;
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

  /* ---------------- Dropdowns of the match form ----------------
     The native <select> stays in the form, hidden, and keeps the value and
     the change event; a button and a list drawn in the site's style sit on
     top of it, with a line icon for each field of study and the flag for
     each country. Keyboard: arrows, Home/End, Enter/Space, Escape, letters. */
  var FIELD_ICONS = {
    '': ['220', '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'],
    'business': ['214', '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8.5 7V5.5A2.5 2.5 0 0 1 11 3h2a2.5 2.5 0 0 1 2.5 2.5V7M3 12.5h18"/>'],
    'economics': ['152', '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'],
    'computer-science': ['250', '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'],
    'engineering': ['198', '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>'],
    'psychology': ['330', '<path d="M9.5 20.5V18H7a2 2 0 0 1-2-2v-2.5l-1.5-.8 1.6-2.9A7 7 0 0 1 19 9.5c0 2.3-1 4.2-2.5 5.5v5.5"/><path d="M10 9.5a2 2 0 1 1 3.4 1.4c-.6.6-1.4 1-1.4 2.1"/>'],
    'biology': ['140', '<path d="M5 19c0-8.3 5.7-14 14-14 0 8.3-5.7 14-14 14z"/><path d="M5 19l7.5-7.5"/>'],
    'mathematics': ['32', '<path d="M18 5H6.5l6 7-6 7H18"/>'],
    'social-sciences': ['188', '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>'],
    'humanities': ['22', '<path d="M2.5 5.5H8a4 4 0 0 1 4 4V20a3 3 0 0 0-3-3H2.5zM21.5 5.5H16a4 4 0 0 0-4 4V20a3 3 0 0 1 3-3h6.5z"/>'],
    'arts': ['292', '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.9-.6-1.3-.6-2.1 0-.9.7-1.6 1.6-1.6h2.2A4.2 4.2 0 0 0 21 11.5C21 6.8 17 3 12 3z"/><circle cx="7.5" cy="11.5" r="1.1"/><circle cx="10.5" cy="7.3" r="1.1"/><circle cx="15.5" cy="8" r="1.1"/>'],
    'law': ['44', '<path d="M12 3.5V20M7.5 20.5h9M5 7.5h14M12 4.5l-7 3M12 4.5l7 3"/><path d="M5 8l-2.6 6a2.6 2.6 0 0 0 5.2 0zM19 8l-2.6 6a2.6 2.6 0 0 0 5.2 0z"/>'],
    'medicine': ['356', '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><path d="M12 8v8M8 12h8"/>'],
    'education': ['262', '<path d="M2 9.5L12 5l10 4.5L12 14z"/><path d="M6 11.5v4.3c3.5 2.3 8.5 2.3 12 0v-4.3M22 9.5V15"/>'],
    'other': ['48', '<path d="M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>']
  };
  var SVG_OPEN = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">';
  function fieldIcon(id) {
    var ic = FIELD_ICONS[id] || FIELD_ICONS.other;
    return '<span class="fs-ico" style="--h:' + ic[0] + '">' + SVG_OPEN + ic[1] + '</svg></span>';
  }
  function countryIcon(code) {
    var c = code && U.country(code);
    return c ? '<span class="fs-ico is-flag" aria-hidden="true">' + c.flag + '</span>'
             : '<span class="fs-ico" style="--h:210">' + SVG_OPEN + '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg></span>';
  }

  var openDropdown = null;
  function closeOpenDropdown(e) {
    if (openDropdown && !(e && e.target && openDropdown.wrap.contains(e.target))) openDropdown.close(false);
  }
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('mousedown', closeOpenDropdown, true);
    document.addEventListener('touchstart', closeOpenDropdown, true);
  }

  /* sel: the native select; iconFor(value) → HTML or ''; labelId: the visible label's id. */
  function dropdown(sel, iconFor, labelId, compact) {
    if (!sel || sel.getAttribute('data-fs')) return;
    sel.setAttribute('data-fs', '1');
    if (labelId) sel.setAttribute('aria-labelledby', labelId);
    var texts = [].map.call(sel.options, function (o) { return o.text; });  /* English, before translation */
    var wrap = document.createElement('div');
    wrap.className = 'fs' + (compact ? ' fs-compact' : '');
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'fs-btn';
    btn.id = sel.id + '-btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', sel.id + '-list');
    if (labelId) btn.setAttribute('aria-labelledby', labelId + ' ' + btn.id);
    else if (sel.getAttribute('aria-label')) btn.setAttribute('aria-label', sel.getAttribute('aria-label'));
    btn.innerHTML = '<span class="fs-cur"></span><span class="fs-text"></span>' +
      '<svg class="fs-chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg>';
    var list = document.createElement('div');
    list.className = 'fs-list';
    list.id = sel.id + '-list';
    list.setAttribute('role', 'listbox');
    list.tabIndex = -1;
    list.hidden = true;
    if (labelId) list.setAttribute('aria-labelledby', labelId);
    else if (sel.getAttribute('aria-label')) list.setAttribute('aria-label', sel.getAttribute('aria-label'));
    var items = [].map.call(sel.options, function (o, i) {
      var it = document.createElement('div');
      it.className = 'fs-opt';
      it.id = sel.id + '-o' + i;
      it.setAttribute('role', 'option');
      it.innerHTML = iconFor(o.value) + '<span class="fs-text"></span>' +
        '<svg class="fs-check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
      it.querySelector('.fs-text').textContent = texts[i];
      list.appendChild(it);
      if (i === 0 && o.value === '' && sel.options.length > 2) {
        var sep = document.createElement('div');
        sep.className = 'fs-sep';
        sep.setAttribute('role', 'presentation');
        list.appendChild(sep);
      }
      return it;
    });
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(btn);
    wrap.appendChild(list);
    wrap.appendChild(sel);
    sel.classList.add('fs-native');
    sel.tabIndex = -1;
    sel.setAttribute('aria-hidden', 'true');

    var active = -1, typed = '', typedAt = 0;
    function sync() {
      var i = sel.selectedIndex < 0 ? 0 : sel.selectedIndex;
      items.forEach(function (it, k) { it.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      btn.querySelector('.fs-cur').innerHTML = iconFor(sel.value);
      btn.querySelector('.fs-text').textContent = texts[i];
    }
    function highlight(i, scroll) {
      if (i < 0 || i >= items.length) return;
      if (items[active]) items[active].classList.remove('is-active');
      active = i;
      items[i].classList.add('is-active');
      list.setAttribute('aria-activedescendant', items[i].id);
      if (scroll && items[i].scrollIntoView) items[i].scrollIntoView({ block: 'nearest' });
    }
    function open() {
      if (openDropdown && openDropdown !== api) openDropdown.close(false);
      list.hidden = false;
      wrap.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      /* Open upwards when the window has no room below. */
      wrap.classList.remove('fs-up');
      var r = btn.getBoundingClientRect(), need = Math.min(list.scrollHeight, 340) + 12;
      if (global.innerHeight - r.bottom < need && r.top > global.innerHeight - r.bottom) wrap.classList.add('fs-up');
      highlight(sel.selectedIndex < 0 ? 0 : sel.selectedIndex, true);
      openDropdown = api;
      try { list.focus({ preventScroll: true }); } catch (e) { list.focus(); }
    }
    function close(refocus) {
      if (list.hidden) return;
      list.hidden = true;
      wrap.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (openDropdown === api) openDropdown = null;
      if (refocus) btn.focus();
    }
    function choose(i) {
      if (i >= 0 && sel.selectedIndex !== i) {
        sel.selectedIndex = i;
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
      sync();
      close(true);
    }
    var api = { wrap: wrap, close: close };

    btn.addEventListener('click', function () { if (list.hidden) open(); else close(true); });
    btn.addEventListener('keydown', function (e) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].indexOf(e.key) > -1) { e.preventDefault(); open(); }
    });
    /* The list sits inside a <label>: cancelling the click keeps the label from re-clicking the button. */
    list.addEventListener('mousedown', function (e) { e.preventDefault(); });
    list.addEventListener('click', function (e) {
      e.preventDefault();
      var it = e.target.closest && e.target.closest('.fs-opt');
      if (it) choose(items.indexOf(it));
    });
    list.addEventListener('mousemove', function (e) {
      var it = e.target.closest && e.target.closest('.fs-opt');
      if (it && items.indexOf(it) !== active) highlight(items.indexOf(it), false);
    });
    list.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'ArrowDown') { e.preventDefault(); highlight(Math.min(active + 1, items.length - 1), true); }
      else if (k === 'ArrowUp') { e.preventDefault(); highlight(Math.max(active - 1, 0), true); }
      else if (k === 'Home' || k === 'PageUp') { e.preventDefault(); highlight(0, true); }
      else if (k === 'End' || k === 'PageDown') { e.preventDefault(); highlight(items.length - 1, true); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(active); }
      else if (k === 'Escape') { e.preventDefault(); close(true); }
      else if (k === 'Tab') { close(false); }
      else if (k.length === 1 && /\S/.test(k)) {
        /* Type the first letters of an item (in the language shown) to jump to it. */
        var now = Date.now();
        typed = (now - typedAt > 700 ? '' : typed) + k.toLowerCase();
        typedAt = now;
        for (var n = 1; n <= items.length; n++) {
          var j = (active + (typed.length > 1 ? 0 : 1) + n - 1) % items.length;
          if (items[j].textContent.trim().toLowerCase().indexOf(typed) === 0) { highlight(j, true); break; }
        }
      }
    });
    sync();
  }

  function render(main) {
    document.title = 'Find my match — UniPath';
    var s = readSaved();
    var countryOpts = '<option value="">All countries</option>' + U.DB.countries.map(function (c) {
      return '<option value="' + esc(c.code) + '"' + (s.country === c.code ? ' selected' : '') + '>' + esc(c.name) + '</option>';
    }).join('');
    var fieldOpts = '<option value="">Any field</option>' + U.DB.fields.map(function (f) {
      return '<option value="' + esc(f.id) + '"' + (s.field === f.id ? ' selected' : '') + '>' + esc(f.label) + '</option>';
    }).join('');
    var curOpts = ['USD', 'CAD', 'EUR', 'GBP', 'JPY', 'KRW'].map(function (c) {
      return '<option value="' + c + '"' + ((s.currency || 'USD') === c ? ' selected' : '') + '>' + c + '</option>';
    }).join('');
    var r = data().rates || {};

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
              '<small class="muted">Historical approximate conversion using ECB reference rates dated <span>' + esc(r.date || '') + '</span><span>. These are not current exchange rates.</span></small></label>' +
            '<label class="match-field"><span id="m-country-l">Country</span><select id="m-country">' + countryOpts + '</select></label>' +
            '<label class="match-field"><span id="m-field-l">Field of study</span><select id="m-field">' + fieldOpts + '</select></label>' +
          '</div>' +
          '<label class="match-check"><input id="m-english" type="checkbox"' + (s.englishOnly === false ? '' : ' checked') + '> <span>Only fields taught fully in English</span></label>' +
        '</div></form>' +
        '<div id="match-out" style="margin-top:26px"></div>' +
      '</div></section>';

    dropdown(document.getElementById('m-country'), countryIcon, 'm-country-l');
    dropdown(document.getElementById('m-field'), fieldIcon, 'm-field-l');
    dropdown(document.getElementById('m-currency'), function () { return ''; }, null, true);
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
    var fieldNote = input.field ? U.unverifiedFieldsHtml(U.DB.universities.filter(function (u) {
      return (!input.country || u.country === input.country) && (!input.englishOnly || u.englishTaught === true);
    }), [input.field], input.englishOnly) : '';
    if (input.ielts === null && input.gpa === null && input.sat === null && input.budget === null) {
      out.innerHTML = input.invalid.length
        ? '<div class="empty-state"><h3>No valid score or budget to compare</h3><p>Correct the fields marked above. A value outside the allowed range is not used.</p></div>'
        : '<div class="empty-state"><h3>Enter at least one score or a budget</h3><p>Results appear as you type.</p></div>';
      return;
    }
    if (!list.length) {
      out.innerHTML = fieldNote + '<div class="empty-state"><h3>No institutions match these filters</h3><p>Try another country or field, or include fields that are not fully English-taught.</p></div>';
      return;
    }

    var rows = list.map(function (u) { return { u: u, r: evaluate(u, input) }; });
    var budgetRank = { fits: 0, 'fits-no-extras': 1, 'fits-billed': 1, 'fits-tuition': 1, 'core-covered': 1, conflict: 2, maybe: 2, none: 3, unknown: 4, over: 5 };
    var entered = [], missing = [];
    (input.ielts !== null ? entered : missing).push('IELTS');
    (input.sat !== null ? entered : missing).push('SAT');
    (input.gpa !== null ? entered : missing).push('GPA');
    var html = '<p class="muted small" style="margin-bottom:6px">' + rows.length + ' institutions compared</p>' +
      fieldNote +
      '<p class="small" style="margin:0 0 18px"><strong>Compared:</strong> <span>' + (entered.length ? entered.join(', ') : 'budget only') + '</span>' +
      (missing.length ? ' · <strong>Not entered, so not compared:</strong> <span>' + missing.join(', ') + '</span>' : '') + '</p>' +
      (input.invalid.length ? '<p class="small warn-text" style="margin:-10px 0 18px">A value outside the allowed range was entered and is not used.</p>' : '');
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
