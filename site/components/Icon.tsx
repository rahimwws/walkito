import { createElement } from 'react';

/** One icon's drawing, as `@hugeicons/core-free-icons` exports it. */
type IconData = readonly (readonly [string, { readonly [key: string]: string | number }])[];

/**
 * A Hugeicons Free icon, the same set the app uses, drawn as inline SVG.
 *
 * Import each icon by its own subpath, as the app does, so the page carries
 * only the icons it shows:
 *
 *   import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
 *   <Icon icon={FootprintsIcon} />
 *
 * Decorative by default: the text next to it says what it means.
 */
export function Icon({ icon, size = 24, strokeWidth = 1.5 }: { icon: IconData; size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
      className="icon"
    >
      {icon.map(([tag, { key, ...attrs }], i) =>
        createElement(tag, {
          key: String(key ?? i),
          ...attrs,
          ...('strokeWidth' in attrs ? { strokeWidth } : {}),
        }),
      )}
    </svg>
  );
}
