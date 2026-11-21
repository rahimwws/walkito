import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import ArrowRight02Icon from '@hugeicons/core-free-icons/ArrowRight02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { ReplayMask } from '@/shared/ui/replay-mask';

import type { Change, ChangeMetric } from '../model/cancel-math';

/**
 * The pieces every screen of the cancel flow is built from: a heading, a card
 * for an offer with its button inside it, a pressable card for something to
 * do, and the card of their own numbers. All opaque: the screens cross-fade,
 * and an animated opacity over a `GlassView` leaves the glass drawn at full
 * strength under a fading page.
 */

/** The heading each screen opens with. */
export function Hero({ title, body }: { title: string; body?: string }) {
  return (
    <View style={styles.hero}>
      <Text accessibilityRole="header" style={styles.title}>
        {title}
      </Text>
      {body != null && <Text style={styles.body}>{body}</Text>}
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
  return (
    <Card style={styles.offer}>
      <View style={styles.offerHead}>
        <FluentIcon name={art} size={40} />
        <Text style={[styles.offerTitle, { color: colors.text }]}>{title}</Text>
      </View>
      <Text style={[styles.offerBody, { color: colors.text }]}>{body}</Text>
      {note != null && <Text style={[styles.offerNote, { color: colors.text }]}>{note}</Text>}
      <Button label={cta} onPress={onPress} loading={busy} />
      {terms != null && <Text style={[styles.terms, { color: colors.text2 }]}>{terms}</Text>}
      {problem != null && (
        <Text accessibilityLiveRegion="polite" style={[styles.problem, { color: colors.text }]}>
          {problem}
        </Text>
      )}
    </Card>
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
  return (
    <Card onPress={trailing == null ? onPress : undefined} padding={16} style={styles.action}>
      <FluentIcon name={art} size={34} />
      <View style={styles.actionText}>
        <Text style={[styles.actionTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.actionCaption, { color: colors.text2 }]}>{caption}</Text>
      </View>
      {trailing ?? <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={colors.text3} strokeWidth={2.2} />}
    </Card>
  );
}

/** A plain line of the screen's own, between its cards. */
export function Line({ children }: { children: string }) {
  return <Text style={[styles.line, { color: colors.text2 }]}>{children}</Text>;
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
  const t = useT();
  const language = useLanguage();
  const number = new Intl.NumberFormat(language, { maximumFractionDigits: 1 });

  return (
    <ReplayMask>
      <Card style={styles.changes}>
        {changes.map((change, index) => {
          const words = METRIC[change.metric];
          const from = number.format(change.from);
          const to = number.format(change.to);
          return (
            <View
              key={change.metric}
              accessible
              accessibilityLabel={t('cancel.better.changeA11y', { label: t(words.label), from, to })}
              style={[styles.change, index > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.separator }]}>
              <Text style={[styles.changeLabel, { color: colors.text }]}>{t(words.label)}</Text>
              <View style={styles.changeRow}>
                <View style={styles.changeEnd}>
                  <Text style={[styles.changeFigure, { color: colors.text }]}>{from}</Text>
                  <Text style={[styles.changeCaption, { color: colors.text2 }]}>{t(words.from)}</Text>
                </View>
                <HugeiconsIcon icon={ArrowRight02Icon} size={22} color={colors.text3} strokeWidth={2.2} />
                <View style={styles.changeEnd}>
                  <Text style={[styles.changeFigure, { color: colors.text }]}>{to}</Text>
                  <Text style={[styles.changeCaption, { color: colors.text2 }]}>{t(words.to)}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </Card>
    </ReplayMask>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', gap: 8, paddingTop: 8 },
  title: { ...fonts.bold(28), lineHeight: 34, textAlign: 'center', color: colors.text },
  body: { ...fonts.regular(19), lineHeight: 26, textAlign: 'center', paddingHorizontal: 8, color: colors.text2 },
  offer: { gap: 12 },
  offerHead: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  offerTitle: { flex: 1, ...fonts.semibold(20), lineHeight: 25 },
  offerBody: { ...fonts.regular(17), lineHeight: 24 },
  offerNote: { ...fonts.semibold(17), lineHeight: 23 },
  terms: { ...fonts.regular(15), lineHeight: 20 },
  problem: { ...fonts.semibold(15), lineHeight: 20 },
  action: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  actionText: { flex: 1, gap: 2 },
  actionTitle: fonts.semibold(17),
  actionCaption: { ...fonts.regular(15), lineHeight: 20 },
  line: { ...fonts.regular(17), lineHeight: 24, textAlign: 'center', paddingHorizontal: 8 },
  changes: { gap: 0 },
  change: { gap: 8, paddingVertical: 12 },
  changeLabel: fonts.semibold(17),
  changeRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  changeEnd: { flex: 1, gap: 2 },
  changeFigure: { ...fonts.bold(30), lineHeight: 36 },
  changeCaption: fonts.regular(15),
});
