# -*- coding: utf-8 -*-
"""Bilingual helpers for batches B and C of the United States expansion.

Every reader-facing string of a record is written once, as L(english, russian),
next to the fact it states. The English text goes into the record, the pair is
collected, and flush() appends the pairs that data/i18n/ru.js does not have yet.
Standard wording (rounds, test notes, cost lines) comes from the helpers below so
that the same fact reads the same way in every profile.
"""
import io, json, os, re
from us200 import R, rnd, test, eng, toefl, fee, costs, write, ROOT

TR = {}

class L(str):
    """An English string that carries its Russian translation."""
    def __new__(cls, en, ru):
        s = str.__new__(cls, en)
        assert TR.get(en, ru) == ru, 'two translations for: ' + en
        TR[en] = ru
        s.ru = ru
        return s

def J(*parts):
    """Join bilingual sentences into one text node."""
    parts = [p for p in parts if p]
    return L(' '.join(parts), ' '.join(getattr(p, 'ru', p) for p in parts))

MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
GEN = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
PRE = ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре']
GENM = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

def dm(iso):
    """'2026-12-15' or '12-15' -> ('15 December', '15 декабря'), with the year when given."""
    p = iso.split('-')
    y = p[0] if len(p) == 3 else None
    m, d = int(p[-2]), int(p[-1])
    return ('%d %s%s' % (d, MON[m - 1], ' ' + y if y else ''), '%d %s%s' % (d, GEN[m - 1], ' ' + y if y else ''))

PART = {'early': 'начале', 'mid': 'середине', 'late': 'конце'}

def when(spec):
    """'mid-12' -> ('mid-December', 'середине декабря'); '12' -> ('December', 'декабре')."""
    if '-' in spec:
        part, m = spec.split('-'); m = int(m)
        return ('%s%s%s' % (part, '-' if part == 'mid' else ' ', MON[m - 1]), '%s %s' % (PART[part], GENM[m - 1]))
    m = int(spec)
    return (MON[m - 1], PRE[m - 1])

# ------------------------------------------------------------------ rounds
BIND = L('Binding.', 'Обязывающий.')
FREE = L('Not binding.', 'Необязывающий.')
NOYEAR = L('The page prints this date without a year; it was read on 12 October 2026, during the cycle for autumn 2027 entry.',
           'На странице дата напечатана без года; страница прочитана 12 октября 2026, во время цикла подачи на осень 2027.')
PREV = L('The page read still shows the previous cycle; the date for autumn 2027 entry is not published there yet.',
         'На прочитанной странице ещё показан прошлый цикл; даты для поступления осенью 2027 там пока нет.')
FY = 'First-year applicants'
FYI = L('First-year international applicants', 'Иностранные абитуриенты, поступающие на первый курс')
INTL = L('International applicants', 'Иностранные абитуриенты')
AIDAPP = L('International applicants asking for aid', 'Иностранные абитуриенты, запрашивающие помощь')

def dec_by(iso):
    e, r = dm(iso); return L('Decisions by %s.' % e, 'Решения до %s.' % r)
def dec_on(iso):
    e, r = dm(iso); return L('Decisions on %s.' % e, 'Решения %s.' % r)
def dec_in(spec):
    e, r = when(spec); return L('Decisions in %s.' % e, 'Решения в %s.' % r)
def dec_from(spec):
    e, r = when(spec); return L('Decisions are sent from %s.' % e, 'Решения рассылаются с %s.' % r.replace('середине', 'середины').replace('начале', 'начала').replace('конце', 'конца'))
ROLLING = L('Applications are reviewed as they arrive.', 'Заявки рассматриваются по мере поступления.')
REPLY_MAY1 = L('Reply by 1 May.', 'Ответ до 1 мая.')

NAMES = {
    'ED': 'Early Decision', 'ED1': 'Early Decision I', 'ED2': 'Early Decision II', 'EA': 'Early Action',
    'EA1': L('Early Action I', 'Early Action I (ранняя подача)'), 'EA2': L('Early Action II', 'Early Action II (ранняя подача)'),
    'RD': 'Regular Decision', 'REA': 'Restrictive Early Action',
    'PRI': L('Priority deadline', 'Приоритетный срок'), 'ROLL': 'Rolling admission',
    'FINAL': L('Final deadline', 'Окончательный срок'),
}
KINDS = {'ED': 'ED', 'ED1': 'ED', 'ED2': 'ED2', 'EA': 'EA', 'EA1': 'EA', 'EA2': 'EA', 'RD': 'RD', 'REA': 'REA', 'PRI': 'priority', 'ROLL': 'rolling', 'FINAL': 'RD'}

