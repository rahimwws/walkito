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
  readonly yearly: Plan | null;
  readonly monthly: Plan | null;
};

/** The offerings this app asks for. Each must exist in the RevenueCat
 * dashboard; a missing one resolves to null and the sheet falls back to the
 * standard price rather than inventing a discount. */
export const OFFERINGS = {
  standard: 'default',
  /** The price the win-back notification promised. */
  boosted: 'boosted',
  /** The price an accepted invite earns. */
  invited: 'invited',
} as const;

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
  yearly: 'walkito.yearly',
  monthly: 'walkito.monthly',
} as const;

/** The identifier configured in the RevenueCat dashboard. One entitlement for
 * the whole app: there are no tiers of access here, only tiers of billing. */
export const ENTITLEMENT = 'pro';
