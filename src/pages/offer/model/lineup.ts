import type { Offering, PaywallPeriod, Plan } from '@/entities/purchase';

/**
 * Which plans the paywall shows, in which order, and which one is chosen when
 * it opens: switched remotely, with no store release, by the PostHog feature
 * flag `paywall_default_plan` (`variant.ts` reads it).
 *
 * - `monthly_trial` (the default, and what a missing or unknown flag means):
 *   the monthly first and chosen, from the `trial` shelf, where `v2`'s
 *   `monthly_trial` package (a monthly with a free week) takes over from the
 *   ordinary monthly the moment it exists in RevenueCat; until then the
 *   standard monthly, with its lower first month. The yearly beside it is the
 *   first year paid up front ($29.99, then $49.99 a year).
 * - `yearly`: the 1.1.0 offer. The yearly with its free week first and
 *   chosen, the monthly beside it, and the exit gift (the $29.99 first year)
 *   once the store's sheet is closed.
 * - `first_year_2999`: the yearly's first year paid up front, first and
 *   chosen, the monthly beside it.
 *
 * Every figure is still the store's own: a lineup only says which shelf each
 * card comes from. A shelf the dashboard lacks falls back to the standard
 * one, so a card never disappears because an experiment's product is missing.
 */
export const PAYWALL_DEFAULT_FLAG = 'paywall_default_plan';

export type PaywallVariant = 'monthly_trial' | 'yearly' | 'first_year_2999';

export const PAYWALL_VARIANTS: readonly PaywallVariant[] = ['monthly_trial', 'yearly', 'first_year_2999'];

export const DEFAULT_VARIANT: PaywallVariant = 'monthly_trial';

/** The three offerings a lineup draws from, by the name the app gives them. */
export type Shelves = {
  readonly standard: Offering | null;
  readonly trial: Offering | null;
  readonly offer: Offering | null;
};

export type ShelfName = keyof Shelves;

export type Lineup = {
  /** What analytics calls it: the flag's value, or `comeback`. */
  readonly variant: PaywallVariant | 'comeback';
  /** The cards, first to last. The first two stand side by side. */
  readonly order: readonly PaywallPeriod[];
  /** The plan chosen as the page opens. */
  readonly chosen: PaywallPeriod;
  readonly annualFrom: ShelfName;
  readonly monthlyFrom: ShelfName;
  readonly lifetimeFrom: ShelfName;
  /** The offering the paywall events name, as before lineups existed. */
  readonly offering: ShelfName;
  /** The $29.99 first year after a closed sheet: only where the page does not
   * already show it. */
  readonly gift: boolean;
};

const MONTHLY_FIRST: readonly PaywallPeriod[] = ['monthly', 'annual', 'weekly', 'lifetime'];
const ANNUAL_FIRST: readonly PaywallPeriod[] = ['annual', 'monthly', 'weekly', 'lifetime'];

const LINEUPS: Readonly<Record<PaywallVariant | 'comeback', Lineup>> = {
  monthly_trial: {
    variant: 'monthly_trial',
    order: MONTHLY_FIRST,
    chosen: 'monthly',
    annualFrom: 'offer',
    monthlyFrom: 'trial',
    lifetimeFrom: 'standard',
    offering: 'trial',
    gift: false,
  },
  yearly: {
    variant: 'yearly',
    order: ANNUAL_FIRST,
    chosen: 'annual',
    annualFrom: 'trial',
    monthlyFrom: 'standard',
    lifetimeFrom: 'standard',
    offering: 'trial',
    gift: true,
  },
  first_year_2999: {
    variant: 'first_year_2999',
    order: ANNUAL_FIRST,
    chosen: 'annual',
    annualFrom: 'offer',
    monthlyFrom: 'standard',
    lifetimeFrom: 'standard',
    offering: 'offer',
    gift: false,
  },
  // The win-back and the offer emails: the comeback prices, as before.
  comeback: {
    variant: 'comeback',
    order: ANNUAL_FIRST,
    chosen: 'annual',
    annualFrom: 'offer',
    monthlyFrom: 'standard',
    lifetimeFrom: 'offer',
    offering: 'offer',
    gift: false,
  },
};

/** The flag's value as a variant: anything unknown, missing or `false` is
 * the default. */
export function variantOf(flag: unknown): PaywallVariant {
  return PAYWALL_VARIANTS.find((variant) => variant === flag) ?? DEFAULT_VARIANT;
}

/**
 * The lineup for this view. The comeback prices outrank the flag. `yearly`
 * is 1.1.0 exactly, so its free week stays with the audience 1.1.0 gave it
 * to (a Meta install, `useTrialOnFirstPaywall`); everybody else sees the
 * yearly at its full price there.
 */
export function lineupFor(variant: PaywallVariant, { comeback, trialAudience }: { comeback: boolean; trialAudience: boolean }): Lineup {
  if (comeback) return LINEUPS.comeback;
  const lineup = LINEUPS[variant];
  if (variant === 'yearly' && !trialAudience) return { ...lineup, annualFrom: 'standard', offering: 'standard' };
  return lineup;
}

/** Each card's plan, from its lineup's shelf, else the standard one. */
export function plansOf(shelves: Shelves, lineup: Lineup): Readonly<Record<PaywallPeriod, Plan | null>> {
  const from = (shelf: ShelfName, kind: PaywallPeriod) => shelves[shelf]?.[kind] ?? shelves.standard?.[kind] ?? null;
  return {
    annual: from(lineup.annualFrom, 'annual'),
    monthly: from(lineup.monthlyFrom, 'monthly'),
    weekly: shelves.standard?.weekly ?? null,
    lifetime: from(lineup.lifetimeFrom, 'lifetime'),
  };
}

/**
 * The cards on the page, in the lineup's order. Before the store answers,
 * the ones iOS sells, with no figure yet; after, the ones it has. The weekly
 * only where the store has no monthly (Android's first line-up).
 */
export function shownKinds(
  lineup: Lineup,
  plans: Readonly<Record<PaywallPeriod, Plan | null>>,
  loaded: boolean,
): PaywallPeriod[] {
  return lineup.order.filter((kind) => {
    if (kind === 'weekly') return loaded && plans.weekly != null && plans.monthly == null;
    return loaded ? plans[kind] != null : true;
  });
}

/** The plan chosen as the page opens: the lineup's, or the first card the
 * store has when it has none of that kind. */
export function firstChoice(lineup: Lineup, shown: readonly PaywallPeriod[]): PaywallPeriod {
  return shown.includes(lineup.chosen) ? lineup.chosen : (shown[0] ?? lineup.chosen);
}
