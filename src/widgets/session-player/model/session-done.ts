import { noteSessionFeedback, sessions, setLastSessionFeedback } from '@/entities/program';
import { track } from '@/shared/lib/analytics';

export type Feedback = 'easy' | 'ok' | 'hard';

/**
 * Whether the session the Done screen closes is already on file: the newest
 * record finishing after this session began can only be this session.
 */
export function alreadyRecorded(startedAt: number): boolean {
  const all = sessions();
  const last = all[all.length - 1];
  return last != null && last.completedAt >= startedAt;
}

/** File the answer where it will be read. Never both, never neither. */
export function rememberFeedback(feedback: Feedback, startedAt: number): void {
  if (alreadyRecorded(startedAt)) {
    setLastSessionFeedback(feedback);
    // `noteSessionFeedback` reports itself; amending the record does not.
    track('session_feedback', { feedback });
    return;
  }
  noteSessionFeedback(feedback);
}
