import type PostHog from 'posthog-react-native';

import { logObserveEvent } from '@/shared/lib/observe';
import { kv } from '@/shared/lib/storage';

import type { AnalyticsEvent, AnalyticsEvents } from './events';
import { createHold } from './held';

/**
 * Product analytics, or nothing at all.
 *
 * PostHog, behind four functions. Every screen and store talks to `track`,
 * `identify`, `screen` and `setPersonOnce` — never to the SDK — so the vendor
 * is one file's business, and a build with no key is a build with no analytics
 * rather than one that throws.
 *
 * The project key is `EXPO_PUBLIC_` because it is public by design: it can only
 * *send* events, never read them. The host is configurable so the project can
 * move to the EU cloud without a code change.
 */
const KEY = process.env.EXPO_PUBLIC_POSTHOG_KEY;
const HOST = process.env.EXPO_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com';

/**
 * Which build sent the event: `development`, `preview`, or `production`.
 *
 * Registered on every event, because the PostHog project treats
 * `app_variant = development` as a test account. That keeps simulator runs out
 * of the dashboards without turning analytics off in development — which would
 * make every new event untestable until it shipped.
 */
function variant(): string {
  const { default: Constants } = require('expo-constants') as typeof import('expo-constants');
  return (Constants.expoConfig?.extra?.variant as string | undefined) ?? 'development';
}

/**
 * Which JavaScript the event came from: the EAS Update's id, or `embedded`
 * for the bundle the store build shipped with. Registered on every event, so
 * an offer or copy change sent over the air is its own cohort; `$app_version`
 * only knows the store build.
 */
function updateId(): string {
  try {
    const Updates = require('expo-updates') as typeof import('expo-updates');
    return Updates.updateId ?? 'embedded';
  } catch {
    return 'unknown';
  }
}

/**
 * One of ours: a phone of the team's with the store build on it.
 *
 * A TestFlight or App Store install is a production build like anybody's, so
 * `app_variant` cannot tell it from a customer, and five test phones walking
 * the paywall all day are a real share of a small funnel. `is_internal` goes
 * on every event and on the person (RevenueCat's server-side events carry no
 * super properties, so only the person can mark those), and the PostHog
 * project filters it out as a test account.
 *
 * Set by opening `walkito://open/internal` once on the phone
 * (`…/internal/off` takes it back). It stays with the install.
 */
const INTERNAL_KEY = 'analytics/internal';

function internal(): { is_internal?: true } {
  return kv.getBoolean(INTERNAL_KEY) === true ? { is_internal: true } : {};
}

export function markInternal(on: boolean): void {
  kv.set(INTERNAL_KEY, on);
  whenSeen(() => {
    const ph = posthog();
    if (ph == null) return;
    if (on) ph.register({ is_internal: true });
    else void ph.unregister('is_internal');
    setPerson({ is_internal: on });
  });
}

/**
 * Nothing is sent, and the client is not even made, until the app has been
 * in front once in this run of the process (`held.ts` says why).
 *
 * The client matters as much as the events: PostHog captures "Application
 * Opened" the moment it is constructed, whatever state the app is in, and
 * "Application Became Active" only on a later change. A launch iOS made in
 * the background (the on-feet task, HealthKit's hourly delivery) therefore
 * read as an open with no activation, once per wake.
 *
 * "In front" is anything but `background`, as the notification scheduler and
 * the review count judge it: a cold start can still read `inactive` or
 * `unknown` when this first runs. From `background` it waits for `active`,
 * and looks again at every call, so a missed event cannot hold analytics back
 * for a whole visit.
 */
const hold = createHold();
let appState: typeof import('react-native').AppState | null = null;
let watching = false;

function seen(): boolean {
  if (hold.released()) return true;
  if (!watching) {
    watching = true;
    // Under the test runner there is no React Native (its `__DEV__` global is
    // how the stores that call `track` tell) and no client: nothing to hold.
    if (typeof __DEV__ === 'undefined') {
      hold.release();
      return true;
    }
    try {
      appState = (require('react-native') as typeof import('react-native')).AppState;
      const subscription = appState.addEventListener('change', (next) => {
        if (next !== 'active') return;
        subscription.remove();
        hold.release();
      });
    } catch {
      hold.release();
      return true;
    }
  }
  if (appState != null && appState.currentState !== 'background') hold.release();
  return hold.released();
}

/** Runs `job` now if somebody has had the app in front, otherwise once they do. */
function whenSeen(job: () => void): void {
  seen();
  hold.run(job);
}

let client: PostHog | null = null;

/**
 * The client, created on first use.
 *
 * Required lazily, like RevenueCat: a binary built before the native plugin was
 * linked degrades to no analytics instead of failing while the module graph is
 * still evaluating. It also keeps React Native out of the import graph of the
 * stores that call `track`, which the unit tests load under bun.
 */
