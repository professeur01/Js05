function showWords() {
  // Un tableau contenant les mots
  const mots = ["Niger", "Niamey", "Sadore", "Codeloccol"];

  // Je Boucle avec for pour afficher chaque mot à l'écran
  for (let i = 0; i < mots.length; i++) {
    console.log(mots[i]);
  }
}

// J'appele la fontion a l'aide de console.log
showWords();

module.exports = showWords;



