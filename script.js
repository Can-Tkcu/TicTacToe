let fields = [];
let gameOver = false;
let currentShape = "cross";

let AUDIO_CROSS = new Audio("audio/cross.mp3");
let AUDIO_CIRCLE = new Audio("audio/circle.mp3");
let AUDIO_GAME_OVER = new Audio("audio/game_over.mp3");

function fillShape(id) {
  if (!fields[id] && !gameOver) {
    // ! turns the statement to an oposite
    if (currentShape == "cross") {
      currentShape = "circle";
      document.getElementById("player-1").classList.add("player-inactive");
      document.getElementById("player-2").classList.remove("player-inactive");
      AUDIO_CIRCLE.play();
    } else {
      currentShape = "cross";
      document.getElementById("player-1").classList.remove("player-inactive");
      document.getElementById("player-2").classList.add("player-inactive");
      AUDIO_CROSS.play();
    }

    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
  }
}

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
  let winner;
  //Horizontal
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

  //Vertikal
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-5").style.transform =
      "rotate(90deg) scaleX(1.0)";
  }

  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("line-3").style.transform =
      "rotate(90deg) scaleX(1.0)";
  }

  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-4").style.transform =
      "rotate(90deg) scaleX(1.0)";
  }

  //Diagonal
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-7").style.transform =
      "rotate(45deg) scaleX(1.0)";
  }

  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-6").style.transform =
      "rotate(135deg) scaleX(1.0)";
  }

  if (winner) {
    gameOver = true;
    AUDIO_GAME_OVER.play();
    setTimeout(function () {
      document.getElementById("game-is-over").classList.remove("d-none");
    }, 750);
  }
}
