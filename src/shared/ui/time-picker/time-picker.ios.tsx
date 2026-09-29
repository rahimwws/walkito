import { DatePicker, Host } from '@expo/ui/swift-ui';
import { datePickerStyle } from '@expo/ui/swift-ui/modifiers';

import { useColorScheme } from '@/shared/lib/theme';

import type { TimePickerProps } from './types';

/** iOS: the system's own time control — a compact pill, or the full wheel. */
export function TimePicker({ minutes, onChange, variant = 'compact' }: TimePickerProps) {
  const scheme = useColorScheme();
  const at = new Date();
  at.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);

  return (
    <Host matchContents colorScheme={scheme}>
      <DatePicker
        selection={at}
        displayedComponents={['hourAndMinute']}
        modifiers={variant === 'wheel' ? [datePickerStyle('wheel')] : []}
        onDateChange={(date) => onChange(date.getHours() * 60 + date.getMinutes())}
      />
    </Host>
  );
}