function posthog(): PostHog | null {
  if (client != null) return client;
  if (KEY == null || KEY.length === 0) return null;
  // App Store screenshots: a seeded user must never reach PostHog.
  if (process.env.EXPO_PUBLIC_STORE_SHOTS === '1' && __DEV__) return null;
  try {
    const { PostHog: Client } = require('posthog-react-native') as typeof import('posthog-react-native');
    client = new Client(KEY, {
      host: HOST,
      // Application Installed / Opened / Backgrounded / Updated. Installs and
      // updates need persistent storage, which the default `file` gives.
      captureAppLifecycleEvents: true,
      // Profiles for everyone, not only identified users: nearly every user
      // here is anonymous until RevenueCat hands over its id, and a funnel of
      // people without profiles cannot be broken down by acquisition source.
      personProfiles: 'always',
      // No session replay. The screens it would record carry health data —
      // HealthKit steps and heart rate, pain scores, retest measurements — and
      // React Native text cannot be masked wholesale, only inputs. That would
      // put health data in PostHog, which App Review 5.1.3 forbids and the
      // onboarding promises against. Events are enough for the funnels.
      //
      // If this is ever turned back on: the screens that show pain or Apple
      // Health data are already wrapped in `ReplayMask` (`@/shared/ui/replay-mask`),
      // but that covers only the views wrapped, and the privacy policy has to
      // say recordings exist before they do.
      enableSessionReplay: false,
      // No location. PostHog would otherwise work out a country and city from
      // each event's IP address, which the App Store privacy label does not
      // declare and nothing here needs. The project also discards client IPs
      // on its side; this keeps the request from asking for it at all.
      disableGeoip: true,
    });
    client.register({ app_variant: variant(), update_id: updateId(), ...internal() });
    return client;
  } catch (error) {
    // `typeof` first: the stores that call `track` are loaded under bun, where
    // React Native's `__DEV__` global does not exist.
    if (typeof __DEV__ !== 'undefined' && __DEV__) console.warn('[analytics] PostHog unavailable, events are dropped', error);
    return null;
  }
}

/** Send one event. Silently nothing when analytics is not configured. */
export function track<E extends AnalyticsEvent>(
  event: E,
  ...props: AnalyticsEvents[E] extends Record<string, never> ? [] : [AnalyticsEvents[E]]
): void {
  const attributes = props[0] as Record<string, string | number | boolean> | undefined;
  whenSeen(() => {
    posthog()?.capture(event, attributes);
    // And to EAS Observe, so the performance dashboard has the same timeline of
    // what people were doing. Same names, same health-free properties.
    logObserveEvent(event, attributes);
  });
}

/**
 * Properties sent with every event from now on (PostHog's super properties):
 * the storefront's country, the paywall lineup this person was shown. Never
 * anything about her body.
 */
export function register(props: Record<string, string | number | boolean>): void {
  whenSeen(() => posthog()?.register(props));
}

/**
 * Tie this device's events to a stable id.
 *
 * Called with RevenueCat's app user id, so a person in PostHog and a customer
 * in RevenueCat are the same key — which is what lets RevenueCat's server-side
 * revenue events land on the same person as the onboarding that preceded them.
 * Everything captured anonymously before this is merged into that person.
 */
export function identify(id: string): void {
  whenSeen(() => {
    const ph = posthog();
    if (ph == null) return;
    // The build variant as a *person* property too, not only on events.
    // RevenueCat's server-side revenue events carry none of the app's super
    // properties, so the only way PostHog's test-account filter can drop a
    // development build's test purchases is by the person they land on.
    if (ph.getDistinctId() !== id) ph.identify(id, { app_variant: variant(), ...internal() });
    else setPerson({ app_variant: variant(), ...internal() });
  });
}

/**
 * Person properties that may change, written every time.
 *
 * For facts about the install rather than about the person's choices — see
 * `setPersonOnce` for the ones that must never be overwritten.
 */
export function setPerson(props: Record<string, string | number | boolean>): void {
  whenSeen(() => posthog()?.capture('$set', { $set: props }));
}

/**
 * Person properties that describe how somebody arrived, written once.
 *
 * `$set_once` rather than `$set`: the first answer to "where did you hear about
 * us" is the attribution, and a later edit must not rewrite it.
 */
export function setPersonOnce(props: Record<string, string | number | boolean>): void {
  whenSeen(() => posthog()?.capture('$set', { $set_once: props }));
}

/** A route change. The path, not a title: titles are translated. */
export function screen(path: string): void {
  whenSeen(() => void posthog()?.screen(path));
}

/**
 * A PostHog feature flag's variant for this person, or null when there is no
 * analytics, the flags have not loaded yet, or the person is not in the
 * experiment. Null is always the control: an A/B test must never change the
 * app for somebody it could not measure. Reading it records the exposure.
 */
export function featureFlag(key: string): string | boolean | null {
  // Nobody in front: no client yet, and null is the control.
  if (!seen()) return null;
  try {
    return posthog()?.getFeatureFlag(key) ?? null;
  } catch {
    return null;
  }
}

/** The underlying client, for `PostHogProvider`. Null without a key, and
 * until the app has been in front (see `seen`). */
export function analyticsClient(): PostHog | null {
  return seen() ? posthog() : null;
}
