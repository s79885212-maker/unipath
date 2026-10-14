# -*- coding: utf-8 -*-
"""v118 — named programmes behind the field tags of more added records.

Same rule as v117: every tag is backed by one named undergraduate programme
read in the institution's official list on 14 October 2026, with the page it
was read on. Where the list does not say whether an entry is a major, the
programme's own page was read (Providence, Lake Forest). A tag is taken off,
with the reason kept as a field note, where the field exists only as a minor
or a page about courses. Graduate, accelerated, certificate and dual-degree
entries were not used. Admission rules of individual programmes were not
checked.

Where a whole list was read for the first time (records whose tags had come
from the names of schools or from one page), fields found in it are added,
each with its named programme. Lists drawn by a script were read in an
ordinary browser window or through the institution's catalogue; no check was
passed or bypassed. Fairfield's list stayed behind a browser check and is
left as it was."""
import io, json, os, re
import us3_edit
from us200_std import L, flush

V = '2026-10-14'
ORDER = ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'law', 'medicine', 'education']

# The list read, where it differs from the link the record had.
LIST = {
 'loyola-university-chicago': 'https://www.luc.edu/undergrad/academiclife/majorsminors/',
}

PC = 'https://academics.providence.edu/majors-and-minors/'
EV = {
 'elmira-college': {'business': 'Business Administration', 'psychology': 'Psychology', 'biology': 'Biology', 'social-sciences': 'Sociology & Anthropology',
   'humanities': 'History', 'arts': 'Theatre', 'education': 'Education', 'medicine': 'Nursing'},
 'hobart-and-william-smith-colleges': {'business': 'Business Management and Entrepreneurship', 'economics': 'Economics', 'computer-science': 'Computer Science',
   'biology': 'Biology', 'mathematics': 'Mathematics', 'social-sciences': 'Politics', 'humanities': 'History', 'arts': 'Art: Studio Art', 'education': 'Educational Studies'},
 'occidental-college': {'economics': ('Economics', 'https://www.oxy.edu/academics/areas-study/economics'),
   'computer-science': ('Computer Science', 'https://www.oxy.edu/academics/areas-study/computer-science'),
   'psychology': ('Psychology', 'https://www.oxy.edu/academics/areas-study/psychology'),
   'biology': ('Biology', 'https://www.oxy.edu/academics/areas-study/biology'),
   'mathematics': ('Mathematics', 'https://www.oxy.edu/academics/areas-study/mathematics'),
   'social-sciences': ('Politics', 'https://www.oxy.edu/academics/areas-study/politics'),
   'humanities': ('History', 'https://www.oxy.edu/academics/areas-study/history'),
   'arts': ('Art & Art History', 'https://www.oxy.edu/academics/areas-study/art-art-history')},
 'westminster-college-pennsylvania': {
   'business': ('Business Administration', 'https://www.westminster.edu/academics/schools/business/majors.cfm#business-admin'),
   'computer-science': ('Computer Science', 'https://www.westminster.edu/academics/schools/physical-mathematical/math-cs/majors.cfm#computer-science'),
   'engineering': ('Engineering Physics', 'https://www.westminster.edu/academics/schools/physical-mathematical/physics/majors.cfm#engineering-physics'),
   'psychology': ('Psychology', 'https://www.westminster.edu/academics/schools/social-sciences/psychology/majors.cfm#psych'),
   'biology': ('Biology', 'https://www.westminster.edu/academics/schools/life-health/biology/majors.cfm#biology'),
   'social-sciences': ('Political Science', 'https://www.westminster.edu/academics/schools/social-sciences/political-science/majors.cfm#political-science'),
   'humanities': ('History', 'https://www.westminster.edu/academics/schools/arts-humanities/history/majors.cfm#history'),
   'arts': ('Music', 'https://www.westminster.edu/academics/schools/music/majors.cfm#music'),
   'education': ('Education, Early Childhood & Special Ed', 'https://www.westminster.edu/academics/schools/education/majors.cfm#early-childhood')},
 'providence-college': {'business': ('Accountancy', 'https://business.providence.edu/accountancy/'),
   'economics': ('Bachelor of Arts in Economics', 'https://economics.providence.edu/'),
   'computer-science': ('Computer Science', 'https://mathematics-computer-science.providence.edu/'),
   'biology': ('B.A. Biology', 'https://biology.providence.edu/'),
   'social-sciences': ('Political Science', 'https://political-science.providence.edu/'),
   'humanities': ('History', 'https://history.providence.edu/'),
   'arts': ('Bachelor of Arts in Art History', 'https://art.providence.edu/'),
   'education': ('B.A. Elementary/Special Education', 'https://elementary-special-education.providence.edu/')},
 'illinois-wesleyan-university': {'business': ('Business', 'https://www.iwu.edu/business-economics/academics/business.html'),
   'economics': ('Economics', 'https://www.iwu.edu/business-economics/academics/economics.html'),
   'computer-science': ('Computer Science', 'https://www.iwu.edu/computer-science/'),
   'psychology': ('Psychology', 'https://www.iwu.edu/psychology/'), 'biology': ('Biology', 'https://www.iwu.edu/biology/'),
   'mathematics': ('Mathematics', 'https://www.iwu.edu/math/'), 'social-sciences': ('Political Science', 'https://www.iwu.edu/political-science/'),
   'humanities': ('History', 'https://www.iwu.edu/history/'), 'arts': ('Art, BA', 'https://www.iwu.edu/art/courses/ba.html'),
   'medicine': ('Nursing, BSN', 'https://www.iwu.edu/nursing-health-sciences/academics/nursing.html'),
   'education': ('Educational Studies', 'https://www.iwu.edu/educational-studies/')},
 'lake-forest-college': dict((t, (n, 'https://www.lakeforest.edu/academics/majors-and-minors/' + p)) for t, n, p in [
   ('business', 'Business', 'business'), ('economics', 'Economics', 'economics-x28019'), ('computer-science', 'Computer Science', 'computer-science'),
   ('psychology', 'Psychology', 'psychology'), ('biology', 'Biology', 'biology'), ('mathematics', 'Mathematics', 'mathematics'),
   ('social-sciences', 'Politics', 'politics'), ('humanities', 'History', 'history'), ('arts', 'Art and Art History', 'art-and-art-history'),
   ('education', 'Education', 'education')]),
 'southern-methodist-university': {
   'business': ('Accounting', 'https://www.smu.edu/cox/business-degrees/undergraduate/bachelor-business-administration/curriculum/majors/accounting'),
   'economics': 'Economics', 'computer-science': 'Computer Science', 'engineering': 'Mechanical Engineering', 'psychology': 'Psychology',
   'biology': 'Biological Sciences', 'mathematics': 'Mathematics', 'social-sciences': 'Political Science', 'humanities': 'History',
   'arts': 'Film and Media Arts – B.F.A.', 'education': 'Educational Studies'},
 'loyola-university-chicago': {'business': 'Accounting (BBA)', 'economics': 'Economics (BA)', 'computer-science': 'Computer Science (BS)',
   'psychology': 'Psychology (BS)', 'biology': 'Biology (BS)', 'mathematics': 'Mathematics (BS)', 'social-sciences': 'Political Science (BA)',
   'humanities': 'History (BA)', 'medicine': 'Nursing (BSN)', 'education': 'Elementary Education (BSEd)'},
}
NOTE = {
 'westminster-college-pennsylvania': L('Engineering at Westminster is the Engineering Physics major: physics with engineering courses. A separate engineering degree is earned only through the 3+2 programme with Case Western Reserve University.',
   'Инженерия в Westminster — это специальность Engineering Physics: физика с инженерными курсами. Отдельную инженерную степень получают только по программе 3+2 с Case Western Reserve University.'),
 'lake-forest-college': L('Education is a teacher-preparation major taken together with a second major.', 'Образование — специальность подготовки учителей, которую изучают вместе со второй специальностью.'),
}
# Notes written before the list was read; replaced now.
RENOTE = {
 'lake-forest-college': L('Law is not listed as a field: Legal Studies is a minor, as its page says, and Pre-Law is an advising programme.',
   'Право не указано как направление: Legal Studies — дополнительная специальность, как сказано на её странице, а Pre-Law — программа консультирования.'),
}
DROPS = {
 'occidental-college': {'business': ('not-listed', L(
   '“Business at Oxy” is a page about business-related courses: Occidental has no business major, and its Economics major allows business-related electives.',
   '«Business at Oxy» — страница о курсах, связанных с бизнесом: специальности по бизнесу в Occidental нет, а специальность Economics позволяет брать такие курсы по выбору.'))},
}

