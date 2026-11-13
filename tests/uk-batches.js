/* UK 2027/28 batches (Claude, November 2026): direct entry and preparatory routes stay apart. */
'use strict';
module.exports = function (env) {
  var fs = require('fs'), path = require('path');
  var U = env.U, M = env.M, DB = env.DB, ok = env.ok;
  var root = path.join(__dirname, '..');
  var ids = [];
  ['research/claude-uk-batch1-2027.json', 'research/claude-uk-batch2-2027.json'].forEach(function (f) {
    if (fs.existsSync(path.join(root, f))) ids = ids.concat(JSON.parse(fs.readFileSync(path.join(root, f), 'utf8')).ids);
  });
  var recs = ids.map(function (id) { return U.uniById(id); });
  var bad = [];
  recs.forEach(function (u, i) {
    if (!u) { bad.push(ids[i] + ': missing'); return; }
    var t = u.english.ielts, ac = DB.match.annualCost[u.id];
    if (u.country !== 'uk' || t.min !== null || !t.varies) bad.push(u.id + ': ielts shape');
    if (!t.profiles.length || !t.profiles.every(function (p) { return p.overall >= 6 && /direct entry/.test(p.scope) && p.source && p.verified; })) bad.push(u.id + ': profile');
    if (u.costs.academicYear === '2027–2028') { if (!ac || ac.min !== u.costs.breakdown.tuition || ac.basis !== 'tuition') bad.push(u.id + ': annualCost'); }
    else if (u.costs.status !== 'previous-cycle' || ac) bad.push(u.id + ': older fee must be labelled and kept out of budgets');
    if (!/Uzbek/.test(u.academics.internationalQualifications)) bad.push(u.id + ': Uzbekistan');
    if (!u.admissions.notes.some(function (n) { return /Foundation route|Pathway route/.test(n); })) bad.push(u.id + ': route');
    (u.scholarships.merit || []).forEach(function (a) { if (a.internationalEligible !== true || !a.source || !a.verified) bad.push(u.id + ': award ' + a.id); });
    /* IELTS 5.5 never reads as a met direct-entry level for these profiles. */
    var ev = M.evaluate(u, { ielts: 5.5, gpa: null, sat: null, budget: null, currency: 'GBP', country: '', field: '', englishOnly: false });
    if (ev.checks.some(function (c) { return c.basis === 'minimum' && c.level === 'ok'; })) bad.push(u.id + ': IELTS 5.5 shown as meeting direct entry');
  });
  ok(recs.length >= 10 && !bad.length,
     'UK 2027/28 batches: direct-entry IELTS only in profiles, IELTS 5.5 never meets them, Foundation kept apart, fee year labelled, Uzbek rule and sourced awards (' + recs.length + ' profiles)', bad.join('; '));
};
