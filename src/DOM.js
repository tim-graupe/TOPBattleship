import gridFactory from "../factories/gameboard.js"
import player from "../factories/player.js"
import shipFactory from "../factories/ship.js"


let playArea = document.getElementById('play-area')
let board = gridFactory().createBoard()
function renderBoard() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "square");
        newDiv.setAttribute("id", JSON.stringify([i, j]))
        playArea.appendChild(newDiv);
      }
    }
  }
 export {renderBoard}