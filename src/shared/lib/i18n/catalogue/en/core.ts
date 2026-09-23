/**
 * Core — the strings shared across screens, plus the surfaces small enough
 * not to deserve a domain file of their own.
 *
 * Every other catalogue is typed *from* this object, so adding a key here is
 * what creates the obligation to translate it, and `tsc` is what collects the
 * debt.
 *
 * **Whole sentences, not fragments.** A template here holds a complete clause
 * with `{placeholders}` inside it, never a piece that some call site
 * concatenates with another piece. That rule is the entire reason the
 * catalogue is shaped this way: "{count} Days" + " Streak" is fine in English
 * and produces word salad in Russian, where the natural phrasing is "{count}
 * дней подряд" — the noun moves, the qualifier moves, and no arrangement of
 * the two English fragments reaches it. The composition that used to live at
 * the call sites has been pulled in here, once per language.
 *
 * **Keys are flat and dotted**, grouped by the screen that owns them. Flat
 * because nesting adds a lookup path that the placeholder types would have to
 * walk, and dotted so the grouping survives anyway.
 *
 * Sections below appear in the same order in `../ru/core.ts` and
 * `../es/core.ts`, so the three files diff cleanly against each other.
 */

import type { SourceEntry } from '../entry';

export const CORE_EN = {
  // ── Language picker ──────────────────────────────────────────────────────
  // The one screen whose job is to be readable by someone who cannot read the
  // language it is currently rendered in. Option labels are *not* here — they
  // are endonyms in `LANGUAGE_META`, deliberately untranslated.
  'language.title': 'Language',
  'language.system': 'System',
  /** Names the language following the device would actually give, so the row
   * is a statement rather than a riddle. */
  'language.systemHint': 'Match device — {language}',
  'language.note': 'The choice is remembered on this device.',
  'language.a11yLabel': 'Language, {language}',
  'language.a11yHint': 'Changes the language of the app',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Settings',
  'settings.terms': 'Terms of Use',
  'settings.termsHint': 'The subscription agreement',
  'settings.privacy': 'Privacy Policy',
  'settings.privacyHint': 'What we store, and where',
  'settings.unpublished': 'Not published yet',

  // ── Streak ───────────────────────────────────────────────────────────────
  // `streak.title` is the clearest example of why fragments had to go: English
  // puts the count first and the noun last, Russian puts "подряд" (in a row)
  // after both, and Spanish needs "de" between them.
  'streak.title': { one: '{count} Day Streak', other: '{count} Days Streak' },
  'streak.rule':
    'A day counts when you check in, train, or the plan gives you a rest day.',
  'streak.total': { one: '{count} day so far.', other: '{count} days so far.' },
  'streak.dismiss': 'Got it',
  'streak.dayCount': { one: '{count} day', other: '{count} days' },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  // The three parts of the header meta line — "Day 17 · 5 min · 3 moves". Each
  // is its own key rather than one assembled string, because the separator dots
  // are drawn as views between them, not written as text.
  'session.day': 'Day {day}',
  'session.minutes': { one: '{count} min', other: '{count} min' },
  'session.moveCount': { one: '{count} move', other: '{count} moves' },
  'session.secondsLeftA11y': { one: '{count} second left', other: '{count} seconds left' },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Invite a friend',
  /** `{count}` is the free weeks per friend; `{percent}` is what the friend
   * gets off. The cap follows as its own sentence, `gift.cap`. */
  'gift.blurb': {
    one: 'They get {percent}% off. You get {count} free week for each friend who joins.',
    other: 'They get {percent}% off. You get {count} free weeks for each friend who joins.',
  },
  'gift.cap': { one: 'Up to {count} friend.', other: 'Up to {count} friends.' },
  'gift.unavailable': 'Invites are not available in this build.',
  // The share body leaves the app, so it is one sentence rather than parts —
  // there is no layout here to reorder, only grammar.
  'gift.shareMessage': 'Use my code {code} in Walkito for {percent}% off the 12-week program.',
  'gift.share': 'Share code',
  'gift.shared': 'Copied',
  'gift.copy': 'Copy instead',
  'gift.copied': 'Copied to clipboard',
  'gift.copyA11y': 'Copy code {code}',
  'gift.dismiss': 'Maybe later',
  'gift.openA11y': 'Get your gift',
  // The capsule in the header. Short enough to sit beside the streak
  // flame without pushing the profile control off the row.
  'gift.capsule': 'Gift',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Start Workout',
  'card.dailyGoal': 'Daily Goal',
  'card.getStarted': 'Get Started',
  'card.last7Days': 'Last 7 days',
  'band.excellent': 'Excellent',
  'band.strong': 'Strong',
  'band.steady': 'Steady',
  'band.building': 'Building',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  // Returned from the store layer when a package the paywall offered has gone
  // missing. The prices in that layer stay untranslated on purpose — they come
  // from the store, and a figure in a catalogue is one the store can contradict.
  'purchase.unavailable': 'That plan isn’t available right now.',

  'quick.deleteTitle': '{name}, WAIT.',
  'quick.deleteBody': 'I’m about to delete the app.\n\nWhat pushed me out:\n\n',
  'quick.deleteSubject': 'Before I delete Walkito',
  'quick.talkSubject': 'Something is off in Walkito',
  'quick.talkBody': 'Hey —\n\nWhat’s going on:\n\n',
  'quick.deleteSubtitle': 'Deleting? Tell us what broke.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Home',
  'tabs.progress': 'Progress',


  // ── Account / sign-in errors ───────────────────────────────────────────────
  // Shown to a user whose sign-in just failed, so each is a finished sentence
  // that says what to do next. `auth.invalidCredentials` deliberately does not
  // say which half was wrong — that would tell anyone trying addresses which
  // ones have accounts.
  'auth.noServer': 'This build has no account server. Use Continue with Apple.',
  'auth.missingFields': 'Enter both an email and a password.',
  'auth.invalidCredentials': 'That email and password don’t match.',
  'auth.notConfirmed':
    'That account hasn’t been confirmed yet. Confirm the email address, then try again.',
  'auth.banned': 'That account is disabled.',
  'auth.providerDisabled': 'Email sign-in is switched off for this app. Use Continue with Apple.',
  'auth.rateLimited': 'Too many attempts. Wait a minute and try again.',
  'auth.badEmail': 'That doesn’t look like an email address.',
  'auth.noAccount': 'No account came back.',
  'auth.generic': 'That didn’t go through.',
  'auth.unreachable': 'The server could not be reached.',

  // ── Maintenance and regression ───────────────────────────────────────────
  // Said once, on the day the twelve weeks end. The five-year figure travels
  // with the sentence that answers it — a relapse statistic on its own is a
  // warning, and this screen is meant to hand over a job, not a fright.
  'maintenance.throughNamed': '{name}, you’re through.',
  'maintenance.through': 'You’re through.',
  'maintenance.calfGain': '{opening} Your calf went ↗ from {before} to {after}.',
  'maintenance.relapse': 'About half of people lose this again within five years.',
  'maintenance.staying': 'Two sessions a week is how you stay in the other half.',
  'maintenance.regression': 'Your numbers slipped. Want to run {block} again?',

  // ── Block names ──────────────────────────────────────────────────────────
  // The six phases of the plan, in order; the six-week plan uses the first
  // three. Each names what the fortnight is *for*, which is why they are copy
  // and not identifiers — they are printed beside the day number on four
  // different screens and inside notification bodies.
  'block.settle': 'Settle',
  'block.strengthen': 'Strengthen',
  'block.load': 'Load',
  'block.build': 'Build',
  'block.control': 'Control',
  'block.sustain': 'Sustain',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Back',
  'common.close': 'Close',
  'common.profile': 'Profile',
  'common.done': 'Done',
} as const satisfies Record<string, SourceEntry>;
