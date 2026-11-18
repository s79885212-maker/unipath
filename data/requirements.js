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
      "note": null
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
            32,
            33,
            34,
            35
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
  ]
};
