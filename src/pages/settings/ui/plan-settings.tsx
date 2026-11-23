import BedIcon from '@hugeicons/core-free-icons/BedIcon';
import ClothesIcon from '@hugeicons/core-free-icons/ClothesIcon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import EntranceStairsIcon from '@hugeicons/core-free-icons/EntranceStairsIcon';
import Location01Icon from '@hugeicons/core-free-icons/Location01Icon';
import Notification01Icon from '@hugeicons/core-free-icons/Notification01Icon';
import TennisBallIcon from '@hugeicons/core-free-icons/TennisBallIcon';
import { type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Modal, StyleSheet, Switch, Text, View, type ColorValue } from 'react-native';

import { LegMap, ZONE_LABEL_KEYS, painAreasOf, toggleZone, type LegZone } from '@/entities/leg-zone';
import { wakeMinutes } from '@/entities/notifications';
import { getIntake, saveIntake, useIntake } from '@/entities/profile';
import {
  EQUIPMENT,
  OUTCOME_KINDS,
  outcome as readOutcome,
  planSettings,
  rebuildRestOfWeek,
  setOutcomeAreas,
  setOutcomeKind,
  setPlanSettings,
  usePlanVersion,
  usualStartMinute,
  type DaysPerWeek,
  type Equipment,
  type SessionMinutes,
} from '@/entities/program';
import { lastSyncAt } from '@/entities/program/sync';
import { bitepal, bodyColors, colors, fonts } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { GroupedRow, GroupedSection } from '@/shared/ui/grouped-list';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { TimePicker } from '@/shared/ui/time-picker';

import { AccountRow } from './account-row';
import { Choice } from './choice';

const DAYS: readonly DaysPerWeek[] = [3, 5, 7];
const MINUTES: readonly SessionMinutes[] = [3, 5, 10];
const SIDES = ['left', 'right', 'both'] as const;
const SIDE_KEYS = { left: 'settings.footLeft', right: 'settings.footRight', both: 'settings.footBoth' } as const;

/** Each kit item's row icon and colour. */
const EQUIPMENT_LOOK: Record<Equipment, { icon: IconSvgElement; tone: ColorValue }> = {
  step: { icon: EntranceStairsIcon, tone: bodyColors.heel },
  band: { icon: Dumbbell01Icon, tone: bodyColors.arch },
  towel: { icon: ClothesIcon, tone: bodyColors.calf },
  pillow: { icon: BedIcon, tone: bodyColors.ankle },
  ball: { icon: TennisBallIcon, tone: bodyColors.toes },
};

/**
 * What onboarding asked, answerable again, in BitePal's white cards: the goal,
 * days, minutes and foot as pills, where it hurts and the reminder as rows
 * with their round icons, and the kit as switches. Any change re-plans the
 * rest of this week straight away: `setPlanSettings` rebuilds from today on,
 * and the foot and the zones rebuild explicitly.
 */
