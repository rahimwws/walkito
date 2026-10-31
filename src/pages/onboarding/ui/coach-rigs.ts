import {
  celebrateRig,
  handsUpRig,
  idleRig,
  painRig,
  pointingRig,
  reminderRig,
  runningRig,
  sleepingRig,
  thinkingRig,
  thumbsUpRig,
  walkingRig,
  type MascotRig,
} from '@/shared/ui/mascot';

import type { CoachPose } from '../model/coach';

/**
 * The traced rig for each of the coach's poses.
 *
 * Its own file because `model/coach.ts` stays pure for its test, and the
 * mascot barrel loads react-native. Typed as a full record, so a pose added
 * to `CoachPose` without its art fails to compile. Sad, surprised, trophy and
 * gift are not in `CoachPose` and so cannot be reached from here.
 */
const RIGS: Readonly<Record<CoachPose, MascotRig>> = {
  idle: idleRig,
  celebrate: celebrateRig,
  thinking: thinkingRig,
  sleeping: sleepingRig,
  pointing: pointingRig,
  thumbsUp: thumbsUpRig,
  running: runningRig,
  // The sore-foot pose, worn without its ache marks (no `ache` prop) on the
  // pain question; the morning scale draws it with its own.
  pain: painRig,
  handsUp: handsUpRig,
  walking: walkingRig,
  // The notification ask draws him itself (`NotifyStep`), from this; the
  // habit and the minutes have him in the corner, ringing it (`RING`).
  reminder: reminderRig,
};

export function rigFor(pose: CoachPose): MascotRig {
  return RIGS[pose];
}
