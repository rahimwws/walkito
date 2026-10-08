import { Asset } from 'expo-asset';
import { Directory, File } from 'expo-file-system';
import * as Linking from 'expo-linking';
import { AppState, Platform } from 'react-native';

import { FIRST_STEP_CUTOFF_HOUR, currentDay, logFor, logPain, settleOffset, weekPlan } from '@/entities/program';
import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';

import { pushAndroidWidget } from '../android/push';
import type { DailyWidgetProps } from '../ui/daily-widget';
import { buildWidgetProps, type WidgetArt } from './props';

/**
 * The widget module, loaded lazily and only on iOS.
 *
 * Importing it registers the widget's compiled layout with the App Group, which
 * is the one thing that has to happen before the extension can draw anything.
 * Lazily, like PostHog and RevenueCat, so a binary built without the widget
 * extension degrades to no widget instead of failing at launch.
 *
 * The first load also asks WidgetKit to redraw. Registering writes the layout
 * but does not reload, so without it a widget already on the home screen would
 * keep the previous layout after an over-the-air update — and a reload from the
 * foreground app does not count against the widget's refresh budget.
 */
type WidgetModule = typeof import('../ui/daily-widget') & typeof import('expo-widgets');
let widgets: WidgetModule | null | undefined;

export function widgetModule(): WidgetModule | null {
  if (widgets !== undefined) return widgets;
  if (Platform.OS !== 'ios') return (widgets = null);
  try {
    widgets = {
      ...(require('expo-widgets') as typeof import('expo-widgets')),
      ...(require('../ui/daily-widget') as typeof import('../ui/daily-widget')),
    };
    // Only from the foreground. HealthKit relaunches the app in the
    // background too, and a reload from there is charged to the widget's
    // daily budget.
    if (AppState.currentState === 'active') widgets.DailyCheckWidget.reload();
  } catch (error) {
    if (__DEV__) console.warn('[widget] unavailable', error);
    widgets = null;
  }
  return widgets;
}

/** The newest widget answer already copied into the log, epoch ms. */
const IMPORTED_KEY = 'widget/imported-until';
/** The props last written, so an unchanged widget is not reloaded. */
const WRITTEN_KEY = 'widget/written';

/** How many midnights ahead are written, so the widget keeps asking every
 * morning for a week even if the app is never opened. */
const FORECAST_DAYS = 7;

/**
 * The mascot, where the widget can read it.
 *
 * The extension is a separate process with no access to the app's bundled
 * assets, so the drawings are copied once into the shared App Group directory
 * and handed to the widget as file URIs. Separate 192-pixel copies — three
 * times the largest size drawn — because a widget decodes every image it shows
 * and WidgetKit caps the memory it gets. The version is in the file name: a
 * redrawn mascot needs a new name, or the extension keeps the old one.
 */
const ART = {
  neutral: { name: 'mascot-tasks-v1.png', source: require('@assets/widget/mascot-tasks.png') },
  pain: { name: 'mascot-pain-v1.png', source: require('@assets/widget/mascot-pain.png') },
  fine: { name: 'mascot-nopain-v1.png', source: require('@assets/widget/mascot-nopain.png') },
} as const;

let art: WidgetArt = {};

async function ensureArt(root: string): Promise<WidgetArt> {
  if (art.neutral && art.pain && art.fine) return art;
  const dir = new Directory(root);
  if (!dir.exists) dir.create({ intermediates: true });
  const next: WidgetArt = {};
  for (const key of Object.keys(ART) as (keyof typeof ART)[]) {
    try {
      const target = new File(dir, ART[key].name);
      if (!target.exists) {
        const [asset] = await Asset.loadAsync(ART[key].source);
        if (asset?.localUri == null) continue;
        new File(asset.localUri).copy(target);
      }
      next[key] = target.uri;
    } catch (error) {
      // One drawing missing is an SF Symbol in its place, not a dead widget.
      if (__DEV__) console.warn('[widget] could not share', key, error);
    }
  }
  art = next;
  return art;
}

/**
 * Drops every `null` and `undefined`, however deep.
 *
 * The native side stores props in UserDefaults, and a `null` arrives there as
 * `NSNull`, which UserDefaults does not throw on — it calls `abort()`. The
 * props builder already omits absent values; this is the second line, at the
 * exact boundary where a slip would kill the app.
 */
