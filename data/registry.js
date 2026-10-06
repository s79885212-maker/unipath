/* ============================================================
   UniPath — data registry bootstrap
   Every data file pushes into these arrays. Load order:
     registry.js -> countries.js -> universities.*.js
   Adding a country or university NEVER requires touching the UI.
   ============================================================ */
window.UNIPATH = window.UNIPATH || {
  countries: [],
  universities: [],
  /* Admission statistics layer — see data/admission-profiles.js */
  profiles: {},
  /* Site settings. reportErrorUrl: a real, monitored address for error
     reports (an https:// form or issue link, or a mailto: link). While it is
     null the About page shows neutral text and no button — never a form
     that goes nowhere. */
  config: {
    reportErrorUrl: 'https://github.com/s79885212-maker/unipath/issues/new'
  },
  /* Program taxonomy. Add a key here and every filter/menu picks it up. */
  fields: [
    { id: 'business',         label: 'Business',          icon: '📊' },
    { id: 'economics',        label: 'Economics',         icon: '📈' },
    { id: 'computer-science', label: 'Computer Science',  icon: '💻' },
    { id: 'engineering',      label: 'Engineering',       icon: '⚙️' },
    { id: 'psychology',       label: 'Psychology',        icon: '🧠' },
    { id: 'biology',          label: 'Biology',           icon: '🧬' },
    { id: 'mathematics',      label: 'Mathematics',       icon: '📐' },
    { id: 'social-sciences',  label: 'Social Sciences',   icon: '🌍' },
    { id: 'humanities',       label: 'Humanities',        icon: '📚' },
    { id: 'arts',             label: 'Arts & Design',     icon: '🎨' },
    { id: 'law',              label: 'Law & Policy',      icon: '⚖️' },
    { id: 'medicine',         label: 'Health & Medicine', icon: '🩺' },
    { id: 'education',        label: 'Education',         icon: '🎓' },
    { id: 'other',            label: 'Other',             icon: '✨' }
  ]
};

/* Merge the layers loaded after the base records:
   - data/admission-profiles.js: listed sub-fields replace the base ones,
     sources are appended, `stats` is attached;
   - data/photos.js: the first photo is the main one, thumb.jpg sits beside it;
   - data/degrees.js: field tags are checked against degrees conferred;
   - data/test-policy.js: the cycle a SAT/ACT policy was stated for;
   - data/english-details.js: test versions, section minimums, conditional admission;
   - data/award-details.js: test and renewal conditions of the largest award.
   Called once by the site (assets/js/app.js) and by the build step that
   writes static university pages (build-artifact.py). Safe to call twice. */
