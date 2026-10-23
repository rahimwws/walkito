import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Comparison page (plan C.7 #1). Facts about Hinge Health come from its own
 * pages and store listings, checked 2026-10-11; sources and quotes in
 * walkito-seo/research/pages/hinge-facts.md. Search brief: hinge-serp.md.
 * No Walkito price until prices are fixed (product.md).
 */
export const VS_HINGE_EN: Guide = {
  lang: 'en',
  page: 'vsHinge',
  published: '2026-10-11',
  updated: '2026-10-13',
  title: 'Walkito vs Hinge Health for Heel Pain (2026)',
  description:
    'Walkito vs Hinge Health for plantar fasciitis: who can get each, what you get, clinicians, evidence and which fits. If your employer covers Hinge, start there.',
  h1: 'Walkito vs Hinge Health for heel pain and plantar fasciitis',
  lede:
    'If your employer or health plan offers Hinge Health, start there: it costs you nothing and comes with your own physical therapist. If it does not, you cannot buy Hinge Health on your own, and Walkito is a heel and foot focused alternative you can download on iPhone or Android. Walkito makes this page, so we say plainly where Hinge Health is stronger.',
  intro: [
    'The two are built for different situations. [Hinge Health](https://www.hingehealth.com/resources/articles/what-is-hinge-health/) is a virtual physical therapy program for muscle and joint pain anywhere in the body, offered as a benefit through employers and health plans. Walkito is a short exercise plan for heel, foot and lower leg pain, on 3, 5 or 7 days a week, that you download and pay for yourself. For what members say about Hinge, see our summary of [Hinge Health reviews](/hinge-health-reviews/).',
  ],
  takeaways: [
    'Hinge Health is free to you through an employer or health plan; we found no way to buy it on your own. Walkito is a weekly or yearly subscription anyone can download.',
    'Hinge Health gives you a dedicated physical therapist, plus a health coach if your pain is chronic. Walkito has no clinician; it is a self-guided plan built on the 2023 heel pain guideline.',
    'Hinge Health covers the whole body, including feet. Walkito covers only heel, foot and lower leg pain, and adjusts each day to how your feet felt that morning.',
    'Hinge Health has published studies, mostly on back and knee pain; we found none on feet. Walkito has not been tested in a trial; its exercises come from published trials and the guideline.',
    'Either way, see a clinician first if the pain followed an injury, comes with numbness or swelling, or wakes you at night.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Walkito vs Hinge Health side by side',
      paragraphs: [
        'Hinge Health facts are from its own website and app listings, checked in October 2026. Features can differ by employer.',
      ],
      table: {
        head: ['', 'Walkito', 'Hinge Health'],
        rows: [
          ['How you get it', 'Download from the App Store or Google Play', 'Through an employer or health plan that offers it'],
          ['Cost to you', 'Weekly or yearly subscription (price shown in the store)', '$0 for virtual care when your employer or plan covers it'],
          ['Focus', 'Heel, foot and lower leg pain', 'Muscle and joint pain anywhere, including feet'],
          ['Clinician', 'None; self-guided', 'Your own physical therapist (video and messages); a health coach for chronic pain'],
          ['How the plan adapts', 'One-tap morning check-in; a test every 14 days, then every 28', 'Your physical therapist adjusts it; progress and pain tracking'],
          ['Session length', '3, 5 or 10 minutes, on 3, 5 or 7 days a week', '"About 15 minutes or less"'],
          ['Form guidance', 'Video and a cue for every exercise; no form check', 'Video, plus camera form feedback on some exercises'],
          ['Extras', 'None', 'Exercise kit for some members with chronic pain; Enso pain relief device if appropriate'],
          ['Platforms', 'iPhone and Android', 'iPhone and Android'],
          ['App ratings', 'New, no ratings yet', '4.9 from about 170,000 App Store ratings'],
        ],
      },
    },
    {
      h2: 'Is Hinge Health actually free?',
      paragraphs: [
        'For most members, yes. Hinge Health says its program "is provided for free as a benefit through your employer or insurance provider" with "no out-of-pocket costs or copays for you". Your employer or health plan pays for it instead, and Hinge Health does not publish what they pay. That covers the virtual program; in-person care, where it is offered, can have a cost share on some plans.',
        'Hinge Health says it "works with either your employer group or plan to obtain reimbursement for your participation", so how it shows up depends on your plan, and a few members say in [app reviews](https://apps.apple.com/us/app/hinge-health/id1429270372) that they later saw it on their insurance statements. If that matters to you, ask your plan before you start.',
      ],
    },
    {
      h2: 'Can you use Hinge Health without an employer?',
      paragraphs: [
        'Not as far as we could find. Hinge Health is offered through employers and health plans, and its [eligibility check](https://www.hingehealth.com/check-eligibility/) starts with your employer or insurance details. Spouses and adult dependents can often join if the plan includes them. If you leave the job or the plan stops offering it, access ends.',
        'If you have no access, the [Hinge Health alternatives](/hinge-health-alternatives/) are an in-person or virtual physical therapist you pay for, a self-guided app such as Walkito, or a free routine you follow yourself. Our [buyer\u2019s guide to plantar fasciitis apps](/best-app-for-plantar-fasciitis/) compares the self-guided apps.',
      ],
    },
    {
      h2: 'Does Hinge Health have a plantar fasciitis program?',
      paragraphs: [
        'Hinge Health covers foot and ankle pain inside its general program, with a [foot and ankle page](https://www.hingehealth.com/acquisition/foot-and-ankle-pain/) and articles on plantar fasciitis. Its plantar fasciitis articles describe calf raises, calf and plantar fascia stretches and towel scrunches, which line up with the stretching and strengthening the 2023 heel pain guideline recommends.',
        'Its headline result, an average 68% drop in pain in the first three months, comes from a large study of people with chronic back and knee pain. We did not find a Hinge Health study on foot or heel pain.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How does each plan work day to day?',
      paragraphs: [
        '**Hinge Health.** You answer a questionnaire, get a physical therapist (and a health coach if your pain is chronic), and do exercise sessions of about 15 minutes or less in the app. Your therapist adjusts the plan through messages and video visits, and on some exercises the phone camera checks your form.',
        '**Walkito.** You answer a few questions about where it hurts, which side and how active you are. You pick 3, 5 or 7 training days a week. Each morning a one-tap check-in sets the day: a bad morning gets a lighter session. Sessions take 3, 5 or 10 minutes, with a video and a cue for every exercise. Every 14 days, and every 28 once you reach your first goal, a short test measures calf raises on each leg, how long you hold your arch and single-leg balance, so you can see whether things are changing. The full plan is on [how the plan works](/program/).',
      ],
    },
    {
      h2: 'What are the downsides of each?',
      paragraphs: [
        '**Hinge Health:**',
        {
          list: [
            'Only available if your employer or health plan offers it.',
            'Built for the whole body rather than for heel pain specifically.',
            'No published study on foot or heel pain that we could find.',
            'Some members report app or form-tracking bugs and confusion about billing.',
          ],
        },
        '**Walkito:**',
        {
          list: [
            'No physical therapist or doctor behind it, and no one reviews your form.',
            'New, with no ratings yet, and the app itself has not been tested in a trial.',
            'You pay for it yourself.',
            'Covers only heel, foot and lower leg pain.',
          ],
        },
      ],
    },
    {
      h2: 'Which should you choose?',
      paragraphs: [
        '**Choose Hinge Health if** your employer or health plan offers it, you want a physical therapist to check in with, or your pain is in more than one place.',
        '**Choose Walkito if** you cannot get Hinge Health, your pain is mainly heel, arch or lower leg, your first steps in the morning are the worst part of the day, or you want short sessions of 3 to 10 minutes that adjust to how your feet feel.',
        'Neither one is a diagnosis. If you are not sure what is causing your heel pain, a clinician is the right first step.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is Hinge Health good for plantar fasciitis?',
      a: 'It can be. Hinge Health covers foot and ankle pain with a dedicated physical therapist, and its plantar fasciitis exercises match the 2023 heel pain guideline. Its published results are mainly for back and knee pain; we did not find a study on foot or heel pain.',
      cites: [CITE.guideline],
    },
    {
      q: 'Is Hinge Health free?',
      a: 'The virtual program is $0 to you when your employer or health plan offers it; the employer or plan pays instead. Hinge Health says it works with the employer or plan to be reimbursed, so ask your plan how it is billed if that matters to you.',
    },
    {
      q: 'Can I use Hinge Health if my employer does not offer it?',
      a: 'We found no way to buy Hinge Health on your own. It is offered through employers and health plans, and access ends if you leave the job or the plan stops offering it.',
    },
    {
      q: 'Is Walkito covered by insurance?',
      a: 'No. Walkito is a weekly or yearly subscription you pay through the App Store or Google Play, and the current price is shown in the store before you subscribe.',
    },
    {
      q: 'Can I use Walkito and Hinge Health together?',
      a: 'You can, but if you have a Hinge Health physical therapist, follow their plan first and tell them about anything else you do, so your heel is not loaded twice in one day.',
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
    h2: 'If Walkito fits you',
    text: '[Walkito](/program/) builds a short plan from where your foot hurts, on 3, 5 or 7 days a week, adjusts it each morning, and tests your calves, arch and balance every 14 days.',
    more: [
      'Sessions take 3, 5 or 10 minutes, with a video and a cue for every exercise. Walkito is an exercise program, not a diagnosis or a substitute for a clinician.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'Walkito vs Hinge Health',
  campaign: 'compare-vs-hinge',
};
