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
    one: 'About {count} minute.',
    other: 'About {count} minutes.',
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
  'testday.test.arch.name': 'Arch hold',
  'testday.test.balance.name': 'Balance',

  'testday.side.left': 'Left leg',
  'testday.side.right': 'Right leg',
  'testday.side.leftSore': 'Left leg - the sore one',
  'testday.side.rightSore': 'Right leg - the sore one',

  // Calf raises: paced, so the count is the app's and not the user's.
  // The button on the picture before a test: opens the clip at full size.
  'testday.watch': 'Watch the video',
  'testday.calf.step1': 'One leg, fingertips on the wall.',
  'testday.calf.step2': 'All the way up and down, with the tick.',
  'testday.calf.step3': 'Stop when you lose the pace or the height.',
  'testday.calf.stopHint': 'Tap when you can’t keep the pace or full height',
  'testday.calf.up': 'Up',
  'testday.calf.down': 'Down',
  'testday.calf.otherTitle': 'Now the other leg',
  'testday.calf.otherBody': 'Same pace, same full height, fingertips on the wall.',

  'testday.arch.step1': 'Stand on both feet.',
  'testday.arch.step2': 'Pull the ball of the foot toward the heel.',
  'testday.arch.step3': 'Stop when the arch drops.',
  'testday.arch.stopHint': 'Tap the moment the arch drops',

  // Eyes closed, as the plan screen describes this test. The end is heard, not
  // seen, for the same reason.
  'testday.balance.step1': 'One leg, hands on your hips.',
  'testday.balance.step2': 'Eyes closed on go.',
  'testday.balance.step3': 'Stop when the other foot touches down.',
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
  'testday.results.firstBlurb': 'The next test shows how far you have come.',
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

  // The headline over the cards. It names what went up and never what went
  // down; with nothing up it only says the tests are done.
  'testday.results.verdictFirst': 'Three numbers to beat',
  'testday.results.verdictSteady': 'All three held steady',
  'testday.results.verdictUp.calf_raises': 'More calf raises than last time',
  'testday.results.verdictUp.arch_hold': 'Your arch held longer',
  'testday.results.verdictUp.balance': 'You balanced for longer',
  'testday.results.verdictUpTwo': 'Two of three went up',
  'testday.results.verdictUpAll': 'All three went up',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'New best',
  'testday.results.heroEyebrowFirst': 'Your starting point',
  'testday.results.heroEyebrowSteady': 'Test day done',
  'testday.results.verdictGoal.calf_raises': 'You hit your calf raise goal',
  'testday.results.verdictGoal.arch_hold': 'You hit your arch hold goal',
  'testday.results.verdictGoal.balance': 'You hit your balance goal',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Every test so far',
  'testday.results.showDetails': 'Show details',
  'testday.results.hideDetails': 'Hide details',
  'testday.results.share': 'Share',
  'testday.results.shareTitle': 'My foot test',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'My Walkito foot test: calf raises {calf} · arch hold {arch} s · balance {balance} s',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 's',
  'testday.results.valueSeconds': '{n} s',
  // Under the headline: the test's date, and how far back the comparison goes.
  'testday.results.dateVs': {
    one: '{date} · compared with {count} day ago',
    other: '{date} · compared with {count} days ago',
  },
  'testday.results.dateFirst': '{date} · your starting point',
  // The chip beside a test's name: the change since last time, in short.
  'testday.results.chipBaseline': 'Baseline',
  'testday.results.chipSame': 'Same',
  'testday.results.chipSeconds': '{delta} s',
  'testday.results.chipRaises': { one: '{delta} raise', other: '{delta} raises' },
  // In the calf test's details: the gap its two legs leave.
  'testday.results.gapBetween': 'Gap between legs {n}%',
  // What each test shows, and what a higher number means on your feet. No
  // diagnosis, no promise.
  'testday.results.explain.calf_raises':
    'Calf raises show how much work your calf and Achilles can do before they tire. More raises means your calf carries more of each step on long walks and runs.',
  'testday.results.explain.arch_hold':
    'The arch hold shows how long the small muscles under your foot keep the arch lifted. A longer hold means your foot stays supported for more of the day.',
  'testday.results.explain.balance':
    'Standing on one leg with your eyes closed shows how well your foot and ankle sense the ground. More seconds means steadier steps on uneven paths and when you are tired.',
  'testday.results.explainA11y': 'What this shows',
} as const satisfies Record<string, SourceEntry>;
