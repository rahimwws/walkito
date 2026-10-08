import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Italian Terms of Use. It mirrors `app/(en)/terms/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English
 * applies. The notes on what is deliberately left out (governing law, prices)
 * live on the English page.
 *
 * The app has no Italian UI yet, so in-app labels (Profile → Delete account,
 * Restore Purchases) are the English ones the reader will see.
 */
export const metadata: Metadata = {
  title: 'Termini di utilizzo',
  description:
    'Termini di utilizzo di Walkito: cos’è l’app e cosa non è, il tuo account, abbonamenti, inviti, salute e sicurezza.',
  alternates: alternatesFor('terms', 'it'),
  openGraph: {
    locale: 'it_IT',
    title: `Termini di utilizzo | ${SITE_NAME}`,
    description: 'Cos’è l’app, come funzionano i pagamenti e i limiti di ciò che afferma.',
    url: '/it/termini/',
    images: ['/opengraph-image'],
    type: 'website',
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/it/` },
    { '@type': 'ListItem', position: 2, name: 'Termini di utilizzo', item: `${SITE_URL}/it/termini/` },
  ],
};

export default function TerminiIt() {
  return (
    <>
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="it" />

      <Prose className="shell prose">
        <h1>Termini di utilizzo</h1>

        <p className="updated">Ultimo aggiornamento: 1 ottobre 2026</p>
        <p className="updated">
          Questa è una traduzione. Se differisce dalla{' '}
          <a href="/terms/">versione in inglese</a>, vale la versione in
          inglese.
        </p>

        <p className="lede">
          Questi termini regolano il tuo uso dell’app Walkito, gestita da
          Walkito («noi»). Usare l’app significa accettarli. Se non li accetti,
          smetti di usarla ed elimina il tuo account in Profile → Delete account
          (Profilo → Elimina account).
        </p>

        <h2>Cos’è Walkito</h2>
        <p>
          Walkito è un programma di esercizi per il dolore al tallone e al
          piede. Costruisce il tuo piano una settimana alla volta intorno a
          obiettivi che puoi misurare, con sessioni da 3, 5 o 10 minuti, si
          adatta ogni giorno in base a quello che registri, e misura i tuoi
          progressi con test fisici ogni 14 giorni, poi ogni 28 quando hai
          raggiunto il primo obiettivo.
        </p>
        <p>
          <b>Non è un dispositivo medico, una diagnosi o una cura.</b> Non può
          dirti cosa non va nel tuo piede, e niente al suo interno sostituisce il
          parere di un professionista sanitario che ti ha visitato.
        </p>

        <h2>Salute e sicurezza</h2>
        <p>
          L’esercizio comporta dei rischi, e te li assumi tu. Sei responsabile di
          decidere se una sessione è adatta a te in un dato giorno, e di
          fermarti quando qualcosa fa male in un modo che l’app non ha modo di
          sapere.
        </p>
        <p className="notice">
          Rivolgiti a un professionista sanitario prima di iniziare, e fermati e
          chiedi un parere, se il dolore è iniziato dopo un infortunio o una
          caduta, si accompagna a intorpidimento, formicolio, bruciore, gonfiore
          o calore, ti sveglia di notte, o se da adulto un arco si è abbassato
          all’improvviso.
        </p>

        <h2>Chi può usarla</h2>
        <p>
          Devi avere almeno 13 anni. Se hai meno di 18 anni, usa Walkito con un
          genitore o tutore che ha letto questi termini.
        </p>

        <h2>Il tuo account</h2>
        <p>
          Quando configuri Walkito accedi con Apple, e quell’account è dove viene
          salvato il tuo piano. L’accesso con email e password funziona solo per
          account creati da noi; non ci si può registrare con l’email. Tieni al
          sicuro il tuo telefono e il tuo ID Apple, perché chiunque li usi può
          usare il tuo account.
        </p>
        <p>
          Il tuo piano, le risposte, i check-in, i risultati dei test e le
          sessioni sono salvati sul tuo telefono e copiati nel tuo account.
          Accedi con lo stesso account su un telefono nuovo o dopo una
          reinstallazione e tornano. Gli acquisti tornano con Restore Purchases
          (Ripristina acquisti) sullo stesso ID Apple.
        </p>

        <h2>La tua licenza</h2>
        <p>
          Ricevi una licenza personale, non esclusiva e non trasferibile per
          usare Walkito su dispositivi che possiedi o controlli, per uso
          personale e non commerciale. Non puoi rivendere l’accesso,
          ridistribuire il programma, fare reverse engineering dell’app o usarne
          i contenuti per creare un prodotto concorrente.
        </p>
        <p>
          Il programma, il catalogo degli esercizi, i testi e il software sono
          nostri. Tutto quello che registri (le tue voci sul dolore, le tue
          sessioni, la tua cronologia) è tuo. È salvato sul tuo dispositivo e
          copiato nel tuo account così può essere ripristinato.
        </p>

        <h2>Pagamenti</h2>
        <p>
          Walkito si paga tramite l’App Store. Apple riceve il pagamento,
          conserva la ricevuta e mostra le opzioni, il prezzo e la durata prima
          dell’acquisto. Vale quel prezzo, non una cifra indicata altrove. Oggi
          ci sono due abbonamenti, ed entrambi si rinnovano automaticamente:
        </p>
        <ul>
          <li>
            <b>Un abbonamento annuale</b>, addebitato una volta all’anno.
          </li>
          <li>
            <b>Un abbonamento settimanale</b>, addebitato una volta a settimana.
          </li>
        </ul>

        <h3>Abbonamenti</h3>
        <ul>
          <li>
            Un abbonamento si rinnova automaticamente alla fine di ogni periodo, e
            l’importo viene addebitato sul tuo ID Apple, a meno che tu non
            disattivi il rinnovo almeno 24 ore prima della fine del periodo.
          </li>
          <li>
            Gestiscilo o annullalo in <b>Impostazioni → [il tuo nome] →
            Abbonamenti</b>. Annullare ferma il rinnovo successivo; mantieni
            l’accesso fino alla fine del periodo che hai pagato.
          </li>
          <li>
            Se viene offerta una prova gratuita o un prezzo introduttivo, alla
            fine diventa il prezzo standard, a meno che tu non annulli almeno 24
            ore prima che finisca.
          </li>
          <li>
            Eliminare l’app o il tuo account non annulla un abbonamento. Può
            farlo solo Apple, dalla schermata indicata sopra.
          </li>
        </ul>

        <h3>Rimborsi</h3>
        <p>
          I rimborsi sono gestiti solo da Apple. Usa{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          Non possiamo emettere o stornare un addebito per conto di Apple.
        </p>

        <h2>Inviti</h2>
        <p>
          Puoi condividere il tuo codice invito. Un amico che lo usa riceve uno
          sconto sull’abbonamento annuale. Quando qualcuno ha usato il tuo
          codice, lo stesso sconto è disponibile anche per te se in seguito ti
          abboni al piano annuale. Condividere un codice non ti dà tempo gratuito
          né altri premi.
        </p>
        <p>
          Ogni persona può usare un solo codice, una sola volta, e non il
          proprio. Gli sconti degli inviti non hanno valore in denaro.
        </p>
        <p>
          Possiamo cambiare o chiudere il programma inviti in qualsiasi momento.
          Uno sconto con cui ti sei già abbonato resta tuo.
        </p>

        <h2>Apple Salute</h2>
        <p>
          Se lo permetti, Walkito legge passi, velocità della camminata,
          asimmetria della camminata, piani saliti, frequenza cardiaca a riposo,
          frequenza cardiaca, energia attiva, analisi del sonno e allenamenti, e
          scrive le sessioni che completi come allenamenti e minuti di
          consapevolezza. Ogni permesso è facoltativo e puoi revocarlo in
          qualsiasi momento nelle Impostazioni. I dati di Apple Salute restano
          sul tuo telefono e non vengono mai caricati né salvati nel tuo
          account. Vedi la <a href="/it/privacy/">pagina sulla privacy</a> per
          sapere cosa invece esce dal telefono.
        </p>

        <h2>Modifiche</h2>
        <p>
          Il programma e l’app cambieranno: gli esercizi vengono rivisti, il
          piano viene messo a punto, le funzioni arrivano e se ne vanno.
          Possiamo anche cambiare questi termini. Quando una modifica è
          rilevante lo diremo nell’app o aggiornando la data in alto in questa
          pagina, e continuare a usare Walkito dopo significa accettare la nuova
          versione.
        </p>

        <h2>Come smettere</h2>
        <p>
          Puoi smettere in qualsiasi momento eliminando il tuo account in Profile
          → Delete account, che rimuove quello che hai registrato dal telefono e
          dal nostro server, e annullando eventuali abbonamenti tramite Apple
          come indicato sopra. Eliminare solo l’app rimuove soltanto la copia sul
          telefono. Possiamo sospendere l’accesso se l’app viene usata in un modo
          che questi termini vietano. In pratica significa rivendita o
          manomissione, non qualcosa che potresti fare usandola normalmente.
        </p>

        <h2>Cosa non promettiamo</h2>
        <p>
          Walkito è fornito così com’è. Non promettiamo che seguire il programma
          ridurrà il tuo dolore, cambierà il tuo arco o porterà a un risultato
          particolare. La <a href="/science/">pagina delle evidenze</a> (in
          inglese) spiega cosa ha trovato la ricerca che segue, compreso dove
          quelle prove finiscono.
        </p>
        <p>
          Non promettiamo che l’app funzioni senza interruzioni o senza errori, e
          non siamo responsabili di perdite indirette o consequenziali, né di
          lesioni derivanti da esercizi che hai scelto di fare. Niente di quanto
          scritto qui limita i diritti che hai in base alle leggi a tutela dei
          consumatori e che non possono essere limitati per accordo.
        </p>

        <h2>Contatti</h2>
        <p>
          Walkito
          <br />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </Prose>

      <Footer lang="it" page="terms" />
    </>
  );
}
