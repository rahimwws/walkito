import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const INSOLES_VS_EXERCISES_IT: Guide = {
  lang: 'it',
  page: 'insolesVsExercises',
  mainSource: CITE.whittakerOrthoses,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Plantari o esercizi: servono davvero i plantari?',
  description:
    'Plantari o esercizi? Cosa dicono gli studi sui plantari per dolore al tallone e piede piatto, su misura o da banco, e come combinare le due cose.',
  h1: 'Plantari o esercizi: servono i plantari per il dolore al piede?',
  lede:
    'La maggior parte delle persone con dolore al tallone o piede piatto non ha bisogno di plantari su misura. Negli studi i plantari danno un calo del dolore piccolo e di breve durata, e quelli da banco funzionano più o meno come quelli su misura. L’esercizio aumenta la capacità del piede e del polpaccio, e la linea guida sul dolore al tallone gli dà un grado più alto. I plantari sono un’aggiunta ragionevole, non un sostituto.',
  takeaways: [
    'Una revisione di 19\u00A0studi (1.660\u00A0persone) ha trovato che i plantari alleviavano il dolore al tallone più di un finto plantare solo nel medio termine, e di poco, senza differenze tra plantari su misura e prefabbricati (Whittaker e colleghi, 2018).',
    'In uno studio su 185\u00A0persone con dolore al tallone, i plantari su misura non hanno fatto meglio dei finti plantari a tre mesi, e la gestione guidata dal medico di base ha fatto un po’ meglio dei plantari su misura (Rasenberg e colleghi, 2021).',
    'La linea guida del 2023 sul dolore al tallone raccomanda di **non** usare i plantari da soli per un sollievo a breve termine (grado B) e li ammette insieme ad altre terapie (grado C). Lo stretching riceve una **A**, il rinforzo una **B** (Koc e colleghi, 2023).',
    'In un piccolo studio su 18\u00A0giovani adulti con piede piatto, tre mesi di plantari su misura sono stati seguiti da un calo tra il 9,6 e il 17,4% nelle dimensioni di piccoli muscoli del piede (Protopapas e Perry, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Che differenza c’è tra solette, plantari ed esercizi?',
      paragraphs: [
        'Una **soletta** è qualsiasi cosa infili in una scarpa. Un **plantare** (ortesi plantare) è una soletta sagomata per sostenere l’arco e togliere carico al tallone. Quelli **prefabbricati** si comprano già pronti. Quelli **su misura** si fanno da una scansione o da un calco del piede, di solito da un podologo (uno specialista del piede), e costano molto di più.',
        'Entrambi cambiano il carico sul piede finché li indossi. L’esercizio cambia il tessuto stesso, così piede e polpaccio reggono più carico con o senza plantare.',
      ],
    },
    {
      h2: 'I plantari aiutano la fascite plantare?',
      keyFact: 'In una revisione di 19\u00A0studi con 1.660\u00A0persone, i plantari alleviavano il dolore al tallone più dei finti plantari solo nel medio termine, e plantari su misura e prefabbricati non differivano in nessun momento (Whittaker e colleghi, 2018).',
      paragraphs: [
        'Un po’, per un certo periodo. La fascite plantare è un’irritazione della fascia plantare, la banda di tessuto sotto l’arco. Il test equo confronta un plantare vero con uno **finto**: una soletta piatta e morbida che sembra vera ma non dà alcun sostegno.',
        'In uno studio su 135\u00A0persone, sia un plantare prefabbricato sia uno su misura hanno migliorato la funzione di circa 8\u00A0punti su una scala da 0 a 100 rispetto a un finto plantare a tre mesi (Landorf e colleghi, 2006). La differenza sul dolore era di dimensioni simili ma non statisticamente chiara. A dodici mesi, nessun gruppo era diverso dagli altri.',
        'Una revisione sistematica ha messo insieme 19\u00A0studi randomizzati con 1.660\u00A0persone (Whittaker e colleghi, 2018). Nel medio termine, più o meno il secondo e il terzo mese, i plantari alleviavano il dolore più di un finto plantare, con prove di qualità moderata. L’effetto era piccolo, e gli autori hanno scritto che è «incerto che sia un cambiamento importante dal punto di vista clinico». Nel breve e nel lungo termine non c’era un beneficio chiaro.',
        'La linea guida del 2023 sul dolore al tallone la legge allo stesso modo: **non** i plantari da soli per un sollievo a breve termine (grado B contro), ma **si possono** usare insieme ad altre terapie (grado C).',
      ],
      figure: {
        id: 'plantar-fascia',
        caption: 'La fascia plantare va dal tallone alle dita. Un plantare le toglie un po’ di carico; l’esercizio cambia quanto carico riesce a reggere.',
        alt: 'La pianta di un piede con la fascia plantare evidenziata dal tallone alle dita',
      },
      cites: [CITE.landorf2006, CITE.whittakerOrthoses, CITE.guideline],
    },
    {
      h2: 'I plantari su misura valgono la spesa?',
      keyFact: 'In uno studio su 185\u00A0persone con dolore al tallone, i plantari su misura non hanno fatto meglio dei finti plantari a tre mesi, e chi era seguito dal medico di base riferiva un dolore ai primi passi più basso di 1,48\u00A0punti rispetto a chi aveva i plantari su misura (Rasenberg e colleghi, 2021).',
      paragraphs: [
        'Per il comune dolore al tallone, la ricerca dice che di solito no. La revisione di Whittaker non ha trovato **nessuna differenza tra plantari su misura e prefabbricati in nessun momento**, e la linea guida del 2023 segnala «una somiglianza nei risultati tra ortesi su misura e prefabbricate».',
        'Lo studio olandese STAP ha assegnato a caso 185\u00A0adulti con dolore al tallone (Rasenberg e colleghi, 2021) a:',
        {
          list: [
            'La gestione del medico di base.',
            'Un plantare su misura fatto da un podologo.',
            'Un finto plantare.',
          ],
        },
        '**Tutti i gruppi hanno ricevuto anche un opuscolo con esercizi.** A tre mesi, i plantari su misura non hanno fatto meglio di quelli finti. Il gruppo seguito dal medico di base è andato meglio del gruppo con i plantari su misura: circa 1\u00A0punto in meno di dolore durante l’attività e 1,5\u00A0punti in meno di dolore ai primi passi, su una scala da 0 a 10. Un’analisi dei costi dello stesso studio, su circa sei mesi, ha giudicato i plantari su misura «non convenienti» rispetto alla gestione del medico di base.',
        'I plantari su misura possono comunque aiutare alcune persone (vedi sotto). Ma se vuoi un plantare per il dolore al tallone, un supporto per l’arco da banco che calzi bene è il primo tentativo ragionevole.',
      ],
      cites: [CITE.whittakerOrthoses, CITE.guideline, CITE.rasenbergStap, CITE.rasenbergCost],
    },
    {
      h2: 'Cosa fanno gli esercizi che i plantari non fanno?',
      keyFact: 'In uno studio su 48\u00A0persone che portavano tutte un plantare, il gruppo che ha aggiunto sollevamenti sulle punte con carico ha avuto 29\u00A0punti in meno (cioè meglio) sul Foot Function Index a tre mesi rispetto al gruppo che ha aggiunto lo stretching (Rathleff e colleghi, 2015).',
      paragraphs: [
        'L’esercizio cambia il tessuto, quindi il cambiamento dura anche dopo la sessione. La linea guida del 2023 dà all’allungamento della fascia plantare e del polpaccio il grado **A** e al rinforzo il grado **B**.',
        'In uno studio, tutte le 48\u00A0persone con fascite plantare hanno ricevuto un plantare (Rathleff e colleghi, 2015). Metà ha aggiunto lo stretching quotidiano; l’altra metà un sollevamento sulle punte con carico e un asciugamano sotto le dita, a giorni alterni.',
        'A tre mesi, il gruppo dei sollevamenti aveva 29\u00A0punti in meno (cioè meglio) sul Foot Function Index (un punteggio da 0 a 100 di dolore e disabilità del piede). A sei e a dodici mesi i gruppi erano pari. Il plantare era lo stesso nei due gruppi; la differenza iniziale l’ha fatta l’esercizio. La routine completa è in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'Grado A nella linea guida per l’allungamento della fascia plantare e del polpaccio.' },
          dose: 'Walkito parte da 2\u00A0tenute da 30\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla una caviglia sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. Tieni, poi rilascia. È più utile prima dei primi passi del mattino.',
          often: 'Ogni giorno',
          feel: 'Un allungamento lungo l’arco, non un dolore acuto',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita con delicatezza',
          alt: 'Una figura seduta che tira indietro le dita di un piede, con l’arco evidenziato',
        },
        {
          name: 'Sollevamento sulle punte con asciugamano',
          evidence: { level: 'strong', why: 'L’esercizio dello studio di Rathleff del 2015. Grado B nella linea guida per il rinforzo.' },
          dose: 'Nello studio si passava da 3\u00A0serie da 12\u00A0ripetizioni pesanti a 5\u00A0serie da 8. In Walkito arriva dopo sollevamenti più facili, a 4\u00A0serie da 10, ogni gamba, con lo stesso ritmo 3-2-3 e un peso aggiunto, come uno zaino, quando hai un gradino',
          how: 'Stai su un piede sul bordo di un gradino, con un asciugamano arrotolato sotto le dita. Sali in tre secondi, resta fermo due, scendi in tre. Tieniti a un corrimano. L’asciugamano piega le dita verso l’alto e carica la fascia plantare insieme al polpaccio.',
          often: 'A giorni alterni',
          feel: 'Lavoro intenso nel polpaccio e una tensione sotto l’arco',
          stop: 'Il dolore arriva a 6/10, o la mattina dopo va chiaramente peggio',
          media: 'heel_raise_towel',
          caption: 'Sollevamento sulle punte con asciugamano: tre secondi su, due fermo, tre secondi giù',
          alt: 'Una figura su un gradino che sale sulla punta di un piede, con un asciugamano arrotolato sotto le dita',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'I plantari aiutano il piede piatto?',
      paragraphs: [
        '**Le prove sono scarse per entrambi.** Il piede piatto (un arco basso) spesso non dà alcun dolore, e in quel caso non c’è niente da correggere. Vedi [piede piatto](/it/piede-piatto/).',
        'Per gli adulti con piede piatto flessibile, una revisione ha trovato 13\u00A0studi, solo due randomizzati (Banwell e colleghi, 2014). Non ha trovato «prove di alto livello» per i plantari e solo prove di basso livello che allevino il dolore.',
        'Sul fronte dell’esercizio, in uno studio su 45\u00A0adulti, circa un mese e mezzo di esercizi per il piede ha migliorato la postura del piede più dei plantari su misura per l’arco, e anche esercizi più plantari hanno battuto i soli plantari (Kirmizi e colleghi, 2024). In un altro studio su 52\u00A0persone, un programma di esercizi ha cambiato la forma dell’arco più di un gruppo di controllo (Brijwasi e Borkar, 2023). Nessuno dei due aveva il dolore come risultato principale.',
        'Per i bambini, una revisione Cochrane di 16\u00A0studi (1.058\u00A0bambini) ha trovato prove di certezza da bassa a molto bassa, e ha concluso che i costosi plantari su misura per bambini con piede piatto flessibile senza dolore non hanno prove a sostegno (Evans e colleghi, 2022). Vedi [piede piatto nei bambini](/it/piede-piatto-bambini/). Gli esercizi di questa pagina e l’app Walkito sono pensati per gli adulti.',
      ],
      exercises: [
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'early', why: 'Ha cambiato la forma dell’arco in piccoli studi, compreso uno in cui gli esercizi per il piede hanno battuto i plantari su misura sulla postura. Il dolore non era il risultato principale.' },
          dose: 'Walkito parte da 3\u00A0serie da 8, tenendo 5\u00A0secondi, ogni piede',
          how: 'Siediti con il piede appoggiato a terra. Senza arricciare le dita, tira l’avampiede verso il tallone così l’arco si alza un po’. Tieni, poi rilassa. Se le dita fanno presa, stai usando i muscoli sbagliati.',
          often: 'Quasi tutti i giorni',
          feel: 'L’arco che si alza, con le dita rilassate',
          stop: 'Un crampo che non passa, o il dolore arriva a 6/10',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone',
          alt: 'Una gamba di una persona seduta con il piede a terra, con l’arco evidenziato mentre si alza',
        },
      ],
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot, CITE.brijwasi, CITE.evansCochrane2022],
    },
    {
      h2: 'I plantari indeboliscono i piedi?',
      paragraphs: [
        '**Forse un po’.** In uno studio su 18\u00A0giovani adulti con piede piatto, tre piccoli muscoli interni del piede si sono ridotti tra il 9,6 e il 17,4% dopo tre mesi di plantari su misura (Protopapas e Perry, 2020). I gruppi non erano randomizzati e lo studio era piccolo, quindi leggilo come un segnale, non come un fatto assodato.',
        'L’esercizio sembra compensarlo. In uno studio randomizzato su 28\u00A0persone con piede piatto, tutti hanno portato plantari per due mesi e metà ha fatto anche l’esercizio del piede corto (Jung e colleghi, 2011). Il muscolo lungo l’arco interno è cresciuto in entrambi i gruppi, ma di più con l’esercizio, e anche la forza dell’alluce è aumentata di più. Se porti i plantari tutto il giorno, fai lavorare il piede con qualche minuto di [esercizi di rinforzo del piede](/it/esercizi-rinforzo-piede/).',
      ],
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
    },
    {
      h2: 'Plantari o esercizi: il confronto in breve',
      table: {
        caption: 'Plantari ed esercizi a confronto, dagli studi di questa pagina',
        head: ['', 'Solette e plantari', 'Esercizi'],
        rows: [
          ['Come funzionano', 'Cambiano il carico sul piede finché li indossi', 'Cambiano il tessuto, così regge più carico'],
          ['Prove per il dolore al tallone', 'Piccolo beneficio nel medio termine rispetto al finto plantare; nessuno a dodici mesi', 'Stretching grado **A**, rinforzo grado **B**'],
          ['Grado della linea guida per il dolore al tallone', '**B contro** da soli; **C** con altre terapie', 'Base della gestione di prima scelta'],
          ['Su misura o da banco', 'Nessuna differenza negli studi', 'Nessuna attrezzatura necessaria'],
          ['Prove per il piede piatto', 'Prove di basso livello per il dolore', 'Piccoli studi mostrano cambiamenti dell’arco; pochi dati sul dolore'],
          ['Costo', 'Basso per i prefabbricati, molto più alto per quelli su misura', 'Gratis'],
          ['Svantaggio', 'Possono ridurre i piccoli muscoli del piede se usati da soli', 'Possono riacutizzare il dolore se aumenti troppo in fretta'],
        ],
      },
      cites: [CITE.whittakerOrthoses, CITE.landorf2006, CITE.guideline, CITE.banwellPlanus, CITE.protopapasOrthotic],
    },
    {
      h2: 'Quando hanno senso i plantari?',
      bullets: [
        '**Lunghi turni in piedi.** Un supporto per l’arco rigido può rendere più facile la giornata mentre l’esercizio aumenta la capacità. Vedi [dolore ai piedi a stare in piedi tutto il giorno](/it/dolore-piedi-stare-in-piedi/).',
        '**Una riacutizzazione.** Un plantare o una talloniera possono smussare il dolore finché i primi passi sono acuti. Il [taping](/it/taping-fascite-plantare/) è un’altra opzione a breve termine, con un grado più alto nella linea guida.',
        '**Piede cavo doloroso.** In uno studio su 154\u00A0adulti con piede cavo doloroso (arco molto alto), i plantari su misura hanno alleviato il dolore più di un finto plantare a tre mesi (Burns e colleghi, 2006). Vedi [esercizi per il piede cavo](/it/piede-cavo-esercizi/).',
        '**Disfunzione del tendine tibiale posteriore**, quando si indebolisce il tendine che sostiene l’arco. Gli studi abbinano un plantare all’esercizio (Houck e colleghi, 2015). Vedi [esercizi per la disfunzione del tendine tibiale posteriore](/it/disfunzione-tendine-tibiale-posteriore/).',
        '**Diabete o ridotta sensibilità ai piedi.** In questi casi le solette che distribuiscono la pressione fanno spesso parte dell’assistenza al piede, adattate da un professionista sanitario.',
      ],
      cites: [CITE.guideline, CITE.burnsCavus, CITE.houckPTTD],
    },
    {
      h2: 'Come combinare plantari ed esercizi?',
      paragraphs: [
        '**Usa il plantare per stare più comodo e gli esercizi per cambiare le cose.** Sia nello studio di Rathleff sia nello STAP, tutti avevano indicazioni sugli esercizi oltre a quello che mettevano nella scarpa. Porta un supporto per l’arco da banco nei giorni in cui fa male, e inizia allo stesso tempo gli allungamenti e i sollevamenti sulle punte. Man mano che il dolore del mattino si calma, prova brevi periodi senza plantare, poi più lunghi.',
        'Walkito può organizzare la parte degli esercizi come un piano settimanale: una volta a settimana fa salire di un gradino il tuo esercizio principale quando hai giudicato facili le ultime due sessioni con quell’esercizio e il dolore del mattino non è aumentato.',
        'Se qualche mese di stretching e rinforzo quotidiani non ha aiutato, rivolgiti a un professionista sanitario. È allora che vale la pena parlare di un plantare su misura, tra le altre opzioni, con qualcuno che ha visitato il tuo piede.',
      ],
      cites: [CITE.rathleff, CITE.rasenbergStap],
    },
  ],
  faq: [
    {
      q: 'Servono i plantari per la fascite plantare?',
      cites: [CITE.guideline, CITE.whittakerOrthoses],
      a: 'Per la maggior parte delle persone no. La linea guida del 2023 sul dolore al tallone raccomanda di non usare i plantari da soli per un sollievo a breve termine (grado B) e li ammette insieme ad altre terapie (grado C). Una revisione di 19\u00A0studi ha trovato solo un piccolo beneficio nel medio termine rispetto ai finti plantari. Stretching (grado A) e rinforzo del polpaccio (grado B) sono la base, e un plantare può essere un’aggiunta per stare più comodi.',
    },
    {
      q: 'I plantari su misura sono meglio di quelli da banco?',
      cites: [CITE.whittakerOrthoses, CITE.rasenbergStap],
      a: 'Per il dolore al tallone, gli studi non hanno trovato differenze. Una revisione di 19\u00A0studi non ha trovato differenze tra plantari su misura e prefabbricati in nessun momento (Whittaker e colleghi, 2018). In uno studio su 185\u00A0adulti, i plantari su misura non hanno fatto meglio dei finti plantari a tre mesi (Rasenberg e colleghi, 2021). Un supporto per l’arco da banco che calzi bene è un primo tentativo ragionevole.',
    },
    {
      q: 'I plantari rendono i piedi più deboli?',
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
      a: 'C’è un piccolo segnale in questo senso. In uno studio non randomizzato su 18\u00A0giovani adulti con piede piatto, tre mesi di plantari su misura sono stati seguiti da un calo tra il 9,6 e il 17,4% nelle dimensioni di tre piccoli muscoli del piede. In uno studio su 28\u00A0persone, aggiungere ai plantari l’esercizio del piede corto ha sviluppato più muscolo e più forza dell’alluce rispetto ai soli plantari.',
    },
    {
      q: 'I plantari aiutano il piede piatto?',
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot],
      a: 'Le prove sono deboli. Una revisione di 13\u00A0studi non ha trovato prove di alto livello che i plantari aiutino gli adulti con piede piatto flessibile, e solo prove di basso livello per il dolore (Banwell e colleghi, 2014). In uno studio su 45\u00A0adulti, gli esercizi per il piede hanno migliorato la postura del piede più dei plantari su misura per l’arco (Kirmizi e colleghi, 2024). Un piede piatto che non fa male non ha bisogno di nulla.',
    },
    {
      q: 'Mio figlio ha il piede piatto: servono i plantari?',
      cites: [CITE.evansCochrane2022],
      a: 'Di solito no, se i piedi non fanno male. Una revisione Cochrane di 16\u00A0studi con 1.058\u00A0bambini ha trovato prove di certezza da bassa a molto bassa per i plantari, e ha concluso che i costosi plantari su misura per bambini con piede piatto flessibile senza dolore non hanno prove a sostegno (Evans e colleghi, 2022). Un bambino con dolore al piede, rigidità o che zoppica dovrebbe essere visto da un professionista sanitario.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta, o non riesci a caricare il peso sul piede',
      'stringere i lati del tallone fa molto male, il che può far pensare a una frattura da stress',
      'c’è intorpidimento, formicolio o bruciore nel piede',
      'il piede è arrossato, caldo o gonfio, o hai la febbre',
      'un arco si è abbassato di recente, o non riesci a salire sulla punta di quel piede',
      'hai il diabete, una cattiva circolazione o ridotta sensibilità ai piedi',
      'un bambino ha il piede piatto con dolore, rigidità o zoppia',
      'il dolore non è migliorato dopo qualche mese di stretching e rinforzo quotidiani',
    ],
  },
  program: {
    h2: 'Fare gli esercizi come un piano',
    text: 'Un plantare lo metti nella scarpa una volta. L’esercizio funziona solo se lo continui. Walkito costruisce un piano una settimana alla volta per il dolore al tallone o il piede piatto, partendo da allungamenti come quello della fascia plantare (2\u00A0tenute da 30\u00A0secondi) e lavoro sull’arco come il piede corto (3\u00A0serie da 8 tenendo 5\u00A0secondi), poi fa salire il tuo esercizio principale quando lo giudichi facile due volte di fila e il dolore del mattino resta stabile.',
    more: [
      'Scegli sessioni da 3, 5 o 10\u00A0minuti. All’inizio ogni 14\u00A0giorni (poi ogni 28 quando raggiungi un obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito è un programma di esercizi per adulti. Non fa diagnosi, non sostituisce un professionista sanitario e si può usare senza problemi insieme a un plantare.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Plantari o esercizi',
  campaign: 'guide-insoles-vs-exercises-it',
};
