import type { NotificationOpenType } from '@/shared/lib/analytics';

/**
 * What a tapped notification is, for `notification_opened`.
 *
 * Read from the `data` every notification the app lays carries: its `kind`
 * (the `*_KIND` constants), and for the two that say more, which Day 1
 * reminder (`reminder`) and which of the plan's own nudges (`notification`).
 * A preview from the dev menu is nobody's tap and reads as null.
 *
 * Kept free of expo-notifications so the unit tests can load it.
 */

const KNOWN: ReadonlySet<NotificationOpenType> = new Set<NotificationOpenType>([
  'trial-ending',
  'next-day',
  'day-one',
  'first-step',
  'plan-notification',
  'steps-check',
  'on-feet-check',
  'offer-winback',
  'program-expiry',
  'referral-redeemed',
]);

/** Must match `PREVIEW_KIND` in `preview.ts`, which imports the module this file stays clear of. */
const PREVIEW = 'dev-preview';

export type NotificationOpen = { type: NotificationOpenType; reminder?: 1 | 2; plan?: string };

export function notificationOpenOf(data: Readonly<Record<string, unknown>> | null | undefined): NotificationOpen | null {
  const kind = typeof data?.kind === 'string' ? data.kind : null;
  if (kind === PREVIEW) return null;
  const type: NotificationOpenType = kind != null && KNOWN.has(kind as NotificationOpenType) ? (kind as NotificationOpenType) : 'other';
  if (type === 'day-one') return { type, reminder: data?.reminder === 2 ? 2 : 1 };
  if (type === 'plan-notification' && typeof data?.notification === 'string') return { type, plan: data.notification };
  return { type };
}
