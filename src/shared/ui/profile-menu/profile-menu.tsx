import User03Icon from '@hugeicons/core-free-icons/User03Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Pressable, StyleSheet } from 'react-native';

import { colors, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { NavGlass } from '@/shared/ui/glass';

export type ProfileMenuProps = {
  onPress: () => void;
};

/**
 * The avatar. One tap, one destination: the profile screen, where settings,
 * invites and the account controls live.
 *
 * A 48pt circle on the navigation layer. `Pressable` wraps the glass rather
 * than sitting inside it: an interactive glass view installs its own press
 * recogniser, and a `Pressable` in its content view loses the first tap. It
 * never dims on press, because glass under opacity stops rendering.
 */
export function ProfileMenu({ onPress }: ProfileMenuProps) {
  const t = useT();

  return (
    <Pressable accessibilityRole="button" accessibilityLabel={t('common.profile')} onPress={onPress}>
      <NavGlass interactive style={styles.circle}>
        <HugeiconsIcon icon={User03Icon} size={24} color={colors.text} strokeWidth={1.7} />
      </NavGlass>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: target.min,
    height: target.min,
    borderRadius: target.min / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
