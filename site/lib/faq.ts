/**
 * The FAQ, as data.
 *
 * One array feeding both the visible page and the `FAQPage` schema, so the two
 * cannot drift — a schema block that answers differently from the page it sits
 * on is worse than no schema at all.
 *
 * Two kinds of answer live here and the difference matters.
 *
 * **Product answers** are checkable against the app — session lengths, days a
 * week, the morning rules, the test cadence, the streak rule, the notification
 * caps, what Apple Health is asked for and what is copied to the server. They
 * were re-checked against `src/` on 28 September 2026, after the plan stopped
 * having a fixed length: there are no weeks to count down, no blocks and no
 * "after the program".
 *
 * **Clinical answers** carry figures, and every one of them traces to a
 * citation printed on `/science`. No number is rounded, no qualifier dropped:
 * the twelve-month convergence travels with the three-month result, every
 * claim about arch shape says which feet it was measured on, and the
 * meta-analysis's six-week figure is a subgroup of an overall null result. A
 * figure that cannot be traced does not go in, and neither does a
 * recommendation the guideline does not make — an invented trial statistic in
 * a YMYL niche is a
 * manual-action risk rather than thin content. That rule removed the
 * "more than 800 runners" gait-asymmetry figure, which had no citation.
 *
 * Each answer is written to survive being lifted out of the page whole: the
 * answer in the first sentence, 40–60 words, nothing that leans on the
 * question before it. That is the shape an AI answer quotes, and it is also the
 * shape a person skimming on a phone reads.
 *
 * `scripts/build-llms.mjs` imports this array to write `public/llms-full.txt`,
 * and stops the build if any answer gives the plan a length again.
 */
export type FaqEntry = {
  q: string;
  /**
   * The answer. May carry the guides' two inline marks, `**bold**` and
   * `[label](/path/)` — the page renders them, and `faqSchema` strips them so
   * the JSON-LD text stays plain.
   */
  a: string;
};

