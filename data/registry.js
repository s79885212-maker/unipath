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
