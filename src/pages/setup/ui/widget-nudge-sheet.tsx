import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SheetScreen } from '@/shared/ui/sheet';

const ROUTE = 'widget-nudge';

type Choice = 'again' | 'later';
type Handlers = { answer: (choice: Choice) => void };

export type WidgetNudgeSheetProps = {
  visible: boolean;
  /** "Show me again": the walkthrough from its first step, or Android's pin
   * sheet once more. */
  onAgain: () => void;
  /** "Maybe later", or a swipe down: setup ends, nothing is lost. */
  onLater: () => void;
};

/**
 * Asked when the widget step ended and the system says the widget is not on
 * the Home Screen. Kind and short: a line that says it takes three taps, and two answers of equal weight to the person.
 * Asked once per walkthrough, never in a loop: "Maybe later" ends setup.
 *
 * The native form sheet route `/sheet/widget-nudge` (`WidgetNudgeSheetScreen`);
 * this keeps the setup page's `visible` / callback API and opens it. The
 * answer runs once the sheet has gone, so neither the walkthrough nor
 * Android's pin sheet rises under it. Closed by the page (the widget turned
 * up), it answers nothing.
 */
export function WidgetNudgeSheet({ visible, onAgain, onLater }: WidgetNudgeSheetProps) {
  const choice = useRef<Choice>('later');
  useSheetRoute<Handlers>(
    ROUTE,
    visible,
    '/sheet/widget-nudge',
    {
      answer: (next) => {
        choice.current = next;
      },
    },
    (closedByHost) => {
      const answered = choice.current;
      choice.current = 'later';
      if (closedByHost) return;
      if (answered === 'again') onAgain();
      else onLater();
    },
  );
  return null;
}

export function WidgetNudgeSheetScreen() {
  const handlers = useSheetHandlers<Handlers>(ROUTE);
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const answer = (choice: Choice) => {
    handlers()?.answer(choice);
    navigation.goBack();
  };

  return (
    <SheetScreen>
      <View style={styles.body}>
        <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
          {t('setup.widget.nudgeTitle')}
        </Text>
        <Text style={[styles.text, { color: meter.caption }]}>{t('setup.widget.nudgeBody')}</Text>
        <PrimaryButton label={t('setup.widget.nudgeAgain')} onPress={() => answer('again')} style={styles.cta} />
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            Haptics.selectionAsync();
            answer('later');
          }}
          hitSlop={8}
          style={({ pressed }) => [styles.later, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.laterText, { color: meter.caption }]}>{t('setup.widget.nudgeLater')}</Text>
        </Pressable>
      </View>
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  body: { alignItems: 'center' },
  title: { ...fonts.heavy(24, -0.6), lineHeight: 29, textAlign: 'center' },
  text: { ...fonts.regular(16), lineHeight: 22, textAlign: 'center', marginTop: 8 },
  cta: { alignSelf: 'stretch', marginTop: 20 },
  later: { alignItems: 'center', paddingTop: 14, paddingBottom: 6 },
  laterText: fonts.semibold(15, -0.2),
});
