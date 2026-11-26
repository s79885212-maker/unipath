# -*- coding: utf-8 -*-
"""First-year application deadlines for US profiles that had none, or only dates
without a year (November 2026 pass).

Every date was read on the official university page named next to it, on DAY.
A date becomes "confirmed" for Autumn 2027 only when the page itself ties it to that
intake: the date carries its year (explicit-date) or the page says the dates are for
the 2027 entry (page-context, quoted). A date printed without a year on a page that
names no intake stays an annual rule: the reading day does not establish 2027.
Nothing is carried forward from an earlier cycle, and no time or zone is added that
the page does not print.

Run after the US builders and completion tools, before tools/us50_text_spacing.py:
    python3 tools/claude_us_deadlines2027.py
Re-running gives the same files.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import us_records_io as IO
from us200_std import L, flush

DAY = '2026-11-26'
MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
       'September', 'October', 'November', 'December']
FY = L('International first-year bachelor applicants', 'Иностранные абитуриенты первого курса бакалавриата')
ANNUAL_NOTE = L('The official page states a recurring date without establishing the entry cycle. No year or time zone has been inferred from the date of this review.',
                'Официальная страница указывает ежегодный срок, но не устанавливает набор. Год и часовой пояс не выведены из даты просмотра.')
NOT_CONFIRMED = 'A Fall 2027 application deadline for this applicant route has not been confirmed.'
MAIN = ('ED', 'ED2', 'EA', 'REA', 'RD', 'priority', 'admission', 'rolling', 'application-window')


def shown(iso):
    y, m, d = iso.split('-')
    return '%d %s %s' % (int(d), MON[int(m) - 1], y)


def C(name, kind, iso, src, quote, basis='explicit-date', applies=FY, binding=None,
      conditions=None, time=None, tz=None, note=None):
    """A date the page ties to the Autumn 2027 intake."""
    assert basis in ('explicit-date', 'page-context')
    d = {'name': name, 'kind': kind, 'entryTerm': 'Autumn', 'entryYear': '2027',
         'dateISO': iso, 'date': shown(iso)}
    if time: d['time'] = time
    if tz: d['timezone'] = tz
    d.update({'binding': binding, 'appliesTo': applies, 'conditions': conditions,
              'status': 'confirmed', 'source': src, 'verified': DAY, 'note': note,
              'cycleEvidence': {'basis': basis, 'entryTerm': 'Autumn', 'entryYear': '2027',
                                'source': src, 'verified': DAY, 'quote': quote}})
    return d


def A(name, kind, day, src, quote, applies=FY, binding=None, conditions=None, note=None):
    """A date printed without a year on a page that names no intake."""
    return {'name': name, 'kind': kind, 'entryTerm': None, 'entryYear': None,
            'dateISO': None, 'date': day, 'status': 'annual-rule', 'binding': binding,
            'appliesTo': applies, 'conditions': conditions, 'source': src,
            'verified': DAY, 'note': note or ANNUAL_NOTE,
            'cycleEvidence': {'basis': 'annual-rule', 'entryTerm': None, 'entryYear': None,
                              'source': src, 'verified': DAY, 'quote': quote}}


PLAN = []


def U(uid, events, keep=()):
    """Replace the deadlines of uid with events; earlier events named in keep stay."""
    PLAN.append((uid, events, keep))


# ---------------------------------------------------------------- the readings
ED, EDI, EDII = (L('Early Decision', 'Early Decision (ранняя обязывающая подача)'),
                 L('Early Decision I', 'Early Decision I (ранняя обязывающая подача)'),
                 L('Early Decision II', 'Early Decision II (ранняя обязывающая подача)'))
EA = L('Early Action', 'Early Action (ранняя подача)')
RD = L('Regular Decision', 'Regular Decision (основная подача)')
APP = L('Application deadline', 'Срок подачи')
PRI = L('Priority application deadline', 'Приоритетный срок подачи')
FIN = L('Final application deadline', 'Последний срок подачи')
DOCS = L('Required documents', 'Необходимые документы')

exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'claude_us_deadlines2027_data.py'), encoding='utf-8').read())


def main():
    files, where = IO.load_all()
    for uid, events, keep in PLAN:
        f = where[uid]
        r = f.record(uid)
        old = r['admissions']['deadlines']
        kept = [d for d in old if d['name'] in keep]
        assert len(kept) == len(keep), (uid, 'keep', keep)
        new = kept + [dict(e) for e in events]
        names = [d['name'] for d in new]
        assert len(names) == len(set(names)), (uid, 'duplicate names')
        if new != old:
            f.set(uid, 'admissions', 'deadlines', new)
        v = r.get('verification') or {}
        un = v.get('unconfirmed')
        if isinstance(un, list) and NOT_CONFIRMED in un and any(
                d['status'] == 'confirmed' and d['kind'] in MAIN for d in new):
            f.set(uid, 'verification', 'unconfirmed', [s for s in un if s != NOT_CONFIRMED])
    changed = [f.rel for f in files if f.save()]
    flush()
    print('deadlines: %d profiles; files changed: %s' % (len(PLAN), ', '.join(changed) or 'none'))


if __name__ == '__main__':
    main()
