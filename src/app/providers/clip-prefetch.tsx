import { useEffect } from 'react';
import { AppState } from 'react-native';

import { PROGRAM, TODAY_INDEX, movesFor } from '@/entities/program';
import { EXERCISE_LIST } from '@/entities/program';
import { prefetchClips, surveyClips } from '@/widgets/session-player';

/**
 * Has every demonstration clip on the device before anybody asks for one.
 *
 * The clips are not in the app bundle — fourteen megabytes of footage that most
 * users' programmes never prescribe. They come from Supabase Storage instead,
 * and the point of doing it here, at launch, is that by the time somebody
 * reaches a session the file is already local: a video that buffers with the
 * phone propped against a wall and one foot off the floor is the one moment
 * this app cannot afford to be slow in.
 *
 * Survey first and synchronously, so the very first session screen knows
 * whether to play a local file or stream. Then download what is missing, in the
 * background, never awaited — a launch that waits on the network is a launch
 * that fails on a train.
 */
export function useClipPrefetch(): void {
  useEffect(() => {
    surveyClips();

    /**
     * The order to fetch in: today's session, then tomorrow's, then the rest.
     *
     * Sequential downloads mean the order decides what is ready first, and the
     * only clips that can be needed in the next few minutes are the ones on the
     * day in front of the user. Fetching alphabetically would leave those until
     * last for no reason.
     */
    const soon: string[] = [];
    for (const index of [TODAY_INDEX, TODAY_INDEX + 1]) {
      const day = PROGRAM[index];
      if (day == null) continue;
      for (const title of movesFor(day)) {
        const match = EXERCISE_LIST.find((exercise) => exercise.title === title);
        if (match != null && !soon.includes(match.id)) soon.push(match.id);
      }
    }

    void prefetchClips(soon);
  }, []);

  useEffect(() => {
    /**
     * Try again on the way back in.
     *
     * The first attempt runs at launch, which is exactly when a phone is most
     * likely to be offline — opened on a train, in a gym basement. `prefetch`
     * is a no-op once everything is present, so this costs nothing in the
     * ordinary case and is the only thing that ever completes a partial cache.
     */
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') void prefetchClips();
    });
    return () => sub.remove();
  }, []);
}
