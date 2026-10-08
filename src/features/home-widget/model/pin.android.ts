/**
 * Asks the launcher to pin the check-in widget, which most Android launchers
 * do with a sheet of their own. False when the launcher cannot, and then the
 * caller falls back to the same walkthrough iPhone gets.
 */
export async function requestWidgetPin(): Promise<boolean> {
  try {
    const { requestPinWidget } = require('react-native-android-widget') as typeof import('react-native-android-widget');
    return await requestPinWidget({ widgetName: 'DailyCheck' });
  } catch {
    return false;
  }
}
