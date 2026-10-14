import { Platform } from 'react-native';

import { allLogs, firstStepOn, retestResults, todayDayNumber } from '@/entities/program';
import {
  OFFERINGS,
  breakOffer,
  budgetPassAllowed,
  compAccess,
  isFreeMonth,
  passWindow,
  purchases,
  refreshPass,
  retentionAllowed,
  retentionTakenAt,
  type Plan,
  type RetentionOffer,
  type Subscription,
} from '@/entities/purchase';
import { RETENTION_OFFERS } from '@/shared/config';
import type { CancelOffer, CancelReason } from '@/shared/lib/analytics';

import { SHORTEST_MINUTES, lighterPlan, yourChanges, type Change, type FirstStep, type Load } from './cancel-math';

/**
 * What the cancel flow can put in the place of cancelling, asked of the store
 * once, as the flow opens, so the answer is in by the time a reason is picked.
 *
 * Every field is what the store said it would really sell: an offer it signed
 * for this customer, a plan it priced. A field the store did not fill is not
 * drawn, and the screen for that reason says something kind instead (or, for
 * the budget, goes straight to the store's page). Which of them may be asked
 * for at all is `retention.ts` in the purchase entity.
 */
export type CancelOptions = {
  /** A free month, on the plan held. */
  readonly freeMonth: RetentionOffer | null;
  /** Google Play's own pause, on Android. Nothing to ask the store for. */
  readonly playPause: boolean;
  /** The 3-month pass at the retention price, for "It doesn't fit my
   * budget": null when it may not be offered (`budgetPassAllowed`) or the
   * store has none to sell. */
  readonly pass: Plan | null;
};

export const NO_OPTIONS: CancelOptions = { freeMonth: null, playPause: false, pass: null };

/** Past this an ask is given up on and offers nothing. Each ask has its own,
 * so a slow one (Apple signing the free month) cannot take the other with it. */
const LOAD_TIMEOUT_MS = 6000;

/** `work`'s answer, or `fallback` once `ms` have gone by or it rejected. */
function within<T>(work: Promise<T>, ms: number, fallback: T): Promise<T> {
  return new Promise<T>((resolve) => {
    const timer = setTimeout(() => resolve(fallback), ms);
    work.then(
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

/**
 * Asks the store for what may be offered to the subscriber in `held`, and the
 * server for the account's passes first (the budget offer is decided by
 * them). Never rejects: an unreachable store answers with nothing to offer.
 *
 * The budget offer is made only on the server's fresh word: a read that did
 * not reach it leaves the last answer cached, which may be another account's
 * or a year out of date, and the cheaper pass is not to be sold on that.
 * `review`, the App Review account, gets it regardless (`budgetPassAllowed`).
 * The free month and the budget pass are asked for side by side, each with
 * its own `LOAD_TIMEOUT_MS`.
 */
export async function loadCancelOptions(
  held: Subscription,
  review: boolean,
  now: number = Date.now(),
): Promise<CancelOptions> {
  const os = Platform.OS;
  const allowed = retentionAllowed(held, { comp: compAccess(now), takenAt: retentionTakenAt(), now, os });
  const pause = breakOffer(held, allowed, os);

  const freeMonthAsk: Promise<RetentionOffer | null> =
    pause === 'free_month'
      ? within(purchases.retentionOffer(RETENTION_OFFERS.freeMonth, held.productId), LOAD_TIMEOUT_MS, null)
      : Promise.resolve(null);

  // The server's word on the account's passes, fresh, before it decides.
  const budgetAsk: Promise<Plan | null> = within(
    refreshPass().then(async (ok) => {
      if (!(ok || review) || !budgetPassAllowed(held, passWindow(), now, review)) return null;
      const budget = await purchases.offering(OFFERINGS.retentionBudget).catch(() => null);
      return budget?.pass ?? null;
    }),
    LOAD_TIMEOUT_MS,
    null,
  );

  const [freeMonth, pass] = await Promise.all([freeMonthAsk, budgetAsk]);
  return {
    freeMonth: freeMonth != null && isFreeMonth(freeMonth) ? freeMonth : null,
    playPause: pause === 'play_pause',
    pass,
  };
}

/**
 * What each reason's screen offers, in the order it shows them: the one place
 * that decides, so the screen and its `cancel_offer_shown` events cannot
 * disagree. The "when to see a doctor" check is on the "It isn't helping"
 * screen as well, and deliberately not here (see `CancelOffer`).
 */
export function offersFor(reason: CancelReason, options: CancelOptions, load: Load): CancelOffer[] {
  switch (reason) {
    case 'budget':
      return options.pass != null ? ['pass'] : [];
    case 'better':
      return ['review'];
    case 'pause':
      if (options.freeMonth != null) return ['free_month'];
      return options.playPause ? ['pause'] : [];
    case 'notHelping':
      return lighterPlan(load) != null ? ['lighter', 'write'] : ['write'];
    case 'noTime':
      return load.defaultMinutes !== SHORTEST_MINUTES ? ['short_sessions', 'reminder'] : ['reminder'];
  }
}

/**
 * Their own numbers for "My feet are better", from the plan's log: first-step
 * pain by day, and the tests on the side being worked on (the left column of
 * a test record, whichever foot it is). See `yourChanges` for what is quoted.
 */
export function changesToShow(): Change[] {
  const today = todayDayNumber();
  const readings: FirstStep[] = [];
  for (const key of Object.keys(allLogs())) {
    const day = Number(key);
    if (!Number.isInteger(day) || day < 1 || day > today) continue;
    const score = firstStepOn(day);
    if (score != null) readings.push({ day, score });
  }
  const tests = retestResults().map((result) => ({
    calf: result.calf.left,
    arch: result.arch.left,
    balance: result.balance.left,
  }));
  return yourChanges(readings, today, tests);
}
