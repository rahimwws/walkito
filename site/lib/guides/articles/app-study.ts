import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Original study 3 (plan C.6): heel pain and plantar fasciitis apps on the
 * App Store and Google Play, checked from their store listings and websites.
 * Walkito is scored the same way but left out of every total. Data:
 * walkito-seo/research/app-study/. Numbers are generated from FINAL-scores.json.
 */
export const APP_STUDY_EN: Guide = {
  lang: 'en',
  page: 'appStudy',
  mainSource: CITE.guideline,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: 'Heel Pain Apps Checked: What 20 App Listings Promise',
  description:
    'We checked 20 heel pain and plantar fasciitis apps. 9 of 19 promise to end the pain or claim proven results, and only 3 of 19 cite any evidence.',
  h1: 'We checked 20 heel pain and plantar fasciitis apps: what they promise and who is behind them',
  lede:
    '9 of 19 heel pain apps on the App Store and Google Play promise to end the pain or claim proven results, but only 3 of the 19 cite any studies. 10 of 19 name no clinician behind their program, and only 1 mentions the plantar fascia stretch the 2023 guideline grades highest. Walkito is one of the 20 apps we found; we scored it the same way and left it out of every total.',
  intro: [
    'This is our third study, after the [50 most-watched YouTube videos](/plantar-fasciitis-youtube-study/) and [120 AI answers](/plantar-fasciitis-ai-answers-study/) about plantar fasciitis. This time we checked what the apps themselves say.',
    'We make one of these apps, so this study has the biggest conflict of interest of the three. That is why Walkito is shown in its own row and counted in no total, why its weak points are listed below, and why every score is backed by a quote from the listing or website, in the [data file](/downloads/heel-pain-apps-study-2026.csv).',
  ],
  takeaways: [
    '9 of 19 apps promise to end the pain or claim proven or validated results without a citation, for example a guarantee of a pain-free life.',
    'Only 3 of 19 cite named studies or trials, and none of those trials is about heel pain.',
    '10 of 19 name no clinician behind the program; 5 let you talk to one and 4 say a clinician made the program.',
    '15 of 19 mention strengthening, but only 1 mentions the plantar fascia stretch, which the 2023 guideline grades A.',
    'We checked listings and websites, not the apps from the inside, so a missing exercise may still be in the app. What a listing promises is what a buyer sees first.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What did we check?',
      keyFact: 'The 2023 heel pain guideline grades plantar fascia and calf stretching A and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'For each app we read its App Store and Google Play listing and the website it links to, and checked the same things for every app:',
        {
          list: [
            'Does it mention the three home exercises the 2023 guideline supports: a plantar fascia stretch, a calf stretch and strengthening?',
            'Does the plan adapt to you, for example to your pain or progress?',
            'Is a clinician behind it: one you can talk to, or one who made the program?',
            'Does it cite studies, a guideline or trials of the app?',
            'Does it promise to end the pain, or call itself proven without a citation?',
            'Does it say when to see a clinician?',
          ],
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What did the 19 apps promise?',
      keyFact: '9 of 19 heel pain apps promise to end the pain or claim proven results, while only 3 cite any studies (Walkito study, 2026).',
      paragraphs: [
        'These are the 9 apps whose listing or website promises to end the pain, or calls the program proven or validated without a citation, with the words they use:',
        {
          list: [
            'Arch: Flat Feet Trainer: “SCIENTIFICALLY PROVEN BENEFITS ... See significant results in just 6 weeks”',
            'Sports Injury Rehabilitation (SportsRehab.app): “Cure My Plantar Fasciitis”',
            'ROM Coach (Mobility Workouts): “ROM Coach is your #1 resource to eliminate pain”',
            'Alleviate Therapy: “helped thousands resolve Plantar Fasciitis, for good”',
            'Sidekick Relief & Recovery: “Heal foot pain for good”',
            'RecoveryOne: “Clinically-proven educational information”',
            'MoveU: “Live-Free From Pain … Guaranteed!”',
            'ArchFix: “Clinically validated exercises”',
            'Injurymap: Physiotherapy App: “Become pain-free with Injurymap”',
          ],
        },
        'Plantar fasciitis usually improves over months with stretching and strengthening, and no exercise program can promise that. A claim of proven results should come with the study that proved it.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Who is behind the apps?',
      paragraphs: [
        '10 of the 19 apps name no clinician behind their program. In 5 you can talk to a physical therapist or another clinician, and in 4 the program was made by one. Two of the apps are only available through an employer or insurer.',
        'Only 3 apps cite named studies: Kaia Health, whose trials cover back, hip and knee pain rather than feet; GaitLab Coach, a running form app; and Tendon Tracker, which names tendon research. Two apps state a medical device certification: Exakt and Injurymap.',
        'For heel pain specifically, 15 of 19 apps mention strengthening, which the guideline grades B. Only 1 mentions the plantar fascia stretch and only 1 a calf stretch, both graded A, at least in the words a buyer can read before downloading.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How did Walkito score?',
      paragraphs: [
        'We scored Walkito with the same checklist and the same rules, and left it out of every number above. Its listing and website mention the plantar fascia stretch, both calf stretches and strengthening, say the plan adapts each morning, cite the 2023 guideline and named trials, make no promise to end the pain, and say when to see a clinician.',
        'Its weak points are real too:',
        {
          list: [
            'No clinician is behind it: the two founders are not clinicians, and no clinician reviews the program yet.',
            'The app itself has not been tested in a trial; it is built on the guideline and published trials of the exercises.',
            'It is new, with no ratings yet on either store.',
          ],
        },
        'Our listing was written with the same guideline in mind, which is one reason it scores well on a checklist built from that guideline. Judge it the way you would judge any other app on this page.',
      ],
    },
    {
      h2: 'How do you choose a heel pain app?',
      paragraphs: [
        'Use the same checks we used, before you pay:',
        {
          list: [
            'It includes a plantar fascia stretch, a calf stretch and strengthening that gets harder over time.',
            'It tells you who made the program, and whether you can ask a clinician.',
            'It does not promise to end the pain, and any "proven" claim links to the study.',
            'It tells you when to stop and see a clinician.',
            'It shows the price before you start, and you can cancel in the App Store or Google Play.',
          ],
        },
        'Our [buyer\u2019s guide to plantar fasciitis apps](/best-app-for-plantar-fasciitis/) compares the main ones side by side.',
      ],
    },
    {
      h2: 'How we did this study',
      paragraphs: [
        '**Sample.** On October 11, 2026 we searched the US App Store and Google Play for 11 phrases, such as plantar fasciitis, heel pain, foot pain exercises and flat feet, and took the top 30 results for each. We kept an app only if its listing names plantar fasciitis, heel pain or foot pain as something it helps with and it gives the user exercises. Scanners, insole fitting, pain devices, symptom trackers without exercises, single-clinic patient portals and general fitness apps were left out. An app on both stores counts once. That left 20 apps, including Walkito, which appeared in the results on its own.',
        '**Scoring.** Before scoring we wrote a fixed checklist. Each app was scored from both store listings and its website, and every yes needed a quote and where it came from. A second scorer scored 6 of the apps, including Walkito, without seeing the first scores; the two agreed on 53 of 54 checks.',
      ],
      bullets: [
        'We read listings and websites; we did not install or test the apps. An exercise an app does not mention may still be in it.',
        'Listings change, and store search results vary by country and day.',
        'Hinge Health and Sword Health came up in the searches, but their store listings did not name foot or heel pain, so by our rule they were not included.',
        'A few apps were close calls under the rule (Kaia Health, RecoveryOne, Vive Now and How to Do Foot Exercises); the data file explains each.',
      ],
    },
    {
      h2: 'All 20 apps',
      paragraphs: [
        'Strength means the listing or website mentions strengthening; Clinician shows whether you can talk to one or one made the program; Evidence means it cites named studies; Promise means it promises to end the pain or claims proven results without a citation; Doctor means it says when to see one.',
      ],
      table: {
        head: ['App', 'Stores', 'Strength', 'Adapts', 'Clinician', 'Evidence', 'Promise', 'Doctor'],
        rows: [
          ['[Plantar Fasciitis Exercises (Halefits)](https://apps.apple.com/us/app/plantar-fasciitis-exercises/id6779576791)', 'Both', 'Yes', 'No', 'None stated', 'No', 'No', 'No'],
          ['[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858)', 'iPhone', 'Yes', 'No', 'None stated', 'No', 'Yes', 'No'],
          ['[Sports Injury Rehabilitation (SportsRehab.app)](https://apps.apple.com/us/app/sports-injury-rehabilitation/id1538404666)', 'Both', 'Yes', 'Yes', 'Talk to one', 'No', 'Yes', 'Yes'],
          ['[ROM Coach (Mobility Workouts)](https://apps.apple.com/us/app/rom-coach-mobility-workouts/id1485733376)', 'Both', 'Yes', 'No', 'None stated', 'No', 'Yes', 'Yes'],
          ['[Alleviate Therapy](https://apps.apple.com/us/app/alleviate-therapy/id6467925883)', 'Both', 'Yes', 'Yes', 'Made by one', 'No', 'Yes', 'Yes'],
          ['[Vive Now Vitals & Injury Rehab](https://apps.apple.com/us/app/vive-now-vitals-injury-rehab/id6451100161)', 'Both', 'No', 'No', 'None stated', 'No', 'No', 'Yes'],
          ['[PlantarCare: Heel Pain Tracker](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136)', 'iPhone', 'Yes', 'Yes', 'None stated', 'No', 'No', 'Yes'],
          ['[Sidekick Relief & Recovery](https://apps.apple.com/us/app/sidekick-relief-recovery/id6759810159)', 'Both', 'Yes', 'No', 'Made by one', 'No', 'Yes', 'Yes'],
          ['[Exakt Running & PT Trainer](https://apps.apple.com/us/app/exakt-running-pt-trainer/id1638338198)', 'Both', 'Yes', 'Yes', 'Made by one', 'No', 'No', 'No'],
          ['[GaitLab Coach: Run Pain-Free](https://apps.apple.com/us/app/gaitlab-coach-run-pain-free/id6755685826)', 'Both', 'Yes', 'Yes', 'None stated', 'Yes', 'No', 'Yes'],
          ['[RecoveryOne](https://apps.apple.com/us/app/recoveryone/id1289891002)', 'Both', 'No', 'Yes', 'Talk to one', 'No', 'Yes', 'No'],
          ['[Kaia Health](https://apps.apple.com/us/app/kaia-health/id1100673977)', 'Both', 'No', 'No', 'Made by one', 'Yes', 'No', 'No'],
          ['[MoveU](https://apps.apple.com/us/app/moveu/id1640475559)', 'Both', 'Yes', 'No', 'Talk to one', 'No', 'Yes', 'No'],
          ['[ArchFix](https://apps.apple.com/us/app/archfix/id6743368281)', 'Both', 'No', 'Yes', 'Talk to one', 'No', 'Yes', 'Yes'],
          ['[Injurymap: Physiotherapy App](https://apps.apple.com/us/app/injurymap-physiotherapy-app/id1102375789)', 'Both', 'Yes', 'Yes', 'Talk to one', 'No', 'Yes', 'Yes'],
          ['[PhysioCare Injury Rehab](https://apps.apple.com/us/app/physiocare-injury-rehab/id950989316)', 'iPhone', 'Yes', 'No', 'None stated', 'No', 'No', 'No'],
          ['[HeelReset: Heel Pain Exercises](https://play.google.com/store/apps/details?id=com.kodrika.heelreset&hl=en_US&gl=US)', 'Android', 'Yes', 'Yes', 'None stated', 'No', 'No', 'Yes'],
          ['[How to Do Foot Exercises](https://play.google.com/store/apps/details?id=com.Fitness.Flexibility.Workout.How.to.Do.Foot.Exercises&hl=en_US&gl=US)', 'Android', 'Yes', 'No', 'None stated', 'No', 'No', 'No'],
          ['[Tendon Tracker](https://play.google.com/store/apps/details?id=com.innovationcodotek.tendontracker&hl=en_US&gl=US)', 'Both', 'Yes', 'Yes', 'None stated', 'Yes', 'No', 'No'],
          ['[Walkito (ours, not counted in any total)](https://apps.apple.com/us/app/walkito-heel-pain-flat-feet/id6813076846)', 'Both', 'Yes', 'Yes', 'None stated', 'Yes', 'No', 'Yes'],
        ],
      },
    },
  ],
  faq: [
    {
      q: 'Are plantar fasciitis apps any good?',
      a: 'Some are, but read the listing carefully. In our check of 19 heel pain apps, 9 promised to end the pain or claimed proven results without a citation, only 3 cited any studies, and 10 named no clinician behind the program.',
    },
    {
      q: 'What should a heel pain app include?',
      a: 'A plantar fascia stretch and a calf stretch, both graded A by the 2023 heel pain guideline, and strengthening that gets harder over time, graded B, plus clear doses and advice on when to see a clinician.',
      cites: [CITE.guideline],
    },
    {
      q: 'Why is Walkito not counted in the totals?',
      a: 'Because we make it. We scored it with the same checklist so you can compare, but counting our own app in a study we wrote would not be fair.',
    },
    {
      q: 'Can I use this data?',
      a: 'Yes. The data file is free to download and reuse. Please cite it as: Walkito, 20 heel pain apps checked against the 2023 guideline, October 2026, walkito.site.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall',
      'you cannot put weight on the foot or you are limping',
      'the pain comes with numbness, tingling, swelling, redness or warmth',
      'pain wakes you at night or is there at rest',
      'pain is getting worse week over week despite exercise',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'If you want to try Walkito',
    text: '[Walkito](/program/) is one of the apps above. It puts the plantar fascia stretch, both calf stretches and a heel raise that gets harder over time into one short plan on the 3, 5 or 7 days a week you pick.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and every 14 days a short test shows whether your calves, arch and balance are changing. Walkito is an exercise program, not a diagnosis or a substitute for a clinician.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Heel pain apps study',
  campaign: 'study-apps',
  dataset: {
    file: 'heel-pain-apps-study-2026.csv',
    name: '20 heel pain apps checked against the 2023 guideline',
    description:
      'Walkito study: 20 heel pain and plantar fasciitis apps checked against the 2023 heel pain guideline (Koc et al., JOSPT 2023), from their US App Store and Google Play listings and websites, 2026-10-11. One row per app, with each check and the quote behind it. Walkito is scored but not counted in any total. Prices are not included. Free to reuse with a citation to walkito.site.',
    temporalCoverage: '2026-10-11',
    measurementTechnique:
      'Each app was scored from its store listings and website against a fixed checklist written before scoring; the apps were not installed or tested. Every yes needed a quote and where it came from. A second scorer scored 6 apps, Walkito included, independently and the two agreed on 53 of 54 checks.',
    updated: '2026-10-11',
    cites: [CITE.guideline],
  },
};
