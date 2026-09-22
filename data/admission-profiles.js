/* ============================================================
   Admission profiles — the "who actually gets in" layer.
   Updated yearly, separately from the base university records.

   For each university id, this file can:
     - override english / academics / admissions / costs fields
       (each listed sub-field replaces the one in the base record)
     - attach `stats`: admitted-student statistics

   stats.official  → numbers published by the university itself
                     (Common Data Set, admissions statistics page, …)
   stats.targets   → UniPath ESTIMATES, used only where the university
                     publishes no average. Always shown with an
                     "estimate" label and the reasoning in `basis`.
   ============================================================ */
(function (P) {
  'use strict';

  var CDS = 'Common Data Set 2025–26 (sections C1, C9, C11, C12)';

  /* ======================= UNITED STATES ======================= */

  P['harvard-university'] = {
    english: {
      estimateBasis: 'Harvard publishes no English score for first-year applicants. The estimates follow what MIT and Yale publish as competitive.',
      ielts: { min: null, recommended: null, estimate: '7.5+', note: 'Not required for first-year applicants.' },
      toefl: { min: null, recommended: null, estimate: '100+ (5.5+ on the 2026 scale)', note: 'Not required for first-year applicants.' },
      duolingo: { min: null, recommended: null, estimate: '125+', note: 'Not required for first-year applicants.' },
      waiver: 'First-year and transfer applicants are not required to take an English proficiency exam, but may submit scores if they wish. TOEFL, IELTS and Duolingo cannot be used to meet the SAT/ACT requirement.',
      note: 'Harvard sets no English score requirement for first-year applicants. The estimates above reflect what peer universities that do publish figures (MIT, Yale) describe as competitive.'
    },
    stats: {
      term: 'Fall 2025 entering class',
      source: { label: 'Harvard University ' + CDS, url: 'https://oira.harvard.edu/files/2026/07/CDS_2025-2026.pdf' },
      official: {
        admitRate: { value: 4.2, applied: 47893, admitted: 2003 },
        gpa: { average: 4.22, note: '74.7% of students who reported a GPA had a 4.0; only 25% of the class reported a GPA.' },
        sat: { rw: [720, 750, 770], math: [730, 770, 790], submitted: '79%' },
        act: [33, 35, 35],
        classRank: '95% were in the top tenth of their high school class (among those with a rank).'
      },
      targets: {
        ielts: '7.5+ (optional to submit)',
        sat: 'Around 1500+ (each section in the mid-700s)',
        gpa: 'Top of class — near-perfect grades',
        basis: 'SAT and GPA targets follow Harvard\'s published middle-50% ranges above. The IELTS target is an estimate, since Harvard publishes none.'
      }
    }
  };

  P['mit'] = {
    english: {
      ielts: { min: 7, recommended: 7.5, note: 'IELTS Academic.' },
      toefl: { min: 90, recommended: 100, scales: [{ period: 'pre2026', min: 90, recommended: 100 }, { period: 'post2026', min: 5, recommended: 5.5 }], note: 'MIT publishes both scales: minimum 90 and recommended 100 for tests taken before 21 January 2026; minimum 5 and recommended 5.5 for tests taken on or after 21 January 2026.' },
      duolingo: { min: 120, recommended: 125, note: 'Duolingo English Test (DET).' },
      waiver: 'MIT strongly recommends an English exam for non-native speakers who have used English for fewer than five years or do not speak English at home or in school. Scores are self-reported on the application and verified on enrolment.',
      note: 'MIT also accepts PTE Academic (minimum 65, recommended 70) and Cambridge C1 Advanced / C2 Proficiency (minimum 185, recommended 190).'
    },
    stats: {
      term: 'Fall 2025 entering class',
      source: { label: 'MIT ' + CDS, url: 'https://ir.mit.edu/projects/2025-26-common-data-set/' },
      official: {
        admitRate: { value: 4.6, applied: 29281, admitted: 1334 },
        gpa: { average: null, note: 'MIT does not report high school GPA in its Common Data Set.' },
        sat: { composite: [1520, 1550, 1570], rw: [740, 760, 780], math: [780, 790, 800], submitted: '83%' },
        act: [34, 35, 35]
      },
      targets: {
        ielts: '7.5 (MIT\'s own recommended score)',
        sat: '1520+ with Math 780+',
        gpa: 'Near-perfect grades, especially in maths and science',
        basis: 'The IELTS target is MIT\'s published recommendation. MIT publishes no GPA, so the GPA target is an estimate.'
      }
    }
  };

  P['yale-university'] = {
    english: {
      estimateBasis: 'Yale publishes no Duolingo figure. The estimate follows MIT\'s published Duolingo recommendation of 125.',
      ielts: { min: null, recommended: 7, note: 'Yale\'s most competitive applicants score 7 or higher.' },
      toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Most competitive applicants: at least 100 (tests before 21 January 2026) or 5+ (tests on or after 21 January 2026).' },
      duolingo: { min: null, recommended: null, estimate: '125+', note: 'Accepted. Yale publishes no competitive DET score.' },
      waiver: 'Required from non-native English speakers who have not completed at least two years of secondary education where English is the medium of instruction.',
      note: 'Yale accepts TOEFL, IELTS, Cambridge English, the Duolingo English Test or InitialView.'
    },
    stats: {
      term: 'Fall 2025 entering class',
      source: { label: 'Yale University ' + CDS, url: 'https://oir.yale.edu/sites/default/files/yale_cds_2025-26_md_20260616.pdf' },
      official: {
        admitRate: { value: 4.7, applied: 50264, admitted: 2387 },
        gpa: { average: null, note: 'Yale does not report high school GPA in its Common Data Set.' },
        sat: { composite: [1480, 1540, 1560], rw: [730, 760, 780], math: [740, 780, 790], submitted: '67%' },
        act: [33, 34, 35],
        classRank: '97% were in the top tenth of their high school class (among those with a rank).'
      },
      targets: {
        ielts: '7.0+',
        sat: '1540+ (the class median)',
        gpa: 'Top 10% of class',
        basis: 'Drawn from Yale\'s published competitive English scores and its Common Data Set.'
      }
    }
  };

  P['new-york-university'] = {
    english: {
      estimateBasis: 'NYU publishes a competitive TOEFL score of 100 but no IELTS or Duolingo figure. The estimates are set at a comparable level, using MIT\'s published Duolingo recommendation of 125.',
      ielts: { min: null, recommended: null, estimate: '7.0–7.5+', note: 'IELTS Academic accepted; NYU publishes no minimum.' },
      toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'NYU sets no minimum. Competitive applicants score 100+ (tests up to 20 January 2026) or 5+ overall and in each subscore (tests from 21 January 2026).' },
      duolingo: { min: null, recommended: null, estimate: '125+', note: 'Accepted; NYU publishes no minimum.' }
    },
    admissions: {
      applicationFee: { amount: 100, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Can be waived for applicants with financial need (NYU Common Data Set, Fall 2026 cycle).' }
    },
    stats: {
      term: 'Fall 2025 entering class',
      source: { label: 'NYU ' + CDS, url: 'https://www.nyu.edu/content/dam/nyu/institutionalResearch/documents/cds-2025-2026/CDS%202025-2026%20FINAL%20(no%20G).pdf' },
      official: {
        admitRate: { value: 9.1, applied: 114125, admitted: 10340 },
        gpa: { average: 3.81, note: '17.2% had a 4.0 and 54.7% had between 3.75 and 3.99. 100% of the class reported a GPA.' },
        sat: { composite: [1480, 1520, 1550], rw: [730, 750, 770], math: [750, 780, 790], submitted: '27%' },
        act: [34, 35, 35]
      },
      targets: {
        ielts: '7.0–7.5+',
        sat: 'Optional. If you submit one, around 1500+',
        gpa: '3.8+',
        basis: 'NYU publishes no IELTS figure, so that target is an estimate matched to its competitive TOEFL score of 100.'
      }
    }
  };

  P['university-of-michigan'] = {
    english: {
      duolingo: { min: null, recommended: null, note: 'Not listed among U-M\'s accepted English tests — check before relying on it.' }
    },
    admissions: {
      applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Can be waived for applicants with financial need (U-M Common Data Set, Fall 2027 cycle).' }
    },
    stats: {
      term: 'Fall 2025 entering class',
      source: { label: 'University of Michigan–Ann Arbor ' + CDS, url: 'https://obp.umich.edu/wp-content/uploads/pubdata/cds/cds_2025-26_umaa.pdf' },
      official: {
        admitRate: { value: 16.4, applied: 109112, admitted: 17915 },
        gpa: { average: 3.9, note: '38.8% had a 4.0 and 55.1% had between 3.75 and 3.99. 97.8% of the class reported a GPA.' },
        sat: { composite: [1370, 1470, 1530], rw: [690, 730, 750], math: [680, 740, 780], submitted: '55%' },
        act: [32, 33, 34]
      },
      targets: {
        ielts: '7.0 overall with 6.5+ in each section (U-M\'s published range)',
        sat: 'Optional. If you submit one, around 1470+',
        gpa: '3.9 (the class average)',
        basis: 'All three targets come from U-M\'s published requirements and its Common Data Set.'
      }
    }
  };

  P['arizona-state-university'] = {
    stats: {
      term: 'Fall 2025 entering class (ASU Campus Immersion)',
      source: { label: 'ASU Campus Immersion ' + CDS, url: 'https://uoia.asu.edu/sites/g/files/litvpz1436/files/2026-06/CDS%202025-26%20-%20ASU%20Campus%20Immersion.pdf' },
      official: {
        admitRate: { value: 88.4, applied: 69617, admitted: 61533 },
        intlAdmitRate: { value: 89.9, applied: 8906, admitted: 8009 },
        gpa: { average: 3.52, note: '9.0% had a 4.0, 27.5% had 3.75–3.99, 22.3% had 3.50–3.74 and 17.6% had 3.25–3.49.' },
        sat: null,
        act: null
      },
      targets: {
        ielts: '6.0 (ASU\'s published minimum)',
        sat: 'Not required for most programmes',
        gpa: '3.0 meets the requirement; 3.5 is typical',
        basis: 'Drawn from ASU\'s published minimums and its Common Data Set. ASU does not publish SAT percentiles for this campus group.'
      }
    }
  };

  P['university-of-alabama'] = {
    english: {
      estimateBasis: 'Based on UA\'s published IELTS 6.0 writing threshold for avoiding English support courses.',
      ielts: { min: null, recommended: 6.0, estimate: '6.0+ overall', note: 'A writing sub-score of 6.0 or higher avoids mandatory English support courses.' }
    },
    admissions: {
      applicationFee: { amount: 50, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'UA states the fee for out-of-state and international students is $50 for 2027 entry terms, non-refundable and payable by card.' }
    },
    stats: {
      term: 'Fall 2025 entering class',
      source: { label: 'The University of Alabama ' + CDS, url: 'https://oira.ua.edu/d/sites/all/files/reports26/CDS%202025-26%20FINAL%209Dec2025.pdf' },
      official: {
        admitRate: { value: 71.2, applied: 61994, admitted: 44124 },
        gpa: { average: 3.85, note: '40% had a 4.0, 19% had 3.75–3.99, 17% had 3.50–3.74 and 12% had 3.25–3.49. 98.9% of the class reported a GPA.' },
        sat: { composite: [1100, 1210, 1360], mean: 1222, rw: [560, 620, 680], math: [530, 600, 680], submitted: '19%' },
        act: [22, 26, 31],
        classRank: '23% were in the top tenth of their high school class.'
      },
      targets: {
        ielts: '6.0+, with a writing sub-score of 6.0+',
        sat: '1360+ (ACT 30+) — scores in this band also earn large automatic scholarships',
        gpa: '3.5+ (required for every automatic scholarship tier)',
        basis: 'Admission itself is broad (3.0 GPA considered). These targets are aimed at UA\'s published scholarship tiers, which is where the money is.'
      }
    }
  };

  P['berea-college'] = {
    english: {
      ielts: { min: 6, recommended: null, note: 'Overall 6, with at least 5 in each area.' },
      toefl: { min: 68, recommended: null, note: 'Internet-based 68 (paper-based 520; computer-based 190).' },
      duolingo: { min: 95, recommended: null, note: 'Duolingo English Test.' },
      waiver: 'A combined SAT score of 980 or an ACT composite of 19 is also accepted as the required test.',
      note: 'Berea will almost never consider scores from a test taken more than two years ago.'
    },
    academics: {
      sat: { policy: 'optional', note: 'Not required, but a combined SAT of 980+ is accepted in place of an English test.' },
      act: { policy: 'accepted', note: 'Not required, but an ACT composite of 19+ is accepted in place of an English test.' },
      internationalQualifications: 'Applicants should meet university entrance requirements in their own country and present outstanding secondary or leaving-exam results.'
    },
    admissions: {
      deadlines: [{ name: 'International applicants', date: '30 November', note: null }]
    },
    sources: [{ label: 'International applicant information (English minimums, deadline)', url: 'https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs' }],
    stats: {
      term: 'Current admissions information',
      source: { label: 'Berea College international applicant information', url: 'https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs' },
      official: {
        admitRate: null,
        note: 'Berea admits about 40 or fewer new international students each year. It does not publish SAT or GPA averages.'
      },
      targets: {
        ielts: '6.5+ (the minimum is 6.0)',
        sat: 'Optional — 980+ counts as the required test',
        gpa: 'Outstanding results in your national system (roughly top 10%)',
        basis: 'Estimate. Berea publishes minimums but no averages. With about 40 international places a year, being well above the minimum matters.'
      }
    }
  };

  /* ========================== JAPAN ========================== */

  P['university-of-tokyo'] = {
    englishTaught: true,
    english: {
      estimateBasis: 'The College of Design names the accepted tests but publishes no competitive score here. The estimate sits above its stated expected level of IELTS 6.0+ to reflect a competitive application.',
      ielts: { min: null, recommended: null, estimate: '7.0+', note: 'The College of Design requires a designated English test; the accepted tests and scores are listed in the Application Guidelines appendix.' },
      toefl: { min: null, recommended: null, estimate: '100+ (5.5+ on the 2026 scale)', note: 'See the College of Design Application Guidelines.' },
      duolingo: { min: null, recommended: null, note: 'Check the Application Guidelines appendix for the designated tests.' },
      waiver: null,
      note: 'PEAK has closed. UTokyo\'s new English-taught route is the College of Design: a five-year combined bachelor\'s/master\'s programme starting September 2027, taught entirely in English, with no nationality restriction.'
    },
    admissions: {
      deadlines: [
        { name: 'College of Design — pre-application check', date: '25 September 2026, 17:00 JST', note: 'Required before applying' },
        { name: 'College of Design — application period', date: '15 October – 5 November 2026', note: 'For September 2027 entry' }
      ],
      notes: [
        'College of Design: 100 places in total — 50 on Route A (Japanese Common Test, with about 80% expected) and 50 on Route B (designated international tests and qualifications such as IB or A-Levels).',
        'Route B documents must all be in English. Applicants submit a school transcript and evaluation, two essays, a video assignment and supporting materials.'
      ]
    },
    sources: [
      { label: 'UTokyo College of Design — Application Guidelines (2027)', url: 'https://design.adm.u-tokyo.ac.jp/admissions/application-guidelines-2027/' },
      { label: 'UTokyo College of Design — FAQ', url: 'https://design.adm.u-tokyo.ac.jp/faq/' }
    ],
    stats: {
      term: 'College of Design, September 2027 entry',
      source: { label: 'UTokyo College of Design admissions', url: 'https://design.adm.u-tokyo.ac.jp/admissions/' },
      official: { admitRate: null, note: 'A new faculty, so no admission statistics exist yet. 50 places are reserved for Route B (international qualifications).' },
      targets: {
        ielts: '7.0+',
        sat: '1450+ or IB 38+ (Route B)',
        gpa: 'Top 5–10% of class',
        basis: 'Estimate. UTokyo is Japan\'s most selective university and the College of Design has only 50 international-route places. On the domestic route, UTokyo expects about 80% on the Common Test.'
      }
    }
  };

  P['kyoto-university'] = {
    english: {
      ielts: { min: null, recommended: 6.5, note: 'No minimum. 6.5 is the typical score of successful Kyoto iUP candidates.' },
      toefl: { min: null, recommended: 90, scales: [{ period: 'pre2026', min: null, recommended: 90 }, { period: 'post2026', min: null, recommended: 4.5 }], note: 'Typical successful score: 90 (tests before 21 January 2026), or 4.5 on the new 1–6 scale. iBT, iBT Home Edition and PBT are accepted; MyBest and ITP are not.' },
      duolingo: { min: null, recommended: null, note: 'Not accepted — Kyoto iUP accepts only TOEFL or IELTS.' },
      waiver: 'Native English speakers may submit Form C (English Proficiency Evaluation Form) instead of a test result.'
    },
    stats: {
      term: 'Kyoto iUP (October 2026–2027 guidelines)',
      source: { label: 'Kyoto iUP FAQ — English language proficiency', url: 'https://www.iup.kyoto-u.ac.jp/faq/english-language-proficiency/' },
      official: { admitRate: null, note: 'Kyoto publishes the typical English scores of successful candidates (below), but no SAT or GPA averages.' },
      targets: {
        ielts: '6.5+ (typical of successful candidates)',
        sat: '1400+ or equivalent national-exam results',
        gpa: '3.7+ (top 10–15% of class)',
        basis: 'The IELTS/TOEFL figures are Kyoto\'s own typical scores. The SAT and GPA targets are estimates for a top-tier national university with a small iUP intake.'
      }
    }
  };

  P['waseda-university'] = {
    english: {
      ielts: { min: null, recommended: 7, note: 'SILS: competitive applicants score 7 or above. Scores are needed only from non-native speakers.' },
      toefl: { min: null, recommended: 95, scales: [{ period: 'pre2026', min: null, recommended: 95 }, { period: 'post2026', min: null, recommended: 5 }], note: 'SILS: competitive applicants score 95+ (out of 120), or 5.0+ on the new 6-point scale.' },
      duolingo: { min: null, recommended: null, note: 'Check the requirements of your specific school.' },
      waiver: 'Not required from non-native speakers studying where English is the language of instruction. English proof is optional if you submit an English-system exam certificate such as the SAT, ACT, A-Levels or an IBDP taught entirely in English.'
    },
    stats: {
      term: 'School of International Liberal Studies (SILS), September entry',
      source: { label: 'Waseda SILS — admissions data', url: 'https://www.waseda.jp/fire/sils/en/applicants/data/' },
      official: {
        admitRate: { value: 23.8, applied: 1322, admitted: 315, year: 2026 },
        history: '2025: 1,017 applied, 364 admitted (35.8%) · 2024: 788 applied, 348 admitted (44.2%)',
        sat: { mean: 1452 },
        actMean: 33.2,
        other: ['IB Diploma average of successful applicants: 37.5 / 42'],
        gpa: { average: null, note: 'Waseda does not publish a GPA average.' }
      },
      targets: {
        ielts: '7.0+',
        sat: '1450+ (the SILS average)',
        gpa: '3.7+',
        basis: 'The SAT and IELTS targets follow Waseda\'s published data. The GPA target is an estimate. Other English-based schools at Waseda publish their own figures, and competition is rising quickly — the acceptance rate fell from 44% to 24% in two years.'
      }
    }
  };

  P['keio-university'] = {
    english: {
      estimateBasis: 'Keio reviews scores holistically with no cut-off. The estimate follows levels a comparable Tokyo university publishes as competitive (Waseda SILS: TOEFL 95+).',
      ielts: { min: null, recommended: null, estimate: '7.0+', note: 'IELTS Academic accepted. There are no cut-off scores; scores are reviewed holistically. One Skill Retake is not accepted.' },
      toefl: { min: null, recommended: null, estimate: '95+ (5.0+ on the 2026 scale)', note: 'TOEFL iBT accepted. No cut-off; superscores (MyBest) are not accepted.' },
      duolingo: { min: null, recommended: null, note: 'Not accepted for PEARL — only TOEFL iBT and/or IELTS Academic.' },
      waiver: 'None. All PEARL applicants, including native English speakers, must submit TOEFL iBT and/or IELTS scores.'
    },
    sources: [{ label: 'PEARL FAQ (English tests, no cut-off scores)', url: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/faq.html' }],
    stats: {
      term: 'PEARL / GIGA',
      source: { label: 'Keio PEARL FAQ', url: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/faq.html' },
      official: { admitRate: null, note: 'Keio publishes no cut-offs or averages. The PEARL/GIGA quota is about 100 students across all three application periods.' },
      targets: {
        ielts: '7.0+',
        sat: '1400+ (or strong IB / A-Level results)',
        gpa: '3.7+',
        basis: 'Estimate. Keio publishes no averages; these targets are set at the level of Waseda SILS, its closest published comparison.'
      }
    }
  };

  P['sophia-university'] = {
    english: {
      estimateBasis: 'Sophia publishes no minimum. The estimate follows levels that comparable English-taught programmes in Japan publish (ICU: TOEFL 79, or 4.5 on the new scale).',
      ielts: { min: null, recommended: null, estimate: '6.5+', note: 'IELTS (Academic) required; IELTS Online and IELTS Indicator are not accepted. Must be taken within two years of applying.' },
      toefl: { min: null, recommended: null, estimate: '85+ (4.5+ on the 2026 scale)', note: 'TOEFL required; Home Edition, ITP and Essentials are not accepted.' },
      duolingo: { min: null, recommended: null, note: 'Not accepted — Sophia FLA requires TOEFL or IELTS.' },
      waiver: 'Waived if you studied at least five of the last six years at an English-medium institution, or if you hold Cambridge C2 Proficiency (official result required).'
    },
    academics: {
      sat: { policy: 'required-alternatives', note: 'SAT or ACT required unless you hold (or expect) the IB Diploma or three GCE A-Levels, or have at least two years of career experience. No minimum score. The SAT must be sent directly by the College Board and taken within two years.' },
      act: { policy: 'required', note: 'SAT or ACT required unless you hold the IB Diploma or three A-Levels.' },
      gpa: 'Sophia states there is no required minimum score or GPA to apply.'
    },
    sources: [{ label: 'FLA — who can apply / FAQ', url: 'https://adm.sophia.ac.jp/eng/admissions/ug_p/en_ug/faq/' }],
    stats: {
      term: 'Faculty of Liberal Arts',
      source: { label: 'Sophia University admissions FAQ', url: 'https://adm.sophia.ac.jp/eng/admissions/ug_p/en_ug/faq/' },
      official: { admitRate: null, note: 'Sophia states there is no required minimum score or GPA and publishes no averages.' },
      targets: {
        ielts: '6.5+',
        sat: '1300+',
        gpa: '3.5+',
        basis: 'Estimate for a selective private English-taught faculty in Tokyo that publishes no averages.'
      }
    }
  };

  P['international-christian-university'] = {
    english: {
      duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on ICU\'s ELBA page.' },
      waiver: 'No Japanese is required to apply, but ELBA students must complete the Japanese Language Program and take some Japanese-taught courses to graduate.'
    },
    academics: {
      sat: { policy: 'required', note: 'Type A applicants must submit SAT or ACT scores (no published minimum). Type B applicants are interviewed instead.' },
      act: { policy: 'required', note: 'Type A applicants: SAT or ACT required.' },
      otherTests: 'Only the full IB Diploma is accepted — IB Course Certificates and the IBCP are not.'
    },
    admissions: {
      applicationFee: { amount: 30000, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Non-refundable; an additional ¥880 system fee applies.' }
    },
    stats: {
      term: 'English Language Based Admissions (ELBA)',
      source: { label: 'ICU — ELBA application requirements', url: 'https://www.icu.ac.jp/en/admissions/undergraduate/engdoc/' },
      official: { admitRate: null, note: 'ICU publishes English minimums (IELTS 6.5 / TOEFL 79) but no SAT or GPA averages.' },
      targets: {
        ielts: '7.0+ (the minimum is 6.5)',
        sat: '1300+ (Type A route)',
        gpa: '3.5+',
        basis: 'The English minimum is official; the targets above it are estimates for a selective liberal arts college.'
      }
    }
  };

  P['ritsumeikan-apu'] = {
    english: {
      ielts: { min: 5.5, recommended: null, note: 'A minimum of 5.5 in each section. The General Training module is not accepted.' },
      toefl: { min: 75, recommended: null, scales: [{ period: 'pre2026', min: 75, recommended: null }, { period: 'post2026', min: 4, recommended: null }], note: 'A total of 75+ (tests before 21 January 2026) or 4.0+ (tests on or after 21 January 2026). Home Edition and ITP are not accepted.' },
      duolingo: { min: null, recommended: null, note: 'Accepted by APU — see the Application Handbook for the required score.' },
      waiver: 'Applicants who meet certain conditions may choose not to submit a language test — see the Application Handbook.'
    },
    sources: [{ label: 'APU application eligibility (English minimums)', url: 'https://admissions.apu.ac.jp/admissions/application_eligibility/' }],
    stats: {
      term: 'English-basis undergraduate admission',
      source: { label: 'APU — application eligibility', url: 'https://admissions.apu.ac.jp/admissions/application_eligibility/' },
      official: { admitRate: null, note: 'APU publishes minimum English scores but no SAT or GPA averages.' },
      targets: {
        ielts: '6.0+ (the minimum is 5.5 in every section)',
        sat: 'Not usually required',
        gpa: '3.0+; higher grades raise your chances of a larger tuition reduction',
        basis: 'Estimate. APU is one of the more accessible options in this database. Its tuition reduction scholarship (30–100%) depends on your documents, an online assessment and a recorded interview.'
      }
    }
  };

  P['tohoku-university'] = {
    english: {
      ielts: { min: 6.0, recommended: null, note: 'Gateway College (October intake) minimum.' },
      toefl: { min: 80, recommended: null, note: 'TOEFL iBT minimum.' },
      duolingo: { min: 110, recommended: null, note: 'Duolingo English Test minimum.' },
      waiver: null,
      note: 'Gateway College also accepts Cambridge English B2/C1/C2 (169+) and EIKEN Grade Pre-1 or 1 (2,400+).'
    },
    academics: {
      sat: { policy: 'accepted', note: 'Gateway College accepts the SAT, Digital SAT, ACT, AP or EJU — or the IB, International A-Level or GCE A-Level.' },
      act: { policy: 'accepted', note: 'Accepted as one of the standardized tests for the October intake.' }
    },
    admissions: {
      deadlines: [{ name: 'Gateway College — October intake (overseas applicants)', date: '15 December – 14 January', note: 'For fall 2027 enrolment; 90 places' }]
    },
    sources: [{ label: 'Gateway College admissions', url: 'https://admissions.tohoku.ac.jp/en/admissions/undergraduate/gateway_college/' }],
    stats: {
      term: 'Gateway College, fall 2027 entry',
      source: { label: 'Tohoku University — Gateway College admissions', url: 'https://admissions.tohoku.ac.jp/en/admissions/undergraduate/gateway_college/' },
      official: { admitRate: null, note: 'A new college, so no admission statistics exist yet. 90 places for the October (overseas) intake, out of an initial cohort of about 180.' },
      targets: {
        ielts: '6.5+ (the minimum is 6.0)',
        sat: '1350+ or equivalent IB / A-Level results',
        gpa: '3.6+',
        basis: 'The minimums are official. The targets are estimates for a leading national university\'s first English-taught intake.'
      }
    }
  };

  /* ======================= SOUTH KOREA ======================= */

  P['seoul-national-university'] = {
    stats: {
      term: 'International undergraduate admission',
      source: { label: 'SNU admissions FAQ', url: 'https://en.snu.ac.kr/admission/overview/faq/admission' },
      official: { admitRate: null, note: 'SNU publishes language minimums (TOPIK 3 or TOEFL 80 / IELTS 6.0) but no score or GPA averages.' },
      targets: {
        ielts: '6.5–7.0+ (the minimum is 6.0); TOPIK 4+ is a real advantage',
        sat: 'Not a standard requirement — strong national-exam results matter more',
        gpa: '3.8+ (top 5–10% of class)',
        basis: 'Estimate. SNU is Korea\'s most selective university, and it warns that weak Korean can hurt your application in some departments.'
      }
    }
  };

  P['kaist'] = {
    english: {
      ielts: { min: null, recommended: 6.5, note: 'KAIST\'s international admission guideline strongly recommends 6.5 or higher.' },
      toefl: { min: null, recommended: 83, note: 'TOEFL iBT 83 or higher strongly recommended. TEPS (new) 326+ and TOEIC L&R 720+ are also listed.' },
      duolingo: { min: null, recommended: null, note: 'Not listed in the admission guideline.' },
      waiver: 'Exemptions exist for certain applicants — see the current admission guideline.',
      note: 'These recommended scores come from KAIST\'s international undergraduate admission guideline (2023 edition), the latest one published online. The test must be taken within two years of the application deadline.'
    },
    sources: [{ label: 'KAIST international undergraduate admission (2023 admission guideline)', url: 'https://admission.kaist.ac.kr/intl-undergraduate' }],
    stats: {
      term: 'International undergraduate admission',
      source: { label: 'KAIST international undergraduate admission', url: 'https://admission.kaist.ac.kr/intl-undergraduate' },
      official: { admitRate: null, note: 'KAIST publishes recommended English scores but no admitted-student averages.' },
      targets: {
        ielts: '6.5+ (KAIST\'s recommendation)',
        sat: 'If you submit one: Math 750+. Olympiad and research experience count heavily',
        gpa: '3.8+, with top grades in maths and science',
        basis: 'The IELTS target is KAIST\'s recommendation. The SAT and GPA targets are estimates — every admitted international student receives a full scholarship, so competition is strong.'
      }
    }
  };

  P['yonsei-university'] = {
    english: {
      estimateBasis: 'UIC sets no minimum. The estimate follows what a comparable Seoul university publishes for English-taught majors (Korea University: TOEFL 100).',
      ielts: { min: null, recommended: null, estimate: '7.0+', note: 'Accepted; UIC sets no minimum score.' },
      toefl: { min: null, recommended: null, estimate: '100+ (5.5+ on the 2026 scale)', note: 'TOEFL PBT/CBT/iBT accepted; no minimum score.' },
      duolingo: { min: null, recommended: null, note: 'Not listed among UIC\'s accepted English proofs.' },
      waiver: 'A test is not needed if you hold a diploma from a high school in a country where English is the sole official language (US, Canada excluding Quebec, UK, Australia, New Zealand), or a Medium of Instruction certificate for an English-taught high school curriculum. IB English A and AP English also count.',
      note: 'UIC has no cut-off scores: admission goes to applicants who score highly in both stages (document review, then interview).'
    },
    admissions: {
      applicationFee: { amount: 150000, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'UIC does not offer or accept fee waivers.', note: 'KRW 150,000 via the UIC application, or US$150 via the Common Application.' }
    },
    sources: [{ label: 'Yonsei Fall 2026 Application Guide for International Students (PDF)', url: 'https://www2.yonsei.ac.kr/entrance/2026/intl/2026_9_docu/Fall%202026%20Application%20Guide%20for%20International%20Students(Eng).pdf' }],
    stats: {
      term: 'Underwood International College',
      source: { label: 'UIC first-year admissions', url: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_02' },
      official: { admitRate: null, note: 'UIC publishes no cut-offs or averages.' },
      targets: {
        ielts: '7.0+',
        sat: '1450+',
        gpa: '3.7+',
        basis: 'Estimate. UIC is Korea\'s most competitive fully English-taught college and accepts the Common Application, so its applicants overlap heavily with U.S. applicants.'
      }
    }
  };

  P['korea-university'] = {
    english: {
      ielts: { min: null, recommended: 7.0, note: 'To be assigned to an English-based major at the end of the Global Open Major year, you need IELTS 7.0+ (or TOPIK 5 for a Korean-based major). IELTS Indicator is not accepted.' },
      toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'TOEFL iBT 100+ (5 on the new scale) is needed for English-based major assignment. Home Edition is accepted; MyBest and Essentials are not.' },
      duolingo: { min: null, recommended: null, note: 'Not accepted — only TOEFL iBT or IELTS Academic count as English proof.' },
      waiver: 'Applicants who completed all of secondary school with English (or Korean) as the primary language of instruction can submit a school confirmation letter instead. The International Studies major requires an English qualification.'
    },
    admissions: {
      applicationFee: { amount: 150000, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Humanities or Science: ₩150,000. Art & Design: ₩200,000. Leftover fee amounts are refunded under Korean law.' }
    },
    sources: [{ label: 'Korea University Application Guide, Fall 2026 (PDF)', url: 'https://oia.korea.ac.kr/_res/oia/etc/Application_Guide_for_Fall_2026_Freshman(ENG).pdf' }],
    stats: {
      term: 'International undergraduate admission, Fall 2026',
      source: { label: 'Korea University Application Guide, Fall 2026', url: 'https://oia.korea.ac.kr/_res/oia/etc/Application_Guide_for_Fall_2026_Freshman(ENG).pdf' },
      official: { admitRate: null, note: 'No averages are published. The IELTS 7.0 / TOEFL 100 threshold for English-based majors is official.' },
      targets: {
        ielts: '7.0+ (to study your major in English)',
        sat: 'Not a standard requirement',
        gpa: '3.6+',
        basis: 'The English target is official. The GPA target is an estimate for a "SKY" university.'
      }
    }
  };

  P['sungkyunkwan-university'] = {
    stats: {
      term: 'International undergraduate admission',
      source: { label: 'SKKU undergraduate scholarships', url: 'https://admission-global.skku.edu/eng/grad/scholarship_undergrad.html' },
      official: { admitRate: null, note: 'SKKU publishes English scholarship thresholds (IELTS 7.0 → 50% of tuition, IELTS 8.0 → 100%, first semester) but no admission averages.' },
      targets: {
        ielts: '6.5+ to be competitive; 7.0+ unlocks a 50% first-semester tuition waiver',
        sat: 'Not a standard requirement',
        gpa: '3.4+ (3.5+ is needed to keep the Global Leader Scholarship)',
        basis: 'The scholarship thresholds are official. The admission targets are estimates.'
      }
    }
  };

  P['hanyang-university'] = {
    stats: {
      term: 'International undergraduate admission (English Track)',
      source: { label: 'Hanyang University scholarships', url: 'https://www.hanyang.ac.kr/web/eng/scholarships' },
      official: { admitRate: null, note: 'Hanyang publishes a language scholarship threshold (TOEFL iBT 90 / IELTS 6.5) but no admission averages.' },
      targets: {
        ielts: '6.0+ to apply competitively; 6.5+ earns a 30% first-semester discount',
        sat: 'Not a standard requirement',
        gpa: '3.3+ (3.0+ is needed for enrolled-student tuition reductions)',
        basis: 'The scholarship thresholds are official. The admission targets are estimates.'
      }
    }
  };

  P['ewha-womans-university'] = {
    english: {
      toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }, { period: 'post2026', min: 4, recommended: null }], note: 'TOEFL iBT 80, or 4.0+ for tests taken on or after 21 January 2026.' }
    },
    admissions: {
      applicationFee: { amount: 150000, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Special Admission for Foreigners: ₩150,000 (about US$150).' }
    },
    costs: {
      academicYear: 'Fall 2026',
      currency: 'KRW',
      headline: '≈ ₩4.6m–6.4m per semester',
      items: [
        { label: 'Liberal Arts, Social Sciences, Business, Scranton College (International Studies)', text: '≈ ₩4,640,000 – ₩5,560,000 per semester' },
        { label: 'Natural Sciences, Engineering, Nursing, Artificial Intelligence', text: '≈ ₩5,530,000 – ₩6,210,000 per semester' },
        { label: 'Music, Art & Design, Content Convergence / Fashion Industry', text: '≈ ₩6,270,000 – ₩6,430,000 per semester' },
        { label: 'HOKMA College', text: '≈ ₩6,310,000 per semester' }
      ],
      totalText: '≈ ₩9.3m – ₩12.9m per year in tuition, depending on college',
      note: 'Ewha lists approximate per-semester tuition based on Fall 2026 rates, subject to change. First-semester figures for some colleges include the admission fee. Medicine is charged differently.'
    },
    sources: [{ label: 'Ewha admissions guide for international applicants (PDF)', url: 'https://isa.ewha.ac.kr/sites/oisa/file/ag_english.pdf' }],
    stats: {
      term: 'Special Admission for Foreigners',
      source: { label: 'Ewha admissions guide for international applicants', url: 'https://isa.ewha.ac.kr/sites/oisa/file/ag_english.pdf' },
      official: { admitRate: null, note: 'Ewha publishes English minimums (TOEFL 80 / IELTS 6.0) but no admission averages.' },
      targets: {
        ielts: '6.5+ (the minimum is 6.0)',
        sat: 'Not a standard requirement',
        gpa: '3.4+',
        basis: 'The minimums are official. The targets above them are estimates.'
      }
    }
  };

  P['kyung-hee-university'] = {
    english: {
      estimateBasis: 'An estimated level for applying. Kyung Hee\'s published IELTS 7.5 / TOEFL 105 are scholarship thresholds, not admission requirements.',
      ielts: { min: null, recommended: 7.5, estimate: '6.0+ to apply', note: 'IELTS 7.5+ earns English Track applicants Admission Scholarship B (full tuition for the first semester). The admission minimum is in the current guidelines PDF.' },
      toefl: { min: null, recommended: 105, estimate: '80+ to apply', note: 'TOEFL iBT 105+ earns Admission Scholarship B (full first-semester tuition).' }
    },
    sources: [{ label: 'Kyung Hee Spring 2026 international undergraduate guidelines (PDF)', url: 'https://iadmission.khu.ac.kr/gglobalcenter/cmmn/file/fileDown.do?menuNo=8000045&atchFileId=6bff99bbac834f25949f5f535dbbaf42&fileSn=1' }],
    stats: {
      term: 'International undergraduate admission',
      source: { label: 'Kyung Hee international undergraduate guidelines', url: 'https://iadmission.khu.ac.kr/gglobalcenter/user/contents/view.do?menuNo=8000031' },
      official: { admitRate: null, note: 'Kyung Hee publishes scholarship thresholds but no admission averages.' },
      targets: {
        ielts: '6.0+ to apply; 7.5+ for a full first-semester tuition scholarship',
        sat: 'Not a standard requirement',
        gpa: '3.2+',
        basis: 'The scholarship thresholds are official. The admission targets are estimates for one of the more accessible Seoul universities.'
      }
    }
  };



  /* =================================================================
     Gap-filling pass (verified 2026-09-17) — Japan & South Korea.
     Figures below come from each university's current application
     guide or fees page, listed in `sources`. `patch` merges one level
     deep: english/academics/admissions sub-fields are replaced, costs
     are replaced whole, stats.targets fields are replaced, sources are
     appended.
     ================================================================= */
  function patch(id, upd) {
    var cur = P[id] = P[id] || {};
    ['english', 'academics', 'admissions'].forEach(function (k) {
      if (!upd[k]) return;
      cur[k] = cur[k] || {};
      for (var f in upd[k]) if (upd[k].hasOwnProperty(f)) cur[k][f] = upd[k][f];
    });
    if (upd.costs) cur.costs = upd.costs;
    if (upd.sources) cur.sources = (cur.sources || []).concat(upd.sources);
    if (upd.targets && cur.stats) {
      cur.stats.targets = cur.stats.targets || {};
      for (var t in upd.targets) if (upd.targets.hasOwnProperty(t)) cur.stats.targets[t] = upd.targets[t];
    }
    if (upd.statsNote && cur.stats) {
      cur.stats.official = cur.stats.official || {};
      cur.stats.official.note = upd.statsNote;
    }
  }

  /* ---------- Japan ---------- */

  patch('university-of-tokyo', {
    english: {
      ielts: { min: null, recommended: '6.0+ (expected level)', note: 'IELTS Academic (IELTS Online accepted). UTokyo lists "greater than 6.0" as the expected level at application — not a cut-off. Tests must be taken after 1 January 2025.' },
      toefl: { min: null, recommended: '80+ / 4+ (expected level)', scales: [{ period: 'pre2026', min: null, recommended: '80+' }, { period: 'post2026', min: null, recommended: '4+' }], note: 'TOEFL iBT including Home Edition: greater than 80 (tests before 21 January 2026) or greater than 4 (tests from 21 January 2026).' },
      duolingo: { min: null, recommended: '110+ (expected level)', note: 'Duolingo English Test: greater than 110. Cambridge (B2/C1/C2) greater than 169 and EIKEN Grade Pre-1/1 greater than 2,400 are also accepted.' },
      waiver: 'Route B applicants may skip the English test if they have had English-medium education for at least three of the final four school years (bilingual programmes do not count).'
    },
    academics: {
      sat: { policy: 'accepted', note: 'Route B option 1: SAT (ERW-M or digital RW-M) 1480 or above. Superscores are not accepted; AP scores are recommended if available.' },
      act: { policy: 'accepted', note: 'Route B option 1: ACT composite 33 or above. Superscores are not accepted. EJU is not accepted.' },
      otherTests: 'Route B option 2 (qualifications completed by 31 August 2027): IB 38/42 across six subjects plus at least 2 points for TOK/EE; International A-Level with at least three A grades (Cambridge, OxfordAQA, Pearson Edexcel or LRN); European Baccalaureate average of 87%+. Other country-specific qualifications may be accepted — contact the office.',
      internationalQualifications: 'UTokyo describes all of these as expectations, not cut-offs; decisions are holistic.'
    },
    costs: {
      academicYear: 'As of April 2025 (2027 fees are set in the application guidelines)',
      currency: 'JPY',
      headline: '¥642,960 tuition per year',
      items: [
        { label: 'Admission fee — one-time', amount: 282000 },
        { label: 'Tuition per year', amount: 642960 }
      ],
      totalText: '¥642,960 per year plus a one-time ¥282,000 admission fee',
      note: 'UTokyo charges the same fees to international and domestic students. The College of Design FAQ quotes these figures as of April 2025 and says the fees for September 2027 entrants will be stated in the application guidelines.'
    },
    targets: {
      ielts: '6.0+ is the expected level; 7.0+ to stand out (estimate)',
      sat: '1480+ (official expectation) · or ACT 33+ · or IB 38+',
      basis: 'The English and SAT/IB levels are UTokyo\'s published expectations for the College of Design. The "stand out" IELTS level and the GPA target are estimates.'
    },
    sources: [{ label: 'UTokyo College of Design — admission overview (PDF, March 2026)', url: 'https://design.adm.u-tokyo.ac.jp/wp-content/uploads/2026/03/20260326UTokyoDesign_Admission_E.pdf' }]
  });

  patch('kyoto-university', {
    admissions: {
      deadlines: [
        { name: 'Kyoto iUP — October 2027 enrolment', date: '2 November – 3 December 2026 (5 p.m. JST)', note: 'Online application; the application fee must also be paid by 3 December 2026' }
      ],
      applicationFee: { amount: 9800, currency: 'JPY', waiverAvailableToInternational: false, waiver: 'Kyoto University offers no application fee waivers.', note: 'A ¥429 processing fee is added; the fee is non-refundable.' }
    },
    academics: {
      sat: { policy: 'required-alternatives', note: 'Official scores from at least one listed standardized test are mandatory (SAT, IB, A-Level, EJU and others in Appendix 1 of the guidelines).' },
      act: { policy: 'accepted', note: 'One of the tests listed in Appendix 1 is required.' },
      otherTests: 'Faculty subject requirements: Science, Pharmaceutical Sciences, Engineering and Agriculture need mathematics plus at least two sciences (Engineering: physics and chemistry). Integrated Human Studies and Economics need mathematics. Letters, Education and Law have no specific subject requirement.'
    },
    sources: [{ label: 'Kyoto iUP Application Guidelines for October 2027 Enrollment (PDF)', url: 'https://www.iup.kyoto-u.ac.jp/Application_Guidelines_for_October_2027_Enrollment.pdf' }]
  });

  patch('waseda-university', {
    costs: {
      academicYear: 'Current (Waseda International Admissions Office)',
      currency: 'JPY',
      headline: '≈ ¥1.2m–1.8m tuition per year',
      items: [
        { label: 'Tuition per year (English-based undergraduate programmes)', text: '≈ ¥1,200,000 – ¥1,800,000, depending on school' },
        { label: 'Payment schedule', text: 'Twice a year; the admission fee and first-semester tuition are paid at enrolment' },
        { label: 'Accommodation and living costs (SILS estimate)', text: '≈ ¥1,000,000 – ¥2,000,000 per year' }
      ],
      totalText: '≈ ¥1.2m–1.8m tuition per year, plus living costs',
      note: 'Waseda publishes exact fees per school in a PDF on its International Admissions "Tuition and Visa" page. The range above is the university\'s own summary. All Waseda scholarships are partial.'
    },
    sources: [{ label: 'Waseda International Admissions — Tuition and Visa', url: 'https://www.waseda.jp/inst/admission/en/other/tuition/' }]
  });

  patch('keio-university', {
    admissions: {
      deadlines: [
        { name: 'PEARL period I (September 2026 entry)', date: '22 October – 3 December 2025, 3 p.m. JST', note: 'Results 26 January 2026' },
        { name: 'PEARL period II', date: '5 December 2025 – 28 January 2026, 3 p.m. JST', note: 'Results 26 February 2026' },
        { name: 'PEARL period III', date: '27 February – 10 April 2026, 3 p.m. JST', note: 'Results 25 May 2026. Dates for September 2027 entry follow the same pattern — check the new guidebook.' }
      ]
    },
    academics: {
      sat: { policy: 'required-alternatives', note: 'Applicants submit IB, SAT or ACT scores (or national exam results such as A-Levels or the Abitur). Keio states there are no cut-off IB, SAT or ACT scores; paper and digital SAT count equally.' },
      act: { policy: 'accepted', note: 'Accepted; no cut-off score.' }
    },
    sources: [{ label: 'Keio PEARL application guidebook (PDF)', url: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/application_guidebook.pdf' }]
  });

  patch('sophia-university', {
    admissions: {
      deadlines: [
        { name: 'Spring (April) 2027 — first period', date: '1 – 9 September 2026 (documents by 16 September)', note: 'First-year and third-year transfer entry; matriculation deadline 27 November 2026' },
        { name: 'Spring (April) 2027 — second period', date: '11 November – 4 December 2026 (documents by 11 December)', note: 'Limited to certain applicants; results 29 January 2027' },
        { name: 'Autumn (September) 2027 — first period', date: '11 November – 4 December 2026 (documents by 11 December)', note: 'First-year entry; results 5 February 2027' },
        { name: 'Autumn (September) 2027 — second period', date: '10 – 31 March 2027 (documents by 7 April)', note: 'Results 4 June 2027' }
      ],
      applicationFee: { amount: 35000, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'An online payment handling fee of ¥1,100 is added. Overseas applicants without a Japanese bank account must pay by credit card.' }
    },
    costs: {
      academicYear: '2026 (students entering in AY2026)',
      currency: 'JPY',
      headline: '¥1,668,650 first year',
      items: [
        { label: 'Entrance fee — once at matriculation', amount: 200000 },
        { label: 'Tuition per semester (Faculty of Liberal Arts)', amount: 586000 },
        { label: 'Education Enhancement Fee per semester', amount: 129000 },
        { label: 'Semester Enrollment Fee per semester', amount: 30000 },
        { label: 'Insurance — once at matriculation', amount: 2650 },
        { label: 'Alumni Association fee — start of fourth year', amount: 40000 }
      ],
      totalText: '¥1,668,650 in the first year (¥947,650 spring + ¥721,000 autumn); ¥1,442,000 a year afterwards',
      note: 'Figures are for the Faculty of Liberal Arts from Sophia\'s official AY2026 tuition table. Sophia states fees are revised annually.'
    },
    sources: [
      { label: 'Sophia FLA application procedure booklet (PDF)', url: 'https://adm.sophia.ac.jp/assets/uploads/sites/2/2026/06/03f35ed5ff1d1382e4ff273b1a97f0b2.pdf' },
      { label: 'Sophia University tuition and fees AY2026 (PDF)', url: 'https://piloti.sophia.ac.jp/assets/uploads/2025/12/undergraduate_2026.pdf' }
    ]
  });

  patch('ritsumeikan-apu', {
    admissions: {
      applicationFee: { amount: 5500, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: '¥5,500 by credit card (¥5,000 evaluation + ¥500 administration), or ¥7,000 by bank transfer if card payment is impossible. Non-refundable.' }
    },
    sources: [{ label: 'APU Undergraduate Application Handbook, April/September 2026 (PDF)', url: 'https://admissions.apu.ac.jp/resource/ln/14e5384bf2991cf60640ed8496f7ffd17d6f8901/ApplicationHandbook_UG_OutsideJapan_ENG_26_2.pdf' }]
  });

  patch('tohoku-university', {
    admissions: {
      applicationFee: { amount: 17000, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Tohoku\'s standard undergraduate application fee. Gateway College may set its own amount in the Application Guide 2027 — confirm there.' }
    },
    costs: {
      academicYear: 'Current (Tohoku University fees page)',
      currency: 'JPY',
      headline: '¥535,800 tuition per year',
      items: [
        { label: 'Admission fee — one-time', amount: 282000 },
        { label: 'Tuition per year', amount: 535800 },
        { label: 'University House Aobayama dormitory (per month)', amount: 36000, note: 'Rent, maintenance and rental items; utilities extra (FGL figure)' },
        { label: 'Other living expenses (per month)', text: '¥70,000 – ¥80,000' }
      ],
      totalText: '¥535,800 per year plus a one-time ¥282,000 admission fee',
      note: 'Standard national-university fees from Tohoku\'s undergraduate fees page. Tohoku says it is preparing tuition and admission-fee waivers and its own scholarships for Gateway College.'
    },
    sources: [{ label: 'Tohoku University — Fees & Expenses', url: 'https://www.tohoku.ac.jp/en/admissions/tutition_fees.html' }]
  });

  /* ---------- South Korea ---------- */

  patch('seoul-national-university', {
    admissions: {
      deadlines: [
        { name: 'Spring 2027 — online application', date: '6 – 9 July 2026 (17:00 KST)', note: 'Recommendation letters by 10 July 2026' },
        { name: 'Spring 2027 — interviewee list', date: '11 September 2026', note: null },
        { name: 'Spring 2027 — preliminary decisions', date: '16 October 2026 (after 17:00 KST)', note: null }
      ],
      applicationFee: { amount: 70000, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'Application fees are non-exemptible.', note: 'Non-refundable.' }
    },
    academics: {
      sat: { policy: 'accepted', note: 'Standardized test results (SAT, ACT, AP, A-Level, IGCSE, IB, NCEA, etc.) can be submitted as supporting documents. SNU institution code for SAT/AP/ACT: 7972.' },
      act: { policy: 'accepted', note: 'Accepted as a supporting document.' }
    },
    costs: {
      academicYear: '2026 academic year',
      currency: 'KRW',
      headline: '≈ ₩2.4m–3.0m per semester (most majors)',
      items: [
        { label: 'Humanities, most Social Sciences, Business, Agricultural Economics', amount: 2442000 },
        { label: 'Mathematical Sciences', amount: 2450000 },
        { label: 'Anthropology, Psychology, Geography', amount: 2679000 },
        { label: 'Natural Sciences, Nursing, Liberal Studies, most Agriculture & Life Sciences', amount: 2975000 },
        { label: 'Engineering', amount: 2998000 },
        { label: 'Fine Arts', amount: 3653000 },
        { label: 'Music', amount: 3916000 },
        { label: 'School of Transdisciplinary Innovations', amount: 3700000 },
        { label: 'Pharmacy', amount: 4481000 },
        { label: 'Medicine (4-year course)', amount: 5038000 }
      ],
      totalText: 'About ₩4.9m–6.0m a year for most majors (tuition is paid each semester)',
      note: 'From the tuition table in SNU\'s 2027 Spring admissions guide (2026 rates, subject to change). SNU collects tuition before each semester; its 2024 average was about ₩6.0m a year.'
    },
    sources: [{ label: 'SNU 2027 Spring Undergraduate Admissions Guide for International Students', url: 'https://en.snu.ac.kr/admission/overview/notice?md=v&bbsidx=170606' }]
  });

  patch('kaist', {
    admissions: {
      applicationFee: { amount: 80000, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'The fee is not waivable (2023 admission guideline — the latest published online).', note: 'KRW 80,000 or US$80, non-refundable.' }
    }
  });

  patch('yonsei-university', {
    admissions: {
      deadlines: [
        { name: 'UIC Round 1 (Spring 2027) — online application', date: '26 August – 22 September 2026 (17:00 KST)', note: 'Documents by 2 October 2026; interviews 11–12 December; results 18 December 2026' },
        { name: 'UIC Round 2 (Fall 2027)', date: 'Expected around March 2027', note: 'Yonsei has not yet published exact dates' }
      ],
      applicationFee: { amount: 150000, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'UIC does not offer or accept fee waivers.', note: 'KRW 150,000 via the UIC application, or US$150 via the Common Application.' }
    },
    english: {
      waiver: 'From the AY2027 intake, proof of English is REQUIRED (it was optional before). Accepted: TOEFL, IELTS, CEFR certification, IB or AP English (no minimum scores); a diploma from a country where English is the sole official language; or a Medium of Instruction certificate.'
    },
    academics: {
      sat: { policy: 'optional', note: 'SAT, ACT, IB, A-Level and similar results are supplementary, not required.' },
      act: { policy: 'optional', note: 'Supplementary, not required.' }
    }
  });

  patch('korea-university', {
    admissions: {
      deadlines: [
        { name: 'Fall 2026 intake — online application', date: '2 – 27 March 2026 (17:00 KST)', note: 'Documents by post by 31 March; results 12 June 2026. The Fall 2027 cycle is expected in a similar window — check the new guide.' }
      ]
    },
    costs: {
      academicYear: '2026 academic year',
      currency: 'KRW',
      headline: '≈ ₩5.8m–7.8m per semester',
      items: [
        { label: 'Humanities & Social Sciences', text: '≈ ₩5,800,000 per semester' },
        { label: 'Natural Sciences', text: '≈ ₩6,700,000 per semester' },
        { label: 'Engineering', text: '≈ ₩7,700,000 per semester' },
        { label: 'Art', text: '≈ ₩7,800,000 per semester' },
        { label: 'Interdisciplinary Studies, Global Open Major, University College', text: '≈ ₩7,700,000 per semester' },
        { label: 'Miscellaneous fees (optional)', text: '≈ ₩30,000' }
      ],
      totalText: '≈ ₩11.6m–15.6m per year in tuition',
      note: 'Approximate per-semester figures published by Korea University\'s Office of International Education for 2026, subject to change.'
    },
    sources: [{ label: 'Korea University — undergraduate tuition (2026)', url: 'https://oia.korea.ac.kr/oia2026/Tuition.do' }]
  });

  patch('sungkyunkwan-university', {
    admissions: {
      deadlines: [
        { name: 'Spring 2027 — Round 1', date: '12 – 21 August 2026 (online)', note: 'Documents by 4 September; results 23 October 2026' },
        { name: 'Spring 2027 — Round 2', date: '4 – 13 November 2026 (online)', note: 'Documents by 27 November; results 8 January 2027. Semester starts 1 March 2027.' }
      ],
      applicationFee: { amount: 150000, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'KRW 30,000 if a candidate with a preliminary offer reapplies to the same admission unit. Otherwise non-refundable except as Korean law requires.' }
    },
    english: {
      ielts: { min: 6.5, recommended: 8.0, note: 'English-track majors require IELTS 6.5 before you select your major (end of first year). For scholarships: IELTS 7.0 earns 50% and IELTS 8.0 earns 100% of first-semester tuition.' },
      toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'English-track majors require TOEFL iBT 80 (4.5 on the 2026 scale) before major selection. Scholarships: 95 → 50%; 110 (5.5) → 100% of first-semester tuition.' }
    },
    academics: {
      sat: { policy: 'accepted', note: 'IB, A-Level, AP, SAT and national exams can be submitted as academic references.' },
      act: { policy: 'accepted', note: 'Accepted as an academic reference.' }
    },
    costs: {
      academicYear: 'First semester 2026 (freshmen)',
      currency: 'KRW',
      headline: '≈ ₩5.4m–8.3m first semester',
      items: [
        { label: 'Humanities / Social Sciences / Business / Human Science & Society', amount: 5380000 },
        { label: 'Global Business Administration', amount: 8264000 },
        { label: 'Global Economics', amount: 7412000 },
        { label: 'Film, TV & Multimedia / Fashion Design / Theatre', amount: 6990000 },
        { label: 'Natural Sciences / Sport Science', amount: 6212000 },
        { label: 'Engineering / Electrical / Biomedical / Computer Science & Engineering', amount: 6990000 },
        { label: 'Exploratory Studies', amount: 7219000 }
      ],
      totalText: 'First-semester totals including the ₩198,000 entrance fee',
      note: 'From SKKU\'s 2026 Fall / 2027 Spring admission guide; the figures include the one-time entrance fee and may change for 2027 entrants.'
    },
    sources: [{ label: 'SKKU 2026 Fall / 2027 Spring Admission Guide for International Students (Undergraduate)', url: 'https://admission-global.skku.edu/eng/etc/bbs_list.html?bbsid=global_notice_re_eng&ctg_cd=&page=1&skey=&keyword=&mode=view&bltn_seq=53774' }],
    statsNote: 'SKKU publishes English thresholds (IELTS 6.5 for English-track majors; 7.0/8.0 for scholarships) but no admission averages.'
  });

  patch('hanyang-university', {
    admissions: {
      deadlines: [
        { name: 'Spring 2027 — online application', date: '1 – 18 September 2026 (17:00 KST)', note: 'Documents by post by 30 September; results 18 December 2026; semester starts 2 March 2027' }
      ],
      notes: [
        'Applicants who do not yet meet Hanyang\'s Korean-language standards can still be admitted on academic merit, but must meet those standards before starting the degree programme.',
        'International Studies (English Track) requires TOEFL iBT 89+ or IELTS 6.5+ and includes an English interview.'
      ]
    },
    english: {
      ielts: { min: 6.5, recommended: null, note: 'Mandatory for the International Studies English Track. IELTS 6.5+ also earns a 30% first-semester scholarship.' },
      toefl: { min: 89, recommended: 90, note: 'TOEFL iBT 89+ is mandatory for the International Studies English Track; 90+ earns a 30% first-semester scholarship.' }
    },
    costs: {
      academicYear: 'Fall 2026 semester',
      currency: 'KRW',
      headline: '≈ ₩5.3m–7.8m per semester',
      items: [
        { label: 'Humanities · Social Science (incl. Economics, Business, International Studies, Policy Science)', amount: 5279000 },
        { label: 'Natural Science · Sports', amount: 6150000 },
        { label: 'Engineering', amount: 6960000 },
        { label: 'Entertainment (Film & Theater, Dance)', amount: 6976000 },
        { label: 'Music', amount: 7820000 },
        { label: 'Compulsory insurance (one year)', amount: 130000 }
      ],
      totalText: '≈ ₩10.6m–15.6m per year in tuition',
      note: 'Per-semester tuition from Hanyang\'s 2027 Spring admission guidelines (Fall 2026 rates, subject to change).'
    },
    sources: [{ label: 'Hanyang 2027 Spring Admission Guidelines for International Students (PDF)', url: 'https://oia.hanyang.ac.kr/files/attach/filebox/2026/08/24/4bad55cf33436519f06a243547ec2a6e.pdf' }],
    statsNote: 'Hanyang publishes English Track minimums (TOEFL 89 / IELTS 6.5) and a scholarship threshold, but no admission averages.'
  });

  patch('ewha-womans-university', {
    admissions: {
      deadlines: [
        { name: 'Spring 2027 — online application', date: '2 September (13:00) – 8 October 2026 (17:00 KST)', note: 'Application form and fee must both be completed by the deadline' }
      ]
    },
    sources: [{ label: 'Ewha Spring 2027 Admissions for International Applicants (PDF)', url: 'https://isa.ewha.ac.kr/sites/oisa/file/ag_english.pdf' }]
  });

  patch('kyung-hee-university', {
    admissions: {
      deadlines: [
        { name: 'Spring 2027 — first intake', date: '17 – 28 August 2026', note: 'Documents postmarked by 27 August; results 23 October 2026; classes start 2 March 2027' },
        { name: 'Spring 2027 — second intake', date: '26 October – 6 November 2026', note: null }
      ]
    },
    sources: [{ label: 'Kyung Hee — undergraduate admission for international students', url: 'https://iadmission.khu.ac.kr/gglobalcenter/user/contents/view.do?menuNo=8000031' }]
  });

})(window.UNIPATH.profiles);
