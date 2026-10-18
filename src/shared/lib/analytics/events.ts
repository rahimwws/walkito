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

/** Which plan a paywall or purchase event is about: the annual, monthly and
 * lifetime plans on sale, the weekly one Android still sells, and the 3-month
 * pass (`pass`, one payment for 90 days, sold only on the limited offer and in
 * the cancel flow). The first monthly plan is not sold. */
export type PlanTier = 'annual' | 'monthly' | 'weekly' | 'lifetime' | 'pass';

/** Where the 3-month pass is sold: the third card of the limited offer (the
 * comeback stage of the offer screen, and the review account's "Special
 * offers" sheet), or the answer to "It doesn't fit my budget" in the cancel
 * flow, at the retention price. Also the Superwall placement each registers. */
export type PassPlacement = 'limited_offer' | 'cancel_budget';

/** Why somebody is leaving, as the cancel flow's five answers put it. The
 * answer's id, never anything they wrote: there is no free text. */
export type CancelReason = 'budget' | 'better' | 'pause' | 'notHelping' | 'noTime';

/**
 * What the cancel flow put in the place of cancelling. The two that touch the
 * price (`pass`, the 3-month pass at the retention price, and `free_month`)
 * are the retention offers; the rest change the plan, open a store page or
 * reach a person. The "when to see a doctor" check is deliberately not one of
 * them: that somebody looked for it says something about their body.
 *
 * `next_year` (the yearly plan's next year at 40% off) and `yearly` (the
 * switch to the yearly plan) were the budget answer's offers before the pass
 * took their place; they are no longer sent.
 */
export type CancelOffer =
  | 'pass'
  | 'free_month'
  | 'pause'
  | 'lighter'
  | 'short_sessions'
  | 'reminder'
  | 'review'
  | 'write';

