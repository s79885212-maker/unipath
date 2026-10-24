# -*- coding: utf-8 -*-
"""Verify existing Pearson/UBC cycles; separate award-specific stages."""
import os
import ca50_gaps as G
from ca50_gaps import L
D='2026-10-24'
h,records,t=G.load();u={r['id']:r for r in records}
src='https://future.utoronto.ca/pearson-scholarships'
r=u['university-of-toronto'];fr=r['scholarships']['fullRide']
fr.update({'id':'pearson','category':'merit','entryTerm':'Autumn','entryYear':'2027','verified':D,'detailsSource':src,'detailsVerified':D})
for d in r['admissions']['deadlines']:
    if d['source']!=src:continue
    assert d['dateISO'] in ('2026-10-16','2026-11-06')
    d.update({'awardId':'pearson','awardCategory':'merit','verified':D,
        'cycleEvidence':{'basis':'page-context','source':src,'verified':D,'quote':'September 2027','entryTerm':'Autumn','entryYear':'2027'}})
    d.pop('binding',None)
    if d['dateISO']=='2026-10-16':d['kind']='admission'
r['admissions']['deadlines'].append(G.plain({'name':L('Pearson school nomination deadline','Срок школьной номинации Pearson'),'kind':'nomination',
    'entryTerm':'Autumn','entryYear':'2027','dateISO':'2026-10-09','date':'9 October 2026','status':'confirmed','source':src,'verified':D,
    'appliesTo':L('Secondary-school nomination for the Pearson Scholarship','Школьная номинация на стипендию Pearson'),
    'conditions':L('One nomination per high school. The later scholarship-form deadline does not reopen nomination or the award-specific admission stage. The FAQ still contains older-cycle dates; these dates come from the explicit September 2027 application steps.', 'Одна номинация от школы. Более поздний срок стипендиальной формы не открывает заново номинацию или специальный этап заявки на поступление. FAQ всё ещё содержит старые сроки; эти даты взяты из шагов для явно указанного сентября 2027.'),
    'awardId':'pearson','awardCategory':'merit',
    'cycleEvidence':{'basis':'page-context','source':src,'verified':D,'quote':'September 2027','entryTerm':'Autumn','entryYear':'2027'}}))
src='https://you.ubc.ca/applying-ubc/dates-deadlines/'
r=u['university-of-british-columbia'];fr=r['scholarships']['fullRide']
fr.update({'id':'international-scholars','category':'need','entryTerm':'Autumn','entryYear':'2027'})
for d in r['admissions']['deadlines']:
    assert d['source']==src
    d.update({'verified':D,'cycleEvidence':{'basis':'page-context','source':src,'verified':D,'quote':'September 2027','entryTerm':'Autumn','entryYear':'2027'}})
    if d['kind']=='scholarship' or d['dateISO']=='2027-01-31':
        d.update({'awardId':'international-scholars','awardCategory':'need'})
        d.pop('binding',None)
G.L('Admission application for this award','Заявка на поступление для этой стипендии')
G.save(h,records,t)
path=os.path.join(G.ROOT,'data/universities.us3.js')
h,records,t=G.load(path)
a=next(x for x in records if x['id']=='american-university')
a['scholarships']['fullRide'].update({'id':'au-egls','category':'need-merit','entryTerm':'Autumn','entryYear':'2027'})
G.save(h,records,t,path);G.flush()
