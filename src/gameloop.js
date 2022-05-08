import player from "../factories/player.js";
import { showLocations } from "./DOM.js";

const newGameBtn = document.getElementById("new-game-btn");
const human = player("Player", true);
const computer = player("Computer", false);

newGameBtn.addEventListener("click", () => {
  computer.playerBoard.checkPositions();
  human.playerBoard.checkPositions();
  console.log(computer.playerBoard.ships)
  showLocations();
  addClicks();
});

function addClicks() {
  let squares = document.querySelectorAll("#play-area > div");
  let mySqs = document.querySelectorAll("#CPU-area > div")
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      computer.playerBoard.receiveAttack(squares[i].id);
      human.playerBoard.receiveAttack(computer.attack())

    });
  }
  for (let j = 0; j < mySqs.length; j++) {
    mySqs[j].addEventListener("click", () => {
      human.playerBoard.receiveAttack(mySqs[j].id);
  
    });
  }
}

//saving for when 2 player mode is added
//  for (let j = 0; j < mySqs.length; j++) {
//   mySqs[j].addEventListener("click", () => {
//     human.playerBoard.receiveAttack(mySqs[j].id);
//
//   });
// }

export { newGameBtn, human, computer, addClicks };
