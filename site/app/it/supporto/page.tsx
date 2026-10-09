import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Italian Support page. It mirrors `app/(en)/support/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English applies.
 *
 * The app has no Italian UI yet, so in-app labels (Profile → Delete account,
 * Restore Purchases) are the English ones the reader will see. iOS and Android
 * system settings are given in Italian.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Supporto',
  description:
    'Aiuto con Walkito: notifiche, Apple Salute, acquisti, rimborsi e come eliminare il tuo account. Scrivici e ti risponde una persona.',
  alternates: alternatesFor('support', 'it'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function SupportoIt() {
  return (
    <>
      <Masthead lang="it" />

      <Prose className="shell prose" kicker={{ label: CHROME.it.navSupport, lang: 'it' }}>
        <h1>Supporto</h1>

        <p className="updated">Qualcosa non va? Diccelo. Ti risponde una persona.</p>

        <p>
          Scrivi a {mail}. Ti risponde una persona, di solito entro 12 ore.
          Raccontaci cosa stavi facendo e cosa ha fatto l’app. Di solito basta
          per capire cos’è successo senza troppi messaggi avanti e indietro.
        </p>

        <h2>Accesso, e un telefono nuovo</h2>
        <p>
          La configurazione ti fa accedere con Apple e serve una connessione una
          volta. Dopo, l’uso quotidiano funziona offline, e quello che registri
          viene copiato nel tuo account ogni volta che c’è connessione. Su un
          telefono nuovo o dopo aver reinstallato l’app, accedi con lo stesso
          ID Apple e il tuo piano, i check-in, i risultati dei test e le
          sessioni tornano.
        </p>

        <h2>Il piano segue le date, non le presenze</h2>
        <p>
          Saltare dei giorni non ti fa restare indietro, e non c’è niente da
          recuperare. La settimana segue le date, quindi una sessione saltata
          non viene spostata a domani. Se sei stato via, apri l’app e riparti da
          oggi.
        </p>

        <h2>Notifiche</h2>
        <p>
          Al massimo una al giorno, al massimo cinque a settimana, niente dopo le
          21:30. Se smetti di aprirle l’app ne manda meno, e se continui a non
          aprirle le mette in pausa per un mese. Puoi disattivarle del tutto in
          Impostazioni → Notifiche → Walkito; se lo fai, nient’altro cambia
          nell’app.
        </p>

        <h2>Dati sulla salute</h2>
        <p>
          Walkito legge da Apple Salute passi, velocità della camminata,
          asimmetria della camminata, piani saliti, frequenza cardiaca,
          frequenza cardiaca a riposo, energia attiva, sonno e allenamenti, e vi
          scrive le sessioni che completi. Ognuno di questi è facoltativo.
          Questi dati restano sul tuo telefono e non vengono mai caricati né
          salvati nel tuo account. Disattiva quello che vuoi in Impostazioni →
          App → Salute → Accesso ai dati e dispositivi → Walkito, e le parti che
          ne avevano bisogno semplicemente si fermano. Il piano continua a
          funzionare.
        </p>

        <h2>Il dolore, e quando fermarsi</h2>
        <p>
          Walkito è un programma di esercizi. Non fa diagnosi, e non può dirti
          cosa non va. Se il dolore è acuto, peggiora o ti impedisce di dormire,
          rivolgiti a un professionista sanitario.
        </p>

        <h2>Acquisti</h2>
        <p>
          Walkito si paga con un abbonamento, annuale o settimanale, tramite
          l’App Store su iPhone o Google Play su Android. Entrambi si rinnovano
          automaticamente, e lo store ti mostra il prezzo nella tua valuta prima
          dell’acquisto.
        </p>
        <ul>
          <li>
            <b>Gestisci o annulla</b> l’abbonamento su iPhone in Impostazioni →
            [il tuo nome] → Abbonamenti. Disattiva il rinnovo almeno 24 ore
            prima della fine del periodo e non ti verrà addebitato altro. Su
            Android, apri l’app Google Play, tocca l’icona del profilo, poi
            Pagamenti e abbonamenti → Abbonamenti → Walkito → Annulla
            abbonamento. In entrambi i casi mantieni l’accesso fino alla fine
            del periodo che hai pagato.
          </li>
          <li>
            <b>I rimborsi</b> li gestisce lo store in cui hai pagato. Su iPhone,
            usa la pagina{' '}
            <a href="https://reportaproblem.apple.com">Segnala un problema</a> di
            Apple. Su Android, richiedilo dalla tua{' '}
            <a href="https://play.google.com/store/account/orderhistory">cronologia ordini di Google Play</a>.
            Non possiamo gestire rimborsi per conto di Apple o di Google.
          </li>
          <li>
            <b>Telefono nuovo?</b> Su iPhone, accedi con lo stesso ID Apple e
            tocca Restore Purchases (Ripristina acquisti) nell’app. Su Android,
            usa lo stesso account Google in Google Play e l’abbonamento torna.
            Il tuo piano torna con il tuo account. Un abbonamento acquistato su
            iPhone non passa ad Android, né il contrario, perché Apple e Google
            fatturano separatamente.
          </li>
        </ul>

        <h2>Eliminare il tuo account</h2>
        <p>
          Nell’app, vai su <b>Profile → Delete account</b> (Profilo → Elimina
          account). Questo elimina il tuo account sul nostro server con tutto
          quello che vi è salvato (il tuo piano, i check-in, i risultati dei
          test, le sessioni, l’email e il codice invito) e svuota il telefono.
          Non si può annullare. Eliminare solo l’app rimuove soltanto la copia
          sul telefono: il tuo account resta e torna quando accedi di nuovo.
          Puoi anche scrivere a {mail} e lo eliminiamo noi per te.
        </p>

        <p className="updated">
          Questa è una traduzione. Se differisce dalla{' '}
          <a href="/support/">versione in inglese</a>, vale la versione in
          inglese.
        </p>
      </Prose>

      <Footer lang="it" page="support" />
    </>
  );
}
