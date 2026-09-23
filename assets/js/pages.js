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
      ['insurance', 'Health insurance'], ['books', 'Books & other expenses']
    ];
    return '<div class="covers">' + map.map(function (m) {
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
            (fr.available === true && fr.internationalEligible === true ? '<span class="badge">★ Full scholarship for internationals</span>' : '') +
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
      '<dl class="deflist">' +
        row('Country', c.flag + ' <span>' + esc(c.name) + '</span>') +
        row('City', '<span>' + esc(u.city) + '</span>' + (has(u.region) ? ', <span>' + esc(u.region) + '</span>' : '')) +
        row('Founded', or(u.founded)) +
        row('University type', or(u.type)) +
        row('Language of instruction', or(u.languageOfInstruction)) +
        row('Official website', link(u.links.website)) +
        row('Location / map', has(u.city) ? '<a href="https://www.openstreetmap.org/search?query=' +
          encodeURIComponent(u.name + ', ' + u.city) + '" target="_blank" rel="noopener">View ' + esc(u.city) + ' on OpenStreetMap ↗</a>' : UNKNOWN) +
      '</dl></section>';

    /* Admissions */
    var deadlines = has(a.deadlines)
      ? '<div class="table-scroll"><table class="data-table"><thead><tr><th>Round</th><th>Deadline</th><th>Notes</th></tr></thead><tbody>' +
        a.deadlines.map(function (d) {
          return '<tr><td><strong>' + esc(d.name) + '</strong></td><td>' + U.deadlineHtml(d) + '</td><td>' + (has(d.note) ? esc(d.note) : '—') + '</td></tr>';
        }).join('') + '</tbody></table></div>'
      : '<p>' + UNKNOWN + '</p>';

    var fee = a.applicationFee || {};
    var admissions = '<section class="profile-section" id="admissions"><h2>Admissions</h2>' +
      '<h3 style="margin-top:6px">Application deadlines</h3>' + deadlines +
      '<dl class="deflist" style="margin-top:18px">' +
        row('Application platform', has(a.platforms) ? a.platforms.map(esc).join('<br>') : UNKNOWN) +
        row('Application fee', U.feeLabel(u) + (has(fee.note) ? '<br><span class="small muted">' + esc(fee.note) + '</span>' : '')) +
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
    function testRow(label, t) {
      if (!t) return row(label, UNKNOWN);
      var v = [];
      if (t.scales && t.scales.length) {
        v = U.toeflLines(u).map(function (l) { return '<strong>' + esc(l) + '</strong>'; });
      } else {
        if (has(t.min)) v.push('<strong>' + (t.lowestLevel ? 'Lowest minimum (varies by course): ' : 'Minimum: ') + esc(t.min) + '</strong>');
        if (has(t.recommended)) v.push('<strong>Recommended / competitive: ' + esc(t.recommended) + '</strong>');
      }
      if (!has(t.min) && !has(t.recommended)) v.push('<span class="muted">Not published by the university.</span>');
      if (has(t.estimate)) {
        v.push('<span class="estimate-line"><span class="badge badge-warn">UniPath estimate</span> Aim for <strong>' + esc(t.estimate) + '</strong></span>');
        if (has(eng.estimateBasis)) v.push('<span class="small muted">' + esc(eng.estimateBasis) + '</span>');
        v.push('<span class="small muted">This is guidance, not an official requirement or a guarantee of admission.</span>');
      }
      if (has(t.note)) v.push('<span class="small muted">' + esc(t.note) + '</span>');
      return row(label, v.length ? v.join('<br>') : UNKNOWN);
    }
    var english = '<section class="profile-section" id="english"><h2>English requirements</h2>' +
      '<div class="notice notice-info"><span class="ico">ℹ️</span><div data-i18n-html>A <strong>minimum</strong> score is what makes an application valid. A <strong>recommended or competitive</strong> score is what successful applicants actually score. Where a university publishes only one of the two, that is shown.</div></div>' +
      '<dl class="deflist" style="margin-top:18px">' +
        testRow('IELTS', eng.ielts) +
        testRow('TOEFL', eng.toefl) +
        testRow('Duolingo English Test', eng.duolingo) +
        row('Waiver / exemption', or(eng.waiver)) +
        row('Notes', or(eng.note)) +
      '</dl></section>';

    /* Academics */
    var gpa = ac.gpa;
    var gpaText = !gpa ? (u.stats ? '<span class="muted">No minimum GPA published — see “Who gets in” below for real averages and a target band.</span>' : UNKNOWN) : (typeof gpa === 'object'
      ? (has(gpa.min) ? '<strong>' + esc(gpa.min) + (has(gpa.scale) ? ' / ' + esc(gpa.scale) : '') + '</strong>' : '') +
        (has(gpa.note) ? '<br><span class="small muted">' + esc(gpa.note) + '</span>' : '')
      : esc(gpa));
    function testPolicyRow(label, t) {
      if (!t) return row(label, UNKNOWN);
      var POLICY = { required: 'Required', 'required-alternatives': 'Testing required — alternatives accepted', optional: 'Optional',
        accepted: 'Accepted — requirement not confirmed', 'not-used': 'Not used' };
      var p = has(t.label) ? '<strong>' + esc(t.label) + '</strong>'
        : (POLICY[t.policy] ? '<strong>' + esc(POLICY[t.policy]) + '</strong>' : UNKNOWN);
      return row(label, p + (has(t.note) ? '<br><span class="small muted">' + esc(t.note) + '</span>' : ''));
    }
    function range3(a) { return a ? esc(a[0]) + ' / <strong>' + esc(a[1]) + '</strong> / ' + esc(a[2]) : null; }
    function statsBlock(st) {
      if (!st) return '';
      var o = st.official || {}, t = st.targets || {}, rows = '';
      if (o.admitRate) rows += row('Acceptance rate', '<strong>' + esc(o.admitRate.value) + '%</strong>' +
        (has(o.admitRate.applied) ? ' <span class="small muted">(' + Number(o.admitRate.admitted).toLocaleString('en-US') + ' admitted of ' +
          Number(o.admitRate.applied).toLocaleString('en-US') + ' applicants' + (o.admitRate.year ? ', ' + esc(o.admitRate.year) : '') + ')</span>' : ''));
      if (o.intlAdmitRate) rows += row('International acceptance rate', '<strong>' + esc(o.intlAdmitRate.value) + '%</strong> <span class="small muted">(' +
        Number(o.intlAdmitRate.admitted).toLocaleString('en-US') + ' of ' + Number(o.intlAdmitRate.applied).toLocaleString('en-US') + ')</span>');
      if (has(o.history)) rows += row('Previous years', esc(o.history));
      if (o.gpa && (has(o.gpa.average) || has(o.gpa.note))) rows += row('Average high school GPA',
        (has(o.gpa.average) ? '<strong>' + esc(o.gpa.average) + '</strong><br>' : '') + (has(o.gpa.note) ? '<span class="small muted">' + esc(o.gpa.note) + '</span>' : ''));
      if (o.sat) {
        var sat = [];
        if (o.sat.composite) sat.push('Total: ' + range3(o.sat.composite));
        if (has(o.sat.mean)) sat.push('Average: <strong>' + esc(o.sat.mean) + '</strong>');
        if (o.sat.math) sat.push('Math: ' + range3(o.sat.math));
        if (o.sat.rw) sat.push('Reading & Writing: ' + range3(o.sat.rw));
        if (o.sat.composite || o.sat.math) sat.push('<span class="small muted">25th / <strong>median</strong> / 75th percentile' +
          (o.sat.submitted ? ' · ' + esc(o.sat.submitted) + ' of the class submitted an SAT' : '') + '</span>');
        rows += row('SAT of admitted students', sat.join('<br>'));
      }
      if (o.act) rows += row('ACT composite', range3(o.act) + ' <span class="small muted">(25th / median / 75th)</span>');
      if (has(o.actMean)) rows += row('ACT average', '<strong>' + esc(o.actMean) + '</strong>');
      if (has(o.other)) rows += row('Other', list(o.other));
      if (has(o.classRank)) rows += row('Class rank', esc(o.classRank));
      if (has(o.note)) rows += row('Note', esc(o.note));

      var html = '<div class="card" style="margin-top:22px"><div class="card-body">' +
        '<h3 style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">📊 Who gets in' +
          (rows ? ' <span class="badge badge-ok">Official data</span>' : '') + '</h3>' +
        '<p class="small muted" style="margin:0 0 6px">' + esc(st.term) +
          (st.source ? ' · Source: <a href="' + esc(st.source.url) + '" target="_blank" rel="noopener">' + esc(st.source.label) + ' ↗</a>' : '') + '</p>' +
        (rows ? '<dl class="deflist">' + rows + '</dl>' : '');
      if (t.ielts || t.sat || t.gpa) {
        html += '<div class="target-box">' +
          '<h4>🎯 Target band <span class="badge badge-warn">UniPath estimate</span></h4>' +
          '<div class="target-grid">' +
            '<div><span>IELTS</span><b>' + or(t.ielts) + '</b></div>' +
            '<div><span>SAT</span><b>' + or(t.sat) + '</b></div>' +
            '<div><span>GPA</span><b>' + or(t.gpa) + '</b></div>' +
          '</div>' +
          (has(t.basis) ? '<p class="small muted" style="margin:10px 0 0">' + esc(t.basis) + '</p>' : '') +
          '<p class="tiny muted" style="margin:6px 0 0">UniPath estimates are guidance for planning, not official requirements or cut-offs. Meeting them does not guarantee admission.</p>' +
        '</div>';
      }
      return html + '</div></div>';
    }

    var academics = '<section class="profile-section" id="academics"><h2>Academic requirements</h2>' +
      '<div class="notice notice-warn"><span class="ico">⚠️</span><div data-i18n-html>Requirements are <strong>not the same for every applicant</strong>. Individual faculties, schools and programmes often set higher bars than the university minimum, and international applicants are frequently assessed on a separate track. Check the requirement for your exact programme and entry year.</div></div>' +
      '<dl class="deflist" style="margin-top:18px">' +
        row('GPA', gpaText) +
        testPolicyRow('SAT', ac.sat) +
        testPolicyRow('ACT', ac.act) +
        row('Other standardized tests', or(ac.otherTests)) +
        row('International qualifications', or(ac.internationalQualifications)) +
      '</dl>' + statsBlock(u.stats) + '</section>';

    /* Scholarships */
    var frCard = '<article class="card fullride-card" style="margin-bottom:16px"><div class="card-body">' +
      '<h3 style="display:flex;align-items:center;gap:10px">★ Full-ride / full scholarship ' +
        (fr.available === true ? '<span class="badge badge-ok">Available</span>'
         : fr.available === false ? '<span class="badge badge-warn">Not available</span>'
         : '<span class="badge">Not confirmed</span>') + '</h3>' +
      '<dl class="deflist">' +
        row('Open to international students', yesNo(fr.internationalEligible)) +
        row('What it covers', coverRow(fr.covers)) +
        row('Basis', or(fr.basis)) +
        row('Renewable', yesNo(fr.renewable)) +
        row('How competitive', or(fr.competitiveness)) +
        row('How to apply', or(fr.howToApply)) +
      '</dl>' +
      (has(fr.note) ? '<div class="notice notice-warn" style="margin-top:14px"><span class="ico">⚠️</span><div>' + esc(fr.note) + '</div></div>' : '') +
      '</div></article>';

    var meritCards = merit.length ? merit.map(function (m) {
      return '<article class="card scholarship-card card-pad-sm" style="margin-bottom:12px"><div class="card-body">' +
        '<h4 style="margin:0 0 8px">' + esc(m.name) + '</h4>' +
        '<dl class="deflist">' +
          row('Amount', or(m.amount)) +
          row('Eligibility', or(m.eligibility)) +
          row('Deadline', or(m.deadline)) +
          row('Automatic or separate application', or(m.application)) +
          row('Renewable', yesNo(m.renewable)) +
          (has(m.note) ? row('Note', esc(m.note)) : '') +
        '</dl></div></article>';
    }).join('') : '<p class="muted">No merit scholarships are listed for this university on the pages consulted.</p>';

    var needCard = '<article class="card need-card"><div class="card-body">' +
      '<h3>Need-based financial aid</h3>' +
      '<dl class="deflist">' +
        row('Available to international students', yesNo(need.availableToInternational)) +
        row('Meets full demonstrated need for internationals', yesNo(need.meetsFullNeed)) +
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
              (f.id === 'tuition' ? '<span class="small muted">' + esc(U.perPeriod(u)) + '</span>' : '') + '</dd></div>';
          }).join('')
        : '<div class="cost-figure"><dt>Tuition</dt><dd>' + UNKNOWN + '</dd></div>') +
      '</div>' +
      (U.costIncludes(u) ? '<p class="small" style="margin-top:10px"><strong>What the figures cover:</strong> ' + esc(U.costIncludes(u)) + '</p>' : '') +
      '<p class="small muted" style="margin-top:6px">' +
        'Currency: <span>' + esc(U.costCurrency(u) || 'not stated') + '</span> · ' +
        'Academic year: <span>' + esc(U.costYear(u) || 'not stated') + '</span>' +
        (costSrc ? ' · Source: <a href="' + esc(costSrc.url) + '" target="_blank" rel="noopener">' + esc(costSrc.label) + '</a>' : '') +
        (has(u.lastVerified) ? ' · Checked: <span>' + esc(u.lastVerified) + '</span>' : '') +
      '</p>';

    var costs_ = '<section class="profile-section" id="costs"><h2>Costs</h2>' +
      costSummary +
      '<h3 style="margin-top:22px">Published breakdown</h3>' +
      costTable +
      (has(costs.note) ? '<div class="notice" style="margin-top:14px"><span class="ico">💰</span><div>' + esc(costs.note) + '</div></div>' : '') +
      '<div class="notice notice-info" style="margin-top:12px"><span class="ico">↓</span><div><strong>Possible scholarship reduction.</strong> ' +
        (U.fullRide(u).available === true
          ? 'A full scholarship at this university can reduce the tuition line to zero — see the scholarships section for exactly what is and is not covered. An award is not a guarantee: read the conditions before you count on it.'
          : U.meritList(u).length
            ? 'Merit scholarships listed above reduce the tuition line if you win one. Housing, food and insurance usually remain payable.'
            : 'No confirmed award is listed that would reduce these figures. Budget for the full amount until the university confirms otherwise.') +
      '</div></div></section>';

    /* Programs */
    var progs = (u.programs || []).map(function (p) {
      var f = U.field(p);
      return '<a class="prog-group" href="#/universities?field=' + encodeURIComponent(f.id) + '">' +
        '<h4>' + f.icon + ' ' + esc(f.label) + '</h4>' +
        '<p>See other universities offering ' + esc(f.label) + ' →</p></a>';
    }).join('');
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
      '<h3 style="margin-top:6px">All undergraduate fields</h3>' +
      (progs ? '<div class="prog-groups">' + progs + '</div>' : '<p>' + UNKNOWN + '</p>') +
      englishBlock +
      '</section>';

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
      '<div class="wrap">' + overview + admissions + english + academics + scholarships + costs_ + programs + photos + apply + sources + '</div>';

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
  function link(href) {
    return has(href) ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(href) + ' ↗</a>' : UNKNOWN;
  }
  function yesNo(v) {
    if (v === true) return '<span class="badge badge-ok">Yes</span>';
    if (v === false) return '<span class="badge badge-warn">No</span>';
    return '<span class="badge">Not confirmed</span>';
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
      bar.innerHTML = '<span class="count">' + list.length + ' universit' + (list.length === 1 ? 'y' : 'ies') + '</span>' +
        '<span class="small muted">' + (list.length > visible.length
          ? 'Showing ' + visible.length + ' of ' + list.length + ' — search and filters cover the whole list'
          : 'Showing bachelor’s-level information for international applicants') + '</span>';

      out.innerHTML = list.length
        ? visible.map(U.uniCard).join('')
        : '<div class="empty-state"><h3>No universities match those filters</h3>' +
          '<p data-i18n-html>Try removing a filter, or search for a field such as <em>Business</em>, <em>Computer Science</em> or <em>full scholarship</em>.</p>' +
          '<button class="btn btn-ghost" type="button" data-clear-filters>Reset all filters</button></div>';

      var more = document.getElementById('results-more');
      if (more) {
        more.innerHTML = list.length > visible.length
          ? '<button class="btn btn-ghost" type="button" data-show-more>Show more universities (' + (list.length - visible.length) + ' left)</button>'
          : '';
      }
      save();
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

  /* Tuition figures can be compared only when they use the same currency and
     the same period, so the summary groups them instead of mixing them. */
  function tuitionSummary(list) {
    var groups = {};
    list.forEach(function (u) {
      var a = U.tuitionAmount(u);
      if (a === null || a === 0) return;
      var key = (U.costCurrency(u) || '?') + '|' + U.costPeriod(u);
      (groups[key] = groups[key] || []).push({ u: u, a: a });
    });
    return Object.keys(groups).map(function (k) {
      var rows = groups[k].sort(function (x, y) { return x.a - y.a; });
      var parts = k.split('|');
      return { currency: parts[0], period: parts[1], rows: rows, low: rows[0], high: rows[rows.length - 1] };
    });
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
        '<div class="hero-stat"><b>' + list.length + '</b><span>Universities listed</span></div>' +
        '<div class="hero-stat"><b>' + withFullRide + '</b><span>With a full scholarship route</span></div>' +
        '<div class="hero-stat"><b>' + englishTaught + '</b><span>With English-taught degrees</span></div>' +
        (freeTuition ? '<div class="hero-stat"><b>' + freeTuition + '</b><span>With no tuition fee</span></div>' : '') +
      '</div>' +
      '</div></section>';

    /* Catalogue first: on a phone the universities must be reachable at once. */
    var browse = '<section class="section"><div class="wrap">' +
      '<div class="section-head" style="margin-bottom:16px"><h2>Universities in ' + esc(c.name) + '</h2>' +
        '<p>Search and filters work across all ' + list.length + ' universities in ' + esc(c.name) + ', not only the cards shown.</p></div>' +
      '<div class="searchbox searchbox-flat" style="max-width:600px">' +
        '<span class="search-icon">🔍</span>' +
        '<input type="search" id="browse-q" placeholder="Search universities, cities, programs, scholarships…" aria-label="Search universities" autocomplete="off">' +
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
          var per = g.period === 'semester' ? 'Lowest tuition per semester' : 'Lowest tuition per year';
          var perHigh = g.period === 'semester' ? 'Highest tuition per semester' : 'Highest tuition per year';
          return '<dl class="uni-facts">' +
            '<div><dt>Universities with published tuition</dt><dd>' + g.rows.length + ' / ' + list.length + '</dd></div>' +
            '<div><dt>' + per + '</dt><dd><a href="' + U.uniUrl(g.low.u) + '">' + esc(U.displayName(g.low.u)) + '</a> — ' + esc(U.money(g.low.a, g.currency)) + '</dd></div>' +
            '<div><dt>' + perHigh + '</dt><dd><a href="' + U.uniUrl(g.high.u) + '">' + esc(U.displayName(g.high.u)) + '</a> — ' + esc(U.money(g.high.a, g.currency)) + '</dd></div>' +
            '</dl>';
        }).join('')
      : '<p>No tuition figure is confirmed for this country yet.</p>') +
      '<p class="small muted" style="margin-top:10px">Only tuition is compared here, because universities publish very different totals: some quote a single comprehensive fee, some the charges they bill, some a full cost of attendance with books and travel. Each profile shows which figure it is.</p>' +
      (noTuition.length ? '<p class="small muted">Tuition is not published for ' + noTuition.length + ' of these universities; their cards show “Not published” and their profiles link to the official cost page.</p>' : '');

    var aidBody = '<p>' + withFullRide + ' of ' + list.length + ' universities list a full-scholarship route, and ' +
      list.filter(function (u) { return U.needBased(u).availableToInternational === true; }).length +
      ' confirm need-based aid for international students. A scholarship is only called a full ride where the university states what it covers.</p>' +
      '<p class="small muted">An award you might win is not the same as a guaranteed cost of zero. Each profile lists the conditions.</p>' +
      '<p><a class="btn btn-ghost btn-sm" href="#/universities?c=' + c.code + '&scholarship=full-ride-intl">Show universities with a full scholarship</a></p>';

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
      ['University type', function (u) { return or(u.type); }],
      ['English-taught degree', function (u) { return yesNo(u.englishTaught); }],
      ['Fields fully in English', function (u) {
        var en = U.englishPrograms(u);
        return en.length ? en.map(function (p) { return '<span>' + esc(U.field(p).label) + '</span>'; }).join('<br>')
          : (u.englishTaught === true ? '<span class="unknown">Not confirmed</span>' : '<span class="unknown">None confirmed</span>');
      }],
      ['group', 'Money'],
      ['Tuition per year', function (u) {
        var t = U.tuitionText(u);
        return t ? esc(t) + (U.costPeriod(u) === 'semester' ? ' <span class="small muted">per semester</span>' : '') : UNKNOWN;
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
      ['Application deadline', function (u) {
        var d = u.admissions && u.admissions.deadlines;
        if (!has(d)) return UNKNOWN;
        return d.map(function (x) { return '<span>' + esc(x.name) + '</span><br>' + U.deadlineHtml(x); }).join('<br><br>');
      }],
      ['group', 'Who gets in'],
      ['Acceptance rate', function (u) { var o = (u.stats || {}).official || {}; return o.admitRate ? '<strong>' + esc(o.admitRate.value) + '%</strong>' : '<span class="unknown">Not published</span>'; }],
      ['Average GPA', function (u) { var o = (u.stats || {}).official || {}; return o.gpa && has(o.gpa.average) ? '<strong>' + esc(o.gpa.average) + '</strong>' : '<span class="unknown">Not published</span>'; }],
      ['SAT of admitted students', function (u) {
        /* Only published figures: a total median is never derived by adding section medians. */
        var o = (u.stats || {}).official || {}, sat = o.sat || {}, out = [];
        if (sat.composite) out.push('<span>Median SAT: <strong>' + esc(sat.composite[1]) + '</strong></span>');
        if (has(sat.mean)) out.push('<span>Average SAT: <strong>' + esc(sat.mean) + '</strong></span>');
        if (!sat.composite) {
          if (sat.rw) out.push('<span>Reading and Writing median: <strong>' + esc(sat.rw[1]) + '</strong></span>');
          if (sat.math) out.push('<span>Math median: <strong>' + esc(sat.math[1]) + '</strong></span>');
        }
        return out.length ? out.join('<br>') : '<span class="unknown">Not published</span>';
      }],
      ['UniPath estimate (target band)', function (u) {
        var t = (u.stats || {}).targets; if (!t) return UNKNOWN;
        return '<span class="badge badge-warn">UniPath estimate</span><br><span class="small">IELTS: ' + or(t.ielts) + '<br>SAT: ' + or(t.sat) + '<br>GPA: ' + or(t.gpa) + '</span>' +
          '<br><span class="tiny muted">Guidance only — not an official requirement.</span>';
      }],
      ['group', 'Scholarships'],
      ['Full-ride availability', function (u) {
        var fr = U.fullRide(u);
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
      ['Business programme', function (u) { return (u.programs || []).indexOf('business') > -1 ? '<span class="badge badge-ok">Yes</span>' : '<span class="badge">Not listed</span>'; }],
      ['Economics programme', function (u) { return (u.programs || []).indexOf('economics') > -1 ? '<span class="badge badge-ok">Yes</span>' : '<span class="badge">Not listed</span>'; }],
      ['Computer Science programme', function (u) { return (u.programs || []).indexOf('computer-science') > -1 ? '<span class="badge badge-ok">Yes</span>' : '<span class="badge">Not listed</span>'; }],
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

  function leaveBrowse() { browseRefresh = null; }

  global.UPPages = {
    leaveBrowse: leaveBrowse,
    renderProfile: renderProfile,
    scrollToSection: scrollToSection,
    renderBrowse: renderBrowse,
    renderCountry: renderCountry,
    renderCompare: renderCompare
  };
})(window);
