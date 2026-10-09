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

/** Which subscription a paywall event is about. The two plans on sale; the
 * one-time pass and the monthly plan that came before them are not sold. */
export type PlanTier = 'annual' | 'weekly';

export type AnalyticsEvents = {
  // ── Onboarding ───────────────────────────────────────────────────────────
  /** The first screen of the flow appeared. The top of every funnel. */
  onboarding_started: Record<string, never>;
  /** A step appeared. `step` is its stable key from `STEPS`, never its title. */
  onboarding_step_viewed: { step: string; index: number; act: number };
  /** Only for the few answers that segment a funnel without describing a body. */
  onboarding_answered: { step: 'source' | 'goal' | 'sport' | 'runner' | 'role'; answer: string };
  /** A reaction to an answer appeared — a full screen or a line under the
   * options. The reaction's key, never the answer that chose it. */
  onboarding_reaction_viewed: { reaction: string; full: boolean };
  /** The 30-second check: whether this person is in it, then that they did it.
   * Never the result — an arch or a balance time is a body measurement. */
  mini_test_assigned: { variant: 'test' | 'control' };
  mini_test_completed: { balance: boolean };
  /** "Already have an account?" on the intro. */
  sign_in_opened: { from: 'intro' | 'setup' };
  acquisition_source_selected: { source: AcquisitionSource };
  sign_in_completed: { method: 'apple' | 'google' | 'email'; status: 'signed-in' | 'unavailable' };
  /** `stage` says whether the provider's own sheet or our server refused — a
   * server failure means that provider on Supabase needs looking at. */
  sign_in_failed: { method: 'apple' | 'google' | 'email'; stage?: 'provider' | 'server' };
  /** Left the flow — by finishing it, or by the header's Skip. */
  onboarding_completed: { skipped: boolean; plan_weeks?: number };

  // ── Paywall ──────────────────────────────────────────────────────────────
  paywall_viewed: { offering: string; boosted: boolean };
  /** A step of the first paywall: the two screens before it, then the plans. */
  paywall_step_viewed: { step: 1 | 2 | 3 };
  paywall_plan_selected: { plan: PlanTier };
  /** "Have a code?" under the plans. */
  paywall_code_opened: Record<string, never>;
  paywall_dismissed: { offering: string };
  purchase_started: PurchaseProps;
  purchase_completed: PurchaseProps;
  purchase_cancelled: PurchaseProps;
  /** Waiting on Ask to Buy or a bank's confirmation. Not a failure; if it
   * goes through, RevenueCat reports the purchase server-side. */
  purchase_pending: PurchaseProps;
  purchase_failed: PurchaseProps & { reason: string };
  restore_completed: { status: 'restored' | 'nothing-found' | 'failed' };

  // ── After the first purchase ─────────────────────────────────────────────
  setup_step_viewed: { step: string };
  setup_completed: Record<string, never>;
  /** The widget, asked for. `pinned` only where the system could add it
   * itself (Android); on iPhone it is the walkthrough being finished. */
  widget_add: { result: 'pinned' | 'guided' | 'skipped' };

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
  /** "Can't do this" in the player. A missing-kit reason travels; "it hurts"
   * goes as `other`, because a pain answer is health data. */
  exercise_cant_do: { exercise: string; reason: 'no_step' | 'no_band' | 'no_towel' | 'no_pillow' | 'no_ball' | 'other' };
  /** A plan answer changed in Settings. Which field, not what it became. */
  /** A plan sync to Supabase failed. The table and the PostgREST/Postgres error code, or
   * `network` / `thrown`; never a row's contents. */
  plan_sync_failed: { table: string; code: string };
  plan_settings_changed: { field: 'daysPerWeek' | 'defaultMinutes' | 'equipmentMissing' | 'footType' | 'reminderMinutes' | 'outcome' };
  /** A pain check-in happened. The score deliberately does not travel. */
  checkin_logged: { day: number; entries_today: number };
  morning_stretch_done: { day: number };

  // ── Plan codes from AI assistants ───────────────────────────────────────
  /** A plan code link (`walkito://plan?code=`, `walkito.site/p/<code>`) opened
   * the app with a valid code. Which assistant made it, nothing else. */
  ai_code_opened: { source: 'chatgpt' | 'claude' | 'other' };
  /** Onboarding was prefilled from a plan code, by link or typed in. `area`
   * and `minutes` are plan settings the assistant chose, not anything the
   * person reported about their body. */
  ai_code_redeemed: {
    source: 'chatgpt' | 'claude' | 'other';
    area: 'heel_arch' | 'achilles' | 'flat_feet' | 'shin' | 'general_plus';
    minutes: 3 | 5 | 10;
  };
  /** A plan code that did not decode, from a link or the onboarding field. */
  ai_code_invalid: Record<string, never>;

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

  /** "Rate Walkito" opened the store's review page. Where it was tapped from. */
  rate_app_tapped: { from: 'profile' };

  // ── Superwall ────────────────────────────────────────────────────────────
  /** A Superwall paywall event: shown, closed, declined, transaction steps,
   * load failures. `paywall` is the dashboard's paywall identifier. Purchases
   * themselves are also tracked as purchase_* with `offering: 'superwall'`. */
  superwall_event: { event: string; paywall?: string };

  // ── Errors the user was spared ───────────────────────────────────────────
  /** A link named a screen the app does not have; the user was sent Home. */
  route_not_found: { path: string };
  /** A screen threw and the friendly error screen stood in. The error's name only. */
  app_error_shown: { name: string };

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
