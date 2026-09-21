import { usePathname, useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';

import { Notifications, WINBACK_KIND } from '@/entities/notifications';
import { unlockBoost } from '@/entities/offer';

/**
 * Whether the launch-time response has already been dealt with.
 *
 * Module scope, not a ref: there is exactly one cold launch per run of the app,
 * and `getLastNotificationResponseAsync` keeps returning that same response for
 * as long as the process lives. Asking it twice means acting on one tap twice.
 */
let launchResponseHandled = false;

/** Either half of the win-back counts — both mean "take me back to it". */
function isWinback(response: Notifications.NotificationResponse): boolean {
  return response.notification.request.content.data?.kind === WINBACK_KIND;
}

/**
 * Turns a tapped win-back notification into the better price.
 *
 * Mounted at the root, not on the offer screen, for the case that matters
 * most: the app may have been killed while it was in the background, and the
 * tap is what launches it. `getLastNotificationResponseAsync` covers exactly
 * that — a response that arrived before any listener existed — while the
 * listener covers the ordinary case of the app being resumed.
 *
 * The discount is unlocked before navigating rather than passed as a param, so
 * the sheet that is usually still mounted underneath simply animates to the
 * new figure instead of being replaced by a second copy of itself.
 *
 * The subscription is registered **once**. An earlier version listed `pathname`
 * as a dependency so that `open` could read a fresh value, and that turned the
 * screen into a trap: every navigation re-ran the effect, every re-run asked
 * for the launch response again, and that call answers with the same tap
 * forever. Pressing Continue popped the sheet, the pathname changed, the effect
 * re-fired and pushed the sheet straight back — an endless loop that read, from
 * the outside, as a frozen paywall with a dead button. The pathname is read
 * through a ref instead: always current, never a reason to re-subscribe.
 */
export function useOfferNotifications(): void {
  const router = useRouter();
  const pathname = usePathname();

  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  useEffect(() => {
    let alive = true;

    const open = () => {
      unlockBoost();
      // Only navigate if we are not already looking at it. Pushing `/offer`
      // over an open `/offer` would stack a second sheet, and dismissing it
      // would reveal the first one still sitting there.
      // The wall is already up for anyone without a subscription — see the
      // guard in the root layout. Tapping the notification only needs to make
      // sure the better price is applied, which `armOffer` above has done.
    };

    // A tap that launched the app from cold. Consulted once per run.
    if (!launchResponseHandled) {
      launchResponseHandled = true;
      void Notifications.getLastNotificationResponseAsync().then((response) => {
        if (!alive || response == null || !isWinback(response)) return;
        open();
      });
    }

    // A tap while the app was merely backgrounded.
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      if (!isWinback(response)) return;
      open();
    });

    return () => {
      alive = false;
      subscription.remove();
    };
  }, [router]);
}
