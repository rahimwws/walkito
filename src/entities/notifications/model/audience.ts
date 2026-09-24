/**
 * Who the messages are for, as far as the copy needs to know.
 *
 * The onboarding answers live in `entities/profile`, and one entity may not
 * import another. So the app layer hands the two facts the copy uses to this
 * module, and the scheduler reads them from here — the same introduction the
 * health pipeline gets for pain.
 */

export type Audience = {
  /** The sport that loads their legs, from onboarding. */
  sport: string | null;
  /** Local `YYYY-MM-DD` of their race, when they gave one. */
  raceDate: string | null;
};

let audience: Audience = { sport: null, raceDate: null };

export function setAudience(next: Audience): void {
  audience = next;
}

export function currentAudience(): Audience {
  return audience;
}

/** Whole days from one `YYYY-MM-DD` to another. */
export function daysUntil(fromKey: string, toKey: string): number {
  const at = (key: string) => {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, (m ?? 1) - 1, d ?? 1).getTime();
  };
  return Math.round((at(toKey) - at(fromKey)) / 86_400_000);
}
