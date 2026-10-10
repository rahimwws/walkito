import QRCode from 'qrcode';

/**
 * A QR code as one SVG path, drawn at build time.
 *
 * The site is a static export, so the code is computed while the page is
 * rendered and ships as markup: no image request, no QR library in the
 * browser. Each dark module is a 1x1 square in a `size` x `size` viewBox; the
 * caller adds the quiet zone around it.
 */
export function qrPath(text: string, { hole = 0 }: { hole?: number } = {}): { size: number; d: string } {
  // High correction when the middle is cleared for the icon: H survives about
  // 30% of the code missing, and the hole takes under 7%.
  const { modules } = QRCode.create(text, { errorCorrectionLevel: hole > 0 ? 'H' : 'M' });
  const { size, data } = modules;
  const span = Math.round(size * hole);
  const from = Math.floor((size - span) / 2);
  const inHole = (x: number, y: number) =>
    span > 0 && x >= from && x < from + span && y >= from && y < from + span;
  let d = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (data[y * size + x] && !inHole(x, y)) d += `M${x} ${y}h1v1h-1z`;
    }
  }
  return { size, d };
}