export function PlanSettings() {
  const t = useT();
  usePlanVersion();
  const intake = useIntake();
  const settings = planSettings();
  const outcome = readOutcome();
  const language = useLanguage();
  const synced = lastSyncAt();
  const [mapOpen, setMapOpen] = useState(false);
  const [zones, setZones] = useState<readonly LegZone[]>([]);
  // The reminder: set by hand, or the habit (the median of the last ten
  // session starts), or a quarter of an hour after waking before there is one.
  const reminderAt = settings.reminderMinutes ?? usualStartMinute() ?? wakeMinutes() + 15;

  const pain = (intake?.pain ?? []).filter((zone): zone is LegZone => zone in ZONE_LABEL_KEYS);
  const painLine =
    pain.length === 0 ? t('settings.whereItHurtsNone') : pain.map((zone) => t(ZONE_LABEL_KEYS[zone])).join(t('home.zoneJoin'));

  const haveIt = (item: Equipment) => !settings.equipmentMissing.includes(item);

  const saveSide = (side: (typeof SIDES)[number]) => {
    const current = getIntake();
    if (current == null) return;
    saveIntake({ ...current, side });
    rebuildRestOfWeek();
  };

  return (
    // Hidden from session recordings: which foot and where it hurts.
    <View style={styles.root} {...REPLAY_MASK}>
      <GroupedSection title={t('settings.planSection')}>
        {outcome != null && (
          <Choice
            label={t('settings.outcome')}
            options={OUTCOME_KINDS.map((kind) => ({ value: kind, label: t(`settings.outcome.${kind}`) }))}
            selected={outcome.kind}
            onSelect={setOutcomeKind}
          />
        )}
        <Choice
          label={t('settings.daysPerWeek')}
          options={DAYS.map((days) => ({ value: days, label: String(days) }))}
          selected={settings.daysPerWeek}
          onSelect={(days) => setPlanSettings({ daysPerWeek: days })}
        />
        <Choice
          label={t('settings.minutesPerDay')}
          options={MINUTES.map((minutes) => ({ value: minutes, label: t('session.minutes', { count: minutes }) }))}
          selected={settings.defaultMinutes}
          onSelect={(minutes) => setPlanSettings({ defaultMinutes: minutes })}
        />
        <Choice
          label={t('settings.whichFoot')}
          options={SIDES.map((side) => ({ value: side, label: t(SIDE_KEYS[side]) }))}
          selected={(intake?.side ?? 'both') as (typeof SIDES)[number]}
          onSelect={saveSide}
        />
        <GroupedRow
          icon={Location01Icon}
          tone={bodyColors.heel}
          label={t('settings.whereItHurts')}
          hint={painLine}
          onPress={() => {
            setZones(pain);
            setMapOpen(true);
          }}
        />
        <GroupedRow
          icon={Notification01Icon}
          tone={bodyColors.ankle}
          label={t('settings.reminder')}
          accessory={<TimePicker minutes={reminderAt} onChange={(minutes) => setPlanSettings({ reminderMinutes: minutes })} />}
        />
      </GroupedSection>

      <GroupedSection title={t('settings.equipment')}>
        {EQUIPMENT.map((item) => (
          <GroupedRow
            key={item}
            icon={EQUIPMENT_LOOK[item].icon}
            tone={EQUIPMENT_LOOK[item].tone}
            label={t(`settings.equipment.${item}`)}
            accessory={
              <Switch
                value={haveIt(item)}
                trackColor={{ true: bitepal.selected }}
                // Android tints the thumb with the theme's accent otherwise.
                thumbColor="#FFFFFF"
                accessibilityLabel={t(`settings.equipment.${item}`)}
                onValueChange={(has) => {
                  void Haptics.selectionAsync();
                  const missing = settings.equipmentMissing.filter((m) => m !== item);
                  setPlanSettings({ equipmentMissing: has ? missing : [...missing, item] });
                }}
              />
            }
          />
        ))}
      </GroupedSection>

      <AccountRow />

      {/* Whether the plan is reaching the server, said plainly: a sync that
          stopped working should be visible to anyone who looks here. */}
      <Text style={styles.syncLine}>
        {synced == null
          ? t('settings.lastSyncNever')
          : t('settings.lastSync', {
              time: new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(
                new Date(synced),
              ),
            })}
      </Text>

      <Modal visible={mapOpen} animationType="slide" presentationStyle="pageSheet" onRequestClose={() => setMapOpen(false)}>
        <View style={styles.mapSheet} {...REPLAY_MASK}>
          <Text style={styles.mapTitle} accessibilityRole="header">
            {t('settings.whereItHurts')}
          </Text>
          <View style={styles.map}>
            <LegMap
              selected={zones}
              onToggle={(zone) => {
                const next = toggleZone(zones, zone);
                if (next == null) {
                  void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
                  return;
                }
                void Haptics.selectionAsync();
                setZones(next);
              }}
            />
          </View>
          <PrimaryButton
            label={t('common.done')}
            onPress={() => {
              const current = getIntake();
              if (current != null) saveIntake({ ...current, pain: [...zones] });
              // The goal's steps follow the pain: heel to Achilles puts the calf first.
              setOutcomeAreas(painAreasOf(zones));
              rebuildRestOfWeek();
              setMapOpen(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { gap: 24 },
  syncLine: { ...fonts.medium(17), color: colors.text3, textAlign: 'center' },
  mapSheet: { flex: 1, padding: 20, gap: 16, backgroundColor: bitepal.page },
  mapTitle: { ...fonts.heavy(28, -0.6), color: colors.text },
  map: { flex: 1, alignItems: 'center' },
});
