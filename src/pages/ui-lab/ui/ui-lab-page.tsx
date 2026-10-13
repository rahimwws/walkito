import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import BedIcon from '@hugeicons/core-free-icons/BedIcon';
import BookOpen01Icon from '@hugeicons/core-free-icons/BookOpen01Icon';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import PlusSignIcon from '@hugeicons/core-free-icons/PlusSignIcon';
import RefreshIcon from '@hugeicons/core-free-icons/RefreshIcon';
import Stairs01Icon from '@hugeicons/core-free-icons/Stairs01Icon';
import Sun03Icon from '@hugeicons/core-free-icons/Sun03Icon';
import TennisBallIcon from '@hugeicons/core-free-icons/TennisBallIcon';
import WorkoutRunIcon from '@hugeicons/core-free-icons/WorkoutRunIcon';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useState, type ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Badge, Ribbon } from '@/shared/ui/badge';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D, GlassCard } from '@/shared/ui/card-3d';
import { CounterPill, StreakPill } from '@/shared/ui/counter-pill';
import { IconCircle3D } from '@/shared/ui/icon-circle-3d';
import { giftRig, handsUpRig, painRig, walkingRig } from '@/shared/ui/mascot';
import { OptionCard3D } from '@/shared/ui/option-card-3d';
import { ProgressBar3D } from '@/shared/ui/progress-bar-3d';
import { QuestRow, QuestsCard } from '@/shared/ui/quest-row';
import { RaisedScheme } from '@/shared/ui/raised';
import { STAT_TILE_STAGGER_MS, StatTile } from '@/shared/ui/stat-tile';
import { StickerTile } from '@/shared/ui/sticker-tile';

type Scheme = 'light' | 'dark';
const SCHEMES: readonly { name: Scheme; icon: typeof Sun03Icon }[] = [
  { name: 'dark', icon: Moon02Icon },
  { name: 'light', icon: Sun03Icon },
];

/** The steps the progress demo walks through, in quarters. */
const STEPS = 4;
/** How long the loading demo stays busy. */
const LOADING_MS = 1400;
/** For a control shown for how it looks and presses, not for what it does. */
const noop = () => undefined;

/**
 * Development only: every piece of the glass + 3D kit, in every variant and
 * state, on one scrolling screen. Where the kit is checked on a phone, in both
 * schemes, before it goes into a screen. Open `walkito.dev://ui-lab`.
 *
 * Labels are real catalogue strings borrowed from the screens that will use
 * the kit, so the lab shows the copy at its true length, in the phone's
 * language, and adds nothing for a translator to carry. Section names are the
 * components' own identifiers.
 */
