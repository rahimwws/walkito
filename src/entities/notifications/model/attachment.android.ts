import * as Notifications from 'expo-notifications';

import type { NotificationArt } from './art';

/**
 * Android's side of `attachment.ts`: no picture.
 *
 * `attachments` is iOS-only in expo-notifications, and an Android local
 * notification cannot show an image through it. So nothing is resolved,
 * nothing is copied, the pictures stay out of this platform's bundle, and every
 * request goes out exactly as it did before they existed.
 */

export async function attachmentFor(
  _name: NotificationArt,
): Promise<Notifications.NotificationContentAttachmentIos[]> {
  return [];
}

/** The plain call, unchanged. */
export function scheduleWithArt(
  _art: NotificationArt,
  request: Notifications.NotificationRequestInput,
): Promise<string> {
  return Notifications.scheduleNotificationAsync(request);
}

/** Same shape as on iPhone; never holds an attachment here. */
export type PreparedArt = {
  readonly art: NotificationArt;
  readonly attachments: readonly Notifications.NotificationContentAttachmentIos[];
  spent: boolean;
};

export async function prepareArt(name: NotificationArt): Promise<PreparedArt> {
  return { art: name, attachments: [], spent: false };
}

/** The plain call, made before this returns. */
export function scheduleWithPreparedArt(
  prepared: PreparedArt | null,
  request: Notifications.NotificationRequestInput,
): Promise<string> {
  if (prepared != null) prepared.spent = true;
  return Notifications.scheduleNotificationAsync(request);
}

export function releaseArt(prepared: PreparedArt | null): void {
  if (prepared != null) prepared.spent = true;
}