function compact<T>(value: T): T {
  if (Array.isArray(value)) return value.filter((item) => item != null).map(compact) as T;
  if (value != null && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) if (item != null) out[key] = compact(item);
    return out as T;
  }
  return value;
}

/**
 * Copy answers given on the widget into the log.
 *
 * A press on the widget runs inside the extension: it rewrites that timeline
 * entry's props and redraws, but the app is not woken, so the answer only
 * exists in the widget until the app next reads it back. Only `widget` answers
 * are taken — anything the app wrote is in the log already — and each at most
 * once: the high-water mark covers the normal case and the timestamp match
 * covers a mark that was lost.
 *
 * Returns whether anything was written, because writing the log is itself
 * what triggers the refresh that follows.
 */
export async function importWidgetAnswers(): Promise<boolean> {
  const module = widgetModule();
  if (module == null) return false;
  const entries = await module.DailyCheckWidget.getTimeline();
  const since = kv.getNumber(IMPORTED_KEY) ?? 0;
  let newest = since;
  let wrote = false;
  for (const entry of entries) {
    const props = entry.props as Partial<DailyWidgetProps>;
    const { answerScore, answeredAt } = props;
    if (props.answerSource !== 'widget' || answerScore == null || answeredAt == null) continue;
    if (answeredAt <= since) continue;
    const day = currentDay(answeredAt);
    if (day < 1) continue;
    const already = logFor(day)?.painEntries?.some((reading) => reading.at === answeredAt) === true;
    if (!already) {
      logPain(day, answerScore, [], answeredAt);
      // The same step Home takes after a check-in: the morning's answer is
      // what moves the plan back or lets it return.
      settleOffset(day);
      wrote = true;
    }
    newest = Math.max(newest, answeredAt);
  }
  if (newest > since) kv.set(IMPORTED_KEY, newest);
  return wrote;
}

/** Local noon on the day of `now` — when the check-in question changes. */
function noonOf(now: number): number {
  const date = new Date(now);
  date.setHours(FIRST_STEP_CUTOFF_HOUR, 0, 0, 0);
  return date.getTime();
}

/** The next local midnight. `setHours(24)` rather than adding a day's worth of
 * milliseconds, so a daylight-saving change does not move it off the hour. */
function nextMidnight(now: number): number {
  const date = new Date(now);
  date.setHours(24, 0, 0, 0);
  return date.getTime();
}

/**
 * Write today, and a fresh morning for each of the next seven.
 *
 * Every entry past the first is an unanswered check-in on its own date, so a
 * widget whose app is not opened for days still asks each morning and still
 * takes the answer — each press lands on that day's entry and is read back
 * with the rest when the app opens.
 *
 * Skipped when nothing changed: WidgetKit budgets reloads, and a log write that
 * did not move anything the widget shows should not spend one.
 */
export async function refreshWidget(now: number = Date.now()): Promise<void> {
  const module = widgetModule();
  if (module == null || module.widgetsDirectory == null) return;
  const shared = await ensureArt(module.widgetsDirectory);
  const url = Linking.createURL('/');
  // Home reads `checkin` and does the rest: records "no pain" and says so, or
  // opens the check-in sheet for the scale and the leg map.
  const links = {
    fine: Linking.createURL('/', { queryParams: { checkin: 'fine' } }),
    hurts: Linking.createURL('/', { queryParams: { checkin: 'hurts' } }),
    checkin: Linking.createURL('/', { queryParams: { checkin: 'open' } }),
  };
  // Once, with the real clock. Forecasts only read it; see `forecastGoal`.
  const plan = weekPlan(now).days;

  const entries: { date: Date; props: DailyWidgetProps }[] = [
    { date: new Date(now), props: compact(buildWidgetProps(now, shared, url, links, plan)) },
  ];
  // Noon turns the morning question ("First steps this morning?") into the
  // day's ("How's the foot today?"), so every day gets a second entry there.
  const todayNoon = noonOf(now);
  if (now < todayNoon) {
    entries.push({ date: new Date(todayNoon), props: compact(buildWidgetProps(todayNoon, shared, url, links, plan)) });
  }
  let midnight = nextMidnight(now);
  for (let i = 0; i < FORECAST_DAYS; i += 1) {
    // A second past midnight, so the forecast is built for the new date.
    entries.push({ date: new Date(midnight), props: compact(buildWidgetProps(midnight + 1000, shared, url, links, plan, true)) });
    const noon = noonOf(midnight + 1000);
    entries.push({ date: new Date(noon), props: compact(buildWidgetProps(noon, shared, url, links, plan, true)) });
    midnight = nextMidnight(midnight + 1000);
  }
  // After a week unopened, the "open the app" face rather than the last
  // forecast frozen on screen: WidgetKit keeps showing the final entry for as
  // long as nobody writes a new timeline, and a stale week strip or a check-in
  // from days ago would be showing something false.
  entries.push({ date: new Date(midnight), props: { url } as DailyWidgetProps });

  // The first entry's time is left out: it is "now", and changes on every call.
  // Its date is in the props, so a new day still counts as a change.
  const fingerprint = JSON.stringify(entries.map((entry, i) => [i === 0 ? 0 : entry.date.getTime(), entry.props]));
  if (kv.getString(WRITTEN_KEY) === fingerprint) return;

  // An answer may have been given on the widget while this was being built —
  // the extension writes the whole timeline back on a press, and writing ours
  // now would erase it. Read it back first; if there was one, the log write
  // re-runs the sync and this pass stands down.
  if (await importWidgetAnswers()) return;

  module.DailyCheckWidget.updateTimeline(entries);
  kv.set(WRITTEN_KEY, fingerprint);
}

