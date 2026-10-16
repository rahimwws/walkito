/**
 * Baselines and signals, as pure arithmetic over a list of days.
 *
 * No HealthKit, no storage, no clock beyond what is handed in. Everything here
 * is a function of its arguments, which is what makes the thresholds testable —
 * and they are the part that has to be right, because a threshold set too low
 * does not produce a slightly worse app, it produces an app that cries wolf and
 * is never believed again.
 */

/** One day, as the pipeline stores it. Every field independently nullable: a
 * user who granted steps and refused gait has real steps and null asymmetry,
 * and no signal may fall over on the nulls beside the one it needs. */
export type DailyMetric = {
  /** ISO date, `YYYY-MM-DD`, in the device's own timezone. */
  date: string;
  steps: number | null;
  asymmetryPct: number | null;
  walkingSpeed: number | null;
  sleepMin: number | null;
  /**
   * Minutes past midnight the night's last asleep sample ended — the wake time.
   *
   * Kept separately from `sleepMin` because they answer different questions and
   * only one of them survives summing: how long you slept is a total, when you
   * got up is an instant. Null on days with no sample ending in a plausible
   * morning, which is what keeps an afternoon nap from being read as a lie-in.
   */
  wakeMin: number | null;
  restingHR: number | null;
  /** Floors climbed. Foot-specific in a way steps are not: stairs load the
   * plantar fascia in tension through a raised heel. iPhone alone supplies it. */
  flights: number | null;
  /** Distinct hours that carried real walking. Derived rather than read: time
   * on foot is the exposure that matters for this condition, and HealthKit has
   * no type for it outside Apple Watch stand hours. */
  hoursOnFeet: number | null;
  /** The longest single run recorded that day, in kilometres. Per-session, not
   * a daily total — the evidence is about one long outing, not accumulated
   * walking, and every device that writes workouts supplies it. */
  longestRunKm: number | null;
  /** When the day's last run ended, epoch milliseconds. What "after a run"
   * is measured from — the Library card that suits the two hours after one. */
  lastRunEndAt: number | null;
  /** Average step length on steady flat walking, centimetres. An iPhone in a
   * pocket measures it. A foot being spared shortens the step before it shows
   * as asymmetry, and on both sides at once, which asymmetry cannot see. */
  stepLengthCm?: number | null;
  /** Share of each stride with both feet on the ground, percent. Read beside
   * step length; it is noisy (about 3pp is instrument error), so it is shown,
   * never acted on alone. */
  doubleSupportPct?: number | null;
  /** Walking and running distance for the day, kilometres. */
  distanceKm?: number | null;
  /** Apple Watch stand hours: hours with at least a minute standing. For a
   * job on your feet this sees standing still, which steps never do. */
  standHours?: number | null;
  /** Minutes of workouts on the feet that are not runs: walks, hikes,
   * tennis, football, the gym. Load the step count understates. */
  sportMin?: number | null;
  /** Running form, averaged over the day's runs (Apple Watch). */
  runContactMs?: number | null;
  runStrideM?: number | null;
};

export type Baseline = {
  mean: number;
  stdDev: number;
  /** Days that actually carried a sample, not days in the window. */
  sampleDays: number;
};

/**
 * How many real days a baseline needs before it is allowed to mean anything.
 *
 * Different per metric because the sampling rates differ by an order of
 * magnitude: a phone counts steps all day and estimates gait only during steady
 * walking on flat ground. Below these, the answer is no baseline at all rather
 * than a noisy one — there is no honest way to say "your usual" from four days.
 */
export const MIN_DAYS = {
  asymmetryPct: 14,
  steps: 7,
  walkingSpeed: 14,
  sleepMin: 7,
  wakeMin: 14,
  flights: 14,
  hoursOnFeet: 14,
  restingHR: 7,
  stepLengthCm: 14,
  distanceKm: 7,
} as const;

/** The window every baseline is computed over. */
export const BASELINE_DAYS = 28;

