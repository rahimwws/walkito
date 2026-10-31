import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import ArrowRight02Icon from '@hugeicons/core-free-icons/ArrowRight02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useRef, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { Mascot, type MascotHandle, type MascotRig, type MascotShot, type MascotState } from '@/shared/ui/mascot';
import { ReplayMask } from '@/shared/ui/replay-mask';

import type { Change, ChangeMetric } from '../model/cancel-math';

/**
 * The pieces every screen of the cancel flow is built from, in the
 * onboarding's solid 3D kit: the mascot over a heading, a raised card for an
 * offer with its button inside it, a pressable card for something to do, and
 * the card of their own numbers.
 *
 * Solid throughout, never the kit's glass: the screens cross-fade, and an
 * animated opacity over a `GlassView` leaves the glass drawn at full strength
 * under a fading page.
 */

/** The mascot over each heading. */
const MASCOT = 112;
/** He arrives with his screen, then makes his move. */
const SHOT_DELAY_MS = 420;

/**
 * The mascot and the heading each screen opens with. `shot` plays once, after
 * the screen has faded in; `state` is held (the question's thinking pose).
 * `live` stops him whenever he cannot be seen: the app in the background, the
 * safety check over him. Decorative, so hidden from screen readers: the
 * heading says it all.
 */
