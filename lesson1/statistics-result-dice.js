// ici on récupère les élements HTML
var start = document.getElementById('start');

start.addEventListener('click', function() {
  resultLancer = initResult();
  var nbLancer = document.getElementById('jeu').value;

  if (nbLancer > 0) {
    for (var i = 1; i <= nbLancer; i++) {
      var random = getRandom();
      resultLancer[random] = resultLancer[random] + 1;
    }
  }

  displayResult(resultLancer, nbLancer);
});

function getRandom() {
  return Math.ceil(Math.random() * 6) - 1;
}

function initResult() {
  return [0, 0, 0, 0, 0, 0];
}

function displayResult(resultLancer, nbLancer) {
  for (let i = 1; i < 7; i++) {
    var el = document.getElementById('col' + i);
    el.innerText = '';
    var nb = resultLancer[i - 1];
    var pourcent = (nb / nbLancer) * 100;
    el.style.height = pourcent + '%';

    if (nb > 0) {
      if (i === 1) {
        el.innerText = 'paco';
      } else {
        el.innerText = i;
      }
    }

    if (i === 1) {
      el.innerText = ' paco - ' + nb;
    } else {
      el.innerText = i + ' - ' + nb;
    }
  }
}
