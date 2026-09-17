/**
 * Putting the ladder's decisions on the system's calendar.
 *
 * iOS holds at most **64** pending local notifications and silently drops the
 * rest, so the full eighty-four-day program is never scheduled. A week is
 * planned at a time and refreshed whenever the app comes forward.
 *
 * The whole window is cancelled and rebuilt rather than patched. Patching is
 * where duplicates come from: a day whose signals changed needs its old entry
 * gone, and "cancel the ones that moved" is a diff nobody gets right twice.
 * Cancelling everything we own costs one call and cannot drift.
 */

import * as Notifications from 'expo-notifications';

import { currentDay, toDateKey } from '@/entities/program';
import { kv } from '@/shared/lib/storage';

import { messageFor } from './copy';
import {
  FOLLOW_UP_HOURS,
  PRIORITY,
  RETEST_FOLLOW_UP,
  decide,
  type NotificationKind,
} from './ladder';
import {
  EMPTY_DELIVERY,
  QUIET_FROM_MINUTES,
  forget,
  recordOpened,
  recordSent,
  type DeliveryState,
} from './limits';
import { notificationsAllowed } from './notifications';
import { recordOpen } from './opens';
import { signalsFor, windowDays } from './signals';

/** Marks every notification this scheduler owns, so a tap can be routed and so
 * the window can be cancelled without touching the offer's own messages. */
export const PLAN_KIND = 'plan-notification';

/** Seven days ahead, refreshed on every open. Comfortably inside the 64 the
 * system will hold, even once the offer flow adds its own two. */
export const WINDOW_DAYS = 7;

const STATE_KEY = 'notify/delivery';
const SCHEDULED_KEY = 'notify/scheduled';
/** What the last refresh laid down, with the times it laid them at. */
const LAID_KEY = 'notify/laid';

function readDelivery(): DeliveryState {
  const raw = kv.getString(STATE_KEY);
  if (raw == null) return EMPTY_DELIVERY;
  try {
    const parsed = JSON.parse(raw) as Partial<DeliveryState>;
    return {
      sentOn: Array.isArray(parsed.sentOn) ? parsed.sentOn : [],
      sentByKind: typeof parsed.sentByKind === 'object' && parsed.sentByKind != null
        ? (parsed.sentByKind as DeliveryState['sentByKind'])
        : {},
      unopenedStreak: Number(parsed.unopenedStreak) || 0,
      pausedOn: typeof parsed.pausedOn === 'string' ? parsed.pausedOn : null,
      reentrySent: parsed.reentrySent === true,
    };
  } catch (error) {
    // An unreadable record costs the user a slightly chattier fortnight, not
    // the app. Never throw on the read path.
    console.warn('[notify] delivery record unreadable, starting fresh', error);
    return EMPTY_DELIVERY;
  }
}

function writeDelivery(state: DeliveryState): void {
  kv.set(STATE_KEY, JSON.stringify(state));
}

export function deliveryState(): DeliveryState {
  return readDelivery();
}

type Laid = { id: string; kind: NotificationKind; dateKey: string; at: number };

function laidItems(): Laid[] {
  const raw = kv.getString(LAID_KEY);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as Laid[]) : [];
  } catch {
    return [];
  }
}

/**
 * Counts everything whose moment has passed as delivered.
 *
 * The listener alone could not do this. `addNotificationReceivedListener` fires
 * for a foregrounded app and, on iOS, not for one the system has killed — which
 * is the state a phone spends most of the night in and exactly the state the
 * morning nudge arrives to. Left to the listener, `unopenedStreak` would have
 * stayed at zero forever and the backoff and the pause — the two rules that
 * stop this app nagging someone who has stopped answering — would never once
 * have fired.
 *
 * So delivery is inferred from the calendar instead: anything we scheduled,
 * whose time is behind us, and which is still on the books, went out. Run at
 * the top of an open and *before* the open itself is recorded, so a message
 * that was tapped is counted as delivered and then immediately forgiven by
 * `recordOpened`.
 */
function reconcile(now: number, state: DeliveryState): DeliveryState {
  const laid = laidItems();
  if (laid.length === 0) return state;

  let next = state;
  const pending: Laid[] = [];
  for (const item of laid) {
    if (fireAt(item.dateKey, item.at).getTime() > now) {
      pending.push(item);
      continue;
    }
    // Already counted — a rebuild can re-lay the same slot, and counting it
    // twice would silence the app at twice the intended speed.
    if (next.sentOn.includes(item.dateKey)) continue;
    next = recordSent(next, item.kind, item.dateKey);
  }
  kv.set(LAID_KEY, JSON.stringify(pending));
  return next;
}