# ---- second part: lists drawn by a script, read in the browser or through their catalogues
TAMU = 'https://catalog.tamu.edu/undergraduate/'
WU = 'https://catalog.willamette.edu/programs/'
UMN = 'https://majors.umn.edu/major/'
SMART = 'https://lesley.smartcatalogiq.com/en/2025-2026-ac-catalog_student-handbook/2025-2026-academic-catalog/programs-of-study/'
DPU = 'https://catalog.depaul.edu/programs/'
ITH = 'https://www.ithaca.edu/academics/'
END = 'https://www.endicott.edu/academics/schools/'
LIST.update({
 'ithaca-college': 'https://www.ithaca.edu/academics/majors-minors',
 'xavier-university-of-louisiana': 'https://catalog.xula.edu/content.php?catoid=46&navoid=2520',
 'university-of-washington': 'https://admit.washington.edu/academics/majors/',
 'santa-clara-university': 'https://www.scu.edu/academics/undergraduate-programs/',
 'texas-a-and-m-university': 'https://catalog.tamu.edu/programs/',
 'depaul-university': 'https://catalog.depaul.edu/programs/',
 'willamette-university': 'https://catalog.willamette.edu/programs',
 'bentley-university': 'https://www.bentley.edu/academics/undergraduate-programs/majors',
 'xavier-university': 'https://www.xavier.edu/academics/programs',
 'muhlenberg-college': 'https://www.muhlenberg.edu/academics/program-finder/',
 'villanova-university': 'https://www.villanova.edu/university/programs.html',
 'university-of-iowa': 'https://admissions.uiowa.edu/academics/undergraduate-areas-of-study',
 'lesley-university': 'https://lesley.edu/academics',
 'the-new-school': 'https://www.newschool.edu/academics/undergraduate',
 'savannah-college-of-art-and-design': 'https://www.scad.edu/academics/programs',
})
EV.update({
 'seattle-university': {'business': 'Accounting, BABA', 'economics': 'Economics, BA', 'engineering': 'Mechanical Engineering, BS',
   'social-sciences': 'Political Science, BA', 'arts': 'Music, BM & BA', 'medicine': 'Nursing, BS'},
 'ithaca-college': {'business': ('Accounting', ITH + 'school-business/undergraduate-majors'),
   'arts': ('Music Performance', ITH + 'school-music-theatre-and-dance/undergraduate-majors-and-minors'),
   'medicine': ('Health Sciences (B.S.)', ITH + 'school-health-sciences-and-human-performance/undergraduate-majors'),
   'economics': ('Economics (B.A., B.S.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'computer-science': ('Computer Science (B.A., B.S.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'psychology': ('Psychology (B.A.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'biology': ('Biology (B.A., B.S.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'mathematics': ('Mathematics (B.A., B.S.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'social-sciences': ('Politics (B.A.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'humanities': ('History (B.A.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'law': ('Legal Studies (B.A.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors'),
   'education': ('Education Studies (B.A.)', ITH + 'school-humanities-and-sciences/academics/undergraduate-majors-minors')},
 'xavier-university-of-louisiana': {'business': 'Business, B.S. (with concentration in Management)', 'computer-science': 'Computer Science, B.S.',
   'engineering': 'Robotics and Mechatronics Engineering, B.S.', 'psychology': 'Psychological Science, B.S.', 'biology': 'Biology, B.S.',
   'mathematics': 'Mathematics, B.S.', 'social-sciences': 'Political Science, B.A.', 'humanities': 'History, B.A.', 'arts': 'Art, B.A.',
   'medicine': 'Public Health Sciences, B.S.', 'education': 'Elementary Education (Grades 1-5), B.A.'},
 'university-of-washington': {'business': 'Business Administration', 'economics': 'Economics', 'computer-science': 'Computer Science',
   'engineering': 'Mechanical Engineering', 'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics',
   'social-sciences': 'Political Science', 'humanities': 'History', 'arts': 'Art', 'law': 'Law, Societies & Justice',
   'medicine': 'Nursing', 'education': 'Education Studies'},
 'santa-clara-university': {'business': 'Accounting', 'economics': 'Economics', 'computer-science': 'Computer Science', 'engineering': 'Mechanical Engineering',
   'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics', 'social-sciences': 'Political Science', 'humanities': 'History',
   'arts': 'Studio Art', 'medicine': 'Public Health Science'},
 'texas-a-and-m-university': dict((t, (n, TAMU + u)) for t, n, u in [
   ('business', 'Accounting - BBA', 'business/accounting/bba/'), ('economics', 'Economics - BA', 'arts-and-sciences/economics/ba/'),
   ('computer-science', 'Computer Science - BS', 'engineering/computer-science/bs/'), ('engineering', 'Mechanical Engineering - BS', 'engineering/mechanical/bs/'),
   ('psychology', 'Psychology - BA', 'arts-and-sciences/psychological-and-brain-sciences/psychology-ba/'), ('biology', 'Biology - BS', 'arts-and-sciences/biology/bs/'),
   ('mathematics', 'Mathematics - BS', 'arts-and-sciences/mathematics/bs/'), ('social-sciences', 'Political Science - BA', 'government-public-service/political-science/political-science-ba/'),
   ('humanities', 'History - BA', 'arts-and-sciences/history/ba/'), ('arts', 'Music Performance - BFA', 'performance-visualization-fine-arts/music-performance-bfa/'),
   ('law', 'Society, Ethics, and Law - BA', 'arts-and-sciences/philosophy/society-ethics-law-ba/'), ('medicine', 'Nursing - BSN, Traditional BSN Track', 'nursing/bsn/'),
   ('education', 'Education - BS, Pre-K-6, Generalist Certification', 'education-human-development/teaching-learning-culture/education-bs-prek-6-generalist/')]),
 'ursinus-college': {'business': 'Business Administration (major)', 'economics': 'Economics (major)', 'computer-science': 'Computer Science (major)',
   'psychology': 'Psychology (major)', 'biology': 'Biology (major)', 'mathematics': 'Mathematics (major)', 'social-sciences': 'Politics (major)',
   'humanities': 'History (major)', 'arts': 'Theater (major)', 'medicine': 'Public Health (major)', 'education': 'Educational Studies (major)'},
 'anderson-university-indiana': {'business': 'Accounting (major)', 'computer-science': 'Computer Science (major)', 'engineering': 'Mechanical Engineering (major)',
   'psychology': 'Psychology (major)', 'biology': 'Biology (major)', 'mathematics': 'Mathematics (major)', 'social-sciences': 'Political Science (major)',
   'humanities': 'History (major)', 'arts': 'Music (major)', 'medicine': 'Nursing (major)', 'education': 'Elementary Education (major)'},
 'depaul-university': dict((t, (n, DPU + u + '/')) for t, n, u in [
   ('business', 'Finance (BSB)', 'finance-bsb'), ('economics', 'Economics (BA)', 'economics-ba'), ('computer-science', 'Computer Science (BS)', 'computer-science-bs'),
   ('psychology', 'Psychology (BA)', 'psychology-ba'), ('biology', 'Biological Sciences (BS)', 'biological-sciences-bs'),
   ('mathematics', 'Mathematical Sciences (BS)', 'mathematical-sciences-bs'), ('social-sciences', 'Political Science (BA)', 'political-science-ba'),
   ('humanities', 'History (BA)', 'history-ba'), ('arts', 'Music Performance (BM)', 'music-performance-bm'), ('medicine', 'Nursing (BSN)', 'nursing-bsn'),
   ('education', 'Elementary Education (BS)', 'elementary-education-bs')]),
 'willamette-university': dict((t, (n, WU + c)) for t, n, c in [
   ('business', 'Business Administration (BS)', 'BS.BUS'), ('economics', 'Economics (BA)', 'BA.ECON'), ('computer-science', 'Computer Science (BS)', 'BS.CS'),
   ('engineering', 'Industrial Engineering and Operations Research (BS)', 'BS.IEOR'), ('psychology', 'Psychology (BA)', 'BA.PSYC'),
   ('biology', 'Biology (BS)', 'BS.BIOL'), ('mathematics', 'Mathematics (BA)', 'BA.MATH'), ('social-sciences', 'Sociology (BA)', 'BA.SOC'),
   ('humanities', 'History (BA)', 'BA.HIST'), ('arts', 'Studio Art (BA)', 'BA.ARTS')]),
 'umass-amherst': dict((t, (n, u)) for t, n, u in [
   ('business', 'Accounting (B.B.A.)', 'https://www.isenberg.umass.edu/programs/depts/accounting'),
   ('economics', 'Economics (B.A.)', 'https://www.umass.edu/social-sciences/academics/economics'),
   ('computer-science', 'Computer Science (B.A., B.S.)', 'https://www.cics.umass.edu/'),
   ('engineering', 'Mechanical Engineering (B.S.)', 'https://www.umass.edu/engineering/academics/mechanical-engineering'),
   ('psychology', 'Psychology (B.A., B.S.)', 'https://www.umass.edu/psychological-brain-sciences'),
   ('biology', 'Biology (B.A., B.S.)', 'https://www.umass.edu/natural-sciences/academics/biology'),
   ('mathematics', 'Mathematics (B.A., B.S.)', 'https://www.umass.edu/natural-sciences/academics/mathematics'),
   ('social-sciences', 'Political Science (B.A.)', 'https://umass.edu/social-sciences/academics/political-science'),
   ('humanities', 'History (B.A.)', 'https://www.umass.edu/humanities-arts/academics/history'),
   ('arts', 'Art (B.A., B.F.A.)', 'https://www.umass.edu/humanities-arts/academics/art'),
   ('law', 'Legal Studies (B.A.)', 'https://www.umass.edu/social-sciences/academics/legal-studies'),
   ('medicine', 'Nursing (B.S.)', 'https://www.umass.edu/nursing/academics'),
   ('education', 'Education (B.A.)', 'https://www.umass.edu/education/academics/')]),
 'university-of-minnesota-twin-cities': dict((t, (n, UMN + u)) for t, n, u in [
   ('business', 'Accounting', 'accounting'), ('economics', 'Economics', 'economics'), ('computer-science', 'Computer Science (B.S.)', 'computer-science-bs'),
   ('engineering', 'Mechanical Engineering', 'mechanical-engineering'), ('psychology', 'Psychology', 'psychology'), ('biology', 'Biology', 'biology'),
   ('mathematics', 'Mathematics (B.S.)', 'mathematics-bs'), ('social-sciences', 'Political Science', 'political-science'), ('humanities', 'History', 'history'),
   ('arts', 'Art', 'art'), ('medicine', 'Nursing', 'nursing'), ('education', 'Elementary Education Foundations', 'elementary-education-foundations')]),
 'endicott-college': dict((t, (n, END + u + '/undergraduate-programs')) for t, n, u in [
   ('business', 'Business Management Program (BS)', 'business'), ('computer-science', 'Computer Science Program (BS)', 'science-technology'),
   ('engineering', 'Engineering Program (BS)', 'science-technology'), ('psychology', 'Psychology Program (BS)', 'social-sciences-communication-humanities'),
   ('biology', 'Biology and Biotechnology Program (BS)', 'science-technology'), ('mathematics', 'Applied Mathematics Program (BS)', 'science-technology'),
   ('social-sciences', 'Political Science Program (BS)', 'social-sciences-communication-humanities'),
   ('humanities', 'History Program (BA)', 'social-sciences-communication-humanities'), ('arts', 'Studio Art Program (BFA)', 'visual-performing-arts'),
   ('education', 'Education: Elementary Teacher Licensure Concentration (BA)', 'school-of-education'), ('medicine', 'Nursing Program (BS)', 'nursing')]),
 'allegheny-college': {'business': 'Business (major)', 'economics': 'Economics (major)', 'computer-science': 'Computer Science (major)',
   'engineering': 'Engineering Physics (major)', 'psychology': 'Psychology (major)', 'biology': 'Biology (major)', 'mathematics': 'Mathematics (major)',
   'social-sciences': 'Political Science (major)', 'humanities': 'History (major)', 'arts': 'Art (Studio) (major)'},
 'bentley-university': {'business': 'Accounting', 'economics': 'Economics-Finance', 'psychology': 'Psychology', 'mathematics': 'Mathematical Sciences',
   'social-sciences': 'Public Policy', 'humanities': 'History', 'arts': 'Film and Media Studies'},
 'xavier-university': dict((t, (n, 'https://www.xavier.edu/' + u + '/index')) for t, n, u in [
   ('business', 'Accounting', 'accounting'), ('economics', 'Economics (BA)', 'economics-ba'), ('computer-science', 'Computer Science', 'computer-science'),
   ('psychology', 'Psychology', 'psychology'), ('biology', 'Biology', 'biology'), ('mathematics', 'Mathematics', 'mathematics'),
   ('social-sciences', 'Political Science', 'political-science'), ('humanities', 'History', 'history'), ('arts', 'Art', 'art'), ('medicine', 'Nursing', 'nursing')]),
 'muhlenberg-college': {'business': 'Business Administration (major)', 'economics': 'Economics (major)', 'computer-science': 'Computer Science (major)',
   'psychology': 'Psychology (major)', 'biology': 'Biology (major)', 'mathematics': 'Mathematics (major)', 'social-sciences': 'Political Science (major)',
   'humanities': 'History (major)', 'arts': 'Theatre (major)', 'medicine': 'Public Health (major)', 'education': 'Elementary Education (major)'},
 'villanova-university': {'business': 'Accounting', 'economics': 'Economics (BA)', 'computer-science': 'Computer Science', 'engineering': 'Mechanical Engineering',
   'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics', 'social-sciences': 'Political Science', 'humanities': 'History',
   'arts': 'Art History', 'medicine': 'Nursing (BSN)', 'education': 'Education'},
 'university-of-iowa': {'business': 'Accounting BBA', 'economics': 'Economics BA, BS', 'computer-science': 'Computer Science BA, BS',
   'engineering': 'Mechanical Engineering BSE', 'psychology': 'Psychology BA, BS', 'biology': 'Biology BA, BS', 'mathematics': 'Mathematics BA, BS',
   'social-sciences': 'Political Science BA, BS', 'humanities': 'History BA', 'arts': 'Art BA, BFA', 'medicine': 'Nursing BSN', 'education': 'Elementary Education BA'},
 'lesley-university': dict((t, (n, SMART + u)) for t, n, u in [
   ('business', 'Business (Bachelor of Science)', 'liberal-arts-and-business/majors/business-bachelor-of-science'),
   ('psychology', 'Psychology (Bachelor of Arts)', 'mental-health-and-well-being/majors/psychology-bachelor-of-arts'),
   ('biology', 'Biology (Bachelor of Arts)', 'liberal-arts-and-business/majors/biology-bachelor-of-arts-4748-credits-plus-6-credits-internship'),
   ('mathematics', 'Mathematics (Bachelor of Arts)', 'liberal-arts-and-business/majors/mathematics-bachelor-of-arts-3536-credits-plus-6-credits-internship'),
   ('humanities', 'History (Bachelor of Arts)', 'liberal-arts-and-business/majors/history-bachelor-of-arts-36-credits'),
   ('arts', 'Studio Arts (Bachelor of Fine Arts)', 'art-and-design/majors/studio-arts-bachelor-of-fine-arts'),
   ('education', 'Elementary Teacher (Bachelor of Science)', 'education/majors/elementary-teacher-bachelor-of-science')]),
 'the-new-school': {'business': 'Strategic Design and Management (BBA)', 'economics': 'Economics (BA)', 'psychology': 'Psychology (BA)',
   'social-sciences': 'Politics (BA)', 'humanities': 'Literary Studies (BA)', 'arts': 'Fine Arts (BFA)'},
 'savannah-college-of-art-and-design': {'arts': ('Painting (B.F.A.)', 'https://www.scad.edu/academics/programs/painting'),
   'humanities': ('Art History (B.F.A.)', 'https://www.scad.edu/academics/programs/art-history')},
})
RENOTE.update({
 'ithaca-college': L('From the lists of undergraduate majors of four of Ithaca’s five schools; the list of the Roy H. Park School of Communications was not read.',
   'Из списков специальностей бакалавриата четырёх из пяти школ Ithaca; список Roy H. Park School of Communications не читался.'),
 'xavier-university-of-louisiana': L('From the University Catalog 2025–2026, the newest edition listed in the catalogue on 14 October 2026.',
   'Из каталога университета на 2025–2026 — самого нового издания в списке каталогов на 14 октября 2026.'),
 'university-of-washington': L('From the list of majors on the admissions site. Most of these majors are capacity-constrained: admission to the university does not guarantee a place in the major, which has its own requirements and selective screening.',
   'Из списка специальностей на сайте приёма. Большинство этих специальностей — с ограниченным набором: поступление в университет не гарантирует места на специальности, у которой свои требования и конкурсный отбор.'),
 'santa-clara-university': L('From the university’s list of undergraduate majors. Law and education are not listed as fields: that list has an undergraduate major in neither.',
   'Из списка специальностей бакалавриата университета. Право и образование не указаны как направления: в этом списке нет бакалаврской специальности ни по одному из них.'),
 'texas-a-and-m-university': L('From the Texas A&M University Undergraduate Catalog 2026–2027. Law: “Society, Ethics, and Law” is a bachelor’s degree in the philosophy department; the School of Law itself is a graduate school.',
   'Из каталога бакалавриата Texas A&M University на 2026–2027. Право: «Society, Ethics, and Law» — степень бакалавра кафедры философии; сама School of Law — школа после бакалавриата.'),
 'willamette-university': L('From the Willamette University Catalog 2026–2027. The record covers the College of Arts & Sciences in Salem, not the Pacific Northwest College of Art in Portland. Law is not listed as a field: the College of Law is a graduate school.',
   'Из каталога Willamette University на 2026–2027. Запись относится к College of Arts & Sciences в Сейлеме, а не к Pacific Northwest College of Art в Портленде. Право не указано как направление: College of Law — школа после бакалавриата.'),
 'umass-amherst': L('From the university’s programme finder, filtered to undergraduate programmes, which names the degrees of each.',
   'Из каталога программ университета с фильтром «бакалавриат», где у каждой программы названы степени.'),
 'bentley-university': L('From Bentley’s list of undergraduate majors (business majors and arts and sciences majors).',
   'Из списка специальностей бакалавриата Bentley (бизнес-специальности и специальности arts and sciences).'),
 'xavier-university': None,
 'muhlenberg-college': None,
 'villanova-university': L('From the university’s list of programmes, read with its “bachelor’s” marking; part-time programmes of the College of Professional Studies are not used.',
   'Из списка программ университета с пометкой «бакалавриат»; программы College of Professional Studies для обучения с частичной занятостью не использовались.'),
 'university-of-iowa': None,
 'the-new-school': L('From the university’s list of undergraduate majors across its colleges (Parsons, Lang, the College of Performing Arts and others). History is offered only as a minor.',
   'Из списка специальностей бакалавриата всех колледжей университета (Parsons, Lang, College of Performing Arts и другие). История есть только как дополнительная специальность.'),
 'lesley-university': L('From the 2025–2026 Academic Catalog that the university’s programme pages link to.',
   'Из каталога 2025–2026, на который ссылаются страницы программ университета.'),
})
NOTE.update({
 'allegheny-college': L('Engineering at Allegheny is the Engineering Physics major. Software Engineering is a separate major; several other “engineering” entries on the list are microcredentials.',
   'Инженерия в Allegheny — это специальность Engineering Physics. Software Engineering — отдельная специальность; несколько других позиций с «engineering» в списке — микроквалификации.'),
})

_ru = io.open(os.path.join(us3_edit.ROOT, 'data/i18n/ru.js'), encoding='utf-8').read()
def ru_of(en):
    """The Russian text ru.js already has for an English string."""
    m = re.search(r'(?m)^\s*%s:\s*("(?:[^"\\]|\\.)*")' % re.escape(json.dumps(en, ensure_ascii=False)), _ru)
    assert m, en
    return json.loads(m.group(1))

head, recs = us3_edit.load()
D = us3_edit.by_id(recs)
added = {}
for uid, ev in EV.items():
    r = D[uid]
    url = LIST.get(uid, r['links']['programs'])
    drops = DROPS.get(uid, {})
    old = [t for t in r['programs'] if t != 'other']
    assert set(old) <= set(ev) | set(drops), (uid, set(old) - (set(ev) | set(drops)))
    if set(ev) - set(old): added[uid] = sorted(set(ev) - set(old))
    tags = [t for t in ORDER if t in ev]
    r['programs'] = tags
    r['englishTaughtPrograms'] = list(tags)      # the language of instruction of these institutions is English
    r['programsBasis'] = 'evidence'
    r.pop('programsStatus', None)
    r['programEvidence'] = {}
    for t in tags:
        name, u = ev[t] if isinstance(ev[t], tuple) else (ev[t], url)
        r['programEvidence'][t] = {'program': name, 'level': 'bachelor', 'language': 'English', 'url': u, 'checked': V}
    if drops:
        r['fieldNotes'] = dict((t, {'kind': k, 'note': n, 'url': url, 'checked': V}) for t, (k, n) in drops.items())
    if uid in RENOTE:
        r['programNote'] = RENOTE[uid]
    if uid in NOTE:
        prev = r.get('programNote')
        r['programNote'] = L(prev + ' ' + NOTE[uid], (prev.ru if hasattr(prev, 'ru') else ru_of(prev)) + ' ' + NOTE[uid].ru) if prev else NOTE[uid]
    r['links']['programs'] = url
    ver = r['verification']
    ver['unconfirmed'] = [x for x in ver['unconfirmed'] if x not in ('list of majors', 'full list of majors')]
    if 'list of majors' not in ver['checked']: ver['checked'].append(L('list of majors', 'список программ'))
    lab = L('%s — official list of undergraduate programmes' % r['shortName'], '%s — официальный список программ бакалавриата' % r['shortName'])
    if not any(s['url'] == url for s in r['sources']): r['sources'].append({'label': lab, 'url': url})

# Fairfield: the list of majors stayed behind a browser check, so its tags (the schools named on the
# tuition page) are marked as resting on part of the information only.
f = D['fairfield-university']
f['programsStatus'] = 'partial'
if 'full list of majors' not in f['verification']['unconfirmed']:
    f['verification']['unconfirmed'].append(L('full list of majors', 'полный список специальностей'))
fn = L('The list of majors could not be read: on 14 October 2026 the page stayed behind a browser check, which was not bypassed.',
       'Список специальностей прочитать не удалось: 14 октября 2026 страница не открылась дальше проверки браузера, а обходить её не стали.')
f['programNote'] = L(f['programNote'] + ' ' + fn, ru_of(f['programNote']) + ' ' + fn.ru)

us3_edit.save(head, recs)
left = [r['id'] for r in recs if r['programs'] and r.get('programsBasis') not in ('evidence', 'concentrations', 'transfer')]
print('fields added from named programmes:', added)
print('evidence for %d more records; still from keyword matching (%d): %s' % (len(EV), len(left), left))
flush()
