import gridFactory from "../factories/gameboard.js";
import player from "../factories/player.js";
import shipFactory from "../factories/ship.js";

let playArea = document.getElementById("play-area");
let board = gridFactory().createBoard();
function renderBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let square = document.createElement("div");
      square.className = "square";
      square.id = JSON.stringify([i, j]);
      playArea.appendChild(square);
    }
  }
}
function showHit(square){
    let squareID = document.getElementById(square)
    squareID.style.backgroundColor = "red";
}

function showMiss(square) {
    let squareID = document.getElementById(square)
    squareID.style.backgroundColor = "black";
}


export { renderBoard, showHit, showMiss };
