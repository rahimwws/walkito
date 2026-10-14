import { track, type PassPlacement } from '@/shared/lib/analytics';

import { awaitPassGrant, type PassWindow } from './pass';
import type { Plan, PurchaseResult, Subscription } from './purchase';
import { purchases } from './store';

/**
 * Buying the 3-month pass, the parts with no screen in them: the store's sheet,
 * then the server's days, then whether a subscription still renews beside
 * them. The screens around it (the sign-in first, "Setting up your 3 months",
 * "Your 3 months are set") are the pass checkout's (`widgets/pass-checkout`),
 * the one place every screen that sells a pass buys it through.
 */

/** How long a purchase waits for the server's days before it goes on
 * without them: the store's record already opens the app. */
export const PASS_GRANT_TIMEOUT_MS = 10_000;

/** How long the store is given to say afresh whether a subscription still
 * renews, before its last answer is taken instead. */
const FRESH_SUBSCRIPTION_MS = 3_000;
/** How long that last answer is waited for. With both, "Setting up" never
 * outlives the grant's wait by more than 3.5 s. */
const LAST_SUBSCRIPTION_MS = 500;

const TIMED_OUT = 'timed-out';

/** A store answer, or `TIMED_OUT` after `ms`. A rejection reads as nothing held. */
async function within(
  ask: Promise<Subscription | null>,
  ms: number,
): Promise<Subscription | null | typeof TIMED_OUT> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const late = new Promise<typeof TIMED_OUT>((resolve) => {
    timer = setTimeout(() => resolve(TIMED_OUT), ms);
  });
  try {
    return await Promise.race([ask.catch(() => null), late]);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * The subscription held, asked afresh for `FRESH_SUBSCRIPTION_MS`, then the
 * store's last answer, then nothing: a store that does not answer must not
 * hold the checkout on "Setting up". Nothing means no renewal warning, the
 * reading that asks nothing of the person.
 */
async function heldSubscription(): Promise<Subscription | null> {
  const fresh = await within(purchases.subscription(true), FRESH_SUBSCRIPTION_MS);
  if (fresh !== TIMED_OUT) return fresh;
  const last = await within(purchases.subscription(false), LAST_SUBSCRIPTION_MS);
  return last === TIMED_OUT ? null : last;
}

/** What `settlePass` found once the purchase had gone through. */
export type PassSettled = {
  /** The server's window, or null when it had not answered in time. */
  readonly window: PassWindow | null;
  /**
   * A subscription that will still renew, with the pass now queued after it:
   * the person should turn its renewal off, or pay for both. Null with none,
   * or one whose renewal is already off.
   */
  readonly renewing: Subscription | null;
};

/**
 * The store's sheet for a pass. `pass_purchase` once the store says it went
 * through, with where it was sold; the purchase itself is tracked as every
 * purchase is (`purchase_*`).
 */
export async function buyPass(plan: Plan, placement: PassPlacement): Promise<PurchaseResult> {
  const result = await purchases.buy(plan);
  if (result.status === 'purchased') track('pass_purchase', { product: plan.product.id, placement });
  return result;
}

/**
 * After the store said yes: waits for the server's days (until the window
 * ends later than `previousExpiresAt`, `PASS_GRANT_TIMEOUT_MS` at most), then
 * asks the store whether a subscription still renews (`heldSubscription`, a
 * few seconds at most). Never rejects.
 */
export async function settlePass(previousExpiresAt: number | null): Promise<PassSettled> {
  const rcAppUserId = await purchases.appUserId().catch(() => null);
  const window = await awaitPassGrant(previousExpiresAt, PASS_GRANT_TIMEOUT_MS, rcAppUserId).catch(() => null);
  const held = await heldSubscription();
  return {
    window,
    renewing: held != null && held.kind === 'subscription' && held.willRenew ? held : null,
  };
}
