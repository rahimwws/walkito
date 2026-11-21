import { useNavigation } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { Button } from '@/shared/ui/button';
import { SheetScreen } from '@/shared/ui/sheet';

const ROUTE = 'widget-nudge';

export type WidgetNudgeSheetProps = {
  visible: boolean;
  /** "Show me again": the walkthrough from its first step, or Android's pin
   * sheet once more. */
  onAgain: () => void;
  /** "Maybe later", or the sheet closed any other way: setup ends, nothing is
   * lost. */
  onLater: () => void;
};

type Handlers = { again: () => void };

/**
 * Asked when the widget step ended and the system says the widget is not on
 * the Home Screen. Kind and short: a line that says it takes three taps, and two answers of equal weight to the person.
 * Asked once per walkthrough, never in a loop: "Maybe later" ends setup.
 *
 * The native form sheet route `/widget-nudge`; this keeps the setup's API and
 * opens it. A swipe down or Close is "Maybe later".
 */
export function WidgetNudgeSheet({ visible, onAgain, onLater }: WidgetNudgeSheetProps) {
  const again = useRef(false);
  useSheetRoute<Handlers>(ROUTE, visible, '/widget-nudge', { again: () => (again.current = true) }, () => {
    const chose = again.current;
    again.current = false;
    if (chose) onAgain();
    else onLater();
  });
  return null;
}

export function WidgetNudgeSheetScreen() {
  const handlers = useSheetHandlers<Handlers>(ROUTE);
  const navigation = useNavigation();
  const t = useT();

  return (
    <SheetScreen
      title={t('setup.widget.nudgeTitle')}
      onClose={() => navigation.goBack()}
      footer={
        <>
          <Button
            label={t('setup.widget.nudgeAgain')}
            onPress={() => {
              handlers()?.again();
              navigation.goBack();
            }}
          />
          <Button label={t('setup.widget.nudgeLater')} variant="ghost" onPress={() => navigation.goBack()} />
        </>
      }>
      <Text style={styles.body}>{t('setup.widget.nudgeBody')}</Text>
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  body: { ...fonts.regular(19), color: colors.text2 },
});
