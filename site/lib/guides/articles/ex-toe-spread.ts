import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * gooding | Gooding TM, Feger MA, Hart JM, Hertel J. Intrinsic Foot Muscle Activation During Specific Exercises: A T2 Time Magnetic Resonance Imaging Study. Journal of Athletic Training. 2016;51(8):644-650. | 10.4085/1062-6050-51.10.07 | 27690528 | descriptive laboratory study
 *
 * mcKeon | McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. British Journal of Sports Medicine. 2015;49(5):290. | 10.1136/bjsports-2013-092690 | 24659509 | narrative review
 */

export const EX_TOE_SPREAD: Guide = {
  lang: 'en',
  page: 'exToeSpread',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Toe Spread Exercise: How to Splay Your Toes',
  description:
    'How to do the toe spread exercise to splay your toes: technique, sets and reps, what muscles it works, who it helps, and what MRI research shows.',
  h1: 'Toe spread exercise: how to splay your toes for foot strength',
  lede:
    'The toe spread exercise trains the muscles that fan the toes apart. You spread all five toes as wide as they go, hold, then release. It targets the abductor hallucis on the inner side and the abductor digiti minimi on the outer side, the same muscles that support both edges of the arch. It shows up in programs for flat feet, bunions and general foot strength.',
  takeaways: [
    'A 2016 MRI study found the toe spread exercise produced the highest mean activation (35.2%) in the abductor digiti minimi, the muscle that supports the outer arch, out of four intrinsic foot exercises tested (Gooding and colleagues, 2016).',
    'A 2016 MRI study found the toe spread exercise produced its second-highest mean activation (31.5%) in the adductor hallucis oblique, a muscle on the inner side of the big toe joint (Gooding and colleagues, 2016).',
    'The toe spread exercise is part of the broader intrinsic foot muscle training model described in a 2015 narrative review, alongside the short foot exercise and first-toe extension (McKeon and colleagues, 2015).',
    'Most people cannot spread their toes well at first. The ability improves with practice over several weeks.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is the toe spread exercise?',
      paragraphs: [
        'The toe spread exercise, also called toe splay or the toes-spread-out exercise, is an active movement where you fan all five toes apart as far as they go, hold the spread, and then bring them back together. It works the muscles that abduct the toes, meaning the muscles that pull them sideways away from each other.',
        'This is different from the [short foot exercise](/exercises/short-foot-exercise/), which lifts the arch without moving the toes, and different from [towel scrunches](/exercises/towel-scrunch/), which flex the toes. The toe spread moves the toes sideways, in the horizontal plane. The movement looks simple, but many people find it surprisingly difficult to control.',
      ],
    },
    {
      h2: 'How do you do the toe spread exercise?',
      paragraphs: [
        'Sit barefoot with your feet flat on the floor. Spread all five toes apart as wide as you can, as though you are trying to put space between every toe. Hold the widest position, then relax. That is one rep.',
        'The lift is not the point. Keep the toes on the floor and focus on spreading outward. Do not press the toes down or curl them. If only a few toes move, that is normal at the start. The big toe and the little toe usually move first. The middle three toes often follow once the muscles get stronger.',
      ],
      exercises: [
        {
          name: 'Toe spread',
          evidence: { level: 'early', why: 'MRI shows it activates intrinsic foot muscles (Gooding 2016). Not tested as a standalone treatment in a controlled outcome trial.' },
          dose: 'Walkito starts at 3 sets of 10, hold 5 seconds, both feet',
          how: 'Sit with your feet flat on the floor. Spread all five toes apart as wide as they go. Hold for five seconds, then relax. The toes stay on the floor.',
          often: 'Strength days, alternating with other foot exercises',
          feel: 'Effort in the small muscles on the inner and outer edges of the foot',
          stop: 'Pain reaches 6/10',
          media: 'toe_spread',
          caption: 'Toe spread: spread the toes as wide as they go, and hold',
          alt: 'A seated figure spreading all five toes apart with the foot flat on the floor',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'What muscles does the toe spread exercise work?',
      keyFact: 'A 2016 MRI study found toe spreads activated the abductor hallucis at only 18.9 percent, compared with 29.7 percent during the short foot exercise, in the same small group of athletes (Gooding and colleagues, 2016).',
      paragraphs: [
        'The toe spread targets two muscles in particular. The abductor hallucis runs along the inner edge of the foot and pulls the big toe inward (toward the midline of the body). It is also one of the main supporters of the medial longitudinal arch. The abductor digiti minimi runs along the outer edge and pulls the little toe outward.',
        'A 2016 MRI study by Gooding and colleagues tested four intrinsic foot exercises and measured activation in each muscle. The toe spread exercise produced its highest activation in the abductor digiti minimi (35.2%), followed by the adductor hallucis oblique (31.5%) and the flexor digiti minimi (30.2%). Activation of the abductor hallucis during toe spreads (18.9%) was lower than during the short foot exercise (29.7%).',
        'This means the toe spread and the [short foot exercise](/exercises/short-foot-exercise/) complement each other. The short foot targets the muscles that run along the arch. The toe spread targets the muscles at the edges. Together they cover more of the intrinsic foot muscle group.',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Who benefits from toe spread exercises?',
      paragraphs: [
        'People with flat feet benefit because the toe spread activates several of the small muscles that share the job of holding up the arch alongside the abductor hallucis. People with bunions (hallux valgus) may benefit because the exercise trains muscles that pull the big toe away from the other toes, countering the inward drift of a bunion. A separate EMG study in people with mild bunions found higher abductor hallucis activity during toe spreads than during short foot exercises, though that study is not yet part of this site\'s citation list.',
        'Runners and people who spend long hours on their feet can use the toe spread as part of a foot-strengthening routine. Toes that can spread share load more evenly across the forefoot during push-off. If your toes are cramped from narrow shoes, the exercise helps restore range of motion.',
        'For a broader program, see [flat feet exercises](/flat-feet-exercises/) or [ball-of-foot pain](/ball-of-foot-pain/).',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Common mistakes with the toe spread exercise',
      paragraphs: [
        'Lifting the toes off the floor instead of spreading them sideways is the most common mistake. The goal is horizontal spread, not vertical lift. Keep the toes lightly touching the ground.',
        'Another mistake is curling the toes while trying to spread. This happens when the brain cannot yet separate the spreading movement from the flexion movement. It improves with practice. Try spreading while looking at your toes so you can see what is actually happening.',
        'Some people find that only the big toe and little toe move at first while the middle three stay stuck together. That is normal. The middle toes have less independent muscle control. Over several weeks of practice, the spread gets wider.',
        'Do not force the spread to the point of cramping. If the foot cramps, stop, massage the area briefly, and try again with fewer reps.',
      ],
    },
    {
      h2: 'What does the research say about toe spreads?',
      paragraphs: [
        'The toe spread exercise has been studied primarily through MRI and EMG, which measure muscle activation during the exercise. A 2016 MRI study by Gooding and colleagues confirmed it activates all four intrinsic plantar muscles tested. The activation level was comparable to the short foot exercise for most muscles and higher for the abductor digiti minimi.',
        'What the research has not done yet is test the toe spread as a standalone treatment in a randomized trial measuring patient outcomes like pain or arch height over weeks or months. It appears as part of combined programs in flat-feet trials, but the individual contribution of the toe spread cannot be separated from the other exercises in those studies.',
        'The evidence supports it as a useful exercise for activating the intrinsic foot muscles. Whether it changes foot structure on its own is not yet known. Related exercise pages: [short foot exercise](/exercises/short-foot-exercise/), [big toe lift](/exercises/big-toe-lift/), [towel scrunch](/exercises/towel-scrunch/).',
      ],
      cites: [CITE.gooding, CITE.brijwasi],
    },
  ],
  faq: [
    {
      q: 'How many toe spreads should I do?',
      a: 'Walkito starts at 3 sets of 10 repetitions with a 5-second hold. That is enough to fatigue the muscles without cramping. If your foot cramps before finishing a set, reduce the hold time or the number of reps and build up over a few sessions.',
    },
    {
      q: 'Do toe spreads help with bunions?',
      a: 'Toe spreads train muscles that pull the big toe away from the other toes, which is the opposite direction from how a bunion drifts. MRI research confirms the exercise activates those muscles (Gooding and colleagues, 2016). No trial has tested whether toe spreads prevent bunion progression, but strengthening the muscles is a reasonable part of a broader approach.',
    },
    {
      q: 'Why can I not spread my toes?',
      a: 'Years of wearing narrow shoes and not using the toe abductor muscles lead to poor neural control. The muscles are still there, but the brain has lost the habit of activating them independently. Regular practice, even for a few minutes a day, usually restores some spread within a few weeks.',
    },
    {
      q: 'Are toe spacers the same as toe spread exercises?',
      a: 'No. Toe spacers hold the toes apart passively. Toe spread exercises make you actively contract the muscles that pull the toes apart. Active muscle contraction is what builds strength. Spacers can help with comfort and alignment but do not strengthen the muscles on their own.',
    },
    {
      q: 'Should I do toe spreads or short foot exercises?',
      cites: [CITE.gooding],
      a: 'Both, ideally. MRI research shows they activate the foot\'s small muscles somewhat differently: the toe spread works the abductor digiti minimi most on the outer edge, while the short foot exercise works the abductor hallucis most along the inner arch (Gooding 2016). Together they cover more of the intrinsic foot muscle group.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'a toe joint is red, swollen or hot',
      'you have numbness or tingling in the toes',
      'the big toe has drifted significantly toward the second toe and causes pain when walking',
      'foot pain is getting worse despite regular exercise over several weeks',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito schedules toe spreads on strength days alongside other intrinsic foot exercises. The plan alternates them with the short foot exercise and band turn-ins so the foot muscles get varied work without overloading on one movement. You pick sessions of 3, 5 or 10 minutes.',
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Toe spread (toe splay)',
  campaign: 'ex-toe-spread',
};
