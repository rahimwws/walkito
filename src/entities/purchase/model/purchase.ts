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
 * **What Walkito sells.** One level of access, the `premium` entitlement, three
 * ways: an annual subscription (what the paywall leads with), a monthly one,
 * and a lifetime one-time purchase (a non-consumable, which never expires). All
 * three are attached to the same entitlement in RevenueCat. The other prices
 * are products of their own: the annual with a one-week free trial as its App
 * Store introductory offer (the Home offer after the paywall is skipped), and
 * the annual with its first year paid up front at a lower price plus a cheaper
 * lifetime (the comeback offer). Apple has no "the same product, cheaper", so
 * each is its own product, sold from its own offering (`OFFERINGS`; on the App
 * Store all six sit in one dashboard offering, `v2`, and the adapter cuts the
 * three out of it).
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

/**
 * How a plan bills: one slot per kind on `Offering`. `lifetime` is a one-time
 * purchase, not a subscription. Also the `plan` of every purchase event.
 */
export type PlanPeriod = 'annual' | 'monthly' | 'weekly' | 'lifetime';

/** A stretch of time as the store states it: "1 week", "1 year". */
export type StorePeriod = {
  readonly unit: 'day' | 'week' | 'month' | 'year';
  /** How many `unit`s, at least 1. */
  readonly count: number;
};

/**
 * An App Store (or Google Play) introductory offer on a subscription, as the
 * store reports it for **this customer**.
 *
 * Only present when the product has one and the store says this customer can
 * have it: Apple gives an introductory offer once per subscription group, so
 * someone who already had a trial gets none, and a screen that still said
 * "free" would be promising something the sheet will not give. On iOS that is
 * RevenueCat's eligibility check; where it cannot tell, the offer is left out
 * (RevenueCat's own advice). Google Play only lists offers the account can
 * take.
 *
 * - `free-trial`: nothing is charged for `period`; then the plan's own price.
 * - `pay-up-front`: one payment of `priceString` covers `period`; then the
 *   plan's own price. The comeback annual: $29.99 for the first year.
 * - `pay-as-you-go`: `priceString` each billing `period`, `cycles` times.
 */
export type IntroOffer =
  | { readonly kind: 'free-trial'; readonly period: StorePeriod }
  | {
      readonly kind: 'pay-up-front';
      readonly price: number;
      readonly priceString: string;
      readonly period: StorePeriod;
    }
  | {
      readonly kind: 'pay-as-you-go';
      readonly price: number;
      readonly priceString: string;
      readonly period: StorePeriod;
      readonly cycles: number;
    };

/**
 * What one plan costs and how to buy it, as one object.
 *
 * The two travel together deliberately. The paywall used to print a price from
 * a constant in its own file and then buy a product identifier from another —
 * so the figure on screen and the figure Apple charged had no mechanical
 * relationship, and a price changed in App Store Connect would have left the
 * sheet advertising the old one. Here the number shown and the thing bought
 * come out of the same fetch, and cannot disagree.
 *
 * Every string here is the store's own, formatted for this storefront: only
 * the store knows where the symbol goes and which separator the locale uses.
 */
export type Plan = {
  /** Opaque handle the store uses to start the purchase. */
  readonly token: string;
  readonly period: PlanPeriod;
  readonly product: Product;
  /** The regular price, as billed each period (or once, for lifetime).
   * The same string as `product.display`. */
  readonly priceString: string;
  /** The regular price over a month ("$4.99" for $59.99 a year), the store's
   * own division. Null for lifetime. Always secondary on screen: Apple wants
   * the billed amount to be the most prominent price. */
  readonly pricePerMonthString: string | null;
  /** The same over a week. Null for lifetime. */
  readonly pricePerWeekString: string | null;
  /** How long one billing period is (1 year, 1 month, 1 week). Null for
   * lifetime. */
  readonly billingPeriod: StorePeriod | null;
  /** A one-time purchase that never renews and never expires. */
  readonly isLifetime: boolean;
  /** The introductory offer this customer would get, or null. Trial or
   * "first year" wording belongs only on a plan where this is set. */
  readonly intro: IntroOffer | null;
};

