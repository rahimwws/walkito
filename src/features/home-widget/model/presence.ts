import { requireOptionalNativeModule } from 'expo-modules-core';

/** A placed widget's size, as the analytics events name it. */
export type WidgetSize = 'small' | 'medium' | 'other';

/** The widget kind, `name` in app.json's expo-widgets config. */
const KIND = 'DailyCheck';

type WidgetPresenceModule = {
  placedWidgets(): Promise<{ kind: string; family: string }[]>;
};

/**
 * The check-in widgets on the Home Screen, one size per widget, read from
 * WidgetKit through the app's own module (`modules/widget-presence`).
 *
 * Null when it cannot be known: a binary built before the module (1.0.4 and
 * earlier, a dev client not rebuilt since) or WidgetKit failing to answer.
 * Null is never read as "not added": nothing is asked of anyone on a guess.
 */
export async function placedWidgets(): Promise<WidgetSize[] | null> {
  const native = requireOptionalNativeModule<WidgetPresenceModule>('WidgetPresence');
  if (native == null) return null;
  try {
    const widgets = await native.placedWidgets();
    return widgets
      .filter((widget) => widget.kind === KIND)
      .map((widget) =>
        widget.family === 'systemSmall' ? 'small' : widget.family === 'systemMedium' ? 'medium' : 'other',
      );
  } catch {
    return null;
  }
}
