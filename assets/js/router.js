/* ============================================================
   UniPath — hash router
   Routes:
     #/                          home
     #/countries                 all countries
     #/country/<code>            one country
     #/universities?q=&c=&field= browse with filters
     #/university/<id>[/<sec>]   university profile
     #/scholarships  #/compare  #/about
   Static pages: /university/<id>/ and /country/<code>/ (built from the
   same data by build-artifact.py) open the matching route.
   ============================================================ */
(function (global) {
  'use strict';
  var U = global.UP, V = global.UPViews, P = global.UPPages;
  var main, current = null;

  /* Static pages written at build time live at /university/<id>/ and
     /country/<code>/. Without a hash, the path decides the route there. */
  function pathRoute() {
    var m = /^\/(university|country)\/([a-z0-9-]+)\/?$/.exec(global.location.pathname || '');
    return m ? '#/' + m[1] + '/' + m[2] : null;
  }

  function parse() {
    var hash = global.location.hash;
    var raw = (hash && hash !== '#' ? hash : (pathRoute() || '#/')).replace(/^#/, '');
    var q = raw.indexOf('?');
    if (q > -1) raw = raw.slice(0, q);
    var parts = raw.split('/').filter(Boolean);
    return { parts: parts, key: parts.join('/') };
  }

  function notFound(title, body) {
    main.innerHTML = '<div class="wrap section"><div class="empty-state"><h3>' + U.esc(title) + '</h3>' +
      '<p>' + U.esc(body) + '</p><a class="btn btn-primary" href="#/universities">Browse all universities</a></div></div>';
  }

  function render() {
    var r = parse();
    var head = r.parts[0] || '';
    P.leaveBrowse();   /* drop the previous browse handle before swapping views */

    /* Moving between sections of the SAME profile only scrolls — no re-render. */
    if (head === 'university' && current && current.type === 'university' && current.id === r.parts[1]) {
      P.scrollToSection(r.parts[2], true);
      return;
    }

    switch (head) {
      case '':
        main.innerHTML = V.home();
        U.setActiveNav('home');
        current = { type: 'home' };
        break;

      case 'countries':
        main.innerHTML = V.countries();
        U.setActiveNav('countries');
        current = { type: 'countries' };
        break;

      case 'country':
        P.renderCountry(r.parts[1] || 'us');
        U.setActiveNav('countries');
        current = { type: 'country', id: r.parts[1] };
        break;

      case 'universities':
        main.innerHTML =
          '<section class="page-head"><div class="wrap"><h1>Universities</h1>' +
          '<p>Filter by what actually decides where you can go: funding, test policy, language of instruction, application cost and field of study.</p>' +
          '<div class="searchbox searchbox-flat" style="margin-top:22px;max-width:600px">' +
            '<span class="search-icon">🔍</span>' +
            '<input type="search" id="browse-q" placeholder="Search universities, cities, programs, scholarships…" aria-label="Search universities" autocomplete="off">' +
          '</div></div></section>' +
          '<section class="section"><div class="wrap"><div class="browse-layout">' +
            '<aside class="filters" id="filters" aria-label="Filters"></aside>' +
            '<div><div class="results-bar" id="results-bar"></div>' +
            '<div class="active-filters" id="active-filters"></div>' +
            '<div class="grid grid-3" id="results"></div></div>' +
          '</div></div></section>';
        document.title = 'Universities — UniPath';
        P.renderBrowse();
        U.setActiveNav('universities');
        current = { type: 'universities' };
        break;

      case 'university':
        var u = U.uniById(r.parts[1]);
        if (!u) { notFound('University not found', 'That profile does not exist in the database.'); U.setActiveNav('universities'); current = null; break; }
        P.renderProfile(u, r.parts[2]);
        U.setActiveNav('universities');
        current = { type: 'university', id: u.id };
        setCanonical(r);
        return;

      case 'scholarships':
        main.innerHTML = V.scholarships();
        U.setActiveNav('scholarships');
        current = { type: 'scholarships' };
        break;

      case 'compare':
        main.innerHTML = '<section class="page-head"><div class="wrap"><h1>Compare universities</h1>' +
          '<p>Up to three at a time, on the things that decide an application: total cost, English and test requirements, deadlines, application fee and funding.</p>' +
          '</div></section><section class="section"><div class="wrap"><div id="compare-out"></div></div></section>';
        document.title = 'Compare universities — UniPath';
        P.renderCompare();
        U.setActiveNav('compare');
        current = { type: 'compare' };
        break;

      case 'about':
        main.innerHTML = V.about();
        U.setActiveNav('about');
        current = { type: 'about' };
        break;

      default:
        notFound('Page not found', 'That address does not exist on this site.');
        current = null;
    }

    setCanonical(r);
    global.scrollTo(0, 0);
    document.querySelectorAll('[data-searchbox]').forEach(U.wireSearchBox);
  }

  /* Point search engines at the static page for each university and
     country (built by build-artifact.py). Only on a real web host. */
  function setCanonical(r) {
    if (!/^https?:$/.test(global.location.protocol)) return;
    var head = r.parts[0], id = r.parts[1], path = '/';
    if ((head === 'university' || head === 'country') && id && /^[a-z0-9-]+$/.test(id)) path = '/' + head + '/' + id + '/';
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = global.location.origin + path;
  }

  /* On a static page (/university/<id>/, /country/<code>/) the app's
     "#/..." links belong to the home document at "/". Send them there
     instead of stacking a hash route on top of the static URL. */
  var ROOT_META = document.querySelector('meta[name="unipath-root"]');
  function wireStaticLinks() {
    if (!ROOT_META) return;
    var root = ROOT_META.getAttribute('content') || '/';
    document.addEventListener('click', function (ev) {
      if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      var a = ev.target.closest && ev.target.closest('a[href^="#/"]');
      if (!a || a.target === '_blank') return;
      ev.preventDefault();
      global.location.assign(root + a.getAttribute('href'));
    });
  }

  function start() {
    main = document.getElementById('main');
    wireStaticLinks();
    /* No hash is simply the home route — avoid a redirect, which some
       sandboxed embeds block. */
    U.mount('home');
    render();
    global.addEventListener('hashchange', render);
    if (global.I18N) global.I18N.start();
    document.addEventListener('unipath:compare', function () {
      if (current && current.type === 'compare') P.renderCompare();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})(window);
