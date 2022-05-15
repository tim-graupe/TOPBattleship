const gridFactory = require("./gameboard.js");

const player = (name) => {
  const playerBoard = gridFactory();
  let playerShips = playerBoard.ships;

  //this works for now as a random attack but eventually it should be "smart" and target adjacent squares when it hits.
  const attack = () => {
    let mySqs = document.querySelectorAll("#CPU-area > div");
    let location = mySqs[Math.floor(Math.random() * mySqs.length)];
    return location.id;
  };


  return {
    playerBoard,
    playerShips,
    attack,
  };
};

module.exports = player;
