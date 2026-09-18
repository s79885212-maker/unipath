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
            (u.englishTaught === true ? '<span class="badge">English-taught degree</span>' : '') +
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
        ? '<figure class="hero-photo"><img src="' + esc(u.photos.main) + '" alt="' + esc(u.photos.gallery[0].title || u.name) + '">' +
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
          return '<tr><td><strong>' + esc(d.name) + '</strong></td><td>' + esc(d.date) + '</td><td>' + (has(d.note) ? esc(d.note) : '—') + '</td></tr>';
        }).join('') + '</tbody></table></div>'
      : '<p>' + UNKNOWN + '</p>';

    var fee = a.applicationFee || {};
    var admissions = '<section class="profile-section" id="admissions"><h2>Admissions</h2>' +
      '<h3 style="margin-top:6px">Application deadlines</h3>' + deadlines +
      '<dl class="deflist" style="margin-top:18px">' +
        row('Application platform', has(a.platforms) ? a.platforms.map(esc).join('<br>') : UNKNOWN) +
        row('Application fee', U.feeLabel(u)) +
        row('Fee waiver', has(fee.waiver) ? esc(fee.waiver) : UNKNOWN) +
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
      if (has(t.min)) v.push('<strong>Minimum: ' + esc(t.min) + '</strong>');
      if (has(t.recommended)) v.push('<strong>Recommended / competitive: ' + esc(t.recommended) + '</strong>');
      if (!has(t.min) && !has(t.recommended)) v.push('<span class="muted">No minimum published by the university.</span>');
      if (has(t.estimate)) v.push('<span class="badge badge-warn">UniPath estimate</span> Aim for <strong>' + esc(t.estimate) + '</strong>');
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
      var p = has(t.policy) ? '<strong>' + esc(String(t.policy).replace(/^./, function (m) { return m.toUpperCase(); })) + '</strong>' : UNKNOWN;
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
          '<h4>🎯 Recommended target band <span class="badge badge-warn">UniPath guidance</span></h4>' +
          '<div class="target-grid">' +
            '<div><span>IELTS</span><b>' + or(t.ielts) + '</b></div>' +
            '<div><span>SAT</span><b>' + or(t.sat) + '</b></div>' +
            '<div><span>GPA</span><b>' + or(t.gpa) + '</b></div>' +
          '</div>' +
          (has(t.basis) ? '<p class="small muted" style="margin:10px 0 0">' + esc(t.basis) + '</p>' : '') +
          '<p class="tiny muted" style="margin:6px 0 0">These targets are guidance for planning, not official cut-offs. Meeting them does not guarantee admission.</p>' +
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
        (has(costs.totalText) ? '<tfoot><tr><td>Estimated total</td><td>' + esc(costs.totalText) + '</td></tr></tfoot>' : '') +
        '</table></div>'
      : '<p>' + UNKNOWN + '</p>';
    var costs_ = '<section class="profile-section" id="costs"><h2>Costs</h2>' +
      '<p class="muted" style="margin-bottom:14px"><strong>Estimated cost of attendance — ' +
        (has(costs.academicYear) ? esc(costs.academicYear) : 'academic year not stated') + '</strong></p>' +
      costTable +
      (has(costs.note) ? '<div class="notice" style="margin-top:14px"><span class="ico">💰</span><div>' + esc(costs.note) + '</div></div>' : '') +
      '<div class="notice notice-info" style="margin-top:12px"><span class="ico">↓</span><div><strong>Possible scholarship reduction.</strong> ' +
        (U.fullRide(u).available === true
          ? 'A full scholarship at this university can reduce the tuition line to zero — see the scholarships section for exactly what is and is not covered.'
          : U.meritList(u).length
            ? 'Merit scholarships listed above reduce the tuition line. Housing, food and insurance usually remain payable.'
            : 'No confirmed award is listed that would reduce these figures. Budget for the full amount until the university confirms otherwise.') +
      '</div></div></section>';

    /* Programs */
    var progs = (u.programs || []).map(function (p) {
      var f = U.field(p);
      return '<a class="prog-group" href="#/universities?field=' + encodeURIComponent(f.id) + '">' +
        '<h4>' + f.icon + ' ' + esc(f.label) + '</h4>' +
        '<p>See other universities offering ' + esc(f.label) + ' →</p></a>';
    }).join('');
    var programs = '<section class="profile-section" id="programs"><h2>Undergraduate programs</h2>' +
      (has(u.programNote) ? '<p>' + esc(u.programNote) + '</p>' : '') +
      (progs ? '<div class="prog-groups">' + progs + '</div>' : '<p>' + UNKNOWN + '</p>') +
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
              '<img src="' + esc(g.src) + '" alt="' + esc(g.title || u.name) + '" loading="lazy"></a>' +
              '<figcaption><strong>' + esc(g.title) + '</strong>' + credit(g) + '</figcaption></figure>';
          }).join('') + '</div>' +
          '<p class="small muted" style="margin-top:12px">Photographs come from Wikimedia Commons under free licences and are credited to their authors. They may not show the most recent state of the campus.</p>'
        : '<div class="notice notice-info"><span class="ico">🖼️</span><div>No freely licensed photographs are available for this university yet, so a placeholder is shown instead.</div></div>' +
          '<div class="grid grid-3" style="margin-top:16px">' + [1, 2, 3].map(function () { return U.mediaBlock(u, 'media-sm'); }).join('') + '</div>') +
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

  function renderBrowse(opts) {
    opts = opts || {};
    var selected = {};
    var query = U.qs('q') || '';

    var preCountry = opts.country || U.qs('c');
    if (preCountry) selected.country = [preCountry];
    var preField = U.qs('field');
    if (preField) selected.field = [preField];
    var preSchol = U.qs('scholarship');
    if (preSchol) selected.scholarship = [preSchol];

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
      return U.applyFilters(current, probe).filter(o.test).length;
    }

    function drawFilters() {
      var base = baseList();
      var html = '<div class="filter-head"><h2>Filters</h2>' +
        '<button class="btn btn-quiet btn-sm" type="button" data-clear-filters>Reset</button></div>';
      U.FILTER_GROUPS.forEach(function (g) {
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
      side.innerHTML = html;
    }

    function drawResults() {
      var base = baseList();
      var list = U.applyFilters(base, selected);

      var chips = [];
      for (var gid in selected) {
        if (!selected.hasOwnProperty(gid)) continue;
        selected[gid].forEach(function (oid) {
          var o = U.optionById(gid, oid);
          if (o) chips.push('<button type="button" data-remove-g="' + esc(gid) + '" data-remove-o="' + esc(oid) + '">' + esc(o.label) + '</button>');
        });
      }
      if (query) chips.unshift('<button type="button" data-clear-q>“' + esc(query) + '”</button>');
      activeBox.innerHTML = chips.join('');

      bar.innerHTML = '<span class="count">' + list.length + ' universit' + (list.length === 1 ? 'y' : 'ies') + '</span>' +
        '<span class="small muted">Showing bachelor’s-level information for international applicants</span>';

      out.innerHTML = list.length
        ? list.map(U.uniCard).join('')
        : '<div class="empty-state"><h3>No universities match those filters</h3>' +
          '<p data-i18n-html>Try removing a filter, or search for a field such as <em>Business</em>, <em>Computer Science</em> or <em>full scholarship</em>.</p>' +
          '<button class="btn btn-ghost" type="button" data-clear-filters>Reset all filters</button></div>';
    }

    function refresh() { drawFilters(); drawResults(); }

    var api = {
      toggle: function (g, o, on) {
        selected[g] = selected[g] || [];
        var i = selected[g].indexOf(o);
        if (on && i === -1) selected[g].push(o);
        if (!on && i > -1) selected[g].splice(i, 1);
        if (!selected[g].length) delete selected[g];
        refresh();
      },
      clearFilters: function () { selected = {}; refresh(); },
      clearQuery: function () { query = ''; var el = document.getElementById('browse-q'); if (el) el.value = ''; refresh(); },
      remove: function (g, o) {
        selected[g] = (selected[g] || []).filter(function (x) { return x !== o; });
        if (!selected[g].length) delete selected[g];
        refresh();
      },
      setQuery: function (v) { query = v; refresh(); },
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
  }

  /* ---------------- country page ---------------- */

  function renderCountry(code) {
    var c = U.country(code);
    var list = U.unisByCountry(code).sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (!c || !c.overview) {
      document.getElementById('main').innerHTML =
        '<div class="wrap section"><div class="empty-state"><h3>Country not found</h3><p><a href="#/countries">Back to countries</a></p></div></div>';
      return;
    }
    document.title = c.name + ' — UniPath';

    var costs = list.map(U.costHeadline).filter(Boolean);
    var withFullRide = list.filter(function (u) { return U.fullRide(u).available === true; }).length;
    var englishTaught = list.filter(function (u) { return u.englishTaught === true; }).length;

    var head = '<section class="page-head"><div class="wrap">' +
      '<div class="crumbs small" style="color:#a9c2ea;margin-bottom:14px"><a href="#/" style="color:#cfe0ff">Home</a> › <a href="#/countries" style="color:#cfe0ff">Countries</a> › ' + esc(c.name) + '</div>' +
      '<h1>' + c.flag + ' <span>' + esc(c.name) + '</span></h1>' +
      '<p>' + esc(c.tagline) + '</p>' +
      '<div class="hero-stats">' +
        '<div class="hero-stat"><b>' + list.length + '</b><span>Universities listed</span></div>' +
        '<div class="hero-stat"><b>' + withFullRide + '</b><span>With a full scholarship route</span></div>' +
        '<div class="hero-stat"><b>' + englishTaught + '</b><span>With English-taught degrees</span></div>' +
      '</div>' +
      '</div></section>';

    var body = '<div class="wrap section">' +
      '<div class="grid grid-2">' +
        '<div class="card"><div class="card-body"><h2>Studying in ' + esc(c.name) + '</h2><p>' + esc(c.overview) + '</p></div></div>' +
        '<div class="card"><div class="card-body"><h2>How applications work</h2><p>' + esc(c.applicationInfo) + '</p></div></div>' +
      '</div>' +
      '<div class="grid grid-2" style="margin-top:20px">' +
        '<div class="card"><div class="card-body"><h2>Tuition range in this database</h2>' +
          (costs.length ? '<ul class="stack" style="padding-left:1.1em;margin:0">' + list.filter(U.costHeadline).map(function (u) {
            return '<li><a href="' + U.uniUrl(u) + '">' + esc(U.displayName(u)) + '</a> — <span>' + esc(U.costHeadline(u)) + '</span></li>';
          }).join('') + '</ul>' : '<p>' + UNKNOWN + '</p>') +
          '<p class="small muted" style="margin-top:12px">Only universities with a confirmed published figure are listed. Others show their cost on their own profile page.</p>' +
        '</div></div>' +
        '<div class="card"><div class="card-body"><h2>Important notes for international students</h2>' +
          '<ul class="stack" style="padding-left:1.1em;margin:0">' + c.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' +
        '</div></div>' +
      '</div>' +
      '<div class="section-head" style="margin-top:44px"><span class="eyebrow">Popular study fields</span>' +
        '<div class="pill-row">' + c.fieldsPopular.map(function (f) {
          var fl = U.field(f);
          return '<a class="badge badge-flat" href="#/universities?c=' + c.code + '&field=' + fl.id + '">' + fl.icon + ' ' + esc(fl.label) + '</a>';
        }).join('') + '</div>' +
      '</div>' +
      '<div class="section-head-row" style="margin-top:40px"><div class="section-head" style="margin:0">' +
        '<h2>Universities in ' + esc(c.name) + '</h2><p>' + list.length + ' listed. Open a profile for admission requirements, scholarships and costs.</p></div>' +
        '<a class="btn btn-ghost" href="#/universities?c=' + c.code + '">Filter these universities</a></div>' +
      '<div class="grid grid-3" style="margin-top:22px">' + list.map(U.uniCard).join('') + '</div>' +
      '<div class="card" style="margin-top:32px"><div class="card-body"><h3>Official sources for ' + esc(c.name) + '</h3>' +
        '<ul class="source-list">' + c.sources.map(function (s) {
          return '<li>→ <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
        }).join('') + '</ul></div></div>' +
      '</div>';

    document.getElementById('main').innerHTML = head + body;
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
      ['group', 'Money'],
      ['Tuition / headline cost', function (u) { return U.costHeadline(u) ? esc(U.costHeadline(u)) : UNKNOWN; }],
      ['Estimated total cost', function (u) {
        var t = U.totalCostText(u);
        return t ? esc(t) + (has(u.costs.academicYear) ? '<br><span class="small muted">' + esc(u.costs.academicYear) + '</span>' : '') : UNKNOWN;
      }],
      ['Application fee', function (u) { return U.feeLabel(u); }],
      ['group', 'Requirements'],
      ['IELTS requirement', function (u) { var l = U.ieltsLabel(u); return l ? esc(l) : UNKNOWN; }],
      ['TOEFL requirement', function (u) { var m = U.toeflMin(u); return m ? '<strong>' + esc(m) + '</strong>' : UNKNOWN; }],
      ['SAT / ACT policy', function (u) { return esc(U.satLabel(u)); }],
      ['Application deadline', function (u) {
        var d = u.admissions && u.admissions.deadlines;
        if (!has(d)) return UNKNOWN;
        return d.map(function (x) { return '<strong>' + esc(x.name) + '</strong><br>' + esc(x.date); }).join('<br><br>');
      }],
      ['group', 'Who gets in'],
      ['Acceptance rate', function (u) { var o = (u.stats || {}).official || {}; return o.admitRate ? '<strong>' + esc(o.admitRate.value) + '%</strong>' : '<span class="unknown">Not published</span>'; }],
      ['Average GPA', function (u) { var o = (u.stats || {}).official || {}; return o.gpa && has(o.gpa.average) ? '<strong>' + esc(o.gpa.average) + '</strong>' : '<span class="unknown">Not published</span>'; }],
      ['Median SAT', function (u) {
        var o = (u.stats || {}).official || {}, sat = o.sat || {};
        if (sat.composite) return '<strong>' + esc(sat.composite[1]) + '</strong>';
        if (has(sat.mean)) return '<strong>' + esc(sat.mean) + '</strong> (average)';
        if (sat.math && sat.rw) return '<strong>' + esc(sat.math[1] + sat.rw[1]) + '</strong> (sum of section medians)';
        return '<span class="unknown">Not published</span>';
      }],
      ['Target band (guidance)', function (u) {
        var t = (u.stats || {}).targets; if (!t) return UNKNOWN;
        return '<span class="small">IELTS: ' + or(t.ielts) + '<br>SAT: ' + or(t.sat) + '<br>GPA: ' + or(t.gpa) + '</span>';
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
