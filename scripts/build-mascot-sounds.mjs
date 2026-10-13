#!/usr/bin/env node
/**
 * Synthesizes the mascot's eight sound effects into assets/sounds/.
 *
 *   node scripts/build-mascot-sounds.mjs
 *
 * Run by hand when a sound changes. Nothing in the build calls it; the WAVs it
 * writes are committed, in the format of the count cues beside them (RIFF
 * WAVE, 16-bit PCM, mono, 44.1 kHz).
 *
 *   mascot-happy  a rising two-note "bi-bop!" (E6 then B6) when he hops for joy
 *   mascot-sad    a soft falling "aww" when he droops at a strong pain report
 *   mascot-hmm    a curious "hm?", up a minor third, when he tilts his head
 *   mascot-boing  a springy wobble when he is poked
 *   mascot-cheer  a quick rising "yay!" (C6 E6 G6 C7) when he throws both hands up
 *   mascot-gift   a soft two-bell "ta-da" (G6 then C7) with sparkles, presenting a gift
 *   mascot-step   one soft "pup" of a footstep, for hops and landings
 *   mascot-pop    a light bubble pop for a nod
 *
 * The step may play several times in a row, so it is short and low, never a
 * click that tires the ear on the fourth hop.
 *
 * The sad one is the one to be careful with. It answers someone saying they
 * hurt, so it is a quiet sine with a slow vibrato that falls and fades, never
 * a brassy trombone "wah-wah", which would read as mocking.
 *
 * Pitch that moves is summed sample by sample (phase accumulation), never
 * written as sin(2π·f(t)·t): the frequency of that is f + t·f', so a glide
 * would overshoot and warble. Every sound starts at exactly 0 and its last
 * 10 ms fade to exactly 0, since a wave that starts or stops mid-swing clicks.
 * Peaks are normalised to -1 dBFS: a phone speaker swallows the quiet ones,
 * and the player plays them at full volume. The gift's sparkles are scattered
 * by a seeded PRNG, never Math.random, so the output is the same bytes on
 * every run.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const OUT = join(resolve(import.meta.dirname, '..'), 'assets', 'sounds');
const RATE = 44100;
const PEAK = 0.89; // -1 dBFS
const END_FADE = 0.01; // s, the last stretch of sound, ending at exactly 0
const END_SILENCE = 0.004; // s of zeros after it
const TAU = 2 * Math.PI;

/** Half-cosine ramp from 0 to 1 over `len` seconds. */
const rise = (t, len) => (t >= len ? 1 : t <= 0 ? 0 : 0.5 - 0.5 * Math.cos((Math.PI * t) / len));
/** Smoothstep on 0-1, clamped. */
const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

/** Loudness over a note: a soft attack, exponential decay, and a release that reaches 0 at `length`. */
const envelope =
  ({ attack, decay = Infinity, release, length, gain = 1 }) =>
  (t) =>
    gain * rise(t, attack) * Math.exp(-t / decay) * rise(length - t, release);

/** A note that starts a semitone flat and springs up to `f` in its first ~10 ms. */
const chirp = (f) => (t) => f * 2 ** (-(1 / 12) * Math.exp(-t / 0.01));

/**
 * Adds one tone to `buf`: frequency `freq(t)` and loudness `amp(t)` in seconds
 * from the note's start, with harmonics as [multiple, weight] pairs (a weight
 * may itself be a function of t).
 */
function addVoice(buf, { start = 0, length, freq, amp, harmonics = [] }) {
  const from = Math.round(start * RATE);
  const to = Math.min(buf.length, from + Math.round(length * RATE));
  let phase = 0;
  for (let i = from; i < to; i++) {
    const t = (i - from) / RATE;
    let s = Math.sin(phase);
    for (const [k, w] of harmonics) s += (typeof w === 'function' ? w(t) : w) * Math.sin(k * phase);
    buf[i] += amp(t) * s;
    phase = (phase + (TAU * freq(t)) / RATE) % TAU;
  }
}

/** mulberry32: a small PRNG on 0-1 that gives the same numbers, in the same order, for a seed. */
function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A soft glockenspiel strike at `f`: partials at 1, 2.76 and 5.4 times it, the
 * upper two gone within tens of milliseconds so only the warm fundamental
 * rings. Each partial is a voice of its own, because `harmonics` multiplies a
 * phase that wraps at 2π, and only a whole multiple survives the wrap without
 * a jump.
 */
