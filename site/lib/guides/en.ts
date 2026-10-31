import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/** "3, 5 or 7" — a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, belongs in every language's guides and
 * About page. Calcaneal stress fracture is one of the causes of heel pain the
 * 2023 guideline names alongside plantar fasciitis, which is why a runners' site
 * spells out its signs.
 */
const RED_FLAGS = {
  h2: 'See a clinician first if',
  bullets: [
    'the pain followed an injury or a fall',
    'you cannot put weight on the foot, or you are limping',
    'it comes with numbness, tingling, burning, swelling or warmth',
    'the heel is red, or you have a fever or feel unwell',
    'it wakes you at night',
    'it is sharp, or getting worse despite easing the load',
    'squeezing the sides of the heel hurts, or the pain builds during runs after you increased your mileage; both can be signs of a stress fracture',
    'you have diabetes, reduced feeling in your feet or poor circulation',
    'both heels hurt and other joints are swollen or stiff',
    'it has not improved after several weeks of exercise and a lighter load',
    'one arch has flattened suddenly as an adult',
  ],
} as const;

export const FLAT_FEET_EN: Guide = {
  lang: 'en',
  page: 'flatFeet',
  mainSource: CITE.brijwasi,
  published: '2026-09-24',
  updated: '2026-10-31',
  title: 'Flat Feet Exercises: 10 Arch Exercises With Doses',
  description:
    'Flat feet exercises with doses: short foot, towel scrunch, toe lifts, hip and calf work. Who they suit and how long the trials ran.',
  h1: 'Flat feet exercises to strengthen fallen arches',
  lede: 'When you stand, your feet seem to roll in and the arches sink toward the floor. Walkito’s flat feet exercises for this are the **short foot** (3 sets of 10, 5-second hold), **towel scrunches** and **big toe lifts** (3 sets of 8, 5-second hold), **hip abduction** (3 sets of 15) and **calf stretches** (3 holds of 30 seconds). They are for flexible [flat feet](/flat-feet/). The program with trial evidence combines short-foot, ankle, hip and stretching work: in a trial of 52 people, six weeks of this program changed arch shape more than in a control group.',
  intro: [
    'First, [check](/flat-feet-test/) to determine whether your flat feet are flexible, meaning your arch shows when you are not standing but drops when you stand. That trial, and the exercises below, are about flexible flat feet. The evidence for reversing fallen arches with short-foot work alone is thinner: a 2024 review found a change in one arch measure only in programs longer than six weeks. The trial and the review both measured arch shape, not pain.',
  ],
  takeaways: [
    'In a trial of 52 people with flexible flat feet, six weeks of arch-building (short-foot), ankle, hip and stretching exercises changed arch shape more than in the control group (Brijwasi and Borkar, 2023).',
    'A 2024 review of short-foot training alone found no clear change overall, and an improvement in one arch measure only in programs longer than six weeks (Cheng and colleagues, 2024).',
    'A rigid flat foot, one that stays flat even off the ground, is structural, and exercise will not change its shape.',
    'These studies measured arch shape, not pain. For heel pain, the 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A, and strength training a B.',
    'If any exercise takes your pain to 6/10 or more, stop for the day.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Which exercises help flat feet, and how much should you do?',
      paragraphs: [
        'Walkito’s flat feet exercises start with [towel scrunches](/exercises/towel-scrunch/) and big toe lifts, then move up through three versions of the [short foot](/exercises/short-foot-exercise/). Toe spreads, band turn-ins, a single-leg hold, hip abduction and calf stretches fill in around them. These are Walkito’s starting doses, not a prescription. Do them barefoot. [How these guides are written](/about/).',
        'The short foot is the core of the arch work: pull the ball of the foot toward the heel so the arch lifts, without curling the toes. Arch-building (short-foot) work, hip strengthening and stretching are what the trial tested. The towel scrunch, big toe lift, toe spread, band turn-in and single-leg hold are Walkito’s own additions.',
        'You do one arch exercise at a time, the one at your level, and move up a step once the last two sessions with it felt easy. Walkito leaves out anything that needs a towel or band you don’t have. If any exercise takes your pain to **6/10 or more**, stop for the day. That is the point where Walkito ends a session.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Towel scrunch', '3 sets of 8, hold 5 seconds, each foot', 'Every session, while it is your level', 'The small muscles under the arch working', 'Pain reaches 6/10'],
          ['Big toe lift', '3 sets of 8, hold 5 seconds, each foot', 'Every session, while it is your level', 'The big toe moving on its own', 'Pain reaches 6/10'],
          ['Short foot, seated', '3 sets of 10, hold 5 seconds, each foot', 'Every session, while it is your level', 'The arch lifting, with the toes relaxed', 'Pain reaches 6/10'],
          ['Short foot, standing', '3 sets of 10, hold 5 seconds, both feet', 'Every session, while it is your level', 'The arch working while it carries your weight', 'Pain reaches 6/10'],
          ['Short foot, one leg', '3 sets of 10, hold 5 seconds, each foot', 'Every session, while it is your level', 'Harder work in the arch, with the big toe pressing down', 'Pain reaches 6/10'],
          ['Toe spread', '3 sets of 10, hold 5 seconds, both feet', 'Strength days, in turn with the band turn-in', 'Effort in the small muscles of the foot', 'Pain reaches 6/10'],
          ['Band turn-in', '3 sets of 15, each foot', 'Strength days, after six sessions of the standing short foot', 'Work along the inside of the foot and ankle', 'Pain reaches 6/10'],
          ['Single-leg hold', '3 holds of 30 seconds, each leg', 'Balance days', 'The foot and ankle making small corrections', 'Pain reaches 6/10'],
          ['Hip abduction', '3 sets of 15, each leg, standing, with a band', 'Strength days, when the left and right goal is in your plan', 'Work on the outside of the hip', 'Pain reaches 6/10'],
          ['Calf and soleus stretch', '3 holds of 30 seconds for each stretch, each leg', 'Most sessions, in turn with the other stretches', 'A stretch in the calf, then lower down, near the heel', 'Pain reaches 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Towel scrunch',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The small muscles under the arch working',
          how: 'Sit with a towel flat on the floor under your foot. Pull the towel in with your toes, and keep the heel down. It wakes up the small muscles under the arch.',
          image: 'Exercise: towel scrunch',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: pull the towel in with your toes, the heel stays down',
          alt: 'A seated figure pulling a towel in with the toes of one foot',
        },
        {
          name: 'Big toe lift',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The big toe moving on its own',
          how: 'Sit with your feet flat. Lift only the big toe and hold, while the other four toes stay flat on the floor. The ankle and the rest of the foot stay still: only the toe moves. A big toe that moves on its own is the arch’s first switch.',
          image: 'Exercise: big toe lift',
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift only the big toe while the other four stay flat',
          alt: 'A foot on the floor lifting only the big toe, the arch highlighted',
        },
        {
          name: 'Short foot, seated',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. On its own, short foot work has weaker results.' },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The arch lifting',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel to create a higher arch, as if making a small cave under the foot, and hold. Keep the outside of the foot and the heel on the ground; the ankle does not move. Don’t curl the toes: that is the most common way to get this exercise wrong.',
          image: 'Exercise: short foot, seated',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated leg with the foot flat on the floor, the arch muscles highlighted as the arch lifts',
        },
        {
          name: 'Short foot, standing',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. On its own, short foot work has weaker results.' },
          dose: '3 sets of 10, hold 5 seconds, both feet',
          often: 'Every session, while it is your level',
          feel: 'The arch working under your weight',
          how: 'Stand with your weight on both feet and do the same movement. The toes stay flat and long, and the outside of the foot and the heel stay on the ground. Only the arch lifts, making a small cave under the foot while it holds your weight.',
          image: 'Exercise: short foot, standing',
          media: 'short_foot_double',
          caption: 'Short foot, standing: toes flat and long, only the arch lifts',
          alt: 'Two legs standing, with the arch and calf of one leg highlighted as the arch lifts',
        },
        {
          name: 'Short foot, one leg',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. On its own, short foot work has weaker results.' },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'Harder work in the arch',
          how: 'Stand on one foot and lift the arch into a small cave, with the outside of the foot and the heel on the ground. Keep the big toe down. If it lifts, the arch is cheating. One foot at a time is where the weaker side shows.',
          image: 'Exercise: short foot, one leg',
          media: 'short_foot_single',
          caption: 'Short foot, one leg: lift the arch and keep the big toe down',
          alt: 'A foot standing on the floor, the arch highlighted as it lifts',
        },
        {
          name: 'Toe spread',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 sets of 10, hold 5 seconds, both feet',
          often: 'Strength days',
          feel: 'Effort in the small muscles of the foot',
          how: 'Spread your toes as wide as they go, then hold. Toes that can spread share the load with the arch. Lifting them is not the point.',
          image: 'Exercise: toe spread',
          media: 'toe_spread',
          caption: 'Toe spread: spread the toes as wide as they go, and hold',
          alt: 'A foot from the front, the small muscles between the toes highlighted as they spread',
        },
        {
          name: 'Band turn-in',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 sets of 15, each foot',
          often: 'Strength days',
          feel: 'Work along the inside of the foot and ankle',
          how: 'Sit with a resistance band around the foot and turn the foot in against it, so the sole turns toward the other foot. Move the foot, not the leg: the knee stays still. Walkito adds it only after six sessions of the standing short foot, so the arch’s own muscles come first.',
          image: 'Exercise: band turn-in',
          media: 'band_inversion',
          caption: 'Band turn-in: turn the foot in against the band, the knee stays still',
          alt: 'A leg with a resistance band around the foot, turning the foot inward, the lower leg highlighted',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 holds of 30 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          how: 'Stand on one foot and look at one spot ahead. Let the foot wobble: that wobble is the foot doing the balancing. Optional: lightly touch a counter or wall with your hands as needed, so you keep working the ankle instead of giving up.',
          image: 'Exercise: single-leg hold',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make small corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
        {
          name: 'Hip abduction',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial.' },
          dose: '3 sets of 15, each leg',
          often: 'Strength days',
          feel: 'Work on the outside of the hip',
          how: 'Stand with a resistance band and lift one leg out to the side against it. Push through the heel, not the toes. A hip that gives way lands the load on the arch.',
          image: 'Exercise: hip abduction',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift one leg out to the side against the band',
          alt: 'A standing figure with a band around both legs lifting one leg out to the side, the outer hip highlighted',
        },
        {
          name: 'Calf and soleus stretch',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. That trial measured arch shape, not pain.' },
          dose: '3 holds of 30 seconds for each stretch, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf, then near the heel',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat and the hips forward, and feel the stretch in the calf. Then keep the heel flat and bend the back knee until you feel it lower, near the heel. That is the soleus, the deeper calf muscle.',
          image: 'Exercise: calf and soleus stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: hands on the wall, back leg straight, back heel down',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
      ],
    },
    {
      h2: 'Are your flat feet flexible or rigid?',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      paragraphs: [
        'A few seconds tell you. It matters because the trial was run on flexible flat feet, meaning your arch shows when you are not standing but drops when you stand, and exercise will not change the shape of a rigid one. Walkito doesn’t check your foot type, so this check is yours to do:',
      ],
      bullets: [
        'Stand barefoot and look at the inside of your foot. With a flat foot, the arch sits low or touches the floor.',
        'Lift that foot off the floor, or rise up onto your toes, and look again.',
        'If the arch comes back, the flat foot is **flexible**. The exercises above are for this kind.',
        'If the arch stays flat even off the ground, the foot is **rigid**. That is structural, and exercise will not change it. See a clinician before starting a program.',
        '“Fallen arches” is usually another name for flat feet. But if one arch has flattened **suddenly** as an adult, see a clinician before you exercise it, whatever the check shows.',
      ],
    },
    {
      h2: 'How long before flat feet exercises change the arch?',
      keyFact: 'In a trial of 52 people with flexible flat feet, six weeks of arch-building (short-foot), ankle, hip and stretching work improved navicular drop by 0.4 cm and arch angle by 16 degrees more than a control group (Brijwasi and Borkar, 2023).',
      paragraphs: [
        'Plan for six weeks or more. In a trial of 52 people with **flexible** flat feet, a six-week program of arch-building (short-foot) exercises, ankle work, hip strengthening and stretching changed two measures of arch shape more than in the control group.',
        'The evidence for reversing fallen arches with short-foot work alone is thinner. A 2024 review of short-foot training on flat feet in general found no clear difference from control groups in arch shape or foot posture overall. Only programs longer than six weeks improved how far the arch sinks under your weight, and the authors say larger studies are needed. So give short-foot work on its own longer.',
        `That is why Walkito’s arch goal, holding the arch for ${PROGRAM.goals.archHoldSeconds} seconds, has no end date. The arch hold is tested every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}, so you can see whether it is moving. Once you reach it, the arch work stays in the plan at a lower dose. The trials are summarized on [the evidence page](/science/).`,
      ],
      sourceNote:
        'Brijwasi and Borkar: navicular drop (how far the navicular bone on the inside of the arch drops when you stand) improved by 0.4 cm, and arch angle by 16 degrees, more than in the control group. Cheng and colleagues: no significant difference overall in navicular drop or Foot Posture Index; navicular drop improved significantly only in the subgroup of programs longer than six weeks.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Do flat feet exercises help arch pain?',
      paragraphs: [
        'No study on this page measured [arch pain](/arch-pain/), so none shows these exercises ease it. They show the arch shape can be trained.',
        'Pain at the heel, and sometimes along the arch, can come from the plantar fascia, the band of tissue along the sole. For heel pain under the foot, the 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, **A**, and strength training a **B**. Those exercises are in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/). Walkito can work on both as separate goals: pain-free mornings for the pain, and an arch hold for the arch. For back pain, see [flat feet and back pain](/flat-feet-back-pain/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Can exercise change the arch in flat feet?',
      a: 'Exercise can change the arch shape of flexible flat feet, but not rigid ones. In a trial of 52 people whose arch showed off the ground but dropped when they stood, six weeks of arch-building (short-foot), ankle, hip and stretching work changed arch measures more than in a control group. A foot that stays flat even when lifted is structural; exercise will not change it.',
    },
    {
      q: 'How long does it take for flat feet exercises to work?',
      a: `Plan on six weeks or more. In one trial on flexible flat feet, a six-week program of short-foot, hip and stretching work changed arch measures. For short-foot training alone, a 2024 review found no clear change overall, and an improvement only in programs longer than six weeks. Walkito keeps its ${PROGRAM.goals.archHoldSeconds}-second arch-hold goal until you reach it.`,
    },
    {
      q: 'What exercises strengthen the arches of the feet?',
      a: 'The short-foot exercise is the main one: you lift the arch by drawing the ball of the foot toward the heel, without curling the toes. Walkito starts it seated, at 3 sets of 10 with a 5-second hold, then standing, then on one leg. Towel scrunches and big toe lifts train [the small muscles around the arch](/foot-strengthening-exercises/).',
    },
    {
      q: 'How often should I do flat feet exercises?',
      a: `Do the short-foot work on each training day while the arch is your goal. In Walkito you choose ${DAYS} training days a week, and while the arch is the week’s focus, every session includes an arch exercise. The arch hold is retested every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal} after your first goal.`,
    },
    {
      q: 'Is walking barefoot good for flat feet?',
      a: 'There is no trial testing barefoot walking against shoes for flat feet, so no study here settles it. Walking barefoot does work the small muscles that support the arch, which is why the short foot and towel scrunch are done barefoot. If barefoot walking brings on new pain, ease up and try it on soft ground first.',
    },
    {
      q: 'What is the difference between fallen arches and flat feet?',
      a: 'Usually none: “fallen arches” and “collapsed arches” are common names for flat feet, mostly lifelong and flexible. Sometimes the phrase means [adult-acquired flatfoot](https://doi.org/10.2174/1874325001711010714), often from a weakening [posterior tibial tendon](/posterior-tibial-tendon-dysfunction-exercises/), which holds up the arch. It tends to come on in adulthood and can bring pain or swelling inside the ankle. If one arch drops in adulthood, see a clinician first.',
      cites: [CITE.ling],
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'the arch stays flat when the foot is off the ground'],
  },
  program: {
    h2: 'Doing it as a plan',
    text: `You don’t have to work out the order, the doses or when to move to a harder version. Walkito builds a plan one week at a time around one goal. For a flexible flat foot, that goal is the arch hold: holding your arch up for ${PROGRAM.goals.archHoldSeconds} seconds. If you also have pain, pain-free mornings come first.`,
    more: [
      `You pick ${DAYS} days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days (then every ${PROGRAM.testEveryDaysAfterGoal} once your first goal is met), a short test checks arch hold, calf endurance and balance, so you can see whether the arch work is doing anything.`,
      'Questions about the app are answered in [the FAQ](/faq/), and [the best app for flat feet](/best-app-for-flat-feet/) compares it with other apps.',
    ],
    cta: `Start with a ${PROGRAM.sessionMinutes[0]}-minute session.`,
  },
  crumb: 'Flat feet exercises',
  campaign: 'guide-flat-feet',
  related: ['hubFlatFeet'],
};

/*
 * The pilot for the writing guide (reader's journey, plain words, study detail
 * in source lines, real tables, a contents list, an image slot per exercise).
 * Every fact, dose, grade and figure is the one this page carried before the
 * rewrite; the trial's Foot Function Index figures moved to its source line.
 */
export const HEEL_PAIN_EN: Guide = {
  lang: 'en',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-09-24',
  updated: '2026-10-31',
  title: '8 Plantar Fasciitis Stretches and Exercises, With Doses',
  description:
    'The plantar fascia and calf stretches graded A, calf strength exercises graded B, with doses, the best time to stretch, and what to avoid.',
  h1: 'Plantar fasciitis stretches and exercises',
  lede: 'The best plantar fasciitis stretches are the **plantar fascia stretch** (10 holds of 10 seconds, seated, before your first steps in the morning) and the **calf and soleus stretches** (3 holds of 30 seconds), which the 2023 heel pain guideline grades A, its top grade. The best exercises add calf strength work, graded B: heel raises that build up to slow heel raises with a towel under the toes.',
  intro: [
    'This is for the pain of [plantar fasciitis](/plantar-fasciitis/): a sharp pull at the heel on your first steps out of bed or after sitting, which eases once you’re moving. The 2023 clinical guideline for heel pain calls it the most commonly recognized cause of heel pain under the foot. If an X-ray shows a spur, [heel spur exercises](/heel-spur-exercises/) covers the same routine.',
  ],
  takeaways: [
    'The 2023 heel pain guideline from the Journal of Orthopaedic & Sports Physical Therapy gives plantar fascia and calf stretching its top grade, A, and strength training a B.',
    'In a trial of 82 people, a plantar fascia stretch done before standing eased first-step morning pain more than a calf stretch alone at eight weeks (DiGiovanni and colleagues, 2003).',
    'In a trial of 48 people, heavy heel raises eased pain and improved daily function faster than stretching, and by twelve months both groups were even (Rathleff and colleagues, 2015).',
    'For heel pain when you run, the same guideline advises changing the load instead of stopping everything, advice graded E because it rests on theory, not trials.',
    'See a clinician first if the pain followed an injury, comes with numbness or swelling, wakes you at night, or hurts when you squeeze the heel.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Which stretches and exercises help plantar fasciitis?',
      figure: { id: 'plantar-fascia', caption: 'The plantar fascia runs from the heel bone to the toes. Plantar fasciitis pain usually starts where it attaches to the heel.', alt: 'Sole of a foot showing the plantar fascia as white bands fanning out from the heel bone to the base of the toes, with a red spot on the heel where pain usually starts.' },
      paragraphs: [
        'Below are eight exercises: three stretches, four strength steps and a foot roll, in the order Walkito uses them. These are Walkito’s starting doses, not a prescription. A one-page summary is on [printable exercise sheets](/printable-exercise-sheets/). [How these guides are written](/about/). If any exercise takes your pain to **6/10 or more**, stop for the day. That is the point where Walkito ends a session.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Plantar fascia stretch', '10 holds of 10 seconds, each foot', 'Most sessions, the first seated, before you stand up', 'A stretch along the arch, not the calf', 'Pain reaches 6/10'],
          ['Calf stretch', '3 holds of 30 seconds, each leg', 'Most sessions, in turn with the other stretches', 'A stretch in the calf of the straight back leg', 'Pain reaches 6/10'],
          ['Soleus stretch', '3 holds of 30 seconds, each leg', 'Most sessions, in turn with the other stretches', 'A stretch low in the calf, near the heel', 'Pain reaches 6/10'],
          ['Seated heel raises', '3 sets of 10, both feet', 'Strength days, 3 a week, never two in a row', 'Work low in the calf (the soleus), with almost no load on the heel', 'Pain reaches 6/10'],
          ['Heel raises on both feet', '3 sets of 10, both feet', 'Strength days, once the seated raises feel easy', 'The calves working, with both feet sharing the load', 'Pain reaches 6/10'],
          ['Heel raise hold', '3 holds of 20 seconds, both feet', 'Strength days, the next step up', 'The calves working to stay still at the top', 'Pain reaches 6/10'],
          ['Heel raises with a towel', '3 sets of 12, each leg, with added weight', 'Strength days, once the goal moves on to calf strength', 'Hard work in the calf and a pull under the arch', 'Pain reaches 6/10'],
          ['Foot roll', '2 minutes', 'Recovery days', 'Firm pressure under the foot, never a wince', 'Pain reaches 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '10 holds of 10 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor. Step by step: [plantar fascia stretch](/exercises/plantar-fascia-stretch/).',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: seated, pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '3 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this [calf stretch](/exercises/calf-stretch/) matters even though you feel it higher up.',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '3 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the back knee bent and the back heel flat, the lower calf highlighted',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How do you build up the strengthening exercises?',
      paragraphs: [
        'While pain is your goal, Walkito keeps the calf work gentle, one step at a time:',
        {
          list: [
            'Seated heel raises first, for the soleus.',
            'Then heel raises on both feet.',
            'Then a held heel raise.',
          ],
        },
        'You move up a step once the last two sessions with it felt easy. The [towel heel raise](/exercises/towel-heel-raise/) loads the plantar fascia the hardest, so it only comes in once morning pain has come down and the goal moves on to calf strength.',
      ],
      exercises: [
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle, not the gastrocnemius you work in standing heel raises. So it is not just an easier version of the standing raise: it targets a different muscle, with almost no load on the heel.',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load while the calf wakes up.',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Heel raise hold',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 holds of 20 seconds, both feet',
          often: 'Strength days',
          feel: 'The calves working to stay still',
          how: 'Rise onto your toes on both feet, then stay still at the top. Don’t sink back down. Holding at the top loads the tendon without the bounce.',
          image: 'Exercise: heel raise hold',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raises with a towel',
          evidence: { level: 'moderate', why: 'This is the routine from a 48-person trial, and the 2023 guideline grades strength work B.' },
          dose: '3 sets of 12, each leg, with added weight',
          often: 'Strength days',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. At this level Walkito adds weight, such as a backpack. The towel is what makes this exercise work the plantar fascia and not just the calf.',
          image: 'Exercise: heel raises with a towel',
          media: 'heel_raise_towel',
          caption: 'Heel raises with a towel: three seconds up, two at the top, three down',
          alt: 'A figure rising onto the toes on a step with a rolled towel, the calves highlighted',
        },
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. It is here for comfort between sessions.' },
          dose: '2 minutes',
          often: 'Recovery days',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a [massage ball](/massage-ball-plantar-fasciitis/), with firm pressure. If you’re wincing, ease off. It is comfort care, not a replacement for stretching and calf strength work. No ball? Use firm thumb strokes from heel to toes instead.',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'When is the best time to do plantar fasciitis stretches?',
      keyFact: 'In a trial of 82 people with chronic plantar fasciitis, stretching the plantar fascia before standing eased first-step morning pain more than calf stretching alone by eight weeks (DiGiovanni and colleagues, 2003).',
      paragraphs: [
        '**Before your first steps in the morning, and before standing after sitting for a long time.** Those are the two moments when the plantar fascia is stiffest and most likely to hurt.',
        'A 2003 trial of 82 people with chronic plantar fasciitis tested a plantar fascia stretch done before weight-bearing: 10 holds of 10 seconds, three times a day, the first set before the first step of the morning. At eight weeks, that group had significantly less pain on their first morning steps than the group doing a calf stretch alone. By two years, after all patients received the same stretch, both groups had improved.',
        'Walkito puts the first [plantar fascia stretch](/exercises/plantar-fascia-stretch/) on the edge of the bed, seated, before your feet touch the floor, for the same reason: stretching before the tissue takes load is gentler than after. For people whose first steps keep hurting, the 2023 guideline also gives [night splints](/night-splints-plantar-fasciitis/), worn for 1 to 3 months, an **A**. Ask your clinician if they are right for you; Walkito doesn’t provide them. More on [heel pain in the morning](/heel-pain-in-the-morning/).',
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: 'Is strength work or stretching better for plantar fasciitis?',
      keyFact: 'In a trial of 48 people, the heel-raise group scored 29 points lower on the Foot Function Index at three months (on this scale a lower score means less pain and better function), but by twelve months the two groups were about even (Rathleff and colleagues, 2015).',
      paragraphs: [
        'Both help, and **strength work helps sooner.** In a trial of 48 people with plantar fasciitis confirmed by ultrasound, all wearing [shoe inserts](/insoles-vs-exercises/), one group added heavy heel raises every other day and the other stretched the plantar fascia.',
        'At three months, the heel-raise group was clearly ahead on pain and daily function. At twelve months, the two groups were even. Strength work brought the improvement forward; it did not make it bigger. The guideline supports doing both. The study-by-study reasoning is on [the evidence page](/science/).',
      ],
      sourceNote:
        'Scored on the Foot Function Index, where a lower score means less pain and better function: 29 points lower in the heel-raise group at three months (95% CI 6-52, p = 0.016), and 22 against 16 at twelve months, not a significant difference.',
      cites: [CITE.rathleff],
    },
    {
      h2: 'What exercises should you avoid with plantar fasciitis?',
      paragraphs: [
        'Avoid high-impact activity that spikes the load on your heel [while the pain is flared](/plantar-fasciitis-flare-up/), and walking barefoot on hard floors first thing in the morning.',
        'Jumping, sprinting and plyometrics cause a sudden peak force on the plantar fascia, which can set irritated tissue back. The 2023 guideline recommends adjusting the load on your feet at work, in sport and in daily life, advice graded E. It does not ban specific exercises. **The question is whether the load is more than the tissue can recover from overnight.**',
        'Barefoot on hard floors is a common trigger because the fascia is stiffest after rest and a hard surface offers no cushion. Until symptoms settle, always wear a well-cushioned shoe, at all times of day and even in the house. If you also have **Achilles pain** near the back of the heel, avoid deep heel drops off a step edge, which can load the Achilles insertion, and keep the towel heel raise on flat ground until a clinician clears the Achilles side.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Should you rest or keep running with heel pain?',
      paragraphs: [
        'If heel pain flares when you run, **change the load instead of stopping everything.** That advice is graded E in the 2023 guideline, which means it rests on theory rather than trials. Keep the stretches, and cut back whatever makes the heel worse. Switching some runs to low-impact cardio, such as swimming or a stationary bike, keeps up your fitness without flaring the heel.',
        'On a bad morning, keep the stretches and drop the heel raises for the day. If your first steps are clearly worse after a run, that run was more than the heel could take. Walkito reads it the same way: a big day on your feet turns the next strength session into a lighter recovery one, and a painful morning makes the session shorter without canceling it.',
        'Stop and see a clinician if running hurts sharply or the pain gets worse week after week. The same goes for pain that builds during runs after you added mileage, or pain when you squeeze the sides of the heel. Both can be signs of a stress fracture, one of the other causes of heel pain the guideline names.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What does the 2023 guideline recommend for plantar fasciitis?',
      paragraphs: [
        'The 2023 guideline grades each option by the strength of its evidence. A is the top grade. A grade marked “against” means the guideline advises not to use that option.',
      ],
      table: {
        head: ['Option', 'Grade'],
        rows: [
          ['Plantar fascia and calf stretching', '**A**'],
          ['Manual therapy (hands-on work on the joints and soft tissue of the leg and foot), from a clinician', '**A**'],
          ['[Taping](/plantar-fasciitis-taping/) alongside other physical therapy, for better pain and function over up to 6 weeks', '**A**'],
          ['Night splints for 1 to 3 months, if your first steps each morning keep hurting', '**A**'],
          ['Resistance and strength training', '**B**'],
          ['Low-level laser therapy and dry needling, from a clinician', '**B**'],
          ['Orthotics on their own, for short-term pain', '**B against**'],
          ['Orthotics combined with other care', '**C**'],
          ['Therapeutic ultrasound added to stretching', '**A against**'],
        ],
      },
      after: [
        'So [insoles](/best-insoles-for-plantar-fasciitis/) on their own are not enough for most people, though they can sit alongside stretching and strength work. The guideline does not grade shoe types, but unsupportive footwear is a commonly recognized risk factor. If your feet hurt after a long day on them, see [feet hurt from standing all day](/feet-hurt-standing-all-day/) or [nurses and foot pain](/feet-hurt-standing-all-day/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'What are the best stretches for plantar fasciitis?',
      a: 'The plantar fascia stretch and the calf and soleus stretches, graded A by the 2023 heel pain guideline. Sit, cross the foot over your knee and pull the toes back, 10 holds of 10 seconds, the first before you stand up. Then stretch the calf against a wall with the back heel down, back knee straight, then bent, 3 holds of 30 seconds each.',
      cites: [CITE.guideline],
    },
    {
      q: 'Is stretching enough for plantar fasciitis?',
      a: 'Stretching helps, and adding strength work helps sooner. In a trial of 48 people, heavy heel raises were clearly ahead of plantar fascia stretching at three months, but by twelve months the two groups were even. The 2023 heel pain guideline gives stretching an A and strength training a B, and supports doing both. [The evidence page](/science/) has the details.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      q: 'When is the best time to stretch for plantar fasciitis?',
      a: 'Before your first steps in the morning, and before you stand after sitting a long time. In a 2003 trial of 82 people, a plantar fascia stretch done before standing, 10 holds of 10 seconds three times a day, eased first-step pain more than a calf stretch alone at eight weeks.',
      cites: [CITE.digiovanni2003],
    },
    {
      q: 'How often should I do plantar fasciitis exercises?',
      a: `Stretch in most sessions and do the calf strength work on strength days. In Walkito you choose ${DAYS} training days a week, with three strength days a week, never two in a row. In the 48-person trial behind the towel heel raise, the heel raises were done every other day.`,
    },
    {
      q: 'What is the worst thing you can do for plantar fasciitis?',
      a: 'Walking barefoot on hard floors right after waking, and jumping straight back into running or jumping while the heel is still flared, are the clearest mistakes. Both load the stiffest, least-recovered fascia with sudden force. Until symptoms settle, wear a cushioned shoe even at home. The 2023 heel pain guideline recommends adjusting your load instead of pushing through pain.',
      cites: [CITE.guideline],
    },
    {
      q: 'Can I keep running with plantar fasciitis?',
      a: 'You don’t have to stop everything. Change the load instead. The 2023 guideline recommends learning to adjust the load on your feet, graded E, which means it comes from theory, not trials. Cut back whatever makes the heel worse, and swap some runs for low-impact cardio such as swimming or a stationary bike. If your first steps next morning are clearly worse, the run was too much. Sharp or worsening pain needs a clinician.',
      cites: [CITE.guideline],
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Doing it as a plan',
    text: `You don’t have to work out the order, the doses or how long to stay on each exercise. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is a better morning: pain at or under 1/10 for ${PROGRAM.painFreeDays} days in a row.`,
    more: [
      `You pick ${DAYS} days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days (then every ${PROGRAM.testEveryDaysAfterGoal} once that goal is met), a short test checks [calf endurance](/calf-raise-test/), arch hold and balance, so you can see what’s changing. Once you reach the goal, the heel work stays in the plan at a lower dose, because heel pain can come back.`,
      'How long recovery tends to take is on [how long does plantar fasciitis last](/how-long-does-plantar-fasciitis-last/). If your arches are flat as well, see [exercises for flat feet](/flat-feet-exercises/).',
    ],
    cta: `Start with a ${PROGRAM.sessionMinutes[0]}-minute session.`,
  },
  crumb: 'Plantar fasciitis exercises',
  campaign: 'guide-plantar-fasciitis',
  related: ['hubPlantarFasciitis'],
};
