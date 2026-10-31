import GoogleIcon from '@hugeicons/core-free-icons/GoogleIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';

/** The Google "G" on "Continue with Google". iOS draws Apple's logo instead
 * (`platform-logo.ios.tsx`). */
export function PlatformLogo({ color, size = 22 }: { color: string; size?: number }) {
  return <HugeiconsIcon icon={GoogleIcon} size={size} color={color} strokeWidth={2.2} />;
}
