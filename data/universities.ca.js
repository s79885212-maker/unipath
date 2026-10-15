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
},

{
  "id": "queens-university",
  "name": "Queen’s University",
  "shortName": "Queen’s",
  "country": "ca",
  "city": "Kingston",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#3d3d5c",
    "c2": "#1f1f2e",
    "initials": "QS"
  },
  "description": "A residential research university in Kingston, Ontario, between Toronto and Montreal, with the Smith School of Business and Smith Engineering.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "humanities",
    "medicine"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "humanities",
    "medicine"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.queensu.ca/",
    "admissions": "https://www.queensu.ca/admission/applying/dates-deadlines",
    "internationalAdmissions": "https://www.queensu.ca/admission/applicants/english-proficiency",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://www.queensu.ca/registrar/financial-aid/specific-students/international",
    "financialAid": "https://www.queensu.ca/registrar/financial-aid/specific-students/international",
    "programs": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator",
    "cost": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)",
      "SOLUS (Queen’s student portal)"
    ],
    "deadlines": [
      {
        "name": "Recommended OUAC application date to reach the Major Admission Award application",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-20",
        "date": "20 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "The university advises applying by 15 November so the SOLUS account is ready in time.",
        "status": "confirmed",
        "source": "https://www.queensu.ca/admission/applying/dates-deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Major Admission Award application on SOLUS",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-08",
        "date": "8 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.queensu.ca/admission/applying/dates-deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: Commerce, Health Sciences and Nursing",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Supplementary applications for these programmes are due 15 February 2027.",
        "status": "confirmed",
        "source": "https://www.queensu.ca/admission/applying/dates-deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: all other first-year programmes",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.queensu.ca/admission/applying/dates-deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "All documents, including transcripts and English test scores",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-31",
        "date": "31 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.queensu.ca/admission/applying/dates-deadlines",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$95 for Queen’s (including transfer-credit evaluation), charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application",
      "Transcripts and final results",
      "English test result unless exempt",
      "Supplementary application for Commerce, Health Sciences and Nursing"
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
      "note": "Academic; no band below 6.0."
    },
    "toefl": {
      "min": 88,
      "recommended": null,
      "note": "Tests before 21 January 2026: 88 with at least 20 in each section. Tests from 21 January 2026 (1–6 scale): 4.5 with no skill below 4.0. Home Edition accepted.",
      "scales": [
        {
          "period": "pre2026",
          "min": 88,
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
    "note": "CAEL 70 (no band below 60); PTE 60; Cambridge 175 (no part below 170); LanguageCert Academic 70 (65 in each part). Results are valid for two years. The QBridge pathway exists for lower scores."
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
      "includes": "tuition, UHIP, other mandatory fees (estimate), books (estimate), double room with meal plan",
      "tuition": 44810.0,
      "budget": 65996.8,
      "budgetMax": 82026.8
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International first-year students in residence (double room, mandatory meal plan); university fee calculator",
    "source": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator",
    "verified": "2026-10-15",
    "headline": "C$65,996.80–C$82,026.80 for a first year in residence (2026–27)",
    "items": [
      {
        "label": "Tuition, Arts (Faculty of Arts and Science)",
        "amount": 44810.0
      },
      {
        "label": "Tuition, Computing",
        "amount": 54809.0
      },
      {
        "label": "Tuition, Smith Engineering (common first year)",
        "amount": 59284.0
      },
      {
        "label": "Tuition, Smith School of Business (Commerce)",
        "amount": 60840.0
      },
      {
        "label": "University Health Insurance Plan (UHIP), mandatory",
        "amount": 792.0
      },
      {
        "label": "Other mandatory and programme fees (estimate)",
        "amount": 1500.0
      },
      {
        "label": "Books",
        "amount": 1800.0
      },
      {
        "label": "Residence, double room, with mandatory meal plan",
        "amount": 17094.8
      }
    ],
    "billedSubtotal": null,
    "totalText": "The calculator totals C$65,996.80 for Arts, C$75,995.80 for Computing, C$80,470.80 for Engineering and C$82,026.80 for Commerce, with residence, meals, UHIP, fees and books",
    "note": "“2026-2027 rates are provided as information only and are subject to review.” Personal costs and travel are not in the calculator."
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
        "name": "Dean’s International Award (Arts and Science)",
        "amount": "C$5,000–C$25,000 a year",
        "eligibility": "International fee-paying students entering first year, by academic achievement",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Renewable for three more years with full-time study in the original faculty. Commerce (C$15,000, C$20,000 or C$25,000 a year), Engineering (C$10,000–C$25,000) and Health Sciences (C$10,000 or C$15,000) have their own versions.",
        "basis": "merit",
        "source": "https://www.queensu.ca/registrar/financial-aid/specific-students/international",
        "verified": "2026-10-15"
      },
      {
        "name": "Major Admission Awards",
        "amount": null,
        "eligibility": "Applicants with a strong record of achievement; open to domestic and international applicants",
        "deadline": null,
        "application": "Separate application on SOLUS by 8 December 2026",
        "renewable": null,
        "note": "Amounts are not given on the pages read.",
        "basis": "merit",
        "source": "https://www.queensu.ca/admission/applying/dates-deadlines",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Principal’s Global Scholars supports forcibly displaced students; general need-based aid for international first-year students is not described on the pages read.",
      "source": "https://www.queensu.ca/registrar/financial-aid/specific-students/international",
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
      "label": "Queen’s — dates and deadlines",
      "url": "https://www.queensu.ca/admission/applying/dates-deadlines"
    },
    {
      "label": "Queen’s — English proficiency",
      "url": "https://www.queensu.ca/admission/applicants/english-proficiency"
    },
    {
      "label": "Queen’s — fee calculator 2026-27",
      "url": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator"
    },
    {
      "label": "Queen’s — awards for international students",
      "url": "https://www.queensu.ca/registrar/financial-aid/specific-students/international"
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
    "Queens University",
    "Queen's",
    "Queens",
    "QU",
    "Smith School of Business"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "business": {
      "program": "Commerce (Smith School of Business)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computing",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Smith Engineering — Common First Year",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator",
      "checked": "2026-10-15"
    },
    "humanities": {
      "program": "Arts (Faculty of Arts and Science)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.queensu.ca/registrar/tuition-fees/undergraduate/fee-calculator",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Nursing",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.queensu.ca/admission/applying/dates-deadlines",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "dalhousie-university",
  "name": "Dalhousie University",
  "shortName": "Dal",
  "country": "ca",
  "city": "Halifax",
  "region": "Nova Scotia",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4b2e83",
    "c2": "#2c1a4d",
    "initials": "D"
  },
  "description": "Atlantic Canada’s largest research university, in Halifax, Nova Scotia, with an agricultural campus in Truro. International tuition is guaranteed for the length of the programme.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "humanities",
    "computer-science",
    "engineering",
    "business",
    "medicine"
  ],
  "englishTaughtPrograms": [
    "humanities",
    "computer-science",
    "engineering",
    "business",
    "medicine"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.dal.ca/",
    "admissions": "https://www.dal.ca/admissions/dates-and-deadlines.html",
    "internationalAdmissions": "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/international-applicants/international-admissions-requirements-by-country.html",
    "applicationPortal": "https://www.dal.ca/admissions/",
    "scholarships": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html",
    "financialAid": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html",
    "programs": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html",
    "cost": "https://www.dal.ca/admissions/cost-and-payment/tuition/undergraduate-program-tuition.html"
  },
  "admissions": {
    "platforms": [
      "Dalhousie online application"
    ],
    "deadlines": [
      {
        "name": "Entrance award application (General Entrance Award program)",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "High school applicants are encouraged to apply for admission early enough to meet this deadline.",
        "status": "confirmed",
        "source": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: Nursing, Health Sciences, Medical Sciences, Social Work",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.dal.ca/admissions/dates-and-deadlines.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline: Environmental Design Studies (Architecture)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.dal.ca/admissions/dates-and-deadlines.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Accept the offer (admission deposit) and prove English proficiency",
        "kind": "reply",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-01",
        "date": "1 May 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Other programmes have no fixed deadline: applications are considered while space remains, before classes start in September.",
        "status": "confirmed",
        "source": "https://www.dal.ca/admissions/dates-and-deadlines.html",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": null,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "The amount was not found on the pages read.",
      "source": "https://www.dal.ca/admissions/",
      "verified": "2026-10-15"
    },
    "documents": [
      "Online application",
      "Transcripts",
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
      "note": "No band below 6.0."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "note": "0–120 scale: 90 with 20 in each band. 1–6 scale: 4.5 with 4.5 in Listening and 4.0 in Reading, Speaking and Writing.",
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
      "note": null
    },
    "waiver": null,
    "note": "MELAB 55 and CAEL are also accepted. Conditional admission is possible; proof is due by 1 May for autumn entry."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": null,
      "note": "Not stated: the requirements for U.S. high school applicants on the page read list no SAT or ACT."
    },
    "act": {
      "policy": null,
      "note": "Not stated: the requirements for U.S. high school applicants on the page read list no SAT or ACT."
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Akademik Litsey Diplomi (Diploma of Academic Lyceum)."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only in the main figure; fees, housing and food are shown separately",
      "tuition": 37992
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International first-year students; tuition guaranteed for the programme",
    "source": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html",
    "verified": "2026-10-15",
    "headline": "C$30,906–C$48,594 tuition a year (2026–27, guaranteed)",
    "items": [
      {
        "label": "Tuition, Agriculture",
        "amount": 30906
      },
      {
        "label": "Tuition, Arts and Social Sciences or Science",
        "amount": 37992
      },
      {
        "label": "Tuition, Computer Science",
        "amount": 41688
      },
      {
        "label": "Tuition, Management",
        "amount": 42042
      },
      {
        "label": "Tuition, Engineering",
        "amount": 48594
      },
      {
        "label": "Tuition and fees, fall and winter terms (university range)",
        "min": 33091,
        "max": 51503
      },
      {
        "label": "Residence: lodging and meal plan",
        "min": 12877,
        "max": 16792
      }
    ],
    "billedSubtotal": null,
    "totalText": "Guaranteed tuition for 2026–27 from C$30,906 (Agriculture) to C$48,594 (Engineering); with fees the university estimates C$33,091–C$51,503, and residence with meals C$12,877–C$16,792",
    "note": "Estimates “are based on approved 2026–2027 rates”. The guarantee keeps tuition fixed for the length of the programme, paid half in fall and half in winter. The rate for students entering in 2027 is not yet published."
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
        "name": "Dalhousie General Entrance Awards",
        "amount": null,
        "eligibility": "Domestic and international first-year applicants",
        "deadline": null,
        "application": "One application for the 2027–28 program, open 1 October 2026 to 15 February 2027",
        "renewable": null,
        "note": "More than 2,000 entrance awards; some are for merit, some for financial need and some for both. Some can be renewed for up to four years.",
        "basis": "need-merit",
        "source": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html",
        "verified": "2026-10-15"
      },
      {
        "name": "Sankofa Scholarship",
        "amount": "C$48,000 (C$12,000 a year)",
        "eligibility": "One international student of Black/African descent from the Caribbean",
        "deadline": null,
        "application": null,
        "renewable": null,
        "note": null,
        "basis": "merit",
        "source": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Some General Entrance Awards are based on financial need, and international applicants may apply.",
      "source": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html",
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
      "label": "Dalhousie — dates and deadlines",
      "url": "https://www.dal.ca/admissions/dates-and-deadlines.html"
    },
    {
      "label": "Dalhousie — undergraduate tuition",
      "url": "https://www.dal.ca/admissions/cost-and-payment/tuition/undergraduate-program-tuition.html"
    },
    {
      "label": "Dalhousie — international tuition guarantee",
      "url": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html"
    },
    {
      "label": "Dalhousie — English requirements",
      "url": "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/international-applicants/english-language-requirements.html"
    },
    {
      "label": "Dalhousie — requirements by country",
      "url": "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/international-applicants/international-admissions-requirements-by-country.html"
    },
    {
      "label": "Dalhousie — entrance awards",
      "url": "https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English requirements",
      "tuition",
      "scholarships",
      "requirements for Uzbekistan"
    ],
    "unconfirmed": [
      "application fee",
      "test policy",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "Dal",
    "Dalhousie"
  ],
  "programsBasis": "evidence",
  "province": "NS",
  "campuses": [
    "Halifax",
    "Agricultural Campus (Truro)"
  ],
  "programEvidence": {
    "humanities": {
      "program": "Faculty of Arts and Social Sciences",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Faculty of Computer Science",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Faculty of Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html",
      "checked": "2026-10-15"
    },
    "business": {
      "program": "Faculty of Management",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.dal.ca/admissions/cost-and-payment/tuition/international-tuition-guarantee.html",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Bachelor of Science (Nursing)",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.dal.ca/admissions/dates-and-deadlines.html",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "simon-fraser-university",
  "name": "Simon Fraser University",
  "shortName": "SFU",
  "country": "ca",
  "city": "Burnaby",
  "region": "British Columbia",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4b2e83",
    "c2": "#2c1a4d",
    "initials": "SF"
  },
  "description": "A research university in Metro Vancouver with campuses in Burnaby, Surrey and downtown Vancouver, applied to through EducationPlannerBC. Fraser International College offers a pathway for international students.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "social-sciences",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "social-sciences",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.sfu.ca/",
    "admissions": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
    "internationalAdmissions": "https://www.sfu.ca/students/admission/admission-requirements/english-language-requirement.html",
    "applicationPortal": "https://www.educationplannerbc.ca/",
    "scholarships": "https://www.sfu.ca/students/admission/fees-scholarships/uses.html",
    "financialAid": "https://www.sfu.ca/students/admission/fees-scholarships.html",
    "programs": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
    "cost": "https://www.sfu.ca/students/admission/fees-scholarships.html"
  },
  "admissions": {
    "platforms": [
      "EducationPlannerBC"
    ],
    "deadlines": [
      {
        "name": "Undergraduate Scholars Entrance Scholarship (USES) application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-15",
        "date": "15 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Supporting documents by 31 January 2027.",
        "status": "confirmed",
        "source": "https://www.sfu.ca/students/admission/fees-scholarships/uses.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-31",
        "date": "31 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Applications opened on 1 October 2026; decisions are sent from January to late April on a rolling basis.",
        "status": "confirmed",
        "source": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Beedie School of Business To-Do List items; Contemporary Arts supplemental (audition, interview or portfolio)",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-07",
        "date": "7 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Admission documents for all high school applicants",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-28",
        "date": "28 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Accept your offer; residence application",
        "kind": "reply",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-01",
        "date": "1 May 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      }
    ],
    "applicationFee": {
      "amount": null,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid through EducationPlannerBC; the amount was not read.",
      "source": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
      "verified": "2026-10-15"
    },
    "documents": [
      "EducationPlannerBC application",
      "Transcripts by 28 February",
      "English test result unless exempt",
      "Supplemental items for Beedie and Contemporary Arts"
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
      "note": "Academic; no part below 6.0. One Skill Retake not accepted."
    },
    "toefl": {
      "min": 88,
      "recommended": null,
      "note": "Tests before 21 January 2026: 88 with no part below 20. Tests from 21 January 2026 (1–6 scale): 4.5 with no part below 4.0. One sitting; MyBest not used; Home Edition accepted.",
      "scales": [
        {
          "period": "pre2026",
          "min": 88,
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
      "note": null
    },
    "waiver": null,
    "note": "Cambridge 176 (169 in each part); CAEL 70 (60 in each part); PTE 65 (60 in each part); LanguageCert 70 (65 in each part)."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "“The SAT/ACT requirement is optional for students applying for Fall 2024 admission onwards”; applicants without scores are not at a disadvantage.",
      "source": "https://www.sfu.ca/students/admission/admission-requirements/usa-highschool.html",
      "verified": "2026-10-15"
    },
    "act": {
      "policy": "optional",
      "note": "“The SAT/ACT requirement is optional for students applying for Fall 2024 admission onwards”; applicants without scores are not at a disadvantage.",
      "source": "https://www.sfu.ca/students/admission/admission-requirements/usa-highschool.html",
      "verified": "2026-10-15"
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "includes": "tuition, fees, transit pass, books, single room with meals, medical insurance",
      "tuition": 38944,
      "budget": 57303
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International first-year student, 10 courses (30 units) in Arts and Social Sciences or Science, single room in residence",
    "source": "https://www.sfu.ca/students/admission/fees-scholarships.html",
    "verified": "2026-10-15",
    "headline": "C$57,303 for one year (2026–27, university estimate)",
    "items": [
      {
        "label": "Tuition and fees (including transit pass)",
        "amount": 38944
      },
      {
        "label": "Textbooks, technology and supplies",
        "amount": 2400
      },
      {
        "label": "Single residence room (North Towers) with meal plan",
        "amount": 15014
      },
      {
        "label": "Medical insurance",
        "amount": 945
      }
    ],
    "billedSubtotal": null,
    "totalText": "SFU estimates C$57,303 for two terms: tuition and fees C$38,944, books and supplies C$2,400, residence with meals C$15,014 and insurance C$945",
    "note": "For a typical Arts and Social Sciences or Science programme; other faculties differ. Tuition for current students “may increase by up to 6% on an annual basis”."
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
        "name": "Undergraduate Scholars Entrance Scholarship (USES)",
        "amount": "Up to C$140,000 for international students",
        "eligibility": "Canadian and international high school applicants for fall entry with at least a 90% average (or 31 IB points)",
        "deadline": null,
        "application": "Separate application, 1 October to 15 December 2026",
        "renewable": true,
        "note": "Values run from C$20,000 up to C$140,000 for international students; the top value is a competitive maximum.",
        "basis": "merit",
        "source": "https://www.sfu.ca/students/admission/fees-scholarships/uses.html",
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
      "label": "SFU — fall 2027 dates for high school applicants",
      "url": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html"
    },
    {
      "label": "SFU — fees and scholarships",
      "url": "https://www.sfu.ca/students/admission/fees-scholarships.html"
    },
    {
      "label": "SFU — USES",
      "url": "https://www.sfu.ca/students/admission/fees-scholarships/uses.html"
    },
    {
      "label": "SFU — English language requirement",
      "url": "https://www.sfu.ca/students/admission/admission-requirements/english-language-requirement.html"
    },
    {
      "label": "SFU — U.S. high school requirements",
      "url": "https://www.sfu.ca/students/admission/admission-requirements/usa-highschool.html"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "English requirements",
      "test policy",
      "costs",
      "scholarships"
    ],
    "unconfirmed": [
      "application fee",
      "requirements for Uzbekistan",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "SFU",
    "Simon Fraser"
  ],
  "programsBasis": "evidence",
  "province": "BC",
  "campuses": [
    "Burnaby",
    "Surrey",
    "Vancouver"
  ],
  "programEvidence": {
    "business": {
      "program": "Beedie School of Business",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
      "checked": "2026-10-15"
    },
    "social-sciences": {
      "program": "Faculty of Arts and Social Sciences",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.sfu.ca/students/admission/fees-scholarships.html",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "School for the Contemporary Arts",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "universite-laval",
  "name": "Université Laval",
  "shortName": "ULaval",
  "country": "ca",
  "city": "Quebec City",
  "region": "Quebec",
  "founded": null,
  "type": "Public research university (French-language)",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4b2e83",
    "c2": "#2c1a4d",
    "initials": "UL"
  },
  "description": "The oldest French-language university in North America, in Quebec City. Teaching is in French; most bachelor’s programmes have an institutional French requirement. International students in Quebec also need a Quebec Acceptance Certificate (CAQ).",
  "englishTaught": false,
  "languageOfInstruction": "French",
  "programs": [
    "medicine"
  ],
  "englishTaughtPrograms": [],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.ulaval.ca/",
    "admissions": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot",
    "internationalAdmissions": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot",
    "applicationPortal": "https://www.ulaval.ca/admission",
    "scholarships": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-etranger",
    "financialAid": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-etranger",
    "programs": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot",
    "cost": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-de-linternational/programmes-de-1er-cycle/automne-2026-hiver-2027"
  },
  "admissions": {
    "platforms": [
      "Université Laval online application"
    ],
    "deadlines": [
      {
        "name": "Application deadline: quota programmes (medicine, pharmacy, occupational therapy, physiotherapy, sexology, biomedical sciences)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Application deadline: limited-capacity and open bachelor’s programmes",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "An application filed after the deadline is moved to a later term. Immigration steps can take four to six months.",
        "status": "confirmed",
        "source": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      }
    ],
    "applicationFee": {
      "amount": 104.53,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "For a new applicant who has never studied at Université Laval.",
      "source": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/frais-douverture-et-danalyse-de-dossier",
      "verified": "2026-10-15"
    },
    "documents": [
      "Online application",
      "Transcripts",
      "Proof of French where required"
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
    "note": "Teaching is in French; English is not an admission requirement. French: without an exemption, the TCF tout public with the written expression test (valid two years) or the Test de français Laval-Montréal (TFLM); results can lead to admission with required French courses."
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
      "includes": "tuition, foreign-student supplement and required fees for one term; insurance, housing and food are extra",
      "tuition": 14116.48,
      "period": "semester"
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International bachelor’s students, 15 credits a term (one term shown)",
    "source": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-de-linternational/programmes-de-1er-cycle/automne-2026-hiver-2027",
    "verified": "2026-10-15",
    "headline": "C$14,116.48 a term for 15 credits (2026–27)",
    "items": [
      {
        "label": "Tuition (droits de scolarité)",
        "amount": 1558.8
      },
      {
        "label": "Supplementary fees for foreign students (C$799.23 a credit)",
        "amount": 11988.45
      },
      {
        "label": "Management, related, technology and transit (LPU) fees",
        "amount": 569.23
      }
    ],
    "billedSubtotal": null,
    "totalText": "Partial total of C$14,116.48 per term for 15 credits; student association fees and health insurance (C$900 a year, on the first fall bill) are extra",
    "note": "Page updated 9 September 2026 for the 2026–2027 year. Students from France and francophone Belgium, and quota exemptions granted by the Quebec government, pay less."
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
        "name": "Exemption from supplementary fees (Quebec government quotas)",
        "amount": "Removes the foreign-student supplement",
        "eligibility": "Citizens of the countries on the Quebec government’s list",
        "deadline": null,
        "application": null,
        "renewable": null,
        "note": "Country quotas set by the Quebec government; Uzbekistan’s place on the list was not checked.",
        "basis": "partnership",
        "source": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-etranger",
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
      "label": "ULaval — application deadlines",
      "url": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot"
    },
    {
      "label": "ULaval — application fee",
      "url": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/frais-douverture-et-danalyse-de-dossier"
    },
    {
      "label": "ULaval — French requirement",
      "url": "https://www.reg.ulaval.ca/information-relative-a-la-maitrise-du-francais-a-luniversite-laval"
    },
    {
      "label": "ULaval — international tuition 2026-27",
      "url": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-de-linternational/programmes-de-1er-cycle/automne-2026-hiver-2027"
    },
    {
      "label": "ULaval — fees for foreign students",
      "url": "https://www.ulaval.ca/etudes/droits-de-scolarite/etudiant-etranger"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "French requirement",
      "tuition"
    ],
    "unconfirmed": [
      "entrance scholarships for international students",
      "requirements for Uzbekistan",
      "full list of programmes",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "ULaval",
    "Universite Laval",
    "Laval University",
    "Laval"
  ],
  "programsBasis": "evidence",
  "province": "QC",
  "programEvidence": {
    "medicine": {
      "program": "Doctorat en médecine (programme contingenté)",
      "level": "bachelor",
      "language": "French",
      "url": "https://www.ulaval.ca/admission/deposez-votre-demande-dadmission/dates-limites-de-depot",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial",
  "frenchRequirement": {
    "level": null,
    "note": "Institutional French requirement, at admission or before graduation depending on the programme; the level is set per programme.",
    "source": "https://www.reg.ulaval.ca/information-relative-a-la-maitrise-du-francais-a-luniversite-laval",
    "verified": "2026-10-15"
  }
},

{
  "id": "university-of-saskatchewan",
  "name": "University of Saskatchewan",
  "shortName": "USask",
  "country": "ca",
  "city": "Saskatoon",
  "region": "Saskatchewan",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#1f3a5f",
    "c2": "#0f1f33",
    "initials": "S"
  },
  "description": "A research university in Saskatoon with most colleges on one campus, from Agriculture and Bioresources to Engineering and the Edwards School of Business.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "engineering",
    "computer-science",
    "humanities",
    "medicine"
  ],
  "englishTaughtPrograms": [
    "business",
    "engineering",
    "computer-science",
    "humanities",
    "medicine"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.usask.ca/",
    "admissions": "https://admissions.usask.ca/requirements/apply.php",
    "internationalAdmissions": "https://admissions.usask.ca/requirements/english-language-proficiency.php",
    "applicationPortal": "https://apply.usask.ca/",
    "scholarships": "https://admissions.usask.ca/money/scholarships.php",
    "financialAid": "https://admissions.usask.ca/money/scholarships.php",
    "programs": "https://admissions.usask.ca/money/tuition.php",
    "cost": "https://admissions.usask.ca/money/tuition.php"
  },
  "admissions": {
    "platforms": [
      "USask online application"
    ],
    "deadlines": [
      {
        "name": "Apply with documents to be considered for USask Entrance Scholarships",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://admissions.usask.ca/money/scholarships.php",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Apply for admission to be eligible for international student awards",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://admissions.usask.ca/money/scholarships.php",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "International application deadline (Arts and Science)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-01",
        "date": "1 May 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Documents due 1 June 2027. Other colleges set their own dates.",
        "status": "confirmed",
        "source": "https://admissions.usask.ca/computer-science.php",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 120,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Minimum, non-refundable, for most programmes; covers a first and a second choice.",
      "source": "https://admissions.usask.ca/requirements/apply.php",
      "verified": "2026-10-15"
    },
    "documents": [
      "USask online application",
      "Transcripts",
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
      "note": "Academic; 6 in each band."
    },
    "toefl": {
      "min": 86,
      "recommended": null,
      "note": "Tests before 21 January 2026: 86 with 19 in each part (accepted for two years). Tests from 21 January 2026 (1–6 scale): 4.5 with 4 in each part. Special Home Edition accepted.",
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
      "note": "100 in Literacy, Conversation, Comprehension and Production (from 1 January 2026)."
    },
    "waiver": null,
    "note": "PTE 63 (59 in each part); CAEL 70 (60 in each part); Cambridge C1 176."
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
      "includes": "tuition only in the main figure; student fees shown separately; housing and food extra",
      "tuition": 39007
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International first-year students, full course load in fall and winter (estimates)",
    "source": "https://admissions.usask.ca/money/tuition.php",
    "verified": "2026-10-15",
    "headline": "C$39,007–C$59,383 tuition a year (2026–27 estimate)",
    "items": [
      {
        "label": "Tuition, Arts and Science — Arts",
        "amount": 39007
      },
      {
        "label": "Tuition, Arts and Science — Science",
        "amount": 40894
      },
      {
        "label": "Tuition, Agriculture and Bioresources",
        "amount": 41964
      },
      {
        "label": "Tuition, Edwards School of Business",
        "amount": 48932
      },
      {
        "label": "Tuition, Engineering",
        "amount": 59383
      },
      {
        "label": "Tuition, Pharmacy (PharmD), year 1",
        "amount": 73618
      },
      {
        "label": "Student fees (full-time, on campus; incl. transit pass, health and dental)",
        "amount": 1331.66
      }
    ],
    "billedSubtotal": null,
    "totalText": "Tuition estimates for a first-year full course load from C$39,007 (Arts) to C$59,383 (Engineering); PharmD C$73,618; student fees C$1,331.66",
    "note": null
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
        "name": "University of Saskatchewan International Excellence Award",
        "amount": "C$10,000",
        "eligibility": "International applicants who apply for admission by 15 February",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": "One award offered.",
        "basis": "merit",
        "source": "https://admissions.usask.ca/money/scholarships.php",
        "verified": "2026-10-15"
      },
      {
        "name": "International Baccalaureate Excellence Award",
        "amount": "C$20,000",
        "eligibility": "International applicants with the IB Diploma who apply by 15 February",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": "One award offered.",
        "basis": "merit",
        "source": "https://admissions.usask.ca/money/scholarships.php",
        "verified": "2026-10-15"
      },
      {
        "name": "USask Entrance Scholarships",
        "amount": "C$5,000",
        "eligibility": "Direct-entry high school applicants who apply with documents by 1 December; about 600 a year",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": "Awarded by admission average; the eligibility text read names no citizenship limit.",
        "basis": "merit",
        "source": "https://admissions.usask.ca/money/scholarships.php",
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
      "label": "USask — Computer Science (deadlines)",
      "url": "https://admissions.usask.ca/computer-science.php"
    },
    {
      "label": "USask — how to apply and fee",
      "url": "https://admissions.usask.ca/requirements/apply.php"
    },
    {
      "label": "USask — tuition 2026-27",
      "url": "https://admissions.usask.ca/money/tuition.php"
    },
    {
      "label": "USask — English proficiency",
      "url": "https://admissions.usask.ca/requirements/english-language-proficiency.php"
    },
    {
      "label": "USask — scholarships",
      "url": "https://admissions.usask.ca/money/scholarships.php"
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
      "requirements for Uzbekistan",
      "housing costs",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "USask",
    "U of S",
    "U of Saskatchewan"
  ],
  "programsBasis": "evidence",
  "province": "SK",
  "programEvidence": {
    "business": {
      "program": "Edwards School of Business",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.usask.ca/money/tuition.php",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "College of Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.usask.ca/money/tuition.php",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computer Science (Arts and Science)",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.usask.ca/computer-science.php",
      "checked": "2026-10-15"
    },
    "humanities": {
      "program": "Arts and Science — Arts",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.usask.ca/money/tuition.php",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Pharmacy (PharmD)",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.usask.ca/money/tuition.php",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "university-of-manitoba",
  "name": "University of Manitoba",
  "shortName": "UM",
  "country": "ca",
  "city": "Winnipeg",
  "region": "Manitoba",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#3d3d5c",
    "c2": "#1f1f2e",
    "initials": "M"
  },
  "description": "Manitoba’s largest university, in Winnipeg. Many students start in University 1, a first year of broad study, before entering a faculty; others enter a faculty directly.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "humanities",
    "engineering",
    "business",
    "arts",
    "medicine",
    "education"
  ],
  "englishTaughtPrograms": [
    "humanities",
    "engineering",
    "business",
    "arts",
    "medicine",
    "education"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://umanitoba.ca/",
    "admissions": "https://umanitoba.ca/explore/undergraduate-admissions/requirements/international-admission-requirements",
    "internationalAdmissions": "https://umanitoba.ca/explore/student-experience/tuition-and-financial-supports/international",
    "applicationPortal": "https://umanitoba.ca/explore/undergraduate-admissions",
    "scholarships": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
    "financialAid": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
    "programs": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
    "cost": "https://umanitoba.ca/registrar/tuition-fees/undergraduate"
  },
  "admissions": {
    "platforms": [
      "University of Manitoba online application"
    ],
    "deadlines": [
      {
        "name": "International Excellence Entrance Scholarship deadline",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Admission application and entrance scholarship consideration",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "not-confirmed",
        "source": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
        "verified": "2026-10-15",
        "note": "The page prints “Mar. 1, 2027” but labels the line “(Fall 2026)”; the intake this date belongs to is not clear, so it is shown as not confirmed."
      }
    ],
    "applicationFee": {
      "amount": null,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "The amount was not found on the pages read.",
      "source": "https://umanitoba.ca/explore/undergraduate-admissions/requirements/international-admission-requirements",
      "verified": "2026-10-15"
    },
    "documents": [
      "Online application",
      "Transcripts",
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
      "note": "Academic or IELTS Indicator; 6.0 in each band; One Skill Retake accepted."
    },
    "toefl": {
      "min": 86,
      "recommended": null,
      "note": "Tests before 21 January 2026: 86 with 20 in each section. Tests from 21 January 2026 (1–6 scale): 4.5 with 4.0 in each section.",
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
      "note": "105 in Literacy, Comprehension, Production and Conversation; not accepted for Law."
    },
    "waiver": null,
    "note": "CAEL 60; Cambridge C1 180; PTE 58."
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
    "internationalQualifications": "Uzbekistan: Certificate of Secondary Education (O‘rta Ma’lumot To‘g‘risida Shahodatnoma / Attestat o Srednem Obrazovanii). For University 1: a minimum average of 3 (70%) over English or first-language literature, mathematics and two more academic courses, with no less than 2 (60%) in each."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition rates only; fees, housing and food extra"
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International undergraduates, tuition per credit hour",
    "source": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
    "verified": "2026-10-15",
    "headline": "C$683.43–C$895.68 per credit hour (2026–27)",
    "items": [
      {
        "label": "Arts, per credit hour",
        "amount": 689.23
      },
      {
        "label": "Engineering, per credit hour",
        "amount": 683.43
      },
      {
        "label": "Nursing, per credit hour",
        "amount": 723.22
      },
      {
        "label": "Science, per credit hour",
        "amount": 804.0
      },
      {
        "label": "Fine Arts, per credit hour",
        "amount": 825.26
      },
      {
        "label": "Management (Asper), per credit hour",
        "amount": 895.68
      },
      {
        "label": "Residence and meal plan packages (no year stated)",
        "min": 10500,
        "max": 17000
      }
    ],
    "billedSubtotal": null,
    "totalText": "International tuition is charged per credit hour (2026–27): from C$683.43 (Engineering) to C$895.68 (Asper). The university also states an average first-year international tuition and fees of C$28,000, without a year",
    "note": "Registrar page last updated 18 June 2026. University 1 students pay by the teaching unit of each course. A yearly figure is not computed here because the full-time number of credit hours was not read."
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
        "name": "International Excellence Entrance Scholarship",
        "amount": null,
        "eligibility": "Exceptional international students entering a direct-entry programme; three awards",
        "deadline": null,
        "application": "Application by 1 December 2026",
        "renewable": null,
        "note": "The value is not stated on the page read.",
        "basis": "merit",
        "source": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
        "verified": "2026-10-15"
      },
      {
        "name": "University of Manitoba General Entrance Scholarships",
        "amount": null,
        "eligibility": "All new students admitted with transcripts",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": null,
        "note": "Amounts were not read.",
        "basis": "merit",
        "source": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
        "verified": "2026-10-15"
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "“International students in their first year of post-secondary study in Canada are not eligible to apply to the general bursary program.”",
      "source": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards",
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
      "label": "UM — entrance awards and dates",
      "url": "https://umanitoba.ca/financial-aid-and-awards/entrance-awards"
    },
    {
      "label": "UM — undergraduate tuition 2026-27",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate"
    },
    {
      "label": "UM — international tuition and supports",
      "url": "https://umanitoba.ca/explore/student-experience/tuition-and-financial-supports/international"
    },
    {
      "label": "UM — English proficiency",
      "url": "https://umanitoba.ca/explore/undergraduate-admissions/requirements/english-language-proficiency-requirements"
    },
    {
      "label": "UM — international admission requirements",
      "url": "https://umanitoba.ca/explore/undergraduate-admissions/requirements/international-admission-requirements"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "English requirements",
      "tuition rates",
      "requirements for Uzbekistan",
      "scholarships"
    ],
    "unconfirmed": [
      "application deadline for autumn 2027",
      "application fee",
      "test policy",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "UManitoba",
    "U of M",
    "U of Manitoba",
    "Asper School of Business"
  ],
  "programsBasis": "evidence",
  "province": "MB",
  "programEvidence": {
    "humanities": {
      "program": "Faculty of Arts",
      "level": "bachelor",
      "language": "English",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Price Faculty of Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
      "checked": "2026-10-15"
    },
    "business": {
      "program": "Asper School of Business (Management)",
      "level": "bachelor",
      "language": "English",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Fine Arts and Music",
      "level": "bachelor",
      "language": "English",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Nursing",
      "level": "bachelor",
      "language": "English",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
      "checked": "2026-10-15"
    },
    "education": {
      "program": "Education",
      "level": "bachelor",
      "language": "English",
      "url": "https://umanitoba.ca/registrar/tuition-fees/undergraduate",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "university-of-guelph",
  "name": "University of Guelph",
  "shortName": "U of G",
  "country": "ca",
  "city": "Guelph",
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
    "initials": "G"
  },
  "description": "A university about an hour from Toronto with 75+ majors, known for agriculture, veterinary medicine and life sciences. International tuition rises by no more than 5% a year after entry.",
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
    "website": "https://www.uoguelph.ca/",
    "admissions": "https://www.uoguelph.ca/admission/undergraduate/apply/deadlines",
    "internationalAdmissions": "https://www.uoguelph.ca/admission/undergraduate/international/requirements",
    "applicationPortal": "https://www.ouac.on.ca/",
    "scholarships": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
    "financialAid": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
    "programs": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
    "cost": "https://www.uoguelph.ca/admission/undergraduate/international/funding"
  },
  "admissions": {
    "platforms": [
      "OUAC (Ontario Universities’ Application Centre)"
    ],
    "deadlines": [
      {
        "name": "Documents for early admission consideration (students outside Canada)",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Applications to Landscape Architecture close on 1 February.",
        "status": "confirmed",
        "source": "https://www.uoguelph.ca/admission/undergraduate/apply/deadlines",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Proof of English proficiency (soft deadline)",
        "kind": "documents",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.uoguelph.ca/admission/undergraduate/apply/deadlines",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Dr. Franco J. Vaccarino President’s Scholarship application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-08",
        "date": "8 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Application deadline for fall 2027 (high school students outside Canada)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-15",
        "date": "15 May 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Documents due 22 May.",
        "status": "confirmed",
        "source": "https://www.uoguelph.ca/admission/undergraduate/apply/deadlines",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Accept the offer of admission",
        "kind": "reply",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-06-01",
        "date": "1 June 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "The C$2,000 tuition deposit is due 15 June.",
        "status": "confirmed",
        "source": "https://www.uoguelph.ca/admission/undergraduate/apply/deadlines",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      }
    ],
    "applicationFee": {
      "amount": 159,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of C$95 for Guelph (C$150 for Veterinary Medicine), charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.",
      "source": "https://www.ouac.on.ca/guide/undergrad-fees",
      "verified": "2026-10-15"
    },
    "documents": [
      "OUAC application",
      "Transcripts and graduation documents",
      "English test result unless exempt",
      "Student Profile Form for some programmes"
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
      "note": "Academic; no band below 6."
    },
    "toefl": {
      "min": 89,
      "recommended": null,
      "note": "Tests before 21 January 2026: 89 with no section below 21. Tests from 21 January 2026 (1–6 scale): 4.5 with no section below 4.0. Scores must be no more than two years old at the time of application.",
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
      "min": 110,
      "recommended": null,
      "note": "Subscores may be considered."
    },
    "waiver": null,
    "note": "CAEL 70; PTE 60 (60 in each part); Cambridge C1/C2 176 (no band below 169)."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "“SAT/ACT is optional for the fall 2027 admission cycle”; scores are considered only if they help, and applicants without them are not penalized.",
      "cycle": "Fall 2027",
      "source": "https://www.uoguelph.ca/admission/undergraduate/international/requirements",
      "verified": "2026-10-15"
    },
    "act": {
      "policy": "optional",
      "note": "“SAT/ACT is optional for the fall 2027 admission cycle”; scores are considered only if they help, and applicants without them are not penalized.",
      "cycle": "Fall 2027",
      "source": "https://www.uoguelph.ca/admission/undergraduate/international/requirements",
      "verified": "2026-10-15"
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: the page refers to Russia: Certificate of (Completed) Secondary Education (Attestat) with good grades."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition in the main figure; fees, insurance, residence, meals, books and personal costs listed separately"
    },
    "academicYear": "2025–2026",
    "currency": "CAD",
    "studentCategory": "International first-year students; university estimate",
    "source": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
    "verified": "2026-10-15",
    "headline": "C$46,780–C$66,099 tuition a year (2025–26 estimates)",
    "items": [
      {
        "label": "Tuition, most bachelor’s degrees (Arts, Science, Mathematics, Fine Arts and others)",
        "amount": 46780
      },
      {
        "label": "Tuition, Commerce",
        "amount": 57112
      },
      {
        "label": "Tuition, Computing",
        "amount": 58807
      },
      {
        "label": "Tuition, Engineering",
        "amount": 66099
      },
      {
        "label": "Compulsory fees",
        "min": 1748,
        "max": 2297
      },
      {
        "label": "Health insurance (UHIP)",
        "amount": 948
      },
      {
        "label": "Residence room",
        "min": 8387,
        "max": 11742
      },
      {
        "label": "Meal plan",
        "min": 5750,
        "max": 7850
      },
      {
        "label": "Textbooks",
        "amount": 1400
      },
      {
        "label": "Personal expenses",
        "amount": 2500
      }
    ],
    "billedSubtotal": null,
    "totalText": "The page gives two different yearly totals: C$67,513–C$92,836 in its text and C$64,589–C$88,498 in its table; both are based on 2025–26",
    "note": "“Estimated costs are based on the 2025-26 academic year.” Veterinary Medicine (DVM) is C$101,634. Co-op adds C$405 a term. The C$2,000 tuition deposit is non-refundable.",
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
        "name": "President’s International Entrance Scholarship",
        "amount": "C$32,500–C$42,500 over four years",
        "eligibility": "International students by admission average (70% and above)",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Year 1: C$20,000 (95%+), C$16,000 (90–94.9%), C$13,000 (85–89.9%) or C$10,000 (70–84.9%); then C$7,500 a year in years 2–4 with full-time study and an 80% average.",
        "basis": "merit",
        "source": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
        "verified": "2026-10-15"
      },
      {
        "name": "Dr. Franco J. Vaccarino President’s Scholarship",
        "amount": "C$42,500",
        "eligibility": "Two top international fee-paying students with academic excellence and contributions to school and community",
        "deadline": null,
        "application": "Application by 8 March 2027",
        "renewable": null,
        "note": "Includes guaranteed on-campus residence and first-choice room in first year. A competitive award; it is not counted as received.",
        "basis": "merit",
        "source": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
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
      "label": "Guelph — dates and deadlines",
      "url": "https://www.uoguelph.ca/admission/undergraduate/apply/deadlines"
    },
    {
      "label": "Guelph — international costs and scholarships",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding"
    },
    {
      "label": "Guelph — English proficiency",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/english-proficiency"
    },
    {
      "label": "Guelph — international requirements",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/requirements"
    },
    {
      "label": "OUAC — undergraduate fees",
      "url": "https://www.ouac.on.ca/guide/undergrad-fees"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "English requirements",
      "test policy",
      "requirements for Uzbekistan",
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
    "U of G",
    "UofG",
    "Guelph"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "business": {
      "program": "Bachelor of Commerce",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Bachelor of Computing",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Bachelor of Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
      "checked": "2026-10-15"
    },
    "mathematics": {
      "program": "Bachelor of Mathematics",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Bachelor of Fine Arts",
      "level": "bachelor",
      "language": "English",
      "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "carleton-university",
  "name": "Carleton University",
  "shortName": "Carleton",
  "country": "ca",
  "city": "Ottawa",
  "region": "Ontario",
  "founded": null,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#3d3d5c",
    "c2": "#1f1f2e",
    "initials": "C"
  },
  "description": "A university in Ottawa, Canada’s capital, known for public affairs, journalism, engineering and computer science. International tuition is frozen for 2026/27 to 2028/29.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "humanities",
    "business",
    "computer-science",
    "engineering",
    "economics",
    "social-sciences",
    "arts"
  ],
  "englishTaughtPrograms": [
    "humanities",
    "business",
    "computer-science",
    "engineering",
    "economics",
    "social-sciences",
    "arts"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://carleton.ca/",
    "admissions": "https://admissions.carleton.ca/deadlines/",
    "internationalAdmissions": "https://admissions.carleton.ca/international/",
    "applicationPortal": "https://carleton360.carleton.ca/",
    "scholarships": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
    "financialAid": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
    "programs": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
    "cost": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/"
  },
  "admissions": {
    "platforms": [
      "Carleton360 (direct application for international students)",
      "OUAC (Ontario Universities’ Application Centre)"
    ],
    "deadlines": [
      {
        "name": "Prestige Scholarship application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://admissions.carleton.ca/deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Programme-specific application deadlines",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Some programmes have early deadlines and extra admission material, due 5 March 2027.",
        "status": "confirmed",
        "source": "https://admissions.carleton.ca/deadlines/",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Main application deadline for international students (transcripts from outside Canada or the US)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-04-01",
        "date": "1 April 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Applications are reviewed on a rolling basis; applying early is encouraged.",
        "status": "confirmed",
        "source": "https://admissions.carleton.ca/deadlines/",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 100,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Direct application in Carleton360, covering two programmes at Carleton; non-refundable. Through OUAC Carleton states C$166 for three choices, while OUAC’s own page gives a base fee of C$159 plus a C$85 document-evaluation fee for Carleton.",
      "source": "https://admissions.carleton.ca/apply-now-international-students/",
      "verified": "2026-10-15"
    },
    "documents": [
      "Carleton360 application (or OUAC)",
      "Transcripts from the final years of school, diploma and exam results",
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
      "note": "Academic; 6.0 in each band."
    },
    "toefl": {
      "min": 86,
      "recommended": null,
      "note": "Tests before 21 January 2026: 86 with 22 in Writing and Speaking and 20 in Reading and Listening. Tests from 21 January 2026 (1–6 scale): 4.5 with 4.0 in each band.",
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
      "note": "110 in Writing, Reading and Speaking; 105 in Listening."
    },
    "waiver": null,
    "note": "PTE 55 (47 in each skill); CAEL 70; Cambridge 176 (169 in each part). Lower scores can lead to an offer with required ESL courses."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": null,
      "note": "Not stated for national school systems such as Uzbekistan’s on the pages read."
    },
    "act": {
      "policy": null,
      "note": "Not stated for national school systems such as Uzbekistan’s on the pages read."
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: not named. For other national curricula Carleton expects secondary-school graduation, normally after 12 years of study; where the system is shorter, one year of university study may be required."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only in the main figure; fees, residence, books and personal costs listed separately",
      "tuition": 39000
    },
    "academicYear": "2026–2027 to 2028–2029 (frozen)",
    "currency": "CAD",
    "studentCategory": "International undergraduates, tuition per academic year (September–April)",
    "source": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
    "verified": "2026-10-15",
    "headline": "C$39,000–C$55,000 tuition a year, frozen to 2028–29",
    "items": [
      {
        "label": "Tuition, Arts, Science, Economics, Mathematics, Music, Public Affairs and other programmes",
        "amount": 39000
      },
      {
        "label": "Tuition, Accounting, Commerce, Entrepreneurship, Media Production and Design",
        "amount": 45000
      },
      {
        "label": "Tuition, Architecture, Computer Science, Cyber Security, Data Science, Engineering, Industrial Design, Information Technology",
        "amount": 55000
      },
      {
        "label": "Miscellaneous fees incl. UHIP and U-Pass (2026, approximate)",
        "amount": 2500
      },
      {
        "label": "On-campus residence and meal plan, 8 months",
        "amount": 14010
      },
      {
        "label": "Books and supplies",
        "amount": 1400
      },
      {
        "label": "Personal expenses",
        "amount": 3000
      }
    ],
    "billedSubtotal": null,
    "totalText": "Tuition is C$39,000, C$45,000 or C$55,000 a year by programme, frozen for 2026/27, 2027/28 and 2028/29; miscellaneous fees about C$2,500; residence with meals C$14,010",
    "note": "“Tuition fees are frozen in the following academic years: 2026/2027, 2027/2028, 2028/2029.” Miscellaneous fees are not frozen. Nursing is C$39,000 with about C$4,300 in fees. A C$2,000 tuition deposit is required before the PAL."
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
        "name": "Carleton Entrance Scholarships",
        "amount": "C$1,000–C$3,000 a year",
        "eligibility": "High school applicants with an admission average of 85% or better who meet the academic and English requirements",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "Renewable with an A- standing (annual GPA 10.0); can be regained.",
        "basis": "merit",
        "source": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
        "verified": "2026-10-15"
      },
      {
        "name": "President’s Welcome Award for International Students",
        "amount": "C$2,000–C$5,000, first year only",
        "eligibility": "International students applying for September 2027, entering directly from high school and paying international fees",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": false,
        "note": "By grades at admission; in addition to other entrance scholarships.",
        "basis": "merit",
        "source": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
        "verified": "2026-10-15"
      },
      {
        "name": "Prestige Scholarships",
        "amount": "C$5,000–C$14,178 a year",
        "eligibility": "Applicants with an admission average over 90%",
        "deadline": null,
        "application": "Application by 1 March 2027",
        "renewable": true,
        "note": "Renewable with a minimum A- (10.0 GPA) in full-time studies.",
        "basis": "merit",
        "source": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
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
      "label": "Carleton — dates and deadlines",
      "url": "https://admissions.carleton.ca/deadlines/"
    },
    {
      "label": "Carleton — how international students apply",
      "url": "https://admissions.carleton.ca/apply-now-international-students/"
    },
    {
      "label": "Carleton — USA and international costs",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/"
    },
    {
      "label": "Carleton — English language requirements",
      "url": "https://admissions.carleton.ca/esl/"
    },
    {
      "label": "Carleton — international admission requirements",
      "url": "https://admissions.carleton.ca/international/"
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
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "Carleton",
    "CU"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "programEvidence": {
    "humanities": {
      "program": "Bachelor of Arts",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    },
    "business": {
      "program": "Bachelor of Commerce",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Bachelor of Computer Science",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Bachelor of Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    },
    "economics": {
      "program": "Bachelor of Economics",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    },
    "social-sciences": {
      "program": "Bachelor of Public Affairs and Policy Management",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "Bachelor of Music",
      "level": "bachelor",
      "language": "English",
      "url": "https://admissions.carleton.ca/scholarships/usa-and-international-costs/",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
},

{
  "id": "york-university",
  "name": "York University",
  "shortName": "York",
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
    "c1": "#4b2e83",
    "c2": "#2c1a4d",
    "initials": "Y"
  },
  "description": "A large university in Toronto with the Keele campus, the bilingual Glendon campus and a campus in Markham; home of the Schulich School of Business and the Lassonde School of Engineering.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "arts",
    "medicine"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "arts",
    "medicine"
  ],
  "programNote": "Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.",
  "links": {
    "website": "https://www.yorku.ca/",
    "admissions": "https://futurestudents.yorku.ca/requirements/deadlines",
    "internationalAdmissions": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
    "applicationPortal": "https://futurestudents.yorku.ca/requirements/apply",
    "scholarships": "https://futurestudents.yorku.ca/financing-your-degree/international-scholarships",
    "financialAid": "https://futurestudents.yorku.ca/financing-your-degree/international-scholarships",
    "programs": "https://futurestudents.yorku.ca/requirements/deadlines",
    "cost": "https://futurestudents.yorku.ca/financing-your-degree/tuition-fees"
  },
  "admissions": {
    "platforms": [
      "York University application (international, applying only to York)",
      "OUAC (Ontario Universities’ Application Centre)"
    ],
    "deadlines": [
      {
        "name": "Schulich BBA: application deadline",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Schulich does not accept applications after 15 January; its supplementary application is due 1 February 2027. Social Work also closes on 15 January.",
        "status": "confirmed",
        "source": "https://futurestudents.yorku.ca/requirements/deadlines",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "President’s International Scholarship of Excellence: student application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-27",
        "date": "27 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Nominee’s deadline 4 February 2027.",
        "status": "confirmed",
        "source": "https://futurestudents.yorku.ca/financing-your-degree/international-scholarships",
        "verified": "2026-10-15",
        "note": null
      },
      {
        "name": "Direct Entry Nursing application deadline",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": null,
        "status": "confirmed",
        "source": "https://futurestudents.yorku.ca/requirements/deadlines",
        "verified": "2026-10-15",
        "note": "The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry."
      },
      {
        "name": "Application deadline for international students (fall 2027)",
        "kind": "regular",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-24",
        "date": "24 March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Applications are still accepted and assessed until each programme is full; apply early for study permit time.",
        "status": "confirmed",
        "source": "https://futurestudents.yorku.ca/requirements/deadlines",
        "verified": "2026-10-15",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 140,
      "currency": "CAD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "York University application, non-refundable, by Visa, Visa Debit or MasterCard. Ontario high school students apply through OUAC (base fee C$159 plus a C$90 document-evaluation fee for York for applicants outside Ontario schools; Schulich BBA adds C$50).",
      "source": "https://futurestudents.yorku.ca/requirements/apply",
      "verified": "2026-10-15"
    },
    "documents": [
      "York University application (or OUAC)",
      "Transcripts and school documents",
      "English test result unless exempt",
      "Supplementary application for Schulich, AMPD, Creative Writing and some other programmes"
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
      "note": "Academic only; One Skill Retake accepted."
    },
    "toefl": {
      "min": 88,
      "recommended": null,
      "note": "Tests before 21 January 2026: 88. Tests from 21 January 2026 (1–6 scale): 4.5. Home Edition accepted.",
      "scales": [
        {
          "period": "pre2026",
          "min": 88,
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
    "note": "PTE 60; CAEL 60; Cambridge C1 Advanced with no score below 180. Some programmes ask for more."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "conditional",
      "note": "Required (SAT 1170 or ACT 24) only of students who are not in a recognized accredited U.S. curriculum or have not studied in a formal high-school setting; not required from accredited U.S. curricula. Applicants from national systems such as Uzbekistan’s are assessed on their school certificate.",
      "source": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
      "verified": "2026-10-15",
      "label": "SAT/ACT required only for some school systems"
    },
    "act": {
      "policy": "conditional",
      "note": "Required (SAT 1170 or ACT 24) only of students who are not in a recognized accredited U.S. curriculum or have not studied in a formal high-school setting; not required from accredited U.S. curricula. Applicants from national systems such as Uzbekistan’s are assessed on their school certificate.",
      "source": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
      "verified": "2026-10-15",
      "label": "SAT/ACT required only for some school systems"
    },
    "otherTests": null,
    "internationalQualifications": "Uzbekistan: Attestat o Srednem Obrazovanii (Certificate of Secondary Education)."
  },
  "costs": {
    "breakdown": {
      "includes": "tuition only in the main figure; housing, meals, health plan and personal costs listed separately",
      "tuition": 40000
    },
    "academicYear": "2026–2027",
    "currency": "CAD",
    "studentCategory": "International undergraduates, full course load; approximate university figures",
    "source": "https://futurestudents.yorku.ca/financing-your-degree/tuition-fees",
    "verified": "2026-10-15",
    "headline": "About C$38,000–C$47,000 tuition a year (2026–27)",
    "items": [
      {
        "label": "Tuition, most programmes (Arts and Sciences)",
        "amount": 40000
      },
      {
        "label": "Tuition, Business programmes",
        "min": 40000,
        "max": 44000
      },
      {
        "label": "Tuition, Computer Science",
        "amount": 38000
      },
      {
        "label": "Tuition, Design",
        "amount": 40000
      },
      {
        "label": "Tuition, Engineering",
        "amount": 47000
      },
      {
        "label": "Residence",
        "min": 9000,
        "max": 13000
      },
      {
        "label": "Meal plan",
        "min": 4350,
        "max": 8000
      },
      {
        "label": "Health and dental, incl. UHIP (international students)",
        "amount": 1151
      },
      {
        "label": "Personal expenses",
        "amount": 4200
      }
    ],
    "billedSubtotal": null,
    "totalText": "Approximate tuition for fall/winter 2026–27: C$38,000 (Computer Science) to C$47,000 (Engineering); residence C$9,000–C$13,000 and meals C$4,350–C$8,000",
    "note": "“Fees listed are approximate values based on a full course load.” Course and programme fees of about C$40–C$50 per credit are extra."
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
        "name": "President’s International Scholarship of Excellence (PISE)",
        "amount": "C$180,000 (C$45,000 a year for four years)",
        "eligibility": "International high school applicants with academic excellence, volunteer and extracurricular commitment and leadership",
        "deadline": null,
        "application": "Student application by 27 January 2027; nominee’s deadline 4 February 2027",
        "renewable": true,
        "note": "Cannot be combined with entrance scholarships. A competitive award; it is not counted as received.",
        "basis": "merit",
        "source": "https://futurestudents.yorku.ca/financing-your-degree/international-scholarships",
        "verified": "2026-10-15"
      },
      {
        "name": "York International Entrance Scholarships",
        "amount": "C$5,000 one-time to C$37,500 over four years (2026/27 table)",
        "eligibility": "International high school applicants by final admission average (75% and above)",
        "deadline": null,
        "application": "Automatic with the application for admission; no separate application",
        "renewable": true,
        "note": "The table on the page is for Fall/Winter 2026/27 “only”: Scholarship of Distinction C$15,000 + C$7,500 a year (C$37,500), Merit Award (80–89.9%) C$10,000 + C$5,000 a year (C$25,000), Entrance Award (75–79.9%) C$5,000 once. Renewable with a 7.5 GPA (B+). The values for fall 2027 are not yet published.",
        "basis": "merit",
        "source": "https://futurestudents.yorku.ca/financing-your-degree/international-scholarships",
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
      "label": "York — application deadlines",
      "url": "https://futurestudents.yorku.ca/requirements/deadlines"
    },
    {
      "label": "York — how to apply and fee",
      "url": "https://futurestudents.yorku.ca/requirements/apply"
    },
    {
      "label": "York — tuition and fees 2026-27",
      "url": "https://futurestudents.yorku.ca/financing-your-degree/tuition-fees"
    },
    {
      "label": "York — international scholarships",
      "url": "https://futurestudents.yorku.ca/financing-your-degree/international-scholarships"
    },
    {
      "label": "York — English language tests",
      "url": "https://futurestudents.yorku.ca/requirements/language-tests"
    },
    {
      "label": "York — requirements by country",
      "url": "https://futurestudents.yorku.ca/requirements/hs-international-countries"
    },
    {
      "label": "York — international applicants and SAT/ACT",
      "url": "https://futurestudents.yorku.ca/your-application/how-apply/international-student"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "2027 deadlines",
      "application fee",
      "English requirements",
      "test policy",
      "requirements for Uzbekistan",
      "tuition"
    ],
    "unconfirmed": [
      "entrance scholarship values for fall 2027",
      "full list of majors",
      "founding year"
    ]
  },
  "lastVerified": "2026-10-15",
  "aliases": [
    "York",
    "YorkU",
    "York U",
    "Schulich",
    "Glendon"
  ],
  "programsBasis": "evidence",
  "province": "ON",
  "campuses": [
    "Keele",
    "Glendon (bilingual)",
    "Markham"
  ],
  "programEvidence": {
    "business": {
      "program": "Schulich School of Business (BBA)",
      "level": "bachelor",
      "language": "English",
      "url": "https://futurestudents.yorku.ca/requirements/deadlines",
      "checked": "2026-10-15"
    },
    "computer-science": {
      "program": "Computer Science",
      "level": "bachelor",
      "language": "English",
      "url": "https://futurestudents.yorku.ca/financing-your-degree/tuition-fees",
      "checked": "2026-10-15"
    },
    "engineering": {
      "program": "Engineering",
      "level": "bachelor",
      "language": "English",
      "url": "https://futurestudents.yorku.ca/financing-your-degree/tuition-fees",
      "checked": "2026-10-15"
    },
    "arts": {
      "program": "School of the Arts, Media, Performance & Design (BFA Music, Visual Arts)",
      "level": "bachelor",
      "language": "English",
      "url": "https://futurestudents.yorku.ca/requirements/deadlines",
      "checked": "2026-10-15"
    },
    "medicine": {
      "program": "Nursing (Direct Entry)",
      "level": "bachelor",
      "language": "English",
      "url": "https://futurestudents.yorku.ca/requirements/deadlines",
      "checked": "2026-10-15"
    }
  },
  "programsStatus": "partial"
}
);
