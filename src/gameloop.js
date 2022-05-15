import gridFactory from "../factories/gameboard.js";
import player from "../factories/player.js";
import { showLocations } from "./DOM.js";

const newGameBtn = document.getElementById("new-game-btn");
const human = player("Player");
const computer = player("Computer");

newGameBtn.addEventListener("click", () => {
  computer.playerBoard.placeShips();
  human.playerBoard.placeShips();

  computer.playerBoard.checkPositions();
  human.playerBoard.checkPositions();
  addClicks();
  showLocations();

});

function addClicks() {
  let squares = document.querySelectorAll("#play-area > div");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
       computer.playerBoard.receiveAttack(squares[i].id);
        human.playerBoard.receiveAttack(computer.attack());
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


  // let ptBt = document.getElementById("pt-boat-btn");
  // ptBt.addEventListener("click", () => {
  //   human.playerBoard.setVertical(human.playerBoard.ships[0]);
  //   ptBt.style.display = 'none';

  // })


  // let sub = document.getElementById("sub-btn");
  // sub.addEventListener("click", () => {
  //   human.playerBoard.setVertical(human.playerBoard.ships[1]);
  //   sub.style.display = 'none'
  // })


  // let cruiser = document.getElementById("cruiser-btn");
  // cruiser.addEventListener("click", () => {
  //   human.playerBoard.setHorizontal(human.playerBoard.ships[2]);
  //   cruiser.style.display = 'none'
  // })

  // let bs = document.getElementById("battleship-btn");
  // bs.addEventListener("click", () => {
  //   human.playerBoard.setHorizontal(human.playerBoard.ships[3]);
  //   bs.style.display = 'none'
  // })

  // let acc = document.getElementById("aircraft-carrier-btn");
  // acc.addEventListener("click", () => {
  //   human.playerBoard.setHorizontal(human.playerBoard.ships[4]);
  //   acc.style.display = 'none'
  // })

export { newGameBtn, human, computer, addClicks}