def rd(code, iso, source, verified, *cond, **k):
    """A standard admission round. Binding follows from the round type."""
    binding = code in ('ED', 'ED1', 'ED2')
    parts = [BIND if binding else (FREE if code in ('EA', 'EA1', 'EA2', 'REA') else None)] + list(cond)
    name = k.pop('name', None) or NAMES[code]
    return rnd(name, k.pop('kind', None) or KINDS[code], iso, binding, J(*parts) if any(parts) else None, source, verified, **k)

# ------------------------------------------------------------------ tests
def atleast(n, scale=None):
    if scale: return L('At least %s on the %s scale.' % (n, scale), 'Не ниже %s по шкале %s.' % (n, scale))
    return L('At least %s.' % n, 'Не ниже %s.' % n)
def recommended(n):
    return L('Recommended: %s or higher.' % n, 'Рекомендуется: %s и выше.' % n)
OLDSCALE = L('The page gives the score on the 0–120 scale only; no figure for the 1–6 scale used since 21 January 2026 was found.',
             'На странице указан балл только по шкале 0–120; значения по шкале 1–6, действующей с 21 января 2026, не найдено.')
SUB = lambda s: L('Section minimums: %s.' % s[0], 'Минимумы по разделам: %s.' % s[1])

OPTIONAL = lambda who: L('%s is test-optional: SAT and ACT scores are not required.' % who, '%s не требует тестов: баллы SAT и ACT необязательны.' % who)
OPTIONAL_INTL = lambda who: L('%s is test-optional, including for international applicants.' % who, '%s не требует тестов, в том числе от иностранных абитуриентов.' % who)
REQUIRED = lambda who: L('%s requires an SAT or ACT score from first-year applicants.' % who, '%s требует балл SAT или ACT от поступающих на первый курс.' % who)
BLIND = lambda who: L('%s does not consider SAT or ACT scores.' % who, '%s не рассматривает баллы SAT и ACT.' % who)

# ------------------------------------------------------------------ costs
B, E, X = 'billed', 'estimate', 'extra'
TUIT, FEES, HOUS, FOOD, HF = 'Tuition', 'Fees', 'Housing', 'Food', 'Housing and food'
TF = 'Tuition and fees'
RB = 'Room and board'
BOOKS, TRANS, PERS, INS = 'Books and supplies', 'Transportation', 'Personal expenses', 'Health insurance'
REQFEES = 'Required fees'
MISC = L('Personal and miscellaneous', 'Личные и прочие расходы')
LOANFEE = L('Loan fees', 'Комиссия по кредиту')
ONCAMPUS = L('Undergraduates living on campus', 'Студенты бакалавриата, живущие в кампусе')
INTL_ONCAMPUS = L('International undergraduates living on campus', 'Иностранные студенты бакалавриата, живущие в кампусе')
NONRES = L('Non-resident undergraduates living on campus', 'Студенты бакалавриата не из штата, живущие в кампусе')
INTL_UG = L('International undergraduates', 'Иностранные студенты бакалавриата')

def money(n): return '${:,}'.format(n)

def h_coa(total, hi=None):
    t = money(total) + ('–' + money(hi) if hi else '')
    return L('%s total cost of attendance' % t, '%s — полная стоимость обучения за год' % t)
def h_billed(n):
    return L('%s in tuition, fees, housing and food' % money(n), '%s — обучение, сборы, жильё и питание' % money(n))
def h_tuition(n, what='tuition and fees'):
    ru = {'tuition and fees': 'обучение и сборы', 'tuition': 'обучение'}[what]
    return L('%s in %s' % (money(n), what), '%s — %s' % (money(n), ru))
def tt_coa(total, billed=None, hi=None):
    t = money(total) + ('–' + money(hi) if hi else '')
    if billed is None: return L('%s total cost of attendance' % t, '%s — полная стоимость обучения за год' % t)
    return L('%s total cost of attendance, of which %s is billed by the university' % (t, money(billed)),
             '%s — полная стоимость обучения, из них %s выставляет университет' % (t, money(billed)))
def tt_billed(n):
    return L('%s charged for the year; the page prints no figure for the full cost of attendance' % money(n),
             '%s выставляется за год; полной стоимости обучения страница не приводит' % money(n))
INC_COA = L('tuition, fees, housing and food (billed), plus the university’s estimates for books, transportation and personal expenses',
            'обучение, сборы, жильё и питание (по счёту), а также оценки университета на книги, дорогу и личные расходы')
