import Megaphone01Icon from '@hugeicons/core-free-icons/Megaphone01Icon';
import * as Haptics from 'expo-haptics';
import { Switch } from 'react-native';

import {
  cancelComebackPushes,
  cancelDayOneReminders,
  cancelNextDayPush,
  cancelWinback,
  setOfferPushes,
  useOfferPushes,
} from '@/entities/notifications';
import { bitepal, bodyColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { GroupedRow, GroupedSection } from '@/shared/ui/grouped-list';

/**
 * Notifications about offers, on or off: the way out Apple asks for beside a
 * promotional notification (guideline 4.5.4). Turning it off also takes back
 * any offer notification already laid. Reminders and progress stay as they are.
 */
export function OfferSettings() {
  const t = useT();
  const on = useOfferPushes();

  return (
    <GroupedSection title={t('settings.notifications.title')}>
      <GroupedRow
        icon={Megaphone01Icon}
        tone={bodyColors.heel}
        label={t('settings.notifications.offers')}
        accessory={
          <Switch
            value={on}
            trackColor={{ true: bitepal.selected }}
            thumbColor="#FFFFFF"
            accessibilityLabel={t('settings.notifications.offers')}
            onValueChange={(next) => {
              void Haptics.selectionAsync();
              setOfferPushes(next);
              if (!next) {
                void cancelComebackPushes();
                void cancelNextDayPush();
                void cancelDayOneReminders();
                void cancelWinback();
              }
            }}
          />
        }
      />
    </GroupedSection>
  );
}