export function Hero({
  rig,
  shot,
  state,
  title,
  body,
  live,
}: {
  rig: MascotRig;
  shot?: MascotShot;
  state?: MascotState;
  title: string;
  body?: string;
  live: boolean;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const mascot = useRef<MascotHandle>(null);
  const played = useRef(false);

  useEffect(() => {
    if (shot == null || played.current || !live) return undefined;
    const timer = setTimeout(() => {
      played.current = true;
      mascot.current?.play(shot);
    }, SHOT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [live, shot]);

  return (
    <View style={styles.hero}>
      <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={styles.mascot}>
        <Mascot ref={mascot} rig={rig} state={state} size={MASCOT} surface={colors.background} paused={!live} />
      </View>
      <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
        {title}
      </Text>
      {body != null && <Text style={[styles.body, { color: meter.caption }]}>{body}</Text>}
    </View>
  );
}

/**
 * An offer in the place of cancelling: what it is, what it costs in the
 * store's own figures, the one button that takes it, and the terms under it.
 * A store's refusal is said under the button, in the app's words.
 */
export function OfferCard({
  art,
  tone,
  title,
  body,
  note,
  cta,
  busy,
  terms,
  problem,
  onPress,
}: {
  art: FluentName;
  tone: AccentName;
  title: string;
  body: string;
  /** A second line under the body: a saving, worked out from two store prices. */
  note?: string;
  cta: string;
  busy: boolean;
  terms?: string;
  problem: string | null;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <Card3D material="solid" tone={tone} size="lg" padding={18} contentStyle={styles.offer}>
      <View style={styles.offerHead}>
        <FluentIcon name={art} size={40} />
        <Text style={[styles.offerTitle, { color: colors.foreground }]}>{title}</Text>
      </View>
      <Text style={[styles.offerBody, { color: colors.foreground }]}>{body}</Text>
      {note != null && <Text style={[styles.offerNote, { color: colors.foreground }]}>{note}</Text>}
      <Button3D label={cta} onPress={onPress} loading={busy} />
      {terms != null && <Text style={[styles.terms, { color: meter.caption }]}>{terms}</Text>}
      {problem != null && (
        <Text accessibilityLiveRegion="polite" style={[styles.problem, { color: colors.foreground }]}>
          {problem}
        </Text>
      )}
    </Card3D>
  );
}

/**
 * Something to do instead: a raised card the whole of which is the button,
 * with what it is about, a line saying what happens, and a chevron. With
 * `trailing` (a control of its own, such as the time picker) the card is not
 * pressable, so the control is never inside another button.
 */
export function ActionCard({
  art,
  title,
  caption,
  onPress,
  trailing,
}: {
  art: FluentName;
  title: string;
  caption: string;
  onPress?: () => void;
  trailing?: ReactNode;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <Card3D material="solid" onPress={trailing == null ? onPress : undefined} padding={14} contentStyle={styles.action}>
      <FluentIcon name={art} size={34} />
      <View style={styles.actionText}>
        <Text style={[styles.actionTitle, { color: colors.foreground }]}>{title}</Text>
        <Text style={[styles.actionCaption, { color: meter.caption }]}>{caption}</Text>
      </View>
      {trailing ?? <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={meter.unit} strokeWidth={2.2} />}
    </Card3D>
  );
}

/** A plain line of the screen's own, between its cards. */
export function Line({ children }: { children: string }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return <Text style={[styles.line, { color: meter.caption }]}>{children}</Text>;
}

/** What each of their numbers is called, and what its two ends were. */
const METRIC: Readonly<Record<ChangeMetric, { label: Key; from: Key; to: Key }>> = {
  pain: { label: 'cancel.better.pain', from: 'cancel.better.firstWeek', to: 'cancel.better.lastWeek' },
  calf: { label: 'cancel.better.calf', from: 'cancel.better.firstTest', to: 'cancel.better.latestTest' },
  arch: { label: 'cancel.better.arch', from: 'cancel.better.firstTest', to: 'cancel.better.latestTest' },
  balance: { label: 'cancel.better.balance', from: 'cancel.better.firstTest', to: 'cancel.better.latestTest' },
};

/**
 * Their own numbers, then and now: only what `yourChanges` found worth
 * quoting. Both figures in ink, as every value in the app is: colour never
 * says whether a number is good. Masked from recordings, as every screen with
 * pain or a test result on it is.
 */
export function ChangesCard({ changes }: { changes: readonly Change[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const number = new Intl.NumberFormat(language, { maximumFractionDigits: 1 });

  return (
    <ReplayMask>
      <Card3D material="solid" size="lg" padding={18} contentStyle={styles.changes}>
        {changes.map((change, index) => {
          const words = METRIC[change.metric];
          const from = number.format(change.from);
          const to = number.format(change.to);
          return (
            <View
              key={change.metric}
              accessible
              accessibilityLabel={t('cancel.better.changeA11y', { label: t(words.label), from, to })}
              style={[styles.change, index > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: meter.track }]}>
              <Text style={[styles.changeLabel, { color: colors.foreground }]}>{t(words.label)}</Text>
              <View style={styles.changeRow}>
                <View style={styles.changeEnd}>
                  <Text style={[styles.changeFigure, { color: colors.foreground }]}>{from}</Text>
                  <Text style={[styles.changeCaption, { color: meter.caption }]}>{t(words.from)}</Text>
                </View>
                <HugeiconsIcon icon={ArrowRight02Icon} size={22} color={meter.unit} strokeWidth={2.2} />
                <View style={styles.changeEnd}>
                  <Text style={[styles.changeFigure, { color: colors.foreground }]}>{to}</Text>
                  <Text style={[styles.changeCaption, { color: meter.caption }]}>{t(words.to)}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </Card3D>
    </ReplayMask>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', gap: 8, paddingTop: 4 },
  mascot: { width: MASCOT, height: MASCOT, marginBottom: 4 },
  title: { ...fonts.heavy(26, -0.6), lineHeight: 31, textAlign: 'center' },
  body: { ...fonts.medium(16), lineHeight: 22, textAlign: 'center', paddingHorizontal: 8 },
  offer: { gap: 12 },
  offerHead: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  offerTitle: { flex: 1, ...fonts.heavy(20, -0.4), lineHeight: 24 },
  offerBody: { ...fonts.medium(16), lineHeight: 22 },
  offerNote: { ...fonts.semibold(15), lineHeight: 21 },
  terms: { ...fonts.medium(13), lineHeight: 18 },
  problem: { ...fonts.semibold(14), lineHeight: 19 },
  action: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  actionText: { flex: 1, gap: 2 },
  actionTitle: fonts.bold(17, -0.2),
  actionCaption: { ...fonts.medium(14), lineHeight: 19 },
  line: { ...fonts.medium(15), lineHeight: 21, textAlign: 'center', paddingHorizontal: 8 },
  changes: { gap: 0 },
  change: { gap: 8, paddingVertical: 12 },
  changeLabel: fonts.semibold(15, -0.1),
  changeRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  changeEnd: { flex: 1, gap: 2 },
  changeFigure: { ...fonts.heavy(30, -0.6), lineHeight: 34 },
  changeCaption: fonts.medium(13),
});
