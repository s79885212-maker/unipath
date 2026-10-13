# -*- coding: utf-8 -*-
"""v111 — corrections after the United States expansion, part 1.

1. A published score that is not a minimum says what it is (recBasis): Reed's
   IELTS 7+ is an average the college reports, not a competitive cut-off.
2. Every named award of the 90 new records says what it rests on (basis).
   Reed's UWC Davis–Reed Match is a partner programme for admitted UWC
   students ("eligibility is not based on merit"), and the selection basis of
   the Continental Scholarship Program is not published.
3. Seventeen records whose list of majors was not read lose the tag "other":
   "not checked" is a status, not a subject area.
Each change names the official page it rests on; nothing is estimated."""
import io, json, os, re
import us3_edit
from us200_std import L, flush

V = '2026-10-13'
head, recs = us3_edit.load()
D = us3_edit.by_id(recs)

# ------------------------------------------------------------------ 1. English
REED = 'https://www.reed.edu/admission-aid/how-to-apply/international.html'
REC = {
    # the record's own note, written from the official page, says which it is
    'reed-college': 'average',                       # "While there is no minimum score that we are looking for, these are the average scores we see"
    'bennington-college': 'typical',                 # "successful applicants typically have at least"
    'claremont-mckenna-college': 'recommended',      # "minimum recommended score"
    'kalamazoo-college': 'recommended',
    'sarah-lawrence-college': 'competitive',         # "most competitive applicants have"
    'berklee-college-of-music': 'recommended',
    'william-and-mary': 'recommended',               # "looks for"
    'olin-college-of-engineering': 'recommended',
    'hobart-and-william-smith-colleges': 'competitive',
    'goucher-college': 'recommended',
    'ithaca-college': 'recommended',
    'washington-and-jefferson-college': 'recommended',   # "generally looks for"
    'worcester-polytechnic-institute': 'recommended',
    'seattle-university': 'threshold',               # the score that lifts the bridge requirement
    'unc-chapel-hill': 'typical',                    # "strong applicants typically score ... not a minimum"
}
for uid, basis in REC.items():
    e = D[uid]['english']
    for k in ('ielts', 'toefl', 'duolingo'):
        t = e.get(k)
        if t and (t.get('recommended') is not None or any(s.get('recommended') is not None for s in t.get('scales') or [])):
            t['recBasis'] = basis
left = [r['id'] for r in recs for k in ('ielts', 'toefl', 'duolingo')
        if r['english'].get(k) and r['english'][k].get('recommended') is not None and not r['english'][k].get('recBasis')]
assert not left, left
e = D['reed-college']['english']
e['ielts']['note'] = L('Reed sets no minimum. 7+ is the average score the college says it sees — a statistic about applicants, not a cut-off and not a recommendation.',
                       'Минимума в Reed нет. 7+ — средний балл, который, по словам колледжа, он видит у абитуриентов: это статистика, а не порог и не рекомендация.')
e['toefl']['note'] = L('Reed sets no minimum. The averages it says it sees are 5.0+ on the current scale and 110+ on the previous one — statistics, not cut-offs.',
                       'Минимума в Reed нет. Средние баллы, которые колледж называет: 5.0+ по нынешней шкале и 110+ по прежней — это статистика, а не пороги.')
e['duolingo']['note'] = L('Reed sets no minimum. 145+ is the average score the college says it sees — a statistic, not a cut-off.',
                          'Минимума в Reed нет. 145+ — средний балл, который, по словам колледжа, он видит: это статистика, а не порог.')
for k in ('ielts', 'toefl', 'duolingo'):
    e[k]['quote'] = 'While there is no minimum score that we are looking for, these are the average scores we see'

