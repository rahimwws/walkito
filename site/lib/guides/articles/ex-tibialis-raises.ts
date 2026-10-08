import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations needed (append to CITATIONS[] in lib/citations.ts) ──
 *
 * (none - this page uses only existing CITE keys)
 */

export const EX_TIBIALIS_RAISES: Guide = {
  lang: 'en',
  page: 'exTibialisRaises',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Tibialis Raises: How to Do Them for Shin Strength',
  description:
    'How to do tibialis raises (toe raises): technique, sets, reps, what muscles they work, evidence for shin splints, and easier or harder progressions.',
  h1: 'Tibialis raises: how to do them, what they work and what the evidence says',
  lede:
    'A tibialis raise is a wall-supported exercise where you lift your toes toward your shins while your heels stay on the ground. It strengthens the tibialis anterior, the muscle that runs down the front of the shin and helps lift the foot with every step. The exercise is simple and needs no equipment beyond a wall.',
  takeaways: [
    'The tibialis anterior controls dorsiflexion, lifting the front of the foot so it clears the ground during walking and running.',
    'Athletes with medial tibial stress syndrome (shin splints) had lower calf-raise endurance than matched controls, pointing to a general lower-leg strength deficit (Madeley and colleagues, 2007).',
    'No randomized trial has tested tibialis raises alone for a specific foot or ankle condition. The exercise is included in programs based on biomechanical reasoning, not on direct trial evidence.',
    'Walkito starts at 3 sets of 10, both feet, back against a wall.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What muscles do tibialis raises work?',
      paragraphs: [
        'Tibialis raises mainly target the tibialis anterior, the muscle on the front of the shin. It is responsible for dorsiflexion, meaning lifting the foot upward toward the shin. Every time you take a step, the tibialis anterior lifts the toes so the foot clears the ground. When it is weak, the foot can slap down after heel contact or catch on uneven surfaces.',
        'The exercise also works the smaller toe extensor muscles along the front of the lower leg. It does not load the calf muscles on the back of the leg, which is why it pairs with [calf raises](/exercises/calf-raises/) to cover both sides of the lower leg.',
      ],
    },
    {
      h2: 'How to do a tibialis raise',
      paragraphs: [
        'Stand with your back flat against a wall. Walk your feet forward about 30 centimeters (roughly a foot length) from the wall. Keep your heels on the ground. Lift the front of both feet as high as you can, pulling the toes toward your shins. Hold at the top for a beat. Lower slowly.',
        'The wall supports your weight so you can focus on the shin contraction. If you slide away from the wall, your feet are too far out.',
      ],
      exercises: [
        {
          name: 'Tibialis raises (wall-supported)',
          evidence: {
            level: 'early',
            why: 'No RCT has tested tibialis raises alone for a foot or shin condition. Included for biomechanical balance alongside calf work.',
          },
          dose: 'Walkito starts at 3 x 10, both feet',
          how: 'Back against a wall, feet slightly forward. Lift the toes toward the shins, heels stay down. Lower slowly.',
          often: 'Strength days',
          feel: 'A burn along the front of the shins',
          stop: 'Sharp pain on the shin bone, not just muscle fatigue',
          media: 'tibialis_raise',
          caption: 'Tibialis raises: lift the toes, keep the heels down',
          alt: 'A figure leaning against a wall with both feet lifting the toes toward the shins, the front of the lower legs highlighted',
        },
      ],
    },
    {
      h2: 'Do tibialis raises help shin splints?',
      keyFact: 'In a 2007 case-control study, athletes with shin splints had lower calf-raise endurance than matched controls, pointing to a general lower-leg strength deficit, not one specific muscle (Madeley and colleagues, 2007).',
      paragraphs: [
        'Shin splints, formally called medial tibial stress syndrome (MTSS), involve pain along the inner edge of the shin bone. The tibialis anterior sits on the outer front of the shin, not at the usual pain site for MTSS, so the connection is indirect. The rationale is that a stronger tibialis anterior helps absorb impact during running and walking, reducing strain on the shin as a whole.',
        'A 2007 case-control study found that athletes with MTSS had lower calf-raise endurance than matched controls, pointing to a general lower-leg strength deficit, not weakness in one specific muscle. A 2013 systematic review looked at treating MTSS that has already developed, not preventing it, and found no trial showed stretching or strengthening exercises were effective, though the evidence behind that finding was low quality overall.',
        'Honestly, we do not have a trial that tested tibialis raises alone for shin splints and showed they reduced symptoms or recurrence. The exercise is in programs because it makes biomechanical sense, not because a trial proved it. That is why its evidence label says "early." For the full shin splints page, see [shin splints exercises](/shin-splints-exercises/).',
      ],
      cites: [CITE.madeley, CITE.winters],
    },
    {
      h2: 'Sets, reps and how to progress',
      paragraphs: [
        'Walkito starts at 3 sets of 10, both feet, against a wall. That is a comfortable starting point for most people. If 10 reps feel easy with no fatigue at all, increase to 15 or add a 2-second pause at the top.',
        'To make the exercise harder, try single-leg tibialis raises: same wall position, one foot at a time. A resistance band looped over the foot adds load. Holding a light dumbbell across the top of the foot is another option, though awkward. The simplest progression is just more reps with a controlled tempo.',
        'The in-app title for this exercise is "Toe raises." The movement is the same: lift the toes, heels stay down.',
      ],
    },
    {
      h2: 'Tibialis raises vs. calf raises',
      paragraphs: [
        'Tibialis raises and [calf raises](/exercises/calf-raises/) are opposite movements. A calf raise points the foot down (plantarflexion). A tibialis raise lifts the foot up (dorsiflexion). The calf muscles and the tibialis anterior work together to control every step, absorbing impact at landing and pushing off at toe-off.',
        'Strengthening one side without the other can create an imbalance. Runners who only do calf raises may still get shin pain because the tibialis anterior cannot keep up with the calf during high mileage. A balanced program includes both.',
      ],
    },
    {
      h2: 'Common mistakes with tibialis raises',
      paragraphs: [
        'Feet too far from the wall. If the heels slide forward, you lose the wall support and the exercise turns into a balance challenge instead of a shin strengthener. About one foot-length away from the wall is right for most people.',
        'Rushing the reps. A slow, controlled lift and lower produces more muscle work than fast reps. Two seconds up, one-second hold, two seconds down is a good tempo.',
        'Confusing muscle burn with bone pain. A burning sensation along the front of the shin muscles is normal during the set. A sharp, localized pain on the shin bone itself is not, and could point to a stress reaction. Stop and have it checked.',
      ],
    },
  ],
  faq: [
    {
      q: 'What are tibialis raises good for?',
      a: 'Tibialis raises strengthen the muscle that lifts the front of the foot. They are commonly included in lower-leg programs alongside calf raises for general shin and ankle stability. They may help people who get shin fatigue from running or walking, though no trial has tested them in isolation for a specific condition.',
    },
    {
      q: 'Can tibialis raises prevent shin splints?',
      cites: [CITE.madeley, CITE.winters],
      a: 'They are often included in shin splints programs for the biomechanical rationale, not trial evidence. A 2013 systematic review looked at treating MTSS, not preventing it, and found no trial showed strengthening exercises worked, though the evidence was low quality. Tibialis raises alone have not been tested for shin splints prevention either.',
    },
    {
      q: 'How often should you do tibialis raises?',
      a: 'Two to four times per week is a common range. Walkito schedules them on strength days alongside calf work. Because the load is relatively low compared to heavy calf raises or heel drops, recovery is usually fast and the exercise can be done on consecutive days if it does not cause pain.',
    },
    {
      q: 'Are tibialis raises the same as toe raises?',
      a: 'Yes. "Toe raises" and "tibialis raises" describe the same movement: lifting the front of the foot while the heel stays on the ground. The Walkito app calls them "Toe raises." Some sources also call them "tib raises" or "anterior tibialis raises." All refer to the same exercise.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have sharp, focused pain on the shin bone rather than diffuse muscle soreness',
      'pain builds during running after you recently increased your mileage, which can point to a stress fracture instead of muscle fatigue',
      'there is swelling, redness or warmth over the shin',
      'you have trouble lifting the front of your foot (foot drop)',
      'numbness or tingling appears in the foot or lower leg',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito pairs tibialis raises with calf raises, balance work and foot exercises in a plan built around your current level. You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes.',
    more: [
      'Every 14 days, a short test checks calf endurance, balance and arch hold. Tibialis raises are part of the strength days. Walkito is an exercise program. It does not diagnose.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Tibialis raises',
  campaign: 'ex-tibialis-raises',
};
