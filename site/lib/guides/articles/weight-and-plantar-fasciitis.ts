import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Weight and plantar fasciitis (EN). Research 2026-10-18.
 * Risk: Riddle 2003 (50 cases, 100 matched controls; BMI > 30 vs <= 25: OR 5.6;
 * dorsiflexion <= 0 degrees: OR 23.3; on feet most of the workday: OR 3.6).
 * van Leeuwen 2016 meta-analysis (51 studies; BMI > 27: OR 3.7, the only
 * significant pooled clinical factor, strongest in non-athletic groups).
 * Irving 2006 and Butterworth 2012 reviews (BMI linked in non-athletic people,
 * not in athletes). 2023 JOSPT CPG: high BMI in nonathletic individuals is a
 * risk factor (B, 2014 recommendation kept); education on lean body mass and
 * referral for nutrition, grade E.
 * Weight loss: no randomized trial in people with heel pain. Butterworth 2012:
 * only two prospective cohorts, both after surgery. Boules 2018 (163 bariatric
 * patients with PF, retrospective, no comparison group, 90% resolution in the
 * records). Walsh 2018 (45 bariatric candidates with foot pain, 29 surgery vs
 * 16 waiting list; foot pain fell, foot posture did not change, pressure change
 * not linked to pain change, mood was). Song 2015 RCT (41 adults, 5.9 vs 1.9 kg,
 * lower peak pressure under parts of the foot, no structure change; pain not
 * measured). Yang 2025 semaglutide (observational, 92 users; plus a 30-person
 * uncontrolled pilot). Hansen 2018: BMI tested, did not predict long-term outcome.
 * Doses match the heel pain guide (en.ts) and the flat feet guide.
 */

