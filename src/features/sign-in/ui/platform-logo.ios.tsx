import { Host, Image } from '@expo/ui/swift-ui';

/**
 * The Apple logo on "Continue with Apple": the system's own `apple.logo` SF
 * Symbol, drawn by SwiftUI.
 *
 * The one glyph outside Hugeicons in the app's own screens, for the reason
 * WidgetKit is: Hugeicons Free has the logo only as an outline, and Apple's
 * guidelines for a custom Sign in with Apple button ask for its logo as Apple
 * draws it. Android's file draws Google's.
 */
export function PlatformLogo({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <Host matchContents>
      <Image systemName="apple.logo" size={size} color={color} />
    </Host>
  );
}
