/**
 * Cancelling: Settings → Subscription, and the flow behind "Manage
 * subscription" (`pages/settings`): "Why are you leaving?", one screen for
 * each answer, and "All set" after something was taken.
 *
 * **Honest, and never in the way.** "Cancel anyway" is on every screen and
 * means what it says: it opens the store's own page. Nothing here hurries,
 * guilts or promises a result. An offer is said once, plainly, with its terms
 * under it.
 *
 * **No price is written here.** The budget answer's offer, the 3-month pass,
 * has its own lines (`pass.ts`), where every figure is the store's `{price}`.
 * `{date}` is a whole date, written out in the language ("14 October 2027").
 * `{count}` is minutes.
 *
 * **"Walkito Plus" is the product's name** and stays as it is in every
 * language. "App Store" and "Google Play" too.
 */

import type { SourceEntry } from '../entry';

export const CANCEL_EN = {
  // ── Settings → Subscription ──────────────────────────────────────────────
  'cancel.row.section': 'Subscription',
  'cancel.row.manage': 'Manage subscription',
  /** Under the row, when the store gave no date. */
  'cancel.row.manageHint': 'Walkito Plus',
  /** Under the row: the plan, and its next renewal. */
  'cancel.row.renewsAnnual': 'Yearly plan, renews on {date}',
  'cancel.row.renewsMonthly': 'Monthly plan, renews on {date}',
  'cancel.row.renewsWeekly': 'Weekly plan, renews on {date}',
  'cancel.row.trial': 'Free trial until {date}, then your plan renews',
  /** Renewal was turned off in the store: access lasts to the date, then ends. */
  'cancel.row.ends': 'Renewal is off. Walkito Plus lasts until {date}.',
  'cancel.row.lifetime': 'Lifetime',
  'cancel.row.lifetimeHint': 'Walkito Plus is yours for good. Nothing renews.',

  // ── The question ─────────────────────────────────────────────────────────
  'cancel.title': 'Why are you leaving?',
  'cancel.sub': 'Pick the one closest to it. It helps us make Walkito better.',
  'cancel.reason.budget': 'It doesn’t fit my budget',
  'cancel.reason.better': 'My feet are better',
  'cancel.reason.pause': 'I’m taking a break',
  'cancel.reason.notHelping': 'It isn’t helping, or it hurts',
  'cancel.reason.noTime': 'I don’t have time',
  /** The quiet button under every screen of the flow: the store's own page. */
  'cancel.anyway': 'Cancel anyway',
  /** Read after "Cancel anyway" by a screen reader. */
  'cancel.anywayHintIos': 'Opens your subscriptions in the App Store',
  'cancel.anywayHintAndroid': 'Opens your subscriptions in Google Play',

  // ── "It doesn't fit my budget" ───────────────────────────────────────────
  'cancel.budget.title': 'Let’s make it easier on your budget',
  /** Nothing to offer. */
  'cancel.budget.noneTitle': 'We understand',
  'cancel.budget.none': 'Everything you’ve logged stays in Walkito, and your plan will be here if you come back.',

  // ── "My feet are better" ─────────────────────────────────────────────────
  'cancel.better.title': 'That’s wonderful to hear',
  /** Over their own numbers. */
  'cancel.better.body': 'Here’s how far you’ve come.',
  /** When the log shows no change worth quoting. */
  'cancel.better.plain': 'We’re really glad your feet feel better. Thank you for walking part of the way with us.',
  'cancel.better.pain': 'Pain in your first steps, out of 10',
  'cancel.better.calf': 'Calf raises',
  'cancel.better.arch': 'Arch hold, seconds',
  'cancel.better.balance': 'Balance, seconds',
  'cancel.better.firstWeek': 'First week',
  'cancel.better.lastWeek': 'Last 7 days',
  'cancel.better.firstTest': 'First test',
  'cancel.better.latestTest': 'Latest test',
  /** One row, read aloud. `{label}` is one of the four names above. */
  'cancel.better.changeA11y': '{label}: {from} then, {to} now',
  'cancel.better.reviewAsk': 'If Walkito helped, a few words in a review help someone else find it.',
  'cancel.better.review': 'Leave a review',

  // ── "I'm taking a break" ─────────────────────────────────────────────────
  'cancel.pause.title': 'Sometimes a break is what you need',
  /** The App Store: a month free, as a promotional offer. */
  'cancel.pause.freeMonthTitle': 'Take a free month',
  'cancel.pause.freeMonthBody':
    'Keep your plan, and your next month costs nothing. After it, Walkito Plus renews as it does now.',
  'cancel.pause.freeMonthCta': 'Take a free month',
  'cancel.pause.freeMonthTerms':
    'The free month starts at your next renewal. You can still cancel any time in your subscription settings.',
  /** Google Play's own pause, set in the Play Store. */
  'cancel.pause.playTitle': 'Pause for up to 3 months',
  'cancel.pause.playBody':
    'Google Play can pause your subscription instead of ending it. Nothing is charged while it’s paused, and your plan is here when it starts again.',
  'cancel.pause.playCta': 'Pause in Google Play',
  'cancel.pause.none': 'Your plan will be here when you’re back, with everything you’ve logged.',

  // ── "It isn't helping, or it hurts" ──────────────────────────────────────
  'cancel.notHelping.title': 'Sorry it hasn’t felt right',
  'cancel.notHelping.body': 'Here’s what we can do about it now.',
  'cancel.notHelping.lighter': 'Make my plan lighter',
  'cancel.notHelping.lighterCaption': 'Shorter sessions, or fewer of them, from today',
  'cancel.notHelping.lightest': 'Your plan is already as light as it goes.',
  'cancel.notHelping.doctor': 'When to see a doctor',
  'cancel.notHelping.doctorCaption': 'A short check of the signs worth having looked at',
  'cancel.notHelping.write': 'Write to us',
  'cancel.notHelping.writeCaption': 'A person reads every message',

  // ── "I don't have time" ──────────────────────────────────────────────────
  'cancel.noTime.title': 'Let’s make it fit your day',
  'cancel.noTime.body': {
    one: 'Sessions can be as short as {count} minute, and your reminder can move to a time that suits you.',
    other: 'Sessions can be as short as {count} minutes, and your reminder can move to a time that suits you.',
  },
  'cancel.noTime.short': { one: 'Switch to {count}-minute sessions', other: 'Switch to {count}-minute sessions' },
  'cancel.noTime.shortCaption': 'Every session, from today. You can change it back in Settings.',
  'cancel.noTime.already': 'Your sessions are already as short as they go.',
  'cancel.noTime.reminder': 'Change my reminder time',
  'cancel.noTime.reminderCaption': 'Your daily nudge, when it suits you',

  // ── All set ──────────────────────────────────────────────────────────────
  'cancel.done.title': 'All set',
  'cancel.done.freeMonth': 'Your next month is free. Thank you for staying.',
  'cancel.done.lighter': 'Your plan is lighter from today. You can change it any time in Settings.',
  'cancel.done.short': {
    one: 'Your sessions are {count} minute from today. You can change it any time in Settings.',
    other: 'Your sessions are {count} minutes from today. You can change it any time in Settings.',
  },
  /** Ask to Buy, or a bank's own confirmation step. */
  'cancel.done.pending': 'The store is still confirming it. It shows up here once it goes through.',
  'cancel.done.back': 'Back to Walkito',
} as const satisfies Record<string, SourceEntry>;
