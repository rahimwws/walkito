import { createContext, use, type ReactNode } from 'react';

/**
 * Where a screen asks for a remotely configured paywall (Superwall's).
 *
 * Screens never import the SDK. They name a placement — "the gate after
 * onboarding", "the comeback offer" — and the app layer decides whether a
 * paywall from the Superwall dashboard covers the screen. Our own paywall stays
 * underneath as the fallback: with no campaign for the placement, no network,
 * no key for this platform or an older build without the native module,
 * `register` does nothing and the screen the user sees is ours.
 *
 * Placement names are the dashboard's identifiers; renaming one detaches it
 * from its campaign, the same way an analytics event name splits a chart.
 */
export type PaywallPlacement =
  /** The gate after onboarding: first purchase, standard prices. */
  | 'paywall_first'
  /** The comeback price: a returning visitor, the win-back push or an offer email. */
  | 'paywall_comeback'
  /** The invite price, earned with a friend's code. */
  | 'paywall_invite'
  /** The expiry screen: somebody whose access ended. */
  | 'paywall_expired';

export type PaywallApi = {
  /** Asks Superwall to present whatever its dashboard has for this placement. */
  register: (placement: PaywallPlacement, params?: Record<string, string | number | boolean>) => void;
};

const NONE: PaywallApi = { register: () => {} };

const PaywallContext = createContext<PaywallApi>(NONE);

export function PaywallApiProvider({ value, children }: { value: PaywallApi; children: ReactNode }) {
  return <PaywallContext.Provider value={value}>{children}</PaywallContext.Provider>;
}

export function usePaywall(): PaywallApi {
  return use(PaywallContext);
}
