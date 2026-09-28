import { DatePicker, Host } from '@expo/ui/swift-ui';
import { datePickerStyle } from '@expo/ui/swift-ui/modifiers';
import { StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/shared/lib/theme';

/**
 * The daily reminder's time, on the system's own wheel — the same control
 * Settings uses to change it later, so the two never disagree about what a
 * time looks like.
 */
export function ReminderStep({ minutes, onChange }: { minutes: number; onChange: (minutes: number) => void }) {
  const scheme = useColorScheme();
  const at = new Date();
  at.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);

  return (
    <View style={styles.root}>
      <Host matchContents colorScheme={scheme}>
        <DatePicker
          selection={at}
          displayedComponents={['hourAndMinute']}
          modifiers={[datePickerStyle('wheel')]}
          onDateChange={(date) => onChange(date.getHours() * 60 + date.getMinutes())}
        />
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
