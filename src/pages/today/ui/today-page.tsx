import PlayIcon from "@hugeicons/core-free-icons/PlayIcon";
import UserIcon from "@hugeicons/core-free-icons/UserIcon";
import { HugeiconsIcon } from "@hugeicons/react-native";
import * as Haptics from "expo-haptics";
import { useIsFocused, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState, type ComponentRef } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useHealthSignals } from "@/entities/health";
import { firstName, useProfileName } from "@/entities/profile";
import {
  currentDay,
  toDateKey,
  todayKey,
  useNextSession,
} from "@/entities/program";
import {
  useAccessLapsed,
  useEntitled,
  usePaywallSkipped,
} from "@/entities/purchase";
import { useHomeTourState } from "@/entities/session";
import { FollowSheet, useFollowOffer } from "@/features/follow";
import { HomeTour, type DayOneRun } from "@/features/home-tour";
import {
  CHROME_MAX_FONT_SCALE,
  colors,
  fonts,
  space,
  target,
} from "@/shared/config";
import { useT } from "@/shared/lib/i18n";
import { requestProgram, usePlanOver, useProgram } from "@/shared/lib/program";
import {
  useSpotlightAnchor,
  useSpotlightScroller,
} from "@/shared/lib/spotlight";
import { useTabBarClearance } from "@/shared/lib/tab-bar";
import { NavGlass } from "@/shared/ui/glass";
import { useSplashRevealed } from "@/shared/ui/splash";

import { planKind } from "../model/plan-kind";
import { useTodayWork } from "../model/today-work";
import { useOpenRoutine } from "../model/use-open-routine";
import { CheckIn } from "./check-in";
import { DateStrip } from "./date-strip";
import { DayOneSession } from "./day-one-session";
import { HeaderScene, scenePalette, sceneTime } from "./header-scene";
import { PassEndingRow } from "./pass-ending-row";
import { RoutineCard } from "./routine-card";
import { RoutineGrid } from "./routine-grid";
import { SessionCard } from "./session-card";
import { ThisWeekCard, YourWeekCard } from "./week-card";

/** The scene's height under the status bar. */
const SCENE = 236;
const FAB = 64;

/**
 * Today, copied from BitePal's home (#97, #99, #98): a flat illustrated scene
 * with her name and the day of the plan, "Today" with the week strip, then a
 * stack of white cards, each a grey label, a big number and a round action,
 * and the floating round Start over the corner.
 *
 * Start opens today's session where it always ran, on the Plan tab: the same
 * request an email link makes (`requestProgram`), so the player, the done
 * screen and the records are the Plan's own.
 */
