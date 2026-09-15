import { Button, Host, Image, Menu } from '@expo/ui/swift-ui';
import { clipShape, frame, foregroundStyle, glassEffect } from '@expo/ui/swift-ui/modifiers';

import { palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import type { ProfileMenuProps } from './profile-menu';

/** Matches the other header capsules (24pt glyph in 8pt of padding). */
const GLYPH_SIZE = 24;
const CAPSULE_SIZE = GLYPH_SIZE + 16;

/**
 * The avatar, rendered as a real SwiftUI `Menu` so a tap opens the system
 * dropdown with its native blur, spring, and haptics.
 *
 * The trigger is built in SwiftUI rather than reusing our RN `GlassView`:
 * `Menu` needs its label to be SwiftUI content, and React Native views cannot
 * nest inside a `Host`. The `glassEffect` modifier gives the same liquid glass
 * the sibling capsules get, so the seam is invisible.
 *
 * Isolated in a `.ios` file so Android and web bundles never pull SwiftUI in —
 * the same split `AnimatedNumber` uses.
 */
export function ProfileMenu({ onReferFriend, onSettings }: ProfileMenuProps) {
  const scheme = useColorScheme();

  return (
    <Host matchContents>
      <Menu
        label={
          <Image
            systemName="person.crop.circle.fill"
            modifiers={[
              frame({ width: GLYPH_SIZE, height: GLYPH_SIZE }),
              foregroundStyle(scheme === 'dark' ? '#8E8E93' : '#98989E'),
            ]}
          />
        }
        modifiers={[
          frame({ width: CAPSULE_SIZE, height: CAPSULE_SIZE }),
          glassEffect({ glass: { variant: 'regular', interactive: true } }),
          clipShape('circle'),
        ]}>
        <Button label="Refer a friend" systemImage="gift" onPress={onReferFriend} />
        <Button label="Settings" systemImage="gearshape" onPress={onSettings} />
      </Menu>
    </Host>
  );
}
