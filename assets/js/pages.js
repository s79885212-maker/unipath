/* ============================================================
   UniPath — page renderers
   ============================================================ */
(function (global) {
  'use strict';
  var U = global.UP;
  var esc = U.esc, has = U.has, or = U.or, UNKNOWN = U.UNKNOWN;

  function verifyBar(u) {
    return '<div class="verify-bar">' +
      '<span>🔎 <b>Last verified:</b> ' + (has(u.lastVerified) ? esc(u.lastVerified) : 'not yet verified') + '</span>' +
      '<span><b>Sources:</b> ' + (u.sources || []).length + ' official page' + ((u.sources || []).length === 1 ? '' : 's') + '</span>' +
      '<span>Always confirm on the university’s own website before applying.</span>' +
      '</div>';
  }

  function list(items) {
    if (!has(items)) return UNKNOWN;
    return '<ul class="stack" style="margin:0;padding-left:1.1em">' +
      items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }

  function coverRow(covers) {
    var map = [
      ['tuition', 'Tuition'], ['housing', 'Housing'], ['meals', 'Meals'],
      ['insurance', 'Health insurance'], ['books', 'Books & other expenses'], ['stipend', 'Living stipend']
    ];
    return '<div class="covers">' + map.filter(function (m) {
      /* A stipend is listed only where the record states one way or the other. */
      return m[0] !== 'stipend' || (covers && covers.stipend !== undefined && covers.stipend !== null);
    }).map(function (m) {
      var v = covers ? covers[m[0]] : null;
      var cls = v === true ? 'cover-yes' : v === false ? 'cover-no' : 'cover-unk';
      var mark = v === true ? '✓ ' : v === false ? '✕ ' : '? ';
      return '<span class="cover-item ' + cls + '">' + mark + esc(m[1]) + '</span>';
    }).join('') + '</div>';
  }

  /* ---------------- university profile ---------------- */

  function renderProfile(u, section) {
    var c = U.country(u.country);
    var a = u.admissions || {};
    var eng = u.english || {};
    var ac = u.academics || {};
    var costs = u.costs || {};
    var fr = U.fullRide(u), merit = U.meritList(u), need = U.needBased(u);

    document.title = u.name + ' — UniPath';

    var hero = '<section class="uni-hero"><div class="wrap">' +
      '<div class="crumbs"><a href="#/">Home</a> › <a href="#/countries">Countries</a> › ' +
        '<a href="#/country/' + c.code + '">' + c.flag + ' <span>' + esc(c.name) + '</span></a> › ' + esc(U.displayName(u)) + '</div>' +
      '<div class="uni-hero-grid">' +
        '<div class="uni-logo">' + esc((u.brand && u.brand.initials) || U.displayName(u).slice(0, 3)) + '</div>' +
        '<div style="flex:1;min-width:260px">' +
          '<h1>' + esc(u.name) + '</h1>' +
          '<p class="sub">' + c.flag + ' <span>' + esc(u.city) + '</span>' + (has(u.region) ? ', <span>' + esc(u.region) + '</span>' : '') + ' · <span>' + esc(u.type) + '</span>' +
            (has(u.founded) ? ' · <span>Founded</span> ' + esc(u.founded) : '') + '</p>' +
          '<div class="pill-row">' +
            (fr.available === true && fr.internationalEligible === true ? '<span class="badge">★ <span>' + esc(U.awardLabel(u)) + '</span></span>' : '') +
            (need.meetsFullNeed === true ? '<span class="badge">Meets full demonstrated need</span>' : '') +
            (U.englishLabel(u) ? '<span class="badge">' + esc(U.englishLabel(u)) + '</span>' : '') +
            '<span class="badge">' + esc(U.satLabel(u)) + '</span>' +
            (merit.length ? '<span class="badge">' + merit.length + ' merit scholarship' + (merit.length > 1 ? 's' : '') + '</span>' : '') +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
          '<a class="btn btn-accent" href="' + esc(u.links.website) + '" target="_blank" rel="noopener">Official website ↗</a>' +
          '<button class="btn btn-ghost" type="button" data-compare="' + esc(u.id) + '" aria-pressed="' + (U.compareHas(u.id) ? 'true' : 'false') + '">' +
            (U.compareHas(u.id) ? '✓ Added to comparison' : '⊕ Add to comparison') + '</button>' +
          U.savedButton(u, 'btn btn-ghost') +
          '<a class="btn btn-ghost" href="' + U.uniUrl(u) + '/report">⚑ Report an error</a>' +
        '</div>' +
      '</div></div></section>';

    var secs = [
      ['overview', 'Overview'], ['admissions', 'Admissions'], ['english', 'English requirements'],
      ['academics', 'Academic requirements'], ['scholarships', 'Scholarships & financial aid'],
      ['costs', 'Costs'], ['programs', 'Programs'], ['photos', 'Photos'], ['apply', 'Apply & learn more'], ['sources', 'Sources']
    ];
    var nav = '<nav class="profile-nav" aria-label="Sections"><div class="wrap"><ul>' +
      secs.map(function (s) {
        return '<li><a href="' + U.uniUrl(u) + '/' + s[0] + '">' + s[1] + '</a></li>';
      }).join('') + '</ul></div></nav>';

    /* Overview */
    var overview = '<section class="profile-section" id="overview"><h2>Overview</h2>' +
      verifyBar(u) +
      (u.photos && u.photos.main && u.photos.gallery && u.photos.gallery.length
        ? '<figure class="hero-photo"><img src="' + esc(u.photos.main) + '" alt="' + esc(u.photos.gallery[0].title || u.name) + '" width="1200" height="675" decoding="async" onerror="this.closest(\'figure\').remove()">' +
          '<figcaption>' + esc(u.photos.gallery[0].title) + ' · <a href="' + U.uniUrl(u) + '/photos">More photos &amp; credits</a></figcaption></figure>'
        : '') +
      '<p style="margin-top:18px;font-size:1.05rem">' + or(u.description) + '</p>' +
      (U.isCommunityCollege(u) ? '<div class="notice notice-info"><span class="ico">ℹ️</span><div>' + esc(U.ccSummary(u)) + '</div></div>' : '') +
      '<dl class="deflist">' +
        row('Country', c.flag + ' <span>' + esc(c.name) + '</span>') +
        row('City', '<span>' + esc(u.city) + '</span>' + (has(u.region) ? ', <span>' + esc(u.region) + '</span>' : '')) +
        row('Founded', or(u.founded)) +
        row('Institution type', or(u.type)) +
        row('Degrees offered', esc(U.degreesLabel(u)) + (has(u.degreesNote) ? '<br><span class="small muted">' + esc(u.degreesNote) + '</span>' : '')) +
        (U.bachelorPrograms(u).length ? row('Bachelor’s programmes in the catalogue',
          '<ul class="stack" style="margin:0;padding-left:1.1em">' + U.bachelorPrograms(u).map(function (b) {
            return '<li><span>' + esc(b.name) + '</span>' + (has(b.note) ? ' <span class="small muted">— ' + esc(b.note) + '</span>' : '') + '</li>';
          }).join('') + '</ul>' +
          '<span class="small warn-text">' + esc(U.bachelorIntlText(u)) + '</span>' +
          (has(u.bachelorIntlNote) ? '<br><span class="small muted">' + esc(u.bachelorIntlNote) + '</span>' : '') +
          (has(u.bachelorSource) ? '<br><span class="small muted"><a href="' + esc(u.bachelorSource) + '" target="_blank" rel="noopener">Official page ↗</a>' +
            (has(u.bachelorChecked) ? ' · <span>Checked ' + esc(u.bachelorChecked) + '</span>' : '') + '</span>' : '')) : '') +
        (u.communityCollege && has(u.communityCollege.route) ? row('Route for international applicants', esc(u.communityCollege.route)) : '') +
        (u.communityCollege && has(u.communityCollege.housing) ? row('Housing', esc(u.communityCollege.housing)) : '') +
        (u.communityCollege && has(u.communityCollege.transfer) ? row('Transfer to a university', esc(u.communityCollege.transfer)) : '') +
        (u.communityCollege && has(u.communityCollege.work) ? row('Study and work rules', esc(u.communityCollege.work)) : '') +
        row('Language of instruction', or(u.languageOfInstruction)) +
        row('Official website', link(u.links.website)) +
        row('Location / map', has(u.city) ? '<a href="https://www.openstreetmap.org/search?query=' +
          encodeURIComponent(u.name + ', ' + u.city) + '" target="_blank" rel="noopener">View ' + esc(u.city) + ' on OpenStreetMap ↗</a>' : UNKNOWN) +
      '</dl></section>';

    /* Admissions — application deadlines and the other dates of a cycle are
       listed separately; each row keeps its own confirmation and state. */
    function statusCell(d) {
      var st = U.roundStatus(d), state = U.roundStateLabel(d);
      return '<span class="round-status round-status-' + esc(st) + '">' + esc(U.roundStatusLabel(d)) + '</span>' +
        (state ? '<br><span class="small muted">' + esc(state) + '</span>' : '');
    }
    function sourceCell(d) {
      return has(d.source)
        ? '<a href="' + esc(d.source) + '" target="_blank" rel="noopener">Official page ↗</a>' +
          (has(d.verified) ? '<br><span class="small muted">Checked ' + esc(d.verified) + '</span>' : '')
        : '<span class="unknown">Not linked</span>';
    }
    function roundRows(list, first) {
      return list.map(function (d) {
        var conds = U.roundConditions(d);
        return '<tr class="round-' + esc(U.roundStatus(d)) + '">' +
          '<td data-label="' + first + '"><strong>' + esc(first === 'Type' ? U.otherDateLabel(d) : d.name) + '</strong>' +
            (first === 'Type' ? '<br><span class="small">' + esc(d.name) + '</span>' : '') + '</td>' +
          '<td data-label="Date">' + esc(U.roundWhen(d)) + '</td>' +
          '<td data-label="Intake">' + (U.roundIntake(d) ? esc(U.roundIntake(d)) : '<span class="unknown">Not stated</span>') + '</td>' +
          '<td data-label="Conditions">' + (conds.length
            ? conds.map(function (c) { return esc(c); }).join('<br>')
            : '<span class="unknown">Not stated</span>') + '</td>' +
          '<td data-label="Status">' + statusCell(d) + '</td>' +
          '<td data-label="Source">' + sourceCell(d) + '</td>' +
          '</tr>';
      }).join('');
    }
    function roundTable(list, first) {
      return '<div class="rounds"><table class="rounds-table"><thead><tr>' +
        '<th>' + first + '</th><th>Date</th><th>Intake</th><th>Conditions</th><th>Status</th><th>Source</th></tr></thead><tbody>' +
        roundRows(list, first) + '</tbody></table></div>';
    }
    /* Rounds of the chosen intake come first. Rounds of other intakes and
       dates republished from an earlier cycle are kept, but in clearly
       labelled reference blocks, so neither can pass for the deadline of the
       intake the visitor is looking at. */
    var intake = U.intakeGet();
    var allApp = (a.deadlines || []).filter(U.isApplicationDeadline);
    var earlier = allApp.filter(function (d) { return U.roundStatus(d) === 'previous-cycle'; });
    var live = allApp.filter(function (d) { return U.roundStatus(d) !== 'previous-cycle'; });
    var appRounds = live.filter(function (d) { return U.roundInIntake(d, u, intake); });
    var otherIntakes = live.filter(function (d) { return !U.roundInIntake(d, u, intake); });
    var otherDates = (a.deadlines || []).filter(function (d) { return !U.isApplicationDeadline(d); });
    var deadlines = '<div class="intake-bar">' + U.intakeSelectHtml() +
        '<span class="small muted">Deadlines below and “next deadline” on cards follow this choice.</span></div>' +
      (appRounds.length ? roundTable(appRounds, 'Round')
        : '<p class="unknown">' + (allApp.length
            ? (intake !== 'all' ? 'No application round is listed for this intake.' : 'No application round is confirmed for the current cycle.')
            : 'Not checked — see the official source') + '</p>') +
      (otherIntakes.length ? '<details class="ref-block"><summary>Rounds for other intakes (' + otherIntakes.length + ')</summary>' +
        roundTable(otherIntakes, 'Round') + '</details>' : '') +
      (earlier.length ? '<details class="ref-block" open><summary>For reference only: dates from an earlier cycle (' + earlier.length + ')</summary>' +
        '<p class="small warn-text">These dates were published for a past cycle. They are not deadlines for the current one and are never used for “next deadline”.</p>' +
        roundTable(earlier, 'Round') + '</details>' : '') +
      (otherDates.length ? '<h3 style="margin-top:18px">Other dates in the cycle</h3>' +
        '<p class="small muted">Opening dates, interviews, tests, financial aid, scholarship, decision and reply dates. These are not deadlines to apply.</p>' +
        roundTable(otherDates, 'Type') : '');

    var fee = a.applicationFee || {};
    var admissions = '<section class="profile-section" id="admissions"><h2>Admissions</h2>' +
      '<h3 style="margin-top:6px">Application deadlines</h3>' + deadlines +
      '<dl class="deflist" style="margin-top:18px">' +
        row('Application platform', has(a.platforms) ? a.platforms.map(esc).join('<br>') : UNKNOWN) +
        row('Application fee', U.feeLabel(u) + (has(fee.note) ? '<br><span class="small muted">' + esc(fee.note) + '</span>' : '') +
          (has(fee.source) ? '<br><span class="small muted"><a href="' + esc(fee.source) + '" target="_blank" rel="noopener">Official page ↗</a>' +
            (has(fee.verified) ? ' · <span>Checked ' + esc(fee.verified) + '</span>' : '') + '</span>' : '') +
          '<br><span class="small muted">An application fee is separate from an enrolment deposit or registration fee, which are charged only after admission.</span>') +
        row('Fee waiver', (U.feeWaiver(u) === null ? UNKNOWN : '<strong>' + esc(U.feeWaiverLabel(u)) + '</strong>') +
          (has(fee.waiver) ? '<br><span class="small muted">' + esc(fee.waiver) + '</span>' : '')) +
        row('Required documents', list(a.documents)) +
        row('Recommendation letters', or(a.recommendations)) +
        row('Personal essay', or(a.essay)) +
        row('Interview', or(a.interview)) +
      '</dl>' +
      (has(a.notes) ? '<div class="notice notice-info" style="margin-top:16px"><span class="ico">ℹ️</span><div>' +
        a.notes.map(function (n) { return '<p style="margin:0 0 .4em">' + esc(n) + '</p>'; }).join('') + '</div></div>' : '') +
      '</section>';

    /* English */
    /* IELTS-style band scores read as 6.0 / 7.5, larger scores (Duolingo) as they are. */
    function band(x) { return typeof x === 'number' && x < 10 ? x.toFixed(1) : x; }
    /* One entry per programme, language profile or band the university publishes. */
    function profileList(t) {
      return '<ul class="req-profiles">' + t.profiles.map(function (p) {
        var lines = ['<span class="req-name">' + esc(p.name) + '</span>'];
        if (has(p.overall)) lines.push('<span class="req-kv"><span class="muted">' + (p.kind === 'competitive' ? 'Competitive level' : 'Overall') +
          '</span> <strong>' + esc(band(p.overall)) + '</strong></span>');
        lines.push('<span class="req-kv"><span class="muted">Sections</span> ' + (has(p.sections) ? '<span>' + esc(p.sections) + '</span>'
          : '<span class="muted">Not stated by the university</span>') + '</span>');
        if (has(p.scope)) lines.push('<span class="req-kv"><span class="muted">Applies to</span> <span>' + esc(p.scope) + '</span></span>');
        var meta = [];
        if (has(p.source)) meta.push('<a href="' + esc(p.source) + '" target="_blank" rel="noopener">Official page ↗</a>');
        if (has(p.verified)) meta.push('<span>Checked ' + esc(p.verified) + '</span>');
        if (meta.length) lines.push('<span class="req-meta small">' + meta.join(' · ') + '</span>');
        return '<li>' + lines.join('') + '</li>';
      }).join('') + '</ul>';
    }
    function testRow(label, t) {
      if (!t) return row(label, UNKNOWN);
      var v = [];
      if (U.testVaries(t)) {
        v.push('<strong class="req-varies">' + esc(U.variesLabel(t)) + '</strong>');
        if (has(t.min)) v.push('<span>University-wide minimum: <strong>' + esc(band(t.min)) + '</strong></span>');
        if (t.profiles && t.profiles.length) v.push(profileList(t));
        else v.push('<span class="muted">The level is published on each programme page.</span>');
        if (has(t.note)) v.push('<span class="small muted">' + esc(t.note) + '</span>');
        return row(label, v.join(''));
      }
      /* TOEFL has two scales (0–120 before 21 January 2026, 1–6 after). A
         single published number is labelled with the scale it is on; nothing
         is converted from one scale to the other. */
      function scaleOf(x) {
        if (label !== 'TOEFL' || typeof x !== 'number') return '';
        return x <= 6 ? ' <span class="small muted">(1–6 scale, tests from 21 Jan 2026)</span>' : ' <span class="small muted">(0–120 scale, tests before 21 Jan 2026)</span>';
      }
      if (t.accepted === false || t.status === 'not-accepted') {
        v.push('<strong class="warn-text">Not accepted</strong>');
      } else if (t.scales && t.scales.length) {
        v = U.toeflLines(u).map(function (l) { return '<strong>' + esc(l) + '</strong>'; });
      } else {
        if (has(t.min)) v.push('<strong>Official minimum: ' + esc(t.min) + '</strong>' + scaleOf(t.min));
        if (has(t.recommended)) v.push('<strong>Official recommendation: ' + esc(t.recommended) + '</strong>' + scaleOf(t.recommended) +
          '<br><span class="small muted">A level the university advises. It is not a minimum and not a statistic about admitted students.</span>');
      }
      if (!v.length) v.push('<strong>' + esc(U.testStatusLabel(t)) + '</strong>');
      if (has(t.sections)) v.push('<span class="small"><strong>Sections:</strong> <span>' + esc(t.sections) + '</span></span>');
      if (has(t.variants)) v.push('<span class="small"><strong>Test versions:</strong> <span>' + esc(t.variants) + '</span></span>');
      if (has(t.note)) v.push('<span class="small muted">' + esc(t.note) + '</span>');
      return row(label, v.length ? v.join('<br>') : UNKNOWN);
    }
    /* Scores of students who were admitted or enrolled — shown only when the
       university publishes them with a stated sample and year, and always
       apart from the requirement itself. */
    function englishStats() {
      var o = (u.stats || {}).official || {}, x = o.english;
      var body;
      if (x && (has(x.ielts) || has(x.toefl) || has(x.duolingo))) {
        var lines = [];
        /* The kind of statistic is named as published: a middle 50% range is never called an average. */
        var KIND = { median: 'Median', middle50: 'Middle 50%' }[x.measure] || 'Average';
        if (has(x.ielts)) lines.push('<div class="stat-line"><span class="muted">' + esc(KIND + ' IELTS') + '</span> <strong>' + esc(x.ielts) + '</strong></div>');
        if (has(x.toefl)) lines.push('<div class="stat-line"><span class="muted">' + esc(KIND + ' TOEFL') + '</span> <strong>' + esc(x.toefl) + '</strong></div>');
        if (has(x.duolingo)) lines.push('<div class="stat-line"><span class="muted">' + esc(KIND + ' Duolingo') + '</span> <strong>' + esc(x.duolingo) + '</strong></div>');
        if (has(x.note)) lines.push('<p class="small muted">' + esc(x.note) + '</p>');
        /* Own map: the shared COHORT table is declared further down and is not set yet when this runs. */
        var WHO = { enrolled: 'enrolled first-year students', admitted: 'admitted students' };
        var meta = ['<span>' + esc(x.term || 'Year not stated') + '</span>', '<span>' + esc(WHO[x.cohort] || 'sample not stated') + '</span>'];
        if (x.source) meta.push('<a href="' + esc(x.source.url) + '" target="_blank" rel="noopener">' + esc(x.source.label) + ' ↗</a>');
        body = lines.join('') + '<p class="small muted stat-meta">' + meta.join(' · ') + '</p>';
      } else if (o.englishNotPublished) {
        body = '<p class="muted">The average IELTS of students is not published by the university.</p>';
      } else {
        body = '<p class="unknown">Not checked: whether the university publishes the English scores of its students has not been verified.</p>';
      }
      return '<div class="stat-group" style="margin-top:14px"><h4>English scores of admitted students</h4>' + body +
        '<p class="small muted">A statistic of this kind describes past students. It is not a minimum, it is never derived from the minimum, and it does not guarantee admission.</p></div>';
    }
    var english = '<section class="profile-section" id="english"><h2>English requirements</h2>' +
      '<div class="notice notice-info"><span class="ico">ℹ️</span><div data-i18n-html>Three different things are kept apart here. A <strong>minimum</strong> is the score an application needs. A <strong>recommended or competitive</strong> score is a level the university itself advises — it is not a statistic. The <strong>scores of admitted students</strong> are shown only when the university publishes them, and are never worked out from the minimum.</div></div>' +
      '<dl class="deflist" style="margin-top:18px">' +
        testRow('IELTS', eng.ielts) +
        testRow('TOEFL', eng.toefl) +
        testRow('Duolingo English Test', eng.duolingo) +
        row('Waiver / exemption', or(eng.waiver)) +
        (has(eng.conditional) ? row('Conditional admission', esc(eng.conditional)) : '') +
        (has(eng.detailsNote) ? row('Also stated', esc(eng.detailsNote)) : '') +
        (has(eng.detailsSource) ? row('Test versions and conditions', '<a href="' + esc(eng.detailsSource) + '" target="_blank" rel="noopener">Official page ↗</a>' +
          (has(eng.detailsVerified) ? ' · <span class="small muted">Checked ' + esc(eng.detailsVerified) + '</span>' : '') +
          '<br><span class="small muted">Only what this page states is recorded. A version that is not mentioned here has not been checked.</span>') : '') +
        row('Notes', or(eng.note)) +
      '</dl>' + englishStats() +
      (U.satPolicy(u) === 'optional' ? '<p class="small muted" style="margin-top:10px">Test-optional for the SAT/ACT does not remove the English language requirement above.</p>' : '') +
      '</section>';

    /* Academics */
    var gpa = ac.gpa;
    var gpaText = !gpa ? (u.stats ? '<span class="muted">No minimum GPA published — see “Who gets in” below for the averages the university reports.</span>' : UNKNOWN) : (typeof gpa === 'object'
      ? (has(gpa.min) ? '<strong>' + esc(gpa.min) + (has(gpa.scale) ? ' / ' + esc(gpa.scale) : '') + '</strong>' : '') +
        (has(gpa.note) ? '<br><span class="small muted">' + esc(gpa.note) + '</span>' : '')
      : esc(gpa));
    function testPolicyRow(label, t) {
      if (!t) return row(label, UNKNOWN);
      var POLICY = { required: 'Required', 'required-alternatives': 'Testing required — alternatives accepted', optional: 'Optional',
        accepted: 'Accepted — requirement not confirmed', 'not-used': 'Not used', 'not-applicable': 'Not part of this admission route' };
      var p = has(t.label) ? '<strong>' + esc(t.label) + '</strong>'
        : (POLICY[t.policy] ? '<strong>' + esc(POLICY[t.policy]) + '</strong>' : UNKNOWN);
      return row(label, p + (has(t.note) ? '<br><span class="small muted">' + esc(t.note) + '</span>' : ''));
    }
    function range3(a) { return a ? esc(a[0]) + ' / <strong>' + esc(a[1]) + '</strong> / ' + esc(a[2]) : null; }
    /* Official admission statistics. SAT/ACT figures are labelled by the
       sample the source reports on (admitted or enrolled students, all or
       only those who submitted scores). A range is never shown as an
       average, and no average or median is derived from a range. */
    var COHORT = { enrolled: 'enrolled first-year students', admitted: 'admitted students' };
    function testStats(x, kind, st) {
      if (!x) return '';
      var lines = [];
      var p = x.composite || (kind === 'ACT' ? x.range : null);
      if (has(x.mean)) lines.push('<div class="stat-line"><span class="muted">Average ' + kind + ' score</span> <strong>' + esc(x.mean) + '</strong></div>');
      var med = has(x.median) ? x.median : (p && has(p[1]) ? p[1] : null);
      if (has(med)) lines.push('<div class="stat-line"><span class="muted">Median ' + kind + ' score</span> <strong>' + esc(med) + '</strong></div>');
      if (p && has(p[0]) && has(p[2])) lines.push('<div class="stat-line"><span class="muted">Middle 50% ' + kind + ' range</span> <strong>' + esc(p[0]) + '–' + esc(p[2]) + '</strong></div>');
      function section(label, r) {
        if (!r) return;
        var bits = [];
        if (has(r[0]) && has(r[2])) bits.push('middle 50%: ' + esc(r[0]) + '–' + esc(r[2]));
        if (has(r[1])) bits.push('median: ' + esc(r[1]));
        if (bits.length) lines.push('<div class="stat-line small"><span class="muted">' + label + '</span> <span>' + bits.join(' · ') + '</span></div>');
      }
      section('Evidence-Based Reading and Writing', x.rw);
      section('Math', x.math);
      if (!lines.length) return '';
      var cohort = COHORT[x.cohort] || 'students (sample not stated by the source)';
      var meta = [];
      meta.push('<span>' + esc(x.term || st.term || 'Year not stated') + '</span>');
      meta.push('<span>' + esc(cohort) + '</span>');
      if (x.submittersOnly) meta.push('<span>' + (has(x.submitted) ? 'Only students who submitted scores (' + esc(x.submitted) + ' of the class)' : 'Only students who submitted scores') + '</span>');
      var src = x.source || st.source;
      if (src) meta.push('<a href="' + esc(src.url) + '" target="_blank" rel="noopener">' + esc(src.label) + ' ↗</a>');
      if (has(x.note)) meta.push('<span>' + esc(x.note) + '</span>');
      return '<div class="stat-group"><h4>' + esc(kind === 'SAT' ? 'SAT scores of ' + cohort : 'ACT scores of ' + cohort) + '</h4>' +
        lines.join('') + '<p class="small muted stat-meta">' + meta.join(' · ') + '</p></div>';
    }
    function testingStatsCard(u) {
      var st = u.stats || {}, o = st.official || {}, pol = U.satPolicy(u);
      var satHtml = testStats(o.sat, 'SAT', st), actHtml = testStats(o.act ? { range: o.act, mean: o.actMean, cohort: (o.sat || {}).cohort,
        term: (o.sat || {}).term, submittersOnly: (o.sat || {}).submittersOnly, source: (o.sat || {}).source } : null, 'ACT', st);
      var body;
      if (satHtml || actHtml) body = satHtml + actHtml;
      else if (pol === 'not-used') body = '<p class="muted">SAT/ACT scores are not used in admission, so no test statistics apply.</p>';
      else if (pol === 'not-applicable') body = '<p class="muted">The SAT and ACT are not part of this admission route, so no test statistics apply.</p>';
      else if (o.satNotPublished) body = '<p class="muted">Not published in the official source checked.</p>' +
        (typeof o.satNotPublished === 'string' ? '<p class="small muted">' + esc(o.satNotPublished) + (st.source ? ' <a href="' + esc(st.source.url) + '" target="_blank" rel="noopener">' + esc(st.source.label) + ' ↗</a>' : '') + '</p>' : '');
      else body = '<p class="unknown">Not checked: no official SAT/ACT statistics have been read for this institution.</p>';
      return '<div class="card" style="margin-top:22px"><div class="card-body">' +
        '<h3 style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">📊 SAT/ACT statistics' +
          ((satHtml || actHtml) ? ' <span class="badge badge-ok">Official data</span>' : '') + '</h3>' + body +
        ((satHtml || actHtml) ? '<div class="notice notice-info" style="margin-top:12px"><span class="ico">ℹ️</span><div>These statistics describe students from a past intake. They are not a required minimum and do not guarantee admission. Requirements of individual programmes and scholarships are shown separately.</div></div>' : '') +
        '</div></div>';
    }
    function statsBlock(st) {
      if (!st) return '';
      var o = st.official || {}, rows = '';
      if (o.admitRate) rows += row('Acceptance rate', '<strong>' + esc(o.admitRate.value) + '%</strong>' +
        (has(o.admitRate.applied) ? ' <span class="small muted">(' + Number(o.admitRate.admitted).toLocaleString('en-US') + ' admitted of ' +
          Number(o.admitRate.applied).toLocaleString('en-US') + ' applicants' + (o.admitRate.year ? ', ' + esc(o.admitRate.year) : '') + ')</span>' : ''));
      if (o.intlAdmitRate) rows += row('International acceptance rate', '<strong>' + esc(o.intlAdmitRate.value) + '%</strong> <span class="small muted">(' +
        Number(o.intlAdmitRate.admitted).toLocaleString('en-US') + ' of ' + Number(o.intlAdmitRate.applied).toLocaleString('en-US') + ')</span>');
      if (has(o.history)) rows += row('Previous years', esc(o.history));
      if (o.gpa && (has(o.gpa.average) || has(o.gpa.note))) rows += row('Average high school GPA',
        (has(o.gpa.average) ? '<strong>' + esc(o.gpa.average) + '</strong><br>' : '') + (has(o.gpa.note) ? '<span class="small muted">' + esc(o.gpa.note) + '</span>' : ''));
      if (has(o.other)) rows += row('Other', list(o.other));
      if (has(o.classRank)) rows += row('Class rank', esc(o.classRank));
      if (has(o.note)) rows += row('Note', esc(o.note));
      var html = '';
      if (rows) html += '<div class="card" style="margin-top:22px"><div class="card-body">' +
        '<h3 style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">📊 Who gets in <span class="badge badge-ok">Official data</span></h3>' +
        '<p class="small muted" style="margin:0 0 6px">' + esc(st.term) +
          (st.source ? ' · Source: <a href="' + esc(st.source.url) + '" target="_blank" rel="noopener">' + esc(st.source.label) + ' ↗</a>' : '') + '</p>' +
        '<dl class="deflist">' + rows + '</dl></div></div>';
      return html;
    }

    function satPolicySummary() {
      var pol = U.satPolicy(u);
      var SUMMARY = {
        optional: ['Test-optional', 'You can apply without SAT or ACT scores.'],
        required: ['Required', 'SAT or ACT scores are required.'],
        'required-alternatives': ['Testing required, alternatives accepted', 'A test is required, but the university accepts alternatives to the SAT and ACT.'],
        'not-used': ['Not used', 'SAT and ACT scores are not considered in admission.'],
        accepted: ['Accepted', 'Scores are accepted; whether they are required was not confirmed.'],
        'not-applicable': ['Not part of this admission route', 'This route does not use the SAT or ACT: selection rests on the qualifications and assessments listed here.'],
        unknown: ['Not checked', 'The testing policy has not been verified on an official page.']
      };
      var x = SUMMARY[pol] || SUMMARY.unknown;
      var sat = ac.sat || {};
      var extra = '';
      /* The cycle a policy was confirmed for, when the record states one. */
      extra += '<br><span class="small muted">' + (has(sat.cycle) ? 'Applies to: <span>' + esc(sat.cycle) + '</span>' : has(sat.cycleNote) ? '<span>' + esc(sat.cycleNote) + '</span> <span>Confirm it for your entry year.</span>' : 'The admission cycle this policy applies to is not recorded here — confirm it for your entry year.') + '</span>';
      if (has(sat.exception)) extra += '<br><span class="small"><strong>Exception:</strong> <span>' + esc(sat.exception) + '</span></span>';
      if (has(sat.next)) extra += '<br><span class="small"><strong>Later cycles:</strong> <span>' + esc(sat.next) + '</span></span>';
      if (has(sat.scholarships)) extra += '<br><span class="small"><strong>Scholarships:</strong> <span>' + esc(sat.scholarships) + '</span></span>';
      if (has(sat.source)) extra += '<br><span class="small muted"><a href="' + esc(sat.source) + '" target="_blank" rel="noopener">Official testing page ↗</a>' + (has(sat.verified) ? ' · <span>Checked ' + esc(sat.verified) + '</span>' : '') + '</span>';
      if (pol === 'optional' || pol === 'not-used') {
        extra += '<br><span class="small muted">This is the policy for admission. A merit scholarship, an honours programme or a particular major may still ask for a score — check each one.</span>';
      }
      return '<strong class="req-varies">' + esc(x[0]) + '</strong><span>' + esc(x[1]) + '</span>' + extra;
    }
    var academics = '<section class="profile-section" id="academics"><h2>Academic requirements</h2>' +
      '<div class="notice notice-warn"><span class="ico">⚠️</span><div data-i18n-html>Requirements are <strong>not the same for every applicant</strong>. Individual faculties, schools and programmes often set higher bars than the university minimum, and international applicants are frequently assessed on a separate track. Check the requirement for your exact programme and entry year.</div></div>' +
      '<dl class="deflist" style="margin-top:18px">' +
        row('SAT/ACT policy', satPolicySummary()) +
        row('GPA', gpaText) +
        testPolicyRow('SAT', ac.sat) +
        testPolicyRow('ACT', ac.act) +
        row('Other standardized tests', or(ac.otherTests)) +
        row('International qualifications', or(ac.internationalQualifications)) +
      '</dl>' + ((u.country === 'us' || (u.stats && u.stats.official && (u.stats.official.sat || u.stats.official.act))) ? testingStatsCard(u) : '') +
      statsBlock(u.stats) + '</section>';

    /* Scholarships */
    var frCard = '<article class="card fullride-card" style="margin-bottom:16px"><div class="card-body">' +
      '<h3 style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">★ Largest award ' +
        (fr.available === true ? '<span class="badge ' + (U.awardKind(u) === 'full-ride' ? 'badge-ok' : 'badge-warn') + '">' + esc(U.awardLabel(u)) + '</span>'
         : fr.available === false ? '<span class="badge badge-warn">Not available</span>'
         : fr.status === 'not-published' ? '<span class="badge badge-flat">No full-level award described on the pages read</span>'
         : '<span class="badge">Not checked</span>') + '</h3>' +
      '<dl class="deflist">' +
        row('Open to international students', yesNo(fr.internationalEligible)) +
        row('Need-based or merit-based', or(fr.basis)) +
        row('What it covers', coverRow(fr.covers)) +
        (fr.available === true ? row('Costs that may remain', remainingCosts(fr.covers)) : '') +
        row('Renewal', yesNo(fr.renewable) + (has(fr.renewalConditions) ? '<br><span class="small muted">' + esc(fr.renewalConditions) + '</span>' : '')) +
        row('How competitive', or(fr.competitiveness)) +
        row('Application and deadline', or(fr.howToApply)) +
        row('Test requirement for this award', has(fr.testRequirement) ? esc(fr.testRequirement)
          : (/^need-based$/i.test(String(fr.basis || '')) && fr.available === true
            ? '<span>Need-based: the award is assessed on family finances once you are admitted, so the test rules are the admission ones above.</span>'
            : '<span class="unknown">Not checked — an award can ask for a test even where admission does not</span>')) +
        (has(fr.detailsSource) ? row('Award conditions', '<a href="' + esc(fr.detailsSource) + '" target="_blank" rel="noopener">Official page ↗</a>' +
          (has(fr.detailsVerified) ? ' · <span class="small muted">Checked ' + esc(fr.detailsVerified) + '</span>' : '')) : '') +
      '</dl>' +
      (fr.available === true ? '<p class="small muted" style="margin-top:10px">This is the largest award the university lists. It is competitive unless stated otherwise, and it is never subtracted from the costs shown on this site.</p>' : '') +
      (has(fr.note) ? '<div class="notice notice-warn" style="margin-top:14px"><span class="ico">⚠️</span><div>' + esc(fr.note) + '</div></div>' : '') +
      '</div></article>';

    /* What a recipient may still have to pay, read from the coverage list. */
    function remainingCosts(covers) {
      var names = { tuition: 'tuition', housing: 'housing', meals: 'meals', insurance: 'health insurance', books: 'books and other expenses' };
      var c = covers || {}, no = [], unk = [];
      Object.keys(names).forEach(function (k) { if (c[k] === false) no.push(names[k]); else if (c[k] !== true) unk.push(names[k]); });
      var out = [];
      function items(a) { return a.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join(', '); }
      if (no.length) out.push('<span><span>Not covered:</span> ' + items(no) + '</span>');
      if (unk.length) out.push('<span class="unknown"><span>Not checked:</span> ' + items(unk) + '</span>');
      if (!out.length) out.push('<span>Travel, visa and personal costs are not part of the listed coverage.</span>');
      return out.join('<br>');
    }

    var meritCards = merit.length ? merit.map(function (m) {
      return '<article class="card scholarship-card card-pad-sm" style="margin-bottom:12px"><div class="card-body">' +
        '<h4 style="margin:0 0 8px">' + esc(m.name) + '</h4>' +
        '<dl class="deflist">' +
          row('Amount', or(m.amount)) +
          row('Eligibility', or(m.eligibility)) +
          row('Deadline', or(m.deadline)) +
          row('Automatic or separate application', or(m.application)) +
          row('Renewable', yesNo(m.renewable)) +
          (has(m.testRequirement) ? row('Test requirement', esc(m.testRequirement))
            : (/\b(SAT|ACT)\b/.test(String(m.eligibility || '')) ? row('Test requirement', '<span>A test score is part of the eligibility stated above.</span>') : '')) +
          (has(m.note) ? row('Note', esc(m.note)) : '') +
        '</dl></div></article>';
    }).join('') : '<p class="muted">No merit scholarships are listed for this university on the pages consulted.</p>';

    var needCard = '<article class="card need-card"><div class="card-body">' +
      '<h3>Need-based financial aid</h3>' +
      '<dl class="deflist">' +
        row('Available to international students', yesNo(need.availableToInternational)) +
        row('Meets full demonstrated need for internationals', yesNo(need.meetsFullNeed) +
          (need.meetsFullNeed === true ? '<br><span class="small muted">“Need” is the amount the university itself calculates a family cannot pay. Meeting it in full does not mean a zero family contribution, and the package can include work or loans unless the university says otherwise.</span>' : '')) +
        row('Need-blind for international applicants', yesNo(need.needBlindInternational)) +
        row('Required forms', has(need.forms) ? need.forms.map(esc).join(', ') : UNKNOWN) +
        row('Financial aid deadlines', or(need.deadlines)) +
      '</dl>' +
      (has(need.note) ? '<p class="small" style="margin-top:12px">' + esc(need.note) + '</p>' : '') +
      '</div></article>';

    var scholarships = '<section class="profile-section" id="scholarships"><h2>Scholarships & financial aid</h2>' +
      '<div class="notice notice-warn"><span class="ico">⚠️</span><div data-i18n-html>A scholarship is only called a <strong>full ride</strong> here when the official source states what it covers. Where coverage is unconfirmed it is marked with <strong>?</strong> rather than assumed.</div></div>' +
      '<div style="margin-top:18px">' + frCard + '</div>' +
      '<h3>Merit scholarships</h3>' + meritCards +
      '<h3 style="margin-top:24px">Need-based aid</h3>' + needCard +
      '</section>';

    /* Costs */
    var costRows = has(costs.items) ? costs.items.map(function (i) {
      var amt = has(i.amount) ? U.money(i.amount, costs.currency) : (has(i.text) ? esc(i.text) : UNKNOWN);
      return '<tr><td>' + esc(i.label) + (has(i.note) ? '<br><span class="small muted">' + esc(i.note) + '</span>' : '') + '</td><td>' + amt + '</td></tr>';
    }).join('') : '';
    var costTable = has(costs.items)
      ? '<div class="table-scroll"><table class="cost-table"><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>' + costRows + '</tbody>' +
        (has(costs.totalText) ? '<tfoot><tr><td>As published by the university</td><td>' + esc(costs.totalText) + '</td></tr></tfoot>' : '') +
        '</table></div>'
      : '<p>' + UNKNOWN + '</p>';
    var figures = U.costFigures(u);
    var costSrc = U.costSource(u);
    var costSummary = '<div class="cost-summary">' +
      (figures.length
        ? figures.map(function (f) {
            return '<div class="cost-figure"><dt>' + esc(f.label) + '</dt>' +
              '<dd><strong>' + esc(f.text) + '</strong>' +
              (f.id === 'tuition' ? '<span class="small muted">' + esc(U.perPeriod(u, f.text)) + '</span>' : '') + '</dd></div>';
          }).join('')
        : '<div class="cost-figure"><dt>Tuition</dt><dd>' + (U.costStatus(u) === 'confirmed' && has(costs.headline)
            ? '<strong>' + esc(costs.headline) + '</strong>' : U.statusHtml(U.costStatus(u)) +
              (has(costs.headline) ? '<br><span class="small muted">' + esc(costs.headline) + '</span>' : '')) + '</dd></div>') +
      '</div>' +
      (U.costIncludes(u) ? '<p class="small" style="margin-top:10px"><strong>What the figures cover:</strong> ' + esc(U.costIncludes(u)) + '</p>' : '') +
      '<p class="small muted" style="margin-top:6px">' +
        'Currency: <span>' + esc(U.costCurrency(u) || 'not stated') + '</span> · ' +
        'Academic year: <span>' + esc(U.costYear(u) || 'not stated') + '</span>' +
        ' · Status: <span>' + esc(U.statusLabel(U.costStatus(u))) + '</span>' +
        (costSrc ? ' · Source: <a href="' + esc(costSrc.url) + '" target="_blank" rel="noopener">' + esc(costSrc.label) + '</a>' : '') +
        (has(costs.verified) ? ' · Checked: <span>' + esc(costs.verified) + '</span>'
          : has(u.lastVerified) ? ' · Profile last checked: <span>' + esc(u.lastVerified) + '</span>' : '') +
        (has(costs.studentCategory) ? ' · Student category: <span>' + esc(costs.studentCategory) + '</span>' : '') +
      '</p>';

    var costs_ = '<section class="profile-section" id="costs"><h2>Costs</h2>' +
      costSummary +
      '<h3 style="margin-top:22px">Published breakdown</h3>' +
      costTable +
      (has(costs.note) ? '<div class="notice" style="margin-top:14px"><span class="ico">💰</span><div>' + esc(costs.note) + '</div></div>' : '') +
      '<div class="notice notice-info" style="margin-top:12px"><span class="ico">↓</span><div><strong>Possible scholarship reduction.</strong> ' +
        (U.fullRide(u).available === true
          ? 'This university lists an award that can cover tuition in full — see the scholarships section for exactly what is and is not covered. The figures above are before any award: winning one is not guaranteed, so plan with the full amount.'
          : U.meritList(u).length
            ? 'Merit scholarships listed above reduce the tuition line if you win one. Housing, food and insurance usually remain payable.'
            : 'No confirmed award is listed that would reduce these figures. Budget for the full amount until the university confirms otherwise.') +
      '</div></div></section>';

    /* Programs */
    var deg = u.degreesByArea || null;
    function fieldCheckHtml(tag) {
      var c = U.fieldCheck(u, tag);
      if (c.status === 'degrees') {
        return '<p class="field-check field-ok"><span>✓ Degrees conferred</span>: ' + c.areas.map(function (a) {
          return '<span>' + esc(a.label) + '</span> <strong>' + esc(U.degreeValue(deg, a.value)) + '</strong>';
        }).join('; ') + '</p>';
      }
      if (c.status === 'major') return '<p class="field-check"><span>Major listed by the institution; no degrees in the table for this period</span></p>';
      if (c.status === 'not-reported') return '<p class="field-check"><span>Not reported as a separate area in the Common Data Set</span></p>';
      return '<p class="field-check"><span>Not checked against degrees conferred</span></p>';
    }
    var progs = (u.programs || []).map(function (p) {
      var f = U.field(p);
      return '<a class="prog-group" href="#/universities?field=' + encodeURIComponent(f.id) + '">' +
        '<h4>' + f.icon + ' ' + esc(f.label) + '</h4>' +
        fieldCheckHtml(p) +
        '<p>See other institutions listed under ' + esc(f.label) + ' →</p></a>';
    }).join('');
    /* Notes from the institution's own programme list, and tags taken off
       because nothing backs them. */
    var noteRows = [];
    Object.keys(u.fieldNotes || {}).forEach(function (tag) {
      var n = u.fieldNotes[tag];
      noteRows.push('<li><strong>' + esc(U.field(tag).label) + '</strong> — <span>' + esc(U.FIELD_NOTE_KIND[n.kind] || n.kind) + '</span>. <span>' + esc(n.note) + '</span>' +
        (has(n.url) ? ' <a href="' + esc(n.url) + '" target="_blank" rel="noopener">Official page ↗</a>' : '') +
        (has(n.checked) ? ' · <span class="small muted">Checked ' + esc(n.checked) + '</span>' : '') + '</li>');
    });
    (u.fieldsDropped || []).forEach(function (tag) {
      if ((u.fieldNotes || {})[tag]) return;
      noteRows.push('<li><strong>' + esc(U.field(tag).label) + '</strong> — <span>No bachelor’s degrees are reported in this area for the period read, and no major has been confirmed on the official site. It may be a minor, a track, a dual-degree route or a new programme, so it is not used as a field tag here.</span></li>');
    });
    var fieldNotesBlock = noteRows.length
      ? '<div class="notice notice-info" style="margin-top:14px"><div><strong>Fields that need a closer look</strong><ul class="plain-list">' + noteRows.join('') + '</ul></div></div>' : '';
    var degreesBlock = '';
    if (deg) {
      var keys = Object.keys(deg.areas).sort(function (a, b) { return deg.areas[b] - deg.areas[a]; });
      degreesBlock = '<details class="ref-block"><summary><span>Bachelor’s degrees by area</span>, ' + esc(deg.period) + ' (' + keys.length + ')</summary>' +
        '<table class="cost-table degrees-table"><thead><tr><th>Area in the Common Data Set</th><th>' +
        (deg.unit === 'count' ? 'Degrees' : 'Share of bachelor’s degrees') + '</th></tr></thead><tbody>' +
        keys.map(function (k) { return '<tr><td>' + esc((U.DB.degreeAreas || {})[k] || k) + '</td><td>' + esc(U.degreeValue(deg, deg.areas[k])) + '</td></tr>'; }).join('') +
        '</tbody></table>' +
        '<p class="small muted"><span>Counted by majors, as the institution reported them: a student with two majors is counted twice. An area is a group of majors, not one named major.</span> ' +
        '<span>Degrees conferred from 1 July to 30 June of the years shown.</span><br>' +
        '<a href="' + esc(deg.source.url) + '" target="_blank" rel="noopener">' + esc(deg.source.label) + ' ↗</a> · <span>Checked ' + esc(deg.checked) + '</span></p></details>';
    }
    var enProgs = U.englishPrograms(u);
    var englishBlock = '<h3 style="margin-top:22px">Available fully in English</h3>' +
      (enProgs.length
        ? '<div class="pill-row">' + enProgs.map(function (p) { var f = U.field(p); return '<span class="badge badge-info">' + f.icon + ' ' + esc(f.label) + '</span>'; }).join('') + '</div>' +
          (enProgs.length < (u.programs || []).length
            ? '<p class="small muted" style="margin-top:8px">Other fields above are taught in the local language, or their English availability is not confirmed.</p>' : '')
        : '<p class="small muted">' + (u.englishTaught === true
            ? 'This university has an English-taught route, but which fields it covers is not confirmed. Check the official programme list before applying.'
            : 'No fully English-taught bachelor’s field is confirmed.') + '</p>');
    var programs = '<section class="profile-section" id="programs"><h2>Undergraduate programs</h2>' +
      (has(u.programNote) ? '<p>' + esc(u.programNote) + '</p>' : '') +
      '<h3 style="margin-top:6px">Fields of study</h3>' +
      '<p class="small muted">' + esc(programsBasisText(u)) + '</p>' +
      (progs ? '<div class="prog-groups">' + progs + '</div>' : '<p>' + UNKNOWN + '</p>') +
      fieldNotesBlock + degreesBlock +
      englishBlock +
      '</section>';

    /* How the field tags on this record should be read. A tag is a broad
       area, not a named degree; only a record that says so lists majors. */
    function programsBasisText(u) {
      var B = {
        'majors': 'These areas each contain at least one named major or degree programme in the official catalogue.',
        'concentrations': 'The institution awards one degree and these areas are concentrations within it, not separate degrees.',
        'transfer': 'These are areas of associate-degree and transfer study, not bachelor’s majors.',
        'degrees': 'Each area is checked against the bachelor’s degrees the institution reported as conferred. An area is a group of majors, not one named major — check the exact degree programme in the official catalogue.',
        'areas': 'These are broad subject areas, used here for search and filters. They are not a list of named majors — check the exact degree programme in the official catalogue.'
      };
      return B[u.programsBasis] || B.areas;
    }

    /* Photos — every image carries its Wikimedia Commons attribution */
    function credit(g) {
      return '<span class="credit">Photo: ' + esc(g.artist || 'Unknown author') +
        (g.page ? ' · <a href="' + esc(g.page) + '" target="_blank" rel="noopener">Wikimedia Commons</a>' : '') +
        ' · ' + (g.licenseUrl ? '<a href="' + esc(g.licenseUrl) + '" target="_blank" rel="noopener">' + esc(g.license) + '</a>' : esc(g.license)) +
        '</span>';
    }
    var photoList = (u.photos && u.photos.gallery) || [];
    var photos = '<section class="profile-section" id="photos"><h2>Photos</h2>' +
      (photoList.length
        ? '<div class="photo-grid">' + photoList.map(function (g) {
            return '<figure class="photo"><a href="' + esc(g.src) + '" target="_blank" rel="noopener">' +
              '<img src="' + esc(g.src) + '" alt="' + esc(g.title || u.name) + '" loading="lazy" decoding="async" width="1200" height="900" onerror="this.closest(\'figure\').remove()"></a>' +
              '<figcaption><strong>' + esc(g.title) + '</strong>' + credit(g) + '</figcaption></figure>';
          }).join('') + '</div>' +
          '<p class="small muted" style="margin-top:12px">Photographs come from Wikimedia Commons under free licences and are credited to their authors. They may not show the most recent state of the campus.</p>'
        : '<div class="notice notice-info"><span class="ico">🖼️</span><div>No freely licensed photograph of this campus has been found yet, so a placeholder is shown instead.</div></div>' +
          '<div style="margin-top:16px;max-width:420px">' + U.mediaBlock(u, 'media-sm') + '</div>') +
      '</section>';

    /* Apply */
    var LINKS = [
      ['website', '🌐', 'Official university website'],
      ['admissions', '📝', 'Undergraduate admissions'],
      ['internationalAdmissions', '🌍', 'International admissions'],
      ['applicationPortal', '📄', 'Application portal'],
      ['scholarships', '🎓', 'Scholarship information'],
      ['financialAid', '💵', 'Financial aid information'],
      ['programs', '📚', 'Academic programs'],
      ['cost', '📊', 'Cost of attendance']
    ];
    var tiles = LINKS.map(function (l) {
      var href = u.links[l[0]];
      if (!has(href)) return '<span class="link-tile is-missing"><span class="ico">' + l[1] + '</span>' + esc(l[2]) + '<span class="arw">—</span></span>';
      return '<a class="link-tile" href="' + esc(href) + '" target="_blank" rel="noopener"><span class="ico">' + l[1] + '</span>' + esc(l[2]) + '<span class="arw">↗</span></a>';
    }).join('');
    var apply = '<section class="profile-section" id="apply"><h2>Apply & learn more</h2>' +
      '<p class="muted">Every link below goes to an official university page or application portal.</p>' +
      '<div class="link-grid">' + tiles + '</div></section>';

    /* Report an error: a prepared message the visitor copies or files as a
       public GitHub issue. Nothing is sent from this page by itself. */
    var pageUrl = (global.location.origin || '') + (global.location.pathname || '') + U.uniUrl(u);
    var reportText = 'UniPath — error report\nInstitution: ' + u.name + '\nPage: ' + pageUrl +
      '\nProfile last checked: ' + (u.lastVerified || 'not stated') + '\n\nWhat is wrong:\n\nOfficial source that shows the correct information (link):\n';
    var reportBase = (U.DB.config && U.DB.config.reportErrorUrl) || null;
    var issueUrl = reportBase && /github\.com\/.+\/issues\/new/.test(reportBase)
      ? reportBase + '?title=' + encodeURIComponent('Data error: ' + u.name) + '&body=' + encodeURIComponent(reportText) : null;
    var report = '<section class="profile-section" id="report"><h2>Report an error</h2>' +
      '<p>If something on this page is wrong or out of date, send the correction with a link to the official page that shows it.</p>' +
      '<label class="small muted" for="report-text">Prepared message</label>' +
      '<textarea id="report-text" class="report-text" rows="7" readonly data-no-i18n>' + esc(reportText) + '</textarea>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">' +
        '<button class="btn btn-primary" type="button" data-copy-report>Copy the message</button>' +
        (issueUrl ? '<a class="btn btn-ghost" href="' + esc(issueUrl) + '" target="_blank" rel="noopener">Open a public GitHub issue ↗</a>' : '') +
      '</div>' +
      '<p class="small muted" id="report-status" role="status" aria-live="polite" style="margin-top:8px"></p>' +
      '<p class="small muted">' + (issueUrl
        ? 'Copying only puts the text on your clipboard — nothing is sent from this page. To reach the maintainer, paste it into a GitHub issue (the button opens one with the text filled in; a free GitHub account is needed and the issue is public).'
        : 'Copying only puts the text on your clipboard — nothing is sent from this page, and this site has no address for reports yet.') + '</p>' +
      '</section>';

    /* Sources */
    var sources = '<section class="profile-section" id="sources"><h2>Sources & verification</h2>' +
      verifyBar(u) +
      '<ul class="source-list" style="margin-top:16px">' +
        ((u.sources || []).map(function (s) {
          return '<li>→ <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a><br><span class="tiny muted mono">' + esc(s.url) + '</span></li>';
        }).join('') || '<li>' + UNKNOWN + '</li>') +
      '</ul>' +
      '<div class="notice notice-warn" style="margin-top:18px"><span class="ico">⚠️</span><div>' + esc(U.DISCLAIMER) + '</div></div>' +
      '</section>';

    document.getElementById('main').innerHTML = hero + nav +
      '<div class="wrap">' + [overview, admissions, english, academics, scholarships, costs_, programs, photos, apply, sources, report].map(collapseUnknown).join('') + '</div>';

    var copyBtn = document.querySelector('[data-copy-report]');
    if (copyBtn) copyBtn.addEventListener('click', function () {
      var ta = document.getElementById('report-text'), status = document.getElementById('report-status');
      function done(ok) {
        status.textContent = ok ? 'Copied to the clipboard. It has not been sent anywhere yet.' : 'Could not copy automatically — select the text above and copy it by hand.';
        if (global.I18N && global.I18N.apply) global.I18N.apply(status);
      }
      if (global.navigator && global.navigator.clipboard && global.navigator.clipboard.writeText) {
        global.navigator.clipboard.writeText(ta.value).then(function () { done(true); }, function () { ta.select(); try { done(document.execCommand('copy')); } catch (e) { done(false); } });
      } else { ta.select(); try { done(document.execCommand('copy')); } catch (e) { done(false); } }
    });
    var intakeSel = document.querySelector('#admissions [data-intake-select]');
    if (intakeSel) intakeSel.addEventListener('change', function () {
      /* The choice is saved by the global handler; redraw this profile in place. */
      global.setTimeout(function () { var y = global.scrollY; renderProfile(u, null); global.scrollTo(0, y); }, 0);
    });

    wireProfileNav();
    scrollToSection(section);
  }

  /* The profile is rendered after navigation, so a deep link such as
     #/university/mit/scholarships has to be applied once the DOM exists. */
  /* Arriving on a profile jumps instantly; switching sections inside an
     already-open profile (smooth === true) animates. */
  function scrollToSection(section, smooth) {
    var target = section ? document.getElementById(section) : null;
    if (!target) { global.scrollTo(0, 0); return; }
    global.setTimeout(function () {
      target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    }, 30);
  }

  function row(dt, dd) { return '<div><dt>' + dt + '</dt><dd>' + dd + '</dd></div>'; }
  /* Three or more rows of one list that only say "Not checked" are folded
     into a single line that names them; the rows with information stay. */
  function collapseUnknown(html) {
    var empty = '<dd>' + UNKNOWN + '</dd></div>';
    return String(html).replace(/(<dl class="deflist"[^>]*>)([\s\S]*?)(<\/dl>)/g, function (all, open, body, close) {
      var labels = [];
      var kept = body.replace(/<div><dt>((?:(?!<\/dt>)[\s\S])*)<\/dt>((?:(?!<\/div>)[\s\S])*<\/div>)/g, function (rowHtml, dt, rest) {
        if (rest !== empty) return rowHtml;
        labels.push(dt); return '\u0000';
      });
      if (labels.length < 3) return all;
      return open + kept.replace(/\u0000/g, '') + close +
        '<details class="ref-block unknown-group"><summary><span>Not checked</span> — <span>fields in this list</span>: ' + labels.length + '</summary>' +
        '<p class="small">' + labels.map(function (l) { return '<span>' + l + '</span>'; }).join(' · ') + '</p>' +
        '<p class="small muted">These fields have not been checked against an official page yet. That is not the same as the university not publishing them.</p></details>';
    });
  }
  function link(href) {
    return has(href) ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(href) + ' ↗</a>' : UNKNOWN;
  }
  function yesNo(v) {
    if (v === true) return '<span class="badge badge-ok">Yes</span>';
    if (v === false) return '<span class="badge badge-warn">No</span>';
    return '<span class="badge">Not checked</span>';
  }

  function wireProfileNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.profile-nav a'));
    /* hrefs are routes (#/university/<id>/<section>) — the section id is the last segment */
    var sections = links.map(function (a) {
      var href = a.getAttribute('href') || '';
      return document.getElementById(href.split('/').pop());
    });
    function onScroll() {
      var y = global.scrollY + 160, active = 0;
      sections.forEach(function (s, i) { if (s && s.offsetTop <= y) active = i; });
      links.forEach(function (a, i) { a.classList.toggle('is-active', i === active); });
    }
    global.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- browse (filters + results) ---------------- */

  var browseWired = false;   /* document-level handlers are attached only once */
  var browseRefresh = null;

  var PAGE_SIZE = 12;
  var STATE_KEY = 'unipath.browse.';

  function readState(key) {
    try {
      var raw = global.sessionStorage.getItem(STATE_KEY + key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function writeState(key, state) {
    try { global.sessionStorage.setItem(STATE_KEY + key, JSON.stringify(state)); } catch (e) {}
  }

  function renderBrowse(opts) {
    opts = opts || {};
    var selected = {};
    var query = U.qs('q') || '';
    var shown = PAGE_SIZE;
    var stateKey = opts.stateKey || 'all';
    var lockCountry = opts.lockCountry === true;
    var hidden = opts.hideGroups || [];

    var preCountry = opts.country || U.qs('c');
    if (preCountry) selected.country = [preCountry];
    var preField = U.qs('field');
    if (preField) selected.field = [preField];
    var preSchol = U.qs('scholarship');
    if (preSchol) selected.scholarship = [preSchol];

    /* Coming back from a profile should land where the user left off. */
    var saved = readState(stateKey);
    var restoreScroll = 0;
    if (saved && !U.qs('q') && !U.qs('field') && !U.qs('scholarship')) {
      if (saved.selected) selected = saved.selected;
      if (lockCountry && preCountry) selected.country = [preCountry];
      query = saved.query || '';
      shown = Math.max(PAGE_SIZE, saved.shown || PAGE_SIZE);
      restoreScroll = saved.scrollY || 0;
    }
    function save() {
      writeState(stateKey, { selected: selected, query: query, shown: shown, scrollY: global.scrollY || 0 });
    }

    var side = document.getElementById('filters');
    var out = document.getElementById('results');
    var bar = document.getElementById('results-bar');
    var activeBox = document.getElementById('active-filters');
    var input = document.getElementById('browse-q');
    if (input) input.value = query;

    function baseList() {
      var list = query ? U.search(query, 999) : U.DB.universities.slice();
      if (!query) list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      return list;
    }

    function countFor(gid, oid, current) {
      var o = U.optionById(gid, oid);
      if (!o) return 0;
      var probe = {};
      for (var k in selected) if (selected.hasOwnProperty(k) && k !== gid) probe[k] = selected[k];
      /* Pass the other selected filters: options such as Field of study read
         them (English-taught + Field uses englishTaughtPrograms). Array.filter
         would otherwise hand the option's test an index as its second argument. */
      return U.applyFilters(current, probe).filter(function (u) { return o.test(u, probe); }).length;
    }

    /* On a phone the filter list is longer than the screen, so it is folded
       away behind one control and the cards stay within reach. */
    var narrowQuery = global.matchMedia ? global.matchMedia('(max-width: 900px)') : null;
    function isNarrow() { return narrowQuery ? narrowQuery.matches : false; }
    var filtersOpen = !isNarrow();
    var filtersTouched = false;

    function drawFilters() {
      var base = baseList();
      var open = side.querySelector('details.filters-box');
      if (open) {
        if (open.open !== filtersOpen) filtersTouched = true;
        filtersOpen = open.open;
      }
      /* Until the user opens or closes it themselves, the panel simply
         follows the width of the window. */
      if (!filtersTouched) filtersOpen = !isNarrow();
      var active = 0;
      for (var k in selected) {
        if (!selected.hasOwnProperty(k)) continue;
        if (lockCountry && k === 'country') continue;
        active += selected[k].length;
      }
      var html = '<div class="filter-head"><h2>Filters</h2>' +
        '<button class="btn btn-quiet btn-sm" type="button" data-clear-filters>Reset</button></div>';
      U.FILTER_GROUPS.forEach(function (g) {
        if (hidden.indexOf(g.id) > -1) return;
        html += '<div class="filter-group"><h3>' + esc(g.title) + '</h3>';
        g.options.forEach(function (o) {
          var on = (selected[g.id] || []).indexOf(o.id) > -1;
          var n = countFor(g.id, o.id, base);
          html += '<label class="filter-opt">' +
            '<input type="checkbox" data-g="' + esc(g.id) + '" data-o="' + esc(o.id) + '"' + (on ? ' checked' : '') + '>' +
            '<span>' + esc(o.label) + '</span><span class="filter-count">' + n + '</span></label>';
        });
        html += '</div>';
      });
      side.innerHTML = '<details class="filters-box"' + (filtersOpen ? ' open' : '') + '>' +
        '<summary class="filters-summary">Filters' + (active ? ' <span class="filter-count">' + active + '</span>' : '') + '</summary>' +
        '<div class="filters-inner">' + html + '</div></details>';
    }

    function drawResults() {
      var base = baseList();
      var list = U.applyFilters(base, selected);

      var chips = [];
      for (var gid in selected) {
        if (!selected.hasOwnProperty(gid)) continue;
        if (lockCountry && gid === 'country') continue;
        selected[gid].forEach(function (oid) {
          var o = U.optionById(gid, oid);
          if (o) chips.push('<button type="button" data-remove-g="' + esc(gid) + '" data-remove-o="' + esc(oid) + '">' + esc(o.label) + '</button>');
        });
      }
      if (query) chips.unshift('<button type="button" data-clear-q>“' + esc(query) + '”</button>');
      activeBox.innerHTML = chips.join('');

      var visible = list.slice(0, shown);
      bar.innerHTML = '<span class="count">' + list.length + ' institution' + (list.length === 1 ? '' : 's') + '</span>' +
        '<span class="small muted">' + (list.length > visible.length
          ? 'Showing ' + visible.length + ' of ' + list.length + ' — search and filters cover the whole list'
          : '') + '</span>' + U.intakeSelectHtml() +
        (list.length ? '<span class="small muted results-level">' + esc(levelCaption(list, selected)) + '</span>' : '');

      out.innerHTML = list.length
        ? visible.map(U.uniCard).join('')
        : '<div class="empty-state"><h3>No institutions match those filters</h3>' +
          '<p data-i18n-html>Try removing a filter, or search for a field such as <em>Business</em>, <em>Computer Science</em> or <em>full scholarship</em>.</p>' +
          '<button class="btn btn-ghost" type="button" data-clear-filters>Reset all filters</button></div>';

      var more = document.getElementById('results-more');
      if (more) {
        more.innerHTML = list.length > visible.length
          ? '<button class="btn btn-ghost" type="button" data-show-more>Show more (' + (list.length - visible.length) + ' left)</button>'
          : '';
      }
      save();
    }

    /* What the listed institutions actually award — taken from the results
       themselves and from the chosen degree filter, never assumed. */
    function levelCaption(list, selected) {
      var cc = list.filter(U.isCommunityCollege).length;
      var want = (selected.degree || []);
      if (cc === list.length) return 'These are community colleges: associate degrees and certificates, plus any bachelor’s programmes a college lists itself.';
      if (want.length === 1 && want[0] === 'associate') return 'Institutions that award associate degrees.';
      if (want.length === 1 && want[0] === 'certificate') return 'Institutions that award certificates.';
      if (cc > 0) return 'Results mix four-year bachelor’s institutions with community colleges — check “Degrees offered” on each card’s profile.';
      return 'Bachelor’s-level information for international applicants.';
    }

    function refresh() { drawFilters(); drawResults(); }

    function reset() { shown = PAGE_SIZE; }

    var api = {
      toggle: function (g, o, on) {
        selected[g] = selected[g] || [];
        var i = selected[g].indexOf(o);
        if (on && i === -1) selected[g].push(o);
        if (!on && i > -1) selected[g].splice(i, 1);
        if (!selected[g].length) delete selected[g];
        reset(); refresh();
      },
      clearFilters: function () {
        selected = {};
        if (lockCountry && preCountry) selected.country = [preCountry];
        reset(); refresh();
      },
      clearQuery: function () { query = ''; var el = document.getElementById('browse-q'); if (el) el.value = ''; reset(); refresh(); },
      remove: function (g, o) {
        if (lockCountry && g === 'country') return;
        selected[g] = (selected[g] || []).filter(function (x) { return x !== o; });
        if (!selected[g].length) delete selected[g];
        reset(); refresh();
      },
      setQuery: function (v) { query = v; reset(); refresh(); },
      showMore: function () { shown += PAGE_SIZE; drawResults(); },
      redraw: drawResults
    };
    browseRefresh = api;

    if (!browseWired) {
      browseWired = true;

      document.addEventListener('change', function (e) {
        var t = e.target;
        if (!browseRefresh || !t.matches || !t.matches('[data-g]')) return;
        browseRefresh.toggle(t.getAttribute('data-g'), t.getAttribute('data-o'), t.checked);
      });

      document.addEventListener('click', function (e) {
        if (!browseRefresh) return;
        var t = e.target;
        if (t.closest && t.closest('[data-clear-filters]')) { browseRefresh.clearFilters(); return; }
        if (t.closest && t.closest('[data-clear-q]')) { browseRefresh.clearQuery(); return; }
        if (t.closest && t.closest('[data-show-more]')) { browseRefresh.showMore(); return; }
        var rm = t.closest ? t.closest('[data-remove-g]') : null;
        if (rm) browseRefresh.remove(rm.getAttribute('data-remove-g'), rm.getAttribute('data-remove-o'));
      });

      document.addEventListener('input', function (e) {
        if (browseRefresh && e.target && e.target.id === 'browse-q') browseRefresh.setQuery(e.target.value.trim());
      });

      document.addEventListener('unipath:compare', function () {
        if (browseRefresh && document.getElementById('results')) browseRefresh.redraw();
      });
      document.addEventListener('unipath:intake', function () {
        if (browseRefresh && document.getElementById('results')) browseRefresh.redraw();
      });
    }

    refresh();

    if (narrowQuery && narrowQuery.addEventListener) {
      narrowQuery.addEventListener('change', function () {
        if (!filtersTouched && document.getElementById('filters')) drawFilters();
      });
    }

    if (restoreScroll) {
      global.requestAnimationFrame(function () {
        global.requestAnimationFrame(function () { global.scrollTo(0, restoreScroll); });
      });
    }
    var ticking = false;
    global.addEventListener('scroll', function () {
      if (ticking || !document.getElementById('results')) return;
      ticking = true;
      global.requestAnimationFrame(function () { ticking = false; if (document.getElementById('results')) save(); });
    }, { passive: true });
  }

  /* ---------------- country page ---------------- */

  function acc(title, body, open) {
    return '<details class="acc"' + (open ? ' open' : '') + '><summary>' + esc(title) + '</summary>' +
      '<div class="acc-body">' + body + '</div></details>';
  }

  /* Tuition figures are comparable only within the same currency, period,
     academic year and student category, so the summary keeps those apart.
     A confirmed tuition of zero is a real figure and is counted; only tuition
     is compared here, never billed costs or a full budget. */
  function costYearKey(u) {
    var y = U.costYear(u);
    var m = y && /(20\d\d)\s*[–\-\/]\s*(?:20)?(\d\d)/.exec(y);
    if (m) return m[1] + '–' + m[2];
    m = y && /(20\d\d)/.exec(y);
    return m ? m[1] : '';
  }
  function tuitionSummary(list) {
    var groups = {};
    list.forEach(function (u) {
      var a = U.tuitionAmount(u);
      if (a === null) return;
      var cat = (u.costs && u.costs.studentCategory) || '';
      var key = [U.costCurrency(u) || '?', U.costPeriod(u), costYearKey(u), cat].join('|');
      (groups[key] = groups[key] || []).push({ u: u, a: a });
    });
    return Object.keys(groups).map(function (k) {
      var rows = groups[k].sort(function (x, y) { return x.a - y.a; });
      var paid = rows.filter(function (r) { return r.a > 0; });
      var parts = k.split('|');
      return { currency: parts[0], period: parts[1], year: parts[2], category: parts[3], rows: rows,
        free: rows.length - paid.length, low: paid[0] || null, high: paid[paid.length - 1] || null };
    }).sort(function (x, y) { return y.rows.length - x.rows.length || (y.year > x.year ? 1 : -1); });
  }

  function renderCountry(code) {
    var c = U.country(code);
    var list = U.unisByCountry(code).sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (!c || !c.overview) {
      document.getElementById('main').innerHTML =
        '<div class="wrap section"><div class="empty-state"><h3>Country not found</h3><p><a href="#/countries">Back to countries</a></p></div></div>';
      return;
    }
    document.title = c.name + ' — UniPath';

    var withFullRide = list.filter(function (u) { return U.fullRide(u).available === true; }).length;
    var englishTaught = list.filter(function (u) { return u.englishTaught === true; }).length;
    var freeTuition = list.filter(function (u) { return U.tuitionAmount(u) === 0; }).length;

    var head = '<section class="page-head"><div class="wrap">' +
      '<div class="crumbs small"><a href="#/">Home</a> › <a href="#/countries">Countries</a> › ' + esc(c.name) + '</div>' +
      '<h1>' + c.flag + ' <span>' + esc(c.name) + '</span></h1>' +
      '<p>' + esc(c.tagline) + '</p>' +
      '<div class="hero-stats">' +
        '<div class="hero-stat"><b>' + list.length + '</b><span>Universities &amp; colleges listed</span></div>' +
        '<div class="hero-stat"><b>' + withFullRide + '</b><span>With a full scholarship route</span></div>' +
        '<div class="hero-stat"><b>' + englishTaught + '</b><span>With English-taught degrees</span></div>' +
        (freeTuition ? '<div class="hero-stat"><b>' + freeTuition + '</b><span>With no tuition fee</span></div>' : '') +
      '</div>' +
      '</div></section>';

    /* Catalogue first: on a phone the universities must be reachable at once. */
    var browse = '<section class="section"><div class="wrap">' +
      '<div class="section-head" style="margin-bottom:16px"><h2>Universities &amp; colleges in ' + esc(c.name) + '</h2>' +
        '<p>Search and filters work across all ' + list.length + ' institutions in ' + esc(c.name) + ', not only the cards shown.</p></div>' +
      '<div class="searchbox searchbox-flat" style="max-width:600px">' +
        '<span class="search-icon">🔍</span>' +
        '<input type="search" id="browse-q" placeholder="Search universities, colleges, cities, programs, scholarships…" aria-label="Search universities" autocomplete="off">' +
      '</div>' +
      '<div class="pill-row" style="margin-top:14px">' + c.fieldsPopular.map(function (f) {
        var fl = U.field(f);
        return '<a class="badge badge-flat" href="#/universities?c=' + c.code + '&field=' + fl.id + '">' + fl.icon + ' ' + esc(fl.label) + '</a>';
      }).join('') + '</div>' +
      '<div class="browse-layout" style="margin-top:20px">' +
        '<aside class="filters" id="filters" aria-label="Filters"></aside>' +
        '<div><div class="results-bar" id="results-bar"></div>' +
        '<div class="active-filters" id="active-filters"></div>' +
        '<div class="grid grid-3" id="results"></div>' +
        '<div class="results-more" id="results-more"></div></div>' +
      '</div></div></section>';

    /* Everything explanatory sits below, folded away. */
    var groups = tuitionSummary(list);
    var noTuition = list.filter(function (u) { return U.tuitionText(u) === null; });
    var costBody = (groups.length
      ? groups.map(function (g) {
          var sem = g.period === 'semester';
          var title = (g.year ? 'Academic year ' + g.year : 'Academic year not stated') + ' · ' + g.currency + ' · ' + (sem ? 'per semester' : 'per year') +
            (g.category ? ' · ' + g.category : '');
          var out = '<h4 class="cost-group-title">' + esc(title) + '</h4><dl class="uni-facts">' +
            '<div><dt>Institutions in this group</dt><dd>' + g.rows.length + ' / ' + list.length + '</dd></div>';
          if (g.free) out += '<div><dt>Confirmed no tuition fee</dt><dd>' + g.free + '</dd></div>';
          if (g.low && g.high && g.low !== g.high) {
            out += '<div><dt>' + (g.free ? 'Lowest tuition among fee-charging universities' : 'Lowest tuition') + '</dt><dd><a href="' + U.uniUrl(g.low.u) + '">' + esc(U.displayName(g.low.u)) + '</a> — ' + esc(U.money(g.low.a, g.currency)) + '</dd></div>' +
              '<div><dt>Highest tuition</dt><dd><a href="' + U.uniUrl(g.high.u) + '">' + esc(U.displayName(g.high.u)) + '</a> — ' + esc(U.money(g.high.a, g.currency)) + '</dd></div>';
          } else if (g.low) {
            out += '<div><dt>Tuition</dt><dd><a href="' + U.uniUrl(g.low.u) + '">' + esc(U.displayName(g.low.u)) + '</a> — ' + esc(U.money(g.low.a, g.currency)) + '</dd></div>';
          }
          return out + '</dl>';
        }).join('') +
        '<p class="small muted">Figures are grouped by academic year, currency and period, and are compared only inside a group. A lowest or highest figure in one group cannot be set against another group.</p>'
      : '<p>No tuition figure is confirmed for this country yet.</p>') +
      '<p class="small muted" style="margin-top:10px">Only tuition is compared here, because universities publish very different totals: some quote a single comprehensive fee, some the charges they bill, some a full cost of attendance with books and travel. Each profile shows which figure it is.</p>' +
      (noTuition.length ? '<p class="small muted">No tuition figure is recorded for ' + noTuition.length + ' of these institutions; their cards show the status of the figure and their profiles link to the official cost page.</p>' : '');

    var aidBody = '<p>' + withFullRide + ' of ' + list.length + ' universities list a full-scholarship route, and ' +
      list.filter(function (u) { return U.needBased(u).availableToInternational === true; }).length +
      ' confirm need-based aid for international students. A scholarship is only called a full ride where the university states what it covers.</p>' +
      '<p class="small muted">An award you might win is not the same as a guaranteed cost of zero. Each profile lists the conditions.</p>' +
      '<p><a class="btn btn-ghost btn-sm" href="#/universities?c=' + c.code + '&scholarship=full-ride-intl">Show institutions with a full-level award</a></p>';

    var info = '<section class="section"><div class="wrap">' +
      '<div class="section-head"><span class="eyebrow">Before you apply</span><h2>Studying in ' + esc(c.name) + '</h2></div>' +
      '<div class="acc-list">' +
        acc('Studying in ' + c.name, '<p>' + esc(c.overview) + '</p>', true) +
        acc('How applications work', '<p>' + esc(c.applicationInfo) + '</p>') +
        acc('Costs in this database', costBody) +
        acc('Scholarships and aid', aidBody) +
        acc('Important notes for international students',
          '<ul class="stack" style="padding-left:1.1em;margin:0">' + c.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>') +
        acc('Official sources for ' + c.name,
          '<ul class="source-list">' + c.sources.map(function (s) {
            return '<li>→ <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
          }).join('') + '</ul>') +
      '</div></div></section>';

    document.getElementById('main').innerHTML = head + browse + info;
    renderBrowse({ country: code, lockCountry: true, hideGroups: ['country'], stateKey: 'country:' + code });
  }

  /* ---------------- compare ---------------- */

  function renderCompare() {
    var ids = U.compareGet();
    var out = document.getElementById('compare-out');
    if (!ids.length) {
      out.innerHTML = '<div class="empty-state"><h3>Nothing to compare yet</h3>' +
        '<p data-i18n-html>Pick 2–3 universities using the <strong>+ Compare</strong> button on any university card or profile.</p>' +
        '<a class="btn btn-primary" href="#/universities">Browse universities</a></div>';
      return;
    }
    var us = ids.map(U.uniById).filter(Boolean);

    var ROWS = [
      ['group', 'Basics'],
      ['Country', function (u) { var c = U.country(u.country); return c.flag + ' <span>' + esc(c.name) + '</span>'; }],
      ['Location', function (u) { return '<span>' + esc(u.city) + '</span>' + (has(u.region) ? ', <span>' + esc(u.region) + '</span>' : ''); }],
      ['Institution type', function (u) { return '<strong>' + esc(U.institutionKindLabel(u)) + '</strong><br><span class="small">' + or(u.type) + '</span>'; }],
      ['Degrees offered', function (u) { return esc(U.degreesLabel(u)) + (U.isCommunityCollege(u) ? '<br><span class="small muted">' + esc(U.ccBadge(u)) + '</span>' : ''); }],
      ['English-taught degree', function (u) { return yesNo(u.englishTaught); }],
      ['Fields fully in English', function (u) {
        var en = U.englishPrograms(u);
        return en.length ? en.map(function (p) { return '<span>' + esc(U.field(p).label) + '</span>'; }).join('<br>')
          : (u.englishTaught === true ? '<span class="unknown">Not checked</span>' : '<span class="unknown">None confirmed</span>');
      }],
      ['group', 'Money'],
      ['Tuition', function (u) {
        var t = U.tuitionText(u);
        return t ? esc(t) + '<span class="small muted">' + esc(U.perPeriod(u, t)) + '</span>' +
          '<br><span class="small muted">Tuition only — not comparable with a full budget</span>' : UNKNOWN;
      }],
      ['Billed by the university', function (u) {
        var b = U.billedAmount(u);
        return b === null ? UNKNOWN : '<span>' + esc(U.money(b, U.costCurrency(u))) + '</span><br><span class="small muted">' + esc(U.billedLabel(u)) + '</span>';
      }],
      ['Full budget (cost of attendance)', function (u) { return U.budgetText(u) ? esc(U.budgetText(u)) : UNKNOWN; }],
      ['Academic year of the figures', function (u) { return U.costYear(u) ? esc(U.costYear(u)) : UNKNOWN; }],
      ['What the figures cover', function (u) { var i = U.costIncludes(u); return i ? '<span class="small">' + esc(i) + '</span>' : UNKNOWN; }],
      ['Application fee', function (u) { return U.feeLabel(u); }],
      ['Fee waiver for international applicants', function (u) { return esc(U.feeWaiverLabel(u)); }],
      ['group', 'Requirements'],
      ['IELTS requirement', function (u) { var l = U.ieltsLabel(u); return l ? esc(l) : UNKNOWN; }],
      ['TOEFL requirement', function (u) {
        var lines = U.toeflLines(u);
        return lines.length ? lines.map(function (l) { return '<span>' + esc(l) + '</span>'; }).join('<br>') : UNKNOWN;
      }],
      ['SAT / ACT policy', function (u) { return esc(U.satLabel(u)); }],
      ['Next application deadline', function (u) {
        var n = U.nextDeadline(u);
        return n.state === 'upcoming' ? '<strong>' + esc(U.deadlineCardText(u)) + '</strong>' : '<span class="unknown">' + esc(U.deadlineCardText(u)) + '</span>';
      }],
      ['Application deadlines', function (u) {
        var d = ((u.admissions && u.admissions.deadlines) || []).filter(U.isApplicationDeadline);
        if (!has(d)) return UNKNOWN;
        return d.map(function (x) { return '<span>' + esc(x.name) + '</span><br>' + U.deadlineHtml(x); }).join('<br><br>');
      }],
      ['group', 'Who gets in'],
      ['Acceptance rate', function (u) { var o = (u.stats || {}).official || {}; return o.admitRate ? '<strong>' + esc(o.admitRate.value) + '%</strong>' : '<span class="unknown">Not checked</span>'; }],
      ['Average GPA', function (u) { var o = (u.stats || {}).official || {}; return o.gpa && has(o.gpa.average) ? '<strong>' + esc(o.gpa.average) + '</strong>' : '<span class="unknown">Not checked</span>'; }],
      ['SAT statistics', function (u) {
        var o = (u.stats || {}).official || {}, x = o.sat;
        if (!x && U.satPolicy(u) === 'not-applicable') return '<span class="muted">Not part of this admission route</span>';
        if (!x) return U.satPolicy(u) === 'not-used' ? '<span class="muted">Not used in admission</span>'
          : '<span class="unknown">' + (o.satNotPublished ? 'Not published in the official source checked' : 'Not checked') + '</span>';
        var bits = [];
        if (has(x.mean)) bits.push('Average: <strong>' + esc(x.mean) + '</strong>');
        var p = x.composite, med = has(x.median) ? x.median : (p && has(p[1]) ? p[1] : null);
        if (has(med)) bits.push('Median: <strong>' + esc(med) + '</strong>');
        if (p && has(p[0]) && has(p[2])) bits.push('Middle 50%: <strong>' + esc(p[0]) + '–' + esc(p[2]) + '</strong>');
        if (!p && (x.rw || x.math)) bits.push('<span class="small">Section scores only</span>');
        bits.push('<span class="small muted">' + esc(x.cohort === 'admitted' ? 'Admitted students' : x.cohort === 'enrolled' ? 'Enrolled first-year students' : 'Sample not stated') +
          (x.submittersOnly ? ', score submitters only' : '') + '</span>');
        return bits.join('<br>');
      }],
      ['group', 'Scholarships'],
      ['Largest award', function (u) {
        var fr = U.fullRide(u);
        if (fr.available === true) return '<strong>' + esc(U.awardLabel(u)) + '</strong><br><span class="small muted">Open to internationals: ' +
          (fr.internationalEligible === true ? 'yes' : fr.internationalEligible === false ? 'no' : 'not confirmed') + '</span>';
        return yesNo(fr.available) + (fr.available === true ? '<br><span class="small muted">Open to internationals: ' +
          (fr.internationalEligible === true ? 'yes' : fr.internationalEligible === false ? 'no' : 'not confirmed') + '</span>' : '');
      }],
      ['Merit scholarships', function (u) {
        var m = U.meritList(u);
        return m.length ? m.map(function (x) { return '• ' + esc(x.name) + (has(x.amount) ? ' — ' + esc(x.amount) : ''); }).join('<br>') : '<span class="unknown">None listed</span>';
      }],
      ['Need-based aid for internationals', function (u) { return yesNo(U.needBased(u).availableToInternational); }],
      ['Meets full demonstrated need', function (u) { return yesNo(U.needBased(u).meetsFullNeed); }],
      ['group', 'Programs & applying'],
      ['Business (field area)', function (u) { return (u.programs || []).indexOf('business') > -1 ? '<span class="badge badge-ok">Yes</span>' : '<span class="badge">Not listed</span>'; }],
      ['Economics (field area)', function (u) { return (u.programs || []).indexOf('economics') > -1 ? '<span class="badge badge-ok">Yes</span>' : '<span class="badge">Not listed</span>'; }],
      ['Computer Science (field area)', function (u) { return (u.programs || []).indexOf('computer-science') > -1 ? '<span class="badge badge-ok">Yes</span>' : '<span class="badge">Not listed</span>'; }],
      ['Application portal', function (u) {
        return has(u.links.applicationPortal)
          ? '<a href="' + esc(u.links.applicationPortal) + '" target="_blank" rel="noopener">Open portal ↗</a>' : UNKNOWN;
      }],
      ['Last verified', function (u) { return or(u.lastVerified); }]
    ];

    var head = '<tr><th>Criterion</th>' + us.map(function (u) {
      return '<th><a href="' + U.uniUrl(u) + '" style="color:#fff">' + esc(u.name) + '</a><br>' +
        '<span class="small" style="font-weight:400;opacity:.8">' + U.country(u.country).flag + ' <span>' + esc(u.city) + '</span></span></th>';
    }).join('') + '</tr>';

    var body = ROWS.map(function (r) {
      if (r[0] === 'group') {
        return '<tr class="row-group"><th colspan="' + (us.length + 1) + '">' + esc(r[1]) + '</th></tr>';
      }
      return '<tr><th>' + esc(r[0]) + '</th>' + us.map(function (u) { return '<td>' + r[1](u) + '</td>'; }).join('') + '</tr>';
    }).join('');

    out.innerHTML = '<div class="table-scroll"><table class="compare-table"><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>' +
      '<div class="notice notice-warn" style="margin-top:20px"><span class="ico">⚠️</span><div>' + esc(U.DISCLAIMER) + '</div></div>' +
      '<p style="margin-top:16px"><button class="btn btn-ghost" type="button" data-tray-clear>Clear comparison</button></p>';
  }

  /* ---------------- saved institutions and their deadlines ---------------- */

  function renderSaved() {
    var main = document.getElementById('main');
    document.title = 'Saved — UniPath';
    var ids = U.savedGet(), intake = U.intakeGet();
    var head = '<section class="page-head"><div class="wrap"><h1>Saved institutions</h1>' +
      '<p>Your list and the confirmed application deadlines for the intake you choose.</p></div></section>';
    var note = '<div class="notice notice-info"><span class="ico">ℹ️</span><div>This list is stored only in this browser on this device. It is not an account, it does not sync to other devices, and clearing the browser data removes it. UniPath sends no reminders — check the dates yourself.</div></div>';
    if (!ids.length) {
      main.innerHTML = head + '<section class="section"><div class="wrap">' + note +
        '<div class="empty-state" style="margin-top:18px"><h3>Nothing saved yet</h3>' +
        '<p data-i18n-html>Use the <strong>☆ Save</strong> button on a card or a profile.</p>' +
        '<a class="btn btn-primary" href="#/universities">Browse universities</a></div></div></section>';
      return;
    }
    var rows = [];
    ids.map(U.uniById).filter(Boolean).forEach(function (u) {
      var apps = U.roundsOf(u).filter(U.isApplicationDeadline).filter(function (d) {
        return U.roundStatus(d) === 'confirmed' && U.roundInIntake(d, u, intake);
      });
      rows.push({ u: u, rounds: apps });
    });
    var dated = [];
    rows.forEach(function (r) { r.rounds.forEach(function (d) { if (has(d.dateISO)) dated.push({ u: r.u, d: d }); }); });
    dated.sort(function (a, b) { return String(a.d.dateISO).localeCompare(String(b.d.dateISO)); });
    var table = dated.length
      ? '<div class="table-scroll"><table class="cost-table saved-table"><thead><tr><th>Deadline</th><th>Institution</th><th>Round</th><th>Intake</th><th>State</th><th>Source</th></tr></thead><tbody>' +
        dated.map(function (x) {
          var st = U.roundStateLabel(x.d);
          return '<tr class="' + (U.roundState(x.d) === 'closed' ? 'is-past' : '') + '"><td><strong>' + esc(U.roundWhen(x.d)) + '</strong></td>' +
            '<td><a href="' + U.uniUrl(x.u) + '/admissions">' + esc(x.u.name) + '</a></td>' +
            '<td>' + esc(x.d.name) + '</td><td>' + esc(U.roundIntake(x.d) || '') + '</td>' +
            '<td>' + esc(st || '') + '</td>' +
            '<td>' + (has(x.d.source) ? '<a href="' + esc(x.d.source) + '" target="_blank" rel="noopener">Official page ↗</a>' +
              (has(x.d.verified) ? '<br><span class="small muted">Checked ' + esc(x.d.verified) + '</span>' : '') : '') + '</td></tr>';
        }).join('') + '</tbody></table></div>'
      : '<p class="unknown">No confirmed, dated application deadline is recorded for the saved institutions in this intake.</p>';
    var without = rows.filter(function (r) { return !r.rounds.some(function (d) { return has(d.dateISO); }); });
    main.innerHTML = head + '<section class="section"><div class="wrap">' + note +
      '<div class="intake-bar" style="margin-top:18px">' + U.intakeSelectHtml() +
        '<span class="small muted">Only deadlines confirmed for the current cycle are listed. Dates from earlier cycles are never shown here.</span></div>' +
      '<h2 style="margin-top:18px">Confirmed deadlines</h2>' + table +
      (without.length ? '<h3 style="margin-top:22px">Saved, but no confirmed dated deadline for this intake</h3><ul class="stack">' +
        without.map(function (r) { return '<li><a href="' + U.uniUrl(r.u) + '/admissions">' + esc(r.u.name) + '</a> — <span class="unknown">' + esc(U.deadlineCardText(r.u)) + '</span></li>'; }).join('') + '</ul>' : '') +
      '<h2 style="margin-top:28px">Your list (' + rows.length + ')</h2>' +
      '<div class="grid grid-3">' + rows.map(function (r) { return U.uniCard(r.u); }).join('') + '</div>' +
      '</div></section>';
  }

  function leaveBrowse() { browseRefresh = null; }

  global.UPPages = {
    leaveBrowse: leaveBrowse,
    renderProfile: renderProfile,
    scrollToSection: scrollToSection,
    renderBrowse: renderBrowse,
    renderCountry: renderCountry,
    renderCompare: renderCompare,
    renderSaved: renderSaved
  };
})(window);
