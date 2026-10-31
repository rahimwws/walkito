import type { CancelReason } from '@/shared/lib/analytics';
import type { Key } from '@/shared/lib/i18n';
import type { FluentName } from '@/shared/ui/fluent-icon';

/**
 * "Why are you leaving?": five answers, one to pick, and no "Other". Each is
 * a door to a screen of its own (`cancel-screens.tsx`), and an "Other" would
 * be a door to nothing, or to a text field nobody reads before they cancel.
 *
 * The order is the order people give these reasons for leaving an app like
 * this one: the money first, then the good reason, then the rest. Each leads
 * with a Fluent emoji for what it is about, never one that judges it.
 */
export const CANCEL_REASONS: readonly { id: CancelReason; label: Key; art: FluentName }[] = [
  { id: 'budget', label: 'cancel.reason.budget', art: 'briefcase' },
  { id: 'better', label: 'cancel.reason.better', art: 'foot' },
  { id: 'pause', label: 'cancel.reason.pause', art: 'hotBeverage' },
  { id: 'notHelping', label: 'cancel.reason.notHelping', art: 'bandage' },
  { id: 'noTime', label: 'cancel.reason.noTime', art: 'hourglass' },
];