/**
 * Walking asymmetry, deliberately hobbled.
 *
 * Seven percentage points and a seven-day window, where the first draft used
 * three and three. The metric does not support the confident version: Apple
 * published no validity for it beyond a coarse binary classification at a 35%
 * threshold, and the nearest substitute — double support — is measured so
 * loosely that only a change greater than about 3.2pp is distinguishable from
 * instrument error at all. A three-point rule was inside the noise.
 *
 * It also cannot see a large part of this population. Plantar heel pain is
 * bilateral in roughly a third of cases, and a symmetric problem produces no
 * asymmetry by construction — which is why `bilateral` below suppresses these
 * fields outright rather than letting a rung silently never fire.
 */
export const ELEVATED_PP = 7;
export const ELEVATED_WINDOW = 7;
/** Days inside that window that must be elevated for the run to count. */
export const ELEVATED_DAYS = 4;
export const NORMALISED_PP = 1.5;
export const NORMALISED_DAYS = 2;

/**
 * Load, per session rather than per day.
 *
 * Daily step count is not running load and no study in this literature treats
 * it as one; the acute:chronic workload ratio that the first draft leaned on is
 * statistically indefensible and may not underpin anything said to a user. What
 * survives is much simpler: a single run longer than anything in the past four
 * weeks is worth an easy day after it. The step ratio stays, demoted to a
 * neutral observation about a day on foot.
 */
export const BIG_RUN_RATIO = 1.2;
export const STEP_SPIKE_RATIO = 1.4;
export const FLIGHTS_SPIKE_RATIO = 1.5;

/**
 * Steps today past which the app asks how the heel is taking it.
 *
 * A question, not a milestone. Nothing in this app congratulates a step count —
 * time on foot is the load this condition is sensitive to — so crossing this
 * line earns a check-in on Home and at most one push, both asking how the foot
 * feels, never "well done". One constant for both, so the screen and the lock
 * screen cannot disagree about when a day became a long one.
 */
export const STEP_CHECK_MARK = 10_000;

/**
 * Sleep, chronic rather than one bad night.
 *
 * The association with soft-tissue injury is real but modest, observational,
 * and about sustained short sleep — not about Tuesday. So this fires on a
 * seven-day mean, at the seven-hour threshold the adult literature actually
 * uses, rather than on a single night under six.
 */
export const SLEEP_MEAN_MIN = 420;
export const SLEEP_MIN_NIGHTS = 5;

/** Resting heart rate above the person's own baseline. Sleeping and resting
 * heart rate predict next-day pain within a person; HRV does not, which is why
 * there is no HRV signal here. The effect is small, so it only ever nudges. */
export const RHR_ELEVATED_BPM = 3;

/**
 * Learning the hour at which a person's own next morning turns.
 *
 * Both sides of the comparison need enough days to be a window rather than an
 * anecdote, and the gap has to clear the smallest change in pain that means
 * anything — otherwise the app invents a personal limit out of noise and then
 * warns about it every afternoon.
 */
export const ON_FEET_MIN_SIDE = 4;
export const ON_FEET_MIN_GAP = 1;
export const ON_FEET_RANGE = { from: 4, to: 14 } as const;

/** A single session of sport on the feet this long, or longer than the
 * longest of the past four weeks by `BIG_RUN_RATIO`, is a big day. */
export const BIG_SPORT_MIN = 90;
/** Below this the past four weeks hold no habit of sport to compare with. */
const SPORT_PRIOR_MIN = 30;

/** Days of gait samples that decide `none` from `learning`. */
export const AVAILABILITY_WINDOW = 14;

export type WalkingTrend = 'slower' | 'stable' | 'faster';
export type StrideTrend = 'shorter' | 'stable' | 'longer';

export type DataAvailability = 'none' | 'learning' | 'ready';

