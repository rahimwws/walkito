import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * scottAgeFoot | Scott G, Menz HB, Newcombe L. Age-related differences in foot structure and function. Gait & Posture. 2007;26(1):68–75. | doi: 10.1016/j.gaitpost.2006.07.009 | pmid: 16945538 | cross-sectional comparison (50 young vs 50 older adults)
 * segalPregnancy | Segal NA, Boyer ER, Teran-Yengle P, Glass NA, Hillstrom HJ, Yack HJ. Pregnancy leads to lasting changes in foot structure. American Journal of Physical Medicine & Rehabilitation. 2013;92(3):232–240. | doi: 10.1097/PHM.0b013e31827443a9 | pmid: 23117270 | prospective longitudinal cohort (n = 49 completed)
 * kohlsGatzoulisPrevalence | Kohls-Gatzoulis J, Woods B, Angel JC, Singh D. The prevalence of symptomatic posterior tibialis tendon dysfunction in women over the age of 40 in England. Foot and Ankle Surgery. 2009;15(2):75–81. | doi: 10.1016/j.fas.2008.08.003 | pmid: 19410173 | cross-sectional survey with examination (582 responses)
 * holmesMannPTT | Holmes GB Jr, Mann RA. Possible epidemiological factors associated with rupture of the posterior tibial tendon. Foot & Ankle. 1992;13(2):70–79. | doi: 10.1177/107110079201300204 | pmid: 1349292 | retrospective case series (n = 67)
 * myersonPCFD | Myerson MS, Thordarson DB, Johnson JE, et al. Classification and Nomenclature: Progressive Collapsing Foot Deformity. Foot & Ankle International. 2020;41(10):1271–1276. | doi: 10.1177/1071100720950722 | pmid: 32856474 | expert consensus statement
 * rogersCharcot | Rogers LC, Frykberg RG, Armstrong DG, et al. The Charcot foot in diabetes. Diabetes Care. 2011;34(9):2123–2129. | doi: 10.2337/dc11-0844 | pmid: 21868781 | expert task force consensus (ADA and APMA)
 * menzPlanusPain | Menz HB, Dufour AB, Riskowski JL, Hillstrom HJ, Hannan MT. Association of planus foot posture and pronated foot function with foot pain: the Framingham foot study. Arthritis Care & Research. 2013;65(12):1991–1999. | doi: 10.1002/acr.22079 | pmid: 23861176 | cross-sectional cohort (n = 3,378)
 *
 * Reused: salinasTorres, ling, posteriorTibialReview, kuligRCT, houckPTTD, brijwasi.
 */

