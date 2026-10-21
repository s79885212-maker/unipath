# -*- coding: utf-8 -*-
"""Gaps, round 4 (read 21 October 2026, PDFs downloaded with the user's permission):
Windsor's English requirement (Senate policy linked from the international application page),
StFX's application fee and Regina's SAT/ACT rule (2026–2027 Academic Calendars).
Run once: python3 tools/ca50_gaps4.py"""
import ca50_gaps as G
from ca50_gaps import L, eng, toefl

D = '2026-10-21'
head, recs, tail = G.load()
U = {r['id']: r for r in recs}

WE = 'https://images.e.uwindsor.ca/Web/UniversityofWindsor/%7Bb8e808b0-fabe-43af-828a-0a549a702830%7D_English_Language_Proficiency_Requirements.pdf'
G.english(U['university-of-windsor'], G.plain({
    'ielts': eng(6.5, note=L('IELTS Academic or IELTS Online.', 'IELTS Academic или IELTS Online.')),
    'toefl': toefl(83, None, L('iBT (or Home Edition) 83 with a writing score of 20. A minimum on the 1–6 scale is not given.', 'iBT (или Home Edition) 83, письмо — 20. Минимум по шкале 1–6 не указан.')),
    'duolingo': eng(115, note=L('Undergraduate applicants.', 'Для бакалавриата.')),
    'waiver': None,
    'note': L('Senate Policy on English Language Proficiency (merged 11 February 2022), linked from the international application page: also CAEL 60, PTE Academic 60, Cambridge CAE or CPE 176, or ELIP level III with 75%. Some programmes ask for more. English is not needed at the time of application; conditional offers are made with ELIP.',
              'Положение Сената о знании английского (единая редакция от 11 февраля 2022), ссылка со страницы подачи заявки для иностранцев: также CAEL 60, PTE Academic 60, Cambridge CAE или CPE 176 либо ELIP уровня III с 75%. Некоторые программы требуют больше. При подаче заявки английский можно ещё не подтверждать: дают условное зачисление с ELIP.')}),
    L('UWindsor — Senate Policy on English Language Proficiency (PDF)', 'UWindsor — положение Сената о знании английского (PDF)'), WE, D, 'English requirements')

SXC = 'https://www.stfx.ca/sites/default/files/documents/2026-2027%20Academic%20Calendar_Sep25.pdf'
G.fee(U['st-francis-xavier-university'], 40, G.plain(L(
    'Application fee for admission to undergraduate and B.Ed. programmes, 2026–2027 Academic Calendar; no separate international rate is given. After acceptance international undergraduates make a non-refundable confirmation payment of C$2,500.',
    'Сбор за заявку в бакалавриат и B.Ed. по академическому календарю 2026–2027; отдельной ставки для иностранцев нет. После зачисления иностранцы в бакалавриате вносят невозвратный платёж за подтверждение места C$2,500.')), SXC, D)
G.source(U['st-francis-xavier-university'], G.plain(L('StFX — Academic Calendar 2026–2027 (PDF)', 'StFX — академический календарь 2026–2027 (PDF)')), SXC)

RGC = 'https://www.uregina.ca/registrar/assets/docs/pdf/calendar/2026-2027-u-of-r-undergraduate-calendar.pdf'
r = U['university-of-regina']
r['academics']['sat'] = G.plain({
    'policy': 'optional',
    'note': L('2026–2027 Undergraduate Calendar: US high school applicants are admitted on graduation, the core curriculum (4 English, 3 Math, 3 laboratory science, 3 social studies, 16 credits), faculty subjects and the faculty average — no SAT or ACT is listed. Home-based learners need SAT I 1100 or ACT 24 plus one further qualifier. The calendar for 2027–2028 is not yet published.',
              'Календарь бакалавриата 2026–2027: выпускников школ США принимают по окончанию школы, базовым предметам (4 английский, 3 математика, 3 естественные науки с лабораторией, 3 обществознание, всего 16 кредитов), предметам факультета и среднему баллу — SAT и ACT не указаны. Обучавшимся дома нужен SAT I 1100 или ACT 24 и ещё одно подтверждение. Календарь на 2027–2028 ещё не опубликован.'),
    'source': RGC, 'verified': D,
    'label': L('SAT/ACT not required (home-based learners: required)', 'SAT/ACT не требуются (обучавшимся дома — обязательны)')})
G.source(r, G.plain(L('University of Regina — Undergraduate Calendar 2026–2027 (PDF)', 'University of Regina — календарь бакалавриата 2026–2027 (PDF)')), RGC)
G.checked(r, 'test policy')

G.save(head, recs, tail)
G.flush()
print('round 4 written')
