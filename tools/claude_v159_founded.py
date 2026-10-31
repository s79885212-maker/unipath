# -*- coding: utf-8 -*-
"""Founding years of the Canadian records (all were null), read on official history pages on
27 October 2026 (static HTML or the rendered page). `founded` is the year the university
itself gives for its founding or creation; where it later changed status, merged, became
autonomous or was renamed, the other dates are kept in the research register
(research/claude-v159-founded.md) for a proposed foundedNote field. UBC (archives behind a
browser verification), Alberta, Lakehead and Laurentian stay null: no founding sentence
was found on a readable official page."""
import io, os
import claude_v159 as C
from claude_v159 import G, L

h, rs, t = G.load()
ROWS = [
 ('university-of-toronto', 1827, 'https://www.utoronto.ca/about-u-of-t', 'Founded in 1827, the University of Toronto is consistently ranked as Canada’s top university.', 'Royal charter for King’s College, 1827; King’s College became the non-denominational University of Toronto in 1849–1850.'),
 ('mcgill-university', 1821, 'https://www.mcgill.ca/jms/mcgill-milestones/1821-1884', '1821 McGill College received a Royal Charter from King George IV, establishing it as a university.', 'Royal charter 1821; McGill College inaugurated in 1829.'),
 ('mcmaster-university', 1887, 'https://secretariat.mcmaster.ca/home/history-of-mcmaster-university/', 'the University was incorporated under the terms of an act of the Legislative Assembly of Ontario in 1887.', 'Incorporated in Toronto in 1887; moved to Hamilton in 1930.'),
 ('universite-de-montreal', 1919, 'https://secretariatgeneral.umontreal.ca/secretariat-general/histoire-de-luniversite/1878-1919-naissance-dune-universite/', 'ce n’est que le 8 mai 1919 que le Saint-Siège … commande que la succursale soit érigée en une « université autonome » qui portera dorénavant le nom d', 'Branch of Université Laval in Montréal from 1878; autonomous Université de Montréal from 8 May 1919 (civil charter 1920).'),
 ('university-of-waterloo', 1957, 'https://uwaterloo.ca/about/history', 'In 1957, innovation and entrepreneurship brought the University of Waterloo into being', 'Classes began in 1957; the University of Waterloo Act dates from 1959.'),
 ('western-university', 1878, 'https://mediarelations.uwo.ca/2012/01/26/western-draws-from-rich-history-with-new-visual-identity/', 'founded by Bishop Isaac Hellmuth as Western University of London Ontario in 1878.', 'Renamed The University of Western Ontario in 1923 and Western University in 2012.'),
 ('university-of-ottawa', 1848, 'https://www.uottawa.ca/about-us/administration-services/information-archives-management-service/history-uottawa', 'The College of Bytown was founded in 1848 by the Oblates of Mary Immaculate as a bilingual Catholic c', 'College of Bytown 1848; university status by royal charter 1866.'),
 ('university-of-calgary', 1966, 'https://www.ucalgary.ca/about-ucalgary/our-history', 'Their dedication was finally rewarded on April 29, 1966 when the University of Calgary was granted autonomy.', 'Earlier a branch of the University of Alberta; autonomous in 1966.'),
 ('queens-university', 1841, 'https://www.queensu.ca/encyclopedia/h/history-queens-overview', 'Queen\'s University was established on October 16, 1841 in a Royal Charter issued by Queen Victoria', 'Royal charter 1841; classes from 1842.'),
 ('dalhousie-university', 1818, 'https://www.dal.ca/about/our-story/history.html', 'Founded in 1818, Dalhousie has been delivering an exceptional education', 'Founded 1818; regular teaching from 1838 and revived under the Dalhousie Act of 1863.'),
 ('simon-fraser-university', 1965, 'https://www.sfu.ca/convocation/about/history.html', '18 months later on September 9, 1965, SFU opened to 2,500 charter students.', 'Approved by the legislature in 1963; opened in 1965.'),
 ('universite-laval', 1852, 'https://www.ulaval.ca/notre-universite/origine-et-histoire', 'Près de 200 ans plus tard, en 1852, cet établissement crée l\'Université Laval', 'Created in 1852 by the Séminaire de Québec, which was founded in 1663.'),
 ('university-of-saskatchewan', 1907, 'https://library.usask.ca/uasc/campus-history/brief-chronology.php', '1907 University of Saskatchewan created: University Act passed by the Legislative Assembly; receives royal assent 3 April', 'Classes began in 1909.'),
 ('university-of-manitoba', 1877, 'https://umanitoba.ca/about-um', 'Discover the story of UM—from our founding in 1877', None),
 ('university-of-guelph', 1964, 'https://www.uoguelph.ca/maps/locations/founding-of-ug', 'Fast forward to 1964, when the three founding colleges (Ontario Agricultural College, Ontario Veterina', 'Formed in 1964 from the Ontario Agricultural College (1874), the Ontario Veterinary College and the Macdonald Institute.'),
 ('carleton-university', 1942, 'https://carleton.ca/about/history/', 'Established in 1942 as Carleton College', 'Renamed Carleton University in 1957.'),
 ('york-university', 1959, 'https://www.yorku.ca/about/history/', 'Incorporated in 1959, York originally consisted of a residential college', None),
 ('concordia-university', 1974, 'https://www.concordia.ca/about/history.html', 'The university was officially founded on August 24, 1974, following the merger of Loyola College and Sir George Will', 'Merger of Loyola College and Sir George Williams University, whose roots go back to the 19th century.'),
 ('memorial-university-of-newfoundland', 1925, 'https://www.mun.ca/main/history/', 'In 1925, Memorial University College was founded', 'Memorial University College 1925; university status in 1949.'),
 ('university-of-new-brunswick', 1785, 'https://www.unb.ca/aboutunb/history/index.html', 'The Founders\' Petition of 1785', 'Petition for a charter in 1785; King’s College by 1829; provincial University of New Brunswick from 1859.'),
 ('university-of-windsor', 1962, 'https://www.uwindsor.ca/47/our-history', 'On December 19, 1962, the University of Windsor was incorporated by the Ontario Legislature, accepting Assumption University in Federation.', 'Its predecessor, Assumption College, received its first students in 1857; autonomous from 1 July 1963.'),
 ('university-of-regina', 1974, 'https://www.uregina.ca/about/index.html', 'Although our roots go back more than a century as Regina College, we became an independent, degree-granting university on July 1, 1974.', 'Regina College from 1911.'),
 ('ontario-tech-university', 2002, 'https://news.ontariotechu.ca/archives/2002/06/20020627_1.php', 'The University of Ontario Institute of Technology - the newest university to be created in Canada - is now a legal entity, thanks to passage of Bill 109', 'Classes began in 2003.'),
 ('toronto-metropolitan-university', 1948, 'https://www.torontomu.ca/about/history/', 'In 1948, the Ryerson Institute of Technology was founded', 'University status 1993; renamed Toronto Metropolitan University in 2022.'),
 ('brock-university', 1964, 'https://brocku.ca/about/history/', 'After years of meetings and fundraising, Brock opened in September 1964.', None),
 ('wilfrid-laurier-university', 1911, 'https://www.wlu.ca/about/index.html', 'Laurier traces its roots to the opening of the Evangelical Lutheran Seminary in Waterloo more than 100 years ago in 1911.', 'Wilfrid Laurier University under this name since 1973.'),
 ('trent-university', 1964, 'https://www.trentu.ca/about/', 'Founded in 1964, Trent University is one of Canada’s top undergraduate univ', 'Incorporated by an Act of 1963; opened in 1964.'),
 ('university-of-prince-edward-island', 1969, 'https://www.upei.ca/about-upei', 'the University of Prince Edward Island was established in 1969', 'Formed from Prince of Wales College and Saint Dunstan’s University.'),
 ('acadia-university', 1838, 'https://www2.acadiau.ca/about-acadia/history.html', 'Acadia was founded in 1838 by local Baptists', 'Acadia University under this name from 1891.'),
 ('st-francis-xavier-university', 1853, 'https://www.alumni.stfx.ca/s/650/17/interior.aspx?pgid=264&gid=1&cid=5111', 'Founded in 1853 by the Diocese of Antigonish', 'Full university powers in 1866.'),
 ('mount-allison-university', 1839, 'https://mta.ca/about/key-facts-and-history', 'Mount Allison traces its roots to 1839 when Sackville merchant Charles Frederick Allison proposed', 'Academy opened 1843; degree-granting college from 1862.'),
 ('saint-marys-university', 1802, 'https://www.smu.ca/about/history.html', 'Saint Mary\'s traces its earliest beginnings to 1802', 'College recognised by the legislature in 1841; university from 1952.'),
 ('bishops-university', 1843, 'https://www.ubishops.ca/about-bu/historical-timeline/1843-1853/', 'Bishop’s College opened in 1843', 'Royal charter and university status in 1853.'),
 ('university-of-lethbridge', 1967, 'https://www.ulethbridge.ca/president/university-historical-highlights', '1967 The University of Lethbridge commences operations, with Faculties of Arts and Science and Education.', None),
 ('university-of-winnipeg', 1967, 'https://www.uwinnipeg.ca/about/history.html', 'The University of Winnipeg received its charter in 1967 but its roots date back more than 145 years.', 'Founding colleges: Manitoba College (1871) and Wesley College (1888).'),
 ('mount-saint-vincent-university', 1873, 'https://www.msvu.ca/about-msvu/university-profile/tradition-and-history/', 'Established in 1873 by the Sisters of Charity of Saint Vincent de Paul, Halifax', 'Degree-granting charter 1925; university name from 1966.'),
 ('mount-royal-university', 1910, 'https://www.mtroyal.ca/AboutMountRoyal/FastFacts/History/index.htm', 'since our 1910 founding', 'University status in 2009.'),
 ('thompson-rivers-university', 1970, 'https://www.tru.ca/gaglardi/about/school-history.html', 'Thompson Rivers University (TRU) was founded in 1970 as Cariboo College', 'University under the Thompson Rivers University Act, 2005.'),
 ('university-of-northern-british-columbia', 1990, 'https://www.unbc.ca/about-unbc/history', 'It was in June 1990 that the members of the BC legislative assembly passed the UNBC Act, officially creating UNBC.', None),
 ('vancouver-island-university', 1936, 'https://www.viu.ca/about', 'VIU started out as the Dominion-Provincial Youth Training Centre in 1936.', 'Malaspina College 1969, Malaspina University-College 1989, Vancouver Island University 2008.'),
 ('university-of-the-fraser-valley', 1974, 'https://www.ufv.ca/about/ufv-history/', '1974 - 1975 » Fraser Valley College (FVC) founded', 'University status in 2008.'),
 ('capilano-university', 1968, 'https://www.capilanou.ca/about-capu/get-to-know-us/our-history/', 'Capilano University was founded as a college in 1968', 'University status in 2008.'),
 ('universite-du-quebec-a-montreal', 1969, 'https://uqam.ca/information/historique/', 'L’Université du Québec à Montréal (UQAM) est créée le 9 avril 1969 par le gouvernement du Québec', None),
 ('universite-de-sherbrooke', 1954, 'https://www.usherbrooke.ca/decouvrir/a-propos/notre-histoire', 'L\'Université de Sherbrooke a été créée le 4 mai 1954.', 'Grew out of the Séminaire Saint-Charles-Borromée.'),
 ('universite-de-moncton', 1963, 'https://www.umoncton.ca/notreumoncton/historique', 'Fondée en 1963, l’Université de Moncton regroupe trois campus', None),
 ('university-of-victoria', 1963, 'https://www.uvic.ca/about-uvic/about-the-university/index.php', 'The university received degree-granting status in 1963. The origins of UVic, however, can be traced back to 1903', 'Victoria College, its predecessor, from 1903.'),
]
NULL = [('university-of-british-columbia', 'The UBC Archives history pages ask for a browser verification, which was not bypassed; the About page says “Since 1915” (the year teaching began), which is not a founding statement.'),
        ('university-of-alberta', 'No founding sentence was found on the readable official pages (the former alumni history pages return 404).'),
        ('lakehead-university', 'The official timeline lists 1946 (Lakehead Technical Institute) and 1965 events but no founding statement for the university.'),
        ('laurentian-university', 'The official history page read gives no founding sentence.')]

md = ['# Founding years — official sources read 2026-10-27', '',
      '`founded` holds the year the university itself gives. Other dates (status, merger, renaming, autonomy) are listed here for a proposed optional `foundedNote` field; the site shows only one number today.', '',
      '| Record | founded | Other dates | Source (quote) |', '|---|---|---|---|']
for uid, year, url, quote, other in ROWS:
    r = C.rec(rs, uid)
    r['founded'] = year
    G.source(r, str(L('History and founding year', 'История и год основания')), url)
    G.checked(r, 'founding year')
    C.register(uid, 'founded', url, quote)
    md.append('| %s | %d | %s | [%s](%s) |' % (uid, year, other or '—', quote.replace('|', '/'), url))
md += ['', '## Not filled', '']
for uid, why in NULL:
    md.append('- %s — %s' % (uid, why))
io.open(os.path.join(C.ROOT, 'research/claude-v159-founded.md'), 'w', encoding='utf-8').write('\n'.join(md) + '\n')
G.save(h, rs, t)
C.flush_research()
