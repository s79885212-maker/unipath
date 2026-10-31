# -*- coding: utf-8 -*-
"""International entrance awards, batch 3 (Regina, Ontario Tech, TMU, Brock, Laurier, Trent,
Lakehead, UPEI, Acadia, StFX, Mount Allison), read on 27 October 2026 (Brock and StFX in a
browser: their static pages are refused to automated readers). Rules as in batch 1."""
import claude_v159 as C
from claude_v159 import L, G
from us200_std import not_described

h, rs, t = G.load()
R = lambda uid: C.rec(rs, uid)
D = C.DAY


def award(r, name):
    hits = [a for a in r['scholarships']['merit'] if a['name'] == name]
    assert len(hits) == 1, (r['id'], name)
    return hits[0]


def largest(r, en, ru, src):
    fr = r['scholarships']['fullRide']
    fr['note'] = G.plain(L(en, ru)); fr['source'] = src; fr['verified'] = D
    G.checked(r, 'scholarships')


def touch(r, *names):
    for n in names: award(r, n)['verified'] = D


# Regina -----------------------------------------------------------------------------
r = R('university-of-regina'); src = 'https://www.uregina.ca/ur-international/scholarships.html'
touch(r, 'International Entrance Scholarship', 'International Student of Distinction Scholarship', 'International Undergraduate Student Bursary')
C.register(r['id'], 'award: International Student of Distinction, Tier 1', src, 'International students selected for Tier 1 will be awarded on-campus housing and a meal plan which is valued at $90,000 over 4 years. This is not a tuition credit scholarship.')
largest(r, 'The highest-value award is the International Student of Distinction Scholarship, Tier 1: on-campus housing and a meal plan worth about C$90,000 over four years (Tier 2: housing, about C$45,000), automatic for applicants from high school with 90% or more. It is not a tuition credit. Tuition support is smaller: C$5,000 in the first term and a bursary of up to C$20,000 over four years. No award at the level of full tuition is described.',
        'Самая ценная награда — International Student of Distinction Scholarship, Tier 1: жильё в кампусе и план питания примерно на C$90,000 за четыре года (Tier 2 — жильё, около C$45,000), автоматически для поступающих из школы с 90% и выше. Это не скидка на обучение. Помощь с оплатой обучения меньше: C$5,000 в первом семестре и bursary до C$20,000 за четыре года. Награды уровня полной оплаты обучения не описано.', src)

# Ontario Tech ---------------------------------------------------------------------
r = R('ontario-tech-university'); src = 'https://safa.ontariotechu.ca/awards-bursaries-and-scholarships/undergraduate-student-finances/scholarships/scholarships-and-awards-for-international-students.php'
touch(r, 'International Merit Award', 'Global Leadership Award')
C.register(r['id'], 'award: Global Leadership Award', src, 'Valued at $120,000 CAD ($30,000 CAD a year for four years) … Canadian citizens and permanent residents are not eligible for the GLA. CLOSED FOR THE 2026-2027 ACADEMIC YEAR')
largest(r, 'Largest award open to international students: the Global Leadership Award, C$120,000 (C$30,000 a year for four years), by application from applicants studying outside Canada. The page marks it closed for 2026–2027 and does not yet state the 2027–28 competition. The automatic International Merit Award is C$20,000 over four years. No award at the level of full tuition is described.',
        'Крупнейшая награда для иностранцев — Global Leadership Award, C$120,000 (C$30,000 в год четыре года), по заявке для поступающих, обучающихся за пределами Канады. Страница отмечает её закрытой на 2026–2027 и пока не сообщает о конкурсе 2027–28. Автоматическая International Merit Award — C$20,000 за четыре года. Награды уровня полной оплаты обучения не описано.', src)

# TMU --------------------------------------------------------------------------------
r = R('toronto-metropolitan-university'); src = 'https://www.torontomu.ca/admissions/scholarships-awards/'
a = award(r, 'President’s Entrance Scholarships')
a.update(G.plain({'verified': D, 'eligibility': L('Twelve secondary school graduates with at least a 90% final admission average, leadership, original thought and creative ability; Canadian citizens, permanent residents, protected persons and international students may apply',
                                                  'Двенадцать выпускников школ со средним баллом не ниже 90%, лидерством, оригинальностью мышления и творческими способностями; подавать могут граждане Канады, постоянные жители, protected persons и иностранцы')}))
