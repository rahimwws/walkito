import Image from 'next/image';

/**
 * A phone-sized place for an app screenshot.
 *
 * Until a real screenshot exists this draws an empty phone with a short label
 * saying what will go there, so the page can be laid out, and judged, before
 * the images are made. It is decoration rather than an image: no `alt` claiming
 * a picture that is not there, and the frame is hidden from screen readers.
 *
 * To drop a real one in, put the file in `public/` and pass its path as `src`.
 * The label becomes its alt text. Screenshots are expected at the same
 * proportions as `app-home.png` (538 × 1100), which is what the frame is drawn
 * to, so nothing reflows when they arrive.
 */
export function ScreenshotSlot({
  src,
  label,
  size = 'md',
}: {
  src?: string;
  label: string;
  size?: 'md' | 'sm';
}) {
  if (src) {
    return (
      <div className={`slot slot-${size}`}>
        <Image src={src} alt={label} width={538} height={1100} />
      </div>
    );
  }

  return (
    <div className={`slot slot-${size} slot-empty`} aria-hidden>
      <span className="slot-island" />
      <span className="slot-label">{label}</span>
    </div>
  );
}