# ------------------------------------------------------------------ 2. awards
BASIS = {   # default for an award not listed here: merit (the record names it a merit or academic scholarship)
    ('bard-college', 0): 'need-merit', ('sarah-lawrence-college', 0): 'need-merit', ('berklee-college-of-music', 0): 'need-merit',
    ('university-of-oregon', 1): 'need-merit', ('university-of-oregon', 3): 'need-merit',
    ('depauw-university', 1): 'need', ('university-of-oregon', 2): 'need', ('st-johns-college', 1): 'need',
    ('reed-college', 0): 'unknown', ('reed-college', 1): 'partnership',
    ('illinois-institute-of-technology', 1): 'partnership',
    ('olin-college-of-engineering', 0): 'automatic', ('occidental-college', 0): 'automatic',
    ('washington-and-jefferson-college', 0): 'automatic', ('ohio-wesleyan-university', 0): 'automatic',
    ('anderson-university-indiana', 1): 'automatic',
    ('eckerd-college', 0): 'unknown', ('university-of-cincinnati', 0): 'unknown', ('university-of-arizona', 0): 'unknown',
    ('st-lawrence-university', 0): 'unknown', ('university-of-oregon', 0): 'unknown',
    ('eckerd-college', 1): 'talent', ('lake-forest-college', 1): 'talent', ('drew-university', 1): 'talent', ('rollins-college', 2): 'talent',
}
NOTES = {
    ('reed-college', 0): L('Reed does not publish how the recipients are chosen. The same page says all financial aid at Reed is granted on demonstrated need and that Reed offers no academic or athletic scholarships.',
                           'Reed не публикует, как выбирают получателей. На той же странице сказано, что вся финансовая помощь в Reed даётся по подтверждённой потребности и что академических и спортивных стипендий у Reed нет.'),
    ('reed-college', 1): L('For admitted students of United World Colleges only. Reed writes that no separate application is required “and eligibility is not based on merit”.',
                           'Только для принятых выпускников United World Colleges. Reed пишет, что отдельная заявка не нужна «и право на награду не зависит от академических заслуг».'),
    ('illinois-institute-of-technology', 1): L('For World Robot Olympiad scholars only.', 'Только для стипендиатов World Robot Olympiad.'),
    ('olin-college-of-engineering', 0): L('Every admitted student receives it; it is not a competition.', 'Её получает каждый принятый студент; конкурса нет.'),
    ('occidental-college', 0): L('Every student admitted through Early Decision I or II receives it.', 'Её получает каждый, кто принят через Early Decision I или II.'),
    ('washington-and-jefferson-college', 0): L('Every admitted international student receives it.', 'Его получает каждый принятый иностранный студент.'),
    ('ohio-wesleyan-university', 0): L('The page says it is not based on a minimum GPA or test scores.', 'На странице сказано, что она не зависит от минимального среднего балла или результатов тестов.'),
    ('anderson-university-indiana', 1): L('Given for being an international student; the page names no other condition.', 'Даётся за статус иностранного студента; других условий на странице нет.'),
    ('eckerd-college', 0): L('The page names who may receive the grant but not what the amount depends on.', 'На странице сказано, кто может получить грант, но не сказано, от чего зависит сумма.'),
    ('university-of-cincinnati', 0): L('The amount “depends on several factors” that the page does not list.', 'Сумма «зависит от нескольких факторов», которых страница не перечисляет.'),
    ('university-of-arizona', 0): L('The pages read do not say how the amount is decided.', 'На прочитанных страницах не сказано, как определяется сумма.'),
    ('st-lawrence-university', 0): L('For Canadian students; the page read does not say how the amount within the range is decided.', 'Для граждан Канады; на прочитанной странице не сказано, как определяется сумма в пределах диапазона.'),
    ('university-of-oregon', 0): L('The amounts and the basis of selection were not read.', 'Суммы и основание отбора не прочитаны.'),
    ('st-johns-college', 1): L('For students from Turkey; the amount depends on financial need.', 'Для студентов из Турции; сумма зависит от финансовой потребности.'),
    ('depauw-university', 1): L('Need-based, for students with a record of service.', 'По потребности, для студентов с опытом общественной работы.'),
    ('university-of-oregon', 2): L('A work-study award for students with financial need.', 'Место в программе work-study для студентов с финансовой потребностью.'),
    ('rollins-college', 2): L('A service programme, not an academic scholarship.', 'Программа общественной работы, а не академическая стипендия.'),
    ('drew-university', 1): L('For students committed to community work; a separate application.', 'Для студентов, занятых общественной работой; отдельная заявка.'),
}
for r in recs:
    for i, a in enumerate(r['scholarships']['merit']):
        a['basis'] = BASIS.get((r['id'], i), 'merit')
        if (r['id'], i) in NOTES: a['basisNote'] = NOTES[(r['id'], i)]
for k in BASIS: assert k[1] < len(D[k[0]]['scholarships']['merit']), k

