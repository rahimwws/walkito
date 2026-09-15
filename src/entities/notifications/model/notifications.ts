import * as Notifications from 'expo-notifications';

/**
 * Local notifications: the permission ask, and the one message we send.
 *
 * Everything here is written to degrade rather than throw. Notifications are a
 * nice-to-have on top of the flow, and a permission call that red-screens on a
 * simulator or an older runtime would take the whole onboarding down with it.
 */

/**
 * Marks the win-back, so a tap on either half can be told apart from any other
 * notification the app might send later.
 *
 * Matched on the payload rather than on the identifier: there are two messages
 * and only one thing they both mean, and a listener checking two ids is one
 * refactor away from silently missing one of them.
 */
export const WINBACK_KIND = 'offer-winback';

/** The two halves, in the order they land. */
const WINBACK_IDS = ['offer-winback-plea', 'offer-winback-offer'] as const;

/** The beat between them. Long enough to read as a second thought — the plea,
 * then the bribe — and short enough that both are on screen together. */
const SECOND_MESSAGE_DELAY_S = 1;

/**
 * Foreground presentation.
 *
 * Set once, at module scope, because the handler has to be installed before
 * any notification can arrive. Banners are shown even with the app open: the
 * only message this app sends is one the user is meant to act on.
 */
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function notificationsAllowed(): Promise<boolean> {
  try {
    const { granted } = await Notifications.getPermissionsAsync();
    return granted;
  } catch {
    return false;
  }
}

/**
 * Asks, and reports what came back.
 *
 * iOS only ever presents this dialog once per install, which is exactly why
 * the flow spends a screen explaining what the app will send before calling
 * it. A silent request behind a "Continue" would spend the one ask the app
 * gets on a user who has not been told anything.
 */
export async function requestNotificationAccess(): Promise<boolean> {
  try {
    const { granted, canAskAgain, status } = await Notifications.getPermissionsAsync();
    if (granted) return true;
    if (!canAskAgain && status !== 'undetermined') return false;
    const result = await Notifications.requestPermissionsAsync({
      ios: { allowAlert: true, allowSound: true, allowBadge: false },
    });
    return result.granted;
  } catch {
    return false;
  }
}

/**
 * The win-back: two messages, a second apart.
 *
 * The first is a person calling after you by name and asks for nothing — it
 * only has to stop the thumb. The second is the reason to turn around. Sent as
 * one message the two jobs fight each other: a name plus a discount in the same
 * banner reads as a mail-merge, while a plea that lands and *then* a price is
 * the shape of someone actually changing your mind.
 *
 * Both are kept short on purpose. A notification is read in the half second it
 * takes to slide past, and every word after the first line is one the user
 * never sees.
 *
 * The first uses `trigger: null` — deliver now, not schedule. iOS has already
 * moved the app to the background by the time this runs, so the banner lands on
 * the home screen the user has just arrived at.
 *
 * Returns whether both were accepted. Nothing consumes that today and nothing
 * should: this runs as the app is leaving the foreground, so there is no screen
 * left to show a failure on. It exists so the outcome is *knowable* — the two
 * empty catches this replaces made a refused permission and a delivered banner
 * look identical from the outside.
 */
export async function scheduleWinback(percent: number, name?: string): Promise<boolean> {
  const who = name != null && name.trim().length > 0 ? name.trim() : null;
  let failed = false;

  try {
    await Notifications.scheduleNotificationAsync({
      identifier: WINBACK_IDS[0],
      content: {
        title: who != null ? `${who}, stoppp` : 'Stoppp',
        body: 'Pleeease.',
        sound: true,
        data: { kind: WINBACK_KIND },
      },
      trigger: null,
    });
  } catch (error) {
    // Still not worth interrupting the user for — this fires as the app is
    // going to the background, so there is no screen left to tell. Reported
    // rather than swallowed: a silent catch here is indistinguishable from a
    // notification that scheduled fine and was never tapped, and those have
    // nothing in common as fixes.
    console.warn('[notifications] win-back plea did not schedule:', error);
    failed = true;
  }

  try {
    await Notifications.scheduleNotificationAsync({
      identifier: WINBACK_IDS[1],
      content: {
        title: `Take ${percent}% off`,
        body: 'Tap to grab it.',
        sound: true,
        data: { kind: WINBACK_KIND },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: SECOND_MESSAGE_DELAY_S,
        repeats: false,
      },
    });
  } catch (error) {
    console.warn('[notifications] win-back offer did not schedule:', error);
    failed = true;
  }

  return !failed;
}

/**
 * Clears the message when the user comes back on their own.
 *
 * Both halves matter now that delivery is immediate: cancelling covers the
 * rare case where it has not gone out yet, and dismissing takes the banner out
 * of Notification Centre if it has. Someone already looking at the offer again
 * should not find a note telling them to come back to it.
 */
export async function cancelWinback(): Promise<void> {
  await Promise.all(
    WINBACK_IDS.map(async (id) => {
      try {
        await Notifications.cancelScheduledNotificationAsync(id);
      } catch {
        // Never scheduled, or already delivered. Either way, nothing to do.
      }
      try {
        await Notifications.dismissNotificationAsync(id);
      } catch {
        // Nothing in the tray under that identifier.
      }
    }),
  );
}

export { Notifications };
