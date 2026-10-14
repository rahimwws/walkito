/**
 * The 3-month pass: one payment for 90 days of Walkito Plus, with no
 * auto-renewal. Sold as the limited offer's third card (`features/home-offer`)
 * and as the answer to "It doesn't fit my budget" in the cancel flow
 * (`pages/settings`), bought through the pass checkout (`widgets/pass-checkout`),
 * and named in Settings and on Home while one runs.
 *
 * **"3-month pass" is its name** in English; each language names it once
 * (Russian «Пропуск на 3 месяца») and keeps to it. It never renews, so
 * nothing here may say "subscription" of it, and nothing may call it
 * lifetime. "Walkito Plus" stays as it is in every language.
 *
 * **No price is written here.** Every figure arrives as `{price}`, the
 * store's own string for this storefront. `{date}` is a whole date written out
 * in the language.
 *
 * **`**…**` marks the words set heavier**, as in the limited offer's other
 * lines (`homeOffer.comeback.*`).
 */

import type { SourceEntry } from '../entry';

export const PASS_EN = {
  // ── The limited offer's third card ───────────────────────────────────────
  /** Its name on a plan card. */
  'pass.plan': '3-month pass',
  /** Its tab beside "Year" and "Lifetime": short, three share a phone's width. */
  'pass.tab': '3 months',
  /** The smallest line on its card, under the price paid once. */
  'pass.card.caption': 'One payment, no auto-renewal',
  /** Under the headline, naming the deals on the cards. */
  'pass.offer.bodyAll':
    'Keep **Walkito Plus** your way: **a year for less**, **yours for good**, or **3 months with one payment**.',
  'pass.offer.bodyYear': 'Keep **Walkito Plus** your way: **a year for less**, or **3 months with one payment**.',
  'pass.offer.bodyLifetime': 'Keep **Walkito Plus** your way: **yours for good**, or **3 months with one payment**.',
  /** The disclosure under the button. */
  'pass.terms': 'One payment of {price} for 3 months of Walkito Plus. Nothing renews.',

  // ── Buying it ────────────────────────────────────────────────────────────
  /** Before the store, for somebody with no account yet. */
  'pass.signIn.title': 'Keep your pass on your account',
  'pass.signIn.body': 'Your 3-month pass is kept on your account, so it works on every phone you sign in on.',
  /** The store said yes; the days are on their way. A few seconds at most. */
  'pass.setup.title': 'Setting up your 3 months',
  'pass.setup.body': 'This takes a few seconds.',
  /** For somebody whose subscription still renews beside the pass. */
  'pass.set.title': 'Your 3 months are set',
  'pass.set.body':
    'They start on {date}, when the subscription period you’ve paid for ends. Turn off auto-renewal so it isn’t charged again.',
  'pass.set.bodyNoDate':
    'They start when the subscription period you’ve paid for ends. Turn off auto-renewal so it isn’t charged again.',
  'pass.set.turnOff': 'Turn off auto-renewal',
  'pass.set.done': 'Done',

  // ── The cancel flow's budget answer ──────────────────────────────────────
  'pass.budget.title': 'Keep going for 3 months',
  'pass.budget.body':
    'Keep going for 3 months for {price}, one payment, no auto-renewal. Your plan and everything you’ve logged stay as they are.',
  'pass.budget.cta': 'Keep going for {price}',
  'pass.budget.terms':
    'Your 3 months start when the period you’ve already paid for ends. After buying, turn off auto-renewal so your subscription isn’t charged as well. You can still cancel any time.',
  /** "All set", after it was bought. `{date}` is when the 3 months end. */
  'pass.done.until': 'Your 3 months of Walkito Plus are set: they run until {date}. Thank you for staying.',
  'pass.done.plain': 'Your 3 months of Walkito Plus are set. Thank you for staying.',
  /** Under "All set" while the subscription beside the pass still renews:
   * the cancel flow's own button is right below. */
  'pass.done.stillRenews': 'Your subscription still renews. Tap Cancel anyway below to turn auto-renewal off.',

  // ── Settings → Subscription ──────────────────────────────────────────────
  /** The section's heading in Settings: the product's name, the same in
   * every language. */
  'pass.settings.section': 'Walkito Plus',
  /** While it runs. `{date}` is when it ends. */
  'pass.settings.row': '3-month pass · until {date}',
  /** Bought on top of a subscription, before it starts. `{date}` is when it starts. */
  'pass.settings.queued': '3-month pass · from {date}',
  'pass.settings.hint': 'One payment. Nothing renews.',
  /** The App Review account's way to the limited offer. */
  'pass.settings.specialOffers': 'Special offers',
  'pass.settings.specialOffersHint': 'The limited offer, with the 3-month pass',

  // ── Home, in its last week ───────────────────────────────────────────────
  /** `{date}` is a day and a month. */
  'pass.ending.title': 'Your 3 months end on {date}',
  'pass.ending.body': 'Your plan and everything you’ve logged stay. Pick a plan to keep going.',
  'pass.ending.cta': 'See plans',
} as const satisfies Record<string, SourceEntry>;
