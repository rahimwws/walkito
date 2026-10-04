import { PAIN_GOAL_MAX, PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** "3, 5 or 7": a list of options as a sentence says it. */
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
    'What Walkito is, how its heel pain and flat feet guides are written and sourced, what Walkito does not do, and how to report a mistake.',
  h1: 'About Walkito',
  lede: 'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day. This page explains how the guides on this site are written and where their numbers come from. It also says what Walkito does not do, and how to tell us when something is wrong.',
  sections: [
    {
      h2: 'What is Walkito?',
      paragraphs: [
        `Walkito is an iPhone app that builds your exercise plan one week at a time around goals you can measure. There are five goals: pain-free mornings (morning pain at ${PAIN_GOAL_MAX}/10 or less for ${PROGRAM.painFreeDays} days in a row), a ${PROGRAM.goals.archHoldSeconds}-second arch hold, ${PROGRAM.goals.calfRaises} single-leg calf raises, ${PROGRAM.goals.balanceSeconds} seconds of balance on one leg, and a gap of less than ${PROGRAM.goals.gapPercent}% between your left and right sides. You start with up to three of them. If something hurts, pain comes first.`,
        `You pick ${or(PROGRAM.daysPerWeek)} training days a week and sessions of ${or(PROGRAM.sessionMinutes)} minutes. Each day's session adapts to how your morning went. Every ${PROGRAM.testEveryDays} days, a short test shows whether your numbers are moving. Once you reach your first goal, the test comes every ${PROGRAM.testEveryDaysAfterGoal} days.`,
        'The plan has no fixed length. When you reach a goal, it moves to maintaining at a lower dose, and the next goal takes its place. That goes on for as long as you use Walkito. [How the plan works](/program/).',
        'Walkito is in English, Russian and Spanish.',
      ],
    },
    {
      h2: 'How we research',
      id: 'how-we-research',
      paragraphs: [
        'Walkito Research writes the guides on this site: [plantar fasciitis exercises](/plantar-fasciitis-exercises/), [flat feet exercises](/flat-feet-exercises/), [heel pain from running](/heel-pain-runners/) and [the evidence page](/science/). We build them from clinical practice guidelines, randomized trials and systematic reviews. We don’t use blog posts, forums or other sites’ summaries as a source. When a summary cites a study, we go to the study.',
        'We read the full paper, not just the abstract, before a number from it goes on a page. Every dose, grade and figure links to the study behind it, so you can open it and check.',
        'Exercises and claims carry one of three evidence labels. **Strong** means a clinical guideline grades it highly, or several good trials agree. **Moderate** means at least one well-designed trial supports it. **Early** means the research is small or just starting: worth trying, and the label may change as more comes out. A popular rule that a trial tested and did not back is marked **Not supported**.',
        'Walkito has no sponsors, no affiliate links and no paid placement. Nothing is on a page because someone paid for it. We recheck a page when new research on its topic comes out. Every guide follows five rules:',
      ],
      bullets: [
        '**Every figure traces to a primary source.** That means a randomized trial, a meta-analysis or a clinical guideline. The source is printed and linked on the page that uses it. If we cannot trace a number to one, it does not go on the site. We have removed sentences for that reason.',
        '**The 2023 clinical practice guideline on heel pain is the reference point.** It comes from the Journal of Orthopaedic & Sports Physical Therapy. It grades each intervention by how strong its evidence is, including the ones it advises against.',
        '**Qualifiers travel with the figures.** A three-month result is always printed with what happened at twelve months. Every claim about arch shape says which feet it was measured on.',
        '**Doses are Walkito’s own starting doses.** They show where Walkito’s exercises begin. They are not a prescription for you.',
        '**No promise of a cure.** The pages say what the research found and where its evidence stops.',
      ],
    },
    {
      h2: 'What does Walkito not do?',
      paragraphs: [
        'Walkito does not diagnose, does not treat, and does not replace a clinician. Walkito cannot tell you what is causing your pain. See a clinician first if:',
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
      h2: 'Has a clinician reviewed Walkito’s guides?',
      id: 'clinician',
      paragraphs: [
        'No licensed clinician has reviewed Walkito’s guides yet. The Walkito team writes them from the published research cited on each page.',
        'When a clinician does review them, this page will list their name, their credentials and what they checked. Until then, no page on this site claims a medical reviewer.',
      ],
    },
    {
      h2: 'How do I report a mistake?',
      paragraphs: [
        `To report a mistake on this site, email ${SUPPORT_EMAIL}. It might be a figure that does not match its source, a dose that reads wrong or a broken link. We correct the page itself.`,
        'Every page shows the date its content last changed. That date moves only when the content really changes.',
      ],
    },
    {
      h2: 'How does Walkito handle my data?',
      paragraphs: [
        'Walkito’s [privacy policy](/privacy/) explains what Walkito stores, what leaves your phone and how to delete it. In short, your plan and check-ins are saved to your account, and Apple Health data stays on your phone.',
      ],
    },
  ],
};
