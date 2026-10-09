import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-eccentric-heel-drops.ts`, written around
 * the queries «esercizi eccentrici tendine d’Achille» and «protocollo
 * Alfredson». Informal «tu». Figures, doses, grades and qualifiers are
 * identical to the English page. No new citations.
 */

export const EX_ECCENTRIC_HEEL_DROPS_IT: Guide = {
  lang: 'it',
  page: 'exEccentricHeelDrops',
  mainSource: CITE.alfredson,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Discese eccentriche del tallone: come farle bene',
  description:
    'Come fare le discese eccentriche del tallone per il tendine d’Achille: il protocollo di Alfredson, serie, ripetizioni, ritmo ed errori comuni.',
  h1: 'Discese eccentriche del tallone: come farle, serie, ripetizioni e cosa dicono gli studi',
  lede:
    'La discesa eccentrica del tallone è un esercizio di forza in cui sali su entrambi i piedi e scendi piano su uno solo, lasciando che il tallone scenda sotto il bordo di un gradino. La fase di discesa, chiamata contrazione eccentrica, è il cuore dell’esercizio. È stato pensato per la tendinopatia achillea e testato per la prima volta in uno studio del 1998 di Alfredson, in cui 15\u00A0atleti sono tornati a correre dopo averlo fatto due volte al giorno per tre mesi.',
  takeaways: [
    'La linea guida del 2024 sull’Achille dà all’esercizio (tutti i tipi di carico del tendine) una **A**, il suo grado più alto, per la tendinopatia achillea della porzione media (Chimenti e colleghi, 2024).',
    'Una network meta-analisi del 2021 su 29\u00A0studi randomizzati non ha trovato nessun protocollo di esercizi chiaramente migliore degli altri; tutti erano meglio di nessun esercizio (van der Vlist e colleghi, 2021).',
    'Per il dolore achilleo inserzionale (proprio sull’osso del tallone), le discese vanno fatte a livello del pavimento, non sotto il bordo del gradino, perché una dorsiflessione profonda comprime il tendine contro l’osso (Jonsson e colleghi, 2008).',
    'Il protocollo di Alfredson prevede 3 x 15 due volte al giorno, sette giorni su sette, per circa tre mesi. Walkito parte da 3 x 10, ogni gamba, nei giorni di forza.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Cos’è una discesa eccentrica del tallone?',
      paragraphs: [
        'Una contrazione muscolare eccentrica è quella in cui il muscolo si allunga sotto carico. Nella discesa del tallone, il polpaccio si allunga mentre abbassi il tallone sotto il gradino. È questa discesa controllata che, nel giro di settimane, aumenta la capacità del tendine. La fase di salita si fa su entrambi i piedi, per togliere lo sforzo concentrico al lato dolorante.',
        'La confusione più comune è tra discesa del tallone e allungamento del polpaccio. L’allungamento tiene la posizione in basso. La discesa del tallone la attraversa piano, con il muscolo che lavora per tutto il tempo. Tenere la posizione in basso come un allungamento toglie lo stimolo di carico che fa funzionare l’esercizio. **Il beneficio sta nella discesa lenta e controllata.**',
      ],
      cites: [CITE.alfredson],
    },
    {
      h2: 'Come si fanno le discese eccentriche del tallone?',
      paragraphs: [
        'Stai sul bordo di un gradino con gli avampiedi sul gradino e i talloni fuori dal bordo. Sali su entrambi i piedi. Sposta il peso sulla gamba che lavora.',
        'Abbassa piano quel tallone in circa tre secondi, lasciandolo scendere sotto il gradino. Tieni il ginocchio teso. Usa entrambi i piedi per risalire in alto.',
        'La discesa a ginocchio teso lavora sul gastrocnemio, il muscolo più grande e superficiale del polpaccio. Alfredson prescriveva anche una versione a ginocchio piegato per lavorare sul soleo, il muscolo più profondo del polpaccio. La versione a ginocchio piegato è lo stesso movimento con il ginocchio piegato di circa 30-45\u00A0gradi durante la discesa.',
      ],
      exercises: [
        {
          name: 'Discese eccentriche del tallone (ginocchio teso)',
          evidence: {
            level: 'strong',
            why: 'Il protocollo originale di Alfredson del 1998. La linea guida del 2024 dà all’esercizio una A per la tendinopatia achillea della porzione media.',
          },
          dose: 'Alfredson: 3 x 15, due volte al giorno, circa tre mesi. Walkito parte da 3 x 10, ogni gamba',
          how: 'Stai sul bordo di un gradino. Sali su entrambi i piedi, sposta il peso su una gamba, scendi piano in tre secondi. Il tallone scende sotto il gradino. Usa entrambi i piedi per risalire. Ginocchio teso.',
          often: 'Due volte al giorno nel protocollo di Alfredson. Walkito: giorni di forza.',
          feel: 'Lavoro intenso nel polpaccio durante la discesa, non un allungamento in basso',
          stop: 'Dolore oltre 5/10 che non passa entro la mattina dopo',
          media: 'heel_drop_straight',
          caption: 'Discesa eccentrica del tallone: su con entrambi i piedi, giù piano con uno',
          alt: 'Una figura su un gradino che abbassa un tallone sotto il bordo con il ginocchio teso, il polpaccio e il tendine d’Achille evidenziati',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'Il protocollo di Alfredson: serie, ripetizioni e progressione',
      paragraphs: [
        'Il protocollo originale è di 3\u00A0serie da 15\u00A0ripetizioni a ginocchio teso, più 3\u00A0serie da 15 a ginocchio piegato, due volte al giorno, sette giorni su sette, per circa tre mesi. Sono 180\u00A0ripetizioni al giorno. Quando l’esercizio a corpo libero non fa più male, si aggiunge carico con uno zaino.',
        'Walkito parte da un volume più basso: 3\u00A0serie da 10, ogni gamba, nei giorni di forza. La dose di Alfredson è alta ed è davvero impegnativa da rispettare. Uno studio del 2014 di Stevens e Tan ha trovato che un protocollo eccentrico «secondo tolleranza», con meno ripetizioni, dava miglioramenti uguali su dolore e funzione, ed è per questo che le indicazioni più recenti sono meno rigide sull’arrivare a tutte le 180 al giorno.',
      ],
      table: {
        caption: 'Protocollo di discese eccentriche del tallone di Alfredson (1998)',
        head: ['Variante', 'Serie x ripetizioni', 'Sessioni al giorno', 'Frequenza'],
        rows: [
          ['Ginocchio teso', '3 x 15', '2', 'Ogni giorno, circa tre mesi'],
          ['Ginocchio piegato', '3 x 15', '2', 'Ogni giorno, circa tre mesi'],
        ],
      },
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'Quanto dolore va bene durante le discese eccentriche del tallone?',
      paragraphs: [
        'In uno studio su 38\u00A0persone di Silbernagel (2007), un gruppo ha continuato a correre e a caricare durante la riabilitazione seguendo una regola di monitoraggio del dolore: il dolore durante e dopo il carico poteva arrivare a circa **5 su 10**, purché passasse entro la mattina dopo e non peggiorasse di settimana in settimana. A dodici mesi quel gruppo stava bene quanto il gruppo che si era prima messo a riposo.',
        'È diverso dalla regola di stop a 6/10 usata nella pagina sulla [fascite plantare](/it/esercizi-fascite-plantare/). Il valore di 5/10 viene da un solo studio specifico sull’Achille, non è uno standard universale, ma è il modello del dolore più citato nella riabilitazione dell’Achille. Un dolore che non passa durante la notte o che peggiora ogni settimana vuol dire che il carico è troppo alto.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Inserzionale o porzione media: l’esercizio cambia?',
      keyFact: 'In uno studio pilota del 2008 su 27\u00A0persone con dolore achilleo inserzionale, il carico eccentrico a livello del pavimento, senza scendere sotto la posizione neutra, ha dato buoni risultati nel 67% dei casi (Jonsson e colleghi, 2008).',
      paragraphs: [
        'La tendinopatia achillea della porzione media si trova nel corpo del tendine, di solito 2-6\u00A0cm sopra l’osso del tallone. Qui le discese eccentriche classiche dal bordo di un gradino sono adatte.',
        'La tendinopatia achillea inserzionale è un dolore proprio dove il tendine si attacca all’osso. In uno studio pilota del 2008 su 27\u00A0persone con dolore inserzionale cronico, un protocollo modificato con carico eccentrico solo a livello del pavimento, senza scendere sotto la posizione neutra, ha riportato buoni risultati nel 67% dei casi. Una dorsiflessione profonda comprime il tendine contro l’osso del tallone, e questo rende controproducenti le discese profonde classiche per il dolore inserzionale.',
        'Se il dolore è proprio sul retro dell’osso del tallone:',
        {
          list: [
            'Fai tutte le discese a terra.',
            'Non scendere sotto il bordo del gradino.',
            'Non allungare in modo aggressivo.',
          ],
        },
        'È la modifica che si dimentica più spesso nei programmi per l’Achille. Per la pagina completa sul problema, vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Quali sono gli errori più comuni nelle discese eccentriche del tallone?',
      paragraphs: [
        {
          list: [
            '**Tenere la posizione in basso come un allungamento.** Il beneficio sta nella discesa lenta, non nel restare appeso in basso. Scendi in tre secondi, poi usa subito entrambi i piedi per risalire.',
            '**Scendere troppo.** Il tallone deve scendere fin dove arriva in modo naturale sotto il gradino. Forzarlo più in basso, inclinando il piede verso l’interno o l’esterno per guadagnare movimento, mette in tensione i tendini sul lato interno o esterno della caviglia. Tre-cinque centimetri sotto il gradino bastano.',
            '**Andare troppo veloce.** La velocità toglie il carico eccentrico su cui si basa l’esercizio. Se non riesci a controllare la discesa in circa tre secondi, passa prima a una versione su due piedi.',
            '**Saltare la versione a ginocchio piegato.** La discesa a ginocchio teso lavora sul gastrocnemio. La versione a ginocchio piegato lavora sul soleo. Entrambi i muscoli contribuiscono al tendine d’Achille. Il protocollo originale li include tutti e due.',
          ],
        },
      ],
    },
    {
      h2: 'Versioni più facili e più difficili',
      paragraphs: [
        'Se la discesa eccentrica su una gamba adesso è troppo dolorosa o troppo difficile, torna ai [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/) su due piedi o alla [tenuta sulle punte](/it/esercizi/sollevamenti-sulle-punte/). Costruiscono la forza di base che serve per il lavoro eccentrico.',
        'Se il peso del corpo è troppo facile, aggiungi carico. Il protocollo originale usava uno zaino. Va bene anche un giubbotto zavorrato o una macchina per i polpacci. La linea guida indica anche la heavy slow resistance (3\u00A0giorni a settimana, carichi più pesanti, meno ripetizioni) come ugualmente efficace, sulla base di uno studio del 2015 su 58\u00A0persone.',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
  ],
  faq: [
    {
      q: 'Discese eccentriche del tallone e sollevamenti sulle punte sono la stessa cosa?',
      cites: [CITE.alfredson],
      a: 'No. Il sollevamento sulle punte include sia la fase di salita sia quella di discesa. La discesa eccentrica del tallone usa entrambi i piedi per salire e un piede solo per scendere piano. Sul lato dolorante si fa solo la fase di discesa (eccentrica). La fase di salita (concentrica) è condivisa. La differenza conta perché decide quanto carico prende il tendine a ogni ripetizione.',
    },
    {
      q: 'Si possono fare le discese eccentriche del tallone a terra?',
      cites: [CITE.jonsson],
      a: 'Sì, e dovresti farle così se il dolore è nel punto in cui il tendine si attacca all’osso del tallone (inserzionale). Uno studio pilota del 2008 ha trovato buoni risultati con il carico eccentrico a livello del pavimento, senza scendere sotto la posizione neutra. Per il dolore della porzione media, un gradino dà più movimento, ma anche a terra il carico eccentrico c’è.',
    },
    {
      q: 'Le discese eccentriche del tallone devono fare male?',
      cites: [CITE.silbernagel],
      a: 'Un po’ di fastidio è previsto. Uno studio permetteva un dolore fino a circa 5 su 10 durante il carico, purché passasse entro la mattina dopo e non peggiorasse di settimana in settimana (Silbernagel 2007). Un dolore che resta alto durante la notte o aumenta ogni settimana è il segnale per ridurre il carico.',
    },
    {
      q: 'Quanto ci mettono le discese eccentriche del tallone a fare effetto?',
      cites: [CITE.achillesGuideline, CITE.alfredson],
      a: 'Il recupero dalla tendinopatia achillea si misura in mesi. Lo studio originale ha seguito il protocollo per circa tre mesi. La linea guida del 2024 nota che un miglioramento funzionale può comparire già dopo due settimane, ma un recupero più completo va ben oltre. Nessuno studio promette tempi fissi.',
    },
    {
      q: 'Le discese eccentriche del tallone aiutano la fascite plantare?',
      cites: [CITE.rathleff],
      a: 'Le discese eccentriche sono state pensate per il tendine d’Achille, non per la fascia plantare. Per la fascite plantare, l’esercizio testato è il [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/), che aggiunge un asciugamano sotto le dita per coinvolgere la fascia. Nella progressione per il polpaccio di Walkito, le discese del tallone arrivano più tardi, dopo il sollevamento con asciugamano.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai sentito uno schiocco improvviso o come un calcio nella parte dietro della gamba',
      'la zona del tendine è gonfia, arrossata, calda o ha un avvallamento visibile',
      'stai prendendo o hai preso di recente un antibiotico fluorochinolonico e hai un nuovo dolore al tendine',
      'il dolore è nel punto in cui il tendine si attacca all’osso del tallone e peggiora con il carico invece di migliorare',
      'il dolore c’è anche a riposo o ti sveglia di notte',
      'dal lato dolorante non riesci proprio a salire sulle punte',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Le discese eccentriche del tallone sono un passaggio della progressione per il polpaccio che Walkito inserisce in un piano settimanale. La progressione parte dai sollevamenti da seduto e sale con i sollevamenti su due piedi, la tenuta, il sollevamento con asciugamano, le discese del tallone e i saltelli sulle punte. Ogni passaggio si sblocca quando due sessioni al livello attuale ti sono sembrate facili.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio ed equilibrio. Se il dolore è proprio nel punto in cui il tendine si attacca all’osso del tallone, fallo controllare da un professionista sanitario prima di caricarlo forte. Walkito è un programma di esercizi. Non fa diagnosi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Discese eccentriche del tallone',
  campaign: 'ex-eccentric-heel-drops-it',
};
