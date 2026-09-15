import type { CookbookTheme } from '../types';

/**
 * Cookbook 2 — Astro. A night page: a still starfield in two layers (the
 * stars, and a horizon glow added as light that dissipates through the glass
 * as the sphere rises), a chrome-balloon wordmark, app-building stickers, and
 * a blue-white glass. When the sphere is sent back down the plume is drawn
 * into the bottom centre in a spiral, shedding stardust.
 */

const stickers = {
  // Drawn from Phosphor — the same icon set the rest of the app uses — so the
  // plume is about running rather than about building an app. Replaced the
  // upstream keyboards, cursors, robots and "Just vibe code it" bubbles, which
  // were placeholder artwork for a different product entirely.
  sneaker: require('@assets/liquid-glass/astro/stickers/sneaker.png'),
  runner: require('@assets/liquid-glass/astro/stickers/runner.png'),
  footprints: require('@assets/liquid-glass/astro/stickers/footprints.png'),
  stopwatch: require('@assets/liquid-glass/astro/stickers/stopwatch.png'),
  heartbeat: require('@assets/liquid-glass/astro/stickers/heartbeat.png'),
  medal: require('@assets/liquid-glass/astro/stickers/medal.png'),
  trophy: require('@assets/liquid-glass/astro/stickers/trophy.png'),
  fire: require('@assets/liquid-glass/astro/stickers/fire.png'),
  mountains: require('@assets/liquid-glass/astro/stickers/mountains.png'),
  drop: require('@assets/liquid-glass/astro/stickers/drop.png'),
  route: require('@assets/liquid-glass/astro/stickers/route.png'),
  barbell: require('@assets/liquid-glass/astro/stickers/barbell.png'),
  // Kept from upstream: these are night-sky props, not product references, and
  // they belong on a screen that opens onto a starfield.
  star: require('@assets/liquid-glass/astro/stickers/star.png'),
  sparkle: require('@assets/liquid-glass/astro/stickers/sparkle.png'),
  bolt: require('@assets/liquid-glass/astro/stickers/bolt.png'),
  rocket: require('@assets/liquid-glass/astro/stickers/rocket.png'),
  planet: require('@assets/liquid-glass/astro/stickers/planet.png'),
  astronaut: require('@assets/liquid-glass/astro/stickers/astronaut.png'),
  bulb: require('@assets/liquid-glass/astro/stickers/bulb.png'),
  mascot: require('@assets/liquid-glass/astro/stickers/mascot.png'),
} as const;

export const ASTRO_ASSET_MODULES = [
  require('@assets/liquid-glass/astro/stars.png'),
  require('@assets/liquid-glass/astro/glow.png'),
  require('@assets/liquid-glass/astro/wordmark.png'),
  ...Object.values(stickers),
] as const;

const s = stickers;

export const ASTRO_THEME: CookbookTheme = {
  id: 'astro',
  background: {
    kind: 'layers',
    base: require('@assets/liquid-glass/astro/stars.png'),
    glow: require('@assets/liquid-glass/astro/glow.png'),
  },
  wordmark: require('@assets/liquid-glass/astro/wordmark.png'),
  // forty slots, in plume order; the big hero stickers lead
  stickers: [
    s.sneaker, s.runner, s.stopwatch, s.heartbeat, s.medal,
    s.footprints, s.star, s.route, s.rocket, s.planet,
    s.trophy, s.bolt, s.sparkle, s.fire, s.mountains,
    s.drop, s.barbell, s.astronaut, s.mascot, s.bulb,
    s.sneaker, s.stopwatch, s.runner, s.star,
    s.heartbeat, s.route, s.footprints, s.sparkle,
    s.medal, s.rocket, s.fire, s.mountains,
    s.bolt, s.planet, s.trophy, s.drop,
    s.barbell, s.bulb, s.mascot, s.astronaut,
  ],
  returnMode: 'vortex',
  // the moment the open state is let go, the plume is taken back down
  releaseAt: 0.78,
  night: 1,
  // pinpoint stars split into three coloured dots at the dome's size, which
  // reads as noise, so the great dome gets no fringe at all
  lens: { buttonDispersion: 0.12, domeDispersion: 0, domeAt: 0.6 },
  colors: {
    page: '#04060C',
    ink: '#F4F6FC',
    hint: 'rgba(226,232,246,0.78)',
    plus: '#F4F6FC',
    pillFrom: '#3A3F4D',
    pillTo: '#F4F6FC',
    pillText: '#0A0C14',
  },
  blurTint: 'dark',
  statusBar: 'light',
  copy: {
    hint: 'Swipe up to enter',
    // "Train ~~support~~ your feet" — the struck word is the promise the
    // category makes and this one does not. The line under it rotates, so the
    // same claim is aimed at a different reason to care each time round.
    headline: 'Train',
    struck: 'support',
    kept: 'your feet',
    phrases: [
      'that hurt every morning',
      'after 3 pairs of insoles',
      'so your next long run doesn’t cost you a week',
      'so you can run again',
    ],
    cta: 'Let’s go',
  },
};
