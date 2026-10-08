/**
 * A phone with an app screenshot in it, or the phone-shaped place one will go.
 *
 * Given `src`, the screenshot is drawn inside an iPhone 17 Pro-shaped frame
 * built in CSS: display corners, a thin black bezel, a titanium edge, the
 * Dynamic Island and a soft shadow. No Apple artwork or logos are used.
 *
 * `src` is the path of a 1x WebP in `public/` (e.g. `/app/01-plan-goal.webp`).
 * A `@2x` copy next to it is picked up through `srcSet`; both are made by
 * `scripts/export-screenshots.mjs` from the raw simulator captures, which are
 * the iPhone 17 Pro's native 1206 x 2622. The frame is locked to that ratio, so
 * nothing reflows while the image loads.
 *
 * A plain `<img>` rather than `next/image`: the site is a static export with
 * image optimisation switched off, so the sizes are made ahead of time instead.
 *
 * Without `src` it draws an empty phone with a short label saying what will go
 * there. That one is decoration: hidden from screen readers, no alt text
 * claiming a picture that is not there.
 */
export function ScreenshotSlot({
  src,
  label,
  alt,
  size = 'md',
  priority = false,
  sizes,
}: {
  src?: string;
  /** What the placeholder says, and the alt text when `alt` is not given. */
  label: string;
  alt?: string;
  size?: 'md' | 'sm';
  /** The hero phone: load it eagerly instead of lazily. */
  priority?: boolean;
  /** Overrides the `sizes` hint when the phone is drawn at another width. */
  sizes?: string;
}) {
  if (src) {
    const retina = src.replace(/\.webp$/, '@2x.webp');
    // 360 px for phones: a mockup is drawn 140-200 CSS px wide there, and the
    // 660 px file was ~3x the pixels it needed.
    const small = src.replace(/\.webp$/, '@360w.webp');
    return (
      <div className={`slot slot-${size} phone`}>
        <div className="phone-body">
        <div className="phone-screen">
          <img
            src={src}
            srcSet={`${small} 360w, ${src} 660w, ${retina} 1206w`}
            sizes={sizes ?? (size === 'sm' ? '(max-width: 760px) 42vw, 220px' : '(max-width: 760px) 72vw, 320px')}
            width={1206}
            height={2622}
            alt={alt ?? label}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding={priority ? 'auto' : 'async'}
          />
          <span className="phone-island" aria-hidden />
        </div>
        </div>
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
