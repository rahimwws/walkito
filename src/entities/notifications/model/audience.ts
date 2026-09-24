/**
 * Who the messages are for, as far as the copy needs to know.
 *
 * The onboarding answers live in `entities/profile`, and one entity may not
 * import another. So the app layer hands the one fact the copy uses to this
 * module, and the scheduler reads them from here — the same introduction the
 * health pipeline gets for pain.
 */

export type Audience = {
  /** The sport that loads their legs, from onboarding. */
  sport: string | null;
};

let audience: Audience = { sport: null };

export function setAudience(next: Audience): void {
  audience = next;
}

export function currentAudience(): Audience {
  return audience;
}
