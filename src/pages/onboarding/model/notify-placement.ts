import { featureFlag } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

/**
 * Where the onboarding asks for notifications: before Day 1 (the table's own
 * order) or after it.
 *
 * Decided by the PostHog feature flag `notif_ask_after_day1` (`true`, or a
 * `test` variant, moves the ask after Day 1; anything else, no flag, or no
 * analytics keeps it where it was). Read once, as the flow reaches the
 * `source` question: the two orders are the same up to there, the flags have
 * long loaded by then, and only somebody who gets that far is exposed. Kept
 * on the phone from then on, so a return to the flow keeps its order.
 */
export const NOTIFY_AFTER_DAY_ONE_FLAG = 'notif_ask_after_day1';

const KEY = 'onboarding/notify-after-day-one';

let decided: boolean | null | undefined;

/** The decision, or null while it has not been made. */
export function notifyAfterDayOne(): boolean | null {
  if (decided === undefined) decided = kv.getBoolean(KEY) ?? null;
  return decided;
}

/** Makes the decision if it has not been made, and returns it. */
export function decideNotifyPlacement(): boolean {
  const known = notifyAfterDayOne();
  if (known != null) return known;
  const variant = featureFlag(NOTIFY_AFTER_DAY_ONE_FLAG);
  decided = variant === true || variant === 'test';
  kv.set(KEY, decided);
  return decided;
}

/** The step the notification ask follows when it comes after Day 1: the
 * first move and what it was worth (`first-move`, `felt`, `felt-answer`,
 * `praise`), before tomorrow's routine. Still inside the onboarding, so the
 * first-step morning reminder is laid at its end as it always was, now with
 * her answer in hand. */
const NOTIFY_AFTER = 'praise';

/**
 * The steps table with the notification ask (`notify`) moved after Day 1.
 * The same steps under the same keys, so analytics and a saved place read the
 * same; the ask is in act 3 either way, so the progress bar's checkpoints stay
 * where they are.
 */
export function withNotifyAfterDayOne<T extends { key: string }>(steps: readonly T[]): readonly T[] {
  const ask = steps.find((step) => step.key === 'notify');
  if (ask == null) return steps;
  const rest = steps.filter((step) => step !== ask);
  const at = rest.findIndex((step) => step.key === NOTIFY_AFTER);
  return at < 0 ? steps : [...rest.slice(0, at + 1), ask, ...rest.slice(at + 1)];
}

/** Tests only: forget the decision. */
export function resetNotifyPlacement(): void {
  kv.remove(KEY);
  decided = undefined;
}
