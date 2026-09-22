import ChartLineData01Icon from '@hugeicons/core-free-icons/ChartLineData01Icon';
import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import Home07Icon from '@hugeicons/core-free-icons/Home07Icon';
import { useRouter } from 'expo-router';
import { PRIMARY } from '@/shared/config';
import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProgramProvider, useProgram } from '@/shared/lib/program';
import { ActionDock, DOCK_OVERLAP, useDockHeight } from '@/shared/ui/action-dock';

import { ProgramOverlay } from './program-overlay';
import {
  GlassTabBar,
  GlassTabButton,
  ProgressiveBlur,
  TabBarMinimizeProvider,
  renderFadingTabScreen,
  type GlassTabItem,
} from '@/shared/ui/glass-tabs';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { useIntroRevealStyle } from '@/shared/ui/splash';

/**
 * Add a tab by adding an entry here and a matching route file under
 * `app/(tabs)/`. `name` must equal the route file's name.
 *
 * `label` holds a catalogue key rather than text: this array is module scope,
 * so a resolved string here would be fixed at import and the tab bar would keep
 * whatever language the app first launched in.
 */
const ITEMS: (Omit<GlassTabItem, 'label'> & { href: string; label: Key })[] = [
  { name: 'index', href: '/', label: 'tabs.home', icon: Home07Icon },
  // The middle, deliberately. It is what somebody reaches for between
  // sessions, and the middle is where the thumb lands without looking.
  // The one tab with a colour of its own — see `tint` on `GlassTabItem`.
  { name: 'quick', href: '/quick', label: 'quick.tab', icon: FlashIcon, tint: PRIMARY, strokeWidth: 2.4 },
  { name: 'progress', href: '/progress', label: 'tabs.progress', icon: ChartLineData01Icon },
];

/** Progressive blur over the status bar: strongest at the device's top edge,
 * fading out exactly at the top of the safe area. */
function StatusBarBlur() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  return (
    <ProgressiveBlur
      direction="top"
      tint={scheme === 'dark' ? 'dark' : 'light'}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, height: insets.top }}
    />
  );
}

/**
 * Wrapped so everything under it — the tab bar's slab, the overlay, and the
 * home header inside the slot — reads one transition value.
 */
export function TabsLayout() {
  return (
    <ProgramProvider>
      <TabsChrome />
    </ProgramProvider>
  );
}

function TabsChrome() {
  const router = useRouter();
  const program = useProgram();
  const t = useT();
  // The bar rises by the dock's height less the overlap, so it covers the top
  // of the slab rather than floating in the middle of it.
  const dockHeight = useDockHeight();
  // Transform-only (fade: false): the liquid-glass pill breaks under animated
  // opacity, so the bar slides up from fully below the screen instead.
  const entranceStyle = useIntroRevealStyle(0, 130, false);

  return (
    <TabBarMinimizeProvider>
      <Tabs>
        <TabSlot style={{ height: '100%' }} renderFn={renderFadingTabScreen} />
        <StatusBarBlur />
        {/* The program covers the whole display, so nothing behind it needs to
            stay reachable — the dock and the pill both leave on the same value
            that brings it up. */}
        <ProgramOverlay />
        {/* TabList must stay a direct child of Tabs (the trigger parser skips
            wrapper components), so the intro entrance is passed in as a style:
            the bar rises in at slot 0 with the home header. */}
        <TabList asChild>
          <GlassTabBar
            entranceStyle={entranceStyle}
            dock={<ActionDock />}
            lift={dockHeight - DOCK_OVERLAP}
            hideProgress={program?.progress}
            onIndexSelected={(i) => router.navigate(ITEMS[i].href as never)}>
            {ITEMS.map(({ href, label, ...item }, index) => (
              <TabTrigger key={item.name} name={item.name} href={href as never} asChild>
                {/* Resolved at render, not in `ITEMS`, so switching language
                    repaints the bar instead of waiting for a relaunch. */}
                <GlassTabButton item={{ ...item, label: t(label) }} index={index} />
              </TabTrigger>
            ))}
          </GlassTabBar>
        </TabList>
      </Tabs>
    </TabBarMinimizeProvider>
  );
}