INC_COA_INS = L('tuition, fees, housing and food (billed), plus the university’s estimates for books, transportation, personal expenses and health insurance',
                'обучение, сборы, жильё и питание (по счёту), а также оценки университета на книги, дорогу, личные расходы и медицинскую страховку')
INC_BILLED = L('tuition, fees, housing and food. Books, transportation and personal expenses are extra',
               'обучение, сборы, жильё и питание. Книги, дорога и личные расходы — сверх этого')
INC_TUITION = L('tuition and required fees only. Housing, food, books and personal expenses are extra',
                'только обучение и обязательные сборы. Жильё, питание, книги и личные расходы — сверх этого')

def ins_extra(amount, year, cond=None):
    return {'label': L('Student health insurance plan', 'Студенческая медицинская страховка'), 'amount': amount, 'required': True,
            'condition': cond or L('Required of international students unless the university accepts their own cover.',
                                   'Обязательна для иностранных студентов, если университет не принял их собственный полис.'), 'year': year}

# ------------------------------------------------------------------ aid
NOCOVER = {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None}
TUITION_ONLY = {'tuition': True, 'housing': False, 'meals': False, 'insurance': False, 'books': False}
FULLRIDE = {'tuition': True, 'housing': True, 'meals': True, 'insurance': None, 'books': None}

def no_full(note):
    """No award at the level of full tuition is described on the pages read."""
    return {'available': None, 'internationalEligible': None, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None,
            'competitiveness': None, 'howToApply': None, 'note': note}

def award(name, amount, eligibility, note=None, deadline=None, application=None, renewable=None, **k):
    d = {'name': name, 'amount': amount, 'eligibility': eligibility, 'deadline': deadline, 'application': application,
         'renewable': renewable, 'note': note}
    d.update(k)
    return d

AUTO = L('Automatic with the application for admission; no separate application', 'Автоматически по заявке на поступление; отдельной заявки нет')
ALLFY = L('All first-year applicants, international students included', 'Все поступающие на первый курс, включая иностранных студентов')
INTLFY = L('International first-year students', 'Иностранные студенты первого курса')
NOAMT = L('The pages read give no amount.', 'На прочитанных страницах сумма не указана.')
upto = lambda n, per='a year': L('Up to %s %s' % (money(n), per), 'До %s %s' % (money(n), {'a year': 'в год', 'over four years': 'за четыре года'}[per]))
rng = lambda a, b: L('%s to %s a year' % (money(a), money(b)), 'От %s до %s в год' % (money(a), money(b)))
FULLT = L('Full tuition', 'Полная плата за обучение')
YES4 = L('Renewable for four years while the student keeps the required grade average.', 'Продлевается на четыре года при сохранении требуемого среднего балла.')

# ------------------------------------------------------------------ misc vocabulary
COMMON = 'Common Application'
COALITION = 'Coalition Application'
OWNAPP = lambda who: L('%s application' % who, 'Заявка %s' % who)
DOCS = {
    'app': L('Completed application', 'Заполненная заявка'),
    'transcript': 'Official high school transcripts',
    'school': L('School report and counselor recommendation', 'Справка школы и рекомендация консультанта'),
    'teacher1': L('One teacher recommendation', 'Одна рекомендация учителя'),
    'teacher2': L('Two teacher recommendations', 'Две рекомендации учителей'),
    'essay': L('Personal essay', 'Личное эссе'),
    'english': L('English proficiency test unless exempt', 'Тест по английскому, если нет освобождения'),
    'finance': L('Certification of finances with bank documents', 'Подтверждение финансов с банковскими документами'),
    'portfolio': L('Portfolio or audition, for programmes that require one', 'Портфолио или прослушивание — для программ, где они требуются'),
    'passport': L('Copy of passport', 'Копия паспорта'),
    'eval': L('Credential evaluation of foreign transcripts, where the university asks for one', 'Оценка иностранных документов об образовании — если её запрашивает университет'),
}
def docs(*keys): return [DOCS.get(k, k) for k in keys]

