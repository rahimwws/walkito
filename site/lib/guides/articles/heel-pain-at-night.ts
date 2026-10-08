import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Citation correction (flagged for the maintainer, not added here) ───
 *
 * This file previously attributed the "Baxter's nerve entrapment accounts
 * for up to 20% of chronic heel pain" figure to CITE.tuHeelPain. Checked
 * Tu P, Heel Pain: Diagnosis and Management, Am Fam Physician 2018;97(2):
 * 86-93 (PMID 29365222) against its full text: it discusses neuropathic
 * heel pain generically (branches of the posterior tibial nerve, lateral
 * plantar nerve, or nerve to abductor digiti minimi) and tarsal tunnel
 * syndrome, but never names "Baxter's nerve" and gives no 20% figure.
 * That number traces to Baxter DE, Pfeffer GB (1992) and is repeated in a
 * 2025 review:
 *
 * NOT YET IN citations.ts:
 * tedeschiBaxter
 *   Tedeschi R. Baxter's nerve: the hidden culprit of chronic heel pain.
 *   Neurological Sciences. 2025;46(9):4685-4689.
 *   doi: 10.1007/s10072-025-08253-0 | PMID: 40418415 | narrative review
 *   Abstract states: "Despite accounting for up to 20% of chronic heel
 *   pain cases, clinical awareness remains low."
 *   Used in prose below pending a CITE key, since this file cannot edit
 *   citations.ts.
 */

