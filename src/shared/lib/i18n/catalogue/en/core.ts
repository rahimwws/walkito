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
  'language.systemHint': 'Match device - {language}',
  'language.note': 'The choice is remembered on this device.',
  'language.a11yLabel': 'Language, {language}',
  'language.a11yHint': 'Changes the language of the app',

  // ── When a screen fails ──────────────────────────────────────────────────
  'error.title': 'Something went wrong',
  'error.body': 'Your plan and your progress are safe. Try again.',
  'error.retry': 'Try again',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Settings',
  'settings.terms': 'Terms of Use',
  'settings.termsHint': 'The subscription agreement',
  'settings.privacy': 'Privacy Policy',
  'settings.privacyHint': 'What we store, and where',
  'settings.unpublished': 'Not published yet',
  'settings.email.section': 'Email',
  /** The address the emails go to, often an Apple relay address. */
  'settings.email.address': 'Sent to {email}',
  'settings.email.none': 'No email address yet. Signing in adds one.',
  'settings.email.unavailable': 'Email settings could not load. Try again with a connection.',
  /** Every lifecycle email and the offers. */
  'settings.email.tips': 'Tips & reminders',
  /** The Sunday email. Off until turned on. */
  'settings.email.weekly': 'Weekly summary',
  'settings.email.unsubscribeAll': 'Unsubscribe from all',
  'settings.email.unsubscribed': 'You will not get any emails. Turn a switch back on to start again.',
  'settings.write': 'Write to Rahim',
  'settings.writeHint': 'A person reads every message',
  'settings.writeSubject': 'Walkito',
  /** Written under the user's message, so a reply can find the build and the plan. */
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  // ── Your plan: what onboarding asked, changeable ─────────────────────────
  'settings.planSection': 'Your plan',
  'settings.outcome': 'Your goal',
  'settings.outcome.painfree': 'Pain-free',
  'settings.outcome.flat_feet': 'Fix flat feet',
  'settings.outcome.stronger': 'Stronger legs',
  'settings.outcome.injury_free': 'Sturdy legs',
  'settings.outcome.stable_ankles': 'Steady ankles',
  'settings.outcome.jump_higher': 'Jump higher',
  'settings.outcome.race_ready': 'Race ready',
  'settings.outcome.all_day': 'All day on my feet',
  'settings.outcome.comeback': 'Back after injury',
  'settings.outcome.steady': 'Confident steps',
  'settings.daysPerWeek': 'Days per week',
  'settings.minutesPerDay': 'Minutes per day',
  'settings.whichFoot': 'Which foot',
  'settings.footLeft': 'Left',
  'settings.footRight': 'Right',
  'settings.footBoth': 'Both',
  'settings.whereItHurts': 'Where it hurts',
  'settings.whereItHurtsNone': 'Nothing marked',
  'settings.equipment': 'What I have at home',
  'settings.equipment.step': 'A step',
  'settings.equipment.band': 'Resistance band',
  'settings.equipment.towel': 'Towel',
  'settings.equipment.pillow': 'Pillow',
  'settings.equipment.ball': 'Massage ball',
  'settings.account.saveTitle': 'Keep your progress',
  'settings.account.saveBody': 'Sign in with Apple and your plan, check-ins and tests come back on a new phone or after reinstalling.',
  'settings.account.saveBodyGoogle': 'Sign in with Google and your plan, check-ins and tests come back on a new phone or after reinstalling.',
  'settings.account.signedIn': 'Signed in with Apple. Your progress is saved to your account.',
  'settings.lastSync': 'Last synced {time}',
  'settings.lastSyncNever': 'Not synced yet',
  'settings.reminder': 'Reminder time',
  'settings.disclaimer':
    'Walkito is a training aid, not medical advice, and it does not diagnose or treat any condition. If pain is sharp, getting worse, or comes with swelling, numbness or fever, stop and see a doctor.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // `streak.title` is the clearest example of why fragments had to go: English
  // puts the count first and the noun last, Russian puts "подряд" (in a row)
  // after both, and Spanish needs "de" between them.
  'streak.title': { one: '{count} Day Streak', other: '{count} Days Streak' },
  /** The milestone moment: 3, 7, 10, 30 and 100 days. Ten is the big one. */
  'streak.milestoneBlurb': 'Every one of those days counted.',
  'streak.milestoneBigBlurb': 'Ten days. This is where a habit starts to hold.',
  'streak.rule':
    'A day counts when you check in, train, finish a Library routine, or the plan gives you a rest day.',
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
  /** `{percent}` is what the friend gets off the annual subscription. Only
   * the friend's side: the code's owner used to be promised free weeks, which
   * a subscription cannot be given from the device, so nothing here promises
   * them anything. */
  'gift.blurb': 'Share your code. A friend who joins with it gets {percent}% off the annual subscription.',
  'gift.unavailable': 'Invites are not available in this build.',
  // The share body leaves the app, so it is one sentence rather than parts —
  // there is no layout here to reorder, only grammar.
  'gift.shareMessage': 'Use my code {code} in Walkito for {percent}% off the annual subscription.',
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

  // ── Waits ──────────────────────────────────────────────────────────────────
  // How long until something opens, as `{time}` in a sentence that owns the
  // rest (`shared/lib/wait`). Abbreviated, like Home's chips, so a countdown
  // stays the width of the control it sits on, and not plural entries for
  // that reason: an abbreviation does not agree.
  'time.hoursMinutes': '{hours}h {minutes}m',
  'time.minutes': '{count}m',
  /** The last minute. Notation rather than words, so it drops into `{time}`
   * whatever case the sentence around it asks for. */
  'time.underMinute': '<1m',

  // ── The next session ───────────────────────────────────────────────────────
  // Said by the dock, Home's finished list and the plan's today card, which is
  // why it lives here rather than in one screen's domain.
  'nextSession.in': 'Next session in {time}',
  /** More than a day off: the weekday instead of a count. After a colon, so
   * the name stands in its dictionary form - Russian needs the nominative,
   * which a preposition would take away. */
  'nextSession.on': 'Next session: {day}',

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

  'quick.deleteTitle': '{name}, wait.',
  'quick.deleteBody': 'I’m about to delete the app.\n\nWhat pushed me out:\n\n',
  'quick.deleteSubject': 'Before I delete Walkito',
  'quick.talkSubject': 'Something is off in Walkito',
  'quick.talkBody': 'Hey -\n\nWhat’s going on:\n\n',
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
  'common.cancel': 'Cancel',
} as const satisfies Record<string, SourceEntry>;