export type HealthSignals = {
  /**
   * The date "today" meant when these were computed.
   *
   * The cache outlives midnight: opened at 7am before the first refresh of
   * the day, it still holds last night's figures, and "today" in them is
   * yesterday. Anything that quotes a today-figure checks this first.
   */
  asOf: string | null;
  asymmetryToday: number | null;
  /** Percentage points above baseline, not a percentage of it. Gait is already
   * measured in percent, and "40% above your 2%" is a sentence nobody parses. */
  asymmetryDeltaPP: number | null;
  asymmetryElevatedDays: number;
  asymmetryJustNormalised: boolean;
  asymmetryBaseline: number | null;

  /** The most reliably measured mobility metric Apple ships, and the one an
   * iPhone-only user is most likely to actually have. It moves with lower-limb
   * pain, which makes it the honest replacement for asymmetry as a headline. */
  walkingSpeedToday: number | null;
  walkingSpeedBaseline: number | null;
  walkingSpeedTrend: WalkingTrend | null;
  walkingSpeedJustRecovered: boolean;

  /** Steps so far today, deduplicated across phone and watch. What the
   * step check-in on Home and the step push are measured against. */
  stepsToday: number | null;
  stepsYesterday: number | null;
  stepsBaseline: number | null;
  stepsRatio: number | null;

  flightsYesterday: number | null;
  flightsBaseline: number | null;
  flightsRatio: number | null;

  longestRunYesterdayKm: number | null;
  runMax28Km: number | null;
  bigRunYesterday: boolean;
  /** When the most recent run ended, today or yesterday; epoch ms. */
  lastRunEndedAt: number | null;

  sleepLastNightMin: number | null;
  sleepMeanMin: number | null;
  sleepShort: boolean;
  /**
   * The usual wake time, minutes past midnight, over the last 28 days.
   *
   * A median rather than a mean, which is a deliberate reading of "28-day
   * average". One 4am airport start would drag a mean by twenty minutes and
   * move every morning notification for a month; the middle value shrugs it
   * off. `hoursBaseline` in the program engine makes the same choice for the
   * same reason.
   *
   * Null until there are enough nights to be a habit rather than a sample.
   */
  wakeMinutes: number | null;

  restingHRDelta: number | null;
  restingHRElevated: boolean;

  hoursOnFeetToday: number | null;
  /** Yesterday's hours on foot: the larger of the hours that carried walking
   * and the watch's stand hours, so standing still at work counts. */
  hoursOnFeetYesterday: number | null;
  /** The usual day, same measure, over 28 days (needs 14). */
  hoursOnFeetBaseline: number | null;

  /** Walking and running distance yesterday, and the usual day. */
  distanceYesterdayKm: number | null;
  distanceBaselineKm: number | null;

  /** Minutes of sport on the feet yesterday (runs not included), and whether
   * that was a big day by `BIG_SPORT_MIN`. */
  sportMinYesterday: number | null;
  bigSportYesterday: boolean;

  /** Step length: today, the usual, and this week against the usual. */
  stepLengthToday: number | null;
  stepLengthBaseline: number | null;
  stepLengthWeek: number | null;
  stepLengthTrend: StrideTrend | null;
  /** Double support this week minus the usual, in percentage points. */
  doubleSupportDeltaPP: number | null;

  /** Running form this week (watch only). */
  runContactMsWeek: number | null;
  runStrideMWeek: number | null;

  /**
   * The hour count past which this person's own next mornings got worse.
   *
   * Learned, not configured. There is no population threshold for this and
   * there could not be — a nurse and an office worker do not share one — so it
   * is found by pairing each day's hours on foot with the pain reported the
   * morning after, inside this person's own history only.
   */
  onFeetThreshold: number | null;

  availability: DataAvailability;
};

