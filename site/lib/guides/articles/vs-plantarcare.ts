import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * PlantarCare facts come from its App Store listing (id6789899136), checked
 * October 23, 2026: name, developer, release and update dates, price, in-app
 * purchases, ratings, languages and the feature list in its own description.
 * We could not confirm an Android version: the Google Play listing with that
 * name has a different developer and a Chinese title. Walkito facts come from
 * the app (lib/site.ts PROGRAM) and the About and FAQ pages. We did not
 * install or test PlantarCare. Recheck the PlantarCare facts before editing.
 */
export const VS_PLANTARCARE_EN: Guide = {
  lang: 'en',
  page: 'vsPlantarCare',
  published: '2026-10-23',
  updated: '2026-10-23',
  title: 'Walkito vs PlantarCare (2026): Which Heel Pain App Fits?',
  description:
    'Walkito vs PlantarCare side by side: price, platforms, languages, how each plans your exercises, tracking and privacy. Checked October 2026.',
  h1: 'Walkito vs PlantarCare: which heel pain app fits you?',
  lede:
    'PlantarCare is a free heel pain tracker for iPhone with a simple daily stretch routine, no account and no in-app purchases. Walkito is a subscription exercise app for iPhone and Android that builds a plan around goals and changes each session from a morning pain check-in. Pick PlantarCare if you want free, simple tracking; pick Walkito if you want an adaptive plan with progress tests, or an app for Android.',
  intro: [
    'Walkito makes this page, so we are not neutral. Every PlantarCare fact comes from its App Store listing, checked October 23, 2026; we did not install or test it. Walkito facts come from the app itself. Both apps are new, and both are exercise and tracking apps, not medical devices. We also compared Walkito with [the Plantar Fasciitis Exercises app](/walkito-vs-plantar-fasciitis-exercises-app/).',
  ],
  takeaways: [
    'PlantarCare is free with no in-app purchases and no account, and keeps your records on your phone. Walkito is a weekly or yearly subscription, with the price shown in the store.',
    'PlantarCare is on iPhone; we could not confirm an Android version. Walkito is on iPhone and Android.',
    'PlantarCare\u2019s App Store listing shows English only, though its latest release notes say it is now in 15 languages. Walkito is in English, Russian, Spanish, Portuguese, French, Italian and German.',
    'PlantarCare logs pain, shoes, standing hours and training, and suggests a recovery stage from your pain trend. Walkito adjusts each session from a morning pain check-in and tests calf endurance, arch hold and balance every 14 days.',
    'Both apps are new: PlantarCare had no ratings on the US App Store when we checked, and Walkito had 4.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Side-by-side comparison',
      table: {
        caption: 'Walkito vs PlantarCare (checked October 23, 2026)',
        head: ['', 'Walkito', 'PlantarCare'],
        rows: [
          ['Type', 'Exercise plan app', 'Heel pain tracker with a stretch routine'],
          ['Price', 'Weekly or yearly subscription (price in the store)', 'Free, no in-app purchases'],
          ['Phones', 'iPhone and Android', 'iPhone (Android not confirmed)'],
          ['Languages', '7', 'English on its listing (release notes say 15)'],
          ['Account', 'Yes, your plan is saved to it', 'No account; records stay on the phone'],
          ['Daily check-in', 'Morning pain; changes that day\u2019s session', 'Morning first-step pain and worst daytime pain'],
          ['Exercises', 'Plan built around goals; sessions of 3, 5 or 10 minutes, 3, 5 or 7 days a week', 'Daily routine of stretches, calf work and heel raises, with icing reminders'],
          ['Progress', 'Test every 14 days (every 28 after your first goal), left vs right', 'Pain trend charts and a suggested recovery stage'],
          ['Other logs', 'Steps from Apple Health or Health Connect', 'Shoes, standing hours and training'],
          ['First released', 'October 2, 2026', 'July 15, 2026'],
          ['US App Store ratings', '4', 'None yet'],
        ],
      },
      paragraphs: [
        'PlantarCare facts are from its [App Store listing](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136); Walkito facts are from the app and our [About page](/about/#facts).',
      ],
    },
    {
      h2: 'Who is PlantarCare built for?',
      paragraphs: [
        'PlantarCare describes itself as a self-care and habit-tracking tool for heel pain and plantar fasciitis, made for people on their feet all day, runners and weekend athletes. Its listing names these features:',
        {
          list: [
            'A daily check-in for morning first-step pain and your worst daytime pain.',
            'Recovery stages it suggests from your pain trend, from calming things down to getting back to sport.',
            'A guided daily routine of stretches, calf work, heel raises and icing reminders, matched to your stage.',
            'A footwear and load log for shoes, standing hours and training.',
            'Weekly trend charts and reminders to see a clinician if you log warning signs such as severe swelling, numbness or night pain.',
          ],
        },
        'It is free, needs no sign-up, and its listing says your health records stay on your device. It was first released on July 15, 2026 and last updated on July 23, 2026.',
      ],
    },
    {
      h2: 'Who is Walkito built for?',
      paragraphs: [
        'Walkito is built for people with heel pain, plantar fasciitis or flat feet who want a short exercise plan that changes with how their feet feel each morning, including people on their feet all day for work.',
        'You pick 3, 5 or 7 training days a week and sessions of 3, 5 or 10 minutes. A morning of 7/10 pain or higher switches the day to about three minutes of seated work, and a big day on your feet makes the next strength session a lighter recovery one.',
        'Every 14 days a short test of calf raises, an arch hold and [single-leg balance](/exercises/single-leg-balance/) compares your left side with your right. The exercises follow the 2023 heel pain guideline, which grades plantar fascia and calf stretching A and strength training B.',
        'Walkito is a subscription and it saves your plan and what you log to your Walkito account. It was released on October 2, 2026 and has few ratings so far.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'When is PlantarCare the better choice?',
      bullets: [
        'You want a free app with no subscription.',
        'You don\u2019t want an account, and you want your records kept only on your phone.',
        'You mainly want to track pain and spot what sets it off, such as certain shoes or long days standing.',
        'A simple daily stretch routine is enough for you.',
      ],
    },
    {
      h2: 'When is Walkito the better choice?',
      bullets: [
        'You use an Android phone.',
        'You want the app in Russian, Spanish, Portuguese, French, Italian or German; PlantarCare\u2019s store listing shows English only.',
        'You want each session to change with your morning pain, at a length you choose.',
        'You want a progress test every 14 days that compares your left and right sides.',
        'You also have [flat feet](/best-app-for-flat-feet/), not only heel pain.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is PlantarCare free?',
      a: 'Yes. PlantarCare\u2019s App Store listing says it is free with no in-app purchases and needs no account. Walkito is free to download, with a yearly or weekly subscription inside the app.',
    },
    {
      q: 'Is PlantarCare on Android?',
      a: 'We could not confirm it. PlantarCare is on the App Store for iPhone. On Google Play we found only a Chinese-language app that also calls itself PlantarCare (com.zach.plantarcare), from a differently named developer, so we could not tell whether it is the same app. Walkito is on both the App Store and Google Play.',
    },
    {
      q: 'Which app is better for plantar fasciitis?',
      a: 'They do different jobs. PlantarCare is a free tracker with a basic stretch routine. Walkito is a paid plan that adapts each session and tests your progress. Both are new, neither is a medical device, and the 2023 guideline puts stretching and strengthening first, which both apps include.',
      cites: [CITE.guideline],
    },
    {
      q: 'Do I still need a doctor if I use one of these apps?',
      a: 'Yes, if the pain followed an injury, comes with numbness or swelling, wakes you at night or is not improving after several weeks. Neither app diagnoses; both say to see a clinician for warning signs.',
    },
  ],
  redFlags: {
    h2: 'When an app is not enough, see a clinician',
    bullets: [
      'your pain followed an injury or a fall',
      'you cannot put weight on the foot or you are limping',
      'the pain comes with numbness, tingling, burning, swelling or warmth',
      'pain wakes you at night or is present at rest',
      'squeezing the sides of the heel hurts, which can point to a stress fracture rather than plantar fasciitis',
      'pain is getting worse week over week despite consistent exercise',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'If [Walkito](/program/) sounds like the right fit, here is how it works. You answer questions about where it hurts, which side, your activity level and your goal, and Walkito builds a weekly plan around your goals.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test shows the gap between your left and right sides.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  crumb: 'Walkito vs PlantarCare',
  campaign: 'compare-plantarcare',
};
