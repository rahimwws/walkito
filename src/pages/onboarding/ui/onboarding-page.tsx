import ArrowLeft02Icon from "@hugeicons/core-free-icons/ArrowLeft02Icon";
import { HugeiconsIcon } from "@hugeicons/react-native";
import * as Haptics from "expo-haptics";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import Animated, {
  Easing,
  FadeIn,
  LinearTransition,
  ReduceMotion,
  SlideInDown,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
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
import { BUTTON_3D_XL_HEIGHT, Button3D } from "@/shared/ui/button-3d";
import { preloadMascotSounds, type MascotShot } from "@/shared/ui/mascot";
import { REPLAY_MASK } from "@/shared/ui/replay-mask";
import { Glow } from "@/shared/ui/glow";
import { WelcomePage } from "@/pages/welcome";

import { QUESTION_PHOTOS } from "../config/question-photos";
import { chose } from "../model/answers";
import {
  coachAnswer,
  coachDone,
  coachEnter,
  coachLine,
  coachMirrored,
  reactionAnalyticsId,
  SPEAKING_STEPS,
  type CoachMoment,
  type CoachReply,
} from "../model/coach";
import {
  daysPerWeekOf,
  intakeFrom,
  planSettingsFrom,
  sessionMinutesOf,
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
  goalValuesFor,
  habitOf,
  habitReaction,
  miniTestEligible,
  morningPainOf,
  reminderFor,
  roleOf,
  roleReaction,
  runs,
  safetyPlan,
  safetyReaction,
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
  RECOMMENDED,
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
import { CoachBubble } from "./coach-bubble";
import { rigFor } from "./coach-rigs";
import {
  CoachSpeaker,
  speakerInset,
  type SpeakerShot,
  type SpeakerSize,
} from "./coach-speaker";
import { ContractStep } from "./contract-step";
import { FirstWeekStep } from "./first-week-step";
import { HabitStep } from "./habit-step";
import { IntroStep } from "./intro-step";
import { KitAdds } from "./kit-tile";
import { PassportCard, type PassportStamp } from "./foot-passport";
import { MidwayStep } from "./midway-step";
import { TestBalance, TestIntro, TestToe } from "./mini-test";
import { MorningPainStep } from "./morning-pain-step";
import { NameStep } from "./name-step";
import { NotifyStep } from "./notify-step";
import { OutlookStep } from "./outlook-step";
import { PainMapStep } from "./pain-map-step";
import { SpeakingQuestion } from "./speaking-question";
import { TimerGauge, WeekGauge } from "./plan-gauges";
import { QuestionNote, QuestionPhoto } from "./question-photo";
import { ReactionStep } from "./reaction-step";
import { StepProgress } from "./step-progress";
import { WhyStep, whySectionLandsMs } from "./why-step";

const SIDE_PAD = 24;
/** The call to action reaches 16pt from the screen's edges, wider than the
 * questions above it. */
const CTA_BLEED = 8;

/** The two halves of a step change. The exit is quicker than the entrance —
 * exits should get out of the way, entrances should feel like arriving. */
const EXIT_MS = 130;
const ENTER_MS = 240;
/** How far a question slides. Enough to read as direction, not as a page. */
const SLIDE = 28;
/** The answers sliding down as a reaction arrives over them. */
const MAKE_ROOM = LinearTransition.duration(260)
  .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
  .reduceMotion(ReduceMotion.System);

/** Below this window height the coach in the corner is the smaller size. */
const SHORT_WINDOW = 700;
/** The coach's move on arriving lands with the question, not before it. */
const ENTER_SHOT_MS = EXIT_MS + Math.round(ENTER_MS / 2);
/** His own lines (a beat, "try it now") wait for the question to be up. */
const COACH_LINE_DELAY_MS = 400;
/** The name is said back once typing has paused this long. */
const NAME_SETTLE_MS = 500;
/** Tapping down a list of answers: a nod at most this often. */
const NOD_GAP_MS = 600;
/** The last Continue: his cheer plays before Home takes over. */
const FINISH_HOLD_MS = 500;

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
  "first-week",
  "outlook",
]);

