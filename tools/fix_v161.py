# -*- coding: utf-8 -*-
"""Verify award-specific Fall 2027 stages; no cash award becomes guaranteed aid."""
import copy
import ca50_gaps as G
from ca50_gaps import L
D='2026-10-26'
h,rs,t=G.load();u={r['id']:r for r in rs}
def proof(d,src):
 d.update({'status':'confirmed','source':src,'verified':D,'entryTerm':'Autumn','entryYear':'2027','cycleEvidence':{'basis':'page-context','source':src,'verified':D,'entryTerm':'Autumn','entryYear':'2027','quote':'Fall 2027'}});d.pop('binding',None)
def award(a,ident,src):
 a.update({'id':ident,'category':'merit','entryTerm':'Autumn','entryYear':'2027','source':src,'verified':D})
def link(d,ident): d.update({'awardId':ident,'awardCategory':'merit'})
# York: the guide disambiguates the abbreviated label on the summary page.
src='https://futurestudents.yorku.ca/presidents-international-scholarship-excellence-application-guides'
r=u['york-university'];a=r['scholarships']['merit'][0];award(a,'pise',src)
a.update(G.plain({'eligibility':L('International-fee high-school entrants for Fall 2027, minimum final admission average 80% or equivalent; academic achievement, leadership and service; school nomination required (maximum two per school).','Выпускники школы на Fall 2027 с international fee, итоговая средняя от 80% или эквивалента; достижения, лидерство и общественная работа; нужна школьная номинация (до двух от школы).'),'application':L('Opens 1 November 2026. Student form by 27 January 2027; school nomination and reference by 4 February. A York reference number from the admission application is required.','Открытие 1 ноября 2026. Форма студента — до 27 января 2027; школьная номинация и рекомендация — до 4 февраля. Нужен York reference number после заявки на поступление.')}))
d=next(d for d in r['admissions']['deadlines'] if d['kind']=='scholarship');proof(d,src);link(d,a['id']);d.update({'time':'23:59','timezone':'EST'})
d['conditions']=G.plain(L('Student application; school nomination and reference have their own later deadline.','Заявка студента; для школьной номинации и рекомендации установлен отдельный более поздний срок.'))
n=copy.deepcopy(d);n.update(G.plain({'name':L('PISE: school nomination and reference submission','PISE: школьная номинация и отправка рекомендации'),'kind':'nomination','dateISO':'2027-02-04','date':'4 February 2027','conditions':L('After the student submits, York emails the school nominator a submission link.','После отправки заявки студента York присылает школьному номинатору ссылку для подачи.')}));r['admissions']['deadlines'].append(n)
G.source(r,G.plain(L('York — PISE Fall 2027 application guides','York — инструкции PISE на Fall 2027')),src)
# Guelph: a residence place guarantee does not pay the accommodation charge.
src='https://www.uoguelph.ca/registrar/finances-fees/vaccarino'
r=u['university-of-guelph'];a=r['scholarships']['merit'][1];award(a,'vaccarino',src)
a.update(G.plain({'eligibility':L('Two international VISA students entering their first undergraduate semester in Fall 2027, no prior post-secondary attendance, at least 90% Canadian-equivalent admission average, and leadership contributions.','Два иностранных VISA-студента первого семестра бакалавриата Fall 2027 без прежнего post-secondary обучения; вступительная средняя от 90% в канадском эквиваленте и лидерская деятельность.'),'application':L('The Fall 2027 form will open by 1 December 2026. Student application: 8 March 2027, 16:00 EST; reference letters: 15 March, 16:00 EDT.','Форму Fall 2027 обещают открыть к 1 декабря 2026. Заявка студента: 8 марта 2027, 16:00 EST; рекомендации: 15 марта, 16:00 EDT.'),'note':L('C$42,500 plus a summer research assistantship and mentorship. First-year room preference requires the residence deposit; a guaranteed place is not paid housing. Competitive; not deducted from the budget.','C$42,500, летняя исследовательская работа и наставничество. Приоритет комнаты первого года требует депозита резиденции; гарантия места не означает оплату жилья. Конкурсная помощь не вычитается из бюджета.')}))
d=next(d for d in r['admissions']['deadlines'] if d['kind']=='scholarship');proof(d,src);link(d,a['id']);d.update({'time':'16:00','timezone':'EST'})
n=copy.deepcopy(d);n.update(G.plain({'name':L('Vaccarino scholarship: reference letters','Стипендия Vaccarino: рекомендательные письма'),'kind':'documents','dateISO':'2027-03-15','date':'15 March 2027','time':'16:00','timezone':'EDT','conditions':L('Reference-letter deadline for this scholarship only.','Срок рекомендательных писем только для этой стипендии.')}));r['admissions']['deadlines'].append(n)
G.source(r,G.plain(L('Guelph — Vaccarino scholarship for Fall 2027','Guelph — стипендия Vaccarino на Fall 2027')),src)
# Regina: the notice explicitly distinguishes filled intakes from Fall 2027.
src='https://www.uregina.ca/ur-international/scholarships.html';r=u['university-of-regina'];a=r['scholarships']['merit'][1];award(a,'international-student-of-distinction',src)
a.update(G.plain({'application':L('Automatic consideration from the admission application and required documents by 30 April for Fall 2027; no separate scholarship form. Winter and Spring/Summer 2027 places are already filled.','Автоматическое рассмотрение заявки на поступление и обязательных документов до 30 апреля для Fall 2027; отдельной стипендиальной формы нет. Места Winter и Spring/Summer 2027 уже заполнены.'),'note':L('Housing/meal benefits are not a tuition credit. Renewal requires 24 credits per calendar year and 80% UGPA; up to three further years (3.5 in Engineering). Limited places.','Жильё/питание не являются tuition credit. Продление требует 24 кредитов за календарный год и UGPA 80%; ещё до трёх лет (3.5 в Engineering). Места ограничены.')}))
d=next(d for d in r['admissions']['deadlines'] if d['kind']=='scholarship');proof(d,src);link(d,a['id']);d.update(G.plain({'kind':'admission','name':L('ISD award consideration: admission application','Рассмотрение на ISD: заявка на поступление'),'conditions':L('Award consideration only; this is not the general admission closing date. No separate scholarship application.','Только рассмотрение на award; это не общий срок окончания приёма. Отдельной заявки на стипендию нет.')}))
n=copy.deepcopy(d);n.update(G.plain({'kind':'documents','name':L('ISD award consideration: supporting documents','Рассмотрение на ISD: подтверждающие документы')}));r['admissions']['deadlines'].append(n)
G.save(h,rs,t);G.flush()
