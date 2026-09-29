import { FlexWidget, ImageWidget, TextWidget } from 'react-native-android-widget';

import type { DailyWidgetProps } from '../ui/daily-widget';

/**
 * The Android home-screen widget: the same question and the same two cards as
 * the iOS one, and today's goal under them. Drawn by the launcher from this
 * JSX, so no React Native view, hook or style sheet can appear here — only the
 * library's widget primitives.
 *
 * The cards open Home on `?checkin=fine|hurts`, as on iOS; there are no
 * interactive widgets on Android to record the answer in place.
 */
const BG = '#1C1C1E';
const CARD = '#2C2C2E';
const INK = '#FFFFFF';
const CAPTION = '#A1A1A6';
const ACCENT = '#8B5CF6';
const FONT = 'Nunito_700Bold';

const ART = {
  neutral: require('@assets/widget/mascot-tasks.png'),
  pain: require('@assets/widget/mascot-pain.png'),
  fine: require('@assets/widget/mascot-nopain.png'),
};

/** Opened from the widget before the app has written anything: just a way in. */
export function EmptyAndroidWidget({ label }: { label: string }) {
  return (
    <FlexWidget
      clickAction="OPEN_APP"
      style={{ height: 'match_parent', width: 'match_parent', backgroundColor: BG, borderRadius: 24, justifyContent: 'center', alignItems: 'center', padding: 12 }}>
      <ImageWidget image={ART.neutral} imageWidth={56} imageHeight={56} />
      <TextWidget text={label} style={{ color: INK, fontSize: 15, fontFamily: FONT, marginTop: 8 }} />
    </FlexWidget>
  );
}

function Card({ label, uri, art, chosen }: { label: string; uri: string; art: number; chosen: boolean }) {
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
      <ImageWidget image={art} imageWidth={60} imageHeight={60} />
      <TextWidget text={label} style={{ color: INK, fontSize: 13, fontFamily: FONT, marginTop: 4 }} maxLines={1} />
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
        <Card label={props.text.hurts} uri={props.links.hurts} art={ART.pain} chosen={answered != null && answered > 0} />
        <Card label={props.text.fine} uri={props.links.fine} art={ART.fine} chosen={answered === 0} />
      </FlexWidget>
    </FlexWidget>
  );
}