export type AnalyticsEvents = {
  // ── Onboarding ───────────────────────────────────────────────────────────
  /** The first screen of the flow appeared. The top of every funnel. */
  onboarding_started: Record<string, never>;
  /** A step appeared. `step` is its stable key from `STEPS`, never its title. */
  onboarding_step_viewed: { step: string; index: number; act: number };
  /** Only for the few answers that segment a funnel without describing a body. */
  onboarding_answered: { step: 'source' | 'goal' | 'sport' | 'runner' | 'role'; answer: string };
  /** A reaction to an answer appeared — a full screen or a line said back.
   * Only the reactions whose key says nothing about a body: the name, who
   * they are, the habit and the kit. A reaction's key names the answer that
   * chose it, so one about where it hurts, how long, the safety check or what
   * was tried is never sent; `reactionAnalyticsId` in `pages/onboarding`
   * decides, and this type refuses anything it would not pass. */
  onboarding_reaction_viewed: {
    reaction: 'name' | `role_${string}` | `habit_${string}` | `equipment_${string}`;
    full: boolean;
  };
  /** The 30-second check: whether this person is in it, then that they did it.
   * Never the result — an arch or a balance time is a body measurement. */
  mini_test_assigned: { variant: 'test' | 'control' };
  mini_test_completed: { balance: boolean };
  /** The first week's deck: a card came to the front, by a swipe or by itself
   * (`auto`). Its place in the deck, never the move: the deck is always three
   * cards, so a place says nothing, while which moves fill it follows the
   * pain answers. */
  first_week_move_viewed: { index: number; auto: boolean };
  /** A card's clip opened full screen. */
  first_week_expanded: { index: number };
  /** The deck's last card was reached, by a swipe or by itself. */
  first_week_deck_completed: { auto: boolean };
  /** "Already have an account?" on the intro. */
  sign_in_opened: { from: 'intro' | 'setup' };
  acquisition_source_selected: { source: AcquisitionSource };
  /** `created`: an emailed code made the anonymous account this person's own,
   * rather than signing in to one the address already had. */
  sign_in_completed: { method: 'apple' | 'google' | 'email'; status: 'signed-in' | 'unavailable'; created?: boolean };
  /** `stage` says whether the provider's own sheet or our server refused — a
   * server failure means that provider on Supabase needs looking at. `code`:
   * sending or checking an emailed code. */
  sign_in_failed: {
    method: 'apple' | 'google' | 'email';
    stage?: 'provider' | 'server' | 'code';
    failure?: 'user' | 'offline' | 'server';
  };
  /** An emailed code went out. `existing`: on the save screen, the address
   * already had an account, so the code signs in to it (always false from the
   * intro, where every code signs in). */
  sign_in_code_sent: { resend: boolean; existing: boolean };
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
  /** "See all plans" on the paywall: the monthly and lifetime plans shown
   * under the annual one. */
  paywall_plans_expanded: Record<string, never>;
  /** "Not now" on the paywall: on to the one-time trial offer (never into
   * the app; it is a hard paywall). Once per person, sent by `skipPaywall()`
   * in `entities/purchase` (never by a screen). */
  paywall_skipped: Record<string, never>;
  /** The offer screen for somebody who skipped the paywall: the one-time
   * trial, the comeback price while its 15 minutes run, or the standard plans
   * after them. The name is from when it stood over Home; kept, as an
   * analytics identifier. */
  home_offer_viewed: { stage: 'trial' | 'comeback' | 'standard' };
  /** A plan chosen on the offer screen's switch (the comeback's year or
   * lifetime, or one of the standard plans). */
  home_offer_plan_selected: { plan: PlanTier };
  /** The app was left with the one-time trial offer up: the trial is over and
   * the comeback's 15 minutes start (`features/home-offer`). */
  trial_offer_missed: Record<string, never>;
  /** A push about the comeback price was accepted by the system:
   * `last_chance` as the app is left, `ends_soon` laid for before the
   * deadline. Sent only with notification permission. */
  comeback_push_sent: { push: 'last_chance' | 'ends_soon' };

  // ── Cancelling ───────────────────────────────────────────────────────────
  /** Settings → Manage subscription opened the cancel flow. The plan held,
   * by its billing period. */
  cancel_flow_opened: { plan: PlanTier };
  /** One of the five answers to "Why are you leaving?". */
  cancel_reason: { reason: CancelReason };
  /** Something put in the place of cancelling came on screen. Never the
   * person's own numbers, which the "my feet are better" answer shows. */
  cancel_offer_shown: { reason: CancelReason; offer: CancelOffer };
  /** It was taken: an offer bought, the plan changed, the store's pause or
   * review page opened, an email to us started. */
  cancel_offer_accepted: { reason: CancelReason; offer: CancelOffer };
  /** "Cancel anyway": the store's own subscription page opened, from the
   * reasons (`none`) or after one. Whether they then cancelled is the store's
   * to say; RevenueCat reports it server-side. */
  cancel_anyway: { reason: CancelReason | 'none' };

  // ── The 3-month pass ─────────────────────────────────────────────────────
  /** A pass was on screen to buy: the limited offer's third card, or the
   * budget answer's offer in the cancel flow. */
  pass_offer_view: { placement: PassPlacement };
  /** The store said a pass was bought. Also tracked as `purchase_*` like any
   * purchase; this one says where it was sold. Never revenue: RevenueCat
   * reports the money. */
  pass_purchase: { product: string; placement: PassPlacement };
  /** "Your 3 months are set", for somebody whose subscription still renews:
   * the screen that asks them to turn auto-renewal off. */
  pass_autorenew_prompt: { placement: PassPlacement };
  /** Home's card for a pass ending within 7 days, with no subscription
   * running. Once per day it is seen. */
  pass_expiring_view: Record<string, never>;
  /** A pass window was seen to have ended. Once per window. */
  pass_expired: Record<string, never>;

  // ── After the first purchase ─────────────────────────────────────────────
  setup_step_viewed: { step: string };
  setup_completed: Record<string, never>;
  /** Signing in is required after the purchase, except when it failed for a
   * reason that was not the person's (no network, a server or provider down):
   * then "Continue for now", and it is asked again on the next launch. */
  setup_account_deferred: { reason: 'offline' | 'server' };
  /** The platform's sheet (Apple or Google) on the save screen ended without
   * an account. On iPhone that goes on (App Review requires signing in to stay
   * optional there); on Android a cancel stays. */
  setup_account_declined: { platform: 'ios' | 'android'; outcome: 'cancelled' | 'unavailable' | 'failed' };
  /** The widget, asked for. `pinned` only where the system could add it
   * itself (Android); on iPhone it is the walkthrough being finished. */
  widget_add: { result: 'pinned' | 'guided' | 'skipped' };
  /** Whether the widget is really there, asked of the system right after the
   * widget step: on "Finish" at the end of the walkthrough, on coming back to
   * the app during it (`return`), or after Android's pin sheet (`pin`). */
  widget_add_checked: { placed: boolean; moment: 'finish' | 'return' | 'pin' };
  /** It was not there: the sheet asking again, and what was answered. */
  widget_nudge_shown: Record<string, never>;
  widget_nudge_answered: { choice: 'again' | 'later' };
  /** The widget appeared on, or left, the Home Screen, noticed at launch or on
   * a return to the app, whenever it happened. `count` is how many are there
   * now; `sizes` lists them (`small`, `small,medium`). Never on the first
   * check after an install or the update that brought it, which has nothing
   * to compare with: that one only sets the `has_widget` person property. */
  widget_installed: { count: number; sizes: string };
  widget_removed: { count: number };

  // ── Home readiness ───────────────────────────────────────────────────────
  /** A small sheet over "Legs ready today" opened: a part's own, from its
   * pill, or the score's. Which one only, never a value or the score: they
   * are made of pain, sleep and steps. */
  readiness_info_opened: { part: 'pain' | 'sleep' | 'steps' | 'score' };

  // ── Home tour ────────────────────────────────────────────────────────────
  /** "Start" on the "Day 1" card over Home, after the purchase or the skip:
   * the two-minute first session opened. Which moves it held is left out,
   * since they follow where it hurts. */
  day1_session_started: Record<string, never>;
  /** That session's last move ran out and its closing sheet was closed: it is
   * on record as the day's session, and the tour comes next. */
  day1_session_completed: Record<string, never>;
  /** The tour over Home after the day-one session: its stops, 0 the
   * overview, 1 "It hurts", 2 the start button. */
  home_tour_step_viewed: { step: number };
  /** The tour's last stop tapped, the end of the first-run flow: Home for a
   * buyer, the offer over it for somebody who skipped the paywall. */
  home_tour_completed: Record<string, never>;

  // ── Program ──────────────────────────────────────────────────────────────
  session_started: SessionProps;
  session_completed: SessionProps;
  retest_completed: { day: number; block: number };
  /** "Test tomorrow" on the test day's intro: the test moved a day. The plan
   * day it was due on, never the check-in score that prompted it. */
  retest_postponed: { day: number };
  /** A test's row opened on the results screen: which test, never its figure. */
  test_results_detail: { test: 'calf_raises' | 'arch_hold' | 'balance' };
  /** The results screen's share card went to the share sheet. Never the numbers on it. */
  test_results_shared: Record<string, never>;
  /** A test's row opened on the Progress tab: which test, never its figure. */
  progress_strength_detail: { test: 'calf' | 'balance' | 'arch' };
  /** "Start" on the Progress tab's next-test line, on the day the test is due. */
  progress_test_started: Record<string, never>;
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
  /** A pain reading happened. The score deliberately does not travel. `kind`:
   * the day's check-in, a correction of it, or "it hurts right now". */
  checkin_logged: { day: number; entries_today: number; kind: 'checkin' | 'edit' | 'flare' };
  morning_stretch_done: { day: number };
  /** The sticker album was opened. Nothing else: which stickers are in it follows check-ins and tests. */
  sticker_book_opened: Record<string, never>;

  // ── Streak and the weekly goal ───────────────────────────────────────────
  /** This week's plan sessions reached the week's planned days. Once per week
   * (`weekly-goal.ts`). Counts of sessions, never what was in them. */
  weekly_goal_met: { week_sessions: number; goal: number };
  /** A banked freeze covered a day with nothing on it, so the streak held.
   * Once per covered day (the ledger in `streak.ts`). */
  freeze_spent: Record<string, never>;
  /** Walkito's accessory for a longest streak (7 shoe, 14 medal, 30 trophy,
   * 100 crown) was first shown on Home. Once per accessory. */
  accessory_unlocked: { accessory: 'shoe' | 'medal' | 'trophy' | 'crown' };

  // ── Email ────────────────────────────────────────────────────────────────
  /** The app was opened from an email button. `email_key` names the email
   * (`welcome`, `day10_keep`…), `path` the screen it asked for. The metric that
   * matters is what happens after this, not opens — Apple Mail opens everything. */
  email_link_opened: { email_key: string; path: string };
  /** An address was given to the app, and by which door. Never the address. */
  email_captured: { source: 'apple' | 'google' | 'onboarding' };
  /** The email screen after the first purchase: an address given, or passed. */
  setup_email_saved: Record<string, never>;
  setup_email_skipped: Record<string, never>;
  /** Settings → Email changed. The toggles' new state, nothing else. */
  email_prefs_changed: { tips: boolean; weekly: boolean };
  /** Settings → Email → Unsubscribe from all. */
  email_unsubscribed_all: Record<string, never>;

  /** "Rate Walkito" opened the store's review page. Where it was tapped from. */
  rate_app_tapped: { from: 'profile' };

  /** "Why today's plan?" under Home's readiness was opened. Nothing about
   * what it showed: it is steps, sleep and heart rate. */
  why_plan_opened: Record<string, never>;

  /** App Tracking Transparency answered, once, in the onboarding. Only
   * whether it was allowed. */
  att_answered: { granted: boolean };

  // ── Instagram ────────────────────────────────────────────────────────────
  /** The "follow Walkito on Instagram" sheet came up: by itself on the third
   * day of use, or from its row in Profile. */
  instagram_offer_viewed: { from: 'auto' | 'profile' };
  /** "Follow on Instagram" opened the profile. */
  instagram_follow_tapped: { from: 'auto' | 'profile' };
  /** "Not now", or a tap outside the card. */
  instagram_offer_dismissed: { from: 'auto' | 'profile' };

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
