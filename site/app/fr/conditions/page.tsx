import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The French Terms of Use. It mirrors `app/(en)/terms/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English
 * applies. The notes on what is deliberately left out (governing law, prices)
 * live on the English page.
 *
 * The app has no French catalogue, so its own labels (Profile → Delete
 * account, Restore Purchases) stay in English as the reader will see them.
 */
export const metadata: Metadata = {
  title: 'Conditions d’utilisation',
  description:
    'Conditions d’utilisation de Walkito : ce qu’est l’application et ce qu’elle n’est pas, votre compte, les abonnements, les invitations, santé et sécurité.',
  alternates: alternatesFor('terms', 'fr'),
  openGraph: {
    locale: 'fr_FR',
    title: `Conditions d’utilisation | ${SITE_NAME}`,
    description: 'Ce qu’est l’application, comment fonctionnent les paiements et les limites de ce qu’elle affirme.',
    url: '/fr/conditions/',
    images: ['/share/en.jpg'],
    type: 'website',
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/fr/` },
    { '@type': 'ListItem', position: 2, name: 'Conditions d’utilisation', item: `${SITE_URL}/fr/conditions/` },
  ],
};

export default function ConditionsFr() {
  return (
    <>
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="fr" />

      <Prose className="shell prose">
        <h1>Conditions d’utilisation</h1>

        <p className="updated">Dernière mise à jour : 9 octobre 2026</p>
        <p className="updated">
          Ceci est une traduction. Si elle diffère de{' '}
          <a href="/terms/">la version anglaise</a>, c’est la version anglaise
          qui s’applique.
        </p>

        <p className="lede">
          Ces conditions encadrent votre utilisation de l’application Walkito,
          exploitée par Walkito (« nous »). Utiliser l’application signifie que
          vous les acceptez. Si ce n’est pas le cas, arrêtez de l’utiliser et
          supprimez votre compte dans Profile → Delete account.
        </p>

        <h2>Ce qu’est Walkito</h2>
        <p>
          Walkito est un programme d’exercices pour la douleur au talon et au
          pied. Il construit votre plan une semaine à la fois autour d’objectifs
          mesurables, avec des séances de 3, 5 ou 10 minutes, s’ajuste chaque
          jour selon ce que vous notez, et mesure vos progrès par des tests
          physiques tous les 14 jours, puis tous les 28 une fois votre premier
          objectif atteint.
        </p>
        <p>
          <b>Ce n’est ni un dispositif médical, ni un diagnostic, ni un traitement.</b>{' '}
          Il ne peut pas vous dire ce qui ne va pas avec votre pied, et rien de
          ce qu’il contient ne remplace l’avis d’un professionnel de santé qui
          vous a examiné.
        </p>

        <h2>Santé et sécurité</h2>
        <p>
          L’exercice comporte des risques, et vous les prenez sur vous. Il vous
          revient de décider si une séance vous convient un jour donné, et de
          vous arrêter quand quelque chose fait mal d’une façon que
          l’application n’a aucun moyen de connaître.
        </p>
        <p className="notice">
          Consultez un professionnel de santé avant de commencer, et arrêtez-vous
          pour demander conseil, si votre douleur a suivi une blessure ou une
          chute, s’accompagne d’engourdissements, de fourmillements, de
          brûlures, d’un gonflement ou de chaleur, vous réveille la nuit, ou si
          une voûte s’est affaissée brusquement à l’âge adulte.
        </p>

        <h2>Qui peut l’utiliser</h2>
        <p>
          Vous devez avoir 13 ans ou plus. Si vous avez moins de 18 ans,
          utilisez Walkito avec un parent ou un tuteur qui a lu ces conditions.
        </p>

        <h2>Votre compte</h2>
        <p>
          Vous vous connectez avec Apple quand vous configurez Walkito, et c’est
          dans ce compte que votre plan est enregistré. La connexion par e-mail
          et mot de passe ne fonctionne que pour les comptes que nous créons
          nous-mêmes ; il n’y a pas d’inscription par e-mail. Protégez votre
          téléphone et votre identifiant Apple, car toute personne qui les
          utilise peut utiliser votre compte.
        </p>
        <p>
          Votre plan, vos réponses, vos bilans, vos résultats de tests et vos
          séances sont enregistrés sur votre téléphone et copiés dans votre
          compte. Connectez-vous avec le même compte sur un nouveau téléphone ou
          après une réinstallation et ils reviennent. Les achats reviennent avec
          Restore Purchases sur le même identifiant Apple sur iPhone, ou avec le
          même compte Google dans Google Play sur Android.
        </p>

        <h2>Votre licence</h2>
        <p>
          Vous obtenez une licence personnelle, non exclusive et non
          transférable pour utiliser Walkito sur des appareils que vous possédez
          ou contrôlez, pour votre propre usage non commercial. Vous ne pouvez
          pas revendre l’accès, redistribuer le programme, faire de
          l’ingénierie inverse sur l’application, ni utiliser son contenu pour
          créer un produit concurrent.
        </p>
        <p>
          Le programme, le catalogue d’exercices, les textes et le logiciel nous
          appartiennent. Tout ce que vous notez (vos entrées de douleur, vos
          séances, votre historique) vous appartient. C’est enregistré sur votre
          appareil et copié dans votre compte pour pouvoir être restauré.
        </p>

        <h2>Paiements</h2>
        <p>
          Walkito se paie via l’App Store sur iPhone, exploité par Apple, ou via
          Google Play sur Android, exploité par Google LLC. La boutique encaisse
          le paiement, conserve le reçu, et affiche les options, le prix et la durée avant l’achat.
          C’est ce prix qui s’applique, et non un chiffre indiqué ailleurs. Il
          existe aujourd’hui deux abonnements, et les deux se renouvellent
          automatiquement :
        </p>
        <ul>
          <li>
            <b>Un abonnement annuel</b>, débité une fois par an.
          </li>
          <li>
            <b>Un abonnement hebdomadaire</b>, débité une fois par semaine.
          </li>
        </ul>

        <h3>Abonnements</h3>
        <ul>
          <li>
            Un abonnement se renouvelle automatiquement à la fin de chaque
            période, et votre identifiant Apple ou votre compte Google est débité, sauf si vous
            désactivez le renouvellement au moins 24 heures avant la fin de la
            période.
          </li>
          <li>
            Gérez-le ou résiliez-le sur iPhone dans{' '}
            <b>Réglages → [votre nom] → Abonnements</b>, ou sur Android dans
            l’application Google Play, sous{' '}
            <b>
              icône du profil → Paiements et abonnements → Abonnements → Walkito
              → Résilier l’abonnement
            </b>
            . La résiliation arrête le prochain renouvellement ; vous gardez
            l’accès jusqu’à la fin de la période payée.
          </li>
          <li>
            Si un essai gratuit ou un prix de lancement est proposé, il passe au
            prix standard à sa fin, sauf si vous résiliez au moins 24 heures
            avant sa fin.
          </li>
          <li>
            Supprimer l’application ou votre compte ne résilie pas un
            abonnement. Seule la boutique peut le faire, Apple ou Google, depuis les écrans
            ci-dessus.
          </li>
        </ul>

        <h3>Remboursements</h3>
        <p>
          Les remboursements sont gérés uniquement par la boutique où vous avez
          payé, selon sa propre politique. Pour l’App Store, utilisez{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          Pour Google Play, faites la demande depuis votre{' '}
          <a href="https://play.google.com/store/account/orderhistory">historique des commandes Google Play</a>.
          Nous ne pouvons ni effectuer ni annuler un débit à la place d’Apple ou
          de Google.
        </p>

        <h2>Invitations</h2>
        <p>
          Vous pouvez partager votre code d’invitation. Un ami qui l’utilise
          obtient une réduction sur l’abonnement annuel. Une fois que quelqu’un
          a utilisé votre code, la même réduction vous est ouverte si vous vous
          abonnez plus tard à l’offre annuelle. Partager un code ne vous donne
          ni temps gratuit ni aucune autre récompense.
        </p>
        <p>
          Chaque personne peut utiliser un code, une seule fois, et pas le sien.
          Les réductions d’invitation n’ont aucune valeur monétaire.
        </p>
        <p>
          Nous pouvons modifier ou arrêter le programme d’invitation à tout
          moment. Une réduction à laquelle vous êtes déjà abonné reste la vôtre.
        </p>

        <h2>Apple Santé</h2>
        <p>
          Si vous l’autorisez, Walkito lit le nombre de pas, la vitesse de
          marche, l’asymétrie de la marche, les étages montés, la fréquence
          cardiaque au repos, la fréquence cardiaque, l’énergie active,
          l’analyse du sommeil et les entraînements, et enregistre les séances
          que vous terminez comme entraînements et minutes de pleine
          conscience. Chaque autorisation est facultative et peut être retirée à
          tout moment dans les Réglages. Les données d’Apple Santé restent sur
          votre téléphone et ne sont jamais envoyées ni enregistrées dans votre
          compte. Consultez la{' '}
          <a href="/fr/confidentialite/">page confidentialité</a> pour savoir ce
          qui en sort.
        </p>

        <h2>Modifications</h2>
        <p>
          Le programme et l’application vont évoluer : des exercices sont
          revus, le plan est ajusté, des fonctions arrivent et disparaissent.
          Nous pouvons aussi modifier ces conditions. Quand un changement est
          important, nous le signalerons dans l’application ou en mettant à
          jour la date en haut de cette page, et continuer à utiliser Walkito
          après cela signifie que vous acceptez la nouvelle version.
        </p>

        <h2>Y mettre fin</h2>
        <p>
          Vous pouvez arrêter à tout moment en supprimant votre compte dans
          Profile → Delete account, ce qui efface ce que vous avez noté du
          téléphone et de notre serveur, et résilier tout abonnement via Apple
          ou Google comme indiqué ci-dessus. Supprimer seulement l’application n’efface
          que la copie sur le téléphone. Nous pouvons suspendre l’accès si
          l’application est utilisée d’une façon que ces conditions
          interdisent. En pratique, cela veut dire la revente ou la
          manipulation, pas quelque chose que vous pourriez faire en l’utilisant
          normalement.
        </p>

        <h2>Ce que nous ne promettons pas</h2>
        <p>
          Walkito est fourni tel quel. Nous ne promettons pas que suivre le
          programme réduira votre douleur, changera votre voûte ou produira un
          résultat particulier. La{' '}
          <a href="/science/" hrefLang="en">page des données scientifiques</a>{' '}
          (en anglais) expose ce qu’a trouvé la recherche qu’il suit, y compris
          là où ces preuves s’arrêtent.
        </p>
        <p>
          Nous ne promettons pas que l’application fonctionnera sans
          interruption ni erreur, et nous ne sommes pas responsables des pertes
          indirectes ou consécutives, ni des blessures liées à un exercice que
          vous avez choisi de faire. Rien ici ne limite les droits que vous
          tenez du droit de la consommation et qui ne peuvent pas être limités
          par contrat.
        </p>

        <h2>Contact</h2>
        <p>
          Walkito
          <br />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </Prose>

      <Footer lang="fr" page="terms" />
    </>
  );
}
