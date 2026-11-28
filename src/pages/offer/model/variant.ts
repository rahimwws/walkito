import { featureFlag } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { PAYWALL_DEFAULT_FLAG, variantOf, type PaywallVariant } from './lineup';

const DEV_KEY = 'dev/paywallVariant';

/**
 * This person's paywall lineup: the PostHog flag `paywall_default_plan`
 * (`monthly_trial`, `yearly` or `first_year_2999`), read as the paywall
 * opens. No analytics, flags not loaded yet, or a value it does not know:
 * `monthly_trial`. In a development build `?paywallDefault=<variant>` sets it
 * on the simulator, where there is no PostHog key.
 */
export function paywallVariant(): PaywallVariant {
  const dev = typeof __DEV__ !== 'undefined' && __DEV__ ? kv.getString(DEV_KEY) : undefined;
  return variantOf(dev ?? featureFlag(PAYWALL_DEFAULT_FLAG));
}

/** Development only (`?paywallDefault=<variant>`, `=off` for the flag). */
export function devSetPaywallVariant(variant: string): void {
  if (!__DEV__) return;
  if (variant === 'off') kv.remove(DEV_KEY);
  else kv.set(DEV_KEY, variantOf(variant));
}
