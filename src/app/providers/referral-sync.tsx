import { useEffect } from 'react';

import { Notifications, REFERRAL_KIND, registerPushToken } from '@/entities/notifications';
import { syncStoredEmail } from '@/entities/profile';
import { refresh } from '@/entities/referral';

/**
 * Keeps the invite state in step with the server, and makes the push land.
 *
 * Three jobs, all of them at the root rather than on a screen, and for the same
 * reason `useOfferNotifications` is here: the notification can be the thing
 * that launches the app, in which case no screen has mounted yet to hear it.
 *
 * 1. Re-reads the status on launch. The discount is earned on someone *else's*
 *    device — the owner's app is never told at the moment it happens, so the
 *    only way it ever learns is by asking.
 * 2. Hands over this device's push address, so the server has somewhere to send
 *    the news. Uses permission if it has been given and never asks for it.
 * 2b. And the email, if Apple ever gave one. Here rather than in a provider of
 *    its own because it is the same job at the same moment: pushing what the
 *    device already knows to the server, silently, once. The write at capture
 *    time can miss — offline, or before the anonymous identity exists — and
 *    nothing else would ever retry it.
 * 3. Listens for that push and re-reads again, so an owner who taps the
 *    notification finds the discount already applied rather than a screen that
 *    has not caught up.
 *
 * Every step is silent on failure. None of this is worth an error in front of
 * someone who did not ask for any of it.
 */
export function useReferralSync(): void {
  useEffect(() => {
    void refresh();
    void registerPushToken();
    void syncStoredEmail();
  }, []);

  useEffect(() => {
    /** Arrives while the app is open. */
    const received = Notifications.addNotificationReceivedListener((notification) => {
      const kind = notification.request.content.data?.kind;
      if (kind === REFERRAL_KIND) void refresh();
    });

    /** Arrives as a tap, including the tap that launched the app. */
    const opened = Notifications.addNotificationResponseReceivedListener((response) => {
      const kind = response.notification.request.content.data?.kind;
      if (kind === REFERRAL_KIND) void refresh();
    });

    return () => {
      received.remove();
      opened.remove();
    };
  }, []);
}
