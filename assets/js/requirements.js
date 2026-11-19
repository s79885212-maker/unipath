/* Evidence is scoped to a route and a published cycle. Legacy records remain
   compatible; a reviewed route never inherits an unrelated legacy test score. */
(function (global) {
  'use strict';
  var U = global.UP, esc = U.esc;
  var POLICY = {
    required: 'SAT or ACT required', optional: 'SAT/ACT optional',
    'not-used': 'SAT/ACT not considered', 'not-applicable': 'SAT/ACT not part of this route',
    conditional: 'SAT/ACT depends on applicant qualifications',
    'required-alternatives': 'An academic test is required; alternatives accepted',
    accepted: 'Academic test acceptance is scoped; obligation not established',
    conflict: 'Official SAT/ACT sources disagree', unknown: 'SAT/ACT policy not established'
  };
  var LANG = {en:'English',de:'German',fr:'French',ja:'Japanese',ko:'Korean',multiple:'Multiple teaching languages',unknown:'Teaching language not confirmed'};
  function routes(u) { return u.admissionRequirements || []; }
  function scope(c) { return c && c.label || 'Intake year not stated'; }
  function confirmed(c, input) {
    var intake=input.intake || U.intakeGet();
    if (c && c.intakes && c.intakes.length && c.intakes.indexOf(intake) < 0) return false;
    var year = /(?:^|[- ])(20\d\d)(?:$|\D)/.exec(intake);
    return !!(year && c && c.status === 'confirmed' && (c.entryYears || []).indexOf(Number(year[1])) > -1);
  }
  function choose(u, input) {
    return routes(u).filter(function (r) {
      return (!input.studyLanguage || input.studyLanguage === r.language) &&
        (!input.admissionRoute || input.admissionRoute === r.kind) &&
        (!r.programmeIds.length || !input.field || r.programmeIds.indexOf(input.field) > -1);
    });
  }
  function sectionsHtml(sections) {
    var labels={reading:'Reading',writing:'Writing',listening:'Listening',speaking:'Speaking'};
    return Object.keys(sections || {}).map(function (k) { return '<span>' + esc(labels[k] || k) + '</span>: ' + esc(sections[k]); }).join(' · ');
  }
  function text(value) { return value ? '<p>' + esc(value) + '</p>' : ''; }
  function testHtml(name, t) {
    if (!t) return '';
    var value = t.accepted === false ? 'Not accepted for this route' : t.accepted === null ? 'Acceptance not established for this route' : '';
    var h = '<h4>' + esc(name) + (t.variant ? ' · ' + esc(t.variant) : '') + '</h4>' + text(value);
    if (typeof t.min === 'number') h += '<p><span>Published minimum</span>: <strong>' + esc(t.min) + '</strong></p>';
    if (t.noMinimum === true) h += text('Accepted; the university explicitly publishes no numerical minimum.');
    if (typeof t.recommended === 'number') h += '<p><span>Recommended score</span>: <strong>' + esc(t.recommended) + '</strong> · <span>Not an admission cutoff</span></p>';
    if (t.sections) h += '<p><span>Section minima</span>: ' + sectionsHtml(t.sections) + '</p>';
    if (t.role === 'esl-waiver' || t.role === 'ell-placement') h += '<p class="notice notice-info">' + esc('These scores concern language-course placement or exemption, not an unrestricted admission minimum.') + '</p>';
    if (t.scales) t.scales.forEach(function (s) {
      var period = s.period === 'pre2026' ? 'Test before 21 January 2026' : s.period === 'post2026' ? 'Test on or after 21 January 2026' : 'Legacy test scale; new-scale threshold not established';
      h += '<p><span>' + period + '</span>' + (typeof s.min === 'number' ? ' · <span>Published minimum</span>: ' + esc(s.min) : '') +
        (typeof s.recommended === 'number' ? ' · <span>Recommended score</span>: ' + esc(s.recommended) : '') +
        (s.sections ? '<br><span>Section minima</span>: ' + sectionsHtml(s.sections) : '') + '</p>';
    });
    return h + text(t.note);
  }
  function html(u) {
    return '<div class="admission-routes">' + routes(u).map(function (r) {
      var e=r.english || {}, a=r.academic || {};
      var requirement={'required-unless-exempt':'Language proof required unless an applicable exemption is approved','required-by-language-country':'Language proof depends on the published applicant category',recommended:'Language testing is recommended, not a universal test minimum',optional:'Language-score submission is optional in the reviewed checklist','internal-assessment':'English is assessed by the institution; a certificate is not required with this application','alternatives-with-academic':'The checklist accepts language or academic test alternatives; see the exact conditions','placement-or-waiver':'Scores determine language-course placement or exemption'}[e.requirement];
      return '<article class="card admission-route"><div class="card-body"><h3>' + esc(r.label) + '</h3>' +
        '<p><span>Teaching language</span>: <strong>' + esc(LANG[r.language] || r.language) + '</strong> · <span>' + esc(r.kind === 'foundation' ? 'Foundation' : r.kind === 'international-year-one' ? 'International Year One' : r.kind === 'degree-with-esl' ? 'Degree with compulsory ESL' : r.kind === 'degree-with-conditions' ? 'Degree admission with stated conditions' : 'Direct admission') + '</span></p>' +
        '<p><span>Published scope</span>: <span>' + esc(scope(r.applicability)) + '</span></p>' + text(r.note) +
        '<h3>Language requirements for this route</h3>' + '<p><span>Published scope</span>: <span>' + esc(scope(e.applicability || r.applicability)) + '</span></p>' +
        text(requirement) + testHtml('IELTS',e.ielts) + testHtml('TOEFL',e.toefl) + text(e.alternatives) +
        (e.waiver ? '<h4>Waiver / exemption</h4>' + text(e.waiver) : '') + text(e.note) +
        (r.localLanguage || []).map(function (x) { return '<h4>' + esc(x.name) + '</h4>' + text(x.requirement) + text(x.note); }).join('') +
        '<h3>Academic examinations for this route</h3><p><strong>' + esc(POLICY[a.satPolicy] || POLICY.unknown) + '</strong></p>' +
        '<p><span>Published scope</span>: <span>' + esc(scope(a.applicability || r.applicability)) + '</span></p>' + text(a.note) +
        (r.documents || []).map(text).join('') +
        '<ul class="requirements-sources">' + r.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener"><span>' + esc(s.label) + '</span> ↗</a> · <span>Checked</span> ' + esc(s.verified) + '</li>'; }).join('') + '</ul></div></article>';
    }).join('') + '</div>';
  }
  function evaluate(u,input) {
    if (!routes(u).length) return null;
    var checks=[], unchecked=[], selected=choose(u,input);
    function check(level,message,basis) { checks.push({level:level,text:message,basis:basis || null}); }
    if (selected.length !== 1) {
      check('info', selected.length ? 'Several verified routes apply. Select a teaching language, route and programme; requirements have not been merged.' : 'No reviewed requirements match this language, route and programme. This does not establish ineligibility.');
      unchecked.push('Route-specific language and academic requirements');
      return {checks:checks,unchecked:unchecked};
    }
    var r=selected[0], e=r.english || {}, a=r.academic || {}, t=e.ielts || {};
    check('info',r.label); if (r.note) check('info',r.note);
    if (r.programmeIds.length && !input.field) {
      check('info','The verified rule is programme-specific. Select the relevant field and confirm your exact course.');
      unchecked.push('Exact degree programme');
    }
    var currentEnglish=confirmed(e.applicability || r.applicability,input);
    if (!currentEnglish) {
      check('info','English rules are not confirmed for the selected intake. Published scores remain reference information; they are not counted as requirements met.');
      unchecked.push('Language rules for selected intake');
    }
    if (r.language !== 'en') {
      check('info','A wholly English-taught route is not established here. IELTS alone does not confirm the teaching-language requirements.');
      (r.localLanguage || []).forEach(function (x) { check('info',x.name + ': ' + x.requirement); });
      unchecked.push('Local-language examinations and route qualifications');
    }
    if (input.ielts === null || input.ielts === undefined) unchecked.push('English test score — not entered');
    else if (t.accepted === false) { check('info','IELTS is not accepted for this admission route.'); unchecked.push('Accepted language proof'); }
    else if (t.role === 'esl-waiver' || t.role === 'ell-placement') {
      check('info','These IELTS scores concern language-course placement or exemption. They are not used as a direct-admission cutoff.');
      unchecked.push('Language-course placement and any waiver conditions');
    } else if (t.accepted !== true) { check('info','IELTS acceptance or a comparable minimum is not established for this route.'); unchecked.push('Accepted language proof'); }
    else {
      if (typeof t.min === 'number') check(currentEnglish ? (input.ielts < t.min ? 'hard' : 'ok') : 'info',
        currentEnglish ? (input.ielts < t.min ? 'IELTS overall is below the published route minimum.' : 'IELTS overall meets the published route minimum; this is not a check of all requirements.') : 'Published reference IELTS overall: ' + t.min + '.', 'minimum');
      if (typeof t.recommended === 'number') check(currentEnglish && input.ielts < t.recommended ? 'soft' : 'info','The published recommended IELTS overall is ' + t.recommended + '. It is not an admission cutoff.','recommended');
      var sections=t.sections || {}, missing=[], below=[];
      Object.keys(sections).forEach(function (k) {
        var v=(input.ieltsSections || {})[k];
        if (typeof v !== 'number' || !isFinite(v)) missing.push(k);
        else if (v < sections[k]) below.push(k);
      });
      if (below.length) check(currentEnglish ? 'hard' : 'info','An entered IELTS section is below its published route minimum.','minimum');
      if (missing.length) {
        check('info','IELTS section minima remain unchecked. A sufficient overall score does not confirm every section.');
        unchecked.push('IELTS section scores');
      } else if (Object.keys(sections).length && !below.length) check(currentEnglish ? 'ok' : 'info','Entered IELTS sections reach the published route minima; other requirements remain unchecked.','minimum');
      if (t.noMinimum === true) check('info','Accepted; the university explicitly publishes no numerical minimum.');
      else if (typeof t.min !== 'number' && typeof t.recommended !== 'number' && !Object.keys(sections).length) unchecked.push('IELTS programme minimum');
    }
    if (e.waiver) { check('info',e.waiver); unchecked.push('Eligibility for a language-test waiver'); }
    if (e.note) check('info',e.note);
    var policy=a.satPolicy || 'unknown', currentAcademic=confirmed(a.applicability || r.applicability,input);
    check('info',POLICY[policy] || POLICY.unknown);
    if (a.note) check('info',a.note);
    if (!currentAcademic) {
      check('info','The academic-test policy is not confirmed for the selected intake. Check its published cycle.');
      unchecked.push('Academic tests for selected intake');
    } else if (policy === 'required' && !Number.isFinite(input.sat) && !Number.isFinite(input.act)) {
      check('soft','SAT or ACT is required, and no score was entered.','minimum');
      unchecked.push('Required SAT or ACT score');
    } else if (policy === 'conditional' || policy === 'required-alternatives' || policy === 'conflict' || policy === 'unknown' || policy === 'accepted') {
      unchecked.push('Academic testing depends on qualifications, alternatives or unresolved evidence');
    }
    return {checks:checks,unchecked:unchecked,route:r};
  }
  function policy(u) {
    var rs=routes(u), policies=rs.map(function (r) {return (r.academic || {}).satPolicy || 'unknown';});
    if (!rs.length || policies.some(function (p) {return p === 'unknown' || p === 'conflict';})) return 'unknown';
    /* Acceptance alone makes no current-cycle waiver or ACT-alternative claim. */
    if (policies.every(function (p) {return p === 'accepted';})) return 'accepted';
    if (policies.some(function (p) {return p !== policies[0];}) || rs.some(function (r) {return !confirmed((r.academic || {}).applicability || r.applicability,{});})) return 'conditional';
    return policies[0];
  }
  function minimum(u) {
    var rs=routes(u);
    if (rs.length !== 1) return null;
    var r=rs[0], e=r.english || {}, t=e.ielts || {};
    return r.universityWide === true && r.kind === 'direct' && r.language === 'en' && !r.programmeIds.length && confirmed(e.applicability || r.applicability,{}) && t.role === 'admission' && t.accepted === true && typeof t.min === 'number' ? t.min : null;
  }
  U.requirements = {routes:routes, choose:choose, confirmed:confirmed, html:html, evaluate:evaluate, policies:POLICY, policy:policy, minimum:minimum};
})(window);
