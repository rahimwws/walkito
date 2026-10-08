/**
 * The two stores' own marks, drawn inline so they arrive with the page.
 *
 * `AppleLogo` is the filled Apple mark (white or ink, never coloured). The
 * Google Play mark keeps its four official colours; Google's brand guidance
 * asks that it never be recoloured, so it takes no `color`.
 */
export function AppleLogo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="M16.36 12.73c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.2-2.48-.03-.01-2.3-.88-2.33-3.5zM14.2 6.1c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.58-1.21z" />
    </svg>
  );
}

export function GooglePlayLogo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable="false">
      <path fill="#00D7FE" d="M3.61 1.81 13.79 12 3.61 22.19c-.36-.2-.61-.6-.61-1.07V2.88c0-.47.25-.87.61-1.07z" />
      <path fill="#00F076" d="M16.81 8.98 13.79 12 3.61 1.81c.3-.17.68-.2 1.03-.01l12.17 7.18z" />
      <path fill="#FF3A44" d="M16.81 15.02 4.64 22.2c-.35.19-.73.16-1.03-.01L13.79 12l3.02 3.02z" />
      <path fill="#FFD400" d="m20.39 12.85-3.58 2.17L13.79 12l3.02-3.02 3.58 2.17c.66.4.66 1.3 0 1.7z" />
    </svg>
  );
}
