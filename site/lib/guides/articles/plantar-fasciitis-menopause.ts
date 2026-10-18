import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Plantar fasciitis and menopause (EN). Research 2026-10-18.
 * Age and sex pattern: Rasenberg 2019 (Dutch primary care records, about 1.9
 * million patients, 18,004 incident cases): peak incidence 11.23 per 1000
 * patient-years at age 50 in women, 5.54 at age 55 in men (full text, Results).
 * Douglas-Harris 2026 (17 focus group participants) quotes the same peak and
 * says a causal link with menopause is uncertain. No study has measured the
 * plantar fascia across menopause, and no trial has tested HRT for heel pain
 * (PubMed searched for HRT/estrogen + plantar fasciitis/fascia/heel pain).
 * Hormone and tissue evidence used: Lee and Petrofsky 2018 (menstrual cycle,
 * 15 women, 15 men), Hansen and Kjaer 2014 (review, hypothesis), Cook 2007
 * (85 women, Achilles) and Finni 2009 (14 twin pairs, Achilles).
 * Midlife factors: guideline (age 40 to 60 listed as a risk factor), van
 * Leeuwen 2016 (BMI over 27, odds 3.7), Riddle 2003 (stiff ankle, standing),
 * Prichasuk 1994 (heel pad loses elasticity with age), Lu 2020 (71% of
 * perimenopausal women report musculoskeletal pain), Ansari 2026 (narrative
 * review: rapid increases in activity, aromatase inhibitors).
 * Doses match the heel pain guide (en.ts).
 */

