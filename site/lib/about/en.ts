import { PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** "3, 5 or 7": a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

/*
 * The About page has one job: who makes Walkito, and how the guides on this
 * site are written, sourced, checked and corrected. Product questions (price,
 * phones, sessions, data, cancelling) are answered in full on /faq/, and the
 * home page says what the app is; this page does not repeat either, so Google
 * sees three pages with three jobs. The one exception is "Walkito at a
 * glance": the short facts block other pages and AI answers cite
 * (`/about/#facts`), kept here on purpose.
 *
 * Nothing here is invented, and the clinical-review section says so in as many
 * words: no reviewer is named because none has reviewed the guides yet. When
 * one does, their name, credentials and what they checked replace that
 * paragraph, and `reviewedBy` goes into `lib/schema.ts` the same day.
 */
export const ABOUT_EN: About = {
  lang: 'en',
  title: 'About Walkito: Who Makes It and How We Research',
  description:
    'Walkito is made by co-founders Rahim Hudaykulyyev and Rahman Bazarov. How its guides are sourced and checked, our corrections policy, and key facts.',
  h1: 'About Walkito',
  lede: 'Walkito is made by two people, its co-founders Rahim Hudaykulyyev and Rahman Bazarov, who also write every guide on this site. This page is about us and our method: where the guides’ numbers come from, how each claim is graded and checked, who has and has not reviewed them, and how to tell us when something is wrong. Questions about the app itself are answered in [the FAQ](/faq/).',
  sections: [
    {
      h2: 'Walkito at a glance',
      id: 'facts',
      bullets: [
        '**What it is:** an iPhone and Android app with exercises for heel pain, plantar fasciitis and flat feet.',
        '**Who makes it:** Rahim Hudaykulyyev and Rahman Bazarov, Walkito’s two co-founders.',
        '**Company:** Walkito is made by Nemy LLC, Sheridan, Wyoming, USA.',
        '**Released:** on the App Store since October 1, 2026, and on Google Play since October 2026.',
        '**Phones:** iPhone, on the [App Store](https://apps.apple.com/app/id6813076846), and Android, on [Google Play](https://play.google.com/store/apps/details?id=com.walkito.app).',
        `**Sessions:** ${or(PROGRAM.sessionMinutes)} minutes, at home, on ${or(PROGRAM.daysPerWeek)} training days a week that you pick.`,
        `**Progress:** a short test every ${PROGRAM.testEveryDays} days.`,
        '**Languages:** English, Russian, Spanish, Portuguese, French, Italian and German.',
        '**Price:** free to download, with a yearly or weekly subscription inside the app. The App Store or Google Play shows the price in your currency before you subscribe.',
        '**Also in:** ChatGPT and Claude, where it answers with short exercise videos and a starter plan. [Walkito in ChatGPT and Claude](/ai/).',
        '**What it is not:** a medical device. Walkito does not diagnose and does not replace a clinician.',
        '**Name:** Walkito is not related to walkito.com, a dog-walking service.',
        '**More:** [how the plan works](/program/) and [answers to common questions](/faq/).',
      ],
    },
    {
      h2: 'How we research',
      id: 'how-we-research',
      paragraphs: [
        // The one paragraph writers quote (outreach). The count is the unique studies and
        // guidelines linked on English pages (Oct 12, 2026: 261); 'more than 250' stays true as pages grow.
        'Walkito’s guides are built from more than 250 published studies and clinical guidelines. We read the full paper, not just the abstract, before a number goes on a page, and every grade and figure links to the study behind it, so you can open it and check. Walkito’s exercises are reviewed by [Dr. Carla Shayman, PT, DPT, OCS](#reviewer), a doctor of physical therapy and board-certified orthopedic clinical specialist.',
        'Rahim Hudaykulyyev and Rahman Bazarov, Walkito’s two co-founders, write the guides on this site: [plantar fasciitis exercises](/plantar-fasciitis-exercises/), [flat feet exercises](/flat-feet-exercises/), [heel pain from running](/heel-pain-runners/) and [the evidence page](/science/). We build them from clinical practice guidelines, randomized trials and systematic reviews. We don’t use blog posts, forums or other sites’ summaries as a source. When a summary cites a study, we go to the study. Every guide follows five rules:',
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
      h2: 'How we write and translate',
      id: 'how-we-write',
      paragraphs: [
        'Rahim and Rahman write the guides with AI writing tools (Claude), working from published studies and clinical guidelines. Every number links to its source. Before a new page goes live, we fact-check it against the studies it cites. Translations into the other six languages are made with AI tools and checked by native-speaking reviewers. When we find a mistake, or someone reports one, we correct the page: see [our corrections policy](#corrections).',
      ],
    },
    {
      h2: 'How are claims graded?',
      paragraphs: [
        'Exercises and claims carry one of three evidence labels. **Strong** means a clinical guideline grades it highly, or several good trials agree. **Moderate** means at least one well-designed trial supports it. **Early** means the research is small or just starting: worth trying, and the label may change as more comes out. A popular rule that a trial tested and did not back is marked **Not supported**.',
        'Walkito has no sponsors, no affiliate links and no paid placement. Nothing is on a page because someone paid for it. We recheck a page when new research on its topic comes out.',
      ],
    },
    {
      h2: 'Has a clinician reviewed Walkito?',
      id: 'clinician',
      paragraphs: [
        'Walkito’s exercises are reviewed by [Dr. Carla Shayman, PT, DPT, OCS](#reviewer), a doctor of physical therapy and board-certified orthopedic clinical specialist. Rahim and Rahman write them from the published research cited on each page.',
        'When a clinician does review the guides, this page will list their name, their credentials and what they checked. Until then, no page on this site claims a medical reviewer.',
      ],
    },
    {
      h2: 'Where do the guides stop?',
      paragraphs: [
        'The guides, like the app, do not diagnose and do not replace a clinician. They cannot tell you what is causing your pain. See a clinician first for warning signs such as pain after an injury or a fall, numbness, tingling or swelling, or one arch flattening suddenly as an adult. The full lists are in [the heel pain guide](/plantar-fasciitis-exercises/#see-a-clinician) and [the flat feet guide](/flat-feet-exercises/#see-a-clinician).',
      ],
    },
    {
      h2: 'Corrections policy',
      id: 'corrections',
      paragraphs: [
        `To report a mistake on this site, email ${SUPPORT_EMAIL}. It might be a figure that does not match its source, a dose that reads wrong or a broken link. We correct the page itself.`,
        'Every page shows the date its content last changed. That date moves only when the content really changes.',
      ],
    },
  ],
};
