import type PostHog from 'posthog-react-native';

import type { AnalyticsEvent, AnalyticsEvents } from './events';

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
      enableSessionReplay: true,
      sessionReplayConfig: {
        // Everything typed is masked. The only free text in the app is a name
        // and an email, and neither belongs in a recording.
        maskAllTextInputs: true,
        // Images stay visible: they are illustrations and exercise art, and a
        // replay of this app with its pictures blanked out shows nothing.
        maskAllImages: false,
        captureLog: false,
      },
    });
    client.register({ app_variant: variant() });
    return client;
  } catch (error) {
    if (__DEV__) console.warn('[analytics] PostHog unavailable, events are dropped', error);
    return null;
  }
}

/** Send one event. Silently nothing when analytics is not configured. */
export function track<E extends AnalyticsEvent>(
  event: E,
  ...props: AnalyticsEvents[E] extends Record<string, never> ? [] : [AnalyticsEvents[E]]
): void {
  posthog()?.capture(event, props[0] as Record<string, string | number | boolean> | undefined);
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
  const ph = posthog();
  if (ph == null || ph.getDistinctId() === id) return;
  ph.identify(id);
}

/**
 * Person properties that describe how somebody arrived, written once.
 *
 * `$set_once` rather than `$set`: the first answer to "where did you hear about
 * us" is the attribution, and a later edit must not rewrite it.
 */
export function setPersonOnce(props: Record<string, string | number | boolean>): void {
  posthog()?.capture('$set', { $set_once: props });
}

/** A route change. The path, not a title: titles are translated. */
export function screen(path: string): void {
  void posthog()?.screen(path);
}

/** The underlying client, for `PostHogProvider`. Null without a key. */
export function analyticsClient(): PostHog | null {
  return posthog();
}
