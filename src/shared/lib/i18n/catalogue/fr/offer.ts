/**
 * Offer, in French — the paywall and the session player.
 *
 * `tu` throughout, as a coach speaks. "Bienvenu(e)" is avoided in the restore
 * celebration because it forces a gender onto somebody the app has never
 * asked; adjectives about the user are avoided for the same reason.
 *
 * Nothing here is a price. Every amount arrives as `{price}` or `{perWeek}`,
 * already formatted for the user's storefront — see the note in `../en/offer.ts`.
 *
 * The `many` plural form is left out everywhere: in French it is the
 * whole-millions form, and no count on these screens reaches a million.
 */
export const OFFER_FR = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  'offer.featurePlanTitle': 'Ton plan, pas un modèle',
  'offer.featurePlanBlurb': 'Construit à partir de tes réponses, et reconstruit quand elles changent.',
  'offer.featureAdaptiveTitle': 'Des séances qui s’adaptent',
  'offer.featureAdaptiveBlurb': 'Chaque séance tient compte de la façon dont la précédente s’est passée.',
  'offer.featureProgressTitle': 'Des progrès visibles',
  'offer.featureProgressBlurb': 'Regarde ta forme monter semaine après semaine.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  'offer.comebackBadge': 'Prix de retour',
  'offer.inviteBadge': 'Ton prix d’invitation',
  'offer.headline': 'Débloque Walkito Premium',
  'offer.headlineInvite': 'Ton prix d’invitation sur un an de Walkito Premium',
  'offer.headlineComeback': 'Ton prix de retour sur un an de Walkito Premium',
  'offer.sub': 'Ton plan, et tout ce qui va avec.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Annuel',
  'offer.annualPrice': '{price} par an',
  'offer.annualNote': '{perWeek} par semaine, facturé chaque année',
  'offer.annualNoteSave': '{perWeek} par semaine · {percent} % d’économie par rapport à l’hebdo',
  'offer.weeklyTitle': 'Hebdomadaire',
  'offer.weeklyPrice': '{price} par semaine',
  'offer.weeklyNote': 'Facturé chaque semaine · Annule quand tu veux',
  'offer.badgeBest': 'Meilleur choix',
  'offer.badgeOff': '-{percent} %',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} par an, renouvelé automatiquement. Annule quand tu veux.',
  'offer.ctaWeekly': '{price} par semaine, renouvelé automatiquement. Annule quand tu veux.',
  'offer.termsIncluded':
    'Walkito Premium te donne un accès complet : ton plan adaptatif, toutes les séances et routines, les retests et le suivi de tes progrès.',
  'offer.termsAnnual': 'Abonnement annuel : {price} par an.',
  'offer.termsWeekly': 'Abonnement hebdomadaire : {price} par semaine.',
  'offer.termsRenewal':
    'Le paiement est débité de ton compte Apple à la confirmation de l’achat. L’abonnement se renouvelle automatiquement pour la même durée et au même prix, sauf annulation au moins 24 heures avant la fin de la période en cours ; le renouvellement est facturé dans les 24 heures précédant cette fin. Gère ou annule ton abonnement dans Réglages → Compte Apple → Abonnements.',
  'offer.termsRenewalAndroid':
    'Le paiement est débité de ton compte Google Play à la confirmation de l’achat. L’abonnement se renouvelle automatiquement pour la même durée et au même prix, sauf annulation au moins 24 heures avant la fin de la période en cours. Gère ou annule ton abonnement dans Google Play → Paiements et abonnements → Abonnements.',
  'offer.linkTerms': 'Conditions d’utilisation',
  'offer.linkPrivacy': 'Politique de confidentialité',
  'offer.restore': 'Restaurer les achats',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Cette formule n’est pas disponible pour le moment. Essaie l’autre.',
  'offer.storeUnreachable': 'Impossible de joindre la boutique pour le moment. Réessaie dans un instant.',
  'offer.nothingRestored': 'Aucun achat précédent trouvé.',
  'offer.restoreFailed': 'Ça n’a pas abouti. Aucun montant n’a été débité.',
  'offer.purchaseFailed': 'Ça n’a pas abouti. Aucun montant n’a été débité.',
  'offer.purchaseNotAllowed': 'Les achats sont désactivés sur cet appareil.',
  'offer.alreadyOwned': 'Tu l’as déjà. Touche « Restaurer les achats ».',
  'offer.pending': 'En attente d’approbation. Tu auras accès dès que ce sera validé.',
  'offer.notUnlocked': 'Le paiement est passé, mais l’accès ne s’est pas débloqué. Touche « Restaurer les achats ».',
  'offer.continue': 'Continuer',
  'offer.processing': 'En cours…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'C’est parti.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb':
    'Ton plan est débloqué, et il commence à s’adapter dès ta prochaine séance.',
  'offer.restoredTitle': 'Content de te revoir.',
  'offer.restoredBlurb': 'Ton abonnement est de nouveau actif. Tout est là où tu l’as laissé.',
  'offer.start': 'Commencer',

  'offer.stepA11y': 'Étape {step} sur {total}',
  'offer.next': 'Suivant',
  'offer.introTitle': 'Voici comment ton plan commence',
  'offer.introTitleNamed': '{name}, voici comment ton plan commence',
  // Under the title: the goal they picked in onboarding, quoted back as theirs.
  'offer.introWhy': '« {why} »',
  'offer.introTodayWhen': 'Aujourd’hui',
  'offer.introTodayTitle': { one: 'Un test de {count} minute', other: 'Un test de {count} minutes' },
  'offer.introTodayBody': 'Mollets, voûte et équilibre. Ton plan part de ces chiffres.',
  'offer.introWeekWhen': 'Cette semaine',
  'offer.introWeekTitle': 'Un démarrage en douceur',
  'offer.introWeekBody': {
    one: '{minutes} min par jour, {count} jour par semaine. La force commence la semaine prochaine.',
    other: '{minutes} min par jour, {count} jours par semaine. La force commence la semaine prochaine.',
  },
  'offer.introSundayWhen': 'Chaque dimanche',
  'offer.introSundayTitle': 'Une nouvelle semaine, construite sur la précédente',
  'offer.introSundayBody': 'Plus facile si c’était dur, un peu plus si c’était facile.',
  'offer.introCheckTitle': 'Ton premier point sur tes progrès',
  'offer.introCheckBody': 'Le même test, à nouveau. Vois ce qui a changé, puis l’étape suivante.',
  'offer.howTitle': 'Quelques minutes par jour. Voici comment ça marche.',
  'offer.howCheckinTitle': 'Fais ton bilan chaque matin',
  'offer.howCheckinBody': 'Dix secondes sur l’état de tes pieds. La journée s’ajuste en fonction.',
  'offer.howSessionTitle': 'Fais la séance du jour',
  'offer.howSessionBody': 'De 3 à 10 minutes. Ça ne devient plus dur que si la précédente était facile.',
  'offer.howTestTitle': 'Un retest toutes les deux semaines',
  'offer.howTestBody': 'Mollets, voûte et équilibre, mesurés. Regarde les chiffres bouger.',
  'offer.howQuote': '« Les exercices qui aident sont bien connus. Personne ne te dit lesquels, ni combien. C’est donc ce que nous avons fait. »',
  'offer.howQuoteBy': 'Rahim, qui fait Walkito avec son ami Rahman',
  'offer.startTitle': 'Commence ton plan aujourd’hui',
  'offer.startSub': 'Ta première semaine est prête. Elle commence par un court test.',
  'offer.chipWeekly': 'Ton plan de la semaine',
  'offer.chipSessions': 'Des séances courtes',
  'offer.chipTests': 'Un test toutes les deux semaines',
  'offer.chipRoutines': 'Routines pour les poussées et la course',
  'offer.chipReminders': 'Rappels',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Ton abonnement est terminé',
  'widgets.sessionLockedBody':
    'Tout ce que tu as noté est toujours là, à consulter. Pour reprendre les séances, reprends là où tu en étais.',
  'widgets.sessionLockedCta': 'Voir tes options',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Ton objectif',
  'widgets.retestGoal.painfree': 'Tu es là pour des matins qui ne commencent pas par une douleur au talon. Ces chiffres, c’est le pied qui s’en rapproche.',
  'widgets.retestGoal.race': 'Tu prépares une course. Un mollet plus fort et un pied plus stable, c’est ce qui te mène à la ligne de départ.',
  'widgets.retestGoal.consistent': 'Ton objectif, c’était la régularité. Voilà ce que ça donne, à force de venir.',
  'widgets.retestGoal.stronger': 'Tu voulais gagner en force. C’est ici que ça se voit en premier.',
  'widgets.retestGoal.injuryfree': 'Tu voulais éviter les blessures. Un pied qui se mesure plus fort est plus difficile à blesser.',

  'widgets.retestGoal.flatfeet': 'Tu es là pour tes pieds plats. Le maintien de la voûte et un équilibre plus stable, c’est là que le travail se voit.',
  'widgets.retestGoal.ankles': 'Tu voulais des chevilles plus stables. C’est dans l’équilibre que ça se voit en premier.',
  'widgets.retestGoal.jump': 'Tu voulais sauter plus haut. Un mollet plus fort, c’est le ressort derrière.',
  'widgets.retestGoal.allday': 'Tu voulais tenir la journée debout. Ce sont les muscles qui soutiennent ta voûte que tu entraînes ici.',
  'widgets.retestGoal.comeback': 'Tu reviens d’une blessure. L’écart entre tes deux jambes est le chiffre à suivre.',
  'widgets.retestGoal.steady': 'Tu voulais marcher avec assurance. L’équilibre et un pied fort, c’est ce qui la donne.',
  // ── Session player: the counter line ─────────────────────────────────────
  // Un mot par phase : lu à deux mètres, et il change toutes les trois secondes.
  'widgets.phaseUp': 'Monte',
  'widgets.phaseHold': 'Tiens',
  'widgets.phaseDown': 'Descends',
  'widgets.sideRight': 'Pied droit',
  'widgets.sideLeft': 'Pied gauche',

  'widgets.sessionRepLine': '{phase} · Rép. {rep} sur {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Rép. {rep} sur {reps}',
  'widgets.sessionRepSpoken': '{phase}, répétition {rep} sur {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, répétition {rep} sur {reps}',
  'widgets.sessionPositionShort': 'Exercice {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Exercice {index}/{total}',
  'widgets.sessionPositionLong': 'Exercice {index} sur {total}',
  'widgets.sessionPositionLongSided': '{side}. Exercice {index} sur {total}',
  'widgets.sessionDone': 'Terminé.',
  'widgets.sessionDoneSpoken': 'Terminé',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'La vidéo ne s’est pas chargée. Les consignes restent valables.',
  'widgets.lockScreenHint': 'Verrouille ton téléphone - le minuteur continue',
  'widgets.expandDemo': 'Agrandir la démonstration',
  'widgets.collapseDemo': 'Réduire la démonstration',
  'widgets.sessionContinue': 'Continuer',
  'widgets.sessionFinish': 'Terminer',
  'widgets.scrubberPrevious': 'Exercice précédent',
  'widgets.scrubberNext': 'Exercice suivant',
  'widgets.scrubberPlay': 'Lecture',
  'widgets.scrubberPause': 'Pause',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Beau travail.',
  'widgets.sessionStoppedTitle': 'On s’arrête là.',
  'widgets.sessionStoppedBlurb': 'Ça compte quand même comme la séance du jour. Demain reprend un cran en dessous.',

  // ── Session player: "it hurts" ───────────────────────────────────────────
  'widgets.painButton': 'J’ai mal',
  'widgets.painTitle': 'À quel point, là maintenant ?',
  'widgets.painCarryOn': 'Continue doucement. Arrête si ça augmente.',
  'widgets.painPick': 'Touche un chiffre pour voir la suite.',
  'widgets.painLowHint': 'Une légère gêne est normale dans ce travail. La séance reprend là où tu l’as mise en pause - vas-y doucement, et touche à nouveau le pansement si ça augmente.',
  'widgets.painHighHint': 'C’est trop pour continuer à s’entraîner. On termine la séance ici - elle compte pour aujourd’hui - et le plan de demain sera un cran plus léger.',
  'widgets.painResume': 'Continuer doucement',
  'widgets.painEnd': 'Terminer la séance',
  'widgets.painCancel': 'Annuler',
  'widgets.painClose': 'Fermer',
  'widgets.sessionDoneStreak': {
    one: '{count} jour d’affilée',
    other: '{count} jours d’affilée',
  },
  'widgets.sessionDoneBlurb': {
    one: '{count} exercice fait. Peu mais souvent, c’est ce qui fait avancer.',
    other: 'Les {count} exercices sont faits. Peu mais souvent, c’est ce qui fait avancer.',
  },
};
