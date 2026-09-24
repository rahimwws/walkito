/**
 * Home — the morning line, and the pieces it is assembled from.
 *
 * Two exports, and they are different kinds of thing:
 *
 * - **`HOME_EN`** is ordinary catalogue text: the finished noun phrases the
 *   sentences drop into their `{placeholders}` ("3 moves", "7 hours", "5 days
 *   in a row"). Every number the brief says is rendered by one of these, which
 *   is what keeps agreement inside the language that owns it.
 * - **`BRIEF_EN`** is the sentences themselves, as ordered `BriefSegment[]`.
 *   See `shared/ui/daily-brief/template.ts` for why a brief is stored as an
 *   array per language rather than as one string with holes in it: the
 *   renderer lays tokens out as sibling `<Text>` nodes, so array order *is*
 *   word order, and Russian's order is not English's.
 *
 * Only `HOME_EN` is part of the catalogue object — `BRIEF_EN` is read directly
 * by `pages/home/model/brief.ts`, because a `BriefSegment[]` is not a
 * `SourceEntry` and has no business being typed as one.
 *
 * **Phrase keys are semantic, not generic.** `daysInARow` and `dayNumber` both
 * render a day count in English and could have been one `days` key; in Russian
 * they are "5 дней подряд" and "день 5", which is a different word in a
 * different case. A generic key would force one of the two to be wrong.
 *
 * **Every template is authored lowercase-first.** `buildBrief`'s `capitalise`
 * option restores the opening capital when there is no name to lead the line,
 * and it runs *after* substitution, so a line opening on `{dayOfPlan}` comes
 * out "Day 3 of 84." without the catalogue having to know.
 *
 * **Clinical honesty.** Every health-derived line compares the person to
 * themselves and never to a norm — "vs your usual", never "high", never
 * "limping", never "compensating". There is no population baseline for walking
 * asymmetry and Apple labels its mobility metrics *estimated*; inferring a
 * condition from an estimate is diagnostic-adjacent. Translations inherit that
 * constraint and must not smuggle a verdict back in.
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

import type { SourceEntry } from '../entry';

export const HOME_EN = {
  // ── The kind of work a day is ────────────────────────────────────────────
  // "Today is 7 minutes" says nothing: seven minutes of what? The difference
  // between a strength day and a recovery day is what decides whether the
  // seven minutes are hard. Lowercase, because they land mid-sentence.
  'home.workStrength': 'foot and calf strength',
  'home.workMobility': 'stretching',
  'home.workBalance': 'balance work',
  'home.workRecovery': 'easy recovery',
  /** Stands in when the plan has no day to read — never the usual path. */
  'home.fallbackMove': 'heel raises',

  // ── Counted phrases ──────────────────────────────────────────────────────
  // Plural entries rather than interpolated numbers, which is what makes
  // "1 days in a row" and "1 flights" structurally impossible rather than
  // merely absent.
  'home.minutes': { one: '{count} minute', other: '{count} minutes' },
  'home.moves': { one: '{count} move', other: '{count} moves' },
  'home.tests': { one: '{count} test', other: '{count} tests' },
  'home.weeks': { one: '{count} week', other: '{count} weeks' },
  'home.points': { one: '{count} point', other: '{count} points' },
  'home.flights': { one: '{count} flight', other: '{count} flights' },
  /** Hours already spent upright today. */
  'home.hoursOnFeet': { one: '{count} hour', other: '{count} hours' },
  /**
   * The same unit in a different slot — the hour count past which this
   * person's own next mornings got worse.
   *
   * Its own key because Russian reaches it through a preposition ("за 7
   * часов") where `hoursOnFeet` is a bare subject, and a language that needs a
   * different case there must be able to write one.
   */
  'home.thresholdHours': { one: '{count} hour', other: '{count} hours' },
  /** A streak, said the way a streak is said. English counts then names the
   * span; Russian puts "подряд" after both; Spanish agrees the adjective. */
  'home.daysInARow': { one: '{count} day in a row', other: '{count} days in a row' },
  /** A position in a run, not a length of one — "day 5", not "5 days". */
  'home.dayNumber': 'day {count}',
  'home.dayOfPlan': 'day {day} of {total}',
  /**
   * A step count, already grouped for the locale.
   *
   * `{steps}` carries the *formatted* figure and `count` only selects the
   * form, because "12,431" is not a number `Number()` can read back and
   * Russian needs 12,431 to choose `one`.
   */
  'home.steps': { one: '{steps} step', other: '{steps} steps' },

  // ── Units ────────────────────────────────────────────────────────────────
  // Separate from the phrases above because they are typography rather than
  // grammar: where the unit sits, and whether a space precedes it.
  'home.km': '{value} km',
  'home.percent': '{value}%',
  'home.duration': '{hours}h {minutes}m',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Today’s Tasks',
  'home.allDoneTitle': 'Done for today',
  'home.allDoneBlurb':
    'Nothing else is needed. The next session unlocks after twelve hours’ rest.',
  /** The two empties, which are different facts: a retest day has no exercises
   * because it is a measurement, a rest day has none because it is rest. */
  'home.retestDay': 'Retest day. {tests}, about {minutes}.',
  'home.startTests': 'Start the tests',
  'home.nothingScheduled': 'Nothing scheduled today. Rest counts.',
  'home.markDone': 'Mark done',
  'home.markNotDone': 'Mark not done',
  /** A row's second line: what kind of thing it is, and how much of it. The
   * separator is part of the copy — a language may want a different one. */
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  // Abbreviated, so the chip stays the width of a chip. Not plural entries for
  // that reason: an abbreviation does not agree.
  'home.chipSeconds': '{count}s',
  'home.chipMinutes': '{count} min',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'It hurts today',
  'home.noPain': 'No pain today',
  'home.logCheckIn': 'Log today’s check-in',
  'home.checkInAgain': 'Check in again',
  'home.checkInTitle': 'Today’s check-in',
  'home.checkInSub': 'How does the foot feel?',
  'home.save': 'Save',
  'home.saved': 'Saved',
  /**
   * What the app says back once the answer is in.
   *
   * Three registers and the ladder only goes one way: a quiet acknowledgement
   * for a day with nothing in it, a plain receipt in the middle, and above the
   * relief line the one thing worth saying — what has already been done about
   * it. Nothing here congratulates a number. Being met with warmth for
   * reporting a seven teaches people to stop reporting.
   */
  'home.ackGood': 'Good.',
  'home.ackLogged': 'Logged.',
  'home.ackLoggedShorter': 'Logged. Today’s session is shorter because of it.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Where it hurts',
  'home.zonesEmpty': 'Tap where it hurts — up to {count}',
  'home.zonesFull': 'Up to {count} at a time — tap one to swap it',
  'home.zonesPicked': '{zones} — {move} next',
  /** The separator between marked places. Copy, not punctuation glue: it is
   * the one character standing between two anatomical names. */
  'home.zoneJoin': ' · ',

  /**
   * The zones, as the person recognises them rather than as a chart labels
   * them. "Top of foot", not "dorsum" — the question is where it hurts, and
   * the answer has to be findable on their own leg in a second.
   */
  'home.zone.calf': 'Calf',
  'home.zone.soleus': 'Soleus',
  'home.zone.tibia': 'Shin',
  'home.zone.tibAnt': 'Front shin',
  'home.zone.ankle': 'Ankle',
  'home.zone.achilles': 'Achilles',
  'home.zone.heel': 'Heel',
  'home.zone.dorsum': 'Top of foot',
  'home.zone.arch': 'Arch',
  'home.zone.ball': 'Ball of foot',
  'home.zone.toes': 'Toes',
  'home.zone.innerAnkle': 'Inner ankle',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Pain today',
  'home.morePain': 'More pain',
  'home.lessPain': 'Less pain',
  'home.painValueA11y': '{score} out of {max}, {band}',
  /**
   * Above and below *their own* range, never a norm.
   *
   * The comparison is to this person's own last thirty entries. A 4 is an
   * ordinary Tuesday for one person and the worst month of the year for
   * another, so there is no version of this sentence that can name a level.
   */
  'home.rangeAbove': 'Above your usual range',
  'home.rangeBelow': 'Below your usual range',
  'home.rangeWithin': 'Within your usual range',
  // The chip says the same thing in the space a chip has. Held in caps here
  // rather than upper-cased in the component, so a language that should not be
  // shouted at can simply write it in its own case.
  'home.rangeAboveChip': 'ABOVE USUAL RANGE',
  'home.rangeBelowChip': 'BELOW USUAL RANGE',
  'home.rangeWithinChip': 'WITHIN USUAL RANGE',
  'home.usualRangeLegend': 'USUAL RANGE {low}–{high}',
  'home.usualRangeA11y': 'Usual range, {low} to {high}',

  /**
   * What each score means, in the user's own terms.
   *
   * Written as what the pain *stops you doing*, never as an adjective.
   * "Moderate" is a word from a clinical form and everyone reads it
   * differently; "you are working around it" is a test a person can apply to
   * their own morning, which is what makes two people's 5 mean roughly the
   * same thing.
   *
   * This is the user rating their own body, so none of these may become a
   * verdict in translation. They describe, they do not grade.
   */
  'home.bandNothing': 'Nothing',
  'home.bandNothingBlurb': 'No pain to report today.',
  'home.bandBarely': 'Barely there',
  'home.bandBarelyBlurb': 'You would forget it if nobody asked.',
  'home.bandNoticeable': 'Noticeable',
  'home.bandNoticeableBlurb': 'You feel it, but it changes nothing you do.',
  'home.bandSore': 'Sore',
  'home.bandSoreBlurb': 'You are working around it without thinking.',
  'home.bandHurts': 'Hurts',
  'home.bandHurtsBlurb': 'It is deciding things for you now.',
  'home.bandSevere': 'Severe',
  'home.bandSevereBlurb': 'Standing on it is the problem, not running.',
} as const satisfies Record<string, SourceEntry>;

