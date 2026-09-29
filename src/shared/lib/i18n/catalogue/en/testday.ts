/** testday strings (the guided test day: intro, the three tests, results). Filled per domain; see `./core.ts` for the rules. */

import type { SourceEntry } from '../entry';

export const TESTDAY_EN = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Close',
  // Asked only once something has been measured: the numbers so far are not
  // saved, and the test is still waiting on the plan afterwards.
  'testday.leave.title': 'Leave the test?',
  'testday.leave.body': 'Nothing is saved until the last test is done. The test stays due.',
  'testday.leave.stay': 'Keep testing',
  'testday.leave.confirm': 'Leave',

  // ── Intro ─────────────────────────────────────────────────────────────────
  // The old flow opened straight onto a timer and ended on four unexplained
  // questions. This screen says what is coming, why it matters and what to
  // have ready, before anything starts counting.
  'testday.intro.eyebrow': 'Test day',
  'testday.intro.title': 'Three short tests',
  'testday.intro.body': {
    one: 'About {count} minute. The numbers show how far each goal has come and set your plan for the next two weeks.',
    other: 'About {count} minutes. The numbers show how far each goal has come and set your plan for the next two weeks.',
  },
  // Each test's line under its name: where the last test left it, and the aim.
  'testday.intro.nowSeconds': 'Now {now} s · goal {goal} s',
  'testday.intro.nowRaises': {
    one: 'Now {now} · goal {count} raise',
    other: 'Now {now} · goal {count} raises',
  },
  'testday.intro.firstSeconds': 'First measurement · goal {goal} s',
  'testday.intro.firstRaises': {
    one: 'First measurement · goal {count} raise',
    other: 'First measurement · goal {count} raises',
  },
  'testday.intro.need': 'You need',
  'testday.intro.needBarefoot': 'Bare feet',
  'testday.intro.needWall': 'A wall to touch for balance',
  'testday.intro.needPhone': 'The phone where you can see it',
  // Shown only when today's check-in has not been answered. Answering here is
  // the check-in, so Home stops asking for it after the test.
  'testday.intro.checkin': 'How’s the foot right now?',
  'testday.intro.checkinHint': 'This counts as today’s check-in.',
  'testday.intro.painNone': 'No pain',
  'testday.intro.painWorst': 'Worst',
  'testday.intro.painA11y': '{score} out of 10',
  // A reason, not a warning. The test stays due either way.
  'testday.intro.sore':
    'On a sore day the numbers come out lower than your foot really is, and the next two weeks would be planned from them. The test can wait until tomorrow.',
  'testday.intro.start': 'Start',
  'testday.intro.anyway': 'Test anyway',
  'testday.intro.tomorrow': 'Test tomorrow',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Test {current} of {total}',
  'testday.test.calf.name': 'Calf raises',
  'testday.test.calf.measures': 'How many raises each leg manages at a steady pace',
  'testday.test.arch.name': 'Arch hold',
  'testday.test.arch.measures': 'How long your arch stays lifted',
  'testday.test.balance.name': 'Balance',
  'testday.test.balance.measures': 'How long you stand on one leg with your eyes closed',

  'testday.side.left': 'Left leg',
  'testday.side.right': 'Right leg',
  'testday.side.leftSore': 'Left leg - the sore one',
  'testday.side.rightSore': 'Right leg - the sore one',

  // Calf raises: paced, so the count is the app's and not the user's.
  'testday.calf.step1': 'Stand on one leg, fingertips on the wall for balance.',
  'testday.calf.step2': 'Rise all the way up and lower again, one raise every 2 seconds. A tick keeps the pace.',
  'testday.calf.step3': 'Tap Stop when you can’t keep the pace or the full height. Then the other leg.',
  'testday.calf.stopHint': 'Tap when you can’t keep the pace or full height',
  'testday.calf.up': 'Up',
  'testday.calf.down': 'Down',
  'testday.calf.otherTitle': 'Now the other leg',
  'testday.calf.otherBody': 'Same pace, same full height, fingertips on the wall.',

  'testday.arch.step1': 'Stand on both feet, weight spread evenly.',
  'testday.arch.step2': 'Draw the ball of the foot toward the heel so the arch lifts. Toes stay long and relaxed.',
  'testday.arch.step3': 'Hold it. Tap Stop the moment the arch drops.',
  'testday.arch.stopHint': 'Tap the moment the arch drops',

  // Eyes closed, as the plan screen describes this test. The end is heard, not
  // seen, for the same reason.
  'testday.balance.step1': 'Stand on one leg next to the wall, hands on your hips.',
  'testday.balance.step2': 'Close your eyes on go. A sound tells you when the time is up.',
  'testday.balance.step3': 'Open your eyes and tap Stop as soon as the other foot touches down.',
  'testday.balance.stopHint': 'Tap when the other foot touches down',

  'testday.start': 'Start',
  'testday.stop': 'Stop',
  /** Under the rep count: the countdown the raises run against, "0:42". */
  'testday.timeLeft': '{time} left',
  /** Under the big number on a hold: the number is the seconds. */
  'testday.secondsLeft': { one: 'second left', other: 'seconds left' },
  /** Under a hold's countdown: what has been held so far — the figure the
   * confirmation then asks about. */
  'testday.held': 'Held for {n} s',

  'testday.paused.title': 'Paused',
  'testday.paused.body': 'The timer stopped while the app was in the background.',
  'testday.paused.resume': 'Resume',
  'testday.paused.restart': 'Start this test again',

  // One question per measurement, right after it, instead of four at the end.
  'testday.confirm.raises': {
    one: '{count} raise - is that right?',
    other: '{count} raises - is that right?',
  },
  'testday.confirm.seconds': {
    one: '{count} second - is that right?',
    other: '{count} seconds - is that right?',
  },
  'testday.confirm.hint': 'Adjust it if the count was off.',
  // A hold is stopped from wherever the phone is, so its figure can only run
  // long: the seconds spent reaching it.
  'testday.confirm.holdHint': 'If reaching the phone took a moment, take those seconds off.',
  'testday.confirm.less': 'Less',
  'testday.confirm.more': 'More',
  'testday.confirm.again': 'Do this test again',
  'testday.confirm.next': 'Next test',
  'testday.confirm.finish': 'See results',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.title': 'Your results',
  'testday.results.blurb': 'Compared with your last test, never with anyone else.',
  'testday.results.firstBlurb': 'This is your starting point. The next test shows what changed.',
  'testday.results.name.arch_hold': 'Arch hold',
  'testday.results.name.calf_raises': 'Calf raises',
  'testday.results.name.balance': 'Balance',
  'testday.results.name.symmetry': 'Symmetry',
  /** The word after the big figure. Plural because it agrees with it. */
  'testday.results.unitSeconds': { one: 'second', other: 'seconds' },
  'testday.results.unitRaises': { one: 'raise', other: 'raises' },
  'testday.results.percent': '{n}%',
  'testday.results.gapUnit': 'between legs',
  /** Under calf raises, whose figure is the weaker leg. */
  'testday.results.legs': 'Left {left} · right {right}',
  'testday.results.goalSeconds': 'Goal {n} s',
  'testday.results.goalRaises': { one: 'Goal {count} raise', other: 'Goal {count} raises' },
  'testday.results.goalGap': 'Goal under {n}%',
  'testday.results.toGoSeconds': { one: '{count} s to go', other: '{count} s to go' },
  'testday.results.toGoRaises': { one: '{count} raise to go', other: '{count} raises to go' },
  'testday.results.toGoGap': { one: '{count} point to go', other: '{count} points to go' },
  'testday.results.reached': 'Goal reached',
  // The change since the last test, said in words. Only an improvement is
  // coloured; a dip is information, and reads in the caption grey.
  'testday.results.moreSeconds': {
    one: '{count} s more than last time',
    other: '{count} s more than last time',
  },
  'testday.results.fewerSeconds': {
    one: '{count} s less than last time',
    other: '{count} s less than last time',
  },
  'testday.results.moreRaises': {
    one: '{count} more raise than last time',
    other: '{count} more raises than last time',
  },
  'testday.results.fewerRaises': {
    one: '{count} fewer raise than last time',
    other: '{count} fewer raises than last time',
  },
  'testday.results.gapSmaller': {
    one: 'Gap {count} point smaller than last time',
    other: 'Gap {count} points smaller than last time',
  },
  'testday.results.gapLarger': {
    one: 'Gap {count} point larger than last time',
    other: 'Gap {count} points larger than last time',
  },
  'testday.results.same': 'Same as last time',
  'testday.results.first': 'First measurement',
  'testday.results.nextTest': 'Next test: {date}',
  'testday.results.planUpdated': 'Your plan for the next two weeks is updated.',
  'testday.results.done': 'Done',
} as const satisfies Record<string, SourceEntry>;