export function TodayPage() {
  const t = useT();
  const router = useRouter();
  const focused = useIsFocused();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const clearance = useTabBarClearance();
  const program = useProgram();
  const planOver = usePlanOver();
  const revealed = useSplashRevealed();
  const scroll = useRef<ComponentRef<typeof ScrollView>>(null);
  useSpotlightScroller((y) => scroll.current?.scrollTo({ y, animated: true }));
  const overviewAnchor = useSpotlightAnchor("home.overview");
  const checkAnchor = useSpotlightAnchor("home.pain");
  const startAnchor = useSpotlightAnchor("dock.start");

  const work = useTodayWork();
  const next = useNextSession();
  const health = useHealthSignals();
  const openRoutine = useOpenRoutine();
  const kind = planKind();
  const name = firstName(useProfileName());
  const ranToday =
    kind === "runner" &&
    health.lastRunEndedAt != null &&
    toDateKey(new Date(health.lastRunEndedAt)) === todayKey();

  /** The day-one session the "Day 1" card started, playing in its sheet. */
  const [dayOne, setDayOne] = useState<DayOneRun | null>(null);
  const tourState = useHomeTourState();
  const skipped = usePaywallSkipped();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  /** Looking around without buying: nothing of a customer's rises. */
  const walled = skipped && !entitled && !lapsed;
  const homeClear =
    focused &&
    revealed &&
    !planOver &&
    !walled &&
    tourState !== "armed" &&
    dayOne == null;
  const follow = useFollowOffer(homeClear && !lapsed);

  const extra = work.done || work.type === "rest";
  const startLabel = extra
    ? t("home.today.extra", { minutes: t("quick.minutes", { count: 2 }) })
    : work.type === "test"
      ? t("home.today.startTests")
      : t("home.today.start", {
          minutes: t("quick.minutes", { count: work.minutes }),
        });
  const onStart = extra
    ? () => openRoutine(kind === "runner" ? "pre_run" : "at_work")
    : () => {
        requestProgram({ kind: work.type === "test" ? "test" : "today" });
        program?.open();
      };

  const hour = new Date().getHours();
  const time = sceneTime(hour);
  const palette = scenePalette(time);
  const greeting =
    hour < 12
      ? t("home.greeting.morning")
      : hour < 18
        ? t("home.greeting.afternoon")
        : t("home.greeting.evening");
  // iOS lays the tab's content out under the status bar; the scene reaches up
  // behind it, so it starts that far above the content.
  const top = Platform.OS === "ios" ? 0 : insets.top;

  return (
    <View style={styles.screen}>
      {focused && <StatusBar style={palette.dark ? "light" : "dark"} />}
      <ScrollView
        ref={scroll}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: top,
          paddingHorizontal: space.screen,
          paddingBottom: clearance + FAB + 28,
        }}
      >
        <View
          style={[
            styles.scene,
            { height: SCENE + insets.top, marginTop: -insets.top - top },
          ]}
        >
          <HeaderScene
            kind={kind}
            time={time}
            width={width}
            height={SCENE + insets.top}
          />
          <View style={[styles.sceneBar, { top: insets.top + 12 }]}>
            <View style={styles.who}>
              <Text
                style={[styles.name, { color: palette.ink }]}
                accessibilityRole="header"
                numberOfLines={2}
                maxFontSizeMultiplier={1.3}
              >
                {name.length > 0 ? name : greeting}
              </Text>
              <View style={styles.dayPill}>
                <Text
                  style={styles.dayText}
                  maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}
                >
                  {t("home.today.dayN", { count: currentDay() })}
                </Text>
              </View>
            </View>
            <NavGlass interactive style={styles.avatar}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t("home.today.profile")}
                onPress={() => {
                  void Haptics.selectionAsync();
                  router.push("/profile");
                }}
                style={({ pressed }) => [
                  styles.avatarHit,
                  pressed && styles.pressed,
                ]}
              >
                <HugeiconsIcon
                  icon={UserIcon}
                  size={24}
                  color={colors.text}
                  strokeWidth={1.8}
                />
              </Pressable>
            </NavGlass>
          </View>
        </View>

        <View style={styles.sheet}>
          <Text
            style={styles.title}
            accessibilityRole="header"
            maxFontSizeMultiplier={2}
          >
            {t("tabs.today")}
          </Text>
          <DateStrip />

          <View ref={overviewAnchor} collapsable={false} style={styles.first}>
            <SessionCard
              work={work}
              kind={kind}
              ranToday={ranToday}
              next={next}
              active={focused}
              startLabel={startLabel}
              onStart={onStart}
              onWhy={() => router.push("/why")}
            />
          </View>

          <View ref={checkAnchor} collapsable={false}>
            <CheckIn />
          </View>

          <RoutineCard kind={kind} ranToday={ranToday} />
          <YourWeekCard />
          <ThisWeekCard onOpenPlan={() => program?.open()} />

          <Text style={styles.section} accessibilityRole="header">
            {t("home.today.quickTitle")}
          </Text>
          <RoutineGrid kind={kind} />

          <PassEndingRow seen={focused && revealed} />
        </View>
      </ScrollView>

      {/* BitePal's floating round button (#97): today's Start, on the glass
          of the navigation layer. */}
      <View
        ref={startAnchor}
        collapsable={false}
        style={[styles.fab, { bottom: clearance + 10 }]}
      >
        <NavGlass interactive tint={colors.ink} style={styles.fabCircle}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={startLabel}
            onPress={() => {
              void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onStart();
            }}
            style={({ pressed }) => [styles.fabHit, pressed && styles.pressed]}
          >
            <HugeiconsIcon
              icon={PlayIcon}
              size={30}
              color={colors.onInk}
              strokeWidth={2.2}
            />
          </Pressable>
        </NavGlass>
      </View>

      {/* The first run, after the purchase or the skip: the "Day 1" card and
          then the tour, over Today while it is in front. */}
      <HomeTour
        visible={focused && revealed && !planOver}
        sessionOpen={dayOne != null}
        onStartDayOne={setDayOne}
      />
      <DayOneSession run={dayOne} onClose={() => setDayOne(null)} />

      <FollowSheet
        visible={follow.visible}
        from="auto"
        onClose={follow.close}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scene: { marginHorizontal: -space.screen, overflow: "hidden" },
  sceneBar: {
    position: "absolute",
    left: space.screen,
    right: space.screen,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  who: { flex: 1, alignItems: "flex-start", gap: 6 },
  name: fonts.heavy(34, -0.8),
  dayPill: {
    minHeight: 32,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.82)",
  },
  dayText: { ...fonts.heavy(17), color: colors.text },
  avatar: {
    width: target.min,
    height: target.min,
    borderRadius: target.min / 2,
    overflow: "hidden",
  },
  avatarHit: { flex: 1, alignItems: "center", justifyContent: "center" },
  /** The grey page rises over the scene's foot on a rounded edge (#97). */
  sheet: {
    marginTop: -28,
    marginHorizontal: -space.screen,
    paddingHorizontal: space.screen,
    paddingTop: 22,
    gap: 12,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: colors.bg,
  },
  title: { ...fonts.heavy(34, -0.8), color: colors.text },
  first: { marginTop: 4 },
  section: { ...fonts.heavy(24, -0.4), color: colors.text, marginTop: 12 },
  fab: { position: "absolute", right: space.screen },
  fabCircle: {
    width: FAB,
    height: FAB,
    borderRadius: FAB / 2,
    overflow: "hidden",
  },
  fabHit: { flex: 1, alignItems: "center", justifyContent: "center" },
  pressed: { opacity: 0.7 },
});
