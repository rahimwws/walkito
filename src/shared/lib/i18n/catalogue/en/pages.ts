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
    'No session logged. Nothing to make up — the program runs on dates, so the next day is the next day.',
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
    'Calming the foot down. Stretches and gentle movement — nothing is loaded yet.',
  'pages.program.blockAbout2':
    'Strength work starts. Towel heel raises are what move the pain; seated short foot is what reshapes the arch. Most people feel the first real relief around day 20.',
  'pages.program.blockAbout3':
    'The load goes up: heel raises 4 × 10 with a backpack, and short foot comes off the chair — the arch now works under your bodyweight. The first changes in the arch usually show from week six.',
  'pages.program.blockAbout4':
    'Heel raises reach 5 × 8, the heaviest in the program. Short foot moves to one leg, and the band joins — only now, once the small muscles inside the foot can hold.',
  'pages.program.blockAbout5':
    'The hip joins in. A weak glute lets the arch drop, so control moves up the chain while the load on the foot stays where Block 4 left it.',
  'pages.program.blockAbout6':
    'This is no longer treatment — it is upkeep. The towel comes off, heel raises get lighter at 3 × 15, and time barefoot at home goes in. This is the routine you keep.',
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
  'pages.expired.notNow': 'Not now',
} as const satisfies Record<string, SourceEntry>;
