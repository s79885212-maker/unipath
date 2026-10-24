# -*- coding: utf-8 -*-
"""SFU: international USES is distinct from domestic Uggla and portal access."""
import ca50_gaps as G
from ca50_gaps import L

D='2026-10-24'
uses='https://www.sfu.ca/students/financial-aid/entrance/highschool/uses.html'
uggla='https://www.sfu.ca/students/admission/fees-scholarships/uggla.html'
dates='https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html'
h,records,t=G.load();u={r['id']:r for r in records};r=u['simon-fraser-university']
a=r['scholarships']['merit'][0]
a.update(G.plain({
    'id':'uses-international','category':'merit','entryTerm':'Autumn','entryYear':'2027',
    'amount':L('C$140,000 in eight C$17,500 payments for the selected international award', 'C$140,000: восемь выплат по C$17,500 для получателя международной стипендии'),
    'eligibility':L('International high-school applicants for Fall 2027: 90% in programme admission courses or 31 IB points excluding bonus points; graduate in the entry year or previous year without postsecondary enrolment.', 'Иностранные школьные абитуриенты Fall 2027: 90% по предметам приёма программы или 31 IB без бонусных баллов; окончание школы в год поступления либо в предыдущий год без начала postsecondary study.'),
    'application':L('Separate application, scheduled 1 October–15 December 2026. The official page reports the Fall 2027 form temporarily unavailable; expected portal return 2 November 2026.', 'Отдельная заявка по календарю 1 октября — 15 декабря 2026. Официальная страница сообщает о временной недоступности формы Fall 2027; ожидаемое восстановление — 2 ноября 2026.'),
    'note':L('Competitive award, not guaranteed funding or full-cost coverage. In limited cases an additional C$8,000 per term living allowance may be offered for demonstrated need. Renewal conditions must be checked separately.', 'Конкурсная стипендия, без гарантии получения и покрытия всех расходов. В отдельных случаях возможна доплата C$8,000 за семестр на проживание при подтверждённой нуждаемости. Условия продления нужно проверить отдельно.'),
    'source':uses,'verified':D}))
r['scholarships']['fullRide'].update(G.plain({
    'note':L('Uggla is currently restricted to domestic Canadian students. The international USES cash award and possible need-based living allowance do not establish full tuition or full-cost coverage; international full-level coverage remains unconfirmed.', 'Uggla сейчас ограничена domestic Canadian students. Денежная USES для иностранцев и возможная доплата по нуждаемости не подтверждают полное покрытие обучения или всех расходов; международное full-level покрытие остаётся неизвестным.'),
    'source':uses,'verified':D,'detailsSource':uggla,'detailsVerified':D}))
r['scholarships']['needBased'].update(G.plain({
    'availableToInternational':True,
    'note':L('Limited additional living allowance for exceptionally talented international USES recipients with demonstrated financial need; not a promise to meet full need or aid for every admitted applicant.', 'Ограниченная доплата на проживание для особо сильных международных получателей USES с подтверждённой финансовой нуждаемостью; не обещание покрыть всю нуждаемость или помочь каждому зачисленному.'),
    'source':uses,'verified':D}))
for d in r['admissions']['deadlines']:
    source=uses if d['kind']=='scholarship' else dates
    d.update({'source':source,'verified':D,'cycleEvidence':{'basis':'page-context','entryTerm':'Autumn','entryYear':'2027','source':source,'verified':D,'quote':'Fall 2027'}})
    d.pop('binding',None) if d['kind']!='regular' else None
    if d['kind']=='scholarship':
        d.update(G.plain({'awardId':a['id'],'awardCategory':'merit','note':L('Deadline confirmed; the application form is temporarily unavailable according to the official page. An upcoming deadline does not mean the portal is currently accessible.', 'Срок подтверждён; по официальной странице форма временно недоступна. Предстоящий дедлайн не означает, что портал сейчас работает.')}))
    else:
        d['note']=G.plain(L('The page explicitly establishes Fall 2027. The year is supported by the page context, not by the day the page was viewed.', 'Страница явно указывает Fall 2027. Год установлен контекстом страницы, а не датой просмотра.'))
    if d['dateISO']=='2027-02-07':
        d['conditions']=G.plain(L('Contemporary Arts supplemental requirements exclude Art, Performance, and Cinema Studies and Performance Production & Design. Beedie has its own To-Do List requirement.', 'Дополнительные требования Contemporary Arts исключают Art, Performance, and Cinema Studies и Performance Production & Design. У Beedie отдельное требование To-Do List.'))
r['admissions']['deadlines'].append(G.plain({
    'name':L('International USES references and supporting documents', 'Рекомендации и подтверждающие документы International USES'),
    'kind':'documents','entryTerm':'Autumn','entryYear':'2027','dateISO':'2027-01-31','date':L('31 January 2027','31 января 2027'),
    'appliesTo':L('International USES applicants; both references and admission To-Do List items', 'Международные участники USES: обе рекомендации и пункты To-Do List приёма'),
    'conditions':None,'status':'confirmed','source':uses,'verified':D,'awardId':a['id'],'awardCategory':'merit',
    'cycleEvidence':{'basis':'page-context','entryTerm':'Autumn','entryYear':'2027','source':uses,'verified':D,'quote':'Fall 2027'}}))
G.source(r,G.plain(L('SFU — international USES amounts, need allowance and Fall 2027 access notice','SFU — суммы International USES, помощь по нуждаемости и доступ Fall 2027')),uses)
G.source(r,G.plain(L('SFU — Uggla domestic-only eligibility','SFU — Uggla только для domestic Canadian students')),uggla)
G.save(h,records,t);G.flush()
