var gameContainer = document.getElementById('game');
var replay = document.getElementById('replay');
var gameStatus = [];

// 1 - CALL INIT GAME METHOD

// 2 - INIT GAME IN REPLAY BUTTON

// 3 - CREATE GRID AND RENDER IN HTML
function createGrid() {}

// 4 - CREATE INIT GAME METHODE
function initGame() {
  createGrid();
  gameStatus = [[], [], [], [], [], [], []];

  // 5 - LISTEN CLICK ON CASE TO PLAY
}

// 6 - CREATE PLAY METHODE
function play(event) {
  // 7 - DISPLAY USER JETON
  // 8 - CHECK IF USER WIN
  // 9 - CHANGE USER TOUR
}

// 10 - END GAME METHODE
function win(player) {
  alert('Le joueur ' + player + ' gagne');
}

// HELP
function checkWin(x, y, player) {
  // Horizontal
  let count = 0;
  for (let j = 0; j < 6; j++) {
    count = this.gameStatus[x][j] == player ? count + 1 : 0;
    if (count >= 4) {
      // user win
    }
  }
  // Vertical
  count = 0;
  for (let i = 0; i < 7; i++) {
    count = this.gameStatus[i][y] == player ? count + 1 : 0;
    if (count >= 4) {
      // user win
    }
  }
  // Diagonal
  count = 0;
  let shift = x - y;
  for (let i = Math.max(shift, 0); i <= Math.min(6, 7 + shift); i++) {
    count = this.gameStatus[i][i - shift] == player ? count + 1 : 0;
    if (count >= 4) {
      // user win
    }
  }
  // Anti-diagonal
  count = 0;
  shift = x + y;
  for (let i = Math.max(shift - 7 + 1, 0); i < Math.min(6, shift + 1); i++) {
    count = this.gameStatus[i][shift - i] == player ? count + 1 : 0;
    if (count >= 4) {
      // user win
    }
  }
}
