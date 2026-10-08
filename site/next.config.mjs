/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emitted as plain files so the site can go on any static host — Cloudflare
  // Pages, GitHub Pages, an S3 bucket — without a Node runtime standing behind
  // it. Nothing here is dynamic: three pages, no forms, no data fetching.
  output: 'export',
  // `next/image` needs a server to optimise on, which `output: export` does not
  // give it. The two images on the site are already the right size, so the
  // loader is simply switched off rather than worked around.
  images: { unoptimized: true },
  // Every route becomes a directory with its own index.html, so `/privacy`
  // works on hosts that do not rewrite extensionless paths.
  trailingSlash: true,
  // Three root layouts — `(en)`, `ru`, `es` — so each language can set its own
  // `<html lang>`. With no single root there is nowhere for the ordinary
  // not-found page to live, and this is the switch for `app/global-not-found`.
  //
  // inlineCss: the stylesheets go into each page's <head> as <style> instead
  // of five <link>s, so a phone can paint the hero without waiting for extra
  // round trips (Lighthouse measured them as about 0.6 s of render blocking).
  experimental: { globalNotFound: true, inlineCss: true },
};

export default nextConfig;
