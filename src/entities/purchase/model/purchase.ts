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
};

export type Purchases = {
  /** Whether a real store is wired up. Everything below is a no-op when false. */
  readonly configured: boolean;
  /** Prices as the store reports them, keyed by product id. Empty when
   * unconfigured, which is what makes the caller fall back to its own figures. */
  products(): Promise<readonly Product[]>;
  buy(productId: string): Promise<PurchaseResult>;
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
  products: async () => [],
  buy: async () => ({ status: 'unavailable' }),
  restore: async () => ({ status: 'unavailable' }),
  // Not entitled, rather than entitled. An unconfigured build is a build whose
  // store was never reached, and the safe reading of "we don't know" is the one
  // that does not hand out the paid product to everybody.
  entitled: () => false,
  subscribe: () => () => {},
  refresh: async () => {},
};

/** Product identifiers the paywall asks for, and the entitlement the store
 * grants when either of them is bought. The entitlement is what the app checks
 * — products change, get renamed, get A/B tested; the thing they unlock does
 * not. */
export const PRODUCTS = {
  yearly: 'walkito.yearly',
  monthly: 'walkito.monthly',
} as const;

/** The identifier configured in the RevenueCat dashboard. One entitlement for
 * the whole app: there are no tiers of access here, only tiers of billing. */
export const ENTITLEMENT = 'pro';
