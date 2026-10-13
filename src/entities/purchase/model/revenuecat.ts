import { identify, setPerson, track, type PlanTier, type PurchaseProps } from '@/shared/lib/analytics';
import {
  getAppsFlyerUID,
  logAppsFlyerEvent,
  onConversionData,
  setAppsFlyerCustomerUserId,
} from '@/shared/lib/appsflyer';
import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { currentUserId, supabase } from '@/shared/lib/supabase';
import { Platform } from 'react-native';
import Purchases, {
  INTRO_ELIGIBILITY_STATUS,
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

import { decideAccess, hadAccess as hadAccessOf, passEnd as passEndOf } from './access';
import { campaignAttributes } from './attribution';
import {
  ENTITLEMENT,
  LIFETIME_PRODUCT_IDS,
  OFFERING_V2,
  PACKAGES,
  V2_SHELVES,
  type IntroOffer,
  type Offering,
  type Plan,
  type PlanPeriod,
  type Product,
  type Purchases as Store,
  type PurchaseResult,
  type RestoreResult,
  type StorePeriod,
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
/** Set once AppsFlyer has reported this install as paid (non-organic): from
 * then on its media source outranks the onboarding survey's answer — see
 * `setAcquisitionSource`. */
const PAID_SOURCE_KEY = 'purchase/paid-media-source';

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
  void relinkAppsFlyer();
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
  if (
    __DEV__ &&
    !verdict.entitled &&
    info.nonSubscriptionTransactions.some((t) => LIFETIME_PRODUCT_IDS.includes(t.productIdentifier))
  ) {
    // Lifetime is a non-consumable: only the entitlement it is attached to
    // grants anything, so a purchase that grants none is a dashboard missing a
    // link, and a paying customer locked out until it is made.
    console.warn(
      `[purchases] A lifetime product was bought but no "${ENTITLEMENT}" entitlement is active. ` +
        `Attach ${LIFETIME_PRODUCT_IDS.join(' and ')} to "${ENTITLEMENT}" in the RevenueCat dashboard ` +
        '(Product catalog → Entitlements).',
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
      `  one-time      : ${info.nonSubscriptionTransactions.map((t) => t.productIdentifier).join(', ') || 'none'}\n` +
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

/** A store's period unit and count, or null for a unit the app does not draw. */
function storePeriod(unit: string | null | undefined, count: number): StorePeriod | null {
  if (!Number.isFinite(count) || count < 1) return null;
  switch (unit?.toUpperCase()) {
    case 'DAY':
      return { unit: 'day', count };
    case 'WEEK':
      return { unit: 'week', count };
    case 'MONTH':
      return { unit: 'month', count };
    case 'YEAR':
      return { unit: 'year', count };
    default:
      return null;
  }
}

const ISO_UNITS: Readonly<Record<string, string>> = { D: 'DAY', W: 'WEEK', M: 'MONTH', Y: 'YEAR' };

/** An ISO 8601 period as the store writes it ("P1Y", "P1M", "P1W", "P3D"). */
function isoPeriod(iso: string | null | undefined): StorePeriod | null {
  const match = iso == null ? null : /^P(\d+)([DWMY])$/.exec(iso);
  if (match == null) return null;
  return storePeriod(ISO_UNITS[match[2]], Number(match[1]));
}

/** What a product's introductory offer, if any, is eligible for: the answer
 * per product id from `introEligibility`. */
type Eligibility = Readonly<Record<string, INTRO_ELIGIBILITY_STATUS>>;

/**
 * The introductory offer this customer would get on a product, or null.
 *
 * On iOS only one StoreKit calls eligible: Apple gives an introductory offer
 * once per subscription group, and RevenueCat's advice for "unknown" is to show
 * the ordinary price rather than promise a trial the sheet may not give. A
 * screen may say "free" only where this returns a free trial. Google Play lists
 * only the offers this account can take (and RevenueCat always answers
 * "unknown" there), so on Android the product's own offer stands.
 *
 * RevenueCat reports one billing period of the offer and how many times it
 * repeats. A price of zero is a free trial; one payment is paid up front for
 * the whole of it; more than one is pay-as-you-go.
 */
function introOf(product: PurchasesStoreProduct, eligibility: Eligibility): IntroOffer | null {
  const intro = product.introPrice;
  if (intro == null) return null;
  if (
    Platform.OS === 'ios' &&
    eligibility[product.identifier] !== INTRO_ELIGIBILITY_STATUS.INTRO_ELIGIBILITY_STATUS_ELIGIBLE
  ) {
    return null;
  }
  const one = storePeriod(intro.periodUnit, intro.periodNumberOfUnits) ?? isoPeriod(intro.period);
  if (one == null) return null;
  const cycles = Number.isFinite(intro.cycles) && intro.cycles >= 1 ? Math.round(intro.cycles) : 1;
  const whole: StorePeriod = { unit: one.unit, count: one.count * cycles };
  if (!(intro.price > 0)) return { kind: 'free-trial', period: whole };
  if (cycles === 1) {
    return { kind: 'pay-up-front', price: intro.price, priceString: intro.priceString, period: whole };
  }
  return { kind: 'pay-as-you-go', price: intro.price, priceString: intro.priceString, period: one, cycles };
}

/** Whether a product is a one-time purchase rather than a subscription. */
function isOneTime(product: PurchasesStoreProduct): boolean {
  return (
    product.productCategory === PRODUCT_CATEGORY.NON_SUBSCRIPTION ||
    LIFETIME_PRODUCT_IDS.includes(product.identifier)
  );
}

/** A package as the app sees it: a price to print and a token to buy with. */
function toPlan(
  offeringId: string,
  pkg: PurchasesPackage | null,
  period: PlanPeriod,
  eligibility: Eligibility,
): Plan | null {
  if (pkg == null) return null;
  const token = `${offeringId}:${pkg.identifier}`;
  packages.set(token, { pkg, period });
  const store = pkg.product;
  const product: Product = {
    id: store.identifier,
    price: store.price,
    currencyCode: store.currencyCode,
    // The store's own string. Formatting `price` by hand gets the symbol on the
    // wrong side in half of Europe and the separator wrong in the other half.
    display: store.priceString,
  };
  const lifetime = period === 'lifetime' || isOneTime(store);
  return {
    token,
    period,
    product,
    priceString: store.priceString,
    pricePerMonthString: lifetime ? null : (store.pricePerMonthString ?? null),
    pricePerWeekString: lifetime ? null : (store.pricePerWeekString ?? null),
    billingPeriod: lifetime ? null : isoPeriod(store.subscriptionPeriod),
    isLifetime: lifetime,
    intro: lifetime ? null : introOf(store, eligibility),
  };
}

/** Where each plan sits in an offering: RevenueCat's own slot, its package
 * type, and the period a product in it bills over (null: one-time). */
const SLOTS: Readonly<
  Record<PlanPeriod, { named: (o: PurchasesOffering) => PurchasesPackage | null; type: PACKAGE_TYPE; iso: string | null }>
> = {
  annual: { named: (o) => o.annual, type: PACKAGE_TYPE.ANNUAL, iso: 'P1Y' },
  monthly: { named: (o) => o.monthly, type: PACKAGE_TYPE.MONTHLY, iso: 'P1M' },
  weekly: { named: (o) => o.weekly, type: PACKAGE_TYPE.WEEKLY, iso: 'P1W' },
  lifetime: { named: (o) => o.lifetime, type: PACKAGE_TYPE.LIFETIME, iso: null },
};

/**
 * One of the plans in an offering.
 *
 * RevenueCat's own slot first — `$rc_annual`, `$rc_monthly`, `$rc_weekly` and
 * `$rc_lifetime` are what the dashboard is expected to use (see `PACKAGES`).
 * The fallbacks keep a plan on sale when a package was created under a custom
 * identifier: the same identifier typed by hand, then any package whose product
 * bills over that period (or, for lifetime, is a one-time purchase). Without
 * them a dashboard typo shows as a plan that is simply not there, which is the
 * hardest version of the mistake to notice.
 */
function slot(found: PurchasesOffering, period: PlanPeriod): PurchasesPackage | null {
  const { named, type, iso } = SLOTS[period];
  const direct = named(found);
  if (direct != null) return direct;
  const id = PACKAGES[period];
  return (
    found.availablePackages.find((pkg) => pkg.identifier === id || pkg.packageType === type) ??
    found.availablePackages.find((pkg) =>
      iso == null ? isOneTime(pkg.product) : !isOneTime(pkg.product) && pkg.product.subscriptionPeriod === iso,
    ) ??
    null
  );
}

/** The package in each slot of one offering, null where it has none. */
type Slots = Readonly<Record<PlanPeriod, PurchasesPackage | null>>;

const PERIODS: readonly PlanPeriod[] = ['annual', 'monthly', 'weekly', 'lifetime'];

/** The slots of an offering read by its own name (`slot`). */
function slotsOf(found: PurchasesOffering): Slots {
  return {
    annual: slot(found, 'annual'),
    monthly: slot(found, 'monthly'),
    weekly: slot(found, 'weekly'),
    lifetime: slot(found, 'lifetime'),
  };
}

/** `v2` package ids already warned about: a missing one is reported once per
 * process, not on every fetch. */
const reportedV2 = new Set<string>();

/**
 * One of the app's offerings, cut out of `v2` (`V2_SHELVES`). Null when the
 * name is not one of the three, or `v2` holds none of its packages: the caller
 * then reads the offering by name, as before `v2` existed.
 *
 * By package identifier only, never by type or billing period as `slot` falls
 * back to: `v2` holds three yearly subscriptions and two lifetimes, and "the
 * package that bills yearly" could sell the trial as the standard annual.
 */
function v2Slots(v2: PurchasesOffering, identifier: string): Slots | null {
  const wanted = V2_SHELVES[identifier];
  if (wanted == null) return null;
  const byId = (id: string | undefined): PurchasesPackage | null =>
    id == null ? null : (v2.availablePackages.find((pkg) => pkg.identifier === id) ?? null);
  const slots: Slots = {
    annual: byId(wanted.annual),
    monthly: byId(wanted.monthly),
    weekly: byId(wanted.weekly),
    lifetime: byId(wanted.lifetime),
  };
  if (__DEV__) {
    // A package typed differently in the dashboard, or a product StoreKit did
    // not return (RevenueCat leaves those packages out), reads as a plan that
    // is simply not there.
    for (const period of PERIODS) {
      const id = wanted[period];
      if (id == null || slots[period] != null || reportedV2.has(id)) continue;
      reportedV2.add(id);
      console.warn(
        `[purchases] Offering "${OFFERING_V2}" has no "${id}" package, so the ${period} plan of ` +
          `"${identifier}" is missing. Check the package identifier in the RevenueCat dashboard ` +
          '(Offerings → v2) and that its product loads from the store.',
      );
    }
  }
  return PERIODS.some((period) => slots[period] != null) ? slots : null;
}

/**
 * Whether this customer can have each introductory offer among an offering's
 * plans, on iOS. Asked only when a product there has one, so the standard
 * offering costs nothing extra. A failed check answers nothing, which `introOf`
 * reads as "show the ordinary price".
 */
async function introEligibility(slots: Slots): Promise<Eligibility> {
  if (Platform.OS !== 'ios') return {};
  const ids = PERIODS.map((period) => slots[period])
    .filter((pkg): pkg is PurchasesPackage => pkg != null && pkg.product.introPrice != null)
    .map((pkg) => pkg.product.identifier);
  if (ids.length === 0) return {};
  try {
    const answers = await Purchases.checkTrialOrIntroductoryPriceEligibility(ids);
    const out: Record<string, INTRO_ELIGIBILITY_STATUS> = {};
    for (const [id, answer] of Object.entries(answers)) out[id] = answer.status;
    return out;
  } catch {
    return {};
  }
}

/**
 * An offering as the app sees it. `identifier` starts every plan's token, which
 * is where the `offering` of a purchase event comes from. Cut out of `v2`, it is
 * the name the app asked for (`default`, `trial`, `offer`), so purchase events
 * stay in the series they were in before `v2`.
 */
async function toOffering(identifier: string, slots: Slots): Promise<Offering> {
  const eligibility = await introEligibility(slots);
  const plan = (period: PlanPeriod) => toPlan(identifier, slots[period], period, eligibility);
  return {
    identifier,
    annual: plan('annual'),
    monthly: plan('monthly'),
    weekly: plan('weekly'),
    lifetime: plan('lifetime'),
  };
}

/** Which plan a product bought by id is, for a paywall the app did not draw. */
function tierOf(product: PurchasesStoreProduct): PlanTier {
  if (isOneTime(product)) return 'lifetime';
  const unit = isoPeriod(product.subscriptionPeriod)?.unit;
  if (unit === 'year') return 'annual';
  if (unit === 'month') return 'monthly';
  if (unit === 'week') return 'weekly';
  if (/annual|year/i.test(product.identifier)) return 'annual';
  if (/month/i.test(product.identifier)) return 'monthly';
  return 'weekly';
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
  relinkOnSignIn();
  void collectAdAttribution();

  await refreshEntitlement();
}

/**
 * Joins the store's customer to the account again whenever the device signs
 * in to a different one: the intro's "Already have an account", a code for an
 * address that already had an account, Apple or Google on a second phone.
 * Otherwise the purchase webhook keeps naming the abandoned anonymous id until
 * the next launch. A code that only confirms an address keeps the same id and
 * changes nothing here.
 */
function relinkOnSignIn(): void {
  const client = supabase;
  if (client == null) return;
  let linked: string | null = null;
  client.auth.onAuthStateChange((event, session) => {
    const uid = session?.user.id ?? null;
    if (uid == null || uid === linked) return;
    const first = linked == null;
    linked = uid;
    // The launch's own session is linked by `linkAnalytics`.
    if (first || (event !== 'SIGNED_IN' && event !== 'USER_UPDATED')) return;
    // Deferred: supabase-js holds its auth lock while this callback runs, and
    // a request made from inside it waits on that lock. The id comes from the
    // event, not `currentUserId()`, whose cached answer may still be the old
    // user until the caller has called `forgetIdentity()`.
    setTimeout(() => {
      void Purchases.getAppUserID()
        .then((rcId) => linkBackend(rcId, uid))
        .catch(() => undefined);
    }, 0);
  });
}

/**
 * Hands RevenueCat what it needs to say where a subscriber came from.
 *
 * **Apple Ads, on iOS.** AdServices (iOS 14.3+) says whether this install came
 * from an Apple Ads tap, and RevenueCat resolves the token to the campaign, ad
 * group and keyword — which is what lets its charts say which search term
 * brought a paying subscriber, not only an install. Standard attribution needs
 * no App Tracking Transparency prompt, and the app shows none. The keyword
 * level also needs the Apple AdServices integration in the RevenueCat
 * dashboard, signed in to the Apple Ads account. Android has no equivalent.
 *
 * **AppsFlyer, on both.** Then the AppsFlyer link (`linkAppsFlyer`) and the
 * install's campaign (`recordCampaign`). Both are no-ops in a build where
 * AppsFlyer does not run, which is every build but production.
 */
async function collectAdAttribution(): Promise<void> {
  if (Platform.OS === 'ios') {
    try {
      await Purchases.enableAdServicesAttributionTokenCollection();
    } catch {
      // Attribution is never worth failing a store start over.
    }
  }
  onConversionData(recordCampaign);
  await linkAppsFlyer();
}

/** The RevenueCat id last handed to AppsFlyer, so a relink only runs when it changed. */
let linkedId: string | null = null;

/**
 * RevenueCat and AppsFlyer, told about each other.
 *
 * RevenueCat sends AppsFlyer every purchase, renewal, refund and cancellation
 * from its server (the `rc_*` events), and matches them to an install only by
 * the `$appsflyerId` attribute set here — without it AppsFlyer sees installs
 * and never the money. `collectDeviceIdentifiers` adds the IDFV (iOS) and the
 * other device ids the integration forwards; with no ATT prompt the IDFA it
 * reads is all zeros, and with `AD_ID` removed from the Android manifest there
 * is no advertising id either.
 *
 * AppsFlyer, the other way, files the install under the RevenueCat app user
 * id, the one PostHog and Superwall are keyed on too. The app never logs
 * RevenueCat in, so that id changes only when RevenueCat aliases the customer
 * (a restore onto another anonymous id); `announce` calls `relinkAppsFlyer` on
 * every customer update so the two stay matched when it does.
 */
async function linkAppsFlyer(): Promise<void> {
  try {
    const afId = await getAppsFlyerUID();
    if (afId == null) return;
    await Purchases.collectDeviceIdentifiers();
    await Purchases.setAppsflyerID(afId);
    const rcId = await Purchases.getAppUserID();
    setAppsFlyerCustomerUserId(rcId);
    linkedId = rcId;
  } catch {
    // The next launch links again.
  }
}

async function relinkAppsFlyer(): Promise<void> {
  if (linkedId == null) return;
  try {
    const rcId = await Purchases.getAppUserID();
    if (rcId !== linkedId) await linkAppsFlyer();
  } catch {
    // As above.
  }
}

/**
 * The campaign behind a paid install, written where revenue is counted.
 *
 * RevenueCat's reserved attributes (`$mediaSource`, `$campaign`, `$adGroup`,
 * `$ad`, `$keyword`, `$creative`), so its charts split revenue by them, and
 * `af_media_source` / `af_campaign` on the PostHog person, so the funnel can.
 * Only a non-organic first launch writes anything (`campaignAttributes`).
 */
function recordCampaign(data: Parameters<typeof campaignAttributes>[0]): void {
  const attributes = campaignAttributes(data);
  if (attributes == null) return;
  kv.set(PAID_SOURCE_KEY, true);
  void Purchases.setAttributes(attributes).catch(() => {});
  const person: Record<string, string> = {};
  if (attributes.$mediaSource != null) person.af_media_source = attributes.$mediaSource;
  if (attributes.$campaign != null) person.af_campaign = attributes.$campaign;
  if (Object.keys(person).length > 0) setPerson(person);
}

/**
 * What an ad network may count, sent from the phone.
 *
 * SKAdNetwork conversion values and the networks' own on-device optimisation
 * only see events the SDK logs on the device. `af_start_trial` or
 * `af_subscribe`, with the product and the plan; `af_purchase` for lifetime,
 * a one-time purchase.
 *
 * **No `af_revenue`, no `af_currency`.** The money reaches AppsFlyer from
 * RevenueCat's server (`linkAppsFlyer`), with renewals and refunds the phone
 * never sees. Revenue on these events as well would count every first payment
 * twice.
 */
function logStoreConversion(info: CustomerInfo, productId: string, plan: PlanTier): void {
  // A lifetime purchase is not a subscription: AppsFlyer's one-time event.
  if (plan === 'lifetime') {
    logAppsFlyerEvent('af_purchase', { af_content_id: productId, plan });
    return;
  }
  const trial = info.entitlements.active[ENTITLEMENT]?.periodType?.toUpperCase() === 'TRIAL';
  logAppsFlyerEvent(trial ? 'af_start_trial' : 'af_subscribe', { af_content_id: productId, plan });
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
async function linkBackend(rcId: string, knownUid?: string): Promise<void> {
  const client = supabase;
  if (client == null) return;
  try {
    const uid = knownUid ?? (await currentUserId());
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
 *
 * **Second to a paid install.** When AppsFlyer has reported this install as
 * non-organic, its media source is the record of what actually sent the person
 * (an ad they tapped) and the survey answer does not replace it; the answer is
 * still on the PostHog person as `acquisition_source`. An organic install has
 * nothing better than the answer, so the answer is written. The order the two
 * arrive in does not matter: a paid report landing after the answer overwrites
 * it (`recordCampaign`), and an answer landing after a paid report is skipped
 * here.
 */
export async function setAcquisitionSource(source: string): Promise<void> {
  if (kv.getBoolean(PAID_SOURCE_KEY) === true) return;
  try {
    await Purchases.setMediaSource(source);
  } catch {
    // Not configured yet, or offline. The answer is also on the PostHog person.
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
    // The App Store line-up first: one offering, `v2`, cut into the three the
    // app asks for. Read by name, so it holds whether or not `v2` is current.
    // RevenueCat leaves out an offering none of whose products loaded, so a
    // `v2` the store cannot serve, or Android's (it has no products there),
    // is simply absent and everything below runs exactly as it always did.
    const v2 = all.all[OFFERING_V2];
    const cut = v2 == null ? null : v2Slots(v2, identifier);
    if (cut != null) return toOffering(identifier, cut);
    // By name first, then whatever the dashboard marks current. The fallback
    // matters for `default`, which RevenueCat exposes as `current` rather than
    // under that key in some dashboard configurations.
    const found = all.all[identifier] ?? (identifier === 'default' ? all.current : null);
    if (found == null) return null;
    return toOffering(found.identifier, slotsOf(found));
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
        logStoreConversion(customerInfo, pkg.product.identifier, period);
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
      plan: tierOf(product),
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
        logStoreConversion(customerInfo, product.identifier, props.plan);
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

  canRedeemCode: Platform.OS === 'ios',

  async redeemCode(): Promise<void> {
    if (Platform.OS !== 'ios') return;
    try {
      await Purchases.presentCodeRedemptionSheet();
    } catch {
      // Nothing to say: the sheet is Apple's, and so is any message about the
      // code. A redeemed code arrives through the customer-info listener.
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
