import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * mcKeon | McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. British Journal of Sports Medicine. 2015;49(5):290. | 10.1136/bjsports-2013-092690 | 24659509 | narrative review
 *
 * gooding | Gooding TM, Feger MA, Hart JM, Hertel J. Intrinsic Foot Muscle Activation During Specific Exercises: A T2 Time Magnetic Resonance Imaging Study. Journal of Athletic Training. 2016;51(8):644-650. | 10.4085/1062-6050-51.10.07 | 27690528 | descriptive laboratory study
 *
 * lynn | Lynn SK, Padilla RA, Tsang KK. Differences in static- and dynamic-balance task performance after 4 weeks of intrinsic-foot-muscle training: the short-foot exercise versus the towel-curl exercise. Journal of Sport Rehabilitation. 2012;21(4):327-333. | 10.1123/jsr.21.4.327 | 22715143 | RCT
 *
 * jung | Jung D, Kim M, Koh E, Kwon O, Cynn H, Lee W. A comparison in the muscle activity of the abductor hallucis and the medial longitudinal arch angle during toe curl and short foot exercises. Physical Therapy in Sport. 2011;12(1):30-35. | 10.1016/j.ptsp.2010.08.001 | 21256447 | cross-sectional laboratory study
 */

export const EX_SHORT_FOOT: Guide = {
  lang: 'en',
  page: 'exShortFoot',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Short Foot Exercise: How to Do It and Progress',
  description:
    'How to do the short foot exercise: technique cues, sets and reps, seated to standing progression, mistakes to avoid, and what research shows.',
  h1: 'Short foot exercise: how to do it, sets, and progression',
  lede:
    'The short foot exercise trains the small muscles inside your foot to hold the arch up without curling the toes. You pull the ball of the foot toward the heel so the arch shortens and lifts. It is the exercise a 2015 narrative review called the foundation of "foot core" training, and it appears in most flat-feet and plantar fasciitis programs that target the intrinsic foot muscles.',
  takeaways: [
    'A 2016 MRI study of 8 athletes found the short foot exercise produced the highest mean activation (up to 34.9%) across three of the four intrinsic plantar muscles tested, compared to toe spread, first-toe extension and second-to-fifth-toe extension (Gooding and colleagues, 2016).',
    'EMG research found the abductor hallucis, the muscle that supports the inner arch, was over four times more active during the short foot exercise than during towel curls (Jung and colleagues, 2011).',
    'A 2024 meta-analysis of short foot training in people with flat feet found that programs longer than six weeks improved navicular drop, but shorter programs did not reach significance (Cheng and colleagues, 2024).',
    'Healthy adults who did four weeks of short foot exercises improved dynamic balance more than a group that did towel curls for the same period (Lynn and colleagues, 2012).',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is the short foot exercise?',
      paragraphs: [
        'The short foot exercise is an isometric contraction of the intrinsic foot muscles. You shorten the distance between the ball of the foot and the heel by pulling them toward each other, which lifts the arch. The toes stay flat and relaxed the whole time. A 2015 review by McKeon and colleagues named it the core exercise in their "foot core" model, comparing the intrinsic foot muscles to the deep core muscles of the trunk.',
        'Other names for it include arch doming, foot doming, and the foot shortening exercise. It is different from a towel scrunch or a toe curl because those exercises use toe flexion, which recruits the long toe flexor muscles running down from the shin. The short foot exercise is meant to isolate the muscles that live entirely inside the foot.',
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: 'How do you do the short foot exercise?',
      paragraphs: [
        'Sit in a chair with your feet flat on the floor, barefoot. Place your foot so the heel, the ball and all five toes rest on the ground. Without curling or gripping the toes, try to pull the ball of your foot backward toward your heel. Your arch will rise. Hold that contraction, then release.',
        'Think of it as making the foot shorter and taller rather than wider and flatter. The toes should not press into the floor, lift off the floor, or curl under. If you see the toes gripping, you are using the wrong muscles. Start by placing a finger under the arch so you can feel it lift.',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          evidence: { level: 'moderate', why: 'Part of the tested program in a 2023 flat-feet RCT (Brijwasi 2023). On its own, a 2024 meta-analysis found results only reached significance after six weeks.' },
          dose: 'Walkito starts at 3 sets of 10, hold 5 seconds, each foot',
          how: 'Sit with your feet flat on the floor. Pull the ball of the foot toward the heel so the arch lifts. Keep the toes relaxed and flat. Hold for five seconds, then release.',
          often: 'Every session while this is your level',
          feel: 'The arch lifting, with the toes relaxed',
          stop: 'Pain reaches 6/10',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated figure contracting the arch of one foot with toes flat on the floor',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'What muscles does the short foot exercise work?',
      paragraphs: [
        'The short foot exercise targets the intrinsic plantar muscles: the abductor hallucis, flexor digitorum brevis, quadratus plantae, and abductor digiti minimi. These muscles sit entirely inside the foot and support the medial longitudinal arch from below.',
        'A 2016 MRI study by Gooding and colleagues measured muscle activation after 40 repetitions of four different foot exercises in 8 collegiate athletes. The short foot exercise produced the highest mean activation in the abductor digiti minimi (34.9%), the abductor hallucis (29.7%), and the flexor digitorum brevis (24.8%). An earlier EMG study by Jung and colleagues (2011) found that abductor hallucis activity was over four times greater during the short foot exercise than during towel curls.',
        'This is why the short foot is considered a better exercise than towel curls for targeting the intrinsic muscles specifically. Towel curls recruit the long toe flexors, the extrinsic muscles that run from the shin to the toes. The short foot exercise keeps those extrinsic muscles quieter.',
      ],
      cites: [CITE.gooding, CITE.jung],
    },
    {
      h2: 'How do you progress from seated to standing to single-leg?',
      paragraphs: [
        'Once seated short foot holds feel easy for two sessions in a row, the next step is standing on both feet. The same contraction now has to hold your body weight. After that, single-leg short foot adds balance demand and exposes any difference between your left and right side.',
        'Each version is the same movement. The only change is the load. Standing doubles the demand on the arch muscles. Single-leg roughly doubles it again and adds the need to stabilize the ankle.',
      ],
      exercises: [
        {
          name: 'Short foot, standing',
          evidence: { level: 'moderate', why: 'Part of the tested program in a 2023 flat-feet RCT (Brijwasi 2023). Not tested in isolation.' },
          dose: 'Walkito starts at 3 sets of 10, hold 5 seconds, both feet',
          how: 'Stand with both feet on the floor. Pull the ball of each foot toward the heel so both arches lift. Toes stay flat and long. Only the arch moves.',
          often: 'Every session, once seated short foot feels easy',
          feel: 'The arch working while it carries your weight',
          stop: 'Pain reaches 6/10',
          media: 'short_foot_double',
          caption: 'Short foot, standing: toes flat and long, only the arch lifts',
          alt: 'A standing figure with both arches visibly lifted and toes flat',
        },
        {
          name: 'Short foot, one leg',
          evidence: { level: 'moderate', why: 'Part of the tested program in a 2023 flat-feet RCT (Brijwasi 2023). Not tested in isolation.' },
          dose: 'Walkito starts at 3 sets of 10, hold 5 seconds, each foot',
          how: 'Stand on one foot. Lift the arch the same way as before. Keep the big toe pressing gently into the floor. If the big toe lifts, the arch is compensating rather than working.',
          often: 'Every session, once standing short foot feels easy',
          feel: 'Harder work in the arch, with the big toe pressing down',
          stop: 'Pain reaches 6/10',
          media: 'short_foot_single',
          caption: 'Short foot, one leg: lift the arch and keep the big toe down',
          alt: 'A figure standing on one foot with the arch lifted and the big toe flat',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'What mistakes make the short foot exercise less effective?',
      paragraphs: [
        'The most common mistake is curling the toes. If the toes flex and grip the floor, the exercise becomes a toe curl and the extrinsic flexors take over. Keep the toes long and relaxed. Some people find it helps to lift the toes briefly, contract the arch, then lay the toes back down.',
        'The second mistake is pushing the foot outward instead of shortening it. The movement should be straight back, ball toward heel, not side to side. The third is holding your breath. Breathe normally through each hold.',
        'If you cannot feel the arch lift at all, try placing a finger or a pen under the arch. The goal is to feel the arch press into that object. It can take several sessions before the brain learns to activate these muscles on command. That learning curve is normal.',
      ],
    },
    {
      h2: 'What does the research say about short foot exercises?',
      keyFact: 'In a 2023 trial of 52 people with flexible flat feet, a six-week program combining short foot exercises, ankle work, hip strengthening and stretching changed arch shape more than a control group (Brijwasi and colleagues, 2023).',
      paragraphs: [
        'The strongest evidence comes from programs that combine the short foot exercise with other exercises, not from the short foot alone. In a 2023 trial of 52 people with flexible flat feet, Brijwasi and colleagues tested a six-week program of short foot exercises, ankle work, hip strengthening and stretching. The program changed two measures of arch shape more than the control group.',
        'A 2024 meta-analysis by Cheng and colleagues looked at short foot training on its own across multiple trials. The pooled results showed no significant improvement in navicular drop or foot posture index overall. But when the reviewers restricted the analysis to programs longer than six weeks, navicular drop did improve significantly. The duration of training matters.',
        'For balance, a 2012 RCT by Lynn and colleagues compared four weeks of short foot training to four weeks of towel curls in healthy adults. The short foot group improved dynamic balance more than the towel curl group.',
        'None of these studies are large. The evidence supports the short foot exercise as part of a broader foot-strengthening program, especially for flat feet and arch pain. It is not a standalone solution, and it has not been tested as a primary treatment for plantar fasciitis on its own. For the full exercise list, see [flat feet exercises](/flat-feet-exercises/) or [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.lynn],
    },
  ],
  faq: [
    {
      q: 'How long does it take for short foot exercises to work?',
      cites: [CITE.cheng],
      a: 'A 2024 meta-analysis found that short foot training programs shorter than six weeks did not significantly change arch height, but programs longer than six weeks did improve navicular drop (Cheng 2024). Expect to need at least six to eight weeks of regular practice before measurable changes appear.',
    },
    {
      q: 'Is the short foot exercise the same as arch doming?',
      a: 'Yes. Short foot exercise, arch doming, and foot doming all describe the same movement: pulling the ball of the foot toward the heel to lift the arch without flexing the toes. The name "short foot" comes from the foot visibly getting shorter as the arch rises.',
    },
    {
      q: 'Can you do short foot exercises for plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'The short foot exercise is not part of the main plantar fasciitis guideline, which focuses on stretching and loaded heel raises. But strengthening the intrinsic foot muscles may help as part of a broader program. See [plantar fasciitis exercises](/plantar-fasciitis-exercises/) for the guideline-backed exercises.',
    },
    {
      q: 'Is the short foot exercise better than towel curls?',
      cites: [CITE.jung, CITE.lynn],
      a: 'For targeting the intrinsic foot muscles specifically, yes. EMG research shows the abductor hallucis is over four times more active during the short foot exercise than during towel curls (Jung 2011). A separate RCT found the short foot group improved balance more than the towel curl group after four weeks (Lynn 2012). Towel curls still have a role as a simpler starting exercise.',
    },
    {
      q: 'How many sets and reps of the short foot exercise should I do?',
      cites: [CITE.brijwasi],
      a: 'Walkito starts at 3 sets of 10 repetitions, holding each for 5 seconds, on each foot. The 2023 flat-feet trial used a similar range. Increase the difficulty by moving from seated to standing to single-leg instead of adding more reps.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your arch pain followed a sudden injury or a pop, which may indicate a plantar fascia tear',
      'you have numbness, tingling or burning in the foot, which can point to nerve involvement',
      'one foot is rigid and the arch does not rise at all when you stand on your toes, which may need imaging',
      'the pain is getting worse week over week despite regular exercise',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito builds a plan that includes the short foot exercise in a three-step progression: seated, standing, then single-leg. Each step opens once two sessions at the current level felt easy. You pick sessions of 3, 5 or 10 minutes, and a test every 14 days tracks whether your arch hold time is improving.',
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Short foot exercise',
  campaign: 'ex-short-foot',
};
