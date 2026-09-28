import type { ObserveModule } from 'expo-observe';

/**
 * EAS Observe: how fast the app is, as the people using it experience it.
 *
 * Two libraries feed the EAS dashboard. `expo-insights` needs no code — linked
 * into the binary, it reports every cold start, which is what the App usage tab
 * under Insights is drawn from. `expo-observe` is this file: launch timings
 * (time to first render, time to interactive), per-route navigation timings
 * through its expo-router integration, and the app's own events.
 *
 * Behind the same lazy `require` as PostHog and RevenueCat. A binary built
 * before the module was linked — every dev client until the next native build —
 * degrades to no metrics rather than failing while the module graph is still
 * evaluating. It also keeps the native module out of the unit tests, which load
 * `track` under bun.
 */

let module: ObserveModule | null | undefined;

function observe(): ObserveModule | null {
  if (module !== undefined) return module;
  try {
    const { Observe } = require('expo-observe') as typeof import('expo-observe');
    module = Observe;
  } catch (error) {
    if (__DEV__) console.warn('[observe] expo-observe unavailable, metrics are dropped', error);
    module = null;
  }
  return module;
}

function variant(): string {
  const { default: Constants } = require('expo-constants') as typeof import('expo-constants');
  return (Constants.expoConfig?.extra?.variant as string | undefined) ?? 'development';
}

/**
 * Once, before the first screen mounts — the router integration has to be on
 * before navigation starts, or the first route's timings are never seen.
 *
 * The environment is the build variant rather than `NODE_ENV`, so preview
 * builds can be told apart from the App Store build on the dashboard.
 */
export function configureObserve(): void {
  try {
    observe()?.configure({
      environment: variant(),
      integrations: { 'expo-router': true },
    });
  } catch (error) {
    if (__DEV__) console.warn('[observe] configure failed', error);
  }
}

/** The app is on screen and can be used: the `tti` metric's end mark. */
export function markInteractive(): void {
  try {
    observe()?.markInteractive();
  } catch {
    // Metrics are never worth an error in front of the user.
  }
}

/**
 * One product event, mirrored from `track`.
 *
 * The same names and the same properties PostHog gets — which are already
 * guaranteed free of health data by `events.ts` — so the performance data can
 * be read against what people were doing at the time.
 */
export function logObserveEvent(
  name: string,
  attributes?: Record<string, string | number | boolean>,
): void {
  try {
    observe()?.logEvent(name, attributes == null ? undefined : { attributes });
  } catch {
    // As above.
  }
}

/** A failure the app caught and recovered from, kept visible on the dashboard. */
export function reportObservedError(error: unknown): void {
  try {
    observe()?.reportError(error);
  } catch {
    // As above.
  }
}
