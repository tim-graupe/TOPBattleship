const gridFactory = require("./gameboard.js");

const player = (name, turn) => {
  //generates game board for player
  const playerBoard = gridFactory();
  let cpuTurn = false;
  let playerShips = playerBoard.ships;

  const attack = () => {
    let letterCoord = Math.floor(Math.random() * 10);
    let numCoord = Math.floor(Math.random() * 10);
    let location = [letterCoord, numCoord];
    console.log("location");
  };

  if (cpuTurn === true) {
    attack();
  }

  let placeShip = playerBoard.placeShips();
  //alternates between true and false between turns

  return {
    playerBoard,
    playerShips,
    turn,
    cpuTurn,
    attack,
  };
};

module.exports = player;
