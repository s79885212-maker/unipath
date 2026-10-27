'use strict';
module.exports = function (ok) {
  var fs = require('fs'), vm = require('vm'), path = require('path');
  function run(file, box) { box.window = box; vm.createContext(box); vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), box); }
  function clock(box) {
    var tasks = {}, id = 0;
    box.setTimeout = function (fn, ms) { tasks[++id] = { fn: fn, ms: ms }; return id; };
    box.clearTimeout = function (n) { delete tasks[n]; };
    return function (ms) { Object.keys(tasks).forEach(function (n) { if (tasks[n] && tasks[n].ms === ms) { var fn = tasks[n].fn; delete tasks[n]; fn(); } }); };
  }
  function chunks() {
    var scripts = [], box = { location: { search: '?lang=ru' }, navigator: {}, localStorage: { getItem: function () {}, setItem: function () {} },
      UNIPATH_I18N: { ruH: {}, ruChunks: ['ca'] }, document: { body: null, documentElement: { setAttribute: function () {} }, querySelector: function () {},
        createElement: function () { return { remove: function () {} }; }, head: { appendChild: function (el) { scripts.push(el); } } } };
    var tick = clock(box); run('assets/js/i18n.js', box); return { box: box, tick: tick, scripts: scripts };
  }
  var c = chunks(), count = 0;
  ok(c.box.I18N.need(['ca'], function () { count++; }) === false && c.scripts.length === 1, 'a required translation waits for its own request');
  c.tick(12000);
  ok(count === 1 && c.box.I18N.need(['ca'], function () { count++; }) === true && c.scripts.length === 1,
    'a stalled translation releases navigation without an infinite retry loop');
  c.box.UNIPATH_I18N_ADD('ru', 'ca', {});
  ok(count === 1, 'late translation success never invokes an expired navigation callback twice');
  c = chunks(); count = 0; c.box.I18N.need(['ca'], function () { count++; }); c.scripts[0].onerror(); c.scripts[0].onerror(); c.tick(12000);
  ok(count === 1 && c.box.I18N.need(['ca'], function () {}) === true, 'network errors release waiting routes exactly once');

  var ids = {}, handlers = {}, inserted = [], reloaded = 0, boot = true;
  function element(tag) { return { tagName: tag.toUpperCase(), children: [], setAttribute: function () {},
    appendChild: function (el) { this.children.push(el); }, addEventListener: function (name, fn) { this[name] = fn; } }; }
  var box = { navigator: { language: 'ru' }, URL: URL, localStorage: { getItem: function () {} },
    location: { href: 'http://localhost/unipath/staging/', origin: 'http://localhost', search: '?lang=ru', reload: function () { reloaded++; } },
    addEventListener: function (name, fn) { handlers[name] = fn; }, document: { readyState: 'complete', createElement: element, addEventListener: function (name, fn) { handlers[name] = fn; },
      getElementById: function (id) { return ids[id]; }, querySelector: function () { return boot ? { remove: function () { boot = false; } } : null; },
      body: { insertBefore: function (el) { ids[el.id] = el; inserted.push(el); } } } };
  var tick = clock(box); run('assets/js/boot.js', box);
  handlers.error({ target: { tagName: 'IMG', src: 'http://localhost/broken.jpg' } });
  handlers.error({ target: { tagName: 'SCRIPT', src: 'https://challenges.cloudflare.com/api.js' } });
  ok(!inserted.length, 'photos and external widgets never trigger a first-party boot error');
  boot = false; tick(20000);
  ok(!boot && inserted.length === 1 && inserted[0].children[0].textContent.indexOf('Не удалось') === 0,
    'a stalled static page gets a Russian recovery message even without a loading animation');
  inserted[0].children[1].click(); ok(reloaded === 1, 'the load recovery action reloads the current page');
  delete ids['boot-error']; handlers.error({ target: { tagName: 'SCRIPT', src: 'http://localhost/unipath/staging/assets/js/router.js?v=168' } });
  ok(inserted.length === 2, 'a missing first-party router shows an error even with static content');
  delete ids['boot-error']; handlers.error({ target: box, filename: 'http://localhost/unipath/staging/assets/js/router.js?v=168' });
  ok(inserted.length === 3, 'a first-party startup exception also explains why the static page is not interactive');
  ids = {}; inserted = []; box.document.readyState = 'loading'; tick = clock(box); run('assets/js/boot.js', box); tick(20000);
  ok(inserted.length === 1, 'the watchdog does not wait for DOMContentLoaded behind a stalled script');
  ids = {}; inserted = []; tick = clock(box); run('assets/js/boot.js', box); handlers['unipath:ready'](); tick(20000);
  ok(inserted.length === 0, 'successful first render prevents a false loading error');
};