/**
 * The sentences, one arrangement per state.
 *
 * Rotation is `pickVariant(variants, cursor)`, taken against *this* array's
 * length — so a language is free to ship two phrasings where English ships
 * three rather than inventing a third.
 */
export const BRIEF_EN = {
  // ── Pain, the user's own report ──────────────────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'today is' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sitting down. That’s it.' },
    ],
    [
      { k: 'frame', text: 'rough morning. Today is' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Nothing more.' },
    ],
    [
      { k: 'frame', text: 'we’re unloading today —' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'off your feet.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'your mornings are' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'sharper than last week. Today we ease off.' },
    ],
    [
      { k: 'frame', text: 'this week is' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'worse than the one before. Lighter day.' },
    ],
    [
      { k: 'frame', text: 'pain is' },
      { k: 'metric', icon: 'warn', text: 'up on your own average', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'We back off today.' },
    ],
  ],

  // ── The programme's own structure ────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'day one is' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'not training — so every change from here is measured against you.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'it’s been' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'Time to see what moved.' },
    ],
    [
      { k: 'frame', text: 'checkpoint day —' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'let’s measure.' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}' },
      { k: 'frame', text: 'and we’ll know where you are.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'a new block starts today —' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'New shape, new load.' },
    ],
    // The one line in the file that cites a finding. "About half" and "studies
    // of this say" are both doing work — translations keep the hedge.
    [
      { k: 'frame', text: 'new block today. Studies of this say about' },
      { k: 'metric', icon: 'level', text: 'half' },
      { k: 'frame', text: 'the year’s gain lands in the first three months.' },
    ],
    [
      { k: 'frame', text: 'you’re into' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'The work changes shape from here.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'today is' },
      { k: 'metric', icon: 'tasks', text: '{moves}' },
      { k: 'frame', text: 'of {work} —' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'early days —' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ':' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'of {work}. Short and often beats long and rare.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      { k: 'frame', text: 'today is {work}. The first week is about showing up, not effort.' },
    ],
  ],

  // ── Load, from what actually happened ────────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'yesterday was your' },
      { k: 'metric', icon: 'feet', text: 'longest run in a month', tail: ' —' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Today is' },
      { k: 'metric', icon: 'rest', text: 'easy', tail: '.' },
    ],
    [
      { k: 'frame', text: 'that was' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'further than anything in four weeks. Today we recover.' },
    ],
    [
      { k: 'frame', text: 'biggest single run in a month yesterday. Today is' },
      { k: 'metric', icon: 'rest', text: 'recovery', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      { k: 'frame', text: 'yesterday — more than your usual week. Worth an easy day.' },
    ],
    [
      { k: 'frame', text: 'more' },
      { k: 'metric', icon: 'level', text: 'stairs' },
      { k: 'frame', text: 'yesterday than you normally climb. Stairs pull hard on the arch.' },
    ],
    [
      { k: 'frame', text: 'yesterday was heavy on' },
      { k: 'metric', icon: 'level', text: 'stairs', tail: '.' },
      { k: 'frame', text: 'Today leans easier.' },
    ],
  ],

  'on-feet': [
    [
      { k: 'frame', text: 'you’re at' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'of standing. The last two times you passed' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'the next morning was' },
      { k: 'metric', icon: 'warn', text: 'rough.', tone: 'warn' },
    ],
    [
      { k: 'frame', text: 'that’s' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'on your feet today. Past' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'has cost you the next morning before.' },
    ],
    [
      { k: 'frame', text: 'long day already —' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Worth sitting down for ten minutes.' },
    ],
  ],

  // A question, never a milestone — see `STEP_CHECK_MARK`.
  'steps-today': [
    [
      { k: 'frame', text: 'already' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'today — a long day on your feet. How’s the heel?' },
    ],
    [
      { k: 'frame', text: 'that’s' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'today. If the heel is talking, sitting down helps more than pushing on.' },
    ],
  ],

  // ── Recovery, watch only ─────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'you’ve averaged' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'this week. Tendons rebuild at night — today is' },
      { k: 'metric', icon: 'rest', text: 'lighter', tail: '.' },
    ],
    [
      { k: 'frame', text: 'short nights all week —' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'on average. We take a little off today.' },
    ],
    [
      { k: 'frame', text: 'sleep has been' },
      { k: 'metric', icon: 'sleep', text: 'under seven hours', tail: '.' },
      { k: 'frame', text: 'Today is easier on purpose.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'your resting pulse is' },
      { k: 'metric', icon: 'level', text: 'up a little', tail: '.' },
      { k: 'frame', text: 'Today leans recovery.' },
    ],
    [
      { k: 'frame', text: 'pulse at rest is' },
      { k: 'metric', icon: 'level', text: 'above your normal', tail: '.' },
      { k: 'frame', text: 'We go gently.' },
    ],
    [
      { k: 'frame', text: 'your body is still catching up —' },
      { k: 'metric', icon: 'level', text: 'resting pulse up', tail: '.' },
      { k: 'frame', text: 'Lighter today.' },
    ],
  ],

  // ── Gait, demoted ────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'you’ve been walking' },
      { k: 'metric', icon: 'gait', text: 'slower than usual' },
      { k: 'frame', text: 'all week. That often tracks with a sore foot.' },
    ],
    [
      { k: 'frame', text: 'your walking pace is' },
      { k: 'metric', icon: 'gait', text: 'down on your own average', tail: '.' },
      { k: 'frame', text: 'Worth noticing, not worrying about.' },
    ],
    [
      { k: 'frame', text: 'slower steps than your normal this week.' },
      { k: 'metric', icon: 'gait', text: 'Nothing alarming' },
      { k: 'frame', text: '— but we’ll keep today easy.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'your steps got' },
      { k: 'metric', icon: 'gait', text: 'uneven', tone: 'warn' },
      { k: 'frame', text: '—' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'vs your usual' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'less even than your normal this week —' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'against your usual' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'something changed in how you walk.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'vs your' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'This often happens when something hurts.' },
    ],
  ],

  // ── Done, and coming back ────────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'done for today.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Come back tomorrow.' },
    ],
    [
      { k: 'frame', text: 'that’s today handled —' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'and counting.' },
    ],
    [
      { k: 'frame', text: 'session done — that’s' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'of the run you’re on.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'welcome back. You have' },
      { k: 'metric', icon: 'session', text: 'one short session' },
      { k: 'frame', text: 'to ease in.' },
    ],
    [
      { k: 'frame', text: 'good to see you. We start' },
      { k: 'metric', icon: 'session', text: 'small' },
      { k: 'frame', text: 'today.' },
    ],
    [
      { k: 'frame', text: 'back again — we pick up where you left off, just' },
      { k: 'metric', icon: 'session', text: 'lighter', tail: '.' },
    ],
  ],

  // ── Good news, gated behind a quiet morning ──────────────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'your mornings are' },
      { k: 'metric', icon: 'up', text: 'easing', tone: 'good' },
      { k: 'frame', text: '— down' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'this month.' },
    ],
    [
      { k: 'frame', text: 'down' },
      { k: 'metric', icon: 'up', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'on the month. That is a real change, not noise.' },
    ],
    [
      { k: 'frame', text: 'the last two weeks have been' },
      { k: 'metric', icon: 'up', text: 'quieter', tone: 'good' },
      { k: 'frame', text: 'than the two before.' },
    ],
  ],

  'walk-back': [
    [
      { k: 'frame', text: 'your walking pace is' },
      { k: 'metric', icon: 'done', text: 'back to your normal', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Good sign.' },
    ],
    [
      { k: 'frame', text: 'pace has' },
      { k: 'metric', icon: 'done', text: 'settled back', tone: 'good' },
      { k: 'frame', text: 'to where it usually sits.' },
    ],
    [
      { k: 'frame', text: 'you’re walking at' },
      { k: 'metric', icon: 'done', text: 'your own normal speed', tone: 'good' },
      { k: 'frame', text: 'again.' },
    ],
  ],

  'gait-recovered': [
    [
      { k: 'frame', text: 'your walk is' },
      { k: 'metric', icon: 'done', text: 'even again', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Back to' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'steps are' },
      { k: 'metric', icon: 'done', text: 'back in balance', tone: 'good' },
      { k: 'frame', text: '— two days running.' },
    ],
    [
      { k: 'frame', text: 'that evened out.' },
      { k: 'metric', icon: 'done', text: 'Back to your usual', tail: '.', tone: 'good' },
    ],
  ],

  // ── Honest emptiness ─────────────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'I’m still learning how you walk. Give me' },
      { k: 'metric', icon: 'window', text: 'a few more days' },
      { k: 'frame', text: 'with your phone in your pocket.' },
    ],
    [
      { k: 'frame', text: 'still building a picture of your normal —' },
      { k: 'metric', icon: 'window', text: 'a few more days' },
      { k: 'frame', text: 'should do it.' },
    ],
    [
      { k: 'frame', text: 'not enough of your own history yet.' },
      { k: 'metric', icon: 'window', text: 'A few more days' },
      { k: 'frame', text: 'and I can compare.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'I can’t read your walk — keep your phone in a' },
      { k: 'metric', icon: 'pocket', text: 'pocket', tail: ',' },
      { k: 'frame', text: 'not a bag, and I’ll pick it up.' },
    ],
    [
      { k: 'frame', text: 'no walking data coming through. A phone in your' },
      { k: 'metric', icon: 'pocket', text: 'pocket' },
      { k: 'frame', text: 'on flat ground is what it needs.' },
    ],
    [
      { k: 'frame', text: 'nothing to read yet — the sensors want the phone in a' },
      { k: 'metric', icon: 'pocket', text: 'pocket' },
      { k: 'frame', text: 'while you walk.' },
    ],
  ],

  // ── Most days ────────────────────────────────────────────────────────────
  // Where a user with no signals at all lands. Seven states rather than one,
  // because a line that never changes stops being read by the third day.
  'quiet-session': [
    [
      { k: 'frame', text: 'today is' },
      { k: 'metric', icon: 'session', text: '{move}' },
      { k: 'frame', text: '— the one that carries this plan.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'You’re past the hard part of starting.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'a big day on your feet yesterday —' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Context, not a verdict.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'a' },
      { k: 'metric', icon: 'feet', text: 'lighter day' },
      { k: 'frame', text: 'on your feet yesterday. Good day to load a little.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'a thought on shoes: a' },
      { k: 'metric', icon: 'level', text: 'firmer heel' },
      { k: 'frame', text: 'and a bit more drop takes load off the arch.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'if you run today, hold your cadence about' },
      { k: 'metric', icon: 'up', text: '{cadence} above your normal', tail: '.' },
      { k: 'frame', text: 'Shorter steps, less heel load.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'most of the change in this shows up' },
      { k: 'metric', icon: 'window', text: 'early', tail: '.' },
      { k: 'frame', text: 'You’re in that window.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
