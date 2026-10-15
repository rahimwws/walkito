import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';
import type { MascotShot } from '@/shared/ui/mascot';

import {
  RING,
  coachAnswer,
  coachDone,
  coachEnter,
  coachLine,
  reactionAnalyticsId,
  type CoachPose,
  type CoachReply,
} from './coach';
import { runs, standsAtWork, type Role } from './journey';

type Answers = Record<string, unknown>;

/** One thing the coach did, in the order a person sees it. */
type Moment = {
  step: string;
  /** `enter`: the step arrived. `swap`: an answer or the step's own moment
   * changed his pose. `shot`: a move with no change of pose. `break`: he is
   * off the screen (the welcome gate, the contract). */
  kind: 'enter' | 'swap' | 'shot' | 'break';
  pose: CoachPose | null;
  shot: MascotShot | null;
  sound?: string;
};

/** A path walked: what the coach did, the answers it ended with, and any
 * swap that asked for the pose already showing. */
type Walk = { path: Path; moments: Moment[]; answers: Answers; stale: string[] };

/** One way through the flow: every answer that changes what the coach does. */
type Path = {
  role: Role;
  name: string;
  /** A zone, nothing, or nothing and then a zone after all. */
  pain: 'zone' | 'none' | 'changed';
  duration: string;
  tried: string;
  habit: string;
  kit: 'none' | 'some';
  /** The 30-second check: not in it, in it, in it with the one-leg balance. */
  check: 'off' | 'toe' | 'balance';
};

const PAIN_TAPS: Record<Path['pain'], readonly string[][]> = {
  zone: [['heel']],
  none: [['none']],
  changed: [['none'], ['heel']],
};

/**
 * Walks one path the way the page does: each step's arrival with the answers
 * so far, then each of its answers with the answers before it, then the
 * step's own moment where it has one.
 *
 * The steps and their skip rules mirror `STEPS` in `steps.ts`, which this test
 * cannot load (it imports react-native). A step added there that shows the
 * coach belongs here too.
 *
 * A swap is checked as it happens: on a first visit, which is all a path is,
 * a swap must change what is showing. Only a revisit can ask for the pose
 * already shown, and the speaker keeps it then. Collected rather than
 * asserted here, so each test reports every path that fails it at once.
 */
function walk(path: Path): Walk {
  let answers: Answers = {};
  const moments: Moment[] = [];
  const stale: string[] = [];
  let showing: CoachPose | null = null;

  const enter = (step: string) => {
    const moment = coachEnter(step, answers);
    if (moment.where === 'none') {
      moments.push({ step, kind: 'break', pose: null, shot: null });
      showing = null;
      return;
    }
    moments.push({ step, kind: 'enter', pose: moment.pose, shot: moment.enter ?? null, sound: moment.sound });
    showing = moment.pose;
  };
  const reply = (step: string, result: CoachReply | null) => {
    if (result == null) return;
    if (result.pose != null) {
      if (result.pose === showing) stale.push(`${step} swaps to ${result.pose}, already showing`);
      moments.push({ step, kind: 'swap', pose: result.pose, shot: result.shot, sound: result.sound });
      showing = result.pose;
      return;
    }
    moments.push({ step, kind: 'shot', pose: showing, shot: result.shot, sound: result.sound });
  };
  const answer = (step: string, patch: Answers) => {
    const prev = answers;
    answers = { ...answers, ...patch };
    reply(step, coachAnswer(step, answers, prev));
  };

  enter('welcome');
  enter('intro');
  enter('name');
  if (path.name !== '') answer('name', { name: path.name });
  enter('role');
  answer('role', { role: [path.role] });
  enter('role-reaction');
  if (runs(answers)) {
    enter('runner');
    answer('runner', { runner: ['casual'] });
  }
  enter('toe');
  answer('toe', { toe: ['little'] });
  enter('bunion');
  answer('bunion', { bunion: ['no'] });
  enter('pain');
  for (const tap of PAIN_TAPS[path.pain]) answer('pain', { pain: tap });
  const hurts = path.pain !== 'none';
  if (hurts) {
    enter('side');
    answer('side', { side: ['left'] });
    enter('duration');
    answer('duration', { duration: [path.duration] });
    enter('duration-reaction');
    enter('morningPain');
    answer('morningPain', { morningPain: '2' });
    enter('safety');
    answer('safety', { safety: ['fall'] });
    enter('tried');
    answer('tried', { tried: [path.tried] });
    enter('tried-reaction');
  }
  enter('goal');
  answer('goal', { goal: [hurts ? 'mornings' : 'injuryfree'] });
  if (runs(answers) || standsAtWork(answers)) {
    enter('load');
    answer('load', { load: ['b1'] });
  }
  enter('midway');
  enter('source');
  answer('source', { source: ['friend'] });
  if (hurts) enter('why');
  enter('notify');
  // Allowing and declining are the same nod; neither is an answer kept.
  answer('notify', {});
  enter('habit');
  answer('habit', { habit: [path.habit] });
  // Days and minutes arrive answered (the recommended middle); a pick
  // changes them.
  enter('planDays');
  answer('planDays', { planDays: ['days3'] });
  enter('planMinutes');
  answer('planMinutes', { planMinutes: ['min10'] });
  enter('equipment');
  answer('equipment', { equipment: path.kit === 'none' ? ['none'] : ['towel'] });
  if (path.check !== 'off') {
    enter('test-intro');
    enter('test-toe');
    answer('test-toe', { 'test-toe': ['yes'] });
    if (path.check === 'balance') {
      enter('test-balance');
      // Each side's timer starting.
      answer('test-balance', {});
      answer('test-balance', {});
    }
  }
  enter('building');
  reply('building', coachDone('building'));
  enter('first-week');
  reply('first-week', coachDone('first-week'));
  enter('contract');
  enter('outlook');
  reply('outlook', coachDone('outlook'));

  return { path, moments, answers, stale };
}

