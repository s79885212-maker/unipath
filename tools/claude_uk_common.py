# -*- coding: utf-8 -*-
"""Shared record builder for the UK 2027/28 batches (Claude, November 2026).

Rules kept by every batch:
- `english.ielts.profiles` hold DIRECT ENTRY levels only (scope says "direct entry"); Foundation,
  International Year One and pre-sessional levels go to admission notes, never to profiles,
  so the match page cannot read them as a degree threshold;
- Uzbek qualifications are recorded only as the university states them (school certificate,
  academic lyceum diploma and professional college diploma kept apart);
- a fee that is not for 2027/28 is labelled with its year; such a record gets
  `costs.status: 'previous-cycle'` and no `annualCost` row.
"""
import copy, io, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from us200_std import L as _L, TR, flush, ROOT

UK = os.path.join(ROOT, 'data/universities.uk.js')
MATCH = os.path.join(ROOT, 'data/match.js')


def L(en, ru):
    """Keep the dictionary's existing Russian for a string that is already translated."""
    return _L(en, TR.get(en, ru))


def plain(x):
    if isinstance(x, dict): return {k: plain(v) for k, v in x.items()}
    if isinstance(x, list): return [plain(v) for v in x]
    return str(x) if isinstance(x, str) else x


def load_uk():
    return io.open(UK, encoding='utf-8').read()


def block(s, uid):
    i = s.index('"id": "%s"' % uid); j = s.rfind('{', 0, i); d = 0
    for k in range(j, len(s)):
        d += {'{': 1, '}': -1}.get(s[k], 0)
        if d == 0:
            return json.loads(s[j:k + 1])


def src(label, ru, url):
    return {'label': L(label, ru), 'url': url}


