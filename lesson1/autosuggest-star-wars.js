var endpoint = 'https://swapi.co/api/people/?search=';
var search = document.getElementById('search');
var result = document.getElementById('result');

// ---------------------------------------------------------
// UTILISER L'EVENEMENT KEYDOWN OU KEYUP SUR L'INPUT POUR DECLANCHER LA REQUETE
// 1- ajouter un écouteur sur l'input #search
// 2- déclancher la requete
// 3- récupérer le résultat (utilisation de JSON.parse)
// 4- afficher le résultat dans la DIV #result

// ---------------------------------------------------------
// TODO : UNE FOIS QUE L'AUTOSUGGEST FONCTIONNE
// 1- ajouter un timer pour ne pas harceler l'API à chaque changement (utiliser des calbacks javascript)
function debounceTime() {}

// 2- afficher une information lors chargement
var load = document.getElementById('load');
function loader() {}
