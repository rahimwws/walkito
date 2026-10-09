import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/vs-exakt.ts`, written around the queries
 * «Walkito vs Exakt Health», «Exakt Health opinioni» and «Exakt Health
 * prezzo». Informal «tu». Prices stay in US dollars as on the English page
 * and in `articles-it/best-app.ts`; ratings, counts and dates are identical
 * to the English page. App names stay as published.
 */

export const VS_EXAKT_IT: Guide = {
  lang: 'it',
  page: 'vsExakt',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Walkito vs Exakt Health: confronto completo (2026)',
  description:
    'Walkito o Exakt Health? Confronto su problemi coperti, prezzo, piattaforme, come creano il piano, prove, lingue e privacy. Verificato a ottobre 2026.',
  h1: 'Walkito vs Exakt Health: quale fa per te?',
  lede:
    'Walkito ed Exakt Health offrono entrambe piani di esercizi per la fascite plantare, ma sono fatte per persone diverse. Exakt è un’app per chi corre, con oltre 15 piani di riabilitazione per infortuni e un programma di ritorno alla corsa. Walkito è un’app più ristretta, concentrata su dolore al tallone, piede piatto e adattamento quotidiano al dolore. Questa pagina le confronta con onestà, dice dove Exakt è la scelta migliore e spiega cosa fa di diverso Walkito.',
  intro: [
    'Questa pagina la fa Walkito. Quindi leggi i dati su Exakt (presi dalla sua scheda sull’App Store, dalla scheda su Google Play e dal sito ufficiale, tutti verificati a ottobre 2026) e decidi tu. I link a tutte le fonti sono in fondo alla tabella di confronto.',
  ],
  takeaways: [
    'Exakt Health copre oltre 15 infortuni da corsa e include piani di allenamento di corsa dai 5\u00A0km alla maratona. Walkito copre solo dolore al tallone, piede piatto e dolore alla tibia.',
    'Exakt è sia su iOS sia su Android. Walkito, a ottobre 2026, è solo per iOS.',
    'Exakt Health è certificata come dispositivo medico nell’UE. Walkito non è un dispositivo medico.',
    'Walkito adatta ogni sessione in base a un check-in del dolore al mattino e testa la differenza tra sinistra e destra ogni 14\u00A0giorni. Exakt adatta il piano in base al feedback di fine sessione.',
    'Exakt costa 19,99\u00A0$ al mese o 59,99\u00A0$ per sei mesi. Walkito costa 44,99\u00A0$ all’anno o 7,99\u00A0$ a settimana.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Confronto fianco a fianco',
      paragraphs: [
        'Ogni dato su Exakt qui sotto è stato verificato sulla scheda di Exakt Health nell’App Store, sulla scheda su Google Play e su exakthealth.com a ottobre 2026. Ogni dato su Walkito viene dalla scheda di Walkito nell’App Store, da walkito.site e dal codice sorgente dell’app.',
      ],
      table: {
        caption: 'Walkito vs Exakt Health (verificato a ottobre 2026)',
        head: ['', 'Walkito', 'Exakt Health'],
        rows: [
          [
            'Ambito',
            'Dolore al tallone, piede piatto, dolore alla tibia, stare in piedi tutto il giorno',
            'Infortuni da corsa (oltre 15) e allenamento di corsa (dai 5\u00A0km alla maratona)',
          ],
          [
            'Piattaforme',
            'Solo iOS (Android previsto)',
            'iOS e Android',
          ],
          [
            'Prezzo',
            '44,99\u00A0$ all’anno o 7,99\u00A0$ a settimana',
            '19,99\u00A0$ al mese, 39,99\u00A0$ ogni 3\u00A0mesi o 59,99\u00A0$ ogni 6\u00A0mesi (riabilitazione); piani di corsa fino a 99,99\u00A0$ all’anno',
          ],
          [
            'Prova gratuita',
            'Non indicata sull’App Store (i termini prevedono offerte introduttive)',
            'Prova gratuita di 7\u00A0giorni',
          ],
          [
            'Durata della sessione',
            '3, 5 o 10\u00A0minuti',
            'Cambia in base al piano (di solito 15-30\u00A0minuti)',
          ],
          [
            'Adattamento al dolore',
            'Il check-in del mattino adatta ogni sessione; con 7/10 o più si passa a lavoro leggero da seduti',
            'Il feedback di fine sessione regola la progressione tra i livelli',
          ],
          [
            'Test dei progressi',
            'Ogni 14\u00A0giorni: sollevamenti sulle punte, tenuta dell’arco, equilibrio, confronto sinistra-destra',
            'Monitoraggio dinamico dei progressi attraverso i livelli del piano',
          ],
          [
            'Video degli esercizi',
            'Sì, clip nell’app per ogni esercizio',
            'Sì, oltre 600 video di esercizi',
          ],
          [
            'Ritorno alla corsa',
            'Non incluso (si adatta al carico di corsa tramite i passi di Apple Health)',
            'Sì, programma cammino-corsa alla fine di ogni piano di riabilitazione',
          ],
          [
            'Lingue',
            'Inglese, russo, spagnolo',
            'Inglese, francese, tedesco, spagnolo',
          ],
          [
            'Dispositivo medico',
            'No',
            'Sì, certificata nell’UE',
          ],
          [
            'Accesso a un professionista',
            'Nessuno (solo programma di esercizi)',
            'Nessuno nell’app (creata da fisioterapisti sportivi abilitati)',
          ],
          [
            'Integrazione dati sanitari',
            'Apple Health (passi, sonno, asimmetria della camminata, velocità di camminata, frequenza cardiaca)',
            'Integrazione con smartwatch per tracciare la corsa',
          ],
          [
            'Privacy',
            'I dati di Apple Health restano sul dispositivo. Punteggi del dolore e sessioni sincronizzati sull’account. Nessun tracciamento pubblicitario.',
            'Identificatori usati per il tracciamento. Dati finanziari raccolti. Dati crittografati in transito. Cancellazione disponibile.',
          ],
          [
            'Valutazione App Store',
            'Ancora senza valutazioni (uscita il 2 ottobre 2026)',
            '4,8 su 5 (125\u00A0valutazioni)',
          ],
          [
            'Sviluppatore',
            'Aigum Kalasov',
            'Exakt Health GmbH (Berlino)',
          ],
        ],
      },
      sourceNote:
        'Fonti Exakt: App Store (apps.apple.com/us/app/exakt-running-pt-trainer/id1638338198), Google Play (play.google.com/store/apps/details?id=exakt.mobile.android.release), exakthealth.com/en-US/pricing, exakthealth.com/en-US/about-us. Fonti Walkito: App Store (apps.apple.com/app/id6813076846), walkito.site.',
    },
    {
      h2: 'Per chi è fatta Exakt Health?',
      paragraphs: [
        'Exakt Health è fatta per chi corre. È la sua identità di base, e tutto nell’app lo riflette. Se corri e ti stai riprendendo da fascite plantare, tendinopatia d’Achille, distorsione della caviglia, stiramento del bicipite femorale o lesione del menisco, Exakt ha un piano di riabilitazione specifico per il tuo infortunio. Copre oltre 15 problemi diversi.',
        'Ogni piano di riabilitazione finisce con un programma cammino-corsa per tornare a correre, una delle parti del recupero più difficili da gestire da soli. L’app ha anche piani di allenamento di corsa per ogni distanza, dal divano ai 5\u00A0km fino alla maratona.',
        'Exakt è stata fondata nel 2021 da Philip Billaudelle, Lucia Payo e Maryke Louw. È creata da fisioterapisti sportivi abilitati e allenatori di corsa, e a settembre 2024 ha raccolto circa 2,2\u00A0milioni di euro in un round seed. Il team ha sede a Berlino. L’app è certificata come dispositivo medico nell’UE, cioè ha superato una revisione normativa per l’uso previsto.',
        'Se corri e ti servono sia la riabilitazione da un infortunio sia un piano di allenamento strutturato, Exakt è difficile da battere. La valutazione di 4,8 su 125\u00A0recensioni iOS e gli oltre 100.000\u00A0download su Android mostrano che funziona per il suo pubblico.',
      ],
    },
    {
      h2: 'Per chi è fatta Walkito?',
      paragraphs: [
        'Walkito è fatta per chi ha male ai piedi e vuole un breve piano di esercizi quotidiano che si adatti a come si sente ogni mattina. Questo include fascite plantare, piede piatto flessibile e dolore alla tibia. È fatta anche per chi sta in piedi tutto il giorno: infermieri, commessi, addetti di magazzino.',
        'L’app è più ristretta di Exakt. Non copre infortuni al ginocchio, stiramenti del bicipite femorale né piani di corsa. Quello che fa di diverso è adattare la sessione di ogni giorno in base a un check-in del dolore al mattino, invece che al feedback di fine sessione. Una mattina a 7/10 o più trasforma la giornata in circa tre minuti di lavoro da seduti. Una giornata con tanti passi (misurati tramite Apple Health) trasforma la sessione di forza successiva in una sessione di recupero più leggera.',
        'Walkito testa i progressi ogni 14\u00A0giorni con sollevamenti sulle punte, una tenuta dell’arco ed equilibrio su una gamba, e confronta il lato sinistro con il destro. Quel confronto sinistra-destra è qualcosa che la maggior parte delle app di questo tipo non misura.',
        'Walkito è uscita il 2 ottobre 2026. È nuova, non ha ancora valutazioni degli utenti ed è solo per iOS. Non ha lo storico né l’ampiezza che Exakt ha costruito dal 2021.',
      ],
    },
    {
      h2: 'Come costruisce il piano ciascuna app?',
      paragraphs: [
        'Exakt ti chiede del tuo infortunio, del tuo livello di esperienza e del tuo programma settimanale, poi ti assegna un piano di riabilitazione strutturato a livelli. Sali di livello in base a come va ogni sessione. Finita la riabilitazione, puoi passare direttamente a un piano di allenamento di corsa senza ricominciare da capo.',
        'Walkito ti chiede dove fa male, da che lato, il tuo livello di attività, il tuo obiettivo e quanti giorni e minuti hai. Costruisce un piano settimanale intorno a obiettivi misurabili: mattine senza dolore, una tenuta dell’arco di 60\u00A0secondi, 25\u00A0sollevamenti sulle punte su una gamba, 30\u00A0secondi di equilibrio su una gamba e simmetria tra sinistra e destra. Ogni settimana ricostruisce il piano in base a com’è andata la settimana prima. Si lavora su un obiettivo alla volta. Quando un obiettivo è raggiunto, passa al mantenimento e parte il successivo.',
        'La differenza principale: Exakt segue una progressione strutturata a livelli. Walkito segue una progressione per obiettivi, in cui il check-in di ogni mattina regola l’intensità della giornata.',
      ],
    },
    {
      h2: 'Quali problemi copre ciascuna app?',
      keyFact: 'Gli esercizi di Walkito seguono la linea guida del 2023 sul dolore al tallone, che dà all’allungamento della fascia plantare e del polpaccio una A e al lavoro di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Qui Exakt è chiaramente più forte. I suoi piani di riabilitazione coprono fascite plantare, tendinopatia d’Achille, distorsioni della caviglia, stiramenti del bicipite femorale, lesioni del menisco, ginocchio del corridore e altro. Se il dolore è al ginocchio, all’anca o al bicipite femorale, Walkito non ha un piano per te.',
        'Walkito copre fascite plantare, piede piatto (flessibile), dolore al tallone da stazione eretta e dolore alla tibia. I suoi esercizi seguono la linea guida del 2023 sul dolore al tallone (stretching grado A, forza grado B) e lo studio di Rathleff del 2015 (sollevamenti sulle punte con carico per la fascite plantare). Per questi problemi specifici ha esercizi, logica di progressione e adattamento al dolore. Per tutto quello che è fuori da questo ambito, Exakt o un’app più ampia come Prehab sono la scelta giusta.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quanto costano Walkito ed Exakt Health?',
      paragraphs: [
        'Walkito costa 44,99\u00A0$ all’anno o 7,99\u00A0$ a settimana. Il prezzo annuale corrisponde a circa 0,87\u00A0$ a settimana. Sull’App Store non è indicata una prova gratuita, anche se i termini d’uso prevedono offerte introduttive.',
        'Exakt costa 19,99\u00A0$ al mese per i piani di riabilitazione, con opzioni da 3\u00A0mesi (39,99\u00A0$) e da 6\u00A0mesi (59,99\u00A0$). I piani di allenamento di corsa arrivano fino a 99,99\u00A0$ all’anno. Ogni abbonamento parte con una prova gratuita di 7\u00A0giorni.',
        'Su un anno intero: Walkito annuale costa 44,99\u00A0$. L’opzione di riabilitazione più economica di Exakt (piano da 6\u00A0mesi rinnovato due volte) costa circa 120\u00A0$. Se aggiungi un piano di corsa, Exakt può superare i 200\u00A0$ all’anno.',
        'Se ti servono solo esercizi per il dolore al tallone o al piede, Walkito costa molto meno. Se ti servono riabilitazione da infortunio di corsa più un piano di allenamento, il prezzo più alto di Exakt copre di più.',
      ],
    },
    {
      h2: 'Piattaforme e lingue',
      paragraphs: [
        'Exakt Health è sia su iOS sia su Android. Se usi un telefono Android, questo da solo decide la scelta, perché Walkito è solo per iOS.',
        'Exakt è disponibile in inglese, francese, tedesco e spagnolo. Walkito è disponibile in inglese, russo e spagnolo. In comune ci sono inglese e spagnolo. Se ti serve il francese o il tedesco, Exakt è l’unica opzione. Se ti serve il russo, Walkito è l’unica opzione.',
      ],
    },
    {
      h2: 'Privacy',
      paragraphs: [
        'Walkito legge i dati di Apple Health (passi, sonno, asimmetria della camminata, velocità di camminata, frequenza cardiaca a riposo) e li tiene sul dispositivo. Non vengono mai caricati. Quello che si sincronizza sull’account Walkito sono i punteggi del dolore, i dati delle sessioni e i risultati dei test. Non c’è tracciamento pubblicitario.',
        'L’etichetta privacy di Exakt Health sull’App Store indica gli Identificatori come dati usati per tracciarti, e Acquisti, Identificatori, Dati di utilizzo e Diagnostica come dati raccolti ma non collegati alla tua identità. La sua scheda su Google Play dice che nessun dato viene condiviso con terze parti, che possono essere raccolti dati finanziari, che i dati sono crittografati in transito e che la cancellazione è disponibile.',
        'Entrambe le app raccolgono dati di utilizzo standard. Nessuna delle due vende dati sanitari. L’approccio di Walkito, che tiene sul dispositivo i dati di Apple Health, è un modello di privacy più rigoroso.',
      ],
    },
    {
      h2: 'Su quali prove si basa ciascuna app?',
      paragraphs: [
        'Exakt Health è certificata come dispositivo medico nell’UE (Germania), cosa che richiede prove di sicurezza e dello scopo previsto. L’app è creata da fisioterapisti sportivi abilitati. Dice che i suoi metodi sono basati sulle prove, ma non elenca studi specifici nella scheda dell’App Store o nella pagina dei prezzi.',
        'Walkito elenca le sue fonti sul sito. I suoi esercizi seguono la linea guida clinica del 2023 sul dolore al tallone (Koc e colleghi, JOSPT), lo studio di Rathleff del 2015 sui sollevamenti sulle punte con carico pesante, lo studio di Brijwasi del 2023 sugli esercizi per il piede piatto, e altri. Ogni esercizio nell’app ha un livello di prova (Forte, Moderato o Iniziale) con una spiegazione di una riga.',
        'Nessuna delle due app ha pubblicato un proprio studio clinico. Entrambe si basano sulla ricerca esistente, applicata attraverso i rispettivi programmi.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quando Exakt Health è la scelta migliore?',
      paragraphs: [
        'Scegli Exakt Health se vale almeno una di queste cose:',
      ],
      bullets: [
        'Corri, ti stai riprendendo da un infortunio di corsa e vuoi un piano strutturato per tornare a correre.',
        'Il tuo infortunio non è fascite plantare né piede piatto. Exakt copre oltre 15 problemi; Walkito ne copre tre.',
        'Usi un telefono Android.',
        'Vuoi una prova gratuita di 7\u00A0giorni per testare l’app prima di pagare.',
        'Per te conta la certificazione come dispositivo medico nell’UE.',
        'Ti serve l’app in francese o in tedesco.',
      ],
    },
    {
      h2: 'Quando Walkito è la scelta migliore?',
      paragraphs: [
        'Scegli Walkito se vale almeno una di queste cose:',
      ],
      bullets: [
        'Il tuo dolore è proprio dolore al tallone, fascite plantare o piede piatto, e vuoi un programma concentrato su questo.',
        'Vuoi sessioni da 3 a 10\u00A0minuti invece che da 15 a 30.',
        'Per te conta più l’adattamento quotidiano al dolore con un check-in al mattino che la progressione a livelli.',
        'Vuoi test dei progressi ogni 14\u00A0giorni che confrontino sinistra e destra.',
        'Il prezzo conta: Walkito a 44,99\u00A0$ all’anno costa meno della metà del costo annuale più basso di Exakt.',
        'Ti serve l’app in russo.',
        'Stai in piedi tutto il giorno per lavoro, non corri, e vuoi un’app fatta per questo.',
      ],
    },
  ],
  faq: [
    {
      q: 'Exakt Health è meglio di Walkito?',
      a: 'Dipende da cosa ti serve. Exakt Health copre oltre 15 infortuni da corsa e include piani di ritorno alla corsa. È sia su iOS sia su Android ed è certificata come dispositivo medico nell’UE. Walkito si concentra su dolore al tallone e piede piatto, con adattamento quotidiano al dolore e sessioni più brevi. Per chi corre e ha infortuni di tipo diverso, Exakt è la scelta più adatta. Per il dolore al tallone con adattamento giorno per giorno, Walkito è fatta proprio per questo.',
    },
    {
      q: 'Walkito costa meno di Exakt Health?',
      a: 'Sì, su base annuale. Walkito costa 44,99\u00A0$ all’anno. L’opzione di riabilitazione più economica di Exakt Health è 59,99\u00A0$ per sei mesi, cioè circa 120\u00A0$ all’anno. Exakt offre una prova gratuita di 7\u00A0giorni; Walkito al momento non ne indica una sull’App Store.',
    },
    {
      q: 'Exakt Health ha un piano per la fascite plantare?',
      a: 'Sì. Exakt Health ha un piano di riabilitazione specifico per la fascite plantare, insieme a piani per tendinopatia d’Achille, distorsioni della caviglia, stiramenti del bicipite femorale, lesioni del menisco e altro. Il piano per la fascite plantare finisce con un programma cammino-corsa per tornare a correre in sicurezza, e l’app adatta il piano man mano che sali di livello.',
    },
    {
      q: 'Walkito funziona su Android?',
      a: 'Non ancora. A ottobre 2026 Walkito è solo per iOS. Android è previsto, ma non è stata annunciata una data di uscita. Se usi Android, Exakt Health è disponibile su Google Play con un piano di riabilitazione per la fascite plantare, e oggi funziona sia su Android sia su iOS.',
    },
    {
      q: 'Exakt Health è un dispositivo medico?',
      a: 'Sì. Exakt Health è certificata come dispositivo medico nell’UE (Germania). Vuol dire che ha superato una revisione normativa su sicurezza e uso previsto. Walkito non è un dispositivo medico e non pretende di fare diagnosi né di dare consigli medici.',
    },
    {
      q: 'Quale app si adatta di più al dolore di ogni giorno?',
      a: 'Walkito adatta ogni sessione in base a un check-in del dolore al mattino, prima di iniziare. Un punteggio di 7/10 o più rende la sessione più leggera. Una giornata con tanti passi fa scattare una sessione di recupero il giorno dopo. Exakt adatta il piano in base a come valuti ogni sessione dopo averla finita. L’approccio di Walkito reagisce di più ai cambi di dolore giorno per giorno; quello di Exakt si concentra di più sulla progressione complessiva del piano.',
    },
  ],
  redFlags: {
    h2: 'Quando un’app non basta, rivolgiti a un professionista sanitario',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede o zoppichi',
      'il dolore si accompagna a intorpidimento, formicolio, bruciore, gonfiore o calore',
      'il dolore ti sveglia di notte o c’è anche a riposo',
      'stringere i lati del tallone fa male, il che può indicare una frattura da stress più che una fascite plantare',
      'il dolore peggiora di settimana in settimana nonostante esercizi costanti',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Se Walkito ti sembra adatta alla tua situazione, ecco come funziona. Rispondi a domande su dove fa male, da che lato, il tuo livello di attività e il tuo obiettivo. Walkito costruisce un piano settimanale intorno a obiettivi misurabili, partendo dalle mattine senza dolore. Ogni mattina, un check-in regola la giornata.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test misura resistenza del polpaccio, tenuta dell’arco ed equilibrio, e mostra la differenza tra lato sinistro e destro. Gli esercizi seguono la linea guida clinica del 2023 e lo studio di Rathleff del 2015. Walkito è un programma di esercizi, non una diagnosi né un sostituto di un professionista sanitario.',
    ],
    cta: 'Prova Walkito sull’App Store.',
  },
  crumb: 'Walkito vs Exakt Health',
  campaign: 'compare-exakt-it',
};
