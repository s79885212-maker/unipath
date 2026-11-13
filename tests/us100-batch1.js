'use strict';

module.exports = function ({ U, M, DB, ok }) {
  var expected = [
    "creighton-university",
    "elon-university",
    "saint-louis-university",
    "wheaton-college-illinois",
    "gustavus-adolphus-college",
    "college-of-saint-benedict",
    "saint-johns-university-minnesota",
    "hope-college",
    "saint-marys-college-indiana",
    "wheaton-college-massachusetts",
    "randolph-macon-college",
    "stonehill-college",
    "susquehanna-university",
    "augustana-college-illinois",
    "juniata-college",
    "southwestern-university",
    "austin-college",
    "lewis-and-clark-college",
    "washington-college-maryland",
    "suny-geneseo",
    "university-of-puget-sound",
    "whittier-college",
    "cal-poly-san-luis-obispo",
    "cal-poly-pomona",
    "drake-university"
  ];
  var ids = DB.universities.filter(u => u.country === 'us').slice(250, 275).map(u => u.id).sort();
  ok(JSON.stringify(ids) === JSON.stringify(expected.slice().sort()),
    'USA 250 → 350 batch 1 includes exactly the approved 25 profiles');
  ok(expected.every(id => {
    var u = U.uniById(id);
    return u.programsStatus === 'partial' && u.programs.length > 0 && u.programs.every(field => {
      var e = u.programEvidence[field];
      return e && e.program && e.url === u.links.programs && e.checked === u.lastVerified;
    });
  }), 'every new field filter tag links to a named program in the official list');

  var byId = U.uniById;
  ok(byId('wheaton-college-illinois').links.website !== byId('wheaton-college-massachusetts').links.website &&
     byId('cal-poly-pomona').links.website !== byId('cal-poly-san-luis-obispo').links.website &&
     byId('college-of-saint-benedict').city !== byId('saint-johns-university-minnesota').city,
    'similarly named institutions and shared-degree campuses have separate profile identities');
  var slo = U.roundsOf(byId('cal-poly-san-luis-obispo'));
  var cpp = U.roundsOf(byId('cal-poly-pomona'));
  ok(slo.some(d => d.kind === 'admission' && d.status === 'annual-rule' && !d.dateISO) &&
     slo.some(d => d.kind === 'documents' && !d.dateISO) &&
     cpp.some(d => d.status === 'confirmed' && d.entryYear === '2027' && d.dateISO === '2026-11-30'),
    'Cal Poly SLO preserves the undated application/document rules while Pomona cites an explicit Fall 2027 application period');

  var puget = byId('university-of-puget-sound');
  var drake = byId('drake-university');
  ok(U.awardKind(puget) === 'full-ride' && puget.scholarships.fullRide.internationalEligible === true &&
     U.awardDates(puget, puget.scholarships.fullRide).some(d => d.status === 'annual-rule') &&
     U.awardKind(drake) === null && drake.scholarships.merit.some(a => a.basis === 'need'),
    'Matelich is competitive full ride with a separate date rule and Drake is partial need-based aid');
  ok(U.costPeriod(drake) === 'semester' && U.costYear(drake) === '2027–2028' &&
     U.feeAmount(drake) === null && /\$50/.test(drake.admissions.applicationFee.note) &&
     !DB.match.annualCost[drake.id],
    'Drake preserves its semester tuition and the unresolved international fee');
  var budget = u => M.evaluate(u, { budget: 50000, currency: 'USD' }).budget.status;
  ok(budget(byId('wheaton-college-massachusetts')) === 'fits-tuition' &&
     budget(byId('cal-poly-pomona')) === 'unknown' && budget(puget) === 'unknown',
    'Wheaton tuition is not a total budget, earlier Pomona costs are not compared, and Matelich is never guaranteed');
};
