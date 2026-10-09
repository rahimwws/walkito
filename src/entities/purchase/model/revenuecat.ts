import { identify, setPerson, track, type PlanTier, type PurchaseProps } from '@/shared/lib/analytics';
import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { currentUserId, supabase } from '@/shared/lib/supabase';
import { Platform } from 'react-native';
import Purchases, {
  LOG_LEVEL,
  PACKAGE_TYPE,
  PRODUCT_CATEGORY,
  PURCHASES_ERROR_CODE,
  type CustomerInfo,
  type PurchasesError,
  type PurchasesOffering,
  type PurchasesPackage,
  type PurchasesStoreProduct,
} from 'react-native-purchases';

import { assistantSource, type AssistantSource } from './assistant';
import { decideAccess, hadAccess as hadAccessOf, passEnd as passEndOf } from './access';
import {
  ENTITLEMENT,
  PACKAGES,
  type Offering,
  type Plan,
  type PlanPeriod,
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
/** The last invite bonus handed in, so a cold start dates a legacy pass
 * correctly before the invite server has been asked again. */
const BONUS_KEY = 'purchase/bonus-days';
/** Whether this customer has ever held access, so the first frame can tell a
 * lapsed subscriber from a new one — see `hadAccess` on the contract. */
const HAD_ACCESS_KEY = 'purchase/had-access';

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
/** Mirrors `hadAccess` from the last customer info, seeded from storage for
 * the same first-frame reason as `active`. */
let had = kv.getBoolean(HAD_ACCESS_KEY) ?? false;
/** Mirrors `passEnd` from the last customer info, so the contract's
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
const packages = new Map<string, { pkg: PurchasesPackage; period: PlanPeriod }>();

/** Whether this person has been marked as a sandbox buyer in analytics yet. */
let flaggedSandbox = false;

function announce(info: CustomerInfo) {
  lastInfo = info;
  flagSandbox(info);
  const end = passEndOf(info, bonusDays);
  // A moved end date is news even when access did not flip: the pass expiry
  // reminder is scheduled from it, and a friend's free days have to push that
  // reminder back rather than leave it firing on the old date.
  const endMoved = end?.getTime() !== lastEnd?.getTime();
  lastEnd = end;
  const next = entitledIn(info);
  const nextHad = hadAccessOf(info, bonusDays);
  // Written on every answer, including one that agrees with the cache: the
  // early return below skips the notify, not the persistence, and a verdict
  // that never changed still has to survive the next cold start.
  kv.set(ENTITLED_KEY, next);
  kv.set(HAD_ACCESS_KEY, nextHad);
  if (next === active && nextHad === had && !endMoved) return;
  active = next;
  had = nextHad;
  listeners.forEach((fire) => fire());
}

/**
 * Marks a person who bought through a sandbox — TestFlight, Xcode, the Test
 * Store — so PostHog can leave them out of revenue.
 *
 * RevenueCat's server-side events say which store a purchase came from but not
 * whether it was real: a TestFlight purchase arrives as `APP_STORE`, identical
 * to a paying customer's. The SDK does know, per entitlement, so it is written
 * onto the person, and the project's test-account filter excludes
 * `purchases_sandbox = true`. Once per process is enough; the flag never goes
 * back to false.
 */
function flagSandbox(info: CustomerInfo): void {
  if (flaggedSandbox) return;
  const sandbox = Object.values(info.entitlements.all).some((ent) => ent.isSandbox);
  if (!sandbox) return;
  flaggedSandbox = true;
  setPerson({ purchases_sandbox: true });
}

/**
 * The access calculation, in `access.ts`.
 *
 * Pure and SDK-free so it can be tested: this file imports the native module
 * and cannot load under bun, which is what left the one piece of arithmetic
 * deciding whether somebody paid untested. `CustomerInfo` structurally
 * satisfies `CustomerFacts`, so it passes straight through.
 */
function entitledIn(info: CustomerInfo): boolean {
  const verdict = decideAccess(info, Date.now(), bonusDays);

  if (__DEV__ && verdict.reason === 'other-entitlement') {
    console.warn(
      `[purchases] Unlocked on "${Object.keys(info.entitlements.active).join('", "')}" — but ` +
        `ENTITLEMENT is "${ENTITLEMENT}", which the store did not return. Set ENTITLEMENT in ` +
        'entities/purchase/model/purchase.ts to the identifier the dashboard actually uses.',
    );
  }
  if (
    __DEV__ &&
    verdict.reason === 'subscription' &&
    info.entitlements.active[ENTITLEMENT] == null
  ) {
    // Let in on the store's word, which is right for the customer — but the
    // dashboard is missing a link, and RevenueCat's own charts, webhooks and
    // the PostHog integration all key on the entitlement.
    console.warn(
      `[purchases] Subscribed to "${info.activeSubscriptions.join('", "')}" but no ` +
        `"${ENTITLEMENT}" entitlement is active. Attach the product to "${ENTITLEMENT}" in ` +
        'the RevenueCat dashboard (Product catalog → Entitlements).',
    );
  }
  if (__DEV__ && verdict.reason === 'pass-undated') {
    console.warn(
      '[purchases] A legacy pass granted an entitlement but no purchase date came ' +
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

/**
 * Whether a thrown purchase error is a purchase waiting on somebody else.
 *
 * Ask to Buy, or a bank's own confirmation step. RevenueCat rejects with it,
 * but nothing failed and nothing was charged: if the parent or the bank says
 * yes, the entitlement arrives later through the customer info listener.
 */
function wasPending(error: unknown): boolean {
  return (error as PurchasesError | undefined)?.code === PURCHASES_ERROR_CODE.PAYMENT_PENDING_ERROR;
}

/**
 * What to tell the user about a store error, in their language.
 *
 * Never the SDK's own message: that is English whatever the app is set to, and
 * written for a developer ("The receipt is not valid"). The few codes a person
 * can act on get a sentence that says what to do; everything else gets the
 * one thing that is always true of a failed purchase, that nothing was taken.
 */
function messageFor(error: unknown): string {
  // Non-React: resolved per call, so a language switched after launch is
  // reflected.
  const t = translatorFor(getLanguage());
  switch ((error as PurchasesError | undefined)?.code) {
    case PURCHASES_ERROR_CODE.NETWORK_ERROR:
    case PURCHASES_ERROR_CODE.OFFLINE_CONNECTION_ERROR:
    case PURCHASES_ERROR_CODE.STORE_PROBLEM_ERROR:
    case PURCHASES_ERROR_CODE.PRODUCT_REQUEST_TIMED_OUT_ERROR:
    case PURCHASES_ERROR_CODE.UNEXPECTED_BACKEND_RESPONSE_ERROR:
    case PURCHASES_ERROR_CODE.UNKNOWN_BACKEND_ERROR:
    case PURCHASES_ERROR_CODE.API_ENDPOINT_BLOCKED:
      return t('offer.storeUnreachable');
    case PURCHASES_ERROR_CODE.PURCHASE_NOT_ALLOWED_ERROR:
      return t('offer.purchaseNotAllowed');
    case PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR:
      return t('offer.planUnavailable');
    case PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR:
      return t('offer.alreadyOwned');
    default:
      return t('offer.purchaseFailed');
  }
}

/** A package as the app sees it: a price to print and a token to buy with. */
function toPlan(
  offeringId: string,
  pkg: PurchasesPackage | null,
  period: PlanPeriod,
): Plan | null {
  if (pkg == null) return null;
  const token = `${offeringId}:${pkg.identifier}`;
  packages.set(token, { pkg, period });
  const product: Product = {
    id: pkg.product.identifier,
    price: pkg.product.price,
    currencyCode: pkg.product.currencyCode,
    // The store's own string. Formatting `price` by hand gets the symbol on the
    // wrong side in half of Europe and the separator wrong in the other half.
    display: pkg.product.priceString,
  };
  return { token, period, product };
}

/**
 * One of the two plans in an offering.
 *
 * RevenueCat's own slot first — `$rc_annual` and `$rc_weekly` are what the
 * dashboard is expected to use (see `PACKAGES`). The fallbacks keep a plan on
 * sale when a package was created under a custom identifier: the same
 * identifier typed by hand, then any package whose product bills over that
 * period. Without them a dashboard typo shows as a plan that is simply not
 * there, which is the hardest version of the mistake to notice.
 */
function slot(
  found: PurchasesOffering,
  period: PlanPeriod,
): PurchasesPackage | null {
  const named = period === 'annual' ? found.annual : found.weekly;
  if (named != null) return named;
  const id = PACKAGES[period];
  const type = period === 'annual' ? PACKAGE_TYPE.ANNUAL : PACKAGE_TYPE.WEEKLY;
  const iso = period === 'annual' ? 'P1Y' : 'P1W';
  return (
    found.availablePackages.find((pkg) => pkg.identifier === id || pkg.packageType === type) ??
    found.availablePackages.find((pkg) => pkg.product.subscriptionPeriod === iso) ??
    null
  );
}

function toOffering(found: PurchasesOffering): Offering {
  return {
    identifier: found.identifier,
    annual: toPlan(found.identifier, slot(found, 'annual'), 'annual'),
    weekly: toPlan(found.identifier, slot(found, 'weekly'), 'weekly'),
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

  void linkAnalytics();
  void collectAdAttribution();
  const assistant = assistantSource();
  if (assistant != null) void setAssistantSource(assistant);

  await refreshEntitlement();
}

/**
 * Hands RevenueCat the Apple Ads attribution token, on iOS.
 *
 * AdServices (iOS 14.3+) says whether this install came from an Apple Ads tap,
 * and RevenueCat resolves the token to the campaign, ad group and keyword —
 * which is what lets its charts say which search term brought a paying
 * subscriber, not only an install. Standard attribution needs no App Tracking
 * Transparency prompt, and the app shows none. The keyword level also needs the
 * Apple AdServices integration in the RevenueCat dashboard, signed in to the
 * Apple Ads account. Android has no equivalent; the call is iOS-only.
 */
async function collectAdAttribution(): Promise<void> {
  if (Platform.OS !== 'ios') return;
  try {
    await Purchases.enableAdServicesAttributionTokenCollection();
  } catch {
    // Attribution is never worth failing a store start over.
  }
}

/**
 * One id for the same person in RevenueCat and in PostHog.
 *
 * PostHog is identified *as* the RevenueCat app user id, and RevenueCat is told
 * so through `$posthogUserId`. With both pointing at one key, the revenue
 * events RevenueCat sends PostHog from its server — renewals, refunds,
 * cancellations, all of which happen with the app closed — land on the person
 * whose onboarding and acquisition source are already there. Without it they
 * arrive as strangers and the funnel stops at the paywall.
 */
async function linkAnalytics(): Promise<void> {
  try {
    const id = await Purchases.getAppUserID();
    identify(id);
    await Purchases.setAttributes({ $posthogUserId: id });
    void linkBackend(id);
  } catch {
    // Analytics is never worth failing a store start over.
  }
}

/**
 * Tells our backend which RevenueCat customer this device is.
 *
 * RevenueCat's webhook names the buyer by the RevenueCat id, and the email
 * scheduler knows users by the Supabase id; `link_revenuecat` joins the two, so
 * a purchase stops the offer emails the moment the webhook lands. The Supabase
 * id is also sent to RevenueCat as an attribute, for looking a customer up by
 * hand. Neither changes the RevenueCat id itself, which PostHog is keyed on.
 */
async function linkBackend(rcId: string): Promise<void> {
  const client = supabase;
  if (client == null) return;
  try {
    const uid = await currentUserId();
    if (uid == null) return;
    await client.rpc('link_revenuecat', { p_app_user_id: rcId });
    await Purchases.setAttributes({ supabase_user_id: uid });
  } catch {
    // The next launch links again.
  }
}

/**
 * Where somebody said they heard about the app, as RevenueCat's media source.
 *
 * The reserved attribute rather than a custom one, because it is the one
 * RevenueCat's own charts can split revenue and conversion by — "which channel
 * pays" answered in the dashboard that holds the money, with no export.
 */
export async function setAcquisitionSource(source: string): Promise<void> {
  try {
    await Purchases.setMediaSource(source);
  } catch {
    // Not configured yet, or offline. The answer is also on the PostHog person.
  }
}

/**
 * Which AI assistant sent this person, as the custom `acq_source` attribute.
 *
 * A custom attribute rather than the media source: the media source already
 * carries the onboarding's "how did you find us" answer, and the two should not
 * overwrite each other. `$posthogUserId` is untouched.
 */
export async function setAssistantSource(source: AssistantSource): Promise<void> {
  try {
    await Purchases.setAttributes({ acq_source: source });
  } catch {
    // Not configured yet, or offline. `startRevenueCat` sends it again.
  }
}

/** What a purchase event says about the plan behind a token. The price is a
 * funnel property, never revenue — RevenueCat reports that server-side. */
function purchaseProps(pkg: PurchasesPackage, plan: PlanTier, offering: string): PurchaseProps {
  return {
    plan,
    product_id: pkg.product.identifier,
    offering,
    price: pkg.product.price,
    currency: pkg.product.currencyCode,
  };
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
    // No catch, on purpose: a fetch that failed rejects. It used to resolve
    // null, which the paywall could not tell from a dashboard with no such
    // offering — so one dropped connection greyed every plan out for good and
    // left the only door into the app shut. See `offering` on the contract.
    const all = await Purchases.getOfferings();
    // By name first, then whatever the dashboard marks current. The fallback
    // matters for `default`, which RevenueCat exposes as `current` rather than
    // under that key in some dashboard configurations.
    const found = all.all[identifier] ?? (identifier === 'default' ? all.current : null);
    return found == null ? null : toOffering(found);
  },

  async buy(plan: Plan): Promise<PurchaseResult> {
    const held = packages.get(plan.token);
    if (held == null) {
      // The token came from an offering fetched in this process, so a miss
      // means the app is trying to buy something it never displayed.
      return {
        status: 'failed',
        // Non-React: resolved per call rather than at module scope, so a
        // language switched after launch is reflected.
        message: translatorFor(getLanguage())('purchase.unavailable'),
      };
    }
    const { pkg, period } = held;
    const props = purchaseProps(pkg, period, plan.token.split(':')[0]);
    track('purchase_started', props);
    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      announce(customerInfo);
      // Reported against the entitlement rather than against the call
      // returning. A purchase that completes without granting the entitlement
      // is a misconfigured dashboard, and saying "purchased" there would leave
      // the user paid-up and still looking at the paywall.
      if (entitledIn(customerInfo)) {
        track('purchase_completed', props);
        return { status: 'purchased' };
      }
      track('purchase_failed', { ...props, reason: 'no-entitlement' });
      // Bought, but nothing was granted. Almost always a dashboard that has no
      // entitlement by this name, or products not attached to it.
      explainMissingEntitlement(customerInfo);
      return {
        status: 'failed',
        message: translatorFor(getLanguage())('offer.notUnlocked'),
      };
    } catch (error) {
      if (wasCancelled(error)) {
        track('purchase_cancelled', props);
        return { status: 'cancelled' };
      }
      if (wasPending(error)) {
        track('purchase_pending', props);
        return { status: 'pending' };
      }
      track('purchase_failed', {
        ...props,
        reason: String((error as PurchasesError | undefined)?.code ?? 'unknown'),
      });
      return { status: 'failed', message: messageFor(error) };
    }
  },

  async buyProduct({ productId, basePlanId, offerId, source }): Promise<PurchaseResult> {
    let product: PurchasesStoreProduct | undefined;
    try {
      const found = (
        await Promise.all([
          Purchases.getProducts([productId], PRODUCT_CATEGORY.SUBSCRIPTION),
          Purchases.getProducts([productId], PRODUCT_CATEGORY.NON_SUBSCRIPTION),
        ])
      ).flat();
      // Google Play names a subscription's products `id:basePlan`.
      product =
        found.find((p) => p.identifier === productId) ??
        (basePlanId != null ? found.find((p) => p.identifier === `${productId}:${basePlanId}`) : undefined) ??
        found[0];
    } catch (error) {
      return { status: 'failed', message: messageFor(error) };
    }
    if (product == null) {
      return { status: 'failed', message: translatorFor(getLanguage())('purchase.unavailable') };
    }
    const props: PurchaseProps = {
      plan: /annual|year/i.test(product.identifier) ? 'annual' : 'weekly',
      product_id: product.identifier,
      offering: source,
      price: product.price,
      currency: product.currencyCode,
    };
    track('purchase_started', props);
    try {
      // On Google Play the paywall chose a base plan and maybe an offer; buying
      // the bare product would let the store pick its default offer instead.
      const option =
        Platform.OS === 'android' && basePlanId != null
          ? product.subscriptionOptions?.find((o) => o.id === (offerId ? `${basePlanId}:${offerId}` : basePlanId))
          : undefined;
      const { customerInfo } = option != null ? await Purchases.purchaseSubscriptionOption(option) : await Purchases.purchaseStoreProduct(product);
      announce(customerInfo);
      if (entitledIn(customerInfo)) {
        track('purchase_completed', props);
        return { status: 'purchased' };
      }
      track('purchase_failed', { ...props, reason: 'no-entitlement' });
      explainMissingEntitlement(customerInfo);
      return { status: 'failed', message: translatorFor(getLanguage())('offer.notUnlocked') };
    } catch (error) {
      if (wasCancelled(error)) {
        track('purchase_cancelled', props);
        return { status: 'cancelled' };
      }
      if (wasPending(error)) {
        track('purchase_pending', props);
        return { status: 'pending' };
      }
      track('purchase_failed', { ...props, reason: String((error as PurchasesError | undefined)?.code ?? 'unknown') });
      return { status: 'failed', message: messageFor(error) };
    }
  },

  async appUserId(): Promise<string | null> {
    try {
      return await Purchases.getAppUserID();
    } catch {
      return null;
    }
  },

  async restore(): Promise<RestoreResult> {
    try {
      const info = await Purchases.restorePurchases();
      announce(info);
      const restored = entitledIn(info);
      track('restore_completed', { status: restored ? 'restored' : 'nothing-found' });
      return restored ? { status: 'restored' } : { status: 'nothing-found' };
    } catch (error) {
      track('restore_completed', { status: 'failed' });
      return { status: 'failed', message: messageFor(error) };
    }
  },

  entitled: () => active,

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  refresh: refreshEntitlement,

  hadAccess: () => had,

  passEndsAt: () => lastEnd,

  setBonusDays(days) {
    const next = Math.max(0, Math.floor(days));
    if (!Number.isFinite(next) || next === bonusDays) return;
    bonusDays = next;
    kv.set(BONUS_KEY, next);
    // Re-judged on the spot against what the store last said: for a legacy
    // pass, a friend joining can bring back access that had just run out. For a
    // subscriber nothing moves — the days only ever date a pass — so this is a
    // cheap no-op there.
    if (lastInfo != null) announce(lastInfo);
  },
};
