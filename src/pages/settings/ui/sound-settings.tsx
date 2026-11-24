import Mic01Icon from '@hugeicons/core-free-icons/Mic01Icon';
import VolumeHighIcon from '@hugeicons/core-free-icons/VolumeHighIcon';
import * as Haptics from 'expo-haptics';
import { Switch } from 'react-native';

import { bitepal, bodyColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { setSoundPrefs, useSoundPrefs } from '@/shared/lib/sound';
import { GroupedRow, GroupedSection } from '@/shared/ui/grouped-list';

/**
 * The session's sounds. Tempo sounds are the beat a tempo move is done to; the
 * voice counts it out ("up · 2 · 3 · hold"). The player has the same tempo
 * switch in its header, so it can be turned off mid-set without coming here.
 */
export function SoundSettings() {
  const t = useT();
  const sound = useSoundPrefs();

  return (
    <GroupedSection>
      <GroupedRow
        icon={VolumeHighIcon}
        tone={bodyColors.arch}
        label={t('settings.sound.tempo')}
        accessory={
          <Switch
            value={sound.tempo}
            trackColor={{ true: bitepal.selected }}
            thumbColor="#FFFFFF"
            accessibilityLabel={t('settings.sound.tempo')}
            onValueChange={(on) => {
              void Haptics.selectionAsync();
              setSoundPrefs({ tempo: on });
            }}
          />
        }
      />
      <GroupedRow
        icon={Mic01Icon}
        tone={bodyColors.calf}
        label={t('settings.sound.voice')}
        disabled={!sound.tempo}
        accessory={
          <Switch
            value={sound.voice}
            disabled={!sound.tempo}
            trackColor={{ true: bitepal.selected }}
            thumbColor="#FFFFFF"
            accessibilityLabel={t('settings.sound.voice')}
            onValueChange={(on) => {
              void Haptics.selectionAsync();
              setSoundPrefs({ voice: on });
            }}
          />
        }
      />
    </GroupedSection>
  );
}
