/**
 * The four page slices that own no domain of their own: the day sheet, the
 * program, the welcome gate and the end of the plan. See `./core.ts` for the
 * authoring rules.
 *
 * **What is deliberately not here.** Weekdays and dates. `Intl.DateTimeFormat`
 * already knows them for every locale, including the conventions a translator
 * gets wrong — Russian and Spanish lowercase their weekday names, each
 * language abbreviates to its own length, and "12 August" is not the order
 * every locale writes. The pages format their own dates and hand the finished
 * string in as `{date}`. Same argument as `shared/ui/streak-week`.
 *
 * **`pages.program.*` is read by `pages/day` too.** Session kinds, tests and
 * spelled-out minutes appear on both the program list and the day sheet, and
 * they have to be the same words on both — a day that says "Strength" in the
 * list and something else in the sheet is describing two sessions. Keys are one
 * flat namespace, so the pair share the entry rather than each holding a copy.
 */

import type { SourceEntry } from '../entry';

export const PAGES_EN = {
  // ── Day sheet ────────────────────────────────────────────────────────────
  // The form sheet at `pages/day`: what one day of the plan holds, or what its
  // retest measured.
  'pages.day.notInPlan': 'That day isn’t part of your plan.',

  // A retest, in the four states it can be read in. The eyebrow and title are
  // whole lines rather than a word plus a number, because the separator is
  // written text here and a language may want the block before the day.
  'pages.day.retestEyebrow': 'Retest · Day {day}',
  'pages.day.blockTitle': 'Block {block} · {name}',
  'pages.day.retestResultSubtitle': 'Where you stood at the end of the block',
  'pages.day.share': 'Share',
  /** One measured zone, as the share sheet writes it. Leaves the app, so it is
   * one line rather than parts — there is no layout here to reorder. */
  'pages.day.shareRow': '{zone}: {from} → {to} ({level})',

  'pages.day.retestTodayTitle': 'Time to check your progress',
  /** "3 tests · 4 minutes". Both halves arrive already agreed by the plural
   * entries that produced them, so this line only carries the separator. */
  'pages.day.retestMeta': '{tests} · {minutes}',
  'pages.day.retestTodayNote':
    'Nothing to train today. The tests measure where the block left you, and they are the only thing that moves a level.',
  'pages.day.startRetest': 'Start retest',
  'pages.day.retestMissed': 'This retest wasn’t completed. Levels held from the last one.',
  'pages.day.retestClosesBlock': 'Retest · closes Block {block}',
  'pages.day.retestOpensOn': 'Opens on {date}. Levels hold still until then.',

  // An ordinary training day.
  'pages.day.sessionTitle': '{kind} · {minutes}',
  'pages.day.sessionSubtitle': 'Day {day} · Block {block} · {name}',
  'pages.day.missedNote':
    'No session logged. Nothing to make up - the program runs on dates, so the next day is the next day.',
  'pages.day.painLabel': 'Pain that day',
  /** The small half of "6 / 10". Notation rather than prose, but it is on
   * screen, so it is a key — a language that says "de 10" can. */
  'pages.day.painOutOf': '/ {max}',
  'pages.day.comesUpOn': 'Comes up on {date}.',

  // ── Program ──────────────────────────────────────────────────────────────
  'pages.program.closeA11y': 'Close the program',
  /** Under the weekday: the date, then how far into the plan it is. */
  'pages.program.headerMeta': '{date} · Block {block} of {total}',

  // What kind of work a day is. Shared with the day sheet — see the note at the
  // top of this file.
  'pages.program.kindStrength': 'Strength',
  'pages.program.kindMobility': 'Mobility',
  'pages.program.kindBalance': 'Balance',
  'pages.program.kindRecovery': 'Recovery',
  'pages.program.retest': 'Retest',

  // The counted phrases both screens drop into their meta lines. `session.
  // minutes` in core is the abbreviated "5 min"; this one is spelled out,
  // which is a different word in Russian's genitive plural and a different
  // length everywhere.
  'pages.program.testCount': { one: '{count} test', other: '{count} tests' },
  'pages.program.minuteCount': { one: '{count} minute', other: '{count} minutes' },

  // A card in the list.
  'pages.program.dayCardA11y': 'Day {day}, {kind}, {minutes}',
  /** An exercise chip carrying its prescription: "Heel raises · 3 × 12". */
  'pages.program.moveWithDose': '{title} · {dose}',
  // What a retest measures. Three of the four are chips on a checkpoint card;
  // all four are rows in the result the day sheet shows afterwards.
  'pages.program.zoneCalf': 'Calf',
  'pages.program.zoneArch': 'Arch',
  'pages.program.zoneBalance': 'Balance',
  'pages.program.zoneSymmetry': 'Symmetry',

  // The sheet a card opens.
  'pages.program.statSession': 'Session',
  'pages.program.statTests': 'Tests',
  'pages.program.statExercises': 'Exercises',
  'pages.program.getStarted': 'Get Started',

  // The seams between blocks. Upper case is a typographic choice made in the
  // catalogue rather than by `toUpperCase()` at the call site, so a language
  // whose script has no case can simply write it in its own.
  'pages.program.blockSeam': 'Block {index} · {name}',
  'pages.program.blockAllDone': { one: '{count} day done', other: '{count} days done' },
  'pages.program.blockProgress': '{done} of {length} done',
  /** Under a block's seam: which fortnight of the plan it covers. */
  'pages.program.blockDays': 'Days {start}–{end}',
  /** What a block is for, in a few sentences, shown where the block opens.
   * Written per block rather than assembled from its exercise table: the table
   * says what changes, and only these say why. */
  'pages.program.blockAbout1':
    'Calming the foot down. Stretches and gentle movement - nothing is loaded yet.',
  'pages.program.blockAbout2':
    'Strength work starts. Towel heel raises are what move the pain; seated short foot is what reshapes the arch. Most people feel the first real relief around day 20.',
  'pages.program.blockAbout3':
    'The load goes up: heel raises 4 × 10 with a backpack, and short foot comes off the chair - the arch now works under your bodyweight. The first changes in the arch usually show from week six.',
  'pages.program.blockAbout4':
    'Heel raises reach 5 × 8, the heaviest in the program. Short foot moves to one leg, and the band joins - only now, once the small muscles inside the foot can hold.',
  'pages.program.blockAbout5':
    'The hip joins in. A weak glute lets the arch drop, so control moves up the chain while the load on the foot stays where Block 4 left it.',
  'pages.program.blockAbout6':
    'This is no longer treatment - it is upkeep. The towel comes off, heel raises get lighter at 3 × 15, and time barefoot at home goes in. This is the routine you keep.',
  'pages.program.finishDay': 'Day {day}',
  'pages.program.finishCaption': 'Program complete',

  // ── Welcome ──────────────────────────────────────────────────────────────
  // The gate, before anything is known about the user.
  'pages.welcome.hint': 'Swipe up to enter',
  'pages.welcome.a11yHint': 'Swipe up to open the screen, swipe down to close it',

  // "Train ~~support~~ your feet" — the struck word is the promise the category
  // makes and this one does not. Three keys rather than one because the strike
  // is a rule drawn over one word's own box, so that word has to be its own
  // `<Text>`; a language orders the line by what it puts in each of the three.
  'pages.welcome.headline': 'Train',
  'pages.welcome.struck': 'support',
  'pages.welcome.kept': 'your feet',

  // The line under it rotates, so the same claim is aimed at a different reason
  // to care each time round. Each one continues "Train your feet…", and a
  // language that cannot continue it that way should rewrite the clause rather
  // than transpose the English.
  'pages.welcome.phrase1': 'that hurt every morning',
  'pages.welcome.phrase2': 'after 3 pairs of insoles',
  'pages.welcome.phrase3': 'so your next long run doesn’t cost you a week',
  'pages.welcome.phrase4': 'so you can run again',
  'pages.welcome.cta': 'Let’s go',

  // ── Expired ──────────────────────────────────────────────────────────────
  // A subscription that ended. Every number here is one the user produced, so
  // the recap may not read as a pitch; the plans below it are the same two the
  // paywall sells, in the paywall's own words (`offer.*`).
  'pages.expired.title': 'Your subscription has ended',
  'pages.expired.lede': {
    one: '{count} session. Here’s what changed.',
    other: '{count} sessions. Here’s what changed.',
  },
  /** Nothing completed, so there is no count to lead with. */
  'pages.expired.ledeNoSessions': 'Here’s where you left off.',
  'pages.expired.calfRaises': 'Calf raises',
  'pages.expired.morningPain': 'Morning pain',
  /** Neither measurement has two readings behind it. Says what is kept rather
   * than filling the card with a figure nobody earned. */
  'pages.expired.nothingMeasured': 'Your logs and retests are all still here.',
  'pages.expired.keeps': 'Your history stays either way.',
  'pages.expired.busy': 'One moment…',
  /** Above the two plans. */
  'pages.expired.plansTitle': 'Pick up where you left off',
  'pages.expired.renew': 'Renew subscription',
  'pages.expired.notNow': 'Not now',
  // ── The weekly plan ──────────────────────────────────────────────────────
  // The Workout page as a week: which week it is, what it is for, and why it
  // looks the way it does. Goal names are what the pill says in capitals.
  'pages.week.headerMeta': '{date} · Week {n}',
  'pages.week.seam': 'This week · {goal}',
  'pages.week.goal.pain_free_mornings': 'Easier mornings',
  'pages.week.goal.arch_hold': 'Stronger arch',
  'pages.week.goal.calf_raises': 'Stronger calves',
  'pages.week.goal.balance': 'Better balance',
  'pages.week.goal.symmetry': 'Even feet',
  /** The goal line under the pill: where the number is, and where it is going. */
  'pages.week.line.pain_free_mornings': 'Morning pain {current} → {target}',
  'pages.week.line.arch_hold': 'Arch hold {current}s → {target}s',
  'pages.week.line.calf_raises': 'Calf raises {current} → {target}',
  'pages.week.line.balance': 'Balance {current}s → {target}s',
  'pages.week.line.symmetry': 'Left–right gap {current}% → under {target}%',
  'pages.week.lineUnmeasured': '{goal} - measured at your next test',
  'pages.week.rationale.first': 'This week settles things down. Strength work starts next week.',
  'pages.week.rationale.painUp': 'Pain went up this week, so the plan steps back a level.',
  'pages.week.rationale.hard': 'Last week felt hard. This week is lighter.',
  'pages.week.rationale.easy': 'Last week felt easy. Time to push a little.',
  'pages.week.rationale.painLow': 'Pain stayed low all week, so we’re adding load.',
  'pages.week.rationale.newFocus': 'New focus: {goal}. {line}.',
  'pages.week.rationale.default': 'This week works on {goal}: {line}.',
  'pages.week.newThisWeek': 'New this week: {exercise}',
  'pages.week.testIn': { one: 'Test in {count} day', other: 'Test in {count} days' },
  'pages.week.testToday': 'Test today',
  'pages.week.adjusts': 'Adjusts to how your foot feels that day.',
  'pages.week.skipped': 'Skipped - no need to catch up.',
  'pages.week.rest': 'Rest day',
  'pages.week.shortVersion': '2-minute version',
  'pages.plan.notUpForIt': 'Not up for it? Do the 2-minute version',
  'pages.plan.reasonHeavyDay': 'Big day yesterday - today is lighter, with no step up.',
  'pages.plan.reasonShortSleep': 'Short night - today is one step easier.',
  'pages.exerciseSheet.why': 'Why it’s in your plan',
  'pages.week.nextWeek': 'Next week',
  'pages.week.nextWeekFocus': 'Focus: {goal}',
  'pages.week.nextGoal': 'Next goal: {goal}',
  'pages.week.dayCardA11y': '{day}, {kind}, {minutes}',
  // ── The plan screen ──────────────────────────────────────────────────────
  'pages.plan.title': 'Your plan',
  'pages.plan.goalEyebrow': 'Your goal',
  'pages.plan.short.pain_free_mornings': 'mornings',
  'pages.plan.short.arch_hold': 'arch',
  'pages.plan.short.calf_raises': 'calves',
  'pages.plan.short.balance': 'balance',
  'pages.plan.short.symmetry': 'both feet',
  'pages.plan.todayEyebrow': 'Today',
  'pages.plan.todayTitle': '{kind} · {goal}',
  'pages.plan.easyDay': 'Easy day · seated',
  'pages.plan.start': 'Start',
  'pages.plan.testTitle': 'Test day',
  /** What a test day is and why it is worth four minutes, in one breath. */
  'pages.plan.testBody': {
    one: '{count} short timed test, about {minutes} min in all. It shows what your training has built, and the plan adjusts to the result.',
    other: '{count} short timed tests, about {minutes} min in all. They show what your training has built, and the plan adjusts to the results.',
  },
  'pages.plan.rest': 'Rest day. Try a 2-minute stretch if you feel like it.',
  /** Under "Rest day" on tomorrow's card: the day the next session falls on
   * and what it is. */
  'pages.plan.nextSessionOn': 'Next session: {day}, {kind}.',
  /** On a finished test day: the results again, read-only. */
  'pages.plan.seeResults': 'See results',
  'pages.plan.upcoming': 'Coming up',
  'pages.plan.upcomingEnd': 'That’s the week. Next week’s plan arrives Sunday.',
  'pages.plan.row': '{day} · {kind}',
  'pages.plan.rowGoal': '{day} · {kind} · {goal}',
  'pages.plan.stripToday': 'today',
  'pages.plan.stripRest': 'rest',
  'pages.plan.reached': '{goal} - done. Next up: {next}.',
  'pages.plan.seeNextGoal': 'See next goal',
  'pages.plan.chipPreviewA11y': '{name}, preview',
  'pages.plan.outcome.sport.running': 'running',
  'pages.plan.outcome.sport.tennis': 'tennis',
  'pages.plan.outcome.sport.gym': 'gym sessions',
  'pages.plan.outcome.sport.football': 'football',
  'pages.plan.outcome.sport.basketball': 'basketball',
  'pages.plan.outcome.sport.cycling': 'cycling',
  'pages.plan.outcome.sport.hiking': 'hiking',
  'pages.plan.outcome.sport.none': 'days',
  'pages.plan.outcome.sportFor.running': 'running',
  'pages.plan.outcome.sportFor.tennis': 'tennis',
  'pages.plan.outcome.sportFor.gym': 'the gym',
  'pages.plan.outcome.sportFor.football': 'football',
  'pages.plan.outcome.sportFor.basketball': 'basketball',
  'pages.plan.outcome.sportFor.cycling': 'cycling',
  'pages.plan.outcome.sportFor.hiking': 'hiking',
  'pages.plan.outcome.sportFor.none': 'every day',
  'pages.plan.outcome.painfree': '[Pain-free] {sport}',
  'pages.plan.outcome.injury_free': '[Sturdy] legs for {sport}',
  'pages.plan.outcome.flat_feet': 'Train the muscles that [support] your arch',
  'pages.plan.outcome.stronger': '[Stronger] legs for {sport}',
  'pages.plan.outcome.stable_ankles': '[Steady] ankles',
  'pages.plan.outcome.jump_higher': 'Jump [higher]',
  'pages.plan.outcome.race_ready': 'Legs [ready] for race day',
  'pages.plan.outcome.all_day': 'On your feet [all day]',
  'pages.plan.outcome.comeback': '[Back] after an injury',
  'pages.plan.outcome.steady': '[Confident] steps',
  'pages.plan.outcome.done': 'Every step done. Now we keep it that way.',
  'pages.plan.nextWeek': 'Next week',
  'pages.plan.nextWeekHow': 'A new week is planned every Sunday evening from how this one went - your check-ins, your tests and how hard sessions felt.',
  'pages.plan.nextWeekSummary': '{sessions} · focus: {goal}',
  'pages.plan.sessionCount': { one: '{count} session', other: '{count} sessions' },
  'pages.plan.restDay': 'Rest',

  // ── Today's moves, and what finishing them earns ────────────────────────
  /** Over the checklist of today's moves. */
  'pages.plan.movesTitle': 'Today’s moves',
  /** Beside it: how many are ticked, of how many. */
  'pages.plan.movesProgress': '{done} / {total}',
  /** The bar under it, read aloud. */
  'pages.plan.movesDoneA11y': '{done} of {total} done',
  /** A move already ticked today. `name` carries its dose. */
  'pages.plan.moveDoneA11y': '{name}, done',
  /** Over the rewards: only what the plan's own dose earns. */
  'pages.plan.rewardTitle': 'Rewards',
  /** Today not yet counted, and no streak running. */
  'pages.plan.rewardStreakStart': 'Finish today to start your streak.',
  /** Today not yet counted: `count` is the streak once it is. */
  'pages.plan.rewardStreak': {
    one: 'Finish today and your streak reaches {count} day.',
    other: 'Finish today and your streak reaches {count} days.',
  },
  /** The next session sticker, more than one session away. `name` is its own name. */
  'pages.plan.rewardSticker': 'Next sticker: {name}.',
  /** One session away. */
  'pages.plan.rewardStickerLast': 'Finish today to collect a sticker: {name}.',
  'pages.plan.rewardStickerCount': '{have} / {need}',
  'pages.plan.rewardStickerCountA11y': '{have} of {need}',

  // ── A finished day: what it earned, and tomorrow ─────────────────────────
  /** The tiles' headers. Three share a card's width: keep them short. */
  'pages.plan.earnedMinutes': 'Minutes',
  'pages.plan.earnedMoves': 'Moves',
  /** On a test day, in place of the moves. */
  'pages.plan.earnedTests': 'Tests',
  'pages.plan.earnedStreak': 'Days in a row',
  /** Each tile read aloud as one. The streak's is `streakSheet.inARow`. */
  'pages.plan.earnedMinutesA11y': { one: '{count} minute today', other: '{count} minutes today' },
  'pages.plan.earnedMovesA11y': { one: '{count} move done today', other: '{count} moves done today' },
  'pages.plan.earnedTestsA11y': { one: '{count} test done today', other: '{count} tests done today' },
  /** Under the tiles, the next session sticker one session away. Today is
   * already counted; further off, `rewardSticker` says it. */
  'pages.plan.earnedStickerLast': 'One more session for a sticker: {name}.',
  /** Over tomorrow's card. */
  'pages.plan.tomorrowEyebrow': 'Tomorrow',
  /** When tomorrow's session opens, counted: "Opens in 1h 50m". */
  'pages.plan.opensIn': 'Opens in {time}',
  /** Read after a finished day's title on the card that leads it; the card
   * draws it as a tick. */
  'pages.plan.doneToday': 'Done for today',

  // ── The goal's weeks: this week and next on a rail, the test days between ─
  /** The chip on this week's card. */
  'pages.plan.path.now': 'Now',
  /** Read after a test taken, which the rail draws as a tick. */
  'pages.plan.path.done': 'Done',
  /** A test day on the rail: today's (taken or to take), tomorrow's, the next
   * one counted in days, and a taken one by its day ("Test day · Oct 12"). */
  'pages.plan.path.testToday': 'Test day · today',
  'pages.plan.path.testTomorrow': 'Test day · tomorrow',
  'pages.plan.path.testIn': { one: 'Test day · in {count} day', other: 'Test day · in {count} days' },
  'pages.plan.path.testOn': 'Test day · {date}',
  /** Over each week's card. Never a week number: the plan has no length.
   * `date` is next week's Monday, formatted by `Intl` ("Oct 19"). */
  'pages.plan.weeks.this': 'This week',
  'pages.plan.weeks.nextFrom': 'Next week · from {date}',
  /** A week's title: what it works on. Short, a few words. `settling` is the
   * plan's first week; `keep` a week with every goal reached. */
  'pages.plan.weeks.title.settling': 'Settle things down',
  'pages.plan.weeks.title.pain_free_mornings': 'Ease the mornings',
  'pages.plan.weeks.title.arch_hold': 'Build the arch',
  'pages.plan.weeks.title.calf_raises': 'Build the calves',
  'pages.plan.weeks.title.balance': 'Train your balance',
  'pages.plan.weeks.title.symmetry': 'Even out both legs',
  'pages.plan.weeks.title.keep': 'Keep what you built',
  /** Under the title, one sentence of what changes in the week, read off the
   * plan itself. The work, never a result, a promise or a pain figure.
   * `exercise` is a move's name. */
  'pages.plan.weeks.change.settling': 'Gentle moves only, while your feet get used to the work.',
  'pages.plan.weeks.change.settlingSeated': 'Seated moves only, while your feet get used to the work.',
  'pages.plan.weeks.change.down': 'A level easier than the week before, to keep it comfortable.',
  'pages.plan.weeks.change.up': 'A step up: {exercise}.',
  'pages.plan.weeks.change.newMove': 'New move: {exercise}.',
  'pages.plan.weeks.change.opens': 'Settling is over: moves can step up once two sessions in a row feel easy.',
  'pages.plan.weeks.change.same': 'Same level as the week before, so the work can build.',
  'pages.plan.weeks.change.keep': 'Lighter work that keeps what you have built.',
  /** A week with a new focus, or this week when nothing else changed: what
   * the focus's work is, in one plain sentence. */
  'pages.plan.weeks.about.pain_free_mornings': 'Daily stretches and gentle load for the first steps of the day.',
  'pages.plan.weeks.about.arch_hold': 'Training the small muscles under your foot that hold the arch up.',
  'pages.plan.weeks.about.calf_raises': 'Building how much work your calf and Achilles can do before they tire.',
  'pages.plan.weeks.about.balance': 'Training how well your foot and ankle sense the ground.',
  'pages.plan.weeks.about.symmetry': 'Extra work for the weaker leg, to close the gap to the other.',
  /** The week's chips: days with something to do, and a session's length. */
  'pages.plan.weeks.days': { one: '{count} day', other: '{count} days' },
  'pages.plan.weeks.minutes': '{minutes} min each',
  /** Beside a move the plan has never scheduled before. */
  'pages.plan.weeks.newTag': 'New',
  /** Under the first five moves: opens the rest. */
  'pages.plan.weeks.more': '+{n} more',
  /** Beside the rail where it fades, past next week: how the weeks after are
   * made, since nothing truthful can be said of them yet. */
  'pages.plan.weeks.after':
    'The weeks after are planned one at a time, each Sunday evening, from your check-ins, your tests and how sessions felt.',
} as const satisfies Record<string, SourceEntry>;
