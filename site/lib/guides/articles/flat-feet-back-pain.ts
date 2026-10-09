import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * kosashvili | Kosashvili Y, Fridman T, Backstein D, Safir O, Bar Ziv Y. The correlation between pes planus and anterior knee or intermittent low back pain. Foot & Ankle International. 2008;29(9):910–913. | doi: 10.3113/FAI.2008.0910 | pmid: 18778669 | retrospective study of 97,279 military recruits
 * almutairi | Almutairi AF, BaniMustafa A, Bin Saidan T, Alhizam S, Salam M. The prevalence and factors associated with low back pain among people with flat feet. International Journal of General Medicine. 2021;14:3677–3685. | doi: 10.2147/IJGM.S321653 | pmid: 34321913 | cross-sectional interview survey, n=1798
 * hornestam | Hornestam JF, Arantes PMM, Souza TR, et al. Foot pronation affects pelvic motion during the loading response phase of gait. Brazilian Journal of Physical Therapy. 2021;25(6):727–734. | doi: 10.1016/j.bjpt.2021.04.005 | pmid: 34020879 | laboratory gait experiment, n=20
 * chuterInsoles | Chuter V, Spink M, Searle A, Ho A. The effectiveness of shoe insoles for the prevention and treatment of low back pain: a systematic review and meta-analysis of randomised controlled trials. BMC Musculoskeletal Disorders. 2014;15:140. | doi: 10.1186/1471-2474-15-140 | pmid: 24775807 | systematic review and meta-analysis, 11 RCTs
 * cambronOrthotics | Cambron JA, Dexheimer JM, Duarte M, Freels S. Shoe orthotics for the treatment of chronic low back pain: a randomized controlled trial. Archives of Physical Medicine and Rehabilitation. 2017;98(9):1752–1762. | doi: 10.1016/j.apmr.2017.03.028 | pmid: 28465224 | RCT, n=225
 * castroMendez | Castro-Méndez A, Munuera PV, Albornoz-Cabello M. The short-term effect of custom-made foot orthoses in subjects with excessive foot pronation and lower back pain: a randomized, double-blinded, clinical trial. Prosthetics and Orthotics International. 2013;37(5):384–390. | doi: 10.1177/0309364612471370 | pmid: 23327838 | double-blinded RCT, n=51
 * alamPronatedLbp | Alam MF, Ansari S, Zaki S, et al. Effects of physical interventions on pain and disability in chronic low back pain with pronated feet: a systematic review and meta-analysis. Physiotherapy Theory and Practice. 2025;41(2):390–404. | doi: 10.1080/09593985.2024.2325581 | pmid: 38433468 | systematic review and meta-analysis, 4 RCTs
 * linOrthosesLbp | Lin Z, Cheng J, Hua L, Han X, Wang D, Huang Y. Effect of foot orthoses on pain and disability in patients with low back pain: a meta-analysis of randomized controlled trials. Disability and Rehabilitation. 2026;48(3):629–645. | doi: 10.1080/09638288.2025.2545590 | pmid: 40844962 | systematic review and meta-analysis, 7 RCTs
 * haydenExercise | Hayden JA, Ellis J, Ogilvie R, Malmivaara A, van Tulder MW. Exercise therapy for chronic low back pain. Cochrane Database of Systematic Reviews. 2021;9(9):CD009790. | doi: 10.1002/14651858.CD009790.pub2 | pmid: 34580864 | Cochrane systematic review, 249 RCTs
 * hartvigsen | Hartvigsen J, Hancock MJ, Kongsted A, et al. What low back pain is and why we need to pay attention. The Lancet. 2018;391(10137):2356–2367. | doi: 10.1016/S0140-6736(18)30480-X | pmid: 29573870 | narrative review (Lancet series)
 * finucaneRedFlags | Finucane LM, Downie A, Mercer C, et al. International framework for red flags for potential serious spinal pathologies. Journal of Orthopaedic & Sports Physical Therapy. 2020;50(7):350–372. | doi: 10.2519/jospt.2020.9971 | pmid: 32438853 | international consensus framework
 *
 * Reused: CITE.menz (Framingham Foot Study), CITE.brijwasi, CITE.cheng.
 */