/**
 * No question has a line under it any more: a sub-line that explains why we
 * ask is reading nobody does, and the boxes, the radios and the coach's own
 * line say how to answer. The step table keeps its blurbs as bookkeeping.
 *
 * The questions about the body: a chosen answer's emoji pops less there, as
 * the coach only nods (`ChoiceStep`'s `calm`).
 */
const CALM_STEPS: ReadonlySet<string> = new Set(["side", "duration", "safety", "tried"]);

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
 * days and minutes screens only ask for a tap where the default is not
 * wanted. */
function seedAnswers(): Answers {
  return {
    morningPain: String(MORNING_PAIN_SEED),
    planDays: [RECOMMENDED.days],
    planMinutes: [RECOMMENDED.minutes],
  };
}

function list(answer: Answer | undefined): string[] {
  return Array.isArray(answer) ? answer : [];
}

/** Walkito asking a choice question himself: small enough for the answers to fit. */
const SPEAKING_MASCOT = 96;

/**
 * The onboarding flow: one surface whose contents change.
 *
 * The progress bar, the button bar and the safe-area padding are the same
 * objects the whole way through, so they hold still while only the question
 * moves — which is what makes the screens read as one conversation.
 *
 * Walkito coaches the whole way: in the top-right corner of every question,
 * changing pose as it changes and nodding at answers, or large on the steps
 * that are his. Every few questions the flow says something back: a line in
 * his bubble under the question, or a whole screen when the answer deserves
 * one. It ends on what the answers point to, the plan built from them, the
 * first week, and the contract; then Home, where the paywall rises. Signing
 * in, Health and the watch come after the first purchase (`pages/setup`).
 */