/** The identifiers currently on the system's calendar, as we last left it. */
function scheduledIds(): string[] {
  const raw = kv.getString(SCHEDULED_KEY);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export type PlannedItem = {
  kind: NotificationKind;
  dateKey: string;
  /** Minutes past midnight. */
  at: number;
  title: string;
  body: string;
  /** The retest tail. The only second message of a day the app ever sends. */
  followUp?: boolean;
};

/**
 * What the next week should say, without touching the system.
 *
 * Exported separately from `refresh` so the plan can be inspected — in a test,
 * or from a debug screen — without scheduling anything. The delivery state is
 * advanced *hypothetically* as the week is walked, so the caps apply across the
 * window rather than only against what has already been sent.
 */
export function planWindow(now: number = Date.now()): PlannedItem[] {
  const today = currentDay(now);
  // A projection, not the real record: these have not been delivered yet, and
  // writing them back would silence the week they are meant to fill.
  let projected = readDelivery();
  const planned: PlannedItem[] = [];

  for (const dayNumber of windowDays(now, WINDOW_DAYS)) {
    const signals = signalsFor(dayNumber, now, today);
    const decision = decide(signals, projected);
    if (!decision.send) continue;

    const message = messageFor(decision.candidate.kind, signals);
    if (message == null) continue;

    planned.push({
      kind: decision.candidate.kind,
      dateKey: signals.dateKey,
      at: decision.candidate.at,
      title: message.title,
      body: message.body,
    });
    projected = recordSent(projected, decision.candidate.kind, signals.dateKey);

    // The single exception to one-a-day, and only ever attached to a retest
    // that actually went out. Appended here rather than routed through the
    // ladder on purpose: it is not a candidate competing for the day, it is a
    // tail on one specific message, and treating it as a row would have let it
    // displace something else on a day the retest was not sent at all.
    if (
      RETEST_FOLLOW_UP &&
      decision.candidate.kind === 'retest' &&
      signals.retestUnstarted &&
      // Never past the evening boundary, whatever the wake time was.
      decision.candidate.at + FOLLOW_UP_HOURS * 60 < QUIET_FROM_MINUTES
    ) {
      planned.push({
        kind: 'retest',
        dateKey: signals.dateKey,
        at: decision.candidate.at + FOLLOW_UP_HOURS * 60,
        title: message.title,
        body: 'The tests are still open. Four minutes.',
        followUp: true,
      });
    }
  }

  return planned;
}

/** A stable identifier per slot, so a rebuild replaces rather than duplicates.
 * The follow-up gets its own suffix — sharing the day's id would make the two
 * overwrite each other and only the later one would ever arrive. */
function identifierFor(item: PlannedItem): string {
  return item.followUp === true ? `plan-${item.dateKey}-followup` : `plan-${item.dateKey}`;
}

/** `YYYY-MM-DD` plus minutes past midnight, as a local `Date`. */
function fireAt(dateKey: string, minutes: number): Date {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1, Math.floor(minutes / 60), minutes % 60, 0, 0);
}

/**
 * Cancel the window and lay down a fresh one.
 *
 * Safe to call as often as the app likes — on launch, on foreground, after a
 * log is written. Everything it does is idempotent, and the cheapest correct
 * thing is to rebuild rather than reason about what changed.
 */
export async function refresh(now: number = Date.now()): Promise<PlannedItem[]> {
  if (!(await notificationsAllowed())) return [];

  for (const id of scheduledIds()) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch {
      // Already delivered or already gone. Either way there is nothing to do,
      // and a failure here must not stop the rest of the window being laid.
    }
  }

  const planned = planWindow(now);
  const laid: string[] = [];

  for (const item of planned) {
    const when = fireAt(item.dateKey, item.at);
    // A slot that has already passed today is not moved to tomorrow — it was
    // about today, and a morning nudge delivered at four in the afternoon is a
    // reminder about the wrong day.
    if (when.getTime() <= now) continue;

    const id = identifierFor(item);
    try {
      await Notifications.scheduleNotificationAsync({
        identifier: id,
        content: {
          title: item.title,
          body: item.body,
          data: { kind: PLAN_KIND, notification: item.kind, date: item.dateKey },
        },
        trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: when },
      });
      laid.push(id);
    } catch (error) {
      console.warn('[notify] could not schedule', item.kind, error);
    }
  }

  kv.set(SCHEDULED_KEY, JSON.stringify(laid));
  // Remembered with their times, so the next open can tell what went out while
  // the app was not running. See `reconcile`.
  kv.set(
    LAID_KEY,
    JSON.stringify(
      planned
        .filter((item) => fireAt(item.dateKey, item.at).getTime() > now)
        .map((item) => ({
          id: identifierFor(item),
          kind: item.kind,
          dateKey: item.dateKey,
          at: item.at,
        })),
    ),
  );
  return planned;
}

/**
 * Everything that happens when the app comes forward.
 *
 * The order matters. The open is recorded first so the check-in cannot fire on
 * a day the user has already turned up for, the unopened counter is cleared
 * next so an engaged user is never backed off, and only then is the window
 * rebuilt against the state those two just changed.
 */
export async function onAppOpen(now: number = Date.now()): Promise<void> {
  const dateKey = toDateKey(new Date(now));
  // Order matters, and this is the order. Anything whose moment has passed is
  // counted first, so the unopened streak is honest; the open then clears it,
  // because being here *is* the answer the streak was asking for; the day is
  // marked so the evening check-in stands down; and only then is the window
  // rebuilt against the state those three just made.
  const reconciled = reconcile(now, readDelivery());
  recordOpen(dateKey);
  writeDelivery(forget(recordOpened(reconciled), dateKey));
  await refresh(now);
}

/**
 * Records that one actually went out.
 *
 * Driven by the delivery listener rather than by the scheduler, because the
 * system decides what is really presented — a device that was off, or a
 * notification the user cleared from Settings, never arrived and must not count
 * against the unopened streak that silences the app.
 */
export function markDelivered(kind: NotificationKind, dateKey: string): void {
  writeDelivery(recordSent(readDelivery(), kind, dateKey));
}

/** Cancels everything this scheduler owns and forgets it. Used when the user
 * turns notifications off — the promise includes stopping when asked. */
export async function clearAll(): Promise<void> {
  kv.remove(LAID_KEY);
  for (const id of scheduledIds()) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch {
      // Nothing to cancel is the expected outcome, not an error.
    }
  }
  kv.remove(SCHEDULED_KEY);
}

/** For a debug screen: what the ladder would do today, and why. */
export function explainToday(now: number = Date.now()) {
  const today = currentDay(now);
  const signals = signalsFor(today, now, today);
  return { signals, decision: decide(signals, readDelivery()), priority: PRIORITY };
}