export const NO_SIGNALS: HealthSignals = {
  asOf: null,
  asymmetryToday: null,
  asymmetryDeltaPP: null,
  asymmetryElevatedDays: 0,
  asymmetryJustNormalised: false,
  asymmetryBaseline: null,
  walkingSpeedToday: null,
  walkingSpeedBaseline: null,
  walkingSpeedTrend: null,
  walkingSpeedJustRecovered: false,
  stepsToday: null,
  stepsYesterday: null,
  stepsBaseline: null,
  stepsRatio: null,
  flightsYesterday: null,
  flightsBaseline: null,
  flightsRatio: null,
  longestRunYesterdayKm: null,
  runMax28Km: null,
  bigRunYesterday: false,
  lastRunEndedAt: null,
  sleepLastNightMin: null,
  sleepMeanMin: null,
  sleepShort: false,
  wakeMinutes: null,
  restingHRDelta: null,
  restingHRElevated: false,
  hoursOnFeetToday: null,
  hoursOnFeetYesterday: null,
  hoursOnFeetBaseline: null,
  distanceYesterdayKm: null,
  distanceBaselineKm: null,
  sportMinYesterday: null,
  bigSportYesterday: false,
  stepLengthToday: null,
  stepLengthBaseline: null,
  stepLengthWeek: null,
  stepLengthTrend: null,
  doubleSupportDeltaPP: null,
  runContactMsWeek: null,
  runStrideMWeek: null,
  onFeetThreshold: null,
  availability: 'none',
};

type Key = Exclude<keyof DailyMetric, 'date'>;

function values(days: readonly DailyMetric[], key: Key): number[] {
  const out: number[] = [];
  for (const day of days) {
    const v = day[key];
    if (typeof v === 'number' && Number.isFinite(v)) out.push(v);
  }
  return out;
}

/**
 * Mean and spread over the window, or null when there is not enough of it.
 *
 * Population standard deviation rather than sample: this is the whole of the
 * user's recent history, not a draw from a larger population, and at fourteen
 * points the Bessel correction changes a decimal nobody reads.
 */
export function baselineFor(
  days: readonly DailyMetric[],
  key: Key,
  minDays: number,
): Baseline | null {
  const window = days.slice(-BASELINE_DAYS);
  const xs = values(window, key);
  if (xs.length < minDays) return null;
  const mean = xs.reduce((a, b) => a + b, 0) / xs.length;
  const variance = xs.reduce((a, b) => a + (b - mean) ** 2, 0) / xs.length;
  return { mean, stdDev: Math.sqrt(variance), sampleDays: xs.length };
}

/** Days inside the trailing window that sat at least `ELEVATED_PP` above the
 * baseline. A window rather than a consecutive run: gait samples go missing on
 * exactly the days a person is busiest, so demanding an unbroken streak makes
 * the signal rarest when it matters most. */
function elevatedInWindow(days: readonly DailyMetric[], baseline: number): number {
  return values(days.slice(-ELEVATED_WINDOW), 'asymmetryPct').filter(
    (v) => v - baseline >= ELEVATED_PP,
  ).length;
}

/** The last `n` days with a gait sample all sitting back within tolerance. */
function settledRun(days: readonly DailyMetric[], baseline: number, n: number): boolean {
  const recent = values(days.slice(-n), 'asymmetryPct');
  if (recent.length < n) return false;
  return recent.every((v) => Math.abs(v - baseline) <= NORMALISED_PP);
}

/** The middle value. Robust to the one outlier a mean cannot survive. */
function medianOf(xs: readonly number[]): number | null {
  if (xs.length === 0) return null;
  const sorted = [...xs].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
}

function meanOf(xs: readonly number[]): number | null {
  return xs.length === 0 ? null : xs.reduce((a, b) => a + b, 0) / xs.length;
}

/**
 * The hour count past which this person's next mornings got worse.
 *
 * Scans candidate thresholds and returns the lowest one where the days above it
 * were followed by meaningfully sorer mornings than the days below. Null unless
 * both sides hold enough days and the gap clears `ON_FEET_MIN_GAP` — no
 * threshold is a perfectly good answer, and a made-up one is worse than
 * silence, because the line built on it fires every single afternoon.
 *
 * `painOn` is passed in rather than imported so this file stays free of the
 * programme's own storage, and so a test can hand it a known history.
 */
