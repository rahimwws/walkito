import type { SourceEntry } from '../entry';

/**
 * The Foot Check: the ankle measurement the phone takes, what it showed, and
 * the card that counts what has been measured so far.
 *
 * Degrees and observations only. Never a normal range, never "tight" or
 * "limited", never a promise: the number is this person's starting point.
 */
export const FOOT_CHECK_EN = {
  'footCheck.intro.title': 'Foot Check · 1 minute',
  'footCheck.intro.body': 'Your phone measures how far your ankles bend. Then a quick look at your foot.',
  'footCheck.intro.safety': 'A starting point for your plan, not a medical test. Stop if anything hurts.',
  'footCheck.ankle.title': 'Ankle bend',
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
  'footCheck.ankle.skip': 'Skip this one',
  'footCheck.degrees': '{value}°',
  'footCheck.result.title': 'Your ankle bend',
  'footCheck.result.leftLess': 'Your left ankle bends {diff}° less than your right.',
  'footCheck.result.rightLess': 'Your right ankle bends {diff}° less than your left.',
  'footCheck.result.same': 'Both ankles bend about the same.',
  'footCheck.result.plan': 'The calf stretches and ankle work in your plan are for exactly this.',
  'footCheck.card.title': 'Your Foot Check',
  'footCheck.card.count': '{done} of {total} measured',
  'footCheck.card.ankle': 'Ankle bend',
  'footCheck.card.toe': 'Big toe lift',
  'footCheck.card.balance': 'Balance',
  'footCheck.card.calf': 'Calf strength',
  'footCheck.card.arch': 'Arch hold',
  'footCheck.card.sides': 'Left {left}° · Right {right}°',
  'footCheck.card.seconds': 'Left {left} s · Right {right} s',
  'footCheck.card.checked': 'Checked',
  'footCheck.card.later': 'In your first test',
  'footCheck.card.rest': 'The rest is a 4-minute test in your first week.',
  'footCheck.card.again': 'We measure your ankles again on {date}.',
  'footCheck.paywall': 'Your Foot Check: {done} of {total} measured',
  'footCheck.paywallFinish': 'Finish it in your free week',
  'footCheck.progress.empty': 'See how far your ankles bend. One minute, sitting down.',
  'footCheck.progress.measure': 'Measure my ankles',
  'footCheck.progress.start': 'Your starting point',
  'footCheck.progress.since': '{delta}° since {date}',
  'footCheck.progress.last': 'Last measured {date}',
  'footCheck.progress.done': 'Done',
  'footCheck.balance.body': 'Hold the phone against your chest and lift one foot. The count stops when your foot comes down, or tap Stop.',
  'footCheck.balance.ready': 'Phone on your chest',
} as const satisfies Record<string, SourceEntry>;
