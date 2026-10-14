import { Platform } from 'react-native';

import { allLogs, firstStepOn, retestResults, todayDayNumber } from '@/entities/program';
import {
  OFFERINGS,
  breakOffer,
  budgetOffer,
  compAccess,
  isFreeMonth,
  nextYearPercent,
  purchases,
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
 * drawn, and the screen for that reason says something kind instead. Which of
 * them may be asked for at all is `retention.ts` in the purchase entity.
 */
export type CancelOptions = {
  /** The next year at a lower price, on the yearly plan held. */
  readonly nextYear: RetentionOffer | null;
  /** A free month, on the plan held. */
  readonly freeMonth: RetentionOffer | null;
  /** Google Play's own pause, on Android. Nothing to ask the store for. */
  readonly playPause: boolean;
  /** The yearly plan, for a monthly or weekly subscriber to move to. */
  readonly yearly: Plan | null;
  /** The plan held, as the same offering prices it, for the saving. */
  readonly current: Plan | null;
};

export const NO_OPTIONS: CancelOptions = { nextYear: null, freeMonth: null, playPause: false, yearly: null, current: null };

/** Past this the flow stops waiting on the store and offers what needs none. */
const LOAD_TIMEOUT_MS = 6000;

function sameProduct(a: string, b: string): boolean {
  return a.split(':')[0] === b.split(':')[0];
}

/** Asks the store for what may be offered to the subscriber in `held`. Never
 * rejects: an unreachable store answers with nothing to offer. */
export async function loadCancelOptions(held: Subscription, now: number = Date.now()): Promise<CancelOptions> {
  const os = Platform.OS;
  const allowed = retentionAllowed(held, { comp: compAccess(now), takenAt: retentionTakenAt(), now, os });
  const budget = budgetOffer(held, allowed, os);
  const pause = breakOffer(held, allowed, os);
  const fallback: CancelOptions = { ...NO_OPTIONS, playPause: pause === 'play_pause' };

  const ask = Promise.all([
    budget === 'next_year' ? purchases.retentionOffer(RETENTION_OFFERS.nextYear40, held.productId) : Promise.resolve(null),
    pause === 'free_month' ? purchases.retentionOffer(RETENTION_OFFERS.freeMonth, held.productId) : Promise.resolve(null),
    budget === 'yearly' ? purchases.offering(OFFERINGS.standard).catch(() => null) : Promise.resolve(null),
  ]).then(([nextYear, freeMonth, standard]): CancelOptions => {
    const annual = standard?.annual ?? null;
    return {
      nextYear: nextYear != null && nextYearPercent(nextYear) != null ? nextYear : null,
      freeMonth: freeMonth != null && isFreeMonth(freeMonth) ? freeMonth : null,
      playPause: pause === 'play_pause',
      yearly: annual != null && !sameProduct(annual.product.id, held.productId) ? annual : null,
      current:
        [standard?.monthly, standard?.weekly].find(
          (plan): plan is Plan => plan != null && sameProduct(plan.product.id, held.productId),
        ) ?? null,
    };
  });

  let giveUp: (options: CancelOptions) => void = () => {};
  const late = new Promise<CancelOptions>((resolve) => {
    giveUp = resolve;
  });
  const timer = setTimeout(() => giveUp(fallback), LOAD_TIMEOUT_MS);
  try {
    return await Promise.race([ask.catch(() => fallback), late]);
  } finally {
    clearTimeout(timer);
  }
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
      if (options.nextYear != null) return ['next_year'];
      return options.yearly != null ? ['yearly'] : [];
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
