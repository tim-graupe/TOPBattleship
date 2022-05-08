import gridFactory from "../factories/gameboard.js";
import player from "../factories/player.js";
import shipFactory from "../factories/ship.js";
import { showLocations } from "./DOM.js";

const newGameBtn = document.getElementById("new-game-btn");
let playArea = document.getElementById("play-area");
let board = gridFactory().createBoard();
const human = player("Player", true);
const computer = player("Computer", false);

newGameBtn.addEventListener("click", () => {
  computer.playerBoard.checkPositions();
  human.playerBoard.checkPositions()
  showLocations();
  addClicks();
});

function addClicks() {
  let squares = document.querySelectorAll("#play-area > div");
  let mySqs = document.querySelectorAll("#CPU-area > div");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      computer.playerBoard.receiveAttack(squares[i].id);
      console.log(squares[i].id)
    });
  }

}



//saving for when 2 player mode is added
//  for (let j = 0; j < mySqs.length; j++) {
//   mySqs[j].addEventListener("click", () => {
//     human.playerBoard.receiveAttack(mySqs[j].id);
//     console.log(mySqs[j].id)
//   });
// }

export { newGameBtn, human, computer, addClicks };
