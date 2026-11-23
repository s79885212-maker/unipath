/* ============================================================
   UniAtlas — loads the university records a page needs
   The records (data/universities.*.js) and the layers merged into them
   (photos, admission profiles, …) are listed in index.html as
   <script src="…" type="text/x-unipath-data">: the browser does not fetch
   a script of that type, so the home page opens without them.

   The build writes data/summary.js (tools/data_summary.js): counts for the
   home, countries and about pages, which country each file and each
   university belongs to. With it, UNIPATH.need(['us'], done) fetches the
   United States files plus the layers, and need('all', done) everything.
   It returns true when the files are already in; otherwise it returns
   false and calls done() once they have run (or failed — boot.js then
   shows the retry message).

   Without data/summary.js (index.html opened straight from the repository)
   every file is loaded at once, in order, as before.
   ============================================================ */
(function (global) {
  'use strict';
  var doc = global.document, DB = global.UNIPATH;
  if (!DB || !doc || !doc.querySelectorAll) return;

  var files = [].slice.call(doc.querySelectorAll('script[type="text/x-unipath-data"]'))
    .map(function (el) { return el.getAttribute('src'); });
  var S = DB.summary;

  if (!S || !S.fileCountry) {
    files.forEach(function (src) { doc.write('<script src="' + src + '"><\/script>'); });
    DB.need = function () { return true; };
    return;
  }

  function bare(src) { return String(src).split('?')[0].replace(/^.*?(data\/)/, 'data/'); }
  var state = {};     // src -> 'loading' | 'done' | 'error'
  var waiting = [];   // { list: [src], done: fn }

  function wanted(want) {
    return files.filter(function (src) {
      var c = S.fileCountry[bare(src)];
      return !c || want === 'all' || want.indexOf(c) > -1;   // layer files serve every country
    });
  }
  function finished(src) { return state[src] === 'done' || state[src] === 'error'; }

  function settle() {
    var ready = waiting.filter(function (w) { return w.list.every(finished); });
    if (!ready.length) return;
    waiting = waiting.filter(function (w) { return ready.indexOf(w) < 0; });
    DB.applyLayers();
    if (global.UP && global.UP.dataChanged) global.UP.dataChanged();
    ready.forEach(function (w) { w.done(); });
  }

  DB.need = function (want, done) {
    if (want !== 'all' && (!want || !want.length)) return true;
    var list = wanted(want).filter(function (src) { return !finished(src); });
    if (!list.length) return true;
    waiting.push({ list: list, done: done || function () {} });
    list.forEach(function (src) {
      if (state[src]) return;
      state[src] = 'loading';
      var el = doc.createElement('script');
      el.src = src;
      el.async = false;   // keep the order of index.html: records first, then layers
      el.onload = function () { state[src] = 'done'; settle(); };
      el.onerror = function () { state[src] = 'error'; settle(); };
      (doc.body || doc.head).appendChild(el);
    });
    return false;
  };
  /* Which countries a university id belongs to, before its records are loaded. */
  DB.countryOf = function (id) { return (S.idCountry || {})[id] || null; };
})(window);
