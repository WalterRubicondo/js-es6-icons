$(document).ready(function () {
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikes = [
  {
  nome: "RIDLEY FENIX C",
  peso: 9.1,
  },
  {
  nome: "SERIOUS VALPAROLA",
  peso: 10.85,
  },
  {
  nome: "FELT FR 30 DISC",
  peso: 9.2,
  },
  {
  nome: "BIANCHI ARIA",
  peso: 8.4,
  },
  {
  nome: "CERVÉLO C2 DISC",
  peso: 8.5,
  },
]

let pesoMin = bikes[0].peso;

// Usiamo il forEach
bikes.forEach((item, i) => {
  if (item.peso < pesoMin) {
    pesoMin = item.peso;
  }
});

let biciLeggera = bikes.filter((item) => item.peso == pesoMin)

console.log(biciLeggera);

console.log(`La bici più leggera è ${biciLeggera[0].nome} e il peso è di ${biciLeggera[0].peso} Kg`);

$("#bici").append(`La bici più leggera è ${biciLeggera[0].nome} e il peso è di ${biciLeggera[0].peso} Kg`)

})
