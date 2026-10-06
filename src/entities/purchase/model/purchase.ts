/**
 * The seam between the paywall and a store.
 *
 * This file is the contract; it names no vendor and imports no SDK. RevenueCat
 * lives behind it in `revenuecat.ts`, the simulator stand-in lives behind it in
 * `store.ts`, and the paywall has never known which of them it is talking to —
 * which is why wiring a real store up changed no screen.
 *
 * The unconfigured adapter reports `unavailable` rather than failing. That
 * distinction is the whole point: a paywall that says "that didn't go through"
 * when no store was ever contacted is lying about a charge that was never
 * attempted, and the screen behaves exactly as it did before — it closes.
 *
 * **What Walkito sells.** Two auto-renewing subscriptions in one App Store
 * subscription group: an annual one, which the paywall leads with, and a weekly
 * one. Both unlock the same thing, the `premium` entitlement. The discounted
 * price an invite or a comeback earns is the annual subscription again, as a
 * separate, cheaper product in the same group, sold from the `offer` offering.
 * The plan itself never ends, so nothing here has a length beyond its billing
 * period.
 */

/** What a purchase attempt can come back as. */
export type PurchaseResult =
  /** Bought, and the entitlement is live. */
  | { status: 'purchased' }
  /** The user backed out of Apple's sheet. Silent by design — they know. */
  | { status: 'cancelled' }
  /**
   * Waiting on somebody else: Ask to Buy, or a bank's own confirmation step.
   * Not a failure, and nothing has been charged yet. If it goes through, the
   * store pushes the entitlement through `subscribe` like any renewal.
   */
  | { status: 'pending' }
  /** Reached a store and it refused. Worth telling the user about. `message`
   * is the app's own sentence, in the user's language — never the SDK's. */
  | { status: 'failed'; message: string }
  /** No store to reach. Not the user's problem and not worth an error. */
  | { status: 'unavailable' };

/** What a restore attempt can come back as. */
export type RestoreResult =
  | { status: 'restored' }
  | { status: 'nothing-found' }
  | { status: 'failed'; message: string }
  | { status: 'unavailable' };

/**
 * A price as the store reports it.
 *
 * `currencyCode` is the reason this type exists. The sheet hard-coded `$` in
 * four places, which is wrong for every user outside the dollar zone — and the
 * only authority on what a product costs, and in what currency, is the store
 * that will charge for it.
 */
export type Product = {
  id: string;
  /** Minor units are the store's business; this is what gets formatted. */
  price: number;
  /** ISO 4217, e.g. `USD`, `EUR`. */
  currencyCode: string;
  /** The store's own formatted string — "£39.99", "1 299,00 ₽". Preferred over
   * formatting `price` by hand: only the store knows where the symbol goes and
   * which separator the locale uses. */
  display: string;
};

/** How often a plan bills. One per slot on `Offering`. */
export type PlanPeriod = 'annual' | 'weekly';

/**
 * What one plan costs and how to buy it, as one object.
 *
 * The two travel together deliberately. The paywall used to print a price from
 * a constant in its own file and then buy a product identifier from another —
 * so the figure on screen and the figure Apple charged had no mechanical
 * relationship, and a price changed in App Store Connect would have left the
 * sheet advertising the old one. Here the number shown and the thing bought
 * come out of the same fetch, and cannot disagree.
 */
export type Plan = {
  /** Opaque handle the store uses to start the purchase. */
  readonly token: string;
  readonly period: PlanPeriod;
  readonly product: Product;
};

/**
 * The plans on offer under one name.
 *
 * Named because this app sells the same year at more than one price — the
 * standard one, and the one an invite or a comeback earns. Apple has no concept
 * of "the same product, cheaper": a discount is a different product. RevenueCat
 * models that as offerings, so each price is an offering configured in its
 * dashboard and the app asks for one by name rather than doing arithmetic on a
 * constant.
 */
export type Offering = {
  readonly identifier: string;
  /** Auto-renewing, billed once a year. RevenueCat's `$rc_annual` package. */
  readonly annual: Plan | null;
  /** Auto-renewing, billed every week. RevenueCat's `$rc_weekly` package. */
  readonly weekly: Plan | null;
};

/** The offerings this app asks for. Each must exist in the RevenueCat
 * dashboard; a missing one resolves to null and the sheet falls back to the
 * standard price rather than inventing a discount. */