reed = D['reed-college']['scholarships']['merit']
assert reed[0]['name'].startswith('Continental') and reed[1]['name'].startswith('UWC')
reed[0].update({
    'amount': L('Full tuition', 'Полная плата за обучение'),
    'eligibility': L('International students: Reed “intends to offer full-tuition scholarships to two students from each continent”', 'Иностранные студенты: Reed «намерен предложить стипендии на полную плату за обучение двум студентам с каждого континента»'),
    'application': L('Not stated on the page', 'На странице не указано'),
    'note': L('Announced as beginning with the fall 2026 entering class; the page read on 13 October 2026 still words it as an intention and names no later cycle. Housing, food and other costs are not mentioned as covered.',
              'Объявлена начиная с набора осени 2026; на странице, прочитанной 13 октября 2026, это по-прежнему сформулировано как намерение, более поздний цикл не назван. О покрытии жилья, питания и других расходов не сказано.'),
    'source': REED, 'verified': V,
})
reed[1].update({
    'amount': L('$30,000 a year: a $15,000 Davis Award and a $15,000 Reed Match — $120,000 over four years', '$30,000 в год: $15,000 Davis Award и $15,000 Reed Match — $120,000 за четыре года'),
    'eligibility': L('Admitted students of United World Colleges only — not other international applicants', 'Только принятые выпускники United World Colleges — не остальные иностранные абитуриенты'),
    'application': L('Automatic for admitted UWC students; no separate application', 'Автоматически для принятых выпускников UWC; отдельной заявки нет'),
    'note': L('Given regardless of financial aid status. UWC students who apply for financial aid are also considered for additional funding.', 'Даётся независимо от того, запрошена ли финансовая помощь. Выпускников UWC, подавших на помощь, рассматривают и на дополнительное финансирование.'),
    'source': REED, 'verified': V,
})
D['reed-college']['scholarships']['needBased']['note'] = L(
    'All financial aid at Reed is granted on demonstrated financial need; Reed offers no academic or athletic scholarships. International applicants admitted without financial aid are not eligible to receive aid during their time at Reed.',
    'Вся финансовая помощь в Reed даётся по подтверждённой финансовой потребности; академических и спортивных стипендий у Reed нет. Иностранные абитуриенты, принятые без помощи, не могут получить её за всё время учёбы в Reed.')

# ------------------------------------------------------------------ 3. fields
unknown = [r for r in recs if r['programs'] == ['other']]
assert len(unknown) == 17, len(unknown)
for r in unknown:
    r['programs'] = []; r['englishTaughtPrograms'] = []; r['programsStatus'] = 'not-checked'

us3_edit.save(head, recs)
print('us3: %d records; %d without a checked list of majors' % (len(recs), len(unknown)))

# ------------------------------------------------------------------ older records: what the non-minimum score is
OLD = json.loads(io.open(os.path.join(os.path.dirname(__file__), 'rec_basis_old.json'), encoding='utf-8').read())
p = os.path.join(us3_edit.ROOT, 'data/english-details.js')
s = io.open(p, encoding='utf-8').read()
block = ('\n/* What a published score that is not a minimum is, read from the wording of\n'
         '   each record\'s own note: recommended, competitive (the level named for\n'
         '   competitive or best-prepared applicants), typical or average (statistics\n'
         '   about past applicants), stated (listed without saying what it is).\n'
         '   Records added in October 2026 carry the same key themselves. */\n'
         'window.UNIPATH.englishRecBasis = ' + json.dumps(OLD, ensure_ascii=False, indent=1, sort_keys=True) + ';\n')
s = re.sub(r'\n/\* What a published score that is not a minimum is.*?\n\};\n', '\n', s, flags=re.S).rstrip() + '\n' + block
io.open(p, 'w', encoding='utf-8').write(s)
print('english-details.js: basis for %d older records' % len(OLD))

