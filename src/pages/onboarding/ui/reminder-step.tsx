import { StyleSheet, View } from 'react-native';

import { TimePicker } from '@/shared/ui/time-picker';

/**
 * The daily reminder's time, on the system's own control — the wheel on iOS,
 * the clock dial on Android — the same one Settings uses to change it later.
 */
export function ReminderStep({ minutes, onChange }: { minutes: number; onChange: (minutes: number) => void }) {
  return (
    <View style={styles.root}>
      <TimePicker minutes={minutes} onChange={onChange} variant="wheel" />
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
