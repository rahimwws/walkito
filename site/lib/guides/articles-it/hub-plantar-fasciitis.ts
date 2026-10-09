import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Fascite plantare (IT) ────────────────────────────────────────
 *
 * Translated from `articles/hub-plantar-fasciitis.ts` (2026-10-08), written
 * around the Italian queries «fascite plantare», «fascite plantare sintomi»,
 * «fascite plantare cause». Informal «tu». Figures, grades and qualifiers are
 * identical to the English page; terminology and exercise names follow
 * `lib/guides/it.ts`. No new citations.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const HUB_PLANTAR_FASCIITIS_IT: Guide = {
  lang: 'it',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fascite plantare: sintomi, cause e cosa aiuta',
  description:
    'Cos’è la fascite plantare, sintomi e cause, cosa raccomanda la linea guida clinica del 2023, quanto dura e quali esercizi aiutano.',
  h1: 'Fascite plantare: sintomi, cause e cosa aiuta secondo le evidenze',
  lede:
    'La fascite plantare è un dolore sotto il tallone causato da un sovraccarico della fascia plantare, la banda spessa di tessuto che va dall’osso del tallone alle dita. È la causa più comune di dolore sotto il tallone. La linea guida clinica del 2023 sul dolore al tallone dà allo stretching il grado più alto e al lavoro di forza il secondo più alto, e circa il 90% delle persone migliora con cure non chirurgiche.',
  takeaways: [
    'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il grado più alto, A, e al lavoro di forza una B (Koc e colleghi, 2023).',
    'Circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche come stretching, lavoro di forza e scarpe con un buon sostegno, spesso nel giro di alcuni mesi (Latt e colleghi, 2020).',
    'Una dorsiflessione ridotta della caviglia, cioè quanto il piede si piega verso lo stinco, è stata il fattore di rischio indipendente più forte in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli, con un odds ratio di 23,3 (Riddle e colleghi, 2003).',
    'Il dolore al tallone ai primi passi del mattino, che si calma dopo qualche minuto di cammino, è lo schema di sintomi più riconoscibile (Koc e colleghi, 2023).',
    'In un follow-up a lungo termine su 174\u00A0pazienti, circa la metà non aveva più sintomi a cinque anni. Tra chi aveva ancora sintomi, la maggior parte riferiva solo un dolore lieve (Hansen e colleghi, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è la fascite plantare?',
      figure: { id: 'plantar-fascia', caption: 'La fascia plantare va dall’osso del tallone alle dita. Il dolore della fascite plantare di solito inizia dove si attacca al tallone.', alt: 'Pianta di un piede con la fascia plantare come fasce bianche che si aprono a ventaglio dall’osso del tallone alla base delle dita, e una macchia rossa sul tallone dove di solito inizia il dolore.' },
      paragraphs: [
        'La fascite plantare è un sovraccarico della fascia plantare. La fascia plantare è una banda resistente di tessuto connettivo che corre lungo la pianta del piede, dall’osso del tallone (il calcagno) alla base delle dita. Sostiene l’arco e assorbe gli urti a ogni passo.',
        'Quando la fascia riceve più carico di quello da cui riesce a riprendersi, il tessuto si irrita vicino al punto in cui si attacca al tallone. Il nome finisce in «-ite», che fa pensare a un’infiammazione, ma oggi si pensa più a un processo degenerativo del tessuto che a un’infiammazione continua. Alcuni professionisti dicono invece «fasciopatia plantare». Il nome non cambia i sintomi né l’approccio consigliato.',
        'La linea guida clinica del 2023 del Journal of Orthopaedic & Sports Physical Therapy la definisce la causa più riconosciuta del dolore sotto il tallone.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Che sensazione dà la fascite plantare?',
      paragraphs: [
        'Il sintomo tipico è il dolore sotto il tallone ai primi passi del mattino. La linea guida lo descrive come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo». Di solito si calma dopo qualche minuto di cammino, poi torna quando sei stato seduto un po’ e ti rialzi.',
        'Il dolore di solito è nella parte interna e anteriore del tallone, dove la fascia si attacca all’osso. Può estendersi lungo l’arco. Tende a essere peggiore dopo il riposo, non durante l’attività, cioè il contrario di quello che la maggior parte delle persone si aspetta.',
        'Il dolore si vede meglio la mattina dopo. Se la mattina dopo va peggio, il giorno prima hai chiesto troppo al piede. Per questo seguire il dolore del mattino è il modo più utile per capire se stai migliorando. [Dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) spiega nel dettaglio lo schema del mattino.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cosa causa la fascite plantare, e a chi viene?',
      keyFact: 'In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100 senza, una dorsiflessione ridotta della caviglia era associata a un rischio molto più alto di fascite plantare (odds ratio 23,3), il fattore di rischio più forte misurato (Riddle e colleghi, 2003).',
      paragraphs: [
        'La fascite plantare compare quando la fascia riceve più carico di quello che riesce a reggere e da cui riesce a riprendersi. Il carico può essere troppo tutto in una volta (un salto improvviso nei chilometri di corsa) o costante nel tempo (stare in piedi su un pavimento duro tutto il giorno).',
        'Uno studio caso-controllo appaiato su 50\u00A0persone con fascite plantare e 100\u00A0controlli ha trovato che una dorsiflessione ridotta della caviglia era il fattore di rischio indipendente più forte, con un odds ratio di 23,3. In un’analisi retrospettiva separata su 254\u00A0persone con fascite plantare, dal 52 al 60% aveva una retrazione limitata al gastrocnemio, il muscolo del polpaccio più grande e più superficiale. Stare in piedi a lungo al lavoro aveva un odds ratio di 3,6. Anche un indice di massa corporea più alto era un fattore di rischio.',
        'La linea guida nomina altri fattori di rischio: un’età tra i 40 e i 60\u00A0anni, la corsa o le attività con salti, e i lavori che richiedono di stare in piedi a lungo. Il piede piatto o il piede cavo possono cambiare il modo in cui il carico passa attraverso la fascia, ma nessuno dei due porta per forza a questo problema.',
        'Di solito la fascite plantare nasce da una combinazione: un polpaccio rigido, un carico a cui il piede non era pronto e troppo poco tempo per riprendersi.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'Come si fa la diagnosi di fascite plantare?',
      paragraphs: [
        'Di solito la diagnosi di fascite plantare la fa un professionista sanitario in base alla tua storia e a un esame fisico. I segni chiave sono la dolorabilità nella parte interna e anteriore del tallone, il dolore ai primi passi del mattino e un dolore che si calma con l’attività e torna dopo il riposo.',
        'In un caso tipico non servono esami di imaging. La linea guida consiglia di valutarli se lo schema non torna, se i sintomi non migliorano dopo diverse settimane di cure conservative, o se bisogna escludere un’altra diagnosi (per esempio una frattura da stress o un nervo compresso). Ecografia e risonanza magnetica possono mostrare una fascia ispessita, ma una fascia ispessita in un esame, senza lo schema di sintomi che corrisponde, non è fascite plantare.',
        'Walkito non fa diagnosi. Se non sei sicuro che il tuo dolore al tallone sia fascite plantare, il punto di partenza giusto è un professionista sanitario.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cosa aiuta la fascite plantare?',
      keyFact: 'In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico e un asciugamano hanno ridotto il dolore più in fretta del solo stretching a tre mesi, anche se a dodici mesi i due gruppi erano pari (Rathleff e colleghi, 2015).',
      paragraphs: [
        'La linea guida clinica del 2023 dà un grado a ogni approccio in base alla forza delle prove che lo sostengono. Le raccomandazioni più forti sono lo stretching, il taping, la terapia manuale da un professionista e i tutori notturni per il dolore del mattino che non passa. Poi viene il lavoro di forza. La tabella qui sotto elenca le opzioni principali con i loro gradi nella linea guida.',
        'Nessuna opzione funziona per tutti. La maggior parte delle persone inizia con lo stretching e scarpe con un buon sostegno, aggiunge il lavoro di forza quando il dolore iniziale si calma, e chiede a un professionista delle altre opzioni se i progressi si fermano. In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico e un asciugamano sotto le dita hanno ridotto il dolore più in fretta del solo stretching a tre mesi, anche se a dodici mesi i due gruppi erano pari. La linea guida sconsiglia i plantari da soli come approccio a breve termine e sconsiglia di aggiungere gli ultrasuoni terapeutici allo stretching.',
      ],
      table: {
        caption: 'Gradi della linea guida del 2023 per il dolore sotto il tallone',
        head: ['Approccio', 'Grado', 'Note'],
        rows: [
          ['Allungamento della fascia plantare e del polpaccio', '**A**', 'Grado più alto. Il cuore delle cure conservative.'],
          ['Terapia manuale (lavoro su articolazioni e tessuti molli)', '**A**', 'Grado più alto. La fa un professionista per le rigidità di articolazioni e tessuti.'],
          ['Taping del piede (rigido o elastico)', '**A**', 'Grado più alto per dolore e funzionalità nel breve periodo, insieme ad altre cure.'],
          ['Tutori notturni per 1-3\u00A0mesi', '**A**', 'Grado più alto per il dolore del mattino che non passa. Vedi [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/).'],
          ['Lavoro di forza (sollevamenti sulle punte con carico)', '**B**', 'Ha anticipato il miglioramento in uno studio su 48\u00A0persone. Vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).'],
          ['Laserterapia a bassa intensità', '**B**', 'Si fa in ambulatorio.'],
          ['Dry needling', '**B**', 'Si fa in ambulatorio.'],
          ['Plantari insieme ad altre cure', '**C**', 'Prove deboli. Possono aiutare come parte di un programma più ampio.'],
          ['Plantari da soli, nel breve periodo', '**B contro**', 'La linea guida li **sconsiglia** come approccio a sé.'],
          ['Ultrasuoni terapeutici aggiunti allo stretching', '**A contro**', 'Le prove non sostengono di aggiungerli.'],
        ],
      },
      sourceNote:
        'Gradi da Koc e colleghi, 2023, linea guida di pratica clinica sul dolore al tallone del Journal of Orthopaedic & Sports Physical Therapy.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quanto dura la fascite plantare?',
      keyFact: 'In una coorte di 174\u00A0persone, circa la metà non aveva più sintomi a cinque anni, e il 46% aveva ancora un po’ di dolore a dieci anni, per lo più lieve (Hansen e colleghi, 2018).',
      paragraphs: [
        'Una revisione del 2020 riporta che circa il 90% delle persone migliora con cure non chirurgiche, spesso nel giro di alcuni mesi. Un follow-up più lungo su 174\u00A0pazienti dà un quadro più dettagliato: circa la metà non aveva più sintomi a cinque anni, e il 46% aveva ancora un po’ di dolore dopo in media dieci anni, anche se la maggior parte di loro riferiva solo sintomi lievi.',
        'I tempi dipendono da quanto tempo ce l’hai, da cosa fai per affrontarla e da alcuni fattori che non puoi controllare. Nella coorte di Hansen del 2018, essere donna e avere dolore a entrambi i talloni erano predittori significativi di un recupero più lento. L’indice di massa corporea, l’età, lo spessore della fascia e la presenza di una spina calcaneare non lo erano.',
        'La domanda utile non è «quante settimane mancano alla fine?» ma «il mio dolore del mattino è più basso questo mese rispetto al mese scorso?». Quella tendenza è il vero traguardo. [Quanto dura la fascite plantare?](/it/quanto-dura-fascite-plantare/) raccoglie tutte le prove sui tempi.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Quali esercizi e allungamenti aiutano la fascite plantare?',
      paragraphs: [
        'Gli esercizi sostenuti dalla linea guida sono di due gruppi: lo stretching (grado A) e il lavoro di forza (grado B). Lo stretching lavora sulla fascia plantare e sul polpaccio. Il lavoro di forza aumenta la capacità del polpaccio di reggere il carico di ogni giorno senza sovraccaricare la fascia.',
        '[Esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/) ha l’elenco completo con le dosi di partenza, cosa dovresti sentire e quando fermarti. [Sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) approfondisce l’esercizio alla base del principale studio sul lavoro di forza. Le pagine dei singoli esercizi spiegano ogni movimento:',
      ],
      bullets: [
        'L’[allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/) tira indietro le dita per caricare la fascia con delicatezza prima di alzarti.',
        'L’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/) e l’[allungamento del soleo](/exercises/soleus-stretch/) (in inglese) lavorano sul polpaccio rigido che tira il tallone.',
        'Il [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/) è il sollevamento con carico dello studio di Rathleff.',
        'Il [massaggio con la pallina](/exercises/foot-roll/) (in inglese) può dare sollievo al tessuto tra una sessione e l’altra.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Perché le mattine sono il momento peggiore?',
      paragraphs: [
        'La fascia plantare si irrigidisce e si accorcia mentre dormi. A riposo il piede di solito punta verso il basso. Quando ti alzi e appoggi il piede sotto tutto il tuo peso, il tessuto accorciato si allunga all’improvviso. È quella fitta ai primi passi.',
        'La cosa più utile che puoi fare succede prima che il piede tocchi terra. Siediti sul bordo del letto, accavalla una caviglia sull’altro ginocchio e tira indietro le dita con delicatezza per circa 10\u00A0secondi, 10\u00A0volte per piede. La linea guida dà a questo allungamento il grado più alto.',
        'I tutori notturni tengono il piede ad angolo retto durante la notte, così la fascia resta leggermente allungata. La linea guida dà una A anche a questi, per chi continua ad avere dolore ai primi passi nonostante lo stretching. [Dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) spiega la routine del mattino, i tutori notturni e gli altri problemi che danno lo stesso dolore ai primi passi.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'La fascite plantare al lavoro e nella corsa',
      paragraphs: [
        'Stare in piedi a lungo su superfici dure è uno dei fattori di rischio dello studio di Riddle del 2003, con un odds ratio di 3,6 per la fascite plantare. Una revisione del 2015 degli studi di medicina del lavoro ha collegato lo stare in piedi a lungo al lavoro a fastidi muscoloscheletrici, stanchezza e dolore alle gambe. Se a fine turno ti fanno male i piedi, valgono gli stessi allungamenti del polpaccio e lo stesso lavoro di forza.',
        'Per chi corre, la linea guida del 2023 consiglia di cambiare il carico invece di fermare tutto. Vuol dire ridurre i chilometri o l’intensità, non scendere a zero. La raccomandazione si basa su prove teoriche (grado E) perché nessuno studio l’ha testata, ma è coerente con il modo in cui anche le linee guida sull’Achille e sulla periostite tibiale trattano i sovraccarichi.',
      ],
      bullets: [
        '[Piedi doloranti dopo una giornata in piedi](/feet-hurt-standing-all-day/) (in inglese) spiega esercizi e scarpe per chi sta in piedi al lavoro.',
        '[Infermieri e dolore ai piedi](/nurses-foot-pain/) (in inglese) parla di turni lunghi su pavimenti duri.',
        '[Scrivania in piedi e dolore ai piedi](/standing-desk-foot-pain/) (in inglese) spiega il passaggio tra seduto e in piedi.',
        '[Dolore al tallone nei runner](/heel-pain-runners/) (in inglese) spiega come adattare l’allenamento quando il tallone fa male.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: 'Il dolore potrebbe essere qualcosa di diverso dalla fascite plantare?',
      paragraphs: [
        'Diversi problemi hanno la stessa posizione o lo stesso schema del mattino. Dove si trova il dolore e come si comporta aiutano a distinguerli.',
        '**Tendinite d’Achille.** Dolore nella parte posteriore del tallone o nel tendine sopra, non sotto il piede. La rigidità ai primi passi è comune, ma il dolore è più in alto. Vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
        '**Sindrome del cuscinetto adiposo del tallone.** Un dolore profondo al centro del tallone, peggiore su superfici dure e a piedi nudi. Una scoping review del 2022 ha notato che può essere difficile distinguerla dalla fascite plantare senza esami di imaging. Il dolore del cuscinetto adiposo è proprio sotto il centro, quello della fascite nella parte interna e anteriore.',
        '**Spina calcaneare.** Una crescita ossea sulla parte inferiore dell’osso del tallone. Molte persone ne hanno una senza alcun dolore. Nella coorte di Hansen del 2018 su 174\u00A0pazienti, avere una spina calcaneare all’inizio non cambiava in modo significativo quanto duravano i sintomi. La spina spesso c’è, ma di solito non è lei a causare il dolore.',
        '**Frattura da stress del calcagno.** Un dolore che aumenta con l’attività invece di calmarsi quando ti scaldi. Può fare male a riposo o di notte. Stringere i lati del tallone spesso lo riproduce. Rivolgiti a un professionista sanitario prima di allenare il piede.',
        '**Artrite infiammatoria.** Quando fanno male entrambi i talloni, la rigidità del mattino dura più di 30\u00A0minuti e altre articolazioni sono rigide o gonfie, lo schema fa pensare a qualcosa di sistemico. Deve controllarlo un professionista sanitario.',
        'Se non sei sicuro, un professionista sanitario può distinguerli in base alla posizione, al comportamento del dolore e, se serve, agli esami di imaging.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'App per la fascite plantare',
      paragraphs: [
        'Diverse app includono esercizi per la fascite plantare. Cambiano per tre cose: se si adattano al livello di dolore, se aumentano il carico in modo progressivo e se includono sia lo stretching sia il lavoro di forza. [La migliore app per la fascite plantare](/it/migliore-app-fascite-plantare/) ne confronta sette fianco a fianco, Walkito compresa.',
      ],
    },
    {
      h2: 'Tutte le guide sulla fascite plantare di questo sito',
      bullets: [
        '[Esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/) ha l’elenco completo degli esercizi con dosi e gradi di evidenza.',
        '[Sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) spiega il protocollo dello studio di Rathleff.',
        '[Dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) parla del dolore del mattino, dei tutori notturni e degli altri problemi con dolore ai primi passi.',
        '[Quanto dura la fascite plantare?](/it/quanto-dura-fascite-plantare/) parla di tempi di recupero, predittori e cosa fare se i progressi si fermano.',
        '[Dolore al tallone nei runner](/heel-pain-runners/) (in inglese) parla di gestione del carico e cambi nell’allenamento.',
        '[Piedi doloranti dopo una giornata in piedi](/feet-hurt-standing-all-day/) (in inglese) spiega esercizi e scarpe per chi sta in piedi a lungo.',
        '[Infermieri e dolore ai piedi](/nurses-foot-pain/) (in inglese) parla di turni lunghi su pavimenti duri.',
        '[Scrivania in piedi e dolore ai piedi](/standing-desk-foot-pain/) (in inglese) spiega il passaggio tra seduto e in piedi.',
        '[La migliore app per la fascite plantare](/it/migliore-app-fascite-plantare/) confronta sette app per la fascite plantare.',
        'Pagine degli esercizi: [allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/), [allungamento del polpaccio](/it/esercizi/stretching-polpaccio/), [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/), [massaggio con la pallina](/exercises/foot-roll/) (in inglese).',
      ],
    },
  ],
  faq: [
    {
      q: 'Qual è il modo più veloce per far passare la fascite plantare?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Non ci sono scorciatoie, ma le prove indicano di iniziare presto con lo stretching (grado A nella linea guida) e di aggiungere il lavoro di forza per il polpaccio (grado B). In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico alto hanno anticipato il miglioramento a tre mesi (Rathleff e colleghi, 2015). Stretching costante ogni giorno, scarpe con un buon sostegno e non sovraccaricare il piede sono la base.',
    },
    {
      q: 'La fascite plantare passa da sola?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Può passare, ma di solito ci vuole molto tempo. Una revisione del 2020 riporta che circa il 90% delle persone migliora con cure conservative (Latt e colleghi, 2020). In una coorte di 174\u00A0pazienti, circa la metà non aveva più sintomi a cinque anni (Hansen e colleghi, 2018). Fare qualcosa di attivo può anticipare quei tempi.',
    },
    {
      q: 'Camminare fa bene o male alla fascite plantare?',
      cites: [CITE.guideline],
      a: 'Camminare con scarpe che sostengono il piede, a un ritmo comodo, in genere va bene. La linea guida non dice di smettere di muoversi. Il test è come sta il tallone la mattina dopo. Se il dolore ai primi passi dopo una camminata è chiaramente più alto del solito, quella camminata è stata troppo impegnativa. Accorcia la distanza prima di fermarti del tutto.',
    },
    {
      q: 'La spina calcaneare causa la fascite plantare?',
      cites: [CITE.hansen],
      a: 'Non nel modo in cui pensano in molti. La spina calcaneare è una crescita ossea sulla parte inferiore dell’osso del tallone, e molte persone ne hanno una senza dolore. In un follow-up su 174\u00A0pazienti, avere una spina calcaneare all’inizio non cambiava in modo significativo la durata dei sintomi (Hansen e colleghi, 2018). Il problema è il sovraccarico della fascia, non la spina.',
    },
    {
      q: 'Posso fare sport con la fascite plantare?',
      cites: [CITE.guideline],
      a: 'Sì, ma il tipo di attività e la dose contano. La linea guida consiglia di continuare l’attività cambiando il carico, non il riposo completo. Gli esercizi che caricano polpaccio e fascia (allungamenti, sollevamenti sulle punte) fanno parte dell’approccio, non lo contraddicono. Le attività ad alto impatto possono andare ridotte. Il test è sempre la mattina dopo: se va peggio, il giorno prima hai chiesto troppo al piede.',
    },
    {
      q: 'Quali scarpe aiutano la fascite plantare?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La linea guida consiglia di informarsi sulle calzature come parte dell’approccio, ma non nomina marche. Una scarpa con un po’ di ammortizzazione, un supporto per l’arco e un piccolo dislivello tra tallone e punta può aiutare a compensare un polpaccio rigido. In uno studio caso-controllo, una ridotta dorsiflessione della caviglia è stata il fattore di rischio più forte per la fascite plantare (Riddle e colleghi, 2003). Evita di camminare scalzo su superfici dure, soprattutto al mattino.',
    },
    {
      q: 'Quando andare dal medico per il dolore al tallone?',
      a: 'Rivolgiti a un professionista sanitario se il dolore è iniziato dopo un infortunio, se non riesci a caricare il peso sul piede, se ti fanno male entrambi i talloni e altre articolazioni sono rigide, se c’è intorpidimento o formicolio, se il tallone è arrossato o caldo, se ti sveglia di notte, o se il dolore non migliora dopo diversi mesi di stretching e lavoro sul polpaccio. Questi schemi possono indicare un altro problema.',
    },
    {
      q: 'Perché ho la fascite plantare solo a un piede?',
      a: 'La fascite plantare spesso compare prima a un piede perché il carico raramente si divide in modo uguale tra le gambe. Una gamba dominante, una vecchia zoppia, un lavoro che sforza di più un lato o un aumento improvviso di attività su una gamba, come iniziare a correre, possono sovraccaricare una fascia più dell’altra. Col tempo possono comunque essere colpiti entrambi i piedi.',
    },
    {
      q: 'Perché mi è venuta all’improvviso la fascite plantare?',
      cites: [CITE.guideline],
      a: 'Una fascite plantare improvvisa di solito segue un cambiamento improvviso del carico, non un infortunio improvviso. Un aumento rapido dei chilometri di corsa, scarpe nuove, un nuovo lavoro che ti tiene in piedi o un aumento di peso possono sovraccaricare la fascia più in fretta di quanto riesca ad adattarsi. Stare in piedi a lungo al lavoro è uno dei fattori di rischio riconosciuti dalla linea guida del 2023 sul dolore al tallone.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'si accompagna a intorpidimento, formicolio, bruciore, gonfiore o calore',
      'il tallone è arrossato, o hai la febbre o non ti senti bene',
      'ti sveglia di notte o c’è anche a riposo',
      'stringere i lati del tallone riproduce il dolore',
      'ti fanno male entrambi i talloni e altre articolazioni sono gonfie o rigide',
      'non è migliorato dopo diverse settimane di esercizi e meno carico',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi capire da solo quali esercizi fare, in che ordine o quando passare al livello successivo. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per la fascite plantare, il primo obiettivo è una mattina migliore: dolore a 1 su 10 o meno per 14\u00A0giorni di fila.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Quando hai raggiunto l’obiettivo del mattino, quell’obiettivo passa al mantenimento e il successivo prende il suo posto.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Fascite plantare',
  campaign: 'hub-plantar-fasciitis-it',
};
