import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Switch, Text, View } from 'react-native';

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
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { mix } from '@/shared/lib/color';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, reminderRig, type MascotHandle } from '@/shared/ui/mascot';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SegmentedControl } from '@/shared/ui/segmented-control';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { TimePicker } from '@/shared/ui/time-picker';

import { AccountRow } from './account-row';

const DAYS: readonly DaysPerWeek[] = [3, 5, 7];
const MINUTES: readonly SessionMinutes[] = [3, 5, 10];
const SIDES = ['left', 'right', 'both'] as const;
const SIDE_KEYS = { left: 'settings.footLeft', right: 'settings.footRight', both: 'settings.footBoth' } as const;

/** The mascot beside "Reminder time", ringing his bell. Drawn a little taller
 * than the row's 40 pt and let overhang it, so the row keeps its height. */
const BELL = 46;
const ROW = 40;
/** Once the sheet has risen: the bell rung once, as it will be at that time. */
const RING_MS = 600;
/** A new time rings it again, once the picker has settled on one. */
const SETTLE_MS = 500;

/**
 * The group's colour as one solid colour. `meter.track` is a wash over the
 * sheet, and the mascot's outline and face are drawn in what he stands on in
 * the dark: a wash there would draw his eyes see-through.
 */
function solidOn(wash: string, under: string): string {
  const match = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/.exec(wash.trim());
  if (match == null) return wash;
  const hex = `#${[match[1], match[2], match[3]].map((v) => Number(v).toString(16).padStart(2, '0')).join('')}`;
  return mix(under, hex, Number(match[4]));
}

/**
 * What onboarding asked, answerable again — section 8 of the plan spec.
 *
 * The most common complaint about apps like this one is that the first answers
 * are final. Every answer the plan is built from can be changed here, and any
 * change re-plans the rest of this week straight away: `setPlanSettings`
 * rebuilds from today on, and the foot and the zones rebuild explicitly.
 *
 * Built from controls the app already has — the segmented control, the native
 * switch, the leg map, and SwiftUI's own time picker — so nothing here is a new
 * component.
 */
