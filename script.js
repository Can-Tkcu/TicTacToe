let fields = [];
let winner;
let gameOver = false;
let currentShape = "cross";
let AUDIO_CROSS = new Audio("audio/cross.mp3");
AUDIO_CROSS.volume = 0.2;
let AUDIO_CIRCLE = new Audio("audio/circle.mp3");
AUDIO_CIRCLE.volume = 0.2;
let AUDIO_GAME_OVER = new Audio("audio/game_over.mp3");
AUDIO_GAME_OVER.volume = 0.4;

function fillShape(id) {
  if (!fields[id] && !gameOver) { // ! turns the statement to an oposite
    if (currentShape == "cross") {
      currentShape = "circle"; playerOneIsActive(); AUDIO_CIRCLE.play();
    } else {
      currentShape = "cross"; playerTwoIsActive(); AUDIO_CROSS.play();
    }
    fields[id] = currentShape;
    draw(); checkForWin();
  }
}

/**
 * prints out circle or cross depending on currentShape status
 */
function draw() { 
  for (let i = 0; i < fields.length; i++) { 
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("d-none");
    }
    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("d-none");
    }
  }
}

function checkForWin() { 
  verticalWins();
  diagonalWins();
  horizontalWins();
  ifNoWinner();
  gameIsOver();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --WIN CASES--

function horizontalWins(){
  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-0").style.transform = "scaleX(1.0)";
  }
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById("line-1").style.transform = "scaleX(1.0)";
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById("line-2").style.transform = "scaleX(1.0)";
  }
}

function verticalWins() {
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-5").style.transform = "rotate(90deg) scaleX(1.0)";
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("line-3").style.transform = "rotate(90deg) scaleX(1.0)";
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-4").style.transform = "rotate(90deg) scaleX(1.0)";
  }
}

function diagonalWins(){
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-7").style.transform = "rotate(45deg) scaleX(1.0)";
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-6").style.transform = "rotate(135deg) scaleX(1.0)";
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -Misc-

function playerOneIsActive() {
  document.getElementById("player-1").classList.add("player-inactive");
  document.getElementById("player-2").classList.remove("player-inactive");
}

function playerTwoIsActive() {
  document.getElementById("player-1").classList.remove("player-inactive");
  document.getElementById("player-2").classList.add("player-inactive");
}

function ifNoWinner(){
  if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8] && winner == undefined ) {
    gameOver = true;
    AUDIO_GAME_OVER.play();
    setTimeout(function () {
      document.getElementById("game-is-over").classList.remove("d-none");
    }, 750);
    printAllLines();
  }
}

function gameIsOver() {
  if (winner) {
    gameOver = true;
    AUDIO_GAME_OVER.play();
    setTimeout(function () {
      document.getElementById("game-is-over").classList.remove("d-none");
    }, 750);
  }
}

function printAllLines() {
    document.getElementById("line-0").style.transform = "scaleX(1.0)";
    document.getElementById("line-1").style.transform = "scaleX(1.0)";
    document.getElementById("line-2").style.transform = "scaleX(1.0)";
    document.getElementById("line-5").style.transform = "rotate(90deg) scaleX(1.0)";
    document.getElementById("line-3").style.transform = "rotate(90deg) scaleX(1.0)";
    document.getElementById("line-4").style.transform = "rotate(90deg) scaleX(1.0)";
    document.getElementById("line-7").style.transform = "rotate(45deg) scaleX(1.0)";
    document.getElementById("line-6").style.transform = "rotate(135deg) scaleX(1.0)";
}