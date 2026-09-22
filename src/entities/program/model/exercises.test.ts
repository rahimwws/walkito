import { afterEach, describe, expect, test } from 'bun:test';

import { LANGUAGES, setLanguagePreference, translatorFor } from '@/shared/lib/i18n';

import {
  EXERCISE_LIST,
  exerciseById,
  exerciseByTitle,
  exerciseCategoryLabel,
  type ExerciseCategory,
} from './exercises';
import { prescriptionFor } from './prescription';

/**
 * What the catalogue has to keep true now that its copy lives in three files
 * this one does not import.
 *
 * Deliberately no assertion on any English sentence. The point of moving the
 * copy out was that the words are free to change without this folder knowing,
 * so a test that pinned one would be re-pinning the thing that was just
 * unpinned. Everything below is either structural or asserted against a
 * language named out loud.
 */

afterEach(() => {
  // Every test that touches the preference has to hand it back: the store is a
  // module-scope singleton, and a leaked 'ru' would make the next file's
  // failure look like a translation bug.
  setLanguagePreference('system');
});

describe('copy resolves in every language', () => {
  for (const language of LANGUAGES) {
    test(`${language} has a title, a rationale and a cue for all ${EXERCISE_LIST.length}`, () => {
      const t = translatorFor(language);
      for (const exercise of EXERCISE_LIST) {
        for (const key of [exercise.titleKey, exercise.rationaleKey, exercise.cueKey]) {
          const text = t(key);
          expect(typeof text, `${language} ${key} did not resolve`).toBe('string');
          expect(text.trim().length, `${language} ${key} is blank`).toBeGreaterThan(0);
        }
      }
    });
  }
});

describe('titles are a lookup rather than a guess', () => {
  /**
   * `exerciseByTitle` indexes all three languages into one map, which is only
   * safe while no two entries answer to the same string. A collision would not
   * throw — it would quietly hand the player the wrong demonstration video and
   * the wrong dose.
   */
  test('no two exercises share a title, in any language or across them', () => {
    const seen = new Map<string, string>();
    for (const language of LANGUAGES) {
      const t = translatorFor(language);
      for (const exercise of EXERCISE_LIST) {
        const title = t(exercise.titleKey);
        const owner = seen.get(title);
        expect(
          owner == null || owner === exercise.id,
          `"${title}" (${language}) is used by both ${owner} and ${exercise.id}`,
        ).toBe(true);
        seen.set(title, exercise.id);
      }
    }
  });

  test('every title in every language gets back to its exercise', () => {
    for (const language of LANGUAGES) {
      const t = translatorFor(language);
      for (const exercise of EXERCISE_LIST) {
        expect(exerciseByTitle(t(exercise.titleKey))?.id).toBe(exercise.id);
      }
    }
  });

  /** The three retest measurements travel through the player as titles too,
   * and they are tests rather than exercises. A miss is a normal answer. */
  test('a title with no entry behind it is null, not a throw', () => {
    expect(exerciseByTitle('Calf raises to failure')).toBeNull();
    expect(exerciseByTitle('')).toBeNull();
  });
});

describe('the language switch reaches the catalogue', () => {
  /**
   * The regression this whole migration exists to prevent.
   *
   * The tempting shape for translated data is `title: t('…')` written straight
   * into the table, which reads fine and resolves exactly once — at import,
   * in whatever language the app launched in. Every screen listing an exercise
   * would then be permanently English and the picker in Settings would appear
   * to do nothing. Reading the same entry twice under two languages is the
   * cheapest way to say that has not happened.
   */
  test('the same entry reads differently under two languages', () => {
    setLanguagePreference('en');
    const english = exerciseById('calf_stretch_bent').title;

    setLanguagePreference('ru');
    const russian = exerciseById('calf_stretch_bent').title;

    expect(english.length).toBeGreaterThan(0);
    expect(russian).not.toBe(english);
  });

  test('rationale and cue follow it too', () => {
    setLanguagePreference('en');
    const before = exerciseById('short_foot_seated');
    const englishCue = before.cue;
    const englishRationale = before.rationale;

    setLanguagePreference('es');
    const after = exerciseById('short_foot_seated');
    expect(after.cue).not.toBe(englishCue);
    expect(after.rationale).not.toBe(englishRationale);
  });

  /** The dose label is assembled from a template per language, so it moves
   * with the preference as well. Asserted on the figures rather than on the
   * words: 3 × 12 is 3 × 12 in every language this app ships. */
  test('a dose label still carries its numbers in every language', () => {
    for (const language of LANGUAGES) {
      setLanguagePreference(language);
      const label = prescriptionFor(exerciseById('heel_raise_towel'), 2)?.label ?? '';
      expect(label, `${language} lost the sets`).toContain('3');
      expect(label, `${language} lost the reps`).toContain('12');
    }
  });

  test('category labels move with it', () => {
    const categories: readonly ExerciseCategory[] = ['Fitness', 'Mobility', 'Recovery', 'Habit'];
    for (const language of LANGUAGES) {
      setLanguagePreference(language);
      for (const category of categories) {
        expect(exerciseCategoryLabel(category).trim().length).toBeGreaterThan(0);
      }
    }
  });
});

describe('ids', () => {
  test('an unknown id fails where it is written', () => {
    expect(() => exerciseById('no_such_exercise')).toThrow(/unknown exercise id/);
  });

  test('every entry is reachable by its own id', () => {
    for (const exercise of EXERCISE_LIST) {
      expect(exerciseById(exercise.id)).toBe(exercise);
    }
  });
});