def record(day, tpl, uid, name, short, city, city_ru_in, region, brand, website, intl_url, programs, fee, fee_year,
           fee_note, ielts, uz, routes, money_items, merit, fr_note, sources, unconfirmed, starts, extra_notes=()):
    """programs: list of (field, programme name, url, ucas code); the first one carries the fee."""
    first = programs[0]
    yr = fee_year[:4] + '/' + fee_year[-2:]   # '2027–2028' -> '2027/28'
    prev = fee_year != '2027–2028'
    ucas = ', '.join(p[3] for p in programs if p[3])
    ucas_ru = ucas or 'код не подтверждён'
    ucas = ucas or 'code not confirmed'
    rec = {
        'id': uid, 'name': name, 'shortName': short, 'country': 'uk', 'city': city, 'region': region,
        'founded': None, 'type': 'Public university', 'institutionKind': 'public', 'degrees': ['bachelor'], 'brand': brand,
        'description': L('A public university in %s. Applications go through UCAS. This profile is built from named bachelor’s programmes with their international fee, the direct-entry IELTS level, the Uzbekistan entry rule where the university publishes one, and the Foundation or pathway route kept separate.' % city,
                         'Государственный университет в %s. Заявки подаются через UCAS. Профиль составлен по названным программам бакалавриата с платой для иностранцев, уровнем IELTS для прямого приёма, правилом для Узбекистана, если университет его публикует, и отдельно — по маршруту Foundation или pathway.' % city_ru_in),
        'englishTaught': True, 'languageOfInstruction': 'English',
        'programs': [p[0] for p in programs], 'englishTaughtPrograms': [p[0] for p in programs],
        'programsBasis': 'evidence', 'programsStatus': 'partial',
        'programEvidence': {p[0]: {'program': p[1], 'level': 'bachelor', 'language': 'English', 'url': p[2], 'checked': day} for p in programs},
        'programNote': L('Only the named programme(s) were checked in this batch (UCAS %s); other subjects are not recorded yet, which does not mean the university does not offer them.' % ucas,
                         'В этой партии проверены только названные программы (UCAS %s); другие направления пока не записаны — это не значит, что университет их не предлагает.' % ucas_ru),
        'links': {'website': website, 'internationalAdmissions': intl_url, 'applicationPortal': 'https://www.ucas.com/', 'programs': first[2], 'cost': first[2]},
        'admissions': {
            'platforms': ['UCAS (required for all undergraduate courses)'],
            'deadlines': copy.deepcopy(tpl['admissions']['deadlines']),
            'applicationFee': copy.deepcopy(tpl['admissions']['applicationFee']),
            'documents': copy.deepcopy(tpl['admissions']['documents']),
            'recommendations': 'One academic reference through UCAS', 'essay': 'UCAS personal statement', 'interview': None,
            'notes': [L('Start dates for this programme: %s.' % starts[0], 'Даты начала этой программы: %s.' % starts[1])] + list(routes) + list(extra_notes)},
        'english': {
            'ielts': {'min': None, 'recommended': None, 'varies': True, 'profilesComplete': False,
                      'note': L('Direct entry to Year 1 of the bachelor’s degree only. Foundation, International Year One and pre-sessional English have their own, lower levels and are described in the admission notes, not here.',
                                'Только прямой приём на первый курс бакалавриата. У Foundation, International Year One и подготовительного английского свои, более низкие уровни; они описаны в примечаниях о поступлении, а не здесь.'),
                      'profiles': [{'name': L('Direct entry — %s' % first[1], 'Прямой приём — %s' % first[1]), 'overall': ielts[0], 'sections': ielts[1],
                                    'scope': L('Year 1 of this bachelor’s programme (direct entry)', 'Первый курс этой программы бакалавриата (прямой приём)'),
                                    'source': ielts[2], 'verified': day}]},
            'toefl': {'min': None, 'recommended': None, 'note': 'Not confirmed during this check.'},
            'duolingo': {'min': None, 'recommended': None, 'note': 'Not confirmed during this check.'},
            'waiver': None,
            'note': L('Pre-sessional English is offered for applicants below the required level; it is preparation, not a lower entry threshold.',
                      'Для тех, кто не набрал нужный уровень, есть подготовительный английский (pre-sessional) — это подготовка, а не более низкий порог поступления.')},
        'academics': {'gpa': None,
                      'sat': {'policy': 'not-applicable', 'note': 'Admission is on school-leaving qualifications rather than the SAT or ACT.'},
                      'act': {'policy': 'not-applicable', 'note': 'The US test-optional classification does not apply to this admission route.'},
                      'otherTests': None, 'internationalQualifications': uz},
        'costs': {'breakdown': {'tuition': fee,
                                'tuitionText': L('£{:,} a year for {} in {} — one confirmed course example'.format(fee, first[1], yr),
                                                 '£{:,} в год за {} в {} — пример одной подтверждённой программы'.format(fee, first[1], yr)),
                                'includes': L('the international rate published on the course page; living costs are extra',
                                              'ставка для иностранцев со страницы программы; расходы на жизнь — отдельно'),
                                'published': True},
                  'academicYear': fee_year, 'currency': 'GBP',
                  'headline': L('£{:,} tuition a year ({} example, {})'.format(fee, first[1], yr),
                                '£{:,} за обучение в год (пример: {}, {})'.format(fee, first[1], yr)),
                  'items': money_items, 'billedSubtotal': None,
                  'totalText': L('£{:,} a year in tuition for this course in {}; living costs are extra'.format(fee, yr),
                                 '£{:,} в год за обучение на этой программе в {}; расходы на жизнь — отдельно'.format(fee, yr)),
                  'note': fee_note, 'source': first[2], 'verified': day},
        'scholarships': {'fullRide': {'available': None, 'internationalEligible': None, 'basis': None,
                                      'covers': {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None},
                                      'renewable': None, 'competitiveness': None, 'howToApply': None, 'note': fr_note},
                         'merit': merit,
                         'needBased': {'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None,
                                       'forms': [], 'deadlines': None, 'note': 'Not confirmed during this check.'}},
        'sources': sources,
        'verification': {'level': 'partial',
                         'checked': [L('UCAS 2027 dates', 'Сроки UCAS 2027'), L('direct-entry IELTS', 'IELTS для прямого приёма'),
                                     L('international tuition (one course)', 'Плата для иностранцев (одна программа)'),
                                     L('Foundation or pathway route', 'Маршрут Foundation или pathway'), L('international scholarships', 'Стипендии для иностранцев')],
                         'unconfirmed': unconfirmed},
        'lastVerified': day,
        'photos': {'main': None, 'gallery': [], 'city': None}}
    if prev:
        rec['costs']['status'] = 'previous-cycle'
    return plain(rec)


def write(recs, s):
    for r in recs:
        assert '"id": "%s"' % r['id'] not in s and ("id: '%s'" % r['id']) not in s, r['id']
    body = ',\n'.join(json.dumps(r, ensure_ascii=False, indent=2) for r in recs)
    end = s.rindex('\n);')
    io.open(UK, 'w', encoding='utf-8').write(s[:end] + ',\n' + body + s[end:])
    m = io.open(MATCH, encoding='utf-8').read()
    anchor = "    'university-of-strathclyde':"
    i = m.index(anchor); j = m.index('\n', i)
    rows = ''
    for r in recs:
        if r['costs']['academicYear'] != '2027–2028':
            continue
        prog = r['programEvidence'][r['programs'][0]]['program']
        note = L('%s example for 2027/28; each course is priced separately' % prog, 'Пример %s на 2027/28; каждая программа стоит по-своему' % prog)
        rows += "\n    '%s': { currency: 'GBP', basis: 'tuition', min: %d, max: %d, note: '%s' }," % (
            r['id'], r['costs']['breakdown']['tuition'], r['costs']['breakdown']['tuition'], str(note).replace("'", "\\'"))
    io.open(MATCH, 'w', encoding='utf-8').write(m[:j] + rows + m[j:])
    flush()
