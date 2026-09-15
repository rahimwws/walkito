import { StyleSheet, Text } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  /**
   * `display` is the block-opening treatment — a much larger title with the
   * subtitle reading as a date or standfirst beneath. `default` is the
   * in-page section heading.
   */
  size?: 'default' | 'display';
};

/** Section title plus an optional subtitle. */
export function SectionHeader({ title, subtitle, size = 'default' }: SectionHeaderProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const theme = meterColors[scheme];
  const display = size === 'display';

  return (
    <>
      <Text
        style={[display ? styles.displayTitle : styles.title, { color: colors.foreground }]}>
        {title}
      </Text>
      {subtitle != null && (
        <Text
          style={[
            display ? styles.displaySubtitle : styles.subtitle,
            { color: display ? colors.foreground : theme.label },
          ]}>
          {subtitle}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
    marginTop: 28,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fonts.regular,
    marginTop: 4,
    marginBottom: 4,
  },
  displayTitle: {
    fontSize: 40,
    fontFamily: fonts.bold,
    letterSpacing: -1,
    lineHeight: 46,
  },
  displaySubtitle: {
    fontSize: 17,
    fontFamily: fonts.medium,
    marginTop: 6,
  },
});
