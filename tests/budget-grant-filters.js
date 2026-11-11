'use strict';

module.exports = function ({ U, M, DB, ok }) {
  function matches(option, u) {
    return U.applyFilters([u], { scholarship: [option] }).length === 1;
  }

  var harvard = U.uniById('harvard-university');
  var berea = U.uniById('berea-college');
  ok(U.awardKind(harvard) === 'need-based' &&
     matches('meets-need', harvard) &&
     !matches('full-ride', harvard) && !matches('full-ride-intl', harvard) &&
     !matches('full-tuition', harvard) && matches('full-ride', berea),
     'Harvard assessed need stays separate from full-level awards; Berea retains explicit guaranteed coverage');

  var coverage = { tuition: true, housing: true, meals: true };
  function restricted(scope) {
    return { scholarships: {
      fullRide: Object.assign({ available: true, internationalEligible: true, basis: 'merit', covers: coverage }, scope),
      merit: [Object.assign({ basis: 'merit', amount: 'Full tuition', internationalEligible: true }, scope)]
    } };
  }
  var options = ['full-ride', 'full-ride-intl', 'full-tuition', 'merit'];
  ok([{ internationalEligible: false }, { firstYearEligible: false }].every(function (scope) {
    return options.every(function (option) { return !matches(option, restricted(scope)); });
  }) && options.every(function (option) { return matches(option, restricted({})); }),
  'catalogue excludes explicitly ineligible international or first-year awards and retains eligible ones');

  var noInternationalNeed = { scholarships: { needBased: { meetsFullNeed: true, availableToInternational: false } } };
  ok(!matches('meets-need', noInternationalNeed), 'domestic full-need policy does not satisfy the international filter');

  var costConflict = { id: 'budget-conflict-test', costs: { status: 'conflict', currency: 'USD' } };
  DB.match.annualCost[costConflict.id] = { min: 5000, max: 5000, basis: 'total', currency: 'USD' };
  try {
    ok([null, 0, 10000].every(function (amount) {
      return M.evaluate(costConflict, { budget: amount, currency: 'USD', ielts: null, gpa: null, sat: null }).budget.status === 'conflict';
    }), 'a conflict status blocks stale yearly costs even without detailed conflict figures or text');
  } finally {
    delete DB.match.annualCost[costConflict.id];
  }
};
