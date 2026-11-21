import { Button, Host, Text as SwiftText } from '@expo/ui/swift-ui';
import { buttonStyle, controlSize, font, frame, tint } from '@expo/ui/swift-ui/modifiers';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

import { fonts } from '@/shared/config';
import { colors, radius, target } from '@/shared/config/tokens';

import { useNavGlass } from './use-nav-glass';

export type StartButtonProps = {
  label: string;
  onPress: () => void;
};

/**
 * The floating Start on Today and Session detail (spec §4): SwiftUI's
 * `glassProminent` button on iOS 26+, tinted ink. Everywhere else the solid
 * black button, full width and 56pt tall. Only these two screens float it;
 * every other primary action is the solid button.
 */
export function StartButton({ label, onPress }: StartButtonProps) {
  const glass = useNavGlass();
  const press = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  if (glass && Platform.OS === 'ios') {
    return (
      <Host matchContents={{ vertical: true }} style={styles.host}>
        <Button
          onPress={press}
          modifiers={[buttonStyle('glassProminent'), controlSize('extraLarge'), tint(colors.ink)]}>
          {/* The frame on the label, not the button: the glass hugs its label,
              so a frame outside it widens the layout and leaves the glass
              content-sized. */}
          <SwiftText modifiers={[font({ size: 19, weight: 'semibold' }), frame({ maxWidth: Infinity, minHeight: target.primary - 24 })]}>
            {label}
          </SwiftText>
        </Button>
      </Host>
    );
  }

  return (
    <Pressable accessibilityRole="button" onPress={press} style={({ pressed }) => [styles.solid, pressed && styles.pressed]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  host: { alignSelf: 'stretch' },
  solid: {
    alignSelf: 'stretch',
    minHeight: target.primary,
    borderRadius: radius.button,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  pressed: { opacity: 0.85 },
  label: { ...fonts.semibold(19), color: colors.onInk, textAlign: 'center' },
});
