import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-calf-raises.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const EX_CALF_RAISES_FR: Guide = {
  lang: 'fr',
  page: 'exCalfRaises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Montées sur pointes (mollets)\u00A0: bien les faire',
  description:
    'Bien faire les montées sur pointes pour les mollets\u00A0: debout, assis, maintien isométrique, muscles travaillés, séries, erreurs fréquentes, pour qui.',
  h1: 'Montées sur pointes\u00A0: comment bien les faire, avec séries, répétitions et variantes',
  lede:
    'Une montée sur pointes est un exercice debout ou assis où vous poussez pour monter sur l’avant des pieds. Elle renforce le gastrocnémien (le plus gros muscle du mollet, le plus superficiel) et le soléaire (le plus profond), et elle charge le tendon d’Achille et le fascia plantaire à chaque répétition. Cette page présente la montée sur deux pieds debout, la version assise et le maintien isométrique en haut.',
  takeaways: [
    'La recommandation de 2023 sur la douleur au talon donne au renforcement du mollet la note B et le conseille avec les étirements, qu’elle note A (Koc et coll., 2023).',
    'Une étude de valeurs de référence sur 566\u00A0adultes en bonne santé (de 20 à 81\u00A0ans) a trouvé un nombre médian de montées sur pointes sur une jambe de 24\u00A0répétitions chez les hommes et de 21 chez les femmes, variable selon l’âge, le sexe et le niveau d’activité (Hébert-Losier et coll., 2017).',
    'Une flexion dorsale de cheville réduite, souvent due à un gastrocnémien raide, était le plus fort facteur de risque indépendant de fasciite plantaire dans une étude cas-témoins appariée sur 50\u00A0cas et 100\u00A0témoins (Riddle et coll., 2003).',
    'Les montées sur pointes debout chargent surtout le gastrocnémien. Les montées sur pointes assis déplacent la charge vers le soléaire, car le genou plié raccourcit le gastrocnémien.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Quels muscles les montées sur pointes font-elles travailler\u00A0?',
      paragraphs: [
        'Les montées sur pointes debout, genou tendu, font surtout travailler le gastrocnémien, le muscle à deux chefs qui donne au mollet sa forme visible. Le gastrocnémien passe par le genou et par la cheville, il est donc le plus actif quand le genou est tendu.',
        'Les montées sur pointes assis déplacent la charge vers le soléaire, le muscle profond du mollet situé en dessous. Le soléaire ne passe que par la cheville, donc plier le genou à environ 90\u00A0degrés retire en grande partie le gastrocnémien du mouvement et fait travailler le soléaire.',
        'Les deux muscles s’attachent au talon par le tendon d’Achille. Chaque montée sur pointes charge aussi un peu le fascia plantaire, car le talon est leur point d’ancrage commun. Une [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/) charge davantage le fascia en relevant les orteils.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Comment faire une montée sur pointes debout\u00A0?',
      paragraphs: [
        'Tenez-vous debout, les deux pieds à plat au sol, à peu près à largeur de hanches. Tenez-vous à un mur ou à une chaise pour l’équilibre. Montez sur l’avant des pieds en poussant par les gros orteils. Marquez un temps en haut, puis redescendez lentement en environ trois secondes. Les deux pieds se partagent la charge.',
        'Si vous avez une marche, placez l’avant des pieds sur le bord et laissez les talons descendre un peu plus bas à la descente. Cette amplitude en plus en bas étire un peu plus le mollet à chaque répétition. Au sol, l’amplitude est plus petite, mais l’exercice reste efficace.',
      ],
      exercises: [
        {
          name: 'Montées sur pointes, deux pieds',
          evidence: {
            level: 'moderate',
            why: 'La recommandation de 2023 donne au renforcement la note B. Les montées sur deux pieds sont une étape dans les programmes testés, pas testées seules.',
          },
          dose: 'Walkito commence à 3 x 10, deux pieds',
          how: 'Debout sur les deux pieds, montez bien droit au-dessus des gros orteils, puis redescendez lentement. Tenez-vous à un mur pour l’équilibre.',
          often: 'Jours de renforcement',
          feel: 'Les mollets qui travaillent ensemble',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_double',
          caption: 'Montées sur pointes, deux pieds\u00A0: montez droit, redescendez lentement',
          alt: 'Une personne debout qui monte sur la pointe des deux pieds, les mollets mis en évidence',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Comment faire une montée sur pointes assis',
      paragraphs: [
        'Asseyez-vous sur une chaise, les pieds à plat au sol, les genoux pliés à environ 90\u00A0degrés. Poussez sur l’avant des deux pieds pour décoller les deux talons du sol. Redescendez lentement. Poser les mains sur les genoux et appuyer vers le bas ajoute de la résistance.',
        'Les montées assis sont le point d’entrée le moins chargé de la progression du mollet. Elles ne mettent presque aucune contrainte sur le talon par rapport au travail debout, ce qui en fait un bon point de départ quand les montées sur pointes debout sont trop douloureuses.',
      ],
      exercises: [
        {
          name: 'Montées sur pointes assis',
          evidence: {
            level: 'moderate',
            why: 'Fait partie de progressions de rééducation publiées (phase 1 de Silbernagel). Pas testé seul dans un essai randomisé.',
          },
          dose: 'Walkito commence à 3 x 10, deux pieds',
          how: 'Asseyez-vous, pieds à plat. Poussez sur l’avant des deux pieds. Les mains sur les genoux ajoutent de la résistance.',
          often: 'Jours de renforcement, tant que c’est votre niveau',
          feel: 'Un travail dans les mollets, très peu de charge sur le talon',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_seated',
          caption: 'Montées sur pointes assis\u00A0: poussez sur l’avant des pieds',
          alt: 'Une personne assise qui soulève les deux talons, les mollets mis en évidence',
        },
      ],
      cites: [CITE.silbernagel, CITE.guideline],
    },
    {
      h2: 'Comment faire un maintien sur pointes (isométrique)',
      paragraphs: [
        'Montez sur la pointe des deux pieds, puis restez immobile en haut. Ne laissez pas les talons redescendre. Un maintien isométrique signifie que le muscle travaille sans parcourir d’amplitude. Cela charge le tendon d’Achille sans le mouvement de montée et de descente que certaines douleurs du tendon ou du talon supportent mal à un stade précoce.',
        'La recommandation de 2024 sur le tendon d’Achille cite la charge isométrique parmi les types de mise en charge efficaces du tendon, même si aucun essai portant uniquement sur l’isométrie pour le tendon d’Achille n’a été publié.',
      ],
      exercises: [
        {
          name: 'Maintien sur pointes',
          evidence: {
            level: 'moderate',
            why: 'Cité dans la recommandation de 2024 sur le tendon d’Achille comme type de mise en charge efficace. Pas d’essai randomisé portant uniquement sur l’isométrie.',
          },
          dose: 'Walkito commence à 3 x 20\u00A0s de maintien, deux pieds',
          how: 'Montez sur la pointe des deux pieds, tenez en haut sans redescendre. Tenez-vous à un mur pour l’équilibre.',
          often: 'Jours de renforcement, l’étape entre les montées sur deux pieds et le travail sur une jambe',
          feel: 'Les mollets qui travaillent pour rester immobiles',
          stop: 'La douleur atteint 6/10',
          media: 'heel_raise_hold',
          caption: 'Maintien sur pointes\u00A0: montez, puis restez immobile en haut',
          alt: 'Une personne qui tient la position sur la pointe des deux pieds, les mollets mis en évidence',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.guideline],
    },
    {
      h2: 'Combien de montées sur pointes faire\u00A0?',
      keyFact: 'Une étude de valeurs de référence sur 566\u00A0adultes en bonne santé de 20 à 81\u00A0ans a montré que le nombre de montées sur pointes sur une jambe variait selon l’âge, le sexe et le niveau d’activité, avec une médiane de 21\u00A0répétitions chez les femmes (Hébert-Losier et coll., 2017).',
      paragraphs: [
        'Cela dépend de votre étape dans la progression et de ce que vous travaillez. Pour la force générale du mollet, **3\u00A0séries de 10 à 15\u00A0répétitions à un rythme lent sont une dose de départ courante.** Pour le protocole testé par la recherche dans la fasciite plantaire, la montée sur pointes avec serviette commence à 12RM (répétitions maximales) sur 3\u00A0séries et progresse vers 8RM sur 5\u00A0séries en environ cinq semaines.',
        'Un repère utile est le test d’endurance des montées sur pointes sur une jambe. Une étude de valeurs de référence sur 566\u00A0adultes en bonne santé a trouvé une médiane de 24\u00A0répétitions chez les hommes et de 21 chez les femmes, variable selon l’âge, le sexe et l’activité. L’objectif mollet dans l’application Walkito est de 25\u00A0montées sur pointes sur une jambe. L’atteindre ne met pas fin au travail. On passe au maintien des acquis.',
        'Pour le protocole propre à la fasciite plantaire, voir les [montées sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/). Pour la version destinée au tendon d’Achille, voir les [descentes excentriques du talon](/fr/exercices/descentes-excentriques-talon/).',
      ],
      cites: [CITE.hebertLosier, CITE.rathleff],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec les montées sur pointes\u00A0?',
      paragraphs: [
        {
          list: [
            '**Aller trop vite.** C’est une descente lente (environ trois secondes) qui développe la force. Rebondir en bas gaspille la phase excentrique, celle qui fait l’essentiel du travail d’adaptation du tendon.',
            '**Basculer sur le bord externe du pied.** La poussée doit passer par le gros orteil et l’avant du pied. Si la cheville bascule vers l’extérieur, le mollet ne peut pas se contracter pleinement et les petits muscles de l’extérieur de la cheville subissent une tension pour laquelle ils ne sont pas faits.',
            '**Sauter la version assise.** Si les montées debout sont douloureuses, passer directement au travail sur une jambe sur une marche aggrave les choses. La progression existe pour une raison\u00A0: assis, puis deux pieds debout, puis un maintien, puis une jambe. Chaque étape doit vous paraître gérable deux séances de suite avant de passer à la suivante.',
          ],
        },
      ],
    },
    {
      h2: 'Montées sur pointes\u00A0: fasciite plantaire ou tendinite d’Achille',
      paragraphs: [
        'Pour la fasciite plantaire, les données orientent vers la [montée sur pointes avec serviette](/fr/exercices/montee-sur-pointes-serviette/), où la serviette sous les orteils charge le fascia en même temps que le mollet. Le seuil de douleur est de 6/10. La page complète sur ce problème se trouve ici\u00A0: [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).',
        'Pour la tendinite d’Achille, l’accent passe aux [descentes excentriques du talon](/fr/exercices/descentes-excentriques-talon/), où la phase de descente est l’essentiel et où la serviette n’est pas utilisée. Le modèle de douleur d’un essai autorise une mise en charge jusqu’à environ 5/10, tant qu’elle se calme avant le lendemain matin. La page complète se trouve ici\u00A0: [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/).',
        'La montée sur pointes sur deux pieds, la montée assis et le maintien isométrique apparaissent dans les deux parcours comme premières étapes. Ils construisent la force de base qui rend possible l’exercice chargé spécifique.',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
  ],
  faq: [
    {
      q: 'Les montées sur pointes font-elles travailler les fessiers\u00A0?',
      a: 'Non. Les montées sur pointes ciblent le gastrocnémien et le soléaire dans le bas de la jambe. Les fessiers stabilisent la hanche pendant les variantes sur une jambe, mais ce ne sont pas les principaux muscles qui travaillent. Pour la force de la hanche et des fessiers, voir l’[abduction de hanche](/fr/exercices/abduction-hanche/).',
    },
    {
      q: 'Montées sur pointes assis ou debout\u00A0: lesquelles sont meilleures\u00A0?',
      cites: [CITE.patelGastrocnemius],
      a: 'Elles ciblent des muscles différents. Les montées debout font surtout travailler le gastrocnémien, le plus gros muscle du mollet. Les montées assis déplacent la charge vers le soléaire, le plus profond, car le genou plié retire en grande partie le gastrocnémien du mouvement. Les deux ont leur rôle, et les faire ensemble couvre tout le mollet.',
    },
    {
      q: 'Quel nombre de montées sur pointes sur une jambe est normal\u00A0?',
      cites: [CITE.hebertLosier],
      a: 'Une étude de valeurs de référence sur 566\u00A0adultes en bonne santé a trouvé une médiane de 24\u00A0répétitions chez les hommes et de 21 chez les femmes, à ajuster selon l’âge, le sexe et le niveau d’activité (Hébert-Losier 2017). Ce nombre sert à suivre l’évolution au fil des semaines et à comparer une jambe à l’autre, pas comme seuil de réussite ou d’échec.',
    },
    {
      q: 'Faut-il faire des montées sur pointes tous les jours\u00A0?',
      cites: [CITE.rathleff],
      a: 'L’essai de Rathleff sur la fasciite plantaire utilisait un jour sur deux. Les muscles et les tendons ont besoin de récupérer entre les séances chargées. Walkito place les montées sur pointes les jours de renforcement, avec des jours de repos entre eux. Une mise en charge quotidienne sans repos peut freiner les progrès ou augmenter la douleur.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez senti un claquement soudain dans le mollet ou le tendon d’Achille pendant une montée',
      'le mollet est gonflé, rouge, chaud ou dur au toucher',
      'vous ne pouvez pas du tout monter sur la pointe du pied d’un côté',
      'la douleur ne se calme pas pendant la nuit et s’aggrave d’une semaine à l’autre',
      'des engourdissements, des fourmillements ou des brûlures apparaissent dans le pied',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito construit un plan qui commence à votre niveau et monte d’un cran quand vous en êtes capable. La progression du mollet va des montées sur pointes assis aux montées sur deux pieds debout, puis au maintien, aux montées avec serviette, aux descentes excentriques du talon et aux sauts pogo. Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes.',
    more: [
      'Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet et l’équilibre. L’objectif mollet est de 25\u00A0montées sur une jambe. L’atteindre ne met pas fin au travail\u00A0: un nouvel objectif prend le relais. Walkito est un programme d’exercices. Il ne pose pas de diagnostic.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Montées sur pointes',
  campaign: 'ex-calf-raises-fr',
};