export function onFeetThresholdFrom(
  days: readonly DailyMetric[],
  painNextMorning: (index: number) => number | null,
): number | null {
  for (let limit = ON_FEET_RANGE.from; limit <= ON_FEET_RANGE.to; limit += 1) {
    const above: number[] = [];
    const below: number[] = [];
    for (let i = 0; i < days.length - 1; i += 1) {
      const hours = days[i]?.hoursOnFeet;
      const pain = painNextMorning(i);
      if (hours == null || pain == null) continue;
      (hours >= limit ? above : below).push(pain);
    }
    if (above.length < ON_FEET_MIN_SIDE || below.length < ON_FEET_MIN_SIDE) continue;
    const gap = (meanOf(above) ?? 0) - (meanOf(below) ?? 0);
    if (gap >= ON_FEET_MIN_GAP) return limit;
  }
  return null;
}

export type SignalOptions = {
  /**
   * Both heels hurt.
   *
   * Suppresses every asymmetry field. A symmetric problem cannot produce an
   * asymmetric gait, so leaving the rung enabled would not be neutral — it
   * would be a feature that silently never fires for a third of the people who
   * have the condition, and they would have no way to know why.
   */
  bilateral?: boolean;
  /** Next-morning pain, by day index, for learning the on-feet threshold. */
  painNextMorning?: (index: number) => number | null;
  /** Yesterday's trend, so "just recovered" can be a statement about a change
   * rather than about the present. */
  wasElevated?: boolean;
  wasSlow?: boolean;
};

/**
 * What can be said today.
 *
 * `days` is oldest-first and ends with today.
 */
/**
 * Hours on foot as the larger of the two measures: hours that carried real
 * walking, and the watch's stand hours. A cashier stands for hours with few
 * steps; the watch sees that, the step count does not.
 */
export function withOnFeetHours(days: readonly DailyMetric[]): DailyMetric[] {
  return days.map((day) => {
    const stand = day.standHours ?? null;
    if (stand == null) return day;
    return { ...day, hoursOnFeet: Math.max(day.hoursOnFeet ?? 0, stand) };
  });
}

