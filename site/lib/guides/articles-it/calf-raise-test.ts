import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/calf-raise-test.ts`, written around the
 * queries «test sollevamento sulle punte», «heel rise test valori normali»
 * and «quanti sollevamenti sui polpacci su una gamba». Informal «tu».
 * Exercise names as in `it.ts`. Figures, norms, doses, grades and qualifiers
 * are identical to the English page.
 */

export const CALF_RAISE_TEST_IT: Guide = {
  lang: 'it',
  page: 'calfRaiseTest' as any,
  mainSource: CITE.hebertLosier,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Test sollevamento sulle punte: valori per età e protocollo',
  description:
    'Il test del sollevamento sulle punte misura la resistenza del polpaccio: protocollo, valori normali per età e sesso, cosa vuol dire il tuo punteggio.',
  h1: 'Test del sollevamento sulle punte: quanti dovresti farne e cosa vuol dire il tuo punteggio?',
  lede:
    'Il test del sollevamento sulle punte su una gamba, chiamato anche heel-rise test, misura la resistenza dei muscoli del polpaccio. Stai su un piede e sali sulle punte quante più volte riesci, a un ritmo fisso. Il numero ti dice quanta forza resistente alla fatica ha il polpaccio di ciascun lato, cosa che conta per camminare, correre e recuperare da problemi al tallone o all’Achille.',
  intro: [
    'Uno studio del 2017 su 566\u00A0adulti sani ha trovato una mediana complessiva di circa 23-24\u00A0ripetizioni per gamba, che cambia con età, sesso e livello di attività. Questa pagina spiega il protocollo della ricerca, una versione da fare a casa, i valori normali per età, cosa vuol dire una differenza tra sinistra e destra e come il test si collega al dolore al tallone e alla corsa.',
  ],
  takeaways: [
    'La mediana complessiva negli adulti sani è di 24\u00A0ripetizioni sulla gamba destra e 23 sulla sinistra, da uno studio su 566\u00A0persone tra i 20 e gli 81\u00A0anni (Hebert-Losier e colleghi, 2017).',
    'Nel complesso gli uomini hanno fatto più ripetizioni delle donne (mediana 24 contro 21), ma oltre i 60\u00A0anni le donne hanno fatto meglio degli uomini della stessa età (Hebert-Losier e colleghi, 2017).',
    'Una differenza tra sinistra e destra oltre il 10% è la soglia standard per un’asimmetria rilevante nella riabilitazione degli arti inferiori (Silbernagel e colleghi, 2010).',
    'Il test ha un’affidabilità eccellente: ICC di 0,96, errore di misura tipico di circa due ripetizioni (Hebert-Losier e colleghi, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cosa misura il test del sollevamento sulle punte su una gamba?',
      keyFact: 'In uno studio caso-controllo su 20\u00A0atleti, chi aveva la sindrome da stress tibiale mediale (periostite tibiale) mostrava una resistenza del polpaccio più bassa dei controlli sani (Madeley e colleghi, 2007).',
      paragraphs: [
        'Il test misura la resistenza dei flessori plantari, i muscoli che spingono il piede verso il basso e sollevano il tallone da terra. I muscoli principali sono il gastrocnemio (il muscolo più grande e superficiale del polpaccio) e il soleo (quello più profondo, sotto). Insieme si attaccano all’osso del tallone attraverso il tendine d’Achille.',
        'Resistenza qui vuol dire quante ripetizioni riesci a fare prima che il polpaccio si stanchi e il tallone non riesca più a salire abbastanza o a tenere il ritmo. Il numero misura la capacità di reggere il lavoro per decine di cicli, che è più vicino a quello che fa il polpaccio camminando e correndo rispetto a una singola spinta pesante.',
        'I professionisti sanitari usano il test per seguire il recupero dopo una rottura del tendine d’Achille, per individuare un polpaccio debole in chi ha dolore al tallone o periostite tibiale, e per confrontare una gamba con l’altra. In uno studio caso-controllo su 20\u00A0atleti, chi aveva la sindrome da stress tibiale mediale (periostite tibiale) aveva una resistenza del polpaccio più bassa dei controlli sani.',
      ],
      cites: [CITE.hebertLosier, CITE.madeley],
    },
    {
      h2: 'Come si fa l’heel-rise test? Il protocollo della ricerca',
      paragraphs: [
        'Il protocollo di Hebert-Losier 2017 è la versione più citata e la fonte dei valori normali di questa pagina. In quello studio, 566\u00A0adulti sani tra i 20 e gli 81\u00A0anni hanno fatto sollevamenti sulle punte su una gamba fino a esaurimento, con ciascuna gamba.',
        'La persona sta scalza o con scarpe piatte su una pedana inclinata di 10\u00A0gradi, un piede alla volta. È consentito appoggiare la punta delle dita a un muro all’altezza delle spalle, solo per l’equilibrio. Un metronomo è impostato a 60\u00A0battiti al minuto: un battito su, un battito giù, quindi ogni ripetizione completa dura due secondi. L’indicazione è sollevare il tallone il più in alto possibile, con il ginocchio teso e il busto dritto.',
        'Il test si ferma quando il tallone non riesce più a staccarsi dalla pedana, non si riesce più a seguire il ritmo del metronomo, il ginocchio si piega o il busto si inclina, o la persona spinge contro il muro invece di appoggiare solo la punta delle dita. Prima di fermare il test si dà un solo richiamo a voce. Il riscaldamento è di 10\u00A0minuti di camminata veloce seguiti da 10\u00A0sollevamenti sulle punte su due piedi. Tra una gamba e l’altra ci sono due minuti di riposo.',
      ],
      sourceNote:
        'Hebert-Losier 2017: ICC 0,96 (destra) e 0,96 (sinistra); differenza media tra giorni di 0,2\u00A0ripetizioni (LOA al 95%: da -6,2 a 6,5) a destra e di 0,1\u00A0ripetizioni (LOA al 95%: da -6,1 a 6,2) a sinistra.',
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Come fare il test del sollevamento sulle punte a casa?',
      paragraphs: [
        'Non ti serve una pedana inclinata. Stare su un pavimento piano rende il test un po’ più facile, quindi il tuo numero potrebbe essere qualche ripetizione più alto dei valori pubblicati. Va bene lo stesso per seguire i cambiamenti nel tempo e confrontare sinistra e destra.',
        'Mettiti vicino a un muro con la punta delle dita appoggiata all’altezza delle spalle. Solleva un piede. Imposta un’app metronomo a 60\u00A0battiti al minuto. Al primo battito, sali sulle punte il più in alto possibile. Al secondo battito, riporta il tallone a terra. Continua finché non riesci più a tenere il ritmo, il tallone si alza appena o il ginocchio si piega.',
        'Conta le ripetizioni totali. Riposa due minuti, poi ripeti con l’altra gamba. Scrivi i due numeri e la data. L’errore di misura tipico è di circa due ripetizioni, quindi una piccola variazione tra un giorno di test e l’altro è rumore. Conta l’andamento nel giro di settimane.',
      ],
      exercises: [
        {
          name: 'Test del sollevamento sulle punte su una gamba (versione da casa)',
          dose: 'Massimo di ripetizioni a 60\u00A0bpm, una serie per gamba',
          how: 'Stai su un piede vicino a un muro, con la punta delle dita appoggiata per l’equilibrio. Sali sulle punte in un secondo e scendi in un secondo, seguendo un metronomo a 60\u00A0bpm. Continua finché non riesci a tenere il ritmo o il tallone si alza appena. Conta le ripetizioni. Riposa 2\u00A0minuti, ripeti con l’altra gamba.',
          feel: 'Un bruciore nel polpaccio che cresce man mano che aumentano le ripetizioni',
          stop: 'Non riesci a sollevare il tallone, non riesci a tenere il ritmo del metronomo o il ginocchio si piega',
          media: 'heel_raise_double',
          mediaIsStandIn: true,
          caption: 'Test del sollevamento sulle punte: sali il più in alto possibile a ogni battito, con la punta delle dita al muro per l’equilibrio',
          alt: 'Una figura che sale sulle punte di un piede con la punta delle dita appoggiata a un muro per l’equilibrio',
        },
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Quanti sollevamenti sulle punte su una gamba dovresti riuscire a fare?',
      tool: 'calf-raise-calculator',
      keyFact: 'Nel 1995 uno studio su 203\u00A0adulti tra i 20 e i 59\u00A0anni ha proposto 25\u00A0ripetizioni come riferimento per una prestazione normale nel sollevamento sulle punte su una gamba (Lunsford e Perry, 1995).',
      paragraphs: [
        'La tabella qui sotto mostra il numero mediano di sollevamenti sulle punte su una gamba per età e sesso, da Hebert-Losier 2017. Sono stime del modello per una persona con un livello di attività fisica moderato (livello 4 su una scala da 6) e un indice di massa corporea di 24,2, come media delle due gambe.',
        'Livelli di attività più alti aggiungono circa da cinque a nove ripetizioni alla mediana. Nel 1995 Lunsford e Perry hanno testato 203\u00A0adulti tra i 20 e i 59\u00A0anni e hanno consigliato 25\u00A0ripetizioni come criterio di prestazione normale. I dati di Hebert-Losier sostengono quel valore come riferimento ragionevole per gli adulti, anche se è una mediana di popolazione, non una soglia da superare. Il tuo punto di partenza e la direzione del cambiamento contano più di qualsiasi singolo numero.',
      ],
      table: {
        caption: 'Ripetizioni mediane di sollevamento sulle punte su una gamba per età e sesso (Hebert-Losier 2017)',
        head: ['Età', 'Uomini', 'Donne'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
          ['70', '15', '16'],
          ['80', '10', '14'],
        ],
      },
      sourceNote:
        'Stime del modello per IMC 24,2 e livello di attività fisica 4. I valori sono la media tra lato sinistro e destro, arrotondata all’intero più vicino. Dalla Tabella 4 di Hebert-Losier 2017 (n = 566).',
      cites: [CITE.lunsfordPerry, CITE.hebertLosier],
    },
    {
      h2: 'Gamba sinistra e destra dovrebbero avere lo stesso punteggio?',
      keyFact: 'In uno studio su 78\u00A0persone dopo una rottura del tendine d’Achille, la simmetria media tra gli arti a sei mesi era dell’84% contando le ripetizioni ma solo del 61% sul lavoro totale, il che mostra che contare solo le ripetizioni può sottostimare un deficit (Silbernagel e colleghi, 2010).',
      paragraphs: [
        'Più o meno lo stesso, sì. Nello studio di Hebert-Losier, la differenza mediana tra destra e sinistra era di una ripetizione, e l’errore di misura tipico era di circa due ripetizioni. Una differenza così piccola è rumore.',
        'Nella riabilitazione degli arti inferiori, un indice di simmetria degli arti (LSI) del 90% o più è il riferimento standard per una funzione normale. L’LSI è il lato più debole diviso il lato più forte, per 100. Sotto il 90% vuol dire che un lato è più debole di oltre il 10%. Silbernagel e colleghi hanno usato questa soglia su 78\u00A0pazienti dopo una rottura del tendine d’Achille: a 6\u00A0mesi i pazienti avevano in media un LSI dell’84% sulle ripetizioni e solo del 61% sul lavoro totale, il che mostra che contare solo le ripetizioni può sottostimare un deficit.',
        'Senza un infortunio, una differenza oltre il 10% merita di essere annotata e seguita. Non vuol dire che qualcosa non va. Ma se la differenza resta in diverse sessioni di test e hai anche dolore sul lato più debole, è un’informazione utile per un professionista sanitario.',
      ],
      cites: [CITE.hebertLosier, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Cosa vuol dire un punteggio basso, e cosa non vuol dire?',
      paragraphs: [
        'Un numero basso di sollevamenti sulle punte ti dice che il polpaccio di quel lato si stanca prima della mediana della popolazione per la tua età, il tuo sesso e il tuo livello di attività. Non ti dice perché. Poco allenamento, un infortunio recente, un problema al tendine d’Achille, l’evitare il dolore o il non conoscere il test possono tutti dare un numero basso.',
        'Il test non è una diagnosi. Un punteggio di 15 in un uomo di 30\u00A0anni non vuol dire che ha la fascite plantare o la tendinite d’Achille. Vuol dire che la resistenza del suo polpaccio è sotto la mediana di 33 per quel gruppo. Un professionista sanitario mette insieme il numero con altri dati per capire se spiega un sintomo. Il test dice di più come andamento che come singolo dato: passare da 14 a 22 in due mesi è un segnale più chiaro di qualsiasi numero confrontato con una tabella.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Che legame c’è tra resistenza del polpaccio, dolore al tallone, Achille e corsa?',
      paragraphs: [
        'Il polpaccio e la fascia plantare sono collegati attraverso l’osso del tallone. Il tendine d’Achille tira da dietro; la fascia tira da sotto. Polpacci deboli o che si stancano presto mettono più tensione su entrambi a ogni passo.',
        'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio e della fascia plantare il suo grado più alto, A, e al lavoro di forza una B. Lo studio di Rathleff, che ha testato i sollevamenti sulle punte con carico per la fascite plantare, usava un sollevamento sulle punte come esercizio principale, e i partecipanti hanno migliorato il dolore più in fretta che con il solo stretching nell’arco di tre mesi. Vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) per il protocollo completo.',
        'Per la tendinite d’Achille, l’heel-rise test è una delle misure di risultato standard. Chi ha una tendinopatia d’Achille della porzione media (dolore a metà del tendine, non sull’osso del tallone) di solito mostra una resistenza del polpaccio ridotta sul lato colpito. Vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/) per il lavoro eccentrico.',
        'Nella corsa, il polpaccio assorbe da due a tre volte il peso del corpo a ogni passo. Un polpaccio che si stanca presto sposta il carico su ginocchio, tibia e piede. Far salire il punteggio può essere parte di un piano di ritorno alla corsa. Vedi [dolore al tallone e corsa](/heel-pain-runners/) (in inglese) per il quadro completo.',
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.achillesGuideline, CITE.madeley],
    },
    {
      h2: 'Come migliorare un punteggio basso nel test?',
      paragraphs: [
        'Gli esercizi che costruiscono la resistenza del polpaccio nella riabilitazione sono gli stessi che fanno salire il punteggio del test. Parti dal livello adatto a dove sei ora, e sali quando due sessioni di fila ti sono sembrate facili.',
        'Se riesci a fare meno di 10\u00A0sollevamenti su una gamba, parti dai sollevamenti da seduto o in piedi su due piedi. Passa alla tenuta sulle punte per costruire resistenza isometrica, poi ai sollevamenti su una gamba a terra. Aggiungere un gradino aumenta l’ampiezza del movimento. Aggiungere uno zaino aumenta il carico. Vedi [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/) per il movimento di base, [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/) per la versione che carica anche la fascia plantare, e [discese eccentriche del tallone](/it/esercizi/discese-eccentriche-tallone/) per la variante pensata per l’Achille.',
      ],
      exercises: [
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida per il lavoro di forza. Un passaggio verso i sollevamenti su una gamba con carico.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico.',
          feel: 'I polpacci che lavorano insieme',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Tenuta sulle punte',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida. La tenuta isometrica aumenta il tempo sotto tensione a fine movimento.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          how: 'Sali sulle punte con entrambi i piedi, poi resta fermo in alto. Non riabbassarti. Restare fermo carica il polpaccio senza il rimbalzo di una ripetizione completa.',
          feel: 'I polpacci che lavorano per restare fermi',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che resta ferma sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Quanti sollevamenti sulle punte dovrei riuscire a fare?',
      cites: [CITE.hebertLosier],
      a: 'In uno studio su 566\u00A0adulti sani, la mediana complessiva era di circa 23-24\u00A0ripetizioni per gamba. Gli uomini avevano una mediana di 24, le donne di 21. Il numero scende di circa quattro o cinque ripetizioni per ogni decennio di età. Livelli di attività più alti aggiungono da cinque a nove ripetizioni. Usali come punti di riferimento per seguire i progressi, non come una soglia da superare (Hebert-Losier 2017).',
    },
    {
      q: 'Il test del sollevamento sulle punte è lo stesso dell’heel-rise test?',
      a: 'Sì. «Heel-rise test» è il nome usato nella letteratura scientifica. «Test del sollevamento sulle punte» è più comune fuori dagli ambulatori. Il movimento è lo stesso: sollevamenti sulle punte su una gamba fino a esaurimento, a un ritmo fisso.',
    },
    {
      q: 'Qual è un buon punteggio nel test del sollevamento sulle punte per età?',
      cites: [CITE.hebertLosier],
      a: 'Per una persona moderatamente attiva: circa 37 per un uomo di 20\u00A0anni (30 per una donna), 28 per un uomo di 40\u00A0anni (25 per una donna) e 19 per una persona di 60\u00A0anni di entrambi i sessi. Il livello di attività sposta queste mediane di cinque-nove ripetizioni (Hebert-Losier 2017).',
    },
    {
      q: 'Ogni quanto ripetere il test?',
      a: 'Ogni due-quattro settimane basta per vedere cambiamenti significativi senza testare troppo. La ricerca ha ripetuto il test a una settimana di distanza e ha trovato un’affidabilità eccellente. Walkito ripete il test ogni 14\u00A0giorni finché l’obiettivo del polpaccio è attivo, poi ogni 28\u00A0giorni dopo averlo raggiunto.',
    },
    {
      q: 'Cosa vuol dire se una gamba è molto più debole dell’altra?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Nella riabilitazione, una differenza oltre il 10% viene di solito segnalata come possibile deficit. Negli adulti sani la differenza tipica è di una o due ripetizioni. Una differenza che resta, con dolore sul lato più debole, è un motivo per sentire un professionista sanitario. Senza dolore, seguila e allenala (Silbernagel 2010).',
    },
    {
      q: 'Serve un metronomo per il test?',
      a: 'Il protocollo della ricerca usa un metronomo a 60\u00A0battiti al minuto. Le app metronomo gratuite vanno benissimo. Senza, conta «milleuno» in salita e in discesa. Il tuo numero sarà meno confrontabile con i valori pubblicati, ma fare il test sempre allo stesso modo conta più che copiare alla perfezione il protocollo della ricerca.',
    },
    {
      q: 'Il test del sollevamento sulle punte può diagnosticare fascite plantare o tendinite d’Achille?',
      a: 'No. Un punteggio basso ti dice che il polpaccio si stanca presto, non perché. Fascite plantare, tendinite d’Achille, poco allenamento e un infortunio recente possono tutti dare un numero basso. I professionisti sanitari mettono insieme il risultato con una visita e la storia clinica. Il test misura la resistenza del polpaccio, non un problema specifico.',
    },
    {
      q: 'Quali sono i segni di polpacci deboli?',
      cites: [CITE.silbernagelHeelRise],
      a: 'I polpacci deboli spesso si notano con una stanchezza rapida su scale o salite, una spinta più debole camminando o correndo, o oscillazioni nell’equilibrio su una gamba. Il segno oggettivo più chiaro è il test del sollevamento sulle punte su una gamba: una differenza netta tra gamba sinistra e destra è più affidabile di come il polpaccio appare o di come lo senti.',
    },
    {
      q: 'Dove si deve sentire il sollevamento sulle punte?',
      a: 'Dovresti sentire il lavoro nel polpaccio, sia nel gastrocnemio più voluminoso in alto sia nel soleo più in basso vicino all’Achille, non sull’osso del tallone, nell’arco o nel ginocchio. Se invece della stanchezza nel polpaccio senti un dolore acuto al tallone o all’Achille, devi sistemare la tecnica o il carico prima di continuare a contare le ripetizioni.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il polpaccio o l’Achille è gonfio, caldo o dolente al tatto, che potrebbe indicare una lesione acuta o un problema al tendine',
      'hai sentito un improvviso schiocco o strappo nel polpaccio durante un’attività',
      'non riesci a caricare il peso sul piede o zoppichi',
      'il dolore è acuto e localizzato, non un dolore generico',
      'hai intorpidimento, formicolio o bruciore al piede o nella parte bassa della gamba',
      'il test riproduce proprio il dolore che stai cercando di valutare, con un’intensità più che lieve',
      'hai una rottura nota del tendine d’Achille o un intervento recente',
      'un polpaccio è visibilmente più piccolo dell’altro e non ne hai parlato con un professionista sanitario',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito fa il test del sollevamento sulle punte su una gamba ogni 14\u00A0giorni e segue entrambe le gambe. L’obiettivo del polpaccio è 25\u00A0sollevamenti su una gamba. L’obiettivo di simmetria è una differenza tra sinistra e destra sotto il 10%. L’app calcola la differenza tra il lato più forte e quello più debole, divisa per il lato più forte. Quando entrambi gli obiettivi sono raggiunti, il test passa a ogni 28\u00A0giorni e il piano si sposta sul prossimo obiettivo attivo.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Il lavoro sul polpaccio parte dai sollevamenti da seduto e sale, al tuo ritmo, attraverso su due piedi, tenuta, con asciugamano, discese eccentriche e saltelli sulle punte. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  crumb: 'Test del sollevamento sulle punte',
  campaign: 'calf-raise-test-it',
};
