import type { NotificationKind } from './ladder';

/**
 * Which mascot picture a notification carries, named for what it is about.
 *
 * The ladder's own kinds, plus the three messages that are not rungs of it:
 * the paywall win-back (`offer`), the access-expiry notice (`expiry`) and the
 * step check-in (`steps`). Each name is a file,
 * `assets/notifications/<name>.png` (the figure alone on transparency), and
 * the pose is chosen for the message: the morning after a hard day (`flare`)
 * is a calm heart, never a cheering pose.
 *
 * Pure, so the list can be read without React Native behind it.
 */
export type NotificationArt = NotificationKind | 'offer' | 'expiry' | 'steps';

/** A record rather than an array, so a new kind on the ladder without a
 * picture fails `tsc` here. */
const NAMES: Readonly<Record<NotificationArt, true>> = {
  flare: true,
  load: true,
  gait: true,
  retest: true,
  block: true,
  plan: true,
  session: true,
  checkin: true,
  streak: true,
  winback: true,
  offer: true,
  expiry: true,
  steps: true,
};

export const NOTIFICATION_ART = Object.keys(NAMES) as readonly NotificationArt[];

export function isNotificationArt(value: string): value is NotificationArt {
  return Object.prototype.hasOwnProperty.call(NAMES, value);
}