export const HEEL_PAIN_AT_NIGHT_EN: Guide = {
  lang: 'en',
  page: 'heelPainAtNight',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Heel Pain at Night: Causes, Red Flags and What to Do',
  description:
    'Heel pain at night or at rest can signal stress fractures, nerve entrapment or arthritis. Red-flag patterns and when to see a clinician.',
  h1: 'Heel pain at night: what causes it and when it is a red flag',
  lede:
    'Heel pain that shows up at night, in bed, or at rest is a different pattern from the classic first-step-in-the-morning pull of plantar fasciitis. Night and rest pain can signal a calcaneal stress fracture, nerve entrapment, inflammatory arthritis, or another condition that needs a clinician. This page walks through the common causes and the ones you should not sit on.',
  intro: [
    'If your heel hurts mainly with your first steps in the morning and then eases up, the more likely starting point is [heel pain in the morning](/heel-pain-in-the-morning/). This page is for pain that persists at rest, wakes you up, or arrives after you have been off your feet for a while and does not match the typical plantar fasciitis pattern.',
  ],
  takeaways: [
    'Plantar fasciitis pain is worst with first steps after rest and usually fades once you are moving. Pain that stays at rest, wakes you from sleep, or worsens through the night is a red-flag pattern that warrants investigation (Tu, 2018).',
    'Calcaneal stress fractures can ache or throb at night and typically worsen with continued weight bearing rather than warming up (Patel and colleagues, 2011).',
    'Tarsal tunnel syndrome and Baxter\'s nerve entrapment, compression of branches of the tibial nerve, produce burning or tingling heel pain, a different character from fasciitis (Tu, 2018). Baxter\'s nerve entrapment specifically may account for up to 20% of chronic heel pain and can appear at rest (Tedeschi, 2025).',
    'Bilateral heel pain with prolonged morning stiffness may point to inflammatory arthritis such as a spondyloarthropathy. In a cohort of 174 people with plantar fasciitis, bilateral pain was a significant predictor of longer symptom duration (Hansen and colleagues, 2018).',
    'The 2023 heel pain guideline grades night splints **A** for persistent plantar fasciitis, but the purpose is to prevent the fascia from shortening overnight, not to address the kinds of night pain described on this page (Koc and colleagues, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Why does your heel hurt at night or at rest?',
      paragraphs: [
        'Plantar fasciitis causes pain because the fascia stiffens while you sleep and then stretches sharply when you stand. That pain peaks on the first step and gets better as you move. If your heel hurts while you are lying in bed and not bearing weight at all, a different mechanism is usually responsible.',
        'An 2018 review in American Family Physician lists several causes of heel pain that behave differently from plantar fasciitis. The key distinction: plantar fasciitis pain improves with activity, while pain from stress fractures, nerve entrapment, tumours, and inflammatory conditions does not follow that pattern.',
        'The foot also points downward (plantarflexion) during sleep. That position can shorten the Achilles tendon and calf, which sometimes contributes to discomfort at the heel. Night splints address this by holding the ankle at a neutral angle. But a night splint is a tool for plantar fasciitis, not a substitute for investigating pain that genuinely worsens at rest.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Could it be a calcaneal stress fracture?',
      paragraphs: [
        'A calcaneal stress fracture, a hairline crack in the heel bone from repetitive loading, can produce a deep ache that throbs at night. Unlike plantar fasciitis, the pain usually gets worse with activity and does not warm up. It often follows a sudden increase in running, walking, or standing on hard surfaces.',
        'The "squeeze test," pressing both sides of the heel bone together, is the classic clinical sign. Positive squeeze pain is unusual in plantar fasciitis and common in stress fractures. Plain X-rays often miss early stress fractures. MRI or bone scan is usually needed to confirm one.',
        'A 2011 review in American Family Physician noted that calcaneal stress fractures cause progressively worsening pain after an increase in activity or a change to harder walking surfaces. Night pain and pain at rest were listed among features that distinguish stress fractures from fasciitis.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
    },
    {
      h2: 'What about nerve entrapment: tarsal tunnel syndrome and Baxter\'s nerve?',
      keyFact: 'A 2025 narrative review found Baxter\'s nerve entrapment may account for up to 20% of chronic heel pain cases (Tedeschi, 2025).',
      paragraphs: [
        'The tibial nerve passes through a space behind the inner ankle called the tarsal tunnel. Compression there, tarsal tunnel syndrome, causes burning, tingling, or numbness along the sole and heel. Tu (2018) describes tarsal tunnel pain as typically worse with standing, walking, or running, and eased by rest and elevation. That pattern differs from plantar fasciitis, but it is not the same as true rest pain, so tarsal tunnel does not always fit the pattern this page is about.',
        'Baxter\'s nerve is the first branch of the lateral plantar nerve, a smaller nerve near the inner heel. When it is compressed, it produces sharp or burning pain at the medial heel. The pain often worsens with activity over the course of the day, but can also appear at rest. A 2025 review states Baxter\'s nerve entrapment may account for up to 20% of chronic heel pain cases (Tedeschi, 2025).',
        'Nerve entrapment is frequently misdiagnosed as plantar fasciitis because both cause medial heel pain. The difference is the character: burning, tingling, or numbness is a nerve sign. Imaging and nerve conduction studies can help a clinician confirm the diagnosis.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
    },
    {
      h2: 'Can inflammatory arthritis cause heel pain at night?',
      keyFact: 'In a 5-to-15-year follow-up of 174 people with plantar fasciitis, bilateral heel pain was a significant predictor of longer symptom duration (Hansen and colleagues, 2018).',
      paragraphs: [
        'Spondyloarthropathies, a group of inflammatory conditions including ankylosing spondylitis and psoriatic arthritis, can cause enthesitis, inflammation where a tendon or ligament attaches to bone. The heel is a common site. The pain is often bilateral, may be present at the Achilles insertion or under the heel, and is accompanied by prolonged morning stiffness (over 30 minutes) that improves with movement.',
        'In a 5-to-15-year follow-up of 174 people with plantar fasciitis, bilateral heel pain was a significant predictor of longer symptom duration. The authors noted that unrecognised systemic inflammatory disease could partly explain that finding.',
        'Rheumatoid arthritis and gout can also produce heel pain. If your heel pain is bilateral, if stiffness lasts more than 30 minutes each morning, or if other joints are involved, a clinician should assess for an inflammatory cause.',
      ],
      cites: [CITE.hansen, CITE.tuHeelPain],
    },
    {
      h2: 'Is plantar fasciitis ever worse at night?',
      paragraphs: [
        'Plantar fasciitis is sometimes uncomfortable in the evening after a long day on your feet. That is activity-related pain from cumulative loading, not the same thing as pain that wakes you from sleep or arrives when you are lying down with no weight on the foot.',
        'Some people also notice heel discomfort when their foot drops into a pointed position during sleep, pulling on the plantar fascia. This is what night splints address. The 2023 guideline gives night splints a grade of **A**, its top evidence grade, for persistent plantar fasciitis. They hold the ankle at a neutral angle so the fascia does not shorten overnight.',
        'If pain is genuinely at its worst at night and at rest, rather than improving with movement the next morning, that pattern points away from plantar fasciitis and toward the conditions above. Do not assume it is fasciitis and push through.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Do night splints help heel pain?',
      keyFact: 'The 2023 heel pain guideline grades night splints A, its top evidence grade, for plantar fasciitis, typically used for one to three months (Koc and colleagues, 2023).',
      paragraphs: [
        'A night splint is a brace that holds the ankle at 90 degrees while you sleep. The idea is to prevent the calf and plantar fascia from shortening overnight, so the first step in the morning is less painful.',
        'The 2023 heel pain guideline grades night splints **A** for plantar fasciitis. They are typically recommended for 1 to 3 months when first-step pain has not improved with stretching and loading exercises alone. They do not address nerve pain, stress fractures, or inflammatory conditions.',
        'Night splints are not a long-term device for most people. They are awkward to sleep in and the benefit is specific to the morning-stiffness pattern. If your night pain is not the shortening-and-stretching type, a splint is unlikely to help and may delay the right diagnosis.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What stretches and exercises can you do before bed?',
      paragraphs: [
        'If your pain fits the plantar fasciitis pattern, gentle calf and plantar fascia stretching before bed may reduce next-morning stiffness. The same plantar-fascia-specific stretch the guideline grades **A** for first-step pain can be done before sleep: pull the toes back with your hand until you feel the arch, hold for 10 seconds, repeat 10 times.',
        'Loading exercises such as calf raises are better suited to earlier in the day. The full exercise list is on the [plantar fasciitis exercises](/plantar-fasciitis-exercises/) page.',
        'If your pain is not plantar fasciitis or you are not sure, stretching at night is not the first step. Getting the right diagnosis is.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch (seated)',
          evidence: { level: 'strong', why: 'Guideline grade A. DiGiovanni 2003 RCT of 101 people found tissue-specific stretching superior to calf stretching for first-step pain.' },
          dose: '10 holds of 10 seconds, each foot',
          how: 'Sit on the edge of the bed. Cross the affected foot over the opposite knee. Pull the toes back toward the shin until you feel a stretch along the arch. Hold for 10 seconds. This is also the morning stretch the guideline recommends doing before your foot touches the floor.',
          often: 'Before bed and before standing in the morning',
          feel: 'A firm stretch along the arch, not sharp pain',
          stop: 'Sharp pain at the heel, or any burning or tingling',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel the arch',
          alt: 'A seated figure pulling the toes of one foot back toward the shin, with the plantar fascia highlighted along the arch',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Guideline grade A for plantar fasciitis as part of a calf-stretching program.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Step one foot back, keep the back leg straight, heel down. Lean forward until you feel a stretch in the upper calf. Hold for 30 seconds. Switch sides.',
          often: 'Before bed if calf tightness contributes to morning pain',
          feel: 'A stretch in the upper calf, not at the heel',
          stop: 'Pain at the heel or Achilles that does not ease within a few seconds',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning against a wall with one leg straight behind, calf muscles highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003],
    },
    {
      h2: 'How is night heel pain different from morning heel pain?',
      paragraphs: [
        'Morning heel pain and night heel pain sound similar but point in different directions. Morning pain, the sharp first-step pull that fades after a few minutes of walking, is the textbook presentation of plantar fasciitis. The tissue stiffened overnight and stretches abruptly under load.',
        'Night pain, meaning pain that arrives or worsens when you are in bed and not bearing weight, suggests something beyond simple fascial stiffness. The conditions most associated with true rest pain are stress fractures, nerve entrapment, inflammatory arthritis, and rarely bone tumours or infection.',
        'If you are not sure which pattern you have, a simple test: does the pain get better once you have been walking for 5 to 10 minutes? If yes, the plantar fasciitis pattern is more likely, and the [heel pain in the morning](/heel-pain-in-the-morning/) page is the better starting point. If no, keep reading here and consider seeing a clinician.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain],
    },
  ],
  faq: [
    {
      q: 'Is heel pain at night a sign of something serious?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'It can be. Pain at rest or pain that wakes you from sleep is a red-flag pattern. Calcaneal stress fractures, nerve entrapment (tarsal tunnel or Baxter\'s nerve), and inflammatory arthritis can all produce night heel pain. These conditions need a clinician to diagnose and manage. Do not assume it is plantar fasciitis if it does not follow the typical first-step pattern.',
    },
    {
      q: 'Why does my heel hurt when I lie down?',
      cites: [CITE.tuHeelPain],
      a: 'Pain at the heel when lying down, with no weight on the foot, can result from nerve compression, a stress fracture, or inflammation. Plantar fasciitis sometimes causes discomfort when the foot points downward in bed, but that is positional stiffness, not true rest pain. Burning or tingling at rest points toward a nerve issue.',
    },
    {
      q: 'Do night splints help heel pain at night?',
      cites: [CITE.guideline],
      a: 'Night splints hold the ankle at 90 degrees to prevent the calf and fascia from shortening. The 2023 heel pain guideline grades them **A** for persistent plantar fasciitis. They help the morning-stiffness pattern. They do not address nerve pain, stress fractures, or inflammatory conditions.',
    },
    {
      q: 'How can I tell if my heel pain is plantar fasciitis or a stress fracture?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Plantar fasciitis pain is sharpest on the first step and improves as you walk. A calcaneal stress fracture usually worsens with continued activity and does not warm up. The squeeze test, pressing both sides of the heel bone, is more suggestive of a fracture than fasciitis. MRI is often needed because plain X-rays can miss early fractures.',
    },
    {
      q: 'Can plantar fasciitis hurt at night?',
      cites: [CITE.guideline],
      a: 'Plantar fasciitis can ache in the evening after a long day of standing or walking. That is cumulative loading, not rest pain. The foot also drops into a pointed position during sleep, which shortens the fascia and can cause discomfort. If pain genuinely wakes you from sleep, that pattern is not typical fasciitis and should be checked.',
    },
    {
      q: 'What is Baxter\'s nerve entrapment?',
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
      a: 'Baxter\'s nerve is the first branch of the lateral plantar nerve. When it is compressed near the inner heel, it causes sharp or burning pain, sometimes with numbness. A 2025 review states it may account for up to 20% of chronic heel pain (Tedeschi, 2025). Unlike plantar fasciitis, the pain often worsens later in the day or at rest and does not ease with movement.',
    },
    {
      q: 'Should I see a doctor for heel pain at night?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Yes. Night heel pain that wakes you, does not improve with movement, involves burning or tingling, or is in both heels with prolonged stiffness should be assessed by a clinician. These patterns can indicate a stress fracture, nerve entrapment, or inflammatory disease that exercises alone will not address.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'pain wakes you from sleep or is present at rest with no weight on the foot',
      'pain gets worse with continued walking and does not warm up after a few minutes',
      'you feel burning, tingling, or numbness in the heel or sole',
      'the "squeeze test" (pressing both sides of the heel bone together) reproduces the pain',
      'both heels hurt, especially with prolonged morning stiffness (over 30 minutes) or pain in other joints',
      'pain followed a sudden increase in running mileage, a change to harder surfaces, or a trauma',
      'the heel is red, warm, or swollen, or you have a fever',
      'pain has been present for more than six weeks and is not improving',
    ],
  },
  program: {
    h2: 'When exercise is the right step',
    text: 'If a clinician has confirmed plantar fasciitis and ruled out the conditions above, exercise is the guideline\'s top-graded approach. Walkito builds a daily plan around calf and fascia loading, starting with stretches and working up to strength exercises at your pace.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a test checks calf endurance and balance. Walkito is an exercise program. It does not diagnose. If your heel pain is worse at night or at rest, see a clinician before you start loading the foot.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Heel pain at night',
  campaign: 'guide-heel-night',
};