export function signalsFrom(
  rawDays: readonly DailyMetric[],
  options: SignalOptions = {},
): HealthSignals {
  const days = withOnFeetHours(rawDays);
  const {
    bilateral = false,
    wasElevated = false,
    wasSlow = false,
    painNextMorning,
  } = options;

  const gait = baselineFor(days, 'asymmetryPct', MIN_DAYS.asymmetryPct);
  const speed = baselineFor(days, 'walkingSpeed', MIN_DAYS.walkingSpeed);
  const steps = baselineFor(days, 'steps', MIN_DAYS.steps);
  const flights = baselineFor(days, 'flights', MIN_DAYS.flights);
  const sleep = baselineFor(days, 'sleepMin', MIN_DAYS.sleepMin);
  const hr = baselineFor(days, 'restingHR', MIN_DAYS.restingHR);
  const onFeet = baselineFor(days, 'hoursOnFeet', MIN_DAYS.hoursOnFeet);
  const distance = baselineFor(days, 'distanceKm', MIN_DAYS.distanceKm);
  const stride = baselineFor(days, 'stepLengthCm', MIN_DAYS.stepLengthCm);
  const doubleSupport = baselineFor(days, 'doubleSupportPct', MIN_DAYS.stepLengthCm);

  const today = days[days.length - 1];
  const yesterday = days[days.length - 2];

  // --- gait, or nothing at all -------------------------------------------
  const asymmetryToday = bilateral ? null : (today?.asymmetryPct ?? null);
  const asymmetryBaseline = bilateral ? null : (gait?.mean ?? null);
  const asymmetryDeltaPP =
    asymmetryBaseline != null && asymmetryToday != null
      ? asymmetryToday - asymmetryBaseline
      : null;
  const elevated =
    bilateral || gait == null ? 0 : elevatedInWindow(days, gait.mean);

  // --- walking speed ------------------------------------------------------
  let walkingSpeedTrend: WalkingTrend | null = null;
  if (speed != null && speed.stdDev > 0) {
    const week = values(days.slice(-7), 'walkingSpeed');
    if (week.length >= 4) {
      const mean = week.reduce((a, b) => a + b, 0) / week.length;
      if (mean < speed.mean - speed.stdDev) walkingSpeedTrend = 'slower';
      else if (mean > speed.mean + speed.stdDev) walkingSpeedTrend = 'faster';
      else walkingSpeedTrend = 'stable';
    }
  }

  // --- load ---------------------------------------------------------------
  const stepsYesterday = yesterday?.steps ?? null;
  const stepsRatio =
    steps != null && steps.mean > 0 && stepsYesterday != null
      ? stepsYesterday / steps.mean
      : null;

  const flightsYesterday = yesterday?.flights ?? null;
  const flightsRatio =
    flights != null && flights.mean > 0 && flightsYesterday != null
      ? flightsYesterday / flights.mean
      : null;

  const longestRunYesterdayKm = yesterday?.longestRunKm ?? null;
  // The four weeks BEFORE yesterday — `-2` on both ends, so the window stops
  // short of yesterday and today. Off by one here and yesterday lands in its
  // own baseline, quietly becoming the record it is being measured against,
  // and no run is ever big.
  const priorRuns = values(days.slice(-(BASELINE_DAYS + 2), -2), 'longestRunKm');
  const runMax28Km = priorRuns.length > 0 ? Math.max(...priorRuns) : null;
  const bigRunYesterday =
    longestRunYesterdayKm != null &&
    runMax28Km != null &&
    runMax28Km > 0 &&
    longestRunYesterdayKm > runMax28Km * BIG_RUN_RATIO;

  const sportMinYesterday = yesterday?.sportMin ?? null;
  const priorSport = values(days.slice(-(BASELINE_DAYS + 2), -2), 'sportMin');
  const sportMax28 = priorSport.length > 0 ? Math.max(...priorSport) : 0;
  const bigSportYesterday =
    sportMinYesterday != null &&
    (sportMinYesterday >= BIG_SPORT_MIN ||
      (sportMax28 >= SPORT_PRIOR_MIN && sportMinYesterday > sportMax28 * BIG_RUN_RATIO));

  // --- stride -------------------------------------------------------------
  // The same test as walking speed: this week's mean a whole spread away from
  // the usual, on at least four days of samples.
  const strideWeekValues = values(days.slice(-7), 'stepLengthCm');
  const stepLengthWeek = strideWeekValues.length >= 4 ? meanOf(strideWeekValues) : null;
  let stepLengthTrend: StrideTrend | null = null;
  if (stride != null && stride.stdDev > 0 && stepLengthWeek != null) {
    if (stepLengthWeek < stride.mean - stride.stdDev) stepLengthTrend = 'shorter';
    else if (stepLengthWeek > stride.mean + stride.stdDev) stepLengthTrend = 'longer';
    else stepLengthTrend = 'stable';
  }
  const supportWeek = values(days.slice(-7), 'doubleSupportPct');
  const doubleSupportDeltaPP =
    doubleSupport != null && supportWeek.length >= 4 ? (meanOf(supportWeek) ?? 0) - doubleSupport.mean : null;

  const contactWeek = values(days.slice(-7), 'runContactMs');
  const runStrideWeek = values(days.slice(-7), 'runStrideM');

  // --- recovery -----------------------------------------------------------
  const recentSleep = values(days.slice(-7), 'sleepMin');
  const sleepMeanMin = recentSleep.length >= SLEEP_MIN_NIGHTS ? meanOf(recentSleep) : null;

  // Recomputed on every run, but read weekly at most by the thing that uses it
  // — a wake time that drifts daily makes the notification feel random, which
  // is worse than one that is a quarter of an hour out.
  const wakeSamples = values(days.slice(-BASELINE_DAYS), 'wakeMin');
  const wakeMinutes = wakeSamples.length >= MIN_DAYS.wakeMin ? medianOf(wakeSamples) : null;
  const restingHRDelta =
    hr != null && today?.restingHR != null ? today.restingHR - hr.mean : null;

  /**
   * `none` and `denied` are the same state, and that is not a shortcut.
   *
   * iOS deliberately refuses to say whether a read scope was granted, precisely
   * so an app cannot infer a health fact from a refusal. There is no question to
   * ask beyond "did samples arrive", and the honest answer is the same either
   * way. Readiness is judged on walking SPEED rather than asymmetry now: it is
   * the better-measured metric, it is the one most users actually have, and for
   * a bilateral user asymmetry does not exist at all.
   */
  const recentSpeed = values(days.slice(-AVAILABILITY_WINDOW), 'walkingSpeed');
  const availability: DataAvailability =
    recentSpeed.length === 0 ? 'none' : speed == null ? 'learning' : 'ready';

  return {
    asOf: today?.date ?? null,
    asymmetryToday,
    asymmetryDeltaPP,
    asymmetryElevatedDays: elevated,
    // "Was elevated, and the last two days are back inside tolerance." The
    // recent days are the whole test: demanding the seven-day window also be
    // empty would mean the spike had to age out entirely before this could
    // fire, and by then "just recovered" is a week late and no longer true.
    asymmetryJustNormalised:
      !bilateral &&
      wasElevated &&
      gait != null &&
      settledRun(days, gait.mean, NORMALISED_DAYS),
    asymmetryBaseline,

    walkingSpeedToday: today?.walkingSpeed ?? null,
    walkingSpeedBaseline: speed?.mean ?? null,
    walkingSpeedTrend,
    walkingSpeedJustRecovered: wasSlow && walkingSpeedTrend === 'stable',

    stepsToday: today?.steps ?? null,
    stepsYesterday,
    stepsBaseline: steps?.mean ?? null,
    stepsRatio,

    flightsYesterday,
    flightsBaseline: flights?.mean ?? null,
    flightsRatio,

    longestRunYesterdayKm,
    lastRunEndedAt: today?.lastRunEndAt ?? yesterday?.lastRunEndAt ?? null,
    runMax28Km,
    bigRunYesterday,

    sleepLastNightMin: today?.sleepMin ?? null,
    sleepMeanMin,
    sleepShort: sleepMeanMin != null && sleepMeanMin < SLEEP_MEAN_MIN,
    wakeMinutes,

    restingHRDelta,
    restingHRElevated: restingHRDelta != null && restingHRDelta >= RHR_ELEVATED_BPM,

    hoursOnFeetToday: today?.hoursOnFeet ?? null,
    hoursOnFeetYesterday: yesterday?.hoursOnFeet ?? null,
    hoursOnFeetBaseline: onFeet?.mean ?? null,

    distanceYesterdayKm: yesterday?.distanceKm ?? null,
    distanceBaselineKm: distance?.mean ?? null,

    sportMinYesterday,
    bigSportYesterday,

    stepLengthToday: today?.stepLengthCm ?? null,
    stepLengthBaseline: stride?.mean ?? null,
    stepLengthWeek,
    stepLengthTrend,
    doubleSupportDeltaPP,

    runContactMsWeek: meanOf(contactWeek),
    runStrideMWeek: meanOf(runStrideWeek),

    onFeetThreshold:
      painNextMorning == null ? null : onFeetThresholdFrom(days, painNextMorning),

    availability,
  };
}

/**
 * What today's plan reads from Health, in the shape `adjustToday` takes.
 *
 * One place, so the five screens that build today's plan (Home, the program,
 * the widget, notifications, the store) cannot read the signals five ways.
 * Structural: the plan engine lives in another entity and is never imported
 * here.
 */
export function todayHealthInputs(signals: HealthSignals) {
  return {
    stepsYesterday: signals.stepsYesterday,
    steps28Avg: signals.stepsBaseline,
    sleepHours: signals.sleepLastNightMin == null ? null : signals.sleepLastNightMin / 60,
    sleepShort: signals.sleepShort,
    onFeetYesterday: signals.hoursOnFeetYesterday,
    onFeetThreshold: signals.onFeetThreshold,
    bigWorkoutYesterday: signals.bigRunYesterday || signals.bigSportYesterday,
    restingHRElevated: signals.restingHRElevated,
  };
}
