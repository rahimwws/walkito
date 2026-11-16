import type { SourceEntry } from '../entry';

/**
 * The Foot Check: the two checks she does sitting down in the onboarding
 * (which heel lifts first, the big toe), the ankle measurement the phone takes
 * in Progress, and the card that counts what has been done so far.
 *
 * Degrees and observations only. Never a normal range, never "tight" or
 * "limited", never a promise: the number is this person's starting point.
 */
export const FOOT_CHECK_EN = {
  'footCheck.meta': 'Foot Check · {n} of {total}',
  'footCheck.metaOne': 'Foot Check',
  'footCheck.ankle.title': 'Ankle bend',
  // Which heel lifts first, asked sitting: both feet slide back, nothing is
  // held at the end, and "only as far as feels easy" is part of the task.
  'footCheck.heel.step1': 'Sit with both feet flat on the floor.',
  'footCheck.heel.step2': 'Slide both feet back slowly until a heel starts to lift.',
  'footCheck.heel.step3': 'Only as far as feels easy.',
  'footCheck.heel.question': 'Which heel lifts first?',
  'footCheck.heel.left': 'Left heel',
  'footCheck.heel.right': 'Right heel',
  'footCheck.heel.both': 'Both together',
  'footCheck.heel.unsure': 'Not sure',
  'footCheck.heel.leftSaid': 'Your left heel lifted first. Your left ankle bends a little less than your right.',
  'footCheck.heel.rightSaid': 'Your right heel lifted first. Your right ankle bends a little less than your left.',
  'footCheck.heel.bothSaid': 'Both heels lifted together. Your ankles bend about the same.',
  'footCheck.heel.unsureSaid': 'The heels were hard to tell apart. That’s common.',
  'footCheck.heel.bothPlan': 'Your plan keeps both ankles moving, with calf stretches and ankle work.',
  'footCheck.heel.unsurePlan': 'Your plan works both ankles the same way.',
  'footCheck.heel.leftRow': 'Left heel lifts first',
  'footCheck.heel.rightRow': 'Right heel lifts first',
  'footCheck.heel.bothRow': 'Both lift together',
  // Under the result, on a phone that can measure: the degrees are optional.
  'footCheck.result.measureLater': 'Want a number? Your phone can measure your ankle bend in degrees. It’s in Progress, whenever you like.',
  'footCheck.ankle.step1': 'Sit on the edge of a chair, knee over your ankle.',
  'footCheck.ankle.step2': 'Hold the phone flat against your shin, screen facing out.',
  'footCheck.ankle.step3': 'Slide your foot back until your heel wants to lift. Keep it down and hold.',
  'footCheck.ankle.buzz': 'You’ll feel a buzz when it’s measured.',
  'footCheck.ankle.startLeft': 'Start with my left ankle',
  'footCheck.ankle.startRight': 'Now my right ankle',
  'footCheck.ankle.ready': 'Phone on your shin',
  'footCheck.ankle.slide': 'Slide your foot back',
  'footCheck.ankle.hold': 'Hold still',
  'footCheck.ankle.measured': 'Measured',
  'footCheck.ankle.again': 'Measure again',
  'footCheck.degrees': '{value}°',
  'footCheck.result.plan': 'The calf stretches and ankle work in your plan are for exactly this.',
  'footCheck.card.title': 'Your Foot Check',
  'footCheck.card.count': '{done} of {total} done',
  'footCheck.card.ankle': 'Ankle bend',
  'footCheck.card.toe': 'Big toe lift',
  'footCheck.card.balance': 'Balance',
  'footCheck.card.calf': 'Calf strength',
  'footCheck.card.arch': 'Arch hold',
  'footCheck.card.checked': 'Checked',
  'footCheck.card.later': 'In your first test',
  'footCheck.card.rest': 'The rest is a 4-minute test in your first week.',
  'footCheck.card.again': 'We measure your ankles again on {date}.',
  'footCheck.paywall': 'Your Foot Check: {done} of {total} done',
  'footCheck.paywallFinish': 'Finish it in your free week',
  'footCheck.paywall.degrees': 'Left {left}°, right {right}°',
  'footCheck.paywall.leftLess': 'Your left ankle bends {delta}° less than your right.',
  'footCheck.paywall.rightLess': 'Your right ankle bends {delta}° less than your left.',
  'footCheck.paywall.sameBend': 'Both ankles bend the same.',
  'footCheck.paywall.balance': 'On one leg: left {left} s, right {right} s',
  // The first line of Progress's "Ankle bend": what she answered at the start.
  'footCheck.progress.heelLeft': 'At the start, your left heel lifted first.',
  'footCheck.progress.heelRight': 'At the start, your right heel lifted first.',
  'footCheck.progress.heelBoth': 'At the start, both heels lifted together.',
  'footCheck.progress.empty': 'See how far your ankles bend. One minute, sitting down.',
  'footCheck.progress.measure': 'Measure my ankles',
  'footCheck.progress.start': 'Your starting point',
  'footCheck.progress.since': '{delta}° since {date}',
  'footCheck.progress.last': 'Last measured {date}',
  'footCheck.progress.done': 'Done',
} as const satisfies Record<string, SourceEntry>;
