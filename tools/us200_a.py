# -*- coding: utf-8 -*-
"""United States expansion, batch A (7 colleges). Every fact below was read on
the official page named next to it on 12 October 2026."""
from us200 import R, rnd, test, eng, toefl, fee, costs, write

V = '2026-10-12'
NOYEAR = 'The page prints this date without a year; it was read on 12 October 2026, during the cycle for autumn 2027 entry.'
B, E, X = 'billed', 'estimate', 'extra'
LOAN = 'Counted in the published total; it applies to students who borrow.'

records, annual = [], {}

# ---------------------------------------------------------------- Bard College
S = 'https://www.bard.edu/admission/international/'
A = 'https://www.bard.edu/financialaid/international/'
T = 'https://www.bard.edu/sfs/prospective/tuition/'
records.append(R(
    'bard-college', 'Bard College', 'Bard', 'Annandale-on-Hudson', 'New York', 'liberal-arts', 'Private liberal arts college',
    'A liberal arts college in Annandale-on-Hudson, New York, test-optional for over fifty years. Bard guarantees to meet the full demonstrated need of students admitted in its early rounds regardless of citizenship, but says aid for international students generally does not go beyond full tuition.',
    ['economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.bard.edu/', 'admissions': 'https://www.bard.edu/admission/', 'international': S,
     'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A, 'programs': 'https://www.bard.edu/programs/', 'cost': T},
    verified=V, founded=1860,
    platforms=['Common Application', 'Coalition Application (Scoir)', 'Bard Entrance Exam'],
    rounds=[
        rnd('Early Action', 'EA', '2026-11-01', False, 'Not binding. Decisions in mid-December; deposit by 1 May.', S, V, note=NOYEAR, applies='First-year international applicants'),
        rnd('Early Decision I', 'ED', '2026-11-01', True, 'Binding. Decisions in mid-December; the deposit is due within a month of the decision and aid package.', S, V, note=NOYEAR, applies='First-year international applicants'),
        rnd('Early Decision II', 'ED2', '2027-01-15', True, 'Binding. Decision in February.', S, V, note=NOYEAR, applies='First-year international applicants'),
        rnd('Regular Decision', 'RD', '2027-01-15', False, 'Not binding.', S, V, note=NOYEAR, applies='First-year international applicants'),
        rnd('Financial aid application (BISFAA) — Early Decision II and Regular Decision', 'aid', '2027-01-15', False,
            'The Bard International Student Financial Aid Application must reach Bard within five days of the application deadline. Aid cannot be requested after an offer of admission.', S, V, note=NOYEAR, applies='International applicants asking for aid'),
        rnd('Bard College Scholarships — application', 'scholarship', '2027-01-15', False, 'Optional and only where it applies; early applicants submit it by 1 November.', S, V, note=NOYEAR, applies='Applicants for Bard College Scholarships'),
    ],
    documents=['Common Application or Coalition Application, or the Bard Entrance Exam', 'Secondary school transcript', 'English proficiency test where English is not the primary language',
               'Bard International Student Financial Aid Application, if applying for aid'],
    english={'ielts': eng(7, None, 'Bard gives a score of at least 7 as its guideline.'),
             'toefl': toefl(100, 5, 'At least 5 on the 1–6 scale; a minimum of 100 for scores on the previous 0–120 scale.'),
             'duolingo': eng(120, None, 'At least 120.'),
             'waiver': 'Required from international applicants whose primary language is not English; Bard publishes criteria for a waiver.',
             'note': 'Bard calls these its test score guidelines.', 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', 'Bard says it has been test-optional for over 50 years and that applicants who send no scores are not penalised.', source=S, verified=V),
    costs=costs('2026–2027', T, V, 'All undergraduates living on campus',
                [('Tuition', 71950, B), ('Housing and food', 20700, B), ('Campus facilities fee', 352, B), ('Health and counseling fee', 470, B),
                 ('Language and Thinking meal plan (first-year programme)', 1190, X), ('Fall orientation meal plan', 482, X),
                 ('12-month health insurance plan', 3995, X), ('Security deposit', 500, X)],
                '$93,472 in tuition, housing, food and fees', '$93,472 charged for the year; Bard’s table prints no total',
                'tuition, housing and food, the campus facilities fee and the health and counseling fee. The first-year meal plans, the health insurance plan and the security deposit are listed separately',
                tuition=71950, billed=93472,
                note='Bard lists the charges without a total; $93,472 is the four yearly charges added together. The terms of the health insurance plan were not read.'),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based',
              'covers': {'tuition': True, 'housing': False, 'meals': False, 'insurance': False, 'books': False},
              'renewable': None,
              'competitiveness': 'Bard typically expects international students to contribute at least $30,000 a year towards their total expenses.',
              'howToApply': 'Submit the Bard International Student Financial Aid Application with the application for admission, within five days of the deadline.',
              'note': 'Bard guarantees to meet full demonstrated need for all students admitted through Early Decision I, the Immediate Decision Plan or Early Action, regardless of citizenship, and does not guarantee it for Early Decision II or Regular Decision. It says packages for international students generally do not provide support beyond full tuition, and that support for housing, food and other expenses is granted very infrequently.',
              'quote': 'generally do not provide support beyond full tuition', 'quoteSource': A},
    merit=[{'name': 'Bard Global Citizen Scholarships', 'amount': 'Typically $10,000 to $60,000 a year', 'eligibility': 'International students, on financial need and academic achievement and promise',
            'deadline': None, 'application': None, 'renewable': None, 'note': 'Bard states the typical range for full-time enrolment; it is not a guaranteed amount.'}],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None,
          'forms': ['Bard International Student Financial Aid Application (BISFAA) — no other form is accepted'],
          'deadlines': 'Within five days of the application deadline.',
          'note': 'Full demonstrated need is guaranteed only for the early rounds (Early Decision I, Immediate Decision Plan, Early Action). International students may not apply for need-based aid after receiving an offer of admission.'},
    sources=[('Bard — international applicants', S), ('Bard — financial aid for international students', A), ('Bard — tuition and fees 2026–27', T), ('Bard — about', 'https://www.bard.edu/about/')],
    checked=['rounds for international first-year applicants', 'English test guidelines', 'test policy', 'tuition and fees 2026–27', 'aid for international students', 'founding year'],
    unconfirmed=['application fee', 'health insurance terms', 'need-blind or need-aware status', 'admission statistics'],
))
annual['bard-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 93472, 'max': 93472}

# ---------------------------------------------------------- Bennington College
S = 'https://www.bennington.edu/admissions/apply/applying-international-student'
D = 'https://www.bennington.edu/admissions/apply/application-deadlines'
T = 'https://www.bennington.edu/admissions/apply/financing-your-education/tuition-and-fees'
records.append(R(
    'bennington-college', 'Bennington College', 'Bennington', 'Bennington', 'Vermont', 'liberal-arts', 'Private liberal arts college',
    'A liberal arts college in Bennington, Vermont, where the SAT and ACT are optional for all applicants. International students may receive need-based or merit-based aid in every decision round; the pages read do not say what share of need is met.',
    ['computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.bennington.edu/', 'admissions': 'https://www.bennington.edu/admissions-and-financial-aid', 'international': S,
     'portal': 'https://www.commonapp.org/', 'aid': S, 'programs': 'https://www.bennington.edu/academics/areas-of-study', 'cost': T},
    verified=V,
    platforms=['Common Application'],
    rounds=[
        rnd('Early Decision I', 'ED', '2026-11-01', True, 'Binding. Admission and financial aid applications are due on the same day; decisions in mid-December.', D, V, note=NOYEAR),
        rnd('Early Action', 'EA', '2026-11-01', False, 'Not binding. Admission and financial aid applications are due on the same day; decisions in late January.', D, V, note=NOYEAR),
        rnd('Regular Decision', 'RD', '2027-01-10', False, 'Admission and financial aid applications are due on the same day; decisions in mid-March.', D, V, note=NOYEAR),
        rnd('Financial aid application — same day as each admission round', 'aid', None, False, 'Bennington states that financial aid deadlines are the same as admission deadlines.', S, V, date='With the admission application', applies='International applicants asking for aid'),
    ],
    documents=['Common Application', 'Official transcripts for all years of high school', 'English proficiency test unless exempt', 'International Student Certification of Finances, on enrolment'],
    interview='Interviews are offered by invitation in each admission round.',
    english={'ielts': eng(None, 7, 'No minimum; successful applicants typically have at least 7.'),
             'toefl': toefl(100, 5.0, 'No minimum; successful applicants typically have at least 100, or 5.0 on the scale used from 21 January 2026.', kind='recommended'),
             'duolingo': eng(None, 130, 'No minimum; successful applicants typically have at least 130.'),
             'waiver': 'Not needed from native speakers of English or from applicants taught fully in English for at least three years of secondary school.',
             'note': 'PTE Academic is also accepted (typically 70). Bennington offers no English as a Second Language courses.', 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', 'The SAT and ACT are optional for all applicants.', source=S, verified=V),
    costs=costs('2026–2027', T, V, 'International undergraduates living on campus',
                [('Full-time tuition', 71700, B), ('Fees', 1200, B), ('Room', 10800, B), ('Board', 9300, B),
                 ('Health insurance for international students (estimate)', 2500, B),
                 ('Undergraduate enrolment fee (non-refundable)', 500, X)],
                '$95,500 for international students, with health insurance', '$93,000 in tuition, room, board and fees; $95,500 for international students with the health insurance estimate',
                'tuition, fees, room and board ($93,000), plus the health insurance estimate Bennington adds for international students. Transportation, books and supplies are extra',
                tuition=71700, billed=95500,
                note='Bennington prints both totals: $93,000 for all undergraduates and $95,500 for international students. The insurance figure is an estimate that the provider can adjust.'),
    fullRide={'available': None, 'internationalEligible': None, 'basis': None,
              'covers': {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None},
              'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': 'Bennington says international students may receive need-based and/or merit-based aid; the pages read give no amounts and describe no award at the level of full tuition.'},
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None,
          'forms': ['Bennington financial aid application, submitted with the admission application'],
          'deadlines': 'The same as the admission deadline of each round.',
          'note': 'Bennington says international students may receive need-based and/or merit-based aid in all decision rounds. Every enrolling international student also files an International Student Certification of Finances before the I-20 is issued.'},
    sources=[('Bennington — applying as an international student', S), ('Bennington — application deadlines', D), ('Bennington — tuition and fees 2026–2027', T),
             ('Bennington — areas of study', 'https://www.bennington.edu/academics/areas-of-study')],
    checked=['application rounds', 'English proficiency', 'test policy', 'direct costs 2026–2027', 'availability of aid to international students'],
    unconfirmed=['application fee', 'share of need met', 'amounts of merit awards', 'founding year', 'admission statistics'],
))
annual['bennington-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 95500, 'max': 95500, 'note': 'International students, with the health insurance estimate'}

# --------------------------------------------------- Claremont McKenna College
S = 'https://www.cmc.edu/admission/international'
F = 'https://www.cmc.edu/admission/first-year-application-instructions'
T = 'https://www.cmc.edu/financial-aid/college-costs-and-payments'
P = 'https://www.cmc.edu/admission/first-year-application-instructions/test-optional-policy-faq'
records.append(R(
    'claremont-mckenna-college', 'Claremont McKenna College', 'CMC', 'Claremont', 'California', 'liberal-arts', 'Private liberal arts college',
    'A liberal arts college in Claremont, California, and one of the Claremont Colleges. CMC is need-aware for international applicants and commits to meeting the demonstrated need of those it admits; it is test-optional through the Fall 2027 cycle.',
    ['economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities'],
    {'website': 'https://www.cmc.edu/', 'admissions': 'https://www.cmc.edu/admission', 'international': S, 'portal': 'https://www.commonapp.org/',
     'scholarships': 'https://www.cmc.edu/admission/scholarships', 'aid': 'https://www.cmc.edu/financial-aid', 'programs': 'https://www.cmc.edu/academic/departments-majors-programs', 'cost': T},
    verified=V, founded=1946,
    platforms=['Common Application', 'Coalition Application'],
    rounds=[
        rnd('Early Decision I', 'ED', '2026-11-01', True, 'Binding. Decision by 15 December; reply due in early January.', F, V, note=NOYEAR),
        rnd('Early Decision II', 'ED2', '2027-01-10', True, 'Binding. Decision by 15 February; reply due in late February.', F, V, note=NOYEAR),
        rnd('Regular Decision', 'RD', '2027-01-10', False, 'Decision by 1 April; reply due 1 May.', F, V, note=NOYEAR),
        rnd('Merit scholarships — priority consideration', 'scholarship', '2026-12-01', False,
            'The application and all supporting credentials must be in by this date for priority consideration; there is no separate scholarship application.', S, V, note=NOYEAR, applies='First-year applicants'),
        rnd('Financial aid application for international students', 'aid', None, False,
            'Submitted in the CMC applicant portal after the admission application. CMC says the application for admission is not reviewed without it and that late applications are not considered.', S, V,
            date='With the admission application', applies='International applicants asking for aid'),
    ],
    fee=fee(70, 'Fee waivers are available through the Common Application and the Coalition Application.', F, V, waiver='Through the Common Application or the Coalition Application'),
    documents=['Common Application or Coalition Application', 'School report and counselor recommendation', 'One teacher recommendation', 'Official high school transcripts',
               'English proficiency test where required', 'CMC Financial Aid Application for International Students, if applying for aid'],
    interview='Interviews of about 30 minutes are offered from May to mid-December; international applicants may have additional interview requirements.',
    english={'ielts': eng(None, 7.5, 'Minimum recommended score.'),
             'toefl': toefl(100, 5.5, 'Recommended minimum: 100 for tests before 21 January 2026, 5.5 for tests after it. TOEFL Essentials is not accepted.', kind='recommended'),
             'duolingo': eng(None, 130, 'Minimum recommended score.'),
             'waiver': 'Required from international applicants whose first language is not English or who have not attended a school taught mainly in English for at least three years.',
             'note': 'Cambridge C1 Advanced and C2 Proficiency are also accepted (190 recommended).', 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', 'CMC has extended its test-optional policy through the Fall 2027 admission cycle.', cycle='Through the Fall 2027 admission cycle',
             next='CMC says it will return to a test-required policy for the Fall 2028 admission cycle.', source=P, verified=V),
    costs=costs('2026–2027', T, V, 'Undergraduates living on campus',
                [('Tuition', 75300, B), ('Student activity fees (ASCMC fee)', 420, B), ('Housing (single or double)', 12490, B), ('Food (19 meals a week)', 10780, B),
                 ('Estimated indirect costs (books, transportation, miscellaneous)', 3000, E),
                 ('Orientation fee (first-year students, one-time)', 500, X)],
                '$101,990 total cost of attendance', '$101,990 total cost of attendance, of which $98,990 is billed',
                'tuition, the student activity fee, housing and food (direct costs), plus an estimate for books, transportation and miscellaneous costs. Health insurance and the one-time orientation fee are not in this total',
                tuition=75300, billed=98990, budget=101990,
                extras=[{'label': 'Student health insurance plan', 'amount': 3312, 'required': True,
                         'condition': 'All students must have health insurance; those who do not submit proof of their own cover are enrolled automatically in the Claremont Colleges plan.', 'year': '2026–2027'}]),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based',
              'covers': {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None},
              'renewable': True,
              'competitiveness': 'CMC is need-aware for all international applicants: financial need may be considered in the admission decision, and funding is limited.',
              'howToApply': 'Say on the admission application that you are applying for aid and submit the CMC Financial Aid Application for International Students in the applicant portal.',
              'note': 'CMC states that, if admitted, it is committed to meeting demonstrated need as determined at the time of admission; packages typically combine grants, scholarships, work and loans. The family contribution is fixed for all four years and there is no appeals process.',
              'quote': 'committed to meeting demonstrated need as determined at the time of admission', 'quoteSource': S},
    merit=[{'name': 'CMC merit scholarships', 'amount': None, 'eligibility': 'All first-year applicants', 'deadline': '1 December for priority consideration',
            'application': 'No separate application', 'renewable': None, 'note': 'Award amounts were not read on this check.'}],
    need={'availableToInternational': True, 'meetsFullNeed': True, 'needBlindInternational': False,
          'forms': ['CMC Financial Aid Application for International Students (the CSS Profile and ISFAA are not accepted)'],
          'deadlines': 'With the application for admission; late applications are not considered.',
          'note': 'An international student admitted without aid is not eligible for aid in later years.'},
    sources=[('CMC — first-year international applicants', S), ('CMC — first-year application instructions', F), ('CMC — costs and payments 2026–2027', T), ('CMC — test-optional policy FAQ', P)],
    checked=['application rounds', 'application fee', 'English tests', 'test policy and its cycle', 'cost of attendance 2026–2027', 'need-based aid policy for international students'],
    unconfirmed=['amounts of merit scholarships', 'admission statistics'],
))
annual['claremont-mckenna-college'] = {'currency': 'USD', 'basis': 'total', 'min': 101990, 'max': 101990}

# -------------------------------------------------------- Deep Springs College
S = 'https://www.deepsprings.edu/apply-information/'
AF = 'https://www.deepsprings.edu/after-deep-springs/'
records.append(R(
    'deep-springs-college', 'Deep Springs College', 'Deep Springs', 'Deep Springs Valley', 'California', 'private', 'Private two-year college',
    'A two-year college on a cattle ranch in Deep Springs Valley, California, built on academics, student self-government and manual labour. It admits between twelve and fifteen students a year, and every admitted student receives a full scholarship for tuition, room and board.',
    ['humanities', 'social-sciences'],
    {'website': 'https://www.deepsprings.edu/', 'admissions': 'https://www.deepsprings.edu/admissions/', 'international': S,
     'portal': 'https://www.deepsprings.edu/apply/', 'aid': S, 'programs': 'https://www.deepsprings.edu/academics-at-deep-springs/', 'cost': S},
    verified=V, founded=1917, degrees=['associate'],
    programNote='Deep Springs has no majors or concentrations: students take courses in the humanities, social sciences and natural sciences. It is a two-year programme, not a four-year bachelor’s degree.',
    platforms=['Deep Springs application'],
    rounds=[
        rnd('Application released', 'opens', '2026-08-14', False, None, S, V, term='July', applies='All applicants'),
        rnd('First round — application due', 'round-1', '2026-11-01', False, 'First-round notification on 19 December 2026; essay prompts for the second round go to those who advance.', S, V, term='July', applies='All applicants'),
        rnd('First-round notification', 'decision', '2026-12-19', False, None, S, V, term='July', applies='All applicants'),
        rnd('Second round — essays due', 'documents', '2027-01-10', False, 'For applicants who advance from the first round.', S, V, term='July', applies='Applicants in the second round'),
        rnd('Second round — interviews', 'interview', None, False, None, S, V, term='July', date='January and February 2027', applies='Applicants in the second round'),
        rnd('Final decisions sent', 'decision', '2027-04-01', False, 'The entering class arrives on 2 July 2027.', S, V, term='July', applies='Applicants in the second round'),
    ],
    documents=['Deep Springs application', 'Secondary school transcripts, and college transcripts for applicants with college experience', 'Proof of English proficiency for applicants who have not attended an English-speaking school or college'],
    admNotes=['Deep Springs is accredited to grant an Associate of Arts degree; it says most students do not take the degree and instead transfer their credits to another institution to complete a bachelor’s degree, which may take two to three more years. A transfer place is not guaranteed.',
              'Applicants who have already completed a bachelor’s degree, or who are over 23 at the application deadline, are not considered. Every student enters as a first-year, whatever their earlier college experience.'],
    english={'waiver': 'Proof is asked only from applicants who have not attended an English-speaking secondary school or college.',
             'note': 'Deep Springs accepts the TOEFL, the IELTS, Duolingo or an equivalent exam and publishes no minimum score. It offers no English as a Second Language programme.', 'detailsSource': S, 'detailsVerified': V},
    costs={'breakdown': {'tuition': 0, 'includes': 'tuition, room and board are covered by the scholarship every admitted student receives'},
           'academicYear': None, 'currency': 'USD', 'studentCategory': 'All admitted students', 'source': S, 'verified': V,
           'headline': 'Full scholarship: tuition, room and board for every admitted student',
           'items': [{'label': 'Tuition, room and board', 'text': 'Covered by the scholarship for every admitted student'},
                     {'label': 'Books, travel and incidental expenses', 'text': 'Paid by the student; assistance is available for students in financial need'}],
           'billedSubtotal': None, 'totalText': 'Tuition, room and board covered for every admitted student',
           'afterAid': {'covered': 'Tuition, room and board — for every admitted student, regardless of financial need or country of origin.',
                        'personal': 'Books, travel and incidental expenses. Admitted students in financial need can consult the Academic Dean for funding assistance.',
                        'conditions': ['The programme rests on three pillars — academics, student self-government and manual labour — and students take part in all three.'],
                        'source': S, 'verified': V},
           'note': 'The scholarship is awarded automatically; it is not a separate competition.'},
    fullRide={'guaranteed': True, 'available': True, 'internationalEligible': True, 'basis': 'admission',
              'covers': {'tuition': True, 'housing': True, 'meals': True, 'insurance': None, 'books': False},
              'renewable': True,
              'competitiveness': 'Awarded automatically to all admitted students; admission itself is the hurdle, with twelve to fifteen students admitted each year.',
              'howToApply': 'No separate application — the scholarship comes with admission.',
              'note': 'Deep Springs states that the full scholarship for tuition, room and board goes to all admitted students regardless of financial need, country of origin or any other consideration. Books, travel and incidental expenses are not part of it.',
              'quote': 'awarded automatically to all admitted students', 'quoteSource': S},
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'deadlines': None, 'note': 'There is no need-based application: the scholarship is the same for every admitted student. Students in financial need can ask for help with books, travel and incidentals.'},
    sources=[('Deep Springs — deadlines, eligibility and international students', S), ('Deep Springs — after Deep Springs (degree and transfer)', AF),
             ('Deep Springs — academics', 'https://www.deepsprings.edu/academics-at-deep-springs/'), ('Deep Springs — home page', 'https://www.deepsprings.edu/')],
    checked=['application timeline for the class arriving in July 2027', 'eligibility', 'scholarship for all admitted students', 'degree and transfer', 'English proficiency'],
    unconfirmed=['application fee', 'minimum English score', 'SAT/ACT policy'],
    programsBasis='transfer',
))
annual['deep-springs-college'] = {'currency': 'USD', 'basis': 'total', 'min': 0, 'max': 0,
                                  'label': 'Tuition, room and board are covered by the scholarship every admitted student receives. Books, travel and incidental expenses remain; no yearly amount is published for them'}

