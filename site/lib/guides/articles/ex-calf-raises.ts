import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations needed (append to CITATIONS[] in lib/citations.ts) ──
 *
 * (none - this page uses only existing CITE keys)
 */

export const EX_CALF_RAISES: Guide = {
  lang: 'en',
  page: 'exCalfRaises',
  mainSource: CITE.guideline,
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Calf Raises: How to Do Them Correctly',
  description:
    'How to do calf raises correctly: standing, seated, and isometric hold variations, muscles worked, sets and reps, common mistakes, and who they help.',
  h1: 'Calf raises: how to do them correctly, with sets, reps and variations',
  lede:
    'A calf raise is a standing or seated exercise where you push up onto the balls of your feet. It strengthens the gastrocnemius (the bigger outer calf muscle) and the soleus (the deeper one), and it loads the Achilles tendon and plantar fascia with every rep. This page covers the double-leg standing raise, the seated version, and the isometric hold at the top.',
  takeaways: [
    'The 2023 heel pain guideline grades calf strengthening B and recommends it alongside stretching, which it grades A (Koc and colleagues, 2023).',
    'A normative study of 566 healthy adults (ages 20 to 81) found a median single-leg calf raise count of 24 reps for men and 21 for women, shifting with age, sex and activity level (Hebert-Losier and colleagues, 2017).',
    'Reduced ankle dorsiflexion, often from a tight gastrocnemius, was the strongest independent risk factor for plantar fasciitis in a matched case-control study of 50 cases and 100 controls (Riddle and colleagues, 2003).',
    'Standing calf raises primarily load the gastrocnemius. Seated calf raises shift the load to the soleus because the bent knee shortens the gastrocnemius.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What muscles do calf raises work?',
      paragraphs: [
        'Standing calf raises with a straight knee mainly work the gastrocnemius, the two-headed muscle that gives the calf its visible shape. The gastrocnemius crosses the knee and the ankle, so it is most active when the knee is straight.',
        'Seated calf raises shift the load to the soleus, the deeper calf muscle that sits underneath. The soleus only crosses the ankle, so bending the knee at about 90 degrees takes the gastrocnemius mostly out of the movement and makes the soleus do the work.',
        'Both muscles connect to the heel through the Achilles tendon. Every calf raise also loads the plantar fascia to some degree, because the heel is the shared anchor point. A [towel heel raise](/exercises/towel-heel-raise/) increases the fascia load further by bending the toes.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'How to do a standing calf raise (double-leg)',
      paragraphs: [
        'Stand with both feet flat on the floor, about hip-width apart. Hold a wall or chair for balance. Rise up onto the balls of your feet, pushing through the big toes. Hold for a beat at the top, then lower slowly over about three seconds. Both feet share the load.',
        'If you have access to a step, stand with the balls of your feet on the edge and let the heels hang slightly below on the way down. That extra range at the bottom stretches the calf a little more each rep. On the floor, the range is smaller but the exercise still works.',
      ],
      exercises: [
        {
          name: 'Double-leg calf raises',
          evidence: {
            level: 'moderate',
            why: 'The 2023 guideline grades strength work B. Double-leg raises are a stepping stone in tested programs, not tested on their own.',
          },
          dose: 'Walkito starts at 3 x 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Hold a wall for balance.',
          often: 'Strength days',
          feel: 'The calves working together',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Double-leg calf raises: rise straight up, lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How to do a seated calf raise',
      paragraphs: [
        'Sit in a chair with your feet flat on the floor, knees bent at about 90 degrees. Press up through the balls of both feet, lifting both heels off the floor. Lower slowly. Placing your hands on your knees and pressing down adds resistance.',
        'Seated raises are the lowest-load entry point in the calf chain. They put almost no stress on the heel compared to standing work, which makes them a good starting point when standing calf raises are too painful.',
      ],
      exercises: [
        {
          name: 'Seated calf raises',
          evidence: {
            level: 'moderate',
            why: 'Part of published rehab progressions (Silbernagel Phase 1). Not tested alone in an RCT.',
          },
          dose: 'Walkito starts at 3 x 10, both feet',
          how: 'Sit with feet flat. Press up through the balls of both feet. Hands on knees add resistance.',
          often: 'Strength days, while this is your level',
          feel: 'Work in the calves, very little load on the heel',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_seated',
          caption: 'Seated calf raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
      ],
      cites: [CITE.silbernagel, CITE.guideline],
    },
    {
      h2: 'How to do a heel raise hold (isometric)',
      paragraphs: [
        'Rise onto your toes on both feet, then hold still at the top. Do not let the heels sink back down. An isometric hold means the muscle works without moving through a range. This loads the Achilles tendon without the up-and-down motion that some early-stage tendon or heel pain can find irritating.',
        'The 2024 Achilles guideline names isometric loading as one of the effective tendon-loading types, though no isolated Achilles isometric-only trial has been published.',
      ],
      exercises: [
        {
          name: 'Heel raise hold',
          evidence: {
            level: 'moderate',
            why: 'Named in the 2024 Achilles guideline as an effective loading type. No isolated isometric-only RCT.',
          },
          dose: 'Walkito starts at 3 x 20s hold, both feet',
          how: 'Rise onto both toes, hold at the top without sinking. Hold a wall for balance.',
          often: 'Strength days, the step between double-leg raises and single-leg work',
          feel: 'The calves working to stay still',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on both feet, the calves highlighted',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.guideline],
    },
    {
      h2: 'How many calf raises should you do?',
      keyFact: 'A normative study of 566 healthy adults aged 20 to 81 found single-leg calf-raise counts varied by age, sex and activity level, with women reaching a median of 21 reps (Hebert-Losier and colleagues, 2017).',
      paragraphs: [
        'It depends on where you are in the ladder and what you are working on. For general calf strength, 3 sets of 10 to 15 reps at a slow tempo is a common starting dose. For the research-tested plantar fasciitis protocol, the towel heel raise starts at a 12-repetition maximum for 3 sets and progresses to 8RM for 5 sets over about five weeks.',
        'A useful benchmark is the single-leg heel-raise endurance test. A normative study of 566 healthy adults found a median of 24 reps for men and 21 for women, varying with age, sex and activity. The calf goal in the Walkito app is 25 single-leg calf raises. Reaching it does not end the work. It moves to maintaining.',
        'For more on the specific plantar fasciitis protocol, see [towel heel raises](/exercises/towel-heel-raise/). For the Achilles tendon version, see [eccentric heel drops](/exercises/eccentric-heel-drops/).',
      ],
      cites: [CITE.hebertLosier, CITE.rathleff],
    },
    {
      h2: 'Common mistakes with calf raises',
      paragraphs: [
        'Going too fast. A slow descent (about three seconds) is what builds strength. Bouncing at the bottom wastes the eccentric phase, which is the part that does most of the work for tendon adaptation.',
        'Rolling to the outside edge of the foot. The push should go through the big toe and the ball of the foot. If the ankle rolls outward, the calf cannot contract fully and the small muscles on the outside of the ankle take strain they are not built for.',
        'Skipping the seated version. If standing raises are painful, skipping to single-leg work on a step makes things worse. The ladder exists for a reason: seated, then double-leg standing, then a hold, then single-leg. Each step should feel manageable for two sessions before moving on.',
      ],
    },
    {
      h2: 'Calf raises for plantar fasciitis vs. Achilles tendonitis',
      paragraphs: [
        'For plantar fasciitis, the evidence points to the [towel heel raise](/exercises/towel-heel-raise/), where the towel under the toes loads the fascia alongside the calf. The pain threshold is 6/10. The full condition page is at [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
        'For Achilles tendonitis, the focus shifts to [eccentric heel drops](/exercises/eccentric-heel-drops/), where the lowering phase is the point and the towel is not used. The pain model from one trial allows loading up to about 5/10 as long as it settles by morning. The full page is at [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
        'The double-leg calf raise, the seated raise and the isometric hold all appear in both pathways as early steps. They build the baseline strength that makes the specific loaded exercise possible.',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
  ],
  faq: [
    {
      q: 'Do calf raises work the glutes?',
      a: 'No. Calf raises target the gastrocnemius and soleus in the lower leg. The glutes stabilize the hip during single-leg variations but are not the primary muscle working. For hip and glute strength, see [hip abduction](/exercises/hip-abduction/).',
    },
    {
      q: 'Are seated or standing calf raises better?',
      cites: [CITE.patelGastrocnemius],
      a: 'They target different muscles. Standing raises mainly work the gastrocnemius, the bigger calf muscle. Seated raises shift load to the soleus, the deeper one, because the bent knee takes the gastrocnemius largely out of the movement. Both have a role, and doing them together covers the full calf.',
    },
    {
      q: 'How many single-leg calf raises is normal?',
      cites: [CITE.hebertLosier],
      a: 'A normative study of 566 healthy adults found a median of 24 reps for men and 21 for women, adjusting for age, sex and activity level (Hebert-Losier 2017). The number is useful for tracking change over weeks and comparing one leg to the other, not as a pass-fail line.',
    },
    {
      q: 'Should calf raises be done every day?',
      cites: [CITE.rathleff],
      a: 'The Rathleff plantar fasciitis trial used every other day. Muscles and tendons need recovery between loaded sessions. Walkito schedules calf raises on strength days with rest days between. Daily loading without rest can stall progress or increase pain.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you felt a sudden pop or snap in the calf or Achilles during a raise',
      'the calf is swollen, red, warm or hard to the touch',
      'you cannot push up onto your toes at all on one side',
      'pain does not settle overnight and gets worse week over week',
      'numbness, tingling or burning appears in the foot',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito builds a plan that starts at your level and moves up when you are ready. The calf chain runs from seated raises to double-leg standing raises, a hold, the towel raise, eccentric heel drops and pogo hops. You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes.',
    more: [
      'Every 14 days, a short test checks calf endurance and balance. The calf goal is 25 single-leg raises. Reaching it does not end the work; a new goal takes its place. Walkito is an exercise program. It does not diagnose.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Calf raises',
  campaign: 'ex-calf-raises',
};
