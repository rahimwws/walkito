import { HStack, Image, Spacer, Text, VStack } from '@expo/ui/swift-ui';
import {
  font,
  foregroundStyle,
  frame,
  monospacedDigit,
  padding,
} from '@expo/ui/swift-ui/modifiers';
import { createLiveActivity, type LiveActivityEnvironment } from 'expo-widgets';

/**
 * What the Lock Screen is told about a running session.
 *
 * Every field is finished text or a finished instant. The widget body cannot
 * import, cannot reach module scope, and cannot hold state, so anything that
 * needs arithmetic or formatting — the position line, the frozen clock — is
 * computed by the app and handed over ready to draw.
 */
export type SessionActivityProps = {
  move: string;
  /** "Exercise 2 of 3", written out by the caller. */
  position: string;
  /**
   * Lower bound of the countdown, in epoch milliseconds.
   *
   * A number rather than a `Date` because props reach the widget through
   * `JSON.stringify`, which writes a Date out as an ISO *string*. The Swift
   * side wants a real `Date` for the timer range; a string satisfies neither,
   * so the range resolves to nil and the countdown quietly degrades to static
   * text. Milliseconds survive the round trip, and the widget rebuilds the
   * dates itself — the same thing expo-widgets' own runtime does with its
   * environment timestamp.
   */
  startedAtMs: number;
  /** When the move hits zero, epoch milliseconds. Guaranteed by the caller to
   * sit at or after `startedAtMs` — SwiftUI traps on an inverted range. */
  endsAtMs: number;
  paused: boolean;
  /** "00:42" — what to show while paused, since a live timer cannot be frozen
   * in place. */
  frozen: string;
};

/**
 * The session, on the Lock Screen and in the Dynamic Island.
 *
 * The whole point is that this keeps counting with the phone locked and the app
 * suspended — which is the actual posture of someone doing a thirty-second calf
 * hold. That works because the countdown is not pushed or polled: `timerInterval`
 * compiles to SwiftUI's self-updating `Text`, drawn by the render server from a
 * pair of dates. The app can be dead and the number is still right.
 *
 * Pausing therefore cannot be done by stopping anything. There is no "resume
 * time" to give SwiftUI, so a paused session swaps the live timer for a plain
 * string and the app shifts both bounds forward when it starts again.
 *
 * Colours are hex literals rather than `palette` on purpose: the `'widget'`
 * directive forbids referencing anything outside this function, imports
 * included. Keep them in step with `@/shared/config` by hand.
 */
const SessionActivity = (props: SessionActivityProps, environment: LiveActivityEnvironment) => {
  'widget';

  // Dimmed on an always-on display, where a saturated accent smears.
  const accent = environment.isLuminanceReduced ? '#FFFFFF' : '#FF9245';
  const muted = '#9E9EA6';
  const glyph = props.paused ? 'pause.fill' : 'figure.walk';

  const clock = (size: number) =>
    props.paused ? (
      <Text
        modifiers={[
          font({ size, weight: 'bold', design: 'rounded' }),
          monospacedDigit(),
          foregroundStyle(muted),
        ]}>
        {props.frozen}
      </Text>
    ) : (
      <Text
        // Rebuilt here, not passed in: see the note on `startedAtMs`. The
        // serialiser calls `.getTime()` on both bounds, so anything that is not
        // a real Date throws inside the widget process and the activity draws
        // nothing at all.
        timerInterval={{ lower: new Date(props.startedAtMs), upper: new Date(props.endsAtMs) }}
        countsDown
        modifiers={[
          font({ size, weight: 'bold', design: 'rounded' }),
          monospacedDigit(),
          foregroundStyle('#FFFFFF'),
        ]}>
        {props.frozen}
      </Text>
    );

  return {
    banner: (
      // Made to fill the banner before the Spacer can mean anything: an HStack
      // sized to its own content leaves the clock sitting against the label
      // with dead space to its right, which is where it was.
      //
      // A large finite width rather than `Infinity`, which is what SwiftUI
      // itself would take. Props reach this process as JSON, and JSON has no
      // infinity — it would arrive as `null` and the modifier would do nothing.
      // SwiftUI clamps an oversized maxWidth to the space available, so the
      // effect is identical and it cannot be lost in transit.
      <HStack modifiers={[padding({ all: 14 }), frame({ maxWidth: 9999 })]}>
        <Image systemName={glyph} color={accent} size={26} />
        <VStack alignment="leading" spacing={2} modifiers={[padding({ leading: 12 })]}>
          <Text modifiers={[font({ size: 17, weight: 'semibold', design: 'rounded' })]}>
            {props.move}
          </Text>
          <Text
            modifiers={[
              font({ size: 13, weight: 'medium', design: 'rounded' }),
              foregroundStyle(muted),
            ]}>
            {props.position}
          </Text>
        </VStack>
        <Spacer />
        {clock(34)}
      </HStack>
    ),

    compactLeading: <Image systemName={glyph} color={accent} size={16} />,
    // Fixed width: the digits are drawn out of process, so a self-sizing timer
    // makes the whole island twitch every second as the glyphs change.
    compactTrailing: <VStack modifiers={[frame({ width: 44 })]}>{clock(15)}</VStack>,
    minimal: <Image systemName={glyph} color={accent} size={16} />,

    expandedLeading: (
      <Text
        modifiers={[
          font({ size: 14, weight: 'semibold', design: 'rounded' }),
          padding({ leading: 4 }),
        ]}>
        {props.move}
      </Text>
    ),
    expandedTrailing: (
      <Text
        modifiers={[
          font({ size: 14, weight: 'medium', design: 'rounded' }),
          foregroundStyle(muted),
          padding({ trailing: 4 }),
        ]}>
        {props.position}
      </Text>
    ),
    expandedCenter: <VStack modifiers={[padding({ top: 6 })]}>{clock(44)}</VStack>,
  };
};

export const SessionTimerActivity = createLiveActivity('SessionTimer', SessionActivity);
