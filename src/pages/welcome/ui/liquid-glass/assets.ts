import { ASTRO_ASSET_MODULES } from './cookbooks/astro';

/**
 * Metro module IDs for every local bitmap used by the welcome screen.
 * Loading these before the router mounts keeps a first-use decode from
 * showing up as a late sticker on a cold launch.
 *
 * Upstream also listed the "sky" cookbook here; that variant (and its 6MB
 * video) was not vendored.
 */
export const LIQUID_GLASS_ASSET_MODULES = [...ASTRO_ASSET_MODULES] as const;
