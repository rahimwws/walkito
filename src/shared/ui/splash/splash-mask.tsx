import { Canvas, ColorMatrix, Fill, Group, Image, useImage } from '@shopify/react-native-skia';
import { memo, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  type SharedValue,
} from 'react-native-reanimated';

import {
  SOLID_ALPHA_GAIN,
  artOpacity,
  coverScale,
  focusPoint,
  focusRadius,
  holeOpacity,
  revealScale,
  revealTilt,
  veilOpacity,
  type Box,
} from './reveal-math';

/** The same still the native splash and the update reload screen show. */
const MASCOT = require('@assets/update/mascot-handoff.png');

/**
 * Colour untouched, alpha multiplied by `SOLID_ALPHA_GAIN` (and clamped to 1 by
 * Skia): every pixel inside him becomes a clean hole. See the note on the gain.
 */
const SOLID_ALPHA = [
  1, 0, 0, 0, 0,
  0, 1, 0, 0, 0,
  0, 0, 1, 0, 0,
  0, 0, 0, SOLID_ALPHA_GAIN, 0,
];

export type SplashMaskProps = {
  width: number;
  height: number;
  box: Box;
  background: string;
  /** The crouch's eased progress, 0–1. */
  crouch: SharedValue<number>;
  /** The leap's linear progress, 0–1. */
  zoom: SharedValue<number>;
  /** The image is decoded and has been on screen for two frames. */
  onPainted: () => void;
  /** The image could not be loaded; the reveal falls back to a fade. */
  onFailed: () => void;
};

/**
 * The reveal itself, in Skia: the splash as one layer with a hole in it the
 * shape of the mascot, and the mascot drawn over the hole.
 *
 * The layer is the background colour with the still drawn into it in `dstOut`,
 * which erases wherever he is opaque, so through him is the app. On top of
 * that, the same still drawn normally, at the same scale. At rest the two
 * cancel out and the picture is just the splash. As he leaps the drawn one
 * fades, so the white mascot turns into a window onto the app, and the window
 * keeps growing about his body until it is past every corner of the screen.
 *
 * Required lazily by `SplashReveal`, never imported, so Skia's module is not
 * evaluated in the first frame. Everything moves on the UI thread: the props
 * below are derived values, which Skia redraws from without a React render.
 */
export const SplashMask = memo(function SplashMask({
  width,
  height,
  box,
  background,
  crouch,
  zoom,
  onPainted,
  onFailed,
}: SplashMaskProps) {
  const failed = useRef(onFailed);
  failed.current = onFailed;
  const painted = useRef(onPainted);
  painted.current = onPainted;

  const image = useImage(MASCOT, () => failed.current());

  const focus = focusPoint(box);
  const endScale = coverScale(width, height, focus, focusRadius(box));

  const transform = useDerivedValue(() => [
    { rotate: revealTilt(crouch.value, zoom.value) },
    { scale: revealScale(crouch.value, zoom.value, endScale) },
  ]);
  const hole = useDerivedValue(() => holeOpacity(zoom.value));
  const art = useDerivedValue(() => artOpacity(zoom.value));
  const veil = useAnimatedStyle(() => ({ opacity: veilOpacity(zoom.value) }));

  // Skia draws a new picture on a later frame than the one React commits it
  // in. Two frames after the image arrives it is on screen, and only then may
  // the React Native cover above be taken away.
  useEffect(() => {
    if (image == null) return;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => painted.current());
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [image]);

  return (
    <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, veil]}>
      {/* sRGB, not Skia's default P3: the cover above is drawn by UIKit in
          sRGB and converted by Core Animation, and a surface in the same space
          gets the same conversion, so the swap from one to the other matches
          to the bit rather than to a rounding. */}
      <Canvas colorSpace="srgb" style={StyleSheet.absoluteFill}>
        <Group layer>
          <Fill color={background} />
          <Group origin={focus} transform={transform}>
            <Image
              image={image}
              x={box.x}
              y={box.y}
              width={box.size}
              height={box.size}
              fit="contain"
              blendMode="dstOut"
              opacity={hole}>
              <ColorMatrix matrix={SOLID_ALPHA} />
            </Image>
          </Group>
        </Group>
        <Group origin={focus} transform={transform}>
          <Image
            image={image}
            x={box.x}
            y={box.y}
            width={box.size}
            height={box.size}
            fit="contain"
            opacity={art}
          />
        </Group>
      </Canvas>
    </Animated.View>
  );
});
