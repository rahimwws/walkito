import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The French Support page. It mirrors `app/(en)/support/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English applies.
 *
 * The app has no French catalogue, so its own labels (Profile → Delete
 * account, Restore Purchases) stay in English as the reader will see them.
 * iOS labels are Apple's French ones.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Assistance',
  description:
    'Aide pour Walkito : notifications, Apple Santé, achats, remboursements et suppression de votre compte. Écrivez-nous, une personne vous répond.',
  alternates: alternatesFor('support', 'fr'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function AssistanceFr() {
  return (
    <>
      <Masthead lang="fr" />

      <Prose className="shell prose" kicker={{ label: CHROME.fr.navSupport, lang: 'fr' }}>
        <h1>Assistance</h1>

        <p className="updated">Quelque chose ne va pas ? Dites-le-nous. Une personne vous répond.</p>

        <p>
          Écrivez à {mail}. Une personne vous répond, en général sous 12 heures.
          Dites-nous ce que vous faisiez et ce qu’a fait l’application. Cela
          suffit en général pour comprendre ce qui s’est passé sans multiplier
          les échanges.
        </p>

        <h2>Connexion, et nouveau téléphone</h2>
        <p>
          La configuration vous connecte avec Apple et demande une connexion
          internet une seule fois. Ensuite, l’usage quotidien fonctionne hors
          ligne, et ce que vous notez est copié dans votre compte dès qu’il y a
          une connexion. Sur un nouveau téléphone ou après une réinstallation,
          connectez-vous avec le même identifiant Apple et votre plan, vos
          bilans, vos résultats de tests et vos séances reviennent.
        </p>

        <h2>Le plan suit les dates, pas l’assiduité</h2>
        <p>
          Manquer des jours ne vous met pas en retard, et il n’y a rien à
          rattraper. La semaine suit les dates, donc une séance manquée n’est
          pas reportée au lendemain. Si vous avez fait une pause, ouvrez
          l’application et reprenez à partir d’aujourd’hui.
        </p>

        <h2>Notifications</h2>
        <p>
          Une par jour au maximum, cinq par semaine au maximum, rien après
          21 h 30. Si vous ne les ouvrez plus, l’application en envoie moins, et
          si vous continuez à ne pas les ouvrir, elle les met en pause pendant
          un mois. Vous pouvez les désactiver complètement dans Réglages →
          Notifications → Walkito ; rien d’autre ne change dans l’application
          si vous le faites.
        </p>

        <h2>Données de santé</h2>
        <p>
          Walkito lit dans Apple Santé les pas, la vitesse de marche,
          l’asymétrie de la marche, les étages montés, la fréquence cardiaque,
          la fréquence cardiaque au repos, l’énergie active, le sommeil et les
          entraînements, et y enregistre les séances que vous terminez. Tout
          cela est facultatif. Ces données restent sur votre téléphone et ne
          sont jamais envoyées ni enregistrées dans votre compte. Désactivez
          celles que vous voulez dans Réglages → Apps → Santé → Accès aux
          données et appareils → Walkito, et les parties qui en avaient besoin
          se mettent simplement en veille. Le plan fonctionne toujours.
        </p>

        <h2>La douleur, et quand s’arrêter</h2>
        <p>
          Walkito est un programme d’exercices. Il ne pose pas de diagnostic et
          ne peut pas vous dire ce qui ne va pas. Si la douleur est vive,
          s’aggrave ou vous empêche de dormir, consultez un professionnel de
          santé.
        </p>

        <h2>Achats</h2>
        <p>
          Walkito se paie par un abonnement via l’App Store, annuel ou
          hebdomadaire. Les deux se renouvellent automatiquement, et l’App Store
          affiche le prix dans votre devise avant l’achat.
        </p>
        <ul>
          <li>
            <b>Gérez ou résiliez</b> votre abonnement dans Réglages → [votre
            nom] → Abonnements. Désactivez le renouvellement au moins 24 heures
            avant la fin de la période et vous ne serez pas débité à nouveau.
            Vous gardez l’accès jusqu’à la fin de la période déjà payée.
          </li>
          <li>
            <b>Les remboursements</b> sont gérés par Apple. Utilisez la page{' '}
            <a href="https://reportaproblem.apple.com">Signaler un problème</a>{' '}
            d’Apple. Nous ne pouvons pas traiter de remboursements à la place
            d’Apple.
          </li>
          <li>
            <b>Nouveau téléphone ?</b> Connectez-vous avec le même identifiant
            Apple et touchez Restore Purchases dans l’application. Votre plan
            revient avec votre compte.
          </li>
        </ul>

        <h2>Supprimer votre compte</h2>
        <p>
          Dans l’application, allez dans <b>Profile → Delete account</b>. Cela
          supprime votre compte sur notre serveur avec tout ce qui y est
          enregistré (votre plan, vos bilans, vos résultats de tests, vos
          séances, votre adresse e-mail et votre code d’invitation) et vide le
          téléphone. C’est irréversible. Supprimer seulement l’application
          n’efface que la copie sur le téléphone : votre compte reste et revient
          quand vous vous reconnectez. Vous pouvez aussi écrire à {mail} et
          nous le supprimerons pour vous.
        </p>

        <p className="updated">
          Ceci est une traduction. Si elle diffère de{' '}
          <a href="/support/">la version anglaise</a>, c’est la version anglaise
          qui s’applique.
        </p>
      </Prose>

      <Footer lang="fr" page="support" />
    </>
  );
}