CHK = {
    'rounds': L('application rounds', 'раунды подачи'),
    'fee': L('application fee', 'сбор за заявку'),
    'english': L('English proficiency', 'требования к английскому'),
    'tests': L('test policy', 'политика тестов'),
    'costs': L('published costs', 'опубликованная стоимость'),
    'aid': L('aid for international students', 'помощь иностранным студентам'),
    'merit': L('merit scholarships', 'стипендии за успехи'),
    'founded': L('founding year', 'год основания'),
    'stats': L('admission statistics', 'статистика приёма'),
    'insurance': L('health insurance terms', 'условия медицинской страховки'),
    'needblind': L('need-blind or need-aware status', 'учитывается ли потребность в помощи при приёме'),
    'needmet': L('share of need met', 'доля покрываемой потребности'),
    'awards': L('amounts of merit awards', 'размеры стипендий за успехи'),
    'intlcost': L('cost of attendance for international students', 'стоимость для иностранных студентов'),
    'dates2027': L('dates for autumn 2027 entry', 'даты для поступления осенью 2027'),
    'toeflnew': L('TOEFL score on the 1–6 scale', 'балл TOEFL по шкале 1–6'),
    'docs': L('required documents', 'обязательные документы'),
    'waiver': L('application fee waiver for international applicants', 'освобождение от сбора за заявку для иностранных абитуриентов'),
    'aiddeadline': L('financial aid deadline', 'срок подачи на финансовую помощь'),
    'engwaiver': L('English test exemptions', 'освобождения от теста по английскому'),
}
def chk(*keys): return [CHK.get(k, k) for k in keys]

def src(short, *pairs):
    """Source labels. kind -> standard label, or a ready L()."""
    std = {
        'home': ('home page', 'главная страница'), 'about': ('about', 'о вузе'),
        'intl': ('international applicants', 'иностранным абитуриентам'),
        'fy': ('first-year applicants', 'поступающим на первый курс'),
        'dates': ('application deadlines', 'сроки подачи'),
        'apply': ('how to apply', 'как подать заявку'),
        'cost': ('tuition and fees', 'плата и сборы'), 'coa': ('cost of attendance', 'стоимость обучения'),
        'aid': ('financial aid', 'финансовая помощь'), 'aidintl': ('financial aid for international students', 'финансовая помощь иностранным студентам'),
        'merit': ('scholarships', 'стипендии'), 'meritintl': ('scholarships for international students', 'стипендии иностранным студентам'),
        'english': ('English language proficiency', 'требования к английскому'),
        'tests': ('standardized testing policy', 'политика стандартизированных тестов'),
        'programs': ('majors and programmes', 'направления и программы'), 'faq': ('admission FAQ', 'вопросы о поступлении'),
        'req': ('admission requirements', 'требования к поступающим'), 'facts': ('facts and figures', 'факты и цифры'),
        'history': ('history', 'история'),
    }
    out = []
    for kind, url in pairs:
        if isinstance(kind, L): out.append((kind, url)); continue
        extra = ''
        if ' ' in kind: kind, extra = kind.split(' ', 1); extra = ' ' + extra
        e, r = std[kind]
        out.append((L('%s — %s%s' % (short, e, extra), '%s — %s%s' % (short, r, extra)), url))
    return out

def flush():
    """Append the pairs ru.js does not have yet."""
    p = os.path.join(ROOT, 'data/i18n/ru.js')
    s = io.open(p, encoding='utf-8').read()
    have = set(json.loads('"%s"' % m) for m in re.findall(r'(?m)^\s*"((?:[^"\\]|\\.)*)"\s*:', s))
    norm = lambda x: re.sub(r'\s+', ' ', x).strip()
    have_n = set(norm(h) for h in have)
    new = [(k, v) for k, v in TR.items() if norm(k) not in have_n and k != v and re.search(r'[A-Za-z]{2}', k)]
    same = [(k, v) for k, v in TR.items() if norm(k) not in have_n and k == v]
    new += same
    if not new:
        print('ru.js: nothing new'); return
    lines = ''.join('  %s: %s,\n' % (json.dumps(k, ensure_ascii=False), json.dumps(v, ensure_ascii=False)) for k, v in new)
    i = s.rstrip().rfind('};')
    body = s[:i].rstrip()
    if not body.endswith(','): body += ','
    s = body + '\n' + lines + s[i:]
    io.open(p, 'w', encoding='utf-8').write(s)
    print('ru.js: +%d strings' % len(new))

def not_described(ids):
    """Records whose pages describe no award at the level of full tuition."""
    p = os.path.join(ROOT, 'data/award-details.js')
    s = io.open(p, encoding='utf-8').read()
    new = [i for i in ids if ("'%s'" % i) not in s and ('"%s"' % i) not in s]
    if new:
        m = re.search(r'window\.UNIPATH\.awardNotDescribed = \[\n', s)
        s = s[:m.end()] + '  ' + ', '.join("'%s'" % i for i in new) + ',\n' + s[m.end():]
        io.open(p, 'w', encoding='utf-8').write(s)
    print('award-details.js: +%d not described' % len(new))
