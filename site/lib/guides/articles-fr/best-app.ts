import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Meilleure app pour la fasciite plantaire (FR) ─────────────────────
 *
 * Translated from `articles/best-app.ts`, written around the French queries
 * «meilleure application fasciite plantaire», «application exercices
 * fasciite plantaire», «appli douleur talon». French (France) with «vous».
 * Prices stay in US dollars as listed on the US App Store (written with a
 * decimal comma), ratings and review counts are identical to the English
 * page. No new citations.
 */

export const BEST_APP_FR: Guide = {
  lang: 'fr',
  page: 'bestApp',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Meilleure app pour la fasciite plantaire en 2026',
  description:
    'Meilleure application pour la fasciite plantaire en 2026\u00A0: Exakt Health, Hinge Health, Prehab, PlantarCare, Arch et Walkito comparées (prix, plateformes).',
  h1: 'Meilleure app pour la fasciite plantaire\u00A0: le guide comparatif 2026',
  lede:
    'Cette page compare sept applications qui proposent des exercices pour la fasciite plantaire, les pieds plats ou les douleurs de pied en général. Walkito en fait partie, et c’est Walkito qui publie cette page\u00A0: mieux vaut que vous le sachiez d’emblée. Le but est d’être juste, de dire où les autres sont meilleures, et de vous donner assez de détails pour choisir celle qui correspond à votre situation.',
  intro: [
    'Il n’y a pas de meilleure application pour tout le monde. Le bon choix dépend de ce dont vous avez besoin\u00A0: un coureur qui revient d’une fasciite plantaire n’a pas les mêmes besoins qu’une personne aux pieds plats qui reste debout toute la journée au travail, et ni l’un ni l’autre n’a les mêmes besoins qu’une personne dont l’employeur prend en charge Hinge Health. Les critères ci-dessous expliquent quoi regarder, et le tableau qui suit montre où se situe chaque application.',
  ],
  takeaways: [
    'La recommandation clinique de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note A et au renforcement musculaire la note B. Une bonne application devrait inclure les deux.',
    'L’adaptation à la douleur compte\u00A0: une routine quotidienne fixe ne fait pas la différence entre un bon et un mauvais matin, et charger un fascia irrité de la même façon chaque jour peut vous faire reculer.',
    'Exakt Health est la meilleure option pour les coureurs qui reviennent d’une fasciite plantaire et veulent aussi un plan de reprise de la course, et elle est certifiée comme dispositif médical dans l’UE.',
    'Hinge Health est gratuite via certains employeurs et assurances santé et s’accompagne d’une équipe soignante complète, mais vous ne pouvez pas l’acheter vous-même.',
    'Aucune application ne peut diagnostiquer votre douleur au pied. Si votre douleur a suivi une blessure, s’accompagne d’un gonflement ou d’engourdissements, ou vous réveille la nuit, consultez un professionnel de santé avant de commencer un programme.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Que doit vraiment faire une application pour la fasciite plantaire\u00A0?',
      keyFact: 'La recommandation clinique de 2023 sur la douleur au talon note les étirements du fascia plantaire et du mollet A, sa meilleure note, et le renforcement musculaire B (Koc et coll., 2023).',
      paragraphs: [
        'Une application utile pour la fasciite plantaire doit proposer des exercices qui correspondent à ce que soutient la recherche. La recommandation clinique de 2023 sur la douleur au talon note les preuves derrière chaque approche. Les étirements du fascia plantaire et du mollet obtiennent un A, la meilleure note. Le renforcement musculaire obtient un B. Les deux devraient donc être dans l’application, pas un seul.',
        'Au-delà de la liste d’exercices, voici ce qui vaut la peine d’être vérifié avant de vous abonner\u00A0:',
      ],
      bullets: [
        '**Progression.** Les exercices doivent devenir plus difficiles avec le temps, pas rester toujours au même niveau. La recherche sur le renforcement dans la fasciite plantaire a utilisé un protocole de charge progressive.',
        '**Adaptation à la douleur.** L’application doit réagir quand la douleur est plus forte. Charger un talon douloureux de la même façon un mauvais matin est le moyen le plus rapide de perdre confiance dans le programme.',
        '**Temps par jour.** La plupart des gens ne feront pas 30\u00A0minutes d’exercices pour les pieds. Cinq à dix minutes des bons exercices, faits régulièrement, c’est plus réaliste.',
        '**Prix et essai.** Sachez ce que vous payez et s’il existe un essai gratuit pour voir si ça vous convient.',
        '**Plateformes.** Certaines applications ne sont que sur iOS. Si vous êtes sur Android, le choix est plus réduit.',
        '**Confidentialité.** Les données de douleur et de santé sont sensibles. Vérifiez si l’application les partage ou les vend.',
        '**Implication de professionnels de santé.** Une application conçue ou relue par des kinésithérapeutes diplômés est un signal raisonnable. Une application qui peut vous mettre en relation avec un professionnel de santé en est un plus fort.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Comment ces applications se comparent-elles\u00A0?',
      paragraphs: [
        'Le tableau ci-dessous couvre sept applications disponibles en octobre 2026. Chaque information a été vérifiée sur la fiche App Store ou Google Play de l’application et sur son site officiel. Les notes et le nombre d’avis sont ceux affichés sur l’App Store iOS au moment de la rédaction.',
      ],
      table: {
        caption: 'Applications pour la fasciite plantaire et les douleurs de pied comparées (octobre 2026)',
        head: ['Application', 'Plateformes et prix', 'Spécialité', 'S’adapte à la douleur\u00A0?', 'Note (iOS)'],
        rows: [
          [
            '[Exakt Health](https://www.exakthealth.com/)',
            'iOS, Android. 19,99\u00A0$/mois ou 59,99\u00A0$/6\u00A0mois\u00A0; essai gratuit de 7\u00A0jours',
            'Blessures de course (plus de 15\u00A0plans de rééducation) + entraînement à la course',
            'Oui, le plan s’adapte à vos progrès',
            '4,8 (125\u00A0notes)',
          ],
          [
            '[Hinge Health](https://www.hingehealth.com/)',
            'iOS, Android. 0\u00A0$ via l’employeur ou l’assurance santé',
            'Douleurs musculo-squelettiques en général (dos, genou, hanche, cou, périnée)',
            'Oui, personnalisé par l’équipe soignante',
            '4,9 (168\u00A0000\u00A0notes)',
          ],
          [
            '[Prehab](https://theprehabguys.com/)',
            'iOS. 49\u00A0$/mois ou ~16\u00A0$/mois facturé à l’année\u00A0; essai gratuit de 7\u00A0jours sur l’offre annuelle',
            'Plus de 55\u00A0programmes pour de nombreuses zones du corps',
            'Bilan Body Scan, puis programme fixe',
            '4,8 (~1\u00A0700\u00A0notes)',
          ],
          [
            '[PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136)',
            'iOS. Gratuite, sans achats intégrés',
            'Suivi de la douleur au talon et de la fasciite plantaire',
            'Des étapes de récupération ajustent la routine selon l’évolution de la douleur',
            'Pas encore notée',
          ],
          [
            '[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858)',
            'iOS. 9,99\u00A0$/mois ou 39,99\u00A0$/an\u00A0; essai gratuit de 7\u00A0jours',
            'Pieds plats et renforcement de la voûte',
            'Non',
            '4,3 (6\u00A0notes)',
          ],
          [
            'Plantar Fasciitis Exercises',
            'iOS, Android. Téléchargement gratuit\u00A0; achat intégré nécessaire pour l’utiliser',
            'Étirements pour la fasciite plantaire uniquement',
            'Non',
            '1,0 (1\u00A0note)',
          ],
          [
            '[Walkito](https://walkito.site/)',
            'iOS. 44,99\u00A0$/an ou 7,99\u00A0$/semaine',
            'Douleur au talon, pieds plats, station debout prolongée, coureurs',
            'Le bilan du matin ajuste chaque séance',
            'Pas encore notée (nouvelle, oct. 2026)',
          ],
        ],
      },
      sourceNote:
        'Toutes les données viennent de l’App Store, de Google Play et des sites officiels. Vérifiées en octobre 2026.',
    },
    {
      h2: 'Exakt Health\u00A0: l’application de rééducation des coureurs',
      paragraphs: [
        'Exakt Health est conçue pour les coureurs, et ça se voit. L’application propose plus de 15\u00A0plans de rééducation de blessures, de la fasciite plantaire à la tendinopathie d’Achille en passant par les lésions du ménisque, ainsi que des plans d’entraînement à la course, du canapé au marathon. Chaque plan de rééducation se termine par une phase structurée de reprise de la course, ce que la plupart des applications pour les douleurs de pied ne proposent pas.',
        'Elle est certifiée comme dispositif médical dans l’UE, ce qui veut dire qu’elle a passé un examen réglementaire sur la sécurité et l’usage prévu. Elle a été conçue par des kinésithérapeutes du sport diplômés et des entraîneurs de course. L’application compte plus de 600\u00A0vidéos d’exercices et adapte son plan à mesure que vous passez les niveaux.',
        'À 19,99\u00A0$ par mois ou 59,99\u00A0$ pour six mois, Exakt n’est pas bon marché, mais l’étendue des problèmes couverts et la qualité de ses plans de rééducation sont difficiles à égaler parmi les applications en libre-service. L’essai gratuit de 7\u00A0jours permet de voir toute l’application avant de payer. Elle est disponible en anglais, en français, en allemand et en espagnol, sur iOS et Android.',
        'Là où Exakt est plus forte que Walkito\u00A0: plus de types de blessures couverts (plus de 15, contre la douleur au talon, les pieds plats et les tibias), un programme complet de reprise de la course, la disponibilité sur Android, la certification de dispositif médical dans l’UE, et une base d’utilisateurs établie avec une note de 4,8 sur 125\u00A0avis iOS.',
        'Là où Walkito se distingue\u00A0: Walkito ajuste la séance de chaque jour à partir d’un bilan de douleur le matin plutôt qu’à partir d’un retour en fin de séance, teste l’asymétrie gauche-droite tous les 14\u00A0jours, et se concentre sur la douleur au talon et au pied plutôt que sur toute la gamme des blessures de course.',
      ],
    },
    {
      h2: 'Hinge Health\u00A0: l’option prise en charge par l’employeur',
      paragraphs: [
        'Hinge Health est la plus grande plateforme numérique pour les troubles musculo-squelettiques aux États-Unis, avec plus de 2\u00A0millions de membres. Si votre employeur ou votre assurance santé la prend en charge, elle est gratuite pour vous et offre quelque chose qu’aucune application en libre-service ne peut égaler\u00A0: une équipe soignante dédiée qui comprend des kinésithérapeutes, des médecins orthopédistes et d’autres spécialistes.',
        'L’application couvre une large gamme de problèmes articulaires et musculaires, pas seulement les pieds. Elle inclut aussi l’appareil portable Enso pour soulager la douleur aiguë. La note de 4,9 sur 168\u00A0000\u00A0avis iOS reflète la combinaison d’exercices guidés, d’accompagnement humain et de gratuité.',
        'Le hic, c’est l’accès. Vous ne pouvez pas acheter Hinge Health sur l’App Store. Il faut être couvert par l’un des plus de 2\u00A0800\u00A0employeurs ou assurances santé qui la proposent. Si vous y avez accès, c’est probablement l’option la plus complète de cette liste. Sinon, ce n’est pas une option du tout.',
        'Hinge Health n’est pas spécialisée dans le pied. Ses usages principaux sont les douleurs du dos, du genou, de la hanche et du cou. Pour la fasciite plantaire en particulier, une application plus ciblée peut être un meilleur point de départ.',
      ],
    },
    {
      h2: 'Prehab\u00A0: la plus grande bibliothèque d’exercices',
      paragraphs: [
        'L’application The Prehab Guys est conçue par des docteurs en kinésithérapie (Doctors of Physical Therapy) et a la plus grande bibliothèque d’exercices de ce comparatif\u00A0: plus de 55\u00A0programmes, plus de 170\u00A0séances et plus de 4\u00A0000\u00A0vidéos d’exercices. Elle a un programme de rééducation spécifique pour la fasciite plantaire. La fonction Body Scan vous interroge sur votre douleur, vos objectifs et vos besoins de mouvement, puis recommande un programme.',
        'À 49\u00A0$ par mois ou environ 200\u00A0$ par an, c’est l’option en libre-service la plus chère ici. L’essai gratuit de 7\u00A0jours ne concerne que l’offre annuelle. Les séances durent environ 20\u00A0minutes, plus que les 3 à 10\u00A0minutes des applications centrées sur le pied. La qualité des vidéos est régulièrement saluée dans les avis.',
        'Prehab convient bien si vous avez mal à plusieurs endroits et voulez une seule application qui couvre tout, des épaules aux pieds. Elle est moins ciblée que les applications conçues spécifiquement pour la fasciite plantaire, et elle n’adapte pas les séances quotidiennes à votre douleur du matin.',
        'Elle n’existe que sur iOS et qu’en anglais.',
      ],
    },
    {
      h2: 'PlantarCare\u00A0: le suivi gratuit',
      paragraphs: [
        'PlantarCare est gratuite, sans achats intégrés, et ne demande pas de compte. Elle se concentre entièrement sur la douleur au talon et la fasciite plantaire. Vous notez votre douleur aux premiers pas du matin et votre pire douleur de la journée, et l’application vous fait passer par des étapes de récupération avec des étirements guidés, du travail du mollet, des montées sur pointes et des rappels pour la glace adaptés à votre étape.',
        'Pour une application gratuite, elle fait étonnamment bien beaucoup de choses\u00A0: suivi de la douleur dans le temps, journal des chaussures et de la charge, et rappels de signaux d’alerte qui vous disent quand consulter un professionnel de santé. En contrepartie, elle est nouvelle, n’a pas encore de notes, et ne décrit pas la recherche derrière le choix de ses exercices.',
        'PlantarCare est un point de départ raisonnable si vous voulez suivre votre douleur gratuitement et faire des étirements de base sans vous engager dans un abonnement. Elle n’existe que sur iOS.',
      ],
    },
    {
      h2: 'Arch: Flat Feet Trainer',
      paragraphs: [
        'Arch est la seule application de ce comparatif entièrement consacrée aux pieds plats et au renforcement de la voûte. Elle propose plus de 40\u00A0exercices pour le pied, un suivi des progrès et un design soigné. À 39,99\u00A0$ par an ou 9,99\u00A0$ par mois, avec un essai gratuit de 7\u00A0jours, le prix est modéré.',
        'Un utilisateur a noté que l’application n’a pas de vidéos d’exercices et utilise des illustrations à la place. L’application affirme que ses routines sont «\u00A0fondées sur la science\u00A0» et sur des «\u00A0principes de kinésithérapie éprouvés\u00A0», mais ne cite pas d’études précises. Avec seulement 6\u00A0notes sur l’App Store, elle en est à ses débuts.',
        'Si votre principale préoccupation est d’avoir les pieds plats sans douleur importante, Arch vaut la peine d’être essayée. Pour la fasciite plantaire, elle ne convient pas, car elle ne propose ni exercices de rééducation propres au talon ni suivi de la douleur.',
      ],
    },
    {
      h2: 'Plantar Fasciitis Exercises\u00A0: une application basique avec un paywall',
      paragraphs: [
        'Cette application de Verdhit Agarwal propose 15\u00A0exercices sur trois niveaux\u00A0: étirements doux, renforcement et exercices avancés. Elle est indiquée comme gratuite sur iOS et Android, mais les deux fiches affichent des achats intégrés, et un utilisateur a signalé qu’on lui a demandé de payer un abonnement mensuel avant de pouvoir l’utiliser.',
        'Les exercices sont basiques, avec des instructions écrites plutôt qu’une démonstration en vidéo. Il n’y a ni logique de progression, ni suivi de la douleur, ni adaptation. La seule note iOS est de 1 sur 5, et cet avis porte justement sur un paiement inattendu. C’est le genre d’application qui existe parce que «\u00A0plantar fasciitis exercises\u00A0» est une recherche très fréquente, pas parce que quelqu’un a construit un programme réfléchi.',
        'Si vous voulez une référence gratuite des étirements à essayer, vérifiez la fiche de l’application avant de commencer, car certains exercices peuvent être derrière un paywall. Pour un vrai programme guidé avec progression, ça ne suffit pas.',
      ],
    },
    {
      h2: 'Walkito\u00A0: ce qu’elle fait et ce qu’elle ne fait pas',
      paragraphs: [
        'Walkito est une application d’exercices pour la douleur au talon, les pieds plats et les douleurs du bas de la jambe. Elle est sortie sur l’App Store le 2\u00A0octobre 2026. Elle est nouvelle, n’a pas encore de notes et n’existe que sur iOS.',
        'Ce qu’elle fait\u00A0: elle construit un plan hebdomadaire à partir de vos réponses sur la douleur, les objectifs et votre emploi du temps. Chaque matin, un bilan ajuste la séance du jour à l’état de votre pied. Des tests tous les 14\u00A0jours mesurent les montées sur pointes, le maintien de la voûte et l’équilibre sur une jambe, et comparent la gauche et la droite. Les séances durent 3, 5 ou 10\u00A0minutes. Les exercices suivent la recommandation de 2023 sur la douleur au talon et l’essai de Rathleff 2015. Elle se connecte à Apple Santé pour les pas, le sommeil et les données de marche, qui restent sur votre téléphone.',
        'Ce qu’elle ne fait pas\u00A0: elle ne diagnostique pas votre douleur, ce n’est pas un dispositif médical, il n’y a pas de professionnel de santé de l’autre côté et elle n’est pas disponible sur Android. Elle couvre la douleur au talon, les pieds plats et la douleur au tibia, pas les plus de 15\u00A0types de blessures que couvre Exakt ni le corps entier comme Hinge Health ou Prehab.',
        'À 44,99\u00A0$ par an ou 7,99\u00A0$ par semaine, le prix annuel est plus bas que celui de la plupart des concurrentes. Le prix hebdomadaire est plus élevé par rapport à l’annuel, ce qui est classique pour un abonnement.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Comment choisir la bonne application pour la fasciite plantaire\u00A0?',
      paragraphs: [
        'Partez de votre situation, pas des listes de fonctionnalités.',
      ],
      bullets: [
        '**Vous êtes coureur avec une fasciite plantaire** et voulez une reprise de la course structurée\u00A0: [Exakt Health](https://www.exakthealth.com/) est le meilleur choix.',
        '**Votre employeur prend en charge Hinge Health**\u00A0: vérifiez votre éligibilité. Une équipe soignante avec des kinésithérapeutes et des médecins, c’est difficile à battre pour 0\u00A0$.',
        '**Vous avez mal à plusieurs endroits du corps**, pas seulement aux pieds\u00A0: [Prehab](https://theprehabguys.com/) vous donne plus de 55\u00A0programmes avec un seul abonnement.',
        '**Vous voulez un point de départ gratuit** pour suivre votre douleur au talon et essayer des étirements de base\u00A0: [PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136) le fait bien, gratuitement.',
        '**Votre problème principal, ce sont les pieds plats** sans douleur importante\u00A0: [Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858) est conçue exactement pour ça.',
        '**Vous voulez un plan quotidien pour la douleur au talon ou les pieds plats qui s’adapte à votre matin** et teste vos progrès\u00A0: c’est pour cela que [Walkito](https://walkito.site/) a été conçue.',
      ],
    },
  ],
  faq: [
    {
      q: 'Existe-t-il une application gratuite pour la fasciite plantaire\u00A0?',
      a: 'PlantarCare est gratuite, sans achats intégrés. Elle suit la douleur du matin, propose des étirements adaptés à votre étape de récupération et montre l’évolution dans le temps. L’application «\u00A0Plantar Fasciitis Exercises\u00A0» est indiquée comme gratuite mais affiche des achats intégrés sur la fiche, et un utilisateur a signalé avoir dû payer pour l’utiliser. Des deux, PlantarCare est l’option gratuite la plus fiable.',
    },
    {
      q: 'Quels exercices doit proposer une application pour la fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'La recommandation clinique de 2023 sur la douleur au talon donne aux étirements du fascia plantaire et du mollet la note A et au renforcement musculaire la note B. Une bonne application devrait inclure les deux\u00A0: des étirements pour le fascia et le mollet, et un renforcement progressif du mollet comme les montées sur pointes. Des exercices qui deviennent plus difficiles et s’adaptent à votre niveau de douleur sont plus utiles qu’une liste figée.',
    },
    {
      q: 'Exakt Health est-elle meilleure que Walkito pour la fasciite plantaire\u00A0?',
      a: 'Exakt Health couvre plus de problèmes, dont plus de 15\u00A0blessures de course et des plans complets d’entraînement à la course. Elle est sur iOS et Android et certifiée comme dispositif médical dans l’UE. Walkito se concentre sur la douleur au talon et au pied, avec une adaptation quotidienne à la douleur et des tests de progrès tous les 14\u00A0jours. Exakt est le meilleur choix pour les coureurs qui ont besoin de rééducation et d’un plan de course. Walkito est plus ciblée mais ajuste chaque séance à votre matin.',
    },
    {
      q: 'Une application peut-elle remplacer un kiné pour la fasciite plantaire\u00A0?',
      a: 'Aucune application ne remplace un professionnel de santé qui peut examiner votre pied, écarter d’autres causes et ajuster un plan en temps réel. Une application est utile pour des exercices guidés au quotidien entre les rendez-vous, ou comme point de départ quand la douleur est légère et correspond au schéma typique de la fasciite plantaire. Si la douleur vient d’une blessure, s’accompagne d’un gonflement ou d’engourdissements, ou s’aggrave, consultez d’abord un professionnel de santé.',
    },
    {
      q: 'Hinge Health est-elle gratuite\u00A0?',
      a: 'Hinge Health est gratuite pour les membres dont l’employeur ou l’assurance santé la prend en charge. Vous ne pouvez pas l’acheter directement sur l’App Store. Vérifiez votre éligibilité sur hinge.health/covered. Si vous êtes couvert, elle inclut une équipe soignante avec des kinésithérapeutes et des médecins, sans frais pour vous.',
    },
    {
      q: 'Pourquoi Walkito ne se dit-elle pas la meilleure application pour la fasciite plantaire\u00A0?',
      a: 'Parce que ce ne serait pas honnête. Walkito est nouvelle, n’a pas encore de notes d’utilisateurs, couvre moins de problèmes qu’Exakt Health, et n’a pas de professionnel de santé de l’autre côté comme Hinge Health. Ce qu’elle fait bien, c’est ajuster chaque jour à votre douleur et tester vos progrès tous les 14\u00A0jours. Que ce soit la bonne application pour vous dépend de ce dont vous avez besoin.',
    },
    {
      q: 'Ces applications marchent-elles sur Android\u00A0?',
      a: 'Exakt Health et Hinge Health sont sur iOS et Android. «\u00A0Plantar Fasciitis Exercises\u00A0» est aussi sur les deux, mais affiche des achats intégrés sur chaque store. Walkito, Prehab, PlantarCare et Arch ne sont pour l’instant que sur iOS. Si vous êtes sur Android, Exakt Health est l’option la plus complète pour les douleurs de pied.',
    },
    {
      q: 'Faut-il une application pour faire les exercices de la fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'Non, une application n’est pas indispensable. Vous pouvez faire les exercices qui ont les meilleures preuves, comme les étirements du fascia et la progression des montées sur pointes, à partir d’une fiche imprimée ou d’un document remis par un professionnel de santé. Ce qu’une application apporte en général, ce sont des rappels, un suivi des progrès et des règles de rythme basées sur la douleur, qui aident certaines personnes à tenir le plan plus longtemps, pas un exercice différent.',
    },
    {
      q: 'À quelle fréquence utiliser une application d’exercices pour la fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'La plupart des programmes d’exercices pour la fasciite plantaire, y compris ceux les mieux notés par la recommandation de 2023 sur la douleur au talon, reposent sur des séances quotidiennes ou presque pendant environ trois mois, pas sur un usage occasionnel. Une application est la plus utile quand vous l’ouvrez la plupart des jours, car c’est la régularité qui produit l’effet de la charge, pas une fonctionnalité en particulier.',
    },
  ],
  redFlags: {
    h2: 'Quand une application ne suffit pas, consultez un professionnel de santé',
    bullets: [
      'votre douleur a commencé après une blessure ou une chute',
      'vous ne pouvez pas poser le pied ou vous boitez',
      'la douleur s’accompagne d’engourdissements, de fourmillements, de brûlures, d’un gonflement ou de chaleur',
      'le talon est rouge, ou vous avez de la fièvre',
      'la douleur vous réveille la nuit ou est présente au repos',
      'les deux pieds font mal et d’autres articulations sont gonflées ou raides',
      'la douleur s’aggrave de semaine en semaine malgré l’exercice',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Si vous avez lu jusqu’ici et que Walkito semble vous convenir, voici comment ça marche. Vous répondez à quelques questions sur l’endroit qui fait mal, le côté, votre niveau d’activité et votre objectif. Walkito construit un plan hebdomadaire autour de ces réponses. Chaque matin, un bilan ajuste la journée. Tous les 14\u00A0jours, un court test mesure l’endurance du mollet, le maintien de la voûte et l’équilibre sur une jambe.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Les exercices suivent la recommandation clinique de 2023 sur la douleur au talon. Le plan n’a pas de date de fin fixe\u00A0: quand vous atteignez un objectif, il passe en entretien et le suivant prend sa place. Walkito est un programme d’exercices, pas un diagnostic ni un substitut à un professionnel de santé.',
    ],
    cta: 'Essayez Walkito sur l’App Store.',
  },
  crumb: 'Meilleure app fasciite plantaire',
  campaign: 'compare-best-app-fr',
};
