import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Exercices pour les pieds des coureurs (FR) ─────────────────────────
 *
 * Translated from `articles/foot-exercises-for-runners.ts` (2026-10-18),
 * written around the French queries «exercices pieds coureur» and
 * «renforcement pied course à pied». French (France) with «vous».
 * Exercise names as in `lib/guides/fr.ts`. Figures, doses, sources and
 * hedges are identical to the English page after its fact-check. Same CITE
 * keys and media ids. The English link to /heel-pain-runners/ has no French
 * version, so the words stay without a link.
 */

export const RUNNERS_FOOT_EXERCISES_FR: Guide = {
  lang: 'fr',
  page: 'runnersFootExercises',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Exercices pour les pieds des coureurs\u00A0: routine et études',
  description:
    'Exercices pour les pieds en course à pied\u00A0: une routine courte pour la voûte, les mollets, les orteils et l’équilibre, avec doses, normes et études.',
  h1: 'Exercices pour les pieds des coureurs\u00A0: une routine courte et ce que montre la recherche',
  lede:
    'Une bonne routine pour les pieds du coureur travaille quatre choses\u00A0: les petits muscles de la voûte (l’exercice du pied court), l’endurance du mollet et du soléaire (montées sur pointes), la force des orteils et l’équilibre sur une jambe. Elle prend environ 10\u00A0minutes, deux à cinq fois par semaine, après une sortie facile ou un jour de repos. Dans un essai portant sur 118\u00A0coureurs amateurs, ceux qui ne suivaient pas de programme de renforcement des muscles du pied étaient 2,42\u00A0fois plus susceptibles de se blesser en courant sur 12\u00A0mois (Taddei et coll., 2020). C’est un seul essai\u00A0: le résultat est prometteur, pas acquis.',
  intro: [
    'Cette page s’adresse aux coureurs qui ne sont pas blessés, ou qui ont une petite gêne qui leur permet de continuer à courir. Si votre talon fait déjà mal quand vous courez, occupez-vous d’abord de cette douleur au talon liée à la course. Pour la progression complète de chaque exercice du pied, de la position assise à l’appui sur une jambe, voyez les [exercices de renforcement du pied](/fr/exercices-renforcement-pied/).',
  ],
  toc: true,
  takeaways: [
    'Dans un essai de 2020 portant sur 118\u00A0coureurs amateurs de fond, le groupe sans renforcement des muscles du pied était 2,42\u00A0fois plus susceptible de se blesser en courant sur 12\u00A0mois. L’effet est apparu après environ quatre à huit mois d’entraînement (Taddei et coll., 2020).',
    'Dans un essai de 2019 portant sur 57\u00A0coureurs, environ deux mois d’exercices pour le pied, au moins cinq fois par semaine, ont rendu tous les muscles du pied mesurés plus gros et plus forts (Ridge et coll., 2019).',
    'Les adultes en bonne santé font une médiane d’environ 23 à 24\u00A0montées sur pointes sur une jambe, par jambe, et le chiffre de 25 a été proposé comme référence de la normale (Hebert-Losier et coll., 2017\u00A0; Lunsford et Perry, 1995).',
    'Un programme de renforcement des hanches, des cuisses et du tronc, suivi en autonomie par 720\u00A0coureurs de leur premier marathon, n’a pas réduit les blessures de surmenage qui les empêchaient de terminer la course\u00A0: 7,1\u00A0% contre 7,3\u00A0% (Toresdahl et coll., 2020). Le renforcement seul n’a pas évité les blessures dans cet essai.',
    'Dans l’ensemble des études sur les coureurs de fond, entre 19,4\u00A0% et 79,3\u00A0% se sont blessés à la jambe, et une blessure antérieure faisait partie des facteurs de risque les plus nets (van Gent et coll., 2007).',
  ],
  sections: [
    {
      h2: 'Les exercices pour les pieds aident-ils les coureurs à éviter les blessures\u00A0?',
      keyFact: 'Dans un essai de 2020 portant sur 118\u00A0coureurs amateurs, ceux qui ne faisaient pas de renforcement des muscles du pied étaient 2,42\u00A0fois plus susceptibles de se blesser sur 12\u00A0mois (Taddei et coll.).',
      paragraphs: [
        '**Un bon essai dit oui, mais ce n’est qu’un essai.** En 2020, Taddei et ses collègues, au Brésil, ont réparti au hasard 118\u00A0coureurs amateurs de fond entre un groupe de renforcement du pied (57\u00A0coureurs) et un groupe témoin (61\u00A0coureurs). Le groupe de renforcement a suivi environ deux mois d’entraînement encadré des muscles du pied et de la cheville, puis a continué avec un suivi à distance. Tous les participants ont signalé chaque semaine, pendant un an, leurs sorties et leurs éventuelles blessures.',
        'Sur 12\u00A0mois, le groupe témoin était 2,42\u00A0fois plus susceptible de se blesser en courant. La différence est apparue après quatre à huit mois d’entraînement, pas dans les premières semaines. Les coureurs dont la force du pied avait le plus augmenté sont restés plus longtemps sans blessure.',
        'Un essai antérieur, plus petit, de la même équipe, portant sur 28\u00A0coureurs, a montré qu’environ deux mois d’entraînement du pied augmentaient le volume des petits muscles du pied et la force de poussée pendant la course (Taddei et coll., 2020).',
        'Ce que ces essais ne disent pas\u00A0: ils viennent tous deux d’un même groupe de recherche et portent sur des coureurs amateurs expérimentés qui n’étaient pas blessés au départ. Ils n’incluaient ni débutants ni coureurs ayant déjà mal, et l’on ne sait donc pas si les résultats s’appliquent à eux.',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med)\u00A0: groupe témoin 2,42\u00A0fois plus susceptible d’avoir une blessure liée à la course (IC à 95\u00A0% 1,98 à 3,62), p = 0,035, essai randomisé en simple aveugle, suivi de 12\u00A0mois. Taddei 2020 (Phys Ther Sport)\u00A0: essai randomisé de faisabilité en simple aveugle, 28\u00A0coureurs, volume musculaire mesuré par IRM, après environ deux mois.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: 'Que doit contenir la routine des pieds d’un coureur\u00A0?',
      paragraphs: [
        'Quatre parties, avec un ou deux exercices chacune. Les doses ci-dessous sont les doses de départ de Walkito. Faites-les pieds nus, et arrêtez pour la journée si la douleur dépasse 6 sur 10.',
        {
          list: [
            '**Muscles du pied\u00A0:** l’exercice du [pied court](/fr/exercices/pied-court/), debout puis sur une jambe. Il travaille les petits muscles qui soutiennent la voûte.',
            '**Mollet et soléaire\u00A0:** des montées sur pointes genou tendu pour le mollet, et genou fléchi pour le soléaire, le muscle profond du mollet.',
            '**Orteils\u00A0:** lever le gros orteil. Le gros orteil est la dernière partie du pied à quitter le sol à la poussée.',
            '**Équilibre\u00A0:** tenir sur une jambe, car la course est une succession de réceptions sur une jambe.',
          ],
        },
        'Cette routine reprend l’idée du programme de Taddei, qui travaillait d’abord les petits muscles du pied, puis les sollicitait debout et en charge. Ce n’est pas une copie de ce programme. Pour davantage de travail des orteils, voyez les [exercices de renforcement des orteils](/fr/exercices-renforcement-orteils/).',
      ],
      exercises: [
        {
          name: 'Pied court, debout',
          evidence: { level: 'moderate', why: 'Fait partie du programme de renforcement du pied des essais chez les coureurs (Taddei 2020). Pas testé seul sur les blessures.' },
          dose: '3\u00A0séries de 10, tenir 5\u00A0secondes, deux pieds',
          often: '2 à 5\u00A0jours par semaine',
          feel: 'Une contraction sous la voûte, orteils détendus',
          how: 'Tenez-vous debout, le poids sur les deux pieds. Sans recroqueviller les orteils, rapprochez l’avant du pied du talon pour que la voûte se soulève un peu. Tenez, puis relâchez. Si les orteils s’agrippent au sol, relâchez un peu l’effort.',
          stop: 'Une crampe qui ne passe pas, ou une douleur au-dessus de 6 sur 10',
          media: 'short_foot_double',
          caption: 'Pied court, debout\u00A0: la voûte se soulève, les orteils restent à plat',
          alt: 'Deux pieds nus au sol, les voûtes qui se soulèvent et les orteils à plat',
        },
        {
          name: 'Pied court, sur une jambe',
          evidence: { level: 'early', why: 'L’étape sur une jambe de la progression du pied court. Pas testée seule chez les coureurs.' },
          dose: '3\u00A0séries de 10, tenir 5\u00A0secondes, chaque pied',
          often: 'Une fois que la version debout est facile',
          feel: 'La voûte qui travaille pendant que vous tenez l’équilibre',
          how: 'Tenez-vous sur un pied, une main près d’un mur. Soulevez la voûte comme ci-dessus et maintenez-la pendant que vous tenez l’équilibre. C’est plus proche de ce que fait le pied à la réception.',
          stop: 'Une douleur au-dessus de 6 sur 10, ou une perte d’équilibre à chaque répétition',
          media: 'short_foot_single',
          caption: 'Pied court sur une jambe\u00A0: gardez la voûte pendant que vous tenez l’équilibre',
          alt: 'Une silhouette debout sur un pied nu, la voûte soulevée',
        },
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: { level: 'early', why: 'L’endurance du mollet était plus faible chez les sportifs atteints de périostite tibiale (Madeley 2007). Pas testé en prévention des blessures chez les coureurs.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '2 à 3\u00A0jours par semaine, jamais deux jours de suite',
          feel: 'Un travail dans les mollets et l’avant des pieds',
          how: 'Tenez-vous à un mur. Montez sur l’avant des deux pieds en environ 3\u00A0secondes, le poids plutôt vers le gros orteil, puis redescendez en 3\u00A0secondes. Quand c’est facile, passez sur une jambe. Plus de détails sur la page [montées sur pointes](/fr/exercices/montees-sur-pointes/).',
          stop: 'Une douleur au talon ou au tendon d’Achille au-dessus de 6 sur 10, ou pire le lendemain matin',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes\u00A0: monter lentement, descendre lentement, poids sur le gros orteil',
          alt: 'Une silhouette qui se tient à un mur et monte sur l’avant des deux pieds',
        },
        {
          name: 'Montées sur pointes assis',
          evidence: { level: 'early', why: 'Travaille le soléaire genou fléchi. Pas testé seul chez les coureurs.' },
          dose: '3\u00A0séries de 10, deux pieds',
          often: '2 à 3\u00A0jours par semaine',
          feel: 'Un travail dans le bas du mollet',
          how: 'Asseyez-vous, les pieds à plat, et poussez sur l’avant des pieds pour lever les talons. Genou fléchi, c’est le soléaire qui fait l’essentiel du travail. Un sac à dos ou des poids sur les genoux ajoutent de la charge quand l’exercice devient facile.',
          stop: 'Une douleur au-dessus de 6 sur 10',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: genou fléchi pour solliciter le soléaire',
          alt: 'Une silhouette assise qui lève les deux talons, le bas des mollets mis en évidence',
        },
        {
          name: 'Lever le gros orteil',
          evidence: { level: 'early', why: 'Une étude en IRM montre qu’il active les petits muscles du pied (Gooding 2016). Pas testé seul dans un essai clinique.' },
          dose: '3\u00A0séries de 8, tenir 5\u00A0secondes, chaque pied',
          often: '2 à 5\u00A0jours par semaine',
          feel: 'Un effort sur le dessus du pied et sous la voûte',
          how: 'Gardez les quatre petits orteils au sol et levez seulement le gros orteil. Essayez ensuite l’inverse\u00A0: gros orteil au sol, petits orteils levés. Un petit mouvement suffit au début.',
          stop: 'Une douleur à l’articulation du gros orteil',
          media: 'big_toe_lift',
          caption: 'Lever le gros orteil\u00A0: seul le gros orteil se soulève',
          alt: 'Un pied nu, le gros orteil levé et les autres orteils à plat',
        },
        {
          name: 'Équilibre sur une jambe',
          evidence: { level: 'early', why: 'Fait partie de la plupart des programmes pour le pied. Pas testé seul en prévention des blessures chez les coureurs.' },
          dose: '3\u00A0maintiens de 30\u00A0secondes, chaque côté',
          often: '2 à 5\u00A0jours par semaine',
          feel: 'De petites corrections dans le pied et la cheville',
          how: 'Tenez-vous sur un pied, le genou souple, près d’un mur. Quand 30\u00A0secondes deviennent faciles, fermez les yeux ou tenez-vous sur un coussin. Plus de détails sur la page [équilibre sur une jambe](/fr/exercices/equilibre-une-jambe/).',
          stop: 'Vous ne tenez pas sans vous rattraper au mur',
          media: 'single_leg_hold',
          caption: 'Équilibre sur une jambe\u00A0: genou souple, un mur à portée de main',
          alt: 'Une silhouette debout sur une jambe à côté d’un mur',
        },
      ],
      cites: [CITE.taddeiRRI, CITE.madeley, CITE.gooding],
    },
    {
      h2: 'Pourquoi les coureurs ont-ils besoin de mollets et de soléaires forts\u00A0?',
      keyFact: 'Jusqu’à environ 7\u00A0mètres par seconde, courir plus vite vient surtout d’une poussée plus forte dans le sol, et le soléaire et le gastrocnémien jouent un rôle clé dans cette poussée (Schache et coll., 2014).',
      paragraphs: [
        '**Les muscles du mollet assurent une grande partie de la poussée quand vous courez.** Une revue de 2014 sur le travail des muscles de la jambe pendant la course a montré que, jusqu’à environ 7\u00A0mètres par seconde, ce qui couvre presque toute la course loisir, les coureurs vont plus vite surtout en poussant plus fort dans le sol pour allonger la foulée. Les deux muscles du mollet, le soléaire et le gastrocnémien, jouent un rôle particulièrement important dans cette poussée (Schache et coll., 2014).',
        'Le soléaire se trouve sous le gastrocnémien et travaille surtout quand le genou est fléchi. C’est pourquoi la routine comprend des montées sur pointes assis, genou fléchi, en plus de la version debout. Si vos mollets sont souvent tendus après vos sorties, la page [mollets tendus](/fr/mollets-tendus/) présente les étirements, dont l’[étirement du soléaire](/fr/exercices/etirement-soleaire/).',
        'L’endurance du mollet intervient aussi dans les douleurs du tibia. Dans une étude cas-témoins, les sportifs atteints de périostite tibiale faisaient moins de montées sur pointes jusqu’à la fatigue que ceux qui n’en souffraient pas (Madeley et coll., 2007). Cela montre un lien, pas que des mollets faibles causent la périostite tibiale. Plus de détails dans [périostite tibiale\u00A0: exercices](/fr/periostite-tibiale-exercices/).',
      ],
      cites: [CITE.schache, CITE.madeley],
    },
    {
      h2: 'Combien de montées sur pointes un coureur devrait-il réussir\u00A0?',
      keyFact: 'Chez 566\u00A0adultes de 20 à 81\u00A0ans, la médiane était de 24\u00A0montées sur pointes sur une jambe à droite et de 23 à gauche (Hebert-Losier et coll., 2017).',
      paragraphs: [
        'Il n’existe pas de norme propre aux coureurs\u00A0: servez-vous des chiffres généraux des adultes comme seuil minimal. Dans une étude portant sur 566\u00A0adultes, la médiane était de 24\u00A0montées sur pointes sur une jambe à droite et de 23 à gauche, au rythme d’un temps pour monter et d’un temps pour descendre à 60\u00A0battements par minute. Le nombre baisse avec l’âge, et les personnes plus actives en faisaient davantage (Hebert-Losier et coll., 2017). Une étude plus ancienne a proposé 25 comme référence de la normale (Lunsford et Perry, 1995).',
        'Comparez aussi vos deux jambes. Un écart de plus de 10\u00A0% entre les côtés est le seuil habituel d’une différence cliniquement pertinente en rééducation de la jambe (Silbernagel et coll., 2010). Le protocole complet, une version à faire chez soi et un calculateur se trouvent sur la page [test de montée sur pointes](/fr/test-montee-sur-pointes/).',
      ],
      table: {
        caption: 'Médiane des montées sur pointes sur une jambe selon l’âge, activité modérée (Hebert-Losier 2017)',
        head: ['Âge', 'Hommes', 'Femmes'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
        ],
      },
      after: [
        'Ce sont des estimations d’un modèle pour un adulte modérément actif avec un indice de masse corporelle de 24,2, pas des seuils de réussite ou d’échec. Refaites le test toutes les quelques semaines et suivez l’évolution et l’écart entre gauche et droite.',
      ],
      sourceNote: 'Hebert-Losier 2017, tableau 4\u00A0: estimations du modèle pour un IMC de 24,2 et un niveau d’activité physique de 4, moyenne des deux jambes, arrondies. Lunsford et Perry 1995\u00A0: 203\u00A0adultes de 20 à 59\u00A0ans.',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Quand et à quelle fréquence les coureurs doivent-ils faire ces exercices\u00A0?',
      paragraphs: [
        '**Aucune étude n’a comparé les exercices pour les pieds faits après une sortie avec ceux faits un jour de repos**\u00A0: le calendrier ci-dessous est pratique, pas testé.',
        {
          list: [
            '**Après une sortie facile ou un jour de repos.** Les exercices fatiguent les petits muscles du pied\u00A0: ils trouvent mieux leur place après une sortie courte et facile qu’avant une séance difficile ou une sortie longue.',
            '**Pas juste avant une séance de fractionné ou une course.** Pour celles-ci, vous voulez des mollets frais.',
            '**Montées sur pointes 2 à 3\u00A0jours par semaine,** avec un jour de pause entre deux séances, comme pour tout renforcement.',
            '**Muscles du pied, orteils et équilibre 2 à 5\u00A0jours par semaine.** Dans l’essai de 2019, les coureurs faisaient des exercices pour les pieds au moins cinq fois par semaine et ont gagné en force en environ deux mois (Ridge et coll., 2019).',
          ],
        },
        'Laissez-vous du temps. Le volume musculaire a changé en environ deux mois dans les essais, mais la baisse des blessures dans l’essai de Taddei n’est apparue qu’après quatre à huit mois. Une routine que vous gardez pendant des mois compte plus qu’une routine difficile abandonnée au bout de trois semaines.',
      ],
      table: {
        caption: 'Exemple de semaine pour un coureur',
        head: ['Jour', 'Course', 'Routine des pieds'],
        rows: [
          ['Lun', 'Repos', 'Routine complète'],
          ['Mar', 'Fractionné', 'Aucune'],
          ['Mer', 'Facile', 'Muscles du pied, orteils, équilibre'],
          ['Jeu', 'Repos', 'Routine complète'],
          ['Ven', 'Facile', 'Muscles du pied, équilibre'],
          ['Sam', 'Sortie longue', 'Aucune'],
          ['Dim', 'Facile ou repos', 'Routine complète'],
        ],
      },
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
    },
    {
      h2: 'Peut-on faire ces exercices avec une petite gêne\u00A0?',
      paragraphs: [
        'En général oui, si la gêne est légère et stable et si vous adaptez les exercices. La règle est la même que sur le reste du site\u00A0: un peu d’inconfort est acceptable, mais arrêtez pour la journée si la douleur dépasse 6 sur 10, et allégez si c’est pire le lendemain matin.',
        'Certaines gênes changent le plan\u00A0:',
        {
          list: [
            '**Une douleur au talon aux premiers pas du matin** évoque une fasciite plantaire. Les montées sur pointes et les étirements comptent alors davantage\u00A0: voyez les [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
            '**Une douleur à l’arrière du talon ou dans le tendon d’Achille** demande une progression plus douce pour le mollet, souvent avec des descentes lentes du talon\u00A0: voyez [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/).',
            '**Une douleur le long du bord interne du tibia** peut être une périostite tibiale\u00A0: voyez [périostite tibiale\u00A0: exercices](/fr/periostite-tibiale-exercices/).',
            '**Une douleur à un point précis d’un os** qui augmente à chaque sortie est un signe d’alerte de fracture de fatigue. Arrêtez de courir et faites-la examiner.',
          ],
        },
      ],
    },
    {
      h2: 'Ce que les exercices pour les pieds ne font pas',
      paragraphs: [
        '**Ils ne remplacent pas un entraînement raisonnable.** Dans l’ensemble des études sur les coureurs de fond, entre 19,4\u00A0% et 79,3\u00A0% se sont blessés à la jambe, et un kilométrage hebdomadaire élevé chez les hommes ainsi qu’une blessure antérieure faisaient partie des facteurs de risque les plus nets (van Gent et coll., 2007). Dans une étude danoise portant sur 874\u00A0coureurs débutants, ceux qui augmentaient leur kilométrage hebdomadaire de plus de 30\u00A0% semblaient plus exposés à certaines blessures de surmenage, même si le résultat n’atteignait pas tout à fait le seuil de significativité statistique (Nielsen et coll., 2014).',
        '**Le renforcement n’est pas une protection automatique.** Dans un essai portant sur 720\u00A0coureurs de leur premier marathon de New York, un programme de 10\u00A0minutes pour les hanches, les cuisses et le tronc, suivi en autonomie trois fois par semaine pendant environ trois mois, n’a pas réduit les blessures de surmenage qui empêchaient de terminer le marathon\u00A0: 7,1\u00A0% dans le groupe renforcement contre 7,3\u00A0% chez les autres (Toresdahl et coll., 2020). Ce programme ne travaillait pas les pieds, mais il rappelle qu’une routine sur le papier n’est pas la même chose qu’un résultat.',
        '**Ils ne modifient que peu la forme de la voûte.** Dans une petite étude portant sur 21\u00A0personnes, sans groupe témoin, la voûte s’affaissait de 1,8\u00A0mm de moins après un mois d’entraînement au pied court (Mulligan et Cook, 2013). Attendez-vous à un pied plus fort et plus stable, pas à une nouvelle voûte. Les chaussures et la course pieds nus sont une autre question, traitée dans [chaussures minimalistes](/fr/chaussures-minimalistes/).',
      ],
      sourceNote: 'Toresdahl 2020\u00A0: randomisé, 720\u00A0participants inclus, risque relatif 0,97 (IC à 95\u00A0% 0,57 à 1,63), p = 0,90. Le programme ciblait les quadriceps, les abducteurs de hanche et le tronc, avec des consignes écrites et vidéo.',
      cites: [CITE.vanGent, CITE.nielsen, CITE.toresdahl, CITE.mulliganCook],
    },
  ],
  faq: [
    {
      q: 'Quels sont les meilleurs exercices pour les pieds des coureurs\u00A0?',
      cites: [CITE.taddeiRRI],
      a: 'Une courte série qui couvre quatre choses\u00A0: le pied court pour la voûte, des montées sur pointes genou tendu et genou fléchi pour le mollet et le soléaire, lever le gros orteil pour la poussée, et l’équilibre sur une jambe. Un programme de renforcement du pied construit sur la même idée a réduit les blessures de course dans un essai portant sur 118\u00A0coureurs.',
    },
    {
      q: 'Le renforcement du pied prévient-il les blessures en course à pied\u00A0?',
      cites: [CITE.taddeiRRI],
      a: 'C’est possible. Dans un essai de 2020 portant sur 118\u00A0coureurs amateurs, le groupe sans renforcement des muscles du pied était 2,42\u00A0fois plus susceptible de se blesser sur 12\u00A0mois, et l’effet est apparu après quatre à huit mois. C’est un seul essai, mené par un seul groupe de recherche\u00A0: les données sont prometteuses, mais pas encore acquises.',
    },
    {
      q: 'À quelle fréquence les coureurs doivent-ils faire des exercices pour les pieds\u00A0?',
      cites: [CITE.ridgeMinimalist],
      a: 'De 2 à 5\u00A0jours par semaine pour les muscles du pied, les orteils et l’équilibre, et de 2 à 3\u00A0jours par semaine pour les montées sur pointes, avec un jour de pause entre deux séances. Dans un essai de 2019, les coureurs qui faisaient des exercices pour les pieds au moins cinq fois par semaine ont gagné en force en environ deux mois.',
    },
    {
      q: 'Faut-il faire les exercices pour les pieds avant ou après la course\u00A0?',
      a: 'Après une sortie facile ou un jour de repos, c’est le choix pratique, car les exercices fatiguent les petits muscles du pied. Aucune étude n’a comparé les moments. Évitez une routine complète juste avant une séance de fractionné, une sortie longue ou une course, quand vous voulez des pieds et des mollets frais.',
    },
    {
      q: 'Combien de montées sur pointes sur une jambe un coureur doit-il faire\u00A0?',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry],
      a: 'Il n’existe pas de chiffre propre aux coureurs. Les adultes en bonne santé en font une médiane d’environ 23 à 24 par jambe à un rythme imposé, et 25 a été proposé comme normal. Beaucoup de coureurs actifs en font davantage. Un écart de plus de 10\u00A0% entre les jambes mérite d’être suivi. La page du test de montée sur pointes présente le protocole complet.',
    },
    {
      q: 'Combien de temps faut-il pour que les exercices pour les pieds fassent effet\u00A0?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'Dans les essais, les muscles du pied sont devenus plus gros et plus forts en environ deux mois. La baisse des blessures dans l’essai chez les coureurs a pris plus de temps et n’est apparue qu’après quatre à huit mois. Prévoyez de garder une routine courte pendant des mois, pas des semaines.',
    },
    {
      q: 'Puis-je continuer à courir pendant que je fais ces exercices\u00A0?',
      a: 'Oui. La routine est faite pour accompagner votre course. Si vous avez une petite gêne, arrêtez un exercice pour la journée si la douleur dépasse 6 sur 10, et gardez des sorties faciles si la douleur est pire le lendemain matin. Une douleur qui augmente à chaque sortie, ou qui se situe à un point précis d’un os, doit être examinée par un professionnel de santé.',
    },
    {
      q: 'La course pieds nus ou les chaussures minimalistes renforcent-elles les pieds\u00A0?',
      cites: [CITE.ridgeMinimalist],
      a: 'Dans un essai de 2019 chez des coureurs, marcher en chaussures minimalistes, avec une augmentation lente et progressive, a renforcé le pied à peu près autant que les exercices. Changer rapidement de chaussures de course est une autre affaire et comporte ses propres risques\u00A0: si vous essayez, progressez lentement.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur se situe à un point précis d’un os du pied ou du tibia et s’aggrave à chaque sortie, ce qui peut être une fracture de fatigue',
      'vous ne pouvez pas vous appuyer sur le pied, ou vous boitez en marchant',
      'la douleur a commencé par un claquement, une chute ou une entorse de la cheville',
      'le pied ou la cheville est gonflé, rouge ou chaud, ou vous avez de la fièvre',
      'vous ressentez un engourdissement, des fourmillements ou une brûlure dans le pied',
      'le talon ou le pied fait mal la nuit ou au repos',
      'la douleur continue de s’aggraver pendant deux à trois semaines malgré des sorties plus faciles',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito est une application d’exercices pour le talon et le pied qui reprend les exercices de cette page\u00A0: le pied court de la position assise à l’appui sur une jambe, les montées sur pointes, lever le gros orteil, écarter les orteils et l’équilibre sur une jambe. Elle ne planifie pas votre course\u00A0: gardez votre propre plan d’entraînement et placez les séances les jours faciles.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Avant chaque séance, vous notez comment vont vos pieds, et le plan s’adapte. Un court test tous les 14\u00A0jours vérifie les montées sur pointes, le maintien de la voûte et l’équilibre, gauche contre droite. Walkito ne pose pas de diagnostic.',
    ],
    cta: 'Commencez par une séance de 3\u00A0minutes.',
  },
  related: ['footStrengthening', 'calfRaiseTest', 'shinSplints'],
  crumb: 'Exercices pour les pieds des coureurs',
  campaign: 'guide-foot-exercises-for-runners-fr',
};