/**
 * Put the widget back to its "open the app" face.
 *
 * For an account that was deleted or reset: the old timeline would otherwise
 * stay on the home screen, still asking and still taking answers that the next
 * person's program would then import. Only when there is something to clear.
 */
export async function clearWidget(): Promise<void> {
  const module = widgetModule();
  if (module == null) return;
  const entries = await module.DailyCheckWidget.getTimeline();
  if (!entries.some((entry) => (entry.props as Partial<DailyWidgetProps>)?.text != null)) return;
  module.DailyCheckWidget.updateTimeline([{ date: new Date(), props: { url: Linking.createURL('/') } as DailyWidgetProps }]);
  kv.remove(WRITTEN_KEY);
  kv.remove(IMPORTED_KEY);
}

let running: Promise<void> = Promise.resolve();

function queue(work: () => Promise<void>): Promise<void> {
  running = running.then(work).catch((error: unknown) => {
    if (__DEV__) console.warn('[widget] sync failed', error);
  });
  return running;
}

/**
 * Import, then refresh — one at a time.
 *
 * Always in that order. Refreshing first would overwrite the entry holding an
 * answer the app has not read yet, and the answer would be lost.
 */
export function syncWidget(): Promise<void> {
  return queue(async () => {
    if (currentDay() < 1) return;
    if (Platform.OS === 'android') {
      await refreshAndroidWidget();
      return;
    }
    const wrote = await importWidgetAnswers();
    // A write re-runs the sync through the log subscription; refreshing here
    // too would only do the same work twice.
    if (!wrote) await refreshWidget();
  });
}

/** Queued behind any sync, so a reset cannot interleave with a refresh. */
export function resetWidget(): Promise<void> {
  if (Platform.OS === 'android') {
    return queue(async () => {
      kv.remove(WRITTEN_KEY);
      await pushAndroidWidget(null, translatorFor(getLanguage())('widget.tapToCheckIn'));
    });
  }
  return queue(clearWidget);
}

/**
 * Android's widget: one entry, today, redrawn whenever the app syncs. There is
 * no timeline to forecast into — the launcher redraws on its own schedule from
 * what was saved, and the app refreshes it on every foreground.
 */
async function refreshAndroidWidget(now: number = Date.now()): Promise<void> {
  const links = {
    fine: Linking.createURL('/', { queryParams: { checkin: 'fine' } }),
    hurts: Linking.createURL('/', { queryParams: { checkin: 'hurts' } }),
    checkin: Linking.createURL('/', { queryParams: { checkin: 'open' } }),
  };
  const props = compact(buildWidgetProps(now, {}, Linking.createURL('/'), links, weekPlan(now).days));
  const fingerprint = JSON.stringify(props);
  if (kv.getString(WRITTEN_KEY) === fingerprint) return;
  await pushAndroidWidget(props, translatorFor(getLanguage())('widget.tapToCheckIn'));
  kv.set(WRITTEN_KEY, fingerprint);
}