export const WEIGHT_PF_EN: Guide = {
  lang: 'en',
  page: 'weightPf',
  mainSource: CITE.vanLeeuwenBmi,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Weight and Plantar Fasciitis: What the Evidence Shows',
  description:
    'Does weight cause plantar fasciitis, and does losing weight help? What the studies show, why load matters, and seated exercises that suit a higher weight.',
  h1: 'Weight and plantar fasciitis: what the research shows, and what helps now',
  lede:
    'A higher body weight is one of the clearest risk factors for [plantar fasciitis](/plantar-fasciitis/) in people who are not athletes. In a review of 51 studies, a body mass index (BMI) over 27 came with 3.7 times the odds of plantar fasciitis (van Leeuwen and colleagues, 2016). Whether losing weight eases heel pain is less clear: no randomized trial has tested it in people with heel pain, so the stretches and strength work the 2023 guideline grades highest are the place to start, at any weight.',
  intro: [
    'Weight is one factor among several, not a verdict. In the same case-control study that linked a BMI over 30 to plantar fasciitis, a stiff ankle was a far stronger factor (Riddle and colleagues, 2003). People of every size get heel pain, and people of every size get better. This page covers what the studies found, what is known about weight loss, why load matters, and exercises you can do seated or with support.',
  ],
  takeaways: [
    'In a case-control study of 50 people with plantar fasciitis and 100 without, a BMI over 30 came with 5.6 times the odds of plantar fasciitis, compared with a BMI of 25 or under. A stiff ankle was the strongest factor, at 23.3 times (Riddle and colleagues, 2003).',
    'A review of 51 studies found that a BMI over 27 was the only clinical factor, among those that could be pooled, clearly linked to plantar fasciitis, with 3.7 times the odds, and the link was strongest in people who are not athletes (van Leeuwen and colleagues, 2016).',
    'No randomized trial has tested weight loss for heel pain. A 2012 review found only two studies of weight loss and foot pain, both after weight loss surgery, and called the evidence limited (Butterworth and colleagues, 2012).',
    'The 2023 heel pain guideline grades plantar fascia and calf stretching **A** and strength work **B**. Advice on keeping a healthy lean body mass is graded **E**, meaning it rests on theory, not trials (Koc and colleagues, 2023).',
    'In a follow-up of 174 people, BMI did not predict who still had heel pain years later. Being a woman and having pain in both heels did (Hansen and colleagues, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Does weight affect plantar fasciitis?',
      keyFact: 'In a review of 51 studies, a BMI over 27 came with 3.7 times the odds of plantar fasciitis, and the link was strongest in people who are not athletes (van Leeuwen and colleagues, 2016).',
      paragraphs: [
        '**Yes, for people who are not athletes, a higher BMI is linked to plantar fasciitis in study after study.** BMI is weight divided by height squared. It is a rough measure, but it is the one these studies used.',
        'The best known study compared 50 people with plantar fasciitis in one heel with 100 people of the same age and sex without it. A BMI over 30 came with 5.6 times the odds of plantar fasciitis, compared with a BMI of 25 or under (Riddle and colleagues, 2003).',
        'A 2016 review pooled 51 studies. Of all the clinical factors the authors could combine, a BMI over 27 was the only one clearly linked to plantar fasciitis, with 3.7 times the odds, and the link was strongest in people who are not athletes (van Leeuwen and colleagues, 2016). Two earlier reviews reached the same conclusion, and both found no link between BMI and heel pain in athletes (Irving and colleagues, 2006; Butterworth and colleagues, 2012).',
        'The 2023 heel pain guideline lists high BMI in people who are not athletes as a risk factor, next to a stiff ankle, running and long hours on your feet, especially on hard surfaces (Koc and colleagues, 2023).',
      ],
      sourceNote:
        'Riddle 2003: BMI > 30 vs <= 25, odds ratio 5.6 (95% CI 1.9 to 16.6). van Leeuwen 2016: BMI > 27, odds ratio 3.7 (95% CI 2.93 to 5.62); 46 of the 51 studies were case-control studies.',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi, CITE.irvingHeelPain, CITE.butterworthBmi, CITE.guideline],
    },
    {
      h2: 'Is weight the cause, or just one factor?',
      keyFact: 'In the same study, a stiff ankle came with 23.3 times the odds of plantar fasciitis and spending most of the workday on your feet 3.6 times, against 5.6 times for a BMI over 30 (Riddle and colleagues, 2003).',
      paragraphs: [
        '**One factor among several, and not the strongest.** In the 2003 case-control study, three factors each counted on their own:',
        {
          list: [
            'A stiff ankle (the foot barely bending up toward the shin): 23.3 times the odds.',
            'A BMI over 30: 5.6 times the odds.',
            'Spending most of the workday on your feet: 3.6 times the odds.',
          ],
        },
        'The authors called the stiff ankle the most important of the three (Riddle and colleagues, 2003). That matters, because ankle stiffness often comes from [tight calves](/tight-calves/), and calf stretching is something you can start today.',
        'Most of these studies are case-control or cross-sectional: they compare people who already have heel pain with people who do not. They show a link, not proof that weight causes plantar fasciitis (van Leeuwen and colleagues, 2016). If you also stand for work, [feet that hurt from standing all day](/feet-hurt-standing-all-day/) covers that side of the load.',
      ],
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
    },
    {
      h2: 'Why does load matter for the heel?',
      paragraphs: [
        '**The plantar fascia is the band under your foot that holds up the arch, and it takes load with every step.** More body weight means more load per step, so the same walk or the same shift asks more of the tissue. The guideline’s advice for heel pain is built around this idea: adjust the load on your feet at work, in leisure and in daily life. It grades that advice **E**, because it rests on theory, not trials (Koc and colleagues, 2023).',
        'Weight loss does lower pressure under the foot. In a trial of 41 adults with an average BMI near 36, the group on a meal plan lost 5.9 kg in three months against 1.9 kg in the comparison group, and had lower peak pressure under parts of the foot. Foot shape and walking pattern did not change (Song and colleagues, 2015). That trial did not measure heel pain.',
        'Pressure is not the whole story either. In a study of people with foot pain waiting for weight loss surgery, pain fell after surgery, but the drop in foot pressure was not linked to the drop in pain. Mood was: people with more depressive symptoms reported more foot pain, before and after (Walsh and colleagues, 2018). Pain is shaped by more than mechanics, which is one more reason not to blame yourself for it.',
      ],
      cites: [CITE.guideline, CITE.songWeightLoss, CITE.walshBariatric],
    },
    {
      h2: 'Does losing weight help plantar fasciitis?',
      keyFact: 'A 2012 review found only two prospective studies of weight loss and foot symptoms, both after surgery, and concluded the evidence for weight loss to reduce foot pain was limited (Butterworth and colleagues, 2012).',
      paragraphs: [
        '**It may, but no randomized trial has tested it in people with heel pain.** That is the honest answer. Everything we have comes from studies without a fair comparison group, mostly after weight loss surgery. Here is what exists:',
      ],
      table: {
        caption: 'Studies on weight loss and foot or heel pain',
        head: ['Study', 'Who', 'What it found'],
        rows: [
          ['Boules, 2018', '163 people with plantar fasciitis, after weight loss surgery', '90% had their heel symptoms resolve, per records'],
          ['Walsh, 2018', '45 people with foot pain: 29 had surgery, 16 waited', 'Foot pain fell after surgery'],
          ['Song, 2015', '41 adults, meal plan or wait', 'Lower foot pressure; pain not measured'],
          ['Yang, 2025', '92 people taking semaglutide, among 2,902 with heel pain', 'More pain improvement than non-users, not randomized'],
        ],
      },
      after: [
        'The largest study looked back at the records of 163 people with plantar fasciitis who had weight loss surgery. Their average BMI fell from 45 to about 35, and 146 of them (90%) had their heel symptoms resolve (Boules and colleagues, 2018). There was no comparison group, and about 90% of people with plantar fasciitis get better with non-surgical care anyway (Latt and colleagues, 2020), so this study cannot show how much the weight loss itself added.',
        'The semaglutide study followed people with long-standing heel pain. The 92 who took the drug for diabetes or weight loss reported more improvement than those who did not, but they were not randomly chosen, and the authors call for a randomized trial (Yang and colleagues, 2025). Weight loss medicines and surgery are decisions for you and your doctor, not something to start for heel pain alone.',
        'The guideline does not tell clinicians to prescribe weight loss for heel pain. It says they may offer advice on exercise to gain or keep a healthy lean body mass, and refer you on for nutrition, graded **E** (Koc and colleagues, 2023).',
      ],
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.walshBariatric, CITE.songWeightLoss, CITE.yangSemaglutide, CITE.latt, CITE.guideline],
    },
    {
      h2: 'Which exercises suit a higher body weight?',
      paragraphs: [
        'The exercises with the best grades in the 2023 guideline, stretching (**A**) and calf strength work (**B**), do not depend on your weight (Koc and colleagues, 2023). What changes is how you start. Seated and supported versions put less load through the heel and are easier on knees and balance, so they come first here.',
        'These are the same starting doses as the main [plantar fasciitis exercises](/plantar-fasciitis-exercises/) guide. Do the first plantar fascia stretch sitting on the edge of the bed, before you stand: in a trial of 82 people, a plantar fascia stretch done before standing eased first-step morning pain more than calf stretching alone (DiGiovanni and colleagues, 2003). If any exercise takes your heel pain to 6 out of 10, stop for the day.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most days you exercise',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. If crossing the leg is hard, keep the foot on the floor, loop a towel around the ball of the foot and pull gently instead.',
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
          how: 'Put your hands on a wall or a kitchen counter. Keep the back leg straight, the back heel flat on the floor and the hips forward. The wall takes some of your weight, so you can lean only as far as feels steady.',
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
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle, with almost no load on the heel. It is the first step of the calf work, whatever you weigh.',
          stop: 'Heel pain that reaches 6 out of 10, or is worse the next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet, holding a counter',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days, once the seated raises feel easy',
          feel: 'The calves working together',
          how: 'Stand facing a counter or the back of a sturdy chair, hands resting on it. Rise straight up over the big toes, then lower slowly. Your hands can take some weight on a sore day and less as you get stronger. Both feet share the load.',
          stop: 'Heel pain that reaches 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Short foot, seated',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. On its own, short foot work has weaker results. Not tested for heel pain.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Most days you exercise',
          feel: 'The arch lifting',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, and hold. Keep the outside of the foot on the ground. Don’t curl the toes. Curling them is the most common way to get this exercise wrong.',
          stop: 'Cramp in the foot that does not ease when you stop',
          image: 'Exercise: short foot, seated',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: lift the arch without curling the toes',
          alt: 'A seated figure lifting the arch of one foot, the arch highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Which activities are easier on the heel?',
      paragraphs: [
        '**Activities where your feet do not take your full weight with every step.** The guideline advises changing the load on your feet rather than stopping activity (Koc and colleagues, 2023). No study has compared activities for people with heel pain and a higher weight, so these are practical options, not tested ones:',
        {
          list: [
            '**A stationary bike or recumbent bike.** You keep moving while a seat carries your weight.',
            '**Swimming or walking in water.** The water takes much of your weight off your feet.',
            '**Seated or upper body exercise.** Arm cycling, resistance bands or chair workouts keep you active on days the heel is sore.',
            '**Shorter walks, more often.** Several short walks can be easier on a sore heel than one long one.',
          ],
        },
        'A simple check works for any activity: if your first steps the next morning are clearly worse, that day was more than the heel could take, so do a little less next time. [Walking with plantar fasciitis](/walking-with-plantar-fasciitis/) explains how to build walking back up step by step.',
        'If you are starting to exercise to feel better or to lose weight, starting with low-impact activity lets you keep going while the heel settles. The guideline lists running and long hours on your feet, especially on hard surfaces, as risk factors for heel pain (Koc and colleagues, 2023).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Do shoes and insoles matter more at a higher weight?',
      paragraphs: [
        'No study has tested shoes or insoles for heel pain in people with a higher weight specifically. For heel pain in general, the 2023 guideline grades insoles on their own **B against**: the evidence says not to rely on them alone. Combined with stretching and strength work, they get a **C** (Koc and colleagues, 2023). [Insoles or exercises](/insoles-vs-exercises/) compares the two.',
        'The guideline does recommend footwear advice as part of managing load, and it lists weight-bearing work on hard surfaces with poor shock absorption as a risk factor (Koc and colleagues, 2023). One practical option, not tested in trials, is supportive, cushioned shoes on hard floors, including at home.',
        'After a lot of weight loss, feet can change. In the surgery study, the authors suggested that losing fat under the midfoot may change how shoes and insoles fit, and that this is worth checking after a large weight loss (Walsh and colleagues, 2018).',
      ],
      cites: [CITE.guideline, CITE.walshBariatric],
    },
    {
      h2: 'Will plantar fasciitis go away if I don’t lose weight?',
      paragraphs: [
        '**For most people, yes, it eases with time and non-surgical care.** About 90% of people with plantar fasciitis get better with non-surgical care such as stretching and insoles, often within 3 to 6 months (Latt and colleagues, 2020).',
        'In a long follow-up of 174 people, the researchers tested whether BMI, age, smoking, physical work and other factors predicted who still had heel pain years later. Only being a woman and having pain in both heels did. BMI did not (Hansen and colleagues, 2018).',
        'So a higher weight may make plantar fasciitis more likely to start, but it does not mean you are stuck with it. The stretches and calf work above are the same ones that help people of any size. [How long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/) has the full timeline.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
  ],
  faq: [
    {
      q: 'Can being overweight cause plantar fasciitis?',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
      a: 'A higher weight is linked to plantar fasciitis, but no study proves it causes it. A BMI over 30 came with 5.6 times the odds in one study, and a review of 51 studies found 3.7 times the odds above a BMI of 27, with the link strongest in people who are not athletes. A stiff ankle was an even stronger factor.',
    },
    {
      q: 'Does losing weight help plantar fasciitis?',
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.latt],
      a: 'It may, but no randomized trial has tested it in people with heel pain. In a records study of 163 people with plantar fasciitis who had weight loss surgery, 90% had their heel symptoms resolve, but there was no comparison group, and most people with plantar fasciitis get better with non-surgical care anyway (Latt and colleagues, 2020). A 2012 review called the evidence limited.',
    },
    {
      q: 'How much weight do I need to lose to help plantar fasciitis?',
      cites: [CITE.butterworthBmi],
      a: 'No study has worked out an amount. There is no trial of weight loss for heel pain, so any number you read is a guess. If you want to lose weight for your health, talk to your doctor. For the heel itself, stretching and calf strength work have the strongest evidence, at any weight.',
    },
    {
      q: 'Is BMI a risk factor for plantar fasciitis in runners?',
      cites: [CITE.irvingHeelPain, CITE.butterworthBmi],
      a: 'Mostly not. Two systematic reviews found that BMI was linked to chronic heel pain in people who are not athletes, but not in athletes. See [heel pain in runners](/heel-pain-runners/) for the factors that matter more in runners.',
    },
    {
      q: 'What exercise can I do with plantar fasciitis if I am overweight?',
      cites: [CITE.guideline],
      a: 'Seated and supported exercises are a good start: a plantar fascia stretch sitting down, calf stretches at a wall, and seated heel raises. For fitness, a stationary bike, swimming or walking in water keep you moving with less load on the heel. The 2023 guideline advises changing the load on your feet rather than stopping activity.',
    },
    {
      q: 'Do weight loss medicines help plantar fasciitis?',
      cites: [CITE.yangSemaglutide],
      a: 'There is one observational study. People with long-standing heel pain who took semaglutide reported more improvement than those who did not, but they were not randomly assigned, and the authors call for a randomized trial. It is a decision for you and your doctor, not something to start for heel pain alone.',
    },
    {
      q: 'Why do my heels hurt more after I gain weight?',
      cites: [CITE.guideline, CITE.songWeightLoss],
      a: 'More body weight means more load on the plantar fascia with every step, and heel pain often starts after the load on your feet goes up. In a trial of 41 adults, losing weight lowered pressure under parts of the foot. Heel pain was not measured in that trial, so the link to pain is likely but not proven.',
    },
    {
      q: 'Will plantar fasciitis go away without weight loss?',
      cites: [CITE.latt, CITE.hansen],
      a: 'For most people, yes. About 90% get better with non-surgical care such as stretching and insoles, often within 3 to 6 months. In a long follow-up of 174 people, BMI did not predict who still had heel pain years later. Being a woman and having pain in both heels did.',
    },
    {
      q: 'Are insoles more important if I am heavier?',
      cites: [CITE.guideline],
      a: 'No study has tested that. For heel pain in general, the 2023 guideline advises against relying on insoles alone (grade B against) and gives them a C when combined with stretching and strength work. Cushioned shoes on hard floors are a practical option, though trials have not tested them. See [insoles or exercises](/insoles-vs-exercises/).',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have diabetes and notice numbness, tingling, a wound, or changes in the skin or shape of your foot',
      'the pain started after a fall, a jump or a twist, or you cannot put weight on the foot',
      'the heel is swollen, red or warm, or you have a fever',
      'the pain is worse at night or at rest, or comes with burning or numbness',
      'it hurts when you squeeze the sides of the heel, or the pain keeps building with activity (possible stress fracture)',
      'one calf is painful and swollen (possible blood clot): get help the same day',
      'both heels hurt along with joint pain or stiffness elsewhere',
      'you are thinking about weight loss medicines or surgery: that is a conversation for your doctor',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. It does not track your weight or give diet advice. It builds a plan from the stretches and calf strength work on this page and starts with seated and supported versions.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPain', 'walkingPf', 'standing'],
  crumb: 'Weight and plantar fasciitis',
  campaign: 'guide-weight-and-plantar-fasciitis',
};
