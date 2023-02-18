function displayNumber() {
  // Créer un tableau contenant les nombres de 1 à 10
  const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Boucler sur le tableau et afficher chaque nombre à l'écran
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
}

// Appeler la fonction pour afficher les nombres à l'écran
displayNumber();

module.exports = displayNumber;