# ------------------------------------------------------------------ interface strings
UI = [
 ('After guaranteed aid', 'После гарантированной помощи'),
 ('Main costs covered', 'Основные расходы покрыты'),
 ('— other expenses remain', '— остальные расходы остаются'),
 ('Main costs are covered; whether a budget is enough is not determined.', 'Основные расходы покрыты; достаточность бюджета не определена.'),
 ('The remaining expenses have no published yearly amount, so no budget — not even a large one — is confirmed here.', 'У оставшихся расходов нет опубликованной годовой суммы, поэтому здесь не подтверждается никакой бюджет — даже большой.'),
 ('Main costs covered — budget sufficiency not determined', 'Основные расходы покрыты — достаточность бюджета не определена'),
 ('No yearly figure: the main costs are covered by aid every admitted student receives.', 'Годовой суммы нет: основные расходы покрывает помощь, которую получает каждый принятый студент.'),
 ('Merit-based', 'За академические успехи'),
 ('Need and merit together', 'По потребности и успехам вместе'),
 ('Need-based', 'По финансовой потребности'),
 ('Talent, service or activity', 'За талант, общественную работу или участие'),
 ('Given to every eligible admitted student', 'Даётся каждому подходящему принятому студенту'),
 ('Partner programme — for a defined group of students', 'Партнёрская программа — для определённой группы студентов'),
 ('Funded outside the university', 'Финансируется не университетом'),
 ('Basis of selection not published', 'Основание отбора не опубликовано'),
 ('Basis', 'Основание'),
 ('Who it is for', 'Для кого'),
 ('Source', 'Источник'),
 ('Other award programmes', 'Другие программы наград'),
 ('These awards are not merit scholarships: each is given on the basis named in it — to a defined group, to every eligible student, on need, or on a basis the university does not publish.',
  'Эти награды — не стипендии за успехи: каждая даётся на указанном в ней основании — определённой группе, каждому подходящему студенту, по потребности или на основании, которое университет не публикует.'),
 ('Competitive level named by the university', 'Конкурентный уровень, названный университетом'),
 ('Higher official level', 'Более высокий официальный уровень'),
 ('Level listed by the university', 'Уровень, указанный университетом'),
 ('Typical score of successful applicants', 'Типичный балл успешных абитуриентов'),
 ('Average score the university reports', 'Средний балл, который сообщает университет'),
 ('The level the university describes for its competitive or best-prepared applicants. It is not a minimum.', 'Уровень, который университет описывает для своих конкурентных или лучше всего подготовленных абитуриентов. Это не минимум.'),
 ('A second level the university publishes above its minimum — see the note for what it changes.', 'Второй уровень, который университет публикует выше минимума; что он меняет — в примечании.'),
 ('The university lists this score without saying whether it is a minimum or a recommendation.', 'Университет указывает этот балл, не поясняя, минимум это или рекомендация.'),
 ('What the university says successful applicants usually have. A description of past applicants — not a minimum and not a requirement.', 'Что, по словам университета, обычно имеют успешные абитуриенты. Это описание прошлых абитуриентов — не минимум и не требование.'),
 ('An average the university says it sees. A statistic about applicants — not a minimum, not a recommendation and not a cut-off.', 'Средний балл, который, по словам университета, он видит. Это статистика об абитуриентах — не минимум, не рекомендация и не порог.'),
 ('Fields of study: not checked.', 'Направления: не проверено.'),
 ('The official list of majors of this institution has not been read yet, so it has no field tags and does not appear under any field filter. That is not a statement that a field is missing — see the official programme list.',
  'Официальный список специальностей этого вуза ещё не прочитан, поэтому у него нет меток направлений и он не показывается ни под одним фильтром направления. Это не утверждение, что направления нет, — смотрите официальный список программ.'),
 ('Official programme list ↗', 'Официальный список программ ↗'),
 ('Not shown under a field filter:', 'Не показано под фильтром направления:'),
 ('Not included under this field:', 'Не включено по этому направлению:'),
 ('institutions whose list of majors has not been checked.', 'учебных заведений, чей список специальностей не проверен.'),
 ('{#0}+ recommended', '{0}+ рекомендуемый'), ('{#0}+ higher level', '{0}+ более высокий уровень'), ('{#0}+ listed', '{0}+ указанный уровень'),
 ('{#0}+ typical', '{0}+ типичный'), ('{#0}+ average', '{0}+ средний'),
]
WORD = {'competitive': 'конкурентный уровень', 'higher level': 'более высокий уровень', 'listed': 'указанный уровень', 'typical': 'типичный балл', 'average': 'средний балл'}
PER = {'Tests taken before 21 Jan 2026': 'Тесты до 21 янв. 2026', 'Tests taken from 21 Jan 2026 (1–6 scale)': 'Тесты с 21 янв. 2026 (шкала 1–6)'}
for w, ru in WORD.items():
    for pe, pr in PER.items():
        UI.append(('%s: %s {0}' % (pe, w), '%s: %s {0}' % (pr, ru)))
        UI.append(('%s: minimum {0}, %s {1}' % (pe, w), '%s: минимум {0}, %s {1}' % (pr, ru)))
    UI.append(('%s {0}' % (w[0].upper() + w[1:]), '%s {0}' % (ru[0].upper() + ru[1:])))
    UI.append(('Minimum {0}, %s {1}' % w, 'Минимум {0}, %s {1}' % ru))
WHAT = {
 'the score the university recommends': ('балла, который рекомендует университет', False),
 'the level the university describes as competitive': ('уровня, который университет называет конкурентным', False),
 'the higher level the university publishes': ('более высокого уровня, который публикует университет', False),
 'the level the university lists': ('уровня, который указывает университет', False),
 'the typical score of successful applicants the university describes': ('типичного балла успешных абитуриентов, который описывает университет', True),
 'the average score the university reports': ('среднего балла, который сообщает университет', True),
}
for en, (ru, stat) in WHAT.items():
    UI.append(('IELTS {0} is below %s ({1}).%s' % (en, ' This is a statistic, not a minimum.' if stat else ''),
               'IELTS {0} ниже %s ({1}).%s' % (ru, ' Это статистика, а не минимум.' if stat else '')))
    UI.append(('IELTS {0} is at or above %s ({1}).%s' % (en, ' This is a statistic, not a requirement met.' if stat else ''),
               'IELTS {0} не ниже %s ({1}).%s' % (ru, ' Это статистика, а не выполненное требование.' if stat else '')))
for en, ru in UI: L(en, ru)
flush()
