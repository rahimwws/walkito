import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-band-inversion.ts`, written around the
 * queries «inversione caviglia elastico» and «esercizi tibiale posteriore».
 * Informal «tu». Figures, doses, grades and qualifiers are identical to the
 * English page. Citations as in English (kulig, ling, posteriorTibialReview).
 */

export const EX_BAND_INVERSION_IT: Guide = {
  lang: 'it',
  page: 'exBandInversion',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Inversione della caviglia con elastico: come farla',
  description:
    'Come fare l’inversione della caviglia con l’elastico per rinforzare il tibiale posteriore: tecnica, serie, errori comuni e cosa dicono gli studi.',
  h1: 'Inversione con elastico: come rinforzare il tibiale posteriore',
  lede:
    'L’inversione della caviglia con un elastico è un esercizio che rinforza il tibiale posteriore, il muscolo profondo del polpaccio il cui tendine passa sotto il malleolo interno e sostiene l’arco da sotto. Ruoti la pianta del piede verso l’interno contro la resistenza di un elastico. Uno studio del 2004 con risonanza magnetica ha trovato che un movimento simile, l’adduzione del piede a catena chiusa, dava l’attivazione isolata più alta del tibiale posteriore tra tre esercizi testati.',
  takeaways: [
    'Uno studio del 2004 con risonanza magnetica su 5\u00A0adulti sani ha trovato che l’adduzione del piede (ruotare il piede verso l’interno) aumentava del 50% l’intensità del segnale del tibiale posteriore, con meno del 5% di aumento nei muscoli intorno, ed era quindi l’esercizio più selettivo per quel muscolo (Kulig e colleghi, 2004).',
    'Una revisione sistematica del 2018 ha trovato che i programmi di esercizi che includevano il rinforzo del tibiale posteriore miglioravano dolore e funzione nelle persone con disfunzione del tendine tibiale posteriore, anche se la revisione notava che la maggior parte degli studi era piccola (Ross e colleghi, 2018).',
    'Il tibiale posteriore è il principale stabilizzatore dinamico dell’arco longitudinale mediale quando stai in piedi e cammini. Quando si indebolisce, col tempo l’arco può cedere.',
    'Walkito aggiunge questo esercizio solo dopo sei sessioni di piede corto in piedi, così i muscoli intrinseci dell’arco lavorano già prima che arrivi l’elastico.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Cos’è l’esercizio di inversione della caviglia con elastico?',
      paragraphs: [
        'L’inversione della caviglia con elastico è un esercizio da seduto in cui un elastico è passato intorno all’avampiede e fissato all’altro piede o a un punto fermo. Ruoti la pianta del piede verso l’interno (inversione) contro la trazione dell’elastico. Il ginocchio resta fermo. Si muovono solo il piede e la caviglia.',
        'L’esercizio lavora sul tibiale posteriore, un muscolo profondo nella parte dietro della gamba il cui tendine passa dietro il malleolo interno e si apre a ventaglio lungo la pianta del piede. È il muscolo estrinseco più importante per sostenere l’arco quando cammini. Quando si indebolisce o il suo tendine degenera, l’arco si appiattisce e il piede ruota verso l’interno. Questo problema si chiama disfunzione del tendine tibiale posteriore, o piede piatto acquisito dell’adulto.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'Come si fa l’inversione della caviglia con l’elastico?',
      paragraphs: [
        'Siediti con le gambe distese davanti a te o sul bordo di una sedia. Passa un elastico intorno al lato interno dell’avampiede della gamba che lavora. Fissa l’altra estremità sotto il piede opposto o intorno alla gamba di un tavolo, così l’elastico tira il piede verso l’esterno.',
        'Parti con il piede un po’ ruotato verso l’esterno (in eversione). Ruota la pianta del piede verso l’interno contro l’elastico, portando l’avampiede verso la linea centrale. **Muovi il piede, non tutta la gamba.** Il ginocchio punta dritto in avanti per tutto il tempo. Torna piano e ripeti.',
        'Inizia con un elastico leggero. Il movimento è piccolo. Se il ginocchio si gira o l’anca ruota, l’elastico è troppo duro o la gamba sta compensando.',
      ],
      exercises: [
        {
          name: 'Inversione con elastico',
          evidence: { level: 'moderate', why: 'La risonanza magnetica conferma l’attivazione selettiva del tibiale posteriore con l’adduzione del piede (Kulig 2004). In una revisione sistematica del 2018, i programmi di esercizi con lavoro sul tibiale posteriore miglioravano gli esiti nella disfunzione del tendine.' },
          dose: 'Walkito parte da 3\u00A0serie da 15, ogni piede',
          how: 'Siediti con un elastico passato intorno all’avampiede, fissato in modo che tiri il piede verso l’esterno. Ruota la pianta del piede verso l’interno contro l’elastico. Muovi il piede, non la gamba. Il ginocchio resta fermo.',
          often: 'Giorni di forza, dopo sei sessioni di piede corto in piedi',
          feel: 'Lavoro lungo il lato interno del piede e della caviglia',
          stop: 'Il dolore arriva a 6/10',
          media: 'band_inversion',
          caption: 'Inversione con elastico: ruota la pianta del piede verso l’interno contro l’elastico',
          alt: 'Una figura seduta che ruota la pianta del piede verso l’interno contro un elastico passato intorno all’avampiede',
        },
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
    {
      h2: 'Su quale muscolo lavora questo esercizio?',
      keyFact: 'Uno studio del 2004 con risonanza magnetica su 5\u00A0adulti sani ha trovato che ruotare il piede verso l’interno aumentava del 50% il segnale del tibiale posteriore, con meno del 5% di variazione nei muscoli vicini (Kulig e colleghi, 2004).',
      paragraphs: [
        'Il bersaglio principale è il tibiale posteriore. È il muscolo più profondo della parte dietro della gamba, e sta dietro tibia e perone. Il suo tendine passa dietro il malleolo mediale (l’osso interno della caviglia), poi si apre in più fasci che si attaccano a quasi tutte le ossa del mesopiede.',
        'Uno studio del 2004 con risonanza magnetica di Kulig e colleghi ha testato tre esercizi su 5\u00A0adulti sani:',
        {
          list: [
            'L’adduzione del piede (ruotare il piede verso l’interno strisciando sul pavimento).',
            'Il sollevamento sulle punte su una gamba.',
            'La supinazione del piede a catena aperta.',
          ],
        },
        'L’adduzione del piede dava l’attivazione più alta del tibiale posteriore (aumento del segnale del 50%) con l’attivazione più bassa nei muscoli intorno (meno del 5%). Anche il sollevamento sulle punte su una gamba attivava il tibiale posteriore, ma attivava molto anche il gastrocnemio (99%) e il soleo (39%), e quindi era un esercizio molto meno selettivo per il tibiale posteriore.',
      ],
      cites: [CITE.kulig],
    },
    {
      h2: 'Perché il tibiale posteriore conta per l’arco?',
      paragraphs: [
        'Il tibiale posteriore è **il principale stabilizzatore dinamico dell’arco longitudinale mediale.** A ogni passo si contrae per tenere su l’arco nella fase di appoggio intermedio, quando tutto il tuo peso è su un piede. I muscoli intrinseci del piede (allenati dall’[esercizio del piede corto](/it/esercizi/piede-corto/) e dall’[apertura delle dita](/it/esercizi/apertura-dita-piede/)) danno un sostegno locale all’arco, ma il tibiale posteriore dà la forza estrinseca più grande, dall’alto.',
        'Quando il tendine del tibiale posteriore si indebolisce o degenera, l’arco cede progressivamente e il piede va in pronazione. Una revisione del 2017 di Ling e Lui l’ha descritta come la causa più comune di piede piatto acquisito dell’adulto. Una revisione sistematica del 2018 di Ross e colleghi ha trovato che i programmi di esercizi con rinforzo del tibiale posteriore miglioravano dolore e funzione nella disfunzione del tendine tibiale posteriore in fase iniziale.',
        'Per questo i [programmi di esercizi per il piede piatto](/it/esercizi-piede-piatto/) includono sia esercizi per i muscoli intrinseci del piede sia lavoro sul tibiale posteriore. I muscoli intrinseci sono gli stabilizzatori locali. Il tibiale posteriore è il principale stabilizzatore estrinseco. Contano entrambi.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quali sono gli errori più comuni nell’inversione con elastico?',
      paragraphs: [
        {
          list: [
            '**L’errore più comune è ruotare tutta la gamba invece del solo piede.** Quando l’anca ruota verso l’interno per girare il piede, il tibiale posteriore non fa quasi niente. Tieni il ginocchio puntato dritto in avanti. Si muove solo il piede, alla caviglia.',
            '**Un altro errore è usare un elastico troppo duro.** Il tibiale posteriore è un muscolo piccolo e profondo. Un elastico pesante costringe i muscoli più grandi a prendere il comando. Inizia con un elastico leggero e concentrati sul sentire il lavoro lungo la caviglia interna e l’arco.',
            '**Lasciare che il piede torni indietro di scatto tra una ripetizione e l’altra è un terzo problema.** Controlla il ritorno. La fase eccentrica, il ritorno lento, carica il tendine in un modo che lo aiuta ad adattarsi. Un ritorno lento vale più di una tirata veloce.',
            '**Infine, alcune persone mettono l’elastico troppo in alto sul piede, vicino all’articolazione della caviglia.** L’elastico deve stare intorno all’avampiede, vicino alla base delle dita, così la leva lavora con l’angolo giusto.',
          ],
        },
      ],
    },
    {
      h2: 'Cosa dicono gli studi sul rinforzo del tibiale posteriore?',
      paragraphs: [
        'La prova più diretta sul movimento viene dallo studio del 2004 con risonanza magnetica di Kulig e colleghi. Ha confermato che l’adduzione del piede attiva in modo selettivo il tibiale posteriore, con un’attivazione minima dei muscoli intorno. Per questo l’inversione contro un elastico è l’esercizio da scegliere quando l’obiettivo è rinforzare proprio quel muscolo.',
        'Per gli esiti clinici, una revisione sistematica del 2018 di Ross e colleghi ha esaminato i programmi di esercizi per la disfunzione del tendine tibiale posteriore. La maggior parte degli studi era piccola, ma la revisione ha concluso che i programmi con esercizi eccentrici e concentrici per il tibiale posteriore, spesso uniti al rinforzo del polpaccio e a plantari, miglioravano dolore e funzione.',
        '**L’esercizio non è stato testato da solo in un grande studio sulla fascite plantare.** Il suo ruolo nel programma Walkito è sostenere l’arco rinforzando lo stabilizzatore estrinseco che lavora insieme ai muscoli intrinseci. Pagine collegate: [esercizi per il piede piatto](/it/esercizi-piede-piatto/), [esercizio del piede corto](/it/esercizi/piede-corto/), [abduzione dell’anca](/it/esercizi/abduzione-anca/).',
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
  ],
  faq: [
    {
      q: 'Che elastico usare per l’inversione della caviglia?',
      a: 'Inizia con un elastico a resistenza leggera. Il tibiale posteriore è un muscolo piccolo e profondo e non serve un carico pesante per affaticarlo. Dovresti sentire il lavoro lungo la caviglia interna e l’arco. Se il ginocchio si gira o l’anca ruota per completare il movimento, l’elastico è troppo duro.',
    },
    {
      q: 'L’inversione della caviglia con elastico aiuta il piede piatto?',
      cites: [CITE.posteriorTibialReview, CITE.ling],
      a: 'Il tibiale posteriore è il principale stabilizzatore dinamico dell’arco. Una revisione sistematica del 2018 ha trovato che i programmi di esercizi con rinforzo del tibiale posteriore miglioravano dolore e funzione nelle persone con disfunzione del tendine tibiale posteriore, la causa più comune di piede piatto acquisito dell’adulto (Ross 2018). Rinforzarlo fa parte dell’approccio standard al piede piatto.',
    },
    {
      q: 'Che differenza c’è tra inversione ed eversione della caviglia?',
      a: 'L’inversione ruota la pianta del piede verso l’interno e allena il tibiale posteriore sul lato interno della caviglia. L’eversione ruota la pianta verso l’esterno e allena i muscoli peronieri sul lato esterno. Si usano entrambe nella riabilitazione della caviglia, ma per sostenere l’arco la direzione che conta è l’inversione.',
    },
    {
      q: 'Posso fare questo esercizio senza elastico?',
      a: 'Senza elastico, puoi premere il lato interno del piede contro un muro o usare la mano per fare resistenza al movimento. L’elastico è meglio perché dà una resistenza costante per tutto il movimento. Va bene qualsiasi elastico leggero.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai dolore o gonfiore lungo il malleolo interno che peggiora con l’attività',
      'non riesci a salire sulle punte su un piede solo, il che può indicare una debolezza del tendine tibiale posteriore',
      'l’arco ha ceduto di recente e il piede è diventato visibilmente più piatto',
      'hai avuto un infortunio alla caviglia e la caviglia interna fa ancora male al tatto',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito aggiunge l’inversione della caviglia con elastico dopo sei sessioni di piede corto in piedi. La progressione fa sì che i muscoli intrinseci del piede siano attivi prima di caricare lo stabilizzatore estrinseco. Le sessioni durano 3, 5 o 10\u00A0minuti, e un test ogni 14\u00A0giorni segue il tempo di tenuta dell’arco e la resistenza del polpaccio.',
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Inversione con elastico (tibiale posteriore)',
  campaign: 'ex-band-inversion-it',
};
