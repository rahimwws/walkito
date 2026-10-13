import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations needed (append to CITATIONS[] in lib/citations.ts) ──
 *
 * springer | Springer BA, Marin R, Cyhan T, Roberts H, Gill NW. Normative
 *   values for the unipedal stance test with eyes open and closed. Journal of
 *   Geriatric Physical Therapy. 2007;30(1):8-15. |
 *   doi: 10.1519/00139143-200704000-00003 | PMID: 19839175 |
 *   design: cross-sectional normative study (549 healthy adults, 18-99 years)
 *
 * bellows | Bellows R, Wong CK. The effect of bracing and balance training on
 *   ankle sprain incidence among athletes: a systematic review with
 *   meta-analysis. International Journal of Sports Physical Therapy.
 *   2018;13(3):379-388. | PMID: 30038824 |
 *   design: systematic review with meta-analysis (8 RCTs; balance-training
 *   arm 3,577 athletes, bracing arm 3,581 athletes)
 */

export const EX_SINGLE_LEG_BALANCE: Guide = {
  lang: 'en',
  page: 'exSingleLegBalance',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Single-Leg Balance: How to Do It and Why It Matters',
  description:
    'How to do the single-leg balance hold: technique, hold times by age, eyes-closed progression, what it tests, and common mistakes.',
  h1: 'Single-leg balance: how to do it, normal hold times and the eyes-closed progression',
  lede:
    'Standing on one leg is one of the simplest tests of ankle and foot control. It is also an exercise. Every second you hold the position, the small muscles in your foot and ankle work to keep you upright. A 2007 study of 549 healthy adults found that the ability to stand on one leg with eyes open and closed drops steadily with age, and a 2018 meta-analysis found that balance training reduced ankle sprain risk by 46 percent in athletes.',
  takeaways: [
    'Healthy adults aged 18 to 39 averaged 43.3 seconds on one leg with eyes open and 9.4 seconds with eyes closed. By age 60 to 69, the eyes-open average was 26.9 seconds and the eyes-closed average had dropped to 2.8 seconds (Springer and colleagues, 2007).',
    'A meta-analysis of 3,577 athletes found that balance training reduced the risk of ankle sprains by 46 percent compared to no intervention (Bellows and Wong, 2018).',
    'The Walkito balance goal is 30 seconds on one leg. The test runs every 14 days while the balance goal is active.',
    'Closing the eyes removes vision as a balance input, forcing the foot and ankle to do more of the work. The app includes an eyes-closed stand as the next step after the open-eyes hold.',
  ],
  toc: false,
  sections: [
    {
      h2: 'How do you do a single-leg balance hold?',
      paragraphs: [
        'Stand near a wall or counter. Lift one foot off the ground by bending the knee slightly. Look at a fixed point straight ahead. Let the standing foot wobble. That wobble is the point: the small muscles in the foot and ankle are working to keep you upright.',
        'Hold for as long as you can, up to 30 seconds, then switch sides. Three holds per side is a common dose. If you cannot hold for more than a few seconds, keep your fingertips on the wall and build up gradually.',
      ],
      exercises: [
        {
          name: 'Single-leg balance hold',
          evidence: {
            level: 'moderate',
            why: 'Balance training reduces ankle sprain risk (Bellows 2018 meta-analysis). Single-leg stance is a standard clinical measure with normative data (Springer 2007).',
          },
          dose: 'Walkito starts at 3 x 30s hold, each side',
          how: 'Stand on one foot near a wall. Look at a fixed point. Let the ankle wobble. Hold up to 30 seconds.',
          often: 'Most sessions',
          feel: 'The foot and ankle working to stay still',
          stop: 'Sharp pain in the foot or ankle, not just wobble',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: let the foot wobble, that is the exercise',
          alt: 'A figure standing on one leg near a wall, the foot and ankle highlighted',
        },
      ],
      cites: [CITE.springer, CITE.bellows],
    },
    {
      h2: 'How long should you be able to stand on one leg?',
      paragraphs: [
        'A 2007 study tested 549 healthy adults across age groups. The results give a rough benchmark, not a pass-fail line.',
      ],
      table: {
        caption: 'Mean single-leg stance times, eyes open and closed (Springer 2007)',
        head: ['Age group', 'Eyes open (seconds)', 'Eyes closed (seconds)'],
        rows: [
          ['18-39', '43.3', '9.4'],
          ['40-49', '40.3', '7.3'],
          ['50-59', '37.0', '4.8'],
          ['60-69', '26.9', '2.8'],
          ['70-79', '15.0', '2.0'],
          ['80-99', '6.2', '1.3'],
        ],
      },
      after: [
        'The numbers drop sharply once the eyes close, especially after 50. That makes the eyes-closed version a much more sensitive test of ankle and foot control. It is also why the Walkito app includes an eyes-closed progression after the open-eyes hold.',
        'What matters more than matching a table is whether your time is improving over weeks and whether both sides are roughly even. A large gap between legs can point to a strength or stability deficit on one side.',
      ],
      cites: [CITE.springer],
    },
    {
      h2: 'The eyes-closed progression',
      paragraphs: [
        'Closing your eyes removes the visual input that your brain normally uses to help balance. That forces the proprioceptors in the foot and ankle, the sensors that detect position and movement, to do more of the work. It is a harder version of the same exercise, not a different one.',
        'Stand near a wall for safety. Close your eyes and hold as long as you can. Most people find their time drops to a fraction of their eyes-open time. That gap narrows with practice.',
        'The Walkito app includes the eyes-closed stand as a separate exercise: 3 holds of 20 seconds, both feet (alternating). It opens as a progression once the open-eyes balance goal is solid.',
      ],
    },
    {
      h2: 'Why does balance matter for foot pain?',
      keyFact: 'For ankle sprains, a pooled analysis of 8 studies and 3,577 athletes found that balance training lowered sprain risk by 46 percent versus no intervention (Bellows and Wong, 2018).',
      paragraphs: [
        'Balance is not separate from foot strength. When you stand on one leg, the intrinsic muscles of the foot (the small muscles inside the foot that support the arch), the calf muscles, the tibialis anterior, and the hip stabilizers all work together. A deficit anywhere in that chain makes the foot compensate.',
        'For plantar fasciitis and flat feet, balance training appears in exercise programs alongside stretching and strengthening because it trains the whole chain at once. A 2023 trial of 52 people with flexible flat feet found that a program combining short-foot exercises, ankle work, hip strengthening, stretching and balance work changed arch shape more than a control group. Balance was not isolated in that trial, but it was part of the program that worked.',
        'For ankle sprains specifically, a 2018 meta-analysis of 8 studies and 3,577 athletes found that balance training reduced ankle sprain risk by 46 percent compared to no intervention. That is the strongest single finding behind including balance in a foot program.',
      ],
      cites: [CITE.bellows, CITE.brijwasi],
    },
    {
      h2: 'What are the common mistakes with single-leg balance?',
      paragraphs: [
        'Looking at the floor. Your eyes should be on a fixed point at eye level. Looking down shifts your weight forward and makes the exercise easier, which defeats the purpose.',
        'Locking the standing knee. A slight bend keeps the muscles active. A locked knee transfers the load to the joint rather than the muscles around it.',
        'Trying not to wobble. The wobble is the exercise. The small corrections your foot makes to stay upright are what build proprioception and ankle control. Gripping the floor with curled toes or tensing up to eliminate all movement reduces the training effect.',
        'Standing too far from a wall. You need to be close enough to catch yourself if you lose balance, especially during the eyes-closed version. Safety first.',
      ],
    },
    {
      h2: 'Easier and harder versions',
      paragraphs: [
        'If you cannot hold one leg for more than a few seconds, keep fingertips on a wall and work up. Even a light touch gives the brain extra balance input. Remove one finger at a time as you improve.',
        'If 30 seconds on a hard floor feels easy, try standing on a folded towel or a pillow. The soft surface makes the ankle work harder with each wobble. The app includes a balance-on-a-pillow exercise as a further progression.',
        'The hardest progression is single-leg balance with eyes closed on a soft surface. That removes both visual input and a stable floor, leaving the foot and ankle to do nearly all the work.',
        'For related exercises that build the chain, see [calf raises](/exercises/calf-raises/), [tibialis raises](/exercises/tibialis-raises/) and [short foot exercise](/exercises/short-foot-exercise/).',
      ],
    },
  ],
  faq: [
    {
      q: 'How long should you be able to stand on one leg?',
      cites: [CITE.springer],
      a: 'A 2007 normative study of 549 healthy adults found that 18-to-39-year-olds averaged 43.3 seconds with eyes open and 9.4 seconds with eyes closed. By age 60 to 69, it was 26.9 seconds open and 2.8 seconds closed (Springer 2007). The Walkito balance goal is 30 seconds per side.',
    },
    {
      q: 'Does single-leg balance help ankle sprains?',
      cites: [CITE.bellows],
      a: 'A 2018 meta-analysis of 8 studies and 3,577 athletes found that balance training reduced the risk of ankle sprains by 46 percent compared to no intervention (Bellows and Wong, 2018). Most of the programs studied included balance exercises like single-leg stands alongside other training.',
    },
    {
      q: 'Why is single-leg balance harder with eyes closed?',
      cites: [CITE.springer],
      a: 'Your brain uses vision, inner ear signals, and proprioception (sensors in the foot and ankle) together to balance. Closing the eyes removes one of the three inputs, forcing the other two to carry more load. In the Springer 2007 data, eyes-closed times were a fraction of eyes-open times at every age.',
    },
    {
      q: 'How often should you practice single-leg balance?',
      a: 'Daily practice is fine because the load is low. Walkito schedules it on most session days. Even a few minutes of practice per day can improve hold times over weeks. The key is consistency, not duration.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you lose balance frequently or have falls that are not explained by the surface or footwear',
      'one ankle gives way repeatedly, especially after a previous sprain',
      'numbness, tingling or loss of feeling in the foot or lower leg',
      'dizziness or a spinning sensation when you change positions',
      'a sudden change in balance that you cannot explain',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito includes the single-leg hold and the eyes-closed stand as part of a plan alongside calf raises, stretches and foot exercises. The balance goal is 30 seconds on each leg. Every 14 days, a short test checks how long you can hold, and the two-sided gap is tracked too.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Once the balance goal is met, the test moves to every 28 days and a new goal takes its place. Walkito is an exercise program. It does not diagnose.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Single-leg balance',
  campaign: 'ex-single-leg-balance',
};