export const OFFERINGS = {
  /** `$rc_annual` → the annual product, `$rc_weekly` → the weekly product. */
  standard: 'default',
  /** `$rc_annual` → the discounted annual product, shown to somebody invited
   * or coming back. `$rc_weekly` here is optional and, when present, is the
   * ordinary weekly product. Never on a first view — see the paywall. */
  offer: 'offer',
} as const;

/**
 * The package identifiers the app reads, in every offering.
 *
 * RevenueCat's own predefined packages, so the SDK exposes them as
 * `offering.annual` and `offering.weekly` with no custom lookup. Written down
 * because they are typed into the dashboard by hand (Offerings → Packages →
 * "Annual" / "Weekly"), and a custom identifier there would leave a slot empty.
 */
export const PACKAGES = {
  annual: '$rc_annual',
  weekly: '$rc_weekly',
} as const;

/**
 * The product identifiers the offerings are expected to point at.
 *
 * Nothing buys these directly — purchases go through a `Plan` from an
 * offering, so the price shown and the product charged come from one fetch, and
 * access is decided by the `premium` entitlement rather than by product id. They
 * are the written-down contract with App Store Connect, and what a diagnostic
 * can check the dashboard against.
 *
 * TODO(store): confirm these against App Store Connect once the products exist.
 * They follow the naming of the products that came before them and are
 * informational only — a different identifier changes no behaviour, as long as
 * the RevenueCat packages point at it.
 */
export const PRODUCTS = {
  /** Auto-renewable, 1 year, group "Walkito Premium". $44.99 in the US. */
  annual: 'sub_annual_4499',
  /** Auto-renewable, 1 week, same group. $7.99 in the US. */
  weekly: 'sub_weekly_799',
  /** Auto-renewable, 1 year, same group, at the invite and comeback price. A
   * separate product rather than an introductory offer, so the price the store
   * reports is the price it renews at. */
  annualOffer: 'sub_annual_offer',
} as const;

/**
 * What used to be sold, kept only so the people who bought it keep access.
 *
 * The one-time pass and the monthly subscription are no longer on sale and no
 * screen mentions them. The pass needs its ids for one reason: Apple puts no
 * expiry on a non-renewing purchase and RevenueCat therefore never ends the
 * entitlement it grants, so the app dates that access itself — see `passEnd`
 * in `access.ts`. Only sandbox and TestFlight buyers ever held one.
 */
export const LEGACY_PRODUCTS = {
  monthly: 'sub_monthly_2499',
  pass: 'pass_12wk_4999',
  passOffer: 'pass_12wk_1499',
} as const;

/** Both pass products — a purchase of either granted the same access for the
 * same length of time. */
export const LEGACY_PASS_IDS: readonly string[] = [LEGACY_PRODUCTS.pass, LEGACY_PRODUCTS.passOffer];

/**
 * How long a legacy pass granted access for, from its purchase date.
 *
 * Fixed at what was sold, so nobody who bought one loses a day of it.
 */
export const PASS_ACCESS_DAYS = 90;

