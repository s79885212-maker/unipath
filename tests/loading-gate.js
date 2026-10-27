'use strict';
module.exports = function (ok) {
  var fs = require('fs'), vm = require('vm'), path = require('path'), ids = {}, gated = false, config, resets = [], passes = [];
  function node() {
    var el = { style: {}, hidden: true, setAttribute: function () {},
      appendChild: function (child) { if (child.id) ids[child.id] = child; },
      addEventListener: function (name, fn) { this[name] = fn; },
      getBoundingClientRect: function () { return { left: 0, top: 0, width: 300, height: 96 }; } };
    Object.defineProperty(el, 'innerHTML', { set: function (html) {
      if (html.indexOf('gate-retry') > -1) ['gate-retry', 'gate-status', 'gate-slot'].forEach(function (id) { ids[id] = node(); });
    } });
    return el;
  }
  var box = { document: { readyState: 'complete', createElement: node, body: node(), head: node(), getElementById: function (id) { return ids[id]; },
      documentElement: { classList: { add: function () { gated = true; }, remove: function () { gated = false; } } } },
    navigator: { userAgent: 'Local test browser' }, location: { protocol: 'http:', hostname: 'localhost', search: '', reload: function () {} },
    localStorage: { getItem: function () {}, setItem: function (key) { passes.push(key); } }, setTimeout: function () {},
    addEventListener: function () {}, removeEventListener: function () {},
    turnstile: { render: function (holder, options) { config = options; return 'local-widget'; }, reset: function (id) { resets.push(id); } } };
  box.window = box; vm.createContext(box); vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/gate.js'), 'utf8'), box);
  box.__unipathTurnstileReady(); config['before-interactive-callback'](); config['expired-callback']();
  ok(config.sitekey === '1x00000000000000000000AA' && gated && !ids['gate-retry'].hidden && !passes.length,
    'an expired local official-test-key widget offers retry while remaining gated and without a remembered pass');
  ids['gate-retry'].click();
  ok(resets.join() === 'local-widget' && gated && !passes.length, 'retry uses official reset and cannot unlock or remember an unverified visitor');
  config['timeout-callback'](); ok(!ids['gate-retry'].hidden && gated, 'interaction timeout restores recovery without bypassing the gate');
  config['error-callback'](); ok(gated && !passes.length, 'network and verification errors never become successful verification');
};
