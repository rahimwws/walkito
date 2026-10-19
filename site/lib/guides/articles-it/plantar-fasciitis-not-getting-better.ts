import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/plantar-fasciitis-not-getting-better.ts
 * (2026-10-19), written around «fascite plantare che non passa»,
 * «fascite plantare cronica». Informal «tu». Figures, grades, doses, hedges
 * and CITE keys are identical to the English page after its fact-check.
 * Same media ids. Exercise names and cards follow it.ts («tenuta sulle
 * punte», «sollevamenti sulle punte con asciugamano»). "Clinician" is
 * «professionista sanitario». Link to app-vs-physical-therapy removed (no
 * Italian page), words kept.
 */

export const PF_NOT_BETTER_IT: Guide = {
  lang: 'it',
  page: 'pfNotBetter',
  mainSource: CITE.hansen,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fascite plantare che non passa: cosa cambiare',
  description:
    'Il dolore al tallone non migliora? Sei motivi per cui la fascite plantare si blocca, come riconoscerli, cosa cambiare e le opzioni oltre gli esercizi.',
  h1: 'Fascite plantare che non passa: i motivi e cosa cambiare',
  lede:
    'Quando la fascite plantare non migliora, i motivi più comuni sono un piano fatto solo di allungamenti, un carico che non aumenta mai, smettere appena va meglio o qualcosa che continua a scatenarla. A volte non è affatto fascite plantare. Raramente vuol dire che non può cambiare niente: in uno studio che ha seguito 174\u00A0persone per circa dieci anni, il 54% non aveva più sintomi e quasi tutti gli altri avevano solo un dolore lieve (Hansen e colleghi, 2018).',
  intro: [
    'Questa pagina è per la fase in cui sei bloccato: hai provato gli allungamenti, forse i plantari, forse un’infiltrazione, e i primi passi fanno ancora male. Quanto dura di solito il recupero è spiegato in [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/). Qui vediamo i motivi più comuni per cui si blocca, come si riconosce ciascuno, cosa cambiare e quando farti ricontrollare.',
  ],
  takeaways: [
    'In 174\u00A0persone seguite in media per 9,7\u00A0anni dall’inizio dei sintomi, il 54% non aveva più sintomi e il 46% ne aveva ancora qualcuno, per lo più lieve. Quasi tutti (il 93%) avevano fatto un’infiltrazione di cortisone a un certo punto, quindi erano casi più difficili (Hansen e colleghi, 2018).',
    'Gli alti e bassi sono normali: il 31,9% di chi è rimasto senza sintomi aveva avuto prima almeno una ricaduta, e il 77,5% di chi aveva ancora dolore aveva avuto a un certo punto un periodo senza dolore (Hansen e colleghi, 2018).',
    'In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico hanno anticipato il miglioramento rispetto agli allungamenti a tre mesi. A un anno i due gruppi erano più o meno pari (Rathleff e colleghi, 2015).',
    'La linea guida del 2023 sul dolore al tallone dà **grado A** ad allungamenti, terapia manuale, taping e tutori notturni, e **grado B** a lavoro di forza, dry needling e laser a bassa intensità. Sconsiglia i plantari da soli per un sollievo a breve termine (Koc e colleghi, 2023).',
    'La stessa linea guida dice di cercare altre diagnosi quando i sintomi non si calmano, come un’artrite infiammatoria, un’atrofia del cuscinetto adiposo o un nodulo nella fascia (Koc e colleghi, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La fascite plantare è per sempre se non migliora?',
      keyFact: 'In un gruppo di 174\u00A0persone seguite in media per 9,7\u00A0anni, il 54% non aveva più sintomi e il 46% ne aveva ancora qualcuno, per lo più lieve (Hansen e colleghi, 2018).',
      paragraphs: [
        '**Per la maggior parte delle persone, no.** Una revisione del 2020 riporta che più del 90% delle persone migliora con le cure non chirurgiche, anche se possono servire da tre a sei mesi (Latt e colleghi, 2020). La domanda più difficile è cosa succede a chi è ancora bloccato dopo quel periodo.',
        'I dati migliori sul lungo periodo vengono da uno studio danese che ha seguito 174\u00A0persone con fascite plantare confermata all’ecografia. In media 9,7\u00A0anni dopo l’inizio dei sintomi, il 54% non aveva nessun sintomo. L’altro 46% ne aveva ancora qualcuno, ma per lo più li descriveva come lievi. In media le persone avevano provato 3,8 cure diverse (Hansen e colleghi, 2018).',
        'Due cose rendono questo studio più incoraggiante di quanto sembri a prima vista. Era un gruppo di un ambulatorio specialistico con un dolore difficile da gestire: il 93% aveva fatto un’infiltrazione di cortisone a un certo punto, che non è un primo passo. E «ha ancora sintomi» voleva dire qualsiasi punteggio sopra 0 su 10, quindi include chi ha qualche fastidio lieve ogni tanto.',
        'Lo studio ha trovato anche che la fascia si assottigliava nel tempo, che le persone avessero ancora dolore o no, e solo il 24% del gruppo senza dolore aveva una fascia del tutto normale all’ecografia. Quindi un’ecografia ancora anomala non vuol dire che non puoi stare meglio. Per i tempi completi, vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/).',
      ],
      sourceNote:
        'Hansen 2018: 269\u00A0diagnosi dal 2001 al 2011, 174 hanno partecipato (91\u00A0donne, 83\u00A0uomini), 137 hanno fatto un’ecografia di controllo. Senza sintomi = 0 su ogni scala del dolore (riposo, cammino, corsa, pressione). Lo spessore della fascia è sceso da 6,9\u00A0mm e 6,7\u00A0mm a 4,3\u00A0mm in entrambi i gruppi. Le donne e chi aveva dolore a entrambi i talloni andavano peggio (entrambi P < 0,01). Gli autori notano che lo studio non può stabilire quali cure abbiano funzionato.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Quale motivo fa per te?',
      paragraphs: [
        'La maggior parte dei casi bloccati rientra in uno o due di questi quadri. Leggi la colonna centrale, guarda quale ti somiglia, poi vai a quella sezione.',
      ],
      table: {
        caption: 'Motivi comuni per cui la fascite plantare si blocca',
        head: ['Motivo', 'Come si riconosce', 'Cosa cambiare'],
        rows: [
          ['Solo allungamenti', 'Settimane di allungamenti, primi passi ancora dolorosi', 'Aggiungi forza del polpaccio'],
          ['Il carico non sale mai', 'Gli stessi sollevamenti facili per mesi', 'Sali piano, mantieni il carico alto'],
          ['Smettere troppo presto', 'Migliori, smetti, il dolore torna', 'Continua con una dose più leggera'],
          ['Riacutizzazione, poi stop', 'Una brutta giornata, una settimana di pausa', 'Riduci, non mollare'],
          ['Fattori scatenanti continui', 'Turni lunghi, corse o caviglia rigida', 'Cambia il carico che puoi'],
          ['Non è fascite plantare', 'Dolore notturno, formicolio, entrambi i talloni', 'Fatti rivalutare'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Fai solo allungamenti?',
      keyFact: 'In uno studio su 48\u00A0persone, il gruppo dei sollevamenti sulle punte aveva un punteggio migliore di 29\u00A0punti sul Foot Function Index rispetto al gruppo degli allungamenti a tre mesi (Rathleff e colleghi, 2015).',
      paragraphs: [
        '**Gli allungamenti vale la pena di tenerli, ma da soli potrebbero non bastare.** La linea guida del 2023 sul dolore al tallone dà agli allungamenti della fascia plantare e del polpaccio un **grado A**, il suo più alto. Dà anche al lavoro di forza per piede e caviglia un **grado B** (Koc e colleghi, 2023). Molti programmi da fare a casa includono solo i primi.',
        'In uno studio su 48\u00A0persone, un gruppo faceva sollevamenti sulle punte lenti e con carico, con un asciugamano sotto le dita, e l’altro allungava la fascia plantare. A tre mesi, il gruppo dei sollevamenti aveva un punteggio migliore di 29\u00A0punti sul Foot Function Index. A un anno i due gruppi erano più o meno pari (Rathleff e colleghi, 2015). Quindi fare i sollevamenti al posto degli allungamenti non ha cambiato il punto d’arrivo a un anno, ma ci ha portato le persone prima.',
        'Come si riconosce: fai gli allungamenti con costanza da un mese o più, l’allungamento ti sembra più facile, ma i primi passi della giornata danno ancora un dolore acuto. Cosa cambiare: tieni gli allungamenti e aggiungi il lavoro sul polpaccio della sezione successiva. [Sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) spiega nel dettaglio la routine dello studio.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Hai mai aumentato il carico?',
      keyFact: 'In uno studio su 70\u00A0persone che hanno fatto sollevamenti sulle punte per tre mesi, solo 4 sono arrivate al punto di sentire che non serviva altro (Riel e colleghi, 2019).',
      paragraphs: [
        '**Il lavoro di forza aiuta solo se diventa più impegnativo nel tempo.** Dieci sollevamenti facili su due piedi, fatti per mesi, sono un riscaldamento, non un carico. I gradini qui sotto passano da due piedi a un piede e poi aggiungono peso. La routine dello studio era fatta di sollevamenti su una gamba con un asciugamano sotto le dita, un ritmo lento e uno zaino come peso aggiunto (Rathleff e colleghi, 2015).',
        'Come imposti il carico conta meno di quanto si pensi. Uno studio del 2019 ha dato a 70\u00A0persone o un piano di sollevamenti fisso, passo per passo, o l’indicazione di scegliere da sole serie e peso, il più pesante possibile. Entrambi i gruppi sono migliorati in misura simile. Scegliere da sé la dose non ha portato le persone a fare di più (Riel e colleghi, 2019).',
        'Lo stesso studio è un utile bagno di realtà: dopo tre mesi di sollevamenti, 44 delle 65\u00A0persone che hanno risposto dicevano di stare meglio, ma solo 4 su 70 sentivano che non serviva altro. Se a tre mesi stai meglio ma non hai finito, sei nel gruppo comune, non in quello che ha fallito.',
        'Cosa cambiare: sali di un gradino quando quello attuale ti sembra facile per due sessioni di fila e la mattina dopo non va peggio. Le schede qui sotto sono i gradini, in ordine.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Dolore acuto al tallone che resta dopo aver rilasciato l’allungamento',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo gradino non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, il muscolo più profondo del polpaccio, quasi senza carico sul tallone. Parti da qui se i sollevamenti in piedi fanno male.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo gradino non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico mentre il polpaccio si abitua al lavoro.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Tenuta sulle punte',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo gradino non è stato testato da solo.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano per restare fermi',
          how: 'Sali sulle punte con entrambi i piedi, poi resta fermo in alto. Non riabbassarti. È un gradino utile nei giorni in cui le ripetizioni in movimento sembrano troppo.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: tenuta sulle punte',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che resta ferma sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano',
          evidence: { level: 'moderate', why: 'È la routine di uno studio su 48\u00A0persone, e la linea guida del 2023 dà al lavoro di forza il grado B.' },
          dose: '4\u00A0serie da 10, ogni gamba, con peso aggiunto',
          often: 'Giorni di forza',
          feel: 'Lavoro intenso nel polpaccio',
          how: 'Stai su un piede su un gradino, con un asciugamano arrotolato sotto le dita. Prendi tre secondi per salire, tieni due secondi in alto e prendi tre secondi per scendere. A questo livello aggiungi peso, per esempio uno zaino. È l’asciugamano che fa lavorare la fascia plantare e non solo il polpaccio.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte con asciugamano',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: tre secondi su, due in alto, tre giù',
          alt: 'Una figura che sale sulle punte su un gradino con un asciugamano arrotolato, con i polpacci evidenziati',
        },
      ],
      sourceNote:
        'Riel 2019: 70\u00A0persone con fasciopatia plantare all’ecografia, sollevamenti sulle punte in piedi per tre mesi. Dolore al Foot Health Status Questionnaire: differenza media aggiustata 6,9\u00A0punti, IC 95% da meno 15,5 a più 1,7, non significativa. Migliorati secondo il Global Rating of Change: 24 su 33 (dose scelta da sé) e 20 su 32 (piano fisso). Patient Acceptable Symptom State: 3 su 35 e 1 su 35.',
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.guideline],
    },
    {
      h2: 'Hai smesso quando iniziava ad andare meglio, o dopo una riacutizzazione?',
      keyFact: 'In uno studio a lungo termine, il 31,9% delle persone rimaste senza sintomi aveva avuto prima almeno una ricaduta (Hansen e colleghi, 2018).',
      paragraphs: [
        '**Le ricadute fanno parte del percorso normale, non sono la prova che niente funziona.** Nello studio danese a lungo termine, il 31,9% delle persone che alla fine erano senza sintomi aveva avuto almeno una ricaduta prima che il dolore sparisse del tutto. Tra chi aveva ancora sintomi, il 77,5% aveva avuto a un certo punto un periodo senza dolore (Hansen e colleghi, 2018).',
        'Ne vengono fuori due quadri:',
        {
          list: [
            '**Smettere troppo presto.** Il dolore si attenua, gli esercizi spariscono, e qualche settimana dopo il tallone è di nuovo al punto di partenza. Cosa cambiare: quando le mattine vanno bene, passa a una dose di mantenimento più leggera, per esempio meno giorni di forza, invece di smettere.',
            '**Riacutizzazione, poi stop.** Una lunga giornata in piedi o un paio di scarpe nuove portano a una brutta mattina, e tu fermi tutto per una settimana. Cosa cambiare: torna indietro di un gradino nelle schede qui sopra e vai avanti. Fermarti del tutto ti fa perdere la forza che hai costruito.',
          ],
        },
        'Una regola semplice ti aiuta a distinguere una riacutizzazione da un passo indietro: un dolore durante l’esercizio fino a circa 6 su 10 va bene se si calma e la mattina dopo non va peggio. È la regola che usa Walkito. Non è stata testata come regola a sé, quindi se le mattine peggiorano di settimana in settimana, rivolgiti a un professionista sanitario.',
        'Nessuno studio ha testato per quanto tempo mantenere una dose di mantenimento dopo che la fascite plantare si è calmata. La linea guida del 2023 non fissa una data di fine per il lavoro di forza (Koc e colleghi, 2023).',
      ],
      cites: [CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Qualcosa continua a scatenarla?',
      keyFact: 'Una caviglia che si piegava di 0\u00A0gradi o meno aumentava la probabilità di fascite plantare di circa 23\u00A0volte rispetto a una caviglia che si piegava più di 10\u00A0gradi, in uno studio su 50\u00A0casi e 100\u00A0controlli (Riddle e colleghi, 2003).',
      paragraphs: [
        '**Gli esercizi possono essere superati dal carico che metti sul piede nel resto della giornata.** In uno studio appaiato su 50\u00A0persone con fascite plantare e 100 senza, una caviglia rigida era il fattore di rischio più forte: una caviglia che si piegava di 0\u00A0gradi o meno aumentava la probabilità di 23,3\u00A0volte. Un indice di massa corporea sopra 30 la aumentava di circa 5,6\u00A0volte, e passare in piedi la maggior parte della giornata di lavoro di circa 3,6\u00A0volte (Riddle e colleghi, 2003).',
        'La linea guida del 2023 elenca gli stessi fattori, più la corsa, e aggiunge che le superfici dure e poco ammortizzanti rendono più rischioso stare in piedi e camminare al lavoro (Koc e colleghi, 2023). Alcuni puoi cambiarli, altri no:',
        {
          list: [
            '**Una caviglia rigida o un polpaccio rigido.** Continua con gli allungamenti di polpaccio e soleo; [polpacci rigidi](/it/polpacci-rigidi/) ha la serie completa.',
            '**Turni lunghi su pavimenti duri.** Scarpe ammortizzate, un tappetino dove stai in piedi e pause da seduto quando puoi. Vedi [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/).',
            '**Quantità di cammino o corsa.** Riduci la distanza o il ritmo invece di fermarti. Se i primi passi della mattina dopo sono chiaramente peggiori, era troppo. Vedi [camminare con la fascite plantare](/it/camminare-con-fascite-plantare/).',
            '**Peso corporeo.** Nello studio a lungo termine il peso non era legato a quanto duravano i sintomi (Hansen e colleghi, 2018), quindi non è una questione di colpa. [Peso e fascite plantare](/it/peso-e-fascite-plantare/) spiega cosa si sa.',
          ],
        },
        'I plantari possono togliere un po’ di pressione al tallone mentre costruisci forza, ma la linea guida sconsiglia di affidarsi solo a loro per un sollievo a breve termine (**grado B**) e li ammette insieme ad altre cure (**grado C**). [Plantari o esercizi](/it/plantari-o-esercizi/) mette a confronto le due cose.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Potrebbe essere qualcosa di diverso dalla fascite plantare?',
      paragraphs: [
        '**Sì, e la linea guida dice ai professionisti di controllare quando i sintomi non si calmano.** La linea guida del 2023 sul dolore al tallone dice che i professionisti dovrebbero cercare altre diagnosi, tra cui l’artrite infiammatoria della colonna e delle articolazioni (spondiloartrite), l’assottigliamento del cuscinetto adiposo del tallone e un nodulo benigno nella fascia (fibroma plantare), quando il quadro non torna o i sintomi non si risolvono con le cure (Koc e colleghi, 2023).',
        'Una revisione del 2020 elenca altre cause di dolore sotto il tallone, tra cui un nervo intrappolato (sindrome del tunnel tarsale o nervo di Baxter), una frattura da stress dell’osso del tallone, una rottura della fascia e l’artrite infiammatoria (Latt e colleghi, 2020). Indizi che allontanano dalla fascite plantare:',
        {
          list: [
            '**Bruciore, formicolio o intorpidimento**, o un dolore che si estende all’arco o alle dita: possibile problema a un nervo.',
            '**Un dolore che aumenta man mano che cammini**, invece di attenuarsi dopo i primi passi, e che fa male quando stringi i lati del tallone: vedi [fascite plantare o frattura da stress](/it/fascite-plantare-o-frattura-da-stress/).',
            '**Dolore dietro il tallone** invece che sotto: vedi [fascite plantare o tendinite d’Achille](/it/fascite-plantare-o-tendinite-achille/).',
            '**Un dolore profondo, simile a un livido, al centro del cuscinetto del tallone**, peggiore sui pavimenti duri e a piedi nudi: vedi [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
            '**Dolore di notte o a riposo**: vedi [dolore al tallone di notte](/it/dolore-tallone-di-notte/).',
            '**Entrambi i talloni, con una lunga rigidità mattutina o altre articolazioni doloranti.** Nello studio a lungo termine, il dolore a entrambi i talloni si accompagnava a un recupero più lento, e gli autori hanno ipotizzato che potesse indicare una condizione infiammatoria non indagata (Hansen e colleghi, 2018).',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.hansen],
    },
    {
      h2: 'Cosa elenca la linea guida quando gli esercizi da soli non sono bastati?',
      keyFact: 'In uno studio su 180\u00A0persone, un’infiltrazione di cortisone aggiunta a sollevamenti sulle punte, consigli e talloniera non ha dato differenze percepibili dai pazienti in nessun momento fino a un anno (Riel e colleghi, 2023).',
      paragraphs: [
        'Queste sono opzioni da discutere con un professionista sanitario, non cose da provare a casa. Tutti i gradi vengono dalla linea guida del 2023 sul dolore al tallone, in cui **A** è la raccomandazione più forte (Koc e colleghi, 2023):',
        {
          list: [
            '**Terapia manuale** (lavoro manuale su articolazioni e tessuti molli): **A**.',
            '**Taping**, rigido o elastico, insieme ad altre cure, per un sollievo a breve termine: **A**. Vedi [taping per la fascite plantare](/it/taping-fascite-plantare/).',
            '**Tutori notturni per un periodo da uno a tre mesi**, se i primi passi continuano a fare male: **A**. Vedi [tutore notturno](/it/tutore-notturno-fascite-plantare/).',
            '**Dry needling** dei muscoli del polpaccio e del piede: **B**.',
            '**Laser a bassa intensità** come parte di un programma di riabilitazione, per il dolore a breve termine: **B**.',
            '**Plantari insieme ad altre cure**: **C**.',
          ],
        },
        'La linea guida si esprime **contro** i plantari come unica cosa da fare per un sollievo a breve termine (**B**) e contro l’aggiunta degli ultrasuoni terapeutici agli allungamenti (**A**). La versione del 2023 non dà raccomandazioni sulle onde d’urto.',
        '**Le infiltrazioni di cortisone** alleviano il dolore a breve termine in alcune persone, ma le prove a favore della loro aggiunta sono deboli. In uno studio su 180\u00A0persone, tutti hanno ricevuto consigli e una talloniera; un gruppo ha aggiunto i sollevamenti sulle punte e uno i sollevamenti più un’infiltrazione. Le differenze tra i gruppi non hanno mai raggiunto un’entità percepibile dai pazienti, in nessun momento fino a un anno (Riel e colleghi, 2023). Lo stesso studio non ha trovato un chiaro beneficio in più nemmeno dall’aggiunta dei sollevamenti, a ricordare che nessuna singola aggiunta è una cosa sicura.',
        'Una revisione del 2020 dice che a chi ha ancora dolore dopo almeno sei mesi di cure non chirurgiche si possono proporre opzioni mininvasive, come infiltrazioni o onde d’urto, o in alcuni casi la chirurgia (Latt e colleghi, 2020). Sono decisioni da prendere con uno specialista. Un fisioterapista può anche controllare di persona la tua esecuzione e il carico.',
      ],
      sourceNote:
        'Riel 2023: consigli + talloniera (n = 62), più sollevamenti sulle punte pesanti e lenti a dose scelta da sé (n = 59), più un’infiltrazione di triamcinolone guidata dall’ecografia (n = 59). Dolore al Foot Health Status Questionnaire, differenza minima rilevante 14,1\u00A0punti. Gruppo infiltrazione contro solo consigli: differenza aggiustata 9,1\u00A0punti a tre mesi (p = 0,023) e 5,2\u00A0punti nell’arco di 52\u00A0settimane (p = 0,045), sotto la differenza minima rilevante. Nessuna differenza significativa tra esercizio ed esercizio più infiltrazione, o tra consigli ed esercizio, in nessun momento.',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.latt],
    },
    {
      h2: 'Quando farti rivalutare?',
      paragraphs: [
        '**Fatti ricontrollare se qualche mese di esercizi costanti e progressivi non ha smosso il dolore del mattino, o prima se il quadro cambia.** Una revisione del 2020 dice che gli esami di imaging si riservano ai casi insoliti e a chi non risponde alle cure di prima scelta (Latt e colleghi, 2020), e la linea guida dice che i professionisti dovrebbero cercare altre diagnosi quando i sintomi non si risolvono (Koc e colleghi, 2023).',
        'Per sfruttare al meglio la visita, porta:',
        {
          list: [
            'I punteggi del dolore del mattino (primi passi, da 0 a 10) delle ultime settimane, così l’andamento è chiaro.',
            'Cosa hai fatto, quanto spesso e con quanto carico: «sollevamenti sulle punte» dice a un professionista meno di «una gamba, 4\u00A0serie da 10, con uno zaino».',
            'Cosa lo peggiora: un turno, una corsa, scarpe nuove, pavimenti a piedi nudi.',
            'Tutto ciò che non torna con la fascite plantare: dolore notturno, formicolio, entrambi i talloni, altre articolazioni doloranti.',
          ],
        },
        'Chiedi se la diagnosi è ancora quella giusta, se un esame di imaging cambierebbe qualcosa e quali delle opzioni della linea guida qui sopra fanno al caso tuo.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Perché la mia fascite plantare non migliora?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'I motivi più comuni sono un piano di soli allungamenti senza lavoro di forza sul polpaccio, un carico che non diventa mai più impegnativo, smettere quando il dolore si attenua o dopo una riacutizzazione, e il carico quotidiano come turni lunghi o corse. A volte non è fascite plantare. La linea guida del 2023 dà agli allungamenti il grado A e al lavoro di forza il grado B, quindi la maggior parte dei piani ha bisogno di entrambi.',
    },
    {
      q: 'La fascite plantare è per sempre?',
      cites: [CITE.hansen, CITE.latt],
      a: 'Di solito no. Circa il 90% delle persone migliora con le cure non chirurgiche. In un gruppo difficile da gestire di 174\u00A0persone seguite in media per 9,7\u00A0anni, il 54% non aveva più sintomi e quasi tutti gli altri avevano solo sintomi lievi. Alcune persone tengono sintomi lievi per anni, quindi se sei bloccato vale la pena farti rivalutare.',
    },
    {
      q: 'La fascite plantare cronica può ancora migliorare?',
      cites: [CITE.hansen],
      a: 'Sì. In uno studio a lungo termine, le persone continuavano a liberarsi dei sintomi ben oltre il primo anno, e il 77,5% di chi aveva ancora dolore aveva avuto a un certo punto un periodo senza dolore. Anche la fascia si assottigliava nel tempo, che le persone avessero ancora dolore o no. Lento non vuol dire bloccato per sempre.',
    },
    {
      q: 'Devo smettere con gli esercizi se il dolore al tallone si riacutizza?',
      cites: [CITE.hansen],
      a: 'Di solito non del tutto. Torna indietro di un gradino, per esempio dai sollevamenti su una gamba a quelli su due, e vai avanti. Le ricadute sono comuni: il 31,9% di chi è rimasto senza sintomi in uno studio a lungo termine ne aveva avuta almeno una prima. Rivolgiti a un professionista sanitario se le mattine continuano a peggiorare di settimana in settimana.',
    },
    {
      q: 'Bastano gli allungamenti per la fascite plantare?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Per alcune persone sì, ma aggiungere il lavoro di forza sul polpaccio può aiutare prima. La linea guida del 2023 dà agli allungamenti il grado A e al lavoro di forza il grado B. In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico hanno dato un risultato migliore degli allungamenti a tre mesi, anche se a un anno i gruppi erano più o meno pari.',
    },
    {
      q: 'Le infiltrazioni di cortisone aiutano la fascite plantare che non passa?',
      cites: [CITE.rielHeelRaiseAdd],
      a: 'Possono alleviare il dolore per un po’, ma il beneficio in più sembra piccolo. In uno studio su 180\u00A0persone, aggiungere un’infiltrazione a sollevamenti sulle punte, consigli e talloniera non ha dato differenze percepibili dai pazienti in nessun momento fino a un anno. Se fa al caso tuo lo decide il tuo medico.',
    },
    {
      q: 'Quando si prende in considerazione l’intervento per la fascite plantare?',
      cites: [CITE.latt],
      a: 'Solo dopo un lungo periodo di cure non chirurgiche. Una revisione del 2020 dice che la chirurgia si considera quando dolore e limitazioni persistono nonostante almeno sei mesi di cure non chirurgiche, e che in quella fase si possono considerare anche opzioni mininvasive come infiltrazioni o onde d’urto. È una scelta da fare insieme a uno specialista di piede e caviglia.',
    },
    {
      q: 'Il mio dolore al tallone potrebbe essere qualcosa di diverso dalla fascite plantare?',
      cites: [CITE.guideline, CITE.latt],
      a: 'Sì. La linea guida del 2023 dice ai professionisti di cercare altre cause quando i sintomi non si calmano, come un’artrite infiammatoria o l’assottigliamento del cuscinetto adiposo del tallone. Altre cause sono un nervo intrappolato e una frattura da stress del calcagno. Bruciore, formicolio, dolore notturno o un dolore che cresce camminando sono motivi per farti controllare.',
    },
    {
      q: 'I plantari aiutano se la fascite plantare non migliora?',
      cites: [CITE.guideline],
      a: 'Possono aiutare come parte di un piano più ampio. La linea guida del 2023 sconsiglia di usare i plantari come unica cura per un sollievo a breve termine (grado B) e dice che si possono usare insieme ad altre cure (grado C). Abbinali ad allungamenti e lavoro di forza sul polpaccio invece di affidarti solo a loro.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore peggiora di settimana in settimana, non resta solo uguale',
      'è iniziato dopo una caduta, un salto o uno schiocco improvviso, o non riesci a caricare il peso sul piede',
      'fa male quando stringi i lati del tallone, o aumenta man mano che cammini',
      'senti bruciore, formicolio o intorpidimento al tallone, all’arco o alle dita',
      'ti sveglia di notte o fa male a riposo',
      'fanno male entrambi i talloni con una lunga rigidità mattutina, o altre articolazioni sono doloranti o gonfie',
      'il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'hai il diabete, una sensibilità ridotta ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede. Non può dirti perché il tuo tallone è bloccato e non sostituisce il controllo di un professionista sanitario, ma copre le parti che spesso mancano: un lavoro di forza sul polpaccio che diventa più impegnativo nel tempo, e una sessione più leggera nelle mattine difficili invece di una settimana di pausa.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Ogni 14\u00A0giorni un breve test controlla forza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se le cose si muovono. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['pfDuration', 'calfRaises', 'heelPain'],
  crumb: 'Fascite plantare che non passa',
  campaign: 'guide-plantar-fasciitis-not-getting-better-it',
};
