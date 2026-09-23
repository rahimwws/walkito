import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import Purchases, {
  LOG_LEVEL,
  type CustomerInfo,
  type PurchasesError,
  type PurchasesOffering,
  type PurchasesPackage,
} from 'react-native-purchases';

import { decideAccess, programEnd as programEndOf } from './access';
import {
  ENTITLEMENT,
  PROGRAM_PACKAGE,
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

/** The last verdict, on this device. */
const ENTITLED_KEY = 'purchase/entitled';
/** The last invite bonus handed in, so a cold start dates access correctly
 * before the invite server has been asked again. */
const BONUS_KEY = 'purchase/bonus-days';

/**
 * Whether the subscription is live, cached from the last thing the store said.
 *
 * Held here rather than re-read on every call because the check is synchronous
 * and `getCustomerInfo` is not. RevenueCat keeps its own cache and pushes
 * updates through the listener below, so this is a mirror of that cache rather
 * than a second source of truth.
 *
 * **Seeded from storage, and that is not an optimisation.** `configure()` and
 * the first `getCustomerInfo()` are both asynchronous, so on a cold start this
 * used to begin at `false` and stay there for as long as the round trip took.
 * The gate in `root-layout.tsx` reads it on the first frame and its guard is
 * `onboarded && !entitled` — so every paying customer was shown the paywall
 * until RevenueCat answered, then had it yanked away. The layout's own comment
 * promised that could not happen ("synchronous and correct on the first frame
 * — the store keeps a cached answer"); the cached answer it described was
 * RevenueCat's, which is only reachable through the very call being waited on.
 *
 * MMKV is memory-mapped, so this read is synchronous and the first paint gets
 * the right stack — the same trick `useOnboarded` uses for the questionnaire
 * flag, and for the same reason.
 *
 * It is deliberately a *mirror*, never the authority: the value is overwritten
 * by the first real answer, so a lapsed subscription costs one frame of the
 * tabs rather than permanent free access. A user who paid on another device
 * still sees the wall until a restore, which is correct — this device has no
 * evidence yet.
 */
let active = kv.getBoolean(ENTITLED_KEY) ?? false;
/** Mirrors `programEnd` from the last customer info, so the contract's
 * synchronous getter has an answer without a round trip. */
let lastEnd: Date | null = null;
/** Free days from invites — see `setBonusDays` on the contract. */
let bonusDays = kv.getNumber(BONUS_KEY) ?? 0;
/** The last customer info, so a change in the bonus can be re-judged without
 * a round trip to the store. */
let lastInfo: CustomerInfo | null = null;
const listeners = new Set<() => void>();

/**
 * The packages behind the tokens handed out by `offering()`.
 *
 * A `Plan` carries a string rather than the SDK's package object, so that the
 * contract stays free of RevenueCat's types and the paywall cannot reach into
 * one. This is where the string is exchanged back.
 */
const packages = new Map<string, PurchasesPackage>();

function announce(info: CustomerInfo) {
  lastInfo = info;
  const end = programEnd(info);
  // A moved end date is news even when access did not flip: the expiry
  // reminder is scheduled from it, and a friend's free weeks have to push that
  // reminder back rather than leave it firing on the old date.
  const endMoved = end?.getTime() !== lastEnd?.getTime();
  lastEnd = end;
  const next = entitledIn(info);
  // Written on every answer, including one that agrees with the cache: the
  // early return below skips the notify, not the persistence, and a verdict
  // that never changed still has to survive the next cold start.
  kv.set(ENTITLED_KEY, next);
  if (next === active && !endMoved) return;
  active = next;
  listeners.forEach((fire) => fire());
}

/**
 * The access calculation, in `access.ts`.
 *
 * Pure and SDK-free so it can be tested: this file imports the native module
 * and cannot load under bun, which is what left the one piece of arithmetic
 * deciding whether somebody paid untested. `CustomerInfo` structurally
 * satisfies `CustomerFacts`, so it passes straight through.
 */
function programEnd(info: CustomerInfo): Date | null {
  return programEndOf(info, bonusDays);
}

function entitledIn(info: CustomerInfo): boolean {
  const verdict = decideAccess(info, Date.now(), bonusDays);

  if (__DEV__ && verdict.reason === 'other-entitlement') {
    console.warn(
      `[purchases] Unlocked on "${Object.keys(info.entitlements.active).join('", "')}" — but ` +
        `ENTITLEMENT is "${ENTITLEMENT}", which the store did not return. Set ENTITLEMENT in ` +
        'entities/purchase/model/purchase.ts to the identifier the dashboard actually uses.',
    );
  }
  if (__DEV__ && verdict.reason === 'program-undated') {
    console.warn(
      '[purchases] A programme product granted an entitlement but no purchase date came ' +
        'back, so access cannot be dated and is being refused. Check ' +
        'nonSubscriptionTransactions in the customer info.',
    );
  }

  return verdict.entitled;
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
  // The programme is a custom package, so it is looked up by identifier rather
  // than read off one of RevenueCat's named slots — `annual`, `monthly` and the
  // rest only cover its own package types, and a non-renewing pass is not one.
  const program =
    found.availablePackages.find((pkg) => pkg.identifier === PROGRAM_PACKAGE) ?? null;
  return {
    identifier: found.identifier,
    monthly: toPlan(found.identifier, found.monthly),
    program: toPlan(found.identifier, program),
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
  Purchases.addCustomerInfoUpdateListener((info) => announce(info));

  await refreshEntitlement();
}

async function refreshEntitlement(): Promise<void> {
  try {
    announce(await Purchases.getCustomerInfo());
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
      return {
        status: 'failed',
        // Non-React: resolved per call rather than at module scope, so a
        // language switched after launch is reflected.
        message: translatorFor(getLanguage())('purchase.unavailable'),
      };
    }
    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      announce(customerInfo);
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
      announce(info);
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

  programEndsAt: () => lastEnd,

  setBonusDays(days) {
    const next = Math.max(0, Math.floor(days));
    if (!Number.isFinite(next) || next === bonusDays) return;
    bonusDays = next;
    kv.set(BONUS_KEY, next);
    // Re-judged on the spot against what the store last said: a friend joining
    // can bring back access that had just run out, and waiting for the next
    // store round trip to notice would leave the user staring at the renewal
    // screen with free weeks already in hand.
    if (lastInfo != null) announce(lastInfo);
  },
};
