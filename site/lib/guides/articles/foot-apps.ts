import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Roundup page (plan C.7 #5), by foot problem. Plantar fasciitis apps live on
 * /best-app-for-plantar-fasciitis/ and are not repeated here. App facts:
 * walkito-seo/research/pages/foot-apps.json (+ Correct Toes, added after the
 * check), verified in foot-apps-verified.md (2026-10-11). Evidence:
 * foot-apps-evidence.md. Walkito is listed apart and not counted in totals.
 */
export const FOOT_APPS_EN: Guide = {
  lang: 'en',
  page: 'footApps',
  mainSource: CITE.cooperFootPainJAMA,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: 'Best Apps for Foot Pain, by Problem (2026 Guide)',
  description:
    'We checked 16 apps for flat feet, Achilles pain, ankle sprains, bunions and ball of foot pain: who made them, what they promise and what the research supports.',
  h1: 'Best apps for foot pain, by problem',
  lede:
    'No foot pain app has been tested in a published trial, so there is no proven best one. We checked 16 apps for flat feet, Achilles pain, ankle sprains, bunions and ball of foot pain: 2 named a licensed clinician as the creator, 5 promised to end pain or gave a quick timeline, and only 1 cited a specific study. The research supports the exercises, not any one app, so pick an app that gives the right exercises for your problem.',
  intro: [
    'Walkito is a foot exercise app, so we are not neutral. We list it apart at the end and do not count it in any total. For plantar fasciitis apps, see our [plantar fasciitis app guide](/best-app-for-plantar-fasciitis/).',
  ],
  takeaways: [
    'Of 16 foot pain apps we checked in the App Store and Google Play, none had a published trial, 2 named a licensed clinician as the creator and 1 cited a specific study.',
    '5 of 16 promised to end pain or gave a quick timeline, such as \u201celiminate pain\u201d or \u201cresults in just 6 weeks\u201d.',
    'For ankle sprains, an app version of a proven exercise program did as well as a printed booklet, not better.',
    'Flat feet exercises can reduce pain but did not realign the foot in a review of 10 trials.',
    'For bunions and ball of foot pain, the evidence for exercise is weak or missing; shoes, pads and a clinician matter more.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Foot pain apps by problem at a glance',
      table: {
        head: ['Problem', 'What the research supports', 'Apps we found'],
        rows: [
          ['Flat feet', 'Exercise for pain', '2'],
          ['Achilles pain', 'Loading the tendon (grade A)', '7'],
          ['Ankle sprain', 'Structured exercise and balance (grade A)', '6'],
          ['Bunions', 'Weak evidence for exercise', '2'],
          ['Ball of foot pain', 'Roomy shoes and a pad first', '1'],
          ['General foot pain', 'Depends on the cause', '2'],
        ],
      },
      paragraphs: [
        'Some apps cover more than one problem. Checked October 11, 2026, in the US App Store and Google Play.',
      ],
    },
    {
      h2: 'Best apps for flat feet',
      keyFact: 'In a network meta-analysis of 10 trials, exercise and foot orthoses reduced pain in adult flat feet but did not realign foot posture (Hoang and colleagues, 2021).',
      paragraphs: [
        'Look for foot and arch strengthening, such as the short foot exercise. Be wary of any app that promises a new arch: in a 2024 review of the short foot exercise, there was no clear overall change in arch height (navicular drop); only programs longer than 6 weeks showed one.',
        {
          list: [
            '[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/id6755728858) (iPhone). Subscription. Says \u201clive pain-free\u201d and \u201cSee significant results in just 6 weeks\u201d, and \u201cBACKED BY SCIENCE\u201d without naming a study.',
            '[ArchFix](https://apps.apple.com/us/app/id6743368281) (iPhone, Android). Free, with nothing to buy. Offers \u201cpreventive and corrective exercises\u201d. No clinician named.',
          ],
        },
        'Our [flat feet exercises guide](/flat-feet-exercises/) shows the exercises from the trials.',
      ],
      cites: [CITE.hoangFlatfootNMA, CITE.cheng],
    },
    {
      h2: 'Best apps for Achilles tendinopathy',
      keyFact: 'The 2024 Achilles tendinopathy guideline grades tendon loading exercise, \u201cwith loads as high as tolerated\u201d, A as a first-line option (Chimenti and colleagues, 2024).',
      paragraphs: [
        'Look for heel drops or heavy heel raises that get harder over weeks, with a way to adjust to pain. One caution: in a 2026 trial of 68 people, unsupervised home eccentric exercise did no better than sham exercise over three months.',
        {
          list: [
            '[ROM Coach](https://apps.apple.com/us/app/id1485733376) (iPhone, Android). The most rated app we found (4.8 from about 1,600 ratings on iPhone). Made by a kinesiologist. Calls itself \u201cyour #1 resource to eliminate pain\u201d.',
            '[Rehab Science](https://apps.apple.com/us/app/id6752273938) (iPhone, Android). Made by a named physical therapist, Dr. Tom Walters, DPT. Says \u201cHeal pain\u201d.',
            '[Tendon Tracker](https://apps.apple.com/us/app/id6756897904) (iPhone, Android). Names research models but no paper. Asks \u201cREADY TO ACTUALLY HEAL?\u201d.',
            '[GaitLab Coach](https://apps.apple.com/us/app/id6755685826) (iPhone), for runners. The only app that cited a specific study, and the only one that spelled out warning signs in its listing.',
            '[Sidekick](https://apps.apple.com/us/app/id6759810159) (iPhone), [PhysioCare](https://apps.apple.com/us/app/id950989316) (iPhone) and [Achilles Rebuild](https://play.google.com/store/apps/details?id=com.jcs.fitsw.achillesrebuild) (Android) also name Achilles problems.',
          ],
        },
        'Our [Achilles tendonitis exercises guide](/achilles-tendonitis-exercises/) covers the loading programs from the trials.',
      ],
      cites: [CITE.achillesGuideline, CITE.janssenHomeEccentric],
    },
    {
      h2: 'Best apps for ankle sprain rehab',
      keyFact: 'In the 2BFit trial, a home balance program after an ankle sprain, taught with a balance board, a DVD and a website, cut repeat sprains from 33% to 22% (Hupperets and colleagues, 2009).',
      paragraphs: [
        'The 2021 ankle sprain guideline grades a structured exercise program and balance training A. On how to deliver a home program, such as written instructions, exercise video games or an app, the guideline gives only a D because the evidence conflicts.',
        'The same program has been tested as an app. In one trial of 220 athletes, reported in two papers, compliance was 73% with the \u201cStrengthen your ankle\u201d app and 77% with a printed booklet, and repeat sprains were similar. A separate e-health program for people seen by their family doctor made no difference to repeat sprains, and only 6.1% stuck with it.',
        {
          list: [
            '[AnklePath](https://apps.apple.com/us/app/id6781827965) (iPhone). Physiotherapist-led videos, no one named. Tells you to know the warning signs, without listing them in the store.',
            '[Sports Injury Rehabilitation](https://apps.apple.com/us/app/id1538404666) (iPhone, Android). Made by named physiotherapists Phil Pask and Paul Tanner. The first phase of each program is free.',
            '[Adapted](https://apps.apple.com/us/app/id6756030925) (iPhone), for ankle instability. Says \u201cMost users report noticeable improvements in flexibility, range of motion, and recovery within 1-2 weeks\u201d.',
            '[Sidekick](https://apps.apple.com/us/app/id6759810159) (iPhone), [PhysioCare](https://apps.apple.com/us/app/id950989316) (iPhone) and [Fitivity Ankle Sprain Rehab](https://play.google.com/store/apps/details?id=com.fitivity.rehab_ankle) (Android, with ads) also cover sprains.',
          ],
        },
        'Our [ankle strengthening exercises guide](/ankle-strengthening-exercises/) has balance and strength exercises.',
      ],
      cites: [CITE.ankleSprainGuideline, CITE.hupperets, CITE.vanReijenApp2016, CITE.vanReijenApp2017, CITE.mailuhuEhealth],
    },
    {
      h2: 'Apps for bunions',
      keyFact: 'In a review of non-surgical options for bunions, all evidence was low certainty, and \u201ca reduction in pain appears more likely than improvement in HV angle\u201d (Hurn and colleagues, 2022).',
      paragraphs: [
        'Exercise may ease bunion pain, but there is no reliable evidence that exercise straightens the toe. The [NHS](https://www.nhs.uk/conditions/bunions/) says a GP may refer you for surgery if bunions are very painful or having a big effect on your life, and that surgery is not done just to improve how feet look.',
        {
          list: [
            '[Correct Toes](https://apps.apple.com/us/app/id6793699449) (iPhone). Free, from a foot and ankle clinic that also sells toe spacers. Names bunions, hammertoes, neuromas and metatarsalgia. No clinician named.',
            '[Neatsy](https://apps.apple.com/us/app/id1483925852) (iPhone). A 3D foot scan that flags bunions; it says it \u201cdoes not diagnose diseases or suggest treatment plans\u201d.',
          ],
        },
        'See our [bunion exercises guide](/bunion-exercises/) for what the trials tested.',
      ],
      cites: [CITE.hurnBunionReview, CITE.diasBunionSurgery],
    },
    {
      h2: 'Apps for ball of foot pain and Morton\u2019s neuroma',
      paragraphs: [
        'Here exercise is not the main tool. The [NHS](https://www.nhs.uk/symptoms/foot-pain/pain-in-the-ball-of-the-foot/) advises shoes with plenty of room, a low heel and a soft sole, and soft insoles or pads. In a small study, a metatarsal pad lowered pressure under the ball of the foot and improved pain scores. For Morton\u2019s neuroma, first-line care is less of the activity that hurts, orthotics and injections.',
        'The only app we found that names ball of foot pain is [Correct Toes](https://apps.apple.com/us/app/id6793699449). An exercise-only app is missing the main part of care here. Our guides on [ball of foot pain](/ball-of-foot-pain/) and [Morton\u2019s neuroma](/mortons-neuroma/) explain the options.',
      ],
      cites: [CITE.kangMetatarsalPad, CITE.cooperFootPainJAMA],
    },
    {
      h2: 'Apps for general foot pain',
      paragraphs: [
        'There is no single exercise program for \u201cfoot pain\u201d, because the right care depends on the cause. On its ball of foot pain page, the [NHS](https://www.nhs.uk/symptoms/foot-pain/pain-in-the-ball-of-the-foot/) advises: \u201cDo not try to diagnose the cause of pain yourself.\u201d [How to Do Foot Exercises](https://play.google.com/store/apps/details?id=com.Fitness.Flexibility.Workout.How.to.Do.Foot.Exercises) (Android, with ads) offers general foot exercises, and Arch covers general foot strengthening.',
        'Our [foot pain identifier](/foot-pain-identifier/) can help you narrow down where your pain fits before you pick an app.',
      ],
      cites: [CITE.cooperFootPainJAMA],
    },
    {
      h2: 'All 16 foot pain apps we checked',
      table: {
        head: ['App', 'Problems', 'Named clinician', 'Pain promise'],
        rows: [
          ['Arch: Flat Feet Trainer', 'Flat feet, general', 'No', 'Yes'],
          ['ArchFix', 'Flat feet', 'No', 'In the name'],
          ['Neatsy', 'Bunions (scan)', 'No', 'No'],
          ['Correct Toes', 'Bunions, ball of foot', 'No', 'No'],
          ['ROM Coach', 'Achilles', 'Kinesiologist', 'Yes'],
          ['Rehab Science', 'Achilles', 'Yes', 'Yes'],
          ['Tendon Tracker', 'Achilles', 'No', 'Yes'],
          ['GaitLab Coach', 'Achilles (runners)', 'No', 'In the name'],
          ['Achilles Rebuild', 'Achilles', 'No', 'No'],
          ['Sidekick', 'Achilles, ankle sprain', 'No', 'No'],
          ['PhysioCare', 'Achilles, ankle sprain', 'No', 'No'],
          ['AnklePath', 'Ankle sprain', 'No', 'No'],
          ['Sports Injury Rehabilitation', 'Ankle sprain', 'Yes', 'No'],
          ['Fitivity Ankle Sprain Rehab', 'Ankle sprain', 'No', 'No'],
          ['Adapted', 'Ankle instability', 'No', 'Yes'],
          ['How to Do Foot Exercises', 'General', 'No', 'No'],
        ],
      },
      paragraphs: [
        '\u201cPain promise\u201d means the listing promises to end pain or gives a quick timeline; \u201cin the name\u201d means only the app\u2019s name does (ArchFix, Run Pain-Free). None of the 16 had a published trial when we searched PubMed.',
      ],
    },
    {
      h2: 'How do you choose a foot pain app?',
      paragraphs: [
        {
          list: [
            'It names your problem and gives the exercises the research supports for it (see the table above).',
            'It names who made it, ideally a licensed clinician such as a physical therapist.',
            'It makes the exercises harder over time and lets you go easier on a bad day.',
            'It tells you when to stop and see a clinician. Only 1 of 16 spelled out warning signs in its listing.',
            'It does not promise to end pain or give a quick timeline.',
            'It tells you what it costs before you start.',
          ],
        },
      ],
    },
    {
      h2: 'How we checked these apps',
      paragraphs: [
        'On October 11, 2026 we searched the US App Store and Google Play with 2 or 3 terms for each problem, such as \u201cflat feet exercises\u201d, \u201cachilles rehab\u201d and \u201cankle sprain rehab\u201d. We included an app if its listing named the foot problem and offered exercises. We left out shoe and insole stores, foot scanners without exercises, step trackers, single-clinic portals, general fitness apps, apps only available through an employer or health plan, and apps not updated since 2023.',
        'Every fact comes from the store listing or the developer\u2019s website, not from using the apps, and a second reviewer re-checked each listing. We also searched PubMed for each app\u2019s name. Plantar fasciitis apps are covered in our [heel pain app study](/heel-pain-apps-study/).',
      ],
    },
    {
      h2: 'Where Walkito fits',
      paragraphs: [
        'Walkito is our app, so it is not counted above. Its listing names plantar fasciitis, flat feet, Achilles pain in runners and general foot pain, and it says to see a clinician first if pain came from an injury or comes with swelling, numbness or night pain. Like the others, it has no published trial and names no clinician as its creator. Its listing does not name ankle sprains, bunions or ball of foot pain.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is there a free app for foot pain exercises?',
      a: 'Yes. Of the apps we checked, ArchFix (flat feet) showed nothing to buy, Correct Toes (bunions, ball of foot) is free with no subscription though it sells toe spacers in the app, and Sports Injury Rehabilitation gives the first phase of each program free. How to Do Foot Exercises is free with ads.',
    },
    {
      q: 'Can exercise change flat feet?',
      a: 'It can ease pain, but it did not realign the foot in a review of 10 trials, and a 2024 review of the short foot exercise found no clear overall change in arch height, except in programs longer than 6 weeks. In the first review, exercise, alone or with insoles, did better for pain than insoles alone.',
      cites: [CITE.hoangFlatfootNMA, CITE.cheng],
    },
    {
      q: 'What is the best app for ankle sprain rehab?',
      a: 'No app has been shown to beat a printed program. The 2021 guideline grades structured exercise and balance training A. An app version of a proven program did as well as a booklet, so pick the format you will stick with.',
      cites: [CITE.ankleSprainGuideline, CITE.vanReijenApp2017],
    },
    {
      q: 'Are foot pain apps safe?',
      a: 'An app cannot diagnose you. See a clinician if pain followed an injury, comes with swelling, numbness or tingling, or has not improved after about two weeks of home care.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your foot pain followed an injury, a fall or a pop or snap',
      'you cannot put weight on the foot',
      'the foot is swollen, red or hot',
      'you have numbness, tingling or burning',
      'it has not improved after about two weeks of home care',
      'you have diabetes or reduced feeling in your feet',
    ],
  },
  program: {
    h2: 'If your problem is heel pain or flat feet',
    text: '[Walkito](/program/) gives you the plantar fascia stretch, calf stretches with the knee straight and bent, and foot and ankle strength work that gets harder over time, on 3, 5 or 7 days a week. It is a weekly or yearly subscription; the price is shown in the store.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and a short test every 14 days, then every 28 after your first goal, shows whether your calves, arch and balance are changing.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Foot pain apps',
  campaign: 'compare-foot-apps',
};
