/* ============================================================
   UniPath — admissions updates

   Entries come from data/news.js, where every item carries its
   official source, the date the source published it and the date it
   was last checked. An item is moved to the archive only when it has
   a confirmed deadline date that has passed — never on a guess.
   ============================================================ */
(function (global) {
  'use strict';
  var U = global.UP;
  var esc = U.esc, has = U.has;

  var TYPE_LABEL = {
    'applications-open': 'Applications open',
    'deadline': 'Confirmed deadline',
    'scholarship': 'Scholarship',
    'requirement-change': 'Requirement change'
  };

  var state = { country: 'all', cycle: 'all' };

  function items() {
    return (global.UNIPATH && global.UNIPATH.news) || [];
  }

  /* What an entry is today. The state comes from the entry itself (data/news.js)
     and is never guessed: an entry without a deadline is not treated as an
     open call, and a missing state is shown as information only.
       open          — applications are being accepted now
       upcoming      — a deadline that is still ahead
       closed        — the deadline has passed or the call has ended
       varies        — the date depends on the country or route
       informational — a rule or change, not a competition */
  var STATE_LABEL = {
    open: 'Open now', upcoming: 'Deadline ahead', closed: 'Closed',
    varies: 'Dates depend on country or route', informational: 'Information'
  };
  var STATE_BADGE = { open: 'badge-ok', upcoming: 'badge-warn', closed: '', varies: 'badge-flat', informational: 'badge-flat' };
  function cutoff(n) {
    return { dateISO: n.closes || n.eventDate, time: n.closesTime || n.eventTime, timezone: n.closesZone || n.eventZone };
  }
  function newsState(n) {
    if (n.state === 'closed') return 'closed';
    /* A dated cut-off decides, whatever the stored state says. */
    if ((n.deadline === true && has(n.eventDate)) || has(n.closes)) {
      if (U.deadlinePassed(cutoff(n))) return 'closed';
      return n.state === 'open' ? 'open' : 'upcoming';
    }
    if (n.state === 'open' || n.state === 'varies' || n.state === 'informational') return n.state;
    return 'informational';
  }
  function isPast(n) { return newsState(n) === 'closed'; }

  /* Dates are formatted in the language in use, so they never need a
     dictionary entry of their own. */
  function fmt(iso) {
    if (!has(iso)) return null;
    var p = String(iso).split('-');
    if (p.length !== 3) return iso;
    var lang = (global.I18N && global.I18N.lang) || 'en';
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    try {
      return d.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB',
        { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) { return iso; }
  }

  function card(n) {
    var c = n.country === 'all' ? null : U.country(n.country);
    var when = has(n.eventDate) ? fmt(n.eventDate) : (has(n.eventText) ? n.eventText : null);
    var whenLabel = n.deadline === true ? 'Deadline' : 'Date';
    return '<article class="card news-card' + (isPast(n) ? ' is-past' : '') + '"><div class="card-body">' +
      '<div class="pill-row">' +
        '<span class="badge badge-info">' + esc(TYPE_LABEL[n.type] || 'Update') + '</span>' +
        (c ? '<span class="badge badge-flat">' + c.flag + ' ' + esc(c.name) + '</span>'
           : '<span class="badge badge-flat">All countries</span>') +
        (has(n.cycle) ? '<span class="badge badge-flat"><span>Entry</span> <span>' + esc(n.cycle) + '</span></span>' : '') +
        '<span class="badge ' + STATE_BADGE[newsState(n)] + '">' + esc(STATE_LABEL[newsState(n)]) + '</span>' +
      '</div>' +
      '<h3 style="margin:10px 0 6px">' + esc(n.title) + '</h3>' +
      '<p class="small muted" style="margin:0 0 8px">' + esc(n.org) + '</p>' +
      '<p style="margin:0 0 12px">' + esc(n.summary) + '</p>' +
      (has(n.stateNote) && !isPast(n) ? '<p class="small" style="margin:0 0 12px"><strong>' + esc(STATE_LABEL[newsState(n)]) + ':</strong> ' + esc(n.stateNote) + '</p>' : '') +
      '<dl class="uni-facts">' +
        '<div><dt>' + esc(whenLabel) + '</dt><dd>' + (when ? esc(when) : '<span class="unknown">Not stated by the source</span>') + '</dd></div>' +
        '<div><dt>Published</dt><dd>' + (has(n.published) ? esc(fmt(n.published)) : '<span class="unknown">Not stated by the source</span>') + '</dd></div>' +
        '<div><dt>Checked</dt><dd>' + esc(fmt(n.verified)) + '</dd></div>' +
      '</dl>' +
      '<p style="margin:12px 0 0"><a class="btn btn-ghost btn-sm" href="' + esc(n.url) + '" target="_blank" rel="noopener">Official source ↗</a>' +
        (has(n.uniId) && U.uniById(n.uniId) ? ' <a class="btn btn-quiet btn-sm" href="' + U.uniUrl(U.uniById(n.uniId)) + '">University profile</a>' : '') +
      '</p>' +
      '</div></article>';
  }

  function countriesWithNews() {
    var seen = {};
    items().forEach(function (n) { seen[n.country] = true; });
    return Object.keys(seen);
  }

  function draw() {
    /* An item with no cycle is a standing rule: it stays visible under every entry year. */
    var all = items().filter(function (n) {
      return (state.country === 'all' || n.country === state.country || n.country === 'all') &&
        (state.cycle === 'all' || !has(n.cycle) || n.cycle === state.cycle);
    });
    var live = all.filter(function (n) { return !isPast(n); });
    var past = all.filter(isPast);

    var box = document.getElementById('news-list');
    if (!box) return;
    box.innerHTML = (live.length
      ? '<div class="grid grid-2">' + live.map(card).join('') + '</div>'
      : '<div class="empty-state"><h3>No confirmed updates for this filter</h3>' +
        '<p>Only announcements confirmed on an official source are listed here, so this section stays empty rather than showing anything unverified.</p></div>') +
      (past.length
        ? '<h2 style="margin-top:36px">Archive</h2>' +
          '<p class="small muted">Deadlines that have passed and calls that have ended. They stay here so you can see what the cycle looked like. A rule change stays in the main list for as long as it is in force, even after the day it was announced.</p>' +
          '<div class="grid grid-2" style="margin-top:16px">' + past.map(card).join('') + '</div>'
        : '');

    var chips = document.getElementById('news-filter');
    if (chips) {
      var codes = countriesWithNews().filter(function (c) { return c !== 'all'; }).sort();
      chips.innerHTML = ['all'].concat(codes).map(function (code) {
        var c = code === 'all' ? null : U.country(code);
        var on = state.country === code;
        return '<button type="button" class="badge badge-flat' + (on ? ' is-on' : '') + '" data-news-country="' + esc(code) + '">' +
          (c ? c.flag + ' ' + esc(c.name) : 'All countries') + '</button>';
      }).join('');
    }
    var cyc = document.getElementById('news-cycle');
    if (cyc) {
      var years = {};
      items().forEach(function (n) { if (has(n.cycle)) years[n.cycle] = true; });
      cyc.innerHTML = '<span class="small muted" style="align-self:center">Entry year:</span> ' + ['all'].concat(Object.keys(years).sort()).map(function (y) {
        var on = state.cycle === y;
        return '<button type="button" class="badge badge-flat' + (on ? ' is-on' : '') + '" aria-pressed="' + (on ? 'true' : 'false') + '" data-news-cycle="' + esc(y) + '">' +
          (y === 'all' ? 'Any entry year' : '<span>Entry</span> <span>' + esc(y) + '</span>') + '</button>';
      }).join('');
    }
  }

  function render(main) {
    main.innerHTML = '<section class="page-head"><div class="wrap">' +
      '<h1>Admissions updates</h1>' +
      '<p>Application openings, confirmed deadlines, requirement changes and scholarship calls — each one taken from the official source, with the date it was published and the date it was last checked.</p>' +
      '</div></section>' +
      '<section class="section"><div class="wrap">' +
        '<div class="pill-row" id="news-filter" style="margin-bottom:10px"></div>' +
        '<div class="pill-row" id="news-cycle" style="margin-bottom:20px"></div>' +
        '<div id="news-list"></div>' +
        '<p class="small muted" style="margin-top:26px">Nothing here is written from memory: if a source does not state a publication date, this page says so instead of inventing one. Always confirm a deadline on the university’s own page before you rely on it.</p>' +
      '</div></section>';
    document.title = 'Admissions updates — UniPath';
    draw();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-news-country]') : null;
    if (!b) return;
    state.country = b.getAttribute('data-news-country');
    draw();
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-news-cycle]') : null;
    if (!b) return;
    state.cycle = b.getAttribute('data-news-cycle');
    draw();
  });

  global.UPNews = { render: render };
})(window);
