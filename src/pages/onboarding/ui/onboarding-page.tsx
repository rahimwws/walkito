import ArrowLeft02Icon from "@hugeicons/core-free-icons/ArrowLeft02Icon";
import { HugeiconsIcon } from "@hugeicons/react-native";
import * as Haptics from "expo-haptics";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  SlideInDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LanguageBadge } from "@/features/language-switch";
import { SignInSheet } from "@/features/sign-in";
import { fonts, meterColors, palette } from "@/shared/config";
import {
  featureFlag,
  setPersonOnce,
  track,
  type AcquisitionSource,
} from "@/shared/lib/analytics";
import { useT, type Key, type Translate } from "@/shared/lib/i18n";
import { useColorScheme } from "@/shared/lib/theme";
import { QUESTION_LINE_MS, TypedText } from "@/shared/ui/typed-text";
import { setBilateral } from "@/entities/health";
import { whereKey } from "@/entities/leg-zone";
import { armOffer } from "@/entities/offer";
import { recordAcquisitionSource } from "@/entities/purchase";
import {
  saveIntake,
  setProfileEmail,
  setProfileName,
} from "@/entities/profile";
import { wakeMinutes } from "@/entities/notifications";
import {
  EQUIPMENT,
  PLAN_META,
  exerciseById,
  logPain,
  seedPlanSettings,
  startProgram,
  todayDayNumber,
} from "@/entities/program";
import { armSetup, completeOnboarding } from "@/entities/session";
import {
  PRIMARY_BUTTON_HEIGHT,
  PrimaryButton,
} from "@/shared/ui/primary-button";
import { REPLAY_MASK } from "@/shared/ui/replay-mask";
import { Glow } from "@/shared/ui/glow";
import { WelcomePage } from "@/pages/welcome";

import { QUESTION_PHOTOS } from "../config/question-photos";
import { chose } from "../model/answers";
import {
  intakeFrom,
  planSettingsFrom,
  startingPlan,
  type MiniTestAnswers,
} from "../model/intake";
import {
  MINI_TEST_FLAG,
  MORNING_PAIN_SEED,
  areaReaction,
  balanceAllowed,
  durationOf,
  durationReaction,
  equipmentReaction,
  firstWeekMoves,
  goalValuesFor,
  habitOf,
  miniTestEligible,
  morningPainOf,
  reminderFor,
  roleOf,
  roleReaction,
  runs,
  safetyPlan,
  safetyReaction,
  sessionDays,
  standsAtWork,
  triedKey,
  triedReaction,
  whyLines,
  type Habit,
  type Reaction,
} from "../model/journey";
import { loadQuestionForRole, withName } from "../model/personalise";
import { PLANS, recommendedIndex } from "../model/plans";
import { primaryPain } from "../model/reflection";
import { outlookMonths } from "../model/outlook";
import { painAreasFor, zonesIn } from "../model/pain-areas";
import {
  STEPS,
  STEP_COUNT,
  hurts,
  stepAfter,
  type OnboardingOption,
  type OnboardingStep,
  type Phrase,
  type ResolvedOption,
} from "../model/steps";
import { BuildingStep, type BuildingRow } from "./building-step";
import { ChoiceStep } from "./choice-step";
import { ScheduleStep } from "./schedule-step";
import { ContractStep } from "./contract-step";
import { FirstWeekStep, type WeekMove } from "./first-week-step";
import { HabitStep } from "./habit-step";
import { InlineReaction } from "./inline-reaction";
import { IntroStep } from "./intro-step";
import { PassportCard, PassportStrip, type PassportStamp } from "./foot-passport";
import { MidwayStep } from "./midway-step";
import { TestBalance, TestIntro, TestResult, TestToe } from "./mini-test";
import { MorningPainStep } from "./morning-pain-step";
import { NameStep } from "./name-step";
import { NotifyStep } from "./notify-step";
import { OutlookStep } from "./outlook-step";
import { PainMapStep } from "./pain-map-step";
import { QuestionNote, QuestionPhoto } from "./question-photo";
import { ReactionStep } from "./reaction-step";
import { StepProgress } from "./step-progress";
import { WhyStep } from "./why-step";

const SIDE_PAD = 24;

/** The two halves of a step change. The exit is quicker than the entrance —
 * exits should get out of the way, entrances should feel like arriving. */
const EXIT_MS = 130;
const ENTER_MS = 240;
/** How far a question slides. Enough to read as direction, not as a page. */
const SLIDE = 28;
/** The sub-line trails the question rather than landing with it. */
const BLURB_DELAY_MS = 220;

type Answer = string | string[];
type Answers = Record<string, Answer>;

/** Where each part of the flow after the first begins on the progress bar:
 * the bar's fill at that part's first step. */
const CHECKPOINTS: readonly number[] = [1, 2, 3]
  .map((act) => STEPS.findIndex((step) => step.act === act))
  .filter((at) => at > 0)
  .map((at) => (at + 1) / STEP_COUNT);

