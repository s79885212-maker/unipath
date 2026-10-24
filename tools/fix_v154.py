# -*- coding: utf-8 -*-
"""Preserve the school-system and calendar scope of newly found evidence."""
import ca50_gaps as G
from ca50_gaps import L

D = '2026-10-24'
h, records, t = G.load()
u = {r['id']: r for r in records}
smu = u['saint-marys-university']
src = 'https://smu-ca-public.courseleaf.com/undergraduate/recruitment-admission-services/'
smu['academics']['sat'].update(G.plain({
    'policy': 'conditional',
    'label': L('SAT required for the American school system — 2026–27 calendar', 'SAT обязателен для американской школьной системы — календарь 2026–27'),
    'cycle': L('2026–2027 Academic Calendar; effective September 2026', 'Учебный календарь 2026–2027; действует с сентября 2026'),
    'note': L('The official calendar requires SAT results under American School System. This does not establish an ACT alternative, a minimum SAT score, an Uzbek-school rule or Fall 2027 policy. The general international recruitment page does not mention SAT; its omission does not override the calendar requirement.', 'Официальный календарь требует SAT в разделе American School System. Альтернатива ACT, минимум SAT, правило для узбекской школы и политика Fall 2027 не установлены. Общая международная страница не упоминает SAT; это не отменяет требование календаря.'),
    'source': src, 'verified': D}))
smu['academics']['act'].update(G.plain({
    'policy': None, 'source': src, 'verified': D,
    'note': L('The American School System section requires SAT results but does not establish ACT as an alternative. ACT policy remains unconfirmed.', 'Раздел American School System требует SAT, но не устанавливает ACT как альтернативу. Политика ACT остаётся неподтверждённой.')}))
G.source(smu, G.plain(L('Saint Mary’s — official 2026–27 admission calendar', 'Saint Mary’s — официальный календарь приёма 2026–27')), src)

brock = u['brock-university']
src = 'https://brocku.ca/university-secretariat/faculty-handbook/section-3/'
brock['academics']['sat'].update(G.plain({
    'policy': 'accepted',
    'label': L('SAT can support borderline US-diploma applications', 'SAT может помочь при пограничных результатах американского диплома'),
    'note': L('The current Faculty Handbook, section 3.3.3(c), says SAT scores help evaluate borderline US Grade 12 diploma applications. It does not state a general test-optional policy, an ACT alternative or a minimum score. The handbook names no 2027 intake; historical library calendars are not used to set current thresholds.', 'Текущий Faculty Handbook, раздел 3.3.3(c), допускает SAT для оценки пограничных заявок с американским Grade 12 diploma. Общая test-optional политика, альтернатива ACT и минимум не установлены. Набор 2027 не указан; старые библиотечные календари не используются для текущих порогов.'),
    'source': src, 'verified': D}))
brock['academics']['act'].update(G.plain({
    'policy': None, 'source': src, 'verified': D,
    'note': L('Section 3.3.3(c) describes SAT support for US-diploma applications only; ACT policy is not established.', 'Раздел 3.3.3(c) описывает помощь SAT для американского диплома; политика ACT не установлена.')}))
G.source(brock, G.plain(L('Brock — current Faculty Handbook, admission equivalencies', 'Brock — текущий Faculty Handbook, эквиваленты для поступления')), src)

mta = u['mount-allison-university']
src = 'https://mta.ca/admissions/admission-requirements'
mta['academics'].update(G.plain({
    'internationalQualifications': L('Uzbekistan / international / BSc / high-school selector: university-preparatory language arts plus generally four further preparatory courses; BSc requires pre-calculus. The result gives a 65% minimum in reviewed preparatory courses and individual country assessment, but names no accepted Uzbek credential, grade-scale conversion, required foundation or 2027 cycle. Official transcripts must come from the issuing institution, with notarized English translations when applicable.', 'Селектор Uzbekistan / International / BSc / High school: подготовительный школьный курс language arts и обычно ещё четыре предмета; BSc требует pre-calculus. Результат указывает минимум 65% по рассматриваемым подготовительным курсам и индивидуальную оценку страны, но не называет принимаемый узбекский документ, пересчёт шкалы, обязательную подготовку или цикл 2027. Официальные выписки направляет выдавшее учреждение; при необходимости нужны нотариальные английские переводы.'),
    'internationalQualificationsSource': src, 'internationalQualificationsVerified': D}))
G.source(mta, G.plain(L('Mount Allison — Uzbekistan / international / BSc selector result', 'Mount Allison — результат селектора Uzbekistan / International / BSc')), src)
G.save(h, records, t)

for en, ru in [
    ('Testing requirements depend on school system', 'Требования к тестам зависят от школьной системы'),
    ('Check the requirements for your school system and programme. A requirement for one route does not establish the policy for other routes.', 'Проверьте требования своей школьной системы и программы. Требование одного маршрута не устанавливает политику для остальных.'),
    ('Testing requirements depend on your school system and programme; see the scoped evidence in the profile.', 'Требования к тестам зависят от школьной системы и программы; область подтверждения указана в профиле.'),
    ('SAT/ACT — school-system requirements need individual checking', 'SAT/ACT — требования школьной системы нужно проверить отдельно')]:
    L(en, ru)
G.flush()
