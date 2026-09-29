// The app's entry: Expo Router, plus the Android home-screen widget's headless
// task. The launcher runs that task when the app is not open, so it has to be
// registered here, before any screen mounts — a route file would be too late.
import 'expo-router/entry';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  const { registerWidgetTaskHandler } = require('react-native-android-widget');
  const { widgetTaskHandler } = require('./src/features/home-widget');
  registerWidgetTaskHandler(widgetTaskHandler);
}
