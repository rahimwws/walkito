import { Host, Picker, Text } from '@expo/ui/swift-ui';
import { controlSize, pickerStyle, tag } from '@expo/ui/swift-ui/modifiers';
import { Platform, StyleSheet } from 'react-native';

import { useColorScheme } from '@/shared/lib/theme';
import { SegmentedControl } from '@/shared/ui/segmented-control';

export type MonthPickerProps = {
  labels: readonly string[];
  selected: number;
  onChange: (index: number) => void;
};

/**
 * The outlook's month switcher, as the system's own segmented control.
 *
 * Native on iOS so it is drawn in liquid glass and moves with the platform's
 * own thumb — the one control on the screen a user will actually drag, and the
 * one where a hand-built imitation is most noticeable. Everywhere else it falls
 * back to the app's segmented control, which is the same shape in our paint.
 */
export function MonthPicker({ labels, selected, onChange }: MonthPickerProps) {
  const scheme = useColorScheme();

  if (Platform.OS !== 'ios') {
    return <SegmentedControl segments={labels} selectedIndex={selected} onChange={onChange} />;
  }

  return (
    <Host matchContents={{ vertical: true }} colorScheme={scheme} style={styles.host}>
      <Picker
        selection={selected}
        onSelectionChange={(next: number) => onChange(next)}
        modifiers={[pickerStyle('segmented'), controlSize('large')]}>
        {labels.map((label, i) => (
          <Text key={label} modifiers={[tag(i)]}>
            {label}
          </Text>
        ))}
      </Picker>
    </Host>
  );
}

const styles = StyleSheet.create({
  host: { alignSelf: 'stretch' },
});
