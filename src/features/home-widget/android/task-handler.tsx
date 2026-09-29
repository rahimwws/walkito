import type { WidgetTaskHandlerProps } from 'react-native-android-widget';

import { getLanguage, translatorFor } from '@/shared/lib/i18n';

import { DailyAndroidWidget, EmptyAndroidWidget } from './daily-widget';
import { savedWidgetProps } from './render';

/**
 * The widget's headless task: the launcher calls it when the widget is added,
 * resized or due an update, and it draws whatever the app last saved. Taps
 * open the app through deep links, so there is nothing to handle on click.
 */
export async function widgetTaskHandler({ widgetAction, renderWidget }: WidgetTaskHandlerProps): Promise<void> {
  if (widgetAction === 'WIDGET_DELETED' || widgetAction === 'WIDGET_CLICK') return;
  const props = savedWidgetProps();
  renderWidget(
    props?.text != null ? (
      <DailyAndroidWidget {...props} />
    ) : (
      <EmptyAndroidWidget label={translatorFor(getLanguage())('widget.tapToCheckIn')} />
    ),
  );
}
