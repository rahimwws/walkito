import { CITE } from './citations';
import { SUPPORT_EMAIL } from './site';

/**
 * The FAQ, as data, grouped by topic.
 *
 * One source feeding both the visible page and the `FAQPage` schema, so the two
 * cannot drift. A schema block that answers differently from the page it sits
 * on is worse than no schema at all.
 *
 * Two kinds of answer live here and the difference matters.
 *
 * **Product answers** are checkable against the app: session lengths, days a
 * week, the equipment question, the morning rules, the test cadence, the
 * streak and its freezes, the notification caps, what Apple Health is asked
 * for and what is copied to the server. They were re-checked against `src/` on
 * 28 September 2026. The plan has no fixed length: there are no weeks to count
 * down, no blocks and no "after the program". Pricing names the two
 * subscriptions by how often they bill, yearly and weekly, which is billing and
 * not a length for the plan; `scripts/build-llms.mjs` refuses any plan-length
 * phrase, and any mention of the pass and the monthly subscription that are no
 * longer sold.
 *
 * **Clinical answers** carry findings, and every one traces to a citation
 * printed on `/science`. No qualifier is dropped: the twelve-month result
 * travels with the three-month one, every claim about arch shape says which
 * feet it was measured on, and the review's six-week figure travels with its
 * overall null result. Study jargon (index names, confidence intervals,
 * p-values, navicular drop) sits in `source`, printed as a source line under
 * the answer, so the answer itself stays plain. A figure that cannot be traced
 * does not go in, and neither does a recommendation the guideline does not
 * make.
 *
 * Each answer is written to be lifted out of the page whole: the answer in the
 * first sentence, about 40 to 60 words, nothing that leans on the question
 * before it. That is the shape an AI answer quotes, and it is also the shape a
 * person skimming on a phone reads.
 *
 * `scripts/build-llms.mjs` imports the flat `FAQ` array to write
 * `public/llms-full.txt`, and stops the build if any answer gives the plan a
 * length again.
 */
export type FaqEntry = {
  q: string;
  /**
   * The answer. May carry the guides' two inline marks, `**bold**` and
   * `[label](/path/)`. The page renders them, and `faqSchema` strips them so
   * the JSON-LD text stays plain.
   */
  a: string;
  /** Study detail for a source line under the answer. Not in the schema. */
  source?: string;
  /** Indices into `CITATIONS`, printed under the answer. */
  cites?: readonly number[];
};

export type FaqGroup = {
  /** The anchor the contents list links to. */
  id: string;
  h2: string;
  entries: readonly FaqEntry[];
};

const RATHLEFF_SOURCE =
  'Scored on the Foot Function Index: 29 points lower in the heel-raise group at three months (95% CI 6-52, p = 0.016), and 22 against 16 at twelve months, not a significant difference.';