const bell = ({ start = 0, f, length, decay, release, gain = 1 }) =>
  [
    [1, 1, decay],
    [2.76, 0.25, 0.035],
    [5.4, 0.07, 0.012],
  ].map(([k, weight, d]) => ({
    start,
    length,
    freq: () => f * k,
    amp: envelope({ attack: 0.003, decay: d, release, length, gain: gain * weight }),
  }));

/**
 * `count` tiny pings spread from `from` to `to` seconds, one in each equal
 * slice at a random point of it, each at a random pitch in 2.5-5 kHz and a
 * random fraction of `gain`. The randomness is `seeded`.
 */
function sparkles({ seed, count, from, to, gain }) {
  const random = seeded(seed);
  return Array.from({ length: count }, (_, i) => {
    const start = from + ((i + random()) * (to - from)) / count;
    const f = 2500 * 2 ** random();
    const length = 0.03 + 0.015 * random();
    const g = gain * (0.6 + 0.4 * random());
    return {
      start,
      length,
      freq: () => f,
      amp: envelope({ attack: 0.0015, decay: 0.01, release: 0.012, length, gain: g }),
    };
  });
}

const SOUNDS = {
  'mascot-happy': {
    length: 0.28,
    voices: [
      {
        length: 0.13,
        freq: chirp(1318.51), // E6
        amp: envelope({ attack: 0.004, decay: 0.045, release: 0.03, length: 0.13, gain: 0.8 }),
        harmonics: [[2, 0.2], [3, 0.06]],
      },
      {
        start: 0.09,
        length: 0.19,
        freq: chirp(1975.53), // B6
        amp: envelope({ attack: 0.004, decay: 0.07, release: 0.04, length: 0.19 }),
        harmonics: [[2, 0.2], [3, 0.06]],
      },
    ],
  },

  'mascot-sad': {
    length: 0.48,
    voices: [
      {
        length: 0.48,
        // 560 → 360 Hz on an eased curve over 0.45 s, with a 6 Hz vibrato of
        // ±0.8% (about 14 cents) that settles in over the first 150 ms.
        freq: (t) =>
          560 * (360 / 560) ** ease(t / 0.45) * (1 + 0.008 * rise(t, 0.15) * Math.sin(TAU * 6 * t)),
        amp: envelope({ attack: 0.025, decay: 0.5, release: 0.2, length: 0.48 }),
        // A little 2nd harmonic for warmth (and for a phone speaker, which
        // barely plays 360 Hz), darkening as it falls.
        harmonics: [[2, (t) => 0.2 - 0.1 * ease(t / 0.45)], [3, 0.04]],
      },
    ],
  },

  'mascot-hmm': {
    length: 0.3,
    voices: [
      {
        length: 0.115,
        freq: () => 440, // A4
        amp: envelope({ attack: 0.012, decay: 0.25, release: 0.04, length: 0.115, gain: 0.7 }),
        harmonics: [[2, 0.12]],
      },
      {
        start: 0.125,
        length: 0.175,
        // C5, lifting 40 cents at the end like a question.
        freq: (t) => 523.25 * 2 ** ((0.4 / 12) * ease((t - 0.09) / 0.08)),
        amp: envelope({ attack: 0.012, decay: 0.3, release: 0.07, length: 0.175 }),
        harmonics: [[2, 0.12]],
      },
    ],
  },

  'mascot-boing': {
    length: 0.35,
    voices: [
      {
        length: 0.35,
        // Springs from 300 up toward 370 Hz while wobbling at 14 Hz, ±10% at
        // first, dying away as the spring settles.
        freq: (t) =>
          300 *
          (370 / 300) ** (1 - Math.exp(-t / 0.1)) *
          (1 + 0.1 * Math.exp(-t / 0.12) * Math.sin(TAU * 14 * t)),
        amp: envelope({ attack: 0.003, decay: 0.1, release: 0.05, length: 0.35 }),
        harmonics: [[2, 0.3], [3, 0.12]],
      },
    ],
  },

  'mascot-cheer': {
    length: 0.45,
    voices: [
      // C6, E6, G6, 55 ms apart and 25 ms over each other, each springing up
      // into its pitch and a touch louder than the last.
      ...[1046.5, 1318.51, 1567.98].map((f, i) => ({
        start: i * 0.055,
        length: 0.08,
        freq: chirp(f),
        amp: envelope({ attack: 0.004, decay: 0.06, release: 0.025, length: 0.08, gain: 0.7 + 0.05 * i }),
        harmonics: [[2, 0.15], [3, 0.05]],
      })),
      {
        start: 0.165,
        length: 0.285,
        // C7, held about 150 ms, with a 7 Hz vibrato of ±0.6% (about 10 cents)
        // that eases in after the chirp, then fading.
        freq: (t) => chirp(2093)(t) * (1 + 0.006 * rise(t - 0.04, 0.08) * Math.sin(TAU * 7 * t)),
        amp: envelope({ attack: 0.004, decay: 0.35, release: 0.13, length: 0.285 }),
        harmonics: [[2, 0.15], [3, 0.05]],
      },
    ],
  },

  'mascot-gift': {
    length: 0.6,
    voices: [
      ...bell({ f: 1567.98, length: 0.22, decay: 0.08, release: 0.06, gain: 0.7 }), // G6
      ...bell({ start: 0.1, f: 2093, length: 0.5, decay: 0.17, release: 0.2 }), // C7
      // Seven sparkles over the second bell, well under it. The seed is one
      // whose scatter keeps neighbours 26 ms or more apart and 2 semitones or
      // more apart in pitch; some others put two at one pitch 8 ms apart.
      ...sparkles({ seed: 0x61f8, count: 7, from: 0.13, to: 0.44, gain: 0.12 }),
    ],
  },

  'mascot-step': {
    length: 0.12,
    voices: [
      {
        length: 0.12,
        // A thump that drops from 180 to about 120 Hz, most of the way in the
        // first 30 ms and all of it by 60. A phone speaker barely plays
        // either, so its 2nd and 3rd harmonics carry it.
        freq: (t) => 120 * (180 / 120) ** Math.exp(-t / 0.02),
        amp: envelope({ attack: 0.003, decay: 0.035, release: 0.05, length: 0.12 }),
        harmonics: [[2, 0.35], [3, 0.12]],
      },
      {
        length: 0.015,
        // The foot touching down: a quiet tick on top.
        freq: () => 1200,
        amp: envelope({ attack: 0.001, decay: 0.005, release: 0.006, length: 0.015, gain: 0.12 }),
      },
    ],
  },

  'mascot-pop': {
    length: 0.09,
    voices: [
      {
        length: 0.09,
        // A bubble: up from 400 to 900 Hz in 40 ms, dying away as it rises.
        freq: (t) => 400 * (900 / 400) ** ease(t / 0.04),
        amp: envelope({ attack: 0.003, decay: 0.03, release: 0.04, length: 0.09 }),
        harmonics: [[2, 0.1]],
      },
    ],
  },
};