const ROLES: readonly Role[] = ['running', 'feet', 'both', 'walking'];
const DURATIONS = ['weeks', 'months', 'year', 'longer'];
const TRIED = ['insoles', 'stretching', 'shoes', 'rest', 'physio', 'none'];
const HABITS = ['wake', 'coffee', 'shift', 'bed'];

/** Every combination that changes what the coach does: role ×4, name typed or
 * not, pain ×3, how long ×4, tried ×6, habit ×4, kit ×2, the check ×3. */
const PATHS: Path[] = ROLES.flatMap((role) =>
  ['Ana', ''].flatMap((name) =>
    (['zone', 'none', 'changed'] as const).flatMap((pain) =>
      DURATIONS.flatMap((duration) =>
        TRIED.flatMap((tried) =>
          HABITS.flatMap((habit) =>
            (['none', 'some'] as const).flatMap((kit) =>
              (['off', 'toe', 'balance'] as const).map((check) => ({
                role,
                name,
                pain,
                duration,
                tried,
                habit,
                kit,
                check,
              })),
            ),
          ),
        ),
      ),
    ),
  ),
);

const describePath = (path: Path) => JSON.stringify(path);

/** Every path, walked once and shared by the tests below. */
let walked: Walk[] | null = null;
const walks = (): Walk[] => (walked ??= PATHS.map(walk));

/** The poses a person sees in a row: arrivals and swaps, a break between the
 * runs either side of a step he is not on. */
function runsOfPoses(moments: readonly Moment[]): { step: string; pose: CoachPose }[][] {
  const out: { step: string; pose: CoachPose }[][] = [[]];
  for (const moment of moments) {
    if (moment.kind === 'break') out.push([]);
    else if ((moment.kind === 'enter' || moment.kind === 'swap') && moment.pose != null) {
      out[out.length - 1].push({ step: moment.step, pose: moment.pose });
    }
  }
  return out;
}

/** The steps whose answers describe a body: a nod at most. */
const BODY_ANSWERS: ReadonlySet<string> = new Set(['pain', 'side', 'duration', 'safety', 'tried']);

/** The coach's poses, and nothing else: no sad, surprised, trophy or gift. */
const POSES: ReadonlySet<string> = new Set([
  'idle',
  'celebrate',
  'thinking',
  'sleeping',
  'pointing',
  'thumbsUp',
  'running',
  'pain',
  'handsUp',
  'walking',
  'reminder',
]);

/** Every failure across every path, so one run names them all. */
function failures(check: (one: Walk) => readonly string[]): string[] {
  return walks().flatMap((one) => check(one).map((failure) => `${failure} on ${describePath(one.path)}`));
}

