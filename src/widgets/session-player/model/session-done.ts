import { noteSessionFeedback, sessions, setLastSessionFeedback } from '@/entities/program';
import { track } from '@/shared/lib/analytics';

import { feedbackOf, feelForAnalytics, type Feel } from './feel';

/**
 * Whether the session the Done screen closes is already on file: the newest
 * record finishing after this session began can only be this session.
 */
export function alreadyRecorded(startedAt: number): boolean {
  const all = sessions();
  const last = all[all.length - 1];
  return last != null && last.completedAt >= startedAt;
}

/** File the answer where it will be read. Never both, never neither. The plan
 * stores its reading of the answer (`feedbackOf`); PostHog also gets the
 * answer as given (`feelForAnalytics`). */
export function rememberFeedback(feel: Feel, startedAt: number): void {
  const feedback = feedbackOf(feel);
  const sent = feelForAnalytics(feel);
  if (alreadyRecorded(startedAt)) {
    setLastSessionFeedback(feedback);
    // `noteSessionFeedback` reports itself; amending the record does not.
    track('session_feedback', sent == null ? { feedback } : { feedback, feel: sent });
    return;
  }
  noteSessionFeedback(feedback, sent);
}
