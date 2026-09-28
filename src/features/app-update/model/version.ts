/**
 * Whether `candidate` is a newer marketing version than `current`.
 *
 * Numeric, part by part — "1.10.0" is newer than "1.9.3", which a string
 * comparison gets backwards. Missing parts count as zero, so "1.2" and "1.2.0"
 * are the same version, and anything that is not a number makes the answer
 * "no": a malformed version from the store must never nag somebody to update.
 */
export function isNewerVersion(candidate: string, current: string): boolean {
  const parse = (version: string) => version.trim().split('.').map((part) => Number(part));
  const a = parse(candidate);
  const b = parse(current);
  if (a.some((n) => !Number.isFinite(n)) || b.some((n) => !Number.isFinite(n))) return false;
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i += 1) {
    const x = a[i] ?? 0;
    const y = b[i] ?? 0;
    if (x !== y) return x > y;
  }
  return false;
}
