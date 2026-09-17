import Purchases, { LOG_LEVEL, type CustomerInfo, type PurchasesError } from 'react-native-purchases';

import {
  ENTITLEMENT,
  PRODUCTS,
  type Product,
  type Purchases as Store,
  type PurchaseResult,
  type RestoreResult,
} from './purchase';

/**
 * The real store, behind the contract the paywall already talks to.
 *
 * Only this file imports `react-native-purchases`. That is the point of the
 * seam: the paywall, the gate and the tests all speak `Purchases`, so swapping
 * RevenueCat for StoreKit directly — or for nothing, on the simulator — touches
 * one binding rather than every screen that sells something.
 */

/**
 * Whether the subscription is live, cached from the last thing the store said.
 *
 * Held here rather than re-read on every call because the check is synchronous
 * and `getCustomerInfo` is not. RevenueCat keeps its own cache and pushes
 * updates through the listener below, so this is a mirror of that cache rather
 * than a second source of truth.
 */
let active = false;
const listeners = new Set<() => void>();

function announce(next: boolean) {
  if (next === active) return;
  active = next;
  listeners.forEach((fire) => fire());
}

function entitledIn(info: CustomerInfo): boolean {
  return info.entitlements.active[ENTITLEMENT] != null;
}

/**
 * Whether a thrown purchase error was the user closing Apple's sheet.
 *
 * RevenueCat rejects on cancellation rather than resolving, so a `try` that
 * treats every rejection as a failure would tell somebody who changed their
 * mind that their payment did not go through — a message about a charge that
 * was never attempted.
 */
function wasCancelled(error: unknown): boolean {
  return (error as PurchasesError | undefined)?.userCancelled === true;
}

function messageFrom(error: unknown): string {
  const text = (error as { message?: unknown } | undefined)?.message;
  return typeof text === 'string' && text.length > 0
    ? text
    : 'That didn’t go through. No charge was made.';
}

/**
 * Start the SDK and begin tracking entitlement.
 *
 * Called once, from the provider. Returns nothing useful — the first honest
 * answer arrives through `subscribe`, and callers that need to wait for it have
 * `refresh`.
 */
export async function startRevenueCat(apiKey: string, verbose: boolean): Promise<void> {
  // Verbose only in development. The SDK logs every request at this level,
  // including the store's replies, which is what you want while wiring a
  // paywall and noise in a shipped build.
  Purchases.setLogLevel(verbose ? LOG_LEVEL.VERBOSE : LOG_LEVEL.WARN);
  Purchases.configure({ apiKey });

  // Registered before the first fetch, so a renewal that lands between
  // configure and the fetch is not missed.
  Purchases.addCustomerInfoUpdateListener((info) => announce(entitledIn(info)));

  await refreshEntitlement();
}

async function refreshEntitlement(): Promise<void> {
  try {
    announce(entitledIn(await Purchases.getCustomerInfo()));
  } catch {
    // Left at whatever it was. A network blip is not evidence that somebody
    // stopped paying, and revoking access on a failed read would lock a paying
    // customer out of the app on a train.
  }
}

export const revenueCatStore: Store = {
  configured: true,

  async products() {
    try {
      // Asked for by name. An empty array asks for nothing and returns
      // nothing, which reads as "the store has no prices" rather than as the
      // mistake it is.
      const found = await Purchases.getProducts([PRODUCTS.yearly, PRODUCTS.monthly]);
      return found.map(
        (product): Product => ({
          id: product.identifier,
          price: product.price,
          currencyCode: product.currencyCode,
        }),
      );
    } catch {
      // The paywall falls back to its own printed figures when this is empty,
      // which is better than a screen that cannot render because a price is
      // missing.
      return [];
    }
  },

  async buy(productId: string): Promise<PurchaseResult> {
    try {
      const [product] = await Purchases.getProducts([productId]);
      if (product == null) {
        return { status: 'failed', message: 'That plan isn’t available right now.' };
      }
      const { customerInfo } = await Purchases.purchaseStoreProduct(product);
      announce(entitledIn(customerInfo));
      // Reported against the entitlement rather than against the call
      // returning. A purchase that completes without granting the entitlement
      // is a misconfigured dashboard, and saying "purchased" there would leave
      // the user paid-up and still looking at the paywall.
      return entitledIn(customerInfo)
        ? { status: 'purchased' }
        : { status: 'failed', message: 'The purchase went through but didn’t unlock. Try Restore.' };
    } catch (error) {
      if (wasCancelled(error)) return { status: 'cancelled' };
      return { status: 'failed', message: messageFrom(error) };
    }
  },

  async restore(): Promise<RestoreResult> {
    try {
      const info = await Purchases.restorePurchases();
      announce(entitledIn(info));
      return entitledIn(info) ? { status: 'restored' } : { status: 'nothing-found' };
    } catch (error) {
      return { status: 'failed', message: messageFrom(error) };
    }
  },

  entitled: () => active,

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  refresh: refreshEntitlement,
};
