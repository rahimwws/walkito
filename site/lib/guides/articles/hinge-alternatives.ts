import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Alternatives page (plan C.7 #6). Facts: walkito-seo/research/pages/
 * hinge-alt-facts.md, verified in hinge-alt-verified.md (2026-10-11); Hinge
 * facts from hinge-facts.md (page 1), cost and PHTI lines as on
 * /hinge-health-reviews/ and /walkito-vs-hinge-health/. Keep the Walkito vs
 * Hinge comparison on /walkito-vs-hinge-health/ only; this page lists
 * options. No Walkito price.
 */
export const HINGE_ALT_EN: Guide = {
  lang: 'en',
  page: 'hingeAlt',
  mainSource: CITE.cuiSwordRCT,
  published: '2026-10-11',
  updated: '2026-10-26',
  title: 'Hinge Health Alternatives: Sword, Cost and Self-Pay Options',
  description:
    'Hinge Health alternatives compared: Sword, Omada, Vori, home and video physical therapy, apps. What Hinge costs, and what you can book without an employer.',
  h1: 'Hinge Health alternatives, Sword Health and what Hinge costs',
  lede:
    'Hinge Health\u2019s virtual program is $0 to members whose employer or health plan covers it, and you cannot buy it yourself, or buy Sword Health, its closest rival. Through a plan, the main alternatives are Sword, Omada and Vori Health. Without one, you can book a physical therapist at home or by video (Luna lists $135 a visit; Virtual Physical Therapists charges $89 for 30 minutes) or use an exercise app, from free to about $300 a year.',
  intro: [
    'Walkito is an exercise app, so we are one of the alternatives and not neutral. We checked every option on its own website and app listing on October 11, 2026, and we list Walkito apart at the end. None of these programs has been tested in a trial for foot or heel pain. For ratings, complaints and the studies behind Hinge itself, see [Hinge Health reviews](/hinge-health-reviews/).',
  ],
  takeaways: [
    'Hinge Health is only for people covered through a partner employer or health plan; its own page says you are eligible \u201cas long as Hinge Health is covered by your employer or health insurance plan\u201d. The virtual program is then $0 to you.',
    'Sword Health and Kaia, which agreed to join Sword in January 2026, are also only offered through employers and health plans. Omada and Vori Health go through your plan, and your usual cost share may apply.',
    'You can book some options yourself: Luna sends a physical therapist to your home ($135 a visit without insurance, or billed to insurance), and Virtual Physical Therapists charges $89 for a 30-minute video visit.',
    'In a trial of 140 people with low back pain, Sword\u2019s digital program did as well as in-person physiotherapy. No program on this page has a published trial for foot or heel pain.',
    'Medicare covers telehealth from home through December 31, 2027; CMS says physical therapists can no longer provide Medicare telehealth from January 1, 2028.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Hinge Health alternatives at a glance',
      table: {
        head: ['Option', 'How you get it', 'Cost to you', 'Clinician'],
        rows: [
          ['Sword Health', 'Employer or health plan', 'May be $0 through your plan', 'Physical therapist'],
          ['Omada Joint & Muscle', 'Employer or health plan', 'Your plan\u2019s cost share', 'Physical therapist'],
          ['Vori Health', 'Insurance, incl. Medicare Advantage', 'Your plan\u2019s cost share', 'Doctor and physical therapist'],
          ['RecoveryOne', 'Doctor, plan or employer', 'Not sold to individuals', 'Physical therapist'],
          ['Luna', 'Book yourself, some areas', '$135 a visit or insurance', 'Physical therapist at home'],
          ['Virtual Physical Therapists', 'Book yourself', '$89 per 30 minutes', 'Physical therapist by video'],
          ['Clinic physical therapy', 'Insurance or self-pay', 'Copay or per visit', 'Physical therapist'],
          ['Exercise apps', 'Download', 'Free to about $300 a year', 'None'],
        ],
      },
      paragraphs: [
        'Checked October 11, 2026. Kaia is not listed separately because it is joining Sword. DarioHealth and Limber Health are also not sold to individuals; Limber works only if your physical therapy clinic enrolls you. First, check your benefits portal or call the number on your insurance card and ask about Sword, Omada and Vori Health by name.',
      ],
    },
    {
      h2: 'How much is Hinge Health?',
      paragraphs: [
        'For most members, nothing. Hinge Health says its program \u201cis provided for free as a benefit through your employer or insurance provider\u201d with \u201cno out-of-pocket costs or copays for you\u201d. Your employer or plan pays instead, and Hinge does not publish what they pay. In-person care, where it is offered, can have a cost share on some plans.',
        'There is no self-pay price. Hinge Health\u2019s [page for individuals](https://www.hingehealth.com/for-individuals/) is an eligibility check: it asks for the name and date of birth on your health insurance card. Hinge bills your health plan when you use the program and says this does not affect your benefits or deductible; billing is one of the most common complaints in [Hinge Health reviews](/hinge-health-reviews/). If you lost access, for example after changing jobs, [Walkito vs Hinge Health](/walkito-vs-hinge-health/) compares the two side by side.',
      ],
    },
    {
      h2: 'Sword Health: the closest alternative to Hinge',
      paragraphs: [
        '[Sword Health](https://sword.com/individuals) works much like Hinge: a Doctor of Physical Therapy plus an exercise kit that may include a tablet or sensors. Sword says it \u201cmay be offered at no cost through your employer or health plan\u201d. It does not publish a self-pay price in the US, so if your plan does not cover it you cannot buy it directly. Its [foot pain page](https://sword.com/care-explorer/foot-pain) covers pain \u201canywhere in the heel, arch, toes, or ankle\u201d.',
        'In a trial of 140 people with low back pain, Sword\u2019s program did as well as in-person physiotherapy. The independent [Peterson Health Technology Institute](https://www.phti.org/assessment/virtual-msk-solutions) review (June 2024) put Sword and Hinge in the same physical therapist-guided group, with Omada, RecoveryOne and Vori, and found that group \u201ccomparable to in-person PT\u201d, with \u201cEvidence Certainty: Lower\u201d. For Hinge itself, PHTI found no study comparing it with in-person physical therapy.',
        'Sword agreed to buy [Kaia Health](https://apps.apple.com/us/app/kaia-health/id1100673977) in January 2026. Kaia\u2019s App Store listing says it is \u201ccurrently not available on a self-pay basis\u201d; its app did better than physiotherapy plus online education in a German trial in low back pain. If you need an alternative to Sword Health, the rest of this page applies: the same plan-based programs, or care you can book yourself.',
      ],
      cites: [CITE.cuiSwordRCT, CITE.toelleKaiaRCT],
    },
    {
      h2: 'Other alternatives through your employer or health plan',
      paragraphs: [
        {
          list: [
            '[Omada Joint & Muscle](https://www.omadahealth.com/for-individuals/musculoskeletal), formerly Physera. A licensed physical therapist and a free exercise kit. Unlike Hinge, Omada\u2019s [resources page](https://www.omadahealth.com/resources) says the program is \u201csubject to deductibles, copays and co-insurance\u201d. Its published studies are observational, including an insurance claims analysis that found lower costs.',
            '[Vori Health](https://www.vorihealth.com/). A doctor, a physical therapist and a health coach online, billed to insurance, including Medicare Advantage and Medicaid plans. It names \u201cfoot & ankle pain\u201d. Its one study followed 100 Medicare Advantage patients without a comparison group.',
            '[RecoveryOne](https://www.recoveryone.com/). A licensed physical therapist, through doctors, health plans or employers. Names \u201cankle/foot\u201d. We found no published trial.',
          ],
        },
        'None of these, Sword included, has a published trial for foot or heel pain. Their trials are mostly in back and shoulder pain.',
      ],
      cites: [CITE.napoleoneOmadaClaims, CITE.oconnorVori],
    },
    {
      h2: 'Alternatives you can sign up for yourself',
      paragraphs: [
        {
          list: [
            '[Luna](https://www.getluna.com/). A licensed physical therapist comes to your home. In its [service areas](https://www.getluna.com/locations), you can usually book without a referral, though some insurers require one, and it takes insurance, Medicare and Medicare Advantage. Without insurance it lists $135 a visit. It names heel pain and plantar fasciitis.',
            '[Virtual Physical Therapists](https://www.virtualphysicaltherapists.com/individual/). One-to-one video visits with licensed physical therapists for $89 per 30 minutes, then $2 a minute. It does not bill insurance; HSA and FSA cards work.',
            '**Physical therapy in a clinic.** Through your insurance, a visit usually costs your copay or coinsurance. Our [plantar fasciitis cost guide](/plantar-fasciitis-treatment-cost/) has typical prices and the questions to ask your plan.',
            '**Exercise apps.** No clinician, but you can start today. Prices we checked range from free ([PlantarCare](/walkito-vs-plantarcare/)) to $299.99 a year (Prehab\u2019s top yearly plan); Exakt Health covers plantar fasciitis and heel spurs. See our [plantar fasciitis app guide](/best-app-for-plantar-fasciitis/) and [foot pain apps by problem](/best-apps-for-foot-pain/).',
          ],
        },
      ],
    },
    {
      h2: 'Does Medicare cover virtual physical therapy?',
      paragraphs: [
        '[Medicare.gov](https://www.medicare.gov/coverage/telehealth) says telehealth from your home is covered through December 31, 2027, and you pay 20% of the approved amount after the Part B deductible. CMS\u2019s [telehealth FAQ](https://www.cms.gov/files/document/telehealth-faq-updated-10-09-2026.pdf) says that from January 1, 2028, physical therapists \u201ccan no longer furnish Medicare Telehealth services\u201d.',
        'Separately, Medicare pays physical therapists for remote monitoring of your home exercise as part of a therapy plan of care. If you have Medicare Advantage, ask your plan about Vori Health; Luna also takes Medicare.',
      ],
    },
    {
      h2: 'Which alternative fits foot or heel pain?',
      paragraphs: [
        'For plantar fasciitis, the 2023 guideline supports stretching and strengthening, which you can do at home, and hands-on care such as manual therapy and taping, which need a clinician. A practical order:',
        {
          list: [
            'Check whether your plan covers Sword, Omada or Vori Health. If it does, that gets you a physical therapist at little or no cost.',
            'If not, one visit with a physical therapist, in a clinic, at home with Luna or by video, can confirm the diagnosis and check your exercises.',
            'Then keep going at home, with a free routine or an app. Our page on [exercise apps vs physical therapy](/app-vs-physical-therapy-plantar-fasciitis/) covers what the trials show.',
          ],
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Where Walkito fits',
      paragraphs: [
        'Walkito is an exercise app you can download without an employer or insurance. It gives you a plan of stretching and strengthening for heel pain, flat feet and related foot problems, but no physical therapist, no hands-on care and no diagnosis. If your employer covers Hinge Health or Sword, start there. The full comparison is on [Walkito vs Hinge Health](/walkito-vs-hinge-health/).',
      ],
    },
  ],
  faq: [
    {
      q: 'How much is Hinge Health?',
      a: 'Hinge Health\u2019s virtual program is $0 to members whose employer or health plan covers it; the employer or plan pays instead, and Hinge does not publish what they pay. There is no self-pay price. Hinge bills your plan when you use it and says this does not affect your benefits or deductible.',
    },
    {
      q: 'Can I use Hinge Health without insurance or an employer?',
      a: 'No. Hinge Health is only for people covered through a partner employer or health plan, and it does not sell its program to individuals. Its page for individuals is an eligibility check, not a sign-up with a price. Without coverage, you can book a physical therapist yourself or use an exercise app.',
    },
    {
      q: 'Is Sword Health free?',
      a: 'Sword says it may be offered at no cost through your employer or health plan. It does not publish a self-pay price in the US, so if your plan does not cover it you cannot buy it directly. Kaia, which agreed to join Sword in January 2026, is also not available on a self-pay basis.',
    },
    {
      q: 'What is a good alternative to Sword Health?',
      a: 'Through a plan, Hinge Health, Omada and Vori Health offer a physical therapist much like Sword. Without one, Luna sends a physical therapist to your home ($135 a visit without insurance) and Virtual Physical Therapists charges $89 for a 30-minute video visit. Exercise apps cost from free to about $300 a year.',
    },
    {
      q: 'Is there a Hinge Health alternative for Medicare?',
      a: 'Vori Health works with insurance including Medicare Advantage, and Luna sends a physical therapist to your home and takes Medicare. Medicare covers telehealth from home through December 31, 2027; from January 1, 2028, CMS says physical therapists can no longer provide Medicare telehealth.',
    },
    {
      q: 'What is the cheapest alternative to Hinge Health?',
      a: 'Free home exercise, such as a good free routine or a free app, costs nothing but has no clinician. For a clinician without insurance, Virtual Physical Therapists charges $89 for 30 minutes and Luna lists $135 for a home visit. Through insurance, clinic physical therapy usually costs your copay or coinsurance.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your pain followed an injury or a fall',
      'the pain is severe or stops you doing normal activities',
      'it has not improved after about two weeks of home care, or keeps getting worse',
      'the pain comes with numbness, tingling or swelling',
      'you have diabetes or reduced feeling in your feet',
    ],
  },
  program: {
    h2: 'If you want to start at home',
    text: '[Walkito](/program/) gives you the plantar fascia stretch, calf stretches with the knee straight and bent, and strength work that gets harder over time, on 3, 5 or 7 days a week. It is a weekly or yearly subscription; the price is shown in the store.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and a short test every 14 days, then every 28 after your first goal, shows whether your calves, arch and balance are changing.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Hinge Health alternatives',
  campaign: 'compare-hinge-alternatives',
};
