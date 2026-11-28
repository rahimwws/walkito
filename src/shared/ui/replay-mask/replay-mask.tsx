import { View, type ViewProps } from 'react-native';

/**
 * Hides what it wraps from PostHog session recordings.
 *
 * Session replay is on, and the privacy policy promises that nothing showing
 * pain or Apple Health data appears in a recording. Wrap every such screen or
 * element in this.
 *
 * The same three props as the SDK's `PostHogMaskView`, rather than that
 * component itself: importing `posthog-react-native` into a render tree would
 * undo the lazy require in `shared/lib/analytics`, which keeps a build without
 * the native module running. `ph-no-capture` is the documented label the
 * recorder redacts; `collapsable={false}` stops React Native flattening the
 * wrapper away, which would silently take the mask with it.
 */
export const REPLAY_MASK = {
  accessibilityLabel: 'ph-no-capture',
  importantForAccessibility: 'no',
  collapsable: false,
  // The same promise for Shotik's wireframes and tap labels: `nativeID` is what
  // its wireframe blanks out, `shotikMask` what keeps text out of a tap's label
  // (the two things `ShotikMask` sets).
  nativeID: 'shotik-mask',
  shotikMask: true,
} as const satisfies ViewProps & { shotikMask: true };

export function ReplayMask({ children, ...props }: ViewProps) {
  return (
    <View {...props} {...REPLAY_MASK}>
      {children}
    </View>
  );
}
