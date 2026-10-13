import QRCode from 'qrcode';

/**
 * A QR code as one SVG path, drawn at build time.
 *
 * The site is a static export, so the code is computed while the page is
 * rendered and ships as markup: no image request, no QR library in the
 * browser. Each dark module is a 1x1 square in a `size` x `size` viewBox; the
 * caller adds the quiet zone around it.
 */
export function qrPath(text: string): { size: number; d: string } {
  const { modules } = QRCode.create(text, { errorCorrectionLevel: 'M' });
  const { size, data } = modules;
  let d = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (data[y * size + x]) d += `M${x} ${y}h1v1h-1z`;
    }
  }
  return { size, d };
}
