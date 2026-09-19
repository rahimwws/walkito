import User03Icon from '@hugeicons/core-free-icons/User03Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { GlassView } from 'expo-glass-effect';
import { Pressable, StyleSheet } from 'react-native';

import { useColorScheme } from '@/shared/lib/theme';

export type ProfileMenuProps = {
  onPress: () => void;
};

/**
 * The avatar. One tap, one destination.
 *
 * This was a native SwiftUI `Menu` with two entries, "Refer a friend" and
 * "Settings". Both now live on the profile screen along with the account
 * controls, so the dropdown was a menu whose every item was also one scroll
 * further on — an extra decision in front of a screen that answers it.
 *
 * `Pressable` wraps the glass rather than sitting inside it. An interactive
 * `GlassView` installs its own native press recogniser, and a `Pressable`
 * mounted into its content view is a descendant of that recogniser: it loses
 * the first tap. Three controls in this app had that bug.
 */
export function ProfileMenu({ onPress }: ProfileMenuProps) {
  const scheme = useColorScheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Profile"
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.7 }}>
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
