import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Comparison page: apps for flat feet. App facts from the US App Store
 * listings of Arch, ArchFix and Injurymap (checked 2026-10-12) and from
 * /best-apps-for-foot-pain/ and the heel pain apps study (2026-10-11).
 * Evidence as on /flat-feet-exercises/ and /best-apps-for-foot-pain/.
 * Walkito: never a price, only "weekly or yearly, price shown in the store".
 */
export const BEST_FLAT_APP_EN: Guide = {
  lang: 'en',
  page: 'bestFlatApp',
  mainSource: CITE.hoangFlatfootNMA,
  published: '2026-10-12',
  updated: '2026-10-12',
  title: 'Best App for Flat Feet in 2026: 5 Apps Compared',
  description:
    'Best app for flat feet in 2026: Arch, ArchFix, Injurymap, How to Do Foot Exercises and Walkito compared on price, platforms, what they offer and the research.',
  h1: 'Best app for flat feet: 5 apps compared',
  lede:
    'No flat feet app has been tested in a published trial, so there is no proven best one: the research supports the exercises, not any app. The most focused arch trainer is Arch: Flat Feet Trainer ($9.99 a month or $39.99 a year, iPhone); ArchFix is free and adds a footprint check; Injurymap covers arch pain along with other joints; and Walkito puts arch work into a plan that adjusts to morning pain. Exercise can ease flat feet pain, but in a review of 10 trials it did not realign the foot.',
  intro: [
    'Walkito is a foot exercise app, so we are not neutral. The facts about the other apps come from their own store listings, checked in October 2026. For the exercises themselves, free, see our [flat feet exercises guide](/flat-feet-exercises/).',
  ],
  takeaways: [
    'None of the flat feet apps we found has a published trial; the trials are of the exercises.',
    'In a trial of 52 people with flexible flat feet, six weeks of short-foot, ankle, hip and stretching work changed arch shape more than in a control group (Brijwasi and Borkar, 2023).',
    'In a network meta-analysis of 10 trials, exercise and foot orthoses reduced pain in adult flat feet but did not realign foot posture (Hoang and colleagues, 2021).',
    'Arch: Flat Feet Trainer costs $9.99 a month or $39.99 a year with a 7-day free trial on the yearly plan; ArchFix showed nothing to buy (App Store, checked October 2026).',
    'Walkito is on iPhone and Android, as a weekly or yearly subscription with the current price shown in the store.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Which apps are there for flat feet?',
      paragraphs: [
        'Prices are as each app publishes them in the US, checked in October 2026. They can differ by country and change, so check the store before you pay.',
      ],
      table: {
        caption: 'Flat feet apps compared (checked October 2026)',
        head: ['App', 'Price (as published)', 'Platforms', 'Best for', 'Not for'],
        rows: [
          ['[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858)', '$9.99/mo or $39.99/yr; 7-day free trial on the yearly plan', 'iPhone', 'A simple arch trainer with 40+ foot exercises', 'Android users; anyone who wants a named clinician or cited studies'],
          ['[ArchFix](https://apps.apple.com/us/app/archfix/id6743368281)', 'Free; nothing to buy shown', 'iPhone, Android', 'A free start, with a footprint check you do at home', 'Anyone who wants a plan that adjusts to pain'],
          ['[Injurymap](https://apps.apple.com/us/app/injurymap-physiotherapy-app/id1102375789)', '$9.49/mo or $40.99/yr; 2-week free trial', 'iPhone, Android', 'Arch pain plus pain in other joints, one app', 'Anyone who wants a flat-feet-only program'],
          ['[How to Do Foot Exercises](https://play.google.com/store/apps/details?id=com.Fitness.Flexibility.Workout.How.to.Do.Foot.Exercises)', 'Free, with ads', 'Android', 'A free list of general foot exercises', 'Anyone who wants a plan or progress tracking'],
          ['[Walkito](https://walkito.site/)', 'Weekly or yearly subscription; current price shown in the store', 'iPhone, Android', 'Flat feet with arch or heel pain; short sessions on 3, 5 or 7 days a week', 'Children; rigid flat feet; anyone who wants a clinician in the app'],
        ],
      },
      sourceNote:
        'Sources: App Store listings for Arch: Flat Feet Trainer (id6755728858), ArchFix (id6743368281) and Injurymap (id1102375789), checked October 12, 2026; Android availability and How to Do Foot Exercises from our foot pain apps check, October 11, 2026.',
    },
    {
      h2: 'What should a flat feet app include?',
      keyFact: 'In a trial of 52 people with flexible flat feet, six weeks of short-foot, ankle, hip and stretching work changed arch shape more than in a control group (Brijwasi and Borkar, 2023).',
      paragraphs: [
        'First, a check that your flat feet are **flexible**: the arch comes back when you lift the foot or stand on tiptoe. The trials were run on flexible flat feet, and exercise will not change the shape of a rigid one. Then look for:',
        {
          list: [
            'The [short foot exercise](/exercises/short-foot-exercise/) and other arch work that gets harder over weeks.',
            'Ankle, hip and calf work, since the program that changed arch shape included them.',
            'A way to go easier on a bad day, and clear advice on when to see a clinician.',
            'No promise of a new arch: in a 2024 review of the short foot exercise, there was no clear overall change in arch height; only programs longer than 6 weeks showed one.',
          ],
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Arch: Flat Feet Trainer: the most focused',
      paragraphs: [
        'Arch is built only for flat feet and arch strength. It has 40+ foot exercises with illustrations and audio coaching, custom routines, streaks, a calendar and reminders. It costs $9.99 a month or $39.99 a year, with a 7-day free trial on the yearly plan, and all features need a subscription. It has a 4.3 rating from 6 ratings.',
        'Its listing says \u201cSee significant results in just 6 weeks\u201d and \u201cBACKED BY SCIENCE\u201d without naming a study or a clinician. Its App Store privacy label lists purchases, identifiers and usage data as used to track you. It is iPhone only.',
      ],
    },
    {
      h2: 'ArchFix: free, with a footprint check',
      paragraphs: [
        'ArchFix lets you make a footprint at home with paper and paint or a wet foot, then checks the photo for signs of flat feet. It adds preventive and corrective exercises with videos and text, your own exercise plans, reminders, and repeat footprint scans to track change. The App Store listing showed it free with nothing to buy.',
        'It says it is not a substitute for a diagnosis. In our heel pain apps study, its website called its exercises \u201cclinically validated\u201d without citing a study. It has too few ratings to show a score.',
      ],
    },
    {
      h2: 'Injurymap: arch pain and other joints',
      paragraphs: [
        'Injurymap is a general pain app that lists arch pain among the areas it covers, with Achilles, ankle, knee, hip, back, neck, shoulder and elbow pain. Its listing says its 350+ exercises were selected by medical specialists and that it adjusts your program as you go. It is CE-marked as a medical device in the EU.',
        'It costs $9.49 a month or $40.99 a year after a two-week free trial, and has a 4.2 rating from 80 ratings. It does not have a flat-feet-only program, so it fits best if your arch is one of several sore spots.',
      ],
    },
    {
      h2: 'How to Do Foot Exercises: a free list on Android',
      paragraphs: [
        'This Android app offers general foot exercises for free, with ads. It names no clinician and has no plan that changes over time. It is fine as a reminder of what to do; for a plan, our [flat feet exercises guide](/flat-feet-exercises/) gives doses, how often, and when to stop, for free.',
      ],
    },
    {
      h2: 'Walkito: what it does and what it does not',
      paragraphs: [
        'Walkito’s flat feet work starts with towel scrunches and big toe lifts, then moves up through three versions of the short foot, with toe spreads, band turn-ins, a single-leg hold, hip abduction and calf stretches around them. Each morning a check-in makes a bad day lighter, and every 14 days a test measures your arch hold, calf raises and balance and compares left and right.',
        'It is on iPhone and Android, with sessions of 3, 5 or 10 minutes on the 3, 5 or 7 days a week you pick. It is a weekly or yearly subscription; the price is shown in the store. It launched in October 2026 and has no ratings yet.',
      ],
      table: {
        caption: 'Walkito for flat feet: best for and not for',
        head: ['Best for', 'Not for'],
        rows: [
          ['Adults with flexible flat feet and arch or heel pain', 'Children: Walkito is built for adults'],
          ['People on their feet all day', 'Rigid flat feet, where the arch does not come back'],
          ['Short sessions that adjust to how your feet feel each morning', 'Anyone who wants a clinician or a medical device'],
          ['Seeing your arch hold and balance change every 14 days', 'Anyone who expects an app to change the shape of the foot'],
        ],
      },
      after: [
        'Walkito does not check whether your flat feet are flexible or rigid, and it has no published trial of its own; it is built on the trials of the exercises.',
      ],
    },
    {
      h2: 'Can an app change flat feet?',
      keyFact: 'In a network meta-analysis of 10 trials, exercise and foot orthoses reduced pain in adult flat feet but did not realign foot posture (Hoang and colleagues, 2021).',
      paragraphs: [
        'Not reliably. Exercise and insoles reduced pain in adult flat feet in a review of 10 trials, but did not realign the foot, and exercise, alone or with insoles, did better for pain than insoles alone. One trial of flexible flat feet did find a change in arch shape after six weeks of a full program. So the honest goal of a flat feet app is less pain and stronger, steadier feet, not a new arch.',
      ],
      cites: [CITE.hoangFlatfootNMA, CITE.brijwasi],
    },
    {
      h2: 'Do you need an app for flat feet at all?',
      paragraphs: [
        'No. The exercises from the trials can be done from a sheet: our [flat feet exercises guide](/flat-feet-exercises/) has them with doses. An app mostly adds reminders, progression and tracking, which help some people keep going. If you also have heel pain, see our [plantar fasciitis app guide](/best-app-for-plantar-fasciitis/); for other foot problems, our [foot pain apps by problem](/best-apps-for-foot-pain/).',
      ],
    },
    {
      h2: 'How we checked these apps',
      paragraphs: [
        'On October 12, 2026 we read the US App Store listings of Arch: Flat Feet Trainer, ArchFix and Injurymap. Android availability and How to Do Foot Exercises are from our [foot pain apps check](/best-apps-for-foot-pain/) of October 11, 2026. We read listings and websites; we did not test the apps from the inside. Walkito facts come from its store listings and the app itself.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the best app for flat feet?',
      a: 'There is no proven best one, because no flat feet app has a published trial. Arch: Flat Feet Trainer is the most focused, ArchFix is free with a footprint check, Injurymap covers arch pain with other joints, and Walkito adjusts arch work to morning pain. Pick one with short foot exercises that get harder over time.',
    },
    {
      q: 'Is there a free app for flat feet exercises?',
      a: 'Yes. ArchFix showed nothing to buy in the App Store in October 2026 and is also on Android, and How to Do Foot Exercises is free with ads on Android. Arch and Injurymap offer free trials before a subscription. Our flat feet exercises guide is free and has the exercises from the trials with doses.',
    },
    {
      q: 'Can exercises fix flat feet?',
      cites: [CITE.hoangFlatfootNMA, CITE.cheng],
      a: 'Exercises can ease flat feet pain, but they did not realign the foot in a review of 10 trials. A 2024 review of the short foot exercise found no clear overall change in arch height, except in programs longer than 6 weeks. Expect less pain and stronger feet, not a new arch.',
    },
    {
      q: 'How long do flat feet exercises take to work?',
      cites: [CITE.brijwasi, CITE.cheng],
      a: 'In the trial of 52 people with flexible flat feet, the program ran for six weeks. In a 2024 review of the short foot exercise, only programs longer than 6 weeks showed a change in arch height. Plan on at least six weeks of regular work before you judge it.',
    },
    {
      q: 'Is there a flat feet app for Android?',
      a: 'Yes. ArchFix, Injurymap, How to Do Foot Exercises and Walkito are on Android. Arch: Flat Feet Trainer is iPhone only. Walkito reads steps, exercise sessions, distance and sleep from Health Connect on Android and steps, sleep and walking data from Apple Health on iPhone.',
    },
    {
      q: 'Are flat feet apps for kids?',
      a: 'Walkito is built for adults. Flat feet in young children are usually normal: in one study of 835 children, 54 percent of 3-year-olds had flat feet and 24 percent of 6-year-olds did. A child whose foot hurts, is stiff or is flat on one side only should see a clinician. See our [flat feet in kids guide](/flat-feet-in-kids/).',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'one arch has flattened suddenly as an adult',
      'the arch stays flat when the foot is off the ground',
      'you have pain or swelling on the inside of the ankle',
      'your foot pain followed an injury, or you cannot put weight on the foot',
      'you have numbness, tingling or burning',
      'you have diabetes or reduced feeling in your feet',
    ],
  },
  program: {
    h2: 'If you want a plan for your arches',
    text: '[Walkito](/program/) builds the arch exercises into a plan for the 3, 5 or 7 days a week you pick, in sessions of 3, 5 or 10 minutes, and tests your arch hold, calf raises and balance every 14 days so you can see what changes.',
    more: [
      'It is a weekly or yearly subscription; the price is shown in the store. Walkito is an exercise program, not a diagnosis or a substitute for a clinician.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Best app for flat feet',
  campaign: 'compare-flat-feet-app',
};
