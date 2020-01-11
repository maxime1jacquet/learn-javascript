// on réutilise les fruits de la leçon 1
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
// 1- AFFICHER DANS LA CONSOLE LE 2ÈME ÉLÉMENT DU TABLEAU FRUIT ET LE 2ÈME ÉLÉMENT DE L'OBJECT

// ------------------------------------------------------------
// 2- AFFICHER GRÂCE À DES BOUCLES LES FRUITS DE L'ARRAY
// while
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
// 6- CES CONDITIONS SONT-T'ELLES VRAIES OU FAUSSE, POURQUOI ?
/*
à savoir : 

==    Egal à
!=    Différent de
===   Strictement Egal à
!==   Strictement Différent de
<     Inférieur à
<=    Inférieur ou égal à
>     Supérieur à
>=    Supérieur ou égal à

*/
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

// 7- (GRÂCE AU TERNAIRE) AFFICHER "Banana split" DANS LA CONSOLE SI LA STRING "banane" EXISTE DANS LE TABLEAU fruitsArray

// 8- FAIRE UN EXEMPLE DE SWITCHCASE