export function PlanSettings() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
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

  // The bell rung once as the sheet arrives, and once more for a new time;
  // still while the leg map covers the sheet or the sheet is not in front.
  // Each change restarts the wait, so a picker turned through ten times
  // rings once, for the time it stopped on.
  const focused = useIsFocused();
  const bell = useRef<MascotHandle>(null);
  const [changes, setChanges] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => bell.current?.play('wave'), changes === 0 ? RING_MS : SETTLE_MS);
    return () => clearTimeout(timer);
  }, [changes]);
  const setReminder = (minutes: number) => {
    setPlanSettings({ reminderMinutes: minutes });
    setChanges((n) => n + 1);
  };

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
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('settings.planSection')}</Text>

      <View style={[styles.group, { backgroundColor: meter.track }]}>
        {outcome != null && (
          <>
            <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.outcome')}</Text>
            <View style={styles.pills} accessibilityRole="radiogroup">
              {OUTCOME_KINDS.map((kind) => {
                const selected = kind === outcome.kind;
                return (
                  <Pressable
                    key={kind}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    onPress={() => {
                      Haptics.selectionAsync();
                      setOutcomeKind(kind);
                    }}
                    style={({ pressed }) => [
                      styles.pill,
                      { backgroundColor: selected ? colors.foreground : palette[scheme].card },
                      pressed && { opacity: 0.6 },
                    ]}>
                    <Text style={[styles.pillText, { color: selected ? colors.background : colors.foreground }]}>
                      {t(`settings.outcome.${kind}`)}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </>
        )}

        <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.daysPerWeek')}</Text>
        <SegmentedControl
          segments={DAYS.map(String)}
          selectedIndex={Math.max(0, DAYS.indexOf(settings.daysPerWeek))}
          onChange={(index) => setPlanSettings({ daysPerWeek: DAYS[index] })}
        />

        <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.minutesPerDay')}</Text>
        <SegmentedControl
          segments={MINUTES.map((m) => t('session.minutes', { count: m }))}
          selectedIndex={Math.max(0, MINUTES.indexOf(settings.defaultMinutes))}
          onChange={(index) => setPlanSettings({ defaultMinutes: MINUTES[index] })}
        />

        <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.whichFoot')}</Text>
        <SegmentedControl
          segments={SIDES.map((side) => t(SIDE_KEYS[side]))}
          selectedIndex={Math.max(0, SIDES.indexOf((intake?.side ?? 'both') as (typeof SIDES)[number]))}
          onChange={(index) => saveSide(SIDES[index])}
        />

        <Pressable
          accessibilityRole="button"
          onPress={() => {
            Haptics.selectionAsync();
            setZones(pain);
            setMapOpen(true);
          }}
          style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.whereItHurts')}</Text>
          <Text style={[styles.value, { color: meter.caption }]} numberOfLines={1}>
            {painLine}
          </Text>
        </Pressable>

        <View style={styles.row}>
          <View style={styles.reminderLabel}>
            <Text style={[styles.label, styles.reminderText, { color: colors.foreground }]}>
              {t('settings.reminder')}
            </Text>
            {/* Decoration: hidden from anyone listening. */}
            <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={styles.bell}>
              <Mascot
                ref={bell}
                rig={reminderRig}
                size={BELL}
                surface={solidOn(meter.track, colors.background)}
                paused={!focused || mapOpen}
              />
            </View>
          </View>
          <TimePicker minutes={reminderAt} onChange={setReminder} />
        </View>
      </View>

      <Text style={[styles.sectionTitle, styles.gapTop, { color: meter.caption }]}>{t('settings.equipment')}</Text>
      <View style={[styles.group, { backgroundColor: meter.track }]}>
        {EQUIPMENT.map((item) => (
          <View key={item} style={styles.row}>
            <Text style={[styles.label, { color: colors.foreground }]}>{t(`settings.equipment.${item}`)}</Text>
            <Switch
              value={haveIt(item)}
              trackColor={{ true: PRIMARY }}
              // Android tints the thumb with the theme's accent otherwise.
              thumbColor="#FFFFFF"
              accessibilityLabel={t(`settings.equipment.${item}`)}
              onValueChange={(has) => {
                Haptics.selectionAsync();
                const missing = settings.equipmentMissing.filter((m) => m !== item);
                setPlanSettings({ equipmentMissing: has ? missing : [...missing, item] });
              }}
            />
          </View>
        ))}
      </View>

      <AccountRow />

      {/* Whether the plan is reaching the server, said plainly: a sync that
          stopped working should be visible to anyone who looks here. */}
      <Text style={[styles.syncLine, { color: meter.caption }]}>
        {synced == null
          ? t('settings.lastSyncNever')
          : t('settings.lastSync', {
              time: new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(
                new Date(synced),
              ),
            })}
      </Text>

      <Modal visible={mapOpen} animationType="slide" presentationStyle="pageSheet" onRequestClose={() => setMapOpen(false)}>
        <View style={[styles.mapSheet, { backgroundColor: colors.background }]} {...REPLAY_MASK}>
          <Text style={[styles.mapTitle, { color: colors.foreground }]}>{t('settings.whereItHurts')}</Text>
          <View style={styles.map}>
            <LegMap
              selected={zones}
              onToggle={(zone) => {
                const next = toggleZone(zones, zone);
                if (next == null) {
                  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
                  return;
                }
                Haptics.selectionAsync();
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
  root: {
    marginTop: 24,
  },
  sectionTitle: {
    ...fonts.bold(12, 0.1),
    marginBottom: 8,
  },
  gapTop: {
    marginTop: 24,
  },
  group: {
    borderRadius: 22,
    borderCurve: 'continuous',
    padding: 16,
    gap: 10,
  },
  syncLine: {
    ...fonts.medium(13),
    textAlign: 'center',
    marginTop: 16,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  pillText: fonts.semibold(15),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    minHeight: 40,
  },
  label: fonts.semibold(16, -0.2),
  /** "Reminder time" and the mascot after it, the label where every other
   * label is. */
  reminderLabel: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  reminderText: { flexShrink: 1 },
  bell: {
    width: BELL,
    height: BELL,
    marginVertical: (ROW - BELL) / 2,
  },
  value: {
    flexShrink: 1,
    ...fonts.medium(14),
  },
  mapSheet: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  mapTitle: fonts.heavy(24, -0.6),
  map: {
    flex: 1,
    alignItems: 'center',
  },
});