a = award(r, 'International Student Leadership Award (ISLA) – Fall 2027')
a.update(G.plain({'verified': D, 'amount': L('C$10,000, one time (up to 53 recipients)', 'C$10,000 однократно (до 53 получателей)')}))
C.register(r['id'], 'award: President’s Entrance Scholarships', src, 'Twelve (12) recipients | $40,000 CAD (total value) | $10,000 CAD (annual amount, renewable) … International Students are eligible to apply for this award.')
C.register(r['id'], 'award eligibility: Terence Grier Entrance Scholarship', src, 'One (1) recipient | Full tuition for first-year only (not renewable) … Canadian Citizens, Permanent Residents of Canada and Protected Persons in Canada are eligible to apply for this award.')
largest(r, 'Largest award open to international students: the President’s Entrance Scholarship, C$40,000 (C$10,000 a year, renewable), twelve recipients, by application on AwardSpring (16 February 2027 for Fall 2027). ISLA – Fall 2027 gives C$10,000 once to up to 53 international students. The full-tuition first-year Terence Grier award is for Canadian citizens, permanent residents and protected persons only.',
        'Крупнейшая награда для иностранцев — President’s Entrance Scholarship, C$40,000 (C$10,000 в год с продлением), двенадцать получателей, по заявке в AwardSpring (16 февраля 2027 для Fall 2027). ISLA – Fall 2027 даёт C$10,000 однократно до 53 иностранцам. Награда Terence Grier с полной оплатой первого года — только для граждан Канады, постоянных жителей и protected persons.', src)

# Brock ------------------------------------------------------------------------------
r = R('brock-university'); src = 'https://brocku.ca/safa/2026-international-students/'
touch(r, 'International Brock Scholars Award', 'Brock Future Leaders Scholarship')
C.register(r['id'], 'award (2026–27 table): International Brock Scholars Award', src, 'Our largest award is the Brock Scholars awards. … $32,000* 95.0% and above $20,000* $4,000** … Other awards available to incoming international students 2026-2027 academic year', '2026–2027 (previous cycle)')
largest(r, 'Brock calls the Brock Scholars awards its largest: on the 2026 page, the International Brock Scholars Award is up to C$32,000 over four years, automatic. That table is for the 2026–2027 year; no 2027 table was found (the 2027 page does not exist yet). No award at the level of full tuition is described.',
        'Brock называет Brock Scholars крупнейшими: на странице 2026 International Brock Scholars Award — до C$32,000 за четыре года, автоматически. Эта таблица — для 2026–2027 года; таблицы 2027 не найдено (страницы 2027 пока нет). Награды уровня полной оплаты обучения не описано.', src)

# Laurier ----------------------------------------------------------------------------
r = R('wilfrid-laurier-university'); src = 'https://www.wlu.ca/future-students/undergraduate/tuition-finances/entrance-scholarships.html'
a = award(r, 'Laurier international entrance scholarship')
a.update(G.plain({'verified': D, 'note': L('The grid is valid for students beginning in September 2027 and after. At 95% and above it is the President’s Gold Scholarship: C$6,000 a year for international students, renewable for four years with an annual GPA of 10.5 on at least 5.0 credits.',
                                           'Таблица действует для начинающих с сентября 2027 и позже. При 95% и выше это President’s Gold Scholarship: C$6,000 в год для иностранцев, продление на четыре года при годовом GPA 10.5 и не менее 5.0 кредитов.')}))
C.register(r['id'], 'award grid', src, 'This scholarship grid is valid for incoming students beginning in September 2027 and after. … The renewable scholarship amount is $4,000 (domestic) or $6,000 (international) per year for four years', 'September 2027')
largest(r, 'Largest award on the pages read: the President’s Gold Scholarship for an admission average of 95% or more, C$6,000 a year for international students, renewable for four years (grid valid from September 2027). No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — President’s Gold Scholarship при среднем балле 95% и выше, C$6,000 в год для иностранцев, с продлением на четыре года (таблица действует с сентября 2027). Награды уровня полной оплаты обучения не описано.', src)

# Trent ------------------------------------------------------------------------------
r = R('trent-university'); src = 'https://www.trentu.ca/international/discover-trent/tuition-scholarships/scholarships'
touch(r, 'Trent International Entrance Scholarship', 'Trent International Prestigious Scholarships and Awards')
C.register(r['id'], 'award: International Prestigious Scholarships', src, 'These awards are highly competitive and fund tuition and mandatory ancillary fees at Trent in amounts up to $15,000 per academic year, and up to $60,000 over a 4-year degree.')
largest(r, 'Largest awards open to international students: the International Prestigious Scholarships and Awards, up to C$15,000 a year (up to C$60,000 over four years) toward tuition and mandatory fees, by application (1 November–15 February each year). No award at the level of full tuition is described.',
        'Крупнейшие награды для иностранцев — International Prestigious Scholarships and Awards, до C$15,000 в год (до C$60,000 за четыре года) на обучение и обязательные сборы, по заявке (ежегодно с 1 ноября по 15 февраля). Награды уровня полной оплаты обучения не описано.', src)

# Lakehead ---------------------------------------------------------------------------
r = R('lakehead-university'); src = 'https://www.lakeheadu.ca/international/future/scholarships-awards'
touch(r, 'International Undergraduate Entrance Scholarships 2027-2028')
C.register(r['id'], 'award table 2027–28', src, '90.0%+ 35+ $40,000 ($10,000 x 4 years)1 Unlimited', '2027–2028')
largest(r, 'Largest award on the pages read: the International Undergraduate Entrance Scholarship for a 90%+ average (or IB 35+), C$40,000 (C$10,000 a year for four years), automatic and unlimited in number, 2027–2028 table. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — International Undergraduate Entrance Scholarship при среднем балле 90%+ (или IB 35+), C$40,000 (C$10,000 в год четыре года), автоматически и без ограничения числа, таблица 2027–2028. Награды уровня полной оплаты обучения не описано.', src)

