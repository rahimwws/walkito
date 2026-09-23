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
 */

/** What a purchase attempt can come back as. */
export type PurchaseResult =
  /** Bought, and the entitlement is live. */
  | { status: 'purchased' }
  /** The user backed out of Apple's sheet. Silent by design — they know. */
  | { status: 'cancelled' }
  /** Reached a store and it refused. Worth telling the user about. */
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
  readonly product: Product;
};

/**
 * The plans on offer under one name.
 *
 * Named because this app sells the same year at three prices — the standard
 * one, the win-back one, and the referral one. Apple has no concept of "the
 * same product, cheaper": a discount is a different product, or a promotional
 * offer on one. RevenueCat models that as offerings, so each price is an
 * offering configured in its dashboard and the app asks for one by name rather
 * than doing arithmetic on a constant.
 */
export type Offering = {
  readonly identifier: string;
  /** Auto-renewing, billed monthly. */
  readonly monthly: Plan | null;
  /**
   * The twelve-week programme: paid once, does not renew.
   *
   * A non-renewing purchase rather than a subscription, because that is what it
   * is — the plan is twelve weeks long and then it is over. Apple cannot put a
   * free trial on one, which is why there is no trial on either product: a
   * trial on the monthly alone would push people onto the weaker fit.
   */
  readonly program: Plan | null;
};

/** The offerings this app asks for. Each must exist in the RevenueCat
 * dashboard; a missing one resolves to null and the sheet falls back to the
 * standard price rather than inventing a discount. */
export const OFFERINGS = {
  standard: 'default',
  /** The cheaper programme, shown to somebody who left and came back. Never on
   * a first view — see the paywall. */
  offer: 'offer',
} as const;

/** The package identifier the programme sits under in every offering. Monthly
 * uses RevenueCat's own `$rc_monthly`. */
export const PROGRAM_PACKAGE = 'program';

/**
 * The programme's length in months, for comparing it with the subscription.
 *
 * Twelve weeks is three months. Written down because the paywall's saving
 * figure depends on it, and "3" appearing loose in that arithmetic is how a
 * plan that becomes sixteen weeks leaves a badge quoting the old maths.
 */
export const PROGRAM_MONTHS = 3;

/**
 * How long a programme purchase grants access for.
 *
 * Ninety days, not the eighty-four the plan actually runs. Somebody who buys on
 * a Friday and starts on Monday should not lose the days in between, and the
 * spare week costs nothing but removes the support ticket.
 */
export const PROGRAM_ACCESS_DAYS = 90;

export type Purchases = {
  /** Whether a real store is wired up. Everything below is a no-op when false. */
  readonly configured: boolean;
  /**
   * The named offering, with the store's own prices.
   *
   * Null when there is no store, or when the dashboard has no offering by that
   * name. Callers must handle null — that is what keeps a missing `boosted`
   * offering from showing a discount the store will not honour.
   */
  offering(identifier: string): Promise<Offering | null>;
  /** Buy a plan from an offering. The token comes from `offering()`, so the
   * price the user was shown is the price being charged. */
  buy(plan: Plan): Promise<PurchaseResult>;
  restore(): Promise<RestoreResult>;

  /**
   * Whether the subscription is live, right now, synchronously.
   *
   * Synchronous on purpose. Anything gated on this is gated during render, and
   * a promise here would mean every gated screen flickers through a
   * not-entitled frame before the answer lands — which is the frame where a
   * paying customer sees the paywall.
   */
  entitled(): boolean;
  /** Fires whenever `entitled()` would return something new. The store pushes
   * these: a subscription can lapse, or renew, while the app is open. */
  subscribe(listener: () => void): () => void;
  /** Re-ask the store. Resolves once `entitled()` is current. */
  refresh(): Promise<void>;

  /**
   * When programme access runs out, or null if none was bought.
   *
   * Computed from the purchase date rather than read from an entitlement,
   * because RevenueCat cannot expire a non-renewing purchase on its own: the
   * entitlement it grants stays active indefinitely. Ninety days from the
   * latest programme transaction is the real end.
   *
   * Depends on the device clock, which a determined user can move. Accepted:
   * the alternative is a server, and this is not worth one.
   */
  programEndsAt(): Date | null;

  /**
   * Extra days of programme access, earned outside the store.
   *
   * Invites: each friend who joins with the user's code adds free time to the
   * programme they hold. The store knows nothing about that — it is decided by
   * the invite server — so it is handed in rather than looked up, and this
   * module never has to know where it came from. Moves `programEndsAt()` and,
   * if that crosses now, `entitled()` with it.
   *
   * Only lengthens a programme that was bought. With none, there is nothing
   * for the days to be added to, and they wait until there is.
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
  restore: async () => ({ status: 'unavailable' }),
  // Not entitled, rather than entitled. An unconfigured build is a build whose
  // store was never reached, and the safe reading of "we don't know" is the one
  // that does not hand out the paid product to everybody.
  entitled: () => false,
  subscribe: () => () => {},
  refresh: async () => {},
  programEndsAt: () => null,
  setBonusDays: () => {},
};

/**
 * The product identifiers the standard offering is expected to contain.
 *
 * Nothing buys these directly any more — purchases go through a `Plan` from an
 * offering, so the price shown and the product charged come from one fetch.
 * They are kept as the written-down contract with App Store Connect, and as
 * what a diagnostic can check the dashboard against.
 */
export const PRODUCTS = {
  monthly: 'sub_monthly_2499',
  program: 'pass_12wk_4999',
  /** The same programme at the returning-visitor price. Same display name in
   * App Store Connect, because it is the same thing. */
  programOffer: 'pass_12wk_1499',
} as const;

/** Both programme products, for the expiry check — a purchase of either grants
 * the same access for the same length of time. */
export const PROGRAM_IDS: readonly string[] = [PRODUCTS.program, PRODUCTS.programOffer];

/**
 * The identifier configured in the RevenueCat dashboard.
 *
 * One entitlement for the whole app: there are no tiers of access here, only
 * tiers of billing. That is also why the adapter treats *any* active
 * entitlement as access — with a single tier there is nothing to confuse it
 * with, and a name that drifts out of step with the dashboard should not lock
 * out someone who has paid. This constant is what the app asks for first, and
 * what the development warning names when the store answers with something
 * else.
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
 * Here rather than in the paywall because two screens now sell these plans: the
 * paywall and the programme-expiry screen. A second copy of the list is a second
 * thing to forget when a price changes, and the failure would be two screens
 * quoting different figures for the same product.
 */
export const PRINTED_PRICES = {
  /** Auto-renewing, billed monthly. */
  monthly: 24.99,
  /** Twelve weeks, paid once, no renewal. */
  program: 49.99,
  /** The same twelve weeks at the returning-visitor price. */
  programOffer: 14.99,
} as const;
