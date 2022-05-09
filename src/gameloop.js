import gridFactory from "../factories/gameboard.js";
import player from "../factories/player.js";
import { showLocations } from "./DOM.js";

const newGameBtn = document.getElementById("new-game-btn");
const human = player("Player");
const computer = player("Computer");

newGameBtn.addEventListener("click", () => {

  computer.playerBoard.checkPositions();
  human.playerBoard.checkPositions();
  addClicks();
  // showLocations();
  //commenting out showLocations until I get work out the DOM functions for displaying player ships

});

function addClicks() {
  let squares = document.querySelectorAll("#play-area > div");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      computer.playerBoard.receiveAttack(squares[i].id);
      human.playerBoard.receiveAttack(computer.attack())

    });
  }
  //saving for when 2 player mode is added. move mySqs back to the top of this function when ready.
  // let mySqs = document.querySelectorAll("#CPU-area > div")

//  for (let j = 0; j < mySqs.length; j++) {
//   mySqs[j].addEventListener("click", () => {
//     human.playerBoard.receiveAttack(mySqs[j].id);
//
//   });
// }

}


export { newGameBtn, human, computer, addClicks };
