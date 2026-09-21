#!/usr/bin/env node
/**
 * No debug shortcuts in the shipped source.
 *
 * The kind of line somebody writes to look at one screen without clicking
 * through to it, and then does not remove. They are invisible to the type
 * checker and to the tests — the app compiles, runs, and starts on the wrong
 * screen — so the only thing that catches them is a grep somebody remembers to
 * run. This is that grep, run every time.
 *
 * Two have already shipped or nearly shipped here: `ALWAYS_ONBOARD = true`,
 * which re-asked the questionnaire on every launch, and a `useState` seeded to
 * jump straight to the plan step, which would have skipped onboarding entirely.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

/** Markers that mean "remove me before this ships". */
const MARKERS = [
  { pattern: /\bTEMP-VERIFY\b/, why: 'a temporary shortcut left in place' },
  { pattern: /\bFIXME\b/, why: 'an unfinished edit' },
  { pattern: /\bHACK:/, why: 'an acknowledged workaround' },
  { pattern: /\bXXX\b/, why: 'a marker nobody removed' },
  // Skipped tests hide a failure in a green run, which is worse than a red one.
  { pattern: /\b(describe|test|it)\.(skip|only)\b/, why: 'a skipped or exclusive test' },
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|js|jsx|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const roots = ['src', 'app', 'tests'].map((d) => join(ROOT, d)).filter((d) => {
  try {
    return statSync(d).isDirectory();
  } catch {
    return false;
  }
});

const found = [];
for (const file of roots.flatMap((d) => walk(d))) {
  // This file names every marker it looks for, so it would report itself.
  if (file.endsWith('verify-no-debug.mjs')) continue;
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const { pattern, why } of MARKERS) {
      if (pattern.test(line)) {
        found.push({ file: relative(ROOT, file), line: i + 1, text: line.trim(), why });
      }
    }
  });
}

if (found.length > 0) {
  console.error(`\n${found.length} debug marker(s) in the source:\n`);
  for (const f of found) {
    console.error(`  ${f.file}:${f.line} — ${f.why}\n    ${f.text.slice(0, 100)}`);
  }
  console.error('');
  process.exit(1);
}

console.log('No debug markers.');
