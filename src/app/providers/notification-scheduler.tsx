import { useEffect } from 'react';
import { AppState } from 'react-native';

import { Notifications, PLAN_KIND, markDelivered, onAppOpen } from '@/entities/notifications';
import { subscribeToLanguage } from '@/shared/lib/i18n';

/**
 * Keeps the notification window current, and records that the user was here.
 *
 * Two jobs, and the second is the one with teeth. The backoff that silences the
 * app after three unopened messages is cleared by *any* open, not only by a tap
 * on a notification — someone who opens the app every morning of their own
 * accord otherwise looks identical, to that counter, to someone ignoring it.
 *
 * Runs on mount and on every return to the foreground. Rebuilding the window is
 * idempotent and cheap, and doing it on the way in is what keeps a plan that
 * changed overnight from firing yesterday's message.
 */
export function useNotificationScheduler(): void {
  useEffect(() => {
    void onAppOpen();

    const app = AppState.addEventListener('change', (next) => {
      if (next === 'active') void onAppOpen();
    });

    /**
     * Re-plan when the language changes.
     *
     * Notification copy is resolved at *schedule* time — `planWindow` bakes
     * finished text into each item and hands it to iOS, which holds it until
     * the fire date. There is no delivery-time hook to translate in, so a
     * week's queue keeps the language it was laid down in.
     *
     * The foreground listener above already rebuilds the window and would
     * eventually catch it, but "eventually" is the problem: anything due
     * between the switch and the next foreground arrives in the old language.
     * Subscribing to the store covers every place the language can change —
     * the onboarding header badge as well as the settings sheet — instead of
     * asking each of those to remember to call this.
     */
    const language = subscribeToLanguage(() => {
      void onAppOpen();
    });

    /**
     * What the system actually presented.
     *
     * The scheduler plans; only this says a message was really delivered. A
     * phone that was off, or a notification the user had already silenced in
     * Settings, never arrived — counting those against the unopened streak
     * would quietly pause an app nobody ignored.
     */
    const delivered = Notifications.addNotificationReceivedListener((notification) => {
      const data = notification.request.content.data as
        | { kind?: string; notification?: string; date?: string }
        | undefined;
      if (data?.kind !== PLAN_KIND) return;
      if (data.notification == null || data.date == null) return;
      markDelivered(data.notification as never, data.date);
    });

    return () => {
      app.remove();
      delivered.remove();
      // Returns its own unsubscribe rather than an emitter subscription.
      language();
    };
  }, []);
}
