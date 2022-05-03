const gridFactory = require("./gameboard.js");

const player = (name, turn) => {
  //generates game board for player
  const playerBoard = gridFactory();
  let cpuTurn = false;
  let playerShips = playerBoard.ships


  const attack = () => {
    let location = [];
    location[0] = Math.floor(Math.random() * 10);
    location[1] = Math.floor(Math.random() * 10);
    return location;
  };

  if (cpuTurn) {
    attack()
}


  let placeShip = playerBoard.placeShips( )
  //alternates between true and false between turns

  return {
    playerBoard,
    playerShips,
    turn,
    attack,
  };
};

module.exports = player;