export const FLAT_FEET_BACK_PAIN_EN: Guide = {
  lang: 'en',
  page: 'flatFeetBackPain',
  mainSource: CITE.menz,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Can Flat Feet Cause Back Pain? What Studies Show',
  description:
    'Can flat feet cause back pain? What the Framingham study and insole trials found, what helps a sore back, and which back symptoms need a clinician first.',
  h1: 'Can flat feet cause back pain? What the research shows',
  lede:
    'Flat feet are a weak explanation for most back pain. A large, carefully measured study, the Framingham Foot Study of 1,930 adults, found no link between flat foot posture and low back pain. It found a small link in women whose feet rolled inward while walking. That is an association, not proof that the feet cause the back pain.',
  intro: [
    'If your back aches and someone has blamed your flat feet, the idea makes sense at first: the feet carry you, so a lower arch must push something out of line higher up. The research is less tidy. This page covers what the studies found, what insoles and exercise can do for a back, and which back symptoms need a clinician first. For the foot side, the [flat feet guide](/flat-feet/) and [flat feet exercises](/flat-feet-exercises/) cover the arch in depth.',
  ],
  takeaways: [
    'In the Framingham Foot Study of 1,930 adults, standing flat foot posture showed no link with low back pain. Only a foot that rolled inward while walking was linked, in women, with about 1.5 times the odds (Menz and colleagues, 2013).',
    'In about 97,000 young military recruits, mild flat feet came with no more back pain than normal feet (5 percent in both). Moderate or severe flat feet came with 10 percent (Kosashvili and colleagues, 2008).',
    'A 2014 review of five insole trials for low back pain found no significant benefit. A 2017 trial of 225 adults found custom orthotics beat no care at about a month and a half, but not at three months or later.',
    'A 2021 Cochrane review of 249 trials found moderate-certainty evidence that exercise eases chronic low back pain, by about 15 points on a 100-point pain scale compared with no exercise, usual care or placebo.',
    'Back pain with loss of bladder or bowel control, numbness around the groin or buttocks, or new leg weakness needs urgent medical care, whatever your feet look like.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Can flat feet cause back pain?',
      keyFact: 'The Framingham Foot Study of 1,930 adults found no link between flat foot posture and low back pain (Menz and colleagues, 2013).',
      paragraphs: [
        'Flat feet have not been shown to cause back pain. Some studies find that people with flatter or inward-rolling feet report back pain a bit more often, and others find no link at all. None of them can show that the feet came first and the back pain followed.',
        'That gap matters because low back pain is very common and usually has no single cause. A 2018 Lancet review put it plainly: for nearly all people with low back pain, no specific source of the pain can be identified. Only a small share have a clear medical cause such as a fracture, an infection or a tumour. The people at greatest risk, according to that review, include those with physically demanding jobs, smokers, people with obesity and people with other physical or mental conditions. With that many contributors, a simple foot-to-back story is hard to prove.',
        'So the honest answer is "probably not on its own, for most people". Your back pain is worth looking at as its own problem.',
      ],
      cites: [CITE.menz, CITE.hartvigsen],
    },
    {
      h2: 'What did the Framingham Foot Study find?',
      keyFact: 'In the Framingham Foot Study, women whose feet rolled inward while walking had about 1.5 times the odds of low back pain, while standing foot posture showed no link (Menz and colleagues, 2013).',
      paragraphs: [
        'The Framingham Foot Study is one of the largest studies to measure feet directly, and it found no link between flat feet and low back pain. Researchers looked at 1,930 adults from the town of Framingham, Massachusetts, between 2002 and 2005. They measured each person\'s standing arch from a footprint and sorted feet into flat, normal or high-arched. Foot posture, flat or not, showed no association with low back pain.',
        'The study also measured foot function: how pressure moved under the foot while each person walked. A foot that rolled inward during walking is called pronated. In women, a pronated walking pattern was linked with low back pain, with about 1.5 times the odds compared with women whose feet moved normally. The link held after the researchers allowed for age, weight, smoking and depressive symptoms. In men, there was no link.',
        'Many websites report this study as "people with flat feet are 50 percent more likely to have back pain". That is not what it found. The arch shape you see when you stand did not matter. What mattered, in women only, was how the foot moved during walking. And because the study measured everyone once, it cannot say whether the foot motion led to the back pain, the back pain changed how people walked, or something else drove both.',
      ],
      sourceNote:
        'Menz 2013: cross-sectional, n = 1,930. Pronated foot function and low back pain in women, odds ratio 1.51 (95% CI 1.1 to 2.07); 1.48 (95% CI 1.07 to 2.05) after adjusting for age, weight, smoking and depressive symptoms.',
      cites: [CITE.menz],
    },
    {
      h2: 'Do people with flat feet get more back pain?',
      keyFact: 'Among 97,279 military recruits, 5 percent with mild flat feet had intermittent low back pain, the same as recruits with normal feet, against 10 percent with moderate or severe flat feet (Kosashvili and colleagues, 2008).',
      paragraphs: [
        'People with marked flat feet report back pain somewhat more often in some studies, but people with mild flat feet do not. The biggest dataset comes from 97,279 young military recruits, where an orthopedic doctor graded each recruit\'s flat feet. Sixteen percent had flat feet, and most of those (74 percent) were mild.',
        'Intermittent low back pain, meaning back pain with no findings on exam or X-ray, showed up in 5 percent of recruits with normal feet and 5 percent with mild flat feet. It was 10 percent in those with moderate or severe flat feet. So for most flat feet, the mild kind, there was no difference at all.',
        'A 2021 survey of 1,798 adults interviewed at a festival in Saudi Arabia reported much bigger numbers: 65.9 percent of people with flat feet said they had low back pain, and flat feet came with 3.3 times the odds of short-term back pain and 4.5 times the odds of long-term back pain. A survey like this looks at feet and backs at one moment, in whoever happened to stop and take part, and people said themselves whether they had flat feet. It cannot rule out other explanations, and the researchers themselves found that sex, age, job and physical activity were also linked with back pain.',
      ],
      cites: [CITE.kosashvili, CITE.almutairi],
    },
    {
      h2: 'How could flat feet affect the back?',
      keyFact: 'In a lab study of 20 people, insoles that made the feet roll inward tilted the pelvis by about half a degree on average while walking (Hornestam and colleagues, 2021).',
      paragraphs: [
        'The usual explanation is the kinetic chain: the idea that the joints from foot to spine move as a linked system, so a foot that rolls inward turns the shin and thigh inward, tilts the pelvis and loads the lower back differently. The mechanics are real, but the size of the effect looks small.',
        'In a 2021 lab study, 20 people walked with wedged insoles that made their feet roll inward. Their pelvis tilted a little more to one side (about half a degree on average) and the hip turned in by about 1.4 degrees. That shows the foot can nudge the pelvis. It does not show that half a degree causes pain, and the study did not measure pain.',
        'The kinetic chain is a reasonable idea for a clinician to check in one person. It is not a reason to assume your arches are behind your back pain.',
      ],
      cites: [CITE.hornestam],
    },
    {
      h2: 'Do insoles or orthotics help back pain with flat feet?',
      keyFact: 'A 2014 meta-analysis of five insole trials (293 people) found no significant benefit for low back pain (Chuter and colleagues, 2014).',
      paragraphs: [
        'Insoles and orthotics for back pain have mixed, low-quality evidence, and any benefit seen so far has been short-lived. Orthotics are shaped shoe inserts, and custom ones are made from a cast or scan of your foot.',
        'A 2014 review pooled five trials of insoles for people who already had low back pain (293 people) and found no significant effect. Six more trials (2,379 people) tested insoles to prevent back pain and also found no significant effect.',
        'The best-known single trial, from 2017, gave 225 adults with back pain of at least three months either custom orthotics, orthotics plus chiropractic care, or nothing (a waiting list). After about a month and a half, the orthotics-only group had less pain and better function than the waiting list. By three months and later, the groups were no longer different. People in the trial were not chosen for flat feet, and the comparison was with no care at all, not with a fake insole.',
        'Two smaller lines of research looked at people whose feet roll inward. A 2013 trial of 51 people with chronic back pain and strongly pronated feet found custom orthoses eased back pain more than placebo insoles over about a month. A 2025 review pooled four small trials in this group and found less pain and disability. A 2026 review of seven trials (423 people) found orthoses helped pain overall, but rated the evidence low quality and found no clear effect from ready-made insoles.',
        'Insoles for foot comfort are reasonable and low risk. Do not expect them to sort out a back problem on their own. [Insoles vs exercises](/insoles-vs-exercises/) covers the foot side of that choice.',
      ],
      table: {
        caption: 'Insole and orthotic studies for low back pain',
        head: ['Study', 'Who', 'What they found'],
        rows: [
          ['Chuter 2014, review of 5 trials', '293 people with back pain', 'No significant benefit from insoles'],
          ['Cambron 2017, randomized trial', '225 adults, back pain for 3+ months', 'Custom orthotics beat no care at about a month and a half, no difference by three months'],
          ['Castro-Méndez 2013, randomized trial', '51 people with pronated feet and back pain', 'Less back pain than placebo insoles over about a month'],
          ['Alam 2025, review of 4 trials', '268 people with pronated feet and back pain', 'Less pain and disability, from only four small trials'],
          ['Lin 2026, review of 7 trials', '423 people with back pain', 'Less pain, but low-quality evidence. Ready-made insoles not clearly helpful'],
        ],
      },
      sourceNote:
        'Chuter 2014: trials in people with back pain SMD -0.74 (95% CI -1.5 to 0.03); prevention trials RR 0.78 (95% CI 0.50 to 1.23). Cambron 2017: primary outcome at about a month and a half, pain P < .0001 and function P = .0068 against the waitlist; no significant group differences at three months and later. Alam 2025: pain -2.43 (95% CI -2.73 to -2.13). Lin 2026: evidence rated low quality on GRADE.',
      cites: [CITE.chuterInsoles, CITE.cambronOrthotics, CITE.castroMendez, CITE.alamPronatedLbp, CITE.linOrthosesLbp],
    },
    {
      h2: 'What helps low back pain, if not the feet?',
      keyFact: 'A 2021 Cochrane review of 249 trials found exercise lowered chronic low back pain by about 15 points on a 100-point scale compared with no exercise, usual care or placebo (Hayden and colleagues, 2021).',
      paragraphs: [
        'General exercise has much stronger evidence for back pain than anything aimed at the feet. A 2021 Cochrane review, a large summary of trials, pooled 249 trials of exercise for chronic low back pain. It found moderate-certainty evidence that exercise lowered pain by about 15 points on a 100-point scale compared with no exercise, usual care or placebo. The effect on daily function was smaller, about 7 points.',
        'The trials covered many kinds of exercise, and 151 of them tested two or more types of exercise. Exercise also beat advice or education alone for pain. For most people, the practical point is to pick something regular that you can keep up, ideally with a physical therapist\'s help at the start.',
        'The 2018 Lancet review adds some reassurance: most new episodes of low back pain settle quickly, although back pain often comes back. If your back is the main problem, a physical therapist or doctor can build a back plan around you. Foot work can sit alongside it, not replace it.',
      ],
      sourceNote:
        'Hayden 2021: pain MD -15.2 (95% CI -18.3 to -12.2) at earliest follow-up, moderate certainty; functional limitations MD -6.8 (95% CI -8.3 to -5.3), below the review\'s threshold for a clinically important difference.',
      cites: [CITE.haydenExercise, CITE.hartvigsen],
    },
    {
      h2: 'Should you still work on your flat feet?',
      keyFact: 'In a trial of 52 people with flexible flat feet, a program of short-foot, ankle, hip and stretching work changed two measures of arch shape more than in a control group (Brijwasi and Borkar, 2023).',
      paragraphs: [
        'Working on your flat feet makes sense if your feet themselves ache, tire quickly or feel unstable. It is not a back program, and no trial has shown that foot exercises on their own ease back pain.',
        'For flexible flat feet, where the arch comes back when you lift the foot, one trial of 52 people found that short-foot exercises, ankle work, hip strengthening and stretching, done together, changed arch shape more than in a control group. That trial measured arch shape, not pain. A 2024 review of short-foot training on its own found no clear change in foot posture overall. The full program, with doses and progressions, is in [flat feet exercises](/flat-feet-exercises/). Three of the core moves are below.',
        'Walkito builds these into a weekly plan for the feet and starts the short foot exercise at 3 sets of 8 with 5-second holds. It does nothing for the back directly, and it does not claim to.',
        'If any exercise takes your foot pain to **6/10 or more**, or sets off back pain or pain down the leg, stop for the day.',
      ],
      exercises: [
        {
          name: 'Short foot exercise',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. On its own, short foot work has weaker results, and it was not tested for back pain.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with your foot flat. Without curling your toes, draw the ball of the foot gently toward the heel so the arch lifts a little. Hold, then relax. The toes stay long and relaxed.',
          often: 'Most sessions',
          feel: 'Work in the arch, not cramping toes',
          stop: 'Pain reaches 6/10 or the arch cramps hard',
          media: 'short_foot_seated',
          caption: 'Short foot exercise: lift the arch without curling the toes',
          alt: 'A seated figure lifting the arch of one foot while the toes stay flat',
        },
        {
          name: 'Hip abduction',
          evidence: { level: 'moderate', why: 'Hip strengthening was part of the program that improved arch shape in a 2023 trial. That trial measured arch shape, not back pain.' },
          dose: '3 sets of 10, each leg',
          how: 'Lie on your side with the bottom knee bent. Keep the top leg straight and lift it slowly, toes pointing forward, then lower it slowly. Do not roll your hips backward.',
          often: 'Strength days',
          feel: 'Work at the side of the hip',
          stop: 'Pain reaches 6/10, or back or leg pain starts',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift the top leg slowly, hips stacked',
          alt: 'A figure lying on one side lifting the top leg, the side of the hip highlighted',
        },
        {
          name: 'Calf stretch',
          evidence: { level: 'moderate', why: 'Stretching was part of the program that improved arch shape in a 2023 trial, though the abstract does not say which muscles were stretched. It was not tested for back pain.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. Lean in until you feel a stretch in the calf.',
          often: 'Most sessions',
          feel: 'A stretch in the calf of the back leg',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'What does a clinician need to check?',
      keyFact: 'Serious spinal problems are rare, and an international framework for clinicians lists the warning signs to screen for first (Finucane and colleagues, 2020).',
      paragraphs: [
        'A clinician looks at the back and the feet as two separate questions, and starts with the back. The first job is to rule out the rare serious causes of back pain: nerve compression, fracture, infection or cancer. An international framework for clinicians lists the warning signs they screen for, and they are in the list at the end of this page.',
        'For the back, expect questions about how the pain started, what eases it and whether it spreads down a leg. The exam usually checks how the back moves, plus strength, reflexes and feeling in the legs and feet. Scans are not usually needed unless something points to a serious cause.',
        'For the feet, a clinician checks whether the flat foot is flexible (the arch returns when you rise onto your toes or lift the foot) or rigid (it stays flat). A rigid flat foot, or one arch that has dropped in adulthood with pain on the inside of the ankle, needs its own assessment. The second pattern is often a weakening tendon, covered in [posterior tibial tendon dysfunction exercises](/posterior-tibial-tendon-dysfunction-exercises/). A clinician may also watch you walk to see how much your feet roll in.',
        'Back problems can cause foot symptoms too. A pinched nerve in the lower back can bring numbness, tingling or weakness in the foot, and a weak foot can look like a foot problem when the cause is higher up.',
      ],
      cites: [CITE.finucaneRedFlags, CITE.hartvigsen],
    },
  ],
  faq: [
    {
      q: 'Can flat feet cause lower back pain?',
      cites: [CITE.menz],
      a: 'Flat feet have not been shown to cause lower back pain. The Framingham Foot Study of 1,930 adults found no link between flat foot posture and low back pain. It found a link only in women whose feet rolled inward while walking, with about 1.5 times the odds. The study measured everyone once, so it cannot show which came first.',
    },
    {
      q: 'Can flat feet cause upper back or mid back pain?',
      a: 'There is no good evidence that flat feet cause upper or mid back pain. The studies on feet and back pain looked at the lower back, and even there the link is weak. Upper back pain has its own common causes, such as posture at a desk and muscle strain. If it is new, severe or comes with chest pain or breathlessness, see a doctor promptly.',
    },
    {
      q: 'Do insoles help back pain if you have flat feet?',
      cites: [CITE.chuterInsoles, CITE.cambronOrthotics],
      a: 'Insoles may help a little for a short time, but the evidence is weak. A 2014 review of five trials found no significant benefit for back pain. A 2017 trial of 225 adults found custom orthotics beat no care at about a month and a half, but the difference was gone by three months. Insoles are low risk for foot comfort, not a back plan.',
    },
    {
      q: 'Can flat feet exercises help my back?',
      cites: [CITE.alamPronatedLbp, CITE.haydenExercise],
      a: 'Flat feet exercises have not been shown to help back pain on their own. A 2025 review pooled four small trials in people with back pain and inward-rolling feet, two using custom orthoses and two using exercise, and found less pain, but four trials is a thin base. General exercise has far better evidence: a Cochrane review of 249 trials found it eases chronic low back pain.',
    },
    {
      q: 'Can a back problem cause foot pain or flat-feeling feet?',
      a: 'Yes, a back problem can cause foot symptoms. A pinched nerve in the lower back, such as from a disc, can bring pain, numbness, tingling or weakness down the leg into the foot. Weakness that makes the foot slap down or catch when you walk needs a prompt medical check. These symptoms come from the nerve, not from the shape of your arch.',
    },
    {
      q: 'Who should I see for flat feet and back pain?',
      cites: [CITE.finucaneRedFlags],
      a: 'Start with a doctor or a physical therapist for the back, because back pain needs screening for rare serious causes first. A physical therapist can also look at how your feet move while you walk. If your feet hurt, one arch has dropped in adulthood, or a flat foot is rigid, a podiatrist or foot and ankle specialist is the right person for the feet.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have lost control of your bladder or bowels, or cannot pass urine (get emergency care)',
      'you have numbness around the groin, buttocks or inner thighs, the saddle area (get emergency care)',
      'one or both legs feel weak, or your foot drags or slaps down when you walk',
      'back pain comes with a fever or you feel generally unwell',
      'you have lost weight without trying',
      'the pain started after a fall, an accident or a hard knock',
      'you are over 50 and this is a new kind of back pain for you',
      'the pain is worse at night or does not ease when you lie still',
      'you have a history of cancer, take steroids long term, or have weak bones',
      'pain, numbness or tingling spreads down a leg below the knee',
      'one arch has dropped as an adult, or the inside of the ankle is swollen and painful',
      'a flat foot is rigid and painful, staying flat even when you rise onto your toes',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is an exercise program for the feet and lower legs. For flat feet, it builds a plan one week at a time around foot goals such as a 60-second arch hold and 30 seconds of single-leg balance. It starts the short foot exercise at 3 sets of 8 with 5-second holds, hip work at 3 sets of 10 and calf stretches at 2 holds of 30 seconds.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance, so you can see what is changing in your feet.',
      'Walkito does not address back pain, does not diagnose and is not a substitute for a clinician. If you have back pain, get it checked, especially if any of the signs above apply.',
    ],
    cta: 'Start with 3 minutes a day for your feet',
  },
  crumb: 'Flat feet and back pain',
  campaign: 'guide-flat-feet-back',
};
