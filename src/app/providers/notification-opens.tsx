import { useEffect } from 'react';
import { AppState } from 'react-native';

import { Notifications, notificationOpenOf } from '@/entities/notifications';
import { trialDay } from '@/entities/purchase';
import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

/** The last tap counted, as `<identifier>:<date>`: the response that opened the
 * app stays readable for as long as the process lives (on Android beyond it),
 * and a running app's listener can hear the same tap again. */
const LAST_KEY = 'notifications/last-opened';

function opened(response: Notifications.NotificationResponse | null, count: boolean): void {
  const request = response?.notification.request;
  if (request == null) return;
  const tap = `${request.identifier}:${response?.notification.date ?? 0}`;
  if (kv.getString(LAST_KEY) === tap) return;
  kv.set(LAST_KEY, tap);
  if (!count) return;
  const open = notificationOpenOf(request.content.data as Record<string, unknown> | undefined);
  if (open == null) return;
  const day = trialDay();
  track('notification_opened', day == null ? open : { ...open, trial_day: day });
}

/** Read once per run of the process: the tap that launched the app. */
let launchRead = false;

/**
 * Every notification tap, as one event: `notification_opened { type }`, with
 * the trial day when a free trial is running.
 *
 * At the root, because the tap can be what launches the app. Each kind's own
 * handler (the Day 1 reminder, the first-step routine, the win-back) still
 * does what the tap means; this only counts it.
 *
 * A launch iOS made in the background is not a tap: it can find an old
 * response still readable from an earlier run, which is marked as seen and
 * not counted. Like every event, a counted tap is held until the app has been
 * in front (`held.ts`), so nothing here makes the analytics client early.
 */
export function useNotificationOpens(): void {
  useEffect(() => {
    if (!launchRead) {
      launchRead = true;
      try {
        opened(Notifications.getLastNotificationResponse(), AppState.currentState !== 'background');
      } catch {
        // A binary whose notification module cannot answer at once: the
        // launch tap goes uncounted, the listener still hears the rest.
      }
    }
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => opened(response, true));
    return () => subscription.remove();
  }, []);
}