export const PF_MENOPAUSE_EN: Guide = {
  lang: 'en',
  page: 'pfMenopause',
  mainSource: CITE.rasenbergIncidence,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantar Fasciitis and Menopause: Why Heels Hurt at 40 to 60',
  description:
    'Plantar fasciitis peaks in women around 50, at about twice the rate in men. What is known about menopause and heel pain, what is not, and what helps.',
  h1: 'Plantar fasciitis and menopause: why heel pain often starts in your 40s and 50s',
  lede:
    'Plantar fasciitis is most common in women around the age of menopause: in Dutch family practice records, new cases in women peaked at 11.23 per 1000 patient-years at age 50, against a peak of 5.54 in men at age 55 (Rasenberg and colleagues, 2019). Whether falling hormone levels cause it is not known. The link is plausible, but no study has proven it (Douglas-Harris and colleagues, 2026). What does help is the same as at any age: plantar fascia and calf stretches, graded **A** in the 2023 heel pain guideline, and calf strength work, graded **B** (Koc and colleagues, 2023).',
  intro: [
    'If your heel started hurting in your 40s or 50s, you are in the group most often affected, and it is not something you did wrong. This page covers the age and sex numbers, what research says and does not say about hormones and the plantar fascia, the other changes of midlife that load the heel, the exercises with the best evidence, what is known about HRT, and when to see a clinician.',
  ],
  takeaways: [
    'In records of about 1.9 million Dutch patients, new cases of heel pain in women peaked at 11.23 per 1000 patient-years at age 50. In men the peak was 5.54, at age 55. 62% of the 18,004 cases were women (Rasenberg and colleagues, 2019).',
    'The 2023 heel pain guideline says plantar fasciitis is most common between ages 40 and 60, and lists running and jobs with a lot of time on your feet as risk factors (Koc and colleagues, 2023).',
    'A link between menopause and heel pain is plausible but unproven: no study has measured the plantar fascia across menopause, and in a 2026 focus group study 76% of the 17 women had not connected the two (Douglas-Harris and colleagues, 2026).',
    'No trial has tested HRT for plantar fasciitis. Whether HRT suits you depends on your menopause symptoms and health history, and that is a decision to make with your doctor.',
    'Plantar fascia and calf stretches (grade **A**) and calf strength work (grade **B**) are the best-graded exercises, whatever your age (Koc and colleagues, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is plantar fasciitis more common around menopause?',
      keyFact: 'New cases of plantar heel pain peaked at 11.23 per 1000 patient-years in women at age 50, against 5.54 in men at age 55 (Rasenberg and colleagues, 2019).',
      paragraphs: [
        '**Yes, the timing lines up.** A Dutch study searched the family doctor records of about 1.9 million patients from 2013 to 2016 and found 18,004 new cases of plantar heel pain, the umbrella term that includes plantar fasciitis. 62% were women. Overall, women had 4.64 new cases per 1000 patient-years and men 2.98 (Rasenberg and colleagues, 2019).',
        'The age pattern is the striking part. In women, new cases peaked at **11.23 per 1000 patient-years at age 50**. In men, the peak was lower and later: 5.54 at age 55 (Rasenberg and colleagues, 2019). The average age of menopause in the UK is 51, which is why researchers have started to ask whether the two are connected (Douglas-Harris and colleagues, 2026).',
        'The 2023 heel pain guideline says plantar fasciitis is most common between ages 40 and 60 (Koc and colleagues, 2023). Women also tend to keep it longer: in a 5 to 15 year follow-up of 174 people, the risk of still having plantar fasciitis was higher in women and in people with pain in both heels (Hansen and colleagues, 2018).',
      ],
      table: {
        caption: 'Peak rate of new plantar heel pain cases, Dutch primary care (Rasenberg and colleagues, 2019)',
        head: ['', 'Women', 'Men'],
        rows: [
          ['Peak age', '50', '55'],
          ['Peak rate per 1000 patient-years', '11.23', '5.54'],
          ['Rate at all ages', '4.64', '2.98'],
        ],
      },
      after: [
        'These numbers come from people who saw a family doctor, so they count heel pain that bothered people enough to book a visit. They show when heel pain is most common. They do not show why.',
      ],
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Does menopause cause plantar fasciitis?',
      keyFact: 'Of 17 women with heel pain who were perimenopausal or postmenopausal, 76% had not connected it with menopause, and most said it was not raised when they sought help (Douglas-Harris and colleagues, 2026).',
      paragraphs: [
        '**Nobody knows yet.** The authors of a 2026 study focused on menopause and heel pain write that whether a causal relationship exists is uncertain (Douglas-Harris and colleagues, 2026). That study was a set of focus groups with 17 women, not a measurement of hormones or heel tissue. Many websites state the link as fact. The evidence does not support that yet.',
        'Here is what is known and what is not:',
      ],
      table: {
        head: ['Question', 'What studies show'],
        rows: [
          ['Is heel pain most common in women around 50?', '**Known.** Peak at age 50 in women (Rasenberg, 2019)'],
          ['Do sex hormones affect the plantar fascia?', '**Some signs.** It loosens around ovulation in young women (Lee, 2018)'],
          ['Does the plantar fascia change at menopause?', '**Not known.** No study has measured it'],
          ['Does lower estrogen cause heel pain?', '**Not known.** Plausible, unproven'],
          ['Does HRT ease heel pain?', '**Not known.** No trial has tested it'],
        ],
      },
      after: [
        'The hormone idea is reasonable. In 15 young women, the plantar fascia was looser around ovulation than during the period, and balance was a little less steady (Lee and Petrofsky, 2018). A review of lab studies suggests estrogen may make tendons less stiff, an effect that training may change (Hansen and Kjaer, 2014). And musculoskeletal pain in general is common in the menopause transition: a review of 16 studies found that 71% of perimenopausal women reported it (Lu and colleagues, 2020).',
        'But none of these studies looked at plantar fasciitis in women going through menopause. Many changes happen at the same age, which makes it hard to separate hormones from everything else. The next section covers those other changes, because some of them you can work on.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.rasenbergIncidence, CITE.leePetrofskyFascia, CITE.hansenKjaerEstrogen, CITE.luMenopausePain],
    },
    {
      h2: 'What else changes in your 40s and 50s that can strain the heel?',
      keyFact: 'In a case-control study, a stiff ankle came with 23.3 times the odds of plantar fasciitis, and spending most of the workday on your feet 3.6 times (Riddle and colleagues, 2003).',
      paragraphs: [
        'Plantar fasciitis usually starts when the load on the heel is more than it can handle and recover from. Several things that often change in midlife add to that load:',
        {
          list: [
            '**Weight.** In a review of 51 studies, a BMI over 27 came with 3.7 times the odds of plantar fasciitis, and the link was strongest in people who are not athletes (van Leeuwen and colleagues, 2016). Weight often changes in midlife; [weight and plantar fasciitis](/weight-and-plantar-fasciitis/) covers what is known.',
            '**Stiffer calves and ankles.** In a study of 50 people with plantar fasciitis and 100 without, a stiff ankle was the strongest factor measured, with 23.3 times the odds (Riddle and colleagues, 2003). In 100 adults without foot problems, people around 80 had stiffer ankles, flatter feet and weaker toe muscles than people around 20 (Scott and colleagues, 2007).',
            '**A heel pad that gives less.** In an X-ray study of 70 people with heel pain and 200 without, the heel pad lost elasticity with age, and had lost more in people with heel pain (Prichasuk, 1994). A thinned fat pad causes its own kind of heel pain, covered in [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
            '**A change in activity.** Starting a new walking or running plan, a new job on your feet, or a sudden jump in exercise can all add load quickly. A 2026 review lists rapid increases in physical activity among the things that raise the risk of overuse injuries such as plantar fasciitis in midlife women (Ansari and colleagues, 2026).',
          ],
        },
        'Long hours on your feet count too: spending most of the workday standing came with 3.6 times the odds in the same case-control study (Riddle and colleagues, 2003). Feet also tend to get a little flatter with age; see [do flat feet get worse with age](/do-flat-feet-get-worse-with-age/).',
      ],
      cites: [CITE.vanLeeuwenBmi, CITE.riddle, CITE.scottAgeFoot, CITE.prichasukHeelPad, CITE.ansariMenopause, CITE.fatPadReview],
    },
    {
      h2: 'Which exercises help plantar fasciitis around menopause?',
      paragraphs: [
        'No exercise study has looked at women in menopause on their own, so the best guide is the heel pain guideline for adults in general. Stretching the plantar fascia and calf gets the guideline’s top grade, **A**, and calf strength work gets a **B** (Koc and colleagues, 2023). These are the same starting doses as the main [plantar fasciitis exercises](/plantar-fasciitis-exercises/) guide.',
        'Do the first plantar fascia stretch sitting on the edge of the bed, before you stand: in a trial of 82 people, stretching before the first steps eased morning pain more than calf stretching alone (DiGiovanni and colleagues, 2003). In a trial of 48 people, slow heel raises with a towel under the toes eased pain faster than stretching alone at three months, and by twelve months both groups were even (Rathleff and colleagues, 2015). If any exercise takes your heel pain to 6 out of 10, stop for the day.',
        'Strength work has a second reason in midlife. Muscle mass and balance tend to decline after menopause (Douglas-Harris and colleagues, 2026), and resistance training is one of the non-hormonal steps a 2026 review says is underused (Ansari and colleagues, 2026). Heel raises and balance work are a small, practical start. [Calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) goes deeper on the heel raise protocol.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most days you exercise',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor. If crossing the leg is hard, loop a towel around the ball of the foot and pull gently instead.',
          stop: 'Sharp heel pain, or pain that reaches 6 out of 10',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most days you exercise',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward.',
          stop: 'Calf pain that stays after you stop',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most days you exercise',
          feel: 'A stretch near the heel',
          how: 'Take the same position at the wall, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Calf pain that stays after you stop',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: '3 days a week, never two in a row',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle. It is a gentle first step before the standing raises.',
          stop: 'Heel pain that reaches 6 out of 10, or is worse the next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises with a towel',
          evidence: { level: 'moderate', why: 'This is the routine from a 48-person trial, and the 2023 guideline grades strength work B.' },
          dose: '4 sets of 10, each leg, with added weight',
          often: 'Strength days',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. At this level Walkito adds weight, such as a backpack. The towel is what makes this exercise work the plantar fascia and not just the calf. Hold a rail or wall for balance.',
          stop: 'Heel pain that reaches 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises with a towel',
          media: 'heel_raise_towel',
          caption: 'Heel raises with a towel: three seconds up, two at the top, three down',
          alt: 'A figure rising onto the toes on a step with a rolled towel, the calves highlighted',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested programs for heel pain.' },
          dose: '3 holds of 20 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          how: 'Stand on one foot next to a counter and look at one fixed spot. Let the foot wobble. It is meant to, because that wobble is the foot doing the balancing. Lightly touch the counter with your fingertips if you need to.',
          stop: 'Heel pain that reaches 6 out of 10, or you feel unsafe',
          image: 'Exercise: single-leg hold',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make small corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.douglasHarrisMenopause, CITE.ansariMenopause],
    },
    {
      h2: 'Does HRT help plantar fasciitis?',
      keyFact: 'In 85 women after menopause, active women on HRT had thinner Achilles tendons than active women not on HRT, with no clear effect in inactive women (Cook and colleagues, 2007). Neither this nor any other study measured heel pain.',
      paragraphs: [
        '**There is no trial of HRT for plantar fasciitis, so nobody can say whether it helps.** We searched for one and found none. HRT, also called menopausal hormone therapy, is used for menopause symptoms. It is not a recognized treatment for heel pain.',
        'What exists is indirect. In the 2026 focus groups, some women said they noticed fewer foot pains on HRT (Douglas-Harris and colleagues, 2026). That is a report from a few people, not a measured result. Two small studies of the Achilles tendon found that active women on HRT had smaller tendons than active women not on it: one of 85 women (Cook and colleagues, 2007), and one of 14 pairs of identical twins, where the difference showed up only in the 5 physically active pairs (Finni and colleagues, 2009). Tendon size is not pain, and the Achilles is not the plantar fascia.',
        'A 2026 review notes that HRT is not right for everyone, because of contraindications and each person’s balance of risks and benefits (Ansari and colleagues, 2026). Whether to take it depends on your menopause symptoms and health history. **That is a decision to make with your doctor.** Whatever you decide, the stretches and strength work on this page still apply.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles, CITE.finniHrtTwins, CITE.ansariMenopause],
    },
    {
      h2: 'How long does plantar fasciitis last in midlife?',
      paragraphs: [
        'About 90% of people with plantar fasciitis get better with non-surgical care such as stretching and insoles, though it often takes 3 to 6 months (Latt and colleagues, 2020). No study has looked at recovery in women going through menopause specifically.',
        'For some people it lasts longer. In a follow-up of 174 people, 54% had no symptoms at follow-up, about 9 years after diagnosis on average, and the risk of still having it was higher in women and in people with pain in both heels (Hansen and colleagues, 2018). That is a reason to start the exercises early and keep them going, not a reason to expect the worst. [How long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/) has the full timeline.',
        'If you are building up activity in midlife, for health or for weight, build up step by step rather than stopping: the guideline notes that plantar fasciitis usually starts after a change in weight-bearing activity (Koc and colleagues, 2023). [Walking with plantar fasciitis](/walking-with-plantar-fasciitis/) explains how to build walking back up step by step.',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.guideline],
    },
    {
      h2: 'When is heel or foot pain in midlife something else?',
      paragraphs: [
        'Pain under the heel that is worst on your first steps in the morning and eases as you walk is the typical plantar fasciitis pattern. Other patterns point elsewhere:',
        {
          list: [
            '**Deep, bruise-like pain in the centre of the heel, worse barefoot on hard floors:** possibly the fat pad. See [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
            '**One arch slowly dropping, with pain or swelling on the inner ankle:** possibly the posterior tibial tendon. In a survey of 582 women over 40, 3.3% had early signs of this problem and none had been diagnosed (Kohls-Gatzoulis and colleagues, 2009). It is worth having checked early.',
            '**Pain that builds with activity and hurts when you squeeze the sides of the heel:** possibly a stress fracture. See [plantar fasciitis or stress fracture](/plantar-fasciitis-vs-stress-fracture/).',
            '**Burning, tingling or numbness, or pain at night:** more likely a nerve problem. See [heel pain at night](/heel-pain-at-night/).',
            '**Both heels hurting along with stiff, swollen joints elsewhere:** worth checking for an inflammatory joint condition.',
          ],
        },
        'If you take an aromatase inhibitor after breast cancer, new joint, muscle or foot pain is something to tell the team that prescribes it. A 2026 review lists aromatase inhibitor use among the factors that add to the risk of overuse injuries in midlife (Ansari and colleagues, 2026).',
      ],
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.ansariMenopause],
    },
  ],
  faq: [
    {
      q: 'Can menopause cause plantar fasciitis?',
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause],
      a: 'It might contribute, but no study has proven it. Plantar heel pain is most common in women around age 50, when menopause usually happens, and in one large study the peak in women was about twice the peak in men. Researchers describe a causal link as uncertain, and no study has measured the plantar fascia across menopause.',
    },
    {
      q: 'Why does plantar fasciitis peak in women around 50?',
      cites: [CITE.rasenbergIncidence, CITE.guideline, CITE.vanLeeuwenBmi, CITE.riddle],
      a: 'Nobody knows for sure. In Dutch records, new cases in women peaked at 11.23 per 1000 patient-years at age 50. Hormone changes may play a part, but so can things that often change at the same age: weight, stiffer calves and ankles, a less springy heel pad and new or heavier activity.',
    },
    {
      q: 'Can perimenopause cause heel pain?',
      cites: [CITE.luMenopausePain, CITE.douglasHarrisMenopause],
      a: 'Possibly, but it has not been shown for heel pain specifically. A review of 16 studies found that 71% of perimenopausal women report musculoskeletal pain, more than women who have not reached perimenopause. No study has looked at plantar fasciitis in perimenopause on its own, so if your heel hurts, the usual heel pain checks and exercises apply.',
    },
    {
      q: 'Does HRT help plantar fasciitis?',
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles],
      a: 'It is not known. No trial has tested HRT for plantar fasciitis. Some women in a 2026 focus group study said they noticed fewer foot pains on HRT, and small studies found differences in Achilles tendon size, but none measured heel pain. Whether HRT suits you is a decision to make with your doctor, based on your symptoms and health.',
    },
    {
      q: 'What is the best exercise for plantar fasciitis during menopause?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'The same ones as at any age: plantar fascia and calf stretches, which the 2023 heel pain guideline grades A, and calf strength work, graded B. Slow heel raises with a towel under the toes eased pain faster than stretching alone in a 48-person trial. Strength work also supports muscle and balance, which tend to decline after menopause.',
    },
    {
      q: 'Is it plantar fasciitis or just aching feet from menopause?',
      cites: [CITE.guideline],
      a: 'Plantar fasciitis has a typical pattern: pain under the heel that is worst on your first steps in the morning or after sitting, and eases once you walk. General aches across both feet and other joints are a different pattern. If you are not sure, or several joints are stiff and swollen, see a clinician.',
    },
    {
      q: 'Does weight gain in menopause make plantar fasciitis worse?',
      cites: [CITE.vanLeeuwenBmi, CITE.hansen],
      a: 'A higher weight is linked to plantar fasciitis. In a review of 51 studies, a BMI over 27 came with 3.7 times the odds, mostly in people who are not athletes. Weight is one factor among several, though. In a long follow-up of 174 people, BMI did not predict who still had heel pain years later.',
    },
    {
      q: 'Will plantar fasciitis go away after menopause?',
      cites: [CITE.latt, CITE.hansen],
      a: 'No study has followed heel pain through menopause, so there is no figure. For plantar fasciitis in general, about 90% of people get better with non-surgical care, often within 3 to 6 months. In a long follow-up, the risk of it lasting was higher in women and in people with pain in both heels.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain started after a fall, a jump or a twist, or you cannot put weight on the foot',
      'it hurts when you squeeze the sides of the heel, or the pain keeps building with activity (possible stress fracture)',
      'one arch is dropping, or the inner ankle is painful or swollen',
      'the heel is swollen, red or warm, or you have a fever',
      'the pain is worse at night or at rest, or comes with burning, tingling or numbness',
      'both heels hurt along with stiff or swollen joints elsewhere',
      'you take an aromatase inhibitor and new joint or foot pain has started: tell the team that prescribes it',
      'one calf is painful and swollen (possible blood clot): get help the same day',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. It does not track hormones or menopause symptoms and gives no advice on HRT. It builds a plan from the stretches, calf strength work and balance exercises on this page, starting with seated versions on sore days.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPain', 'weightPf', 'heelFatPad'],
  crumb: 'Plantar fasciitis and menopause',
  campaign: 'guide-plantar-fasciitis-menopause',
};
