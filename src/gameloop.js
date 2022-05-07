import gridFactory from "../factories/gameboard.js";
import player from "../factories/player.js";
import shipFactory from "../factories/ship.js";
import { showPositions } from "./DOM.js";


const newGameBtn = document.getElementById("new-game-btn");
let playArea = document.getElementById("play-area");
let board = gridFactory().createBoard();
let gf = gridFactory();



newGameBtn.addEventListener("click", () => {

  gridFactory();
  gf.placeShips();
  gf.checkPositions();
  gf.createBoard();
  addClicks();


});

function addClicks() {
  let squares = document.querySelectorAll(".square");
  let ships = gridFactory().ships
  
  for (let i = 0; i < gf.ships.length; i++){
    console.log(gf.ships[i].coords)
  }
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
        gf.receiveAttack(squares[i].id)
        
    });
    
  }
}



export { newGameBtn, addClicks };
