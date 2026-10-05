import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * lynn | Lynn SK, Padilla RA, Tsang KK. Differences in static- and dynamic-balance task performance after 4 weeks of intrinsic-foot-muscle training: the short-foot exercise versus the towel-curl exercise. Journal of Sport Rehabilitation. 2012;21(4):327-333. | 10.1123/jsr.21.4.327 | 22715143 | RCT
 *
 * jung | Jung D, Kim M, Koh E, Kwon O, Cynn H, Lee W. A comparison in the muscle activity of the abductor hallucis and the medial longitudinal arch angle during toe curl and short foot exercises. Physical Therapy in Sport. 2011;12(1):30-35. | 10.1016/j.ptsp.2010.08.001 | 21256447 | cross-sectional laboratory study
 *
 * mcKeon | McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. British Journal of Sports Medicine. 2015;49(5):290. | 10.1136/bjsports-2013-092690 | 24659509 | narrative review
 */

export const EX_TOWEL_SCRUNCH: Guide = {
  lang: 'en',
  page: 'exTowelScrunch',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Towel Scrunch: How to Do Towel Curls for Your Feet',
  description:
    'How to do the towel scrunch (towel curls) for stronger feet: step-by-step technique, sets and reps, what muscles it works, common mistakes, and how it compares to the short foot exercise.',
  h1: 'Towel scrunch: how to do towel curls for foot strength',
  lede:
    'The towel scrunch is an exercise where you pull a towel toward you using only your toes. It targets the small muscles under the arch and the toe flexors. It is one of the oldest and simplest foot-strengthening exercises in rehabilitation, and it appears in exercise programs for flat feet, plantar fasciitis and ball-of-foot pain.',
  takeaways: [
    'Towel scrunches activate the intrinsic foot muscles, but EMG research shows they also recruit the long toe flexors (extrinsic muscles) more than the short foot exercise does (Jung and colleagues, 2011).',
    'In a 2012 RCT of healthy adults, a four-week towel curl group improved balance less than a short foot exercise group, though both improved compared to baseline (Lynn and colleagues, 2012).',
    'A 2020 study of 30 people with primary metatarsalgia found that an eight-week toe exercise program including towel scrunches and marble pickups improved pain and toe grip strength compared to controls (Amaha and colleagues, 2020).',
    'The towel scrunch is easier to learn than the short foot exercise because the towel provides a clear target for the toes to grab.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is the towel scrunch exercise?',
      paragraphs: [
        'The towel scrunch, also called a towel curl, is a seated exercise where you place a towel flat on the floor under your foot and use your toes to grip and pull it toward you. The heel stays on the ground. The movement works the flexor muscles of the toes and the intrinsic muscles under the arch.',
        'It has been used in physical therapy for decades and appears in programs for [flat feet](/flat-feet-exercises/), [plantar fasciitis](/plantar-fasciitis-exercises/), and [ball-of-foot pain](/ball-of-foot-pain/). Because the movement is simple and needs only a towel, it is often the first foot-strengthening exercise people try.',
      ],
    },
    {
      h2: 'How do you do a towel scrunch?',
      paragraphs: [
        'Sit in a chair with your feet flat on the floor, barefoot. Lay a hand towel flat on the floor under one foot. Keep your heel firmly on the ground. Use your toes to grip the towel and pull it toward you, bunching it up under the arch. Then spread the toes to release and repeat.',
        'Each pull is one rep. Pull steadily, not in a quick snap. The heel does not lift. If the towel slides around too much, try a slightly heavier towel or place a small weight on the far end.',
      ],
      exercises: [
        {
          name: 'Towel scrunch',
          evidence: { level: 'early', why: 'Included in exercise programs tested for flat feet and metatarsalgia, but not isolated in a controlled trial on its own.' },
          dose: 'Walkito starts at 3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with a towel flat on the floor under your foot. Pull the towel in with your toes. Keep the heel down. Hold for five seconds, release, then repeat.',
          often: 'Every session while this is your level',
          feel: 'The small muscles under the arch working',
          stop: 'Pain reaches 6/10',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: pull the towel in with your toes, the heel stays down',
          alt: 'A seated figure pulling a towel toward the heel using the toes, the arch muscles highlighted',
        },
      ],
      cites: [CITE.amaha],
    },
    {
      h2: 'What muscles do towel scrunches work?',
      paragraphs: [
        'Towel scrunches work the toe flexor muscles: the flexor digitorum brevis (the short toe flexor inside the foot), the flexor hallucis brevis (the short big-toe flexor), and the quadratus plantae. These are intrinsic muscles. But the exercise also recruits the extrinsic toe flexors: the flexor digitorum longus and the flexor hallucis longus, which run from the shin through the ankle to the toes.',
        'An EMG study by Jung and colleagues (2011) compared muscle activity during towel curls and short foot exercises. They found the abductor hallucis, the muscle most responsible for holding the arch up, was over four times more active during the short foot exercise than during towel curls. The towel curl produced more activity in the extrinsic toe flexors instead.',
        'This means towel scrunches are a good exercise for toe grip strength, but they are less specific for the intrinsic arch muscles than the [short foot exercise](/exercises/short-foot-exercise/).',
      ],
      cites: [CITE.jung],
    },
    {
      h2: 'Towel scrunch vs short foot exercise: which is better?',
      paragraphs: [
        'Each exercise has a different strength. The towel scrunch is easier to learn because the towel gives your toes a clear target. Many people struggle to feel the short foot contraction at first. Towel scrunches build toe grip strength, which matters for balance and push-off during walking.',
        'The short foot exercise is better at isolating the intrinsic arch muscles. A 2015 review by McKeon and colleagues noted that the abductor hallucis was activated over four times more during the short foot exercise than during towel curls, and recommended the short foot as the primary intrinsic foot training exercise.',
        'In practice, programs that use both get the best of each. Walkito uses the towel scrunch as an early exercise that introduces the idea of foot muscle work. The [short foot exercise](/exercises/short-foot-exercise/) comes next and adds more specific arch training. Neither replaces the other.',
      ],
      cites: [CITE.mcKeon, CITE.jung],
    },
    {
      h2: 'Who benefits most from towel scrunches?',
      paragraphs: [
        'Towel scrunches suit people who are new to foot exercises and want a simple starting point. They also suit people with weak toe grip, because the exercise directly trains the ability to flex the toes under load.',
        'A 2020 study by Amaha and colleagues tested an eight-week toe exercise program (including towel scrunches and marble pickups) in 30 people with primary metatarsalgia, pain under the ball of the foot. The exercise group improved toe grip strength by a mean of 1.8 kg and reported less pain than the control group. Toe grip strength may also matter for older adults at risk of falls, since the toes help with balance during standing and walking.',
        'If your main goal is to raise a flat arch, the [short foot exercise](/exercises/short-foot-exercise/) and the broader [flat feet exercise program](/flat-feet-exercises/) are more targeted. If your main goal is toe grip and general foot muscle activation, towel scrunches are a good fit.',
      ],
      cites: [CITE.amaha],
    },
    {
      h2: 'Common mistakes with towel scrunches',
      paragraphs: [
        'The most common mistake is lifting the heel off the floor. When the heel lifts, the calf takes over and the foot muscles do less. Press the heel down throughout each rep.',
        'Another mistake is pulling too fast. A quick snatch of the towel uses momentum instead of muscle contraction. Pull slowly and hold the scrunch for the full five seconds before releasing.',
        'Some people grip only with the big toe and ignore the smaller toes. Try to use all five toes together. If the little toes will not cooperate at first, that is normal. The coordination improves with practice.',
        'Finally, do not let the foot slide sideways across the towel. The pull should be straight back, toes toward the heel. If the towel moves to one side, reposition and focus on even toe engagement.',
      ],
    },
  ],
  faq: [
    {
      q: 'How many towel scrunches should I do?',
      a: 'Walkito starts at 3 sets of 8 repetitions per foot, holding each scrunch for 5 seconds. That is enough to fatigue the small foot muscles without overloading them. Increase difficulty by adding a small weight to the far end of the towel rather than doing more reps.',
    },
    {
      q: 'Do towel scrunches help plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Towel scrunches are not part of the main plantar fasciitis guideline, which focuses on calf stretches and loaded heel raises. They can help build general foot muscle strength as part of a broader program. See [plantar fasciitis exercises](/plantar-fasciitis-exercises/) for the guideline-backed exercises.',
    },
    {
      q: 'Are towel scrunches good for flat feet?',
      cites: [CITE.brijwasi],
      a: 'Towel scrunches appear in flat-feet exercise programs alongside the short foot exercise, hip strengthening and stretching. A 2023 trial of 52 people found a combined program improved arch measures over six weeks (Brijwasi 2023). Towel scrunches alone have not been tested for flat feet in a controlled trial.',
    },
    {
      q: 'Can I use a sock instead of a towel?',
      a: 'A thin sock will work, but a hand towel gives more resistance and a better grip surface. The towel should lay flat and have enough length that you can pull it through several reps before running out of fabric. A kitchen towel or small bath towel is ideal.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your toe pain or foot pain followed an injury or a sudden snap',
      'you have numbness, tingling or burning in the toes or the ball of the foot',
      'a toe joint is red, swollen or hot, which can point to gout or infection',
      'your toes lock in a bent position and will not straighten',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito uses the towel scrunch as an early foot-strengthening exercise. Once it feels easy for two sessions in a row, the plan moves you to the short foot exercise and its seated-to-standing progression. You pick sessions of 3, 5 or 10 minutes, and a test every 14 days tracks arch hold time and calf endurance.',
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Towel scrunch (towel curls)',
  campaign: 'ex-towel-scrunch',
};
