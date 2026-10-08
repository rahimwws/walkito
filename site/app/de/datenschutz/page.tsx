import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The German Privacy Policy. It mirrors `app/(en)/privacy/page.tsx` and must
 * be updated whenever that page changes; where the two differ, the English
 * applies. The notes on what each service receives live on the English page.
 *
 * The app has no German interface yet, so its own labels (Profile, Delete
 * account) are quoted in English, as the reader sees them. iOS and Android
 * settings paths use the German system labels.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Datenschutz',
  description:
    'Was Walkito erfasst und warum. Dein Plan wird in deinem Konto gespeichert, Daten aus Apple Health und Health Connect bleiben auf dem Handy. Keine Werbung.',
  alternates: alternatesFor('privacy', 'de'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function DatenschutzDe() {
  return (
    <>
      <Masthead lang="de" />

      <Prose className="shell prose">
        <h1>Datenschutz</h1>

        <p className="updated">Zuletzt aktualisiert: 7. Oktober 2026</p>
        <p className="updated">
          Dies ist eine Übersetzung. Wenn sie von{' '}
          <a href="/privacy/">der englischen Fassung</a> abweicht, gilt die
          englische Fassung.
        </p>

        <h2>Kurz gesagt</h2>
        <ul>
          <li>Bei der Einrichtung von Walkito meldest du dich auf dem iPhone mit Apple an, auf Android mit Google.</li>
          <li>
            Dein Plan, deine Antworten, deine Schmerz-Check-ins, deine
            Testergebnisse und die Einheiten, die du abschließt, werden in deinem
            Konto gespeichert, damit sie auf einem neuen Handy oder nach einer
            Neuinstallation der App zurückkommen.
          </li>
          <li>
            <b>Daten aus Apple Health und Health Connect bleiben auf deinem Handy und werden nie hochgeladen.</b>
          </li>
          <li>
            Einige Dienste erhalten Daten, damit die App funktioniert: Supabase
            (dein Konto und dein Plan), PostHog (Nutzungsanalyse), RevenueCat
            (Käufe), Superwall (Abo-Bildschirme), Expo (Mitteilungen,
            App-Updates, Geschwindigkeits- und Absturzberichte), Apple (Anmeldung,
            Zahlungen und Mitteilungen), Google (Anmeldung auf Android) und
            Resend (E-Mails).
          </li>
          <li>Keine Werbung, kein Werbe-Tracking, und wir verkaufen deine Daten nie.</li>
        </ul>

        <h2>Dein Konto</h2>
        <p>
          Bei der Einrichtung von Walkito meldest du dich mit Apple an. Apple
          gibt uns eine Kennung, deinen Namen und deine E-Mail-Adresse, oder eine
          private Weiterleitungsadresse, wenn du deine verbergen möchtest. Die
          Kennung wird zu deinem Konto auf unserem Server. Dein Vorname und deine
          E-Mail-Adresse werden mit deinem Konto gespeichert.
        </p>
        <p>
          Auf Android meldest du dich bei der Einrichtung stattdessen mit Google
          an. Google gibt uns, wie Apple, eine Kennung und deine E-Mail-Adresse,
          und sie werden genauso verwendet.
        </p>
        <p>
          Wenn „Mit Apple anmelden“ auf deinem Gerät nicht verfügbar ist, nutzt
          die App stattdessen ein anonymes Konto. Die Anmeldung mit E-Mail und
          Passwort funktioniert nur für Konten, die wir selbst einrichten, zum
          Beispiel für die Prüfung im App Store. Eine Registrierung per E-Mail
          gibt es nicht.
        </p>
        <p>
          Ein Anmeldeschlüssel wird im Schlüsselbund deines iPhones aufbewahrt.
          Er bleibt erhalten, wenn du die App löschst, damit eine Neuinstallation
          dein Konto wiederfinden kann. „Delete account“ entfernt ihn.
        </p>

        <h2>Deine E-Mail-Adresse</h2>
        <p>
          Wir nutzen deine E-Mail-Adresse, um dir zu antworten, wenn du dich an
          den Support wendest, um dein Konto in unseren eigenen Auswertungen zu
          erkennen und um dir E-Mails zu deinem Plan zu schicken: Erinnerungen,
          eine wöchentliche Zusammenfassung, deine Testergebnisse und ab und zu
          ein Angebot für Walkito Premium. Die E-Mails werden aus deinem eigenen
          Plan geschrieben und nutzen deinen Vornamen. Jede E-Mail hat einen Link
          zum Abmelden, und du kannst uns auch schreiben. Wir geben deine Adresse
          nie an andere für deren eigenes Marketing weiter.
        </p>

        <h2>Was in deinem Konto gespeichert wird</h2>
        <p>
          Alles wird zuerst auf deinem Handy gespeichert. Dann wird es im
          Hintergrund in dein Konto auf unserem Server kopiert, damit es
          zurückkommt, wenn du dich auf einem neuen Handy oder nach einer
          Neuinstallation der App anmeldest. Diese Kopie enthält:
        </p>
        <ul>
          <li>
            <b>Deine Antworten und Einstellungen:</b> welcher Fuß und wo es
            wehtut, dein Fußtyp, dein Ziel und dein Sport, Tage pro Woche,
            Länge der Einheiten, Erinnerungszeit, die Ausrüstung, die du nicht
            hast, und dein Startdatum.
          </li>
          <li>
            <b>Deine Ziele</b> und dein Fortschritt bei jedem davon.
          </li>
          <li>
            <b>Deine Schmerz-Check-ins:</b> jeden Schmerzwert, den du einträgst,
            wann du ihn eingetragen hast und wo es wehtat, und ob du die
            Morgendehnung gemacht hast.
          </li>
          <li>
            <b>Deine Testergebnisse:</b> Wadenheben, Gewölbehalten und
            Gleichgewicht, links und rechts.
          </li>
          <li>
            <b>Deine Einheiten:</b> den Plan jeder Woche, die Einheiten, die du
            abschließt, welche Übungen du gemacht, übersprungen oder getauscht
            hast, wie sich die Einheit angefühlt hat, Schmerzen währenddessen und
            Übungen, die du als nicht machbar markiert hast.
          </li>
          <li>
            <b>Deine App-Nutzung:</b> wie oft du die App jeden Tag geöffnet hast
            und wie lange.
          </li>
        </ul>
        <p>
          Wir nutzen diese Kopie auch, um zu sehen, wie der Plan genutzt wird und
          ob Menschen ihre Ziele erreichen, damit wir ihn verbessern können.
        </p>

        <h2>Was auf deinem Handy bleibt</h2>
        <p>
          Alter, Geschlecht, Gewicht und Schuhgröße, die du bei der Einrichtung
          angibst, deine Einstellungen für Aussehen und Sprache der App, die
          Übungsvideos, die du heruntergeladen hast, und jeder Wert aus Apple
          Health oder Health Connect. Diese werden nur im eigenen Speicher der
          App auf dem Gerät aufbewahrt.
        </p>

        <h2>Apple Health</h2>
        <p>
          Mit deiner Erlaubnis liest Walkito Schritte, Gehgeschwindigkeit,
          Gang-Asymmetrie, gestiegene Etagen, Ruheherzfrequenz, Herzfrequenz,
          aktive Energie, Schlafanalyse und Trainings. Die Einheiten, die du
          abschließt, schreibt es als Trainings und Achtsamkeitsminuten zurück
          in Apple Health.
        </p>
        <p>
          Diese Daten werden auf deinem Handy gelesen und zusammengefasst.{' '}
          <b>
            Sie werden nie hochgeladen, nie in deinem Konto gespeichert und nie
            für Werbung, Marketing oder Data-Mining genutzt.
          </b>{' '}
          Wir verkaufen sie nie.
        </p>
        <p>
          Du kannst jede Erlaubnis jederzeit unter Einstellungen → Apps →
          Health → Datenzugriff &amp; Geräte → Walkito widerrufen. Die App
          funktioniert weiter, und die Teile, die diese Daten gebraucht haben,
          werden nicht mehr angezeigt.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          Auf Android liest Walkito mit deiner Erlaubnis Schritte, gestiegene
          Etagen, Ruheherzfrequenz, Herzfrequenz, Schlafeinheiten,
          Trainingseinheiten, Distanz und verbrannte aktive Kalorien aus Health
          Connect. Die Einheiten, die du abschließt, schreibt es als
          Trainingseinheiten zurück.
        </p>
        <p>
          Wir nutzen diese Daten nur, um deinen Plan anzupassen: Wie viel du dich
          bewegt, geschlafen und wie viel du gelaufen bist, bestimmt die Einheit
          des Tages und die Hinweise, die du siehst. Sie werden auf deinem Handy
          gelesen und zusammengefasst.{' '}
          <b>
            Daten aus Health Connect werden nie hochgeladen, nie verkauft, nie an
            Dritte weitergegeben und nie für Werbung genutzt.
          </b>{' '}
          Die Nutzung von Informationen aus Health Connect durch Walkito
          entspricht der Health-Connect-Berechtigungsrichtlinie, einschließlich
          der Anforderungen zur eingeschränkten Nutzung (Limited Use).
        </p>
        <p>
          Du kannst jede Erlaubnis jederzeit in der Health-Connect-App widerrufen
          oder unter Android-Einstellungen → Sicherheit &amp; Datenschutz →
          Datenschutz → Health Connect → App-Berechtigungen → Walkito. Die App
          funktioniert auch ohne.
        </p>

        <h2>Was wir erfassen, wie und warum</h2>

        <h3>Supabase: dein Konto und dein Plan</h3>
        <p>
          <b>Was:</b> dein Konto, deine E-Mail-Adresse, alles, was unter „Was in
          deinem Konto gespeichert wird“ aufgeführt ist, deine Adresse für
          Mitteilungen (wenn du Mitteilungen eingeschaltet hast), dein
          Einladungscode und welches Konto welchen Code genutzt hat.
          Übungsvideos werden aus dem Speicher von Supabase heruntergeladen.
        </p>
        <p>
          <b>Warum:</b> um dein Konto zu betreiben, deinen Plan auf ein neues
          Handy zurückzubringen, Support-Anfragen zu beantworten, Einladungen
          funktionieren zu lassen und die Übungsvideos bereitzustellen.
        </p>

        <h3>PostHog: Nutzungsanalyse</h3>
        <p>
          <b>Was:</b> Ereignisse, die sagen, dass in der App etwas passiert ist,
          zum Beispiel dass ein Schritt der Einrichtung angezeigt wurde, eine
          Einheit, ein Check-in oder ein Test abgeschlossen wurde und ob sich die
          Einheit leicht, okay oder schwer angefühlt hat, ein Ziel erreicht
          wurde, eine Einstellung des Plans geändert wurde (nicht worauf) oder
          der Kaufbildschirm geöffnet wurde. Außerdem die Bildschirme, die du
          besuchst, und die Antworten auf einige Fragen bei der Einrichtung: wo
          du von Walkito gehört hast, dein Ziel, dein Sport und wie viel du
          läufst. Dein Ziel, oder der Name eines Ziels, das du erreicht hast,
          kann einen Hinweis auf deine Beschwerden geben. Dein Gerätemodell, deine
          iOS- und App-Version, Sprache und Zeitzone werden mitgeschickt, und
          PostHog ermittelt aus deiner IP-Adresse einen ungefähren Standort (Land
          und Stadt). Ereignisse sind mit einer zufälligen ID verknüpft,
          derselben, die RevenueCat nutzt.
        </p>
        <p>
          <b>Nie gesendet:</b> Schmerzwerte, Schmerzbereiche, Testergebnisse,
          Werte aus Apple Health, Alter oder Gewicht. Nichts auf deinem
          Bildschirm wird aufgezeichnet.
        </p>
        <p>
          <b>Warum:</b> um zu sehen, wo Menschen hängen bleiben, und die App zu
          verbessern.
        </p>

        <h3>RevenueCat: Käufe</h3>
        <p>
          <b>Was:</b> eine zufällige ID, dein Kauf- und Abo-Verlauf im App
          Store, die Analyse-ID oben und wo du laut deiner Angabe von Walkito
          gehört hast. Auf dem iPhone außerdem, ob du Walkito über eine
          Suchanzeige von Apple Ads installiert hast und, wenn ja, über welche
          Kampagne und welchen Suchbegriff, aus Apples AdServices. Dafür ist
          keine Tracking-Erlaubnis nötig, und es wird keine Werbe-ID genutzt.
        </p>
        <p>
          <b>Warum:</b> um zu wissen, was du gekauft hast, und es
          freizuschalten, und um zu sehen, welche Kanäle zu Käufen führen.
        </p>

        <h3>Expo: Mitteilungen, Updates, Geschwindigkeit und Abstürze</h3>
        <p>
          <b>Was:</b> wie lange die App zum Starten und zum Öffnen jedes
          Bildschirms braucht, Fehler und Absturzberichte, dieselben Ereignisse,
          die PostHog bekommt, sowie dein Gerätemodell, deine iOS- und
          App-Version, Sprache und eine zufällige Installations-ID. App-Updates
          werden von Expo heruntergeladen. Wenn jemand deinen Einladungscode
          nutzt, läuft die Mitteilung, die dir das sagt, über den Push-Dienst
          von Expo. Tägliche Erinnerungen werden auf deinem Handy geplant und
          laufen über keinen Server.
        </p>
        <p>
          <b>Warum:</b> um die App schnell und funktionsfähig und auf dem
          neuesten Stand zu halten und Mitteilungen zu Einladungen zuzustellen.
        </p>

        <h3>Superwall: Abo-Bildschirme</h3>
        <p>
          <b>Was:</b> deine Konto-ID, dein Vorname, das Ziel und der Sport, die
          du bei der Einrichtung deines Plans gewählt hast, der erste Schritt
          deines Plans, die gewählten Tage und Minuten, das Datum deines
          nächsten Fortschrittstests, deine App-Sprache, welche
          Abo-Bildschirme du gesehen und was du darauf angetippt hast, und ob du
          schon ein Abo hast. Nie dein Schmerz, deine Antworten zu deinem
          Körper oder irgendetwas aus Apple Health oder Health Connect.
        </p>
        <p>
          <b>Warum:</b> um den Abo-Bildschirm anzuzeigen, ihn an dich und deinen
          Plan anzupassen und zu testen, welche Version am besten funktioniert.
          Zahlungen laufen weiterhin über Apple und RevenueCat.
        </p>

        <h3>Resend: E-Mails</h3>
        <p>
          <b>Was:</b> deine E-Mail-Adresse, dein Vorname und der Inhalt jeder
          E-Mail, die wir dir schicken und die aus deinem Plan geschrieben wird.
        </p>
        <p>
          <b>Warum:</b> um diese E-Mails zuzustellen und uns zu sagen, ob sie
          angekommen sind.
        </p>

        <h3>Apple: Anmeldung, Zahlungen und Mitteilungen</h3>
        <p>
          „Mit Apple anmelden“ teilt den Namen und die E-Mail-Adresse, die du
          auswählst. Zahlungen wickelt Apple ab, und wir sehen deine Kartendaten
          nie. Mitteilungen werden über Apples Push-Mitteilungsdienst
          zugestellt.
        </p>

        <p>
          Jeder Dienst oben erhält bei jeder Anfrage deine IP-Adresse, wie jeder
          Server.
        </p>

        <h2>Was wir nicht tun</h2>
        <p>
          Keine Werbung, keine Werbe- oder Attributions-SDKs und keine Werbe-ID.
          Wir verfolgen dich nicht über Apps oder Websites anderer Unternehmen
          hinweg. Wir verkaufen deine Daten nicht, und wir geben nichts, was du
          einträgst, für die Zwecke anderer weiter. Die Dienste oben verarbeiten
          die Daten nur, um ihren Dienst für uns zu erbringen.
        </p>

        <h2>Wie lange wir Daten aufbewahren</h2>
        <ul>
          <li>
            <b>Dein Konto und alles, was darin gespeichert ist:</b> bis du dein
            Konto löschst.
          </li>
          <li>
            <b>Analyse-, Geschwindigkeits- und Absturzdaten:</b> bis zu 12
            Monate.
          </li>
          <li>
            <b>Kaufbelege:</b> bei Apple und RevenueCat so lange, wie es
            Abrechnungs-, Buchhaltungs- und Steuerrecht verlangen.
          </li>
          <li>
            <b>Was auf deinem Handy ist:</b> bis du dein Konto oder die App
            löschst.
          </li>
        </ul>

        <h2>Dein Konto löschen</h2>
        <p>
          Geh in der App auf <b>Profile → Delete account</b>. Damit wird dein
          Konto auf unserem Server mit allem gelöscht, was darin gespeichert ist:
          deine Antworten und Einstellungen, Ziele, Schmerz-Check-ins,
          Testergebnisse, Einheiten, App-Nutzung, E-Mail-Adresse, Adresse für
          Mitteilungen und Einladungscode. Danach werden der Anmeldeschlüssel
          entfernt und das Handy geleert. Das lässt sich nicht rückgängig
          machen. Du kannst auch an {mail} schreiben, und wir löschen es für
          dich.
        </p>
        <p>
          Wenn du nur die App löschst, wird nur entfernt, was auf dem Handy ist.
          Dein Konto bleibt auf unserem Server und kommt zurück, wenn du dich
          wieder anmeldest.
        </p>
        <p>
          „Delete account“ entfernt keine Kaufbelege bei RevenueCat, keine
          Analysedaten bei PostHog und keine Geschwindigkeits- und Absturzdaten
          bei Expo. Wenn du diese löschen lassen möchtest, schreib an dieselbe
          Adresse. Trainings und Achtsamkeitsminuten, die Walkito in Apple
          Health geschrieben hat, bleiben dort, bis du sie in Health löschst.
          Das Löschen deines Kontos kündigt kein Abo. Das kann nur Apple, unter
          Einstellungen → [dein Name] → Abonnements.
        </p>

        <h2>Kinder</h2>
        <p>
          Walkito ist nicht für Kinder unter 13 Jahren gedacht, und wir erfassen
          wissentlich keine Daten von ihnen. Wenn du glaubst, dass ein Kind unter
          13 die App genutzt hat, schreib an {mail}, und wir löschen seine
          Daten.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Wenn du in der EU oder im Vereinigten Königreich bist, gibt dir das
          Datenschutzrecht Rechte an deinen personenbezogenen Daten. Wir stützen
          uns auf diese Rechtsgrundlagen:
        </p>
        <ul>
          <li>
            <b>Vertrag:</b> dein Konto, dein gespeicherter Plan, Käufe,
            Einladungen und Mitteilungen, die wir brauchen, um die App
            bereitzustellen, um die du gebeten hast.
          </li>
          <li>
            <b>Berechtigtes Interesse:</b> Analyse-, Geschwindigkeits- und
            Absturzdaten, um die App zu verstehen und zu verbessern. Dem kannst
            du widersprechen.
          </li>
          <li>
            <b>Einwilligung:</b> der Zugriff auf Apple Health und Health
            Connect, den du jederzeit in den Einstellungen widerrufen kannst.
            Diese Daten verlassen dein Handy nie.
          </li>
        </ul>
        <p>
          Du kannst Auskunft über deine Daten, ihre Berichtigung, Löschung oder
          eine Kopie verlangen, und du kannst der Nutzung widersprechen oder
          verlangen, dass wir sie einschränken. Schreib an {mail}. Du kannst dich
          auch bei deiner örtlichen Datenschutzbehörde beschweren. Einige der
          Dienste oben verarbeiten Daten außerhalb deines Landes, auch in den
          USA, mit ihren eigenen Schutzmaßnahmen für internationale
          Übermittlungen.
        </p>

        <h2>E-Mail-Anmeldungen auf der Website</h2>
        <p>
          Wenn du dich auf der Website für die Übungsblätter zum Ausdrucken und
          den 7-Tage-Startplan anmeldest, speichern wir deine E-Mail-Adresse, die
          Sprache, in der du gelesen hast, auf welcher Seite du dich angemeldet
          hast, und einen Nachweis der Bestätigung und jeder E-Mail, die wir dir
          geschickt haben.
        </p>
        <p>
          <b>Warum:</b> um dir die Blätter und die sieben täglichen E-Mails zu
          schicken, um die du gebeten hast, und sonst nichts.
        </p>
        <p>
          <b>Auftragsverarbeiter:</b> Resend (stellt die E-Mails zu) und
          Supabase (speichert die Anmeldung). Beide verarbeiten die Daten nur,
          um ihren Dienst für uns zu erbringen.
        </p>
        <p>
          <b>Es wird kein Konto angelegt.</b> Eine Anmeldung auf der Website legt
          kein App-Konto an. Die Daten sind von allen App-Daten getrennt.
        </p>
        <p>
          <b>Abmelden:</b> Jede E-Mail hat einen Link zum Abmelden mit einem
          Klick. Nachdem du dich abgemeldet hast, schicken wir nichts mehr und
          löschen deine Daten innerhalb von 30 Tagen. Du kannst auch an {mail}{' '}
          schreiben.
        </p>
        <p>
          <b>Keine Cookies, keine Tracker.</b> Die Website setzt keine Cookies
          und lädt kein Analyse- oder Tracking-Skript.
        </p>

        <h2>Keine medizinische Beratung</h2>
        <p>
          Walkito ist ein Übungsprogramm bei Fersen- und Fußschmerzen. Es stellt
          keine Diagnose und ersetzt keine medizinische Fachperson.
        </p>

        <h2>Änderungen</h2>
        <p>
          Wenn sich ändert, was wir erfassen, aktualisieren wir diese Seite und
          das Datum oben.
        </p>

        <h2>Kontakt</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </Prose>

      <Footer lang="de" page="privacy" />
    </>
  );
}
