import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Italian Privacy Policy. It mirrors `app/(en)/privacy/page.tsx` and must
 * be updated whenever that page changes; where the two differ, the English
 * applies. The notes on what each service receives live on the English page.
 *
 * The app has no Italian UI yet, so in-app labels (Profile → Delete account)
 * are the English ones the reader will see. System settings are in Italian.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Informativa sulla privacy',
  description:
    'Cosa raccoglie Walkito e perché. Il tuo piano è salvato nel tuo account, i dati di Apple Salute e Health Connect restano sul telefono. Niente pubblicità.',
  alternates: alternatesFor('privacy', 'it'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function PrivacyIt() {
  return (
    <>
      <Masthead lang="it" />

      <Prose className="shell prose">
        <h1>Informativa sulla privacy</h1>

        <p className="updated">Ultimo aggiornamento: 8 ottobre 2026</p>
        <p className="updated">
          Questa è una traduzione. Se differisce dalla{' '}
          <a href="/privacy/">versione in inglese</a>, vale la versione in
          inglese.
        </p>

        <h2>In breve</h2>
        <ul>
          <li>Quando configuri Walkito accedi con Apple su iPhone, o con Google su Android.</li>
          <li>
            Il tuo piano, le tue risposte, i check-in del dolore, i risultati dei
            test e le sessioni che completi sono salvati nel tuo account, così
            tornano su un telefono nuovo o dopo che reinstalli l’app.
          </li>
          <li>
            <b>I dati di Apple Salute e Health Connect restano sul tuo telefono e non vengono mai caricati.</b>
          </li>
          <li>
            Alcuni servizi ricevono dati perché l’app possa funzionare: Supabase
            (il tuo account e il piano), PostHog (statistiche d’uso), RevenueCat
            (acquisti), Superwall (schermate di abbonamento), Expo (notifiche,
            aggiornamenti dell’app, report su velocità e crash), Apple (accesso,
            pagamenti e notifiche), Google (accesso su Android) e Resend (email).
          </li>
          <li>Niente pubblicità, niente tracciamento pubblicitario, e non vendiamo mai i tuoi dati.</li>
        </ul>

        <h2>Il tuo account</h2>
        <p>
          Configurando Walkito accedi con Apple. Apple ci dà un identificativo,
          il tuo nome e il tuo indirizzo email, oppure un indirizzo di inoltro
          privato se scegli di nascondere il tuo. L’identificativo diventa il
          tuo account sul nostro server. Il tuo nome e il tuo indirizzo email
          sono salvati con il tuo account.
        </p>
        <p>
          Su Android, invece, la configurazione ti fa accedere con Google.
          Google, come Apple, ci dà un identificativo e il tuo indirizzo email,
          e vengono usati allo stesso modo.
        </p>
        <p>
          Se Accedi con Apple non è disponibile sul tuo dispositivo, l’app usa
          invece un account anonimo. L’accesso con email e password funziona
          solo per account creati da noi, per esempio per la revisione
          dell’App Store. Non ci si può registrare con l’email.
        </p>
        <p>
          Una chiave di accesso è conservata nel Portachiavi del tuo iPhone.
          Resta anche se elimini l’app, così una reinstallazione può ritrovare il
          tuo account. Delete account la rimuove.
        </p>

        <h2>Il tuo indirizzo email</h2>
        <p>
          Usiamo il tuo indirizzo email per risponderti quando contatti il supporto, per riconoscere il tuo account nei nostri report interni e per mandarti email sul tuo piano: promemoria, un riepilogo settimanale, i risultati dei test e, ogni tanto, un’offerta su Walkito Premium. Le email sono scritte a partire dal tuo piano e usano il tuo nome. Ogni email ha un link per disiscriverti, e puoi anche scriverci. Non condividiamo mai il tuo indirizzo con nessuno per il suo marketing.
        </p>

        <h2>Cosa viene salvato nel tuo account</h2>
        <p>
          Tutto viene salvato prima sul tuo telefono. Poi, in background, viene
          copiato nel tuo account sul nostro server, così torna quando accedi su
          un telefono nuovo o dopo che reinstalli l’app. Quella copia contiene:
        </p>
        <ul>
          <li>
            <b>Le tue risposte e impostazioni:</b> quale piede e dove fa male, il
            tuo tipo di piede, il tuo obiettivo e il tuo sport, i giorni a
            settimana, la durata delle sessioni, l’orario del promemoria,
            l’attrezzatura che non hai e la tua data di inizio.
          </li>
          <li>
            <b>I tuoi obiettivi</b> e i progressi su ciascuno.
          </li>
          <li>
            <b>I tuoi check-in del dolore:</b> ogni punteggio di dolore che
            registri, quando l’hai registrato e dove faceva male, e se hai fatto
            l’allungamento del mattino.
          </li>
          <li>
            <b>I risultati dei tuoi test:</b> sollevamenti sulle punte, tenuta
            dell’arco ed equilibrio, a sinistra e a destra.
          </li>
          <li>
            <b>Le tue sessioni:</b> il piano di ogni settimana, le sessioni che
            completi, quali esercizi hai fatto, saltato o sostituito, come ti è
            sembrata la sessione, l’eventuale dolore durante, e gli esercizi che
            hai segnato come impossibili per te.
          </li>
          <li>
            <b>Il tuo uso dell’app:</b> quante volte hai aperto l’app ogni giorno
            e per quanto tempo.
          </li>
        </ul>
        <p>
          Usiamo questa copia anche per vedere come viene usato il piano e se le
          persone raggiungono i loro obiettivi, così possiamo migliorarlo.
        </p>

        <h2>Cosa resta sul tuo telefono</h2>
        <p>
          L’età, il sesso, il peso e il numero di scarpe che indichi durante la
          configurazione, le tue impostazioni per l’aspetto e la lingua
          dell’app, i video degli esercizi che hai scaricato, e ogni dato di
          Apple Salute o Health Connect. Sono conservati solo nella memoria
          dell’app sul dispositivo.
        </p>

        <h2>Apple Salute</h2>
        <p>
          Con il tuo permesso, Walkito legge passi, velocità della camminata,
          asimmetria della camminata, piani saliti, frequenza cardiaca a riposo,
          frequenza cardiaca, energia attiva, analisi del sonno e allenamenti.
          Scrive in Apple Salute le sessioni che completi come allenamenti e
          minuti di consapevolezza.
        </p>
        <p>
          Questi dati vengono letti e riassunti sul tuo telefono.{' '}
          <b>
            Non vengono mai caricati, mai salvati nel tuo account e mai usati per
            pubblicità, marketing o data mining.
          </b>{' '}
          Non li vendiamo mai.
        </p>
        <p>
          Puoi revocare qualsiasi permesso in qualsiasi momento in Impostazioni
          → App → Salute → Accesso ai dati e dispositivi → Walkito. L’app
          continua a funzionare, e le parti che usavano quei dati smettono di
          comparire.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          Su Android, con il tuo permesso, Walkito legge da Health Connect
          passi, piani saliti, frequenza cardiaca a riposo, frequenza cardiaca,
          sessioni di sonno, sessioni di allenamento, distanza e calorie attive
          bruciate. Vi scrive le sessioni che completi come sessioni di
          allenamento.
        </p>
        <p>
          Usiamo questi dati solo per adattare il tuo piano: quanto ti sei
          mosso, quanto hai dormito e quanto hai corso danno forma alla
          sessione del giorno e ai suggerimenti che vedi. Vengono letti e
          riassunti sul tuo telefono.{' '}
          <b>
            I dati di Health Connect non vengono mai caricati, mai venduti, mai
            condivisi con terze parti e mai usati per pubblicità.
          </b>{' '}
          L’uso da parte di Walkito delle informazioni ricevute da Health Connect
          rispetta le norme sulle autorizzazioni di Health Connect, compresi i
          requisiti di uso limitato (Limited Use).
        </p>
        <p>
          Puoi revocare qualsiasi permesso in qualsiasi momento nell’app Health
          Connect, oppure in Impostazioni di Android → Sicurezza e privacy →
          Privacy → Health Connect → Autorizzazioni app → Walkito. L’app continua
          a funzionare anche senza.
        </p>

        <h2>Cosa raccogliamo, come e perché</h2>

        <h3>Supabase: il tuo account e il piano</h3>
        <p>
          <b>Cosa:</b> il tuo account, il tuo indirizzo email, tutto quello
          elencato in «Cosa viene salvato nel tuo account», il tuo indirizzo per
          le notifiche (se le hai attivate), il tuo codice invito e quale account
          ha usato quale codice. I video degli esercizi vengono scaricati dallo
          spazio di archiviazione di Supabase.
        </p>
        <p>
          <b>Perché:</b> per gestire il tuo account, riportare il tuo piano su
          un telefono nuovo, rispondere alle richieste di supporto, far
          funzionare gli inviti e fornire i video degli esercizi.
        </p>

        <h3>PostHog: statistiche d’uso</h3>
        <p>
          <b>Cosa:</b> eventi che dicono che è successo qualcosa nell’app, per
          esempio che è stato mostrato un passaggio della configurazione
          iniziale, che hai completato una sessione, un check-in o un test e se
          la sessione è sembrata facile, giusta o difficile, che hai raggiunto
          un obiettivo, che hai cambiato un’impostazione del piano (non in
          cosa), o che hai aperto la schermata di acquisto. Anche le schermate
          che visiti, e le risposte ad alcune domande della configurazione: dove
          hai sentito parlare di Walkito, il tuo obiettivo, il tuo sport e
          quanto corri. Il tuo obiettivo, o il nome di un obiettivo raggiunto,
          può far intuire la tua condizione. Vengono aggiunti il modello del
          dispositivo, la versione di iOS e dell’app, la lingua e il fuso
          orario, e PostHog ricava una posizione approssimativa (paese e città)
          dal tuo indirizzo IP. Gli eventi sono collegati a un ID casuale, lo
          stesso che usa RevenueCat. Quando accedi, gli vengono aggiunti
          l’indirizzo email e il nome che ci ha dato Apple o Google, così
          possiamo scriverti se qualcosa non va.
        </p>
        <p>
          <b>Mai inviati:</b> punteggi del dolore, zone del dolore, risultati
          dei test, dati di Apple Salute, età o peso. Niente di quello che c’è
          sul tuo schermo viene registrato.
        </p>
        <p>
          <b>Perché:</b> per vedere dove le persone si bloccano e migliorare
          l’app.
        </p>

        <h3>RevenueCat: acquisti</h3>
        <p>
          <b>Cosa:</b> un ID casuale, la cronologia di acquisti e abbonamenti
          sull’App Store, l’ID per le statistiche indicato sopra, e dove hai
          detto di aver sentito parlare di Walkito. Su iPhone, anche se hai
          installato Walkito da un annuncio di ricerca di Apple Ads e, in quel
          caso, quale campagna e quale termine di ricerca, tramite AdServices di
          Apple. Questo non richiede il permesso di tracciamento e non usa
          nessun identificativo pubblicitario.
        </p>
        <p>
          <b>Perché:</b> per sapere cosa hai acquistato e sbloccarlo, e per
          vedere quali canali portano ad acquisti.
        </p>

        <h3>Expo: notifiche, aggiornamenti, velocità e crash</h3>
        <p>
          <b>Cosa:</b> quanto ci mette l’app ad avviarsi e ad aprire ogni
          schermata, errori e report sui crash, gli stessi eventi che riceve
          PostHog, e il modello del dispositivo, la versione di iOS e dell’app,
          la lingua e un ID di installazione casuale. Gli aggiornamenti dell’app
          vengono scaricati da Expo. Quando qualcuno usa il tuo codice invito,
          la notifica che te lo dice passa dal servizio push di Expo. I
          promemoria giornalieri sono programmati sul tuo telefono e non passano
          da nessun server.
        </p>
        <p>
          <b>Perché:</b> per mantenere l’app veloce e funzionante, tenerla
          aggiornata e inviare le notifiche degli inviti.
        </p>

        <h3>Superwall: schermate di abbonamento</h3>
        <p>
          <b>Cosa:</b> l’ID del tuo account, il tuo nome, l’obiettivo e lo sport
          che hai scelto quando hai configurato il piano, il primo passo del tuo
          piano, i giorni e i minuti che hai scelto, la data del tuo prossimo
          controllo dei progressi, la lingua dell’app, quali schermate di
          abbonamento hai visto e cosa hai toccato, e se sei già abbonato. Mai
          il tuo dolore, le tue risposte sul tuo corpo, o qualsiasi dato di
          Apple Salute o Health Connect.
        </p>
        <p>
          <b>Perché:</b> per mostrare la schermata di abbonamento, rivolgerla a
          te e al tuo piano, e testare quale versione funziona meglio. I
          pagamenti passano comunque da Apple e RevenueCat.
        </p>

        <h3>Resend: email</h3>
        <p>
          <b>Cosa:</b> il tuo indirizzo email, il tuo nome e il contenuto di
          ogni email che ti mandiamo, scritta a partire dal tuo piano.
        </p>
        <p>
          <b>Perché:</b> per consegnare quelle email e sapere se sono arrivate.
        </p>

        <h3>Apple: accesso, pagamenti e notifiche</h3>
        <p>
          Accedi con Apple condivide il nome e l’email che scegli. I pagamenti
          sono gestiti da Apple, e non vediamo mai i dati della tua carta. Le
          notifiche vengono consegnate tramite il servizio di notifiche push di
          Apple.
        </p>

        <p>
          Ogni servizio qui sopra riceve il tuo indirizzo IP a ogni richiesta,
          come qualsiasi server.
        </p>

        <h2>Cosa non facciamo</h2>
        <p>
          Niente pubblicità, nessun SDK pubblicitario o di attribuzione, e nessun
          identificativo pubblicitario. Non ti tracciamo attraverso app o siti
          web di altre aziende. Non vendiamo i tuoi dati, e non condividiamo
          niente di quello che registri perché altri lo usino. I servizi qui
          sopra li trattano solo per fornirci il loro servizio.
        </p>

        <h2>Per quanto tempo li conserviamo</h2>
        <ul>
          <li>
            <b>Il tuo account e tutto quello che vi è salvato:</b> finché non
            elimini il tuo account.
          </li>
          <li>
            <b>Statistiche, dati su velocità e crash:</b> fino a 12 mesi.
          </li>
          <li>
            <b>Registri degli acquisti:</b> conservati da Apple e RevenueCat per
            il tempo richiesto dalle norme su fatturazione, contabilità e fisco.
          </li>
          <li>
            <b>Quello che c’è sul tuo telefono:</b> finché non elimini il tuo
            account o l’app.
          </li>
        </ul>

        <h2>Eliminare il tuo account</h2>
        <p>
          Nell’app, vai su <b>Profile → Delete account</b> (Profilo → Elimina
          account). Questo elimina il tuo account sul nostro server con tutto
          quello che vi è salvato: risposte e impostazioni, obiettivi, check-in
          del dolore, risultati dei test, sessioni, uso dell’app, indirizzo
          email, indirizzo per le notifiche e codice invito. Poi rimuove la
          chiave di accesso e svuota il telefono. Non si può annullare. Puoi
          anche scrivere a {mail} e lo eliminiamo noi per te.
        </p>
        <p>
          Eliminare solo l’app rimuove soltanto quello che c’è sul telefono. Il
          tuo account resta sul nostro server e torna quando accedi di nuovo.
        </p>
        <p>
          Delete account non rimuove i registri degli acquisti presso
          RevenueCat, le statistiche presso PostHog, né i dati su velocità e
          crash conservati da Expo. Per farli eliminare, scrivi allo stesso
          indirizzo. Gli allenamenti e i minuti di consapevolezza che Walkito ha
          scritto in Apple Salute restano lì finché non li elimini in Salute.
          Eliminare il tuo account non annulla un abbonamento. Può farlo solo
          Apple, in Impostazioni → [il tuo nome] → Abbonamenti.
        </p>

        <h2>Minori</h2>
        <p>
          Walkito non è per bambini sotto i 13 anni, e non raccogliamo
          consapevolmente dati che li riguardano. Se pensi che un bambino sotto
          i 13 anni abbia usato l’app, scrivi a {mail} e cancelleremo i suoi
          dati.
        </p>

        <h2>I tuoi diritti</h2>
        <p>
          Se sei nell’UE o nel Regno Unito, la normativa sulla protezione dei
          dati ti dà dei diritti sui tuoi dati personali. Ci basiamo su queste
          basi giuridiche:
        </p>
        <ul>
          <li>
            <b>Contratto:</b> il tuo account, il piano salvato, gli acquisti, gli
            inviti e le notifiche, che ci servono per fornirti l’app che hai
            chiesto.
          </li>
          <li>
            <b>Legittimo interesse:</b> statistiche e dati su velocità e crash,
            per capire e migliorare l’app. Puoi opporti.
          </li>
          <li>
            <b>Consenso:</b> l’accesso ad Apple Salute e Health Connect, che puoi
            revocare in qualsiasi momento nelle Impostazioni. Quei dati non
            lasciano mai il tuo telefono.
          </li>
        </ul>
        <p>
          Puoi chiedere di accedere ai tuoi dati, correggerli, cancellarli o
          riceverne una copia, e puoi opporti a come li usiamo o chiederci di
          limitarlo. Scrivi a {mail}. Puoi anche presentare un reclamo
          all’autorità per la protezione dei dati del tuo paese. Alcuni dei
          servizi qui sopra trattano dati fuori dal tuo paese, anche negli Stati
          Uniti, con le proprie garanzie per i trasferimenti internazionali.
        </p>

        <h2>Iscrizioni via email dal sito</h2>
        <p>
          Se ti iscrivi sul sito per ricevere le schede di esercizi da stampare
          e il piano iniziale di 7 giorni, salviamo il tuo indirizzo email, la
          lingua in cui stavi leggendo, la pagina da cui ti sei iscritto, e una
          traccia della conferma e di ogni email che ti abbiamo mandato.
        </p>
        <p>
          <b>Perché:</b> per mandarti le schede e le sette email giornaliere che
          hai chiesto, e nient’altro.
        </p>
        <p>
          <b>Responsabili del trattamento:</b> Resend (consegna le email) e
          Supabase (salva l’iscrizione). Entrambi trattano i dati solo per
          fornirci il loro servizio.
        </p>
        <p>
          <b>Nessun account creato.</b> Un’iscrizione dal sito non crea un
          account nell’app. I dati sono separati da qualsiasi dato dell’app.
        </p>
        <p>
          <b>Disiscrizione:</b> ogni email ha un link per disiscriverti con un
          clic. Dopo la disiscrizione smettiamo di scriverti e cancelliamo i tuoi
          dati entro 30 giorni. Puoi anche scrivere a {mail}.
        </p>
        <p>
          <b>Niente cookie, niente tracker.</b> Il sito non imposta cookie e non
          carica script di statistiche o di tracciamento.
        </p>

        <h2>Non è un consiglio medico</h2>
        <p>
          Walkito è un programma di esercizi per il dolore al tallone e al
          piede. Non fa diagnosi di nessuna condizione e non sostituisce un
          professionista sanitario.
        </p>

        <h2>Modifiche</h2>
        <p>
          Se cambia quello che raccogliamo, aggiorniamo questa pagina e la data
          in alto.
        </p>

        <h2>Contatti</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </Prose>

      <Footer lang="it" page="privacy" />
    </>
  );
}
