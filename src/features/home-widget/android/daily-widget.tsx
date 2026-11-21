import { FlexWidget, TextWidget } from 'react-native-android-widget';

import type { DailyWidgetProps } from '../ui/daily-widget';

/**
 * The Android home-screen widget: the same question and the same two cards as
 * the iOS one, and today's goal above them. Drawn by the launcher from this
 * JSX, so no React Native view, hook or style sheet can appear here — only the
 * library's widget primitives.
 *
 * The cards open Home on `?checkin=fine|hurts`, as on iOS; there are no
 * interactive widgets on Android to record the answer in place. White, text
 * only; the colours follow `colors` in shared/config/tokens by hand.
 */
const BG = '#FFFFFF';
const CARD = '#EFEFF2';
const INK = '#111114';
const CAPTION = '#55555E';
const ACCENT = '#6D28D9';
const FONT = 'sans-serif-medium';

/** Opened from the widget before the app has written anything: just a way in. */
export function EmptyAndroidWidget({ label }: { label: string }) {
  return (
    <FlexWidget
      clickAction="OPEN_APP"
      style={{ height: 'match_parent', width: 'match_parent', backgroundColor: BG, borderRadius: 24, justifyContent: 'center', alignItems: 'center', padding: 12 }}>
      <TextWidget text={label} style={{ color: INK, fontSize: 17, fontFamily: FONT }} />
    </FlexWidget>
  );
}

function Card({ label, uri, chosen }: { label: string; uri: string; chosen: boolean }) {
  return (
    <FlexWidget
      clickAction="OPEN_URI"
      clickActionData={{ uri }}
      style={{
        flex: 1,
        height: 'match_parent',
        backgroundColor: CARD,
        borderRadius: 18,
        borderWidth: chosen ? 2 : 0,
        borderColor: ACCENT,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
      }}>
      <TextWidget text={label} style={{ color: INK, fontSize: 16, fontFamily: FONT }} maxLines={2} />
    </FlexWidget>
  );
}

export function DailyAndroidWidget(props: DailyWidgetProps) {
  const answered = props.answerScore;
  return (
    <FlexWidget
      clickAction="OPEN_URI"
      clickActionData={{ uri: props.url }}
      style={{ height: 'match_parent', width: 'match_parent', backgroundColor: BG, borderRadius: 24, padding: 12, flexDirection: 'column' }}>
      <FlexWidget style={{ width: 'match_parent', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextWidget text={props.text.question} style={{ color: INK, fontSize: 15, fontFamily: FONT }} maxLines={1} />
        <TextWidget text={`${props.text.goalTitle} ${props.text.goalValue}`} style={{ color: CAPTION, fontSize: 13, fontFamily: FONT }} maxLines={1} />
      </FlexWidget>
      <FlexWidget style={{ width: 'match_parent', flex: 1, flexDirection: 'row', marginTop: 10, flexGap: 10 }}>
        <Card label={props.text.hurts} uri={props.links.hurts} chosen={answered != null && answered > 0} />
        <Card label={props.text.fine} uri={props.links.fine} chosen={answered === 0} />
      </FlexWidget>
    </FlexWidget>
  );
}
