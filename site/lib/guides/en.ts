import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

const RED_FLAGS = {
  h2: 'See a clinician first if',
  bullets: [
    'the pain followed an injury or a fall',
    'it comes with numbness, tingling, burning, swelling or warmth',
    'it wakes you at night',
    'one arch has flattened suddenly as an adult',
  ],
} as const;

export const FLAT_FEET_EN: Guide = {
  lang: 'en',
  page: 'flatFeet',
  title: 'Exercises for Flat Feet: What Works, and for How Long',
  description:
    'Short-foot training, toe spreading, balance and hip work for flexible flat feet — with starting doses, and what the trials say about how long the arch takes to respond.',
  h1: 'Exercises for flat feet',
  lede: 'If your flat feet are flexible — the arch comes back when the foot is off the ground — the exercises with trial evidence are short-foot training, toe spreading, single-leg balance, hip strengthening and calf stretching. Give them more than six weeks: a 2024 meta-analysis found that only programs longer than six weeks changed arch height measurably.',
  sections: [
    {
      h2: 'First, check: flexible or rigid?',
      paragraphs: [
        'Look at your foot while you stand, then lift it off the floor or rise onto your toes. If the arch reappears, the flat foot is **flexible** — the kind every study on this page was run on.',
        'If the arch stays flat even off the ground, it is rigid. That is a structural issue exercise will not change, and it is worth seeing a clinician rather than starting a program.',
      ],
    },
    {
      h2: 'The exercises, with starting doses',
      paragraphs: [
        'These are the exercises Walkito uses for the arch, at the doses it starts from. Do them barefoot.',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          dose: '3 × 10, hold 5 s, each foot',
          how: 'Foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts. Don’t curl the toes — that is the most common way to do it wrong.',
        },
        {
          name: 'Short foot, standing',
          dose: '3 × 10, hold 5 s',
          how: 'The same movement with your weight on both feet. Toes stay flat and long; only the arch lifts.',
        },
        {
          name: 'Short foot, one leg',
          dose: '3 × 10, hold 5 s, each foot',
          how: 'Standing on one foot. Keep the big toe down — if it lifts, the arch is cheating. One foot at a time is where the weaker side shows.',
        },
        {
          name: 'Toe spread',
          dose: '3 × 10, hold 5 s',
          how: 'Spread the toes as wide as they go and hold. Toes that can spread share the load with the arch; lifting them is not the point.',
        },
        {
          name: 'Single-leg hold',
          dose: '3 × 30 s, each leg',
          how: 'Stand on one foot and look at one fixed spot. Let the foot wobble — it is meant to; that is the foot doing the balancing.',
        },
        {
          name: 'Hip abduction',
          dose: '3 × 15, each side',
          how: 'Lying on your side, lift the top leg out to the side, leading with the heel rather than the toes. A hip that gives way lands the load on the arch.',
        },
        {
          name: 'Calf and soleus stretch',
          dose: '3 × 30 s each, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. Then bend the back knee until you feel it lower, near the heel — that is the deeper soleus.',
        },
      ],
    },
    {
      h2: 'How long before the arch changes?',
      paragraphs: [
        'In a randomised trial of 52 people with **flexible** flat feet, a six-week program of foot shortening, ankle work, hip strengthening and stretching improved navicular drop by **0.4 cm** and arch angle by **16 degrees** more than the control group.',
        'A 2024 meta-analysis of short-foot training found that **only programs longer than six weeks** produced a significant improvement in navicular drop; shorter ones showed no measurable effect. Plan for more than six weeks, not fewer.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Will these exercises stop foot pain?',
      paragraphs: [
        'Not on their own. Training the small muscles inside the foot improves balance, strength and arch posture, but a 2022 systematic review found it does not improve pain by itself.',
        'If your heel or arch hurts, the evidence for pain is on high-load calf strength — see [exercises for plantar fasciitis](/plantar-fasciitis-exercises/). Walkito runs both tracks together for that reason; the reasoning is on [the evidence page](/science/).',
      ],
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'the arch stays flat when the foot is off the ground'],
  },
  program: {
    h2: 'Doing it as a program',
    text: `Walkito runs these as a ${PROGRAM.weeks}-week plan of ${PROGRAM.sessionMinutesMin} to ${PROGRAM.sessionMinutesMax} minutes a day. Every ${PROGRAM.blockDays} days it retests you — calf raises, an arch hold and single-leg balance — so you can see whether the arch work is doing anything, rather than guess. [How the program works](/program/).`,
  },
  crumb: 'Flat feet exercises',
  campaign: 'guide-flat-feet',
};

