import gridFactory from "../factories/gameboard.js";
import player from "../factories/player.js";
import shipFactory from "../factories/ship.js";
import { showPositions } from "./DOM.js";


const newGameBtn = document.getElementById("new-game-btn");
let playArea = document.getElementById("play-area");
let board = gridFactory().createBoard();
let gf = gridFactory();
const human = player("Player", true)
const computer = player("Computer", false)

newGameBtn.addEventListener("click", () => {

  console.log(human.playerBoard.ships)
  computer.playerBoard.checkPositions()
  addClicks()

});

function addClicks() {
  let squares = document.querySelectorAll('#play-area > div');
  let ships = gridFactory().ships
  
  for (let i = 0; i < computer.playerBoard.ships.length; i++){
    console.log(computer.playerBoard.ships[i].coords)
  }
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
                computer.playerBoard.receiveAttack(squares[i].id)

        
    });
    
  }
}



export { newGameBtn, human, computer, addClicks };