export type Purchases = {
  /** Whether a real store is wired up. Everything below is a no-op when false. */
  readonly configured: boolean;
  /**
   * The named offering, with the store's own prices.
   *
   * Null when there is no store, or when the store answered and has no
   * offering by that name. Callers must handle null — that is what keeps a
   * missing `offer` offering from showing a discount the store will not honour.
   *
   * **Rejects when the store could not be asked** — offline, an outage, or
   * StoreKit returning no products. That is not the same as null and must not
   * be treated as it: a missing offering is a dashboard fault that retrying
   * will not fix, while a failed fetch is worth asking again, and a screen
   * that read one as the other greyed out every plan for good the first time
   * the phone was on a train.
   */
  offering(identifier: string): Promise<Offering | null>;
  /** Buy a plan from an offering. The token comes from `offering()`, so the
   * price the user was shown is the price being charged. */
  buy(plan: Plan): Promise<PurchaseResult>;
  /**
   * Buy a store product by its identifier, for a paywall the app did not draw
   * (Superwall's). Same tracking, same entitlement check and same results as
   * `buy`; `basePlanId` and `offerId` pick the Google Play offer the paywall
   * showed.
   */
  buyProduct(request: { productId: string; basePlanId?: string; offerId?: string; source: string }): Promise<PurchaseResult>;
  restore(): Promise<RestoreResult>;
  /**
   * The store's id for this customer: RevenueCat's app user id. PostHog and
   * Superwall are identified as it, so a purchase RevenueCat reports from its
   * server lands on the same person in both. Null with no store.
   */
  appUserId(): Promise<string | null>;

  /**
   * Whether the subscription is live, right now, synchronously.
   *
   * Synchronous on purpose. Anything gated on this is gated during render, and
   * a promise here would mean every gated screen flickers through a
   * not-entitled frame before the answer lands — which is the frame where a
   * paying customer sees the paywall.
   */
  entitled(): boolean;
  /** Fires whenever `entitled()`, `hadAccess()` or `passEndsAt()` would return
   * something new. The store pushes these: a subscription can lapse, or renew,
   * while the app is open. */
  subscribe(listener: () => void): () => void;
  /** Re-ask the store. Resolves once `entitled()` is current. */
  refresh(): Promise<void>;

  /**
   * Whether this customer has ever held paid access, active or not.
   *
   * With `entitled()` false it is the difference between somebody who never
   * paid — who gets the paywall — and somebody whose subscription ended, who
   * gets the expiry screen with their own results on it. Synchronous for the
   * same reason `entitled()` is: the root layout picks a door with it on the
   * first frame.
   */
  hadAccess(): boolean;

  /**
   * When a legacy pass runs out, or null if none was bought.
   *
   * Computed from the purchase date rather than read from an entitlement,
   * because RevenueCat cannot expire a non-renewing purchase on its own. Null
   * for every subscriber: a subscription has no fixed end — it renews, and
   * RevenueCat ends it when it stops.
   */
  passEndsAt(): Date | null;

  /**
   * Extra days of access, earned outside the store.
   *
   * Invites: each friend who joins with the user's code adds free days. The
   * store knows nothing about that — it is decided by the invite server — so it
   * is handed in rather than looked up.
   *
   * Only ever lengthens a legacy pass, which the app dates itself. An App Store
   * subscription cannot be extended from the device, so for a subscriber this
   * changes nothing, and with nothing bought the days wait for nothing. That is
   * why no screen, push or legal page promises these days to anyone any more.
   */
  setBonusDays(days: number): void;
};

/**
 * The stand-in. Answers honestly and charges nobody.
 *
 * Every method resolves `unavailable` instead of throwing, so no call site
 * needs a try/catch to stay upright and no screen can be left mid-spinner by
 * an exception nobody caught.
 */
export const unconfigured: Purchases = {
  configured: false,
  offering: async () => null,
  buy: async () => ({ status: 'unavailable' }),
  buyProduct: async () => ({ status: 'unavailable' }),
  restore: async () => ({ status: 'unavailable' }),
  appUserId: async () => null,
  // Not entitled, rather than entitled. An unconfigured build is a build whose
  // store was never reached, and the safe reading of "we don't know" is the one
  // that does not hand out the paid product to everybody.
  entitled: () => false,
  subscribe: () => () => {},
  refresh: async () => {},
  hadAccess: () => false,
  passEndsAt: () => null,
  setBonusDays: () => {},
};

/**
 * The identifier configured in the RevenueCat dashboard.
 *
 * One entitlement for the whole app: there are no tiers of access here, only
 * tiers of billing. Both subscriptions, and the discounted annual, are attached
 * to it. That is also why the adapter treats *any* active entitlement not
 * granted by a legacy pass as access — with a single tier there is nothing to
 * confuse it with, and a name that drifts out of step with the dashboard should
 * not lock out someone who has paid. This constant is what the development
 * warning names when the store answers with something else.
 *
 * Must match the dashboard. Product catalog → Entitlements.
 */
export const ENTITLEMENT = 'premium';

/**
 * What a screen prints when there is no store to ask.
 *
 * Fallbacks, not prices. Every figure is read from the store when one is
 * configured; these exist so a layout is not empty on a simulator or in a build
 * whose RevenueCat key is missing, and so no screen renders a blank where a
 * number should be. If one reaches a paying user that is a bug, not a price —
 * see `storeDiagnosis()`.
 *
 * No discounted figure, deliberately: a discount is only ever shown from two
 * store prices, so without a store there is no discount to show.
 *
 * Here rather than in the paywall because two screens sell these plans: the
 * paywall and the expiry screen.
 */
export const PRINTED_PRICES = {
  /** Auto-renewing, billed yearly. */
  annual: 44.99,
  /** Auto-renewing, billed weekly. */
  weekly: 7.99,
} as const;
