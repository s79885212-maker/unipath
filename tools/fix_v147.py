# -*- coding: utf-8 -*-
"""Verified programme links, MRU's explicit 2027 cycle and AU EGL scholarship."""
import io, json, os
import ca50_gaps as G
from ca50_gaps import L
D = '2026-10-24'
h, records, t = G.load()
u = {r['id']: r for r in records}
catalogues = {
    'mount-allison-university': 'https://mta.ca/academics/programs-and-degrees',
    'university-of-ottawa': 'https://www.uottawa.ca/study/undergraduate-studies/undergraduate-programs',
    'universite-du-quebec-a-montreal': 'https://etudier.uqam.ca/programmes',
    'queens-university': 'https://www.queensu.ca/admission/undergraduate-programs',
    'university-of-prince-edward-island': 'https://www.upei.ca/programs?field_program_level_value=undergraduate',
    'mcmaster-university': 'https://future.mcmaster.ca/programs/',
    'university-of-the-fraser-valley': 'https://international.ufv.ca/future-students/programs/',
    'laurentian-university': 'https://laurentian.ca/academics/undergraduate-programs',
    'university-of-windsor': 'https://www.future.uwindsor.ca/programs/?p-level=undergraduate'
}
for uid, src in catalogues.items():
    u[uid]['links']['programs'] = src
    G.source(u[uid], 'Official programme directory', src)

ufv = u['university-of-the-fraser-valley']
ufv.update(G.plain({'programs': ['business', 'computer-science'], 'programsStatus': 'partial', 'programsBasis': 'evidence',
    'englishTaughtPrograms': [],
    'programNote': L('Confirmed bachelor’s programmes: Business Administration (Abbotsford) and Computing Science (Abbotsford; some courses in Chilliwack). This is a partial review. The language of these specific routes has not been separately verified, so they are not included in the strict English-taught field filter.', 'Подтверждены бакалавриат Business Administration (Abbotsford) и Computing Science (Abbotsford; часть курсов в Chilliwack). Проверка направлений неполная. Язык этих конкретных маршрутов отдельно не подтверждён, поэтому они не включены в строгий фильтр направлений на английском.'),
    'programEvidence': {
        'business': {'program': 'Bachelor of Business Administration', 'level': 'bachelor', 'language': None, 'campus': 'Abbotsford', 'url': 'https://www.ufv.ca/business/programs/bba/', 'checked': D},
        'computer-science': {'program': 'Computing Science — Bachelor of Science', 'level': 'bachelor', 'language': None, 'campus': 'Abbotsford; some courses in Chilliwack', 'url': 'https://www.ufv.ca/programs/computing/computing-science-bsc/', 'checked': D}
    }}))
for e in ufv['programEvidence'].values(): G.source(ufv, e['program'], e['url'])

