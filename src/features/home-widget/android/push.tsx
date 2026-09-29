import { TurboModuleRegistry } from 'react-native';

import type { DailyWidgetProps } from '../ui/daily-widget';
import { DailyAndroidWidget, EmptyAndroidWidget } from './daily-widget';
import { saveWidgetProps } from './render';

type WidgetLib = typeof import('react-native-android-widget');

/** The library, once its native half is in the binary — it throws otherwise. */
function widgetLib(): WidgetLib | null {
  if (TurboModuleRegistry.get('AndroidWidget') == null) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('react-native-android-widget') as WidgetLib;
}

/**
 * Saves what the widget should show and redraws any placed on the home screen.
 * With `null`, the "open the app" face — for an account that was reset.
 */
export async function pushAndroidWidget(props: DailyWidgetProps | null, emptyLabel: string): Promise<void> {
  saveWidgetProps(props);
  const lib = widgetLib();
  if (lib == null) return;
  await lib.requestWidgetUpdate({
    widgetName: 'DailyCheck',
    renderWidget: () =>
      props?.text != null ? <DailyAndroidWidget {...props} /> : <EmptyAndroidWidget label={emptyLabel} />,
    // Not placed on the home screen: nothing to draw.
    widgetNotFound: () => {},
  });
}
