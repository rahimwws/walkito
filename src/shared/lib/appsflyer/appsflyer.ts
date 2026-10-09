import { APPSFLYER } from '@/shared/config';

import { deepLinkFrom, type ConversionData, type IncomingDeepLink } from './payload';

/**
 * AppsFlyer: which ad, campaign or link an install came from.
 *
 * Every other module reaches the SDK through this file, never the package, so
 * the rules live in one place:
 *
 * - **Production only.** AppsFlyer knows two apps, `com.walkito.app` on each
 *   store. The development and preview builds carry `.dev` / `.preview`
 *   identifiers it has never heard of, and anything they sent would be
 *   attributed to nothing or, worse, to the real app. Those builds never load
 *   the SDK at all.
 * - **Never in the way.** Behind the same lazy `require` as PostHog, RevenueCat
 *   and Observe: the package's TurboModule is looked up first, so a dev client
 *   built before it was linked keeps running instead of throwing while the
 *   module graph evaluates. Every call is caught, and the one value other code
 *   waits for (the AppsFlyer id) gives up after a few seconds.
 * - **No ATT.** The app never asks to track, so the IDFA is all zeros and
 *   AppsFlyer attributes through Apple Ads (AdServices), SKAdNetwork and, on
 *   Android, the Play Install Referrer. Nothing here requests authorization.
 *
 * `react-native-appsflyer` 7 replaced 6.x's `initSdk(options)`: listeners are
 * registered around `init()`, and `start()` runs only once the native session
 * is ready. The deep-link listener goes in *before* `init()` — Android drops a
 * deep link that arrives with no listener attached, for good.
 */

/**
 * The slice of `react-native-appsflyer` 7 this file calls, typed here rather
 * than imported: the package's entry point is uncompiled TypeScript (`main`
 * and `types` are both `index.ts`) that does not type-check outside its own
 * repository, and importing its types would pull it into ours.
 */
type Sdk = {
  init(params: { devKey: string; appId?: string | null }): Promise<void>;
  start(): Promise<void>;
  registerDeepLinkListener(callbacks: { onDeepLinking?: (data: unknown) => void }): Promise<void>;
  registerConversionListener(callbacks: {
    onConversionDataSuccess?: (data: ConversionData) => void;
    onConversionDataFail?: (error: unknown) => void;
  }): Promise<void>;
  registerSessionReadyListener(onReady: () => void): Promise<void>;
  getAppsFlyerUID(): Promise<string | null>;
  setCustomerUserId(params: { customerId: string }): Promise<void>;
  logEvent(params: { eventName: string; eventValues?: Record<string, unknown> }): Promise<void>;
};

/** How long anything waits on AppsFlyer before carrying on without it. */
const WAIT_MS = 4000;

let sdk: Sdk | null | undefined;
let ready: Promise<boolean> | null = null;

function variant(): string {
  const { default: Constants } = require('expo-constants') as typeof import('expo-constants');
  return (Constants.expoConfig?.extra?.variant as string | undefined) ?? 'development';
}

function load(): Sdk | null {
  if (sdk !== undefined) return sdk;
  sdk = null;
  try {
    const { Platform, TurboModuleRegistry } = require('react-native') as typeof import('react-native');
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') return null;
    if (variant() !== 'production') return null;
    // Looked up before the package is required: its spec calls
    // `getEnforcing`, which throws in a binary without the module.
    if (TurboModuleRegistry.get('RNAppsFlyer') == null) return null;
    sdk = (require('react-native-appsflyer') as { default: Sdk }).default;
  } catch (error) {
    if (__DEV__) console.warn('[appsflyer] unavailable', error);
    sdk = null;
  }
  return sdk;
}

function within<T>(promise: Promise<T>, fallback: T, ms = WAIT_MS): Promise<T> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(fallback), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(fallback);
      },
    );
  });
}

// ---- What the SDK reports, held until somebody asks ------------------------
//
// The SDK starts before any screen mounts, so its two callbacks can fire before
// the code that acts on them has subscribed. The install's conversion data is
// kept (it describes the install, and arrives once); a deep link is kept until
// one listener has taken it (it is an instruction, and must be acted on once).

let conversion: ConversionData | null = null;
const conversionListeners = new Set<(data: ConversionData) => void>();

