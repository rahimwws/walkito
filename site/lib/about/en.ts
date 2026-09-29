import { PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** "3, 5 or 7" — a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

/*
 * Nothing here is invented, and the clinical-review section says so in as many
 * words: no reviewer is named because none has reviewed the guides yet. When
 * one does, their name, credentials and what they checked replace that
 * paragraph, and `reviewedBy` goes into `lib/schema.ts` the same day.
 */
export const ABOUT_EN: About = {
  lang: 'en',
  title: 'About Walkito: How Our Guides Are Written',
  description:
    'What Walkito is, how its heel pain and flat feet guides are written and sourced, what the app does not do, and how to report a mistake.',
  h1: 'About Walkito',
  lede: 'Walkito is an iPhone app of exercises for heel pain, arch pain and flexible flat feet, built for runners. This page says how the guides on this site are written, where their figures come from, what the app does not do, and how to tell us when something is wrong.',
  sections: [
    {
      h2: 'What Walkito is',
      paragraphs: [
        `Walkito builds an exercise plan one week at a time around a measurable goal: pain-free mornings, a ${PROGRAM.goals.archHoldSeconds}-second arch hold, ${PROGRAM.goals.calfRaises} single-leg calf raises, ${PROGRAM.goals.balanceSeconds} seconds of single-leg balance, or a left/right difference under ${PROGRAM.goals.gapPercent}%. You start with at most three goals, pain first if something hurts. You choose ${or(PROGRAM.daysPerWeek)} training days a week and sessions of ${or(PROGRAM.sessionMinutes)} minutes, each day adapts to how your morning went, and a short test every ${PROGRAM.testEveryDays} days (every ${PROGRAM.testEveryDaysAfterGoal} once your first goal is reached) shows whether the numbers are moving.`,
        'There is no fixed length. A goal that is reached moves to maintaining and the next one takes its place, for as long as you use the app. [How the plan works](/program/).',
        'The app is in English, Russian and Spanish, and is coming soon to the App Store.',
      ],
    },
    {
      h2: 'How the content is written',
      paragraphs: [
        'The guides ([plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) and [flat feet exercises](/flat-feet-exercises/)) and [the evidence page](/science/) follow the same rules:',
      ],
      bullets: [
        '**Every figure traces to a primary source** (a randomised trial, a meta-analysis or a clinical guideline), printed and linked on the page that uses it. A number we cannot trace to one does not go on the site, and sentences have been removed for that reason.',
        '**The reference point is the 2023 clinical practice guideline** on heel pain from the Journal of Orthopaedic & Sports Physical Therapy, which grades each intervention by the strength of its evidence, including the ones it advises against.',
        '**Qualifiers travel with the figures.** A three-month result is always printed with what happened at twelve months, and every claim about arch shape says which feet it was measured on.',
        '**Doses are the app’s own starting doses**, where Walkito’s exercises begin, not a prescription for you.',
        '**No promise of a cure.** The pages say what the research found and where its evidence stops.',
      ],
    },
    {
      h2: 'What Walkito does not do',
      paragraphs: [
        'Walkito does not diagnose, does not treat, and does not replace a clinician. It cannot tell you what is causing your pain. See a clinician first if:',
      ],
      // The guides' list (`lib/guides/en.ts`), word for word, plus the arch.
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
        'the arch stays flat even when the foot is off the ground',
      ],
    },
    {
      h2: 'Clinical review',
      paragraphs: [
        'The guides are written by the Walkito team from the published research cited on each page. They have not yet been reviewed by a licensed clinician.',
        'When that review has happened, the reviewer’s name, credentials and what they checked will be listed here. Until then, no page on this site claims a medical reviewer.',
      ],
    },
    {
      h2: 'Corrections and contact',
      paragraphs: [
        `If you find a mistake (a figure that does not match its source, a dose that reads wrong, a broken link), email ${SUPPORT_EMAIL}. Corrections are made on the page itself.`,
        'Every page shows the date its content last changed, and that date moves only with a real edit.',
      ],
    },
    {
      h2: 'Privacy',
      paragraphs: ['What the app stores, what leaves the phone and how to delete it is in the [privacy policy](/privacy/).'],
    },
  ],
};