export const FAQ_GROUPS: readonly FaqGroup[] = [
  {
    id: 'about-the-app',
    h2: 'About the app',
    entries: [
      {
        q: 'Is Walkito available on Android?',
        a: 'Yes. Walkito is on Android, on Google Play, and on iPhone, on the App Store. On Android it reads Health Connect for steps, distance and sleep. The iPhone app reads Apple Health for steps, sleep and walking asymmetry. It also shows a Live Activity on the Lock Screen while a session runs. Walkito comes in English, Russian and Spanish.',
      },
      {
        q: 'Do I need an Apple Watch?',
        a: 'No, Walkito works without an Apple Watch. The step count, walking speed and walking asymmetry it uses come from the iPhone itself. A watch adds sleep and resting heart rate. Without one, the parts that need them stay quiet, such as a short night making the next session lighter. The rest of the plan works as normal.',
      },
      {
        q: 'How many notifications will I get?',
        a: 'Walkito sends at most one notification a day, and nothing after 21:30. Most weeks, five is the limit. Only four kinds can go past it: a flare after a painful day, a big day on your feet, a change in your walking, and a test day. You can turn notifications off in iOS Settings, and the plan works the same.',
      },
      {
        q: 'Will Walkito nag me if I stop using it?',
        a: 'No, Walkito backs off when you stop opening its messages. After three unopened notifications in a row, reminders drop to two a week. After seven, it goes quiet for a month and then sends one message. Then it stays quiet unless you come back on your own. Opening Walkito at any time resets the count.',
      },
      {
        q: 'How does the streak work?',
        a: 'The Walkito streak counts showing up, not finishing workouts. A day counts if you logged your morning pain, finished a session, or the plan gave you a rest day. A rest day the plan set can never break your streak. So choosing three training days a week costs you nothing.',
      },
      {
        q: 'What happens to my streak if I have a bad week?',
        a: 'A bad week does not have to end your streak, because Walkito gives you freezes. You earn one freeze for each week on the plan and can hold two at a time. A missed day uses one by itself. If the streak does end, Walkito never shows it as a failure. The number simply starts again.',
      },
    ],
  },
  {
    id: 'your-plan',
    h2: 'Your plan',
    entries: [
      {
        q: 'How long does the Walkito plan last?',
        a: 'The Walkito plan has no fixed length. It lasts as long as you use it. Walkito builds one week at a time around a focus goal, such as pain-free mornings or a 60-second arch hold. When you reach a goal, it moves to maintaining at a lower dose, and the next goal takes its place. [How the plan works](/program/).',
      },
      {
        q: 'How long is a daily session?',
        a: 'A Walkito session takes 5 minutes by default, and you can switch any session to 3 or 10. Each session has 2 to 4 exercises. The exercise for the week’s focus goal always stays in, even in the 3-minute version. A test day takes about four minutes and has no training in it.',
      },
      {
        q: 'How many days a week do I train?',
        a: 'You choose to train three, five or seven days a week. Strength days never fall back to back. With five days, mobility and balance sessions fill the gaps, and seven days adds a recovery session. The other days are rest the plan sets, and a planned rest day never breaks your streak.',
      },
      {
        q: 'Do I need any equipment?',
        a: 'No, you don’t need to buy anything to start Walkito. During setup, Walkito asks what you have at home: a step or stairs, a resistance band, a towel, a pillow or a massage ball. Exercises that need something you don’t have are left out of your plan. You can also answer “None of these”.',
      },
      {
        q: 'What happens if I miss a few days?',
        a: 'Nothing is owed when you miss a few days, and nothing piles up. The week runs on dates, not attendance, so a missed session is not moved to tomorrow and there is no catch-up screen. What you did log still counts. Next week is built from how your sessions felt and from your morning pain.',
      },
      {
        q: 'Do I need to log pain every day for the plan to work?',
        a: 'No, but the plan can only respond to what you log. A logged morning is what lets Walkito ease a bad day. The pain-free mornings goal also needs 14 mornings in a row at 1/10 or less, so a morning you skip breaks that run. With nothing logged, the day runs as the week planned it.',
      },
      {
        q: 'What do the tests measure?',
        a: 'Walkito’s tests measure three things in about four minutes: calf raises to failure on each leg, how long you can hold your arch, and single-leg balance. The calf raises also show the gap between your left and right side. Tests come every 14 days, then every 28 once you reach your first goal. Goals are judged on these numbers and your morning pain.',
      },
      {
        q: 'What happens when I reach a goal?',
        a: 'When you reach a goal, it moves to maintaining and the next goal takes its place. A maintained goal keeps a spot in your plan at a lower dose, so the work that got you there goes on. Tests move from every 14 days to every 28 once you reach your first goal.',
      },
      {
        q: 'How long before I notice a difference?',
        a: 'No one can honestly promise a day, but one trial gives a guide. In a trial of 48 people with plantar fasciitis, all wearing shoe inserts, the group doing heavy heel raises was clearly ahead of the stretching group at three months. By twelve months the two groups were even. Your own tests show your numbers as they change.',
        source: RATHLEFF_SOURCE,
        cites: [CITE.rathleff],
      },
      {
        q: 'Is strength training better than stretching for plantar fasciitis?',
        a: 'Strength training works faster than stretching, but not better in the long run. In a trial of 48 people with plantar fasciitis confirmed by ultrasound, all wearing shoe inserts, heavy heel raises were clearly ahead at three months. By twelve months the groups were even. The 2023 guideline gives stretching an A, its top grade, and strength training a B. Walkito uses both.',
        source: RATHLEFF_SOURCE,
        cites: [CITE.rathleff, CITE.guideline],
      },
      {
        q: 'Can exercise change flat feet?',
        a: 'Exercise can measurably change flexible flat feet, where the arch comes back when the foot is off the ground. In a trial of 52 people with flexible flat feet, a six-week exercise program improved the arch more than in the control group. Rigid flat feet are structural, and exercise will not change their shape. The exercises are in [flat feet exercises](/flat-feet-exercises/).',
        source: 'Navicular drop improved by 0.4 cm and arch angle by 16 degrees more than in the control group.',
        cites: [CITE.brijwasi],
      },
      {
        q: 'How long do arch exercises take to work?',
        a: 'Arch exercises need six weeks or more, going by the trials. In a trial of flexible flat feet, six weeks of short-foot work (pulling the ball of the foot toward the heel so the arch lifts), hip work and stretching changed the arch more than control. A 2024 review of short-foot work alone found no significant difference overall. One arch measure improved only in programs longer than six weeks.',
        source:
          'Review outcomes: navicular drop and Foot Posture Index, neither significantly different from control overall. Navicular drop improved significantly only in the subgroup of programs longer than six weeks.',
        cites: [CITE.brijwasi, CITE.cheng],
      },
    ],
  },
  {
    id: 'pain-and-safety',
    h2: 'Pain and safety',
    entries: [
      {
        q: 'Can Walkito tell me what is wrong with my foot?',
        a: 'No, Walkito cannot tell you what is causing your pain. It is an exercise plan. It does not diagnose, and it does not treat. See a clinician for pain that is sharp, getting worse, keeping you up at night, or that started after an injury. The warning signs are listed in [the heel pain guide](/plantar-fasciitis-exercises/#see-a-clinician).',
      },
      {
        q: 'Does the plan change if my pain gets worse?',
        a: 'Yes, Walkito changes the plan the same morning. A morning pain of 7/10 or more turns the day into about three minutes of seated work. A morning three points above your average for the past week steps each exercise back a level. Pain of 6/10 or more during a session ends it and steps the next two back. A good morning never speeds the plan up.',
      },
      {
        q: 'Can I keep running while I do Walkito?',
        a: 'Yes, you can keep running while you do Walkito. The plan adjusts to your load instead of asking you to stop. When yesterday was a big day on your feet, today’s strength session becomes a lighter recovery one. Sharp pain, or pain that keeps getting worse, needs a clinician. More in [heel pain from running](/heel-pain-runners/).',
      },
      {
        q: 'Should I rest completely when my heel hurts?',
        a: 'Walkito’s answer is to change the load on your heel, not to stop everything. The 2023 guideline recommends learning to adjust the load on your feet in daily life, at work and in sport. It grades that advice E, which means it rests on theory, not trials. On a bad day, keep the stretches and drop the loaded work. In Walkito, a 7/10 morning or worse becomes three minutes of seated work.',
        cites: [CITE.guideline],
      },
      {
        q: 'Do insoles and orthotics help heel pain?',
        a: 'The 2023 heel pain guideline advises against orthotics on their own for short-term pain relief, with a grade B. It says they may be used alongside other care, with a grade C, which means weaker evidence. Walkito does not recommend them as the only answer and does not sell any. The full table of grades is in [the heel pain guide](/plantar-fasciitis-exercises/).',
        cites: [CITE.guideline],
      },
      {
        q: 'Will the pain come back?',
        a: 'Heel pain can come back, and Walkito does not promise it won’t. What Walkito does is keep going after the pain stops. A reached goal moves to maintaining and keeps a place in the plan at a lower dose. Tests go on every 28 days once you reach your first goal, so you can see if your numbers start to slip.',
      },
      {
        q: 'Does uneven walking mean I am injured?',
        a: 'Walkito never reads uneven walking as a sign of injury. Walking asymmetry is the percentage of time your steps with one foot are faster or slower than your steps with the other foot. Walkito compares it, as the iPhone estimates it, only with your own earlier readings, never with other people. Walkito can tell you that your walking has changed. It will never tell you what that means or that you are injured. If something feels wrong, ask a clinician.',
      },
    ],
  },
  {
    id: 'privacy-and-account',
    h2: 'Privacy and account',
    entries: [
      {
        q: 'Is my health data uploaded anywhere?',
        a: 'Walkito uploads what you log, but not your Apple Health data. Apple Health readings, from steps to sleep, stay on your iPhone. Your plan and what you log are copied to your Walkito account: pain scores, where it hurts, sessions, pain during sessions, test results and daily app time. That copy restores your plan and shows how the plan is used. See the [privacy policy](/privacy/).',
      },
      {
        q: 'Which Apple Health permissions does Walkito ask for?',
        a: 'Walkito asks to read step count, walking speed, walking asymmetry, flights climbed, heart rate, resting heart rate, active energy, sleep and workouts. It asks to write workouts and mindful minutes. Every permission is optional, and you can withdraw it in iOS Settings. The plan keeps working without them. It just adapts less to your day.',
      },
      {
        q: 'Does Walkito work offline?',
        a: 'Yes, Walkito works offline after setup. Setup needs a connection once, to sign you in with Apple, or with email if you already have an account. After that, everything saves on the phone first, and nothing in the daily flow waits for the network. What you log is copied to your Walkito account in the background when you are online.',
      },
      {
        q: 'What happens to my plan if I get a new phone?',
        a: 'Your plan comes back when you sign in to the same Walkito account on the new phone, because your plan and what you log are saved to that account. To get a purchase back on iPhone, sign in with the same Apple ID and tap Restore Purchases in Walkito. On Android, use the same Google account in Google Play and the subscription comes back. A subscription bought on iPhone does not carry over to Android, or the other way round, because Apple and Google bill separately. Apple Health readings are not part of that copy, because they stay on the phone.',
      },
      {
        q: 'How do I delete my Walkito account and data?',
        a: `Delete your account in Walkito under Profile, then Delete account. That removes your account from Walkito’s server with everything saved to it, and clears the phone. It cannot be undone. Deleting only the app leaves your account in place. Neither one cancels a subscription, which only Apple or Google can do. You can also write to ${SUPPORT_EMAIL}.`,
      },
    ],
  },
  {
    id: 'pricing',
    h2: 'Pricing',
    entries: [
      {
        q: 'How much does Walkito cost?',
        a: 'Walkito’s price is set by the store you buy from, the App Store on iPhone or Google Play on Android, which shows it in your currency before you buy. There are two subscriptions, yearly and weekly, and both renew on their own until you cancel. A friend’s invite code gives a discount on the yearly one. The price the store shows is the one that applies.',
      },
      {
        q: 'How do I cancel my Walkito subscription?',
        a: 'Cancel a Walkito subscription on your iPhone in Settings → your name → Subscriptions, at least 24 hours before the period ends. Canceling stops the next renewal, and you keep access until the end of the period you paid for. On Android, open the Google Play app, tap your profile icon, then Payments & subscriptions → Subscriptions → Walkito → Cancel subscription; you also keep access until the end of the paid period. Deleting the app or your account does not cancel it. Refunds are handled by the store: Apple on iPhone, Google Play on Android.',
      },
    ],
  },
];

/** Every question in page order: the `FAQPage` schema and `llms-full.txt` read this. */
export const FAQ: readonly FaqEntry[] = FAQ_GROUPS.flatMap((group) => group.entries);