export function OnboardingPage() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const reduceMotion = useReducedMotion();
  const { height: windowHeight } = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(seedAnswers);
  /** The answers as last written, ahead of the render that shows them: two
   * taps in one frame, or a tap and then Next, each build on the one before,
   * and the coach compares an answer with the one it replaced. */
  const answersRef = useRef(answers);
  answersRef.current = answers;
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
  /** The habit's time wheel, and a clip open full screen: both cover the
   * coach in the corner, who stops breathing under them. */
  const [habitPicking, setHabitPicking] = useState(false);
  const [clipViewerOpen, setClipViewerOpen] = useState(false);

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
      emoji: option.emoji,
      recommended: option.recommended,
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
    // Stamped once the minutes are answered too: until then the minutes
    // are only the seed. Editing it goes back to the days.
    const days = choiceLabel("planDays");
    const minutes = choiceLabel("planMinutes");
    if (passed("planMinutes"))
      add(
        "planDays",
        t("onboarding.passport.plan"),
        days != null && minutes != null
          ? t("onboarding.passport.planValue", { days, minutes })
          : null,
      );
    return out;
  })();


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
    const days = choiceLabel("planDays");
    const minutes = choiceLabel("planMinutes");
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

  const reaction: Reaction | null =
    step.kind !== "reaction"
      ? null
      : step.of === "role"
        ? roleReaction(role)
        : step.of === "duration"
          ? durationReaction(durationOf(answers))
          : triedReaction(triedKey(answers));

  // ── The coach ────────────────────────────────────────────────────────────
  // Walkito in the top-right corner of every question (`CoachSpeaker`), or
  // large in the steps that draw him themselves. What he holds and does is
  // `model/coach.ts`; this is the wiring.

  /** Steps already shown in this run: halfway and the plan ready celebrate
   * on the first visit only. Marked after the step's first render, which is
   * the one its hero reads. */
  const [seen, setSeen] = useState<ReadonlySet<string>>(() => new Set());
  const again = seen.has(step.key);
  /** The coach on this step as the table has him. Only where he stands and
   * the heroes' poses are read from it; the corner's pose is `coach`. */
  const here = coachEnter(step.key, answers, again);
  /** 44 on the name question, where the keyboard is up, and on a short phone. */
  const sizeFor = (key: string): SpeakerSize =>
    key === "name" || windowHeight < SHORT_WINDOW ? 44 : 56;
  const speakerHere = here.where === "speaker";
  const speakerSize = sizeFor(step.key);
  /** What the question block keeps clear on its right for him. */
  const inset = speakerHere ? speakerInset(speakerSize) : 0;

  /** The coach in the corner as drawn. Set as a question leaves for the
   * next, so his change lands inside the exit, and by each answer after. */
  const [coach, setCoach] = useState<{ moment: CoachMoment; size: SpeakerSize }>(
    () => ({ moment: { where: "none", pose: "idle" }, size: 56 }),
  );
  const coachNow = useRef(coach);
  const [coachShot, setCoachShot] = useState<SpeakerShot | null>(null);
  const shotSerial = useRef(0);
  const lastNod = useRef(0);
  /** The name question's thumbs up: once a visit. */
  const namedThisVisit = useRef(false);
  /** He asks this question himself, centred (`SPEAKING_STEPS`): the corner
   * stays empty, and his moves play on him there. */
  const speaking = SPEAKING_STEPS.has(step.key);
  const speakingNow = useRef(speaking);

  /** A move for the coach in the corner, if he is there. */
  const playCoach = (
    shot: MascotShot,
    delay = 0,
    sound?: CoachReply["sound"],
  ) => {
    if (coachNow.current.moment.where !== "speaker" && !speakingNow.current)
      return;
    shotSerial.current += 1;
    setCoachShot({ move: shot, key: shotSerial.current, delay, sound });
  };

  /**
   * What an answer, or a step's own moment, makes the coach in the corner do
   * (`coachAnswer`, `coachDone`): a swap only when the pose changes, and a
   * nod at most every `NOD_GAP_MS`, so tapping down a list is not a nodding
   * fit. The steps that draw him themselves play their own moves and sounds,
   * so this does nothing there.
   */
  const applyCoach = (reply: CoachReply | null) => {
    const now = coachNow.current;
    if (
      reply == null ||
      (now.moment.where !== "speaker" && !speakingNow.current)
    )
      return;
    if (reply.pose != null && reply.pose !== now.moment.pose) {
      const next = {
        ...now,
        moment: {
          where: now.moment.where,
          pose: reply.pose,
          mirrored: coachMirrored(now.moment.where, reply.pose),
        },
      };
      coachNow.current = next;
      setCoach(next);
    }
    if (reply.shot == null) return;
    if (reply.shot === "nod") {
      const at = Date.now();
      if (at - lastNod.current < NOD_GAP_MS) return;
      lastNod.current = at;
    }
    playCoach(reply.shot, 0, reply.sound);
  };

  /** A step arriving: where the coach stands on it and how, and his move
   * once the question is up. A hero step plays its own. */
  const arrive = (next: number, nextAnswers: Answers) => {
    const key = STEPS[next].key;
    const moment = coachEnter(key, nextAnswers);
    const placed = {
      moment: { where: moment.where, pose: moment.pose, mirrored: moment.mirrored },
      size: sizeFor(key),
    };
    coachNow.current = placed;
    speakingNow.current = SPEAKING_STEPS.has(key);
    setCoach(placed);
    lastNod.current = 0;
    namedThisVisit.current = false;
    setHabitPicking(false);
    setClipViewerOpen(false);
    // Made before halfway, so the run's first cheer is not the sound that
    // waits for its file. Kept once made, so asking again costs nothing.
    if (STEPS[next].act >= 2) preloadMascotSounds(["cheer", "boing"]);
    if (
      (moment.where === "speaker" || speakingNow.current) &&
      moment.enter != null
    )
      playCoach(moment.enter, ENTER_SHOT_MS);
  };
  const arriveRef = useRef(arrive);
  arriveRef.current = arrive;

  /** The name as typed, once typing has paused: said back then, rather than
   * retyped on every keystroke. */
  const [settledName, setSettledName] = useState("");
  useEffect(() => {
    if (step.kind !== "name") return undefined;
    const typed = name.trim();
    if (typed.length < 2) {
      setSettledName("");
      return undefined;
    }
    const timer = setTimeout(() => setSettledName(typed), NAME_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [name, step.kind]);

  /** The line under the question, for the questions that get one. */
  const inline = (() => {
    if (step.kind === "pain-map" && list(answer).length > 0) {
      const found = areaReaction(painless ? "none" : area);
      return found != null ? { id: found.key, text: t(found.text) } : null;
    }
    if (step.key === "safety") {
      const found = safetyReaction(answers);
      return found != null ? { id: found.key, text: t(found.text) } : null;
    }
    if (step.key === "equipment") {
      const found = equipmentReaction(answers);
      return found != null ? { id: found.key, text: t(found.text) } : null;
    }
    return null;
  })();
  /** In the coach's bubble: the answer said back, or else his own line (a
   * beat as a part of the flow begins, "try it now"). */
  const coachSays =
    speakerHere || speaking ? coachLine(step.key, answers) : null;
  const bubble =
    inline ??
    (coachSays != null ? { id: `coach_${step.key}`, text: say(coachSays) } : null);
  /** What a hero says: halfway, and the plan ready. */
  const heroSays = here.where === "hero" ? coachLine(step.key, answers) : null;
  const heroLine = heroSays != null ? say(heroSays) : "";

  /** The line said back now, the habit's included (its step draws its own).
   * Counted only through `reactionAnalyticsId`: most ids name a body. */
  const lineId =
    step.kind === "habit"
      ? (habitReaction(habitOf(answers))?.key ?? null)
      : (inline?.id ?? null);

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
    step.kind === "name" ||
    speaking ||
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

  /** The button pops once as an answer makes it ready: its own value, since
   * `ctaSquash` only ever squashes. */
  const ctaPop = useSharedValue(1);
  const lastAdvance = useRef({ index, can: canAdvance });
  useEffect(() => {
    const was = lastAdvance.current;
    lastAdvance.current = { index, can: canAdvance };
    // Only on the same step: arriving on one that is ready is not an answer.
    if (reduceMotion || was.index !== index || was.can || !canAdvance) return;
    ctaPop.value = withSequence(
      withTiming(1.05, { duration: 120, easing: Easing.out(Easing.quad) }),
      withTiming(1, { duration: 160, easing: Easing.bezier(0.23, 1, 0.32, 1) }),
    );
  }, [index, canAdvance, reduceMotion, ctaPop]);

  const ctaSquashStyle = useAnimatedStyle(() => ({
    transform: [
      { scaleY: (1 - ctaSquash.value * 0.11) * ctaPop.value },
      { scaleX: (1 + ctaSquash.value * 0.025) * ctaPop.value },
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
    (next: number, forward: boolean, nextAnswers?: Answers) => {
      if (STEPS[next].kind !== "name") Keyboard.dismiss();
      // The coach changes as the question leaves, so his squash and swap
      // land inside the exit, beside the body rather than in it.
      arriveRef.current(next, nextAnswers ?? answersRef.current);
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

  // Development: `walkito.dev://?onboardingStep=<key>` jumps to that step, so
  // a screen can be reached on the simulator without tapping through, and
  // `globalThis.__onboarding` does the same from the JS console (with no
  // "Open in" prompt), plus setting an answer.
  useEffect(() => {
    if (!__DEV__) return undefined;
    const jump = (key: string) => {
      const at = STEPS.findIndex((candidate) => candidate.key === key);
      if (at >= 0) go(at, true);
    };
    (globalThis as { __onboarding?: unknown }).__onboarding = {
      go: jump,
      answer: (key: string, value: Answer) => setAnswers((prev) => ({ ...prev, [key]: value })),
    };
    const onUrl = (url: string | null) => {
      const key = url?.match(/[?&]onboardingStep=([\w-]+)/)?.[1];
      if (key != null) jump(key);
    };
    void Linking.getInitialURL()
      .then(onUrl)
      .catch(() => undefined);
    const subscription = Linking.addEventListener("url", ({ url }) => onUrl(url));
    return () => subscription.remove();
  }, [go]);

  /** One event per screen shown, keyed by the step's stable `key`. */
  useEffect(() => {
    if (index === 0) track("onboarding_started");
    track("onboarding_step_viewed", { step: step.key, index, act: step.act });
    // A whole-screen reaction, counted only when its id says nothing about a
    // body: how long it has hurt and what was tried never leave the device.
    const fullId = reaction != null ? reactionAnalyticsId(reaction.key) : null;
    if (step.kind === "reaction" && fullId != null)
      track("onboarding_reaction_viewed", { reaction: fullId, full: true });
    setSeen((prev) => (prev.has(step.key) ? prev : new Set(prev).add(step.key)));
    // `step` follows `index`; listing it would only repeat the same trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /** A line said back, counted by the same rule. */
  useEffect(() => {
    const id = lineId != null ? reactionAnalyticsId(lineId) : null;
    if (id != null) track("onboarding_reaction_viewed", { reaction: id, full: false });
  }, [lineId]);

  // The name said back lands: his thumbs up and happy jump, once a visit.
  useEffect(() => {
    if (step.kind !== "name" || settledName === "" || namedThisVisit.current)
      return;
    namedThisVisit.current = true;
    applyCoach(coachAnswer("name", answersRef.current, {}));
    // `applyCoach` reads refs only; these are the triggers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settledName, step.kind]);

  // Why it still hurts: a nod as each section lands.
  useEffect(() => {
    if (step.kind !== "why") return undefined;
    const timers = whySections.map((_, i) =>
      setTimeout(() => playCoach("nod"), whySectionLandsMs(i)),
    );
    return () => timers.forEach(clearTimeout);
    // Once per arrival.
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
    const current = answersRef.current;
    const nextAnswers = patch != null ? { ...current, ...patch } : current;
    if (patch != null) {
      answersRef.current = nextAnswers;
      setAnswers(nextAnswers);
    }
    if (forward && returnTo != null) {
      const back = returnTo;
      setReturnTo(null);
      go(back, true, nextAnswers);
      return;
    }
    const next = stepAfter(index, forward, nextAnswers);
    if (next != null) go(next, forward, nextAnswers);
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

  /** Set by the last Continue, which holds a moment for the coach's cheer. */
  const finishing = useRef(false);

  /** The end: the answers kept, the offer armed, the screens after the first
   * purchase owed, and Home. */
  const finish = () => {
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
      // Once: the hold for his cheer would otherwise let a second tap commit
      // the answers, and start the plan, twice.
      if (finishing.current) return;
      finishing.current = true;
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      applyCoach(coachDone(step.key));
      setTimeout(finish, reduceMotion ? 0 : FINISH_HOLD_MS);
      return;
    }
    // The 30-second check's experiment is decided here, as the flow reaches
    // it, and only for somebody it is for: reading the flag records the
    // exposure, and an ineligible person must not count in either arm.
    if (
      step.key === "equipment" &&
      answers.miniTest == null &&
      miniTestEligible(answers, painless)
    ) {
      const variant =
        featureFlag(MINI_TEST_FLAG) === "test" ? "test" : "control";
      track("mini_test_assigned", { variant });
      move(true, { miniTest: variant });
      return;
    }
    // The check's last screen: the toe, or one leg after it. There is no
    // result screen; the plan it changes is what comes next.
    if (
      step.kind === "test-balance" ||
      (step.kind === "test-toe" && !balanceAllowed(answers, painless))
    ) {
      track("mini_test_completed", { balance: balance.left != null });
    }
    move(true);
  };

  const onBack = () => {
    if (finishing.current) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (index === 0) return;
    move(false);
  };

  /** Writes an answer and lets the coach answer it (`coachAnswer`, compared
   * with the answer it replaced). The name is answered once typing pauses
   * rather than per keystroke: see `settledName`. */
  const writeAnswer = (key: string, value: Answer) => {
    const prev = answersRef.current;
    const next = { ...prev, [key]: value };
    answersRef.current = next;
    setAnswers(next);
    if (step.kind !== "name") applyCoach(coachAnswer(step.key, next, prev));
  };
  const setAnswer = (value: Answer) => writeAnswer(step.key, value);

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

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={0}
      style={[styles.root, { paddingTop: insets.top + 12 }]}
    >
      <Glow />
      {!bare && (
        <View style={styles.header}>
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
          <StepProgress
            index={index}
            count={STEP_COUNT}
            checkpoints={CHECKPOINTS}
            runner={runs(answers)}
          />
          <LanguageBadge />
        </View>
      )}

      {/* The question slides; the coach beside it stays put. Masked whole on
          the steps about the body: his pose follows the answers there too. */}
      <View
        style={styles.stage}
        {...(UNRECORDED_STEPS.has(step.key)
          ? REPLAY_MASK
          : { collapsable: false })}
      >
        <Animated.View style={[styles.body, questionStyle]} collapsable={false}>
          {step.kind === "intro" ? (
            <IntroStep
              squash={ctaSquash}
              greeting={step.greeting(t)}
              headline={step.headline(t)}
              onReady={() => setIntroReady(true)}
              paused={signIn}
            />
          ) : (
            <>
              {!ownHeading && (
                // The whole question block, the line under it included, keeps
                // clear of the coach, and is at least as tall as him, so his
                // bubble below starts under his feet.
                <View
                  style={
                    speakerHere && { paddingRight: inset, minHeight: speakerSize }
                  }
                >
                  {/* Typed in, so the app reads as speaking each question. Keyed
                      on the step so it retypes on every arrival. */}
                  <TypedText
                    key={step.key}
                    text={heading}
                    style={[styles.title, { color: colors.foreground }]}
                    maxDuration={QUESTION_LINE_MS}
                  />
                </View>
              )}

              {/* What the coach says, above the answers: the answer said back,
                  or his own line. Keyed on the step, so each one arrives. */}
              {bubble != null && !speaking && (
                <CoachBubble
                  key={step.key}
                  id={bubble.id}
                  text={bubble.text}
                  tail="top-right"
                  delay={bubble.id.startsWith("coach_") ? COACH_LINE_DELAY_MS : 0}
                  style={styles.reaction}
                />
              )}

              {step.kind === "name" && (
                <Animated.View layout={MAKE_ROOM} style={styles.scroll}>
                  <NameStep
                    question={heading}
                    paused={signIn}
                    value={typeof answer === "string" ? answer : ""}
                    placeholder={step.placeholder(t)}
                    onChange={(next) => {
                      setAnswer(next);
                      setProfileName(next);
                    }}
                    onSubmit={onNext}
                  />
                </Animated.View>
              )}

              {step.kind === "choice" && (
                <Animated.ScrollView
                  layout={MAKE_ROOM}
                  style={styles.scroll}
                  contentContainerStyle={styles.scrollContent}
                  showsVerticalScrollIndicator={false}
                >
                  {speaking && (
                    <SpeakingQuestion
                      question={heading}
                      rig={rigFor(coach.moment.pose)}
                      rigKey={coach.moment.pose}
                      size={SPEAKING_MASCOT}
                      shot={coachShot}
                      caption={bubble?.text ?? null}
                      paused={signIn || habitPicking || clipViewerOpen}
                      style={styles.speaking}
                    />
                  )}
                  {step.hero != null && QUESTION_PHOTOS[step.key] != null && (
                    <QuestionPhoto
                      image={QUESTION_PHOTOS[step.key]}
                      captions={step.hero.captions?.map((caption) => say(caption))}
                    />
                  )}
                  {/* The answer drawn above the cards: the week it makes,
                      or the timer filled to it. */}
                  {step.gauge === "week" && (
                    <WeekGauge days={daysPerWeekOf(answers)} />
                  )}
                  {step.gauge === "timer" && (
                    <TimerGauge minutes={sessionMinutesOf(answers)} />
                  )}
                  <ChoiceStep
                    art={step.art ?? "fluent"}
                    options={optionsFor(step)}
                    selected={list(answer)}
                    multi={step.multi ?? false}
                    max={step.max}
                    calm={CALM_STEPS.has(step.key)}
                    onChange={setAnswer}
                  />
                  {step.hero?.note != null && (
                    <QuestionNote text={say(step.hero.note)} />
                  )}
                  {step.key === "equipment" && <KitAdds adds={kitAdds} />}
                </Animated.ScrollView>
              )}

              {step.kind === "pain-map" && (
                <Animated.View layout={MAKE_ROOM} style={styles.fill}>
                  <PainMapStep value={list(answer)} onChange={setAnswer} />
                </Animated.View>
              )}

              {step.kind === "reaction" && reaction != null && (
                <ReactionStep
                  title={t(reaction.title)}
                  body={t(reaction.body)}
                  onNext={onNext}
                  rig={rigFor(here.pose)}
                  shot={here.enter ?? null}
                />
              )}

              {step.kind === "morning-pain" && (
                <MorningPainStep
                  score={score}
                  onChange={(next) => writeAnswer("morningPain", String(next))}
                />
              )}

              {step.kind === "midway" && (
                <MidwayStep
                  title={say(() =>
                    t("onboarding.passport.heading", { name: "{name}" }),
                  )}
                  line={heroLine}
                  celebrate={!again}
                >
                  <PassportCard
                    stamps={passportStamps}
                    onEdit={editFromPassport}
                  />
                </MidwayStep>
              )}

              {step.kind === "why" && (
                <WhyStep
                  title={say(() => t("onboarding.why.title", { name: "{name}" }))}
                  sections={whySections}
                  footer={t("onboarding.why.footer")}
                  speakerInset={inset}
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
                  onPickingChange={setHabitPicking}
                />
              )}

              {step.kind === "notify" && (
                <NotifyStep
                  name={name}
                  granted={notify}
                  // He is the step's own here and nods at a yes and a no
                  // alike: allowing is not a win.
                  onAnswered={setNotify}
                  onNext={onNext}
                  speakerInset={inset}
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
                  speakerInset={inset}
                  onViewerChange={setClipViewerOpen}
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
                  onStart={() =>
                    applyCoach(
                      coachAnswer(step.key, answersRef.current, answersRef.current),
                    )
                  }
                  speakerInset={inset}
                  onViewerChange={setClipViewerOpen}
                />
              )}

              {step.kind === "first-week" && (
                <FirstWeekStep
                  answers={answers}
                  squash={ctaSquash}
                  onViewerChange={setClipViewerOpen}
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
        <CoachSpeaker
          moment={coach.moment}
          shot={coachShot}
          size={coach.size}
          paused={signIn || habitPicking || clipViewerOpen}
          surface={colors.background}
        />
      </View>

      {/* Pinned over the whole page rather than carried by the step slide. */}
      {step.kind === "building" && (
        <BuildingStep
          rows={buildingRows}
          onDone={onNext}
          insets={insets}
          readyLine={heroLine}
          celebrate={!again}
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
                <Button3D
                  label={ctaLabel}
                  onPress={onNext}
                  disabled={!canAdvance}
                  size="xl"
                  docked
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
  /** Under the question, over the answers; the tail rises into the gap. */
  reaction: { marginTop: 12 },
  speaking: { marginBottom: 16 },
  /** With the passport folded under it, which brings its own gap. */
  /** The body and the coach beside it. */
  stage: {
    flex: 1,
  },
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
  scroll: {
    flex: 1,
    marginTop: 26,
  },
  scrollContent: {
    paddingBottom: 8,
  },
  bar: {
    paddingTop: 16,
  },
  /** Reserves the button's height so the body never changes size when the
   * welcome screen's CTA arrives. Wider than the page's gutter. */
  ctaSlot: {
    height: BUTTON_3D_XL_HEIGHT,
    marginHorizontal: -CTA_BLEED,
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