/**
 * The plans on offer under one name.
 *
 * Named because this app sells the same access at more than one price — the
 * standard one, the trial after the paywall is skipped, and the comeback
 * price. Apple has no concept of "the same product, cheaper": a discount is a
 * different product. RevenueCat models that as offerings, so each price is an
 * offering configured in its dashboard and the app asks for one by name rather
 * than doing arithmetic on a constant.
 *
 * Any slot can be null: an offering only holds what its dashboard entry holds.
 * Android's offerings still hold the first line-up (annual and weekly) until
 * its own versions of the new products exist, so a screen must draw whatever
 * slots are filled and hide the rest.
 */
export type Offering = {
  readonly identifier: string;
  /** Auto-renewing, billed once a year. RevenueCat's `$rc_annual` package
   * (in `v2`, the trial's and the comeback's annual are custom packages:
   * `V2_SHELVES`). */
  readonly annual: Plan | null;
  /** Auto-renewing, billed every month. RevenueCat's `$rc_monthly` package. */
  readonly monthly: Plan | null;
  /** Auto-renewing, billed every week. RevenueCat's `$rc_weekly` package.
   * Only Android's offerings still carry one. */
  readonly weekly: Plan | null;
  /** One payment, access for good. RevenueCat's `$rc_lifetime` package
   * (in `v2`, the comeback's is `lifetime_offer`). */
  readonly lifetime: Plan | null;
};

/**
 * The offerings this app asks for, by these names everywhere: screens, purchase
 * tokens and the `offering` of every purchase event.
 *
 * Where they come from is the adapter's business. On the App Store all three
 * are cut out of the one dashboard offering `OFFERING_V2` (`V2_SHELVES` says
 * which package goes where); without it (Android, older dashboards) each is a
 * dashboard offering of this name. A missing one resolves to null and the
 * screen falls back to the standard offering rather than inventing a discount.
 * The package names below are the ones the by-name offerings use.
 */
export const OFFERINGS = {
  /** `$rc_annual` walkito_annual, `$rc_monthly` walkito_monthly,
   * `$rc_lifetime` walkito_lifetime. The paywall, "See all plans", and the
   * Home offer once the comeback deadline has passed. */
  standard: 'default',
  /** `$rc_annual` walkito_annual_trial: the annual with a one-week free
   * trial. The one-time Home offer after the paywall is skipped. */
  trial: 'trial',
  /** `$rc_annual` walkito_annual_offer (the first year paid up front, cheaper)
   * and `$rc_lifetime` walkito_lifetime_offer. The comeback offer: the 15-minute
   * one on Home, the win-back push and the offer emails. The id is fixed —
   * email links (`paywall?offering=offer`) and older builds ask for it. */
  offer: 'offer',
} as const;

/**
 * The package identifiers the app reads, in every offering.
 *
 * RevenueCat's own predefined packages, so the SDK exposes them as
 * `offering.annual`, `offering.monthly` … with no custom lookup. Written down
 * because they are typed into the dashboard by hand (Offerings → Packages →
 * "Annual" / "Monthly" / "Lifetime"), and a custom identifier there would leave
 * a slot empty. `v2` uses these for the standard plans and custom ones beside
 * them (`V2_PACKAGES`).
 */
export const PACKAGES = {
  annual: '$rc_annual',
  monthly: '$rc_monthly',
  weekly: '$rc_weekly',
  lifetime: '$rc_lifetime',
} as const;

/**
 * The one RevenueCat offering the App Store line-up lives in: all six
 * `PRODUCTS`, attached to `premium`. `default` stays as it was, for the builds
 * already out and for Android, whose products are not in `v2`.
 *
 * Read by this name, never as RevenueCat's "current" offering, so making `v2`
 * current after the release changes nothing here. Renaming it would.
 */
export const OFFERING_V2 = 'v2';

/**
 * `v2`'s packages under custom identifiers, typed into the dashboard by hand.
 * They sit beside `$rc_annual` and `$rc_lifetime` in the same offering, so they
 * cannot take RevenueCat's predefined slots.
 */
export const V2_PACKAGES = {
  /** walkito_annual_trial: the annual with a one-week free trial. */
  annualTrial: 'annual_trial',
  /** walkito_annual_offer: the annual, its first year paid up front for less. */
  annualOffer: 'annual_offer',
  /** walkito_lifetime_offer: the cheaper lifetime. */
  lifetimeOffer: 'lifetime_offer',
} as const;