# ----------------------------------------------------------- Kalamazoo College
S = 'https://admission.kzoo.edu/how-to-apply/international-students/'
EN = 'https://admission.kzoo.edu/how-to-apply-2/international-students/english-language-proficiency/'
T = 'https://admission.kzoo.edu/cost-value/'
G = 'https://admission.kzoo.edu/cost-value/additional-scholarship-programs/'
records.append(R(
    'kalamazoo-college', 'Kalamazoo College', 'Kalamazoo', 'Kalamazoo', 'Michigan', 'liberal-arts', 'Private liberal arts college',
    'A liberal arts college in Kalamazoo, Michigan, with no application fee and a test-optional policy. It is need-aware and says it offers minimal need-based aid to international students, but awards a limited number of full-tuition Global Leadership Scholarships.',
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.kzoo.edu/', 'admissions': 'https://admission.kzoo.edu/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'scholarships': G, 'aid': T, 'programs': 'https://www.kzoo.edu/academic/', 'cost': T},
    verified=V, founded=1833,
    platforms=['Common Application'],
    rounds=[
        rnd('Early Decision', 'ED', '2026-11-15', True, 'Binding. Decision emailed by 1 December.', S, V, note=NOYEAR, applies='First-year applicants, international included'),
        rnd('Early Action', 'EA', '2026-12-01', False, 'Not binding. Decision emailed by 18 December.', S, V, note=NOYEAR, applies='First-year applicants, international included'),
        rnd('Regular Decision', 'RD', '2027-02-01', False, 'Decision emailed by 15 April.', S, V, note=NOYEAR, applies='First-year applicants, international included'),
        rnd('Global Leadership Scholarship — apply for admission', 'scholarship', '2026-11-01', False,
            'To be considered, apply by this date under Early Decision or Early Action and complete an in-person or virtual admission interview.', G, V, note=NOYEAR, applies='First-year international applicants'),
    ],
    fee=fee(0, 'Kalamazoo does not charge an application fee.', S, V),
    documents=['Common Application', 'High school transcript sent by the school', 'Counselor recommendation or school report', 'English proficiency where the first language is not English',
               'Bank statements, income statements and sponsor forms', 'Financial aid form from the application portal'],
    english={'ielts': eng(6.5, None, 'Required overall score of 6.5 or higher, with no band below 6.'),
             'toefl': toefl(84, None, 'Recommended score of 84 or higher on the internet-based test; the page gives no score for the 1–6 scale.', kind='recommended'),
             'duolingo': eng(130, None, 'Required score of 130 or higher with no band below 115; with 115 overall an interview can be arranged.'),
             'waiver': 'Exemptions include at least two years at a secondary school in an English-speaking country and the full IB diploma with English A.',
             'note': 'Pearson PTE (62 overall) and an SAT reading and writing score of 600 or higher are also listed.', 'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', 'Kalamazoo does not require the ACT or SAT; applications are read with or without scores.', source='https://admission.kzoo.edu/how-to-apply-2/test-optional/', verified=V),
    costs=costs('2026–2027', T, V, 'Undergraduates living on campus',
                [('Tuition and fees', 66308, B), ('Food and housing', 13803, B)],
                '$80,111 in tuition, fees, food and housing', '$66,308 in tuition and fees and $13,803 in food and housing',
                'tuition and fees, and food and housing — the two figures Kalamazoo publishes. Books, transportation and personal costs are extra',
                tuition=66308, billed=80111, tuition_label='Tuition and fees',
                note='Kalamazoo prints the two figures without a total; $80,111 is their sum.'),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit',
              'covers': {'tuition': True, 'housing': False, 'meals': False, 'insurance': False, 'books': False},
              'renewable': True,
              'competitiveness': 'A limited number of awards, made on academic merit.',
              'howToApply': 'Apply for admission by 1 November under Early Decision or Early Action and complete an admission interview.',
              'note': 'The Global Leadership Scholarship is a full-tuition award for incoming first-year international students, renewed for all four years. It is applied to tuition only, and recipients are not eligible for further merit scholarships from the college.',
              'quote': 'a limited number of full-tuition Global Leadership Scholarships', 'quoteSource': G},
    merit=[{'name': 'Global Leadership Scholarship', 'amount': 'Full tuition', 'eligibility': 'Incoming first-year international students, on academic merit', 'deadline': '1 November',
            'application': 'Admission application under Early Decision or Early Action, plus an interview', 'renewable': True, 'note': 'Housing and food remain payable.'}],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': False,
          'forms': ['Kalamazoo financial aid form from the application portal'], 'deadlines': None,
          'note': 'Kalamazoo says it is need-aware and offers minimal need-based aid to international students. It reports that the average aid package for an admitted international student, need and merit together, is roughly 55–65% of the total cost of attendance.'},
    sources=[('Kalamazoo — international applicants', S), ('Kalamazoo — English language proficiency', EN), ('Kalamazoo — cost and aid 2026–27', T),
             ('Kalamazoo — additional scholarship programs', G), ('Kalamazoo — about', 'https://www.kzoo.edu/about/')],
    checked=['application rounds', 'application fee', 'English tests', 'test policy', 'tuition, fees, food and housing 2026–27', 'aid for international students', 'founding year'],
    unconfirmed=['full cost of attendance', 'TOEFL score on the 1–6 scale', 'admission statistics'],
))
annual['kalamazoo-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 80111, 'max': 80111}

# ---------------------------------------------------------------- Reed College
S = 'https://www.reed.edu/admission-aid/how-to-apply/international.html'
D = 'https://www.reed.edu/admission-aid/how-to-apply/'
T = 'https://www.reed.edu/admission-aid/costs-and-financial-aid/costs.html'
A = 'https://www.reed.edu/admission-aid/costs-and-financial-aid/financial-aid/international.html'
I = 'https://www.reed.edu/admission-aid/costs-and-financial-aid/index.html'
records.append(R(
    'reed-college', 'Reed College', 'Reed', 'Portland', 'Oregon', 'liberal-arts', 'Private liberal arts college',
    'A liberal arts college in Portland, Oregon, with no application fee and a test-free admission policy. Reed states that it meets 100 percent of the demonstrated need of all admitted students, international or domestic, though it describes its funding for international students as limited.',
    ['economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.reed.edu/', 'admissions': 'https://www.reed.edu/admission-aid/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'scholarships': 'https://www.reed.edu/admission-aid/costs-and-financial-aid/types-of-aid.html', 'aid': A, 'programs': 'https://www.reed.edu/academics/majors-programs/index.html', 'cost': T},
    verified=V, founded=1908,
    platforms=['Common Application', 'Coalition Application (Scoir)'],
    rounds=[
        rnd('Early Decision I', 'ED', '2026-11-01', True, 'Binding. Decisions in December; reply within two weeks of admission.', D, V, note=NOYEAR),
        rnd('Early Action', 'EA', '2026-11-01', False, 'Not binding. Reply by 1 May.', D, V, note=NOYEAR),
        rnd('Early Decision II', 'ED2', '2027-01-15', True, 'Binding. Reply within two weeks of admission.', D, V, note=NOYEAR),
        rnd('Regular Decision', 'RD', '2027-01-15', False, 'Decisions by 1 April; reply by 1 May.', D, V, note=NOYEAR),
        rnd('Financial aid application (CSS Profile) — same day as each admission round', 'aid', None, False,
            'Reed’s table sets the CSS Profile for the same day as the application: 1 November for Early Decision I and Early Action, 15 January for Early Decision II and Regular Decision. The aid pages still describe the 2026–27 forms.', I, V,
            status='previous-cycle', date='1 November or 15 January, by round', applies='Applicants asking for aid'),
    ],
    fee=fee(0, 'Reed has waived application fees.', 'https://www.reed.edu/admission-aid/', V),
    documents=['Common Application or Coalition Application', 'School report and counselor recommendation', 'Two teacher recommendations from different academic disciplines',
               'Official secondary school transcripts', 'English proficiency results (encouraged)', 'CSS Profile, if applying for aid'],
    interview='Optional; international applicants can interview through InitialView or Vericant.',
    english={'ielts': eng(None, 7, 'No minimum; 7+ is the average Reed says it sees.'),
             'toefl': toefl(110, 5.0, 'No minimum; the averages Reed sees are 5.0+ on the current scale and 110+ on the previous one.', kind='recommended'),
             'duolingo': eng(None, 145, 'No minimum; 145+ is the average Reed says it sees.'),
             'waiver': 'No testing is required from applicants who attended an English-medium school or programme.',
             'note': 'International applicants whose native language is not English are encouraged, but not required, to submit results. An SAT reading and writing score of 600+ or ACT reading and English scores of 28+ are also listed.',
             'detailsSource': S, 'detailsVerified': V},
    sat=test('not-used', 'Reed describes its admission policy as test-free.', source='https://www.reed.edu/admission-aid/', verified=V),
    costs=costs('2025–2026', T, V, 'Undergraduates living on campus',
                [('Tuition', 71460, B), ('Fees', 310, B), ('On-campus housing', 9360, B), ('On-campus meal plan A', 8868, B),
                 ('Books and supplies', 1050, E), ('Personal expenses', 900, E),
                 ('Transportation', {'text': '$250–$2,000', 'min': 250, 'max': 2000}, E)],
                '$92,198–$93,948 cost of attendance (2025–26)', '$89,998 in direct costs; with the indirect estimates the lines come to $92,198–$93,948',
                'tuition, fees, on-campus housing and the meal plan (direct costs), plus books, personal expenses and transportation. For international students transportation is the average cost of one round-trip flight home',
                tuition=71460, billed=89998, budget=92198, budget_max=93948, budget_text='$92,198–$93,948', status='previous-cycle',
                note='These are the 2025–26 figures, the latest on Reed’s costs page. The page lists the lines without a total; the range is their sum.'),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based',
              'covers': {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None},
              'renewable': True,
              'competitiveness': 'Reed describes the funding available to international students as limited.',
              'howToApply': 'Answer “yes” to the financial aid question on the admission application and file the CSS Profile; applicants who answer “no” cannot apply for aid at any time during their enrolment.',
              'note': 'Reed states that it meets 100 percent of the demonstrated need of all admitted students, international or domestic, for all four years, through need-based grants, employment and loans. An international student’s level of aid stays the same for all four years.',
              'quote': 'meets 100 percent of the demonstrated need of all admitted students, international or domestic', 'quoteSource': I},
    merit=[{'name': 'Continental Scholarship Program', 'amount': 'Full tuition', 'eligibility': 'International students — Reed intends to offer it to two students from each continent',
            'deadline': None, 'application': None, 'renewable': None, 'note': 'Announced as beginning with the fall 2026 entering class; the page says Reed “intends to offer” the awards.'},
           {'name': 'UWC Davis–Reed Match Program', 'amount': '$30,000 a year ($15,000 Davis Award and $15,000 Reed Match)', 'eligibility': 'Admitted students from United World Colleges',
            'deadline': None, 'application': 'Automatic; no separate application', 'renewable': True, 'note': 'Given regardless of financial aid status; $120,000 over four years.'}],
    need={'availableToInternational': True, 'meetsFullNeed': True, 'needBlindInternational': None,
          'forms': ['CSS Profile (code 4654)', 'Reed International Student Financial Aid Application, only where the CSS Profile fee is a hardship'],
          'deadlines': 'The same day as the admission application of each round.',
          'note': 'International applicants admitted without financial aid are not eligible to receive aid during their time at Reed.'},
    sources=[('Reed — international applicants', S), ('Reed — how to apply, dates and deadlines', D), ('Reed — cost of attendance', T),
             ('Reed — financial aid for international students', A), ('Reed — costs and financial aid', I), ('Reed — about', 'https://www.reed.edu/about/index.html')],
    checked=['application rounds', 'application fee', 'English proficiency', 'test policy', 'cost of attendance 2025–26', 'need-based aid for international students', 'founding year'],
    unconfirmed=['cost of attendance for 2026–27', 'aid deadlines for the 2027 cycle', 'need-blind or need-aware status', 'admission statistics'],
))
annual['reed-college'] = {'currency': 'USD', 'basis': 'total', 'min': 92198, 'max': 93948, 'note': '2025–26 figures, the latest published'}

# ------------------------------------------------------- Sarah Lawrence College
S = 'https://www.sarahlawrence.edu/admission/apply/international/apply.html'
D = 'https://www.sarahlawrence.edu/admission/apply/deadlines.html'
A = 'https://www.sarahlawrence.edu/financial-aid/undergraduate/international-applicants.html'
PREV = 'The deadlines page still asks aid applicants for 2024 tax returns, so it describes the previous cycle; the dates for autumn 2027 entry had not been republished when this was read.'
records.append(R(
    'sarah-lawrence-college', 'Sarah Lawrence College', 'Sarah Lawrence', 'Bronxville', 'New York', 'liberal-arts', 'Private liberal arts college',
    'A liberal arts college in Bronxville, New York, where standardized tests are optional. It offers merit and need-based scholarships to international citizens, generally of $10,000 to $25,000 a year, against an international cost of attendance of about $102,000.',
    ['economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.sarahlawrence.edu/', 'admissions': 'https://www.sarahlawrence.edu/admission/', 'international': 'https://www.sarahlawrence.edu/admission/apply/international/index.html',
     'portal': 'https://www.commonapp.org/', 'scholarships': A, 'aid': A, 'programs': 'https://www.sarahlawrence.edu/undergraduate/disciplines/index.html', 'cost': A},
    verified=V, founded=1926,
    programNote='Sarah Lawrence organises study by disciplines rather than conventional majors; the tags reflect the disciplines it lists.',
    platforms=['Common Application'],
    rounds=[
        rnd('Early Decision I', 'ED', '2025-11-01', True, 'Binding. Decision in late December.', D, V, status='previous-cycle', year='2026', note=PREV),
        rnd('Early Decision II', 'ED2', '2026-01-15', True, 'Binding. Decision in early February.', D, V, status='previous-cycle', year='2026', note=PREV),
        rnd('Regular Decision', 'RD', '2026-01-15', False, 'Decision from late March to early April; reply by 1 May.', D, V, status='previous-cycle', year='2026', note=PREV),
        rnd('Financial aid application for international students', 'aid', None, False,
            'The Sarah Lawrence International Student Financial Aid Application becomes available two to three business days after the Common Application is submitted and must arrive within ten days of the application deadline.', A, V,
            date='Within ten days of the application deadline', applies='International applicants asking for aid'),
    ],
    documents=['Common Application', 'Transcripts with English translation', 'Two letters of recommendation from academic teachers', 'English proficiency test where required',
               'Sarah Lawrence International Student Financial Aid Application and translated proof of family income, if applying for aid'],
    interview='Optional.',
    english={'ielts': eng(None, 7, 'Most competitive applicants have 7 or higher.'),
             'toefl': toefl(100, 5, 'Most competitive applicants have 100 on tests before 21 January 2026, or 5–5.5 on tests from that date.', kind='recommended'),
             'duolingo': eng(None, 130, 'Most competitive applicants have at least 130.'),
             'waiver': 'Asked of applicants whose first language is not English and who have not studied in an English-language curriculum for the past four years.',
             'note': 'Sarah Lawrence describes these as the scores of its most competitive applicants, not as minimums.', 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', 'Standardized tests such as the ACT and SAT are optional.', source=S, verified=V),
    costs=costs('2026–2027', A, V, 'International undergraduates',
                [('Tuition (12–18 credits per semester)', 73088, B), ('Student activities fee', 250, B), ('Wellness fee', 362, B), ('Health insurance', 4948, B), ('Housing and food', 20316, B),
                 ('Books, course materials, supplies and equipment', 600, E), ('Transportation', 2000, E), ('Miscellaneous and personal', 800, E)],
                '$102,364 estimated total for international students', '$102,364 estimated total, of which $98,964 is direct costs',
                'tuition, the activities and wellness fees, health insurance, and housing and food (direct costs), plus books, transportation and personal expenses — Sarah Lawrence’s cost of attendance for international students',
                tuition=73088, billed=98964, budget=102364),
    merit=[{'name': 'Sarah Lawrence scholarships for international students', 'amount': 'Generally $10,000 to $25,000 a year', 'eligibility': 'International citizens, on merit and need',
            'deadline': 'Within ten days of the application deadline', 'application': 'Sarah Lawrence International Student Financial Aid Application', 'renewable': True,
            'note': 'Renewed each year with satisfactory academic progress. Sarah Lawrence says 30–50% of its international students are scholarship recipients in any given year and calls the funds highly competitive.'}],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None,
          'forms': ['Sarah Lawrence International Student Financial Aid Application (free)', 'Official translated documentation of family income'],
          'deadlines': 'Within ten days of the application deadline.',
          'note': 'Sarah Lawrence offers a combination of merit and need-based scholarships to international citizens. Students who do not complete the requirements by the deadlines are ineligible for funding during their four years.'},
    sources=[('Sarah Lawrence — how to apply as an international student', S), ('Sarah Lawrence — application deadlines', D), ('Sarah Lawrence — financial aid for international applicants', A),
             ('Sarah Lawrence — disciplines', 'https://www.sarahlawrence.edu/undergraduate/disciplines/index.html'), ('Sarah Lawrence — about', 'https://www.sarahlawrence.edu/about/')],
    checked=['English proficiency', 'test policy', 'international cost of attendance 2026–2027', 'scholarships for international citizens', 'founding year'],
    unconfirmed=['application dates for autumn 2027 entry', 'application fee', 'share of need met', 'admission statistics'],
))
annual['sarah-lawrence-college'] = {'currency': 'USD', 'basis': 'total', 'min': 102364, 'max': 102364, 'note': 'International students; health insurance is included in this total'}

if __name__ == '__main__':
    write(records, annual)
