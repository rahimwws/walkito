import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Buying guide (plan C.7 #7). Evidence: walkito-seo/research/pages/
 * insoles-evidence.md; products, prices, claims and APMA seal: insoles-products-serp.md;
 * both verified in insoles-verified.md (2026-10-11). We did not test products and
 * have no affiliate links. Never rank products as "best"; never imply the APMA seal
 * is a test. The build rejects "12 weeks", so write "three months".
 */
export const BEST_INSOLES_EN: Guide = {
  lang: 'en',
  page: 'bestInsoles',
  mainSource: CITE.guideline,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: 'Best Insoles for Plantar Fasciitis: What Trials Show',
  description:
    'Which insoles help plantar fasciitis? What trials found on custom vs store-bought, heel cups vs arch supports, firm vs soft, plus 12 insoles and their claims.',
  h1: 'Best insoles for plantar fasciitis: what the trials show',
  lede:
    'No trial crowns a brand. In trials that compared them, custom insoles did no better than store-bought ones, so a firm, contoured store-bought arch support (about $50 to $70) or a silicone heel cup (about $18) is a reasonable choice. Use it together with stretching and strengthening: the 2023 guideline advises against relying on insoles alone for short-term pain relief. Relying on insoles alone is one of the [reasons plantar fasciitis does not get better](/plantar-fasciitis-not-getting-better/). Any benefit is modest and may take several weeks.',
  intro: [
    'We do not sell insoles, we have no affiliate links and we did not wear-test these products. Walkito is an exercise app, so we have our own bias toward exercise; this page sticks to what the trials found.',
  ],
  takeaways: [
    'The 2023 guideline grades insoles used alone for short-term pain relief B against, and says clinicians may use them combined with other care (grade C), custom or store-bought.',
    'Custom insoles were no better than store-bought ones: a review of 19 trials found no difference at any time point.',
    'In a trial of 236 people who all stretched, 95% improved with a silicone heel pad and 68% with a custom orthotic after 8 weeks.',
    'A firm, supportive insole beat soft foam in a small trial, and soft thin foam was the fake (sham) insole in another.',
    '\u201cClinically proven\u201d on the insole product pages we checked came with no linked study, and the APMA seal is not a product test: APMA says it \u201cis not a testing laboratory\u201d.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Do insoles help plantar fasciitis?',
      keyFact: 'The 2023 heel pain guideline says clinicians should not use orthoses, prefabricated or custom, \u201cas an isolated treatment for short-term pain relief\u201d, but may use them \u201cwhen combined with other treatments\u201d (Koc and colleagues, 2023).',
      paragraphs: [
        'A little, and mostly as an add-on. Compared with fake (sham) insoles, real ones gave a small reduction in pain, not function, between weeks 7 and 12 in one review of 19 trials, which may be too small to notice. Another review found no difference from sham insoles in the short term, and a later trial of 185 adults found none at three months.',
        'In a trial of 103 people, a steroid injection did better at week 4 and arch-contouring insoles did better at week 12, but neither difference was large enough to matter much to patients. So expect insoles to help gradually, if at all, not overnight.',
      ],
      cites: [CITE.guideline, CITE.whittakerOrthoses, CITE.rasenbergReview2018, CITE.rasenbergStap, CITE.whittakerSoothe],
    },
    {
      h2: 'Are custom orthotics better than store-bought insoles?',
      keyFact: 'A review of 19 trials found no difference between custom and prefabricated insoles for heel pain at any time point (Whittaker and colleagues, 2018).',
      paragraphs: [
        'Not in trials. The guideline says the evidence \u201cclearly finds a similarity in outcomes between custom and prefabricated orthoses\u201d. Some related trials:',
        {
          list: [
            'In a trial of 135 people, firm-foam store-bought insoles and semirigid custom ones both improved function a little more than soft sham insoles at three months, but not at 12 months.',
            'In a trial of 142 people, low-cost foam insoles, prefabricated or customized, had similar effects after 8 weeks.',
            'In a study that was not randomized, with 67 people completing it, custom insoles did no better than prefabricated Powerstep insoles, which were 38% cheaper per patient.',
            'In a trial of 185 adults, custom insoles did no better than sham insoles, and a cost analysis found them not cost-effective compared with usual care from a family doctor.',
          ],
        },
        'Custom orthotics often cost $300 to $800, according to [GoodRx](https://www.goodrx.com/conditions/musculoskeletal/custom-orthotics-cost); see our [cost guide](/plantar-fasciitis-treatment-cost/). One best-practice guide puts custom orthoses as a later step, at about three months, after shockwave therapy, if improvement is still suboptimal.',
      ],
      cites: [CITE.whittakerOrthoses, CITE.guideline, CITE.landorf2006, CITE.baldassinFoam, CITE.ringPowerstep, CITE.rasenbergStap, CITE.rasenbergCost, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Heel cup or full-length arch support?',
      keyFact: 'In a trial of 236 people who all stretched, 95% improved with a silicone heel pad, 88% with a rubber heel cup, 81% with a felt pad, 72% with stretching alone and 68% with a custom orthotic after 8 weeks (Pfeffer and colleagues, 1999).',
      paragraphs: [
        'The evidence points both ways. That older trial favoured simple heel pads. A later review concluded that contoured full-length insoles relieve plantar fasciitis symptoms better than heel cups, and in a pressure study in older adults, a prefabricated contoured insole gave a fivefold greater reduction in heel pressure than the next best insert, including a silicone heel cup.',
        'A heel cup is cheaper and fits more shoes; a full-length arch support has more support behind it in recent research. Either can be a first try alongside exercise.',
      ],
      cites: [CITE.pfefferHeelPads, CITE.schuitemaMechanical, CITE.bonannoInserts],
    },
    {
      h2: 'What should you look for in a plantar fasciitis insole?',
      paragraphs: [
        {
          list: [
            '**Firm, contoured arch support rather than soft foam.** In a small 3-week trial of 30 adults, a foam-covered rigid insole reduced pain more than a soft supportive foam one, and a thin flat insole had no significant effect. In another trial, soft thin foam was used as the fake insole.',
            '**A heel cup** that cradles the heel.',
            '**A fit that works in your shoes.** Full-length insoles usually replace the shoe\u2019s own insole; heel cups fit more shoes.',
            '**No magnets.** In a trial in JAMA, magnetic insoles gave no extra benefit over the same insoles without magnets.',
          ],
        },
      ],
      cites: [CITE.waltherInsoles, CITE.landorf2006, CITE.winemillerMagnets],
    },
    {
      h2: 'Plantar fasciitis insoles compared',
      table: {
        head: ['Insole', 'Type', 'Price', 'APMA seal'],
        rows: [
          ['PowerStep Pinnacle', 'Full-length, semi-rigid', '$54.95', 'Yes'],
          ['Superfeet All-Purpose Support High Arch', 'Full-length, firm', '$59.99', 'Yes'],
          ['Superfeet Casual Pain Relief', 'Full-length, casual shoes', '$69.99', 'Yes'],
          ['Spenco Total Support Max', 'Full-length, firm', '$49.99', 'Yes'],
          ['Tread Labs Pace', 'Full-length, extra firm', '$70', 'Yes'],
          ['CURREX SupportSTP', 'Full-length', '$59.95', 'No'],
          ['Redi-Thotics Flex', 'Full-length, semi-rigid', '$59', 'No'],
          ['Vionic Relief Full', 'Full-length', '$55', 'No'],
          ['Dr. Scholl\u2019s Plantar Fasciitis All-Day', 'Full-length', '$17.96', 'No'],
          ['WalkHero Plantar Fasciitis Relief', 'Full-length', '$19.99', 'No'],
          ['Tuli\u2019s Heavy Duty Gel Heel Cups', 'Heel cup, soft gel', '$17.99', 'Yes'],
          ['Heel That Pain Gel Heel Seat', 'Heel seat', '$24.95', 'No'],
        ],
      },
      paragraphs: [
        'List prices on each maker\u2019s own site, checked October 11, 2026. These are the insoles review sites pick most often; we did not test them and do not rank them. \u201cAPMA seal\u201d means the product is in the American Podiatric Medical Association\u2019s seal database; \u201cNo\u201d means it is not listed, not that it failed anything. Powerstep insoles were used in a published study, and a heel cup from Medi-Dyne, the maker of Tuli\u2019s, was given to everyone in another trial. We found no published studies of the other products, searching abstracts and open full texts.',
      ],
      cites: [CITE.ringPowerstep, CITE.rielHeelRaiseAdd],
    },
    {
      h2: 'What do \u201cclinically proven\u201d and the APMA seal mean?',
      paragraphs: [
        'Less than they sound. The PowerStep, Dr. Scholl\u2019s and Superfeet product pages say \u201cclinically proven\u201d without linking a study; Superfeet\u2019s line is brand-wide: \u201cclinically proven to decrease fatigue, reduce injury, and improve comfort\u201d. Dr. Scholl\u2019s says its plantar fasciitis insole \u201cImmediately relieves heel pain & prevents it from coming back\u201d; we found no trial support for that claim for any insole.',
        'The [APMA seal](https://www.apma.org/seal-db) means the product has the podiatrists\u2019 association\u2019s Seal of Acceptance, but APMA says it \u201cis not a testing laboratory\u201d and does not compare products against each other.',
      ],
    },
    {
      h2: 'How to use insoles with exercise',
      paragraphs: [
        'The guideline supports insoles only alongside other care, and the exercises have stronger grades: plantar fascia and calf stretching A, strengthening B. In one trial in which everyone wore shoe inserts, heel raises with a towel under the toes gave faster improvement than stretching.',
        'Wear the insoles in the shoes you use most, and do the [plantar fasciitis exercises](/plantar-fasciitis-exercises/) every week. Our page on [insoles vs exercises](/insoles-vs-exercises/) covers the trials behind combining them.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'When should you see a podiatrist?',
      paragraphs: [
        'See a podiatrist or doctor if the pain has not improved after about two weeks of home care ([NHS](https://www.nhs.uk/conditions/heel-pain/)), or sooner for the warning signs below. If you have diabetes, get your feet checked: Medicare covers therapeutic shoes and inserts only for people with diabetes and severe diabetes-related foot disease ([Medicare.gov](https://www.medicare.gov/coverage/therapeutic-shoes-inserts)).',
      ],
    },
  ],
  faq: [
    {
      q: 'Do insoles really work for plantar fasciitis?',
      a: 'Modestly, and best alongside exercise. The 2023 guideline advises against relying on insoles alone for short-term pain relief but allows them combined with other care. Trials against fake insoles are mixed, with at most a small benefit after several weeks.',
      cites: [CITE.guideline, CITE.whittakerOrthoses],
    },
    {
      q: 'Are expensive insoles better than cheap ones?',
      a: 'Trials have not shown it. Custom insoles did no better than store-bought ones in a review of 19 trials, and prefabricated foam insoles matched customized foam insoles in a trial of 142 people.',
      cites: [CITE.whittakerOrthoses, CITE.baldassinFoam],
    },
    {
      q: 'Should plantar fasciitis insoles be soft or firm?',
      a: 'Firm and supportive did better in a small trial that compared them, and soft thin foam was used as the fake insole in another trial. Comfort still matters, since you have to wear them.',
      cites: [CITE.waltherInsoles, CITE.landorf2006],
    },
    {
      q: 'Are heel cups good for plantar fasciitis?',
      a: 'They can be. In a 1999 trial, 95% of people with a silicone heel pad improved, but a later review found contoured full-length insoles worked better than heel cups. Either is a reasonable cheap first try with exercise.',
      cites: [CITE.pfefferHeelPads, CITE.schuitemaMechanical],
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
    h2: 'Pair your insoles with the exercises',
    text: '[Walkito](/program/) gives you the plantar fascia stretch, calf stretches with the knee straight and bent, and strength work that gets harder over time, on 3, 5 or 7 days a week. It is a weekly or yearly subscription; the price is shown in the store.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and a short test every 14 days, then every 28 after your first goal, shows whether your calves, arch and balance are changing.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Best insoles',
  campaign: 'compare-best-insoles',
};