/**
 * Steps hidden from session recordings: they ask about the body or the pain,
 * or show the answers back. The privacy policy promises none of this appears
 * in a replay. `collapsable` stays false on every step so toggling the mask
 * never changes whether the view exists natively.
 */
const UNRECORDED_STEPS: ReadonlySet<string> = new Set([
  "toe",
  "bunion",
  "pain",
  "side",
  "duration",
  "duration-reaction",
  "morningPain",
  "safety",
  "tried",
  "tried-reaction",
  "midway",
  "why",
  "test-toe",
  "test-balance",
  "test-result",
  "first-week",
  "outlook",
]);

/**
 * The only questions with a line under them. Everywhere else the question is
 * enough: a sub-line that explains why we ask is reading nobody does. These
 * keep one because it says how to answer (several, up to three) or what the
 * screen is.
 */
const BLURB_STEPS: ReadonlySet<string> = new Set([
  "toe",
  "bunion",
  "pain",
  "safety",
  "tried",
  "contract",
]);

/** The onboarding answers that are sent to analytics, and nothing else. */
const ANSWERS_TRACKED = ["source", "goal", "runner", "role"] as const;
type TrackedAnswer = (typeof ANSWERS_TRACKED)[number];

/** How each goal value reads, by who is asked. `allday` is the shift for a
 * standing job and "on my feet all day" for anyone else. */
function goalLabel(value: string, standing: boolean): Key {
  switch (value) {
    case "mornings":
      return "onboarding.goal.mornings";
    case "comeback":
      return "onboarding.goal.backToRunning";
    case "race":
      return "onboarding.goal.race";
    case "flatfeet":
      return "onboarding.goal.flatfeet";
    case "allday":
      return standing ? "onboarding.goal.shift" : "onboarding.goal.allday";
    case "steady":
      return "onboarding.goal.steady";
    default:
      return "onboarding.goal.injuryfree";
  }
}

function whereLabel(
  t: Translate,
  area: string | null,
  side: string | null,
): string | null {
  const key = whereKey(area, side);
  return key != null ? t(key) : null;
}

/** Who they are, as the passport says it: "Both" alone means nothing. */
const ROLE_PASSPORT: Readonly<Record<string, Key>> = {
  running: "onboarding.passport.role.running",
  feet: "onboarding.passport.role.feet",
  both: "onboarding.passport.role.both",
  walking: "onboarding.passport.role.walking",
};

const DURATION_LABEL: Readonly<Record<string, Key>> = {
  weeks: "onboarding.duration.weeks",
  months: "onboarding.duration.months",
  year: "onboarding.duration.year",
  longer: "onboarding.duration.longer",
};

const EQUIPMENT_LABEL: Readonly<Record<string, Key>> = {
  step: "onboarding.equipment.step",
  band: "onboarding.equipment.band",
  towel: "onboarding.equipment.towel",
  pillow: "onboarding.equipment.pillow",
  ball: "onboarding.equipment.ball",
};

/** The morning seed, and the recommended middle of each time pick, so the
 * schedule screen only asks for a tap where the default is not wanted. */
function seedAnswers(): Answers {
  return {
    morningPain: String(MORNING_PAIN_SEED),
    planDays: ["days5"],
    planMinutes: ["min5"],
  };
}

function list(answer: Answer | undefined): string[] {
  return Array.isArray(answer) ? answer : [];
}

/**
 * The onboarding flow: one surface whose contents change.
 *
 * The progress bar, the button bar and the safe-area padding are the same
 * objects the whole way through, so they hold still while only the question
 * moves — which is what makes the screens read as one conversation.
 *
 * Every few questions the flow says something back: a line under the options,
 * or a whole screen when the answer deserves one. It ends on what the answers
 * point to, the plan built from them, the first week, and the contract; then
 * Home, where the paywall rises. Signing in, Health and the watch come after
 * the first purchase (`pages/setup`).
 */
