import gridFactory from "../factories/gameboard.js"
import player from "../factories/player.js"
import shipFactory from "../factories/ship.js"

let board = gridFactory().createBoard()
function renderBoard() {
     
    for (let i = 0; i < board.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.textContent = board[i]
        newDiv.setAttribute('class', 'square')
        playArea.appendChild(newDiv)
        boardPositions.push(newDiv)
    }
 }
 renderBoard()