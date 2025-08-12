function afficherResultat(score, nbMotsProposes){
    //ici on affiche le socre du joueur
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    // Ici tant que l'utilisateur n'a pas choisis mots ou phrase je lui redemande, sans choix il ne peut pas continuer
    let choix = prompt("Si vous voulez jouer avec les Mots entrez 'Mots' et si vous voulez jouer avec les Phrases entrez 'Phrases'")
    while (choix !== "Mots" && choix !== "Phrases"){
        choix = prompt("Veuillez choisir votre jeu entre Mots ou Phrases") 
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
        let score = 0
        for (let i = 0 ; i < listePropositions.length; i++){
        let motUtilisateur = prompt("Entrez le mot : "+ listePropositions[i])
        if (motUtilisateur === listePropositions[i]){
            score++
        }
    }
    return score
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === "Mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}
