/**
 * The FAQ, as data.
 *
 * One array feeding both the visible page and the `FAQPage` schema, so the two
 * cannot drift — a schema block that answers differently from the page it sits
 * on is worse than no schema at all.
 *
 * Two kinds of answer live here and the difference matters.
 *
 * **Product answers** are checkable against this repository — session lengths,
 * the streak rule, the notification caps, what Apple Health is asked for.
 *
 * **Clinical answers** carry figures, and every one of them traces to a
 * citation printed on `/science`. No number is rounded, no qualifier dropped:
 * the twelve-month convergence travels with the three-month result, and
 * "flexible" travels with every claim about arch shape. A figure that cannot
 * be traced does not go in — an invented trial statistic in a YMYL niche is a
 * manual-action risk rather than thin content.
 *
 * Each answer is written to survive being lifted out of the page whole. That is
 * the shape an AI answer quotes, and it is also the shape a person skimming on
 * a phone reads.
 */
export type FaqEntry = {
  q: string;
  /** Plain text. Kept free of markup so it can go into JSON-LD unchanged. */
  a: string;
};

export const FAQ: readonly FaqEntry[] = [
  {
    q: 'How long is the Walkito program?',
    a: 'Twelve weeks — 84 days, run as six blocks of fourteen. There is also a six-week version of the same structure at three blocks. After the twelve weeks the plan moves into maintenance rather than ending.',
  },
  {
    q: 'How long is a daily session?',
    a: 'Between three and eight minutes. Strength days are the longest at seven minutes, mobility and balance days are five, and a prescribed recovery day is three. Retest days are four minutes and contain no training at all.',
  },
  {
    q: 'How many days a week do I train?',
    a: 'Three strength days a week carry the load, with mobility and balance days between them. One day in seven is rest the plan assigns rather than rest you take.',
  },
  {
    q: 'What happens if I miss a few days?',
    a: 'Nothing is owed and nothing is queued. The plan runs on dates rather than attendance, so day 24 is day 24 whether or not you were there for day 23. There is no make-up work and no catch-up screen.',
  },
  {
    q: 'Does the program change if my pain gets worse?',
    a: 'Yes. Logging a morning pain of seven or higher makes the same day step back one level and shrink to three minutes of unloaded work. A day on your feet far above your own baseline does the same. The plan only ever walks back and then returns; it never accelerates because you had a good day.',
  },
  {
    q: 'What do the retests measure?',
    a: 'Three things, every fourteen days, in about four minutes: calf raises to failure, an arch hold, and single-leg balance timed on both sides. The gap between your two sides is the figure worth watching. Nothing else moves your level — not a streak, and not how the sessions felt.',
  },
  {
    q: 'Do I need an Apple Watch?',
    a: 'No. The signals Walkito relies on — step count, walking speed and walking asymmetry — come from the iPhone itself. A watch adds sleep and resting heart rate, and without one the features that need those simply stay quiet.',
  },
  {
    q: 'Does Walkito work offline?',
    a: 'Yes. The plan, the pain log and the whole history live on the device, and there is no account to sign into. Nothing in the daily flow needs a network connection.',
  },
  {
    q: 'Is my health data uploaded anywhere?',
    a: 'No. Apple Health data is read on the device and summarised there, and it never leaves the phone. The only things that leave are a subscription status, and a notification token if you turn notifications on.',
  },
  {
    q: 'Which Apple Health permissions does Walkito ask for?',
    a: 'Walking asymmetry, walking speed, step count, resting heart rate and sleep analysis to read, and workouts and mindful minutes to write. Every one is optional and can be withdrawn in iOS Settings; the plan keeps working without them.',
  },
  {
    q: 'How many notifications will I get?',
    a: 'One a day at most and five a week at most, with nothing after 21:30. If several are ever due on the same day, the more important one is sent and the other is dropped rather than queued.',
  },
  {
    q: 'Will Walkito nag me if I stop using it?',
    a: 'No. If three notifications go unopened in a row the app drops to two a week, and after seven it stops for a month and then sends one message. After that it stays quiet unless you come back on your own.',
  },
  {
    q: 'How does the streak work?',
    a: 'The streak counts attention, not completion. A day is green if you logged your morning pain, or finished a session, or the plan itself prescribed rest that day. A rest day the program assigned can never break a streak.',
  },
  {
    q: 'What happens to my streak if I have a bad week?',
    a: 'You earn one freeze a week and can hold two at a time, and a broken streak can be restored within 48 hours. A lost streak is never shown as a failure — the app offers to put it back, and if you decline the number simply starts again.',
  },
  {
    q: 'Is Walkito available on Android?',
    a: 'No. It is iOS only, because it reads Apple Health for steps, sleep and walking asymmetry, and runs a Live Activity on the Lock Screen while a session is going.',
  },
  {
    q: 'What happens after the twelve weeks?',
    a: 'Maintenance: two sessions a week of about eight minutes, with a checkpoint every four weeks. The plan changes job rather than ending, because the thing that undoes the work is stopping once it stops hurting.',
  },
  {
    q: 'Can Walkito tell me what is wrong with my foot?',
    a: 'No. Walkito is a screening and exercise program. It does not diagnose and it does not treat, and it cannot identify a condition. Pain that is sharp, getting worse, or stopping you sleeping should be seen by a clinician.',
  },
  {
    q: 'How long before I notice a difference?',
    a: 'The trial Walkito’s strength protocol follows measured its groups at three months, not weekly, so an honest answer is that it reports a difference by three months rather than by a particular day. At three months the high-load strength group scored 29 points lower on the Foot Function Index than the stretching group. At twelve months the two groups had converged, which means the strength work brought improvement forward rather than making it larger.',
  },
  {
    q: 'Is strength training better than stretching?',
    a: 'Faster, not better. In a randomised trial of 48 people with plantar fasciitis confirmed by ultrasound, high-load strength training scored 29 points lower on the Foot Function Index at three months than plantar-specific stretching (95% CI 6–52, p = 0.016). By twelve months the two groups had converged with no significant difference. Walkito does both: the guideline grades stretching A and it runs daily from day one.',
  },
  {
    q: 'Can exercise change flat feet?',
    a: 'For flexible flat feet, where the arch reappears when the foot is lifted off the ground, a randomised trial of 52 people found a six-week program improved navicular drop by 0.4 cm and arch angle by 16 degrees more than the control group. Rigid flat feet are a structural issue and exercise will not change them.',
  },
  {
    q: 'Should I choose the six-week plan or the twelve-week one?',
    a: 'Twelve, if the arch is what you are after. A 2024 meta-analysis of short-foot training found that only programs longer than six weeks produced significant improvement in navicular drop; shorter ones showed no measurable effect. The six-week plan sits exactly at that boundary — long enough to train, not long enough for that finding to apply.',
  },
  {
    q: 'Should I rest completely when my heel hurts?',
    a: 'The 2023 clinical practice guideline advises against complete rest, which increases stiffness. Walkito modifies load rather than stopping it — on a high-pain day the session becomes three minutes of unloaded work, but it still happens.',
  },
  {
    q: 'Do insoles and orthotics work?',
    a: 'The 2023 guideline grades orthotics B, with the qualifier that they should not be used in isolation. Walkito does not recommend them as a standalone fix and does not sell any. The same guideline grades therapeutic ultrasound A — do not use.',
  },
  {
    q: 'Will the pain come back?',
    a: 'Recurrence is common enough that Walkito does not stop at week twelve. After the program a maintenance phase keeps two sessions a week and retests every 28 days, to catch regression before it becomes pain again.',
  },
  {
    q: 'Does uneven walking mean I am injured?',
    a: 'No. Walkito compares walking asymmetry only against your own baseline, never against a population norm, because none exists — a secondary analysis of a trial with more than 800 runners found gait asymmetry did not predict injury. The app will tell you your walking pattern has changed. It will never tell you what that means.',
  },
  {
    q: 'Do I need to log pain every day for the plan to work?',
    a: 'No, but the plan is only as responsive as what it knows. A logged morning is what lets it step back on a bad day; with nothing logged it runs the day the template prescribes.',
  },
];
