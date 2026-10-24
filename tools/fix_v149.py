# -*- coding: utf-8 -*-
"""Complete directory-destination audit, preserve unresolved Uzbek requirements."""
import io,json,os
import ca50_gaps as G
from ca50_gaps import L
D='2026-10-24'
h, records, t=G.load();u={r['id']:r for r in records}
evidence=json.load(io.open(os.path.join(G.ROOT,'research/2026-10-24-catalogues.json'),encoding='utf8'))
for e in evidence:
    r=u[e['id']]
    r['links']['programs']=e['url']
    if e['url']:G.source(r,G.plain(L('Official programme directory','Официальный каталог программ')),e['url'])
    elif 'official programme directory' not in r['verification']['unconfirmed']:
        r['verification']['unconfirmed'].append('official programme directory')

src='https://www.usherbrooke.ca/admission/da/valider-admissibilite/equivalences-internationales'
guide='https://www.usherbrooke.ca/admission/fileadmin/sites/admission/documents/admission/Reconnaissances_internationales/Guide-des-niveaux-de-formation-Mars2022.pdf'
r=u['universite-de-sherbrooke']
r['academics'].update(G.plain({
    'internationalQualifications':L('Uzbekistan: current UdeS general guidance requires 13 years of appropriate schooling for bachelor’s entry. Engineering applicants outside the Quebec college system need the UdeS preparatory certificate or equivalent. Its linked March 2022 guide has a Uzbekistan sheet last updated in 2006: it lists two additional university years after the 11-year O’rta Ma’lumot To’g’risida Shahodatnoma. That historical sheet does not confirm how a modern Uzbek qualification will be assessed for 2027; exact grades, subjects and any required preparation remain unconfirmed.', 'Узбекистан: текущие общие правила UdeS требуют 13 лет соответствующего образования для бакалавриата. Для инженерии вне квебекской системы колледжей нужен подготовительный сертификат UdeS или эквивалент. Связанный справочник марта 2022 содержит узбекскую памятку с последним обновлением в 2006: два дополнительных университетских года после 11-летнего O’rta Ma’lumot To’g’risida Shahodatnoma. Эта историческая памятка не подтверждает оценку современного узбекского документа на 2027; точные оценки, предметы и необходимая подготовка остаются неподтверждёнными.'),
    'internationalQualificationsSource':src,'internationalQualificationsVerified':D}))
G.source(r,G.plain(L('UdeS — international equivalencies','UdeS — международные эквиваленты')),src)
G.source(r,G.plain(L('UdeS — linked March 2022 guide; Uzbekistan sheet updated in 2006','UdeS — связанный справочник марта 2022; узбекская памятка обновлена в 2006')),guide)
pending={
'mcmaster-university':'https://future.mcmaster.ca/apply/curriculum-requirements/',
'queens-university':'https://www.queensu.ca/admission/applying/admission-requirements',
'simon-fraser-university':'https://www.sfu.ca/students/admission/admission-requirements/international-highschool.html',
'university-of-saskatchewan':'https://admissions.usask.ca/requirements/deadlines.php',
'university-of-windsor':'https://future.uwindsor.ca/apply-international',
'university-of-regina':'https://www.uregina.ca/admissions/application-guide/index.html',
'wilfrid-laurier-university':'https://www.wlu.ca/future-students/undergraduate/admissions/requirements/international.html',
'university-of-prince-edward-island':'https://www.upei.ca/admission-requirements/country-specific-requirements',
'st-francis-xavier-university':'https://www.stfx.ca/applications-admissions/admissions-information/admission-requirements/high-school',
'mount-allison-university':'https://mta.ca/admissions/admission-requirements',
'bishops-university':'https://www.ubishops.ca/admissions/admission-requirements/international-high-school-students/',
'university-of-lethbridge':'https://www.ulethbridge.ca/ross/admissions/undergrad/international/intreq_table',
'mount-saint-vincent-university':'https://www.msvu.ca/future-students/admission-requirements/international-students/',
'thompson-rivers-university':'https://www.tru.ca/future/admissions/international/admission-requirements.html',
'university-of-the-fraser-valley':'https://international.ufv.ca/future-students/apply-to-ufv/admission-requirements/',
'universite-du-quebec-a-montreal':'https://etudier.uqam.ca/etudiants-internationaux',
'universite-de-moncton':'https://www.umoncton.ca/conditions'
}
note=L('Uzbekistan-specific qualifications, grades, programme subjects and preparatory-study requirements remain unconfirmed after this review. The linked official general requirements do not establish an exact Uzbek qualification or a rule for 2027 entry; requirements for another country or school system are not substituted.', 'Точные узбекские квалификации, оценки, предметы программы и требования подготовки после этой проверки остаются неподтверждёнными. Связанные официальные общие требования не устанавливают точный узбекский документ или правило набора 2027; условия другой страны или школьной системы не подставляются.')
for uid,src in pending.items():
    r=u[uid]
    assert not r['academics']['internationalQualifications'] or uid in ('university-of-prince-edward-island','bishops-university'),uid
    # Keep Bishop's existing scoped evaluation note. Remove the unrelated
    # Russian grade from UPEI's Uzbek field; it is not an Uzbek requirement.
    if uid != 'bishops-university':r['academics']['internationalQualifications']=G.plain(note)
    r['academics'].update({'internationalQualificationsSource':src,'internationalQualificationsVerified':D})
    G.source(r,G.plain(L('General requirements reviewed — Uzbekistan-specific rule unresolved','Общие требования проверены — точные условия для Узбекистана не установлены')),src)
G.save(h,records,t);G.flush()
