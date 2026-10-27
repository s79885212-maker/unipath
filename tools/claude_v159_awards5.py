# -*- coding: utf-8 -*-
"""International entrance awards, batch 5 (Capilano, Laurentian, UQAM, Sherbrooke, Moncton,
UVic), read on 27 October 2026. Rules as in batch 1. Moncton's award page did not render
its amounts for the reader used, so its earlier entry is not re-dated."""
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


r = R('capilano-university'); src = 'https://www.capilanou.ca/admissions/fees--finances/financial-aid--awards/funding-for-international-students/'
award(r, 'International Entrance & Performance Award (IEPA)')['verified'] = D
C.register(r['id'], 'award deadline: IEPA Fall 2027', src, 'Fall 2027 term Complete application by November 30, 2026 Pay the Tuition Deposit by Dec 4, 2026', 'Fall 2027')
largest(r, 'Largest award on the page read: the International Entrance & Performance Award, a tuition discount of C$1,800 a semester for 12 credits, up to C$18,000 over a four-year degree; for Fall 2027 the application must be complete by 30 November 2026 and the deposit paid by 4 December 2026. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанной странице — International Entrance & Performance Award, скидка C$1,800 за семестр при 12 кредитах, до C$18,000 за четырёхлетнюю программу; для Fall 2027 заявка должна быть полной до 30 ноября 2026, депозит — до 4 декабря 2026. Награды уровня полной оплаты обучения не описано.', src)

r = R('laurentian-university'); src = 'https://laurentian.ca/academics/international/scholarships'
a = award(r, 'Laurentian International Academic Excellence Scholarships')
a.update(G.plain({'verified': D, 'note': L('C$15,000 in the first year at 90–100% (up to C$60,000) or C$10,000 at 80–89.9% (up to C$40,000); renewable for at most three more years while the average is kept. Automatic, no separate application.',
                                           'C$15,000 в первый год при 90–100% (до C$60,000) или C$10,000 при 80–89.9% (до C$40,000); продление не более чем на три года при сохранении среднего балла. Автоматически, без отдельной заявки.')}))
C.register(r['id'], 'award: International Academic Excellence Scholarships', src, '90% to 100%* Up to $60,000 in scholarship awards $15,000 in first year, renewable in subsequent years provided average is maintained.')
largest(r, 'Largest award on the pages read: the International Academic Excellence Scholarship, up to C$60,000 (C$15,000 a year) for an average of 90% or more, automatic. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — International Academic Excellence Scholarship, до C$60,000 (C$15,000 в год) при среднем балле 90% и выше, автоматически. Награды уровня полной оплаты обучения не описано.', src)

r = R('universite-du-quebec-a-montreal'); src = 'https://etudier.uqam.ca/etudiants-internationaux/bourses'
award(r, 'Partial exemption of the increased tuition (international agreements)')['verified'] = D
largest(r, 'The page read names an institutional scholarship programme for international students at the master’s level, doctoral support and UQAM Foundation awards, but no bachelor’s entrance award with an amount. The exemption from the increased tuition depends on Quebec’s agreements with the student’s country. No award at the level of full tuition is described.',
        'Прочитанная страница называет институциональную программу стипендий для иностранцев на уровне магистратуры, поддержку докторантов и награды Fondation de l’UQAM, но не вступительную награду для бакалавриата с суммой. Освобождение от повышенной платы зависит от соглашений Квебека со страной студента. Награды уровня полной оплаты обучения не описано.', src)

r = R('universite-de-sherbrooke'); src = 'https://www.usherbrooke.ca/admission/couts-et-aide-financiere/bourses-et-aide-financiere/etudiants-internationaux'
award(r, 'Exemption from supplementary tuition (Quebec agreements)')['verified'] = D
largest(r, 'For international students the page points to government and external programmes, the USherbrooke International involvement award and research scholarships; no bachelor’s entrance award with an amount is described. The exemption from supplementary tuition is limited to nationals of countries with a Quebec agreement. No award at the level of full tuition is described.',
        'Для иностранцев страница указывает государственные и внешние программы, награду за участие USherbrooke International и исследовательские стипендии; вступительной награды для бакалавриата с суммой не описано. Освобождение от дополнительной платы — только для граждан стран, имеющих соглашение с Квебеком. Награды уровня полной оплаты обучения не описано.', src)

r = R('universite-de-moncton')
largest(r, 'The award page was re-opened on 27 October 2026 but its amounts did not display for the reader used, so the entry read on 17 October (Bourse de mérite scolaire, C$4,000–C$5,000 over the degree, more with a higher average) is not re-confirmed. The largest award cannot be named from this check.',
        'Страница наград открыта повторно 27 октября 2026, но суммы не отобразились, поэтому запись от 17 октября (Bourse de mérite scolaire, C$4,000–C$5,000 за программу, больше при более высоком среднем балле) не подтверждена заново. Назвать крупнейшую награду по этой проверке нельзя.', 'https://www.umoncton.ca/bourses')

r = R('university-of-victoria'); src = 'https://www.uvic.ca/safa/scholarships/entrance-scholarships/index.php'
award(r, 'UVic international entrance scholarship')['verified'] = D
C.register(r['id'], 'award table 2027–28', src, 'Scholarship figures shown below are for the 2027-2028 academic year. … International student A- or equivalent $15,000 (one-time)', '2027–2028')
largest(r, 'Largest award on the page read: the international entrance scholarship, C$15,000 once for an A- average or equivalent (2027–2028 figures), automatic. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанной странице — вступительная стипендия для иностранцев, C$15,000 однократно при среднем A- или эквиваленте (суммы 2027–2028), автоматически. Награды уровня полной оплаты обучения не описано.', src)

G.save(h, rs, t)
not_described(['capilano-university', 'laurentian-university', 'universite-du-quebec-a-montreal', 'universite-de-sherbrooke', 'university-of-victoria'])
C.flush_research()
