import { kv } from '@/shared/lib/storage';

import type { DailyWidgetProps } from '../ui/daily-widget';

/**
 * What the Android widget last showed, kept where the widget's headless task
 * can read it: the launcher asks for a render at times the app is not running,
 * and it can only draw what the app left behind.
 */
const KEY = 'widget/android-props';

export function savedWidgetProps(): DailyWidgetProps | null {
  const raw = kv.getString(KEY);
  if (raw == null) return null;
  try {
    return JSON.parse(raw) as DailyWidgetProps;
  } catch {
    return null;
  }
}

export function saveWidgetProps(props: DailyWidgetProps | null): void {
  if (props == null) kv.remove(KEY);
  else kv.set(KEY, JSON.stringify(props));
}
