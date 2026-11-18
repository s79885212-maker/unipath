/* Verified admission routes. Authoring facts and scope: research/admissions-120/requirements.json. Optional, backward-compatible layer. */
window.UNIPATH.admissionRequirements = {
  "savannah-college-of-art-and-design": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "placement-or-waiver",
        "ielts": {
          "accepted": true,
          "variant": "IELTS; exact variant not named in the guide",
          "min": 6.5,
          "sections": {
            "reading": 6.5,
            "writing": 6.5
          },
          "role": "esl-waiver"
        },
        "toefl": {
          "accepted": true,
          "variant": "TOEFL iBT",
          "scales": [
            {
              "period": "pre2026",
              "min": 85,
              "sections": {
                "reading": 20,
                "writing": 20,
                "listening": 20,
                "speaking": 20
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "reading": 4.5,
                "writing": 4.5,
                "listening": 4,
                "speaking": 4
              }
            }
          ],
          "note": "No MyBest or superscoring."
        },
        "alternatives": "ESL waiver: native English; all high-school years taught in English with transcripts; SAT Reading 550; ACT Reading 22 and Writing 8; Duolingo 120 with published subscores.",
        "waiver": "The scores waive ESL, not admission. Otherwise-qualified applicants may enter with SCAD Language Studio placement and required ESL."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "SAT/ACT optional for admission and scholarship review, independently of an English-proof waiver."
      },
      "localLanguage": [],
      "documents": [
        "Secondary-school record and completion evidence, with certified English translation."
      ],
      "sources": [
        {
          "url": "https://www.scad.edu/sites/default/files/PDF/Admission-information-Freshman-international.pdf",
          "label": "SCAD first-year international guide, revised November 2026",
          "verified": "2026-11-18",
          "access": "web-pdf-read",
          "pages": [
            1,
            2,
            3,
            5
          ],
          "quote": "Otherwise-qualified applicants who do not meet the minimum scores for an ESL waiver may be considered for admission to SCAD."
        }
      ],
      "note": "English instruction. IELTS thresholds are for avoiding ESL; section exceptions are individually reviewed. Fall 2027 is not named in this revision."
    }
  ],
  "university-of-pittsburgh": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": null,
          "min": null,
          "role": "admission"
        },
        "toefl": {
          "accepted": null,
          "min": null
        },
        "alternatives": "The international admissions office also names Duolingo. Undergraduate cut-offs and waiver conditions were not established from the accessible undergraduate pages; graduate rules were not reused."
      },
      "academic": {
        "satPolicy": "optional",
        "applicability": {
          "label": "Fall 2025–2028",
          "entryYears": [
            2025,
            2026,
            2027,
            2028
          ],
          "status": "confirmed"
        },
        "note": "Includes international and homeschooled first-year applicants. A personal statement/Common App essay is required when applying test-optional. English proof remains separate."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admissions.pitt.edu/test-optional/",
          "label": "Pitt test-optional extension through Fall 2028",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://admissions.pitt.edu/international/",
          "label": "Pitt undergraduate international admissions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-virginia": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "recommended",
        "ielts": {
          "accepted": true,
          "min": null,
          "role": "recommended"
        },
        "toefl": {
          "accepted": true,
          "min": null
        },
        "alternatives": "Cambridge C1 Advanced/C2 Proficiency and Duolingo; InitialView/Vericant evaluations may also be submitted.",
        "note": "English assessment is strongly encouraged for applicants whose first language is not English, regardless of school language. No numerical cut-off is published on these pages."
      },
      "academic": {
        "satPolicy": "optional",
        "applicability": {
          "label": "Fall 2027",
          "entryYears": [
            2027
          ],
          "status": "confirmed"
        }
      },
      "localLanguage": [],
      "documents": [
        "Secondary-school report, transcript and one academic teacher evaluation; programme supplements where applicable."
      ],
      "sources": [
        {
          "url": "https://admission.virginia.edu/i-am/international",
          "label": "UVA international English assessments",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://admission.virginia.edu/admission/deadlines-instructions",
          "label": "UVA first-year instructions and Fall 2027 testing",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-florida": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "min": null
        },
        "note": "The undergraduate catalog lists TOEFL/IELTS for applicants whose native language is not English, but gives no minimum here. UF Online requirements are a different route and were not reused.",
        "applicability": {
          "label": "Undergraduate catalogue 2026–27",
          "entryYears": [
            2026
          ],
          "status": "previous-cycle"
        }
      },
      "academic": {
        "satPolicy": "required-alternatives",
        "alternatives": [
          "SAT",
          "ACT",
          "CLT"
        ],
        "note": "Every first-year applicant must submit one of SAT, ACT or CLT. This is independent of English proof."
      },
      "localLanguage": [],
      "documents": [
        "The current international page requires four school years and a NACES course-by-course/GPA evaluation; the 2026–27 catalogue describes three school years and encouraged evaluation. Confirm which document rule applies to the intended cycle."
      ],
      "sources": [
        {
          "url": "https://admissions.ufl.edu/apply/freshman/international",
          "label": "UF first-year international checklist",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://catalog.ufl.edu/UGRD/admission/",
          "label": "UF undergraduate catalog: international admission",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "dillard-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-by-language-country",
        "ielts": {
          "accepted": null,
          "min": null
        },
        "toefl": {
          "accepted": true,
          "variant": "TOEFL iBT / paper-based",
          "scales": [
            {
              "period": "legacy",
              "min": 79
            }
          ],
          "note": "The page also lists paper-based 550. It does not publish a new 1–6-scale threshold."
        },
        "note": "The published rule applies to applicants from countries where English is not the native language. IELTS acceptance and waivers were not established."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "Test-optional requires at least 3.0 unweighted GPA. The score-submitting route lists GPA 2.5 and ACT 18 or SAT 960. A blank SAT is not universally optional."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.dillard.edu/admissions-aid/admission-requirements/international-students/",
          "label": "Dillard international requirements and conditional test-optional rule",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "elmira-college": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "placement-or-waiver",
        "ielts": {
          "accepted": true,
          "min": null,
          "role": "ell-placement",
          "placement": {
            "min": 5.5,
            "max": 6.5
          },
          "waiverThreshold": 6.5
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": null
            }
          ],
          "note": "TOEFL 80–100 requires ELL; above 100 is exempt. No updated 1–6 scale is given."
        },
        "alternatives": "Duolingo 100–120 with ELL, above 120 exempt; the page also lists PET 50–57 / 58+.",
        "waiver": "Citizens of the named English-language countries are exempt; this is not a waiver for every international applicant.",
        "note": "IELTS 5.5–6.5 is an ELL-support band, not unrestricted English readiness. The page overlaps at 6.5 (ELL and exemption); confirm that boundary."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The international checklist does not state a SAT/ACT policy; omission is not treated as test-optional."
      },
      "localLanguage": [],
      "documents": [
        "Official school records with English translations and at least one academic recommendation."
      ],
      "sources": [
        {
          "url": "https://www.elmira.edu/admissions/undergraduate-admissions/international-admissions/international-undergraduate-students",
          "label": "Elmira international undergraduate requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "marist-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "variant": "TOEFL iBT",
          "scales": [
            {
              "period": "legacy",
              "min": 80
            }
          ],
          "note": "The page lists only the old iBT, paper and computer scales; no new 1–6 threshold was verified."
        },
        "alternatives": "Duolingo minimum 115; official results less than two years old at entry.",
        "waiver": "IB Diploma completed or in progress; SAT Critical Reading/Writing 500 under the published wording; or four years at an English-taught school without ESL. Modern SAT equivalence must be confirmed."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "International first-year applicants may submit SAT/ACT if they want it considered. English testing is separate."
      },
      "localLanguage": [],
      "documents": [
        "School records/translations, counselor form, an additional recommendation and personal essay. Florence/Italy is a separate route."
      ],
      "sources": [
        {
          "url": "https://www.marist.edu/admission/intl/apply",
          "label": "Marist international first-year application checklist",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "bentley-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Spring / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "recommended": 7,
          "sections": {
            "reading": 6.5,
            "writing": 6.5,
            "listening": 6.5,
            "speaking": 6.5
          },
          "role": "admission",
          "note": "Overall 7 is preferred; 6.5 in every section is required. Do not turn the preferred overall into a minimum."
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "recommended": 90,
              "sections": {
                "reading": 20,
                "writing": 20,
                "listening": 20,
                "speaking": 20
              }
            },
            {
              "period": "post2026",
              "recommended": 4.5,
              "sections": {
                "reading": 4.5,
                "writing": 4.5,
                "listening": 4.5,
                "speaking": 4.5
              }
            }
          ]
        },
        "alternatives": "Duolingo preferred 120–130 with published subscores; TOEFL Essentials; Cambridge C1/C2 and MET at C1. Official results, no superscoring, two-year validity.",
        "waiver": "SAT EBRW 650; ACT Reading and English 29; four US-school years without ESL; IB/AP/A-Level English considered under the linked approval rules. The committee may still request proof."
      },
      "academic": {
        "satPolicy": "optional",
        "applicability": {
          "label": "Through Fall 2027",
          "entryYears": [
            2027
          ],
          "status": "confirmed"
        }
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.bentley.edu/undergraduate/apply/first-year-applicant",
          "label": "Bentley Fall 2027 first-year requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-washington": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 76
            },
            {
              "period": "post2026",
              "min": 4
            }
          ]
        },
        "alternatives": "Duolingo minimum 110. TOEFL Home Edition and IELTS Indicator accepted; no superscoring. No conditional English admission.",
        "waiver": "Primary AND secondary education in a listed English-speaking country; alternatively B average in English, all grades 10–12 taught in English AND SAT EBRW 580 or ACT English 22. Citizenship or a score alone is insufficient."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "Seattle first-year admission is generally test-optional. Homeschool or nonstandard grading may require SAT/ACT; a full college year can exempt homeschool applicants. Rare high-score consideration means this is not test-blind."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admit.washington.edu/apply/first-year/how-to-apply/english-proficiency/",
          "label": "UW Seattle English proficiency",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://admit.washington.edu/apply/first-year/how-to-apply/test-scores/",
          "label": "UW Seattle academic test policy",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "indiana-university-bloomington": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 79
            }
          ]
        },
        "alternatives": "IELTS Indicator 6.5; Duolingo 115; Cambridge 176; PTE/MET 53; SAT EBRW 560 or ACT English 21.",
        "waiver": "Listed citizenship or at least three full school years in a listed predominantly English-speaking country; specified IB/AP/A-Level English qualifications or IEP Level 7.",
        "note": "IELTS 7.5 and TOEFL 100 concern exemption from post-admission English placement/classes, not the admission minimum. Placement section scores are not admission section minima."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "SAT/ACT optional for international first-year admission; English proficiency is assessed separately."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://bloomington.iu.edu/admissions/apply/international/english-proficiency.html",
          "label": "IU Bloomington English proficiency and placement",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://bloomington.iu.edu/admissions/apply/international/freshman/admission-standards.html",
          "label": "IU international freshman standards",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "brigham-young-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Starting Winter 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic / IELTS Online",
          "min": 6.5,
          "sections": {
            "reading": 6,
            "writing": 6,
            "speaking": 6,
            "listening": 6
          },
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 80,
              "sections": {
                "reading": 20,
                "writing": 20,
                "speaking": 20,
                "listening": 20
              }
            },
            {
              "period": "post2026",
              "min": 4,
              "sections": {
                "reading": 4,
                "writing": 4,
                "speaking": 4,
                "listening": 4
              }
            }
          ]
        },
        "alternatives": "PTE overall and each section 60; Cambridge published section/overall rules. IELTS One Skill Retake and TOEFL MyBest accepted; IELTS Indicator and TOEFL Essentials not accepted. Results valid two years.",
        "waiver": "Individual review, not automatic: published factors include GPA 3.5, residence and English education/history. Complete required application sections before requesting. Completing BYU English Language Center does not itself waive the exam."
      },
      "academic": {
        "satPolicy": "conditional",
        "applicability": {
          "label": "Through Winter 2028",
          "entryYears": [
            2027,
            2028
          ],
          "status": "confirmed"
        },
        "note": "Usually optional with sufficient accredited high-school coursework. Homeschool/non-accredited coursework may require a score; the application determines eligibility. International applicants follow the same rule. Scholarships have separate criteria."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://enrollment.byu.edu/admissions/english-proficiency-requirement",
          "label": "BYU undergraduate English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://enrollment.byu.edu/admissions/act-sat-test-scores",
          "label": "BYU ACT/SAT through Winter 2028",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null,
      "universityWide": true
    }
  ],
  "university-of-the-pacific": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 80
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "alternatives": "Duolingo 110; PTE 53. Direct undergraduate admission, not UOP International pathway placement.",
        "waiver": "English-medium secondary/post-secondary education with an official institutional letter; all US high-school instruction in English; SAT EBRW 570 or ACT composite 22; listed citizenship, English qualifications or specified US composition courses."
      },
      "academic": {
        "satPolicy": "conflict",
        "note": "Current undergraduate admissions explicitly says test-optional, but the 2026–27 catalogue states SAT/ACT required. Confirm the applicable Fall 2027 rule; neither source establishes an unambiguous cycle-specific requirement."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.pacific.edu/admission/undergraduate/english-language-proficiency",
          "label": "Pacific undergraduate English proficiency",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://www.pacific.edu/admission/undergraduate/test-scores",
          "label": "Pacific undergraduate test-optional page",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://catalog.pacific.edu/uop/generalinformation/admissionrequirements/",
          "label": "Pacific 2026–27 catalogue admission requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "saint-marys-college-indiana": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "recommended": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "recommended": 80
            },
            {
              "period": "post2026",
              "recommended": 4.5
            }
          ]
        },
        "alternatives": "Duolingo, PTE, SAT or ACT may demonstrate English. The page labels its score figures desired guidelines, not minima or maxima.",
        "waiver": "A waiver request is reviewed for English education/residence conditions; it is not granted to all international applicants."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "SAT/ACT listed as English proof does not establish an academic SAT/ACT requirement. Published enrolled-score ranges are not admission cutoffs."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.saintmarys.edu/admission-aid/first-year-students/international-students/international-requirements",
          "label": "Saint Mary’s Indiana international requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "stonehill-college": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "recommended": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "recommended": 80
            }
          ]
        },
        "alternatives": "Duolingo recommended minimum 120. The source calls these recommended scores; no hard cutoff or section minima are established."
      },
      "academic": {
        "satPolicy": "not-used",
        "applicability": {
          "label": "Fall / Spring 2026",
          "entryYears": [
            2026
          ],
          "status": "previous-cycle"
        },
        "note": "Test-blind is explicitly published for Fall 2026 / Spring 2026, not confirmed for Fall 2027. English testing is separate."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.stonehill.edu/apply-for-admission/international-applicants/how-to-apply/",
          "label": "Stonehill international application rules",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "st-bonaventure-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "recommended": 6,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "recommended": 80
            }
          ]
        },
        "alternatives": "Duolingo minimum 105. IELTS 6 and TOEFL 80 are recommended, not stated hard cutoffs.",
        "waiver": "SAT Reading 480 or ACT Reading 21 can waive TOEFL/IELTS. Lower results may be individually reviewed with an additional English request."
      },
      "academic": {
        "satPolicy": "optional"
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.sbu.edu/admissions/international-students",
          "label": "St. Bonaventure international undergraduate admission",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "john-jay-college": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-by-language-country",
        "ielts": {
          "accepted": true,
          "min": 6,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 61
            }
          ]
        },
        "alternatives": "Duolingo 90 or PTE Academic 44. Country/language conditions govern English proof.",
        "waiver": "US accredited English composition with grade C or higher; SAT verbal 530 can also waive English proof. Confirm modern SAT equivalence."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "This international page highly recommends SAT/ACT for specified applicants; it does not establish a Fall 2027 required/optional policy. A language-waiver SAT score is not an academic admission minimum."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.jjay.cuny.edu/admissions/undergraduate-admissions/apply/international-student-application",
          "label": "John Jay international application requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "wilfrid-laurier-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "variant": "IELTS Academic / IELTS Online",
          "role": "admission",
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          }
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 83
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "waiver": "Three most recent full-time years in English without ESL; evidence must be submitted and an exemption is not guaranteed. If English education ended more than two years ago, a test is required.",
        "alternatives": "Duolingo 120; PTE Academic 59; Cambridge 176; CAEL 70 with each band 60; LanguageCert 70 with each skill 65. Conditional academic offers do not remove the English condition."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "The SAT/ACT curriculum page says ACT and SAT subject exams may support a homeschool application but are not required. This does not establish a policy for every school system."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.wlu.ca/admissions-toolkits/international/step-1-how-to-apply/english-proficiency.html",
          "label": "Laurier undergraduate English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://www.wlu.ca/future-students/undergraduate/admissions/assets/resources/sat-act-curriculum.html",
          "label": "Laurier homeschool SAT/ACT policy",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "trent-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "variant": null,
          "role": "admission",
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          }
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 86
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "waiver": "IB Diploma in English with English A; specified British qualifications; three English-medium secondary years without ESL, or two college years, or one university year, with institutional evidence. Trent can still request a test.",
        "alternatives": "Duolingo 115; PTE Academic in-person/online 59; CAEL 60; Cambridge 176 with each subscore 169; ELLT 7 with each band 6. TOEFL writing minimum: legacy 20, new scale 4.0."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "For US secondary curriculum, SAT/ACT are recommended; explicitly not mandatory for US curriculum outside the USA. Other school qualifications require their own rules."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.trentu.ca/futurestudents/admissions/international-students/english-proficiency",
          "label": "Trent undergraduate English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://www.trentu.ca/futurestudents/admissions/admission-requirements/united-states-secondary-school",
          "label": "Trent US secondary qualifications",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "carleton-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "variant": "IELTS Academic",
          "role": "admission",
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          }
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 86
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "waiver": "Three recent full-time years in an eligible English education setting, excluding ESL; letters alone do not waive the requirement. Tests may still be requested.",
        "alternatives": "Duolingo 120 with published section scores; PTE 55 with each skill 47; CAEL 70/60; Cambridge 176/169; specified IB/GCSE/GCE qualifications. TOEFL legacy Writing/Speaking 22, Reading/Listening 20; new scale each band 4.0."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT/ACT are encouraged on the US high-school page; that recommendation is not a universal requirement for international qualifications."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admissions.carleton.ca/esl/",
          "label": "Carleton English admission tables",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://admissions.carleton.ca/applicant-type/united-states-high-school-students/",
          "label": "Carleton US high-school criteria",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    },
    {
      "id": "degree-with-esl",
      "label": "Degree admission with required Academic ESL",
      "language": "en",
      "kind": "degree-with-esl",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 5,
          "variant": "IELTS Academic",
          "role": "admission",
          "sections": {
            "reading": 4.5,
            "writing": 4.5,
            "listening": 4.5,
            "speaking": 4.5
          }
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 51
            },
            {
              "period": "post2026",
              "min": 3
            }
          ]
        },
        "note": "Academic ESL is compulsory alongside a limited degree-course load; some degrees do not admit through this route. This is not unrestricted direct entry."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT/ACT are encouraged on the US high-school page; that recommendation is not a universal requirement for international qualifications."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admissions.carleton.ca/esl/",
          "label": "Carleton English admission tables",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://admissions.carleton.ca/applicant-type/united-states-high-school-students/",
          "label": "Carleton US high-school criteria",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "york-university": [
    {
      "id": "international-first-year",
      "label": "Keele: general English-language undergraduate entry",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "variant": "IELTS Academic; One Skill Retake accepted",
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 88
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "waiver": "Four English-medium high-school years; or specified one-year university/two-year college study; IB/GCE and other named qualifications may qualify. SAT/ACT or applicant letters alone do not waive English proof.",
        "alternatives": "Duolingo 120; PTE 60; Cambridge C1 Advanced with no score below 180. IELTS General not accepted. Some programmes require higher scores. Glendon has a separate bilingual/French context."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "In the US-high-school section, SAT 1170 or ACT 24 is required outside a recognised accredited US curriculum or formal high-school environment; scores are not required within an accredited US curriculum. Other national qualifications have separate criteria."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://futurestudents.yorku.ca/requirements/language-tests",
          "label": "York undergraduate language requirements and IYO",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
          "label": "York qualification-specific international admission requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
          "label": "York qualification-specific international admission requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    },
    {
      "id": "la-ps-iyo",
      "label": "Liberal Arts & Professional Studies: Integrated Year One",
      "language": "en",
      "kind": "international-year-one",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 5.5,
          "variant": null,
          "role": "admission",
          "sections": {
            "reading": 5,
            "writing": 5,
            "listening": 5,
            "speaking": 5
          }
        },
        "note": "Eligibility band IELTS 5.5–6.0, no band below 5.0, plus a conditional LA&PS offer. English support accompanies 24–30 credits. This threshold is not direct-admission English readiness."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "In the US-high-school section, SAT 1170 or ACT 24 is required outside a recognised accredited US curriculum or formal high-school environment; scores are not required within an accredited US curriculum. Other national qualifications have separate criteria."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://futurestudents.yorku.ca/requirements/language-tests",
          "label": "York undergraduate language requirements and IYO",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
          "label": "York qualification-specific international admission requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://futurestudents.yorku.ca/your-application/how-apply/international-student",
          "label": "York qualification-specific international admission requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "dalhousie-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "variant": null,
          "role": "admission",
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          }
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 90
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "waiver": "Generally three years at a recognised English-based secondary institution or one post-secondary year. Programme conditions still apply.",
        "alternatives": "Duolingo 120; MELAB/MET 55; approved pathways and international school qualifications. TOEFL legacy each band 20; new Listening 4.5 and Reading/Writing/Speaking 4.0."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "The US-qualification page is test-optional except homeschool applicants. Optional submitted-score figures are SAT 1100 or ACT 23 with each section 20; these are not universal international admission minima."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/international-applicants/english-language-requirements.html",
          "label": "Dalhousie undergraduate English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/international-applicants/us-applicants.html",
          "label": "Dalhousie US qualifications and homeschool exception",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "laurentian-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "variant": "IELTS Academic; One Skill Retake accepted",
          "role": "admission",
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          }
        },
        "waiver": "Three full-time English-medium years in Canada or a predominantly English-speaking country, with documented eligibility; IB English A 4 or specified British English qualifications.",
        "alternatives": "Duolingo 120 with each individual skill 110; PTE 60; Cambridge 176; ELLT 7 with each band 6; approved EAP completion. Architecture/Nursing have pathway restrictions.",
        "note": "The page lists legacy TOEFL 88 and new overall 4.5 with Writing/Speaking 5.0, but dates the change 1 January 2026. Confirm the applicable test date; no conversion is inferred."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic SAT/ACT rules for all international school qualifications were not established. A US-curriculum rule is not applied to every international applicant."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://laurentian.ca/academics/admissions/language-requirements",
          "label": "Laurentian English and French language requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    },
    {
      "id": "french-undergraduate",
      "label": "French-language undergraduate programmes",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "note": "English IELTS does not substitute for the French requirement. Nursing may require both languages."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic SAT/ACT rules for all international school qualifications were not established. A US-curriculum rule is not applied to every international applicant."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "Three years of documented French-medium secondary/post-secondary study, or an accepted French test. The page lists TCF B2 and TEF written B2; its DALF B2 wording needs clarification."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://laurentian.ca/academics/admissions/language-requirements",
          "label": "Laurentian English and French language requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "universite-de-montreal": [
    {
      "id": "international-first-year",
      "label": "French-language undergraduate admission: programme rules apply",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "note": "An English test does not establish the French-language requirement. No universal IELTS minimum is inferred."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic SAT/ACT rules for all international school qualifications were not established. A US-curriculum rule is not applied to every international applicant."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "French proof is programme-specific. Since Winter 2026, accepted test evidence includes reading, listening AND writing. Recognised educational history can substitute. There is no single university-wide IELTS cutoff for these French routes."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://admission.umontreal.ca/exigence-de-francais/",
          "label": "UdeM French admission requirement since Winter 2026",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "universite-laval": [
    {
      "id": "international-first-year",
      "label": "French-language undergraduate admission: programme rules apply",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "note": "An English test does not establish the French-language requirement. No universal IELTS minimum is inferred."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic SAT/ACT rules for all international school qualifications were not established. A US-curriculum rule is not applied to every international applicant."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "Mainly French instruction. Applicants without French primary/secondary education take TCF tout public: listening, grammar, reading and writing. Test within two years; programme determines admission/graduation threshold and possible non-credit French courses."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://www.ulaval.ca/en/admission/prepare-your-application/french-proficiency",
          "label": "Laval French proficiency policy",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "universite-du-quebec-a-montreal": [
    {
      "id": "international-first-year",
      "label": "French-language undergraduate admission: programme rules apply",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "note": "An English test does not establish the French-language requirement. No universal IELTS minimum is inferred."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic SAT/ACT rules for all international school qualifications were not established. A US-curriculum rule is not applied to every international applicant."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "Recognised French test needed unless a documented exemption applies; at least reading and listening. Depending on results, direct admission, compulsory French support or refusal. Teaching programmes have a separate eliminatory UQAM test; TFI stopped in February 2025 and old results expire after two years."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://etudier.uqam.ca/tests-francais-reconnus",
          "label": "UQAM recognised French tests for undergraduate admission",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "osaka-university": [
    {
      "id": "human-sciences-iudp",
      "label": "Human Sciences International Undergraduate Degree Program — Suita",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "social-sciences"
      ],
      "applicability": {
        "label": "October / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission",
          "variant": "IELTS Academic / IELTS Indicator"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 85
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "note": "The guide says generally no IELTS component below 6.0; this qualified wording is not treated as an unconditional section cutoff. Indicator/Home Edition applicants may be interviewed. TOEFL ITP and MyBest are not accepted.",
        "alternatives": "Cambridge CAE/CPE grade C; specified GCSE, GCE, IB and other English qualifications.",
        "waiver": "Recent secondary/university courses taught and assessed in English with passing grades, or at least 24 months of English-using employment; additional proof may be requested."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "Submit university-entrance qualifications applicable to your education system: SAT/ACT/AP, IB, A levels or recognised national qualifications. SAT is not the only route; the guide’s qualification appendix must be checked."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://iudp.hus.osaka-u.ac.jp/wp-content/uploads/2026/07/2027-HUS-Application-Guidelines.pdf",
          "label": "Osaka Human Sciences October 2027 guide",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            3,
            5,
            8,
            11,
            12,
            13,
            19,
            20,
            21
          ],
          "quote": "Submit official scores of any standardized academic test for university entrance that you have taken."
        }
      ],
      "note": null
    }
  ],
  "nagoya-university": [
    {
      "id": "g30",
      "label": "G30 English-taught undergraduate programmes — October 2027",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "October / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6,
          "role": "admission",
          "variant": "IELTS Academic; One Skill Retake accepted"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 80
            },
            {
              "period": "post2026",
              "min": 4
            }
          ],
          "note": "Home Edition and MyBest accepted; TOEFL ITP and TOEIC not accepted."
        },
        "alternatives": "Duolingo 110; CEFR C1 recorded on official transcripts. Other certificates require advance review.",
        "waiver": "At least three consecutive English-medium education years including the final secondary year, with an official school certificate."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT/ACT/EJU are strongly recommended, not generally compulsory. National or standardised examinations are mandatory for eligibility categories 1b and 2; curriculum-specific qualifications and subject advice still apply."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admissions.g30.nagoya-u.ac.jp/upload/2027_admission_requirements_en.pdf",
          "label": "Nagoya G30 undergraduate AY2027 guide",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            3,
            6,
            19,
            20,
            30,
            32
          ],
          "quote": "While standardized test scores are not compulsory, they are highly recommended."
        }
      ],
      "note": null
    }
  ],
  "meiji-university": [
    {
      "id": "sgjs-english-track",
      "label": "School of Global Japanese Studies English Track — Nakano",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "social-sciences",
        "humanities"
      ],
      "applicability": {
        "label": "September 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6,
          "role": "admission",
          "variant": "IELTS Academic in-centre paper/computer"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 80
            },
            {
              "period": "post2026",
              "min": 4
            }
          ]
        },
        "alternatives": "Cambridge 169; ACT English 18; specified old-paper SAT reading/writing scores. Digital SAT is accepted academically but NOT as English proof. IELTS Online/One Skill Retake and TOEFL Home/MyBest are not accepted.",
        "waiver": "No waivers: English-medium primary and secondary schooling does not remove the official English-score requirement."
      },
      "academic": {
        "satPolicy": "required-alternatives",
        "note": "One of SAT (including digital), ACT, IB Diploma or the specified EJU Japan and the World in English is required. A levels, Abitur and French/European Baccalaureate do not substitute for this examination requirement."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/glqts00000002hta-att/a1793259032270.pdf",
          "label": "Meiji SGJS English Track September 2027 guide",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            4,
            8,
            9
          ],
          "quote": "All applicants must submit the official score report of one of the following examinations."
        }
      ],
      "note": null
    }
  ],
  "tohoku-university": [
    {
      "id": "gateway-term-ii",
      "label": "Gateway College Term II — October 2027",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "October / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6,
          "role": "admission",
          "variant": "IELTS Academic / IELTS Online"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 80
            },
            {
              "period": "post2026",
              "min": 4
            }
          ]
        },
        "alternatives": "Duolingo 110; Cambridge B2/C1/C2 169; EIKEN Pre-1/1 with 2400. No IELTS Indicator/One Skill Retake, TOEFL MyBest/ITP or TOEIC.",
        "waiver": "Three formal English-medium education years within the four academic years preceding school graduation; submit Tohoku’s designated certificate, not a generic school MOI letter."
      },
      "academic": {
        "satPolicy": "required-alternatives",
        "note": "Required subjects must be covered by an accepted SAT/ACT/AP/EJU, IB or A-level qualification, according to Humanities/Social Sciences or STEM track; then online written examination and interview. Expected academic test scores are not hard minimums."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admissions.tohoku.ac.jp/en/adcms/wp-content/uploads/2026/08/ApplicationGuideGWC2027Fall.pdf",
          "label": "Tohoku Gateway College Fall 2027 guide",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            1,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            22
          ],
          "quote": "Regardless of nationality, all applicants are required to submit a proof of English proficiency."
        },
        {
          "url": "https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/",
          "label": "Tohoku: Gateway College replaces undergraduate FGL",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": "FGL undergraduate admission ended in 2026. This verified 2027 route is Gateway College, not a continuation of the old FGL admission rules."
    }
  ],
  "okayama-university": [
    {
      "id": "discovery-october",
      "label": "Discovery Program for Global Learners — October intake",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "October / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "role": "admission",
          "variant": null,
          "noMinimum": true
        },
        "toefl": {
          "accepted": true,
          "noMinimum": true
        },
        "alternatives": "Cambridge, EIKEN, GTEC, TEAP, TOEFL iBT, paired TOEIC L&R plus S&W, or IB English including predicted results. No at-home tests. CEFR B2 is recommended, not a minimum score.",
        "waiver": "At least five years of secondary education in English. English ability is also assessed through statements and interview."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "The 2027 international application instructions explicitly label SAT/ACT, national exams and EJU results optional. Eligibility and academic records remain required."
      },
      "localLanguage": [
        {
          "name": "Japanese",
          "requirement": "Japanese proof is optional for application. Access to other faculties’ courses may require Japanese assessed at interview. April orientation is in Japanese; do not apply October language context to that route."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://discovery.okayama-u.ac.jp/en/prospective_students/admission/international-application/",
          "label": "Okayama Discovery 2027 international application instructions",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "institute-of-science-tokyo": [
    {
      "id": "gsep-april",
      "label": "Global Scientists and Engineers Program (GSEP) — April 2027",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "engineering"
      ],
      "applicability": {
        "label": "April 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "spring-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "role": "admission",
          "variant": "IELTS Academic paper/computer in-centre",
          "noMinimum": true
        },
        "toefl": {
          "accepted": true,
          "noMinimum": true
        },
        "alternatives": "TOEFL iBT/Home Edition or TOEIC L&R. IELTS Online, institutional TOEFL/TOEIC and TOEIC S&W/Speaking/Bridge are not accepted. Two-year validity.",
        "waiver": "Only nationals of the listed native-English countries with the designated document. English-medium high school alone does not qualify."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "EJU, A-level, IB, SAT, ACT and AP are encouraged optional interview reference materials, not mandatory SAT. GSEP’s own selection and academic qualifications remain separate."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep",
          "label": "Science Tokyo GSEP April 2027 requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "frankfurt-school": [
    {
      "id": "bba-english",
      "label": "Bachelor in Business Administration — English starting route",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "business"
      ],
      "applicability": {
        "label": "September 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "internal-assessment",
        "ielts": {
          "accepted": null,
          "min": null
        },
        "note": "An English certificate is not required with the BBA application: the online Assessment Centre includes English testing. Not meeting that assessment leads to discussion of further options, not an assumed IELTS exemption."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "A recognised school-leaving qualification and successful Assessment Centre are required. The centre tests quantitative, verbal and figural reasoning plus interview. A universal SAT/ACT substitute rule is not established."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.frankfurt-school.de/en/home/study/bachelor/bachelor-in-business-administration",
          "label": "Frankfurt School BBA September 2027 requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": "Start in English or German; from semester 4 all courses are English. Corporate-partner CompactTrack requires German C1; it is not the same as the general English starting route."
    }
  ],
  "leuphana-university-luneburg": [
    {
      "id": "english-majors",
      "label": "English-language College majors: Economics, IBA and listed programmes",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "economics",
        "business",
        "social-sciences",
        "arts",
        "psychology"
      ],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 90,
              "sections": {
                "reading": 21,
                "listening": 19,
                "speaking": 22,
                "writing": 20
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "reading": 4,
                "writing": 4,
                "listening": 4,
                "speaking": 4
              }
            }
          ]
        },
        "alternatives": "PTE Academic 63; Cambridge B2 First 175/C1 Advanced 180/C2 Proficiency 200; TOEIC four skills with published thresholds.",
        "waiver": "Specified European Baccalaureate English 8, IB English A HL 6, a completed English-language degree, or an English-school entrance qualification. Qualification, not nationality, determines proof. German is not required for an English-language major."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable academic entrance qualification must be checked separately. Absence of SAT on a language page does not establish test-optional admission."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.leuphana.de/en/college/application/international-applications/requirements/language-proficiency/eng-maj2.html",
          "label": "Leuphana English-major language requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    },
    {
      "id": "german-majors",
      "label": "German-language College majors — engineering has separate rules",
      "language": "de",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 4.5,
          "role": "admission"
        },
        "alternatives": "German majors also require English proof: TOEFL legacy 60 with stated sections, new 3.5 with stated sections; PTE Academic 50, specified Cambridge or TOEIC tests, or qualifying English-medium education."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable academic entrance qualification must be checked separately. Absence of SAT on a language page does not establish test-optional admission."
      },
      "localLanguage": [
        {
          "name": "German",
          "requirement": "Unrestricted route: DSH-2, TestDaF 4 in every part (16 total), telc Deutsch C1 Hochschule, Goethe C2 or listed equivalents. Goethe C1/DSH-1 can lead to conditional admission with compulsory preparation and DSH-2 by semester 2; not unrestricted entry."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://www.leuphana.de/en/college/application/international-applications/requirements/language-proficiency/ger-maj2.html",
          "label": "Leuphana German-major language requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "rhine-waal-university": [
    {
      "id": "english-b2",
      "label": "English-taught bachelor programmes requiring B2 — campus depends on programme",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 5.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 72
            }
          ]
        },
        "alternatives": "Published B2 certificates include PTE 59–75, named Cambridge awards, telc B2, UNIcert II, specified IGCSE and three TOEIC skill tests. C1 is a different category: IELTS 7.0 / TOEFL 95.",
        "waiver": "German entrance qualification can demonstrate B2. The certificate list also recognises specified English-country school diplomas/degrees and IB English 5; an unspecified medium-of-instruction letter is not assumed sufficient."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable academic entrance qualification must be checked separately. Absence of SAT on a language page does not establish test-optional admission."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.hochschule-rhein-waal.de/en/study/before-starting-university/overview-for-prospective-students",
          "label": "Rhine-Waal bachelor B2 requirement",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://www.hochschule-rhein-waal.de/fileadmin/upload_redaktion/Dezernate/Studierendenangelegenheiten/ZSB/_Dokumente/Accepted_English_Language_Proofs-40.pdf",
          "label": "Rhine-Waal accepted English proofs: B2 and C1 columns",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            1
          ],
          "quote": "minimum score 5.5"
        }
      ],
      "note": "The official overview links this B2 certificate list for bachelor applicants. This is not a C1/master threshold and does not confirm every programme or Fall 2027 policy."
    }
  ],
  "technical-university-of-munich": [
    {
      "id": "german-language-programmes",
      "label": "German-language degree route — programme regulations govern",
      "language": "de",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "note": "An IELTS score does not replace German proof. English requirements vary; the general IELTS 6.5 certificate list is not a universal requirement for every TUM bachelor."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable academic entrance qualification must be checked separately. Absence of SAT on a language page does not establish test-optional admission."
      },
      "localLanguage": [
        {
          "name": "German",
          "requirement": "DSH-2, TestDaF level 4 in all parts, DSD II at least B2 in all parts, telc Deutsch C1 Hochschule, Goethe C2 or listed equivalents. German entrance qualification and specified educational proofs can qualify. Aerospace/Information Engineering have separate lower-level German alternatives."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://www.tum.de/en/studies/application/application-info-portal/admission-requirements/language-certificates",
          "label": "TUM language certificates and bachelor exceptions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": "For six named bachelor programmes, English is checked through aptitude assessment and an English certificate is not required with the application. Confirm the exact degree, campus and its German/English combination."
    }
  ],
  "berry-college": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null,
          "recommended": 7,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "recommended": 90
            }
          ]
        },
        "alternatives": "Duolingo preferred score 115. The page calls these minimum preferred scores; they are not treated as unconditional rejection thresholds.",
        "waiver": "A school official can complete the published English Proficiency Waiver for English-speaking schooling; the admissions team must accept the evidence."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "SAT/ACT are explicitly listed as optional international application materials."
      },
      "localLanguage": [],
      "documents": [
        "First-year school transcripts require WES evaluation if not on the US grading scale; passport and certification of finances required."
      ],
      "sources": [
        {
          "url": "https://www.berry.edu/admission/how-to-apply/international",
          "label": "Berry international first-year requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "tuskegee-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 62
            }
          ]
        },
        "alternatives": "Published alternatives: Duolingo 85, PTE 40, iTEP 5.0; the page also lists paper TOEFL 500. No modern 1–6 TOEFL threshold is established.",
        "waiver": "The stated US-college English-course waiver is a transfer rule, not an automatic waiver for first-year applicants."
      },
      "academic": {
        "satPolicy": "required",
        "note": "The international checklist requests SAT or ACT and lists SAT 1000 / ACT 18. It has no intake year; confirm the policy for Fall 2027 rather than silently applying it to that cycle."
      },
      "localLanguage": [],
      "documents": [
        "WES/ECE course-by-course and GPA evaluation, translated school records and financial affidavit/bank evidence."
      ],
      "sources": [
        {
          "url": "https://www.tuskegee.edu/admissions/criteria-for-international-students.html",
          "label": "Tuskegee international admission criteria",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-tampa": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 79
            },
            {
              "period": "post2026",
              "min": 4
            }
          ]
        },
        "alternatives": "Duolingo 110; TOEFL Essentials 8.5. The source’s ACT English 40 waiver figure is impossible on the ACT scale and is not used to confirm a waiver; request clarification.",
        "waiver": "IB Diploma or IB English A HL; ELS 112/Tampa Language Center Level 6; I/GCSE English B; four US high-school English courses I–IV at B or above without ESL; listed citizenship. SAT Reading/Writing 530 is also listed for review."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "The first-year international checklist explicitly lists SAT/ACT as optional. Do not reuse the separate transfer English waivers."
      },
      "localLanguage": [],
      "documents": [
        "Official secondary records, certified English translations, applicable leaving exams, essay and International Student Financial Form."
      ],
      "sources": [
        {
          "url": "https://www.ut.edu/apply/international-students",
          "label": "UTampa international first-year requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-strathclyde": [
    {
      "id": "standard-direct",
      "label": "Standard direct degree language rule — course exceptions apply",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 6.5,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "Some courses require different scores. This is the published standard, not a verified minimum for every course. Preparation courses have separate entry requirements."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry depends on the school qualification and course. This language policy does not establish a universal SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.strath.ac.uk/studywithus/englishlanguagerequirements/",
          "label": "Strathclyde standard and faculty English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    },
    {
      "id": "science-engineering-direct",
      "label": "Faculty of Science / undergraduate Engineering language rule",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "computer-science",
        "data-science",
        "engineering",
        "mathematics",
        "biology"
      ],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 6,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "Faculty standard only: verify your individual course. Science postgraduate research uses 6.5, not this undergraduate reference."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry depends on the school qualification and course. This language policy does not establish a universal SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.strath.ac.uk/studywithus/englishlanguagerequirements/",
          "label": "Strathclyde standard and faculty English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "middlesex-university": [
    {
      "id": "general-undergraduate",
      "label": "General undergraduate programmes — London; professional exceptions excluded",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS online / paper; One Skill Retake accepted",
          "min": 6,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "General undergraduate column excludes exceptional courses. Nursing/Midwifery, Healthcare Science, Social Work and Veterinary Nursing have different requirements; do not use this 6.0 rule for them.",
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "post2026",
              "min": 4,
              "sections": {
                "reading": 4,
                "writing": 4,
                "listening": 4,
                "speaking": 4
              }
            }
          ]
        },
        "alternatives": "PTE Academic 59 in each component; Cambridge 168 overall/160 each; approved internal MDX test 3.0/2.5; listed IB/GCE and other certificates. TOEFL MyBest accepted. Some alternatives have Student Visa restrictions.",
        "waiver": "Approved English-taught and assessed degree with NARIC/evidence; specified majority-English nationality with demonstrated competence; or approved pre-sessional completion. An arbitrary school MOI letter alone is not a blanket waiver."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry depends on the school qualification and course. This language policy does not establish a universal SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.mdx.ac.uk/international/entry-requirements-for-international-students/english-language-requirements-for-international-students/",
          "label": "Middlesex undergraduate column and exceptional courses",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "oxford-brookes-university": [
    {
      "id": "general-undergraduate",
      "label": "General direct undergraduate entry — listed exceptions excluded",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 6,
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "General undergraduate rule, excluding Law, Architecture, English Literature, health and other listed exceptions. Alternative tests are published in an IELTS-equivalence table; course and visa conditions matter.",
        "alternatives": "Accepted alternatives include TOEFL (two scales), PTE, Cambridge, Duolingo and other named tests. One Skill Retake accepted. Pre-sessional English can start at 4.5; that is not degree entry.",
        "waiver": "Specified GCSE/GCE and country qualifications may satisfy English, assessed case by case. Visa applicants on pre-sessional/Foundation or a course below IELTS 6.0 need an approved UKVI SELT."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry depends on the school qualification and course. This language policy does not establish a universal SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.brookes.ac.uk/study/international-students/applying-to-arriving/how-to-apply/english-language-requirements",
          "label": "Oxford Brookes undergraduate and Foundation English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    },
    {
      "id": "international-foundation",
      "label": "International Foundation Business/Technology or Arts/Humanities/Law",
      "language": "en",
      "kind": "foundation",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "business",
        "economics",
        "computer-science",
        "arts",
        "humanities",
        "law"
      ],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 5.5,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "Foundation, not direct bachelor admission. Built Environment and Life Sciences Foundation have a different 6.0 rule; visa SELT conditions also apply."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry depends on the school qualification and course. This language policy does not establish a universal SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.brookes.ac.uk/study/international-students/applying-to-arriving/how-to-apply/english-language-requirements",
          "label": "Oxford Brookes undergraduate and Foundation English requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "handong-global-university": [
    {
      "id": "english-majors",
      "label": "English-taught majors: Global Management, US/International Law, IT, Global Convergence",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "business",
        "law",
        "computer-science",
        "social-sciences"
      ],
      "applicability": {
        "label": "Spring / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed"
      },
      "english": {
        "requirement": "recommended",
        "ielts": {
          "accepted": true,
          "min": null,
          "recommended": 5.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "recommended": 85
            }
          ]
        },
        "alternatives": "New TEPS 285 or TOPIK 4 are recommended documents. Without official scores, language may be assessed at interview after passing document screening.",
        "note": "Cornerstone Scholarship applicants MUST submit a language certificate and separate scholarship form. This scholarship condition is separate from the general admission recommendation."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "The 2027 document table lists SAT/IB/AP/GCE A-level as optional supporting activity/achievement evidence. Recognised schooling is still required; homeschool, online/adult education and GED do not establish eligibility."
      },
      "localLanguage": [],
      "documents": [
        "Applicant and both parents must be non-Korean nationals; school records, nationality/family evidence, signed forms and required financial documents."
      ],
      "sources": [
        {
          "url": "https://www.handong.edu/ext/bbs/download.dcp?id=16397",
          "label": "Handong 2027 international undergraduate guide",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            5,
            11,
            15
          ],
          "quote": "Language proficiency scores are recommended documents and are required for Cornerstone Scholarship applicants"
        }
      ],
      "note": "First-year admission is undeclared; major selection follows year 1. Only the four listed majors are explicitly 100% English in the guide; this is not an English-language promise for every major."
    }
  ],
  "gist": [
    {
      "id": "international-undergraduate-reference",
      "label": "International undergraduate science/engineering — Fall 2026 reference guide",
      "language": "unknown",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Fall 2026",
        "entryYears": [
          2026
        ],
        "status": "previous-cycle",
        "intakes": [
          "fall-2026"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null
        },
        "toefl": {
          "accepted": true,
          "min": null
        },
        "alternatives": "TEPS, TOEIC, Cambridge CAE/CPE, PTE Academic and Duolingo are listed. Test results within two years; the undergraduate guide does not supply a numerical minimum. Graduate IELTS 6.5 must not be imported here.",
        "waiver": "The guide exempts native English speakers from the six listed countries. It does not establish a general school-MOI waiver."
      },
      "academic": {
        "satPolicy": "required-alternatives",
        "note": "At least one SAT, ACT, GCE A-level, IB, AP, international Olympiad certificate or qualifying national examination report is required in this 2026 undergraduate guide. SAT alone is not the only option."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://ewww.gist.ac.kr/iuadm/img/main/2026_Fall_Undergraduate_Admission_Guideline.pdf",
          "label": "GIST Fall 2026 international undergraduate guide",
          "verified": "2026-11-18",
          "access": "pdf-read",
          "pages": [
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "quote": "At least one of the above official test score reports should be submitted."
        }
      ],
      "note": "The guide confirms international bachelor eligibility, but does not establish a wholly English degree or the Fall 2027 rules. Graduate and exchange language pages were excluded."
    }
  ],
  "dgist": [
    {
      "id": "school-of-undergraduate-studies",
      "label": "School of Undergraduate Studies — international bachelor route",
      "language": "multiple",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "optional",
        "ielts": {
          "accepted": true,
          "min": null,
          "noMinimum": true
        },
        "toefl": {
          "accepted": true,
          "min": null,
          "noMinimum": true
        },
        "alternatives": "The official government university record lists TOEFL, IELTS, new TEPS, TOEIC, Cambridge CAE/CPE, PTE Academic and Duolingo, with no numerical minimum and two-year test validity. Its department table was last updated in 2024, so this is not a confirmed 2027 rule.",
        "note": "The university’s current complete document checklist lists English proof as optional. This is different from waiving a compulsory numerical minimum."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Standardised official test reports are optional in the university checklist. Exact accepted SAT/ACT versions and the 2027 guide details were not recovered, so no universal SAT rule is inferred."
      },
      "localLanguage": [],
      "documents": [
        "School diploma/expected graduation, transcript, applicant/parents’ passports and parent-child relationship evidence are mandatory; Korean-origin applicants have additional documents."
      ],
      "sources": [
        {
          "url": "https://www.dgist.ac.kr/iuadm/sub02_04.do",
          "label": "DGIST international undergraduate required documents",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://www.studyinkorea.go.kr/ko/search/universityInfo.do?tab=univ-basic-info&univCd=100122",
          "label": "Official Study in Korea: DGIST undergraduate department record",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": "The official undergraduate department table says above 90% of courses are English. It does not guarantee every required course can be completed in English."
    }
  ],
  "dongguk-university": [
    {
      "id": "seoul-korean-proof-spring",
      "label": "Seoul international first-year admission requiring Korean proof — Spring 2027",
      "language": "unknown",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Spring 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "spring-2027"
        ]
      },
      "english": {
        "note": "The undergraduate notice requires one of its Korean qualifications. An IELTS/TOEFL substitution is not confirmed. The English/tuition table on /eng/page/446 is graduate-level and based on 2021; it is not used as first-year evidence."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The public notice does not establish a SAT/ACT policy; its undergraduate guide must be checked for the specific major."
      },
      "localLanguage": [
        {
          "name": "TOPIK / Korean alternatives",
          "requirement": "TOPIK or iBT TOPIK level 3; Sejong intermediate 3B; specified four-semester language-school completion with attendance conditions; or Dongguk’s in-person level test stage 3. The campus test cannot be taken abroad."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://en.dongguk.edu/article/INTSTUNOTICE/detail/26766179",
          "label": "Dongguk Seoul international undergraduate Spring 2027 notice",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": "This review establishes a Korean-proof admission route, not a verified wholly English programme. The exact degree teaching language and Fall 2027 rules remain unconfirmed."
    }
  ],
  "rhode-island-school-of-design": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 7,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 93
            },
            {
              "period": "post2026",
              "min": 5
            }
          ]
        },
        "alternatives": "Duolingo 120. TOEFL MyBest/Home Edition and IELTS UKVI accepted; IELTS UKVI General is not accepted. These rules also apply to second-language-English US citizens.",
        "waiver": "SAT Reading/Writing 600 or ACT English AND Reading 25; or completed English-medium secondary schooling with three consecutive full-time years without ESL/ELL/ENL and an approved waiver form."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "SAT/ACT are not required for admission; optional academic submission and English-proof substitution are distinct."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.risd.edu/admissions/first-year/international-applicants",
          "label": "RISD international first-year requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "milwaukee-school-of-engineering": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          },
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 82,
              "sections": {
                "reading": 19,
                "writing": 19,
                "listening": 19,
                "speaking": 19
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "reading": 4,
                "writing": 4,
                "listening": 4,
                "speaking": 4
              }
            }
          ]
        },
        "alternatives": "Duolingo 115 with minimum band 100; PTE 56. These are full-admission requirements; a universal waiver was not established."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The international document checklist does not state a SAT/ACT rule. This omission is not treated as proof of optional admission."
      },
      "localLanguage": [],
      "documents": [
        "All secondary/post-secondary transcripts, passport, financial certification and bank evidence for one year; international first-years normally live on campus for two years."
      ],
      "sources": [
        {
          "url": "https://www.msoe.edu/admissions-aid/international-admissions/future-international-students/undergraduate-students/requirements/",
          "label": "MSOE international undergraduate requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "st-john-fisher-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "alternatives-with-academic",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": null
            }
          ],
          "note": "The source prints an internet TOEFL minimum as 79–80, plus paper 550/computer 213; the ambiguous internet boundary is not collapsed into one confirmed number."
        },
        "alternatives": "The checklist requires at least one of SAT/ACT OR, for a non-native English speaker, TOEFL, Duolingo 105 or IELTS 6.5. It does not require SAT in addition to an accepted English alternative."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT/ACT are one checklist alternative alongside specified English tests. Whether the applicant qualifies for the alternative must be checked; no independent compulsory SAT is inferred."
      },
      "localLanguage": [],
      "documents": [
        "All school records, NACES evaluation for school years outside the US, counselor/teacher recommendation and an essay of at least 250 words."
      ],
      "sources": [
        {
          "url": "https://www.sjf.edu/student-life/international-student-services/admissions/first-year-admissions/",
          "label": "Fisher international first-year test alternatives",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "siena-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-by-language-country",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 79
            }
          ]
        },
        "alternatives": "Duolingo 115. The requirement refers to native language/language of instruction. Applicants below the stated levels may receive conditional admission via an approved partner; that is not unconditional direct entry."
      },
      "academic": {
        "satPolicy": "optional"
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.siena.edu/offices/admissions/international-students/how-to-apply/",
          "label": "Siena international degree application requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "hampton-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": null,
          "min": null
        },
        "toefl": {
          "accepted": true,
          "min": null
        },
        "alternatives": "The international page lists TOEFL, SAT/ACT or Duolingo for non-native English applicants, without score thresholds. IELTS acceptance and a numerical threshold were not established."
      },
      "academic": {
        "satPolicy": "required",
        "note": "The international application checklist explicitly requests official SAT or ACT. The page has no intake year, so this is reference evidence until Fall 2027 is confirmed."
      },
      "localLanguage": [],
      "documents": [
        "Official school diploma/transcripts and English translations; credential evaluation may be requested. West African applicants have specific WASSCE/GCE evidence rules."
      ],
      "sources": [
        {
          "url": "https://home.hamptonu.edu/admissions/international-students/",
          "label": "Hampton international first-year document requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "louisiana-tech-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 79
            },
            {
              "period": "post2026",
              "min": 4.5
            }
          ]
        },
        "alternatives": "Duolingo 100 or PTE 50 for admission; English Accuplacer 250 or SAT EBRW 500 also listed. English-medium high-school curriculum is accepted evidence.",
        "note": "Admission, English placement, Math placement and Bulldog Scholarship have different criteria. The page contradicts itself on PTE scholarship eligibility; admission PTE 50 is not treated as confirmed scholarship eligibility."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "The complete freshman checklist lists GPA 2.5 plus English evidence, not a universal SAT total. English and Math placement each allow alternatives: SAT sections, Accuplacer or assessed GPA under the stated rules. Placement is not a published admission SAT minimum."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.latech.edu/student-life/international-affairs/undergaduate-admissions.php",
          "label": "Louisiana Tech international freshman requirements and placement",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "murray-state-university": [
    {
      "id": "regular-undergraduate",
      "label": "Regular undergraduate language route — Fall/Spring 2027",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Spring / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 71
            }
          ]
        },
        "alternatives": "Duolingo 100; PTE 51; GTEC 1190; TOEIC 790 plus Speaking 160; SAT 960 is another English-proof option, not a universal academic cutoff.",
        "waiver": "US high-school graduation; a US-accredited full-time university semester of at least 12 credits with GPA 2.5; specified British/Cambridge qualifications; ESL completion or listed country exceptions."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT 960 is listed among English proficiency alternatives. The complete undergraduate checklist does not require an additional SAT/ACT when another accepted proof is used. GPA 2.0 and school completion remain separate requirements."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.murraystate.edu/admissions/international/Admissions/index.aspx",
          "label": "Murray State Fall/Spring 2027 undergraduate checklist",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    },
    {
      "id": "undergraduate-with-condition",
      "label": "Undergraduate full admission with a first-semester GPA condition",
      "language": "en",
      "kind": "degree-with-conditions",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Spring / Fall 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 5.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 61
            }
          ]
        },
        "alternatives": "Duolingo 90; PTE 45; GTEC 1100; TOEIC 700 plus Speaking 140. Undergraduates admitted with condition must maintain GPA 2.0 in the first semester. This is not an unconditional 5.5 direct-entry result."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT 960 is listed among English proficiency alternatives. The complete undergraduate checklist does not require an additional SAT/ACT when another accepted proof is used. GPA 2.0 and school completion remain separate requirements."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.murraystate.edu/admissions/international/Admissions/index.aspx",
          "label": "Murray State Fall/Spring 2027 undergraduate checklist",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "calvin-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 80
            },
            {
              "period": "post2026",
              "min": 4
            }
          ]
        },
        "alternatives": "Duolingo 110; SAT Reading/Writing 510 AND total 1100, or ACT English 20 AND total 23; specified IB/A-level/AS/GCSE/IGCSE English and ELS completion.",
        "waiver": "Two years of US high school, IB or predominantly English international schooling; a US college semester; education in a listed English-speaking country. Evidence is reviewed with the whole application."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "Test-optional undergraduate admission does not remove English proof or curriculum-specific national leaving exams. Several scholarships still use SAT/ACT; check the particular award."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://calvin.edu/admissions/international/process",
          "label": "Calvin international undergraduate application",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://calvin.edu/admissions/international/english-language-proficiency",
          "label": "Calvin undergraduate English alternatives and waivers",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "georgia-college-state-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": null
        },
        "toefl": {
          "accepted": true,
          "min": null
        },
        "alternatives": "PTE Academic or another English proof approved by the University System of Georgia Board of Regents. This checklist does not publish thresholds; graduate tests are a separate list."
      },
      "academic": {
        "satPolicy": "required",
        "note": "The international undergraduate checklist requests official SAT or ACT independently of English proof. The cycle and school-specific exceptions must be confirmed for Fall 2027."
      },
      "localLanguage": [],
      "documents": [
        "Official school records with English translations, essay, signed finance declaration and original bank documents. The international scholarship application is separate and optional."
      ],
      "sources": [
        {
          "url": "https://www.gcsu.edu/international/application-checklist-deadlines",
          "label": "GCSU international undergraduate checklist",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "brock-university": [
    {
      "id": "general-undergraduate",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          },
          "variant": "IELTS Academic / online; One Skill Retake accepted",
          "role": "admission"
        },
        "alternatives": "Duolingo 110; CAEL 70 with each component 60; PTE 58; Cambridge 176. TOEFL legacy 88 with each component 21. The new-scale table gives overall 4.5, Reading/Speaking 4.0 and Writing/Listening 4.5; the page dates its change 1 January 2026, so confirm the test-date category.",
        "waiver": "A waiver request may be reviewed after three full-time English-medium years without ESL and supporting evidence, or an eligible IB English A qualification. Exemption is not automatic.",
        "note": "General undergraduate rule excludes co-op Accounting. IELP level 5 completion is a separate conditional pathway, not this direct-entry score."
      },
      "academic": {
        "satPolicy": "accepted",
        "note": "Faculty Handbook 3.3.3(c): SAT can support borderline US Grade 12 diploma applications. This establishes SAT acceptance in that scope, not an ACT alternative, a universal test-optional rule or a Fall 2027 requirement."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://brocku.ca/admissions/english-proficiency/",
          "label": "Brock undergraduate English proficiency and exceptions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://brocku.ca/university-secretariat/faculty-handbook/section-3/",
          "label": "Brock Faculty Handbook 3.3.3(c): US diploma and SAT",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://brocku.ca/university-secretariat/faculty-handbook/section-3/",
          "label": "Brock Faculty Handbook 3.3.3(c): US diploma and SAT",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    },
    {
      "id": "coop-accounting",
      "label": "Co-op Accounting BAcc: language requirement",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "business"
      ],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 7,
          "sections": {
            "reading": 6.5,
            "writing": 6.5,
            "listening": 6.5,
            "speaking": 6.5
          },
          "variant": "IELTS Academic",
          "role": "admission"
        }
      },
      "academic": {
        "satPolicy": "accepted",
        "note": "Faculty Handbook 3.3.3(c): SAT can support borderline US Grade 12 diploma applications. This establishes SAT acceptance in that scope, not an ACT alternative, a universal test-optional rule or a Fall 2027 requirement."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://brocku.ca/admissions/english-proficiency/",
          "label": "Brock undergraduate English proficiency and exceptions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://brocku.ca/university-secretariat/faculty-handbook/section-3/",
          "label": "Brock Faculty Handbook 3.3.3(c): US diploma and SAT",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://brocku.ca/university-secretariat/faculty-handbook/section-3/",
          "label": "Brock Faculty Handbook 3.3.3(c): US diploma and SAT",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "mount-royal-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "variant": "IELTS Academic / IELTS Academic Online",
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 86,
              "sections": {
                "reading": 20,
                "writing": 20,
                "listening": 20,
                "speaking": 20
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "reading": 4,
                "writing": 4,
                "listening": 4,
                "speaking": 4
              }
            }
          ]
        },
        "alternatives": "Duolingo 120; PTE Academic including online 58 with each skill 55; CAEL 70/60; Cambridge 176; MET 62/53; LanguageCert 70/60; LEAP level 4 with B− (80%).",
        "waiver": "Two full-time years of English-medium education in a listed English-speaking country, with the required English Language Arts 30-1/30-2 or equivalent. Country, school history and academic English prerequisite must all be checked.",
        "note": "Language proficiency and the programme’s required school English course are separate requirements. A lower LEAP entry score is not a bachelor admission minimum."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.mtroyal.ca/Admission/AdmissionRequirements/english-language-proficiency-requirement-institutional.htm",
          "label": "Mount Royal institutional undergraduate English proficiency",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "acadia-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          },
          "variant": "IELTS; Academic variant not specified in this table",
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 90,
              "sections": {
                "reading": 20,
                "writing": 20,
                "listening": 20,
                "speaking": 20
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "reading": 4.5,
                "writing": 4.5,
                "listening": 4.5,
                "speaking": 4.5
              }
            }
          ]
        },
        "alternatives": "CAEL 70/60; PTE Academic 61/60; Cambridge C1 Advanced or B2 First 180/173; Duolingo 115 with each subscore 90; LanguageCert 70–74/65; Oxford Advanced 135.",
        "waiver": "Three years of English-medium instruction may qualify for a waiver; the university evaluates international qualifications individually."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www2.acadiau.ca/admissions/application-process/international-students.html",
          "label": "Acadia international undergraduate English requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-ottawa": [
    {
      "id": "english-direct",
      "label": "English-language degree entry without ESL condition",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "sections": {
            "writing": 6.5
          },
          "variant": "IELTS Academic; One Skill Retake accepted",
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 86,
              "sections": {
                "writing": 22
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "writing": 4.5
              }
            }
          ]
        },
        "alternatives": "Duolingo 120 with Literacy 120; recognised school qualifications; approved TOEFL options. Lower EIP language-preparation scores are not unconditional degree entry.",
        "waiver": "Three full-time English-only years, apart from language classes, in a country where English is official; specified school qualifications may also qualify. Citizenship alone is not sufficient."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.uottawa.ca/study/undergraduate-studies/language-requirements",
          "label": "Ottawa English/French undergraduate language routes",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    },
    {
      "id": "english-with-esl",
      "label": "English-language degree entry with compulsory ESL",
      "language": "en",
      "kind": "degree-with-esl",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6,
          "sections": {},
          "variant": "IELTS Academic",
          "role": "admission"
        }
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.uottawa.ca/study/undergraduate-studies/language-requirements",
          "label": "Ottawa English/French undergraduate language routes",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": "The 6.0 category requires extra English courses; it does not meet the 6.5 overall/Writing unconditional rule. Other EIP preparatory categories have separate band conditions."
    },
    {
      "id": "french-direct",
      "label": "French-language undergraduate entry",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {},
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "DALF C1/C2; DELF B2 with Writing 16/25; recognised TCF/TEF B2 categories. Three French-only years in an eligible French-official country may qualify for a waiver. Programme and certificate categories matter."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://www.uottawa.ca/study/undergraduate-studies/language-requirements",
          "label": "Ottawa English/French undergraduate language routes",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "universite-de-sherbrooke": [
    {
      "id": "engineering-french",
      "label": "Listed engineering bachelor programmes: French admission condition",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "engineering"
      ],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {},
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "Biotechnology, chemical, civil, building, electrical, computer and mechanical engineering: C1 in all four skills in the general table. The programme page prevails. Approved French schooling may exempt; recognised tests include DELF/DALF, TCF with oral/written components and TEF variants. TFI/SEL are not recognised."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://www.usherbrooke.ca/admission/da/exigences-linguistiques/exigences-relatives-a-la-langue-francaise-pour-admission",
          "label": "Sherbrooke programme-specific French admission table",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "universite-de-moncton": [
    {
      "id": "french-undergraduate",
      "label": "French-language undergraduate study: May 2025 policy",
      "language": "fr",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {},
      "academic": {
        "satPolicy": "unknown",
        "note": "The applicable SAT/ACT policy for the applicant’s school qualification remains unconfirmed. Language-test alternatives do not establish an academic-test waiver."
      },
      "localLanguage": [
        {
          "name": "French",
          "requirement": "French is the teaching and assessment language, with named exceptions. Sufficient French is an admission condition; French immersion applicants have an oral interview and regular-status oral/written evaluation. The DELF B2 line in Annex B is specifically a BEd condition, not a universal bachelor cutoff."
        }
      ],
      "documents": [],
      "sources": [
        {
          "url": "https://www.umoncton.ca/gouvernance/sites/gouvernance.prod.umoncton.ca/files/politiques/UMoncton-politique-linguistique-mai-2025.pdf",
          "label": "Moncton adopted linguistic policy, Annex B",
          "verified": "2026-11-18",
          "access": "web-pdf-read",
          "pages": [
            1,
            4,
            7,
            16
          ]
        }
      ],
      "note": null
    }
  ],
  "wentworth-institute-of-technology": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic",
          "min": 6.5,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "pre2026",
              "min": 79,
              "sections": {
                "reading": 17,
                "writing": 17,
                "listening": 17,
                "speaking": 17
              }
            },
            {
              "period": "post2026",
              "min": 4,
              "sections": {
                "reading": 4,
                "writing": 4,
                "listening": 4,
                "speaking": 4
              }
            }
          ]
        },
        "alternatives": "Duolingo 105; PTE Academic or PTE Express 58. IELTS, TOEFL and DET results must be less than two years old.",
        "waiver": "Secondary education in a listed English-speaking country, not merely birth there; three years of qualifying English-medium school English; US college English I/II with C; SAT Reading/Writing 525; ACT Reading 18 AND English 20; or an approved ESL programme with a recommendation."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "The international undergraduate page explicitly makes SAT and ACT optional. Using their English subscores as language proof is separate."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://wit.edu/admissions/undergraduate/international",
          "label": "Wentworth international undergraduate application",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://wit.edu/admissions/international/english-proficiency-requirement",
          "label": "Wentworth English proficiency and exemptions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "baldwin-wallace-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "alternatives-with-academic",
        "ielts": {
          "accepted": true,
          "recommended": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "recommended": 79
            }
          ]
        },
        "alternatives": "One listed exam is requested: TOEFL, IELTS, Duolingo, SAT or ACT. Recommended figures are DET 105, SAT Reading/Writing 520 or ACT English 21; the page explicitly says these score levels are not required.",
        "note": "English-curriculum applicants are strongly encouraged to take SAT/ACT; if unavailable they may submit a listed language test. Music applicants have additional audition/evaluation requirements."
      },
      "academic": {
        "satPolicy": "conditional",
        "note": "SAT/ACT and language exams are alternatives in this first-year checklist, not two independently mandatory tests. The English-curriculum recommendation does not establish a universal SAT requirement."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.bw.edu/admission/international/",
          "label": "Baldwin Wallace international first-year exam alternatives",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "bryant-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "alternatives": "Duolingo 115; PTE 53; Oxford ELLT 7. The source lists TOEFL 80 and new-scale 4.0 but dates the scale change 21 January 2027; the date is unresolved and no 2026/2027 score conversion is inferred.",
        "waiver": "English-medium curriculum or qualifying SAT/ACT scores may support an English waiver reviewed by Admission; exact waiver scores are not published here."
      },
      "academic": {
        "satPolicy": "optional",
        "note": "International applicants may apply test-optional. No SAT/ACT cutoff is published; English proof is separate. The admitted-class profile is statistics, not an admission minimum."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.bryant.edu/undergraduate/undergraduate-admission/applying-bryant/international-students",
          "label": "Bryant international language and test-optional requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "stockton-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 79
            },
            {
              "period": "post2026",
              "min": 4
            }
          ]
        },
        "alternatives": "PTE Academic 58; Duolingo 105; Cambridge 176; ELS level 112. Subscores are reviewed and may lead to ESL or refusal, but numerical section minima are not provided. No English-test superscoring.",
        "waiver": "Three American high-school years; qualifying US-accredited English-only diploma/course history; named IB/GCE English qualifications; or secondary education in listed countries, individually reviewed. Citizenship alone is not the stated rule."
      },
      "academic": {
        "satPolicy": "conflict",
        "note": "The Admissions first-year checklist says SAT/ACT optional except specialty programmes. The Global Engagement page also requests them from English-speaking-country applicants. Both official scopes remain visible; no universal optional or required claim is made."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://stockton.edu/admissions/international-admission-application.html",
          "label": "Stockton Admissions international first-year requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        },
        {
          "url": "https://stockton.edu/global-engagement/international/freshman-students.html",
          "label": "Stockton Global Engagement first-year checklist",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "manhattan-university": [
    {
      "id": "international-first-year",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "min": 6.5,
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 80
            }
          ]
        },
        "alternatives": "Duolingo 110; SAT Reading/Writing 550; PTE 60; CEFR C1. A language-test SAT alternative does not establish an academic SAT requirement.",
        "waiver": "Four years of US high school, one US university year, GCSE English A/B or IB Higher Level English 5 may qualify; English-medium college study is assessed individually."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "The reviewed English-proof alternatives do not establish the academic SAT/ACT policy for every programme and qualification."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://manhattan.edu/admissions/international/requirements",
          "label": "Manhattan international undergraduate requirements",
          "verified": "2026-11-18",
          "access": "html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-sussex": [
    {
      "id": "standard",
      "label": "Course English level: Standard",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic / Online; One Skill Retake accepted",
          "min": 6,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "The course page assigns Standard, High or Advanced. These levels are not merged into one university minimum. Medicine BMBS instead requires 7.5 overall/7.0 each. Tests normally valid for two years.",
        "alternatives": "TOEFL iBT including Home Edition, Cambridge, Duolingo, PTE Academic in person and specified SELT alternatives are accepted at the course’s level. Approved qualifications, published exemptions or pre-sessional completion can also satisfy English."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry is assessed against the applicant’s school qualification and course. This English policy does not establish a university-wide SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.sussex.ac.uk/study/undergraduate/apply/international-qualifications/english-language-requirements",
          "label": "Sussex undergraduate course language levels",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    },
    {
      "id": "high",
      "label": "Course English level: High",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic / Online; One Skill Retake accepted",
          "min": 6.5,
          "sections": {
            "reading": 6,
            "writing": 6,
            "listening": 6,
            "speaking": 6
          },
          "role": "admission"
        },
        "note": "The course page assigns Standard, High or Advanced. These levels are not merged into one university minimum. Medicine BMBS instead requires 7.5 overall/7.0 each. Tests normally valid for two years.",
        "alternatives": "TOEFL iBT including Home Edition, Cambridge, Duolingo, PTE Academic in person and specified SELT alternatives are accepted at the course’s level. Approved qualifications, published exemptions or pre-sessional completion can also satisfy English."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry is assessed against the applicant’s school qualification and course. This English policy does not establish a university-wide SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.sussex.ac.uk/study/undergraduate/apply/international-qualifications/english-language-requirements",
          "label": "Sussex undergraduate course language levels",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    },
    {
      "id": "advanced",
      "label": "Course English level: Advanced",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic / Online; One Skill Retake accepted",
          "min": 7,
          "sections": {
            "reading": 6.5,
            "writing": 6.5,
            "listening": 6.5,
            "speaking": 6.5
          },
          "role": "admission"
        },
        "note": "The course page assigns Standard, High or Advanced. These levels are not merged into one university minimum. Medicine BMBS instead requires 7.5 overall/7.0 each. Tests normally valid for two years.",
        "alternatives": "TOEFL iBT including Home Edition, Cambridge, Duolingo, PTE Academic in person and specified SELT alternatives are accepted at the course’s level. Approved qualifications, published exemptions or pre-sessional completion can also satisfy English."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry is assessed against the applicant’s school qualification and course. This English policy does not establish a university-wide SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.sussex.ac.uk/study/undergraduate/apply/international-qualifications/english-language-requirements",
          "label": "Sussex undergraduate course language levels",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-greenwich": [
    {
      "id": "general-ba-bsc-beng",
      "label": "General BA/BSc/BEng — listed exceptions excluded",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic / Online; One Skill Retake accepted",
          "min": 6,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "toefl": {
          "accepted": true,
          "scales": [
            {
              "period": "legacy",
              "min": 72,
              "sections": {
                "reading": 18,
                "listening": 17,
                "speaking": 20,
                "writing": 17
              }
            },
            {
              "period": "post2026",
              "min": 4.5,
              "sections": {
                "reading": 4,
                "writing": 4,
                "listening": 4,
                "speaking": 4
              }
            }
          ]
        },
        "alternatives": "For the 6.0 category: Duolingo 105 with each skill 95; PTE Academic in person 59 with each skill 51; Cambridge 169/162; ELLT 6/5; approved foundation English qualifications. TOEFL is in person only.",
        "waiver": "Specified GCSE/IGCSE, IB, country qualifications or eligible English-country/degree categories may satisfy English; the exact qualification and validity period must match the published table.",
        "note": "General BA/BSc/BEng rule excludes listed Architecture, Criminology, English, nutrition, nursing, midwifery, social work and speech-therapy exceptions. A 5.5-equivalence table is not a direct-entry rule for all degrees."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry is assessed against the applicant’s school qualification and course. This English policy does not establish a university-wide SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.gre.ac.uk/international/support-and-help/courses",
          "label": "Greenwich undergraduate language table and exceptions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "university-of-westminster": [
    {
      "id": "standard-bachelor",
      "label": "International first-year undergraduate admission",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [],
      "applicability": {
        "label": "Published policy; intake year not stated",
        "entryYears": [],
        "status": "year-not-stated"
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS Academic / Online / UKVI; One Skill Retake accepted",
          "min": 6,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "alternatives": "Standard bachelor category: TOEFL in person 78 or new-scale 4 overall; legacy L/W17, R18, S20. MyBest accepted, Home Edition/ITP/Essentials/TOEIC not accepted. The source dates the scale change May 2025, so the test-date boundary is unresolved. PTE in person each 59; Duolingo 115 with each subscore 100.",
        "waiver": "Specific GCSE/IGCSE, IB or approved country qualifications; eligible English-medium degree/TNE study and certain completed academic years, assessed individually. Work experience alone is insufficient; a generic MOI letter outside listed conditions is not accepted.",
        "note": "Published standard bachelor rule; some course pages require higher overall or section scores. Pre-sessional admission uses separate SELT rules."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry is assessed against the applicant’s school qualification and course. This English policy does not establish a university-wide SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.westminster.ac.uk/study/english-language-requirements",
          "label": "Westminster bachelor English tests, waivers and exceptions",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ],
  "coventry-university": [
    {
      "id": "computer-science-bsc-2027",
      "label": "Computer Science BSc (Hons) — Coventry, September 2027",
      "language": "en",
      "kind": "direct",
      "level": "bachelor",
      "applicant": "international-first-year",
      "programmeIds": [
        "computer-science"
      ],
      "applicability": {
        "label": "September 2027",
        "entryYears": [
          2027
        ],
        "status": "confirmed",
        "intakes": [
          "fall-2027"
        ]
      },
      "english": {
        "requirement": "required-unless-exempt",
        "ielts": {
          "accepted": true,
          "variant": "IELTS; exact Academic test variant requires confirmation",
          "min": 6,
          "sections": {
            "reading": 5.5,
            "writing": 5.5,
            "listening": 5.5,
            "speaking": 5.5
          },
          "role": "admission"
        },
        "note": "BSc Computer Science at Coventry campus, September 2027. A foundation option and pre-sessional preparation exist but do not share this direct-entry rule. CEFR B2 for a visa is not a substitute for the course’s IELTS condition."
      },
      "academic": {
        "satPolicy": "unknown",
        "note": "Academic entry is assessed against the applicant’s school qualification and course. This English policy does not establish a university-wide SAT/ACT requirement or exemption."
      },
      "localLanguage": [],
      "documents": [],
      "sources": [
        {
          "url": "https://www.coventry.ac.uk/course-structure/ug/eec/computer-science-mscibsc-hons/?term=2027-28",
          "label": "Coventry Computer Science 2027/28 entry requirements",
          "verified": "2026-11-18",
          "access": "web-html-read"
        },
        {
          "url": "https://www.coventry.ac.uk/international-students-hub/apply/english-requirements/",
          "label": "Coventry degree versus preparatory visa English rules",
          "verified": "2026-11-18",
          "access": "web-html-read"
        }
      ],
      "note": null
    }
  ]
};
