import Purchases, {
  LOG_LEVEL,
  type CustomerInfo,
  type PurchasesError,
  type PurchasesOffering,
  type PurchasesPackage,
} from 'react-native-purchases';

import {
  ENTITLEMENT,
  type Offering,
  type Plan,
  type Product,
  type Purchases as Store,
  type PurchaseResult,
  type RestoreResult,
} from './purchase';

/**
 * The real store, behind the contract the paywall talks to.
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

/**
 * The packages behind the tokens handed out by `offering()`.
 *
 * A `Plan` carries a string rather than the SDK's package object, so that the
 * contract stays free of RevenueCat's types and the paywall cannot reach into
 * one. This is where the string is exchanged back.
 */
const packages = new Map<string, PurchasesPackage>();

function announce(next: boolean) {
  if (next === active) return;
  active = next;
  listeners.forEach((fire) => fire());
}

/**
 * Whether this customer has access.
 *
 * The named entitlement first, then *any* active entitlement.
 *
 * The fallback is not laxity. This app sells one level of access — see the note
 * on `ENTITLEMENT` — so an active entitlement under any name means the same
 * thing: somebody paid, and RevenueCat says the purchase is live. There is no
 * second tier to be confused with, and no way to hold an active entitlement
 * without a transaction behind it.
 *
 * What it buys is that a dashboard rename cannot lock a paying customer out of
 * the app they are paying for. That is not hypothetical here: the dashboard
 * holds `waltkito_pro` and `premium`, and the app was asking for `pro` — every
 * purchase completed and nothing unlocked. A constant in the bundle and a
 * string typed into a web form will drift, and when they do the failure should
 * be a warning in a log rather than a refund request.
 *
 * Development still complains, loudly, so the drift gets fixed rather than
 * absorbed forever.
 */
function entitledIn(info: CustomerInfo): boolean {
  if (info.entitlements.active[ENTITLEMENT] != null) return true;

  const other = Object.keys(info.entitlements.active);
  if (other.length === 0) return false;

  if (__DEV__) {
    console.warn(
      `[purchases] Unlocked on "${other.join('", "')}" — but ENTITLEMENT is "${ENTITLEMENT}", ` +
        'which the store did not return. Set ENTITLEMENT in ' +
        'entities/purchase/model/purchase.ts to the identifier the dashboard actually uses.',
    );
  }
  return true;
}

/**
 * Says why a completed purchase did not unlock anything.
 *
 * The check above is strict on purpose — no entitlement, no access — but a
 * strict check with no diagnosis is a dead end: the store reports success, the
 * app says no, and nothing on either side names the entitlement they disagree
 * about. That is a dashboard hunt, and it is the first thing that happens to
 * anyone wiring RevenueCat up for the first time.
 *
 * Development only. It prints what the store actually returned against what the
 * app asked for, which is almost always enough to see the mismatch at a glance.
 */
function explainMissingEntitlement(info: CustomerInfo): void {
  if (!__DEV__) return;
  const active = Object.keys(info.entitlements.active);
  const known = Object.keys(info.entitlements.all);
  console.error(
    `[purchases] The purchase completed but granted no "${ENTITLEMENT}" entitlement.\n` +
      `  bought        : ${info.activeSubscriptions.join(', ') || '(nothing active)'}\n` +
      `  entitlements  : active [${active.join(', ') || 'none'}], known [${known.join(', ') || 'none'}]\n` +
      `  expected      : "${ENTITLEMENT}"\n` +
      'Attach the products to an entitlement with that identifier in the RevenueCat ' +
      'dashboard (Product catalog → Entitlements), or change ENTITLEMENT in ' +
      'entities/purchase/model/purchase.ts to match the one you created.',
  );
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

/** A package as the app sees it: a price to print and a token to buy with. */
function toPlan(offeringId: string, pkg: PurchasesPackage | null): Plan | null {
  if (pkg == null) return null;
  const token = `${offeringId}:${pkg.identifier}`;
  packages.set(token, pkg);
  const product: Product = {
    id: pkg.product.identifier,
    price: pkg.product.price,
    currencyCode: pkg.product.currencyCode,
    // The store's own string. Formatting `price` by hand gets the symbol on the
    // wrong side in half of Europe and the separator wrong in the other half.
    display: pkg.product.priceString,
  };
  return { token, product };
}

function toOffering(found: PurchasesOffering): Offering {
  return {
    identifier: found.identifier,
    yearly: toPlan(found.identifier, found.annual),
    monthly: toPlan(found.identifier, found.monthly),
  };
}

/**
 * Start the SDK and begin tracking entitlement.
 *
 * Called once, from the provider. Returns nothing useful — the first honest
 * answer arrives through `subscribe`, and callers that need to wait for it have
 * `refresh`.
 */
export async function startRevenueCat(apiKey: string, verbose: boolean): Promise<void> {
  // Verbose only outside production. The SDK logs every request at this level,
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

  async offering(identifier: string): Promise<Offering | null> {
    try {
      const all = await Purchases.getOfferings();
      // By name first, then whatever the dashboard marks current. The fallback
      // matters for `default`, which RevenueCat exposes as `current` rather
      // than under that key in some dashboard configurations.
      const found = all.all[identifier] ?? (identifier === 'default' ? all.current : null);
      return found == null ? null : toOffering(found);
    } catch {
      // Null, not an empty offering. The paywall distinguishes "no store" from
      // "a store with nothing in it", and only the first is allowed to fall
      // back to printed figures.
      return null;
    }
  },

  async buy(plan: Plan): Promise<PurchaseResult> {
    const pkg = packages.get(plan.token);
    if (pkg == null) {
      // The token came from an offering fetched in this process, so a miss
      // means the app is trying to buy something it never displayed.
      return { status: 'failed', message: 'That plan isn’t available right now.' };
    }
    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      announce(entitledIn(customerInfo));
      // Reported against the entitlement rather than against the call
      // returning. A purchase that completes without granting the entitlement
      // is a misconfigured dashboard, and saying "purchased" there would leave
      // the user paid-up and still looking at the paywall.
      if (entitledIn(customerInfo)) return { status: 'purchased' };
      // Bought, but nothing was granted. Almost always a dashboard that has no
      // entitlement by this name, or products not attached to it.
      explainMissingEntitlement(customerInfo);
      return {
        status: 'failed',
        message: 'The purchase went through but didn’t unlock. Try Restore.',
      };
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