export const HEEL_PAIN_EN: Guide = {
  lang: 'en',
  page: 'heelPain',
  title: 'Plantar Fasciitis Exercises: What the Evidence Supports',
  description:
    'Heel raises, plantar fascia and calf stretches for heel pain, with doses from the trials — and what the 2023 clinical guideline recommends, and against.',
  h1: 'Exercises for plantar fasciitis',
  lede: 'For heel pain from plantar fasciitis, the 2023 clinical guideline gives its top grade to plantar fascia and calf stretching, and a B to strength training. In a trial of 48 people, slow single-leg heel raises with a towel under the toes improved pain and function faster than stretching alone — though by twelve months the two groups had caught up with each other.',
  sections: [
    {
      h2: 'The exercises, with starting doses',
      paragraphs: [
        'These are the exercises Walkito uses for heel pain, at the doses it starts from.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          dose: '10 × 10 s, each foot — the first before you stand up',
          how: 'Sitting, cross the foot over the other knee and pull the toes back until you feel the stretch in the arch, not the calf.',
        },
        {
          name: 'Calf stretch',
          dose: '3 × 30 s, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. A tight calf pulls on the heel all day.',
        },
        {
          name: 'Soleus stretch',
          dose: '3 × 30 s, each leg',
          how: 'The same position, with the back knee bent until you feel it lower, near the heel. The deeper calf muscle only lets go with the knee bent.',
        },
        {
          name: 'Heel raises with a towel',
          dose: '3 × 12, each leg, every other day',
          how: 'On a step, on one foot, with a rolled towel under the toes. Three seconds up, two held at the top, three down. The towel is what makes this load the fascia rather than just the calf.',
        },
        {
          name: 'Single-leg heel raises',
          dose: '3 × 15, each leg',
          how: 'The version to keep once the pain settles. Slow — three up, three down. Speed is what makes it useless.',
        },
      ],
    },
    {
      h2: 'Strength or stretching?',
      paragraphs: [
        'In a randomised trial of 48 people with plantar fasciitis confirmed by ultrasound, one group did high-load heel raises and the other plantar-specific stretching. At three months the strength group scored **29 points lower** on the Foot Function Index (95% CI 6–52, p = 0.016).',
        'At twelve months the two groups had converged — 22 against 16, no significant difference. Strength work brings improvement **forward**; it does not make it bigger. Doing both is what the guideline supports.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'What the 2023 guideline recommends, and against',
      bullets: [
        'Plantar fascia and calf stretching — **grade A**',
        'Taping, for 1–6 weeks — **grade A**',
        'Night splints for 1–3 months, for pain on the first steps of the morning — **grade A**',
        'Resistance and strength training — **grade B**',
        'Orthotics — **grade B**, but not on their own',
        'Therapeutic ultrasound — **grade A against** using it',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Should you rest completely?',
      paragraphs: [
        'No. The guideline advises against complete rest, which increases stiffness. Change the load instead: on a bad morning, keep the stretches and drop the heel raises for the day.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Why it comes back',
      paragraphs: [
        'Heel pain often returns, and the usual way is stopping the exercises the week it stops hurting. Walkito keeps two sessions a week after the twelve weeks for that reason.',
        'If your arches are flat as well, the arch has its own exercises and its own timeline — see [exercises for flat feet](/flat-feet-exercises/).',
      ],
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Doing it as a program',
    text: `Walkito runs this as a ${PROGRAM.weeks}-week plan that reads your morning pain: a bad morning drops the heel raises and shortens the session; a good one never speeds it up. Every ${PROGRAM.blockDays} days it retests calf endurance, arch hold and single-leg balance. [How the program works](/program/).`,
  },
  crumb: 'Plantar fasciitis exercises',
  campaign: 'guide-heel-pain',
};
