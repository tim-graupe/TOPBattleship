const gridFactory = require("./gameboard.js");

const player = (name, turn) => {
  //generates game board for player
  const playerBoard = gridFactory();
  let cpuTurn = false;
  let playerShips = playerBoard.ships;

  const attack = () => {
    let mySqs = document.querySelectorAll("#CPU-area > div")
    let location = mySqs[Math.floor(Math.random() * mySqs.length)]
   return location.id
  };

  // if (cpuTurn === true) {
  //   attack();
  // }
  let placeShip = playerBoard.placeShips();

  return {
    playerBoard,
    playerShips,
    turn,
    cpuTurn,
    attack
  };
};

module.exports = player;