/** Fades the end to exactly 0, normalises the peak, and appends a few ms of silence. */
function finish(buf) {
  const n = Math.round(END_FADE * RATE);
  for (let j = 0; j < n; j++) buf[buf.length - n + j] *= 0.5 + 0.5 * Math.cos((Math.PI * j) / (n - 1));
  const peak = buf.reduce((m, x) => Math.max(m, Math.abs(x)), 0);
  const out = new Int16Array(buf.length + Math.round(END_SILENCE * RATE));
  for (let i = 0; i < buf.length; i++) out[i] = Math.round((buf[i] / peak) * PEAK * 32767);
  return out;
}

/** A 44-byte RIFF header and the samples, little-endian. */
function wav(samples) {
  const data = samples.length * 2;
  const b = Buffer.alloc(44 + data);
  b.write('RIFF', 0, 'ascii');
  b.writeUInt32LE(36 + data, 4);
  b.write('WAVE', 8, 'ascii');
  b.write('fmt ', 12, 'ascii');
  b.writeUInt32LE(16, 16); // fmt chunk size
  b.writeUInt16LE(1, 20); // PCM
  b.writeUInt16LE(1, 22); // mono
  b.writeUInt32LE(RATE, 24);
  b.writeUInt32LE(RATE * 2, 28); // bytes per second
  b.writeUInt16LE(2, 32); // bytes per frame
  b.writeUInt16LE(16, 34); // bits per sample
  b.write('data', 36, 'ascii');
  b.writeUInt32LE(data, 40);
  for (let i = 0; i < samples.length; i++) b.writeInt16LE(samples[i], 44 + i * 2);
  return b;
}

mkdirSync(OUT, { recursive: true });
for (const [name, { length, voices }] of Object.entries(SOUNDS)) {
  const buf = new Float64Array(Math.round(length * RATE));
  for (const v of voices) addVoice(buf, v);
  const file = join(OUT, `${name}.wav`);
  const bytes = wav(finish(buf));
  writeFileSync(file, bytes);
  console.log(`${name}.wav  ${(bytes.length / 1024).toFixed(1)} KB`);
}
