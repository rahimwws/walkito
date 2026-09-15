/** Colour arithmetic. PURE — no React, no theme knowledge. */

/**
 * Mixes a colour towards black by `amount` (0–1).
 *
 * Used for the ledge under a raised surface. Deriving it beats a second
 * palette entry: the ledge can never drift out of step with the face it sits
 * under, and it follows an accent through both colour schemes for free.
 *
 * Takes `#RGB` or `#RRGGBB`. Anything else (an `rgba()` string, a named
 * colour) is returned untouched rather than mangled.
 */
export function shade(color: string, amount: number): string {
  const hex = color.trim();
  if (hex[0] !== '#' || (hex.length !== 4 && hex.length !== 7)) return color;

  const full =
    hex.length === 4 ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex;
  const value = Number.parseInt(full.slice(1), 16);
  if (Number.isNaN(value)) return color;

  const factor = 1 - Math.min(Math.max(amount, 0), 1);
  const channel = (shift: number) =>
    Math.round(((value >> shift) & 0xff) * factor)
      .toString(16)
      .padStart(2, '0');

  return `#${channel(16)}${channel(8)}${channel(0)}`;
}
