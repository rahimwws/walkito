import * as Haptics from 'expo-haptics';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';

import { checkInOn, currentDay, useLogsVersion } from '@/entities/program';
import {
  Mascot,
  MascotStill,
  heartRig,
  idleRig,
  sleepingRig,
  thumbsUpRig,
  waveRig,
  type MascotHandle,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';

import { answerFor } from '../model/check-in';
import type { SceneTime } from './header-scene';

/** `feet`: where it rests in its square, from the top, when that is not the rig's ground line. */
type Pose = { rig: MascotRig; tap: MascotShot | null; feet?: number };

/**
 * Who stands in the scene today. A check-in that said it hurt comes first and
 * gets the one hugging a heart: calm and caring, never sad. Then the evening's
 * sleeper, the thumbs up once today's session is done, the idle one on a rest
 * day and the wave in the morning. A tap plays its reaction; the sleeper only
 * stirs.
 */
function poseFor(time: SceneTime, done: boolean, rest: boolean): Pose {
  const today = checkInOn(currentDay());
  if (today != null && answerFor(today.score) === 'hurt') return { rig: heartRig, tap: 'nod' };
  // Sitting, the ground line is under the seat and the legs reach past it.
  if (time === 'evening') return { rig: sleepingRig, tap: null, feet: 0.9 };
  if (done) return { rig: thumbsUpRig, tap: 'happy' };
  if (rest) return { rig: idleRig, tap: 'hop' };
  if (time === 'morning') return { rig: waveRig, tap: 'wave' };
  return { rig: idleRig, tap: 'hop' };
}

/** Where the feet are in the mascot's square, from the top. */
function feetAt(rig: MascotRig): number {
  return (rig.ground[1] - rig.box.y) / rig.box.size;
}

export type TodayMascotProps = {
  time: SceneTime;
  done: boolean;
  rest: boolean;
  size: number;
  /** The feet's line, from the top of the scene. */
  ground: number;
  /** Today is in front: the idle stops while it is not. */
  active: boolean;
};

/**
 * The mascot standing big in the middle of the header scene, as BitePal's
 * raccoon does (#97). Hidden from VoiceOver: the name and the cards say
 * what it is about. Silent, as Home always was. With Reduce Motion it is the
 * still drawing.
 */
export function TodayMascot({ time, done, rest, size, ground, active }: TodayMascotProps) {
  useLogsVersion();
  const reduceMotion = useReducedMotion();
  const mascot = useRef<MascotHandle>(null);
  const { rig, tap, feet = feetAt(rig) } = poseFor(time, done, rest);
  return (
    <View
      style={[styles.stand, { width: size, height: size, top: ground - feet * size, marginLeft: -size / 2 }]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {reduceMotion ? (
        <MascotStill rig={rig} size={size} face={rig.moods.idle} />
      ) : (
        <Mascot
          key={rig.name}
          ref={mascot}
          rig={rig}
          size={size}
          paused={!active}
          easterEgg={false}
          onPress={() => {
            void Haptics.selectionAsync();
            if (tap != null) mascot.current?.play(tap);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  stand: { position: 'absolute', left: '50%' },
});