describe('every path through the flow', () => {
  test('walks a path for every answer that matters', () => {
    expect(PATHS.length).toBe(4 * 2 * 3 * 4 * 6 * 4 * 2 * 3);
  });

  test('never holds the same pose twice in a row', () => {
    const found = failures(({ moments }) =>
      runsOfPoses(moments).flatMap((poses) =>
        poses
          .slice(1)
          .filter((pose, i) => pose.pose === poses[i].pose)
          .map((pose) => `${pose.step} repeats ${pose.pose}`),
      ),
    );
    expect(found.slice(0, 5)).toEqual([]);
  });

  test('a swap always changes what is showing', () => {
    expect(failures(({ stale }) => stale).slice(0, 5)).toEqual([]);
  });

  test('celebrates only halfway and when the plan is ready', () => {
    const found = failures(({ moments }) =>
      moments
        .filter((moment) => moment.pose === 'celebrate' || moment.shot === 'celebrate')
        .filter((moment) => moment.step !== 'midway' && moment.step !== 'building')
        .map((moment) => `${moment.step} celebrates`),
    );
    expect(found.slice(0, 5)).toEqual([]);
  });

  test('answers about the body get a nod and nothing louder', () => {
    const found = failures(({ moments }) =>
      moments
        .filter((moment) => (moment.kind === 'swap' || moment.kind === 'shot') && BODY_ANSWERS.has(moment.step))
        .filter((moment) => moment.shot !== 'nod' || moment.sound != null)
        .map((moment) => `${moment.step} answers with ${moment.shot}${moment.sound != null ? ` and ${moment.sound}` : ''}`),
    );
    expect(found.slice(0, 5)).toEqual([]);
  });

  test('makes the same two sounds on every path, both cheers for the flow', () => {
    const found = failures(({ moments }) => {
      const sounds = moments.filter((moment) => moment.sound != null).map((moment) => `${moment.step}:${moment.sound}`);
      return sounds.join(' ') === 'midway:cheer building:cheer' ? [] : [`sounds ${sounds.join(' ')}`];
    });
    expect(found.slice(0, 5)).toEqual([]);
  });

  test('runs only for somebody who runs', () => {
    const found = failures(({ moments, answers }) =>
      moments.some((moment) => moment.pose === 'running') && !runs(answers) ? ['runs for a non-runner'] : [],
    );
    expect(found.slice(0, 5)).toEqual([]);
  });

  test('never reaches a pose outside the coach’s own', () => {
    const found = failures(({ moments }) =>
      moments
        .filter((moment) => moment.pose != null && !POSES.has(moment.pose))
        .map((moment) => `${moment.step} takes ${moment.pose}`),
    );
    expect(found.slice(0, 5)).toEqual([]);
  });
});

describe('equal answers, equal reactions', () => {
  test('how long it has hurt gets the same screen for every answer', () => {
    const seen = DURATIONS.map((duration) => coachEnter('duration-reaction', { pain: ['heel'], duration: [duration] }));
    for (const moment of seen) expect(moment).toEqual(seen[0]);
    expect(seen[0]).toMatchObject({ where: 'hero', pose: 'idle', enter: 'nod' });
  });

  test('what was tried gets the same screen for every answer', () => {
    const seen = TRIED.map((tried) => coachEnter('tried-reaction', { pain: ['heel'], tried: [tried] }));
    for (const moment of seen) expect(moment).toEqual(seen[0]);
    expect(seen[0]).toMatchObject({ where: 'hero', pose: 'thumbsUp', enter: 'nod' });
  });

  test('every goal gets the same hop', () => {
    for (const goal of ['mornings', 'comeback', 'race', 'flatfeet', 'injuryfree', 'allday', 'steady']) {
      expect(coachAnswer('goal', { goal: [goal] }, {})).toEqual({ shot: 'hop' });
    }
  });

  test('the morning scale answers for itself', () => {
    expect(coachAnswer('morningPain', { morningPain: '0' }, { morningPain: '8' })).toEqual({ shot: null });
    expect(coachEnter('morningPain', { pain: ['heel'] })).toMatchObject({ where: 'hero', pose: 'pain' });
  });
});

