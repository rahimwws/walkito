import type { AccentName } from '@/shared/config';


export type Answers = Record<string, unknown>;

export type ReadinessBand = {
  key: string;
  label: string;
  score: number;
  accent: AccentName;
};

export type Readiness = {
  /** 0–100 headline. */
  score: number;
  bands: readonly ReadinessBand[];
  strongest: string;
  weakest: string;
  /** Where the plan should get them to in 30 days. */
  target: number;
};

const clamp = (n: number) => Math.max(12, Math.min(96, Math.round(n)));

/**
 * Turns the questionnaire and the two micro tests into a readiness profile.
 *
 * Deliberately transparent and deterministic rather than clever. Every band
 * traces back to something the user actually told us or did, which is the only
 * reason the result screen is allowed to exist — a score assembled from
 * nothing would be a horoscope with a progress ring.
 *
 * It is also explicitly *not* a diagnosis, and the copy on the screen says so.
 * The numbers describe today's starting point, not a medical finding.
 */
export function readinessFrom(answers: Answers): Readiness {
  // Scored from the questionnaire alone now that the physical checks are gone.
  // Weekly volume is the honest proxy for both: someone running 30km a week has
  // demonstrated the tissue tolerance a calf-raise test was standing in for.
  const level = String(answers.runner ?? 'regular');
  const strength = clamp(
    { starting: 34, casual: 48, regular: 62, race: 74, serious: 82 }[level] ?? 55,
  );
  const balanceScore = clamp(strength - 6);

  const load = String(answers.load ?? '5-15');
  const loadScore = clamp(
    { '0-5': 38, '5-15': 58, '15-30': 72, '30-50': 82, '50+': 88 }[load] ?? 58,
  );

  const pain = Array.isArray(answers.pain) ? (answers.pain as string[]) : [];
  const painless = pain.length === 0 || pain.includes('none');
  const recovery = clamp(painless ? 78 : 74 - pain.length * 9);

  const bands: ReadinessBand[] = [
    { key: 'balance', label: 'Balance', score: balanceScore, accent: 'blue' },
    { key: 'strength', label: 'Lower-leg strength', score: strength, accent: 'orange' },
    { key: 'recovery', label: 'Recovery', score: recovery, accent: 'teal' },
    { key: 'consistency', label: 'Consistency', score: loadScore, accent: 'violet' },
  ];

  const sorted = [...bands].sort((a, b) => b.score - a.score);
  const score = clamp(bands.reduce((sum, b) => sum + b.score, 0) / bands.length);

  return {
    score,
    bands,
    strongest: sorted[0].label,
    weakest: sorted[sorted.length - 1].label,
    // A concrete, modest promise. Anything dramatic here would be a claim the
    // product cannot keep.
    target: Math.min(96, score + 18),
  };
}

export type PlanDay = {
  day: string;
  label: string;
  minutes: number;
  accent: AccentName;
};

/** Week one, shaped by the weakest band so the plan visibly answers the
 * result rather than being the same list for everyone. */
export function planFor(readiness: Readiness): {
  title: string;
  summary: string;
  days: readonly PlanDay[];
} {
  const weakestIsStrength = readiness.weakest === 'Lower-leg strength';
  return {
    title: weakestIsStrength ? 'Build a stronger base' : 'Steady the foundation',
    summary: '4 sessions · ~7 min/day',
    days: [
      { day: 'Mon', label: 'Foot strength', minutes: 7, accent: 'violet' },
      { day: 'Tue', label: 'Mobility', minutes: 5, accent: 'teal' },
      { day: 'Wed', label: 'Easy run', minutes: 25, accent: 'blue' },
      { day: 'Thu', label: weakestIsStrength ? 'Lower-leg strength' : 'Balance & control', minutes: 8, accent: 'orange' },
    ],
  };
}
