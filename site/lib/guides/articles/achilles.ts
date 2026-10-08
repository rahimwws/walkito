import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const ACHILLES_EN: Guide = {
  lang: 'en',
  page: 'achilles',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-04',
  updated: '2026-10-04',
  title: 'Achilles Tendonitis Exercises: Eccentric Drops & More',
  description:
    'Achilles tendonitis exercises with doses: eccentric heel drops, heavy slow resistance, insertional vs. mid-portion differences, and when to stop.',
  h1: 'Achilles tendonitis exercises: eccentric heel drops, doses and what the research says',
  lede:
    'Achilles tendonitis exercises work best when the heel drop is understood as strength training, not a stretch. The 2024 clinical guideline gives exercise its top grade, **A**, and a 2021 network meta-analysis of 29 trials found no single protocol clearly better than another. What matters is loading the tendon steadily for weeks.',
  intro: [
    'This page is the deep dive on those exercises. If your pain is under the foot rather than at the back of the heel, you are looking for [plantar fasciitis exercises](/plantar-fasciitis-exercises/) instead. The [heel pain for runners](/heel-pain-runners/) page covers both at a summary level. If the pain is along the shin instead of the heel, see [shin splints exercises](/shin-splints-exercises/); if it only shows up after a long day on your feet rather than running, see [feet hurt from standing all day](/feet-hurt-standing-all-day/). "Tendonitis" and "tendinopathy" are used interchangeably by most people. Current guidelines use "tendinopathy" because the problem is usually a loading issue, not pure inflammation. This page uses "tendonitis" in headings and "tendinopathy" where the guideline does.',
  ],
  takeaways: [
    'The 2024 clinical guideline grades exercise (any tendon-loading type) **A**, its top grade, for midportion Achilles tendinopathy (Chimenti and colleagues, 2024).',
    'A network meta-analysis of 29 RCTs found no clinically relevant difference between exercise approaches at 3 or 12 months (van der Vlist and colleagues, 2021).',
    'In a trial of 58 people, heavy slow resistance 3 days a week produced equally good results compared to twice-daily eccentrics (Beyer and colleagues, 2015).',
    'For insertional Achilles pain (right at the heel bone), heel drops should stay at floor level rather than dropping below the step edge, because deep dorsiflexion, bending the ankle so the toes come up toward the shin, compresses the tendon against the bone (Jonsson and colleagues, 2008).',
    'Pain during loading up to about 5/10, settling by the next morning and not worsening week over week, was the rule tested in one RCT that allowed continued sport during rehab (Silbernagel and colleagues, 2007).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is it tendonitis or tendinopathy, and does it change the exercises?',
      paragraphs: [
        '"Tendonitis" suggests inflammation. "Tendinopathy" describes a tendon that has changed under load, often thickened, without inflammation being the main driver. The 2024 guideline uses "tendinopathy." For the exercises, the name does not change what you do. Both describe the same problem: a tendon that hurts with loading, usually a few centimeters above the heel bone (mid-portion) or right where it attaches (insertional).',
        'Where it hurts on the tendon does change the exercises. That split is covered below.',
      ],
      cites: [CITE.achillesGuideline],
    },
    {
      h2: 'What is the eccentric heel drop, and why is it not a stretch?',
      paragraphs: [
        'The eccentric heel drop is a strength exercise, not a flexibility stretch. You rise on both feet, shift to the painful side, and lower slowly on one foot, letting the heel sink below the step edge. The lowering phase is the eccentric contraction: the calf muscle lengthening under load. That controlled descent is what builds tendon capacity over weeks.',
        'The most common mistake is holding the bottom position like a calf stretch. That turns it into a static stretch, which is a different stimulus. The point is the slow, loaded descent. Three seconds down, with the muscle working the whole way.',
        'The 1998 Alfredson trial had 15 athletes with long-standing mid-tendon Achilles pain do eccentric heel drops twice a day, 7 days a week, for three months, straight and bent knee. All 15 returned to their prior running level. A small trial with no control group, but it launched a whole line of research.',
      ],
      exercises: [
        {
          name: 'Eccentric heel drops (straight knee)',
          evidence: { level: 'strong', why: 'The original Alfredson protocol; supported by the 2024 guideline grading exercise A.' },
          dose: 'Alfredson: 3 x 15, twice daily, three months. Walkito: 3 x 10, each leg',
          how: 'Stand on a step edge. Rise on both feet, shift to the painful leg, lower slowly over three seconds. Heel sinks below the step. Both feet to come back up. Straight knee targets the gastrocnemius, the bigger outer calf muscle.',
          often: 'Twice daily in the Alfredson protocol. Walkito: strength days.',
          feel: 'Hard work in the calf during the lowering, not a stretch at the bottom',
          stop: 'Pain above 5/10 that does not settle by the next morning, or pain worsening week over week',
          media: 'heel_drop_straight',
          caption: 'Eccentric heel drop: up on both feet, down slowly on one, heel below the step',
          alt: 'A figure on a step lowering one heel below the step edge with a straight knee, the calf and Achilles highlighted',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'Does heavy slow resistance work as well as eccentric drops?',
      keyFact: 'A 2015 trial of 58 people found that heavy slow resistance three days a week gave lasting results as good as the classic twice-daily eccentric protocol (Beyer and colleagues, 2015).',
      paragraphs: [
        'Yes, based on current evidence. A 2015 trial of 58 people compared heavy slow resistance (HSR), done 3 days a week, against the classic twice-daily eccentric protocol. The conclusion: "Both traditional ECC and HSR yield positive, equally good, lasting clinical results in patients with Achilles tendinopathy."',
        'A 2021 network meta-analysis of 29 trials found no clinically relevant difference between any active exercise approach at 3 or 12 months. All were better than doing nothing. No trial was at low risk of bias. The authors recommended starting with a calf-muscle exercise program because it is low-cost and has few harms.',
        'The protocol shape matters less than loading the tendon consistently. Eccentric drops are the most studied, HSR is equally effective and requires fewer weekly sessions, and both are valid starting points. For the plantar fasciitis version of this same calf-strengthening logic, see [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
    {
      h2: 'Which exercises help Achilles tendonitis, and how much should you do?',
      paragraphs: [
        'The exercises below progress from low-load to high-load, starting with seated heel raises and working up through the ladder. These are Walkito\'s starting doses alongside the research protocols. [How these guides are written](/about/).',
        'For insertional Achilles pain, every exercise that uses a step should be done at floor level instead. That modification is explained in the insertional section below.',
      ],
      table: {
        caption: 'Achilles tendonitis exercises: research doses and Walkito starting doses',
        head: ['Exercise', 'Research protocol dose', 'Walkito starting dose', 'Evidence'],
        rows: [
          ['Seated heel raises', 'Silbernagel Phase 1: 3 x 10, sitting', '3 x 10, both feet', '**Strong**: matches the published Phase 1 protocol'],
          ['Double-leg heel raises', 'Silbernagel Phase 1: 3 x 10-15, standing', '3 x 10, both feet', '**Strong**: direct match to Phase 1'],
          ['Heel raise hold (isometric)', '2024 guideline names isometric as effective; 3-5 x 30-45s suggested in practice', '3 x 20s, both feet', '**Moderate**: guideline includes isometric loading; no isolated Achilles isometric-only RCT'],
          ['Eccentric heel drops (straight knee)', 'Alfredson: 3 x 15, 2x/day, 7 days/week, three months', '3 x 10, each leg', '**Strong**: the original protocol; guideline grade A'],
          ['Calf stretch (straight knee)', 'Not part of loading trials; a mobility adjunct', '3 x 30s hold, each leg', '**Early**: framed as mobility, not as a loading exercise for Achilles'],
          ['Soleus stretch (bent knee)', 'Not part of loading trials; a mobility adjunct', '3 x 30s hold, each leg', '**Early**: same caveat; avoid deep stretching for insertional pain'],
        ],
      },
      exercises: [
        {
          name: 'Seated heel raises',
          evidence: { level: 'strong', why: 'Matches Silbernagel 2007 Phase 1 dose. Guideline grade A covers all tendon-loading types.' },
          dose: '3 sets of 10, both feet',
          how: 'Sit with feet flat. Press up through the balls of both feet. Hands on the knees add resistance. A low-load way to start when standing work is too painful.',
          often: 'Strength days, while this is your level',
          feel: 'Work in the calves, minimal stretch on the tendon',
          stop: 'Pain above 5/10 that does not settle by the next morning',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet, hands add load',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Double-leg heel raises',
          evidence: { level: 'strong', why: 'Direct match to Silbernagel 2007 Phase 1. Guideline grade A.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, lower slowly over three seconds. Both feet share the load.',
          often: 'Strength days, once seated raises feel easy',
          feel: 'The calves working together, with a mild pull at the tendon',
          stop: 'Pain above 5/10 that does not settle by the next morning',
          media: 'heel_raise_double',
          caption: 'Double-leg heel raises: rise straight up, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raise hold (isometric)',
          evidence: { level: 'moderate', why: 'The 2024 guideline names isometric as one of the effective tendon-loading types. No isolated Achilles isometric RCT.' },
          dose: '3 holds of 20 seconds, both feet (research: 3-5 x 30-45 seconds)',
          how: 'Rise onto your toes on both feet, hold still at the top. Do not sink down. This is an isometric hold, meaning the muscle works without moving, which loads the tendon without the up-and-down motion that early-stage Achilles pain can find provocative.',
          often: 'Can be used daily in early, irritable stages before moving to full eccentric work',
          feel: 'The calves working to stay still, a dull ache in the tendon is acceptable',
          stop: 'Pain above 5/10 that does not settle by the next morning',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on both feet, the calves highlighted',
        },
        {
          name: 'Eccentric heel drops (straight knee)',
          evidence: { level: 'strong', why: 'The original Alfredson 1998 protocol. 2024 guideline grade A.' },
          dose: 'Alfredson: 3 x 15, twice daily. Walkito: 3 x 10, each leg',
          how: 'Stand on a step edge. Rise on both feet, shift to the painful leg, lower slowly with a straight knee. Heel sinks below the step. Both feet to return to the top.',
          often: 'Twice daily in the original protocol. Walkito: strength days.',
          feel: 'Hard work in the calf during the lowering phase',
          stop: 'Pain above 5/10 that does not settle by the next morning',
          media: 'heel_drop_straight',
          caption: 'Eccentric heel drop: up on both, down slowly on one, straight knee',
          alt: 'A figure on a step lowering one heel below the edge with a straight knee, the Achilles tendon highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'early', why: 'Not part of the Achilles loading trials. A mobility adjunct. Avoid deep stretching for insertional pain.' },
          dose: '3 sets of 30-second holds, each leg',
          how: 'Hands on a wall. Back leg straight, heel down, hips forward. Do not bounce. For insertional pain, keep it gentle and stop if it provokes the attachment.',
          often: 'After loaded sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Any sharp pull at the heel-bone attachment',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'early', why: 'Not part of the Achilles loading trials. A mobility adjunct. Avoid deep dorsiflexion for insertional pain.' },
          dose: '3 sets of 30-second holds, each leg',
          how: 'Same wall position, bend the back knee until the stretch moves lower, near the heel. The soleus only releases with the knee bent.',
          often: 'After loaded sessions',
          feel: 'A stretch near the heel',
          stop: 'Any sharp pull at the Achilles attachment',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
      ],
      cites: [CITE.alfredson, CITE.silbernagel, CITE.achillesGuideline],
    },
    {
      h2: 'How much pain is okay during Achilles exercises?',
      keyFact: 'In a trial of 38 people, those who kept running with pain held to about 5 out of 10 and settled by morning improved as much at twelve months as those who rested first (Silbernagel and colleagues, 2007).',
      paragraphs: [
        'In Silbernagel 2007, 38 people with Achilles pain were split into two groups. One continued running and jumping during rehab, guided by the rule that pain during and after loading could go up to about **5 out of 10**, as long as it returned to its usual level by the next morning and did not worsen week over week. The other group rested first. Both improved significantly at 12 months, with no difference between them.',
        'This is a different threshold from the 6/10 stop rule on the [plantar fasciitis](/plantar-fasciitis-exercises/) page, which comes from a different guideline. The 5/10 figure is from one study, not a universal standard, but it is the most cited pain model in Achilles rehab.',
        'Some discomfort during loading is expected and was acceptable in the trial. Pain that does not settle overnight, worsens week to week, or arrives as a sudden sharp episode is not.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Is your pain mid-tendon or at the heel bone, and why it changes the exercise?',
      keyFact: 'In a pilot study of 27 people with insertional Achilles pain, floor-level-only eccentric loading that avoided deep dorsiflexion gave good results in 67% of cases (Jonsson and colleagues, 2008).',
      paragraphs: [
        'Mid-portion Achilles tendinopathy sits in the body of the tendon, typically 2 to 6 centimeters above the heel bone. Standard eccentric drops and heavy slow resistance have their best evidence here. Heel drops over a step edge are appropriate for mid-portion pain.',
        'Insertional Achilles tendinopathy is pain right at the tendon-bone attachment. In a 2008 pilot study of 27 people (34 tendons) with chronic insertional pain, a modified protocol using floor-level-only eccentric loading, with no dorsiflexion past neutral, reported good results in 67 percent of cases. Deep dorsiflexion compresses the tendon against the heel bone, which irritates the insertion.',
        'If your pain is at the back of the heel bone rather than higher in the tendon, do all heel raises and heel drops at floor level. Do not drop below the step edge. Avoid aggressive stretching for the same reason. This is the most important modification in Achilles programs, and the one most commonly missed.',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'How many single-leg calf raises should you be able to do?',
      paragraphs: [
        'The 2024 guideline names the single-leg heel-rise endurance test as part of the recommended way to measure calf strength and track recovery. A normative study of 566 healthy adults puts a typical count at about 25 repetitions, adjusted for age, sex and activity level. What matters is the trend over time and the difference between your two sides.',
        'The calf goal in the app is 25 single-leg calf raises. The test runs every 14 days while the calf goal is active, then every 28 days. A gap between legs is also tracked, since a persistent side-to-side difference can point to incomplete recovery.',
      ],
      cites: [CITE.hebertLosier, CITE.achillesGuideline],
    },
    {
      h2: 'Can you keep running while doing Achilles rehab?',
      paragraphs: [
        'In Silbernagel 2007, patients who continued running during rehab under the pain-monitoring model did not do worse than those who rested first. Both groups improved at 12 months. The trial concluded that continued, pain-monitored activity "might therefore represent a valuable option" during rehab.',
        'This does not mean running is harmless in every case. If pain does not settle overnight, or if each week is worse, back off. Pain at the heel-bone attachment needs more caution than mid-tendon pain. Any sudden pop or snap is a reason to stop and see a clinician.',
        'The [heel pain for runners](/heel-pain-runners/) page covers running-specific load management in more detail.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'How long does it take for Achilles exercises to help?',
      paragraphs: [
        'Recovery from Achilles tendinopathy is measured in months. The core loading trials ran programs for about three months and tracked outcomes to 12 months. The 2024 guideline notes functional improvement can appear by 2 weeks, but fuller recovery extends well beyond that.',
        'No trial promises a fixed timeline. Some people respond faster, some slower, and insertional cases tend to take longer than mid-portion. Consistent loading over time is the common thread.',
      ],
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer, CITE.silbernagel],
    },
  ],
  faq: [
    {
      q: 'What is the difference between Achilles tendonitis and tendinopathy?',
      cites: [CITE.achillesGuideline],
      a: '"Tendonitis" implies inflammation, while most chronic Achilles pain is a loading issue rather than a primarily inflammatory one. The 2024 guideline uses "tendinopathy." For exercise purposes, the name does not change what you do. The exercises on this page apply to both terms.',
    },
    {
      q: 'What are eccentric heel drops for Achilles tendonitis?',
      cites: [CITE.alfredson],
      a: 'Eccentric heel drops are a strength exercise: rise on both feet, lower slowly on one, heel sinking below a step edge. The lowering phase is the focus. In a 1998 trial, 15 athletes doing this twice daily for three months all returned to their prior running level. Later research shows other loading styles work equally well.',
    },
    {
      q: 'Is heavy slow resistance as good as eccentric heel drops?',
      cites: [CITE.beyer, CITE.vanDerVlist],
      a: 'A 2015 trial of 58 people concluded both yield "positive, equally good, lasting clinical results." A 2021 meta-analysis of 29 trials found no clinically relevant difference between active exercise types at 3 or 12 months. What matters is consistent loading, not the specific protocol.',
    },
    {
      q: 'How much pain is okay during Achilles exercises?',
      cites: [CITE.silbernagel],
      a: 'One trial allowed pain up to about 5/10 during loading, provided it settled by the next morning and did not worsen week to week. Patients under that model did as well as those who rested first (Silbernagel 2007). Pain that stays elevated overnight or worsens weekly is the signal to back off.',
    },
    {
      q: 'Are insertional Achilles exercises different?',
      cites: [CITE.jonsson],
      a: 'Yes. The standard deep heel-drop protocol had poor results for pain at the heel-bone attachment. A 2008 pilot study tested floor-level-only eccentric loading, no dorsiflexion past neutral, and reported good results in 67 percent of 27 patients. Deep drops and aggressive stretching should be avoided for insertional pain.',
    },
    {
      q: 'Should I stretch a painful Achilles tendon?',
      cites: [CITE.alfredson, CITE.silbernagel, CITE.beyer],
      a: 'Stretching is not the primary exercise for Achilles tendinopathy. The trials on this page are all loading protocols (heel raises and drops), not stretching programs. Gentle calf mobility work can follow loaded sessions, but aggressive stretching can flare symptoms, especially insertional pain where dorsiflexion compresses the attachment.',
    },
    {
      q: 'How long do Achilles tendonitis exercises take to work?',
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer],
      a: 'Recovery is measured in months. The core trials ran loading programs for about three months, tracking results to 12 months. The 2024 guideline notes functional improvement can begin by 2 weeks, but fuller recovery extends well beyond. No trial promises a fixed timeline.',
    },
    {
      q: 'What should you not do with Achilles tendonitis?',
      cites: [CITE.jonsson, CITE.silbernagel],
      a: 'Avoid sudden increases in running volume or sprint intensity, deep calf stretching if your pain is at the heel-bone attachment, and pushing through pain that stays elevated the next morning or worsens week to week. A sudden pop or snap needs a clinician right away. Complete rest is not required either; pain-monitored activity is usually a better option than stopping completely.',
    },
    {
      q: 'Will walking aggravate Achilles tendonitis?',
      cites: [CITE.silbernagel],
      a: 'Usually not. Walking is lower-impact than running, and many people with Achilles tendinopathy can keep walking without a flare. Watch for pain that stays elevated the next morning or gets worse week to week; that is the signal to cut back distance or pace, not to stop moving altogether. Steep hills and fast walking on hard surfaces are more likely to irritate it.',
    },
    {
      q: 'What is mistaken for Achilles tendonitis?',
      cites: [CITE.chooRearfoot],
      a: "Retrocalcaneal bursitis, Haglund's deformity, and a partial Achilles tear can all cause similar pain at the back of the heel. A visible bony bump points toward Haglund's deformity, while swelling right at the back of the shoe line suggests bursitis. Any sudden sharp pain with a pop, or an inability to rise on the toes, needs urgent assessment for a tendon tear.",
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you felt a sudden pop, snap or a sensation of being kicked in the back of the leg, especially with immediate difficulty pushing off or walking on the toes. This can indicate an Achilles tendon rupture',
      'you are currently taking or have recently taken a fluoroquinolone antibiotic (such as ciprofloxacin or levofloxacin) and have new or worsening tendon pain. These drugs carry an FDA boxed warning for tendinitis and tendon rupture',
      'pain and swelling came on suddenly with fever, redness or warmth over the tendon',
      'there is significant swelling, bruising or a palpable gap in the tendon',
      'pain is right at the heel-bone attachment and gets worse with stretching or deep heel drops, not better. This points to insertional tendinopathy needing a modified approach or a clinician\'s input',
      'pain or stiffness is getting steadily worse over weeks despite consistent loading',
      'pain is present at rest or wakes you at night',
      'you cannot put weight on the foot or you are limping',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You don\'t have to guess the order, the doses or when to add load. Walkito builds a plan one week at a time around one goal. The calf chain runs from seated raises through double-leg raises, a hold, towel raises, eccentric heel drops and pogo hops. Each step opens once two sessions at the current level felt easy.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the calf goal is reached), a test checks calf endurance and balance. Walkito is an exercise program. It does not diagnose. If pain is right at the heel-bone attachment, have a clinician check it before you load it hard.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Achilles tendonitis exercises',
  campaign: 'guide-achilles',
};
