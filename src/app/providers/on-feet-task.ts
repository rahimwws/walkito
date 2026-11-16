import { requireOptionalNativeModule } from 'expo';
import { AppState, Platform } from 'react-native';

import { motionReadable, todayOnFeetHours } from '@/entities/health';
import { maybeSendOnFeetCheck } from '@/entities/notifications';

/**
 * The background task that reads CoreMotion for the four-hours push.
 *
 * Health wakes the app hourly for its own types and the push is checked on
 * every one of those (`useHealthPipeline`). Someone who never gave Walkito
 * Health has no such wake, and this is theirs: iOS runs a background task at
 * times it chooses (the interval asked for is a floor, not a schedule),
 * which reads the last hours from the motion coprocessor and decides the
 * same way. iOS only: Android has no step history to read.
 *
 * Defined at module scope, from the root `index.js`, because iOS launches the
 * app into the background to run it, before any screen exists.
 */
export const ON_FEET_TASK = 'walkito-on-feet';
/** Minutes; iOS decides when, at no less than this apart. */
const MINIMUM_INTERVAL = 30;

const linked = () =>
  Platform.OS === 'ios' &&
  requireOptionalNativeModule('ExpoTaskManager') != null &&
  requireOptionalNativeModule('ExpoBackgroundTask') != null;

export function defineOnFeetTask(): void {
  if (!linked()) return;
  try {
    const TaskManager = require('expo-task-manager') as typeof import('expo-task-manager');
    const BackgroundTask = require('expo-background-task') as typeof import('expo-background-task');
    if (TaskManager.isTaskDefined(ON_FEET_TASK)) return;
    TaskManager.defineTask(ON_FEET_TASK, async () => {
      try {
        const hours = await todayOnFeetHours(new Date());
        await maybeSendOnFeetCheck(hours, Date.now(), AppState.currentState === 'active');
        return BackgroundTask.BackgroundTaskResult.Success;
      } catch {
        return BackgroundTask.BackgroundTaskResult.Failed;
      }
    });
  } catch {
    // A binary without the modules: the Health wake still checks.
  }
}

/**
 * Asks iOS to run the task from now on, for somebody it can do something
 * for, and takes it back from everybody else. Idempotent.
 *
 * The task reads CoreMotion and nothing else, so it is only for a phone that
 * allows Motion & Fitness (asked once, of somebody Health gives no steps:
 * `askMotionIfHealthIsSilent`). It used to be registered for every iPhone at
 * every launch, the onboarding's first screen included, and iOS then started
 * the app in the background several times a day to read nothing: each of
 * those launches mounted the whole tree, and analytics counted it as a
 * person opening the app. Whoever was registered that way is unregistered the
 * next time this runs, which a background launch does too.
 */
export async function registerOnFeetTask(): Promise<void> {
  if (!linked()) return;
  try {
    const TaskManager = require('expo-task-manager') as typeof import('expo-task-manager');
    const BackgroundTask = require('expo-background-task') as typeof import('expo-background-task');
    const registered = await TaskManager.isTaskRegisteredAsync(ON_FEET_TASK);
    if (!(await motionReadable())) {
      if (registered) await BackgroundTask.unregisterTaskAsync(ON_FEET_TASK);
      return;
    }
    if (registered) return;
    if ((await BackgroundTask.getStatusAsync()) !== BackgroundTask.BackgroundTaskStatus.Available) return;
    await BackgroundTask.registerTaskAsync(ON_FEET_TASK, { minimumInterval: MINIMUM_INTERVAL });
  } catch {
    // Background App Refresh off, or an old binary.
  }
}
