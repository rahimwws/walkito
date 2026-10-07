import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations ──────────────────────────────────────────────────────
 *
 * Uses only existing CITE keys (guideline, rathleff, riddle, siriphorn,
 * digiovanni2003, digiovanni2006, patelGastrocnemius, hebertLosier, latt)
 * plus the two new keys introduced in pf-vs-heel-spur.ts:
 *
 * menzSpur
 *   Menz HB, Zammit GV, Landorf KB, Munteanu SE. Plantar calcaneal spurs
 *   in older people: longitudinal traction or vertical compression? Journal
 *   of Foot and Ankle Research. 2008;1(1):7.
 *   doi: 10.1186/1757-1146-1-7 | PMID: 18822162 | cross-sectional study
 *
 * menzCoexistence
 *   Menz HB, Thomas MJ, Marshall M, et al. Coexistence of plantar calcaneal
 *   spurs and plantar fascial thickening in individuals with plantar heel
 *   pain. Rheumatology (Oxford). 2019;58(2):237-245.
 *   doi: 10.1093/rheumatology/key266 | PMID: 30204912 | cross-sectional
 *   observational study
 *
 * (Both already listed in pf-vs-heel-spur.ts; no additional new citations
 * needed for this file.)
 */

export const HEEL_SPUR_EXERCISES_EN: Guide = {
  lang: 'en',
  page: 'heelSpurExercises',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Heel Spur Exercises and Stretches for Pain Relief',
  description:
    'Heel spur exercises and stretches for the plantar fascia and calf: the routine, doses, and progression that ease pain without dissolving the spur.',
  h1: 'Heel spur exercises: stretches and strengthening for the pain around a spur',
  lede:
    'Exercise does not dissolve a heel spur. The spur is bone, and bone does not shrink from stretching. But the pain people feel when they have a heel spur almost always comes from the plantar fascia and calf around it, not from the bone itself. The exercises below target those soft tissues. They are the same ones the 2023 heel pain guideline recommends for plantar fasciitis.',
  intro: [
    'If you want to understand the difference between a heel spur and plantar fasciitis first, see [plantar fasciitis vs heel spur](/plantar-fasciitis-vs-heel-spur/). This page is the practical routine: which exercises, how many, how to progress, and when to stop.',
  ],
  takeaways: [
    'Heel spur exercises work by addressing the plantar fascia and calf muscles around the spur, not by changing the spur itself.',
    'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, **A**, and strength training a **B** (Koc and colleagues, 2023).',
    'In a trial of 48 people with plantar fasciitis, heavy heel raises with a towel under the toes eased pain faster than stretching alone at three months, though by twelve months both groups were even (Rathleff and colleagues, 2015).',
    'A tight calf, measured as reduced ankle dorsiflexion, was the strongest independent risk factor for plantar fasciitis in a matched case-control study of 50 cases and 100 controls (Riddle and colleagues, 2003).',
    'A systematic review and meta-analysis found that both calf stretching and plantar fascia stretching reduced pain compared with no stretching, with plantar fascia stretching showing a slight edge (Siriphorn and Eksakulkla, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Why do exercises help a heel spur?',
      paragraphs: [
        'The heel spur is a bony growth on the underside of the heel bone. In a cross-sectional study of 560 people with foot pain, plantar calcaneal spurs were not independently associated with plantar heel pain once plantar fascia thickening was accounted for (Menz and colleagues, 2019). The pain comes from the soft tissue, and that is what exercise can reach.',
        'Stretching the plantar fascia and the calf reduces the tension on the heel attachment. Strengthening the calf builds the capacity of the chain that absorbs load every time the heel strikes the ground. Together, they lower the daily stress on the tissue around the spur.',
        'No exercise program will make a spur disappear on X-ray. But most people with a heel spur do not need the spur to disappear. They need the pain to settle, and that comes from the fascia and the calf getting stronger and more flexible.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
    {
      h2: 'The stretches',
      paragraphs: [
        'Stretching is the starting point. The 2023 guideline grades plantar fascia and calf stretching **A**, its top grade. A systematic review and meta-analysis of stretching for plantar fasciitis found that both calf stretching and plantar fascia stretching reduced pain compared with no stretching (Siriphorn and Eksakulkla, 2020). Start with these three.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'Guideline grade A. A 2003 trial of 101 people found this stretch more effective than calf stretching alone at 8 weeks.' },
          dose: '10 holds of 10 seconds, each foot',
          how: 'Sit and cross one ankle over the other knee. Pull the toes back gently until you feel a stretch along the arch. Hold, then release. Do this before your first step each morning and after long periods of sitting.',
          often: 'Every morning and after sitting',
          feel: 'A stretch along the arch, not sharp pain',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently before standing',
          alt: 'A seated figure pulling the toes back to stretch the arch, the plantar fascia highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Guideline grade A. A tight gastrocnemius was the strongest risk factor for plantar fasciitis in a 2003 case-control study.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Back leg straight, heel on the floor, hips forward. Hold until you feel the stretch in the upper calf. The gastrocnemius, the bigger outer calf muscle, only stretches with the knee straight.',
          often: 'Most sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'strong', why: 'Guideline grade A. Targets the soleus, the deeper calf muscle that only releases with the knee bent.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same wall position as the calf stretch, then bend the back knee until you feel the stretch shift lower, near the heel. The soleus sits underneath the gastrocnemius and attaches closer to the heel.',
          often: 'Most sessions, after the straight-knee stretch',
          feel: 'A stretch lower in the calf, near the heel',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.digiovanni2003, CITE.riddle],
    },
    {
      h2: 'The strengthening exercises',
      paragraphs: [
        'Stretching alone is often enough in the first few weeks. Once the morning pain starts settling, adding calf strengthening builds the capacity the heel chain needs. The guideline grades strength training **B**, its second-highest grade. In the only trial built to test heel raises for plantar fasciitis, 48 people were split into a loaded heel-raise group and a stretching-only group. The heel-raise group scored 29 points better on the Foot Function Index at three months (Rathleff and colleagues, 2015).',
        'Start at the easiest level and move up only when it feels easy for two sessions in a row. The progression below runs from seated work to the loaded towel raise from the trial.',
      ],
      exercises: [
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'Guideline grade B covers strength work generally. This low-load entry step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          how: 'Sit with your feet flat on the floor. Press up through the balls of both feet. Hands on the knees add gentle resistance. This is the lowest-load way to start working the calf.',
          often: 'Strength days',
          feel: 'Easy work in the calves, almost no load on the heel',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'Guideline grade B. A stepping stone to single-leg loaded work.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load. Hold a wall or rail for balance.',
          often: 'Strength days, once seated raises feel easy for two sessions',
          feel: 'The calves working together',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Double-leg heel raises: rise up, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raise hold (isometric)',
          evidence: { level: 'moderate', why: 'Guideline grade B. Isometric hold at end-range. Not tested in an isolated plantar fasciitis trial.' },
          dose: '3 holds of 20 seconds, both feet',
          how: 'Rise onto your toes on both feet, then hold still at the top. Do not sink back down. Holding loads the tendon without the bounce of a full rep.',
          often: 'Strength days, the step after double-leg raises',
          feel: 'The calves working to stay still',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on both feet, the calves highlighted',
        },
        {
          name: 'Heel raises with a towel (single-leg)',
          evidence: { level: 'strong', why: 'The exercise from the Rathleff 2015 RCT. Guideline grade B.' },
          dose: 'Research protocol: 3 sets of 12RM, progressing to 5 sets of 8RM. Walkito starts at 3 sets of 12, each leg',
          how: 'Stand on one foot on the edge of a step, rolled towel under all five toes. Three seconds up, two-second hold, three seconds down. The towel engages the windlass mechanism, loading the plantar fascia along with the calf. Add weight with a backpack when the last rep stops being hard.',
          often: 'Every other day in the trial. Walkito schedules it on strength days, never two in a row.',
          feel: 'Hard work in the calf and a pull under the arch',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_towel',
          caption: 'Towel calf raise: three seconds up, hold at the top, three seconds down',
          alt: 'A figure on a step rising onto the toes with a rolled towel under the foot',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'How to progress through the exercises',
      paragraphs: [
        'Progress by feel, not by calendar. The rule is: if the current level felt easy for two sessions in a row, move up one step. If morning pain is worse after a session, stay at the current level or step back.',
      ],
      table: {
        caption: 'Heel spur exercise progression',
        head: ['Level', 'Exercise', 'When to move up'],
        rows: [
          ['1', 'Plantar fascia stretch + calf stretches only', 'Morning pain is settling, you want to add strength work'],
          ['2', 'Seated heel raises (3 x 10)', 'Easy for two sessions in a row'],
          ['3', 'Double-leg heel raises (3 x 10)', 'Easy for two sessions in a row'],
          ['4', 'Heel raise hold (3 x 20 seconds)', 'Easy for two sessions in a row'],
          ['5', 'Towel heel raise, single-leg (3 x 12)', 'Progress load with a backpack once bodyweight is easy'],
        ],
      },
      after: [
        'Add the plantar fascia stretch and calf stretches at every level. Stretching is not something you drop when you start strengthening. The guideline grades both independently.',
        'For more detail on the towel heel raise protocol and the research behind it, see [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Optional supporting exercises',
      paragraphs: [
        'The stretches and heel raises above are the core. The following exercises are not specific to heel spurs, but they target the foot and ankle muscles that support the arch and absorb shock. The evidence behind each is thinner.',
      ],
      exercises: [
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. A comfort measure between sessions.' },
          dose: '2 minutes, each foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball or frozen water bottle. Keep the pressure firm but not enough to make you wince. Rolling after a long day on your feet can settle the tissue.',
          often: 'Recovery days or after a long day',
          feel: 'Firm pressure under the foot, never sharp pain',
          stop: 'Pain reaches 6/10',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball',
        },
        {
          name: 'Short foot, seated',
          evidence: { level: 'early', why: 'A 2024 review found short-foot training changed arch shape but not pain. Part of a program that improved arch measures in a 2023 trial.' },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts. Do not curl the toes. This trains the small muscle inside the arch.',
          often: 'Strength days',
          feel: 'The arch lifting, toes relaxed',
          stop: 'Pain reaches 6/10',
          media: 'short_foot_seated',
          caption: 'Short foot: pull the ball of the foot toward the heel',
          alt: 'A seated leg with the foot on the floor, the arch highlighted as it lifts',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'early', why: 'No heel-spur-specific study. General balance work for the foot and ankle.' },
          dose: '3 holds of 30 seconds, each leg',
          how: 'Stand on one foot and look at one fixed spot. Let the foot wobble. The wobble is the foot doing the balancing. Stand near a wall for safety.',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          stop: 'Pain reaches 6/10',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
      ],
      cites: [CITE.cheng, CITE.brijwasi],
    },
    {
      h2: 'What should the exercises feel like, and when should you stop?',
      paragraphs: [
        'Stretching should feel like a pull, not a stab. A calf stretch that produces a comfortable tension in the upper or lower calf is on target. A plantar fascia stretch that pulls gently along the arch is on target. If stretching reproduces the sharp pain you feel on first steps, ease off.',
        'Heel raises should feel like calf work. The towel version will also produce a pull under the arch, which is the fascia loading. That pull is expected and is the point of the towel.',
        'Stop for the day if pain reaches **6/10 or more** during any exercise, or if your first steps the next morning are clearly worse than usual. That stop-and-step-down rule is what the app uses. Mild soreness that settles within a day is normal, especially in the first two weeks. Pain that stays elevated for days or gets worse week over week is a reason to step back one level or see a clinician.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How long before heel spur pain improves with exercise?',
      paragraphs: [
        'There is no trial measuring exercise outcomes specifically for people with heel spurs. The timelines below come from plantar fasciitis studies, which is the condition producing the pain around the spur in most cases.',
        'A review of the clinical evidence reports that about 90% of people with plantar fasciitis improve with non-surgical care such as stretching and shoe inserts, often within several months (Latt and colleagues, 2020). In the Rathleff 2015 trial, the loaded heel-raise group was significantly ahead of the stretching-only group by three months.',
        'No exercise program can promise a timeline for any one person. What you can measure is whether things are changing. Morning pain on a 0 to 10 scale, taken before your first step, is the clearest day-to-day signal. Calf endurance, measured by how many single-leg heel raises you can do, tracks strength over weeks. Both are more useful than guessing.',
      ],
      cites: [CITE.latt, CITE.rathleff],
    },
    {
      h2: 'Can you get rid of a heel spur naturally?',
      paragraphs: [
        'Exercise, stretching and dietary changes do not dissolve a heel spur. The spur is calcified bone. It stays on the X-ray whether you stretch or not.',
        'But "getting rid of the spur" is rarely the right goal. In the 2019 coexistence study, the spur was not independently associated with pain once the fascia was accounted for. The pain comes from the soft tissue. The exercises on this page target the soft tissue. If the pain settles, the spur is not a problem that needs solving.',
        'If someone has promised you a supplement, cream or device that dissolves heel spurs, be skeptical. No published evidence supports that claim. The guideline-recommended approach is stretching, calf strengthening and load management.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'What exercises help heel spur pain?',
      cites: [CITE.guideline],
      a: 'The exercises that help heel spur pain are the same ones the 2023 heel pain guideline recommends for plantar fasciitis: plantar fascia stretching (guideline grade A), calf stretching (grade A) and gradual calf strengthening through heel raises (grade B). They target the plantar fascia and calf muscles around the spur, which are usually what produces the pain.',
    },
    {
      q: 'Do heel spur exercises dissolve the spur?',
      a: 'No. A heel spur is calcified bone and exercise does not dissolve it. The exercises address the plantar fascia and calf, the soft tissues around the spur that are almost always the source of the pain. If the pain settles with exercise, the spur on the X-ray is not a problem that needs solving.',
    },
    {
      q: 'How often should I do heel spur stretches?',
      cites: [CITE.guideline, CITE.digiovanni2003],
      a: 'The plantar fascia stretch works best done every morning before standing and after long periods of sitting. Calf stretches fit into most sessions. In a trial of 101 people with chronic heel pain, the group doing the plantar fascia stretch reported better outcomes at 8 weeks than the group doing calf stretching alone (DiGiovanni and colleagues, 2003).',
    },
    {
      q: 'How long does it take for heel spur pain to go away?',
      cites: [CITE.latt, CITE.rathleff],
      a: 'Most timelines come from plantar fasciitis studies, since fascia irritation is usually what hurts. A review reports that about 90% of people with plantar fasciitis improve with non-surgical care, often within several months (Latt 2020). In a 48-person trial, loaded heel raises showed benefit over stretching alone by three months (Rathleff 2015). No program can promise a timeline for any one person.',
    },
    {
      q: 'Should I stop exercising if I have a heel spur?',
      cites: [CITE.guideline],
      a: 'Not necessarily. The guideline recommends exercise as part of the approach, not rest alone. Stop a specific exercise for the day if pain reaches 6 out of 10 or more, or if the next morning is clearly worse. Step back one level rather than stopping entirely. If pain gets worse week over week despite adjusting, see a clinician.',
    },
    {
      q: 'Is walking good for heel spurs?',
      cites: [CITE.guideline],
      a: 'Walking itself is not the problem. Walking in supportive shoes at a comfortable pace is usually fine and better than complete rest. The pain comes from the plantar fascia and calf under the spur, and moderate walking keeps the calf pump active. If walking makes your morning pain worse the next day, shorten the distance and build it back gradually.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'squeezing the sides of the heel reproduces the pain, which can point toward a stress fracture',
      'it comes with numbness, tingling or burning',
      'the heel is red, warm or swollen, or you have a fever',
      'both heels hurt and morning stiffness lasts more than 30 minutes, especially if other joints are involved',
      'pain keeps you awake at night or is present at rest',
      'it has not improved after several weeks of daily stretching and calf work',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not have to track the levels, the sets or when to progress. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is morning pain at or under 1 out of 10 for 14 days in a row. Stretching starts on day one. The calf chain, seated raises through to the loaded towel raise, moves at your pace.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the morning goal is met), a short test checks calf endurance, arch hold and balance. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Heel spur exercises',
  campaign: 'guide-heel-spur-exercises',
};
