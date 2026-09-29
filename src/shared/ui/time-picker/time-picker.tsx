import { DateTimePicker, Host, TimePickerDialog } from '@expo/ui/jetpack-compose';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import type { TimePickerProps } from './types';

function isoFor(minutes: number): string {
  const at = new Date();
  at.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
  return at.toISOString();
}

function label(minutes: number): string {
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}

/**
 * Android: Material 3's time picker. In a row it is the time as a pill that
 * opens the system dialog; as the whole control it is the clock dial inline.
 */
export function TimePicker({ minutes, onChange, variant = 'compact' }: TimePickerProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const [open, setOpen] = useState(false);
  const t = useT();
  const toMinutes = (date: Date) => date.getHours() * 60 + date.getMinutes();

  if (variant === 'wheel') {
    return (
      <Host matchContents>
        <DateTimePicker
          initialDate={isoFor(minutes)}
          displayedComponents="hourAndMinute"
          is24Hour
          color={PRIMARY}
          onDateSelected={(date) => onChange(toMinutes(date))}
        />
      </Host>
    );
  }

  return (
    <>
      <Pressable
        accessibilityRole="button"
        onPress={() => setOpen(true)}
        style={({ pressed }) => [styles.pill, { backgroundColor: meter.track }, pressed && { opacity: 0.6 }]}>
        <Text style={[styles.value, { color: colors.foreground }]}>{label(minutes)}</Text>
      </Pressable>
      {open && (
        <Host matchContents>
          <TimePickerDialog
            initialDate={isoFor(minutes)}
            is24Hour
            color={PRIMARY}
            confirmButtonLabel={t('common.done')}
            dismissButtonLabel={t('common.cancel')}
            onDateSelected={(date) => {
              setOpen(false);
              onChange(toMinutes(date));
            }}
            onDismissRequest={() => setOpen(false)}
          />
        </Host>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  value: {
    fontSize: 17,
    fontFamily: fonts.semibold,
  },
});
