import { setPerson, track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { placedWidgets, type WidgetSize } from './presence';

/** How many check-in widgets the last check found. */
const KEY = 'widget/placed';

/**
 * Asks the system which check-in widgets are on the Home Screen, and tells
 * PostHog when that changed since the last time it was asked.
 *
 * The person property `has_widget` (with `widget_count`) is written on the
 * first answer and on every change after it, so retention can be split by it;
 * `widget_installed` / `widget_removed` mark the moment. The first answer on a
 * phone sends no event: a widget found then may have been there for months.
 *
 * Returns what was found, or null when it cannot be known (see
 * `placedWidgets`), which changes nothing.
 */
export async function checkWidgetPresence(): Promise<WidgetSize[] | null> {
  const placed = await placedWidgets();
  if (placed == null) return null;

  const before = kv.getNumber(KEY);
  const count = placed.length;
  if (before === count) return placed;

  kv.set(KEY, count);
  setPerson({ has_widget: count > 0, widget_count: count });
  if (before != null) {
    if (count > before) track('widget_installed', { count, sizes: [...placed].sort().join(',') });
    else track('widget_removed', { count });
  }
  return placed;
}