export function UiLabPage() {
  const insets = useSafeAreaInsets();
  const [scheme, setScheme] = useState<Scheme>('dark');

  if (!__DEV__) return <Redirect href="/" />;

  return (
    <ScrollView
      contentContainerStyle={[styles.page, { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 48 }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.toolbar}>
        {SCHEMES.map((option) => (
          <IconCircle3D
            key={option.name}
            icon={option.icon}
            size="sm"
            tone={scheme === option.name ? 'primary' : 'neutral'}
            selected={scheme === option.name}
            onPress={() => setScheme(option.name)}
            // The scheme's identifier, as mascot-lab names a rig: the app is
            // dark only and has no catalogue word for either.
            accessibilityLabel={option.name}
          />
        ))}
      </View>
      <RaisedScheme scheme={scheme}>
        <View
          style={[
            styles.canvas,
            // The light half is a panel on the dark page: the app renders dark
            // only, so this is the one place its light tokens are seen.
            scheme === 'light' && { backgroundColor: palette.light.background },
          ]}>
          <Gallery scheme={scheme} />
        </View>
      </RaisedScheme>
    </ScrollView>
  );
}

function Gallery({ scheme }: { scheme: Scheme }) {
  const t = useT();
  const colors = palette[scheme];

  // ── live state for the interactive demos ──────────────────────────────
  const [loading, setLoading] = useState(false);
  const [feel, setFeel] = useState<string | null>('player.feedback.right');
  const [foot, setFoot] = useState<string>('settings.footBoth');
  const [kit, setKit] = useState<Set<string>>(new Set(['settings.equipment.step']));
  const [steps, setSteps] = useState(1);
  const [streak, setStreak] = useState(6);
  const [lit, setLit] = useState(false);
  const [quest, setQuest] = useState(2);
  const [replay, setReplay] = useState(0);

  // Cleared if the lab closes or the scheme flips mid-demo, so nothing sets
  // state on a gallery that has gone.
  useEffect(() => {
    if (!loading) return undefined;
    const timer = setTimeout(() => setLoading(false), LOADING_MS);
    return () => clearTimeout(timer);
  }, [loading]);

  const days = (count: number) => t('streak.dayCount', { count });

  const feels = ['player.feedback.easy', 'player.feedback.right', 'player.feedback.hard', 'player.feedback.hurt'] as const;
  const feet = [
    { key: 'settings.footLeft', accent: 'blue' },
    { key: 'settings.footRight', accent: 'teal' },
    { key: 'settings.footBoth', accent: 'violet' },
  ] as const;
  const kitOptions = [
    { key: 'settings.equipment.step', icon: Stairs01Icon, accent: 'blue' },
    { key: 'settings.equipment.band', icon: Dumbbell01Icon, accent: 'violet' },
    { key: 'settings.equipment.pillow', icon: BedIcon, accent: 'amber' },
    { key: 'settings.equipment.ball', icon: TennisBallIcon, accent: 'teal' },
  ] as const;

  return (
    <>
      {/* ── Button3D ─────────────────────────────────────────────────── */}
      <Section name="Button3D" scheme={scheme}>
        <Button3D
          label={t('dock.startWorkout')}
          icon={ArrowRight01Icon}
          loading={loading}
          onPress={() => setLoading(true)}
        />
        <Button3D variant="ink" label={t('error.retry')} onPress={noop} />
        <Button3D variant="secondary" label={t('streak.dismiss')} onPress={noop} />
        <Backdrop>
          <Button3D variant="glass" label={t('player.countIn.tapToStart')} onPress={noop} />
          <View style={styles.row}>
            <Button3D size="md" variant="glass" label={t('player.cta.pause')} onPress={noop} />
            <Button3D size="sm" variant="glass" label={t('common.cancel')} onPress={noop} />
          </View>
        </Backdrop>
        <Button3D variant="accent" accent="orange" icon={FireIcon} iconPosition="leading" label={t('progress.currentStreak')} onPress={noop} />
        <Button3D variant="primary" disabled label={t('dock.startWorkout')} onPress={noop} />
        <Button3D variant="ghost" label={t('gift.dismiss')} onPress={noop} />
        <Caption scheme={scheme} text="md" />
        <View style={styles.row}>
          <Button3D size="md" label={t('player.cta.resume')} onPress={noop} />
          <Button3D size="md" variant="secondary" label={t('player.cta.pause')} onPress={noop} />
        </View>
        <Caption scheme={scheme} text="sm" />
        <View style={styles.row}>
          <Button3D size="sm" variant="accent" accent="teal" label={t('player.countIn.go')} onPress={noop} />
          <Button3D size="sm" variant="secondary" label={t('common.cancel')} onPress={noop} />
          <Button3D size="sm" variant="ink" label={t('common.done')} onPress={noop} />
          <Button3D size="sm" variant="accent" accent="amber" label={t('progress.retest')} onPress={noop} />
          <Button3D size="sm" variant="accent" accent="violet" label={t('common.done')} onPress={noop} />
        </View>
        <Caption scheme={scheme} text="align" />
        <Button3D size="sm" variant="secondary" align="start" label={t('common.cancel')} onPress={noop} />
        <Button3D size="sm" variant="secondary" label={t('common.cancel')} onPress={noop} />
        <Button3D size="sm" variant="secondary" align="end" label={t('common.cancel')} onPress={noop} />
      </Section>

      {/* ── OptionCard3D ─────────────────────────────────────────────── */}
      <Section name="OptionCard3D" scheme={scheme}>
        <Caption scheme={scheme} text="single" />
        {feels.map((key) => (
          <OptionCard3D
            key={key}
            label={t(key)}
            mode="single"
            selected={feel === key}
            onPress={() => setFeel(key)}
          />
        ))}
        <Caption scheme={scheme} text="multi" />
        {kitOptions.map((option) => (
          <OptionCard3D
            key={option.key}
            label={t(option.key)}
            icon={option.icon}
            accent={option.accent}
            mode="multi"
            selected={kit.has(option.key)}
            onPress={() =>
              setKit((prev) => {
                const next = new Set(prev);
                if (next.has(option.key)) next.delete(option.key);
                else next.add(option.key);
                return next;
              })
            }
          />
        ))}
        <OptionCard3D
          label={t('settings.sound.voice')}
          caption={t('settings.sound.voiceHint')}
          icon={WorkoutRunIcon}
          mode="multi"
          selected={false}
          disabled
          onPress={noop}
        />
        <Caption scheme={scheme} text="tile" />
        <View style={styles.stretch}>
          {feet.map((option) => (
            <OptionCard3D
              key={option.key}
              label={t(option.key)}
              icon={FootprintsIcon}
              accent={option.accent}
              layout="tile"
              mode="single"
              selected={foot === option.key}
              onPress={() => setFoot(option.key)}
              style={styles.flex}
            />
          ))}
        </View>
      </Section>

      {/* ── Card3D / GlassCard ───────────────────────────────────────── */}
      <Section name="Card3D" scheme={scheme}>
        <Card3D>
          <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('home.allDoneTitle')}</Text>
          <Text style={[styles.cardBody, { color: meterColors[scheme].caption }]}>{t('streak.rule')}</Text>
        </Card3D>
        <Card3D size="lg" tone="amber">
          <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('progress.consistencyTitle')}</Text>
          <Text style={[styles.cardBody, { color: meterColors[scheme].caption }]}>{t('streak.milestoneBlurb')}</Text>
        </Card3D>
        <Card3D tone="violet" onPress={noop} accessibilityLabel={t('home.libraryTitle')}>
          <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('home.libraryTitle')}</Text>
        </Card3D>
        <Caption scheme={scheme} text="stretch" />
        {/* Two cards of unequal content in a stretching row: each lip stays
            its depth, right under its own face, however tall the row is. */}
        <View style={styles.stretch}>
          <Card3D style={styles.flex}>
            <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('home.allDoneTitle')}</Text>
          </Card3D>
          <Card3D size="lg" tone="teal" onPress={noop} accessibilityLabel={t('home.libraryTitle')} style={styles.flex}>
            <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('home.libraryTitle')}</Text>
            <Text style={[styles.cardBody, { color: meterColors[scheme].caption }]}>{t('streak.rule')}</Text>
          </Card3D>
        </View>
        <Caption scheme={scheme} text="GlassCard" />
        <Backdrop>
          <GlassCard>
            <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('progress.currentStreak')}</Text>
            <Text style={[styles.cardBody, { color: meterColors[scheme].caption }]}>{days(streak)}</Text>
          </GlassCard>
          <GlassCard lip onPress={noop} accessibilityLabel={t('home.libraryTitle')}>
            <Text style={[styles.cardTitle, { color: colors.foreground }]}>{t('home.libraryTitle')}</Text>
          </GlassCard>
        </Backdrop>
      </Section>

      {/* ── ProgressBar3D ────────────────────────────────────────────── */}
      <Section name="ProgressBar3D" scheme={scheme}>
        <ProgressBar3D
          value={steps / STEPS}
          label={`${steps} / ${STEPS}`}
          accessibilityLabel={t('home.tasksTitle')}
          trailing={<StickerTile rig={handsUpRig} state="earned" accent="amber" size="xs" id="bar-reward" accessibilityLabel={t('progress.goalReached')} />}
        />
        <ProgressBar3D value={steps / STEPS} size="md" accent="teal" accessibilityLabel={t('home.tasksTitle')} />
        <ProgressBar3D value={steps / STEPS} size="sm" accent="orange" accessibilityLabel={t('home.tasksTitle')} />
        <ProgressBar3D value={0.02} size="md" accent="blue" accessibilityLabel={t('home.tasksTitle')} />
        <View style={styles.row}>
          <Button3D size="sm" icon={PlusSignIcon} iconPosition="leading" label={t('player.countIn.go')} onPress={() => setSteps((n) => Math.min(n + 1, STEPS))} />
          <Button3D size="sm" variant="secondary" icon={RefreshIcon} iconPosition="leading" label={t('profile.resetConfirm')} onPress={() => setSteps(0)} />
        </View>
      </Section>

      {/* ── StatTile ─────────────────────────────────────────────────── */}
      <Section name="StatTile" scheme={scheme}>
        <View key={replay} style={styles.row}>
          <StatTile
            label={t('progress.currentStreak')}
            value={streak}
            icon={FireIcon}
            accent="orange"
            accessibilityLabel={t('streak.tileA11y', { label: t('progress.currentStreak'), days: days(streak) })}
          />
          <StatTile
            label={t('progress.heatDone')}
            value={24}
            icon={Calendar03Icon}
            accent="violet"
            delayMs={STAT_TILE_STAGGER_MS}
            accessibilityLabel={t('streak.tileA11y', { label: t('progress.heatDone'), days: days(24) })}
          />
          <StatTile
            label={t('profile.sessionsDone')}
            value={5}
            icon={Dumbbell01Icon}
            accent="teal"
            delayMs={STAT_TILE_STAGGER_MS * 2}
            accessibilityLabel={t('profile.sessionsDone')}
          />
        </View>
        <Button3D size="sm" variant="secondary" icon={RefreshIcon} iconPosition="leading" label={t('profile.resetConfirm')} onPress={() => setReplay((n) => n + 1)} />
      </Section>

      {/* ── CounterPill / StreakPill ─────────────────────────────────── */}
      <Section name="CounterPill" scheme={scheme}>
        <Backdrop>
          <View style={styles.row}>
            <StreakPill
              value={streak}
              lit={lit}
              onPress={noop}
              accessibilityLabel={t('streak.tileA11y', { label: t('progress.currentStreak'), days: days(streak) })}
            />
            <CounterPill
              icon={Calendar03Icon}
              accent="violet"
              value={24}
              lit
              accessibilityLabel={t('streak.tileA11y', { label: t('progress.heatDone'), days: days(24) })}
            />
          </View>
        </Backdrop>
        <Button3D
          size="sm"
          variant="accent"
          accent="orange"
          icon={FireIcon}
          iconPosition="leading"
          label={t('progress.heatDone')}
          onPress={() => {
            if (!lit) setStreak((n) => n + 1);
            setLit((on) => !on);
          }}
        />
      </Section>

      {/* ── QuestsCard / QuestRow ────────────────────────────────────── */}
      <Section name="QuestRow" scheme={scheme}>
        <QuestsCard title={t('progress.consistencyTitle')} caption={t('card.last7Days')} tone="amber">
          <QuestRow
            icon={Calendar03Icon}
            accent="violet"
            title={t('progress.heatDone')}
            progress={quest}
            goal={3}
            done={quest >= 3}
            reward={<StickerTile rig={handsUpRig} state={quest >= 3 ? 'new' : 'locked'} quiet accent="violet" size="xs" id="quest-checkin" accessibilityLabel={t('progress.heatDone')} />}
            accessibilityLabel={t('progress.heatDone')}
          />
          <QuestRow
            icon={BedIcon}
            accent="blue"
            title={t('progress.heatRest')}
            progress={1}
            goal={1}
            done
            reward={<StickerTile rig={painRig} state="earned" accent="blue" size="xs" id="quest-rest" accessibilityLabel={t('progress.heatRest')} />}
            accessibilityLabel={t('progress.heatRest')}
          />
          <QuestRow
            icon={BookOpen01Icon}
            accent="teal"
            title={t('home.libraryTitle')}
            progress={0}
            goal={1}
            done={false}
            accessibilityLabel={t('home.libraryTitle')}
          />
        </QuestsCard>
        <Button3D size="sm" icon={PlusSignIcon} iconPosition="leading" label={t('player.countIn.go')} onPress={() => setQuest((n) => (n >= 3 ? 0 : n + 1))} />
      </Section>

      {/* ── StickerTile ──────────────────────────────────────────────── */}
      <Section name="StickerTile" scheme={scheme}>
        <View style={[styles.row, styles.bottom]}>
          <StickerTile rig={handsUpRig} state="earned" accent="violet" size="lg" id="first-session" label={t('progress.heatDone')} accessibilityLabel={t('progress.heatDone')} />
          <StickerTile key={`new-${replay}`} rig={giftRig} state="new" accent="amber" size="md" id="ten-days" label={t('progress.goalReached')} accessibilityLabel={t('progress.goalReached')} />
        </View>
        <View style={[styles.row, styles.bottom]}>
          <StickerTile rig={walkingRig} state="earned" accent="teal" size="md" id="first-week" accessibilityLabel={t('progress.heatDone')} />
          <StickerTile rig={painRig} state="earned" accent="blue" size="sm" id="rest-counts" accessibilityLabel={t('progress.heatRest')} />
          <StickerTile rig={walkingRig} state="locked" accent="teal" size="md" id="locked-a" accessibilityLabel={t('progress.strengthNoTest')} />
          <StickerTile rig={giftRig} state="earned" accent="orange" size="xs" id="xs" accessibilityLabel={t('progress.goalReached')} />
        </View>
      </Section>

      {/* ── IconCircle3D ─────────────────────────────────────────────── */}
      <Section name="IconCircle3D" scheme={scheme}>
        <View style={[styles.row, styles.bottom]}>
          <IconCircle3D icon={Calendar03Icon} size="sm" tone="violet" ring={steps / STEPS} onPress={noop} accessibilityLabel={t('progress.heatDone')} />
          <IconCircle3D icon={BookOpen01Icon} size="md" tone="teal" ring={0.5} onPress={noop} accessibilityLabel={t('home.libraryTitle')} />
          <IconCircle3D icon={BedIcon} size="md" tone="blue" state="done" onPress={noop} accessibilityLabel={t('progress.heatRest')} />
        </View>
        <View style={[styles.row, styles.bottom]}>
          <IconCircle3D icon={FireIcon} size="xs" tone="orange" onPress={noop} accessibilityLabel={t('progress.currentStreak')} />
          <IconCircle3D icon={FireIcon} size="sm" tone="orange" state="done" onPress={noop} accessibilityLabel={t('progress.currentStreak')} />
          <IconCircle3D icon={Dumbbell01Icon} size="md" tone="neutral" onPress={noop} accessibilityLabel={t('profile.sessionsDone')} />
          <IconCircle3D icon={Dumbbell01Icon} size="lg" tone="primary" onPress={noop} accessibilityLabel={t('profile.sessionsDone')} />
        </View>
        <View style={[styles.row, styles.path]}>
          <IconCircle3D icon={Dumbbell01Icon} size="md" tone="primary" state="done" onPress={noop} accessibilityLabel={t('progress.heatDone')} />
          <IconCircle3D
            icon={WorkoutRunIcon}
            size="lg"
            tone="primary"
            state="current"
            bubble={t('progress.startTest')}
            ring={steps / STEPS}
            onPress={noop}
            accessibilityLabel={t('progress.startTest')}
          />
          <IconCircle3D icon={Dumbbell01Icon} size="md" tone="primary" state="locked" accessibilityLabel={t('progress.strengthNoTest')} />
        </View>
      </Section>

      {/* ── Badge / Ribbon ───────────────────────────────────────────── */}
      <Section name="Badge" scheme={scheme}>
        <View style={styles.row}>
          <Badge label={t('progress.goalReached')} />
          <Badge label={t('progress.retest')} accent="amber" raised />
          <Badge label={t('progress.heatRest')} accent="teal" />
          <Badge label={t('progress.currentStreak')} accent="orange" raised />
          <Badge label={t('common.done')} accent="violet" />
        </View>
        <Ribbon label={t('home.allDoneTitle')} accent="primary" />
        <Ribbon label={t('progress.goalsTitle')} accent="amber" />
      </Section>
    </>
  );
}

