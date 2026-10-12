import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Cost page (plan C.7 #3). Every number: walkito-seo/research/pages/cost-facts.md,
 * independently re-checked in cost-verified.md (2026-10-11). Never state a
 * Walkito price (prices are not fixed). Store and app prices are dated.
 */
export const PF_COST_EN: Guide = {
  lang: 'en',
  page: 'pfCost',
  mainSource: CITE.guideline,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: 'Plantar Fasciitis Treatment Cost: PT vs App vs Insoles',
  description:
    'What plantar fasciitis care costs in the US: physical therapy with and without insurance, exercise apps, insoles, custom orthotics and more, with dated sources.',
  h1: 'How much does plantar fasciitis care cost?',
  lede:
    'Home exercise costs the least: the stretches and strengthening the 2023 guideline recommends need no equipment, and the exercise apps we checked range from free to about $300 a year. Store-bought insoles cost about $40 to $60 a pair. Of the first-line options, physical therapy costs the most: in a study of US private insurance claims from 2007 to 2011, an average course of 5 to 6 visits for plantar fasciitis cost about $1,000 to $1,400. Custom orthotics, often $300 to $800, did no better than store-bought insoles in trials.',
  intro: [
    'Walkito is an exercise app, so we are not neutral on this. We checked every price on October 11, 2026, on the page we link: official sources, maker stores, App Store pages and price guides. Some price guides come from companies that sell care themselves, and we say so.',
  ],
  takeaways: [
    'The 2026 national Medicare-approved amount for a physical therapy evaluation is $97.87; after the Part B deductible, you pay 20% of it.',
    'A physical therapy visit for a privately insured patient cost $192 on average, according to the Health Care Cost Institute.',
    'Nearly 4 in 5 ACA plans sold to individuals and small businesses in 2024 capped physical therapy visits; 20 a year was the most common limit.',
    'The foot pain apps we checked cost from free to $299.99 a year in the App Store. Hinge Health and Sword are $0 through many employers and health plans.',
    'Custom orthotics did no better than store-bought insoles in a review of 19 trials, and a Dutch trial found them not cost-effective compared with usual care from a family doctor.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Plantar fasciitis costs at a glance',
      table: {
        head: ['Option', 'Typical US cost', 'Source'],
        rows: [
          ['Home stretching and strengthening', '$0', 'No equipment needed'],
          ['Exercise app', '$0 to $299.99 a year', 'App Store, Oct 2026'],
          ['Store-bought insoles', '$39.99 to $59.99 a pair', 'Maker stores, Oct 2026'],
          ['Night splint', '$49.95 to $56.95', 'Maker store, Oct 2026'],
          ['Kinesiology tape', '$14.99 to $21.99 a roll', 'Maker store, Oct 2026'],
          ['Podiatrist first visit', 'About $165 without insurance', 'Mira, 2026'],
          ['Course of physical therapy', 'About $1,000 to $1,400', 'Insurance claims, 2007 to 2011'],
          ['Custom orthotics', '$300 to $800', 'GoodRx, 2024'],
          ['Shockwave therapy', '$550 to $3,890 a package', 'UCHealth 2023, MDsave'],
          ['Surgery (plantar fasciotomy)', '$3,431 to $9,434', 'MDsave'],
        ],
      },
      paragraphs: [
        'Prices vary a lot by state, clinic and insurance plan. Use these as a starting point and ask for a quote before you book.',
      ],
    },
    {
      h2: 'How much does physical therapy cost for plantar fasciitis?',
      keyFact: 'In a study of US private insurance claims, people with plantar fasciitis who saw a physical therapist had an average of 5.0 visits with billed costs of $1,039 when they got manual therapy, and 6.3 visits costing $1,379 when they got supervised rehabilitation (Fraser and colleagues, 2017).',
      paragraphs: [
        'That study used claims from 2007 to 2011, so today\u2019s costs may be higher. Newer per-visit numbers:',
        {
          list: [
            '**Medicare.** The 2026 national Medicare-approved amounts are $97.87 for a physical therapy evaluation, $29.06 for each 15 minutes of therapeutic exercise and $27.72 for each 15 minutes of manual therapy ([CMS fee schedule](https://www.cms.gov/medicare/physician-fee-schedule/search)). After the Part B deductible, you pay 20% of the approved amount ([Medicare.gov](https://www.medicare.gov/coverage/physical-therapy-services)).',
            '**Private insurance.** A visit for a privately insured patient cost $192 on average, according to Health Care Cost Institute data reported by [KFF Health News](https://kffhealthnews.org/health-care-costs/physical-occupational-therapy-visit-session-cap-limit-prior-authorization-aca/) in 2025. What you pay depends on your copay, coinsurance and deductible.',
            '**Without insurance.** Price guides from companies that sell therapy put a self-pay visit at roughly $100 to $350 or more, with the first evaluation at $150 to $400 or more ([Hinge Health](https://www.hingehealth.com/resources/articles/physical-therapy-cost-calculator)). These are rough guides, not independent surveys.',
          ],
        },
        'A quick way to estimate your own cost: multiply your copay by the number of visits. With a $30 copay and 8 visits, that is $240, plus anything you owe toward your deductible first.',
      ],
      cites: [CITE.fraserPTUse],
    },
    {
      h2: 'Does insurance cover physical therapy for plantar fasciitis?',
      paragraphs: [
        'Many plans do when it is medically necessary, but often with limits:',
        {
          list: [
            '**Visit caps.** Nearly 4 in 5 ACA plans sold to individuals and small businesses in 2024 limited physical therapy visits, from 20 to 60 a year, and 20 was the most common cap ([KFF Health News](https://kffhealthnews.org/health-care-costs/physical-occupational-therapy-visit-session-cap-limit-prior-authorization-aca/)).',
            '**Prior approval.** Therapists told [KFF Health News](https://kffhealthnews.org/health-care-costs/physical-occupational-therapy-visit-session-cap-limit-prior-authorization-aca/) that some insurers demand a new approval request every two or three visits.',
            '**Medicare.** There is no hard cap, but once therapy costs pass $2,480 in a year (2026), the therapist must confirm that more care is needed ([APTA](https://www.apta.org/your-practice/payment/medicare-payment/coding-billing/therapy-cap)).',
          ],
        },
        'Before your first visit, ask your plan three things: how many visits are covered, whether you need a referral, and what you pay per visit before and after the deductible.',
      ],
    },
    {
      h2: 'How much do plantar fasciitis apps cost?',
      paragraphs: [
        'Prices from each app\u2019s App Store page or website, checked October 11, 2026:',
      ],
      table: {
        head: ['App', 'Price'],
        rows: [
          ['PlantarCare', 'Free'],
          ['Arch: Flat Feet Trainer', '$9.99 a month or $39.99 a year'],
          ['Exakt Health', '$19.99 a month or $99.99 a year'],
          ['Prehab', '$49.99 a month; yearly $199.99 or $299.99'],
          ['Alleviate', 'Free app; $59 plantar fasciitis program'],
          ['Hinge Health, Sword', '$0 through an employer or health plan'],
          ['Walkito', 'Weekly or yearly subscription, price shown in the store'],
        ],
      },
    },
    {
      h2: 'Is an app cheaper than physical therapy, and does it work as well?',
      paragraphs: [
        'An app costs less than even a few physical therapy visits. Whether it does as well is not known: we found no trial comparing an exercise app with physical therapy for plantar fasciitis. In a study in China, a digital home program cost less than half as much as hospital physiotherapy in direct medical costs over a year and was not worse for first-step pain at three months. But it was not randomized, and its authors call the results provisional.',
        'What an app cannot do is diagnose your heel pain or give hands-on care. Our page on [exercise apps vs physical therapy](/app-vs-physical-therapy-plantar-fasciitis/) goes through the trials.',
      ],
      cites: [CITE.xuDigitalPT],
    },
    {
      h2: 'Are custom orthotics worth the money?',
      keyFact: 'A review of 19 trials found no difference between custom and prefabricated insoles for heel pain at any time point (Whittaker and colleagues, 2018).',
      paragraphs: [
        'Custom orthotics often cost $300 to $800, and some insurance plans do not pay for them or pay only for certain conditions ([GoodRx](https://www.goodrx.com/conditions/musculoskeletal/custom-orthotics-cost)). Medicare covers shoe inserts only for people with diabetes and severe diabetes-related foot disease ([Medicare.gov](https://www.medicare.gov/coverage/therapeutic-shoes-inserts)).',
        'The trials do not show that the extra money buys better results. In a trial of 185 adults, custom insoles did no better than sham insoles at three months, and a cost analysis of the same trial found custom insoles were not cost-effective compared with usual care from a family doctor.',
        'Store-bought arch supports cost much less, for example [Dr. Scholl\u2019s Plantar Fasciitis insoles](https://www.drscholls.com/products/advanced-pain-relief-plantar-fasciitis-orthotic-insoles) at $39.99, [Powerstep Pinnacle](https://powerstep.com/products/pinnacle-insoles) at $54.95 and [Superfeet High Arch](https://www.superfeet.com/products/all-purpose-support-high-arch) at $59.99. The 2023 guideline advises against relying on insoles alone for short-term pain relief, so pair them with the exercises. More in [insoles vs exercises](/insoles-vs-exercises/).',
      ],
      cites: [CITE.whittakerOrthoses, CITE.rasenbergStap, CITE.rasenbergCost, CITE.guideline],
    },
    {
      h2: 'What do other plantar fasciitis treatments cost?',
      paragraphs: [
        {
          list: [
            '**Podiatrist visit.** About $165 on average for a new patient without insurance ([Mira](https://www.talktomira.com/post/how-much-does-it-cost-to-see-a-podiatrist-without-insurance)). The 2026 national Medicare-approved amount for a standard new-patient office visit is $117.57.',
            '**Cortisone shot.** The 2026 national Medicare-approved amount for the injection itself in an office is $60.46; the drug and any separate visit can add to that.',
            '**Night splint.** $49.95 to $56.95 at list price from [Powerstep](https://powerstep.com/products/dorsal-night-splint). See [night splints for plantar fasciitis](/night-splints-plantar-fasciitis/).',
            '**Shockwave therapy.** UCHealth charged $550 for a package in 2023; bundled prices on [MDsave](https://www.mdsave.com/procedures/shockwave-therapy-for-plantar-fasciitis/d28bfbc9) run $2,602 to $3,890. Some insurers do not pay for it: Cigna lists it as unproven for plantar fasciitis ([policy](https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/mm_0097_coveragepositioncriteria_plantar_fasciitis_treatments.pdf)).',
            '**Surgery.** $3,431 to $9,434 for a plantar fasciotomy ([MDsave](https://www.mdsave.com/procedures/plantar-fasciotomy/d784f9c5)).',
          ],
        },
      ],
    },
    {
      h2: 'What is the cheapest way to start?',
      paragraphs: [
        'A low-cost order that follows the guideline:',
        {
          list: [
            'Start the plantar fascia stretch, calf stretches and a strengthening exercise such as the [towel heel raise](/exercises/towel-heel-raise/). They cost nothing.',
            'Add store-bought arch supports if you want extra comfort, together with the exercises.',
            'See a doctor or physical therapist if the pain has not improved after about two weeks of home care ([NHS](https://www.nhs.uk/conditions/heel-pain/)), or sooner for the warning signs below.',
            'Leave the costly options, such as shots, shockwave and surgery, for later, and decide on them with a clinician.',
          ],
        },
        'Our [plantar fasciitis exercises guide](/plantar-fasciitis-exercises/) shows each exercise step by step.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'How much is physical therapy for plantar fasciitis without insurance?',
      a: 'Price guides from therapy companies put a self-pay visit at roughly $100 to $350 or more, and the first evaluation at $150 to $400 or more. Multiply by the number of visits your therapist suggests to estimate the total.',
    },
    {
      q: 'Will insurance pay for plantar fasciitis treatment?',
      a: 'Many plans pay for physical therapy when it is medically necessary, but many cap visits; 20 a year was the most common cap in ACA plans sold in 2024. Some plans do not pay for custom orthotics, and some insurers, such as Cigna, do not pay for shockwave therapy.',
    },
    {
      q: 'Does Medicare cover orthotics for plantar fasciitis?',
      a: 'Medicare covers therapeutic shoes and inserts only for people with diabetes and severe diabetes-related foot disease. For outpatient physical therapy, you pay 20% of the approved amount after the Part B deductible.',
    },
    {
      q: 'What can I do if I can\u2019t afford physical therapy?',
      a: 'Start with the free home exercises the 2023 guideline recommends: plantar fascia and calf stretches and strengthening. If you can afford one visit, use it to confirm the diagnosis and check your exercises. The NHS advises seeing a doctor if heel pain has not improved after 2 weeks of home care.',
      cites: [CITE.guideline],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall',
      'the pain is severe or stops you doing normal activities',
      'it has not improved after about two weeks of home care, or keeps getting worse',
      'the pain comes with numbness, tingling or swelling',
      'you have diabetes or reduced feeling in your feet',
    ],
  },
  program: {
    h2: 'If you start at home',
    text: '[Walkito](/program/) gives you the plantar fascia stretch, both calf stretches and a heel raise that gets harder over time, on 3, 5 or 7 days a week. It is a weekly or yearly subscription; the price is shown in the store.',
    more: [
      'It does not diagnose and has no hands-on care, so see a clinician if the pain is not improving.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Plantar fasciitis costs',
  campaign: 'compare-pf-cost',
};
