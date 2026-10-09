import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/vs-exakt.ts` (2026-10-08), French (France) with
 * «vous». Prices stay in US dollars as listed on the US App Store (written
 * with a decimal comma), ratings, review counts and language lists are
 * identical to the English page. No new citations.
 */

export const VS_EXAKT_FR: Guide = {
  lang: 'fr',
  page: 'vsExakt',
  published: '2026-10-08',
  updated: '2026-10-09',
  title: 'Walkito vs Exakt Health\u00A0: comparatif (2026)',
  description:
    'Walkito ou Exakt Health\u00A0: problèmes couverts, prix, plateformes, plan, données scientifiques, langues, confidentialité. Vérifié en octobre 2026.',
  h1: 'Walkito vs Exakt Health\u00A0: laquelle vous convient\u00A0?',
  lede:
    'Walkito et Exakt Health proposent toutes les deux des plans d’exercices pour la fasciite plantaire, mais elles sont conçues pour des personnes différentes. Exakt est une application pour coureurs, avec plus de 15\u00A0plans de rééducation de blessures et un programme de reprise de la course. Walkito est une application plus ciblée, centrée sur la douleur au talon, les pieds plats et l’adaptation quotidienne à la douleur. Cette page les compare honnêtement, dit où Exakt est le meilleur choix, et explique ce que Walkito fait différemment.',
  intro: [
    'C’est Walkito qui publie cette page. Lisez donc les informations sur Exakt (tirées de sa fiche App Store, de sa fiche Google Play et de son site officiel, toutes vérifiées en octobre 2026) et faites-vous votre propre avis. Les liens vers chaque source sont sous le tableau comparatif.',
  ],
  takeaways: [
    'Exakt Health couvre plus de 15\u00A0blessures de course et propose des plans d’entraînement à la course du 5\u00A0km au marathon. Walkito couvre uniquement la douleur au talon, les pieds plats et la douleur au tibia.',
    'Exakt est sur iOS et Android. Walkito n’est que sur iOS en octobre 2026.',
    'Exakt Health est certifiée comme dispositif médical dans l’UE. Walkito n’est pas un dispositif médical.',
    'Walkito ajuste chaque séance à partir d’un bilan de douleur le matin et teste l’asymétrie gauche-droite tous les 14\u00A0jours. Exakt adapte son plan à partir d’un retour en fin de séance.',
    'Exakt coûte 19,99\u00A0$/mois ou 59,99\u00A0$ pour six mois. Walkito coûte 44,99\u00A0$/an ou 7,99\u00A0$/semaine.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Comparatif côte à côte',
      paragraphs: [
        'Chaque information sur Exakt ci-dessous a été vérifiée sur la fiche App Store d’Exakt Health, sa fiche Google Play et exakthealth.com en octobre 2026. Chaque information sur Walkito vient de la fiche App Store de Walkito, de walkito.site et du code source de l’application.',
      ],
      table: {
        caption: 'Walkito vs Exakt Health (vérifié en octobre 2026)',
        head: ['', 'Walkito', 'Exakt Health'],
        rows: [
          [
            'Spécialité',
            'Douleur au talon, pieds plats, douleur au tibia, station debout toute la journée',
            'Blessures de course (plus de 15) et entraînement à la course (du 5\u00A0km au marathon)',
          ],
          [
            'Plateformes',
            'iOS uniquement (Android prévu)',
            'iOS et Android',
          ],
          [
            'Prix',
            '44,99\u00A0$/an ou 7,99\u00A0$/semaine',
            '19,99\u00A0$/mois, 39,99\u00A0$/3\u00A0mois ou 59,99\u00A0$/6\u00A0mois (rééducation)\u00A0; plans de course jusqu’à 99,99\u00A0$/an',
          ],
          [
            'Essai gratuit',
            'Non indiqué sur l’App Store (les conditions prévoient des offres de lancement)',
            'Essai gratuit de 7\u00A0jours',
          ],
          [
            'Durée des séances',
            '3, 5 ou 10\u00A0minutes',
            'Variable selon le plan (en général 15-30\u00A0minutes)',
          ],
          [
            'Adaptation à la douleur',
            'Le bilan du matin ajuste chaque séance\u00A0; à 7/10 ou plus, la séance passe à un travail léger en position assise',
            'Le retour en fin de séance ajuste la progression entre les niveaux',
          ],
          [
            'Tests de progrès',
            'Tous les 14\u00A0jours\u00A0: montées sur pointes, maintien de la voûte, équilibre, comparaison gauche-droite',
            'Suivi dynamique des progrès à travers les niveaux du plan',
          ],
          [
            'Vidéos d’exercices',
            'Oui, des clips dans l’application pour chaque exercice',
            'Oui, plus de 600\u00A0vidéos d’exercices',
          ],
          [
            'Reprise de la course',
            'Non incluse (s’ajuste à la charge de course via les pas d’Apple Santé)',
            'Oui, programme marche-course à la fin de chaque plan de rééducation',
          ],
          [
            'Langues',
            'Anglais, russe, espagnol, portugais, français, italien, allemand',
            'Anglais, français, allemand, espagnol',
          ],
          [
            'Dispositif médical',
            'Non',
            'Oui, certifiée dans l’UE',
          ],
          [
            'Accès à un professionnel de santé',
            'Aucun (programme d’exercices uniquement)',
            'Aucun dans l’application (conçue par des kinésithérapeutes du sport diplômés)',
          ],
          [
            'Intégration des données de santé',
            'Apple Santé (pas, sommeil, asymétrie de la marche, vitesse de marche, fréquence cardiaque)',
            'Intégration montre connectée pour le suivi des courses',
          ],
          [
            'Confidentialité',
            'Les données Apple Santé restent sur l’appareil. Scores de douleur et séances synchronisés avec le compte. Pas de pistage publicitaire.',
            'Identifiants utilisés pour le pistage. Données financières collectées. Données chiffrées en transit. Suppression possible.',
          ],
          [
            'Note App Store',
            'Pas encore notée (sortie le 2\u00A0oct. 2026)',
            '4,8 sur 5 (125\u00A0notes)',
          ],
          [
            'Développeur',
            'Aigum Kalasov',
            'Exakt Health GmbH (Berlin)',
          ],
        ],
      },
      sourceNote:
        'Sources Exakt\u00A0: App Store (apps.apple.com/us/app/exakt-running-pt-trainer/id1638338198), Google Play (play.google.com/store/apps/details?id=exakt.mobile.android.release), exakthealth.com/en-US/pricing, exakthealth.com/en-US/about-us. Sources Walkito\u00A0: App Store (apps.apple.com/app/id6813076846), walkito.site.',
    },
    {
      h2: 'Pour qui Exakt Health est-elle conçue\u00A0?',
      paragraphs: [
        'Exakt Health est conçue pour les coureurs. C’est son identité de base, et tout dans l’application le reflète. Si vous êtes coureur et que vous récupérez d’une fasciite plantaire, d’une tendinopathie d’Achille, d’une entorse de cheville, d’une lésion des ischio-jambiers ou d’une lésion du ménisque, Exakt a un plan de rééducation propre à votre blessure. Elle couvre plus de 15\u00A0problèmes différents.',
        'Chaque plan de rééducation se termine par un programme marche-course de reprise de la course, l’une des étapes de la récupération les plus difficiles à bien gérer seul. L’application propose aussi des plans d’entraînement à la course pour toutes les distances, du canapé au 5\u00A0km jusqu’au marathon.',
        'Exakt a été fondée en 2021 par Philip Billaudelle, Lucia Payo et Maryke Louw. Elle est conçue par des kinésithérapeutes du sport diplômés et des entraîneurs de course, et a levé environ 2,2\u00A0millions d’euros en amorçage en septembre 2024. L’équipe est basée à Berlin. L’application est certifiée comme dispositif médical dans l’UE, ce qui veut dire qu’elle a passé un examen réglementaire pour son usage prévu.',
        'Si vous êtes coureur et avez besoin à la fois d’une rééducation et d’un plan d’entraînement structuré, Exakt est difficile à égaler. Sa note de 4,8 sur 125\u00A0avis iOS et ses plus de 100\u00A0000\u00A0téléchargements sur Android montrent qu’elle fonctionne pour son public.',
      ],
    },
    {
      h2: 'Pour qui Walkito est-elle conçue\u00A0?',
      paragraphs: [
        'Walkito est conçue pour les personnes qui ont mal aux pieds et veulent un court plan d’exercices quotidien qui s’adapte à leur état chaque matin. Cela inclut la fasciite plantaire, les pieds plats souples et la douleur au tibia. Elle est aussi conçue pour les personnes debout toute la journée\u00A0: infirmières, employés de commerce, personnel d’entrepôt.',
        'L’application est plus ciblée qu’Exakt. Elle ne couvre ni les blessures du genou, ni les lésions des ischio-jambiers, ni les plans de course. Ce qu’elle fait différemment, c’est ajuster la séance de chaque jour à partir d’un bilan de douleur le matin plutôt que d’un retour en fin de séance. Un matin à 7/10 ou plus fait passer la journée à environ trois minutes de travail en position assise. Une grosse journée debout (mesurée par les pas d’Apple Santé) transforme la séance de renforcement suivante en séance de récupération plus légère.',
        'Walkito teste vos progrès tous les 14\u00A0jours avec des montées sur pointes, un maintien de la voûte et l’équilibre sur une jambe, et compare votre côté gauche à votre côté droit. Cette comparaison gauche-droite n’est pas suivie par la plupart des applications de ce domaine.',
        'Walkito est sortie le 2\u00A0octobre 2026. Elle est nouvelle, n’a pas encore de notes d’utilisateurs, et n’existe que sur iOS. Elle n’a ni l’historique ni l’étendue qu’Exakt a construits depuis 2021.',
      ],
    },
    {
      h2: 'Comment chaque application construit-elle votre plan\u00A0?',
      paragraphs: [
        'Exakt vous interroge sur votre blessure, votre niveau d’expérience et votre emploi du temps de la semaine, puis vous attribue un plan de rééducation structuré par niveaux. Vous passez les niveaux selon le déroulement de chaque séance. Une fois la rééducation terminée, vous pouvez passer directement à un plan d’entraînement à la course sans repartir de zéro.',
        'Walkito vous interroge sur l’endroit de la douleur, le côté, votre niveau d’activité, votre objectif, et le nombre de jours et de minutes dont vous disposez. Elle construit un plan hebdomadaire autour d’objectifs mesurés\u00A0: des matins sans douleur, un maintien de la voûte de 60\u00A0secondes, 25\u00A0montées sur pointes sur une jambe, 30\u00A0secondes d’équilibre sur une jambe, et la symétrie gauche-droite. Chaque semaine, elle reconstruit le plan à partir du déroulement de la semaine précédente. Un seul objectif est prioritaire à la fois. Quand un objectif est atteint, il passe en entretien et le suivant commence.',
        'La principale différence\u00A0: Exakt suit une progression structurée par niveaux. Walkito suit une progression par objectifs, où le bilan de chaque matin ajuste l’intensité de la journée.',
      ],
    },
    {
      h2: 'Quels problèmes chaque application couvre-t-elle\u00A0?',
      keyFact: 'Les exercices de Walkito suivent la recommandation de 2023 sur la douleur au talon, qui donne aux étirements du fascia plantaire et du mollet la note A et au renforcement musculaire la note B (Koc et coll., 2023).',
      paragraphs: [
        'C’est là qu’Exakt est nettement plus forte. Ses plans de rééducation couvrent la fasciite plantaire, la tendinopathie d’Achille, les entorses de cheville, les lésions des ischio-jambiers, les lésions du ménisque, le genou du coureur et d’autres encore. Si votre douleur est au genou, à la hanche ou aux ischio-jambiers, Walkito n’a pas de plan pour cela.',
        'Walkito couvre la fasciite plantaire, les pieds plats (souples), la douleur au talon liée à la station debout et la douleur au tibia. Ses exercices suivent la recommandation de 2023 sur la douleur au talon (étirements note A, renforcement note B) et l’essai de Rathleff 2015 (montées sur pointes avec charge pour la fasciite plantaire). Pour ces problèmes précis, elle a des exercices, une logique de progression et une adaptation à la douleur. Pour tout ce qui sort de ce cadre, Exakt ou une application plus large comme Prehab est le bon choix.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Combien coûtent Walkito et Exakt Health\u00A0?',
      paragraphs: [
        'Walkito coûte 44,99\u00A0$ par an ou 7,99\u00A0$ par semaine. Le prix annuel revient à environ 0,87\u00A0$ par semaine. Aucun essai gratuit n’est indiqué sur l’App Store, même si les conditions d’utilisation prévoient des offres de lancement.',
        'Exakt coûte 19,99\u00A0$ par mois pour les plans de rééducation, avec des formules de 3\u00A0mois (39,99\u00A0$) et de 6\u00A0mois (59,99\u00A0$). Les plans d’entraînement à la course vont jusqu’à 99,99\u00A0$ par an. Chaque abonnement commence par un essai gratuit de 7\u00A0jours.',
        'Sur une année complète\u00A0: l’abonnement annuel de Walkito coûte 44,99\u00A0$. La formule de rééducation la moins chère d’Exakt (le plan de 6\u00A0mois renouvelé deux fois) revient à environ 120\u00A0$. Avec un plan de course en plus, Exakt peut dépasser 200\u00A0$ par an.',
        'Si vous avez seulement besoin d’exercices pour la douleur au talon ou au pied, Walkito est nettement moins chère. Si vous avez besoin d’une rééducation de blessure de course plus un plan d’entraînement, le prix plus élevé d’Exakt couvre davantage.',
      ],
    },
    {
      h2: 'Plateformes et langues',
      paragraphs: [
        'Exakt Health est sur iOS et Android. Si vous utilisez un téléphone Android, c’est à lui seul le critère décisif, puisque Walkito n’est que sur iOS.',
        'Exakt est disponible en anglais, en français, en allemand et en espagnol. Walkito est disponible en anglais, en russe, en espagnol, en portugais, en français, en italien et en allemand. Les langues communes sont l’anglais, l’espagnol, le français et l’allemand. Si vous avez besoin du russe, du portugais ou de l’italien, Walkito est la seule option des deux.',
      ],
    },
    {
      h2: 'Confidentialité',
      paragraphs: [
        'Walkito lit les données Apple Santé (pas, sommeil, asymétrie de la marche, vitesse de marche, fréquence cardiaque au repos) et les garde sur l’appareil. Elles ne sont jamais envoyées. Ce qui est synchronisé avec le compte Walkito, ce sont les scores de douleur, les données de séance et les résultats des tests. Il n’y a pas de pistage publicitaire.',
        'L’étiquette de confidentialité d’Exakt Health sur l’App Store indique les identifiants comme données utilisées pour vous pister, et les achats, les identifiants, les données d’utilisation et les diagnostics comme données collectées mais non liées à votre identité. Sa fiche Google Play indique qu’aucune donnée n’est partagée avec des tiers, que des données financières peuvent être collectées, que les données sont chiffrées en transit et que leur suppression est possible.',
        'Les deux applications collectent des données d’utilisation classiques. Aucune ne vend de données de santé. L’approche de Walkito, qui garde les données Apple Santé sur l’appareil, est un modèle de confidentialité plus strict.',
      ],
    },
    {
      h2: 'Sur quelles données scientifiques chaque application repose-t-elle\u00A0?',
      paragraphs: [
        'Exakt Health est certifiée comme dispositif médical dans l’UE (Allemagne), ce qui demande des preuves de sécurité et d’usage prévu. L’application est conçue par des kinésithérapeutes du sport diplômés. Elle indique que ses méthodes sont fondées sur des preuves, mais ne cite pas d’études précises sur sa fiche App Store ni sur sa page de prix.',
        'Walkito liste ses sources sur son site. Ses exercices suivent la recommandation clinique de 2023 sur la douleur au talon (Koc et coll., JOSPT), l’essai de Rathleff 2015 sur les montées sur pointes avec charge lourde, l’essai de Brijwasi 2023 sur les exercices pour les pieds plats, et d’autres. Chaque exercice de l’application porte un niveau de preuve (solide, modéré ou préliminaire) avec une explication en une ligne.',
        'Aucune des deux applications n’a publié son propre essai clinique. Les deux s’appuient sur la recherche existante, appliquée à travers leurs programmes respectifs.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quand Exakt Health est-elle le meilleur choix\u00A0?',
      paragraphs: [
        'Choisissez Exakt Health si l’un des points suivants vous correspond\u00A0:',
      ],
      bullets: [
        'Vous êtes coureur, vous récupérez d’une blessure de course et voulez un plan structuré de reprise de la course.',
        'Votre blessure n’est ni une fasciite plantaire ni des pieds plats. Exakt couvre plus de 15\u00A0problèmes\u00A0; Walkito en couvre trois.',
        'Vous utilisez un téléphone Android.',
        'Vous voulez un essai gratuit de 7\u00A0jours pour tester l’application avant de payer.',
        'La certification de dispositif médical dans l’UE compte pour vous.',
      ],
    },
    {
      h2: 'Quand Walkito est-elle le meilleur choix\u00A0?',
      paragraphs: [
        'Choisissez Walkito si l’un des points suivants vous correspond\u00A0:',
      ],
      bullets: [
        'Votre douleur est précisément une douleur au talon, une fasciite plantaire ou des pieds plats, et vous voulez un programme ciblé pour cela.',
        'Vous voulez des séances de 3 à 10\u00A0minutes plutôt que de 15 à 30.',
        'L’adaptation quotidienne à la douleur à partir d’un bilan le matin compte plus pour vous qu’une progression par niveaux.',
        'Vous voulez des tests de progrès tous les 14\u00A0jours qui comparent la gauche et la droite.',
        'Le prix compte\u00A0: Walkito, à 44,99\u00A0$ par an, coûte moins de la moitié du coût annuel le plus bas d’Exakt.',
        'Vous avez besoin de l’application en russe, en portugais ou en italien.',
        'Vous êtes debout toute la journée pour le travail, pas en train de courir, et voulez une application conçue pour cela.',
      ],
    },
  ],
  faq: [
    {
      q: 'Exakt Health est-elle meilleure que Walkito\u00A0?',
      a: 'Tout dépend de ce dont vous avez besoin. Exakt Health couvre plus de 15\u00A0blessures de course et inclut des plans de reprise de la course. Elle est sur iOS et Android et certifiée comme dispositif médical dans l’UE. Walkito se concentre sur la douleur au talon et les pieds plats, avec une adaptation quotidienne à la douleur et des séances plus courtes. Pour les coureurs avec plusieurs types de blessures, Exakt convient mieux. Pour une douleur au talon avec un ajustement quotidien, Walkito a été conçue pour cela.',
    },
    {
      q: 'Walkito est-elle moins chère qu’Exakt Health\u00A0?',
      a: 'Oui, sur une base annuelle. Walkito coûte 44,99\u00A0$ par an. La formule de rééducation la moins chère d’Exakt Health coûte 59,99\u00A0$ pour six mois, soit environ 120\u00A0$ par an. Exakt propose un essai gratuit de 7\u00A0jours\u00A0; Walkito n’en indique pas pour l’instant sur l’App Store.',
    },
    {
      q: 'Exakt Health a-t-elle un plan pour la fasciite plantaire\u00A0?',
      a: 'Oui. Exakt Health a un plan de rééducation propre à la fasciite plantaire, ainsi que des plans pour la tendinopathie d’Achille, les entorses de cheville, les lésions des ischio-jambiers, les lésions du ménisque et d’autres. Le plan fasciite plantaire se termine par un programme marche-course pour reprendre la course en sécurité, et l’application adapte le plan à mesure que vous passez ses niveaux.',
    },
    {
      q: 'Peut-on utiliser Walkito sur Android\u00A0?',
      a: 'Pas encore. Walkito n’est que sur iOS en octobre 2026. Android est prévu, mais aucune date de sortie n’a été annoncée. Si vous êtes sur Android, Exakt Health est disponible sur Google Play avec un plan de rééducation pour la fasciite plantaire, et elle fonctionne dès aujourd’hui sur Android comme sur iOS.',
    },
    {
      q: 'Exakt Health est-elle un dispositif médical\u00A0?',
      a: 'Oui. Exakt Health est certifiée comme dispositif médical dans l’UE (Allemagne). Cela veut dire qu’elle a passé un examen réglementaire sur sa sécurité et son usage prévu. Walkito n’est pas un dispositif médical et ne prétend ni poser de diagnostic ni donner de conseil médical.',
    },
    {
      q: 'Quelle application s’adapte le plus à la douleur du jour\u00A0?',
      a: 'Walkito ajuste chaque séance à partir d’un bilan de douleur le matin, avant de commencer. Un score de 7/10 ou plus rend la séance plus légère. Une journée avec beaucoup de pas déclenche une séance de récupération le lendemain. Exakt adapte son plan à partir de la note que vous donnez à chaque séance une fois terminée. L’approche de Walkito réagit davantage aux variations quotidiennes de la douleur\u00A0; celle d’Exakt est davantage centrée sur la progression globale du plan.',
    },
  ],
  redFlags: {
    h2: 'Quand une application ne suffit pas, consultez un professionnel de santé',
    bullets: [
      'votre douleur a commencé après une blessure ou une chute',
      'vous ne pouvez pas poser le pied ou vous boitez',
      'la douleur s’accompagne d’engourdissements, de fourmillements, de brûlures, d’un gonflement ou de chaleur',
      'la douleur vous réveille la nuit ou est présente au repos',
      'presser les côtés du talon fait mal, ce qui peut évoquer une fracture de fatigue plutôt qu’une fasciite plantaire',
      'la douleur s’aggrave de semaine en semaine malgré un exercice régulier',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Si Walkito semble convenir à votre situation, voici comment ça marche. Vous répondez à quelques questions sur l’endroit qui fait mal, le côté, votre niveau d’activité et votre objectif. Walkito construit un plan hebdomadaire autour d’objectifs mesurés, en commençant par des matins sans douleur. Chaque matin, un bilan ajuste la journée.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test mesure l’endurance du mollet, le maintien de la voûte et l’équilibre, et montre l’écart entre votre côté gauche et votre côté droit. Les exercices suivent la recommandation clinique de 2023 et l’essai de Rathleff 2015. Walkito est un programme d’exercices, pas un diagnostic ni un substitut à un professionnel de santé.',
    ],
    cta: 'Essayez Walkito sur l’App Store.',
  },
  crumb: 'Walkito vs Exakt Health',
  campaign: 'compare-exakt-fr',
};
