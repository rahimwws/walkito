import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Migliore app per la fascite plantare (IT) ─────────────────────────
 *
 * Translated from `articles/best-app.ts` (2026-10-08), written around the
 * Italian queries «app fascite plantare», «migliore app fascite plantare»,
 * «app esercizi fascite plantare». Informal «tu». Prices stay in US dollars
 * as on the English page; ratings, counts and grades are identical to it.
 * App names stay as published.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const BEST_APP_IT: Guide = {
  lang: 'it',
  page: 'bestApp',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Migliore app per la fascite plantare nel 2026: confronto',
  description:
    'La migliore app per la fascite plantare nel 2026: Exakt Health, Hinge Health, Prehab, PlantarCare, Arch e Walkito a confronto su prezzo e piattaforme.',
  h1: 'La migliore app per la fascite plantare: guida alla scelta per il 2026',
  lede:
    'Questa pagina confronta sette app che includono esercizi per la fascite plantare, il piede piatto o il dolore al piede in generale. Walkito è una di queste, e questa pagina la fa Walkito, quindi è giusto che tu lo sappia subito. L’obiettivo è essere onesti, dire dove le altre sono più forti e darti abbastanza dettagli per scegliere quella che fa per te.',
  intro: [
    'Non esiste un’unica app migliore per tutti. La scelta giusta dipende da cosa ti serve: un runner che torna a correre dopo la fascite plantare ha esigenze diverse da chi ha il piede piatto e sta in piedi al lavoro tutto il giorno, ed entrambi hanno esigenze diverse da chi ha Hinge Health pagato dal datore di lavoro. I criteri qui sotto spiegano cosa cercare, e la tabella dopo mostra dove si colloca ogni app.',
  ],
  takeaways: [
    'La linea guida clinica del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio un grado A e al lavoro di forza un grado B. Una buona app dovrebbe includere entrambi.',
    'Adattarsi al dolore conta: una routine quotidiana fissa non distingue una mattina buona da una cattiva, e caricare una fascia irritata sempre nello stesso modo ogni giorno può farti tornare indietro.',
    'Exakt Health è l’opzione più forte per i runner che si stanno riprendendo dalla fascite plantare e vogliono anche un piano per tornare a correre, ed è certificata come dispositivo medico nell’UE.',
    'Hinge Health è gratuita tramite datori di lavoro e assicurazioni sanitarie e include un team clinico completo, ma non puoi comprarla da solo.',
    'Nessuna app può fare una diagnosi del tuo dolore al piede. Se il dolore è iniziato dopo un infortunio, si accompagna a gonfiore o intorpidimento, o ti sveglia di notte, rivolgiti a un professionista sanitario prima di iniziare qualsiasi programma.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cosa dovrebbe fare davvero un’app per la fascite plantare?',
      keyFact: 'La linea guida clinica del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio una A, il grado più alto, e al lavoro di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Un’app utile per la fascite plantare dovrebbe includere esercizi in linea con quello che dice la ricerca. La linea guida clinica del 2023 sul dolore al tallone dà un grado alle prove dietro ogni approccio. L’allungamento della fascia plantare e del polpaccio prende una A, il grado più alto. Il lavoro di forza prende una B. Quindi nell’app dovrebbero esserci entrambi, non solo uno.',
        'Oltre all’elenco degli esercizi, queste sono le cose da controllare prima di abbonarti:',
      ],
      bullets: [
        '**Progressione.** Gli esercizi dovrebbero diventare più difficili nel tempo, non restare sempre allo stesso livello. La ricerca sul lavoro di forza per la fascite plantare ha usato un protocollo di carico progressivo.',
        '**Adattamento al dolore.** L’app dovrebbe reagire quando il dolore peggiora. Caricare un tallone dolorante nello stesso modo in una brutta mattina è il modo più veloce per perdere la fiducia nel programma.',
        '**Tempo al giorno.** La maggior parte delle persone non farà 30\u00A0minuti di esercizi per i piedi. Da cinque a dieci minuti degli esercizi giusti, fatti con costanza, è più realistico.',
        '**Prezzo e prova.** Sappi quanto paghi e se c’è una prova gratuita per vedere se fa per te.',
        '**Piattaforme.** Alcune app sono solo per iOS. Se usi Android, le scelte sono meno.',
        '**Privacy.** I dati sul dolore e sulla salute sono sensibili. Controlla se l’app li condivide o li vende.',
        '**Coinvolgimento di professionisti.** Un’app creata o rivista da fisioterapisti abilitati è un segnale ragionevole. Un’app che può metterti in contatto con un professionista lo è ancora di più.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Come si confrontano queste app?',
      paragraphs: [
        'La tabella qui sotto copre sette app disponibili a ottobre 2026. Ogni dato è stato controllato sulla scheda dell’app nell’App Store o in Google Play e sul suo sito ufficiale. Valutazioni e numero di recensioni sono quelli mostrati nell’App Store iOS al momento della stesura.',
      ],
      table: {
        caption: 'App per la fascite plantare e il dolore al piede a confronto (ottobre 2026)',
        head: ['App', 'Piattaforme e prezzo', 'Ambito', 'Si adatta al dolore?', 'Valutazione (iOS)'],
        rows: [
          [
            '[Exakt Health](https://www.exakthealth.com/)',
            'iOS, Android. 19,99\u00A0$ al mese o 59,99\u00A0$ ogni 6\u00A0mesi; prova gratuita di 7\u00A0giorni',
            'Infortuni da corsa (oltre 15 piani di riabilitazione) + allenamento di corsa',
            'Sì, il piano si adatta man mano che progredisci',
            '4,8 (125\u00A0valutazioni)',
          ],
          [
            '[Hinge Health](https://www.hingehealth.com/)',
            'iOS, Android. 0\u00A0$ tramite datore di lavoro o assicurazione sanitaria',
            'Dolore muscoloscheletrico in generale (schiena, ginocchio, anca, collo, pavimento pelvico)',
            'Sì, personalizzato dal team di cura',
            '4,9 (168.000\u00A0valutazioni)',
          ],
          [
            '[Prehab](https://theprehabguys.com/)',
            'iOS. 49\u00A0$ al mese o circa 16\u00A0$ al mese con fatturazione annuale; prova gratuita di 7\u00A0giorni sul piano annuale',
            'Oltre 55 programmi per molte zone del corpo',
            'Valutazione Body Scan, poi programma fisso',
            '4,8 (circa 1.700\u00A0valutazioni)',
          ],
          [
            '[PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136)',
            'iOS. Gratuita, senza acquisti in-app',
            'Monitoraggio del dolore al tallone e della fascite plantare',
            'Le fasi di recupero adattano la routine all’andamento del dolore',
            'Ancora senza valutazioni',
          ],
          [
            '[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858)',
            'iOS. 9,99\u00A0$ al mese o 39,99\u00A0$ all’anno; prova gratuita di 7\u00A0giorni',
            'Piede piatto e rinforzo dell’arco',
            'No',
            '4,3 (6\u00A0valutazioni)',
          ],
          [
            'Plantar Fasciitis Exercises',
            'iOS, Android. Download gratuito; serve un acquisto in-app per usarla',
            'Solo allungamenti per la fascite plantare',
            'No',
            '1,0 (1\u00A0valutazione)',
          ],
          [
            '[Walkito](https://walkito.site/)',
            'iOS. 44,99\u00A0$ all’anno o 7,99\u00A0$ a settimana',
            'Dolore al tallone, piede piatto, stare in piedi tutto il giorno, runner',
            'Il check-in del mattino adatta ogni sessione',
            'Ancora senza valutazioni (nuova, ottobre 2026)',
          ],
        ],
      },
      sourceNote:
        'Tutti i dati da App Store, Google Play e siti ufficiali. Controllati a ottobre 2026.',
    },
    {
      h2: 'Exakt Health: l’app di riabilitazione per chi corre',
      paragraphs: [
        'Exakt Health è fatta per chi corre, e si vede. L’app ha oltre 15 piani di riabilitazione per infortuni, dalla fascite plantare alla tendinopatia d’Achille alle lesioni del menisco, più piani di allenamento di corsa dal divano alla maratona. Ogni piano di riabilitazione finisce con una fase strutturata di ritorno alla corsa, cosa che la maggior parte delle app per il dolore al piede non offre.',
        'È certificata come dispositivo medico nell’UE, cioè ha superato una revisione normativa su sicurezza e uso previsto. È stata creata da fisioterapisti sportivi abilitati e allenatori di corsa. L’app ha oltre 600 video di esercizi e adatta il piano man mano che sali di livello.',
        'A 19,99\u00A0$ al mese o 59,99\u00A0$ per sei mesi, Exakt non è economica, ma la varietà di problemi coperti e la qualità dei piani di riabilitazione sono difficili da eguagliare tra le app da usare in autonomia. La prova gratuita di 7\u00A0giorni ti fa vedere l’app completa prima di pagare. È disponibile in inglese, francese, tedesco e spagnolo, sia su iOS sia su Android.',
        'Dove Exakt è più forte di Walkito: più tipi di infortunio coperti (oltre 15 contro dolore al tallone, piede piatto e tibie), un programma completo di ritorno alla corsa, la disponibilità su Android, la certificazione come dispositivo medico nell’UE e una base di utenti consolidata con una valutazione di 4,8 su 125 recensioni iOS.',
        'Dove Walkito è diversa: Walkito adatta la sessione di ogni giorno in base a un check-in del dolore al mattino invece che al feedback di fine sessione, testa l’asimmetria tra sinistra e destra ogni 14\u00A0giorni, e si concentra proprio sul dolore al tallone e al piede invece che su tutti gli infortuni da corsa.',
      ],
    },
    {
      h2: 'Hinge Health: l’opzione pagata dal datore di lavoro',
      paragraphs: [
        'Hinge Health è la più grande piattaforma digitale per il dolore muscoloscheletrico negli Stati Uniti, con oltre 2\u00A0milioni di iscritti. Se il tuo datore di lavoro o la tua assicurazione sanitaria la copre, per te è gratuita e include qualcosa che nessuna app da usare in autonomia può offrire: un team di cura dedicato con fisioterapisti, medici ortopedici e altri specialisti.',
        'L’app copre molti problemi di articolazioni e muscoli, non solo i piedi. Include anche il dispositivo indossabile Enso per il sollievo dal dolore acuto. La valutazione di 4,9 su 168.000 recensioni iOS riflette la combinazione di esercizi guidati, coaching umano e costo zero.',
        'Il limite è l’accesso. Non puoi comprare Hinge Health dall’App Store. Ti serve una copertura tramite uno degli oltre 2.800 datori di lavoro o assicurazioni sanitarie che la offrono. Se hai accesso, probabilmente è l’opzione più completa di questa lista. Se non ce l’hai, non è proprio un’opzione.',
        'Hinge Health non è specifica per il piede. I suoi usi principali sono il dolore a schiena, ginocchio, anca e collo. Per la fascite plantare in particolare, un’app più mirata può essere un punto di partenza migliore.',
      ],
    },
    {
      h2: 'Prehab: la libreria di esercizi più ampia',
      paragraphs: [
        'L’app The Prehab Guys è creata da dottori in fisioterapia (Doctors of Physical Therapy) e ha la libreria di esercizi più ampia di questo confronto: oltre 55 programmi, oltre 170 allenamenti e oltre 4.000 video di esercizi. Ha un programma di riabilitazione specifico per la fascite plantare. La funzione Body Scan ti chiede del dolore, degli obiettivi e delle esigenze di movimento, poi ti consiglia un programma.',
        'A 49\u00A0$ al mese o circa 200\u00A0$ all’anno, è l’opzione da usare in autonomia più cara di questa lista. La prova gratuita di 7\u00A0giorni c’è solo sul piano annuale. Le sessioni durano circa 20\u00A0minuti, più dei 3-10\u00A0minuti delle app dedicate al piede. La qualità delle istruzioni video è lodata in modo costante nelle recensioni.',
        'Prehab fa per te se hai dolore in più zone e vuoi un’unica app che copra tutto, dalle spalle ai piedi. È meno mirata delle app create proprio per la fascite plantare, e non adatta le sessioni del giorno al dolore del mattino.',
        'È solo per iOS e solo in inglese.',
      ],
    },
    {
      h2: 'PlantarCare: il tracker gratuito',
      paragraphs: [
        'PlantarCare è gratuita, non ha acquisti in-app e non richiede un account. Si concentra solo sul dolore al tallone e sulla fascite plantare. Segni il dolore ai primi passi del mattino e il dolore peggiore della giornata, e l’app ti fa avanzare tra fasi di recupero con allungamenti guidati, lavoro sul polpaccio, sollevamenti sulle punte e promemoria per il ghiaccio adatti alla tua fase.',
        'Per un’app gratuita, fa sorprendentemente tante cose bene: l’andamento del dolore nel tempo, il registro di scarpe e carico, e promemoria sui campanelli d’allarme che ti dicono quando rivolgerti a un professionista sanitario. Il rovescio della medaglia è che è nuova, non ha ancora valutazioni e non descrive la ricerca dietro la scelta degli esercizi.',
        'PlantarCare è un punto di partenza ragionevole se vuoi seguire il tuo dolore gratis e fare allungamenti di base senza impegnarti in un abbonamento. È solo per iOS.',
      ],
    },
    {
      h2: 'Arch: Flat Feet Trainer',
      paragraphs: [
        'Arch è l’unica app di questo confronto dedicata solo al piede piatto e al rinforzo dell’arco. Ha oltre 40 esercizi per il piede, il monitoraggio dei progressi e un design pulito. A 39,99\u00A0$ all’anno o 9,99\u00A0$ al mese, con una prova gratuita di 7\u00A0giorni, il prezzo è moderato.',
        'Un recensore ha notato che l’app non ha video degli esercizi e usa invece illustrazioni. L’app dice che le sue routine sono «supportate dalla scienza» e basate su «principi di fisioterapia provati», ma non cita studi specifici. Con solo 6\u00A0valutazioni nell’App Store, è all’inizio del suo percorso.',
        'Se la tua preoccupazione principale è il piede piatto senza un dolore importante, vale la pena provare Arch. Per la fascite plantare non è la scelta giusta, perché non include esercizi di riabilitazione specifici per il tallone né il monitoraggio del dolore.',
      ],
    },
    {
      h2: 'Plantar Fasciitis Exercises: un’app di base con paywall',
      paragraphs: [
        'Questa app di Verdhit Agarwal offre 15 esercizi su tre livelli: allungamenti delicati, rinforzo ed esercizi avanzati. Risulta gratuita sia su iOS sia su Android, ma entrambe le schede degli store mostrano acquisti in-app, e un recensore ha riferito che gli è stato chiesto di pagare un abbonamento mensile prima di poterla usare.',
        'Gli esercizi sono di base, con istruzioni scritte invece di dimostrazioni video. Non c’è una logica di progressione, né monitoraggio del dolore, né adattamento. L’unica valutazione iOS è 1 su 5, e quella recensione parla proprio di un addebito inatteso. È il tipo di app che esiste perché «plantar fasciitis exercises» è una ricerca molto frequente, non perché qualcuno abbia costruito un programma ragionato.',
        'Se vuoi un riferimento gratuito su quali allungamenti provare, controlla la scheda dello store prima di iniziare, perché alcuni esercizi potrebbero essere dietro un paywall. Come programma guidato con progressione, non basta.',
      ],
    },
    {
      h2: 'Walkito: cosa fa e cosa non fa',
      paragraphs: [
        'Walkito è un programma di esercizi per il dolore al tallone, il piede piatto e il dolore nella parte bassa della gamba. È uscita sull’App Store il 2 ottobre 2026. È nuova, non ha ancora valutazioni ed è solo per iOS.',
        'Cosa fa: costruisce un piano settimanale dalle tue risposte su dolore, obiettivi e orari. Ogni mattina, un check-in adatta la sessione del giorno a come sta il tuo piede. Ogni 14\u00A0giorni, dei test misurano sollevamenti sulle punte, tenuta dell’arco ed equilibrio su una gamba, e confrontano sinistra e destra. Le sessioni durano 3, 5 o 10\u00A0minuti. Gli esercizi seguono la linea guida del 2023 sul dolore al tallone e lo studio di Rathleff del 2015. Si collega ad Apple Salute per passi, sonno e dati di camminata, che restano sul tuo telefono.',
        'Cosa non fa: non fa diagnosi del tuo dolore, non è un dispositivo medico, non ha un professionista dall’altra parte e non è disponibile su Android. Copre dolore al tallone, piede piatto e dolore alla tibia, non gli oltre 15 tipi di infortunio di Exakt né l’ambito su tutto il corpo di Hinge Health o Prehab.',
        'A 44,99\u00A0$ all’anno o 7,99\u00A0$ a settimana, il prezzo annuale è più basso di quello della maggior parte delle concorrenti. Il prezzo settimanale è più alto rispetto a quello annuale, come è normale negli abbonamenti.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Come scegliere l’app giusta per la fascite plantare?',
      paragraphs: [
        'Parti dalla tua situazione, non dall’elenco delle funzioni.',
      ],
      bullets: [
        '**Corri e hai la fascite plantare** e vuoi un ritorno alla corsa strutturato: [Exakt Health](https://www.exakthealth.com/) è la scelta più adatta.',
        '**Il tuo datore di lavoro copre Hinge Health**: verifica se ne hai diritto. Un team di cura con fisioterapisti e medici a costo zero è difficile da battere.',
        '**Hai dolore in più zone del corpo**, non solo ai piedi: [Prehab](https://theprehabguys.com/) ti dà oltre 55 programmi in un solo abbonamento.',
        '**Vuoi un punto di partenza gratuito** per seguire il dolore al tallone e provare allungamenti di base: [PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136) lo fa bene, gratis.',
        '**Il tuo problema principale è il piede piatto** senza un dolore importante: [Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858) è pensata proprio per questo.',
        '**Vuoi un piano quotidiano per il dolore al tallone o il piede piatto che si adatti alla tua mattina** e testi i tuoi progressi: è per questo che è nata [Walkito](https://walkito.site/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Esiste un’app gratuita per la fascite plantare?',
      a: 'PlantarCare è gratuita e senza acquisti in-app. Segue il dolore del mattino, suggerisce allungamenti adatti alla tua fase di recupero e mostra l’andamento nel tempo. L’app «Plantar Fasciitis Exercises» risulta gratuita ma mostra acquisti in-app nello store, e un recensore ha riferito di aver dovuto pagare per usarla. Delle due, PlantarCare è l’opzione gratuita più affidabile.',
    },
    {
      q: 'Quali esercizi dovrebbe avere un’app per la fascite plantare?',
      cites: [CITE.guideline],
      a: 'La linea guida clinica del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio un grado A e al lavoro di forza un grado B. Una buona app dovrebbe includere entrambi: allungamenti per fascia e polpaccio, e un rinforzo progressivo del polpaccio come i sollevamenti sulle punte. Esercizi che aumentano di difficoltà e si adattano al tuo livello di dolore sono più utili di un elenco fisso.',
    },
    {
      q: 'Meglio Exakt Health o Walkito per la fascite plantare?',
      a: 'Exakt Health copre più problemi, tra cui oltre 15 infortuni da corsa e piani completi di allenamento di corsa. È sia su iOS sia su Android ed è certificata come dispositivo medico nell’UE. Walkito si concentra proprio sul dolore al tallone e al piede, con un adattamento quotidiano in base al dolore e test dei progressi ogni 14\u00A0giorni. Exakt è la scelta più forte per chi corre e ha bisogno di riabilitazione più un piano di corsa. Walkito è più mirata ma adatta ogni sessione alla tua mattina.',
    },
    {
      q: 'Un’app può sostituire il fisioterapista per la fascite plantare?',
      a: 'Nessuna app sostituisce un professionista che può visitare il tuo piede, escludere altre cause e adattare un piano in tempo reale. Un’app è utile per gli esercizi guidati di ogni giorno tra una visita e l’altra, o come punto di partenza quando il dolore è lieve e segue lo schema tipico della fascite plantare. Se il dolore è iniziato dopo un infortunio, si accompagna a gonfiore o intorpidimento, o sta peggiorando, rivolgiti prima a un professionista sanitario.',
    },
    {
      q: 'Hinge Health è gratuita?',
      a: 'Hinge Health è gratuita per gli iscritti il cui datore di lavoro o la cui assicurazione sanitaria la copre. Non puoi comprarla direttamente dall’App Store. Verifica se ne hai diritto su hinge.health/covered. Se sei coperto, include un team di cura con fisioterapisti e medici senza costi per te.',
    },
    {
      q: 'Perché Walkito non si definisce la migliore app per la fascite plantare?',
      a: 'Perché non sarebbe onesto. Walkito è nuova, non ha ancora valutazioni degli utenti, copre meno problemi di Exakt Health e non ha un professionista dall’altra parte come Hinge Health. Quello che fa bene è adattare ogni giornata al tuo dolore e testare i tuoi progressi ogni 14\u00A0giorni. Se questo la rende l’app giusta per te dipende da cosa ti serve.',
    },
    {
      q: 'Qualcuna di queste app funziona su Android?',
      a: 'Exakt Health e Hinge Health sono sia su iOS sia su Android. Anche «Plantar Fasciitis Exercises» è su entrambi, anche se mostra acquisti in-app in tutti e due gli store. Walkito, Prehab, PlantarCare e Arch per ora sono solo per iOS. Se usi Android, Exakt Health è l’opzione più completa per il dolore al piede.',
    },
    {
      q: 'Serve un’app per fare gli esercizi per la fascite plantare?',
      cites: [CITE.guideline],
      a: 'No. Un’app non è necessaria. Puoi fare gli esercizi con le prove più solide, come l’allungamento della fascia e le progressioni dei sollevamenti sulle punte, da un foglio stampato o da una scheda data da un professionista. Quello che un’app di solito aggiunge sono promemoria, monitoraggio dei progressi e regole per dosare lo sforzo in base al dolore, che aiutano alcune persone a seguire il piano più a lungo, non un esercizio diverso.',
    },
    {
      q: 'Quanto spesso usare un’app di esercizi per la fascite plantare?',
      cites: [CITE.guideline],
      a: 'La maggior parte dei programmi di esercizi per la fascite plantare, compresi quelli con i gradi più alti nella linea guida del 2023 sul dolore al tallone, si basa su sessioni quotidiane o quasi per circa tre mesi, non su un uso occasionale. Un’app è più utile quando la apri quasi tutti i giorni, perché è la costanza a dare l’effetto del carico, non una singola funzione dell’app.',
    },
  ],
  redFlags: {
    h2: 'Quando un’app non basta, rivolgiti a un professionista sanitario',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede o zoppichi',
      'il dolore si accompagna a intorpidimento, formicolio, bruciore, gonfiore o calore',
      'il tallone è arrossato, o hai la febbre',
      'il dolore ti sveglia di notte o c’è anche a riposo',
      'ti fanno male entrambi i piedi e altre articolazioni sono gonfie o rigide',
      'il dolore peggiora di settimana in settimana nonostante gli esercizi',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Se sei arrivato fin qui e Walkito ti sembra adatta, ecco come funziona. Rispondi a qualche domanda su dove ti fa male, da che lato, quanto sei attivo e qual è il tuo obiettivo. Walkito costruisce un piano settimanale intorno a quelle risposte. Ogni mattina, un check-in adatta la giornata. Ogni 14\u00A0giorni, un breve test misura resistenza del polpaccio, tenuta dell’arco ed equilibrio su una gamba.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Gli esercizi seguono la linea guida clinica del 2023 sul dolore al tallone. Il piano non ha una data di fine fissa: quando raggiungi un obiettivo, passa al mantenimento e il successivo prende il suo posto. Walkito è un programma di esercizi, non una diagnosi né un sostituto di un professionista sanitario.',
    ],
    cta: 'Prova Walkito sull’App Store.',
  },
  crumb: 'Migliore app per la fascite plantare',
  campaign: 'compare-best-app-it',
};
