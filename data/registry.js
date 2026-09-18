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
   - data/photos.js: the first photo is the main one, thumb.jpg sits beside it.
   Called once by the site (assets/js/app.js) and by the build step that
   writes static university pages (build-artifact.py). Safe to call twice. */
window.UNIPATH.applyLayers = function () {
  var DB = window.UNIPATH;
  if (DB._layersApplied) return;
  DB._layersApplied = true;
  var profiles = DB.profiles || {};
  var photos = DB.photos || {};
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
    var list = photos[u.id];
    if (list && list.length) {
      u.photos = { main: list[0].src, thumb: list[0].src.replace(/[^/]+$/, 'thumb.jpg'), gallery: list };
    }
  });
};