function Section({ name, scheme, children }: { name: string; scheme: Scheme; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionName, { color: palette[scheme].foreground }]}>{name}</Text>
      {children}
    </View>
  );
}

function Caption({ scheme, text }: { scheme: Scheme; text: string }) {
  return <Text style={[styles.caption, { color: meterColors[scheme].caption }]}>{text}</Text>;
}

/**
 * Colour behind glass, so the material has something to bend. On a flat page
 * Liquid Glass is a faint grey and there is nothing to judge.
 */
function Backdrop({ children }: { children: ReactNode }) {
  const blobs = [
    { accent: accents.dark.violet.fill, left: '-6%', top: -20, size: 140 },
    { accent: accents.dark.amber.fill, left: '42%', top: 10, size: 120 },
    { accent: accents.dark.teal.fill, left: '72%', top: -30, size: 150 },
  ] as const;
  return (
    <View style={styles.backdrop}>
      {blobs.map((blob) => (
        <View
          key={blob.accent}
          pointerEvents="none"
          style={[
            styles.blob,
            {
              left: blob.left,
              top: blob.top,
              width: blob.size,
              height: blob.size,
              borderRadius: blob.size / 2,
              backgroundColor: blob.accent,
            },
          ]}
        />
      ))}
      <View style={styles.backdropContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    gap: 16,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  canvas: {
    gap: 36,
    borderRadius: 28,
    borderCurve: 'continuous',
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginHorizontal: -12,
  },
  section: {
    gap: 12,
  },
  sectionName: fonts.heavy(22, -0.4),
  caption: { ...fonts.semibold(13), marginTop: 4 },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 12,
  },
  stretch: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
  },
  bottom: {
    alignItems: 'flex-end',
  },
  path: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 48,
  },
  flex: {
    flex: 1,
  },
  cardTitle: fonts.bold(17, -0.2),
  cardBody: { ...fonts.medium(14), marginTop: 4 },
  backdrop: {
    borderRadius: 24,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    opacity: 0.85,
  },
  backdropContent: {
    padding: 16,
    gap: 12,
  },
});