/**
 * Which of `v2`'s packages fill each slot of each offering the app asks for. A
 * slot not named here stays empty.
 */
export const V2_SHELVES: Readonly<Record<string, Readonly<Partial<Record<PlanPeriod, string>>>>> = {
  [OFFERINGS.standard]: { annual: PACKAGES.annual, monthly: PACKAGES.monthly, lifetime: PACKAGES.lifetime },
  [OFFERINGS.trial]: { annual: V2_PACKAGES.annualTrial },
  [OFFERINGS.offer]: { annual: V2_PACKAGES.annualOffer, lifetime: V2_PACKAGES.lifetimeOffer },
};

/**
 * The product identifiers the offerings are expected to point at, in App
 * Store Connect.
 *
 * Nothing buys these directly — purchases go through a `Plan` from an
 * offering, so the price shown and the product charged come from one fetch, and
 * access is decided by the `premium` entitlement rather than by product id. They
 * are the written-down contract with App Store Connect, and what a diagnostic
 * can check the dashboard against. US prices in the comments; the store's own
 * figure is the only one ever shown.
 */
export const PRODUCTS = {
  /** Auto-renewable, 1 year, $59.99. No introductory offer. */
  annual: 'walkito_annual',
  /** Auto-renewable, 1 month, $14.99. */
  monthly: 'walkito_monthly',
  /** Non-consumable, one time, $99.99. */
  lifetime: 'walkito_lifetime',
  /** Auto-renewable, 1 year, $59.99, with a one-week free trial as its
   * introductory offer. */
  annualTrial: 'walkito_annual_trial',
  /** Auto-renewable, 1 year, $59.99, with the first year paid up front at
   * $29.99 as its introductory offer. */
  annualOffer: 'walkito_annual_offer',
  /** Non-consumable, one time, $59.99. */
  lifetimeOffer: 'walkito_lifetime_offer',
} as const;

/** The lifetime products: one-time purchases that grant `premium` for good. */
export const LIFETIME_PRODUCT_IDS: readonly string[] = [PRODUCTS.lifetime, PRODUCTS.lifetimeOffer];

/**
 * The first line-up of subscriptions: still what Google Play sells until
 * Android has its own versions of `PRODUCTS`, and still renewing for the App
 * Store subscribers who bought them. All attached to `premium`.
 */
export const FIRST_PRODUCTS = {
  /** Auto-renewable, 1 year. $44.99 in the US. */
  annual: 'sub_annual_4499',
  /** Auto-renewable, 1 week. $7.99 in the US. */
  weekly: 'sub_weekly_799',
  /** Auto-renewable, 1 year, the old comeback price, as a separate product. */
  annualOffer: 'sub_annual_offer',
} as const;

/**
 * What used to be sold, kept only so the people who bought it keep access.
 *
 * The one-time pass and the first monthly subscription (not `walkito_monthly`)
 * are no longer on sale and no screen mentions them. The pass needs its ids for one reason: Apple puts no
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
   * Whether the store has its own sheet for an offer code: Apple's, on iOS.
   * Google Play redeems promo codes in the Play Store app, not in ours.
   */
  readonly canRedeemCode: boolean;
  /**
   * Open the store's sheet for an App Store offer code (set up in App Store
   * Connect on a subscription). The store redeems it; the subscription it
   * starts reaches `entitled()` through the same listener as a purchase.
   *
   * The only way a code may give anything in this app. A field of our own
   * that unlocked access or a price is what App Review rejected 1.0.3 (35)
   * for, under Guideline 3.1.1.
   */
  redeemCode(): Promise<void>;
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
  canRedeemCode: false,
  redeemCode: async () => {},
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
 * tiers of billing. Every product in `PRODUCTS` and `FIRST_PRODUCTS` is
 * attached to it, the lifetime purchases included — a non-consumable attached
 * to an entitlement unlocks it with no expiry, which is what lifetime means. That is also why the adapter treats *any* active entitlement not
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
 *
 * Not for new screens: they show no figure until the store answers,
 * and in development the sample prices (`setSamplePrices`) stand in for a
 * store. These are the first line-up's prices and only the old screens read
 * them.
 */
export const PRINTED_PRICES = {
  /** Auto-renewing, billed yearly. */
  annual: 44.99,
  /** Auto-renewing, billed weekly. */
  weekly: 7.99,
} as const;
