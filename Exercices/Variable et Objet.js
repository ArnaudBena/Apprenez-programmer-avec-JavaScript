let ticket = {
    nomFilm:"Pokemon",
    prix:"5 euros",
    numeroSalle:"1",
}

let nom = "Arnaud"

let texteAffichage = "Bonjour"
texteAffichage += nom
texteAffichage += ", votre film"
texteAffichage += ticket.nomFilm
texteAffichage += " est en salle"
texteAffichage += ticket.numeroSalle

console.log(texteAffichage)

// Corrigé :
// Pour aller plus vite on peut écrire de cette manière : let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle

