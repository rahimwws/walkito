import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations needed (append to CITATIONS[] in lib/citations.ts) ──
 *
 * (none - this page uses only existing CITE keys)
 */

export const EX_ECCENTRIC_HEEL_DROPS: Guide = {
  lang: 'en',
  page: 'exEccentricHeelDrops',
  mainSource: CITE.alfredson,
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Eccentric Heel Drops: How to Do Them Correctly',
  description:
    'How to do eccentric heel drops for the Achilles tendon: the Alfredson protocol, sets, reps, tempo, and common mistakes.',
  h1: 'Eccentric heel drops: how to do them, sets, reps and what the research says',
  lede:
    'An eccentric heel drop is a strength exercise where you rise on both feet and lower slowly on one, letting the heel sink below a step edge. The lowering phase, called an eccentric contraction, is the point. It was designed for Achilles tendinopathy and first tested in a 1998 trial by Alfredson, where 15 athletes returned to running after doing it twice daily for three months.',
  takeaways: [
    'The 2024 Achilles guideline grades exercise (all tendon-loading types) **A**, its top grade, for mid-portion Achilles tendinopathy (Chimenti and colleagues, 2024).',
    'A 2021 network meta-analysis of 29 RCTs found no single exercise protocol clearly better than another; all were better than no exercise (van der Vlist and colleagues, 2021).',
    'For insertional Achilles pain (right at the heel bone), heel drops should stay at floor level, not below the step edge, because deep dorsiflexion compresses the tendon against the bone (Jonsson and colleagues, 2008).',
    'The Alfredson protocol calls for 3 x 15 twice daily, seven days a week, for about three months. Walkito starts at 3 x 10, each leg, on strength days.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is an eccentric heel drop?',
      paragraphs: [
        'An eccentric muscle contraction is one where the muscle lengthens under load. In a heel drop, the calf lengthens as you lower the heel below the step. That controlled descent is what builds tendon capacity over weeks. The upward phase is done on both feet to remove the concentric effort from the injured side.',
        'The most common confusion is between a heel drop and a calf stretch. A stretch holds the bottom position. A heel drop moves through it slowly, with the muscle working the whole way. Holding the bottom like a stretch removes the loading stimulus that makes the exercise work. **The benefit is in the slow, controlled descent.**',
      ],
      cites: [CITE.alfredson],
    },
    {
      h2: 'How do you do eccentric heel drops?',
      paragraphs: [
        'Stand on the edge of a step with the balls of your feet on the step and heels off the edge. Rise up on both feet. Shift your weight to the working leg.',
        'Lower that heel slowly over about three seconds, letting it sink below the step. Keep the knee straight. Use both feet to rise back to the top.',
        'A straight-knee heel drop targets the gastrocnemius, the bigger, more superficial calf muscle. Alfredson also prescribed a bent-knee version to target the soleus, the deeper calf muscle. The bent-knee version is the same movement with the knee bent to about 30 to 45 degrees during the lowering phase.',
      ],
      exercises: [
        {
          name: 'Eccentric heel drops (straight knee)',
          evidence: {
            level: 'strong',
            why: 'The original Alfredson 1998 protocol. 2024 guideline grades exercise A for mid-portion Achilles tendinopathy.',
          },
          dose: 'Alfredson: 3 x 15, twice daily, about three months. Walkito starts at 3 x 10, each leg',
          how: 'Stand on a step edge. Rise on both feet, shift to one leg, lower slowly over three seconds. Heel sinks below the step. Both feet to come back up. Straight knee.',
          often: 'Twice daily in the Alfredson protocol. Walkito: strength days.',
          feel: 'Hard work in the calf during the lowering, not a stretch at the bottom',
          stop: 'Pain above 5/10 that does not settle by the next morning',
          media: 'heel_drop_straight',
          caption: 'Eccentric heel drop: up on both feet, down slowly on one',
          alt: 'A figure on a step lowering one heel below the step edge with a straight knee, the calf and Achilles tendon highlighted',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'The Alfredson protocol: sets, reps and progression',
      paragraphs: [
        'The original protocol is 3 sets of 15 reps with a straight knee, plus 3 sets of 15 with a bent knee, done twice a day, seven days a week, for about three months. That is 180 reps per day. When the exercise becomes pain-free at bodyweight, load is added with a backpack.',
        'Walkito starts at a lower volume: 3 sets of 10, each leg, on strength days. The Alfredson dose is high and the compliance burden is real. A 2014 trial by Stevens and Tan found that a "do as tolerated" eccentric protocol with fewer reps produced equal improvements in pain and function, which is why newer guidance is less rigid about hitting the full 180 daily.',
      ],
      table: {
        caption: 'Alfredson 1998 eccentric heel drop protocol',
        head: ['Variation', 'Sets x reps', 'Sessions per day', 'Frequency'],
        rows: [
          ['Straight knee', '3 x 15', '2', 'Daily, about three months'],
          ['Bent knee', '3 x 15', '2', 'Daily, about three months'],
        ],
      },
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'How much pain is okay during eccentric heel drops?',
      paragraphs: [
        'In a trial of 38 people by Silbernagel (2007), one group continued running and loading during rehab under a pain-monitoring rule: pain during and after loading could go up to about **5 out of 10**, as long as it settled by the next morning and did not worsen week over week. That group did as well at twelve months as the group that rested first.',
        'This is different from the 6/10 stop rule used on the [plantar fasciitis](/plantar-fasciitis-exercises/) page. The 5/10 figure comes from one Achilles-specific study, not a universal standard, but it is the most cited pain model in Achilles rehab. Pain that does not settle overnight or gets worse each week means the load is too high.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Insertional vs. mid-portion: does it change the exercise?',
      keyFact: 'In a 2008 pilot study of 27 people with insertional Achilles pain, floor-level eccentric loading without dropping below neutral gave good results in 67 percent of cases (Jonsson and colleagues, 2008).',
      paragraphs: [
        'Mid-portion Achilles tendinopathy sits in the body of the tendon, typically 2 to 6 centimeters above the heel bone. Standard eccentric drops over a step edge are appropriate here.',
        'Insertional Achilles tendinopathy is pain right where the tendon meets the bone. In a 2008 pilot study of 27 people with chronic insertional pain, a modified protocol using floor-level-only eccentric loading, with no drop below neutral, reported good results in 67 percent of cases. Deep dorsiflexion compresses the tendon against the heel bone, which makes standard deep drops counterproductive for insertional pain.',
        'If your pain is right at the back of the heel bone:',
        {
          list: [
            'Do all heel drops on the floor.',
            'Do not go below the step edge.',
            'Do not stretch aggressively.',
          ],
        },
        'This is the most commonly missed modification in Achilles programs. For the full condition page, see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'What are the common mistakes with eccentric heel drops?',
      paragraphs: [
        {
          list: [
            '**Holding the bottom position like a stretch.** The benefit is in the slow descent, not in hanging at the bottom. Lower over three seconds, then use both feet to come back up immediately.',
            '**Dropping too far.** The heel should sink to its natural range below the step. Forcing it lower, tilting the foot in or out to get more range, strains the tendons on the inside or outside of the ankle. Three to five centimeters below the step is enough.',
            '**Going too fast.** Speed removes the eccentric load that the exercise is built around. If you cannot control the descent over about three seconds, drop to a double-leg version first.',
            '**Skipping the bent-knee version.** The straight-knee drop targets the gastrocnemius. The bent-knee version targets the soleus. Both muscles contribute to the Achilles tendon. The original protocol includes both.',
          ],
        },
      ],
    },
    {
      h2: 'Easier and harder versions',
      paragraphs: [
        'If a single-leg eccentric drop is too painful or too hard right now, step back to double-leg [calf raises](/exercises/calf-raises/) or a [heel raise hold](/exercises/calf-raises/). Those build the base strength needed for eccentric work.',
        'If bodyweight is too easy, add load. The original protocol used a backpack. A weighted vest or a calf-raise machine works too. The guideline also names heavy slow resistance (3 days per week, heavier loads, fewer reps) as equally effective, based on a 2015 trial of 58 people.',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
  ],
  faq: [
    {
      q: 'Are eccentric heel drops the same as calf raises?',
      cites: [CITE.alfredson],
      a: 'No. A calf raise includes both the up and the down phase. An eccentric heel drop uses both feet to rise, then one foot to lower slowly. Only the lowering (eccentric) phase is done on the injured side. The upward (concentric) phase is shared. This distinction matters because it controls how much load the tendon takes on each rep.',
    },
    {
      q: 'Can you do eccentric heel drops on flat ground?',
      cites: [CITE.jonsson],
      a: 'Yes, and you should if your pain is at the heel-bone attachment (insertional). A 2008 pilot study found good results with floor-level eccentric loading and no drop below neutral. For mid-portion pain, a step gives extra range, but flat ground still provides an eccentric load.',
    },
    {
      q: 'Should eccentric heel drops hurt?',
      cites: [CITE.silbernagel],
      a: 'Some discomfort is expected. One trial allowed pain up to about 5 out of 10 during loading, provided it settled by the next morning and did not worsen week to week (Silbernagel 2007). Pain that stays elevated overnight or increases each week is the signal to reduce the load.',
    },
    {
      q: 'How long do eccentric heel drops take to work?',
      cites: [CITE.achillesGuideline, CITE.alfredson],
      a: 'Recovery from Achilles tendinopathy is measured in months. The original trial ran the protocol for about three months. The 2024 guideline notes functional improvement can appear by two weeks, but fuller recovery extends well beyond that. No trial promises a fixed timeline.',
    },
    {
      q: 'Do eccentric heel drops help plantar fasciitis?',
      cites: [CITE.rathleff],
      a: 'Eccentric drops were designed for the Achilles tendon, not the plantar fascia. For plantar fasciitis, the tested exercise is the [towel heel raise](/exercises/towel-heel-raise/), which adds a towel under the toes to engage the fascia. Heel drops appear later in the Walkito calf chain, after the towel raise.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you felt a sudden pop, snap or a sensation of being kicked in the back of the leg',
      'the tendon area is swollen, red, warm, or has a visible gap',
      'you are currently taking or have recently taken a fluoroquinolone antibiotic and have new tendon pain',
      'pain is at the heel-bone attachment and gets worse, not better, with loading',
      'pain is present at rest or wakes you at night',
      'you cannot push up onto your toes at all on the painful side',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Eccentric heel drops are one step in a calf chain that Walkito builds into a weekly plan. The chain starts with seated raises and works up through double-leg raises, a hold, the towel raise, heel drops, and pogo hops. Each step opens once two sessions at the current level felt easy.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance and balance. If pain is right at the heel-bone attachment, have a clinician check it before you load it hard. Walkito is an exercise program. It does not diagnose.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Eccentric heel drops',
  campaign: 'ex-eccentric-heel-drops',
};
