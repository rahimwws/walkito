import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The German Support page. It mirrors `app/(en)/support/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English applies.
 *
 * The app has no German interface yet, so its own labels (Profile, Delete
 * account, Restore Purchases) are quoted in English, as the reader sees them.
 * iOS settings paths use the German iOS labels.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Hilfe und Support',
  description:
    'Hilfe zu Walkito: Mitteilungen, Apple Health, Käufe, Erstattungen und das Löschen deines Kontos. Schreib uns, und ein Mensch antwortet.',
  alternates: alternatesFor('support', 'de'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function SupportDe() {
  return (
    <>
      <Masthead lang="de" />

      <Prose className="shell prose">
        <h1>Hilfe und Support</h1>

        <p className="updated">Stimmt etwas nicht? Sag es uns. Ein Mensch antwortet.</p>

        <p>
          Schreib an {mail}. Ein Mensch antwortet, meist innerhalb von 12
          Stunden. Sag uns, was du gerade gemacht hast und was die App getan
          hat. Das reicht meistens, um herauszufinden, was passiert ist, ohne
          viel Hin und Her.
        </p>

        <h2>Anmelden, und ein neues Handy</h2>
        <p>
          Bei der Einrichtung meldest du dich mit Apple an, dafür brauchst du
          einmal eine Verbindung. Danach funktioniert der tägliche Ablauf
          offline, und was du einträgst, wird in dein Konto kopiert, sobald es
          eine Verbindung gibt. Auf einem neuen Handy oder nach einer
          Neuinstallation meldest du dich mit derselben Apple-ID an, und dein
          Plan, deine Check-ins, Testergebnisse und Einheiten kommen zurück.
        </p>

        <h2>Der Plan läuft nach Datum, nicht nach Anwesenheit</h2>
        <p>
          Wenn du Tage verpasst, gerätst du nicht in Rückstand, und es gibt
          nichts nachzuholen. Die Woche läuft nach Datum, eine verpasste Einheit
          wird also nicht auf morgen verschoben. Wenn du weg warst, öffne die App
          und mach ab heute weiter.
        </p>

        <h2>Mitteilungen</h2>
        <p>
          Höchstens eine am Tag, höchstens fünf pro Woche, nichts nach 21:30
          Uhr. Wenn du sie nicht mehr öffnest, schickt die App weniger, und wenn
          du sie weiter nicht öffnest, pausiert sie sie für einen Monat. Du
          kannst sie unter Einstellungen → Mitteilungen → Walkito ganz
          ausschalten; sonst ändert sich dadurch nichts in der App.
        </p>

        <h2>Gesundheitsdaten</h2>
        <p>
          Walkito liest Schritte, Gehgeschwindigkeit, Gang-Asymmetrie,
          gestiegene Etagen, Herzfrequenz, Ruheherzfrequenz, aktive Energie,
          Schlaf und Trainings aus Apple Health und schreibt die Einheiten, die
          du abschließt, zurück. Alles davon ist optional. Diese Werte bleiben
          auf deinem Handy und werden nie hochgeladen oder in deinem Konto
          gespeichert. Schalte einzelne davon unter Einstellungen → Apps →
          Health → Datenzugriff &amp; Geräte → Walkito aus, und die Teile, die
          sie gebraucht haben, werden einfach still. Der Plan funktioniert
          weiter.
        </p>

        <h2>Schmerzen, und wann du aufhören solltest</h2>
        <p>
          Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und kann dir
          nicht sagen, was los ist. Wenn der Schmerz stechend ist, schlimmer
          wird oder dich nicht schlafen lässt, geh zu einer medizinischen
          Fachperson.
        </p>

        <h2>Käufe</h2>
        <p>
          Walkito bezahlst du mit einem Abo über den App Store, jährlich oder
          wöchentlich. Beide verlängern sich automatisch, und der App Store
          zeigt dir den Preis in deiner Währung, bevor du kaufst.
        </p>
        <ul>
          <li>
            <b>Verwalten oder kündigen</b> kannst du dein Abo unter Einstellungen
            → [dein Name] → Abonnements. Schalte die Verlängerung mindestens 24
            Stunden vor Ende des Zeitraums aus, dann wird dir nichts mehr
            berechnet. Du behältst den Zugang bis zum Ende des Zeitraums, für den
            du bezahlt hast.
          </li>
          <li>
            <b>Erstattungen</b> laufen über Apple. Nutze Apples Seite{' '}
            <a href="https://reportaproblem.apple.com">Problem melden</a>. Wir
            können keine Erstattungen im Namen von Apple bearbeiten.
          </li>
          <li>
            <b>Neues Handy?</b> Melde dich mit derselben Apple-ID an und tippe
            in der App auf „Restore Purchases“. Dein Plan kommt mit deinem Konto
            zurück.
          </li>
        </ul>

        <h2>Dein Konto löschen</h2>
        <p>
          Geh in der App auf <b>Profile → Delete account</b>. Damit wird dein
          Konto auf unserem Server mit allem gelöscht, was darin gespeichert ist
          (dein Plan, Check-ins, Testergebnisse, Einheiten, E-Mail-Adresse und
          Einladungscode), und das Handy wird geleert. Das lässt sich nicht
          rückgängig machen. Wenn du nur die App löschst, wird nur die Kopie auf
          dem Handy entfernt: Dein Konto bleibt und kommt zurück, wenn du dich
          wieder anmeldest. Du kannst auch an {mail} schreiben, und wir löschen
          es für dich.
        </p>

        <p className="updated">
          Dies ist eine Übersetzung. Wenn sie von{' '}
          <a href="/support/">der englischen Fassung</a> abweicht, gilt die
          englische Fassung.
        </p>
      </Prose>

      <Footer lang="de" page="support" />
    </>
  );
}
