function average() {
  // Créer un tableau contenant les notes
  const notes = [20, 12, 8, 9];
  
  // J'initialise la somme des notes à 0
  let sommeNotes = 0;

  // Je creer une Boucle for sur le tableau pour ajouter chaque note à la somme
  for (let i = 0; i < notes.length; i++) {
    sommeNotes += notes[i];
  }

  // Je Calcule la moyenne
  const moyenne = sommeNotes / notes.length;

  console.log(moyenne);
}
      average();
      
module.exports = average;





















/*function calculerMoyenne() {
  // Créer un tableau contenant les notes
  const notes = [20, 12, 8, 9];
  
  // Calculer la somme des notes
  const sommeNotes = notes.reduce((total, note) => total + note, 0);

  // Calculer la moyenne
  const moyenne = sommeNotes / notes.length;

  // Afficher la moyenne à l'écran
  console.log(moyenne);
}

// Appeler la fonction pour calculer et afficher la moyenne
calculerMoyenne();*/













/*function average(){
    const notes = [20, 12, 8, 9];
    nombreElement = notes.length;
    var sum = 0;
    for(let i =0; i < nombreElement; i++){
      sum = sum + notes[i];
      moyenne = sum / nombreElement;
    }
    return moyenne;
  };
  console.log(average());

  module.exports = average;*/
  
  










module.exports = average