export const FLAT_FEET_AGE_EN: Guide = {
  lang: 'en',
  page: 'flatFeetAge',
  mainSource: CITE.scottAgeFoot,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Do Flat Feet Get Worse With Age? What Changes',
  description:
    'Do flat feet get worse with age? What changes in older feet, why one arch can collapse in adulthood, pregnancy, weight, diabetes, and signs to check.',
  h1: 'Do flat feet get worse with age?',
  lede:
    'Flat feet often get a little flatter with age, but slowly, and usually without pain. Older feet are flatter on average than young feet. What deserves attention is different: one arch dropping over months, with new pain or swelling on the inner ankle. That pattern is usually a tendon problem, and it is worth having checked early.',
  intro: [
    'Maybe your shoes feel longer than they used to, or your arches look lower than they did at 30. That is common and, on its own, not a sign of trouble. For the basics of flexible and rigid flat feet, see the [flat feet guide](/flat-feet/).',
  ],
  takeaways: [
    'In a 2007 comparison of 50 adults with a mean age of 20.9 and 50 with a mean age of 80.2, none with foot problems, the older group had flatter, more rolled-in feet, weaker toe muscles and stiffer ankles (Scott and colleagues, 2007).',
    'No study has followed lifelong flat feet for decades, so how much they keep changing with age is not well measured.',
    'In a survey of 582 women over 40 in England, 3.3 percent had early posterior tibial tendon dysfunction, the most common cause of an arch that collapses in adulthood, and none had been diagnosed (Kohls-Gatzoulis and colleagues, 2009).',
    'In 49 women followed from early pregnancy to about four and a half months after birth, arch height dropped and feet got longer, mainly in a first pregnancy. The average changes were small, around a millimetre (Segal and colleagues, 2013).',
    'No trial has shown that exercise or insoles stop flat feet changing with age. Strength work plus orthoses has small, mixed trial support for the tendon problem behind adult arch collapse (Ross and colleagues, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Do flat feet get worse with age?',
      keyFact: 'In a comparison of 50 young adults (mean age 20.9) and 50 older adults (mean age 80.2) without foot problems, the older feet were flatter and more pronated (Scott and colleagues, 2007).',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      paragraphs: [
        '**Flat feet tend to get slightly flatter with age, the same way most feet do.** In a 2007 study from La Trobe University, researchers compared 50 young adults (mean age 20.9) with 50 older adults (mean age 80.2). Nobody in either group had foot problems.',
        'The older group had:',
        {
          list: [
            'Flatter, more pronated feet (pronated means the foot rolls inward).',
            'Stiffer ankles and big toe joints.',
            'Weaker toe muscles.',
            'More bunions.',
            'Less feeling in the soles.',
          ],
        },
        'When walking, their midfoot stayed on the ground for a 14 percent larger share of each step.',
        'There is an important limit to this. The study compared two different groups of people at one point in time. It did not follow the same feet for 60 years. So it shows that older feet are flatter on average, not how fast any one foot changes, or whether a foot that was already flat changes more or less than a typical one. We did not find a study that has tracked lifelong flat feet over decades.',
        'For most people, the slow change happens in both feet, with no clear start date and often no pain. A fast, one-sided change is a different story, covered below.',
      ],
      cites: [CITE.scottAgeFoot],
    },
    {
      h2: 'Why do arches drop as you get older?',
      paragraphs: [
        'The arch is held up by:',
        {
          list: [
            'Bones.',
            'Ligaments (the tough bands that tie bones together).',
            'The plantar fascia under the foot.',
            'Muscles.',
          ],
        },
        'The main muscle is the tibialis posterior, a deep calf muscle whose tendon runs behind the inner ankle bone and pulls the arch up with each step. Small muscles inside the foot help too.',
        'Several of these change with age. In the 2007 comparison, the older group also had weaker toe muscles and stiffer ankles, though the study did not test whether these caused the flatter feet.',
        'Weight matters as well. A 2023 review of 12 population studies, about 16,000 people, found flat feet were more common in people with obesity, with odds about 2.6 times higher. That review measured how common flat feet were at one time point. It did not test whether gaining weight makes an arch drop.',
      ],
      cites: [CITE.scottAgeFoot, CITE.salinasTorres],
    },
    {
      h2: 'Can you develop flat feet as an adult?',
      keyFact: 'In a survey of 582 women over 40, 3.3 percent had stage I or II posterior tibial tendon dysfunction, and all were undiagnosed despite long-standing symptoms (Kohls-Gatzoulis and colleagues, 2009).',
      paragraphs: [
        '**You can develop flat feet as an adult**, and the most common cause is posterior tibial tendon dysfunction (PTTD), where the tendon that holds the arch up weakens, stretches or tears. The result used to be called adult-acquired flatfoot. In 2020 a group of foot and ankle surgeons agreed on a new name, progressive collapsing foot deformity, because the deformity can keep progressing and is not always caused by the tendon alone.',
        'This is not rare. In a 2009 survey of women over 40 at a family practice in England, 582 sent back a usable questionnaire. After phone calls and exams, 3.3 percent had early-stage PTTD (stage I or II). None of them had been diagnosed, even though their symptoms were typical and had lasted a long time.',
        'Unlike a lifelong flat foot, it usually starts on one side, with pain and sometimes swelling behind or below the inner ankle bone. Rising onto your toes on that foot alone becomes hard or painful. The stages and the exercise trials are covered in the [posterior tibial tendon dysfunction guide](/posterior-tibial-tendon-dysfunction-exercises/).',
      ],
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.myersonPCFD, CITE.ling],
    },
    {
      h2: 'What makes flat feet worse?',
      paragraphs: [
        'The factors linked to a collapsing arch in adults are mostly the ones linked to tendon wear. In a 1992 review of 67 people whose posterior tibial tendon had ruptured (average age 57), 60 percent had at least one of these:',
        {
          list: [
            'High blood pressure.',
            'Obesity.',
            'Diabetes.',
            'Earlier surgery or injury on the inner side of the foot.',
            'Steroid exposure.',
          ],
        },
        'Obesity showed the clearest link. It was a look back at past cases, not a controlled study, so it points to likely factors rather than proving cause.',
      ],
      bullets: [
        '**Body weight.** Obesity is linked both to flat feet in general and to tendon rupture.',
        '**Diabetes.** Linked to tendon problems, and to Charcot foot (see below).',
        '**High blood pressure.**',
        '**Steroid injections**, and earlier injury or surgery on the inner side of the foot.',
        '**Pregnancy**, covered next.',
      ],
      after: [
        '**Charcot foot** needs its own warning. In people with diabetes and nerve damage (neuropathy, where the feet lose feeling), the bones and joints of the midfoot can weaken and collapse, sometimes quickly.',
        'A 2011 expert task force described the typical early picture as a markedly swollen, warm, often red foot with only mild to modest pain. It is often mistaken for an infection, a clot or gout. If you have diabetes and one foot becomes warm and swollen, get it seen the same day.',
      ],
      cites: [CITE.holmesMannPTT, CITE.salinasTorres, CITE.rogersCharcot],
    },
    {
      h2: 'Can pregnancy make your feet flatter for good?',
      keyFact: 'In 49 women measured in early pregnancy and again about four and a half months after birth, arch height fell and foot length grew, mainly in first pregnancies (Segal and colleagues, 2013).',
      paragraphs: [
        '**Pregnancy can lower the arch a little, and the change can last after birth.** In a 2013 study, 49 women had their feet measured in the first trimester and again about four and a half months after giving birth. Arch height and arch stiffness went down, and foot length and arch drop went up.',
        'The first pregnancy drove most of the change. In first-time mothers, foot length grew by about 1.4 millimetres and arch drop by about 1.0 millimetre on average.',
        'Two things keep this in proportion. The authors said the average changes were small, and the study found no change in one measure of how the foot rolled during walking. "Lasting" in this study means still there at the follow-up visit a few months after birth. Nobody was followed for years.',
        'If your shoe size went up after a pregnancy and your feet feel fine, that change is common. If one arch keeps dropping, or the inner ankle starts to hurt, get it checked.',
      ],
      cites: [CITE.segalPregnancy],
    },
    {
      h2: 'When is a flattening foot a problem?',
      paragraphs: [
        '**A flattening foot is a problem when it changes fast, on one side, or with pain or swelling.** Slow change in both feet with no pain is common with age. The table sorts the usual patterns.',
      ],
      table: {
        caption: 'Patterns of arch change in adults and what they usually mean',
        head: ['What you notice', 'What it often means', 'What to do'],
        rows: [
          ['Both feet slightly flatter over years, no pain', 'Common age-related change', 'Nothing urgent. Keep your feet and calves strong'],
          ['Lifelong flat feet that ache after long shifts on your feet', 'Load on a low arch, not a new problem', 'Exercise, supportive shoes, see [flat feet exercises](/flat-feet-exercises/)'],
          ['One arch dropping over months, pain or swelling on the inner ankle', 'Possible posterior tibial tendon dysfunction', 'See a clinician soon. Exercise and orthoses are used mainly in early stages'],
          ['Cannot rise onto the toes of one foot', 'Weak or damaged posterior tibial tendon', 'See a clinician'],
          ['Diabetes, foot suddenly warm, swollen or red', 'Possible Charcot foot', 'Same-day medical care'],
          ['Flat foot that stays flat even off the ground, and hurts', 'Rigid flat foot, often a joint or bone cause', 'See a clinician before exercising'],
        ],
      },
      after: [
        'Flat feet and pain are only loosely linked. In the Framingham Foot Study of 3,378 adults, a flat foot posture was tied to slightly higher odds of arch pain in men (an odds ratio of 1.38), with no clear link to arch pain in women. Plenty of people with flat feet have no pain at all, at any age.',
      ],
      cites: [CITE.menzPlanusPain, CITE.ling, CITE.rogersCharcot],
    },
    {
      h2: 'Can exercise or insoles stop flat feet getting worse?',
      keyFact: 'A 2018 review found only three trials, 93 people in total, testing exercise for posterior tibial tendon dysfunction, with moderate effects for slow lowering (eccentric) strength work added to orthoses and stretching (Ross and colleagues, 2018).',
      paragraphs: [
        'No trial has tested whether exercise or insoles stop flat feet changing with age. What exists is evidence on two nearby questions, and it is small.',
        'For the tendon problem behind adult arch collapse, a 2018 review found three trials with 93 people in total. Slow lowering (eccentric) strength work added to orthoses (arch-supporting insoles) and stretching eased pain and disability a moderate amount more than orthoses and stretching alone.',
        'In one trial, 36 adults in early stages did three months of their program. All groups improved, and the eccentric strength group improved most. In another trial of 39 people, adding strength work made only a small difference. The review authors called the research thin.',
        'For lifelong flexible flat feet, one trial of 52 people found a short program of foot, ankle and hip exercises changed arch shape more than in a control group. It measured shape, not pain, and over a short time. Whether that kind of training slows age-related change over decades is unknown.',
        'So keeping the muscles that hold up the arch strong is reasonable and low-risk, but **nobody can promise it keeps your arch where it is.** Walkito starts each exercise below at a low dose and checks calf endurance, arch hold and balance with a short test every two weeks at first (every four once you reach a goal), so you can see whether these muscles are getting stronger.',
      ],
      exercises: [
        {
          name: 'Band inversion (resisted turn-in)',
          dose: 'Walkito starts at 3 sets of 12, each foot',
          how: 'Sit with a resistance band around the forefoot, anchored to the outside. Turn the foot inward against the band, knee still. This trains the tibialis posterior.',
          often: 'Strength sessions',
          feel: 'Work along the inner ankle and arch',
          stop: 'Sharp pain behind the inner ankle bone, or pain at 6/10 or more',
          evidence: { level: 'moderate', why: 'Resisted strength work for the tibialis posterior was part of the programs tested in small trials of early posterior tibial tendon dysfunction.' },
          media: 'band_inversion',
          caption: 'Band inversion: turn the foot in against the band, knee still',
          alt: 'A seated figure turning one foot inward against a resistance band',
        },
        {
          name: 'Heel raises (both feet)',
          dose: 'Walkito starts at 3 sets of 10',
          how: 'Hold a wall or counter. Rise onto your toes slowly and lower slowly, weight over the big toe side so the arch lifts. Move to one foot once both feet feel easy.',
          often: 'Strength sessions',
          feel: 'Work in the calves and along the arch',
          stop: 'Pain at the inner ankle at 6/10 or more',
          evidence: { level: 'early', why: 'Heel raises appear in tendon programs, but they have not been tested on their own for flat feet or for slowing age-related change.' },
          media: 'heel_raise_double',
          caption: 'Heel raises: slow up, slow down, weight over the big toe',
          alt: 'A figure rising onto the toes of both feet while holding a support',
        },
        {
          name: 'Short foot (seated)',
          dose: 'Walkito starts at 3 sets of 8, holding each for 5 seconds, each foot',
          how: 'Sit with your foot flat. Without curling your toes, draw the ball of the foot toward the heel so the arch lifts a little. Hold, then relax.',
          often: 'Most sessions',
          feel: 'A tightening under the arch',
          stop: 'Cramp or pain in the arch',
          evidence: { level: 'early', why: 'Part of the combined program that changed arch shape in one short trial of flexible flat feet. Not tested for age-related change.' },
          media: 'short_foot_seated',
          caption: 'Short foot: lift the arch without curling the toes',
          alt: 'A seated figure with one foot on the floor and the arch lifting slightly',
        },
        {
          name: 'Calf stretch (straight knee)',
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. A tight calf can make the foot roll in more when you walk.',
          often: 'Most sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Pain in the Achilles tendon or heel',
          evidence: { level: 'early', why: 'Calf stretching was part of every program in the tendon trials, but its own effect on arch height has not been tested.' },
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down',
          alt: 'A figure leaning on a wall with the back leg straight',
        },
      ],
      sourceNote:
        'Ross 2018: 3 randomized trials, n = 93, standardized mean differences 0.6 to 1.2 for eccentric strengthening with orthoses and stretching. Kulig 2009: n = 36, stage I or II, three arms, three months, Foot Function Index. Houck 2015: n = 39, stage II, added strengthening made a minimal difference. Brijwasi 2023: n = 52, navicular drop and Foot Posture Index, no pain outcome.',
      cites: [CITE.posteriorTibialReview, CITE.kuligRCT, CITE.houckPTTD, CITE.brijwasi],
    },
    {
      h2: 'How can you tell if your flat feet are changing?',
      paragraphs: [
        'You can track a flat foot at home with three simple checks, done every few months. None of them diagnose anything. They tell you when it is worth asking a clinician.',
      ],
      bullets: [
        '**Single-leg heel raise.** Hold a counter, stand on one foot and rise onto your toes several times. Compare sides. If one side cannot rise, or the heel does not turn slightly inward at the top, the posterior tibial tendon may be weak. The [calf raise test](/calf-raise-test/) shows how to count and compare.',
        '**Photo from behind.** Stand barefoot and have someone take a photo of your heels from behind. If one heel tilts out more than the other, or you can see more toes on the outside of one foot, the arch on that side may be dropping.',
        '**Shoes.** A new difference in how the two shoes wear, or one shoe that suddenly feels long or loose, is worth noting.',
      ],
      after: [
        'If both feet look the same and you can rise on each foot without pain, slow change is unlikely to be anything new. If one side is changing, see a clinician. Exercise and orthoses are the main approach in the early stages of tendon problems, while the foot is still flexible.',
      ],
      cites: [CITE.ling],
    },
  ],
  faq: [
    {
      q: 'Do flat feet get worse with age?',
      cites: [CITE.scottAgeFoot],
      a: 'Often a little, but slowly. In a 2007 comparison of 50 adults around age 21 and 50 around age 80, none with foot problems, the older feet were flatter and more rolled in. No study has followed lifelong flat feet for decades. A fast or one-sided change is different and is usually a tendon problem worth checking.',
    },
    {
      q: 'Can you get flat feet as you get older?',
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.ling],
      a: 'Yes. The most common cause is posterior tibial tendon dysfunction, where the tendon holding the arch up weakens. A 2009 survey of 582 women over 40 in England found 3.3 percent had early-stage cases, none diagnosed. It usually starts in one foot, with pain or swelling behind the inner ankle bone.',
    },
    {
      q: 'Can flat feet get worse over time without pain?',
      cites: [CITE.scottAgeFoot, CITE.menzPlanusPain],
      a: 'Yes. Slow flattening in both feet with no pain is common with age and usually needs nothing urgent. In the Framingham Foot Study of 3,378 adults, flat foot posture was only linked to slightly higher odds of arch pain in men. Painless change in one foot is still worth a check, especially if that heel tilts outward.',
    },
    {
      q: 'How do I stop my flat feet from getting worse?',
      cites: [CITE.posteriorTibialReview],
      a: 'No trial has shown a way to stop age-related arch change. Keeping the foot and calf muscles strong, managing weight and wearing supportive shoes are reasonable and low-risk. For the tendon problem behind adult arch collapse, a 2018 review of three small trials found slow lowering strength work plus orthoses and stretching eased pain more than orthoses and stretching alone.',
    },
    {
      q: 'Is a collapsing arch serious if I have diabetes?',
      cites: [CITE.rogersCharcot],
      a: 'It can be. People with diabetes and nerve damage can develop Charcot foot, where midfoot bones and joints break down and the arch collapses. A 2011 expert task force described the early sign as a swollen, warm, often red foot with only mild to modest pain. If your foot looks like that, get same-day medical care.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'one foot has flattened over a few months while the other has not',
      'you have new pain or swelling on the inside of the ankle, behind or below the ankle bone',
      'you cannot rise onto your toes on one foot, or it hurts to try',
      'you have diabetes and your foot is suddenly warm, swollen or red, even if it barely hurts (same-day care)',
      'you have numbness, tingling or burning in the feet',
      'your flat foot stays flat even when you lift it off the ground, and it hurts',
      'the arch dropped after a fall, a twist or an injury',
      'you cannot put weight on the foot, or pain wakes you at night',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito builds a plan one week at a time around one goal. For flat feet, one goal is an arch hold: holding the short foot position for 60 seconds. The plan can include band work for the tibialis posterior, heel raises, short foot and calf stretching, each starting at a low dose and moving up only when it feels easy.',
    more: [
      'You pick 3, 5 or 7 sessions a week of 3, 5 or 10 minutes. Every two weeks, a short test checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician. If one arch is dropping or your inner ankle hurts, see a clinician first.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Flat feet with age',
  campaign: 'guide-flat-feet-age',
};
