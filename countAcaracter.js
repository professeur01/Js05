function countAcaracter(chaineCaractere,mot) {
  
  // J'initialise le compteur à 0
  let compteur = 0;

  // Je boucle sur la chaîne et compte le nombre d'occurrences de 'a'
  for (let i = 0; i < chaineCaractere.length; i++) {

    if (chaineCaractere[i] ===  mot) {
      compteur++;
    }
  }
      return compteur
}
      const sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
    var compteur = countAcaracter(sentence,'a')
  // J'affiche le résultat avec console.log
    console.log("Le nombre d'occurrences de 'a' est : " + compteur);


module.exports = countAcaracter;





