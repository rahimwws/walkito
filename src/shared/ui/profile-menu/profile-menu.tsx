import User03Icon from '@hugeicons/core-free-icons/User03Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { GlassView } from 'expo-glass-effect';
import { Pressable, StyleSheet } from 'react-native';

import { palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type ProfileMenuProps = {
  onReferFriend: () => void;
  onSettings: () => void;
};

/**
 * Android/web fallback for the iOS SwiftUI menu.
 *
 * There is no native dropdown to fall back on here, so the avatar goes
 * straight to settings — the destination behind the menu's main entry —
 * rather than half-simulating a menu with a JS popover that would look
 * out of place on both platforms.
 */
export function ProfileMenu({ onSettings }: ProfileMenuProps) {
  const scheme = useColorScheme();

  return (
    <Pressable onPress={onSettings} style={({ pressed }) => pressed && { opacity: 0.7 }}>
      <GlassView isInteractive style={styles.capsule}>
        <HugeiconsIcon
          icon={User03Icon}
          size={24}
          color={scheme === 'dark' ? '#8E8E93' : '#98989E'}
        />
      </GlassView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  capsule: {
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