window.UNIPATH.applyLayers = function () {
  var DB = window.UNIPATH;
  if (DB._layersApplied) return;
  DB._layersApplied = true;
  var profiles = DB.profiles || {};
  var photos = DB.photos || {};
  /* Static pages at /university/<id>/ declare <meta name="unipath-root" content="/">:
     photo paths in data/photos.js are relative to the site root, so they get it as a prefix. */
  var rootMeta = typeof document !== 'undefined' && document.querySelector ? document.querySelector('meta[name="unipath-root"]') : null;
  var root = rootMeta ? rootMeta.getAttribute('content') || '' : '';
  function at(path) { return root && !/^(\/|[a-z]+:)/i.test(path) ? root + path : path; }
  DB.universities.forEach(function (u) {
    var p = profiles[u.id];
    if (p) {
      ['english', 'academics', 'admissions', 'costs'].forEach(function (key) {
        if (!p[key]) return;
        if (key === 'costs') { u.costs = p.costs; return; }
        u[key] = u[key] || {};
        for (var f in p[key]) if (p[key].hasOwnProperty(f)) u[key][f] = p[key][f];
      });
      if (p.englishTaught !== undefined) u.englishTaught = p.englishTaught;
      if (p.sources) u.sources = (u.sources || []).concat(p.sources);
      u.stats = p.stats || null;
    }
    /* Explicit status for an English test that has no published figure. */
    var ts = (window.UNIPATH.testStatus || {})[u.id];
    if (ts && u.english) for (var tk in ts) if (ts.hasOwnProperty(tk) && u.english[tk]) u.english[tk].status = ts[tk];
    /* Aid pages read with no full-level award described (data/award-details.js). */
    if ((DB.awardNotDescribed || []).indexOf(u.id) > -1 && u.scholarships && u.scholarships.fullRide && u.scholarships.fullRide.available !== true && u.scholarships.fullRide.available !== false) u.scholarships.fullRide.status = 'not-published';
    /* Conditions of the largest award (data/award-details.js). */
    var ad = (DB.awardDetails || {})[u.id];
    if (ad && u.scholarships && u.scholarships.fullRide) for (var ak in ad) if (ad.hasOwnProperty(ak)) u.scholarships.fullRide[ak] = ad[ak];
    /* Test versions, section minimums and conditional admission
       (data/english-details.js). */
    var ed = (DB.englishDetails || {})[u.id];
    if (ed) {
      u.english = u.english || {};
      for (var ek in ed) if (ed.hasOwnProperty(ek)) {
        if (ek === 'ielts' || ek === 'toefl' || ek === 'duolingo') {
          u.english[ek] = u.english[ek] || {};
          for (var ef in ed[ek]) if (ed[ek].hasOwnProperty(ef)) u.english[ek][ef] = ed[ek][ef];
        } else u.english[ek] = ed[ek];
      }
    }
    /* The cycle a SAT/ACT policy was stated for (data/test-policy.js). */
    var tp = (DB.testPolicyCycle || {})[u.id];
    if (tp) {
      u.academics = u.academics || {}; u.academics.sat = u.academics.sat || {};
      for (var tk2 in tp) if (tp.hasOwnProperty(tk2)) u.academics.sat[tk2] = tp[tk2];
    }
    /* Field tags checked against bachelor's degrees conferred (data/degrees.js):
       a tag stays when one of its categories has degrees or an official page
       lists a major; a tag with neither is taken off and kept in fieldsDropped
       with the reason shown on the profile; a field with at least 1% of
       bachelor's degrees is added. Tags without a category of their own
       (economics) are left as they are. */
    var deg = (DB.degreesByArea || {})[u.id];
    if (deg) {
      var FA = DB.fieldAreas || {}, notes = (DB.fieldNotes || {})[u.id] || {};
      var total = 0, a;
      for (a in deg.areas) if (deg.areas.hasOwnProperty(a)) total += deg.areas[a];
      var share = function (tag) {
        var best = 0;
        (FA[tag] || []).forEach(function (k) {
          var v = deg.areas[k] || 0;
          if (deg.unit === 'count') v = total ? v / total * 100 : 0;
          if (v > best) best = v;
        });
        return best;
      };
      var before = (u.programs || []).slice(), kept = [], dropped = [], added = [];
      before.forEach(function (tag) {
        if (!FA[tag] || share(tag) > 0 || (notes[tag] && notes[tag].kind === 'major')) kept.push(tag);
        else dropped.push(tag);
      });
      for (var tag in FA) if (FA.hasOwnProperty(tag) && before.indexOf(tag) < 0 && share(tag) >= 1) { kept.push(tag); added.push(tag); }
      var sameAsAll = Array.isArray(u.englishTaughtPrograms) && u.englishTaughtPrograms.length === before.length;
      u.programs = kept;
      if (sameAsAll) u.englishTaughtPrograms = kept.slice();
      else if (Array.isArray(u.englishTaughtPrograms)) u.englishTaughtPrograms = u.englishTaughtPrograms.filter(function (t) { return dropped.indexOf(t) < 0; });
      u.degreesByArea = deg; u.fieldNotes = notes; u.fieldsDropped = dropped; u.fieldsAdded = added;
      if (!u.programsBasis) u.programsBasis = 'degrees';
    }
    var list = photos[u.id];
    if (list && list.length) {
      var gallery = list.map(function (g) {
        var copy = {};
        for (var k in g) if (g.hasOwnProperty(k)) copy[k] = g[k];
        copy.src = at(g.src);
        return copy;
      });
      u.photos = { main: gallery[0].src, thumb: gallery[0].src.replace(/[^/]+$/, 'thumb.jpg'), gallery: gallery };
    }
  });
};
