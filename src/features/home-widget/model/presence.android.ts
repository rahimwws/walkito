/** A placed widget's size, as the analytics events name it. */
export type WidgetSize = 'small' | 'medium' | 'other';

/** The widget name, as registered with react-native-android-widget. */
const NAME = 'DailyCheck';

/**
 * The check-in widgets on the Home Screen, read from the launcher through
 * react-native-android-widget (`AppWidgetManager` underneath). Android has no
 * fixed sizes: a widget at least half again as wide as it is tall is counted
 * as the medium one.
 *
 * Null when it cannot be known (the module missing, the launcher failing to
 * answer). Null is never read as "not added".
 */
export async function placedWidgets(): Promise<WidgetSize[] | null> {
  try {
    const { getWidgetInfo } = require('react-native-android-widget') as typeof import('react-native-android-widget');
    const widgets = await getWidgetInfo(NAME);
    return widgets.map((widget) => (widget.width >= widget.height * 1.5 ? 'medium' : 'small'));
  } catch {
    return null;
  }
}
