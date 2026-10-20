# -*- coding: utf-8 -*-
"""Gaps, round 1 (read 20 October 2026): English minimums for StFX, Lethbridge and TRU;
application fees for nine universities. Run once: python3 tools/ca50_gaps1.py"""
import ca50_gaps as G
from ca50_gaps import L, eng, toefl

D = '2026-10-20'
head, recs, tail = G.load()
U = {r['id']: r for r in recs}
ENG = 'English requirements'

# ------------------------------------------------------------------ English
SXE = 'https://www.stfx.ca/applications-admissions/admissions-information/admission-requirements/high-school'
G.english(U['st-francis-xavier-university'], G.plain({
    'ielts': eng(6.5, note=L('No band below 6.0; One Skill Retake accepted.', 'Ни одной секции ниже 6.0; One Skill Retake принимается.')),
    'toefl': toefl(90, None, L('iBT 90 with no band below 20; MyBest Scores accepted. A minimum on the 1–6 scale is not given.', 'iBT 90, ни одной секции ниже 20; MyBest Scores принимаются. Минимум по шкале 1–6 не указан.')),
    'duolingo': eng(115, note=L('No integrated subscore below 100.', 'Ни одного интегрированного подбалла ниже 100.')),
    'waiver': None,
    'note': L('MET 55; CAEL 70 (60 in each band); C1 Advanced or C2 Proficiency 180 (170 in each); PTE Academic 60 (50 in each); Oxford ELLT 7 (6 in each). Results must be at most two years old when you apply. StFX may ask any applicant for proof of English.',
              'MET 55; CAEL 70 (60 в каждой части); C1 Advanced или C2 Proficiency 180 (170 в каждой); PTE Academic 60 (50 в каждой); Oxford ELLT 7 (6 в каждой). Результатам на момент подачи — не больше двух лет. StFX может потребовать подтверждение английского от любого абитуриента.')}),
    L('StFX — admission requirements and English language requirements', 'StFX — требования к поступлению и к английскому'), SXE, D, ENG)

LEE = 'https://www.ulethbridge.ca/ross/admissions/elp'
G.english(U['university-of-lethbridge'], G.plain({
    'ielts': eng(6.5, note=L('Academic or IELTS Online; at least 6.0 in each band; One Skill Retake accepted.', 'Academic или IELTS Online; не ниже 6.0 в каждой секции; One Skill Retake принимается.')),
    'toefl': toefl(86, 4.5, L('Tests before 21 January 2026: 86 with at least 20 in each section. Newer tests (1–6 scale): 4.5 with at least 4.5 in each section.', 'Тесты до 21 января 2026: 86, не ниже 20 в каждой секции. Новые тесты (шкала 1–6): 4.5, не ниже 4.5 в каждой секции.')),
    'duolingo': eng(120, note=L('At least 110 in each subscore.', 'Не ниже 110 в каждом подбалле.')),
    'waiver': None,
    'note': L('Requirements published for the 2027/2028 academic year. PTE Academic 61 (60 in each part); CAEL 70 (60 in each); Cambridge C1 Advanced or C2 Proficiency 176 (176 in each). Tests must be at most two years old when you apply; English must be met by 1 August for September entry. Health Sciences also ask for spoken English.',
              'Требования опубликованы на 2027/2028 учебный год. PTE Academic 61 (60 в каждой части); CAEL 70 (60 в каждой); Cambridge C1 Advanced или C2 Proficiency 176 (176 в каждой). Тестам на момент подачи — не больше двух лет; требование нужно выполнить до 1 августа для набора в сентябре. Health Sciences также проверяют разговорный английский.')}),
    L('ULethbridge — English language proficiency for undergraduate students', 'ULethbridge — требования к английскому для бакалавриата'), LEE, D, 'English test minimums')

