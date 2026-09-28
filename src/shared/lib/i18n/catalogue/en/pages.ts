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
  /** What the countdown becomes once the wait is over. */
  'pages.program.startNow': 'Start now',

  // The seams between blocks. Upper case is a typographic choice made in the
  // catalogue rather than by `toUpperCase()` at the call site, so a language
  // whose script has no case can simply write it in its own.
  'pages.program.blockSeam': 'BLOCK {index} · {name}',
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
  'pages.program.finishDay': 'DAY {day}',
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
  // The end of the twelve weeks. Every number here is one the user produced, so
  // nothing in this section may read as a pitch.
  'pages.expired.title': 'Your 12 weeks are done',
  'pages.expired.lede': {
    one: '{count} session. Here’s what changed.',
    other: '{count} sessions. Here’s what changed.',
  },
  /** Nothing completed, so there is no count to lead with. */
  'pages.expired.ledeNoSessions': 'Here’s where you finished.',
  'pages.expired.calfRaises': 'Calf raises',
  'pages.expired.morningPain': 'Morning pain',
  /** Neither measurement has two readings behind it. Says what is kept rather
   * than filling the card with a figure nobody earned. */
  'pages.expired.nothingMeasured': 'Your logs and retests are all still here.',
  'pages.expired.keeps': 'Your history stays either way.',
  'pages.expired.storeUnreachable':
    'The App Store isn’t reachable right now. Try again in a moment.',
  'pages.expired.busy': 'One moment…',
  'pages.expired.monthly': 'Continue monthly · {price}',
  'pages.expired.program': 'Another 12 weeks · {price}',
  'pages.expired.programInvite': 'Another 12 weeks at your invite price · {price}',
  'pages.expired.notNow': 'Not now',
  // ── The weekly plan ──────────────────────────────────────────────────────
  // The Workout page as a week: which week it is, what it is for, and why it
  // looks the way it does. Goal names are what the pill says in capitals.
  'pages.week.headerMeta': '{date} · Week {n}',
  'pages.week.seam': 'THIS WEEK · {goal}',
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
  'pages.week.rationale.painLow': 'Pain stayed at {n} all week, so we’re adding load.',
  'pages.week.rationale.newFocus': 'New focus: {goal}. {line}.',
  'pages.week.rationale.default': 'This week works on {goal}: {line}.',
  'pages.week.newThisWeek': 'New this week: {exercise}',
  'pages.week.testIn': { one: 'Test in {count} day', other: 'Test in {count} days' },
  'pages.week.testToday': 'Test today',
  'pages.week.adjusts': 'Adjusts to how your foot feels that day.',
  'pages.week.skipped': 'Skipped - no need to catch up.',
  'pages.week.rest': 'Rest day',
  'pages.week.shortVersion': '2-minute version',
  'pages.week.nextWeek': 'Next week',
  'pages.week.nextWeekFocus': 'Focus: {goal}',
  'pages.week.nextGoal': 'Next goal: {goal}',
  'pages.week.dayCardA11y': '{day}, {kind}, {minutes}',
  // ── The plan screen ──────────────────────────────────────────────────────
  'pages.plan.title': 'Your plan',
  'pages.plan.goalEyebrow': 'Your goal',
  'pages.plan.goalNow': 'Now {value}',
  'pages.plan.goalTarget': 'Goal {value}',
  'pages.plan.goalTestToday': 'Test today - see how much it’s grown.',
  'pages.plan.unitSeconds': '{n}s',
  'pages.plan.unitReps': '{n}',
  'pages.plan.unitPain': '{n}/10',
  'pages.plan.unitPercent': '{n}%',
  'pages.plan.unmeasured': '-',
  'pages.plan.explain.pain_free_mornings': 'Your pain at the first step of the day',
  'pages.plan.explain.arch_hold': 'How long you can hold your arch up',
  'pages.plan.explain.calf_raises': 'Heel raises on one leg, weaker side',
  'pages.plan.explain.balance': 'Standing on one leg, eyes closed',
  'pages.plan.explain.symmetry': 'Difference between left and right',
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
  'pages.plan.testBody': { one: '{count} quick test · about {minutes} min', other: '{count} quick tests · about {minutes} min' },
  'pages.plan.rest': 'Rest day. Try a 2-minute stretch if you feel like it.',
  'pages.plan.done': 'Done for today',
  'pages.plan.tomorrow': 'Tomorrow: {kind}, {minutes}.',
  'pages.plan.tomorrowRest': 'Tomorrow is a rest day.',
  'pages.plan.upcoming': 'Coming up',
  'pages.plan.upcomingEnd': 'That’s the week. Next week’s plan arrives Sunday.',
  'pages.plan.row': '{day} · {kind}',
  'pages.plan.rowGoal': '{day} · {kind} · {goal}',
  'pages.plan.stripToday': 'today',
  'pages.plan.stripRest': 'rest',
  'pages.plan.reached': '{goal} - done. Next up: {next}.',
  'pages.plan.seeNextGoal': 'See next goal',
  'pages.plan.chipPreviewA11y': '{name}, preview',
  'pages.plan.headline.pain_free_mornings.before': 'Let’s make mornings',
  'pages.plan.headline.pain_free_mornings.beforeNamed': '{name}, let’s make mornings',
  'pages.plan.headline.pain_free_mornings.lead': 'easier',
  'pages.plan.headline.pain_free_mornings.after': '.',
  'pages.plan.detail.pain_free_mornings': 'Your first steps score {now} today. The aim is {target} for two weeks running - daily mobility and calf work get you there.',
  'pages.plan.headline.arch_hold.before': 'Let’s make your arch',
  'pages.plan.headline.arch_hold.beforeNamed': '{name}, let’s make your arch',
  'pages.plan.headline.arch_hold.lead': 'stronger',
  'pages.plan.headline.arch_hold.after': '.',
  'pages.plan.detail.arch_hold': 'You hold it up for {now} now. The aim is {target} - short-foot work on every strength day builds it.',
  'pages.plan.headline.calf_raises.before': 'Let’s make your calves',
  'pages.plan.headline.calf_raises.beforeNamed': '{name}, let’s make your calves',
  'pages.plan.headline.calf_raises.lead': 'stronger',
  'pages.plan.headline.calf_raises.after': '.',
  'pages.plan.detail.calf_raises': '{now} heel raises on your weaker leg now. The aim is {target} - the calf work on strength days builds it.',
  'pages.plan.headline.balance.before': 'Let’s make your balance',
  'pages.plan.headline.balance.beforeNamed': '{name}, let’s make your balance',
  'pages.plan.headline.balance.lead': 'steadier',
  'pages.plan.headline.balance.after': '.',
  'pages.plan.detail.balance': '{now} on one leg, eyes closed, now. The aim is {target} - balance days train exactly that.',
  'pages.plan.headline.symmetry.before': 'Let’s make your feet',
  'pages.plan.headline.symmetry.beforeNamed': '{name}, let’s make your feet',
  'pages.plan.headline.symmetry.lead': 'even',
  'pages.plan.headline.symmetry.after': '.',
  'pages.plan.detail.symmetry': 'Left and right differ by {now} now. The aim is under {target} - the weaker side gets the extra work.',
  'pages.plan.detailFirst': 'Your first test sets the starting number. The aim is {target}.',
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
  'pages.plan.outcome.flat_feet': 'Flat feet, [under control]',
  'pages.plan.outcome.stronger': '[Stronger] legs for {sport}',
  'pages.plan.outcome.stable_ankles': '[Steady] ankles',
  'pages.plan.outcome.jump_higher': 'Jump [higher]',
  'pages.plan.outcome.race_ready': 'Legs [ready] for race day',
  'pages.plan.outcome.all_day': 'On your feet [all day]',
  'pages.plan.outcome.comeback': '[Back] after an injury',
  'pages.plan.outcome.steady': '[Confident] steps',
  'pages.plan.outcome.step': 'Step {n} of {total} · {goal}',
  'pages.plan.outcome.done': 'Every step done. Now we keep it that way.',
  'pages.plan.outcome.doneDetail': 'The plan keeps going: short sessions that hold what you built.',
  'pages.plan.nextWeek': 'Next week',
  'pages.plan.nextWeekHow': 'A new week is planned every Sunday evening from how this one went - your check-ins, your tests and how hard sessions felt.',
  'pages.plan.nextWeekSummary': '{sessions} · focus: {goal}',
  'pages.plan.sessionCount': { one: '{count} session', other: '{count} sessions' },
  'pages.plan.restDay': 'Rest',
} as const satisfies Record<string, SourceEntry>;
