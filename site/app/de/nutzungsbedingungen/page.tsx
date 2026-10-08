import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The German Terms of Use. It mirrors `app/(en)/terms/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English
 * applies. The notes on what is deliberately left out (governing law, prices)
 * live on the English page.
 *
 * The app has no German interface yet, so its own labels (Profile, Delete
 * account, Restore Purchases) are quoted in English, as the reader sees them.
 * iOS settings paths use the German iOS labels.
 */
export const metadata: Metadata = {
  title: 'Nutzungsbedingungen',
  description:
    'Nutzungsbedingungen von Walkito: was die App ist und was nicht, dein Konto, Abos, Einladungen, Gesundheit und Sicherheit.',
  alternates: alternatesFor('terms', 'de'),
  openGraph: {
    locale: 'de_DE',
    title: `Nutzungsbedingungen | ${SITE_NAME}`,
    description: 'Was die App ist, wie Zahlungen funktionieren und die Grenzen dessen, was sie verspricht.',
    url: '/de/nutzungsbedingungen/',
    images: ['/opengraph-image'],
    type: 'website',
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/de/` },
    { '@type': 'ListItem', position: 2, name: 'Nutzungsbedingungen', item: `${SITE_URL}/de/nutzungsbedingungen/` },
  ],
};

export default function NutzungsbedingungenDe() {
  return (
    <>
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="de" />

      <Prose className="shell prose">
        <h1>Nutzungsbedingungen</h1>

        <p className="updated">Zuletzt aktualisiert: 1. Oktober 2026</p>
        <p className="updated">
          Dies ist eine Übersetzung. Wenn sie von{' '}
          <a href="/terms/">der englischen Fassung</a> abweicht, gilt die
          englische Fassung.
        </p>

        <p className="lede">
          Diese Bedingungen gelten für deine Nutzung der App Walkito, die von
          Walkito („wir“) betrieben wird. Wenn du die App nutzt, akzeptierst du
          sie. Wenn nicht, hör auf, die App zu nutzen, und lösche dein Konto unter
          Profile → Delete account.
        </p>

        <h2>Was Walkito ist</h2>
        <p>
          Walkito ist ein Übungsprogramm bei Fersen- und Fußschmerzen. Es baut
          deinen Plan Woche für Woche rund um Ziele, die du messen kannst, mit
          Einheiten von 3, 5 oder 10 Minuten, passt jeden Tag an das an, was du
          einträgst, und misst deinen Fortschritt mit körperlichen Tests alle 14
          Tage, dann alle 28, sobald du dein erstes Ziel erreicht hast.
        </p>
        <p>
          <b>Es ist kein Medizinprodukt, keine Diagnose und keine Behandlung.</b>{' '}
          Es kann dir nicht sagen, was mit deinem Fuß los ist, und nichts darin
          ersetzt den Rat einer medizinischen Fachperson, die dich untersucht
          hat.
        </p>

        <h2>Gesundheit und Sicherheit</h2>
        <p>
          Training ist mit Risiken verbunden, und dieses Risiko trägst du selbst.
          Du bist dafür verantwortlich, zu entscheiden, ob eine Einheit an einem
          bestimmten Tag das Richtige für dich ist, und aufzuhören, wenn etwas auf
          eine Weise wehtut, von der die App nichts wissen kann.
        </p>
        <p className="notice">
          Geh vor dem Start zu einer medizinischen Fachperson, und hör auf und
          hol dir Rat, wenn dein Schmerz nach einer Verletzung oder einem Sturz
          begann, mit Taubheit, Kribbeln, Brennen, Schwellung oder Wärme
          einhergeht, dich nachts weckt oder wenn sich ein Fußgewölbe im
          Erwachsenenalter plötzlich abgeflacht hat.
        </p>

        <h2>Wer die App nutzen kann</h2>
        <p>
          Du musst mindestens 13 Jahre alt sein. Wenn du unter 18 bist, nutze
          Walkito zusammen mit einem Elternteil oder einer erziehungsberechtigten
          Person, die diese Bedingungen gelesen hat.
        </p>

        <h2>Dein Konto</h2>
        <p>
          Bei der Einrichtung von Walkito meldest du dich mit Apple an, und in
          diesem Konto wird dein Plan gespeichert. Die Anmeldung mit E-Mail und
          Passwort funktioniert nur für Konten, die wir selbst einrichten; eine
          Registrierung per E-Mail gibt es nicht. Schütze dein Handy und deine
          Apple-ID, denn wer sie nutzt, kann dein Konto nutzen.
        </p>
        <p>
          Dein Plan, deine Antworten, Check-ins, Testergebnisse und Einheiten
          werden auf deinem Handy gespeichert und in dein Konto kopiert. Melde
          dich auf einem neuen Handy oder nach einer Neuinstallation mit
          demselben Konto an, und sie kommen zurück. Käufe kommen mit „Restore
          Purchases“ unter derselben Apple-ID zurück.
        </p>

        <h2>Deine Lizenz</h2>
        <p>
          Du erhältst eine persönliche, nicht exklusive, nicht übertragbare
          Lizenz, Walkito auf Geräten zu nutzen, die dir gehören oder die du
          kontrollierst, für deine eigene, nicht kommerzielle Nutzung. Du darfst
          den Zugang nicht weiterverkaufen, das Programm nicht weiterverbreiten,
          die App nicht zurückentwickeln (Reverse Engineering) und ihre Inhalte
          nicht nutzen, um ein Konkurrenzprodukt zu bauen.
        </p>
        <p>
          Das Programm, der Übungskatalog, die Texte und die Software gehören
          uns. Alles, was du einträgst (deine Schmerzeinträge, deine Einheiten,
          dein Verlauf), gehört dir. Es wird auf deinem Gerät gespeichert und in
          dein Konto kopiert, damit es wiederhergestellt werden kann.
        </p>

        <h2>Zahlungen</h2>
        <p>
          Walkito wird über den App Store bezahlt. Apple nimmt die Zahlung
          entgegen, bewahrt den Beleg auf und zeigt dir vor dem Kauf die
          Optionen, den Preis und die Laufzeit. Dieser Preis gilt, nicht
          irgendein Betrag, der anderswo genannt wird. Derzeit gibt es zwei Abos,
          und beide verlängern sich automatisch:
        </p>
        <ul>
          <li>
            <b>Ein Jahresabo</b>, einmal im Jahr berechnet.
          </li>
          <li>
            <b>Ein Wochenabo</b>, einmal pro Woche berechnet.
          </li>
        </ul>

        <h3>Abos</h3>
        <ul>
          <li>
            Ein Abo verlängert sich am Ende jedes Zeitraums automatisch, und
            deine Apple-ID wird belastet, es sei denn, du schaltest die
            Verlängerung mindestens 24 Stunden vor Ende des Zeitraums aus.
          </li>
          <li>
            Verwalten oder kündigen kannst du es unter{' '}
            <b>Einstellungen → [dein Name] → Abonnements</b>. Eine Kündigung
            stoppt die nächste Verlängerung; du behältst den Zugang bis zum Ende
            des Zeitraums, für den du bezahlt hast.
          </li>
          <li>
            Wenn ein kostenloser Probezeitraum oder ein Einführungspreis
            angeboten wird, geht er an seinem Ende in den regulären Preis über,
            es sei denn, du kündigst mindestens 24 Stunden vor seinem Ende.
          </li>
          <li>
            Das Löschen der App oder deines Kontos kündigt kein Abo. Das kann nur
            Apple, über den Bildschirm oben.
          </li>
        </ul>

        <h3>Erstattungen</h3>
        <p>
          Erstattungen wickelt nur Apple ab. Nutze{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          Wir können keine Belastung im Namen von Apple vornehmen oder
          rückgängig machen.
        </p>

        <h2>Einladungen</h2>
        <p>
          Du kannst deinen Einladungscode teilen. Wer ihn nutzt, bekommt einen
          Rabatt auf das Jahresabo. Sobald jemand deinen Code genutzt hat, steht
          dir derselbe Rabatt offen, wenn du später das Jahresabo abschließt.
          Einen Code zu teilen bringt dir keine kostenlose Zeit und keine andere
          Belohnung.
        </p>
        <p>
          Jede Person kann einen Code einmal nutzen, und nicht den eigenen.
          Einladungsrabatte haben keinen Geldwert.
        </p>
        <p>
          Wir können das Einladungsprogramm jederzeit ändern oder beenden. Ein
          Rabatt, zu dem du bereits ein Abo abgeschlossen hast, bleibt dir.
        </p>

        <h2>Apple Health</h2>
        <p>
          Wenn du es erlaubst, liest Walkito Schritte, Gehgeschwindigkeit,
          Gang-Asymmetrie, gestiegene Etagen, Ruheherzfrequenz, Herzfrequenz,
          aktive Energie, Schlafanalyse und Trainings, und schreibt die
          Einheiten, die du abschließt, als Trainings und Achtsamkeitsminuten
          zurück. Jede Erlaubnis ist optional und kann jederzeit in den
          Einstellungen widerrufen werden. Daten aus Apple Health bleiben auf
          deinem Handy und werden nie hochgeladen oder in deinem Konto
          gespeichert. Was das Handy doch verlässt, steht in der{' '}
          <a href="/de/datenschutz/">Datenschutzerklärung</a>.
        </p>

        <h2>Änderungen</h2>
        <p>
          Das Programm und die App werden sich ändern: Übungen werden
          überarbeitet, der Plan wird feinjustiert, Funktionen kommen und gehen.
          Wir können auch diese Bedingungen ändern. Bei einer wesentlichen
          Änderung sagen wir es in der App oder aktualisieren das Datum oben auf
          dieser Seite, und wenn du Walkito danach weiter nutzt, akzeptierst du
          die neue Fassung.
        </p>

        <h2>Beenden</h2>
        <p>
          Du kannst jederzeit aufhören, indem du dein Konto unter Profile →
          Delete account löschst, was alles, was du eingetragen hast, vom Handy
          und von unserem Server entfernt, und ein Abo wie oben beschrieben über
          Apple kündigst. Wenn du nur die App löschst, wird nur die Kopie auf dem
          Handy entfernt. Wir können den Zugang sperren, wenn die App auf eine
          Weise genutzt wird, die diese Bedingungen verbieten. In der Praxis
          heißt das Weiterverkauf oder Manipulation, nichts, was du bei normaler
          Nutzung tun könntest.
        </p>

        <h2>Was wir nicht versprechen</h2>
        <p>
          Walkito wird so bereitgestellt, wie es ist. Wir versprechen nicht, dass
          das Programm deine Schmerzen verringert, dein Gewölbe verändert oder
          ein bestimmtes Ergebnis bringt. Die{' '}
          <a href="/science/">Seite zur Studienlage</a> (auf Englisch) zeigt,
          was die Forschung, der es folgt, gefunden hat, und auch, wo diese
          Belege aufhören.
        </p>
        <p>
          Wir versprechen nicht, dass die App ohne Unterbrechungen oder Fehler
          läuft, und wir haften nicht für indirekte Schäden oder Folgeschäden
          oder für Verletzungen durch Übungen, für die du dich entschieden hast.
          Nichts hiervon schränkt Rechte ein, die du nach Verbraucherrecht hast
          und die sich nicht vertraglich einschränken lassen.
        </p>

        <h2>Kontakt</h2>
        <p>
          Walkito
          <br />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </Prose>

      <Footer lang="de" page="terms" />
    </>
  );
}
