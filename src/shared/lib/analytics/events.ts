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
  sign_in_completed: { method: 'apple' | 'email'; status: 'signed-in' | 'unavailable' };
  sign_in_failed: { method: 'apple' | 'email' };
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
  /** A pain check-in happened. The score deliberately does not travel. */
  checkin_logged: { day: number; entries_today: number };
  morning_stretch_done: { day: number };
};

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