export function OnboardingPage() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(seedAnswers);
  /** The daily reminder, minutes past midnight. Follows the habit they pick
   * until they change it by hand. */
  const [reminder, setReminder] = useState(() => wakeMinutes() + 15);
  const reminderTouched = useRef(false);
  const [notify, setNotify] = useState<boolean | null>(null);
  /** The welcome screen introduces itself before it asks for anything. */
  const [introReady, setIntroReady] = useState(false);
  const ctaSquash = useSharedValue(0);
  /** "Already have an account?" */
  const [signIn, setSignIn] = useState(false);
  /** The one-leg check, in seconds, per side. */
  const [balance, setBalance] = useState<{
    left: number | null;
    right: number | null;
  }>({ left: null, right: null });

  /** Whether the contract has been signed, and how far its stamp has come down. */
  const [signed, setSigned] = useState(false);
  const [, setDrawing] = useState(false);
  const [sealing, setSealing] = useState(false);
  const stamp = useSharedValue(0);

  const step = STEPS[index];
  const answer = answers[step.key];

  const name = typeof answers.name === "string" ? answers.name : "";
  const role = roleOf(answers);
  const painZones = zonesIn(answers.pain);
  const pain = painAreasFor(answers.pain);
  const painless = !hurts(answers);
  const area = primaryPain(pain);
  const side = list(answers.side)[0] ?? null;
  const score = morningPainOf(answers) ?? MORNING_PAIN_SEED;
  const load = loadQuestionForRole(role);
  const isLast = index === STEP_COUNT - 1;
  const runner = list(answers.runner)[0] ?? null;
  // Decided from what they said about themselves, not offered.
  const plan = PLANS[recommendedIndex(runner)];

  /** A phrase from the step table, resolved and addressed to this user. */
  const say = (phrase: Phrase) => withName(phrase(t), name);

  const resolve = (options: readonly OnboardingOption[]): ResolvedOption[] =>
    options.map((option) => ({
      value: option.value,
      label: say(option.label),
      caption: option.caption?.(t),
      icon: option.icon,
      accent: option.accent,
    }));

  const goalValues = goalValuesFor(role, painless);
  const goalOptions: ResolvedOption[] = goalValues.map((value) => ({
    value,
    label: t(goalLabel(value, role === "feet" || role === "both")),
  }));

  /** The options a choice step shows: its own, or the ones swapped in for
   * who this person is. */
  const optionsFor = (current: OnboardingStep): ResolvedOption[] => {
    if (current.kind !== "choice") return [];
    if (current.key === "goal") return goalOptions;
    if (current.key === "load") return resolve(load.options);
    return resolve(current.options);
  };

  // ── Lines read back ──────────────────────────────────────────────────────
  const where = whereLabel(t, area, side);
  const loadLine = (() => {
    const value = list(answers.load)[0];
    const option =
      value == null ? null : load.options.find((o) => o.value === value);
    if (option == null) return null;
    const band = option.label(t);
    if (standsAtWork(answers))
      return t("onboarding.reflection.feetDaily", { band });
    if (runs(answers)) return t("onboarding.reflection.volumeWeekly", { band });
    return null;
  })();

  // ── The Foot Passport ────────────────────────────────────────────────────
  // One stamp per question already answered and passed, in the order asked.
  // A step stepped over has no answer and leaves no stamp; going back takes
  // the later stamps off until they are answered again.
  const passed = (key: string) => {
    const at = STEPS.findIndex((candidate) => candidate.key === key);
    return at >= 0 && at < index;
  };
  const choiceLabel = (key: string): string | null => {
    const value = list(answers[key])[0];
    const choice = STEPS.find((candidate) => candidate.key === key);
    if (value == null || choice == null || !("options" in choice)) return null;
    const option = choice.options.find((candidate) => candidate.value === value);
    return option == null ? null : say(option.label);
  };
  const passportStamps: PassportStamp[] = (() => {
    const out: PassportStamp[] = [];
    const add = (key: string, label: string, value: string | null) => {
      if (passed(key) && value != null && value !== "")
        out.push({
          key,
          label,
          value,
          order: STEPS.findIndex((candidate) => candidate.key === key),
        });
    };
    const roleValue = list(answers.role)[0];
    add(
      "role",
      t("onboarding.passport.who"),
      roleValue != null && ROLE_PASSPORT[roleValue] != null
        ? t(ROLE_PASSPORT[roleValue])
        : null,
    );
    if (list(answers.pain).length > 0)
      add(
        "pain",
        t("onboarding.passport.where"),
        painless ? t("onboarding.midway.nothing") : where,
      );
    const duration = durationOf(answers);
    add(
      "duration",
      t("onboarding.passport.since"),
      duration == null ? null : t(DURATION_LABEL[duration]),
    );
    if (!painless)
      add(
        "morningPain",
        t("onboarding.passport.mornings"),
        t("onboarding.passport.morningsValue", { score }),
      );
    add("toe", t("onboarding.passport.toe"), choiceLabel("toe"));
    add("bunion", t("onboarding.passport.bunion"), choiceLabel("bunion"));
    const goal = list(answers.goal)[0];
    add(
      "goal",
      t("onboarding.passport.goal"),
      goalOptions.find((option) => option.value === goal)?.label ?? null,
    );
    const loadValue = list(answers.load)[0];
    const loadOption = load.options.find((option) => option.value === loadValue);
    add(
      "load",
      t("onboarding.passport.load"),
      loadOption == null ? null : say(loadOption.label),
    );
    add("habit", t("onboarding.passport.habit"), choiceLabel("habit"));
    const days = choiceLabelFrom("planDays", list(answers.planDays)[0]);
    const minutes = choiceLabelFrom("planMinutes", list(answers.planMinutes)[0]);
    add(
      "planDays",
      t("onboarding.passport.plan"),
      days != null && minutes != null
        ? t("onboarding.passport.planValue", { days, minutes })
        : null,
    );
    return out;
  })();
  /** The schedule step keeps its two lists apart from `options`. */
  function choiceLabelFrom(key: "planDays" | "planMinutes", value: string | undefined): string | null {
    const schedule = STEPS.find((candidate) => candidate.kind === "schedule");
    if (value == null || schedule == null || schedule.kind !== "schedule") return null;
    const options = key === "planDays" ? schedule.days : schedule.minutes;
    const option = options.find((candidate) => candidate.value === value);
    return option == null ? null : say(option.label);
  }
  /** Folded above the questions themselves, never over a screen of its own. */
  const showPassport =
    passed("name") &&
    name !== "" &&
    (step.kind === "choice" ||
      step.kind === "pain-map" ||
      step.kind === "morning-pain" ||
      step.kind === "habit" ||
      step.kind === "schedule");


  // What is at home, said back: nothing, everything, or what the plan goes
  // without.
  const kitLine = (() => {
    const have = list(answers.equipment);
    if (have.includes("none")) return t("onboarding.building.kitNone");
    if (have.length === 0) return null;
    const missing = EQUIPMENT.filter((item) => !have.includes(item));
    return missing.length === 0
      ? t("onboarding.building.kitAll")
      : t("onboarding.building.kitWithout", {
          items: missing
            .map((item) => t(EQUIPMENT_LABEL[item]).toLocaleLowerCase())
            .join(", "),
        });
  })();

  const buildingRows: BuildingRow[] = (() => {
    const rows: BuildingRow[] = [];
    if (painless)
      rows.push({
        art: "foot",
        title: t("onboarding.midway.nothing"),
        ...(loadLine != null ? { caption: loadLine } : {}),
      });
    else if (where != null)
      rows.push({
        art: "foot",
        title: where,
        caption: t("onboarding.building.mornings", { score }),
      });
    if (!painless)
      rows.push({
        art: "shield",
        title: safetyPlan(answers).seated
          ? t("onboarding.building.seated")
          : t("onboarding.building.safety"),
      });
    const days = choiceLabelFrom("planDays", list(answers.planDays)[0]);
    const minutes = choiceLabelFrom("planMinutes", list(answers.planMinutes)[0]);
    if (days != null && minutes != null)
      rows.push({
        art: "calendar",
        title: t("onboarding.passport.planValue", { days, minutes }),
        ...(kitLine != null ? { caption: kitLine } : {}),
      });
    rows.push({ art: "clipboard", title: t("onboarding.building.choosing") });
    return rows;
  })();

  /** The exercises the kit picked so far brings into the plan: each one whose
   * every piece of equipment is at home. */
  const kitAdds = (() => {
    const have = list(answers.equipment).filter((item) => item !== "none");
    if (have.length === 0) return [];
    return PLAN_META.filter(
      (meta) =>
        meta.equipment.length > 0 &&
        meta.equipment.every((item) => have.includes(item)),
    )
      .slice(0, 4)
      .map((meta) => t(exerciseById(meta.id).titleKey));
  })();

  const why = whyLines(area, answers);
  const whySections =
    why == null
      ? []
      : [
          { head: t("onboarding.why.patternHead"), text: t(why.pattern) },
          ...(why.lingers != null || why.tried != null
            ? [
                {
                  head: t("onboarding.why.lingersHead"),
                  // Two whole sentences, each complete in every language.
                  text: [why.lingers, why.tried]
                    .filter((key): key is Key => key != null)
                    .map((key) => t(key))
                    .join(" "),
                },
              ]
            : []),
          { head: t("onboarding.why.helpsHead"), text: t(why.helps) },
        ];

  const settingsNow = planSettingsFrom(answers, null);
  const weekMoves: WeekMove[] = [
    {
      id: "fascia_stretch",
      title: t("quick.morning.title"),
      meta: t("onboarding.week.morningMeta"),
    },
    ...firstWeekMoves(area).map((id) => ({
      id,
      title: t(exerciseById(id).titleKey),
      meta: t("onboarding.week.sessionMeta"),
    })),
  ];

  const reaction: Reaction | null =
    step.kind !== "reaction"
      ? null
      : step.of === "role"
        ? roleReaction(role)
        : step.of === "duration"
          ? durationReaction(durationOf(answers))
          : triedReaction(triedKey(answers));

  /** The line under the options, for the questions that get one. */
  const inline = (() => {
    if (step.kind === "name" && name.trim().length > 1) {
      return {
        id: "name",
        text: t("onboarding.react.nameNamed", { name: name.trim() }),
      };
    }
    if (step.kind === "pain-map" && list(answer).length > 0) {
      const found = areaReaction(painless ? "none" : area);
      return found != null ? { id: found.key, text: t(found.text) } : null;
    }
    if (step.key === "safety") {
      const found = safetyReaction(answers);
      return found != null ? { id: found.key, text: t(found.text) } : null;
    }
    if (step.key === "planDays") {
      const found = equipmentReaction(answers);
      return found != null ? { id: found.key, text: t(found.text) } : null;
    }
    return null;
  })();

  const miniTestAnswers: MiniTestAnswers | null =
    chose(answers, "miniTest", "test") && list(answers["test-toe"]).length > 0
      ? {
          arch:
            (list(answers["test-toe"])[0] as MiniTestAnswers["arch"]) ?? null,
          balanceLeft: balance.left,
          balanceRight: balance.right,
        }
      : null;

  /** Screens that own their whole canvas, with no header over them. */
  const bare =
    step.kind === "intro" ||
    step.kind === "building" ||
    step.kind === "welcome";
  /** Screens the shared button bar stays out of. */
  const noSharedCta =
    step.kind === "notify" ||
    step.kind === "building" ||
    step.kind === "welcome" ||
    step.kind === "reaction";
  /** Screens that set their own heading rather than the shared question block. */
  const ownHeading =
    step.kind === "notify" ||
    step.kind === "building" ||
    step.kind === "reaction" ||
    step.kind === "midway" ||
    step.kind === "why" ||
    step.kind === "first-week" ||
    step.kind.startsWith("test-");

  const canAdvance = (() => {
    switch (step.kind) {
      case "choice":
        if (step.key === "goal")
          return goalValues.includes(list(answer)[0] ?? "");
        if (step.key === "load")
          return load.options.some((o) => o.value === list(answer)[0]);
        return list(answer).length > 0;
      case "schedule":
        return (
          list(answers.planDays).length > 0 &&
          list(answers.planMinutes).length > 0
        );
      case "pain-map":
        return list(answer).length > 0;
      case "habit":
        return habitOf(answers) != null;
      case "test-toe":
        return list(answer).length > 0;
      case "test-balance":
        return balance.left != null && balance.right != null;
      case "contract":
        return signed && !sealing;
      default:
        return true;
    }
  })();

  const settled = useSharedValue(1);
  const direction = useSharedValue(1);

  const ctaSquashStyle = useAnimatedStyle(() => ({
    transform: [
      { scaleY: 1 - ctaSquash.value * 0.11 },
      { scaleX: 1 + ctaSquash.value * 0.025 },
    ],
  }));

  /** Glass under an ancestor whose alpha is animated renders empty
   * (expo/expo#41024), so a glass step keeps the body opaque. */
  const glassStep = step.kind === "outlook";
  const questionStyle = useAnimatedStyle(() => ({
    opacity: glassStep ? 1 : settled.value,
    transform: [{ translateX: (1 - settled.value) * SLIDE * direction.value }],
  }));

  /**
   * Set while a question is being changed from the passport: the next step
   * forward goes straight back to the passport rather than through every
   * screen in between.
   */
  const [returnTo, setReturnTo] = useState<number | null>(null);
  const editFromPassport = (key: string) => {
    const at = STEPS.findIndex((candidate) => candidate.key === key);
    if (at < 0) return;
    setReturnTo(index);
    go(at, false);
  };

  const enterFrom = useRef(1);
  const mounted = useRef(false);

  /**
   * Exit, then swap, then enter — in that order. The swap happens at the
   * trough, inside the animation callback, so nothing is visible mid-swap.
   */
  const go = useCallback(
    (next: number, forward: boolean) => {
      if (STEPS[next].kind !== "name") Keyboard.dismiss();
      enterFrom.current = forward ? 1 : -1;
      direction.value = forward ? -1 : 1;
      settled.value = withTiming(
        0,
        {
          duration: EXIT_MS,
          easing: Easing.in(Easing.quad),
          reduceMotion: ReduceMotion.System,
        },
        (finished) => {
          "worklet";
          if (finished) runOnJS(setIndex)(next);
        },
      );
    },
    [direction, settled],
  );

  /** One event per screen shown, keyed by the step's stable `key`. */
  useEffect(() => {
    if (index === 0) track("onboarding_started");
    track("onboarding_step_viewed", { step: step.key, index, act: step.act });
    if (step.kind === "reaction" && reaction != null)
      track("onboarding_reaction_viewed", {
        reaction: reaction.key,
        full: true,
      });
    // `step` follows `index`; listing it would only repeat the same trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    direction.value = enterFrom.current;
    settled.value = withTiming(1, {
      duration: ENTER_MS,
      easing: Easing.bezier(0.23, 1, 0.32, 1),
      reduceMotion: ReduceMotion.System,
    });
  }, [index, direction, settled]);

  /** The few answers worth a chart. Pain, the safety answers, what they
   * tried and the check's results never leave the device. */
  const reportAnswer = () => {
    if (!ANSWERS_TRACKED.includes(step.key as TrackedAnswer)) return;
    const value = list(answers[step.key])[0];
    if (typeof value !== "string") return;
    track("onboarding_answered", {
      step: step.key as TrackedAnswer,
      answer: value,
    });
    if (step.key === "source") {
      const source = value as AcquisitionSource;
      track("acquisition_source_selected", { source });
      setPersonOnce({ acquisition_source: source });
      recordAcquisitionSource(source);
    }
  };

  /**
   * Move one step, over anything that does not apply. `patch` is written into
   * the answers first and read by the skip rules of this very move — the
   * experiment's assignment and "skip the check" both decide which screen is
   * next, so they cannot wait for the state update to land.
   */
  const move = (forward: boolean, patch?: Answers) => {
    if (forward) reportAnswer();
    if (forward && returnTo != null) {
      if (patch != null) setAnswers({ ...answers, ...patch });
      const back = returnTo;
      setReturnTo(null);
      go(back, true);
      return;
    }
    const nextAnswers = patch != null ? { ...answers, ...patch } : answers;
    if (patch != null) setAnswers(nextAnswers);
    const next = stepAfter(index, forward, nextAnswers);
    if (next != null) go(next, forward);
  };

  /**
   * Keeps what the user told us, and starts the plan they were shown.
   *
   * The morning number is also written as today's check-in, so the progress
   * chart opens on it — the same question, the same scale.
   */
  const commit = () => {
    const intake = intakeFrom(answers, miniTestAnswers);
    saveIntake(intake);
    startProgram(startingPlan(intake, answers));
    seedPlanSettings(planSettingsFrom(answers, reminder, miniTestAnswers));
    setBilateral(intake.side === "both");
    if (!painless && intake.morningPain != null)
      logPain(todayDayNumber(), intake.morningPain, painZones);
  };

  /** The end: the answers kept, the offer armed, the screens after the first
   * purchase owed, and Home. */
  const finish = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Keyboard.dismiss();
    commit();
    armOffer({ weeks: String(plan.weeks), name });
    armSetup();
    track("onboarding_completed", { skipped: false, plan_weeks: plan.weeks });
    completeOnboarding();
  };

  const onNext = () => {
    if (!canAdvance) return;

    // The stamp is the acknowledgement, so it plays before the screen leaves.
    if (step.kind === "contract") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      setSealing(true);
      stamp.value = withTiming(1, {
        duration: 260,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      });
      return;
    }
    if (isLast) {
      finish();
      return;
    }
    // The 30-second check's experiment is decided here, as the flow reaches
    // it, and only for somebody it is for: reading the flag records the
    // exposure, and an ineligible person must not count in either arm.
    if (
      step.key === "planDays" &&
      answers.miniTest == null &&
      miniTestEligible(answers, painless)
    ) {
      const variant =
        featureFlag(MINI_TEST_FLAG) === "test" ? "test" : "control";
      track("mini_test_assigned", { variant });
      move(true, { miniTest: variant });
      return;
    }
    if (step.kind === "test-result") {
      track("mini_test_completed", { balance: balance.left != null });
    }
    move(true);
  };

  const onBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (index === 0) return;
    move(false);
  };

  const setAnswer = (value: Answer) =>
    setAnswers((prev) => ({ ...prev, [step.key]: value }));

  const ctaLabel = (() => {
    switch (step.kind) {
      case "intro":
        return t("onboarding.intro.ctaStart");
      case "why":
        return t("onboarding.why.cta");
      case "test-intro":
        return t("onboarding.test.start");
      case "midway":
      case "first-week":
      case "outlook":
      case "contract":
      case "test-result":
        return t("onboarding.cta.continue");
      default:
        return t("onboarding.cta.next");
    }
  })();

  // The welcome gate replaces the whole surface. Every hook has run by here.
  if (step.kind === "welcome") {
    return <WelcomePage onDone={onNext} />;
  }

  const heading = (() => {
    if (step.kind === "choice" && step.key === "load") return say(load.title);
    return say(step.title);
  })();
  const blurb = (() => {
    if (step.kind === "outlook" && painless)
      return t("onboarding.outlook.blurbNone");
    if (step.kind === "choice" && step.key === "load") return say(load.blurb);
    return say(step.blurb);
  })();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={0}
      style={[styles.root, { paddingTop: insets.top + 12 }]}
    >
      <Glow />
      {!bare && (
        <View style={[styles.header, showPassport && styles.headerTight]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t("common.back")}
            onPress={onBack}
            hitSlop={12}
            style={({ pressed }) => pressed && { opacity: 0.5 }}
          >
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={26}
              color={colors.foreground}
              strokeWidth={2}
            />
          </Pressable>
          <StepProgress index={index} count={STEP_COUNT} checkpoints={CHECKPOINTS} />
          <LanguageBadge />
        </View>
      )}
      {!bare && showPassport && (
        <PassportStrip name={name} stamps={passportStamps} />
      )}

      <Animated.View
        style={[styles.body, questionStyle]}
        {...(UNRECORDED_STEPS.has(step.key)
          ? REPLAY_MASK
          : { collapsable: false })}
      >
        {step.kind === "intro" ? (
          <IntroStep
            squash={ctaSquash}
            greeting={step.greeting(t)}
            headline={step.headline(t)}
            onReady={() => setIntroReady(true)}
          />
        ) : (
          <>
            {!ownHeading && (
              <>
                {/* Typed in, so the app reads as speaking each question. Keyed
                    on the step so it retypes on every arrival. */}
                <TypedText
                  key={step.key}
                  text={heading}
                  style={[styles.title, { color: colors.foreground }]}
                  maxDuration={QUESTION_LINE_MS}
                />
                {BLURB_STEPS.has(step.key) && (
                  <Animated.Text
                    key={`${step.key}-blurb`}
                    entering={FadeIn.duration(320)
                      .delay(BLURB_DELAY_MS)
                      .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                      .reduceMotion(ReduceMotion.System)}
                    style={[styles.blurb, { color: meter.caption }]}
                  >
                    {blurb}
                  </Animated.Text>
                )}
              </>
            )}

            {step.kind === "name" && (
              <View style={styles.scroll}>
                <NameStep
                  value={typeof answer === "string" ? answer : ""}
                  placeholder={step.placeholder(t)}
                  onChange={(next) => {
                    setAnswer(next);
                    setProfileName(next);
                  }}
                  onSubmit={onNext}
                />
                {inline != null && (
                  <InlineReaction id={inline.id} text={inline.text} />
                )}
              </View>
            )}

            {step.kind === "choice" && (
              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                {step.hero != null && QUESTION_PHOTOS[step.key] != null && (
                  <QuestionPhoto
                    image={QUESTION_PHOTOS[step.key]}
                    captions={step.hero.captions?.map((caption) => say(caption))}
                  />
                )}
                <ChoiceStep
                  art={step.key === "side" ? "side" : (step.art ?? "option")}
                  options={optionsFor(step)}
                  selected={list(answer)}
                  multi={step.multi ?? false}
                  max={step.max}
                  onChange={setAnswer}
                  // Under the answer just picked: the last in the list is
                  // the latest tap.
                  reactAfter={list(answer)[list(answer).length - 1] ?? null}
                  reaction={
                    inline != null ? (
                      <InlineReaction
                        id={inline.id}
                        text={inline.text}
                        style={styles.reactionInList}
                      />
                    ) : undefined
                  }
                />
                {step.hero?.note != null && (
                  <QuestionNote text={say(step.hero.note)} />
                )}
              </ScrollView>
            )}

            {step.kind === "schedule" && (
              <ScheduleStep
                days={resolve(step.days)}
                minutes={resolve(step.minutes)}
                kit={resolve(step.kit)}
                picked={{
                  days: list(answers.planDays)[0] ?? null,
                  minutes: list(answers.planMinutes)[0] ?? null,
                  kit: list(answers.equipment),
                }}
                onPick={(key, next) =>
                  setAnswers((prev) => ({ ...prev, [key]: next }))
                }
                adds={kitAdds}
                reaction={
                  inline != null ? (
                    <InlineReaction id={inline.id} text={inline.text} />
                  ) : undefined
                }
              />
            )}

            {step.kind === "pain-map" && (
              <View style={styles.fill}>
                <PainMapStep value={list(answer)} onChange={setAnswer} />
                {inline != null && (
                  <InlineReaction id={inline.id} text={inline.text} />
                )}
              </View>
            )}

            {step.kind === "reaction" && reaction != null && (
              <ReactionStep
                title={t(reaction.title)}
                body={t(reaction.body)}
                onNext={onNext}
              />
            )}

            {step.kind === "morning-pain" && (
              <MorningPainStep
                score={score}
                onChange={(next) =>
                  setAnswers((prev) => ({ ...prev, morningPain: String(next) }))
                }
              />
            )}

            {step.kind === "midway" && (
              <MidwayStep
                title={say(() =>
                  t("onboarding.passport.heading", { name: "{name}" }),
                )}
              >
                <PassportCard
                  name={name}
                  stamps={passportStamps}
                  zones={painless ? [] : painZones}
                  onEdit={editFromPassport}
                />
              </MidwayStep>
            )}

            {step.kind === "why" && (
              <WhyStep
                title={say(() => t("onboarding.why.title", { name: "{name}" }))}
                sections={whySections}
                footer={t("onboarding.why.footer")}
              />
            )}

            {step.kind === "outlook" && (
              <OutlookStep zones={painZones} months={outlookMonths(t)} />
            )}

            {step.kind === "habit" && (
              <HabitStep
                options={resolve(step.options)}
                habit={habitOf(answers)}
                onHabit={(next: Habit) => {
                  setAnswer([next]);
                  if (!reminderTouched.current)
                    setReminder(reminderFor(next, wakeMinutes()));
                }}
                minutes={reminder}
                onMinutes={(next) => {
                  reminderTouched.current = true;
                  setReminder(next);
                }}
              />
            )}

            {step.kind === "notify" && (
              <NotifyStep
                name={name}
                granted={notify}
                onAnswered={setNotify}
                onNext={onNext}
              />
            )}

            {step.kind === "test-intro" && (
              <TestIntro
                withBalance={balanceAllowed(answers, painless)}
                onSkip={() => {
                  Haptics.selectionAsync();
                  move(true, { miniTest: "skipped" });
                }}
              />
            )}

            {step.kind === "test-toe" && (
              <TestToe
                total={balanceAllowed(answers, painless) ? 2 : 1}
                options={[
                  { value: "yes", label: t("onboarding.test.toeYes") },
                  { value: "no", label: t("onboarding.test.toeNo") },
                  { value: "unsure", label: t("onboarding.test.toeUnsure") },
                ]}
                answer={list(answer)[0] ?? null}
                onAnswer={(next) => setAnswer([next])}
              />
            )}

            {step.kind === "test-balance" && (
              <TestBalance
                total={2}
                left={balance.left}
                right={balance.right}
                onResult={(which, seconds) =>
                  setBalance((prev) => ({ ...prev, [which]: seconds }))
                }
              />
            )}

            {step.kind === "test-result" && (
              <TestResult
                arch={miniTestAnswers?.arch ?? null}
                left={balance.left}
                right={balance.right}
              />
            )}

            {step.kind === "first-week" && (
              <FirstWeekStep
                days={sessionDays(settingsNow.daysPerWeek ?? 5)}
                moves={weekMoves}
              />
            )}

            {step.kind === "contract" && (
              <View style={styles.scroll}>
                <ContractStep
                  name={name}
                  onSignedChange={setSigned}
                  onDrawingChange={setDrawing}
                  stamp={stamp}
                  sealing={sealing}
                  onSealed={() => move(true)}
                />
              </View>
            )}
          </>
        )}
      </Animated.View>

      {/* Pinned over the whole page rather than carried by the step slide. */}
      {step.kind === "building" && (
        <BuildingStep
          rows={buildingRows}
          onDone={onNext}
          insets={insets}
        />
      )}

      {!noSharedCta && (
        <View
          style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 16) }]}
        >
          <Animated.View style={[styles.ctaSlot, ctaSquashStyle]}>
            {(!bare || introReady) && (
              <Animated.View
                entering={
                  bare
                    ? SlideInDown.duration(420)
                        .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                        .reduceMotion(ReduceMotion.System)
                    : undefined
                }
              >
                <PrimaryButton
                  label={ctaLabel}
                  onPress={onNext}
                  disabled={!canAdvance}
                />
              </Animated.View>
            )}
          </Animated.View>

          {/* Under the intro's button: the way back in for somebody who
              already has an account. No sign-in
              before the plan: the anonymous account from first launch holds
              everything until the screen after the first purchase saves it. */}
          {step.kind === "intro" && introReady && (
            <Animated.View
              entering={FadeIn.delay(200)
                .duration(320)
                .reduceMotion(ReduceMotion.System)}
              style={styles.introFoot}
            >
              <Pressable
                accessibilityRole="button"
                onPress={() => {
                  Haptics.selectionAsync();
                  track("sign_in_opened", { from: "intro" });
                  setSignIn(true);
                }}
                hitSlop={8}
                style={({ pressed }) => pressed && { opacity: 0.6 }}
              >
                <Text style={[styles.haveAccount, { color: meter.label }]}>
                  {t("onboarding.intro.haveAccount")}
                </Text>
              </Pressable>
            </Animated.View>
          )}
        </View>
      )}

      <SignInSheet
        visible={signIn}
        onClose={() => setSignIn(false)}
        onSignedIn={({ email }) => {
          setSignIn(false);
          if (email != null) {
            setProfileEmail(email, "onboarding");
            track("sign_in_completed", {
              method: "email",
              status: "signed-in",
            });
          }
          move(true);
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: SIDE_PAD,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 2,
    marginBottom: 26,
  },
  /** Inside the answer list, whose own gap already spaces it. */
  reactionInList: { marginTop: 0 },
  /** With the passport folded under it, which brings its own gap. */
  headerTight: { marginBottom: 12 },
  body: {
    flex: 1,
  },
  fill: {
    flex: 1,
  },
  title: {
    ...fonts.bold(30, -0.8),
    lineHeight: 36,
  },
  blurb: {
    marginTop: 10,
    ...fonts.regular(16),
    lineHeight: 22,
  },
  scroll: {
    flex: 1,
    marginTop: 26,
  },
  scrollContent: {
    paddingBottom: 8,
  },
  /** A label over each list on the schedule step. */
  section: {
    ...fonts.bold(15, -0.2),
    marginBottom: 10,
  },
  sectionNext: {
    marginTop: 22,
  },
  bar: {
    paddingTop: 16,
  },
  /** Reserves the button's height so the body never changes size when the
   * welcome screen's CTA arrives. */
  ctaSlot: {
    height: PRIMARY_BUTTON_HEIGHT,
    transformOrigin: "bottom",
  },
  introFoot: {
    alignItems: "center",
    gap: 10,
    paddingTop: 14,
    paddingBottom: 2,
  },
  haveAccount: fonts.semibold(15, -0.2),
});