describe('the pain question', () => {
  test('nothing hurting puts him at ease, a zone after it brings the sore foot back', () => {
    expect(coachAnswer('pain', { pain: ['heel'] }, {})).toEqual({ shot: 'nod' });
    expect(coachAnswer('pain', { pain: ['none'] }, {})).toEqual({ pose: 'idle', shot: 'nod' });
    expect(coachAnswer('pain', { pain: ['heel'] }, { pain: ['none'] })).toEqual({ pose: 'pain', shot: 'nod' });
    expect(coachAnswer('pain', { pain: ['heel', 'arch'] }, { pain: ['heel'] })).toEqual({ shot: 'nod' });
  });

  test('back on it after "nothing hurts", he stays at ease', () => {
    expect(coachEnter('pain', {}).pose).toBe('pain');
    expect(coachEnter('pain', { pain: ['heel'] }).pose).toBe('pain');
    expect(coachEnter('pain', { pain: ['none'] }).pose).toBe('idle');
  });
});

describe('the steps with an answer of their own', () => {
  test('a name earns the thumbs up once it is a name, and typing on is nothing', () => {
    expect(coachAnswer('name', { name: 'A' }, {})).toEqual({ shot: null });
    expect(coachAnswer('name', { name: 'An' }, { name: 'A' })).toEqual({ pose: 'thumbsUp', shot: 'happy' });
    expect(coachAnswer('name', { name: 'Ana' }, { name: 'An' })).toEqual({ shot: null });
    expect(coachAnswer('name', { name: '  ' }, {})).toEqual({ shot: null });
  });

  test('the first moment picked brings out the alarm clock, and every pick rings it', () => {
    expect(RING).toBe('wave');
    for (const habit of HABITS) {
      expect(coachAnswer('habit', { habit: [habit] }, {})).toEqual({ pose: 'reminder', shot: RING });
    }
    expect(coachAnswer('habit', { habit: ['bed'] }, { habit: ['wake'] })).toEqual({ shot: RING });
    expect(coachAnswer('habit', { habit: ['coffee'] }, { habit: ['bed'] })).toEqual({ shot: RING });
  });

  test('the habit arrives at ease, or holding the clock once a moment is picked', () => {
    expect(coachEnter('habit', {})).toMatchObject({ where: 'speaker', pose: 'idle' });
    expect(coachEnter('habit', { habit: ['coffee'] })).toMatchObject({ where: 'speaker', pose: 'reminder' });
  });

  test('the minutes arrive with the clock ringing, and every pick rings it again', () => {
    expect(coachEnter('planMinutes', {})).toMatchObject({ where: 'hero', pose: 'reminder', enter: RING });
    expect(coachAnswer('planMinutes', { planMinutes: ['min3'] }, { planMinutes: ['min5'] })).toEqual({ shot: RING });
    expect(coachAnswer('planMinutes', { planMinutes: ['min10'] }, { planMinutes: ['min3'] })).toEqual({ shot: RING });
  });

  test('the days point at their week, as drawn above their bubble, and a pick is a nod', () => {
    expect(coachEnter('planDays', {})).toMatchObject({ where: 'hero', pose: 'pointing', mirrored: false });
    expect(coachAnswer('planDays', { planDays: ['days3'] }, { planDays: ['days5'] })).toEqual({ shot: 'nod' });
  });

  test('nothing at home is the thumbs up; some kit is pointing with a nod', () => {
    expect(coachEnter('equipment', {})).toMatchObject({ where: 'hero', pose: 'pointing' });
    expect(coachAnswer('equipment', { equipment: ['none'] }, {})).toEqual({ pose: 'thumbsUp', shot: 'happy' });
    expect(coachAnswer('equipment', { equipment: ['towel'] }, { equipment: ['none'] })).toEqual({
      pose: 'pointing',
      shot: 'nod',
    });
    expect(coachAnswer('equipment', { equipment: ['towel', 'band'] }, { equipment: ['towel'] })).toEqual({
      shot: 'nod',
    });
    expect(coachAnswer('equipment', { equipment: ['towel'] }, {})).toEqual({ shot: 'nod' });
  });
});

