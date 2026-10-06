import { requireOptionalNativeModule } from 'expo';
import { useEffect, useMemo, type ReactNode } from 'react';
import { Platform } from 'react-native';

import { getIntake, useIntake, useProfileName } from '@/entities/profile';
import { outcome, planSettings } from '@/entities/program';
import { ENTITLEMENT, purchases, useEntitled } from '@/entities/purchase';
import { SUPERWALL_KEYS } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { getLanguage, useLanguage } from '@/shared/lib/i18n';
import { PaywallApiProvider, type PaywallApi } from '@/shared/lib/paywall';

import { paywallPersonalisation } from './superwall-personalisation';

/** The personalisation against the live plan, read at the moment of asking. */
function personalisation(name: string) {
  const big = outcome();
  const settings = planSettings();
  return paywallPersonalisation({
    name,
    intake: getIntake(),
    language: getLanguage(),
    outcome: big == null ? null : { kind: big.kind, steps: big.steps },
    daysPerWeek: settings.daysPerWeek,
    minutes: settings.defaultMinutes,
    now: Date.now(),
  });
}

/**
 * Superwall: paywalls drawn and tested from its dashboard, bought through ours.
 *
 * Superwall only presents. RevenueCat stays the store: a purchase on a
 * Superwall paywall goes through `purchases.buyProduct` — the same tracking,
 * entitlement check and error handling as our own paywall — and Superwall is
 * told who has access from the same `entitled()` the root layout gates on, so
 * the two can never disagree about who has paid.
 *
 * Screens ask for a paywall by placement (`usePaywall().register`). Our own
 * paywall stays underneath as the fallback, so nothing here can leave the app
 * without a way to pay: a placement with no campaign, a paywall that fails to
 * load, no network, no key for this platform, or a binary built before the
 * native module was added all simply leave our screen where it is.
 *
 * The provider renders the app straight away; nothing waits on configuration,
 * which happens in the background. Deep links are picked up by the provider
 * itself, so on-device paywall previews from the dashboard (its QR code) work
 * through the app's `walkito://` scheme without routing code.
 */

/** Present in a binary built with `expo-superwall`; null in an older dev client. */
const nativeModule = requireOptionalNativeModule('SuperwallExpo');
const platformKey = Platform.OS === 'ios' ? SUPERWALL_KEYS.ios : Platform.OS === 'android' ? SUPERWALL_KEYS.android : undefined;
const enabled = nativeModule != null && platformKey != null && platformKey !== '';

/** The Superwall events worth a line in PostHog: what was shown, and what came of it. */
const FORWARDED = new Set([
  'paywallOpen',
  'paywallClose',
  'paywallDecline',
  'transactionStart',
  'transactionComplete',
  'transactionAbandon',
  'transactionFail',
  'subscriptionStart',
  'freeTrialStart',
  'restoreComplete',
  'restoreFail',
  'paywallResponseLoadFail',
  'paywallWebviewLoadFail',
  'paywallProductsLoadFail',
]);

type Sdk = typeof import('expo-superwall');

export function PaywallRoot({ children }: { children: ReactNode }) {
  if (!enabled) return <>{children}</>;
  // Required here, not imported: importing the package evaluates
  // `requireNativeModule('SuperwallExpo')`, which throws in a binary without it.
  const sdk = require('expo-superwall') as Sdk;
  return (
    <sdk.CustomPurchaseControllerProvider controller={controller}>
      <sdk.SuperwallProvider
        apiKeys={SUPERWALL_KEYS}
        onConfigurationError={(error) => console.warn('[superwall] not configured', error.message)}>
        <Bridge sdk={sdk}>{children}</Bridge>
      </sdk.SuperwallProvider>
    </sdk.CustomPurchaseControllerProvider>
  );
}

/** Superwall's purchase and restore, handed to our store. */
const controller: import('expo-superwall').CustomPurchaseControllerContext = {
  async onPurchase(params) {
    const result = await purchases.buyProduct({
      productId: params.productId,
      basePlanId: params.platform === 'android' ? params.basePlanId : undefined,
      offerId: params.platform === 'android' ? params.offerId : undefined,
      source: 'superwall',
    });
    switch (result.status) {
      case 'purchased':
        return { type: 'purchased' };
      case 'cancelled':
        return { type: 'cancelled' };
      case 'pending':
        return { type: 'pending' };
      case 'failed':
        return { type: 'failed', error: result.message };
      default:
        return { type: 'failed', error: 'unavailable' };
    }
  },
  async onPurchaseRestore() {
    const result = await purchases.restore();
    if (result.status === 'restored') return { type: 'restored' };
    return { type: 'failed', error: result.status === 'failed' ? result.message : result.status };
  },
};

/**
 * Everything that has to happen inside the provider: who the user is, whether
 * they have access, the attributes the dashboard targets with, the events
 * PostHog should see, and the `register` screens call.
 */
function Bridge({ sdk, children }: { sdk: Sdk; children: ReactNode }) {
  const configured = sdk.useSuperwall((state) => state.isConfigured);
  const { identify, update, setSubscriptionStatus } = sdk.useUser();
  const { registerPlacement } = sdk.usePlacement();
  const entitled = useEntitled();
  const language = useLanguage();

  // Identified as the RevenueCat customer, the id PostHog is keyed on too.
  // Superwall learns of a purchase from RevenueCat's server, and matches it to
  // a user only by that id — so a subscription bought on our own paywall (the
  // holdout) counts in Superwall's results only when the two ids are one.
  useEffect(() => {
    if (!configured) return;
    let live = true;
    void purchases.appUserId().then((id) => {
      if (live && id != null) void identify(id).catch(() => {});
    });
    return () => {
      live = false;
    };
  }, [configured, identify]);

  // Access as the app judges it, never Superwall's own guess.
  useEffect(() => {
    if (!configured) return;
    void setSubscriptionStatus(
      entitled ? { status: 'ACTIVE', entitlements: [{ id: ENTITLEMENT, type: 'SERVICE_LEVEL' }] } : { status: 'INACTIVE' },
    ).catch(() => {});
  }, [configured, entitled, setSubscriptionStatus]);

  // What audiences and paywall text may use: see `paywallPersonalisation`.
  // Never health data, by the same rule as analytics.
  const name = useProfileName();
  const intake = useIntake();
  useEffect(() => {
    if (!configured) return;
    void update({
      language: getLanguage(),
      platform: Platform.OS,
      ...personalisation(name),
    }).catch(() => {});
  }, [configured, language, name, intake, update]);

  sdk.useSuperwallEvents({
    onSuperwallEvent: (info) => {
      const name = String(info.event.event);
      if (!FORWARDED.has(name)) return;
      const paywall = (info.event as { paywallInfo?: { identifier?: string } }).paywallInfo?.identifier;
      track('superwall_event', { event: name, ...(paywall != null ? { paywall } : {}) });
    },
  });

  const api = useMemo<PaywallApi>(
    () => ({
      register: (placement, params) => {
        // The personalisation again, fresh: attributes set a moment ago may
        // not have reached a paywall that is presented right now.
        const merged = { ...personalisation(name), ...params };
        void registerPlacement({ placement, params: merged }).catch((error: unknown) => {
          console.warn('[superwall] placement failed', placement, error);
        });
      },
    }),
    [registerPlacement, name],
  );

  return <PaywallApiProvider value={api}>{children}</PaywallApiProvider>;
}
