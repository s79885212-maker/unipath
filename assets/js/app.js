/* ============================================================
   UniPath — application logic
   Plain ES5-compatible browser JS. No build step, no framework.
   Works when opened directly from disk (file://).
   ============================================================ */
(function (global) {
  'use strict';

  var DB = global.UNIPATH || { countries: [], universities: [], fields: [] };
  /* ---- data statuses ----------------------------------------------------
     One vocabulary for every field that can be missing, so "we have not
     read it" is never shown as "the university does not publish it":
       confirmed      — read on an official source
       not-checked    — not read yet, or the page could not be opened
       not-published  — looked for on the official source and not found there
       not-applicable — the field does not apply to this institution or route
       previous-cycle — the only figure available belongs to an earlier cycle
       conflict       — two official sources give different figures
     A missing or unreadable field is always "not-checked" unless the record
     itself states one of the others. */
  var STATUS = {
    'confirmed': 'Confirmed',
    'not-checked': 'Not checked',
    'not-published': 'Not published in the official source checked',
    'not-applicable': 'Not applicable',
    'previous-cycle': 'Data from a previous cycle',
    'conflict': 'Official sources disagree'
  };
  function statusLabel(code) { return STATUS[code] || STATUS['not-checked']; }
  function statusHtml(code) { return '<span class="unknown status-' + (STATUS[code] ? code : 'not-checked') + '">' + statusLabel(code) + '</span>'; }
  var UNKNOWN = '<span class="unknown status-not-checked">Not checked — see the official source</span>';
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

  var CURRENCY_SYMBOL = { USD: '$', JPY: '¥', KRW: '₩', GBP: '£', EUR: '€' };
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

  /* SAT/ACT policy, one shared reading for cards, profile, compare,
     filters and the match page:
       required              — SAT or ACT must be sent
       required-alternatives — testing is required, but other exams
                               (AP, IB, A-Level, national exams) can
                               replace the SAT/ACT in stated cases
       optional              — test-optional
       not-used              — not part of admission (test-blind)
       accepted              — scores are accepted, but whether they are
                               required is not confirmed
       not-applicable        — the admission route does not use the US
                               SAT/ACT categories at all (it selects on
                               national exams, school results or its own
                               assessment); this is a confirmed fact, not
                               an unknown, and it is not test-optional
       unknown               — no confirmed policy
     Unknown is never treated as optional. A record may carry its own
     short `label` when the university's wording needs it. */
  var SAT_POLICIES = ['required', 'required-alternatives', 'optional', 'not-used', 'accepted', 'not-applicable'];
  function satPolicy(u) {
    var p = u.academics && u.academics.sat ? u.academics.sat.policy : null;
    return SAT_POLICIES.indexOf(p) > -1 ? p : 'unknown';
  }
  var SAT_LABELS = {
    'required': 'SAT/ACT required',
    'required-alternatives': 'Testing required — alternatives to SAT/ACT accepted',
    'optional': 'Test-optional',
    'not-used': 'SAT/ACT not used',
    'accepted': 'SAT/ACT accepted — requirement not confirmed',
    'not-applicable': 'SAT/ACT not part of this admission route',
    'unknown': 'SAT/ACT policy not checked'
  };
  function satLabel(u) {
    var t = u.academics && u.academics.sat;
    if (t && has(t.label)) return t.label;
    return SAT_LABELS[satPolicy(u)];
  }
  /* Only a confirmed optional or not-used policy means no SAT/ACT is needed. */
  function satNotRequired(u) {
    var p = satPolicy(u);
    return p === 'optional' || p === 'not-used';
  }
  /* Kind of institution, for the filter and the labels. A record may state
     it in `institutionKind`; otherwise it is read from the descriptive `type`.
       community-college — two-year public college (associate degrees, transfer)
       liberal-arts      — undergraduate-focused liberal arts college
       public            — public or national university
       private           — private university */
  var INSTITUTION_KINDS = {
    'community-college': 'Community college',
    'liberal-arts': 'Liberal arts college',
    'public': 'Public university',
    'private': 'Private university'
  };
  function institutionKind(u) {
    if (u.institutionKind && INSTITUTION_KINDS[u.institutionKind]) return u.institutionKind;
    var t = String(u.type || '');
    if (/community college/i.test(t)) return 'community-college';
    if (/liberal arts/i.test(t)) return 'liberal-arts';
    if (/public|national|state|prefectural|municipal/i.test(t)) return 'public';
    return 'private';
  }
  function isCommunityCollege(u) { return institutionKind(u) === 'community-college'; }
  /* Bachelor's programmes a community college lists in its own catalogue.
     Their existence says nothing about whether an F-1 applicant can enter
     them, so that is a separate, explicitly sourced field:
       bachelorIntl: 'open' | 'restricted' | 'not-stated' */
  function bachelorPrograms(u) { return Array.isArray(u.bachelorPrograms) ? u.bachelorPrograms : []; }
  var BACHELOR_INTL = {
    'open': 'The college states that international (F-1) students can enter these programmes.',
    'restricted': 'The college restricts some or all of these programmes for international (F-1) students.',
    'not-stated': 'The college does not say whether international (F-1) students can enter these programmes. Ask the international office before planning on one.'
  };
  function bachelorIntlText(u) { return BACHELOR_INTL[u.bachelorIntl] || BACHELOR_INTL['not-stated']; }
  /* What kind of route a community college is, from its own record. */
  function ccSummary(u) {
    if (!isCommunityCollege(u)) return null;
    var hasBachelor = degreesOf(u).indexOf('bachelor') > -1;
    return hasBachelor
      ? 'This community college mainly awards associate degrees and certificates, and its catalogue also lists a small number of bachelor’s programmes. Most international students here still study for two years and then apply to transfer to a university; transfer and any aid after it are not guaranteed unless a specific agreement says so.'
      : 'This community college awards associate degrees and certificates; no bachelor’s programme was found in its catalogue when this profile was checked. A bachelor’s degree then means transferring to a four-year institution, and neither the transfer nor any aid after it is guaranteed unless a specific agreement says so.';
  }
  function ccBadge(u) {
    return degreesOf(u).indexOf('bachelor') > -1 ? 'Community college · some bachelor’s programmes' : 'Community college · associate degrees';
  }
  /* Degrees a first-year applicant can enter. Unless a record says otherwise
     the catalogue lists four-year bachelor's routes. */
  var DEGREE_LABELS = { associate: 'Associate degree (2 years)', certificate: 'Certificate', bachelor: 'Bachelor’s degree' };
  function degreesOf(u) { return (u.degrees && u.degrees.length) ? u.degrees : ['bachelor']; }
  function degreesLabel(u) { return degreesOf(u).map(function (d) { return DEGREE_LABELS[d] || d; }).join(', '); }
  function hasIelts(u) { return !!(u.english && u.english.ielts); }
  /* True only when the university itself publishes an IELTS minimum or
     recommended score — a UniPath estimate alone does not count. */
  function ieltsPublished(u) {
    var t = u.english && u.english.ielts;
    return !!t && (has(t.min) || has(t.recommended) || (ieltsVaries(u) && !!(t.profiles && t.profiles.length)));
  }
  /* Requirement set per programme, language profile or band. `profiles` lists
     each published level with its scope, source and check date; `min` is kept
     only when the university itself states a university-wide minimum. */
  function testVaries(t) { return !!(t && t.varies); }
  function ieltsVaries(u) { return testVaries(u.english && u.english.ielts); }
  /* Big label for a varying requirement: by programme (default) or by applicant group. */
  function variesLabel(t) { return t && t.variesBy === 'applicant' ? 'Depends on applicant group' : 'Varies by programme'; }
  function ieltsMin(u) {
    return (u.english && u.english.ielts && has(u.english.ielts.min)) ? u.english.ielts.min : null;
  }
  /* Short IELTS label for cards/compare: minimum, else competitive, else estimate. */
  function ieltsLabel(u) {
    var t = u.english && u.english.ielts;
    if (!t) return null;
    if (testVaries(t)) return has(t.min) ? 'University minimum ' + (typeof t.min === 'number' ? t.min.toFixed(1) : t.min) + ', varies by programme' : variesLabel(t);
    if (has(t.min)) return 'Min ' + (typeof t.min === 'number' && t.min < 10 ? t.min.toFixed(1) : t.min);
    if (has(t.recommended)) return typeof t.recommended === 'number' ? t.recommended + '+ competitive' : String(t.recommended);
    return TEST_STATUS[testStatus(t)];
  }
  /* What is actually known about one English test. A number is never implied
     by an empty field: without a published figure the record must say which
     case it is, and anything unstated counts as not confirmed.
       minimum        — a confirmed minimum
       recommended    — an official recommendation or competitive level
       varies         — set per programme or applicant group
       no-minimum     — accepted, and the university states it sets no minimum
       not-required   — the test is not required of applicants
       not-accepted   — the test is not accepted
       not-confirmed  — acceptance or the requirement was not confirmed */
  var TEST_STATUS = {
    'minimum': 'Confirmed minimum',
    'recommended': 'Official recommendation',
    'varies': 'Varies by programme',
    'no-minimum': 'Accepted — no minimum stated by the university',
    'not-required': 'Not required',
    'not-accepted': 'Not accepted',
    'not-confirmed': 'Not checked'
  };
  function testStatus(t) {
    if (!t) return 'not-confirmed';
    if (t.accepted === false || t.status === 'not-accepted') return 'not-accepted';
    if (testVaries(t)) return 'varies';
    if (has(t.min)) return 'minimum';
    if (has(t.recommended)) return 'recommended';
    return (t.status && TEST_STATUS[t.status]) ? t.status : 'not-confirmed';
  }
  function testStatusLabel(t) { return TEST_STATUS[testStatus(t)]; }
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
    if (testVaries(t)) return [variesLabel(t)];
    if (t.scales && t.scales.length) {
      return t.scales.map(function (sc) {
        var label = TOEFL_PERIOD[sc.period] || sc.period;
        if (sc.accepted === false) return label + ': not accepted';
        var parts = scoreParts(sc, t.lowestLevel);
        return parts ? label + ': ' + parts : label + ': not stated by the source';
      });
    }
    var one = scoreParts(t, t.lowestLevel);
    if (one) return [one.charAt(0).toUpperCase() + one.slice(1)];
    return [];
  }
  /* How a field tag on a record is backed. The Common Data Set reports
     bachelor's degrees by discipline area (data/degrees.js); a tag is
       degrees      — at least one of its areas has degrees conferred
       major        — no degrees in the table, but an official page lists a major
       not-reported — the table has no area for this field (economics is
                      counted inside "Social sciences")
       not-checked  — no degrees table has been read for this institution */
  function fieldCheck(u, tag) {
    var deg = u.degreesByArea, FA = DB.fieldAreas || {}, names = DB.degreeAreas || {};
    var note = (u.fieldNotes || {})[tag] || null;
    if (!deg) return { status: 'not-checked', areas: [], note: note };
    if (!FA[tag]) return { status: 'not-reported', areas: [], note: note };
    var areas = FA[tag].filter(function (k) { return deg.areas[k] > 0; })
      .map(function (k) { return { key: k, label: names[k] || k, value: deg.areas[k] }; });
    return { status: areas.length ? 'degrees' : (note && note.kind === 'major' ? 'major' : 'none'), areas: areas, note: note };
  }
  function degreeValue(deg, v) { return deg.unit === 'count' ? String(v) : (Math.round(v * 100) / 100) + '%'; }
  var FIELD_NOTE_KIND = {
    'minor': 'Minor only',
    'concentration': 'Concentration, not a major',
    'pathway': 'Dual-degree route finished at another institution',
    'major': 'Major listed by the institution'
  };
  /* englishTaught = at least one English-taught bachelor's route exists.
     englishTaughtPrograms = the fields available fully in English (or on an
     official English track). The label spells out which of the two applies. */
  function englishPrograms(u) { return Array.isArray(u.englishTaughtPrograms) ? u.englishTaughtPrograms : []; }
  function englishLabel(u) {
    if (u.englishTaught !== true) return null;
    var en = englishPrograms(u), all = u.programs || [];
    if (en.length && en.length >= all.length) return 'All fields taught in English';
    if (en.length) return 'English-taught: ' + en.length + ' of ' + all.length + ' fields';
    return 'English route — fields not confirmed';
  }
  function fullRide(u) { return u.scholarships && u.scholarships.fullRide ? u.scholarships.fullRide : {}; }
  /* What the largest award actually pays for, read from the itemised coverage
     the record carries — the word "full" alone decides nothing:
       full-ride       — tuition, housing and meals are all stated as covered
       tuition-stipend — tuition is covered and a living stipend is paid, but
                         housing and meals are not provided as such
       full-tuition    — tuition only (other costs not covered or not stated)
       full-funding    — the university describes full funding or meeting full
                         need, without an itemised list of what is covered
     "Meets full demonstrated need" is a separate, need-based promise and is
     never folded into these. */
  function awardKind(u) {
    var fr = fullRide(u);
    if (fr.available !== true) return null;
    var c = fr.covers || {};
    if (c.tuition === true && c.housing === true && c.meals === true) return 'full-ride';
    if (c.tuition === true && c.stipend === true) return 'tuition-stipend';
    if (c.tuition === true) return 'full-tuition';
    return 'full-funding';
  }
  var AWARD_LABEL = {
    'full-ride': 'Full ride: tuition, housing and meals',
    'tuition-stipend': 'Full tuition + living stipend',
    'full-tuition': 'Full tuition only',
    'full-funding': 'Full funding possible — coverage not itemised'
  };
  function awardLabel(u) { var k = awardKind(u); return k ? AWARD_LABEL[k] : null; }
  function meritList(u) { return (u.scholarships && u.scholarships.merit) || []; }
  function needBased(u) { return (u.scholarships && u.scholarships.needBased) || {}; }

  function feeAmount(u) {
    var f = u.admissions && u.admissions.applicationFee;
    return f && has(f.amount) ? f.amount : null;
  }
  /* Whether international first-year applicants can get the fee waived:
     true / false only when the official source says so, otherwise null.
     The explanatory text lives separately in `waiver` — its mere presence
     never implies a waiver. No fee at all (amount 0) is not a waiver. */
  function feeWaiver(u) {
    var f = u.admissions && u.admissions.applicationFee;
    if (!f || f.waiverAvailableToInternational === undefined) return null;
    return f.waiverAvailableToInternational;
  }
  function feeWaiverLabel(u) {
    var w = feeWaiver(u);
    return w === true ? 'Available to international applicants'
      : w === false ? 'Not available to international applicants'
      : 'Not checked';
  }
  /* Status of the application fee. A number (including a confirmed 0) is
     confirmed; anything else is not checked unless the record says otherwise. */
  function feeStatus(u) {
    var f = u.admissions && u.admissions.applicationFee;
    if (!f) return 'not-checked';
    if (typeof f.amount === 'number') return STATUS[f.status] ? f.status : 'confirmed';
    return STATUS[f.status] && f.status !== 'confirmed' ? f.status : 'not-checked';
  }
  function feeLabel(u) {
    var f = u.admissions && u.admissions.applicationFee;
    if (f && f.amount === 0) return 'No application fee';
    if (!f || !has(f.amount)) return statusHtml(feeStatus(u));
    return money(f.amount, f.currency || 'USD');
  }
  /* Deadlines may carry { entryTerm, dateISO, displayDate } in addition to the
     older { date }. A year is shown only when the source gives one; otherwise
     the date is flagged as not confirmed for the current cycle. `iso` is kept
     for sorting by the nearest deadline — from dateISO, or read from a single
     "15 October 2026"-style date. A past cycle's date is never rolled forward. */
  var MONTH_NUM = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7,
    august: 8, september: 9, october: 10, november: 11, december: 12 };
  function deadlineInfo(d) {
    var text = has(d.displayDate) ? String(d.displayDate) : (has(d.date) ? String(d.date) : '');
    var iso = has(d.dateISO) ? String(d.dateISO) : null;
    if (!iso && !/–|\s-\s/.test(text)) {   /* a window ("8 Jan – 10 Feb") is not one date */
      var m = /^\s*(\d{1,2}) ([A-Za-z]+) (\d{4})\b/.exec(text);
      var mon = m && MONTH_NUM[m[2].toLowerCase()];
      if (mon) iso = m[3] + '-' + (mon < 10 ? '0' : '') + mon + '-' + (m[1].length < 2 ? '0' : '') + m[1];
    }
    return {
      name: d.name, note: d.note, text: text, iso: iso,
      term: has(d.entryTerm) ? String(d.entryTerm) : null
    };
  }
  /* Plain-HTML block for one deadline's date, term and status (escaped). The
     status comes only from the record's own verified `status`; a year in the
     date text proves nothing about the current cycle. */
  function deadlineHtml(d) {
    var x = deadlineInfo(d);
    var st = roundStatus(d), state = roundState(d);
    return '<strong>' + esc(x.text || '—') + '</strong>' +
      (x.term ? '<br><span class="small muted">Entry term: <span>' + esc(x.term) + '</span></span>' : '') +
      '<br><span class="small ' + (st === 'confirmed' ? 'muted' : 'warn-text') + '">' + esc(ROUND_STATUS[st]) + '</span>' +
      (state ? ' <span class="small muted">· ' + esc(ROUND_STATE[state]) + '</span>' : '');
  }
  /* ---- application rounds -----------------------------------------------
     A round carries its own intake, conditions, source and confirmation
     status, so a date from an earlier cycle can never look like a confirmed
     date for the next one. */
  var ROUND_STATUS = {
    'confirmed': 'Confirmed for this cycle',
    'previous-cycle': 'Previous cycle — not yet republished',
    'not-confirmed': 'Deadline for the current intake not confirmed'
  };
  /* Confirmation comes only from an explicit, verified status on the record. */
  function roundStatus(d) {
    return d.status && ROUND_STATUS[d.status] ? d.status : 'not-confirmed';
  }
  /* Where the date stands today — kept apart from confirmation, because an
     officially confirmed date can already have passed. Only a confirmed date
     can be upcoming or closed; anything else is unknown for this cycle. */
  var ROUND_STATE = { upcoming: 'Upcoming', closed: 'Closed', varies: 'Rolling / varies', unknown: 'Not known for this cycle' };
  /* When a deadline actually ends. With a published time and zone the exact
     instant is used; with only a date, the deadline counts as passed only once
     that day has ended everywhere on Earth (UTC−12), so a date is never closed
     early on the strength of the device's own calendar. */
  var FIXED_ZONES = { 'JST': 540, 'KST': 540, 'Japan time': 540, 'UTC': 0, 'GMT': 0 };
  var IANA_ZONES = { 'UK time': 'Europe/London', 'CET': 'Europe/Berlin', 'CEST': 'Europe/Berlin', 'German time': 'Europe/Berlin',
    'ET': 'America/New_York', 'Eastern Time': 'America/New_York', 'CT': 'America/Chicago', 'Central Time': 'America/Chicago',
    'MT': 'America/Denver', 'PT': 'America/Los_Angeles', 'Pacific Time': 'America/Los_Angeles' };
  /* Offset of an IANA zone from UTC, in minutes, at a given instant. */
  function zoneOffset(iana, utcMs) {
    try {
      var f = new Intl.DateTimeFormat('en-US', { timeZone: iana, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      var p = {}; f.formatToParts(new Date(utcMs)).forEach(function (x) { p[x.type] = x.value; });
      var asUtc = Date.UTC(+p.year, +p.month - 1, +p.day, (+p.hour) % 24, +p.minute, +p.second);
      return Math.round((asUtc - utcMs) / 60000);
    } catch (e) { return null; }
  }
  function deadlineEnd(d) {
    var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(String(d.dateISO || ''));
    if (!m) return null;
    var y = +m[1], mo = +m[2] - 1, day = +m[3];
    var t = /^(\d{1,2}):(\d\d)$/.exec(String(d.time || ''));
    var hh = t ? +t[1] : 23, mm = t ? +t[2] : 59, ss = t ? 0 : 59;
    var zone = d.timezone;
    var naive = Date.UTC(y, mo, day, hh, mm, ss);
    if (has(zone) && FIXED_ZONES.hasOwnProperty(zone)) return { at: naive - FIXED_ZONES[zone] * 60000, precise: !!t };
    if (has(zone) && IANA_ZONES[zone]) {
      var off = zoneOffset(IANA_ZONES[zone], naive);
      if (off !== null) return { at: naive - off * 60000, precise: !!t };
    }
    if (has(zone) && /local time/i.test(zone)) return { at: new Date(y, mo, day, hh, mm, ss).getTime(), precise: !!t };
    /* No usable zone: end of that calendar day at UTC−12. */
    return { at: Date.UTC(y, mo, day, 23, 59, 59) + 12 * 3600000, precise: false };
  }
  function deadlinePassed(d, now) {
    var e = deadlineEnd(d);
    return e ? (now || Date.now()) > e.at : false;
  }
  function roundState(d) {
    if (d.kind === 'notice') return null;
    if (roundStatus(d) !== 'confirmed') return 'unknown';
    if (d.kind === 'rolling') return 'varies';
    if (!has(d.dateISO)) return isApplicationDeadline(d) ? 'varies' : null;
    return deadlinePassed(d) ? 'closed' : 'upcoming';
  }
  /* Application deadlines are kept apart from the other dates of a cycle, so
     an opening date, an interview or a decision date can never be taken for
     the next deadline to apply. */
  var APPLICATION_KINDS = { ED: 'ED', ED2: 'ED II', EA: 'EA', REA: 'REA', RD: 'RD', rolling: 'Rolling', priority: 'Priority',
    'ucas-main': 'UCAS', 'ucas-october': 'UCAS', 'round-1': 'Round 1', 'round-2': 'Round 2', 'round-3': 'Round 3',
    'round-4': 'Round 4', 'round-5': 'Round 5', 'round-6': 'Round 6', regular: '',
    round: '', 'application-window': '', intake: '' };
  var OTHER_DATE_KINDS = { opens: 'Applications open', documents: 'Documents and tests', portfolio: 'Portfolio',
    test: 'Admissions test', interview: 'Interview', aid: 'Financial aid', scholarship: 'Scholarship',
    decision: 'Decision', reply: 'Reply to offer', notice: 'Notice' };
  function isApplicationDeadline(d) { return !d.kind || APPLICATION_KINDS.hasOwnProperty(d.kind); }
  function otherDateLabel(d) { return OTHER_DATE_KINDS[d.kind] || 'Other date'; }
  function roundStateLabel(d) { var s = roundState(d); return s ? ROUND_STATE[s] : null; }
  /* ---- intakes ----------------------------------------------------------
     A deadline belongs to the intake its source names. Intakes are reduced to
     a season and a year so that "Autumn", "Fall", "September" and a German
     winter semester land in the same choice, and a spring date is never shown
     to someone looking at autumn entry. A round may serve several intakes
     ("Spring or Fall 2027"). Nothing is guessed: a round without a stated
     term or year belongs to no intake. */
  var INTAKE_KEY = 'unipath.intake.v1';
  var SEASON_ORDER = { winter: 0, spring: 1, summer: 2, fall: 3 };
  var SEASON_LABEL = { winter: 'Winter', spring: 'Spring', summer: 'Summer', fall: 'Fall' };
  function seasonsOf(term, countryCode) {
    var t = String(term || '').toLowerCase(), out = [];
    function add(s) { if (out.indexOf(s) < 0) out.push(s); }
    if (/autumn|fall|september|october|august/.test(t)) add('fall');
    if (/spring|march|april|may|february/.test(t)) add('spring');
    /* In Germany the winter semester starts in October and the summer
       semester in April; elsewhere winter and summer are short sessions. */
    if (/winter|january/.test(t)) add(countryCode === 'de' ? 'fall' : 'winter');
    if (/summer|june|july/.test(t)) add(countryCode === 'de' ? 'spring' : 'summer');
    return out;
  }
  function intakesOf(d, u) {
    var y = /(20\d\d)/.exec(String(d.entryYear || ''));
    if (!y) return [];
    return seasonsOf(d.entryTerm, u && u.country).map(function (s) { return s + '-' + y[1]; });
  }
  function intakeLabel(key) {
    if (!key || key === 'all') return 'Any intake';
    var p = String(key).split('-');
    return (SEASON_LABEL[p[0]] || p[0]) + ' ' + p[1];
  }
  /* Intakes that have at least one confirmed application deadline somewhere
     in the database, in calendar order. */
  var intakeListCache = null;
  function intakeList() {
    if (intakeListCache) return intakeListCache;
    var seen = {};
    DB.universities.forEach(function (u) {
      roundsOf(u).forEach(function (d) {
        if (!isApplicationDeadline(d) || roundStatus(d) !== 'confirmed') return;
        intakesOf(d, u).forEach(function (k) { seen[k] = (seen[k] || 0) + 1; });
      });
    });
    intakeListCache = Object.keys(seen).sort(function (a, b) {
      var pa = a.split('-'), pb = b.split('-');
      return (pa[1] - pb[1]) || (SEASON_ORDER[pa[0]] - SEASON_ORDER[pb[0]]);
    });
    return intakeListCache;
  }
  function intakeGet() {
    try {
      var v = global.localStorage.getItem(INTAKE_KEY);
      return v && intakeList().indexOf(v) > -1 ? v : 'all';
    } catch (e) { return 'all'; }
  }
  function intakeSet(v) {
    try { global.localStorage.setItem(INTAKE_KEY, v); } catch (e) {}
    document.dispatchEvent(new CustomEvent('unipath:intake'));
  }
  function intakeSelectHtml(id) {
    var cur = intakeGet();
    return '<label class="intake-pick"><span>Intake</span> <select data-intake-select' + (id ? ' id="' + id + '"' : '') + '>' +
      '<option value="all"' + (cur === 'all' ? ' selected' : '') + '>Any intake</option>' +
      intakeList().map(function (k) {
        return '<option value="' + k + '"' + (cur === k ? ' selected' : '') + '>' + esc(intakeLabel(k)) + '</option>';
      }).join('') + '</select></label>';
  }
  function roundInIntake(d, u, intake) {
    return !intake || intake === 'all' || intakesOf(d, u).indexOf(intake) > -1;
  }
  /* Nearest confirmed, still-open application deadline for the chosen intake
     (the saved choice unless one is passed), or a summary state. 'none' means
     the profile lists no application round for that intake at all. */
  function nextDeadline(u, intake) {
    if (intake === undefined) intake = intakeGet();
    var all = roundsOf(u).filter(isApplicationDeadline);
    var apps = all.filter(function (d) { return roundInIntake(d, u, intake); });
    if (!apps.length && all.length && intake !== 'all') return { state: 'none', intake: intake };
    var open = apps.filter(function (d) { return roundState(d) === 'upcoming'; })
      .sort(function (a, b) { return String(a.dateISO).localeCompare(String(b.dateISO)); });
    if (open.length) return { state: 'upcoming', round: open[0], label: APPLICATION_KINDS[open[0].kind] || '' };
    if (apps.some(function (d) { return roundState(d) === 'varies'; })) return { state: 'varies' };
    if (apps.some(function (d) { return roundState(d) === 'closed'; })) return { state: 'closed' };
    return { state: 'unknown' };
  }
  function roundStatusLabel(d) { return ROUND_STATUS[roundStatus(d)]; }
  function roundWhen(d) {
    var x = deadlineInfo(d);
    var out = x.text || '—';
    /* Time and zone are added only to a real date, and only once. */
    var dated = /\d/.test(out);
    if (dated && has(d.time) && out.indexOf(d.time) < 0) out += ', ' + d.time;
    if (dated && has(d.timezone) && out.indexOf(d.timezone) < 0) out += ' ' + d.timezone;
    return out;
  }
  function roundIntake(d) {
    var parts = [];
    if (has(d.entryTerm)) parts.push(String(d.entryTerm));
    if (has(d.entryYear)) parts.push(String(d.entryYear));
    return parts.length ? parts.join(' ') : null;
  }
  function roundConditions(d) {
    var parts = [];
    if (d.binding === true) parts.push('Binding — if admitted you must enrol and withdraw other applications');
    if (d.binding === false) parts.push('Not binding');
    if (has(d.appliesTo)) parts.push(d.appliesTo);
    if (has(d.conditions)) parts.push(d.conditions);
    if (has(d.note)) parts.push(d.note);
    return parts;
  }
  function roundsOf(u) {
    return (u.admissions && u.admissions.deadlines) || [];
  }

  function firstDeadline(u) {
    var n = nextDeadline(u);
    return n.state === 'upcoming' ? n.round : null;
  }
  /* Short text for cards: the next confirmed deadline, or what is known. */
  function deadlineCardText(u) {
    var n = nextDeadline(u);
    if (n.state === 'upcoming') return (n.round.date || n.round.dateISO) + (n.label ? ' · ' + n.label : '');
    if (n.state === 'varies') return 'Rolling / varies';
    if (n.state === 'closed') return 'Confirmed dates have passed';
    if (n.state === 'none') return 'No round listed for this intake';
    return 'Not confirmed for this cycle';
  }
  /* Status of the cost figures. Figures on the record are confirmed. With
     none, the record's own status decides; `published: false` in older
     records only ever meant "not captured", so it reads as not checked. */
  function costStatus(u) {
    var c = u.costs || {};
    if (STATUS[c.status]) return c.status;
    if (costFigures(u).length || has(c.headline) && costBreak(u) && costBreak(u).published !== false) return 'confirmed';
    if (has(c.headline) && !costBreak(u)) return 'confirmed';
    return 'not-checked';
  }
  /* Short tuition text for cards: the tuition figure, else the university's
     own published summary line, else the status. Returns { text, known }. */
  function cardTuition(u) {
    var t = tuitionText(u);
    if (t) return { text: t, suffix: perPeriod(u), known: true };
    if (costStatus(u) === 'confirmed' && has(u.costs && u.costs.headline)) return { text: u.costs.headline, suffix: '', known: true };
    return { text: statusLabel(costStatus(u)), suffix: '', known: false };
  }
  function costHeadline(u) {
    return (u.costs && has(u.costs.headline)) ? u.costs.headline : null;
  }

  /* ---- structured costs -------------------------------------------------
     tuition, charges billed by the university and the full cost of
     attendance are different figures, so each is kept separate and is only
     shown when the university actually publishes it. */
  function costBreak(u) { return (u.costs && u.costs.breakdown) || null; }
  function costCurrency(u) { return (u.costs && u.costs.currency) || null; }
  function costYear(u) { return (u.costs && has(u.costs.academicYear)) ? u.costs.academicYear : null; }
  function costPeriod(u) { var b = costBreak(u); return (b && b.period === 'semester') ? 'semester' : 'year'; }
  /* The suffix is dropped when the tuition text already names its own period,
     so a figure like '\u20ac5,100 per semester' is not printed twice. */
  var STATES_PERIOD = /\b(?:per|a|each)\s+(?:year|semester|month)\b|whole programme|for the programme|across the programme|across six semesters/i;
  function perPeriod(u, text) {
    if (text == null) text = tuitionText(u);
    if (text && STATES_PERIOD.test(text)) return '';
    return costPeriod(u) === 'semester' ? ' per semester' : ' per year';
  }

  function tuitionAmount(u) {
    var b = costBreak(u);
    return b && typeof b.tuition === 'number' ? b.tuition : null;
  }
  function tuitionText(u) {
    var b = costBreak(u);
    if (!b) return null;
    if (has(b.tuitionText)) return b.tuitionText;
    if (typeof b.tuition === 'number') return b.tuition === 0 ? 'No tuition fee' : money(b.tuition, costCurrency(u));
    return null;
  }
  function billedAmount(u) {
    var b = costBreak(u);
    return b && typeof b.billed === 'number' ? b.billed : null;
  }
  function billedLabel(u) {
    var b = costBreak(u);
    return b && b.comprehensive === true ? 'Comprehensive fee' : 'Billed by the university';
  }
  function budgetAmount(u) {
    var b = costBreak(u);
    return b && typeof b.budget === 'number' ? b.budget : null;
  }
  function budgetText(u) {
    var b = costBreak(u);
    if (!b) return null;
    if (has(b.budgetText)) return b.budgetText;
    return typeof b.budget === 'number' ? money(b.budget, costCurrency(u)) : null;
  }
  function costIncludes(u) {
    var b = costBreak(u);
    return b && has(b.includes) ? b.includes : null;
  }
  /* The figures a university publishes, in order, each with its own meaning. */
  function costFigures(u) {
    var rows = [];
    var t = tuitionText(u);
    if (t) rows.push({ id: 'tuition', label: 'Tuition', text: t, amount: tuitionAmount(u) });
    if (billedAmount(u) !== null) {
      rows.push({ id: 'billed', label: billedLabel(u), text: money(billedAmount(u), costCurrency(u)), amount: billedAmount(u) });
    }
    var bt = budgetText(u);
    if (bt) rows.push({ id: 'budget', label: 'Full budget (cost of attendance)', text: bt, amount: budgetAmount(u) });
    return rows;
  }
  var COST_SOURCE_RE = [/tuition|cost of attendance|comprehensive fee|billing|bursar/i, /cost|fees|expens/i, /financial|aid|scholarship/i];
  function costSource(u) {
    var list = u.sources || [];
    for (var r = 0; r < COST_SOURCE_RE.length; r++) {
      for (var i = 0; i < list.length; i++) if (COST_SOURCE_RE[r].test(list[i].label)) return list[i];
    }
    return null;
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
      hasIelts(u) ? 'IELTS ' + (ieltsVaries(u) ? variesLabel(u.english.ielts).toLowerCase() : (ieltsMin(u) || (ieltsPublished(u) ? u.english.ielts.recommended : 'accepted'))) : '',
      toeflMin(u) ? 'TOEFL ' + toeflMin(u) : '',
      u.englishTaught === true ? 'English-taught english taught' : '',
      awardKind(u) === 'full-ride' ? 'full ride full scholarship full funding' : awardKind(u) ? 'full tuition scholarship full funding' : '',
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
      if (awardKind(u)) facets.push(AWARD_LABEL[awardKind(u)], 'Full scholarship');
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
        { id: 'full-ride', label: 'Full ride: tuition, housing and meals covered', test: function (u) { return awardKind(u) === 'full-ride'; } },
        { id: 'tuition-stipend', label: 'Full tuition plus a living stipend', test: function (u) { return awardKind(u) === 'tuition-stipend'; } },
        { id: 'full-ride-intl', label: 'Any full-level award open to internationals', test: function (u) { return fullRide(u).available === true && fullRide(u).internationalEligible === true; } },
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
        { id: 'sat-alternatives', label: 'Testing required, alternatives accepted', test: function (u) { return satPolicy(u) === 'required-alternatives'; } },
        { id: 'sat-optional', label: 'SAT/ACT optional', test: function (u) { return satPolicy(u) === 'optional'; } },
        { id: 'sat-none', label: 'SAT/ACT not required', test: function (u) { return satNotRequired(u); } },
        { id: 'sat-na', label: 'SAT/ACT not part of the admission route', test: function (u) { return satPolicy(u) === 'not-applicable'; } },
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
        { id: 'waiver', label: 'Fee waiver available', test: function (u) { return feeWaiver(u) === true; } }
      ]
    },
    {
      id: 'institution', title: 'Institution type',
      options: Object.keys(INSTITUTION_KINDS).map(function (k) {
        return { id: k, label: INSTITUTION_KINDS[k], test: function (u) { return institutionKind(u) === k; } };
      })
    },
    {
      id: 'degree', title: 'Degree level',
      options: [
        { id: 'bachelor', label: 'Bachelor’s degree offered', test: function (u) { return degreesOf(u).indexOf('bachelor') > -1; } },
        { id: 'associate', label: 'Associate degree offered', test: function (u) { return degreesOf(u).indexOf('associate') > -1; } },
        { id: 'certificate', label: 'Certificate', test: function (u) { return degreesOf(u).indexOf('certificate') > -1; } }
      ]
    },
    {
      id: 'field', title: 'Field of study',
      options: DB.fields.map(function (f) {
        /* With "English-taught degree available" also selected, the field must be
           one the university teaches fully in English (englishTaughtPrograms),
           not merely one of its fields plus any English programme elsewhere. */
        return { id: f.id, label: f.icon + ' ' + f.label, test: function (u, selected) {
          var inEnglish = selected && selected.language && selected.language.indexOf('english-yes') > -1;
          var list = inEnglish ? (u.englishTaughtPrograms || []) : (u.programs || []);
          return list.indexOf(f.id) > -1;
        } };
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
          return o ? o.test(u, selected) : true;
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

  /* ---------------- saved institutions ----------------
     Kept in this browser only (localStorage); nothing is sent anywhere and
     nothing syncs between devices. */
  var SAVED_KEY = 'unipath.saved.v1';
  function savedGet() {
    try {
      var arr = JSON.parse(global.localStorage.getItem(SAVED_KEY) || '[]');
      return Array.isArray(arr) ? arr.filter(uniById) : [];
    } catch (e) { return []; }
  }
  function savedHas(id) { return savedGet().indexOf(id) > -1; }
  function savedToggle(id) {
    var arr = savedGet(), i = arr.indexOf(id);
    if (i > -1) arr.splice(i, 1); else arr.push(id);
    try { global.localStorage.setItem(SAVED_KEY, JSON.stringify(arr)); } catch (e) { return savedHas(id); }
    document.dispatchEvent(new CustomEvent('unipath:saved'));
    return arr.indexOf(id) > -1;
  }
  function savedButton(u, cls) {
    var on = savedHas(u.id);
    return '<button class="' + (cls || 'btn btn-ghost btn-sm') + ' save-toggle" type="button" data-save="' + esc(u.id) + '" aria-pressed="' + (on ? 'true' : 'false') + '">' +
      (on ? '★ Saved' : '☆ Save') + '</button>';
  }

  /* ---------------- shared chrome ---------------- */

  var NAV = [
    { href: '#/', label: 'Home', key: 'home' },
    { href: '#/countries', label: 'Countries', key: 'countries' },
    { href: '#/universities', label: 'Universities &amp; colleges', key: 'universities' },
    { href: '#/scholarships', label: 'Scholarships', key: 'scholarships' },
    { href: '#/news', label: 'Admissions updates', key: 'news' },
    { href: '#/match', label: 'Find my match', key: 'match' },
    { href: '#/compare', label: 'Compare', key: 'compare' },
    { href: '#/saved', label: 'Saved', key: 'saved' },
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
              '<li><a href="#/universities">All universities &amp; colleges</a></li>' +
              '<li><a href="#/scholarships">Scholarships</a></li>' +
              '<li><a href="#/match">Find my match</a></li>' +
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
            '<span>' + DB.universities.length + ' universities &amp; colleges · ' + DB.countries.length + ' countries</span>' +
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
    /* The initials sit underneath; if the photo fails to load it is removed
       and the placeholder shows through, so a card never ends up empty. */
    var fallback = '<span class="media-mono">' + esc(b.initials || displayName(u).slice(0, 3)) + '</span>' +
      '<span class="media-note">Photo not available</span>';
    var inner = u.photos && u.photos.main
      ? fallback + '<img src="' + esc(u.photos.thumb || u.photos.main) + '" alt="' + esc(u.name) + ' campus" loading="lazy" decoding="async" width="560" height="350" onerror="this.remove()">'
      : fallback;
    return '<div class="media ' + (extraClass || '') + '" ' + style + ' aria-hidden="true">' + inner + '</div>';
  }

  function scholarBadge(u) {
    if (fullRide(u).available === true && fullRide(u).internationalEligible === true) {
      return '<span class="badge badge-ok">★ <span>' + esc(awardLabel(u)) + '</span></span>';
    }
    if (needBased(u).meetsFullNeed === true) {
      return '<span class="badge badge-ok">Meets full need</span>';
    }
    if (meritList(u).length) {
      return '<span class="badge badge-accent">' + meritList(u).length + ' merit scholarship' + (meritList(u).length > 1 ? 's' : '') + '</span>';
    }
    return '<span class="badge">Aid not checked</span>';
  }

  function uniCard(u) {
    var c = country(u.country);
    var dl = nextDeadline(u);
    return '' +
      '<article class="card card-link uni-card">' +
        '<button class="compare-toggle" type="button" data-compare="' + esc(u.id) + '" aria-pressed="' + (compareHas(u.id) ? 'true' : 'false') + '">' +
          (compareHas(u.id) ? '✓ Comparing' : '+ Compare') + '</button>' +
        mediaBlock(u) +
        '<div class="card-body">' +
          '<div class="loc">' + c.flag + ' <span>' + esc(u.city) + '</span>, <span>' + esc(c.name) + '</span></div>' +
          '<h3><a href="' + uniUrl(u) + '">' + esc(u.name) + '</a></h3>' +
          '<div class="pill-row">' + (isCommunityCollege(u) ? '<span class="badge badge-flat">' + esc(ccBadge(u)) + '</span>' : '') + scholarBadge(u) +
            (englishLabel(u) ? '<span class="badge badge-info">' + esc(englishLabel(u)) + '</span>' : '') +
          '</div>' +
          '<dl class="uni-facts">' +
            '<div><dt>Tuition</dt><dd>' + (cardTuition(u).known
              ? esc(cardTuition(u).text) + '<span class="small muted">' + esc(cardTuition(u).suffix) + '</span>'
              : '<span class="unknown">' + esc(cardTuition(u).text) + '</span>') + '</dd></div>' +
            '<div><dt>Testing</dt><dd>' + esc(satLabel(u)) + '</dd></div>' +
            '<div><dt>IELTS</dt><dd>' + (ieltsLabel(u) ? esc(ieltsLabel(u)) : '<span class="unknown">Not checked</span>') + '</dd></div>' +
            '<div><dt>Next deadline</dt><dd>' + (dl.state === 'upcoming' ? esc(deadlineCardText(u))
              : '<span class="unknown">' + esc(deadlineCardText(u)) + '</span>') + '</dd></div>' +
          '</dl>' +
        '</div>' +
        '<div class="uni-card-actions">' +
          '<a class="btn btn-primary btn-sm" href="' + uniUrl(u) + '">View profile</a>' +
          savedButton(u) +
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
            '<div><b>' + n + '</b><span>Universities &amp; colleges listed</span></div>' +
            '<div><b>' + c.currency + '</b><span>Currency</span></div>' +
          '</div>' +
          '<a class="btn btn-primary btn-block card-cover-link" href="#/country/' + c.code + '">Explore universities &amp; colleges</a>' +
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
        if (links && global.matchMedia('(max-width: 1180px)').matches) links.hidden = open;
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

      var sv = t.closest ? t.closest('[data-save]') : null;
      if (sv) {
        e.preventDefault();
        var sid = sv.getAttribute('data-save');
        var saved = savedToggle(sid);
        document.querySelectorAll('[data-save="' + sid + '"]').forEach(function (b) {
          b.setAttribute('aria-pressed', saved ? 'true' : 'false');
          b.textContent = saved ? '★ Saved' : '☆ Save';
        });
        return;
      }

      var rm = t.closest ? t.closest('[data-tray-remove]') : null;
      if (rm) { compareToggle(rm.getAttribute('data-tray-remove')); location.reload(); return; }
      if (t.closest && t.closest('[data-tray-clear]')) { compareClear(); location.reload(); return; }
    });

    document.addEventListener('change', function (e) {
      var t = e.target;
      if (t && t.matches && t.matches('[data-intake-select]')) intakeSet(t.value);
    });

    function syncNav() {
      var links = document.querySelector('[data-nav-links]');
      if (!links) return;
      links.hidden = global.matchMedia('(max-width: 1180px)').matches &&
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

  global.UP = { fieldCheck: fieldCheck, degreeValue: degreeValue, FIELD_NOTE_KIND: FIELD_NOTE_KIND,
    DB: DB, esc: esc, has: has, or: or, orRaw: orRaw, qs: qs, money: money, el: el, UNKNOWN: UNKNOWN,
    STATUS: STATUS, statusLabel: statusLabel, statusHtml: statusHtml, feeStatus: feeStatus, costStatus: costStatus, cardTuition: cardTuition,
    DISCLAIMER: DISCLAIMER,
    country: country, field: field, uniById: uniById, unisByCountry: unisByCountry,
    displayName: displayName, uniUrl: uniUrl,
    testStatus: testStatus, testStatusLabel: testStatusLabel,
    institutionKind: institutionKind, institutionKindLabel: function (u) { return INSTITUTION_KINDS[institutionKind(u)]; }, isCommunityCollege: isCommunityCollege, degreesOf: degreesOf, degreesLabel: degreesLabel,
    satPolicy: satPolicy, satLabel: satLabel, satNotRequired: satNotRequired, hasIelts: hasIelts, ieltsPublished: ieltsPublished, englishPrograms: englishPrograms, englishLabel: englishLabel, ieltsMin: ieltsMin, ieltsVaries: ieltsVaries, testVaries: testVaries, variesLabel: variesLabel, toeflLines: toeflLines, ieltsLabel: ieltsLabel, statsOf: statsOf, toeflMin: toeflMin,
    fullRide: fullRide, awardKind: awardKind, awardLabel: awardLabel, meritList: meritList, needBased: needBased,
    feeAmount: feeAmount, feeWaiver: feeWaiver, feeWaiverLabel: feeWaiverLabel, feeLabel: feeLabel,
    firstDeadline: firstDeadline, deadlineInfo: deadlineInfo, deadlineHtml: deadlineHtml, nextDeadline: nextDeadline, deadlineCardText: deadlineCardText,
    deadlinePassed: deadlinePassed, deadlineEnd: deadlineEnd, roundState: roundState, roundStateLabel: roundStateLabel, isApplicationDeadline: isApplicationDeadline, otherDateLabel: otherDateLabel,
    roundStatus: roundStatus, roundStatusLabel: roundStatusLabel, roundWhen: roundWhen, roundIntake: roundIntake,
    roundConditions: roundConditions, roundsOf: roundsOf, costHeadline: costHeadline, totalCostText: totalCostText,
    costBreak: costBreak, costCurrency: costCurrency, costYear: costYear, costPeriod: costPeriod, perPeriod: perPeriod,
    tuitionAmount: tuitionAmount, tuitionText: tuitionText, billedAmount: billedAmount, billedLabel: billedLabel,
    budgetAmount: budgetAmount, budgetText: budgetText, costIncludes: costIncludes, costFigures: costFigures, costSource: costSource,
    search: search, FILTER_GROUPS: FILTER_GROUPS, applyFilters: applyFilters, optionById: optionById,
    compareGet: compareGet, compareSet: compareSet, compareHas: compareHas, compareToggle: compareToggle, compareClear: compareClear,
    COMPARE_MAX: COMPARE_MAX,
    intakesOf: intakesOf, intakeLabel: intakeLabel, intakeList: intakeList, intakeGet: intakeGet, intakeSet: intakeSet,
    intakeSelectHtml: intakeSelectHtml, roundInIntake: roundInIntake, seasonsOf: seasonsOf,
    bachelorPrograms: bachelorPrograms, bachelorIntlText: bachelorIntlText, ccSummary: ccSummary, ccBadge: ccBadge,
    savedGet: savedGet, savedHas: savedHas, savedToggle: savedToggle, savedButton: savedButton,
    APPLICATION_KINDS: APPLICATION_KINDS,
    setActiveNav: setActiveNav, renderTray: renderTray, wireSearchBox: wireSearchBox,
    uniCard: uniCard, countryCard: countryCard, mediaBlock: mediaBlock, scholarBadge: scholarBadge,
    mount: mount
  };
})(window);
