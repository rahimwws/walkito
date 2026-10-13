import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The French Privacy Policy. It mirrors `app/(en)/privacy/page.tsx` and must
 * be updated whenever that page changes; where the two differ, the English
 * applies. The notes on what each service receives live on the English page.
 *
 * The app has no French catalogue, so its own labels (Profile → Delete
 * account) stay in English as the reader will see them. iOS and Android
 * labels are the systems' French ones.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Confidentialité',
  description:
    'Ce que Walkito collecte et pourquoi. Votre plan est enregistré dans votre compte, Apple Santé et Health Connect restent sur votre téléphone. Ni pub ni pistage.',
  alternates: alternatesFor('privacy', 'fr'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function ConfidentialiteFr() {
  return (
    <>
      <Masthead lang="fr" />

      <Prose className="shell prose">
        <h1>Confidentialité</h1>

        <p className="updated">Dernière mise à jour : 8 octobre 2026</p>
        <p className="updated">
          Ceci est une traduction. Si elle diffère de{' '}
          <a href="/privacy/">la version anglaise</a>, c’est la version anglaise
          qui s’applique.
        </p>

        <h2>En bref</h2>
        <ul>
          <li>Vous vous connectez avec Apple sur iPhone, ou avec Google sur Android, quand vous configurez Walkito.</li>
          <li>
            Votre plan, vos réponses, vos bilans de douleur, vos résultats de
            tests et les séances que vous terminez sont enregistrés dans votre
            compte, pour qu’ils reviennent sur un nouveau téléphone ou après une
            réinstallation de l’application.
          </li>
          <li>
            <b>Les données d’Apple Santé et de Health Connect restent sur votre téléphone et ne sont jamais envoyées.</b>
          </li>
          <li>
            Quelques services reçoivent des données pour que l’application
            fonctionne : Supabase (votre compte et votre plan), PostHog
            (statistiques d’utilisation), RevenueCat (achats), Superwall (écrans
            d’abonnement), Expo (notifications, mises à jour de l’application,
            rapports de vitesse et de plantage), Apple (connexion, paiements et
            notifications), Google (connexion sur Android) et Resend (e-mails).
          </li>
          <li>Pas de publicité, pas de pistage publicitaire, et nous ne vendons jamais vos données.</li>
        </ul>

        <h2>Votre compte</h2>
        <p>
          La configuration de Walkito vous connecte avec Apple. Apple nous
          transmet un identifiant, votre nom et votre adresse e-mail, ou une
          adresse relais privée si vous choisissez de masquer la vôtre.
          L’identifiant devient votre compte sur notre serveur. Votre prénom et
          votre adresse e-mail sont enregistrés avec votre compte.
        </p>
        <p>
          Sur Android, la configuration vous connecte avec Google à la place.
          Google, comme Apple, nous transmet un identifiant et votre adresse
          e-mail, et ils sont utilisés de la même façon.
        </p>
        <p>
          Si « Se connecter avec Apple » n’est pas disponible sur votre
          appareil, l’application utilise un compte anonyme à la place. La
          connexion par e-mail et mot de passe ne fonctionne que pour les
          comptes que nous créons nous-mêmes, par exemple pour l’examen de
          l’App Store. Il n’y a pas d’inscription par e-mail.
        </p>
        <p>
          Une clé de connexion est conservée dans le trousseau (Keychain) de
          votre iPhone. Elle survit à la suppression de l’application, pour
          qu’une réinstallation retrouve votre compte. Delete account la
          supprime.
        </p>

        <h2>Votre adresse e-mail</h2>
        <p>
          Nous utilisons votre adresse e-mail pour vous répondre quand vous contactez l’assistance, pour reconnaître votre compte dans nos propres rapports, et pour vous envoyer des e-mails sur votre plan : rappels, résumé hebdomadaire, résultats de vos tests et, de temps en temps, une offre sur Walkito Premium. Les e-mails sont rédigés à partir de votre propre plan et utilisent votre prénom. Chaque e-mail contient un lien de désinscription, et vous pouvez aussi nous écrire. Nous ne partageons jamais votre adresse avec qui que ce soit pour son propre marketing.
        </p>

        <h2>Ce qui est enregistré dans votre compte</h2>
        <p>
          Tout est d’abord enregistré sur votre téléphone. Ensuite, en arrière-plan,
          c’est copié dans votre compte sur notre serveur, pour que tout revienne
          quand vous vous connectez sur un nouveau téléphone ou après une
          réinstallation. Cette copie contient :
        </p>
        <ul>
          <li>
            <b>Vos réponses et réglages :</b> quel pied et où il fait mal, votre
            type de pied, votre objectif et votre sport, les jours par semaine,
            la durée des séances, l’heure du rappel, le matériel que vous n’avez
            pas, et votre date de début.
          </li>
          <li>
            <b>Vos objectifs</b> et votre progression sur chacun.
          </li>
          <li>
            <b>Vos bilans de douleur :</b> chaque score de douleur que vous
            notez, quand vous l’avez noté et où vous aviez mal, et si vous avez
            fait l’étirement du matin.
          </li>
          <li>
            <b>Vos résultats de tests :</b> montées sur pointes, maintien de la
            voûte et équilibre, à gauche et à droite.
          </li>
          <li>
            <b>Vos séances :</b> le plan de chaque semaine, les séances que vous
            terminez, les exercices que vous avez faits, sautés ou remplacés,
            votre ressenti de la séance, toute douleur pendant la séance, et les
            exercices que vous avez marqués comme impossibles pour vous.
          </li>
          <li>
            <b>Votre utilisation de l’application :</b> combien de fois vous
            l’avez ouverte chaque jour et pendant combien de temps.
          </li>
        </ul>
        <p>
          Nous utilisons aussi cette copie pour voir comment le plan est utilisé
          et si les gens atteignent leurs objectifs, afin de l’améliorer.
        </p>

        <h2>Ce qui reste sur votre téléphone</h2>
        <p>
          L’âge, le sexe, le poids et la pointure que vous indiquez à la
          configuration, vos réglages d’apparence et de langue de
          l’application, les vidéos d’exercices que vous avez téléchargées, et
          chaque donnée d’Apple Santé ou de Health Connect. Tout cela est
          conservé uniquement dans le stockage propre de l’application sur
          l’appareil.
        </p>

        <h2>Apple Santé</h2>
        <p>
          Avec votre autorisation, Walkito lit le nombre de pas, la vitesse de
          marche, l’asymétrie de la marche, les étages montés, la fréquence
          cardiaque au repos, la fréquence cardiaque, l’énergie active,
          l’analyse du sommeil et les entraînements. Il enregistre dans Apple
          Santé les séances que vous terminez, comme entraînements et minutes
          de pleine conscience.
        </p>
        <p>
          Ces données sont lues et résumées sur votre téléphone.{' '}
          <b>
            Elles ne sont jamais envoyées, jamais enregistrées dans votre compte,
            et jamais utilisées pour la publicité, le marketing ou l’exploration
            de données.
          </b>{' '}
          Nous ne les vendons jamais.
        </p>
        <p>
          Vous pouvez retirer n’importe quelle autorisation à tout moment dans
          Réglages → Apps → Santé → Accès aux données et appareils → Walkito.
          L’application continue de fonctionner, et les parties qui
          dépendaient de ces données cessent de s’afficher.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          Sur Android, avec votre autorisation, Walkito lit dans Health Connect
          les pas, les étages montés, la fréquence cardiaque au repos, la
          fréquence cardiaque, les sessions de sommeil, les sessions d’exercice,
          la distance et les calories actives brûlées. Il y enregistre les
          séances que vous terminez comme sessions d’exercice.
        </p>
        <p>
          Nous utilisons ces données uniquement pour ajuster votre plan : ce que
          vous avez bougé, dormi et couru façonne la séance du jour et les
          conseils que vous voyez. Elles sont lues et résumées sur votre
          téléphone.{' '}
          <b>
            Les données de Health Connect ne sont jamais envoyées, jamais
            vendues, jamais partagées avec des tiers et jamais utilisées pour la
            publicité.
          </b>{' '}
          L’utilisation par Walkito des informations reçues de Health Connect
          respecte la politique d’autorisations de Health Connect, y compris
          les exigences d’utilisation limitée (Limited Use).
        </p>
        <p>
          Vous pouvez retirer n’importe quelle autorisation à tout moment dans
          l’application Health Connect, ou dans Paramètres Android → Sécurité et
          confidentialité → Confidentialité → Health Connect → Autorisations des
          applications → Walkito. L’application continue de fonctionner sans.
        </p>

        <h2>Ce que nous collectons, comment et pourquoi</h2>

        <h3>Supabase : votre compte et votre plan</h3>
        <p>
          <b>Quoi :</b> votre compte, votre adresse e-mail, tout ce qui est
          listé sous « Ce qui est enregistré dans votre compte », votre adresse
          de notification (si vous avez activé les notifications), votre code
          d’invitation et quel compte a utilisé quel code. Les vidéos
          d’exercices sont téléchargées depuis le stockage Supabase.
        </p>
        <p>
          <b>Pourquoi :</b> faire fonctionner votre compte, restaurer votre plan
          sur un nouveau téléphone, répondre aux demandes d’assistance, faire
          marcher les invitations et fournir les vidéos d’exercices.
        </p>

        <h3>PostHog : statistiques d’utilisation</h3>
        <p>
          <b>Quoi :</b> des événements qui indiquent que quelque chose s’est
          passé dans l’application, par exemple qu’une étape de la
          configuration s’est affichée, qu’une séance, un bilan ou un test a été
          terminé et si la séance a paru facile, correcte ou difficile, qu’un
          objectif a été atteint, qu’un réglage du plan a été modifié (pas la
          nouvelle valeur), ou que l’écran d’achat a été ouvert. Aussi les
          écrans que vous visitez, et les réponses à quelques questions de la
          configuration : comment vous avez connu Walkito, votre objectif, votre
          sport et combien vous courez. Votre objectif, ou le nom d’un objectif
          atteint, peut laisser deviner votre état de santé. Le modèle de votre
          appareil, les versions d’iOS et de l’application, la langue et le
          fuseau horaire y sont joints, et PostHog déduit une localisation
          approximative (pays et ville) de votre adresse IP. Les événements
          sont liés à un identifiant aléatoire, le même que celui qu’utilise
          RevenueCat. Dès que vous vous connectez, l’adresse e-mail et le nom
          qu’Apple ou Google nous ont transmis y sont ajoutés, pour que nous
          puissions vous écrire si quelque chose vous bloque.
        </p>
        <p>
          <b>Jamais envoyés :</b> scores de douleur, zones douloureuses,
          résultats de tests, données d’Apple Santé, âge ou poids. Rien de ce
          qui est à l’écran n’est enregistré.
        </p>
        <p>
          <b>Pourquoi :</b> voir où les gens bloquent et améliorer l’application.
        </p>

        <h3>RevenueCat : achats</h3>
        <p>
          <b>Quoi :</b> un identifiant aléatoire, votre historique d’achats et
          d’abonnements sur l’App Store, l’identifiant de statistiques
          ci-dessus, et comment vous avez dit avoir connu Walkito. Sur iPhone,
          aussi si vous avez installé Walkito depuis une annonce de recherche
          Apple Ads et, si oui, quelle campagne et quel terme de recherche, via
          AdServices d’Apple. Cela ne demande aucune autorisation de suivi et
          n’utilise aucun identifiant publicitaire.
        </p>
        <p>
          <b>Pourquoi :</b> savoir ce que vous avez acheté et le débloquer, et
          voir quels canaux mènent à des achats.
        </p>

        <h3>Expo : notifications, mises à jour, vitesse et plantages</h3>
        <p>
          <b>Quoi :</b> le temps que met l’application à démarrer et à ouvrir
          chaque écran, les erreurs et rapports de plantage, les mêmes
          événements que reçoit PostHog, et le modèle de votre appareil, les
          versions d’iOS et de l’application, la langue et un identifiant
          d’installation aléatoire. Les mises à jour de l’application sont
          téléchargées depuis Expo. Quand quelqu’un utilise votre code
          d’invitation, la notification qui vous prévient passe par le service
          de notifications push d’Expo. Les rappels quotidiens sont programmés
          sur votre téléphone et ne passent par aucun serveur.
        </p>
        <p>
          <b>Pourquoi :</b> garder l’application rapide et fonctionnelle, la
          tenir à jour et envoyer les notifications d’invitation.
        </p>

        <h3>Superwall : écrans d’abonnement</h3>
        <p>
          <b>Quoi :</b> l’identifiant de votre compte, votre prénom, l’objectif
          et le sport choisis à la configuration de votre plan, la première
          étape de votre plan, les jours et les minutes que vous avez choisis,
          la date de votre prochain test de progression, la langue de
          l’application, les écrans d’abonnement que vous avez vus et ce que
          vous y avez touché, et si vous êtes déjà abonné. Jamais votre
          douleur, vos réponses sur votre corps, ni rien qui vienne d’Apple
          Santé ou de Health Connect.
        </p>
        <p>
          <b>Pourquoi :</b> afficher l’écran d’abonnement, l’adresser à vous et
          à votre plan, et tester quelle version fonctionne le mieux. Les
          paiements passent toujours par Apple et RevenueCat.
        </p>

        <h3>Resend : e-mails</h3>
        <p>
          <b>Quoi :</b> votre adresse e-mail, votre prénom et le contenu de
          chaque e-mail que nous vous envoyons, rédigé à partir de votre plan.
        </p>
        <p>
          <b>Pourquoi :</b> délivrer ces e-mails et nous dire s’ils sont bien
          arrivés.
        </p>

        <h3>Apple : connexion, paiements et notifications</h3>
        <p>
          « Se connecter avec Apple » partage le nom et l’adresse e-mail que
          vous choisissez. Les paiements sont gérés par Apple, et nous ne voyons
          jamais vos coordonnées bancaires. Les notifications passent par le
          service de notifications push d’Apple.
        </p>

        <p>
          Chaque service ci-dessus reçoit votre adresse IP à chaque requête,
          comme tout serveur.
        </p>

        <h2>Ce que nous ne faisons pas</h2>
        <p>
          Pas de publicité, pas de SDK de publicité ou d’attribution, et pas
          d’identifiant publicitaire. Nous ne vous suivons pas à travers les
          applications ou sites web d’autres entreprises. Nous ne vendons pas
          vos données, et nous ne partageons rien de ce que vous notez pour
          l’usage de quelqu’un d’autre. Les services ci-dessus ne les traitent
          que pour nous fournir leur service.
        </p>

        <h2>Combien de temps nous les conservons</h2>
        <ul>
          <li>
            <b>Votre compte et tout ce qui y est enregistré :</b> jusqu’à ce que
            vous supprimiez votre compte.
          </li>
          <li>
            <b>Statistiques, données de vitesse et de plantage :</b> jusqu’à
            12 mois.
          </li>
          <li>
            <b>Historique des achats :</b> conservé par Apple et RevenueCat aussi
            longtemps que l’exigent les lois sur la facturation, la comptabilité
            et la fiscalité.
          </li>
          <li>
            <b>Ce qui est sur votre téléphone :</b> jusqu’à ce que vous
            supprimiez votre compte ou l’application.
          </li>
        </ul>

        <h2>Supprimer votre compte</h2>
        <p>
          Dans l’application, allez dans <b>Profile → Delete account</b>. Cela
          supprime votre compte sur notre serveur avec tout ce qui y est
          enregistré : vos réponses et réglages, objectifs, bilans de douleur,
          résultats de tests, séances, utilisation de l’application, adresse
          e-mail, adresse de notification et code d’invitation. La clé de
          connexion est ensuite supprimée et le téléphone vidé. C’est
          irréversible. Vous pouvez aussi écrire à {mail} et nous le
          supprimerons pour vous.
        </p>
        <p>
          Supprimer seulement l’application n’efface que ce qui est sur le
          téléphone. Votre compte reste sur notre serveur et revient quand vous
          vous reconnectez.
        </p>
        <p>
          Delete account ne supprime pas l’historique des achats chez
          RevenueCat, les statistiques chez PostHog, ni les données de vitesse
          et de plantage détenues par Expo. Pour les faire supprimer, écrivez à
          la même adresse. Les entraînements et minutes de pleine conscience
          que Walkito a enregistrés dans Apple Santé y restent jusqu’à ce que
          vous les supprimiez dans Santé. Supprimer votre compte ne résilie pas
          un abonnement. Seul Apple peut le faire, dans Réglages → [votre nom] →
          Abonnements.
        </p>

        <h2>Enfants</h2>
        <p>
          Walkito ne s’adresse pas aux enfants de moins de 13 ans, et nous ne
          collectons pas sciemment de données les concernant. Si vous pensez
          qu’un enfant de moins de 13 ans a utilisé l’application, écrivez à{' '}
          {mail} et nous supprimerons ses données.
        </p>

        <h2>Vos droits</h2>
        <p>
          Si vous êtes dans l’UE ou au Royaume-Uni, la loi sur la protection des
          données vous donne des droits sur vos données personnelles. Nous nous
          appuyons sur ces bases légales :
        </p>
        <ul>
          <li>
            <b>Contrat :</b> votre compte, votre plan enregistré, les achats, les
            invitations et les notifications, dont nous avons besoin pour
            fournir l’application que vous avez demandée.
          </li>
          <li>
            <b>Intérêt légitime :</b> les statistiques et les données de vitesse
            et de plantage, pour comprendre et améliorer l’application. Vous
            pouvez vous y opposer.
          </li>
          <li>
            <b>Consentement :</b> l’accès à Apple Santé et à Health Connect, que
            vous pouvez retirer à tout moment dans les Réglages. Ces données ne
            quittent jamais votre téléphone.
          </li>
        </ul>
        <p>
          Vous pouvez demander à accéder à vos données, à les corriger, à les
          supprimer ou à en recevoir une copie, et vous pouvez vous opposer à
          leur utilisation ou nous demander de la limiter. Écrivez à {mail}.
          Vous pouvez aussi déposer une plainte auprès de votre autorité locale
          de protection des données. Certains des services ci-dessus traitent
          des données hors de votre pays, y compris aux États-Unis, avec leurs
          propres garanties pour les transferts internationaux.
        </p>

        <h2>Inscriptions par e-mail sur le site</h2>
        <p>
          Si vous vous inscrivez sur le site pour recevoir les fiches
          d’exercices à imprimer et le plan de démarrage sur 7 jours, nous
          conservons votre adresse e-mail, la langue dans laquelle vous lisiez,
          la page sur laquelle vous vous êtes inscrit, et une trace de la
          confirmation et de chaque e-mail que nous vous avons envoyé.
        </p>
        <p>
          <b>Pourquoi :</b> vous envoyer les fiches et les sept e-mails
          quotidiens que vous avez demandés, et rien d’autre.
        </p>
        <p>
          <b>Sous-traitants :</b> Resend (envoie les e-mails) et Supabase
          (conserve l’inscription). Les deux ne traitent les données que pour
          nous fournir leur service.
        </p>
        <p>
          <b>Aucun compte n’est créé.</b> Une inscription sur le site ne crée
          pas de compte dans l’application. Ces données sont séparées de toute
          donnée de l’application.
        </p>
        <p>
          <b>Désinscription :</b> chaque e-mail contient un lien de
          désinscription en un clic. Après votre désinscription, nous arrêtons
          les envois et supprimons vos données sous 30 jours. Vous pouvez aussi
          écrire à {mail}.
        </p>
        <p>
          <b>Pas de cookies, pas de traceurs.</b> Le site ne dépose aucun cookie
          et ne charge aucun script de statistiques ou de pistage.
        </p>

        <h2>Pas un avis médical</h2>
        <p>
          Walkito est un programme d’exercices pour la douleur au talon et au
          pied. Il ne diagnostique aucune pathologie et ne remplace pas un
          professionnel de santé.
        </p>

        <h2>Modifications</h2>
        <p>
          Si ce que nous collectons change, nous mettons à jour cette page et la
          date en haut.
        </p>

        <h2>Contact</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </Prose>

      <Footer lang="fr" page="privacy" />
    </>
  );
}