describe('the run’s two celebrations play once', () => {
  test('halfway again, back from an edit, is a silent nod', () => {
    const first = coachEnter('midway', {});
    expect(first).toMatchObject({ where: 'hero', pose: 'celebrate', enter: 'celebrate', sound: 'cheer' });
    const again = coachEnter('midway', {}, true);
    expect(again).toMatchObject({ where: 'hero', pose: 'celebrate', enter: 'nod' });
    expect(again.sound).toBeUndefined();
  });

  test('the plan ready celebrates once', () => {
    expect(coachDone('building')).toEqual({ pose: 'celebrate', shot: 'celebrate', sound: 'cheer' });
    expect(coachDone('building', true)).toBeNull();
  });

  test('the outlook’s cheer is silent', () => {
    expect(coachDone('outlook')).toEqual({ shot: 'cheer' });
  });
});

describe('where he stands', () => {
  test('pointing in the speaker faces the question, and nothing else is flipped', () => {
    const keys = [
      'intro',
      'name',
      'role',
      'role-reaction',
      'runner',
      'toe',
      'bunion',
      'pain',
      'side',
      'duration',
      'duration-reaction',
      'morningPain',
      'safety',
      'tried',
      'tried-reaction',
      'goal',
      'load',
      'midway',
      'source',
      'why',
      'notify',
      'habit',
      'planDays',
      'planMinutes',
      'equipment',
      'test-intro',
      'test-toe',
      'test-balance',
      'building',
      'first-week',
      'outlook',
    ];
    for (const key of keys) {
      const moment = coachEnter(key, { role: ['running'], pain: ['heel'] });
      expect(moment.mirrored, key).toBe(moment.where === 'speaker' && moment.pose === 'pointing');
    }
  });

  test('the welcome gate, the contract and an unknown key have no coach', () => {
    expect(coachEnter('welcome', {}).where).toBe('none');
    expect(coachEnter('contract', {}).where).toBe('none');
    expect(coachEnter('not-a-step', {}).where).toBe('none');
  });

  test('the first week points at its card as drawn', () => {
    expect(coachEnter('first-week', {})).toMatchObject({ where: 'hero', pose: 'pointing', mirrored: false });
    expect(coachDone('first-week')).toEqual({ pose: 'thumbsUp', shot: 'nod' });
  });
});

describe('his lines', () => {
  const t = translatorFor('en');

  test('a beat as each part begins, and the pain beat only before anything is marked', () => {
    expect(coachLine('toe', {})?.(t)).toBe(t('onboarding.coach.toeTry'));
    expect(coachLine('goal', {})?.(t)).toBe(t('onboarding.coach.beatGoal'));
    expect(coachLine('pain', {})?.(t)).toBe(t('onboarding.coach.beatFeet'));
    expect(coachLine('pain', { pain: ['none'] })).toBeNull();
    expect(coachLine('pain', { pain: ['heel'] })).toBeNull();
  });

  test('halfway and the plan ready keep the name slot for the page to fill', () => {
    for (const language of LANGUAGES) {
      const tl = translatorFor(language);
      expect(coachLine('midway', {})?.(tl), language).toContain('{name}');
      expect(coachLine('building', {})?.(tl), language).toContain('{name}');
    }
  });

  test('no line where the step has its own, or none', () => {
    for (const key of [
      'role',
      'side',
      'duration',
      'safety',
      'tried',
      'habit',
      'planDays',
      'planMinutes',
      'equipment',
      'notify',
      'outlook',
    ]) {
      expect(coachLine(key, {}), key).toBeNull();
    }
  });
});

describe('reactionAnalyticsId', () => {
  test('passes the reactions that describe a person, not a body', () => {
    for (const id of ['name', 'role_running', 'role_feet', 'habit_wake', 'equipment_none', 'equipment_some']) {
      expect<string | null>(reactionAnalyticsId(id)).toBe(id);
    }
  });

  test('holds back every reaction that names a body answer', () => {
    for (const id of [
      'area_heel',
      'area_none',
      'safety_seated',
      'safety_doctor',
      'safety_numb',
      'duration_weeks',
      'duration_year',
      'tried_physio',
      'tried_none',
      'pain_hard',
      'pain_zero',
    ]) {
      expect(reactionAnalyticsId(id), id).toBeNull();
    }
  });

  test('matches whole prefixes only', () => {
    expect(reactionAnalyticsId('names')).toBeNull();
    expect(reactionAnalyticsId('role')).toBeNull();
    expect(reactionAnalyticsId('xrole_running')).toBeNull();
  });
});
