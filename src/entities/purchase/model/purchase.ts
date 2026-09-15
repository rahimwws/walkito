/**
 * The seam between the paywall and a store.
 *
 * There is no in-app-purchase SDK in this project — no StoreKit binding, no
 * `react-native-iap`, no RevenueCat. That is a deliberate gap, not an oversight
 * to paper over: choosing one means product IDs in App Store Connect, a
 * sandbox tester, and a receipt-validation decision, none of which can be
 * invented from inside the app.
 *
 * So this file is the shape of the answer rather than the answer. The paywall
 * talks to `purchases` and nothing else, every state it can show is already
 * wired, and the day an SDK arrives it replaces exactly one object.
 *
 * The unconfigured adapter reports `unavailable` rather than failing. That
 * distinction is the whole point: a paywall that says "that didn't go through"
 * when no store was ever contacted is lying about a charge that was never
 * attempted, and the screen behaves today exactly as it did before — it closes.
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
};

/**
 * The stand-in. Answers honestly and charges nobody.
 *
 * Every method resolves `unavailable` instead of throwing, so no call site
 * needs a try/catch to stay upright and no screen can be left mid-spinner by
 * an exception nobody caught.
 */
const unconfigured: Purchases = {
  configured: false,
  products: async () => [],
  buy: async () => ({ status: 'unavailable' }),
  restore: async () => ({ status: 'unavailable' }),
};

/**
 * The one the app talks to.
 *
 * Swap this binding for the real adapter and the paywall is done — its
 * in-flight, failed, cancelled, restored and nothing-found branches are all
 * already written against this contract.
 */
export const purchases: Purchases = unconfigured;

/** Product identifiers the paywall asks for. They do not exist in App Store
 * Connect yet; they are here so the two tiers have one name each rather than
 * being addressed positionally. */
export const PRODUCTS = {
  yearly: 'tread.yearly',
  monthly: 'tread.monthly',
} as const;
