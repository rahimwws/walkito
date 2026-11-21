import * as Notifications from 'expo-notifications';
import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { FIRST_STEP_KIND, firstStepAt, firstStepDueInApp, firstStepMessage } from './first-step';
import { CHANNEL_ID, ensureNotificationChannel, notificationsAllowed } from './notifications';

/**
 * The first-step routine's morning, kept and laid (see `first-step.ts`).
 *
 * `first-step/at` is when it is due (written as the onboarding ends);
 * `first-step/handled` that the morning has been answered, by the tap or by
 * the first open that showed it, so neither comes twice.
 */
const AT_KEY = 'first-step/at';
const HANDLED_KEY = 'first-step/handled';
const PUSH_ID = 'first-step';

export function firstStepDueAt(): number | null {
  const at = kv.getNumber(AT_KEY);
  return at != null && Number.isFinite(at) ? at : null;
}

export function firstStepHandled(): boolean {
  return kv.getBoolean(HANDLED_KEY) === true;
}

export function markFirstStepHandled(): void {
  kv.set(HANDLED_KEY, true);
}

/**
 * Laid as the onboarding ends: tomorrow at her wake time. The time is kept
 * either way, so the first open that morning can show the routine when
 * notifications are off; the notification itself needs permission (asked in
 * the onboarding, never here). One identifier, so laying it again moves it.
 */
export async function scheduleFirstStep(wakeMinutes: number, now: number = Date.now()): Promise<boolean> {
  const at = firstStepAt(now, wakeMinutes);
  kv.set(AT_KEY, at);
  kv.remove(HANDLED_KEY);
  if (!(await notificationsAllowed())) return false;
  await ensureNotificationChannel();
  const message = firstStepMessage();
  try {
    await Notifications.cancelScheduledNotificationAsync(PUSH_ID).catch(() => undefined);
    await Notifications.scheduleNotificationAsync({
      identifier: PUSH_ID,
      content: { title: message.title, body: message.body, sound: true, data: { kind: FIRST_STEP_KIND } },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: new Date(at), channelId: CHANNEL_ID },
    });
    return true;
  } catch (error) {
    console.warn('[notifications] first-step push did not schedule:', error);
    return false;
  }
}

/**
 * Development only (`walkito.dev://?firstStep=…`): `notify` lays the
 * notification five seconds from now, `due` makes now the routine's morning
 * so the next open shows it, `ready` puts the line over the plans.
 */
export async function devFirstStep(mode: 'notify' | 'due' | 'ready'): Promise<void> {
  if (!__DEV__) return;
  if (mode === 'ready') {
    setFirstStepReady(true);
    return;
  }
  kv.set(AT_KEY, Date.now());
  kv.remove(HANDLED_KEY);
  if (mode === 'due') return;
  await Notifications.requestPermissionsAsync();
  await ensureNotificationChannel();
  const message = firstStepMessage();
  await Notifications.scheduleNotificationAsync({
    identifier: PUSH_ID,
    content: { title: message.title, body: message.body, sound: true, data: { kind: FIRST_STEP_KIND } },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: 5, channelId: CHANNEL_ID },
  });
}

/**
 * When the first-step notification will fire, if one is waiting in the
 * system right now; null when it was never laid, did not schedule, or has
 * been taken back. Read from what is scheduled, not from a flag, so a
 * rescheduled or cancelled one is seen as it is.
 */
export async function firstStepPendingAt(): Promise<number | null> {
  try {
    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    return scheduled.some((request) => request.identifier === PUSH_ID) ? firstStepDueAt() : null;
  } catch {
    return null;
  }
}

/** Whether the first open now is that morning's, with the routine not yet shown. */
export function firstStepDueNow(now: number = Date.now()): boolean {
  return firstStepDueInApp(now, firstStepDueAt(), firstStepHandled());
}

/** Whether a tapped notification is the first-step one. */
export function isFirstStepTap(response: Notifications.NotificationResponse | null): boolean {
  return response?.notification.request.content.data?.kind === FIRST_STEP_KIND;
}

// ── "Your first-step routine is ready", over the plans ──────────────────────
// In memory, for this run of the app: the morning's tap (or open) by somebody
// who has not bought puts the line over the paywall, the screen she is on.

let ready = false;
const listeners = new Set<() => void>();

export function setFirstStepReady(next: boolean): void {
  if (ready === next) return;
  ready = next;
  for (const listener of listeners) listener();
}

export function useFirstStepReady(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => ready,
    () => false,
  );
}
