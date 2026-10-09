import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/severs.ts`, written around the German queries
 * «Morbus Sever», «Fersenschmerzen Kind», «Apophysitis calcanei». Informal
 * «du» (the page speaks to parents), terminology as in `lib/guides/de.ts`.
 * Figures, grades and qualifiers are identical to the English page. Same
 * citation keys as the English page; no new citations.
 */

export const SEVERS_DE: Guide = {
  lang: 'de',
  page: 'severs',
  mainSource: CITE.wiegerinck,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Morbus Sever: Fersenschmerzen bei Kindern und was hilft',
  description:
    'Morbus Sever verursacht Fersenschmerzen bei Kindern von 8 bis 15 Jahren. Was Studien zu Fersenschalen, Dehnen und Belastung sagen und wann zum Arzt.',
  h1: 'Morbus Sever: was es ist, was hilft und wann dein Kind zum Arzt sollte',
  lede:
    'Morbus Sever, auch Apophysitis calcanei genannt, ist die häufigste Ursache für Fersenschmerzen bei Kindern. Er entsteht, wenn die Wachstumsfuge hinten am Fersenbein durch wiederholten Zug der Achillessehne gereizt wird, meist während eines Wachstumsschubs und bei einem Sport mit viel Laufen oder Springen. Es ist keine Krankheit im üblichen Sinn. Er verschwindet von selbst, sobald sich die Wachstumsfuge schließt.',
  intro: [
    'Diese Seite ist für Eltern geschrieben. Sie erklärt, was in der Ferse passiert, was die Forschung zu Fersenschalen, Dehnen und Belastungssteuerung sagt und wann der Schmerz eine medizinische Fachperson braucht statt Ruhe. Walkito ist eine Übungs-App für Erwachsene mit Schmerzen an Ferse und Fußgewölbe. Sie ist nicht für Kinder gemacht, und nichts auf dieser Seite ist eine Empfehlung, sie mit einem Kind zu nutzen. Wenn die Fersenschmerzen deines Kindes mit den Schritten unten nicht besser werden, ist eine Kinder-Sportmedizinerin, ein Kinder-Sportmediziner oder eine Podologin bzw. ein Podologe der richtige nächste Schritt.',
  ],
  takeaways: [
    'Morbus Sever betrifft Kinder von 8 bis 15\u00A0Jahren, am häufigsten während eines Wachstumsschubs, und verschwindet, sobald sich die Wachstumsfuge des Fersenbeins schließt, meist zwischen 12 und 17\u00A0Jahren (StatPearls-Übersicht, 2024).',
    'In einer Studie mit 101\u00A0Kindern verringerten Abwarten, eine Fersenerhöhung im Schuh und angeleitete exzentrische Übungen den Fersenschmerz über drei Monate jeweils signifikant, ohne Unterschied zwischen den dreien bei der letzten Nachuntersuchung (Wiegerinck und Kollegen, 2016).',
    'In einer Crossover-Studie mit 51\u00A0Jungen verringerte eine Fersenschale den Schmerz im Vergleich zu einem Fersenkeil um etwa 80\u00A0%, gemessen auf der Borg-CR-10-Skala (Perhamre und Kollegen, 2011).',
    'Eine faktorielle Studie über 12\u00A0Monate mit 124\u00A0Kindern fand nach 2\u00A0Monaten einen relativen Vorteil von Fersenerhöhungen gegenüber vorgefertigten Einlagen, nach 12\u00A0Monaten aber keinen Vorteil für irgendeine Option (James und Kollegen, 2016).',
    'Die Wachstumsfuge erscheint meist mit 7 bis 9\u00A0Jahren und verschmilzt zwischen 15 und 17. Bis sie sich schließt, kommt der Schmerz häufig wieder, vor allem in Wachstumsschüben und Sportsaisons.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist Morbus Sever?',
      paragraphs: [
        'Morbus Sever ist eine Entzündung der Apophyse des Fersenbeins, der Wachstumsfuge hinten am Fersenbein, wo die Achillessehne ansetzt. Bei einem Kind im Wachstum besteht diese Wachstumsfuge aus Knorpel, der weicher und anfälliger für Belastung ist als der umgebende Knochen. Achillessehne und Plantarfaszie ziehen beide an diesem Bereich. Wenn ein Kind auf hartem Boden rennt, springt oder Sport treibt, wiederholen sich diese Kräfte hunderte Male pro Einheit.',
        'Während eines Wachstumsschubs kann das Fersenbein schneller wachsen als Wadenmuskeln und Achillessehne, was die Spannung auf die Wachstumsfuge erhöht. Diese Kombination aus schnellem Knochenwachstum und wiederholten Stößen verursacht die Reizung.',
        'Morbus Sever ist kein Bruch und schädigt die Wachstumsfuge nicht dauerhaft. Er gilt als Traktionsapophysitis: An der Wachstumsfuge wird gezogen, sie bricht nicht. Sobald sich die Wachstumsfuge schließt und zu festem Knochen wird, kann die Erkrankung nicht wiederkommen.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'In welchem Alter tritt er auf, und wen trifft er?',
      paragraphs: [
        'Morbus Sever betrifft Kinder zwischen etwa 8 und 15\u00A0Jahren. Die Apophyse des Fersenbeins erscheint erstmals mit etwa 7 bis 9\u00A0Jahren und verschmilzt meist zwischen 15 und 17. Jungen sind zwei- bis dreimal häufiger betroffen als Mädchen, mit einem typischen Beginn um 12\u00A0Jahre bei Jungen und 11 bei Mädchen. Etwa 60\u00A0% der Fälle betreffen beide Fersen.',
        'Er macht 2 bis 16\u00A0% der Besuche von Kindern in Sportambulanzen aus. Die Sportarten, die am stärksten damit verbunden sind, sind Fußball, Basketball, Leichtathletik, Crosslauf, Turnen und Tennis. Das Muster ist vorhersehbar: Er zeigt sich oft zu Beginn einer Sportsaison oder während eines Wachstumsschubs, wenn die Belastung der Ferse plötzlich steigt.',
        'Zu den Risikofaktoren gehören viel Laufen und Springen, verkürzte Wadenmuskeln, eingeschränkte Beweglichkeit im Sprunggelenk, ein hoher BMI, harte Spielflächen und schlecht gedämpfte Schuhe oder Stollenschuhe.',
      ],
      cites: [CITE.nietoGilSever, CITE.micheliSever, CITE.wiegerinck, CITE.jamesSever],
    },
    {
      h2: 'Wie fühlt sich Morbus Sever an?',
      paragraphs: [
        'Das Hauptsymptom ist Schmerz hinten oder an den Seiten der Ferse, meist bei oder nach Aktivität und vor allem nach Laufen oder Springen. Der Schmerz wird oft wie ein blauer Fleck beschrieben. Sichtbare Schwellungen oder Blutergüsse gibt es selten. Druck auf die Seiten der Ferse oder Zusammendrücken löst den Schmerz meist aus. Dieser Squeeze-Test ist die übliche klinische Prüfung.',
        'Anders als die Plantarfasziitis bei Erwachsenen, die bei den ersten Schritten nach einer Ruhephase am schlimmsten ist, wird der Schmerz bei Morbus Sever eher mit Aktivität schlimmer und beim Gehen nicht besser. Manche Kinder fangen an zu hinken oder auf den Zehen zu gehen, um die Ferse nicht zu belasten.',
        'Der Schmerz kann von leicht, nur beim Sport spürbar, bis so stark reichen, dass das Kind gar nicht mehr spielen kann.',
      ],
    },
    {
      h2: 'Was hilft bei Morbus Sever? Die Belege',
      keyFact: 'In einer Studie mit 101\u00A0Kindern verbesserten alle drei Ansätze den Schmerz, und die Gruppe mit Fersenerhöhung war nach sechs Wochen zufriedener, wobei der Unterschied nach drei Monaten verschwunden war (Wiegerinck und Kollegen, 2016).',
      paragraphs: [
        'Die Belege zu Morbus Sever sind spärlich, wachsen aber. Die drei wichtigsten untersuchten Möglichkeiten sind Belastungssteuerung (weniger schmerzhafte Aktivität), Fersenschalen oder Einlagen sowie Dehn- oder Kraftübungen. Alle drei haben einen Nutzen gezeigt, und für keine wurde bei der letzten Nachuntersuchung gezeigt, dass sie den anderen klar überlegen ist.',
        'In einer Studie von 2016 mit 101\u00A0Kindern im Alter von 8 bis 15\u00A0Jahren verglichen Wiegerinck und Kollegen drei Ansätze: Abwarten mit dem Rat, schmerzhafte Aktivität einzustellen, eine Fersenerhöhung im Schuh und angeleitete exzentrische Übungen. Alle drei Gruppen verbesserten sich signifikant. Nach sechs Wochen war die Gruppe mit Fersenerhöhung zufriedener als die anderen beiden. Nach drei Monaten blieb kein klinisch relevanter Unterschied zwischen den dreien.',
        'In einer weiteren faktoriellen Studie von 2016 mit 124\u00A0Kindern verglichen James und Kollegen Fersenerhöhungen mit vorgefertigten Einlagen sowie neue Schuhe mit keinen neuen Schuhen. Fersenerhöhungen hatten nach 2\u00A0Monaten im körperlichen Bereich des Oxford Ankle Foot Questionnaire einen kleinen Vorteil gegenüber vorgefertigten Einlagen. Nach 6 und 12\u00A0Monaten blieb zwischen keiner Kombination ein Unterschied.',
        'In einer Crossover-Studie mit 51\u00A0Jungen verglichen Perhamre und Kollegen eine Fersenschale von 3\u00A0mm mit einem Fersenkeil von 5\u00A0mm. Die Fersenschale verringerte den Schmerz auf der Borg-CR-10-Skala um etwa 80\u00A0%, was darauf hindeutet, dass Dämpfung und Stoßabsorption wichtiger sein könnten als ein bloßes Anheben der Ferse.',
      ],
      sourceNote:
        'Wiegerinck 2016: 101\u00A0Kinder, VAS-Schmerz in allen 3\u00A0Gruppen signifikant verbessert (p<0,005), kein Unterschied zwischen den Gruppen nach 3\u00A0Monaten. James 2016: 124\u00A0Kinder, Haupteffekt der Fersenerhöhung p=0,04 nach 1 bis 2\u00A0Monaten (nur körperlicher Bereich), kein Effekt nach 6 oder 12\u00A0Monaten. Perhamre 2011: 51\u00A0Jungen, Crossover, Fersenschale Borg CR-10 von 7 auf 2 gesenkt.',
      cites: [CITE.wiegerinck, CITE.jamesSever, CITE.perhamreHeelCup],
    },
    {
      h2: 'Belastungssteuerung und angepasste Aktivität',
      paragraphs: [
        'Belastungssteuerung ist die Grundlage bei Morbus Sever. Das heißt nicht, mit allem Sport aufzuhören. Es heißt, die Aktivitäten zu verringern, die den Schmerz auslösen, vor allem Laufen und Springen auf hartem Boden, bis der Schmerz abklingt. Die meisten Kinder können innerhalb von zwei bis acht Wochen wieder Sport machen, wenn die Belastung früh gesteuert wird.',
        'Praktische Schritte sind, Trainingseinheiten zu reduzieren statt ganz aufzuhören, Stollenschuhe auf hartem Boden möglichst zu meiden, auf gut gedämpfte Schuhe umzusteigen und die Teile des Trainings auszulassen, bei denen am meisten gelaufen und gesprungen wird. Manche Trainerinnen und Trainer lassen Kinder bei Technikübungen mitmachen, während sie bei Sprints und Konditionstraining aussetzen.',
        'Das Schwierigste an der Belastungssteuerung ist, dass Morbus Sever oft wiederkommt. Ein Kind fühlt sich vielleicht nach zwei Wochen Pause besser, kehrt voll zurück, und der Schmerz ist wieder da. Das heißt nicht, dass die erste Pause gescheitert ist. Es heißt, dass die Wachstumsfuge noch offen und noch anfällig ist. Bis zur Skelettreife ist das Wiederkommen häufig.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Helfen Fersenschalen und Einlagen bei Morbus Sever?',
      keyFact: 'Eine Crossover-Studie mit 51\u00A0Jungen fand, dass eine Fersenschale den Schmerz im Vergleich zu einem Fersenkeil um etwa 80\u00A0% senkte, was darauf hindeutet, dass Stoßabsorption wichtiger ist als der Winkel der Fersenerhöhung (Perhamre und Kollegen, 2011).',
      paragraphs: [
        'Fersenschalen gehören zu den praktischsten Maßnahmen bei Morbus Sever. Sie dämpfen die Ferse, fangen Stöße ab und verringern die Spitzenkräfte, die an der Wachstumsfuge ankommen. Die Crossover-Studie von Perhamre fand, dass eine Fersenschale den Schmerz bei 51\u00A0Jungen im Vergleich zu einem Fersenkeil um etwa 80\u00A0% verringerte, was darauf hindeutet, dass Stoßabsorption an der Ferse wichtiger ist als eine bloße Änderung des Fersenwinkels.',
        'In der faktoriellen Studie von James zeigten Fersenerhöhungen (eine Art Einlage, die die Ferse anhebt) nach 2\u00A0Monaten einen kleinen kurzfristigen Vorteil gegenüber vorgefertigten Einlagen, nach 12\u00A0Monaten aber keinen. Maßgefertigte Einlagen wurden in keiner der beiden Studien getestet.',
        'Ein vernünftiger Anfang ist eine günstige Fersenschale aus dem Handel, in beiden Schuhen und beim Sport getragen. Wenn das nicht hilft, kann eine medizinische Fachperson beurteilen, ob sich eine maßgefertigte Einlage lohnt.',
      ],
      cites: [CITE.perhamreHeelCup, CITE.jamesSever],
    },
    {
      h2: 'Hilft Wadendehnen bei Morbus Sever?',
      paragraphs: [
        'Verkürzte Wadenmuskeln verstärken den Zug an der Wachstumsfuge, und verkürzte Waden sind einer der bekannten Risikofaktoren für eine Apophysitis calcanei. Das Dehnen des Gastrocnemius (der oberflächlichere Wadenmuskel, gedehnt mit gestrecktem Knie) und des Soleus (der tiefere Wadenmuskel, gedehnt mit gebeugtem Knie) ist eine übliche Empfehlung.',
        'In der Studie von Wiegerinck machte die Übungsgruppe unter Anleitung einer Physiotherapeutin oder eines Physiotherapeuten ein exzentrisches Krafttraining für die Wade. Diese Gruppe verbesserte sich genauso stark wie die Gruppen mit Fersenerhöhung und mit Abwarten. Dehnen und sanftes Krafttraining sind sicher und helfen möglicherweise, weil sie den Zug an der Wachstumsfuge verringern, aber die Belege zeigen nicht, dass sie Fersenschalen oder Belastungssteuerung allein überlegen sind.',
        'Übungen für Kinder mit Apophysitis calcanei sollten von einer medizinischen Fachperson oder in der Physiotherapie angeleitet oder gezeigt werden. Dosis und Steigerung hängen vom Alter des Kindes, der Schmerzstärke und den Anforderungen des Sports ab. Ein Kind mit akuten Schmerzen, das hinkt, braucht zuerst Ruhe, keine Übungen.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Ist Walkito für ein Kind mit Morbus Sever geeignet?',
      paragraphs: [
        'Nein. Walkito ist eine Übungs-App für Erwachsene mit Schmerzen unter der Ferse und im Fußgewölbe. Ihre Übungsdosen, Schmerzgrenzen und Regeln zur Steigerung sind für erwachsene Körper gemacht. Die Wachstumsfuge eines Kindes ist eine grundlegend andere Struktur als das verschmolzene Fersenbein eines Erwachsenen, und die Regeln für die Belastung sind andere.',
        'Wenn eine medizinische Fachperson dein Kind freigegeben hat und du eine Anleitung für Übungen suchst, kann eine Kinder-Sportmedizinerin, ein Kinder-Sportmediziner oder eine Podologin bzw. ein Podologe ein Programm passend zu Alter und Sport des Kindes geben. Die Ratgeber für Erwachsene auf dieser Website, etwa [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/) und [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/), behandeln dieselben Muskeln, aber mit Dosen und Grenzen für Erwachsene.',
      ],
    },
    {
      h2: 'Wie lange dauert er, und kommt er wieder?',
      paragraphs: [
        'Morbus Sever klingt mit Belastungssteuerung und unterstützenden Maßnahmen meist innerhalb von Wochen bis Monaten ab. Die meisten Kinder können innerhalb von zwei bis acht Wochen wieder Sport machen. Der Schmerz verschwindet meist endgültig, sobald die Wachstumsfuge zu festem Knochen verschmilzt, meist zwischen 12 und 17\u00A0Jahren, je nach Geschlecht und Reifetempo des Kindes (StatPearls-Übersicht, 2024).',
        'Dass der Schmerz wiederkommt, ist häufig und zu erwarten. Jeder Wachstumsschub und jede neue Sportsaison kann ihn zurückbringen. Das ist kein Zeichen, dass die Maßnahmen gescheitert sind. Es ist ein Zeichen, dass die Wachstumsfuge noch offen ist. Fersenschalen, gute Schuhe und Wadendehnen während der Sportsaison weiterzuführen, kann Stärke und Häufigkeit der Schübe verringern.',
        'Mit Morbus Sever wurden keine Langzeitfolgen in Verbindung gebracht. Er schädigt die Wachstumsfuge nicht und beeinflusst die endgültige Form des Knochens nicht.',
      ],
      cites: [CITE.wiegerinck, CITE.jamesSever],
    },
  ],
  faq: [
    {
      q: 'Was ist Morbus Sever?',
      a: 'Morbus Sever, auch Apophysitis calcanei genannt, ist eine Entzündung der Wachstumsfuge hinten am Fersenbein. Er ist die häufigste Ursache für Fersenschmerzen bei Kindern von 8 bis 15\u00A0Jahren und entsteht durch wiederholten Zug der Achillessehne beim Laufen, Springen und in Wachstumsschüben. Es ist keine echte Krankheit und verschwindet, sobald sich die Wachstumsfuge schließt.',
    },
    {
      q: 'Helfen Fersenschalen bei Morbus Sever?',
      cites: [CITE.perhamreHeelCup],
      a: 'In einer Crossover-Studie mit 51\u00A0Jungen verringerte eine Fersenschale den Fersenschmerz im Vergleich zu einem Fersenkeil um etwa 80\u00A0%, gemessen auf der Borg-CR-10-Skala (Perhamre 2011). Fersenschalen dämpfen die Wachstumsfuge und fangen Stöße ab. Eine günstige Fersenschale aus dem Handel, in beiden Schuhen und beim Sport getragen, ist ein vernünftiger erster Schritt.',
    },
    {
      q: 'Muss ein Kind mit Morbus Sever mit dem Sport aufhören?',
      cites: [CITE.wiegerinck],
      a: 'Nicht unbedingt. In einer Studie mit 101\u00A0Kindern war es nach drei Monaten genauso wirksam, schmerzhafte Aktivität zu verringern, wie Ferseneinlagen oder angeleitete Übungen (Wiegerinck 2016). Die meisten Fachleute empfehlen, Laufen und Springen zu reduzieren, statt mit allem Sport aufzuhören. Technikübungen ohne wiederholte Stöße auf die Ferse sind meist sicher. Die volle Rückkehr zum Sport wird innerhalb von zwei bis acht Wochen erwartet.',
    },
    {
      q: 'Ist Morbus Sever bleibend?',
      a: 'Nein. Morbus Sever verschwindet vollständig, sobald sich die Wachstumsfuge des Fersenbeins schließt, was je nach Geschlecht und Reife zwischen 12 und 17\u00A0Jahren passiert. Langzeitfolgen wurden nicht berichtet. Solange die Wachstumsfuge offen ist, kommt der Schmerz häufig wieder, aber auch jeder dieser Schübe klingt ab.',
    },
    {
      q: 'Hilft Dehnen bei Morbus Sever?',
      cites: [CITE.wiegerinck],
      a: 'Wadendehnen ist eine übliche Empfehlung, weil verkürzte Wadenmuskeln den Zug an der Wachstumsfuge verstärken. In der Studie von Wiegerinck 2016 verbesserten angeleitete exzentrische Übungen den Schmerz genauso stark wie eine Fersenerhöhung im Schuh oder Abwarten. Dehnen hilft, aber es ist nicht belegt, dass es schneller wirkt als Belastungssteuerung oder Fersenschalen allein.',
    },
    {
      q: 'Was ist der Unterschied zwischen Morbus Sever und Plantarfasziitis?',
      a: 'Morbus Sever betrifft bei Kindern die Wachstumsfuge hinten an der Ferse, Plantarfasziitis ist eine Reizung der Plantarfaszie unter dem Fuß, meist bei Erwachsenen. Der Schmerz bei Morbus Sever sitzt meist hinten und an den Seiten der Ferse und wird mit Aktivität schlimmer. Der Schmerz bei Plantarfasziitis sitzt meist unter der Ferse und ist bei den ersten Schritten nach einer Ruhephase am stärksten. Die beiden Erkrankungen haben unterschiedliche Ursachen und werden unterschiedlich behandelt.',
    },
    {
      q: 'Kann Walkito meinem Kind mit Morbus Sever helfen?',
      a: 'Walkito ist für Erwachsene mit Schmerzen an Ferse und Fußgewölbe gemacht. Übungsdosen, Schmerzgrenzen und Regeln zur Steigerung sind für erwachsene Körper gebaut, nicht für die offene Wachstumsfuge eines Kindes. Eine Kinder-Sportmedizinerin, ein Kinder-Sportmediziner oder eine Podologin bzw. ein Podologe ist die richtige Anlaufstelle für ein Übungsprogramm für Kinder.',
    },
    {
      q: 'Was kann mit Morbus Sever verwechselt werden?',
      cites: [CITE.wiegerinck],
      a: 'Eine Reizung der Achillessehne, ein Ermüdungsbruch des Fersenbeins und eine Bursitis retrocalcanea können bei einem Kind im Wachstum ähnlich aussehen. Ein positiver Squeeze-Test (Schmerz, wenn die Seiten der Ferse zusammengedrückt werden), ein Alter von 8 bis 15\u00A0Jahren und eine kürzliche Steigerung beim Training sprechen eher für Morbus Sever. Eine einzelne Verletzung, Schwellung oder Schmerz, der an einer bestimmten Stelle schlimmer wird, sollte eine medizinische Fachperson abklären, um einen Bruch auszuschließen.',
    },
    {
      q: 'Wie tapet man Morbus Sever mit Kinesio-Tape?',
      a: 'Es gibt keine Studie, die Kinesio-Tape bei Morbus Sever getestet hat. Für kein Muster ist also belegt, dass es besser ist als Fersenschalen oder Belastungssteuerung. Manche Fachleute tapen entlang der Achillessehne und unter der Ferse, um den Zug an der Wachstumsfuge zu verringern. Wenn du es ausprobieren willst, lass das Tape von einer Physiotherapeutin, einem Physiotherapeuten oder einer Sportbetreuung anlegen und dir das Muster zeigen.',
    },
  ],
  redFlags: {
    h2: 'Geh mit deinem Kind zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz so stark ist, dass das Kind hinkt oder die Ferse nicht belasten will',
      'der Schmerz nach einer einzelnen Verletzung oder einem Sturz begann, was eher auf einen Bruch als auf eine Apophysitis hindeuten kann',
      'die Ferse sichtbar geschwollen, gerötet oder warm ist',
      'das Kind neben den Fersenschmerzen Fieber hat oder sich krank fühlt',
      'der Schmerz nach mehreren Wochen mit Belastungssteuerung, Fersenschalen und Ruhe nicht besser wird',
      'der Schmerz in Ruhe da ist oder das Kind nachts weckt, was auf etwas anderes als eine Apophysitis hindeuten kann',
      'der Schmerz an einer bestimmten Stelle sitzt und schlimmer wird, was eher auf einen Ermüdungsbruch als auf eine Reizung der Wachstumsfuge hindeuten kann',
      'zu den Fersenschmerzen Schwellungen oder Steifigkeit in anderen Gelenken kommen',
    ],
  },
  program: {
    h2: 'Ein Hinweis für Eltern, die eine App suchen',
    text: 'Walkito ist ein Übungsprogramm für Erwachsene mit Schmerzen an Ferse und Fußgewölbe. Es ist nicht für Kinder gemacht, und seine Dosen und Regeln zur Steigerung setzen ein vollständig verschmolzenes Fersenbein voraus. Wenn du als Erwachsene oder Erwachsener diese Seite liest, weil deine eigene Ferse wehtut, helfen dir vielleicht die Ratgeber für Erwachsene: [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/), [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) oder [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/). Für ein Kind ist eine medizinische Fachperson der richtige Anfang.',
  },
  crumb: 'Morbus Sever',
  campaign: 'guide-severs-de',
};
