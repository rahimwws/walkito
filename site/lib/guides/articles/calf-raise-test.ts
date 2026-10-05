import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * silbernagelHeelRise
 *   Silbernagel KG, Nilsson-Helander K, Thomeé R, Eriksson BI, Karlsson J.
 *   A new measurement of heel-rise endurance with the ability to detect
 *   functional deficits in patients with Achilles tendon rupture.
 *   Knee Surgery, Sports Traumatology, Arthroscopy. 2010;18(2):258–264.
 *   doi: 10.1007/s00167-009-0889-7 | PMID: 19690833 | validation study (RCT cohort)
 *
 * lunsfordPerry
 *   Lunsford BR, Perry J. The standing heel-rise test for ankle plantar
 *   flexion: criterion for normal. Physical Therapy. 1995;75(8):694–698.
 *   doi: 10.1093/ptj/75.8.694 | PMID: 7644573 | cross-sectional normative study
 */

export const CALF_RAISE_TEST_EN: Guide = {
  lang: 'en',
  page: 'calfRaiseTest' as any,
  mainSource: CITE.hebertLosier,
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Calf Raise Test: Norms by Age, Protocol, Results',
  description:
    'The single-leg calf raise test measures calf endurance. See the protocol, normative values by age and sex, what your score means, and how to improve it.',
  h1: 'Calf raise test: how many should you do, and what does your score mean?',
  lede:
    'The single-leg calf raise test, also called the heel-rise test, measures the endurance of your calf muscles. You stand on one foot and rise onto your toes as many times as you can at a set pace. The count tells you how much fatigue-resistant strength the calf has on each side, which matters for walking, running, and recovering from heel or Achilles injuries.',
  intro: [
    'A 2017 study of 566 healthy adults found an overall median of about 23 to 24 repetitions per leg, shifting by age, sex, and activity level. This page covers the research protocol, a home version, normative values by age, what a left-right gap means, and how the test connects to heel pain and running.',
  ],
  takeaways: [
    'The overall median for healthy adults is 24 repetitions on the right leg and 23 on the left, from a study of 566 people aged 20 to 81 (Hebert-Losier and colleagues, 2017).',
    'Males completed more repetitions than females overall (median 24 vs 21), but females over 60 outperformed males of the same age (Hebert-Losier and colleagues, 2017).',
    'A left-right difference above 10 percent is the standard threshold for a meaningful asymmetry in lower-limb rehabilitation (Silbernagel and colleagues, 2010).',
    'The test has excellent reliability: ICC of 0.96, typical measurement error of about two repetitions (Hebert-Losier and colleagues, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What does the single-leg calf raise test measure?',
      paragraphs: [
        'The test measures the endurance of the plantar flexors, the muscles that push the foot down and lift the heel off the ground. The main muscles are the gastrocnemius (the bigger outer calf muscle) and the soleus (the deeper one underneath it). Together they connect to the heel bone through the Achilles tendon.',
        'Endurance here means how many repetitions you can complete before the calf fatigues and the heel can no longer rise high enough or keep pace. The count captures the ability to sustain work over dozens of cycles, which is closer to what the calf does during walking and running than a single heavy push.',
        'Clinicians use the test to track recovery from Achilles tendon ruptures, to screen for calf weakness in people with heel pain or shin splints, and to compare one leg to the other. Athletes with medial tibial stress syndrome (shin splints) had lower calf endurance than healthy controls in a case-control study of 20 athletes.',
      ],
      cites: [CITE.hebertLosier, CITE.madeley],
    },
    {
      h2: 'How is the heel-rise test done? The research protocol',
      paragraphs: [
        'The protocol from Hebert-Losier 2017 is the most widely cited version and the source of the normative values on this page. In that study, 566 healthy adults aged 20 to 81 performed single-leg heel rises to fatigue on each leg.',
        'The subject stands barefoot or in flat shoes on a 10-degree incline board, one foot at a time. Fingertip support at shoulder height on a wall is allowed for balance only. A metronome is set to 60 beats per minute: one beat up, one beat down, so each full rep takes two seconds. The instruction is to raise the heel as high as possible, keeping the knee straight and the trunk upright.',
        'The test stops when the heel can no longer lift off the board, the metronome pace can no longer be followed, the knee bends or trunk leans, or the person presses into the wall rather than using fingertip touch. One verbal reminder is given before termination. The warm-up is 10 minutes of brisk walking followed by 10 bilateral heel rises. Two minutes of rest separate legs.',
      ],
      sourceNote:
        'Hebert-Losier 2017: ICC 0.96 (right) and 0.96 (left); mean between-day difference 0.2 reps (95% LOA -6.2 to 6.5) on the right and 0.1 reps (95% LOA -6.1 to 6.2) on the left.',
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'How to do the calf raise test at home',
      paragraphs: [
        'You do not need an incline board. Standing on flat ground gives a slightly easier test, so your count may be a few reps higher than the published norms. That is fine for tracking change over time and comparing left to right.',
        'Stand near a wall with your fingertips touching it at shoulder height. Lift one foot. Set a metronome app to 60 beats per minute. On the first beat, rise onto your toes as high as you can. On the second beat, lower your heel back to the floor. Keep going until you cannot maintain the pace, your heel barely lifts, or your knee bends.',
        'Count the total reps. Rest two minutes, then repeat on the other leg. Write down both numbers and the date. The typical measurement error is about two reps, so a small shift between test days is noise. The trend over weeks is what matters.',
      ],
      exercises: [
        {
          name: 'Single-leg calf raise test (home version)',
          dose: 'Max reps at 60 bpm, one set per leg',
          how: 'Stand on one foot near a wall, fingertips touching for balance. Rise onto your toes in one second, lower in one second, matching a 60 bpm metronome. Go until you cannot keep pace or your heel barely lifts. Count reps. Rest 2 minutes, repeat on the other leg.',
          feel: 'Increasing burn in the calf as reps build up',
          stop: 'You cannot lift the heel, cannot keep the metronome pace, or your knee bends',
          media: 'heel_raise_double',
          caption: 'Calf raise test: rise as high as you can on each beat, fingertip support for balance',
          alt: 'A figure rising onto the toes of one foot with fingertips on a wall for balance',
        },
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'How many single-leg calf raises should you be able to do?',
      paragraphs: [
        'The table below shows the median number of single-leg heel-rise repetitions by age and sex, from Hebert-Losier 2017. These are model estimates for a person with a moderate physical activity level (level 4 on a 6-point scale) and a body mass index of 24.2, averaged across both legs.',
        'Higher activity levels add roughly five to nine reps to the median. In 1995, Lunsford and Perry tested 203 adults aged 20 to 59 and recommended 25 repetitions as the criterion for normal performance. The Hebert-Losier data support that figure as a reasonable adult reference, though it is a population-level median, not a pass-fail line. Your own baseline and the direction of change matter more than any single number.',
      ],
      table: {
        caption: 'Median single-leg heel-rise repetitions by age and sex (Hebert-Losier 2017)',
        head: ['Age', 'Males', 'Females'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
          ['70', '15', '16'],
          ['80', '10', '14'],
        ],
      },
      sourceNote:
        'Model estimates for BMI 24.2 and physical activity level 4. Values are the average of left and right sides, rounded to the nearest integer. From Table 4 of Hebert-Losier 2017 (n = 566).',
      cites: [CITE.lunsfordPerry, CITE.hebertLosier],
    },
    {
      h2: 'Should your left and right leg score the same?',
      paragraphs: [
        'Close to the same, yes. In the Hebert-Losier study, the median difference between right and left was one repetition, and the typical measurement error was about two reps. A gap that small is noise.',
        'In lower-limb rehabilitation, a limb symmetry index (LSI) of 90 percent or higher is the standard benchmark for normal function. LSI is the weaker side divided by the stronger side, times 100. Below 90 percent means one side is more than 10 percent weaker. Silbernagel and colleagues used this threshold in 78 patients after Achilles tendon rupture: at 6 months, patients averaged an LSI of 84 percent on repetitions and only 61 percent on total work, showing that counting reps alone can underestimate a deficit.',
        'Without an injury, a gap over 10 percent is worth noting and tracking. It does not mean something is wrong. But if the gap persists across several test sessions and you also have pain on the weaker side, it gives a clinician useful context.',
      ],
      cites: [CITE.hebertLosier, CITE.silbernagelHeelRise],
    },
    {
      h2: 'What does a low score mean, and what does it not mean?',
      paragraphs: [
        'A low calf raise count tells you the calf on that side fatigues earlier than the population median for your age, sex and activity level. It does not tell you why. Deconditioning, a recent injury, an Achilles tendon problem, pain avoidance, or unfamiliarity with the test can all produce a low count.',
        'The test is not a diagnosis. A score of 15 in a 30-year-old male does not mean he has plantar fasciitis or Achilles tendonitis. It means his calf endurance is below the median of 33 for that group. A clinician combines the count with other findings to decide whether the number explains a symptom. The test is more informative as a trend than a single data point: going from 14 to 22 over two months is a clearer signal than any one number compared to a table.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'How does calf endurance relate to heel pain, Achilles problems and running?',
      paragraphs: [
        'The calf and the plantar fascia are connected through the heel bone. The Achilles tendon pulls on the back; the fascia pulls on the bottom. Weak or fatigable calves put more strain on both with every step.',
        'The 2023 heel pain guideline gives calf and plantar fascia stretching its top grade, A, and strength training a grade of B. The Rathleff trial that tested loaded heel raises for plantar fasciitis used a calf raise as its main exercise, and participants improved pain scores faster than with stretching alone over three months. See [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) for the full protocol.',
        'For Achilles tendonitis, the heel-rise test is one of the standard outcome measures. Patients with mid-portion Achilles tendinopathy (pain in the middle of the tendon, not at the heel bone) typically show reduced calf endurance on the affected side. See [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) for eccentric work.',
        'For running, the calf absorbs two to three times body weight on every stride. A calf that fatigues early shifts load to the knee, shin and foot. Building the score up can be part of a return-to-running plan. See [heel pain and running](/heel-pain-runners/) for the bigger picture.',
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.achillesGuideline, CITE.madeley],
    },
    {
      h2: 'How to improve a low calf raise score',
      paragraphs: [
        'The exercises that build calf endurance for rehab are the same ones that raise your test score. Start at the level that matches where you are now, and move up once two sessions in a row feel easy.',
        'If you can do fewer than 10 single-leg raises, start with seated or double-leg standing raises. Move to a heel raise hold to build isometric endurance, then to single-leg raises on the floor. Adding a step increases range. Adding a backpack increases load. See [calf raises](/exercises/calf-raises/) for the basic movement, [towel heel raise](/exercises/towel-heel-raise/) for the version that also loads the plantar fascia, and [eccentric heel drops](/exercises/eccentric-heel-drops/) for the Achilles-focused variant.',
      ],
      exercises: [
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'Guideline grade B for strength work. A stepping stone to single-leg loaded raises.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load.',
          feel: 'The calves working together',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Double-leg heel raises: rise straight up, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raise hold',
          evidence: { level: 'moderate', why: 'Guideline grade B. Isometric hold builds time under tension at end range.' },
          dose: '3 holds of 20 seconds, both feet',
          how: 'Rise onto your toes on both feet, then hold still at the top. Do not sink back down. Holding loads the calf without the bounce of a full rep.',
          feel: 'The calves working to stay still',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay at the top',
          alt: 'A figure holding a raised position on both feet, the calves highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },

  ],
  faq: [
    {
      q: 'How many calf raises should I be able to do?',
      cites: [CITE.hebertLosier],
      a: 'The overall median in a study of 566 healthy adults was about 23 to 24 repetitions per leg. Males scored a median of 24, females 21. The count drops by about four to five reps per decade of age. Higher activity levels add five to nine reps. Use these as reference points for tracking progress, not a pass-fail line (Hebert-Losier 2017).',
    },
    {
      q: 'Is the calf raise test the same as the heel-rise test?',
      a: 'Yes. "Heel-rise test" is the name used in the research literature. "Calf raise test" is more common outside of clinics. The movement is the same: single-leg toe raises to fatigue at a set pace.',
    },
    {
      q: 'What is a good single-leg calf raise test score by age?',
      cites: [CITE.hebertLosier],
      a: 'For a moderately active person: about 37 for a 20-year-old male (30 female), 28 for a 40-year-old male (25 female), and 19 for a 60-year-old of either sex. Activity level shifts these medians by five to nine reps (Hebert-Losier 2017).',
    },
    {
      q: 'How often should I retest?',
      a: 'Every two to four weeks is enough to see meaningful change without over-testing. The research retested one week apart and found excellent reliability. Walkito retests every 14 days while the calf goal is active, then every 28 days once reached.',
    },
    {
      q: 'What does it mean if one leg is much weaker than the other?',
      cites: [CITE.silbernagelHeelRise],
      a: 'A gap above 10 percent is commonly flagged in rehabilitation as a potential deficit. In healthy adults the typical difference is one to two reps. A persistent gap with pain on the weaker side is a reason to see a clinician. Without pain, track and train it (Silbernagel 2010).',
    },
    {
      q: 'Do I need a metronome for the test?',
      a: 'The research protocol uses a metronome at 60 beats per minute. Free metronome apps work well. Without one, count "one-thousand" on the way up and down. Your count will be less comparable to the published norms, but consistency in how you do the test matters more than matching the research setup exactly.',
    },
    {
      q: 'Can a calf raise test diagnose plantar fasciitis or Achilles tendonitis?',
      a: 'No. A low score tells you the calf fatigues early, not why. Plantar fasciitis, Achilles tendonitis, deconditioning, and recent injury can all produce a low count. Clinicians combine the result with a physical exam and history. The test measures calf endurance, not a specific condition.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the calf or Achilles is swollen, warm, or tender to touch, which could indicate an acute tear or tendon problem',
      'you felt a sudden pop or snap in the calf during activity',
      'you cannot put weight on the foot or you are limping',
      'pain is sharp and localized rather than a general ache',
      'there is numbness, tingling or burning in the foot or lower leg',
      'the test reproduces the exact pain you are trying to assess, at more than mild intensity',
      'you have a known Achilles tendon rupture or recent surgery',
      'one calf is visibly smaller than the other and you have not seen a clinician about it',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito runs the single-leg calf raise test every 14 days and tracks both legs. The calf goal is 25 single-leg raises. The symmetry goal is a left-right gap under 10 percent. The app computes the gap as the difference between the stronger and weaker side, divided by the stronger side. Once both goals are met, the test widens to every 28 days and the plan shifts to the next active goal.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. The calf work starts with seated raises and moves up through double-leg, hold, towel, eccentric drops and pogo hops at your own pace. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  crumb: 'Calf raise test',
  campaign: 'calf-raise-test',
};