let pendingLink: IncomingDeepLink | null = null;
const linkListeners = new Set<(link: IncomingDeepLink) => void>();

function deliverConversion(data: ConversionData) {
  conversion = data;
  for (const listener of conversionListeners) {
    try {
      listener(data);
    } catch {
      // One bad subscriber must not starve the rest.
    }
  }
}

function deliverLink(link: IncomingDeepLink) {
  if (linkListeners.size === 0) {
    pendingLink = link;
    return;
  }
  for (const listener of linkListeners) {
    try {
      listener(link);
    } catch {
      // As above.
    }
  }
}

/**
 * The install's conversion data: organic or not, and from which media source
 * and campaign. Called at once if it has already arrived.
 */
export function onConversionData(listener: (data: ConversionData) => void): () => void {
  conversionListeners.add(listener);
  if (conversion != null) listener(conversion);
  return () => conversionListeners.delete(listener);
}

/**
 * A OneLink the app was opened from, direct or deferred (installed from the
 * link, then opened). A link that arrived before anyone listened is handed to
 * the first listener and then forgotten.
 */
export function onDeepLink(listener: (link: IncomingDeepLink) => void): () => void {
  linkListeners.add(listener);
  if (pendingLink != null) {
    const link = pendingLink;
    pendingLink = null;
    listener(link);
  }
  return () => linkListeners.delete(listener);
}

/**
 * Start the SDK, once, at launch. Resolves true once its session has started,
 * false when it is not running in this build (or did not start in time).
 * Safe to call again; later calls share the first.
 */
export function startAppsFlyer(): Promise<boolean> {
  if (ready != null) return ready;
  const af = load();
  if (af == null) {
    ready = Promise.resolve(false);
    return ready;
  }
  ready = new Promise<boolean>((resolve) => {
    try {
      const { Platform } = require('react-native') as typeof import('react-native');
      void af
        .registerDeepLinkListener({
          onDeepLinking: (data) => {
            const link = deepLinkFrom(data);
            if (link != null) deliverLink(link);
          },
        })
        .catch(() => {});
      void af
        .init({ devKey: APPSFLYER.devKey, appId: Platform.OS === 'ios' ? APPSFLYER.iosAppId : null })
        .catch(() => resolve(false));
      // Registered right after `init()`, not inside its `then`: 7.x asks for
      // every listener but the deep-link one to go in synchronously here.
      void af
        .registerConversionListener({
          onConversionDataSuccess: (data) => deliverConversion(data),
          onConversionDataFail: () => {},
        })
        .catch(() => {});
      void af
        .registerSessionReadyListener(() => {
          af.start().then(
            () => resolve(true),
            () => resolve(false),
          );
        })
        .catch(() => resolve(false));
    } catch {
      resolve(false);
    }
  });
  ready = within(ready, false, WAIT_MS * 2);
  return ready;
}

/**
 * This install's AppsFlyer id, or null when AppsFlyer is not running here or
 * does not answer within a few seconds. RevenueCat needs it to send AppsFlyer
 * the purchases it sees on its server.
 */
export async function getAppsFlyerUID(): Promise<string | null> {
  const af = load();
  if (af == null) return null;
  if (!(await startAppsFlyer())) return null;
  const id = await within(af.getAppsFlyerUID(), null);
  return typeof id === 'string' && id.length > 0 ? id : null;
}

/**
 * The id AppsFlyer files this person under besides its own: the RevenueCat app
 * user id, the same one PostHog and Superwall are keyed on.
 */
export function setAppsFlyerCustomerUserId(customerId: string): void {
  const af = load();
  if (af == null) return;
  void startAppsFlyer().then((started) => {
    if (started) af.setCustomerUserId({ customerId }).catch(() => {});
  });
}

/**
 * An in-app event, sent from the phone. Fire and forget.
 *
 * Only for what an ad network has to see on the device — SKAdNetwork conversion
 * values are computed from on-device events, and nothing RevenueCat reports
 * from its server can reach them. Never health data, by the same rule as
 * `track`: what happened, not what was reported.
 */
export function logAppsFlyerEvent(eventName: string, eventValues: Record<string, string>): void {
  const af = load();
  if (af == null) return;
  void startAppsFlyer().then((started) => {
    if (started) af.logEvent({ eventName, eventValues }).catch(() => {});
  });
}
