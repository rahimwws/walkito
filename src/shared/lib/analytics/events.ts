/**
 * Every event the app sends, and what each one carries.
 *
 * A closed map rather than free strings, for the same reason the i18n catalogue
 * is typed: a misspelt event name does not fail, it just starts a second, empty
 * series in PostHog, and a funnel built on the right spelling quietly loses
 * every user who went through the wrong one. Here a typo is a `tsc` error.
 *
 * **No health data, ever.** Pain scores, pain zones, retest measurements,
 * HealthKit readings, age, weight, shoe size — none of it leaves the device
 * through this file. Apple rejects apps that pass health data to analytics, and
 * the funnel does not need it: that somebody checked in is the signal, not what
 * they reported. An event that wants a number from the pain log is the wrong
 * event.
 *
 * Purchases are reported here from the client for the funnel, but the revenue
 * of record is RevenueCat's: its PostHog integration sends renewals, refunds and
 * cancellations server-side, including the ones that happen with the app
 * closed. Never sum `purchase_completed` into a revenue figure.
 */

/** Where somebody says they heard about the app. Asked once, in onboarding. */
export type AcquisitionSource =
  | 'tiktok'
  | 'instagram'
  | 'youtube'
  | 'friend'
  | 'app_store'
  | 'play_store'
  | 'google'
  | 'other';

export type PlanTier = 'program' | 'monthly';

export type AnalyticsEvents = {
  // ── Onboarding ───────────────────────────────────────────────────────────
  /** The first screen of the flow appeared. The top of every funnel. */
  onboarding_started: Record<string, never>;
  /** A step appeared. `step` is its stable key from `STEPS`, never its title. */
  onboarding_step_viewed: { step: string; index: number; act: number };
  /** Only for the few answers that segment a funnel without describing a body. */
  onboarding_answered: { step: 'source' | 'goal' | 'sport' | 'runner'; answer: string };
  acquisition_source_selected: { source: AcquisitionSource };
  sign_in_completed: { method: 'apple' | 'google' | 'email'; status: 'signed-in' | 'unavailable' };
  /** `stage` says whether the provider's own sheet or our server refused — a
   * server failure means that provider on Supabase needs looking at. */
  sign_in_failed: { method: 'apple' | 'google' | 'email'; stage?: 'provider' | 'server' };
  /** Left the flow — by finishing it, or by the header's Skip. */
  onboarding_completed: { skipped: boolean; plan_weeks?: number };

  // ── Paywall ──────────────────────────────────────────────────────────────
  paywall_viewed: { offering: string; boosted: boolean };
  paywall_plan_selected: { plan: PlanTier };
  paywall_dismissed: { offering: string };
  purchase_started: PurchaseProps;
  purchase_completed: PurchaseProps;
  purchase_cancelled: PurchaseProps;
  purchase_failed: PurchaseProps & { reason: string };
  restore_completed: { status: 'restored' | 'nothing-found' | 'failed' };

  // ── Program ──────────────────────────────────────────────────────────────
  session_started: SessionProps;
  session_completed: SessionProps;
  retest_completed: { day: number; block: number };
  /** "Test tomorrow" on the test day's intro: the test moved a day. The plan
   * day it was due on, never the check-in score that prompted it. */
  retest_postponed: { day: number };
  // ── The weekly plan ──────────────────────────────────────────────────────
  /** A goal hit its target. The goal's name, never its measurement. */
  goal_reached: { goal: 'pain_free_mornings' | 'arch_hold' | 'calf_raises' | 'balance' | 'symmetry' };
  /** A Library routine finished. Counts for the streak, not for the plan. */
  library_routine_completed: { routine: string };
  /** How a finished session felt — the answer that moves progression. */
  session_feedback: { feedback: 'easy' | 'ok' | 'hard' };
  /** A plan answer changed in Settings. Which field, not what it became. */
  /** A plan sync to Supabase failed. The table and the PostgREST/Postgres error code, or
   * `network` / `thrown`; never a row's contents. */
  plan_sync_failed: { table: string; code: string };
  plan_settings_changed: { field: 'daysPerWeek' | 'defaultMinutes' | 'equipmentMissing' | 'footType' | 'reminderMinutes' | 'outcome' };
  /** A pain check-in happened. The score deliberately does not travel. */
  checkin_logged: { day: number; entries_today: number };
  morning_stretch_done: { day: number };

  // ── Email ────────────────────────────────────────────────────────────────
  /** The app was opened from an email button. `email_key` names the email
   * (`welcome`, `day10_keep`…), `path` the screen it asked for. The metric that
   * matters is what happens after this, not opens — Apple Mail opens everything. */
  email_link_opened: { email_key: string; path: string };
  /** An address was given to the app, and by which door. Never the address. */
  email_captured: { source: 'apple' | 'google' | 'onboarding' };
  /** Settings → Email changed. The toggles' new state, nothing else. */
  email_prefs_changed: { tips: boolean; weekly: boolean };
  /** Settings → Email → Unsubscribe from all. */
  email_unsubscribed_all: Record<string, never>;

  // ── App updates ──────────────────────────────────────────────────────────
  /** The update sheet was shown. `ota` is an EAS Update, `store` a new build. */
  app_update_offered: { kind: AppUpdateKind };
  /** They tapped the sheet's primary button. */
  app_update_accepted: { kind: AppUpdateKind };
  /** The launch after an accepted over-the-air restart is running a different
   * update than the one it left. The funnel's last step: accepted → applied. */
  app_update_applied: { kind: 'ota' };
};

export type AppUpdateKind = 'ota' | 'store';

export type PurchaseProps = {
  plan: PlanTier;
  product_id: string;
  offering: string;
  price: number;
  currency: string;
};

export type SessionProps = {
  day: number;
  block: number;
  kind: string;
  checkpoint: boolean;
};

export type AnalyticsEvent = keyof AnalyticsEvents;