TRE = 'https://www.tru.ca/edsw/schools-and-departments/ellt/eap/regulations.html'
G.english(U['thompson-rivers-university'], G.plain({
    'ielts': eng(6.5, note=L('No band below 6.0.', 'Ни одной секции ниже 6.0.')),
    'toefl': toefl(88, None, L('iBT 88 with no section below 20. A minimum on the 1–6 scale is not given.', 'iBT 88, ни одной секции ниже 20. Минимум по шкале 1–6 не указан.')),
    'duolingo': None,
    'waiver': None,
    'note': L('The academic programme entry requirement on TRU’s English for Academic Purposes page: also TOEFL PBT 570 (TWE 4.5), CAEL 70 (60 in each subtest), PTE 58 or TRU EAP Level 5. Some programmes ask for more.',
              'Требование для поступления на академические программы со страницы TRU English for Academic Purposes: также TOEFL PBT 570 (TWE 4.5), CAEL 70 (60 в каждой части), PTE 58 или уровень 5 TRU EAP. Некоторые программы требуют больше.')}),
    L('TRU — English for Academic Purposes: levels and academic entry requirement', 'TRU — English for Academic Purposes: уровни и требование для академических программ'), TRE, D, ENG)

# ------------------------------------------------------------------ application fees
N = lambda en, ru: G.plain(L(en, ru))
G.fee(U['dalhousie-university'], 70, N('Non-refundable admissions application fee; it must be paid to be considered for entrance awards.', 'Невозвратный сбор за заявку; его нужно оплатить, чтобы участвовать во вступительных стипендиях.'),
      'https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html', D)
G.fee(U['simon-fraser-university'], 130, N('International students; non-refundable, paid online by credit card (domestic C$86).', 'Для иностранцев; невозвратный, оплата картой онлайн (для канадцев C$86).'),
      'https://www.sfu.ca/students/admission/apply.html', D)
G.fee(U['university-of-manitoba'], 130, N('International students, for each application; non-refundable (domestic C$100). The application is evaluated only after the fee is received.', 'Для иностранцев, за каждую заявку; невозвратный (для канадцев C$100). Заявку рассматривают только после оплаты.'),
      'https://umanitoba.ca/explore/undergraduate-admissions/learn-how-apply', D)
G.fee(U['mount-allison-university'], 125, N('International students, paid by Visa or MasterCard (Canadian citizens and permanent residents C$50).', 'Для иностранцев, оплата Visa или MasterCard (для граждан и постоянных жителей Канады C$50).'),
      'https://mta.ca/admissions/you-apply', D)
G.fee(U['saint-marys-university'], 100, N('International students (domestic C$65); payment is required before the application is processed.', 'Для иностранцев (для канадцев C$65); без оплаты заявку не рассматривают.'),
      'https://www.smu.ca/future-students/admissions/cs-apply-online.html', D)
G.fee(U['bishops-university'], 75, N('Non-refundable.', 'Невозвратный.'),
      'https://www.ubishops.ca/future-students/admission-process/', D)
G.fee(U['mount-saint-vincent-university'], 80, N('International (visa) applicants; non-refundable (domestic C$40).', 'Для иностранцев (по визе); невозвратный (для канадцев C$40).'),
      'https://www.msvu.ca/future-students/apply-now/undergraduate-application/', D)
G.fee(U['mount-royal-university'], 100, N('Non-refundable; it must accompany every admission application (2026–2027 Academic Calendar).', 'Невозвратный; оплачивается с каждой заявкой (академический календарь 2026–2027).'),
      'https://catalog.mtroyal.ca/content.php?catoid=38&navoid=3084', D)
G.fee(U['laurentian-university'], 156, N('Admission fee for international undergraduate students, 2026–2027 (Laurentian’s own form). Applicants through OUAC pay OUAC’s fees instead.', 'Сбор за поступление для иностранцев в бакалавриат, 2026–2027 (собственная форма Laurentian). При подаче через OUAC действуют сборы OUAC.'),
      'https://laurentian.ca/academics/fees-financing/other-fees', D)

G.save(head, recs, tail)
G.flush()
print('round 1 written')
