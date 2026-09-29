/**
 * The home-screen widget: today's check-in in the small size, today's goal and
 * the week in the medium one. The check-in cards open Home on
 * `?checkin=fine|hurts`, which `pages/home` handles. One widget kind, `DailyCheck`, declared in
 * `app.json` under the `expo-widgets` plugin.
 *
 * The root layout mounts `useHomeWidget` once; nothing else needs to know.
 */
export { useHomeWidget } from './model/use-home-widget';
export { widgetTaskHandler } from './android/task-handler';
