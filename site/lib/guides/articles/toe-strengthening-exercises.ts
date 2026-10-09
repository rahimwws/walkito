import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * mickleFalls | Mickle KJ, Munro BJ, Lord SR, Menz HB, Steele JR. ISB Clinical Biomechanics Award 2009: toe weakness and deformity increase the risk of falls in older people. Clinical Biomechanics (Bristol, Avon). 2009;24(10):787–791. | 10.1016/j.clinbiomech.2009.08.011 | 19751956 | prospective cohort study
 * menzFalls | Menz HB, Morris ME, Lord SR. Foot and ankle risk factors for falls in older people: a prospective study. Journals of Gerontology Series A: Biological Sciences and Medical Sciences. 2006;61(8):866–870. | 10.1093/gerona/61.8.866 | 16912106 | prospective cohort study
 * valerianiFalls | Valeriani S, Melotto G, Tunprasert T. Foot and ankle risk factors for future falls in older adults: a systematic review with meta-analysis of prospective cohort studies. Health Science Reports. 2026;9(8):e73007. | 10.1002/hsr2.73007 | 42602166 | systematic review and meta-analysis of prospective cohorts
 * spinkBalance | Spink MJ, Fotoohabadi MR, Wee E, Hill KD, Lord SR, Menz HB. Foot and ankle strength, range of motion, posture, and deformity are associated with balance and functional ability in older adults. Archives of Physical Medicine and Rehabilitation. 2011;92(1):68–75. | 10.1016/j.apmr.2010.09.024 | 21187207 | cross-sectional study
 * quinlanToeBalance | Quinlan S, Fong Yan A, Sinclair P, Hunt A. The evidence for improving balance by strengthening the toe flexor muscles: a systematic review. Gait & Posture. 2020;81:56–66. | 10.1016/j.gaitpost.2020.07.006 | 32679464 | systematic review
 * mickleToe | Mickle KJ, Caputi P, Potter JM, Steele JR. Efficacy of a progressive resistance exercise program to increase toe flexor strength in older people. Clinical Biomechanics (Bristol, Avon). 2016;40:14–19. | 10.1016/j.clinbiomech.2016.10.005 | 27780109 | randomized trial (supervised vs home program, plus non-randomized controls)
 * ridgeMinimalist | Ridge ST, Olsen MT, Bruening DA, et al. Walking in minimalist shoes is effective for strengthening foot muscles. Medicine & Science in Sports & Exercise. 2019;51(1):104–113. | 10.1249/MSS.0000000000001751 | 30113521 | RCT
 * taddeiRRI | Taddei UT, Matias AB, Duarte M, Sacco ICN. Foot core training to prevent running-related injuries: a survival analysis of a single-blind, randomized controlled trial. American Journal of Sports Medicine. 2020;48(14):3610–3619. | 10.1177/0363546520969205 | 33156692 | RCT
 * spinkFalls | Spink MJ, Menz HB, Fotoohabadi MR, et al. Effectiveness of a multifaceted podiatry intervention to prevent falls in community dwelling older people with disabling foot pain: randomised controlled trial. BMJ. 2011;342:d3411. | 10.1136/bmj.d3411 | 21680622 | RCT
 * liangFootAnkle | Liang SG, Chow JCM, Leung NM, et al. The effects of ankle and foot exercises on ankle strength, balance, and falls in older people: a systematic review and meta-analysis. Physical Therapy. 2025;105(1):pzae157. | 10.1093/ptj/pzae157 | 39657220 | systematic review and meta-analysis of RCTs
 * willemseFootMuscle | Willemse L, Wouters EJM, Bronts HM, Pisters MF, Vanwanseele B. The effect of interventions anticipated to improve plantar intrinsic foot muscle strength on fall-related dynamic function in adults: a systematic review. Journal of Foot and Ankle Research. 2022;15(1):3. | 10.1186/s13047-021-00509-0 | 35057831 | systematic review (GRADE)
 * allenGross | Allen RH, Gross MT. Toe flexors strength and passive extension range of motion of the first metatarsophalangeal joint in individuals with plantar fasciitis. Journal of Orthopaedic & Sports Physical Therapy. 2003;33(8):468–478. | 10.2519/jospt.2003.33.8.468 | 12968860 | cross-sectional case-control
 * sullivanHeel | Sullivan J, Burns J, Adams R, Pappas E, Crosbie J. Musculoskeletal and activity-related factors associated with plantar heel pain. Foot & Ankle International. 2015;36(1):37–45. | 10.1177/1071100714551021 | 25237175 | case-control study
 * hufferReview | Huffer D, Hing W, Newton R, Clair M. Strength training for plantar fasciitis and the intrinsic foot musculature: a systematic review. Physical Therapy in Sport. 2017;24:44–52. | 10.1016/j.ptsp.2016.08.008 | 27692740 | systematic review
 * soysaFootStrength | Soysa A, Hiller C, Refshauge K, Burns J. Importance and challenges of measuring intrinsic foot muscle strength. Journal of Foot and Ankle Research. 2012;5(1):29. | 10.1186/1757-1146-5-29 | 23181771 | narrative review
 */

