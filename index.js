// The app's entry: Expo Router, the background on-feet task, plus the Android
// home-screen widget's headless task. The launcher runs that task when the app is not open, so it has to be
// registered here, before any screen mounts — a route file would be too late.
import './store-clock';
import 'expo-router/entry';
import { Platform } from 'react-native';

// The four-hours-on-your-feet check, run by iOS in the background (see
// `on-feet-task.ts`): defined before any screen, as the widget's task is.
require('./src/app/providers/on-feet-task').defineOnFeetTask();

if (Platform.OS === 'android') {
  const { registerWidgetTaskHandler } = require('react-native-android-widget');
  const { widgetTaskHandler } = require('./src/features/home-widget');
  registerWidgetTaskHandler(widgetTaskHandler);
}
