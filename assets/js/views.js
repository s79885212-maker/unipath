/* ============================================================
   UniPath — static views (home, countries, scholarships, about)
   ============================================================ */
(function (global) {
  'use strict';
  var U = global.UP;
  var esc = U.esc;

  function stats() {
    var all = U.DB.universities;
    return {
      unis: all.length,
      countries: U.DB.countries.length,
      fullRide: all.filter(function (u) { return U.fullRide(u).available === true; }).length,
      english: all.filter(function (u) { return u.englishTaught === true; }).length,
      sources: all.reduce(function (n, u) { return n + (u.sources || []).length; }, 0),
      merit: all.reduce(function (n, u) { return n + U.meritList(u).length; }, 0)
    };
  }

  /* ---------------- home ---------------- */

  function home() {
    var s = stats();
    var flags = U.DB.countries.map(function (c) { return c.flag; }).join(' ');

    document.title = 'UniPath — Find Your University. Find Your Opportunity.';

    return '' +
'<section class="hero"><div class="wrap">' +
  '<span class="hero-eyebrow reveal">' + flags + '&nbsp; ' + s.countries + ' countries · ' + s.unis + ' universities</span>' +
  '<h1 class="reveal reveal-1">Find Your University. Find Your Opportunity.</h1>' +
  '<p class="hero-sub reveal reveal-2">Explore universities, scholarships, admission requirements and application information for international students.</p>' +
  '<div class="searchbox reveal reveal-3" data-searchbox>' +
    '<span class="search-icon">🔍</span>' +
    '<input type="search" placeholder="Search universities, countries, programs or scholarships…" aria-label="Search universities, countries, programs or scholarships" autocomplete="off">' +
    '<button class="btn btn-primary" type="button" data-search-go>Search</button>' +
    '<div class="suggest" data-suggest hidden></div>' +
  '</div>' +
  '<div class="quick-links reveal reveal-3"><span>Try:</span>' +
    '<a class="chip" href="#/universities?q=Business">Business</a>' +
    '<a class="chip" href="#/universities?scholarship=full-ride-intl">Full scholarship</a>' +
    '<a class="chip" href="#/universities?q=Computer%20Science">Computer Science</a>' +
    '<a class="chip" href="#/universities?scholarship=need">Need-based aid</a>' +
    '<a class="chip" href="#/universities?field=engineering">Engineering</a>' +
  '</div>' +
  '<div class="hero-stats">' +
    '<div class="hero-stat"><b>' + s.unis + '</b><span>Universities profiled</span></div>' +
    '<div class="hero-stat"><b>' + s.fullRide + '</b><span>With a full scholarship route</span></div>' +
    '<div class="hero-stat"><b>' + s.english + '</b><span>Offering English-taught degrees</span></div>' +
    '<div class="hero-stat"><b>' + s.sources + '</b><span>Official sources cited</span></div>' +
  '</div>' +
'</div></section>' +

'<section class="section"><div class="wrap">' +
  '<div class="section-head"><span class="eyebrow">Start here</span><h2>Choose a country</h2>' +
    '<p>Each country page explains how admissions work there, what studying costs, and which scholarships international students can realistically reach.</p></div>' +
  '<div class="grid grid-countries">' + U.DB.countries.map(U.countryCard).join('') + '</div>' +
'</div></section>' +

'<section class="section section-alt"><div class="wrap">' +
  '<div class="section-head"><span class="eyebrow">How it works</span><h2>One path, instead of forty browser tabs</h2>' +
    '<p>UniPath is built so a student can go from “which country?” to “here is the application portal” without leaving the site.</p></div>' +
  '<div class="grid grid-4">' +
    step('1 · Country', 'Costs, visa reality, how applications are structured and where the scholarship money actually is.') +
    step('2 · University', 'Filter by scholarship, test policy, language of instruction, application fee and field of study.') +
    step('3 · Requirements', 'IELTS and TOEFL minimums, SAT/ACT policy, GPA, documents and deadlines — separated into minimum vs competitive.') +
    step('4 · Scholarships', 'Full-ride, merit and need-based aid, with an explicit breakdown of what each award does and does not cover.') +
    step('5 · Cost', 'Itemised cost of attendance with the academic year stated, and what a scholarship would actually reduce.') +
    step('6 · Programs', 'Which undergraduate fields the university offers, linked back to every other university that offers them.') +
    step('7 · Apply', 'Direct links to the official admissions page, the international office and the real application portal.') +
    '<div class="card card-pad-sm" style="border-color:var(--info-line);background:var(--brand-050)"><div class="card-body">' +
      '<h3>8 · Compare</h3><p class="small muted">Put two or three universities side by side on cost, requirements, deadlines and funding.</p>' +
      '<a class="btn btn-ghost btn-sm" href="#/compare" style="margin-top:8px">Open comparison →</a></div></div>' +
  '</div>' +
'</div></section>' +

'<section class="section"><div class="wrap"><div class="grid grid-2">' +
  '<div>' +
    '<div class="section-head"><span class="eyebrow">Why trust this</span><h2>Nothing important is invented</h2></div>' +
    '<p>Admission and scholarship information decides where people spend four years and a great deal of money, so this site treats accuracy as the product.</p>' +
    '<ul class="stack" style="padding-left:1.1em">' +
      '<li>Requirements, costs, deadlines and scholarships come from the universities’ own websites, and every profile lists the exact pages they came from.</li>' +
      '<li data-i18n-html>Where a university does not publish something, the field says <em>“Not confirmed — check the official source”</em> instead of guessing a plausible number.</li>' +
      '<li data-i18n-html>A scholarship is only labelled a <strong>full ride</strong> when the official source states what it covers. Tuition-only awards are labelled as tuition-only.</li>' +
      '<li data-i18n-html>Where a profile offers a target to aim for, it is marked <strong>UniPath estimate</strong> and explains what it is based on — it is never presented as an official requirement.</li>' +
      '<li data-i18n-html>Every profile carries a <strong>Last verified</strong> date.</li>' +
    '</ul>' +
    '<a class="btn btn-primary" href="#/about">How the data is sourced →</a>' +
  '</div>' +
  '<div class="card"><div class="card-body">' +
    '<h3>⚠️ Please read before applying</h3>' +
    '<p class="small">' + esc(U.DISCLAIMER) + '</p>' +
    '<hr style="border:0;border-top:1px solid var(--line);margin:18px 0">' +
    '<h4 style="font-size:.95rem">Things that change most often</h4>' +
    '<ul class="stack small" style="padding-left:1.1em;margin:0">' +
      '<li>Tuition and cost of attendance — republished every year</li>' +
      '<li>SAT/ACT policies — several universities reversed theirs after 2020</li>' +
      '<li>English test scales — the TOEFL iBT scale changed in January 2026</li>' +
      '<li>Programme availability — some English-taught programmes are being closed or replaced</li>' +
    '</ul>' +
  '</div></div>' +
'</div></div></section>';
  }

  function step(title, body) {
    return '<div class="card card-pad-sm"><div class="card-body"><h3>' + title + '</h3>' +
      '<p class="small muted">' + body + '</p></div></div>';
  }

  /* ---------------- countries ---------------- */

  function countries() {
    document.title = 'Countries — UniPath';
    var detail = U.DB.countries.map(function (c) {
      var n = U.unisByCountry(c.code).length;
      return '<div class="card"><div class="card-body">' +
        '<h2>' + c.flag + ' <span>' + esc(c.name) + '</span></h2>' +
        '<p>' + esc(c.overview) + '</p>' +
        '<h4 style="font-size:.95rem">How applications work</h4><p class="small">' + esc(c.applicationInfo) + '</p>' +
        '<div class="pill-row" style="margin-bottom:14px">' + c.fieldsPopular.map(function (f) {
          var fl = U.field(f);
          return '<span class="badge">' + fl.icon + ' ' + esc(fl.label) + '</span>';
        }).join('') + '</div>' +
        '<a class="btn btn-primary" href="#/country/' + c.code + '">' + n + ' universities →</a>' +
      '</div></div>';
    }).join('');

    return '<section class="page-head"><div class="wrap"><h1>Countries</h1>' +
      '<p>Five destinations so far. The data layer is built so more countries can be added without changing any page.</p>' +
      '</div></section>' +
      '<section class="section"><div class="wrap">' +
        '<div class="grid grid-countries">' + U.DB.countries.map(U.countryCard).join('') + '</div>' +
        '<div class="grid grid-2" style="margin-top:36px">' + detail + '</div>' +
      '</div></section>';
  }

  /* ---------------- scholarships ---------------- */

  function scholarships() {
    document.title = 'Scholarships — UniPath';
    var out = [];
    U.DB.countries.forEach(function (c) {
      var list = U.unisByCountry(c.code).filter(function (u) {
        return U.fullRide(u).available === true || U.meritList(u).length || U.needBased(u).availableToInternational === true;
      });
      if (!list.length) return;
      out.push('<div class="section-head" style="margin-top:34px"><h2>' + c.flag + ' <span>' + esc(c.name) + '</span></h2></div>');
      list.forEach(function (u) {
        var fr = U.fullRide(u), merit = U.meritList(u), need = U.needBased(u);
        var covers = fr.covers || {};
        var coverHtml = [['tuition', 'Tuition'], ['housing', 'Housing'], ['meals', 'Meals'],
          ['insurance', 'Health insurance'], ['books', 'Books & other']].map(function (m) {
          var v = covers[m[0]];
          var cls = v === true ? 'cover-yes' : v === false ? 'cover-no' : 'cover-unk';
          var mark = v === true ? '✓ ' : v === false ? '✕ ' : '? ';
          return '<span class="cover-item ' + cls + '">' + mark + m[1] + '</span>';
        }).join('');
        var meritHtml = merit.length
          ? '<div class="table-scroll" style="margin-top:12px"><table class="data-table"><thead><tr>' +
            '<th>Scholarship</th><th>Amount</th><th>Eligibility</th><th>How to apply</th></tr></thead><tbody>' +
            merit.map(function (m) {
              return '<tr><td><strong>' + esc(m.name) + '</strong></td><td>' + U.or(m.amount) + '</td><td>' +
                U.or(m.eligibility) + '</td><td>' + U.or(m.application) + '</td></tr>';
            }).join('') + '</tbody></table></div>'
          : '';
        out.push('<article class="card" style="margin-bottom:18px"><div class="card-body">' +
          '<div style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:flex-start">' +
            '<h3 style="margin:0"><a href="' + U.uniUrl(u) + '">' + esc(u.name) + '</a></h3>' +
            '<div class="pill-row">' +
              (fr.available === true ? '<span class="badge badge-ok">Full scholarship route</span>' : '') +
              (need.meetsFullNeed === true ? '<span class="badge badge-ok">Meets full need</span>' : '') +
              (need.availableToInternational === true ? '<span class="badge badge-info">Need-based aid</span>' : '') +
            '</div></div>' +
          (fr.available === true || fr.available === false
            ? '<p class="small" style="margin:12px 0 8px"><strong>Full-ride coverage:</strong></p><div class="covers">' + coverHtml + '</div>' +
              (U.has(fr.note) ? '<p class="small muted" style="margin-top:10px">' + esc(fr.note) + '</p>' : '')
            : '') +
          meritHtml +
          (U.has(need.note) ? '<p class="small" style="margin-top:12px"><strong>Need-based aid:</strong> ' + esc(need.note) + '</p>' : '') +
          '<p style="margin:14px 0 0"><a class="btn btn-ghost btn-sm" href="' + U.uniUrl(u) + '/scholarships">Full scholarship detail →</a> ' +
          (U.has(u.links.scholarships) ? '<a class="btn btn-ghost btn-sm" href="' + esc(u.links.scholarships) +
            '" target="_blank" rel="noopener">Official scholarship page ↗</a>' : '') + '</p>' +
          '</div></article>');
      });
    });

    return '<section class="page-head"><div class="wrap"><h1>Scholarships & financial aid</h1>' +
      '<p>Every award below is drawn from a university’s own published pages. Coverage is shown exactly as the university states it — a tuition-only award is never presented as a full ride.</p>' +
      '</div></section>' +
      '<section class="section"><div class="wrap">' +
        '<div class="notice notice-warn" style="margin-bottom:26px"><span class="ico">⚠️</span><div data-i18n-html>' +
          '<strong>Read the coverage, not the headline.</strong> “100% scholarship” almost always means 100% of <em>tuition</em>. ' +
          'Housing, food, insurance, flights and living costs are usually still yours to pay. Each card below spells out which of those are covered.' +
        '</div></div>' +
        '<div class="pill-row" style="margin-bottom:26px">' +
          '<a class="badge badge-flat" href="#/universities?scholarship=full-ride-intl">Full scholarship for internationals</a>' +
          '<a class="badge badge-flat" href="#/universities?scholarship=full-tuition">Full tuition covered</a>' +
          '<a class="badge badge-flat" href="#/universities?scholarship=merit">Merit scholarships</a>' +
          '<a class="badge badge-flat" href="#/universities?scholarship=need">Need-based aid</a>' +
          '<a class="badge badge-flat" href="#/universities?scholarship=meets-need">Meets full need</a>' +
        '</div>' + out.join('') +
      '</div></section>';
  }

  /* ---------------- about ---------------- */

  /* "Report an error" appears only when a real, monitored address is set in
     data/registry.js (UNIPATH.config.reportErrorUrl). */
  function reportError() {
    var url = (U.DB.config || {}).reportErrorUrl;
    var safe = typeof url === 'string' && /^(https:\/\/|mailto:)/i.test(url);
    if (safe) {
      return '<p>If something on a profile is wrong or out of date, tell us which university and section it is, what is wrong, and — if you have it — the official page that shows the correct information.</p>' +
        '<a class="btn btn-primary" href="' + esc(url) + '" target="_blank" rel="noopener">Report an error ↗</a>';
    }
    return '<p>A public way to report errors has not been set up yet. Until it is, the official source linked at the bottom of every profile always takes precedence over anything shown here.</p>';
  }

  function about() {
    document.title = 'About — UniPath';
    var s = stats();
    var rows = [
      ['Countries', s.countries], ['Universities', s.unis], ['Official sources cited', s.sources],
      ['With a full scholarship route', s.fullRide], ['With English-taught degrees', s.english],
      ['Merit scholarships listed', s.merit], ['Study fields', U.DB.fields.length]
    ].map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('');
    var countryList = U.DB.countries.map(function (c) {
      var n = U.unisByCountry(c.code).length;
      return '<li><a href="#/country/' + esc(c.code) + '">' + c.flag + ' <span>' + esc(c.name) + '</span></a> — ' +
        '<span>' + n + ' universities</span></li>';
    }).join('');

    return '<section class="page-head"><div class="wrap"><h1>About UniPath</h1>' +
      '<p>A research tool for international students who want to understand admission requirements, scholarships and real costs without reading forty university websites.</p>' +
      '</div></section>' +
      '<section class="section"><div class="wrap"><div class="grid grid-2">' +
      '<div>' +
        '<h2>What UniPath does</h2>' +
        '<p>UniPath collects the information an international undergraduate applicant actually needs — admission requirements, English and standardized test policies, scholarships, financial aid, full cost of attendance, available programs and the official application links — and puts it in one consistent structure for every university.</p>' +
        '<p>You can browse by country, filter by funding, tests and field of study, and compare up to three universities side by side.</p>' +

        '<h2 style="margin-top:36px">Who it is for</h2>' +
        '<p>Students applying to a bachelor’s degree outside their own country, and the parents and teachers helping them. It is most useful early on, when you are deciding where to apply and what you can afford.</p>' +

        '<h2 style="margin-top:36px">How the data is collected and checked</h2>' +
        '<p>Admission requirements, costs, deadlines, scholarship details and published student statistics are collected from official university sources. When a university does not publish a figure, UniPath shows it as ‘Not confirmed’ or ‘Not published’. In some profiles, UniPath also provides a clearly labelled estimate to help students set a target. These estimates are guidance only, are based on the stated evidence, and are not official requirements or guarantees of admission.</p>' +
        '<p>Every profile lists the exact pages its information came from, with direct links, so you can check any figure yourself.</p>' +

        '<h3>What “Last verified” means</h3>' +
        '<p data-i18n-html>Each profile shows a <strong>Last verified</strong> date: the day its information was last checked against the official sources listed on it. Universities update fees, deadlines and requirements every year, so the older the date, the more important it is to re-check the official page.</p>' +

        '<h3>How UniPath estimates work</h3>' +
        '<p data-i18n-html>Some universities publish no English score or no typical grades. Where that happens, a profile may show a target marked <strong>UniPath estimate</strong>, always next to a short note on what it is based on — the university’s own published statistics, the ranges of admitted students, or figures that comparable universities publish. An estimate is never shown as an official requirement, and meeting it does not guarantee admission.</p>' +

        '<h3>The full-ride rule</h3>' +
        '<p data-i18n-html>A scholarship is described as a <strong>full ride</strong> only when the official source states what it covers. Most awards advertised as “100% scholarships” cover 100% of <em>tuition</em> — not housing, food, insurance or flights. Every scholarship on this site shows a coverage breakdown with three states: covered (✓), not covered (✕), and not confirmed (?).</p>' +

        '<h3>Photographs</h3>' +
        '<p>Campus photographs come from Wikimedia Commons under free licences, and every photo is credited to its author on the university profile.</p>' +

        '<h2 style="margin-top:36px">Found a mistake?</h2>' +
        reportError() +

        '<h2 style="margin-top:36px">Disclaimer</h2>' +
        '<div class="notice notice-warn"><span class="ico">⚠️</span><div>' + esc(U.DISCLAIMER) + '</div></div>' +
        '<p class="small muted" style="margin-top:14px">UniPath is an independent research project and is not affiliated with, endorsed by, or connected to any university listed on it.</p>' +
      '</div>' +
      '<div>' +
        '<div class="card"><div class="card-body"><h3>Countries covered</h3><ul class="stack" style="padding-left:1.1em;margin:0">' + countryList + '</ul></div></div>' +
        '<div class="card" style="margin-top:20px"><div class="card-body"><h3>Coverage today</h3><dl class="deflist">' + rows + '</dl></div></div>' +
      '</div>' +
      '</div></div></section>';
  }


  global.UPViews = { home: home, countries: countries, scholarships: scholarships, about: about };
})(window);