export const TOE_STRENGTHENING_EN: Guide = {
  lang: 'en',
  page: 'toeStrengthening',
  mainSource: CITE.mickleToe,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Toe Strengthening Exercises: Test and Progress',
  description:
    'Toe strengthening exercises with a home strength test, a four-step progression, and what studies show about toe strength, balance, falls and heel pain.',
  h1: 'Toe strengthening exercises: how to test your toes and build real strength',
  lede:
    'Toe strengthening exercises start with control (toe yoga, toe spreads), move to grip (towel scrunches, the short foot exercise) and end with load and balance. Weak toes are linked to falls in older adults and show up in people with heel pain. One trial found toe strength rose only in a supervised program that got harder over time.',
  intro: [
    'Most people never think about their toes until something goes wrong: a wobble on one leg, a cramp in the arch, a heel that aches in the morning. This page covers why toe strength matters, how to check yours at home, and a simple way to build it. Each exercise links to its own page for the full technique.',
  ],
  takeaways: [
    'In a study that followed 312 adults aged 60 to 90 for a year, the 107 who fell had weaker big toes and smaller toes than those who did not fall (Mickle and colleagues, 2009).',
    'A 2026 review of 14 cohort studies found that weak big toe muscles went with about 1.65 times the odds of a future fall in adults aged 60 and over, though many studies did not adjust for other causes.',
    'In a trial of 85 older adults, a supervised program that got harder over three months raised toe strength by up to 36 percent, while a home program and a control group showed no change (Mickle and colleagues, 2016).',
    'People with plantar heel pain had weaker toe flexors than people without pain in two separate studies, but neither could show whether the weakness came first or followed the pain.',
    'There is no single agreed test of toe strength. Home checks like the paper grip test are rough pass or fail screens, useful for tracking yourself and not much more.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Why does toe strength matter?',
      keyFact:
        'In a year-long study of 312 adults aged 60 to 90, the people who fell had weaker big toes (11.6 versus 14.8 percent of body weight) than those who did not (Mickle and colleagues, 2009).',
      paragraphs: [
        'Toe strength matters most for balance and for pushing off when you walk. Your toes are the last part of the foot to leave the ground with each step, and when you stand still they press down to stop small sways.',
        'The clearest evidence comes from older adults. An Australian team measured toe strength in 312 people aged 60 to 90 and then tracked who fell over the next 12 months. 107 of them (35 percent) had a fall. On average, the fallers could press down with their big toe at 11.6 percent of their body weight, against 14.8 percent for those who did not fall. The smaller toes showed the same pattern. An earlier study of 176 people with a mean age of 80 found that weak toe plantarflexors (the muscles that press the toes down) were linked to falls even after accounting for other falls risk factors, such as vision, reaction time and strength, and age.',
        'A 2026 review of 14 cohort studies in adults aged 60 and over pooled the data and found that weak big toe muscles went with about 1.65 times the odds of a future fall. The authors were careful to say that many of the studies did not adjust for other causes, so weak toes may partly be a marker of general frailty.',
        'For balance itself, a 2020 review of nine studies found that stronger toe flexors went with better balance in every study it included. All of those studies were in people over 60, so the link in younger adults has not been tested in the same way. In a separate study of 305 people aged 65 to 93, big toe strength was one of the two most consistent predictors of how well they did on balance and walking tests.',
      ],
      sourceNote:
        'Mickle 2009: strength measured on a pressure platform as percent of body weight, means with SD 6.9 and 7.8. Valeriani 2026: hallux plantarflexor weakness pooled OR 1.65 (95% CI 1.14 to 2.38). Quinlan 2020: 7 cross-sectional studies, 2 RCTs, 1 case-control, no meta-analysis.',
      cites: [CITE.mickleFalls, CITE.menzFalls, CITE.valerianiFalls, CITE.quinlanToeBalance, CITE.spinkBalance],
    },
    {
      h2: 'Are weak toes linked to heel pain?',
      paragraphs: [
        'Weak toes do show up in people with plantar fasciitis (pain under the heel where the plantar fascia, a thick band along the sole, attaches). In a 2003 study of 20 people with plantar fasciitis in one foot, the painful foot had weaker toe flexors than the other foot and weaker than 20 matched people without pain. A larger 2015 study compared 202 people with plantar heel pain and 70 without it. The heel pain group had weaker toe flexors, stiffer ankles and a higher body mass index (weight relative to height) on average.',
        'Neither study can say which came first. The authors of both papers say so plainly: weakness could help cause the pain, or pain could make people use their toes less. Strengthening the toes is a reasonable part of a heel pain plan, but the best tested exercises for plantar fasciitis are still the calf and plantar fascia stretches and heel raises in [plantar fasciitis exercises](/plantar-fasciitis-exercises/). A 2017 review of strength training for plantar fasciitis could not say how much foot muscle training on its own helps people with heel pain.',
      ],
      cites: [CITE.allenGross, CITE.sullivanHeel, CITE.guideline, CITE.hufferReview],
    },
    {
      h2: 'Which muscles move your toes?',
      paragraphs: [
        'Two groups of muscles move your toes. The intrinsic muscles start and end inside the foot. They sit in layers under the sole, and the best known are the abductor hallucis (which pulls the big toe away from the others) and the short toe flexors. The extrinsic muscles start in the lower leg and reach the toes through long tendons that run past the ankle.',
        'When you curl your toes hard, both groups work together. That is why researchers find intrinsic strength so hard to measure on its own: a 2012 review concluded it is unclear whether any method can fully separate the two. A sports medicine paper from 2015 calls the intrinsic muscles the foot core, because, like the deep muscles of the trunk, they make small, constant adjustments more than big movements.',
        'So a good toe program mixes control work (toe spread, big toe lift) with force work (towel scrunch, loaded toe presses) that uses both groups.',
      ],
      cites: [CITE.soysaFootStrength, CITE.mcKeon, CITE.gooding],
    },
    {
      h2: 'How can you test toe strength at home?',
      paragraphs: [
        'You can get a rough sense of toe strength at home with four quick checks. None of them is a lab measure, and the 2012 review on foot strength found there is still no widely accepted method, even in research. Use these checks to compare your two feet and to see if you change over time.',
        'Do them barefoot, sitting on a chair with your knees and ankles at about a right angle. Write down what you find so you can repeat the checks a month later in the same way.',
      ],
      bullets: [
        '**Paper grip test.** Put a business card or a strip of stiff paper under your big toe. Press down with the big toe while someone tries to slide the card out. Then do the same with the card under your four smaller toes. Holding the card is a pass. The paper grip test is one of the methods researchers have used, but it is pass or fail and works both muscle groups.',
        '**Toe yoga check.** Lift only your big toe while the four smaller toes stay flat, then reverse it. If the toes all move together, start with control work before adding load.',
        '**Toe spread check.** Spread all five toes apart without lifting them. Look for a clear gap between each toe, and compare feet.',
        '**One-leg stand.** Stand on one foot near a wall for up to 30 seconds and watch your toes. Strong toes press and grip to correct small wobbles. If one side is much worse than the other, or you feel unsafe, mention it to a clinician.',
      ],
      cites: [CITE.soysaFootStrength],
    },
    {
      h2: 'The toe strengthening exercises, step by step',
      keyFact:
        'Older adults who followed a supervised program that got harder over three months gained up to 36 percent in toe strength, while a home program did not change it (Mickle and colleagues, 2016).',
      paragraphs: [
        'Toe strengthening works best as a ladder: control first, then grip, then load, then balance. Start where the checks above put you, and move up one step when the current one feels easy for two sessions in a row. Do the exercises barefoot. If any exercise takes your pain to **6/10 or more**, stop for the day.',
        'Walkito starts the toe and arch exercises (short foot, big toe lift, towel scrunch) at 3 sets of 8 with a 5 second hold, and the toe spread at 3 sets of 10. Those are starting doses. What likely matters most is making the work harder over time.',
      ],
      table: {
        caption: 'A four-step toe strength progression',
        head: ['Step', 'Exercises', 'Starting dose', 'Move up when'],
        rows: [
          ['1. Control', 'Toe yoga (big toe lift), toe spread', '3 x 8, 5 second hold; toe spread 3 x 10', 'Each toe moves on its own, without cramping'],
          ['2. Grip', 'Towel scrunch, short foot (seated)', '3 x 8, 5 second hold', 'Two sessions feel easy'],
          ['3. Load', 'Towel scrunch with a weight on the towel, seated toe press', '3 x 8, 5 second hold', 'You can add weight and keep good form'],
          ['4. Standing', 'Short foot standing, one-leg stand', '3 x 8; one-leg stand 3 x 20 seconds', 'Holds feel steady on both feet'],
        ],
      },
      exercises: [
        {
          name: 'Big toe lift (toe yoga)',
          evidence: { level: 'early', why: 'MRI shows it works the small foot muscles. It has not been tested on its own for strength, balance or pain.' },
          dose: 'Walkito starts at 3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with feet flat. Lift only the big toe while the four smaller toes press down. Hold, lower, then reverse: big toe down, small toes up. Full technique on the [big toe lift](/exercises/big-toe-lift/) page.',
          often: 'Most sessions at step 1',
          feel: 'Effort under the ball of the foot as the small toes press',
          stop: 'Pain reaches 6/10, or a cramp that does not ease',
          media: 'big_toe_lift',
          caption: 'Big toe lift: only the big toe rises',
          alt: 'A seated figure lifting the big toe while the four smaller toes stay flat on the floor',
        },
        {
          name: 'Toe spread',
          evidence: { level: 'early', why: 'Works the muscles that pull the toes apart. No outcome trial on its own.' },
          dose: 'Walkito starts at 3 sets of 10, each foot',
          how: 'Feet flat, spread all five toes as wide as you can without lifting them, hold for a moment, relax. See the [toe spread](/exercises/toe-spread/) page for cues if the toes will not separate.',
          often: 'Most sessions at step 1',
          feel: 'Work along the inner and outer edges of the foot',
          stop: 'Pain reaches 6/10',
          media: 'toe_spread',
          caption: 'Toe spread: wide gaps, toes stay down',
          alt: 'A seated figure spreading the toes of one foot apart on the floor',
        },
        {
          name: 'Towel scrunch',
          evidence: { level: 'early', why: 'Toe curls against resistance are a common part of foot strengthening programs, but the towel scrunch has not been tested on its own.' },
          dose: 'Walkito starts at 3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with a towel flat under your foot. Curl the toes to pull the towel toward you, hold, release. To load it at step 3, put a book or a small weight on the far end of the towel. More on the [towel scrunch](/exercises/towel-scrunch/) page.',
          often: 'Steps 2 and 3',
          feel: 'Work under the arch and toes',
          stop: 'Pain reaches 6/10, or a cramp in the arch',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: curl the toes to pull the towel in',
          alt: 'A seated figure curling the toes to gather a towel on the floor',
        },
        {
          name: 'Short foot exercise',
          evidence: { level: 'early', why: 'Muscle imaging shows it works the small arch muscles. It has not been tested as a toe strength exercise on its own.' },
          dose: 'Walkito starts at 3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with the foot flat. Draw the ball of the foot toward the heel so the arch lifts, without curling the toes. Hold, then relax. Once easy, do it standing. The [short foot exercise](/exercises/short-foot-exercise/) page covers the standing and one-leg versions.',
          often: 'Steps 2 and 4',
          feel: 'The arch lifting while the toes stay long',
          stop: 'Pain reaches 6/10',
          media: 'short_foot_seated',
          caption: 'Short foot: the arch lifts, the toes stay flat',
          alt: 'A seated figure lifting the arch of one foot while the toes stay flat on the floor',
        },
        {
          name: 'Seated toe press',
          evidence: { level: 'early', why: 'A simple way to add load. Resistance that grew over time was the key part of the trial that raised toe strength, but this exact exercise was not tested.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with the foot flat. Press the big toe, then all five toes, firmly into the floor without curling them, and hold. To make it harder, lean your weight forward over the foot or press against a firm cushion.',
          often: 'Step 3',
          feel: 'Strong effort under the toes and the ball of the foot',
          stop: 'Pain reaches 6/10',
        },
        {
          name: 'One-leg stand',
          evidence: { level: 'early', why: 'Better toe strength went with better one-leg balance in older adults, but balance training alone was not the tested toe program.' },
          dose: 'Walkito starts balance work at 3 holds of 20 seconds, each leg',
          how: 'Stand on one foot near a wall, look at one point on the wall and let the toes do the correcting. Do not grip the floor so hard the toes turn white. See [single-leg balance](/exercises/single-leg-balance/).',
          often: 'Step 4',
          feel: 'Toes pressing and relaxing to keep you steady',
          stop: 'Pain reaches 6/10, or you feel unsafe',
          media: 'single_leg_hold',
          caption: 'One-leg stand: the toes make the small corrections',
          alt: 'A figure balancing on one leg beside a wall',
        },
      ],
      cites: [CITE.mickleToe, CITE.gooding, CITE.quinlanToeBalance],
    },
    {
      h2: 'Do toe strengthening exercises actually work?',
      keyFact:
        'In a trial of 118 recreational runners, those who did not do the foot program were 2.42 times as likely to be injured over a year (Taddei and colleagues, 2020).',
      paragraphs: [
        'Toe strengthening exercises can build toe strength, but only when the work gets harder over time. In a 2016 trial, 85 adults aged 60 to 90 were split between a supervised program with resistance that grew over three months and a home exercise program. The supervised group gained up to 36 percent in toe strength and stood longer on one leg. The home group, and a separate control group of 32 people, showed no change in toe strength. The authors said a trial counting falls was still needed.',
        'Runners respond too. In a 2019 trial of 57 runners, both a foot strengthening program done at least five times a week and a switch to walking in minimalist shoes (thin, flat, flexible shoes) increased foot muscle size and strength over two months, while the control group stayed the same. Some muscles were already larger within a month. If you are curious about the shoe route, see [barefoot shoes](/barefoot-shoes/).',
        'For injuries, the strongest single result comes from a 2020 trial of 118 recreational runners. Those who did not get the foot and ankle program were 2.42 times as likely to have a running injury over 12 months as those who did. It is one trial, and the program trained the whole foot and ankle, not only the toes. Runners can read more in [heel pain in runners](/heel-pain-runners/).',
        'The wider picture is less certain. A 2022 review rated the evidence that foot muscle training improves dynamic balance as very low certainty. A 2025 review of 16 trials in older people found that foot and ankle exercises improved ankle strength and balance with the eyes open, but the two trials that counted falls found no clear effect. That review did note that toe strengthening exercises and training three times a week both seemed to matter for balance.',
      ],
      sourceNote:
        'Mickle 2016: 43 supervised, 42 home, 32 non-randomized controls; 80 percent of intervention participants completed follow-up. Ridge 2019: foot muscle size by ultrasound, strength by custom dynamometers. Taddei 2020: control group 2.42 times (95% CI 1.98 to 3.62) more likely to have a running-related injury within 12 months. Liang 2025: 16 papers, 651 participants, GRADE low to very low.',
      cites: [CITE.mickleToe, CITE.ridgeMinimalist, CITE.taddeiRRI, CITE.willemseFootMuscle, CITE.liangFootAnkle],
    },
    {
      h2: 'Can toe exercises help prevent falls?',
      paragraphs: [
        'Toe exercises have not been shown to prevent falls on their own. Weak toes go with falls in cohort studies, and training can raise toe strength, but we found no trial that tested a toe-only program with falls as the outcome.',
        'The closest test is a 2011 trial of 305 older people with disabling foot pain. Half got a package of foot orthoses, footwear advice with a shoe voucher, a home foot and ankle exercise program and a falls booklet. They had 36 percent fewer falls over 12 months than people who got routine podiatry care. The share of people who fell at least once did not differ clearly. Because exercise was only one part of the package, the trial cannot say how much the exercises themselves did.',
        'If you have already had a fall or feel unsteady, toe work is a sensible add-on, but a falls assessment with a clinician should come first. The exercises on this page are not a falls prevention program.',
      ],
      sourceNote: 'Spink 2011: incidence rate ratio 0.64 (95% CI 0.45 to 0.91); proportion of fallers RR 0.85 (0.66 to 1.08).',
      cites: [CITE.spinkFalls, CITE.mickleFalls, CITE.menzFalls],
    },
    {
      h2: 'How often should you do toe strengthening exercises?',
      paragraphs: [
        'Toe strengthening exercises are usually done three to five times a week. The 2025 review of trials in older people found that training three times a week seemed to matter for balance, and the 2019 runners trial used at least five sessions a week. Sessions can be short, five to ten minutes is plenty for the toe and arch work.',
        'Expect a few months, not a few sessions: the studies above measured their main gains after two to three months. Retest yourself with the home checks above about once a month so you can see what is changing.',
        'If your toes are bent or stiff, start with [hammer toe exercises](/hammer-toe-exercises/) or [bunion exercises](/bunion-exercises/), which cover those shapes. For a wider plan that adds the calf and ankle, see [foot strengthening exercises](/foot-strengthening-exercises/).',
      ],
      cites: [CITE.liangFootAnkle, CITE.ridgeMinimalist, CITE.mickleToe],
    },
  ],
  faq: [
    {
      q: 'What is the best exercise to strengthen your toes?',
      cites: [CITE.mickleToe],
      a: 'No single exercise has been shown to be best. The program that raised toe strength by up to 36 percent in older adults was supervised and used resistance that grew over three months, while a home program did not change toe strength. Harder work over time likely matters more than any one move. A good mix is the big toe lift and toe spread for control, then towel scrunches with added weight and the short foot exercise for strength.',
    },
    {
      q: 'Do weak toes cause balance problems?',
      cites: [CITE.quinlanToeBalance, CITE.mickleFalls],
      a: 'Weak toes go with poorer balance, at least in people over 60. A 2020 review found the link in all nine studies it included, and a study of 312 older adults found that people who fell over a year had weaker big toes and smaller toes. These studies show a link, not proof that weak toes cause the problem.',
    },
    {
      q: 'How do I test my toe strength at home?',
      cites: [CITE.soysaFootStrength],
      a: 'Try the paper grip test. Sit barefoot, place a business card under your big toe, press down and have someone try to slide it out, then repeat under the four smaller toes. Holding it is a pass. It is a rough screen: research still has no single agreed toe strength test. Compare your feet and repeat the check about once a month.',
    },
    {
      q: 'How long does it take to strengthen your toes?',
      cites: [CITE.ridgeMinimalist, CITE.mickleToe],
      a: 'In studies, the main gains were measured after two to three months. Runners who trained their feet at least five times a week gained foot muscle size and strength over two months, with some muscles larger within a month. Older adults in a supervised program gained up to 36 percent toe strength over three months. Your pace will depend on where you start and how steadily you train.',
    },
    {
      q: 'Can toe exercises help plantar fasciitis?',
      cites: [CITE.allenGross, CITE.sullivanHeel, CITE.guideline],
      a: 'They may help as one part of a plan. People with plantar heel pain had weaker toe flexors than people without it in two studies, but it is unclear whether the weakness came first. The 2023 heel pain guideline grades calf and plantar fascia stretching A and strength training B, so do toe work alongside those, not in place of them.',
    },
    {
      q: 'Are toe exercises good for runners?',
      cites: [CITE.taddeiRRI],
      a: 'There is promising evidence. In a 2020 trial of 118 recreational runners, those who did not do a foot and ankle strengthening program were 2.42 times as likely to get a running injury over 12 months. It is a single trial and the program trained the whole foot and ankle, so think of toe work as one piece of a runner\'s strength routine.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'one foot or one set of toes has become weak quickly, the weakness is getting worse, or it comes with back pain or pain running down the leg',
      'you catch your toes or trip because the front of the foot will not lift (foot drop)',
      'there is numbness, tingling or burning in the feet, or you have diabetes and reduced feeling in your feet',
      'your toes are bent and stiff and cannot be straightened by hand',
      'you have fallen in the past year or feel unsteady on your feet',
      'there is sudden pain, swelling or bruising in a toe after an injury',
      'a toe or the foot is red, hot and swollen, or a toe turns pale, blue or cold',
      'toe or arch cramps keep coming back and do not ease with rest',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito includes the big toe lift, toe spread, towel scrunch and short foot exercise, and moves an exercise up a level once your last two sessions with it felt easy and pain did not rise. Toe and arch work starts at 3 sets of 8 with a 5 second hold, inside sessions of 3, 5 or 10 minutes, on 3, 5 or 7 days a week.',
    more: [
      'Every 14 days at first, a short test checks calf endurance, arch hold and balance. It does not measure toe strength directly, so the home checks on this page are still worth doing. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Toe strengthening',
  campaign: 'guide-toe-strength',
};