src = 'https://www.mtroyal.ca/Admission/DatesDeadlines/index.htm'
mr = u['mount-royal-university']
for d in mr['admissions']['deadlines']:
    d['verified'] = D
    d['cycleEvidence'] = {'basis': 'page-context', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': D, 'quote': 'Fall Semester 2027'}
    if d['kind'] == 'scholarship': d.pop('binding', None)
doc = {'name': L('International supporting documents deadline', 'Срок документов для иностранных абитуриентов'), 'kind': 'documents', 'entryTerm': 'Autumn', 'entryYear': '2027',
    'dateISO': '2027-05-15', 'date': '15 May 2027', 'appliesTo': L('International applicants, unless the programme has already closed', 'Иностранные абитуриенты, если программа ещё не закрылась'),
    'conditions': L('This is a document deadline, separate from the 1 May application deadline. Some programmes close earlier.', 'Это срок документов, отдельно от заявки до 1 мая. Некоторые программы закрываются раньше.'),
    'status': 'confirmed', 'source': src, 'verified': D,
    'cycleEvidence': {'basis': 'page-context', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': D, 'quote': 'Fall Semester 2027'}}
mr['admissions']['deadlines'].append(G.plain(doc))
G.save(h, records, t)

path = os.path.join(G.ROOT, 'data/universities.us3.js')
h, records, t = G.load(path)
a = next(r for r in records if r['id'] == 'american-university')
src = 'https://www.american.edu/admissions/international/au-egls-apply.cfm'
a['scholarships']['fullRide'].update(G.plain({
    'available': True, 'internationalEligible': True, 'basis': 'need-merit',
    'covers': {'tuition': True, 'housing': True, 'meals': True, 'insurance': False, 'books': False},
    'renewable': True, 'source': src, 'verified': D,
    'competitiveness': L('Two international recipients; competitive selection, not guaranteed aid for every admitted student', 'Два иностранных получателя; конкурсный отбор, помощь не гарантируется каждому зачисленному'),
    'howToApply': L('Complete the Common Application and required supporting documents, then the separate AU EGLS portal application and essays by 15 January 2027; official English scores are also due by that date. Regular Decision for fall 2027 is recommended.', 'Подайте Common Application с обязательными документами, затем отдельную заявку AU EGLS и эссе в портале до 15 января 2027; официальные результаты английского нужны к той же дате. Рекомендуется Regular Decision на осень 2027.'),
    'note': L('AU Emerging Global Leader covers full tuition, room and board, but excludes health insurance, books, flights, taxes and miscellaneous expenses. The award page estimates about $4,000 a year of uncovered costs; this is not a guaranteed personal budget. Applicants cannot be US citizens/permanent residents, have begun postsecondary study elsewhere, or have finished secondary school before 2024. Preference includes students graduating by June 2027.', 'AU Emerging Global Leader покрывает обучение, жильё и питание, но не страховку, книги, перелёты, налоги и прочие расходы. Стипендиальная страница оценивает непокрытые расходы примерно в $4,000 в год; это не гарантированный личный бюджет. Не подходят граждане/постоянные резиденты США, начавшие высшее образование в другом вузе или окончившие школу до 2024. Среди приоритетов — выпускники к июню 2027.'),
    'renewalConditions': L('Up to four undergraduate years, subject to continued satisfactory academic performance', 'До четырёх лет бакалавриата при сохранении удовлетворительной успеваемости'),
    'detailsSource': src, 'detailsVerified': D
}))
award = {'id': 'au-egls', 'category': 'need-merit', 'entryTerm': 'Autumn', 'entryYear': '2027',
    'name': 'AU Emerging Global Leader Scholarship', 'basis': 'need-merit', 'amount': L('Full tuition, room and board for two international recipients; uncovered expenses remain', 'Обучение, жильё и питание для двух иностранных получателей; остаются непокрытые расходы'),
    'eligibility': a['scholarships']['fullRide']['note'], 'deadline': None,
    'application': a['scholarships']['fullRide']['howToApply'], 'renewable': True,
    'note': L('Applicants completing this process may also be considered for partial EGL awards of up to $40,000 a year; additional proof of funds is required for the uncovered difference. No award is subtracted automatically in budget matching.', 'Завершившие этот процесс также могут рассматриваться на частичные EGL-стипендии до $40,000 в год; разницу нужно подтвердить дополнительными средствами. В бюджетном подборе стипендия автоматически не вычитается.'),
    'source': src, 'verified': D}
a['scholarships']['merit'].append(G.plain(award))
a['admissions']['deadlines'].append(G.plain({'name': L('AU EGLS application, essays and supporting documents', 'Заявка AU EGLS, эссе и обязательные документы'),
    'kind': 'scholarship', 'entryTerm': 'Autumn', 'entryYear': '2027', 'dateISO': '2027-01-15', 'date': '15 January 2027',
    'status': 'confirmed', 'awardId': 'au-egls', 'awardCategory': 'need-merit', 'appliesTo': L('Eligible international first-year applicants', 'Иностранные абитуриенты первого курса, соответствующие условиям'),
    'conditions': a['scholarships']['fullRide']['howToApply'], 'source': src, 'verified': D,
    'cycleEvidence': {'basis': 'page-context', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': D, 'quote': 'Regular Decision for Fall 2027'}}))
G.source(a, 'American University — Emerging Global Leader Scholarship application', src)
G.save(h, records, t, path)
ap = os.path.join(G.ROOT, 'data/award-details.js')
s = io.open(ap, encoding='utf-8').read()
assert s.count("'american-university',") == 1
s = s.replace("'american-university',", '')
io.open(ap, 'w', encoding='utf-8').write(s)

news = {'id': 'mru-fall-2027-admission-open', 'cycle': '2027', 'type': 'applications-open', 'country': 'ca', 'uniId': 'mount-royal-university',
    'org': 'Mount Royal University', 'title': L('Mount Royal: applications for fall 2027 are open', 'Mount Royal: открыт приём на осень 2027'),
    'summary': L('The official Fall Semester 2027 timetable opens Early Admission on 1 October 2026 and ends it on 1 February 2027. Some programmes close then; later admission depends on remaining places. International applications are due 1 May and documents 15 May unless the programme closes earlier; the IRPR 214 exception applies to the application deadline. Scholarship applications have a separate window, 1 November 2026 to 1 March 2027.', 'Официальный календарь Fall Semester 2027 открывает Early Admission 1 октября 2026 и завершает его 1 февраля 2027. Некоторые программы закрываются тогда; дальнейший приём зависит от свободных мест. Международные заявки — до 1 мая, документы — до 15 мая, если программа не закрылась раньше; для срока заявки есть исключение IRPR 214. Отдельный период стипендиальных заявок — с 1 ноября 2026 до 1 марта 2027.'),
    'url': 'https://www.mtroyal.ca/Admission/DatesDeadlines/index.htm', 'published': None, 'verified': D, 'eventDate': '2026-10-01', 'eventLabel': 'Applications open', 'deadline': False,
    'closes': '2027-02-01', 'state': 'open', 'stateNote': L('Early Admission is open. Scholarship applications open separately on 1 November 2026; they are not yet open on the check date.', 'Early Admission открыт. Заявки на стипендии открываются отдельно 1 ноября 2026; на дату проверки они ещё не открыты.')}
np = os.path.join(G.ROOT, 'data/news.js')
s = io.open(np, encoding='utf-8').read()
s = s.replace('window.UNIPATH.news = [', 'window.UNIPATH.news = [\n' + json.dumps(G.plain(news), ensure_ascii=False, indent=2) + ',')
io.open(np, 'w', encoding='utf-8').write(s)
G.flush()