export const FAQ: readonly FaqEntry[] = [
  {
    q: 'How long does the Walkito plan last?',
    a: 'As long as you use it: there is no fixed length. Walkito builds one week at a time around a focus goal, such as pain-free mornings or a 60-second arch hold. When a goal is reached it moves to maintaining, kept going at a lower dose, and the next goal takes its place. [How the plan works](/program/).',
  },
  {
    q: 'How long is a daily session?',
    a: 'Five minutes by default, and you can switch any session to 3 or 10. Each one is 2 to 4 exercises, and the exercise for the week’s focus goal always stays in, even in the 3-minute version. A test day takes about four minutes and has no training in it.',
  },
  {
    q: 'How many days a week do I train?',
    a: 'Three, five or seven: you choose. Strength days never fall on consecutive days; with five or seven, mobility, balance and recovery sessions fill the days between. The days without a session are rest the plan assigns, and a prescribed rest day counts as showing up and never breaks your streak.',
  },
  {
    q: 'What happens if I miss a few days?',
    a: 'Nothing is owed and nothing is queued. The week runs on dates rather than attendance, so a missed session is not moved to tomorrow and there is no catch-up screen. What you did log still counts: next week is built from how your sessions felt and from your morning pain.',
  },
  {
    q: 'Does the plan change if my pain gets worse?',
    a: 'Yes, the same morning. A morning pain of 7/10 or more turns the day into about three minutes of seated work, and a morning well above your recent average steps each exercise back a level. Pain of 6/10 or more during a session ends it and steps the next two back. A good morning never speeds the plan up.',
  },
  {
    q: 'Can I keep running while I do Walkito?',
    a: 'Yes. Walkito is for anyone with heel or foot pain, including runners, and the plan adjusts to your load rather than asking you to stop. When yesterday was a big day on your feet, a strength session becomes a lighter recovery one. Sharp or worsening pain needs a clinician. More in [heel pain when running](/plantar-fasciitis-exercises/).',
  },
  {
    q: 'What do the tests measure?',
    a: 'Three things, in about four minutes: calf raises to failure on each leg, arch hold time, and single-leg balance. The calf raises also give the gap between your left and right side. Tests come every 14 days until your first goal is reached, then every 28. Goals are reached on these numbers and your morning pain, never on a streak.',
  },
  {
    q: 'What happens when I reach a goal?',
    a: 'It moves to maintaining, and the next goal takes its place. A maintained goal keeps a spot in the plan at a lower dose, so the work that got you there does not stop, and tests move from every 14 days to every 28 once your first goal is reached. The plan changes what it works on rather than ending.',
  },
  {
    q: 'Do I need an Apple Watch?',
    a: 'No. The step count, walking speed and walking asymmetry Walkito relies on come from the iPhone itself. A watch adds sleep and resting heart rate; without one, the parts that need them (such as a short night softening the next session) simply stay quiet, and the rest of the plan works as normal.',
  },
  {
    q: 'Does Walkito work offline?',
    a: 'Yes, after setup. Setup signs you in with Apple, or with email for an existing account, and needs a connection once. After that everything is saved on the phone first and nothing in the daily flow waits for a network; what you log is copied to your Walkito account in the background whenever there is a connection.',
  },
  {
    q: 'Is my health data uploaded anywhere?',
    a: 'Partly. Apple Health readings, from steps to sleep, stay on the iPhone. Your plan and what you log are copied to your Walkito account on our server: pain scores, where it hurts, sessions and in-session pain, self-test results and daily app time. That copy restores your plan and shows how the plan is used. See the [privacy policy](/privacy/).',
  },
  {
    q: 'Which Apple Health permissions does Walkito ask for?',
    a: 'To read: step count, walking speed, walking asymmetry, flights climbed, heart rate and resting heart rate, active energy, sleep and workouts. To write: workouts and mindful minutes. Every one is optional and can be withdrawn in iOS Settings; the plan keeps working without them, and simply adapts less to your day.',
  },
  {
    q: 'How many notifications will I get?',
    a: 'One a day at most and five a week at most, with nothing after 21:30. If several are ever due on the same day, the more important one is sent and the other is dropped rather than queued. You can turn them off at any time in iOS Settings, and the plan works the same without them.',
  },
  {
    q: 'Will Walkito nag me if I stop using it?',
    a: 'No. If three notifications go unopened in a row, the app drops to two a week, and after seven unopened it stops for a month and then sends one message. After that it stays quiet unless you come back on your own. The limits exist so that an app about pain never becomes one more thing to feel bad about.',
  },
  {
    q: 'How does the streak work?',
    a: 'The streak counts attention, not completion. A day is green if you logged your morning pain, or finished a session, or the plan itself prescribed rest that day. A rest day the plan assigned can never break a streak, so choosing three training days a week costs you nothing.',
  },
  {
    q: 'What happens to my streak if I have a bad week?',
    a: 'You earn one freeze a week and can hold two at a time, and a broken streak can be restored within 48 hours. A lost streak is never shown as a failure: the app offers to put it back, and if you decline, the number simply starts again.',
  },
  {
    q: 'Is Walkito available on Android?',
    a: 'Not yet. Walkito is available on iPhone now; Android is planned. The iPhone app reads Apple Health for steps, sleep and walking asymmetry, and runs a Live Activity on the Lock Screen while a session is going. It is available on the App Store, in English, Russian and Spanish.',
  },
  {
    q: 'Can Walkito tell me what is wrong with my foot?',
    a: 'No. Walkito is an exercise plan: it does not diagnose, it does not treat, and it cannot identify what is causing your pain. Pain that is sharp, getting worse, stopping you sleeping, or that followed an injury should be seen by a clinician. The warning signs are listed in [the heel pain guide](/plantar-fasciitis-exercises/).',
  },
  {
    q: 'How long before I notice a difference?',
    a: 'There is no honest day to promise. In the trial Walkito’s strength work follows, where both groups wore shoe inserts, the high-load strength group scored 29 points lower on the Foot Function Index than the stretching group at three months; by twelve months the two had converged. Strength work brought improvement forward rather than making it larger. Your own tests show your numbers as they move.',
  },
  {
    q: 'Is strength training better than stretching for plantar fasciitis?',
    a: 'Faster, not better. In a randomised trial of 48 people with plantar fasciitis confirmed by ultrasound, all wearing shoe inserts, high-load strength training scored 29 points lower on the Foot Function Index at three months than plantar-specific stretching (95% CI 6–52, p = 0.016). By twelve months the groups had converged. The 2023 guideline grades stretching A and strength B; Walkito uses both. [The evidence](/science/).',
  },
  {
    q: 'Can exercise change flat feet?',
    a: 'For flexible flat feet, yes, measurably. In a randomised trial of 52 people whose arch reappears off the ground, a six-week program improved navicular drop by 0.4 cm and arch angle by 16 degrees more than the control group. Rigid flat feet are structural and exercise will not change them. The exercises are in [flat feet exercises](/flat-feet-exercises/).',
  },
  {
    q: 'How long do arch exercises take to work?',
    a: 'Six weeks or more, going by the trials. In one randomised trial of flexible flat feet, a six-week program of short-foot, hip and stretching work changed arch measures more than control. For short-foot training alone, a 2024 meta-analysis found no significant effect overall; in a subgroup, only programs longer than six weeks improved navicular drop. More in [flat feet exercises](/flat-feet-exercises/).',
  },
  {
    q: 'Should I rest completely when my heel hurts?',
    a: 'Walkito’s answer is to change the load rather than stop. The 2023 guideline includes education on modifying weight-bearing load in daily, work and sporting activity, graded E (theoretical rather than trial evidence). On a bad day, keep the stretches and drop the loaded work; in Walkito, a morning at 7/10 or more becomes about three minutes of seated work.',
  },
  {
    q: 'Do insoles and orthotics help heel pain?',
    a: 'Not on their own. The 2023 guideline recommends against orthotics as a stand-alone treatment for short-term pain relief (grade B) and says they may be used alongside other treatment (grade C, weak evidence). Walkito does not recommend them as a standalone answer and does not sell any. The full list is in [the heel pain guide](/plantar-fasciitis-exercises/).',
  },
  {
    q: 'Will the pain come back?',
    a: 'It can, and Walkito does not promise it won’t. What it does is keep going when the pain stops: a reached goal moves to maintaining and keeps a place in the plan at a lower dose, and tests continue every 28 days once your first goal is reached, so a slide in your numbers is visible rather than guessed at.',
  },
  {
    q: 'Does uneven walking mean I am injured?',
    a: 'Walkito never reads it that way. It compares your walking asymmetry, which the iPhone estimates, only against your own earlier readings, never against a population norm. It will tell you when your walking pattern has changed; it will never tell you what that means or that you are injured. If something feels wrong, that is a question for a clinician.',
  },
  {
    q: 'Do I need to log pain every day for the plan to work?',
    a: 'No, but the plan is only as responsive as what it knows. A logged morning is what lets it soften a bad day, and the pain-free mornings goal needs 14 mornings running at 1/10 or less, so an unlogged morning breaks that run. With nothing logged, the day runs as the week planned it.',
  },
];
