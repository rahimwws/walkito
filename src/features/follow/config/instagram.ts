import InstagramIcon from '@hugeicons/core-free-icons/InstagramIcon';

/**
 * Walkito's Instagram, the one place the app asks people to follow. The same
 * profile for every language: the site links it too (`site/lib/site.ts`).
 * Opened as a web link, which iOS and Android hand to the Instagram app when
 * it is installed. Brand names are not translated.
 */
export const INSTAGRAM = {
  name: 'Instagram',
  handle: '@walkito.app',
  icon: InstagramIcon,
  url: 'https://www.instagram.com/walkito.app/',
} as const;
