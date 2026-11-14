'use strict';

module.exports = function ({ U, DB, M, ok }) {
  const { batches } = require('../research/uk2027-expansion.json');
  const ids = batches.flat();
  ok(batches.length === 3 && batches.every(batch => batch.length === 5) && new Set(ids).size === 15,
    'UK 2027 expansion contains three batches of five unique profiles');
  for (const id of ids) {
    const record = U.uniById(id);
    if (!record) { ok(false, id + ': missing profile'); continue; }
    const ielts = record.english.ielts;
    const breakdown = record.costs.breakdown;
    const cost = DB.match.annualCost[id];
    const field = record.programs[0];
    const input = { ielts: 5.5, budget: null, gpa: null, sat: null, field, country: 'uk', englishOnly: false, currency: 'GBP' };
    const result = M.evaluate(record, input);

    ok(record.country === 'uk' && record.programs.every(tag => {
      const evidence = record.programEvidence[tag];
      return evidence && evidence.campus && evidence.entryYear === '2027' && evidence.level === 'bachelor' &&
        /^https:\/\//.test(evidence.url) && /^2026-11-1[34]$/.test(evidence.checked);
    }), id + ': each search tag has a named bachelor programme and a verified campus and intake');
    ok(ielts.min === null && ielts.varies && ielts.profiles.length &&
      ielts.profiles.every(p => p.overall >= 6 && p.sections && /direct entry/.test(p.scope) && p.source && p.verified) &&
      !result.checks.some(check => check.basis === 'minimum' && check.level === 'ok'),
    id + ': Foundation IELTS cannot qualify as direct entry');
    if (record.costs.academicYear === '2027–2028') {
      ok(cost && cost.basis === 'tuition' && cost.currency === 'GBP' && cost.min === breakdown.tuition &&
        M.evaluate(record, { ...input, budget: 50000 }).budget.status !== 'fits',
      id + ': verified tuition remains separate from full annual cost');
    } else {
      ok(record.costs.status === 'previous-cycle' && !cost, id + ': earlier tuition is excluded from budget matching');
    }
  }
};

