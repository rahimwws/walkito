import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * digiovanni2003
 *   DiGiovanni BF, Nawoczenski DA, Lintal ME, Moore EA, Murray JC, Wilding GE,
 *   Baumhauer JF. Tissue-specific plantar fascia-stretching exercise enhances
 *   outcomes in patients with chronic heel pain: a prospective, randomized study.
 *   Journal of Bone and Joint Surgery (American). 2003;85(7):1270–1277.
 *   doi: 10.2106/00004623-200307000-00013 | PMID: 12851352 | RCT
 *
 * digiovanni2006
 *   DiGiovanni BF, Nawoczenski DA, Malay DP, Graci PA, Williams TT, Wilding GE,
 *   Baumhauer JF. Plantar fascia-specific stretching exercise improves outcomes in
 *   patients with chronic plantar fasciitis: a prospective clinical trial with
 *   two-year follow-up. Journal of Bone and Joint Surgery (American).
 *   2006;88(8):1775–1781.
 *   doi: 10.2106/JBJS.E.01281 | PMID: 16882901 | RCT follow-up with crossover
 */

export const EX_PLANTAR_FASCIA_STRETCH: Guide = {
  lang: 'en',
  page: 'exPlantarFasciaStretch',
  mainSource: CITE.digiovanni2003,
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Plantar Fascia Stretch: How to Do It, Sets & Reps',
  description:
    'How to do the plantar fascia stretch for plantar fasciitis: technique, when to stretch, how long to hold, and what the research says.',
  h1: 'Plantar fascia stretch: how to do it, sets and reps',
  lede:
    'The plantar fascia stretch is the single stretch tested head-to-head against Achilles tendon stretching for plantar fasciitis. In a trial of 82 people with chronic heel pain, those who did the plantar fascia stretch had better pain and function scores at eight weeks than those who stretched the Achilles tendon. This page covers the technique, the dose and when the stretch matters most.',
  takeaways: [
    'In a trial of 82 people with chronic plantar fasciitis, the plantar fascia stretch produced better pain and function scores at eight weeks than an Achilles tendon stretch (DiGiovanni and colleagues, 2003).',
    'At a two-year follow-up, after all participants crossed over to the plantar fascia stretch, 92% reported satisfaction with their outcome (DiGiovanni and colleagues, 2006).',
    'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A (Koc and colleagues, 2023).',
    'The most important time to do it is before taking the first step in the morning and after sitting for a long period.',
    'Walkito starts at 10 holds of 10 seconds, each foot. The research protocol was 10 holds of 10 seconds, three times a day.',
  ],
  toc: false,
  sections: [
    {
      h2: 'How do you do a plantar fascia stretch?',
      paragraphs: [
        'Sit down and cross the foot with heel pain over the opposite knee. With the hand on the same side, pull the toes back toward the shin until you feel a stretch along the arch. Hold for 10 seconds, then release. Repeat 10 times.',
        'To check your position, press your thumb along the arch while holding the stretch. The plantar fascia, the thick band of tissue under the foot, should feel taut and firm. If you only feel it in the calf, you are pulling too far or too fast. Ease off until the stretch sits under the arch.',
        'This is a seated, non-weight-bearing stretch. You do not need to stand up or lean against a wall. It targets the plantar fascia directly, which is why the trial tested it separately from calf stretches.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: {
            level: 'strong',
            why: 'Tested head-to-head in a randomized trial of 82 people (DiGiovanni 2003). Guideline grade A.',
          },
          dose: 'Walkito starts at 10 holds of 10 seconds, each foot. Research protocol: 10 holds of 10 seconds, 3 times daily',
          how: 'Sit and cross the affected foot over the opposite knee. Pull the toes back toward the shin until you feel a stretch along the arch, not the calf. Hold 10 seconds, release, repeat.',
          often: 'Most sessions. Before your first step in the morning is the most important time.',
          feel: 'A stretch along the arch of the foot',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A seated figure pulling the toes of one foot back toward the shin, the arch highlighted',
        },
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: 'When should you stretch the plantar fascia?',
      paragraphs: [
        '**Before your first step in the morning.** That is the single most repeated instruction across both the trial and the 2023 guideline. The plantar fascia shortens overnight while the foot is relaxed. The first steps of the day pull it suddenly and sharply, which is why morning heel pain is the hallmark of plantar fasciitis.',
        'The second most important time is before standing after any long period of sitting. The same shortening happens during rest. Stretching the fascia before loading it reduces that jolt.',
        'In the trial, participants were asked to do 10 holds of 10 seconds, three times a day, for at least eight weeks. The most critical sessions were the morning one and the one after prolonged sitting. More sessions throughout the day were encouraged if possible.',
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: 'Does the plantar fascia stretch actually help plantar fasciitis?',
      keyFact: 'In a trial of 82 people with chronic plantar fasciitis, pain scores were significantly better in the plantar fascia stretch group at eight weeks for worst pain and first steps in the morning (DiGiovanni and colleagues, 2003).',
      paragraphs: [
        'In the original 2003 trial, 82 people with chronic plantar fasciitis lasting more than ten months were randomly assigned to either a plantar fascia stretch or a standard Achilles tendon stretch. At eight weeks, the plantar fascia group scored significantly better on the Foot Function Index, which measures pain and activity limitations. The authors called this a clinically meaningful difference.',
        'A follow-up study tracked the same patients for two years. At the eight-week mark, all participants were switched to the plantar fascia stretch. By two years, 92% of all patients reported satisfaction with their outcome, and the group that originally did Achilles stretching improved markedly once they started the plantar fascia stretch.',
        'The 2023 heel pain guideline reviewed the stretching evidence and gave plantar fascia and calf stretching its highest grade, **A**. That does not mean stretching alone is enough for everyone. The guideline also grades strength training **B** and recommends both. For the strength side, see [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
      ],
      sourceNote:
        'DiGiovanni 2003: Foot Function Index pain subscale significantly better in the PF stretch group at 8 weeks for worst pain (p = 0.02) and first steps in the morning (p = 0.006). DiGiovanni 2006: at 2 years, 92% overall satisfaction; the original Achilles-stretch group improved markedly after crossing over.',
      cites: [CITE.digiovanni2003, CITE.digiovanni2006, CITE.guideline],
    },
    {
      h2: 'How is the plantar fascia stretch different from a calf stretch?',
      paragraphs: [
        'They target different structures. The [calf stretch](/exercises/calf-stretch/) lengthens the gastrocnemius, the big, more superficial calf muscle, through the Achilles tendon. The plantar fascia stretch pulls the toes back to load the fascia directly under the arch. The two are connected through the heel bone but respond to different positions.',
        'A tight calf is a risk factor for plantar fasciitis on its own. In a case-control study of 50 people with plantar fasciitis and 100 controls, reduced ankle dorsiflexion, how far the foot bends up toward the shin, was the strongest independent risk factor. That is why the guideline recommends both stretches, not one or the other.',
        'For the deeper calf muscle, the soleus, the stretch changes: you bend the back knee to shift the load from the gastrocnemius to the soleus. That is a separate exercise. See [soleus stretch](/exercises/soleus-stretch/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'What are the common mistakes with the plantar fascia stretch?',
      paragraphs: [
        {
          list: [
            '**Pulling the toes too hard.** The stretch should feel firm under the arch, not painful. If you are wincing, you are past the useful range. Ease back until you feel a pull without a sharp edge.',
            '**Feeling it in the calf instead of the arch.** If the stretch is mostly in the calf, the knee is too straight or the pull is too aggressive. Cross the foot higher on the opposite knee so the ankle relaxes, and focus on the toes bending back rather than the whole foot.',
            '**Skipping the morning stretch.** This is the single session that has the most effect on the worst moment of the day. Keep a note on the nightstand or set a reminder. The stretch takes about two minutes, and it is worth doing before the foot hits the floor.',
            '**Bouncing.** Hold still for the full 10 seconds. Bouncing does not give the fascia time to lengthen and can irritate the tissue further.',
          ],
        },
      ],
    },
    {
      h2: 'Easier and harder versions',
      paragraphs: [
        'If crossing the leg is uncomfortable, keep both feet on the floor and use a towel or belt looped around the ball of the foot. Pull the towel toward you so the toes bend back. The stretch is the same, just from a different angle.',
        'A harder version is a standing plantar fascia stretch: place the ball of the foot against a wall with the heel on the ground and lean in gently. This adds bodyweight into the stretch and is harder to dose precisely. It works once the seated version feels easy and does not provoke pain.',
        '**The seated version from the trial is the one the evidence is behind.** Start there. The full set of stretches and strength exercises for heel pain is in [plantar fasciitis exercises](/plantar-fasciitis-exercises/). For rolling the sole after a stretch session, see [foot roll](/exercises/foot-roll/).',
      ],
    },
  ],
  faq: [
    {
      q: 'How long should you hold a plantar fascia stretch?',
      cites: [CITE.digiovanni2003],
      a: 'The trial that tested this stretch used 10-second holds, repeated 10 times, at least three times a day (DiGiovanni 2003). That means each session is about two minutes. Walkito starts at 10 holds of 10 seconds per foot. Holding longer is not necessarily better. Consistency through the day matters more than a single long hold.',
    },
    {
      q: 'Should you stretch plantar fasciitis before getting out of bed?',
      cites: [CITE.digiovanni2003, CITE.guideline],
      a: 'Yes. Before the first step of the day is the most important time. The plantar fascia shortens overnight, and the first steps pull it sharply. Stretching it while still seated on the bed reduces that jolt. Both the trial and the 2023 guideline single this out as the key timing.',
    },
    {
      q: 'Can stretching make plantar fasciitis worse?',
      cites: [CITE.digiovanni2006],
      a: 'In the DiGiovanni trial, stretching improved outcomes, not worsened them. If a stretch pushes pain past 6/10, ease off. Too much force or bouncing can irritate the tissue. The stretch should feel firm under the arch, never sharp. If stretching consistently makes pain worse, see a clinician before continuing.',
    },
    {
      q: 'Is the plantar fascia stretch or the calf stretch better for plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'The 2023 heel pain guideline grades both plantar fascia stretching and calf stretching A, its top grade, and recommends both. The plantar fascia stretch targets the arch directly. Calf stretches target a tight calf, which is a separate risk factor. Doing both covers more ground than choosing one.',
    },
    {
      q: 'How many times a day should you stretch for plantar fasciitis?',
      cites: [CITE.digiovanni2003],
      a: 'The DiGiovanni trial asked participants to stretch three times a day: before the first step in the morning, before standing after prolonged sitting, and at least one more time. Each session was 10 holds of 10 seconds. More sessions were encouraged if practical.',
    },
  ],
  redFlags: {
    h2: 'Stop and see a clinician if',
    bullets: [
      'pain is sharp enough that you cannot put weight on the foot',
      'the pain followed an injury, a fall or a sudden pop in the arch',
      'it comes with numbness, tingling or burning, which can point to nerve entrapment',
      'the heel is red, warm or swollen',
      'it wakes you at night or is present at rest',
      'stretching consistently makes the pain worse rather than better',
      'it has not improved after several weeks of daily stretching and lighter load',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito schedules the plantar fascia stretch on most sessions and prompts it before your first step each morning. You do not need to remember the timing or the count. The app builds a plan one week at a time, starting with stretching and adding strength work once pain settles.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Plantar fascia stretch',
  campaign: 'ex-plantar-fascia-stretch',
};