# UPEI -------------------------------------------------------------------------------
r = R('university-of-prince-edward-island'); src = 'https://www.upei.ca/scholarships-and-awards/international-student-scholarships'
touch(r, 'UPEI International Entrance Award')
largest(r, 'The international entrance awards on the page read range from C$1,000 to C$3,000. No award at the level of full tuition is described.',
        'Вступительные награды для иностранцев на прочитанной странице — от C$1,000 до C$3,000. Награды уровня полной оплаты обучения не описано.', src)

# Acadia (terms from the earlier pass are kept) --------------------------------------
r = R('acadia-university')
largest(r, 'Largest awards on the pages read: additional entrance scholarships and scholar-bursaries of up to C$80,000 over four years, by forms in the status portal, with award-specific eligibility (some are only for students from Canadian or Nova Scotia schools). No award at the level of full tuition is described.',
        'Крупнейшие награды на прочитанных страницах — дополнительные вступительные стипендии и scholar-bursaries до C$80,000 за четыре года, по формам в status portal, с условиями каждой награды (часть — только для выпускников канадских или новошотландских школ). Награды уровня полной оплаты обучения не описано.',
        award(r, 'Acadia additional entrance scholarships and scholar-bursaries')['source'])

# StFX -------------------------------------------------------------------------------
r = R('st-francis-xavier-university'); src = 'https://www.stfx.ca/mckennascholars'
a = award(r, 'McKenna Scholars Program')
a.update(G.plain({'amount': L('C$125,000 (8 a year), C$40,000 (16) or C$20,000 (36), each over four years', 'C$125,000 (8 в год), C$40,000 (16) или C$20,000 (36), каждая за четыре года'),
    'application': L('Apply to StFX for Fall 2027, then the McKenna Scholars application (opens 1 December 2026), by 1 March 2027', 'Подать заявку в StFX на Fall 2027, затем заявку McKenna Scholars (открывается 1 декабря 2026) — до 1 марта 2027'),
    'internationalEligible': None,
    'note': L('The page read does not say whether international applicants are eligible.', 'Прочитанная страница не сообщает, могут ли участвовать иностранцы.'),
    'verified': D}))
C.register(r['id'], 'award: McKenna Scholars Program', src, 'McKenna National Scholars $125,000 8 awarded annually Valued over four years … Fall 2027 StFX applications open. … McKenna Scholars application deadline.', 'Fall 2027')
largest(r, 'The McKenna Scholars Program offers up to C$125,000 over four years (application 1 December 2026 – 1 March 2027), but the page does not say whether international students are eligible. National Entrance Scholarships of at least C$5,000 over four years go to admission averages of 85% or more. No award at the level of full tuition is described.',
        'McKenna Scholars Program даёт до C$125,000 за четыре года (заявка с 1 декабря 2026 по 1 марта 2027), но страница не сообщает, могут ли участвовать иностранцы. National Entrance Scholarships не менее C$5,000 за четыре года — при среднем балле 85% и выше. Награды уровня полной оплаты обучения не описано.', src)

# Mount Allison ----------------------------------------------------------------------
r = R('mount-allison-university'); src = 'https://mta.ca/costs-financial-aid/scholarships-and-awards-first-year-students'
a = award(r, 'Marjorie Young Bell Scholarship')
a.update(G.plain({'verified': D, 'note': L('Eight awards; renewal needs a 3.5 GPA on 30 credits a year and a yearly activities report. One reference letter and an essay are required by 1 March. The criteria name no citizenship limit; finalists not selected are offered the C$20,000 President’s Scholarship.',
                                           'Восемь наград; для продления нужен GPA 3.5 на 30 кредитах в год и ежегодный отчёт об активности. Одно рекомендательное письмо и эссе — до 1 марта. Критерии не ограничивают гражданство; финалистам, которые не прошли отбор, предлагают President’s Scholarship на C$20,000.')}))
touch(r, 'Mount Allison entrance scholarships', 'International Award')
C.register(r['id'], 'award: Marjorie Young Bell Scholarship', src, 'Value $70,000 ($17,500 per year) … Number offered 8 … Deadline Submit your application and supporting documents by March 1')
largest(r, 'Largest award on the pages read: the Marjorie Young Bell Scholarship, C$70,000 (C$17,500 a year), eight awards, with no citizenship limit in its criteria; reference and essay by 1 March. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — Marjorie Young Bell Scholarship, C$70,000 (C$17,500 в год), восемь наград, без ограничения гражданства в критериях; рекомендация и эссе — до 1 марта. Награды уровня полной оплаты обучения не описано.', src)

G.save(h, rs, t)
not_described(['university-of-regina', 'ontario-tech-university', 'toronto-metropolitan-university', 'brock-university',
               'wilfrid-laurier-university', 'trent-university', 'lakehead-university', 'university-of-prince-edward-island',
               'acadia-university', 'st-francis-xavier-university', 'mount-allison-university'])
C.flush_research()
