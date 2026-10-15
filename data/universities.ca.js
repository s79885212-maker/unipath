/* ============================================================
   Canada — 50 universities (October 2026).
   Written by tools/ca50.py and the batch files tools/ca50_b*.py
   from the official pages listed in each record; a field those
   pages do not state stays null. Amounts are Canadian dollars.
   ============================================================ */
window.UNIPATH.universities.push(

{
  "id": "university-of-toronto",
  "name": "University of Toronto",
  "shortName": "U of T",
  "country": "ca",
  "city": "Toronto",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#6b1d4f",
    "c2": "#360f28",
    "initials": "T"
  },
  "description": "Canada’s largest university, with three campuses — St. George in downtown Toronto, Mississauga and Scarborough — under one application. Undergraduates apply to a faculty or campus area and choose a programme of study after first year in most of Arts & Science.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.utoronto.ca/",
    "admissions": "https://future.utoronto.ca/how-to-apply",
    "internationalAdmissions": "https://future.utoronto.ca/requirements-international-high-schools",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://future.utoronto.ca/scholarships-international-students",
    "financialAid": "https://future.utoronto.ca/international-student-financial-aid",
    "programs": "https://future.utoronto.ca/deadlines",
    "cost": "https://future.utoronto.ca/fees"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)",
      "Join U of T applicant portal (Engineering Applicant Portal for engineering)"
    ],
    "deadlines": [
      {
        "name": "Recommended early application date",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-07",
        "date": "7 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Recommended for most faculties and both suburban campuses; documents available by then are encouraged by 1 December.",
        "status": "confirmed",
        "source": "https://future.utoronto.ca/deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline (most programmes)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Applied Science & Engineering, Architecture, Arts & Science (St. George), Information, Kinesiology & Physical Education, Music, U of T Mississauga and U of T Scarborough.",
        "status": "confirmed",
        "source": "https://future.utoronto.ca/deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Supporting documents (most programmes)",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Engineering documents are due 15 January 2027. Supplementary applications for Rotman Commerce, Computer Science and Architecture are also due 1 February.",
        "status": "confirmed",
        "source": "https://future.utoronto.ca/deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Pearson Scholarship: apply for admission",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-10-16",
        "date": "16 October 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Only for students their school has nominated (nominations closed on 9 October 2026).",
        "status": "confirmed",
        "source": "https://future.utoronto.ca/pearson-scholarships",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Pearson Scholarship application and documents",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-06",
        "date": "6 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://future.utoronto.ca/pearson-scholarships",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$98 for U of T, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application, then documents on the Join U of T portal",
      "Secondary school transcripts and final results",
      "English test result unless exempt",
      "Supplementary application for some programmes (Rotman Commerce, Computer Science, Architecture, Music, Kinesiology)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "No band below 6.0. IELTS for UKVI accepted; IELTS Indicator and One Skill Retake are not. All bands from one test date."
    },
    "toefl": {
      "min": 89,
      "recommended": null,
      "note": "Tests before 21 January 2026: 89, with 22 in Speaking and Writing. Tests from 21 January 2026 (1–6 scale): 4.5, with 4.5 in Writing and 4.0 in Speaking. MyBest scores are not used.",
      "scales": [
        {
          "period": "pre2026",
          "min": 89,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "For tests on or after 1 July 2024: 120 overall and 120 in Production."
    },
    "waiver": "Four or more years of full-time study in a Canadian school, or in an English-language school in a country where English is the dominant language.",
    "note": "PTE Academic 65 with no part below 60; CAEL 70 with no part below 60; Cambridge C1/C2 180 with 170 in each part."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Applicants who have written the SAT or ACT may submit scores to have them considered. Engineering applicants must disclose all test scores.",
      "source": "https://future.utoronto.ca/requirements-international-high-schools",
      "verified": "2026-10-15"
    },
    "act": {
      "policy": "optional",
      "note": "Applicants who have written the SAT or ACT may submit scores to have them considered. Engineering applicants must disclose all test scores.",
      "source": "https://future.utoronto.ca/requirements-international-high-schools",
      "verified": "2026-10-15"
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Diploma of Academic Lyceum (Akademik Litsey Diplomi) or Certificate of General Secondary Education."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only. Incidental and ancillary fees, the University Health Insurance Plan (UHIP), housing, food and books are extra",
      "tuition": 66110
    },
    "academicYear": "2026–2027 (approved); 2027–2028 planned",
    "currency": "CAD",
    "studentCategory": "International students entering a direct-entry bachelor’s programme",
    "source": "https://planningandbudget.utoronto.ca/wp-content/uploads/2026/04/2026-27-Tuition-Fee-Report_FINAL.pdf",
    "verified": "2026-10-15",
    "headline": "C$66,110–C$72,860 tuition a year (2026–27)",
    "items": [
      {
        "label": "Tuition, Arts & Science (all three campuses), students entering in 2026",
        "amount": 66110
      },
      {
        "label": "Tuition, Applied Science & Engineering, students entering in 2026",
        "amount": 72860
      },
      {
        "label": "Tuition, Music, 2026–27",
        "amount": 50490
      },
      {
        "label": "Tuition, Arts & Science, students entering in 2027 (planned, for information only)",
        "amount": 68750
      },
      {
        "label": "Tuition, Applied Science & Engineering, students entering in 2027 (planned, for information only)",
        "amount": 75770
      }
    ],
    "billedSubtotal": null,
    "totalText": "Tuition only: C$66,110 (Arts & Science) to C$72,860 (Engineering) for students who entered in 2026; the planned figures for 2027 entry are C$68,750 and C$75,770",
    "note": "U of T publishes its schedules as a PDF report (dated 1 March 2026). The 2027–28 figures are labelled “for information only” and “subject to change”. Computer Science students pay the Arts & Science fee in year 1 and a higher programme fee later. The university suggests C$1,000–C$2,000 a year for books and supplies, and requires UHIP of international students."
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "merit",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": null,
        "insurance": null,
        "books": true
      },
      "renewable": true,
      "competitiveness": "About 37 scholars a year; a school may nominate one student",
      "howToApply": "Nomination by your secondary school (by 9 October 2026), then admission application by 16 October and scholarship application by 6 November 2026",
      "name": "Lester B. Pearson International Scholarship",
      "source": "https://future.utoronto.ca/pearson-scholarships",
      "verified": "2026-10-15",
      "note": "Covers tuition, books, incidental fees and full residence support for four years, for international students starting in September 2027 who are in their final year of school in 2026–27 or graduated no earlier than June 2026. For this cycle the nomination deadline has passed. The page’s FAQ still shows the previous cycle’s dates."
    },
    "merit": [
      {
        "name": "Arts & Science Global Scholarship",
        "amount": "Equal to international tuition, incidental and UHIP fees for four years; residence not included",
        "eligibility": "Selected outstanding international students admitted to the Faculty of Arts & Science",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Offered on the basis of merit; financial need may be considered.",
        "basis": "need-merit",
        "source": "https://future.utoronto.ca/scholarships-international-students",
        "verified": "2026-10-15"
      },
      {
        "name": "Arts & Science International Undergraduate Entrance Award",
        "amount": "Shown in the applicant portal; first year only",
        "eligibility": "Selected international students admitted to Arts & Science",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": null,
        "basis": "merit",
        "source": "https://future.utoronto.ca/scholarships-international-students",
        "verified": "2026-10-15"
      },
      {
        "name": "U of T Engineering International Scholarships",
        "amount": null,
        "eligibility": "International applicants to Engineering",
        "deadline": null,
        "application": "Complete the Financial Information section of the Engineering Supplemental Application by 15 January",
        "renewable": null,
        "note": "The amount and the selection basis are not stated on the page read.",
        "basis": "unknown",
        "source": "https://future.utoronto.ca/scholarships-international-students",
        "verified": "2026-10-15"
      },
      {
        "name": "President’s Scholars of Excellence Program",
        "amount": null,
        "eligibility": "About 150 of the most highly qualified direct-entry applicants, domestic and international",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://future.utoronto.ca/scholarships-international-students",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "U of T states that, as a publicly funded institution, it cannot offer financial aid to international students; its scholarships are competitive and most do not cover full tuition.",
      "source": "https://future.utoronto.ca/fees",
      "verified": "2026-10-15"
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "U of T — 2027 deadlines",
      "url": "https://future.utoronto.ca/deadlines"
    },
    {
      "label": "U of T — English language requirements",
      "url": "https://future.utoronto.ca/english-language-requirements"
    },
    {
      "label": "U of T — international high school requirements",
      "url": "https://future.utoronto.ca/requirements-international-high-schools"
    },
    {
      "label": "U of T — Tuition Fee Schedules 2026-27 (PDF)",
      "url": "https://planningandbudget.utoronto.ca/wp-content/uploads/2026/04/2026-27-Tuition-Fee-Report_FINAL.pdf"
    },
    {
      "label": "U of T — scholarships for international students",
      "url": "https://future.utoronto.ca/scholarships-international-students"
    },
    {
      "label": "U of T — Pearson International Scholarship",
      "url": "https://future.utoronto.ca/pearson-scholarships"
    },
    {
      "label": "OUAC — undergraduate fees",
      "url": "https://www.ouac.on.ca/guide/undergrad-fees"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English requirements",
      "test policy",
      "tuition",
      "scholarships"
    ],
    "unconfirmed": [
      "full list of majors",
      "residence and UHIP amounts",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "U of T",
    "UofT",
    "UTSG",
    "UTM",
    "UTSC",
    "University of Toronto Mississauga",
    "University of Toronto Scarborough"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "campuses": [
    "St. George (downtown Toronto)",
    "Mississauga",
    "Scarborough"
  ],
  "programEvidence": {
    "business": {
      "program": "Rotman Commerce (Faculty of Arts & Science, St. George)",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.utoronto.ca/deadlines",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computer Science (Faculty of Arts & Science, St. George)",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.utoronto.ca/deadlines",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Applied Science & Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.utoronto.ca/deadlines",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Music (Faculty of Music)",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.utoronto.ca/deadlines",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "university-of-british-columbia",
  "name": "University of British Columbia",
  "shortName": "UBC",
  "country": "ca",
  "city": "Vancouver",
  "region": "British Columbia",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#1f3a5f",
    "c2": "#0f1f33",
    "initials": "BC"
  },
  "description": "One university with two campuses — Vancouver and the Okanagan campus in Kelowna — applied to through EducationPlannerBC. Fees and some awards differ by campus; the tuition shown here is for Vancouver.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.ubc.ca/",
    "admissions": "https://you.ubc.ca/applying-ubc/how-to-apply/application/",
    "internationalAdmissions": "https://you.ubc.ca/applying-ubc/requirements/international-high-schools/",
    "applicationPortal": "https://www.educationplannerbc.ca/",
    "scholarships": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
    "financialAid": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/",
    "programs": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
    "cost": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees"
  },
  "admissions": {
    "platforms": [
      "EducationPlannerBC"
    ],
    "deadlines": [
      {
        "name": "Application and award application for the International Scholars Program",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "time": "23:59",
        "timezone": "PT",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Requires a school nomination and a teacher reference; for applicants with significant financial need.",
        "status": "confirmed",
        "source": "https://you.ubc.ca/applying-ubc/dates-deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "time": "23:59",
        "timezone": "PT",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Winter Session September 2027 to April 2028. Applying by this date also brings automatic consideration for merit awards.",
        "status": "confirmed",
        "source": "https://you.ubc.ca/applying-ubc/dates-deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Documents and English for International Scholars applicants",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-31",
        "date": "31 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://you.ubc.ca/applying-ubc/dates-deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Proof of English Language Admission Standard",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://you.ubc.ca/applying-ubc/dates-deadlines/",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 173.25,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable, for applicants who need a study permit (C$78.50 for Canadians). Some degrees add their own fee.",
      "source": "https://you.ubc.ca/applying-ubc/how-to-apply/application/",
      "verified": "2026-10-15"
    },
    "documents": [
      "EducationPlannerBC application",
      "Personal profile questions",
      "Secondary school transcripts",
      "English test result unless exempt",
      "Portfolio, audition or supplemental application for some degrees"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "No part below 6.0. IELTS General, Indicator and One Skill Retake are not accepted."
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "note": "1–6 scale: overall 4.5 with Reading 4.5, Listening 5, Writing 4.5, Speaking 4. The page read gives no 0–120 figure.",
      "scales": [
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 125,
      "recommended": null,
      "note": "Reading 115, Listening 115, Writing 120, Speaking 120."
    },
    "waiver": null,
    "note": "PTE Academic 65 with 60 in each part; Cambridge 180."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": null,
      "note": "Not checked: the requirement finder by country did not show a test policy on the pages read."
    },
    "act": {
      "policy": null,
      "note": "Not checked: the requirement finder by country did not show a test policy on the pages read."
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Uzbekistan is not in UBC’s country list; the page refers applicants from unlisted countries to its basic requirements."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only. Student fees, health insurance, housing, food and books are extra",
      "tuition": 51530.4
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International students starting in 2026, Vancouver campus, first-year full course load",
    "source": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
    "verified": "2026-10-15",
    "headline": "C$48,780–C$66,678 tuition a year (2026–27)",
    "items": [
      {
        "label": "Tuition, Arts (30 credits)",
        "amount": 51530.4
      },
      {
        "label": "Tuition, Science or Computer Science (30 credits)",
        "amount": 53082.0
      },
      {
        "label": "Tuition, Applied Science – Engineering (37 credits)",
        "amount": 66199.66
      },
      {
        "label": "Tuition, Commerce — Sauder (30 credits)",
        "amount": 66678.3
      },
      {
        "label": "Tuition, Music (34 credits)",
        "amount": 48779.8
      }
    ],
    "billedSubtotal": null,
    "totalText": "Tuition only: from C$48,779.80 (Music) to C$66,678.30 (Commerce) for a first-year full course load",
    "note": "Approved by the Board of Governors on 4 December 2025. For international students who start in 2026/27, tuition rises by no more than 3% a year for the next four years. The 2027/28 rates are not yet published."
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Nominated applicants with significant financial need and leadership",
      "howToApply": "School nomination, then award application by 15 November 2026",
      "name": "International Scholars Program (Karen McKellin International Leader of Tomorrow Award; Donald A. Wehrung International Student Award)",
      "source": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/",
      "verified": "2026-10-15",
      "note": "UBC says these awards “range in value up to the full cost of a student’s academic program and living expenses” and are set by the financial need it assesses. Applicants are considered either for these need-based awards or for the merit awards, not both."
    },
    "merit": [
      {
        "name": "International Major Entrance Scholarship (IMES)",
        "amount": "C$10,000–C$25,000 a year (2026/27)",
        "eligibility": "New international students entering from secondary school on a study permit, not nominated for International Scholars",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Renewable for up to three more years. Apply by the admission deadline to be considered.",
        "basis": "merit",
        "source": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
        "verified": "2026-10-15"
      },
      {
        "name": "Outstanding International Student (OIS) Award",
        "amount": "C$10,000–C$25,000, one time",
        "eligibility": "International applicants offered admission",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": "The page still states the value “for the 2025/2026 academic year”.",
        "basis": "merit",
        "source": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
        "verified": "2026-10-15"
      },
      {
        "name": "UBC Okanagan Global Elevation Award",
        "amount": "C$8,000 a year, credited to tuition",
        "eligibility": "Every new international undergraduate who enrols at UBC Okanagan",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Okanagan campus only; renewable for up to four years.",
        "basis": "automatic",
        "source": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
        "verified": "2026-10-15"
      },
      {
        "name": "UBC Okanagan International Welcome Award",
        "amount": "C$5,000, first year",
        "eligibility": "International students with an Okanagan degree as first choice who enrol in it full-time",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": null,
        "basis": "automatic",
        "source": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Need-based support for international first-year students is the International Scholars Program, by school nomination.",
      "source": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/",
      "verified": "2026-10-15"
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "UBC — dates and deadlines",
      "url": "https://you.ubc.ca/applying-ubc/dates-deadlines/"
    },
    {
      "label": "UBC — application and fee",
      "url": "https://you.ubc.ca/applying-ubc/how-to-apply/application/"
    },
    {
      "label": "UBC — English language competency",
      "url": "https://you.ubc.ca/applying-ubc/requirements/english-language-competency/"
    },
    {
      "label": "UBC — undergraduate tuition 2026/27",
      "url": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees"
    },
    {
      "label": "UBC — awards for international students",
      "url": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/"
    },
    {
      "label": "UBC — International Scholars",
      "url": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "application fee",
      "English requirements",
      "tuition",
      "scholarships"
    ],
    "unconfirmed": [
      "test policy",
      "full list of majors",
      "Okanagan tuition",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "UBC Vancouver",
    "UBC Okanagan",
    "UBCO"
  ],
  "programsBasis": "evidence",
  "province": "BC",
  "campuses": [
    "Vancouver",
    "Okanagan (Kelowna)"
  ],
  "programEvidence": {
    "business": {
      "program": "Commerce (Sauder School of Business)",
      "level": "bachelor",
      "language": "English",
      "url": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
      "checked": "2026-10-15"
    },
    "economics": {
      "program": "International Economics",
      "level": "bachelor",
      "language": "English",
      "url": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computer Science",
      "level": "bachelor",
      "language": "English",
      "url": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Applied Science – Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Fine Arts",
      "level": "bachelor",
      "language": "English",
      "url": "https://students.ubc.ca/enrolment/finances/tuition-fees/undergraduate-tuition-fees",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "mcgill-university",
  "name": "McGill University",
  "shortName": "McGill",
  "country": "ca",
  "city": "Montreal",
  "region": "Quebec",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#1f4d3a",
    "c2": "#0f2a1f",
    "initials": "M"
  },
  "description": "An English-language university in Montreal, with its main campus downtown and the Macdonald campus in Sainte-Anne-de-Bellevue. Students in Quebec also need a Quebec Acceptance Certificate (CAQ) before the study permit.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "engineering",
    "psychology",
    "arts",
    "education"
  ],
  "englishTaughtPrograms": [
    "business",
    "engineering",
    "psychology",
    "arts",
    "education"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.mcgill.ca/",
    "admissions": "https://www.mcgill.ca/undergraduate-admissions/apply",
    "internationalAdmissions": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
    "applicationPortal": "https://www.mcgill.ca/undergraduate-admissions/apply",
    "scholarships": "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
    "financialAid": "https://www.mcgill.ca/studentaid/scholarships-aid/international-students",
    "programs": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
    "cost": "https://www.mcgill.ca/student-accounts/tuition-charges/fallwinter-term-tuition-and-fees/undergraduate-fees"
  },
  "admissions": {
    "platforms": [
      "McGill online application (Minerva / Applicant Portal)"
    ],
    "deadlines": [
      {
        "name": "Application deadline",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "For applicants from high schools outside Canada and the U.S.; Music and Religious Studies need application and documents by this date.",
        "status": "confirmed",
        "source": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Major Entrance Scholarship application and documents",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-21",
        "date": "21 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Supporting documents",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      }
    ],
    "applicationFee": {
      "amount": 140.16,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable. A second application for the same term is free; each further one costs C$140.16.",
      "source": "https://www.mcgill.ca/undergraduate-admissions/apply",
      "verified": "2026-10-15"
    },
    "documents": [
      "Online application",
      "Secondary school transcripts (B+ equivalent is the minimum; most programmes ask more)",
      "English test result unless exempt",
      "Separate application for some programmes (e.g. B.A. Psychology, Population & Global Health)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Each component 6.0 or better. UKVI accepted; One Skill Retake not accepted; electronic results only."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "note": "Tests before 21 January 2026: 90 with 21 in each section for most programmes; 100 for Management and Education (TESL); 79–80 for Music. Tests from 21 January 2026 (1–6 scale): 4.5 with Reading, Listening and Writing 4.5 and Speaking 4.0 for most programmes; 5.0 for Management and Education (TESL); 4.0 for Music.",
      "scales": [
        {
          "period": "pre2026",
          "min": 90,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 125,
      "recommended": null,
      "note": "130 for B.Com. and B.Ed. (TESL)."
    },
    "waiver": "At least four consecutive years of high school or university in a country where English is the acknowledged primary language (McGill lists the countries).",
    "note": "PTE Academic 65 with 60 in each part."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "conditional",
      "note": "Required only of applicants on the basis of a U.S. high school diploma (ACT or SAT, except Music). Applicants from other school systems are assessed on their own school record.",
      "source": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/us",
      "verified": "2026-10-15",
      "label": "SAT/ACT only for a U.S. high school diploma"
    },
    "act": {
      "policy": "conditional",
      "note": "Required only of applicants on the basis of a U.S. high school diploma (ACT or SAT, except Music). Applicants from other school systems are assessed on their own school record.",
      "source": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/us",
      "verified": "2026-10-15",
      "label": "SAT/ACT only for a U.S. high school diploma"
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Uzbekistan is not in McGill’s list of accepted international credentials; the normal basis is the credential that leads to university admission in the country of study."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition, student services, administrative, IT and society fees, dental insurance and the international health insurance. Housing, food and books are extra",
      "tuition": 54000
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International students admitted in Fall 2026, 30 credits a year",
    "source": "https://www.mcgill.ca/student-accounts/tuition-charges/fallwinter-term-tuition-and-fees/undergraduate-fees",
    "verified": "2026-10-15",
    "headline": "C$57,647–C$75,396 tuition, fees and insurance a year (2026–27)",
    "items": [
      {
        "label": "B.A. — tuition C$54,000.00 plus required fees and international health insurance",
        "amount": 57646.94
      },
      {
        "label": "B.Sc. — tuition C$64,785.90 plus fees and insurance",
        "amount": 68378.74
      },
      {
        "label": "B.Eng. — tuition C$65,167.50 plus fees and insurance",
        "amount": 69267.42
      },
      {
        "label": "B.Com. — tuition C$71,687.40 plus fees and insurance",
        "amount": 75395.74
      }
    ],
    "billedSubtotal": null,
    "totalText": "From C$57,646.94 (B.A.) to C$75,395.74 (B.Com.) for 2026–27, including the international health insurance of C$1,212",
    "note": "Totals from McGill’s fee calculator; the table has a column for each entering year, so the rate is fixed by the year a student enters."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "Major Entrance Scholarship",
        "amount": "C$3,000, C$5,000 or C$10,000 a year for international students",
        "eligibility": "First-time university students; selection on academic achievement, then leadership",
        "deadline": null,
        "application": "Separate application in the Applicant Portal (opens 1 October), due 21 January for this applicant group",
        "renewable": true,
        "note": "The C$12,000 level is for Canadian citizens and permanent residents only. Renewable for up to four years if criteria are met.",
        "basis": "merit",
        "source": "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
        "verified": "2026-10-15"
      },
      {
        "name": "One-year Entrance Scholarship",
        "amount": "C$3,000, first year only",
        "eligibility": "All applicants meeting the minimum academic requirements",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": "Meeting the minimum does not guarantee an award.",
        "basis": "merit",
        "source": "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "McGill’s need-based Financial Aid programmes (loans and bursaries) include students from abroad; apply within 30 days of acceptance.",
      "source": "https://www.mcgill.ca/studentaid/scholarships-aid/international-students",
      "verified": "2026-10-15"
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "McGill — requirements and deadlines, other international high schools",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other"
    },
    {
      "label": "McGill — how to apply and fee",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply"
    },
    {
      "label": "McGill — English language proficiency",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/english-proficiency"
    },
    {
      "label": "McGill — fee calculator 2026-27",
      "url": "https://www.mcgill.ca/student-accounts/tuition-charges/fallwinter-term-tuition-and-fees/undergraduate-fees"
    },
    {
      "label": "McGill — entrance scholarships",
      "url": "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships"
    },
    {
      "label": "McGill — U.S. high school requirements",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/us"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English requirements",
      "test policy",
      "tuition and fees",
      "scholarships"
    ],
    "unconfirmed": [
      "full list of majors",
      "housing costs",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "McGill",
    "Université McGill"
  ],
  "programsBasis": "evidence",
  "province": "QC",
  "campuses": [
    "Downtown Montreal",
    "Macdonald (Sainte-Anne-de-Bellevue)"
  ],
  "programEvidence": {
    "business": {
      "program": "Bachelor of Commerce (BCom)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Bachelor of Engineering (BEng)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
      "checked": "2026-10-15"
    },
    "psychology": {
      "program": "B.A. Psychology (separate application)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Bachelor of Music (BMus)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
      "checked": "2026-10-15"
    },
    "education": {
      "program": "Bachelor of Education (B.Ed.)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/other",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "university-of-alberta",
  "name": "University of Alberta",
  "shortName": "U of A",
  "country": "ca",
  "city": "Edmonton",
  "region": "Alberta",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4b2e83",
    "c2": "#2c1a4d",
    "initials": "A"
  },
  "description": "A large research university in Edmonton, with Campus Saint-Jean (French-language programmes) and Augustana in Camrose. International undergraduates get a tuition guarantee: the yearly and total tuition for the whole programme is known before accepting the offer.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "engineering",
    "social-sciences",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "engineering",
    "social-sciences",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.ualberta.ca/",
    "admissions": "https://www.ualberta.ca/en/admissions/how-to-apply/index.html",
    "internationalAdmissions": "https://www.ualberta.ca/en/admissions/how-to-apply/international-admission-requirements/index.html",
    "applicationPortal": "https://www.ualberta.ca/en/admissions/how-to-apply/index.html",
    "scholarships": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
    "financialAid": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
    "programs": "https://costcalculator.registrar.ualberta.ca/costcalculator/",
    "cost": "https://costcalculator.registrar.ualberta.ca/costcalculator/"
  },
  "admissions": {
    "platforms": [
      "University of Alberta online application"
    ],
    "deadlines": [
      {
        "name": "Entrance award application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-10",
        "date": "10 January 2027",
        "time": "23:59",
        "timezone": "MT",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline (most programmes)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "time": "23:59",
        "timezone": "MT",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Some programmes have extended deadlines; Dental Hygiene, Dentistry, Medicine and Law differ. Admission is evaluated on a rolling basis.",
        "status": "confirmed",
        "source": "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html",
        "verified": "2026-10-15",
        "note": "The page is titled “Timeline for Fall 2027 Applicants”, although one table heading still reads “Fall 2024”."
      },
      {
        "name": "Accept offers made before 1 April",
        "kind": "reply",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-01",
        "date": "1 May 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Outstanding documents for high school students",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-08-01",
        "date": "1 August 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 150,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable, for each application (up to two programme choices). Waivers are not granted on request; professional programmes differ.",
      "source": "https://www.ualberta.ca/en/admissions/how-to-apply/international-admission-requirements/index.html",
      "verified": "2026-10-15"
    },
    "documents": [
      "Online application",
      "Transcripts and documents",
      "English language proficiency"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "No band below 6.0; IELTS Online accepted; One Skill Retake not accepted."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "note": "Tests before 21 January 2026: 90 with no section below 21. Tests from 21 January 2026 (1–6 scale): 4.5 with no band below 4.5. TOEFL iBT Home Edition is not accepted for 2027–28 admission.",
      "scales": [
        {
          "period": "pre2026",
          "min": 90,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "No integrated subscore below 100."
    },
    "waiver": null,
    "note": "A spoken English proficiency requirement also applies."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "For the American curriculum: SAT or ACT scores are not required; an SAT score is used if it covers a subject gap or helps the average.",
      "source": "https://www.ualberta.ca/en/admissions/how-to-apply/international-admission-requirements/international-curricula/united-states.html",
      "verified": "2026-10-15"
    },
    "act": {
      "policy": "optional",
      "note": "For the American curriculum: SAT or ACT scores are not required; an SAT score is used if it covers a subject gap or helps the average.",
      "source": "https://www.ualberta.ca/en/admissions/how-to-apply/international-admission-requirements/international-curricula/united-states.html",
      "verified": "2026-10-15"
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Certificate of Completed Upper Secondary Education and transcript of marks."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition (guaranteed), plus the calculator’s estimates of fees, room and board and books for a BA in residence",
      "tuition": 39232.8
    },
    "academicYear": "Fall 2026 (guaranteed for the programme)",
    "currency": "CAD",
    "studentCategory": "International students, cost calculator",
    "source": "https://costcalculator.registrar.ualberta.ca/costcalculator/",
    "verified": "2026-10-15",
    "headline": "C$39,233–C$49,952 tuition a year (Fall 2026, guaranteed)",
    "items": [
      {
        "label": "Tuition, Bachelor of Arts",
        "amount": 39232.8
      },
      {
        "label": "Tuition, Bachelor of Commerce",
        "amount": 46546.8
      },
      {
        "label": "Tuition, Engineering (BSc Chemical Engineering, bioprocessing)",
        "amount": 49952.4
      },
      {
        "label": "Required non-tuition fees (BA, estimate)",
        "amount": 2075.85
      },
      {
        "label": "Room and board in residence (estimate)",
        "amount": 8531.0
      },
      {
        "label": "Books, supplies and instruments (estimate)",
        "amount": 1200.0
      }
    ],
    "billedSubtotal": null,
    "totalText": "Tuition from C$39,232.80 (BA) to C$49,952.40 (engineering) a year; for a BA in residence the calculator estimates C$11,806.85 more in fees, room and board and books",
    "note": "“The Fall 2026 tuition rates listed above are accurate and will be guaranteed upon acceptance into the program.” Other fees are estimates. Rates for students starting in Fall 2027 were not shown."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "International Admission Scholarship",
        "amount": "Up to C$10,000",
        "eligibility": "International applicants, by admission average",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
        "verified": "2026-10-15"
      },
      {
        "name": "President’s International Distinction Scholarship",
        "amount": "Up to C$120,000 over four years",
        "eligibility": "25 a year: first-year students on a study permit with a superior average and leadership",
        "deadline": null,
        "application": "Single scholarship application by 10 January",
        "renewable": true,
        "note": null,
        "basis": "merit",
        "source": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
        "verified": "2026-10-15"
      },
      {
        "name": "International Leader Scholarship",
        "amount": "Up to C$15,000",
        "eligibility": "Applicants with superior academics and leadership",
        "deadline": null,
        "application": "Single scholarship application by 10 January",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
        "verified": "2026-10-15"
      },
      {
        "name": "Regional Excellence Scholarship",
        "amount": "Up to C$5,000",
        "eligibility": "Top students from certain regions (regions not listed on the page)",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Need-based aid for international first-year students is not described on the pages read."
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "U of A — dates and deadlines",
      "url": "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html"
    },
    {
      "label": "U of A — international requirements and fee",
      "url": "https://www.ualberta.ca/en/admissions/how-to-apply/international-admission-requirements/index.html"
    },
    {
      "label": "U of A — language requirements",
      "url": "https://www.ualberta.ca/en/admissions/how-to-apply/admission-requirements/language-requirements/index.html"
    },
    {
      "label": "U of A — cost calculator",
      "url": "https://costcalculator.registrar.ualberta.ca/costcalculator/"
    },
    {
      "label": "U of A — international entrance scholarships",
      "url": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "application fee",
      "English requirements",
      "test policy",
      "tuition",
      "scholarships"
    ],
    "unconfirmed": [
      "full list of majors",
      "tuition for Fall 2027 entry",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "UAlberta",
    "U of A",
    "Augustana",
    "Campus Saint-Jean"
  ],
  "programsBasis": "evidence",
  "province": "AB",
  "campuses": [
    "Edmonton",
    "Augustana (Camrose)",
    "Campus Saint-Jean"
  ],
  "programEvidence": {
    "business": {
      "program": "Bachelor of Commerce",
      "level": "bachelor",
      "language": "English",
      "url": "https://costcalculator.registrar.ualberta.ca/costcalculator/",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "BSc in Chemical Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://costcalculator.registrar.ualberta.ca/costcalculator/",
      "checked": "2026-10-15"
    },
    "social-sciences": {
      "program": "BA in Criminology",
      "level": "bachelor",
      "language": "English",
      "url": "https://costcalculator.registrar.ualberta.ca/costcalculator/",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Bachelor of Music",
      "level": "bachelor",
      "language": "English",
      "url": "https://costcalculator.registrar.ualberta.ca/costcalculator/",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "mcmaster-university",
  "name": "McMaster University",
  "shortName": "McMaster",
  "country": "ca",
  "city": "Hamilton",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#5a1f2e",
    "c2": "#2e0f17",
    "initials": "M"
  },
  "description": "A research university in Hamilton, Ontario. First-year students enter a Level I programme (for example Humanities I, Engineering I or the Life Sciences Gateway) and choose a specialisation later.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "medicine"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "medicine"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.mcmaster.ca/",
    "admissions": "https://future.mcmaster.ca/apply/",
    "internationalAdmissions": "https://future.mcmaster.ca/apply/curriculum-requirements/",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://registrar.mcmaster.ca/entrance-awards/",
    "financialAid": "https://registrar.mcmaster.ca/aid-awards-for-international-students/",
    "programs": "https://future.mcmaster.ca/apply/deadlines/",
    "cost": "https://future.mcmaster.ca/finances/cost-estimator/"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)"
    ],
    "deadlines": [
      {
        "name": "Engineering and Computer Science: recommended early submission",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-12",
        "date": "12 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://future.mcmaster.ca/apply/deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: Engineering, Computer Science, Arts & Science",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Arts & Science also needs a supplementary application by 1 February 2027 (11:59 pm ET).",
        "status": "confirmed",
        "source": "https://future.mcmaster.ca/apply/deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: Humanities, Social Sciences, Business, Life Sciences and other programmes",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-04-01",
        "date": "1 April 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "For applicants outside Canada. Documents, including the English test, are due 1 April 2027 for all programmes.",
        "status": "confirmed",
        "source": "https://future.mcmaster.ca/apply/deadlines/",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$95 for McMaster, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application",
      "Transcripts and new grades in the applicant portal",
      "English test result unless exempt",
      "Supplementary application for some programmes"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "At least 6.0 in each component; valid two years. IELTS One Skill Retake accepted."
    },
    "toefl": {
      "min": 86,
      "recommended": null,
      "note": "Tests before 21 January 2026: 86 with at least 20 in each section. Tests from 21 January 2026 (1–6 scale): 4.5 with 4.0 in Reading, Writing and Speaking and 4.5 in Listening. Home Edition accepted; Essentials and MyBest not.",
      "scales": [
        {
          "period": "pre2026",
          "min": 86,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "Reading 115, Writing 125, Listening 110, Speaking 115."
    },
    "waiver": "Possible at the university’s discretion after full-time study in an English-speaking country; not automatic.",
    "note": "PTE Academic 60 with 60 in Writing and Speaking. Lower scores can lead to the MELD or STEP English pathways."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "For American-style curricula: SAT or ACT results are optional and are considered only if they strengthen the application.",
      "source": "https://future.mcmaster.ca/apply/curriculum-requirements/",
      "verified": "2026-10-15"
    },
    "act": {
      "policy": "optional",
      "note": "For American-style curricula: SAT or ACT results are optional and are considered only if they strengthen the application.",
      "source": "https://future.mcmaster.ca/apply/curriculum-requirements/",
      "verified": "2026-10-15"
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only (“unofficial estimates”); ancillary fees, housing, food and books are extra",
      "tuition": 45158.4
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International (visa) students, full-time; university estimate",
    "source": "https://future.mcmaster.ca/finances/cost-estimator/",
    "verified": "2026-10-15",
    "headline": "C$45,158–C$69,354 estimated tuition a year (2026–27)",
    "items": [
      {
        "label": "Humanities or Social Sciences",
        "amount": 45158.4
      },
      {
        "label": "Life Sciences Gateway",
        "amount": 47535.3
      },
      {
        "label": "Business",
        "amount": 50003.4
      },
      {
        "label": "Nursing",
        "amount": 51734.4
      },
      {
        "label": "Computer Science",
        "amount": 56232.6
      },
      {
        "label": "Engineering I",
        "amount": 69353.54
      }
    ],
    "billedSubtotal": null,
    "totalText": "Estimated tuition from C$45,158.40 (Humanities, Social Sciences) to C$69,353.54 (Engineering I)",
    "note": "McMaster’s cost estimator: “the fees shown are unofficial estimates for the 2026/2027 school year and are subject to change. The tuition fees do not include any ancillary fees.”"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "McMaster University Entrance Award",
        "amount": "C$3,000",
        "eligibility": "Students entering Level I from high school with the faculty’s average (for 2027–28: Engineering and Computer Science 97%+, Business 92%+, Arts & Science 98%+)",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": "A student receives either this award or the faculty achievement award. Offers are conditional on final grades.",
        "basis": "automatic",
        "source": "https://registrar.mcmaster.ca/entrance-awards/",
        "verified": "2026-10-15"
      },
      {
        "name": "Faculty-Specific Achievement Award",
        "amount": "C$500–C$1,000",
        "eligibility": "Humanities (90–93.99%), Social Sciences (91–93.99% for 2027–28), Health Sciences, Nursing, Midwifery",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": null,
        "basis": "automatic",
        "source": "https://registrar.mcmaster.ca/entrance-awards/",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "International students may apply for McMaster bursaries from Level 2; first-year international students are not eligible for the bursary programme or for OSAP.",
      "source": "https://registrar.mcmaster.ca/aid-awards-for-international-students/",
      "verified": "2026-10-15"
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "McMaster — admission deadlines by programme",
      "url": "https://future.mcmaster.ca/apply/deadlines/"
    },
    {
      "label": "McMaster — English proficiency",
      "url": "https://future.mcmaster.ca/apply/requirements/english-proficiency/"
    },
    {
      "label": "McMaster — curriculum requirements",
      "url": "https://future.mcmaster.ca/apply/curriculum-requirements/"
    },
    {
      "label": "McMaster — cost estimator",
      "url": "https://future.mcmaster.ca/finances/cost-estimator/"
    },
    {
      "label": "McMaster — entrance awards",
      "url": "https://registrar.mcmaster.ca/entrance-awards/"
    },
    {
      "label": "OUAC — undergraduate fees",
      "url": "https://www.ouac.on.ca/guide/undergrad-fees"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English requirements",
      "test policy",
      "estimated tuition",
      "entrance awards"
    ],
    "unconfirmed": [
      "ancillary fees and housing",
      "requirements for Uzbekistan",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "Mac",
    "McMaster U"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "business": {
      "program": "Business I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "economics": {
      "program": "Honours Economics I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computer Science I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Engineering I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "biology": {
      "program": "Life Sciences Gateway",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "mathematics": {
      "program": "Mathematics & Statistics Gateway",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "social-sciences": {
      "program": "Social Sciences I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "humanities": {
      "program": "Humanities I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "iArts (Integrated Arts) I",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Nursing",
      "level": "bachelor",
      "language": "English",
      "url": "https://future.mcmaster.ca/apply/deadlines/",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "universite-de-montreal",
  "name": "Université de Montréal",
  "shortName": "UdeM",
  "country": "ca",
  "city": "Montreal",
  "region": "Quebec",
  "founded": null,
  "type": "Public research university (French-language)",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#7a3b12",
    "c2": "#3d1d09",
    "initials": "UDM"
  },
  "description": "A French-language research university in Montreal. Teaching is in French, and each programme sets the level of French it requires; English is not an admission requirement. International students in Quebec also need a Quebec Acceptance Certificate (CAQ).",
  "englishTaught": false,
  "languageOfInstruction": "French",
  "programs": [
    "computer-science",
    "medicine"
  ],
  "englishTaughtPrograms": [],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.umontreal.ca/",
    "admissions": "https://admission.umontreal.ca/admission/preparation-de-la-demande/respecter-les-dates-limites-de-depot/",
    "internationalAdmissions": "https://admission.umontreal.ca/admission/vous-etes/etudiant-international/",
    "applicationPortal": "https://admission.umontreal.ca/",
    "scholarships": "https://registraire.umontreal.ca/droits-de-scolarite/bourse-exemption/",
    "financialAid": "https://registraire.umontreal.ca/droits-de-scolarite/bourse-exemption/",
    "programs": "https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/",
    "cost": "https://registraire.umontreal.ca/droits-de-scolarite/couts/"
  },
  "admissions": {
    "platforms": [
      "UdeM online application (Centre étudiant)"
    ],
    "deadlines": [
      {
        "name": "Application deadline (bachelor’s programmes, studies outside Quebec)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "For candidates studying (or who studied) at a university or outside Quebec, in most faculties. Music: 15 January for all candidates.",
        "status": "confirmed",
        "source": "https://admission.umontreal.ca/admission/preparation-de-la-demande/respecter-les-dates-limites-de-depot/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "French requirement: proof due (example: Baccalauréat en informatique)",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 106.75,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Base fee C$83.40 per term of admission plus C$23.35 for each regular programme (table for Winter 2027); Nutrition and Kinesiology add C$30.90.",
      "source": "https://admission.umontreal.ca/admission/depot-de-la-demande/payer-les-frais-dadmission/",
      "verified": "2026-10-15"
    },
    "documents": [
      "Online application",
      "Transcripts",
      "Proof of French unless studies were in French in a recognised pathway"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": null,
    "toefl": null,
    "duolingo": null,
    "waiver": null,
    "note": "Teaching is in French. English is not an admission requirement, though reading English is strongly recommended. French: each programme sets thresholds for accepted tests (TCF, TEF, DELF/DALF and others), taken within the 24 months before the term; for the Baccalauréat en informatique the TCF level is B2 (comprehension average 400/699 and written expression 6/20), and results can lead to required French writing courses."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-applicable",
      "note": "SAT and ACT are not part of the admission route; candidates are assessed on their school record and French."
    },
    "act": {
      "policy": "not-applicable",
      "note": "SAT and ACT are not part of the admission route; candidates are assessed on their school record and French."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only. Other required fees, health insurance, housing and food are extra",
      "tuition": 30772.8
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International undergraduates admitted from autumn 2020 (except French and Belgian francophone students)",
    "source": "https://registraire.umontreal.ca/droits-de-scolarite/couts/",
    "verified": "2026-10-15",
    "headline": "C$30,772.80 tuition for 30 credits (2026–27)",
    "items": [
      {
        "label": "Tuition, 30 credits (C$1,025.76 a credit)",
        "amount": 30772.8
      }
    ],
    "billedSubtotal": null,
    "totalText": "C$30,772.80 tuition for a full year of 30 credits, before other required fees",
    "note": "French and Belgian francophone students pay special rates."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "Bourse d’exemption UdeM",
        "amount": "C$14,436 (level A) or C$6,879.60 (level B) a year, deducted from tuition",
        "eligibility": "International bachelor’s students (except French and Belgian francophone) with valid CAQ and study permit, full-time, without external funding",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "The level depends on the academic record at admission; a record that does not qualify for level A or B gets no exemption. Short programmes (certificates, majors, minors) are excluded.",
        "basis": "merit",
        "source": "https://registraire.umontreal.ca/droits-de-scolarite/bourse-exemption/",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Need-based aid for international first-year students is not described on the pages read."
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "UdeM — admission deadlines",
      "url": "https://admission.umontreal.ca/admission/preparation-de-la-demande/respecter-les-dates-limites-de-depot/"
    },
    {
      "label": "UdeM — tests and French requirement",
      "url": "https://admission.umontreal.ca/admission/preparation-de-la-demande/prevoir-les-entrevues-et-les-tests/"
    },
    {
      "label": "UdeM — Baccalauréat en informatique",
      "url": "https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/"
    },
    {
      "label": "UdeM — admission fees",
      "url": "https://admission.umontreal.ca/admission/depot-de-la-demande/payer-les-frais-dadmission/"
    },
    {
      "label": "UdeM — costs of study 2026-27",
      "url": "https://registraire.umontreal.ca/droits-de-scolarite/couts/"
    },
    {
      "label": "UdeM — Bourse d’exemption",
      "url": "https://registraire.umontreal.ca/droits-de-scolarite/bourse-exemption/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "French requirement",
      "application fee",
      "tuition",
      "tuition exemption scholarship"
    ],
    "unconfirmed": [
      "full list of programmes",
      "other required fees",
      "requirements for Uzbekistan",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "UdeM",
    "Universite de Montreal",
    "University of Montreal",
    "Université de Montreal"
  ],
  "programsBasis": "evidence",
  "province": "QC",
  "programEvidence": {
    "computer-science": {
      "program": "Baccalauréat en informatique",
      "level": "bachelor",
      "language": "French",
      "url": "https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Baccalauréat en nutrition",
      "level": "bachelor",
      "language": "French",
      "url": "https://admission.umontreal.ca/admission/depot-de-la-demande/payer-les-frais-dadmission/",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial",
  "frenchRequirement": {
    "level": "B2",
    "note": "Per programme; example from the Baccalauréat en informatique.",
    "source": "https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/",
    "verified": "2026-10-15"
  }
},

{
  "id": "university-of-waterloo",
  "name": "University of Waterloo",
  "shortName": "Waterloo",
  "country": "ca",
  "city": "Waterloo",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#1f4d3a",
    "c2": "#0f2a1f",
    "initials": "W"
  },
  "description": "A research university in Waterloo, Ontario, known for co-operative education — many programmes alternate study terms with paid work terms (co-op students pay a co-op fee). Engineering applicants must complete an online interview.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "mathematics",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "mathematics",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://uwaterloo.ca/",
    "admissions": "https://uwaterloo.ca/future-students/admissions/deadlines",
    "internationalAdmissions": "https://uwaterloo.ca/future-students/international-students",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://uwaterloo.ca/future-students/financing/international-scholarships",
    "financialAid": "https://uwaterloo.ca/future-students/financing/international-scholarships",
    "programs": "https://uwaterloo.ca/future-students/financing/tuition",
    "cost": "https://uwaterloo.ca/future-students/financing/tuition"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)",
      "Admission Information Form (most programmes)"
    ],
    "deadlines": [
      {
        "name": "Application deadline: Engineering (except Architecture)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Documents by 1 February 2027; online interview required.",
        "status": "confirmed",
        "source": "https://uwaterloo.ca/future-students/admissions/deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: programmes other than Engineering",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Documents by 15 February 2027.",
        "status": "confirmed",
        "source": "https://uwaterloo.ca/future-students/admissions/deadlines",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$95 for Waterloo, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application",
      "Admission Information Form and supplementary forms",
      "Transcripts",
      "English test result unless exempt (tests from 1 May 2025)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Writing and Speaking 6.5; Reading and Listening 6.0. One Skill Retake accepted."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "note": "Tests before 21 January 2026: 90 with 25 in Writing and Speaking. Tests from 21 January 2026 (1–6 scale): 4.5 with 5 in Writing and Speaking. MyBest and Essentials are not used.",
      "scales": [
        {
          "period": "pre2026",
          "min": 90,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "Literacy and Production 125 each."
    },
    "waiver": "Four most recent years of full-time education in Canada, or full-time study in English in specified countries with an official school letter.",
    "note": "Only scores from tests taken on or after 1 May 2025. PTE Academic 63 with 65 in Writing and Speaking; Cambridge 180."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": null,
      "note": "Not checked: the requirements by country are in an interactive tool that was not read."
    },
    "act": {
      "policy": null,
      "note": "Not checked: the requirements by country are in an interactive tool that was not read."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "includes": "tuition and incidental fees (health and dental plan, transit pass, recreation, services); housing and food are extra",
      "tuition": 58000
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International (visa) students starting in September 2026; two terms, full course load; university estimate",
    "source": "https://uwaterloo.ca/future-students/financing/tuition",
    "verified": "2026-10-15",
    "headline": "C$51,000–C$75,000 tuition and incidental fees a year (2026–27)",
    "items": [
      {
        "label": "Environment",
        "amount": 51000
      },
      {
        "label": "Health or Science",
        "amount": 54000
      },
      {
        "label": "Arts, or Accounting and Financial Management",
        "amount": 58000
      },
      {
        "label": "Mathematics",
        "amount": 62000
      },
      {
        "label": "Computer Science",
        "amount": 73000
      },
      {
        "label": "Engineering, Software Engineering or Architecture",
        "amount": 75000
      },
      {
        "label": "Books and supplies (most programmes)",
        "amount": 1500
      }
    ],
    "billedSubtotal": null,
    "totalText": "Estimated tuition and incidental fees for two terms: C$51,000 (Environment) to C$75,000 (Engineering); books about C$1,500 more",
    "note": "Estimates for two terms (eight months) based on fees for students starting in September 2026. Co-op students also pay a co-op fee."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "International Student Entrance Scholarship",
        "amount": "C$10,000, first year",
        "eligibility": "International fee-paying students admitted to full-time first-year degree studies (not Pharmacy, Optometry, BSW, Medical Sciences, transfers or deferred offers)",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": "No limit on the number of recipients. Applied to the first two terms’ tuition; the student must stay full-time and international fee-paying.",
        "basis": "automatic",
        "source": "https://uwaterloo.ca/future-students/financing/international-scholarships",
        "verified": "2026-10-15"
      },
      {
        "name": "Faculty of Mathematics Global Scholarships",
        "amount": "C$12,000–C$40,000 (up to 10 awards)",
        "eligibility": "Most programmes in the Faculty of Mathematics",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://uwaterloo.ca/future-students/financing/international-scholarships",
        "verified": "2026-10-15"
      },
      {
        "name": "Faculty of Science International Student Scholarships",
        "amount": "C$25,000–C$80,000 (15 awards)",
        "eligibility": "Most programmes in the Faculty of Science",
        "deadline": null,
        "application": "Application required",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://uwaterloo.ca/future-students/financing/international-scholarships",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Bursaries of up to C$2,000, based on financial need, for full-time international students after first year.",
      "source": "https://uwaterloo.ca/future-students/financing/international-scholarships",
      "verified": "2026-10-15"
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "Waterloo — deadlines",
      "url": "https://uwaterloo.ca/future-students/admissions/deadlines"
    },
    {
      "label": "Waterloo — English language requirements",
      "url": "https://uwaterloo.ca/future-students/admissions/english-language-requirements"
    },
    {
      "label": "Waterloo — tuition",
      "url": "https://uwaterloo.ca/future-students/financing/tuition"
    },
    {
      "label": "Waterloo — scholarships for international students",
      "url": "https://uwaterloo.ca/future-students/financing/international-scholarships"
    },
    {
      "label": "OUAC — undergraduate fees",
      "url": "https://www.ouac.on.ca/guide/undergrad-fees"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English requirements",
      "estimated tuition",
      "scholarships"
    ],
    "unconfirmed": [
      "test policy",
      "requirements for Uzbekistan",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "UWaterloo",
    "UW"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "business": {
      "program": "Accounting and Financial Management",
      "level": "bachelor",
      "language": "English",
      "url": "https://uwaterloo.ca/future-students/financing/tuition",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computer Science",
      "level": "bachelor",
      "language": "English",
      "url": "https://uwaterloo.ca/future-students/financing/tuition",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Software Engineering (Faculty of Engineering)",
      "level": "bachelor",
      "language": "English",
      "url": "https://uwaterloo.ca/future-students/financing/tuition",
      "checked": "2026-10-15"
    },
    "mathematics": {
      "program": "Mathematics (16 majors)",
      "level": "bachelor",
      "language": "English",
      "url": "https://uwaterloo.ca/future-students/financing/tuition",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Architecture",
      "level": "bachelor",
      "language": "English",
      "url": "https://uwaterloo.ca/future-students/financing/tuition",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "western-university",
  "name": "Western University",
  "shortName": "Western",
  "country": "ca",
  "city": "London",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#6b1d4f",
    "c2": "#360f28",
    "initials": "W"
  },
  "description": "A research university in London, Ontario, home of the Ivey Business School. First-year students are guaranteed on-campus housing.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "engineering",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "engineering",
    "humanities",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.uwo.ca/",
    "admissions": "https://welcome.uwo.ca/next-steps/apply/index.html",
    "internationalAdmissions": "https://welcome.uwo.ca/next-steps/requirements/international-high-school/index.html",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://welcome.uwo.ca/next-steps/finances/index.html",
    "financialAid": "https://welcome.uwo.ca/next-steps/finances/index.html",
    "programs": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
    "cost": "https://welcome.uwo.ca/next-steps/finances/index.html"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)",
      "Western Student Center"
    ],
    "deadlines": [
      {
        "name": "OUAC application for equal consideration",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Also the Ivey Advanced Entry Opportunity deadline.",
        "status": "confirmed",
        "source": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "National Scholarship application (including International President’s Entrance Scholarships)",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-14",
        "date": "14 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$125 for Western, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application",
      "Grades and documents in the Student Center",
      "English test result unless exempt (Western expects results by mid-April)",
      "Supplementary forms, auditions or portfolios for some programmes"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "At least 6.0 in each section; IELTS Online accepted."
    },
    "toefl": {
      "min": 83,
      "recommended": null,
      "note": "Tests before 21 January 2026: 83 with at least 20 in each section. Tests from 21 January 2026 (1–6 scale): 4.5 with 4.0 in Reading, Speaking and Writing and 4.5 in Listening.",
      "scales": [
        {
          "period": "pre2026",
          "min": 83,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 115,
      "recommended": null,
      "note": "At least 100 in each subscore."
    },
    "waiver": null,
    "note": "PTE Academic 58 with 56 in each section. Lower scores can lead to the English Boost Program."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "“SAT and ACT scores are optional for Fall 2027 admission.” Students who have scores are still encouraged to submit them.",
      "cycle": "Fall 2027",
      "source": "https://welcome.uwo.ca/next-steps/requirements/international-high-school/united-states.html",
      "verified": "2026-10-15"
    },
    "act": {
      "policy": "optional",
      "note": "“SAT and ACT scores are optional for Fall 2027 admission.” Students who have scores are still encouraged to submit them.",
      "cycle": "Fall 2027",
      "source": "https://welcome.uwo.ca/next-steps/requirements/international-high-school/united-states.html",
      "verified": "2026-10-15"
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Diploma of Academic Lyceum (Akademik Litsey Diplomi) listing all subjects and grades; graduates before 2005: Certificate of Completed Secondary Education."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition and fees; residence and meals shown separately on older figures"
    },
    "academicYear": "2025–2026",
    "currency": "CAD",
    "studentCategory": "International first-year students; university estimate",
    "source": "https://welcome.uwo.ca/next-steps/finances/index.html",
    "verified": "2026-10-15",
    "headline": "C$48,000–C$64,400 tuition and fees in year 1 (2025–26 estimate)",
    "items": [
      {
        "label": "Year 1 international tuition and fees",
        "min": 48000,
        "max": 64400
      },
      {
        "label": "Residence and meal plan, 8 months (2024–25 figures)",
        "min": 16510,
        "max": 19140
      }
    ],
    "billedSubtotal": null,
    "totalText": "Year 1 tuition and fees estimated at C$48,000–C$64,400 on 2025–26 rates; residence and meals C$16,510–C$19,140 on 2024–25 figures",
    "note": "Western’s page still gives estimates “based on 2025-26 tuition” and residence fees from 2024–25. After year 1, international tuition rises by no more than 4% a year.",
    "status": "previous-cycle"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "International President’s Entrance Scholarship",
        "amount": "C$100,000 (three awards)",
        "eligibility": "International students; National Scholarship Program for all-round excellence",
        "deadline": null,
        "application": "National Scholarship application by 14 February 2027",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://welcome.uwo.ca/next-steps/finances/index.html",
        "verified": "2026-10-15"
      },
      {
        "name": "Western Admission Scholarship",
        "amount": null,
        "eligibility": "Applicants by high school average",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": "The amounts by average are not given on the page read.",
        "basis": "merit",
        "source": "https://welcome.uwo.ca/next-steps/finances/index.html",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Emergency loans of up to C$500 and an emergency bursary programme exist for international students in financial emergencies.",
      "source": "https://welcome.uwo.ca/next-steps/finances/index.html",
      "verified": "2026-10-15"
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "Western — admission deadlines",
      "url": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html"
    },
    {
      "label": "Western — English language proficiency",
      "url": "https://welcome.uwo.ca/next-steps/requirements/english-language-proficiency.html"
    },
    {
      "label": "Western — costs and financial support",
      "url": "https://welcome.uwo.ca/next-steps/finances/index.html"
    },
    {
      "label": "Western — Uzbekistan requirements",
      "url": "https://welcome.uwo.ca/next-steps/requirements/international-high-school/uzbekistan.html"
    },
    {
      "label": "Western — U.S. curriculum and SAT/ACT",
      "url": "https://welcome.uwo.ca/next-steps/requirements/international-high-school/united-states.html"
    },
    {
      "label": "OUAC — undergraduate fees",
      "url": "https://www.ouac.on.ca/guide/undergrad-fees"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English requirements",
      "test policy",
      "scholarships"
    ],
    "unconfirmed": [
      "tuition for 2026–27 and 2027–28",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "Western",
    "UWO",
    "University of Western Ontario",
    "Ivey"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "business": {
      "program": "Ivey HBA — Advanced Entry Opportunity",
      "level": "bachelor",
      "language": "English",
      "url": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
      "checked": "2026-10-15"
    },
    "humanities": {
      "program": "School for Advanced Studies in Arts and Humanities (SASAH)",
      "level": "bachelor",
      "language": "English",
      "url": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Music",
      "level": "bachelor",
      "language": "English",
      "url": "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "university-of-ottawa",
  "name": "University of Ottawa",
  "shortName": "uOttawa",
  "country": "ca",
  "city": "Ottawa",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university (bilingual)",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#5a1f2e",
    "c2": "#2e0f17",
    "initials": "O"
  },
  "description": "The largest bilingual English–French university in the world, in Canada’s capital. Programmes are taught in English, in French or in both; the language requirement depends on the language of the programme.",
  "englishTaught": true,
  "languageOfInstruction": "English and French",
  "programs": [
    "business",
    "engineering",
    "biology",
    "social-sciences"
  ],
  "englishTaughtPrograms": [
    "business",
    "engineering",
    "biology",
    "social-sciences"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.uottawa.ca/",
    "admissions": "https://www.uottawa.ca/study/undergraduate-studies/application-deadlines",
    "internationalAdmissions": "https://www.uottawa.ca/study/international-students",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview",
    "financialAid": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview",
    "programs": "https://www.uottawa.ca/study/fees-financial-support/university-fees/tuition-international",
    "cost": "https://www.uottawa.ca/study/fees-financial-support/university-fees/tuition-international"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)"
    ],
    "deadlines": [
      {
        "name": "Recommended application date",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Deadlines vary by programme; many programmes reach capacity quickly and can close at any time. For international applicants most programmes close in May.",
        "status": "confirmed",
        "source": "https://www.uottawa.ca/study/undergraduate-studies/application-deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Documents and test results",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Or 30 days after applying.",
        "status": "confirmed",
        "source": "https://www.uottawa.ca/study/undergraduate-studies/application-deadlines",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$93 for uOttawa, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application",
      "Transcripts",
      "Language test unless exempt (English or French, by programme)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Writing 6.5. An overall 6.0 allows direct entry with extra ESL courses. One Skill Retake accepted."
    },
    "toefl": {
      "min": 86,
      "recommended": null,
      "note": "Tests before 21 January 2026: 86 with 22 in Writing. Tests from 21 January 2026 (1–6 scale): 4.5 with 4.5 in Writing.",
      "scales": [
        {
          "period": "pre2026",
          "min": 86,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "Literacy 120."
    },
    "waiver": "Three years of full-time study in English in a country where English is official, among others; an SAT Reading and Writing score of 550 can also qualify.",
    "note": "French-language programmes require French at level B2 (DELF B2 with 16/25 in written production, TCF Tout Public or DAP, or TEF autres usages) unless exempt; TEF Canada is not accepted. PTE 60; Cambridge 176; CAEL 60."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": null,
      "note": "Not checked on the pages read."
    },
    "act": {
      "policy": null,
      "note": "Not checked on the pages read."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only, per term. Ancillary and incidental fees, insurance, housing and food are extra",
      "tuition": 21667.54,
      "period": "semester"
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International undergraduates, full time (flat rate)",
    "source": "https://www.uottawa.ca/study/fees-financial-support/university-fees/tuition-international",
    "verified": "2026-10-15",
    "headline": "C$21,667.54–C$31,582.15 tuition per term (2026–27)",
    "items": [
      {
        "label": "Political Science — per term",
        "amount": 21667.54
      },
      {
        "label": "Mechanical Engineering — per term",
        "amount": 31582.15
      }
    ],
    "billedSubtotal": null,
    "totalText": "Tuition per term: C$21,667.54 (Political Science) to C$31,582.15 (Mechanical Engineering); two terms are about twice that — calculated by UniPath",
    "note": "First-year international tuition for 2026–27 is unchanged from 2025–26. The English-programme entrance scholarship (C$15,000 a year) is applied automatically on enrolment but is not subtracted here."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "International Admission Entrance Scholarship",
        "amount": "C$15,000 a year off tuition",
        "eligibility": "International students newly admitted (winter 2026 or later) to an eligible undergraduate programme taught in English",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Awarded automatically on full-time enrolment; tuition is reduced immediately.",
        "basis": "automatic",
        "source": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview",
        "verified": "2026-10-15"
      },
      {
        "name": "International English Academic Excellence Scholarship",
        "amount": "C$10,000 a year (100 awards)",
        "eligibility": "International students with an admission average of 90% or more, in an eligible English programme",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview",
        "verified": "2026-10-15"
      },
      {
        "name": "Differential Tuition Fee Exemption Scholarship",
        "amount": "Varies by programme",
        "eligibility": "International francophone and francophile students in a programme taught in French or in French Immersion",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": null,
        "basis": "automatic",
        "source": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview",
        "verified": "2026-10-15"
      },
      {
        "name": "University of Ottawa Admission Scholarship",
        "amount": "C$1,000–C$3,000",
        "eligibility": "Full-time direct-entry students with an average of 85–100%",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Need-based aid for international first-year students is not described on the pages read."
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "uOttawa — application deadlines",
      "url": "https://www.uottawa.ca/study/undergraduate-studies/application-deadlines"
    },
    {
      "label": "uOttawa — language requirements",
      "url": "https://www.uottawa.ca/study/undergraduate-studies/language-requirements"
    },
    {
      "label": "uOttawa — international tuition 2026-27",
      "url": "https://www.uottawa.ca/study/fees-financial-support/university-fees/tuition-international"
    },
    {
      "label": "uOttawa — scholarships and awards 2027-2028",
      "url": "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview"
    },
    {
      "label": "OUAC — undergraduate fees",
      "url": "https://www.ouac.on.ca/guide/undergrad-fees"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English and French requirements",
      "tuition",
      "scholarships"
    ],
    "unconfirmed": [
      "test policy",
      "requirements for Uzbekistan",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "uOttawa",
    "U Ottawa",
    "Université d’Ottawa",
    "Universite d'Ottawa"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "business": {
      "program": "Commerce (Telfer School of Management)",
      "level": "bachelor",
      "language": "English",
      "url": "https://dnn.uottawa.ca/en/Utilities/University-Fees/Tuition-Fees-INTL",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Mechanical Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://dnn.uottawa.ca/en/Utilities/University-Fees/Tuition-Fees-INTL",
      "checked": "2026-10-15"
    },
    "biology": {
      "program": "Biology",
      "level": "bachelor",
      "language": "English",
      "url": "https://dnn.uottawa.ca/en/Utilities/University-Fees/Tuition-Fees-INTL",
      "checked": "2026-10-15"
    },
    "social-sciences": {
      "program": "Political Science",
      "level": "bachelor",
      "language": "English",
      "url": "https://dnn.uottawa.ca/en/Utilities/University-Fees/Tuition-Fees-INTL",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "university-of-calgary",
  "name": "University of Calgary",
  "shortName": "UCalgary",
  "country": "ca",
  "city": "Calgary",
  "region": "Alberta",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4b2e83",
    "c2": "#2c1a4d",
    "initials": "C"
  },
  "description": "A research university in Calgary, Alberta. International applications open on 15 August, earlier than for Canadians.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "engineering",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "engineering",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.ucalgary.ca/",
    "admissions": "https://www.ucalgary.ca/future-students/undergraduate/admissions/how-to-apply",
    "internationalAdmissions": "https://www.ucalgary.ca/future-students/undergraduate/information/international-students",
    "applicationPortal": "https://www.applyalberta.ca/",
    "scholarships": "https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship",
    "financialAid": "https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship",
    "programs": "https://www.ucalgary.ca/registrar/finances/understanding-your-fees/undergraduate-student-cost-estimator",
    "cost": "https://www.ucalgary.ca/registrar/finances/understanding-your-fees/undergraduate-student-cost-estimator"
  },
  "admissions": {
    "platforms": [
      "ApplyAlberta",
      "UCalgary Student Centre"
    ],
    "deadlines": [
      {
        "name": "Prestige Award application (incl. International Entrance Scholarship)",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Documents by 15 December.",
        "status": "confirmed",
        "source": "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Application deadline, including the application fee",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Supporting documents (unofficial transcripts)",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-15",
        "date": "15 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Dance, Music and Visual Studies audition and portfolio by 4 March.",
        "status": "confirmed",
        "source": "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Accept an offer dated 1 April or earlier",
        "kind": "reply",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-01",
        "date": "1 May 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Later offers: 30 days from the offer date.",
        "status": "confirmed",
        "source": "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      }
    ],
    "applicationFee": {
      "amount": 145,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "For applicants with any international education (C$125 with Canadian education only); non-refundable.",
      "source": "https://www.ucalgary.ca/future-students/undergraduate/admissions/how-to-apply",
      "verified": "2026-10-15"
    },
    "documents": [
      "ApplyAlberta / UCalgary application",
      "Unofficial transcripts, then final official transcripts",
      "English test result unless exempt"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": null
    },
    "toefl": {
      "min": 86,
      "recommended": null,
      "note": "Tests before 21 January 2026: 86. Tests from 21 January 2026 (1–6 scale): 4.5.",
      "scales": [
        {
          "period": "pre2026",
          "min": 86,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ]
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": null
    },
    "waiver": null,
    "note": "Nursing and Education require higher scores."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": null,
      "note": "Not checked on the pages read."
    },
    "act": {
      "policy": null,
      "note": "Not checked on the pages read."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "includes": "tuition, general fees (health and dental plan, UPass, recreation), residence and meal plan. Books are extra",
      "tuition": 30782.0,
      "budget": 43081.8,
      "budgetMax": 52582.8
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International first-year students, two terms, in residence with a meal plan; university estimator",
    "source": "https://www.ucalgary.ca/registrar/finances/understanding-your-fees/undergraduate-student-cost-estimator",
    "verified": "2026-10-15",
    "headline": "C$43,081.80 for two terms (Arts or Science, 2026–27)",
    "items": [
      {
        "label": "Tuition, Faculty of Arts or Science",
        "amount": 30782.0
      },
      {
        "label": "General fees",
        "amount": 1787.8
      },
      {
        "label": "Residence (double room, Kananaskis or Rundle Hall)",
        "amount": 4512.0
      },
      {
        "label": "Meal plan (Unlimited 7 Day)",
        "amount": 6000.0
      }
    ],
    "billedSubtotal": null,
    "totalText": "C$43,081.80 for two terms in Arts or Science with residence and meals; C$44,678.80 in Business and C$52,582.80 in Engineering",
    "note": "“Tuition estimates are valid up to April 2027.” The estimator is “an estimate tool and actual costs may vary.”"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": null
    },
    "merit": [
      {
        "name": "University of Calgary International Entrance Scholarship",
        "amount": "C$20,000, renewable",
        "eligibility": "Two a year: international students entering first year who meet the English requirement; academic merit",
        "deadline": null,
        "application": "High School Prestige Awards application in the My UCalgary portal (by 1 December)",
        "renewable": true,
        "note": "Renewable in years 2–4 with a GPA of 2.60 over at least 24 units and continued international fee status.",
        "basis": "merit",
        "source": "https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Need-based aid for international first-year students is not described on the pages read."
    }
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "sources": [
    {
      "label": "UCalgary — dates and deadlines",
      "url": "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates"
    },
    {
      "label": "UCalgary — how to apply and fee",
      "url": "https://www.ucalgary.ca/future-students/undergraduate/admissions/how-to-apply"
    },
    {
      "label": "UCalgary — English language requirements",
      "url": "https://www.ucalgary.ca/future-students/undergraduate/admissions/how-to-apply/english-language-requirements"
    },
    {
      "label": "UCalgary — cost estimator 2026-27",
      "url": "https://www.ucalgary.ca/registrar/finances/understanding-your-fees/undergraduate-student-cost-estimator"
    },
    {
      "label": "UCalgary — International Entrance Scholarship",
      "url": "https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English requirements",
      "costs",
      "scholarships"
    ],
    "unconfirmed": [
      "test policy",
      "requirements for Uzbekistan",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "UCalgary",
    "U of C"
  ],
  "programsBasis": "evidence",
  "province": "AB",
  "programEvidence": {
    "business": {
      "program": "Haskayne School of Business",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.ucalgary.ca/registrar/finances/understanding-your-fees/undergraduate-student-cost-estimator",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Schulich School of Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.ucalgary.ca/registrar/finances/understanding-your-fees/undergraduate-student-cost-estimator",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Dance, Music and Visual Studies programmes",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
}
);
