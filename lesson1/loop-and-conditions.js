// on réutilise les fruits
var fruitsArray = ['pomme', 'banane', 'fraise', 'clémentine'];
var fruitsObject = {
  pomme: 'Tarte aux pommmes',
  banane: 'Banana split',
  fraise: 'Fraise à la chantilly',
  clementine: 'Salade de fruits'
};

// ---------------------------------------------------------
// ------------------- LES BOUCLES -------------------------
// ---------------------------------------------------------

// ------------------------------------------------------------
// 1- AFFICHER DANS LA CONSOLE LE 2 ÈME ÉLÉMENT DU TABLEAU & LE 2 ÈME ÉLÉMENT DE L'OBJECT

// ------------------------------------------------------------
// 2- AFFICHER GRÂCE À DES BOUCLES LES FRUITS DE L'ARRAY
// white
// for
// for of
// foreach

// ------------------------------------------------------------
// 3- AFFICHER GRÂCE À LA BOUCLE LES FRUITS DE L'OBJECT
//for in

// ------------------------------------------------------------
// 4- ESSAYER D'UTILISER LES BOUCLES DE L'ARRAY POUR L'OBJECT ET INVERSEMENT

// ------------------------------------------------------------
// 5- POURQUOI CELA NE MARCHE PAS ?

// ---------------------------------------------------------
// ----------------- LES CONDITIONS ------------------------
// ---------------------------------------------------------

// ------------------------------------------------------------
// 6- CES CONDITIONS SONT-T'ILS VRAI OU FAUSSE, POURQUOI ?

if (true) {
}
if (!false) {
}
if (false === false) {
}
if (fruitsObject && fruitsObject.pomme) {
}
if (fruitsObject && fruitsObject.poire) {
}
if (true === 1) {
}
if (true == 1) {
}
if (false == 0) {
}
if (1) {
}
if (!0) {
}
if (12 == '12') {
}
if (12 === '12') {
}
if ('ceci est une string de test') {
}
if (undefined === undefined) {
}
if (undefined) {
}
if (returnBoolean()) {
}

function returnBoolean() {
  return Math.round(Math.random()) === 1 ? true : false;
}

// ------------------------------------------------------------
// Le ternaire : c'est un racourci pour ecrire une condition
// on peut ecrire une condition de 2 manières exemple

// 1
var maCondition = true; // or false
var resultat = 'je ne sais pas';
if (maCondition) {
  var resultat = 'condition est vrai !';
} else {
  var resultat = 'condition est fausse !';
}

// 2 la syntaxe est simple c'est une question d'habitude
var resultat = maCondition ? 'condition est vrai !' : 'condition est fausse !';

// 7- (GRÂCE AU TERNAIRE) AFFICHER "BANANA SPLIT" DANS LA CONSOLE SI LA STRING "BANANE" EXISTE DANS LE TABLEAU fruitsArray

// 8- FAIRE UN EXEMPLE DE SWITCHCASE
