# -*- coding: utf-8 -*-
"""v114 — audit of the field tags of the other 73 added records.

The official list of each record was read again on 13 October 2026 and compared
with its tags. A tag is taken off where the list shows the field only as a
pre-law advising track, a dual-degree route with other institutions, or a
graduate school — none of these is an undergraduate major of the institution.
Records whose full list of majors was never read are marked "partly read", so
that a field missing from them is shown as "not confirmed", not as "not offered".
Nothing is added here: a field is only ever added from a named programme."""
import us3_edit
from us200_std import L, flush

head, recs = us3_edit.load()
D = us3_edit.by_id(recs)

DROP = {
 'southern-methodist-university': (['law'], L('Law is not listed as a field: SMU’s list shows only a pre-law advising track, and the Dedman School of Law is a graduate school.', 'Право не указано как направление: в списке SMU есть только предюридический трек, а Dedman School of Law — магистерская и докторская школа.')),
 'seattle-university': (['law'], L('Law is not listed as a field: the law programmes on the university’s list are graduate degrees of its School of Law.', 'Право не указано как направление: юридические программы в списке университета — это степени его School of Law после бакалавриата.')),
 'willamette-university': (['law'], L('Law is not listed as a field: the College of Law is a graduate school.', 'Право не указано как направление: College of Law — школа после бакалавриата.')),
 'illinois-institute-of-technology': (['law'], L('Law is not listed as a field: the law programmes on the list are J.D. and LL.M. degrees of Chicago-Kent College of Law.', 'Право не указано как направление: юридические программы в списке — степени J.D. и LL.M. школы Chicago-Kent College of Law.')),
 'texas-a-and-m-university': (['law'], L('Law is not listed as a field: no undergraduate major in law was found on the page read; the School of Law is a graduate school.', 'Право не указано как направление: на прочитанной странице бакалаврской специальности по праву не найдено; School of Law — школа после бакалавриата.')),
 'santa-clara-university': (['law', 'education'], L('Law and education are not listed as fields: the tags had come from the names of Santa Clara’s schools, and no undergraduate major in either was confirmed on the pages read.', 'Право и образование не указаны как направления: метки были взяты из названий школ Santa Clara, а бакалаврских специальностей по ним на прочитанных страницах не подтверждено.')),
 'spelman-college': (['engineering'], L('Engineering is not listed as a field: Spelman’s list shows it only as a Dual Degree Engineering Program completed at a partner institution.', 'Инженерия не указана как направление: в списке Spelman она есть только как Dual Degree Engineering Program, которую заканчивают в партнёрском вузе.')),
 'morehouse-college': (['engineering'], L('Engineering is not listed as a field: Morehouse’s list shows it as dual-degree programmes with partner institutions. Its own Software Engineering major is counted under computer science.', 'Инженерия не указана как направление: в списке Morehouse это программы двойного диплома с партнёрскими вузами. Собственная специальность Software Engineering учтена в информатике.')),
 'washington-and-jefferson-college': (['engineering'], L('Engineering is not listed as a field: W&J’s list shows it as dual-degree programmes with other institutions.', 'Инженерия не указана как направление: в списке W&J это программы двойного диплома с другими вузами.')),
 'hobart-and-william-smith-colleges': (['medicine'], L('Health and medicine is not listed as a field: no health major appears on the colleges’ list of programmes.', 'Здоровье и медицина не указаны как направление: в списке программ колледжей нет специальности в этой области.')),
 'lake-forest-college': (['law'], L('Law is not listed as a field: Legal Studies appears in a combined list of majors and minors that does not say which it is, and Pre-Law is an advising programme.', 'Право не указано как направление: Legal Studies стоит в общем списке основных и дополнительных специальностей без указания, что это, а Pre-Law — программа консультирования.')),
}
import io, json, os, re
_ru = io.open(os.path.join(us3_edit.ROOT, 'data/i18n/ru.js'), encoding='utf-8').read()
def ru_of(en):
    """The Russian text ru.js already has for an English string."""
    m = re.search(r'(?m)^\s*%s:\s*("(?:[^"\\]|\\.)*")' % re.escape(json.dumps(en, ensure_ascii=False)), _ru)
    return json.loads(m.group(1)) if m else en
for uid, (tags, note) in DROP.items():
    r = D[uid]
    for t in tags:
        assert t in r['programs'], (uid, t)
        r['programs'] = [x for x in r['programs'] if x != t]
        r['englishTaughtPrograms'] = [x for x in r.get('englishTaughtPrograms', []) if x != t]
    old = r.get('programNote')
    r['programNote'] = L(old + ' ' + note, ru_of(old) + ' ' + note.ru) if old else note
print('tags taken off:', dict((k, v[0]) for k, v in DROP.items()))

partial = []
for r in recs:
    un = r['verification']['unconfirmed']
    if r.get('programsBasis') != 'evidence' and any(x in ('list of majors', 'full list of majors') for x in un) and r['programs'] and not r.get('programsStatus'):
        r['programsStatus'] = 'partial'; partial.append(r['id'])
print('marked as partly read:', partial)
us3_edit.save(head, recs)
flush()
