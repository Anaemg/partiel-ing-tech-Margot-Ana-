class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
      this.marque = marque;
      this.modele = modele;
      this.longueur = longueur;
      this.nbPlace = nbPlace;
      this.reservoir = reservoir;
      this.vitesse = vitesse;
    }
  }
  
    get marque() {
      return this._marque;
    }
  
    set marque(nouvelleMarque) {
      this._marque = nouvelleMarque;
    }
  
    get modele() {
      return this._modele;
    }
  
    set modele(nouveauModele) {
      this._modele = nouveauModele;
    }
  
    get longueur() {
      return this._longueur;
    }
  
    set longueur(nouvelleLongueur) {
      this._longueur = nouvelleLongueur;
    }

    get nbPlace() {
      return this._nbPlace;
    }
  
    set nbPlace(nouveauNbPlace) {
      this._nbPlace = nouveauNbPlace;
    }
  
    get reservoir() {
      return this._reservoir;
    }
  
    set reservoir(nouveauReservoir) {
      this._reservoir = nouveauReservoir;
    }
  
    get vitesse() {
      return this._vitesse;
    }
  
    set vitesse(nouvelleVitesse) {
      this._vitesse = nouvelleVitesse;
    }
  }
  
  const avions = [];

const avion1 = new Avion("Bombardier", "CRJ900", 36, 90, 21200, 890);
const avion2 = new Avion("Airbus", "A380", 73, 853, 124000, 945);
const avion3 = new Avion("Embraer", "E190", 36, 100, 24000, 890);
const avion4 = new Avion("Boeing", "747", 70, 416, 65000, 920);
const avion5 = new Avion("Embraer", "E190", 36, 100, 24000, 890);
avions.push(avion1, avion2, avion3, avion4, avion5);

console.log("Marques des avions :");
for (const avion of avions) {
  console.log(avion.marque);

  function sommeNbPlaces(avions) {
    let total = 0;
    for (const avion of avions) {
      total += avion.nbPlace;
    }
    return total;
  }
  
  const avions = [
    new Avion("Boeing", "747", 70, 416, 65000, 920),
    new Avion("Airbus", "A380", 73, 853, 124000, 945),
    new Avion("Embraer", "E190", 36, 100, 24000, 890),
    new Avion("Bombardier", "CRJ900", 36, 90, 21200, 890),
    new Avion("Cessna", "172", 8, 4, 212, 120)
  ];
  
  const totalNbPlaces = sommeNbPlaces(avions);
  console.log("Nombre total de places dans les avions : " + totalNbPlaces);