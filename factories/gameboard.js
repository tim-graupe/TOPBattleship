const { showHit, showMiss, showLocations } = require("../src/DOM.js");
const shipFactory = require("./ship.js");
const gridFactory = () => {
  //TODO:
  // should be able to report whether or not all of their ships have been sunk.
  // should be able to place ships at specific coordinates by calling the ship factory function.

  //stores missed shots and attacked squares. Misses will be rnumCoordered with a white circle. Hits will be rnumCoordered with a red circle. Attacked squares will store board to avoid the same square being attacked again.
  let grid = [];
  let attackedSqs = [];
  let takenSpots = [];

  //creates game board
  // function createBoard() {
  //   for (let i = 0; i < 10; i++) {
  //     grid.push(["", "", "", "", "", "", "", "", "", ""]);
  //   }
  //   return grid;
  // };
  function createBoard() {
    for (let i = 0; i < 10; i++) {
      let subGrid = [];
      for (let j = 0; j < 10; j++) {
        subGrid.push(["", "", "", "", "", "", "", "", "", ""]);
      }
      grid.push(subGrid);
    }
    return grid;
  }

  const ships = [
    shipFactory("Patrol Boat", 2),
    shipFactory("Submarine", 3),
    shipFactory("Cruiser", 3),
    shipFactory("Destroyer", 4),
    shipFactory("Aircraft Carrier", 5),
  ];

  //Randomly places ships. Will be used for CPU player in final product and a way for the player to randomly set their board.
  function placeShips() {
    while (takenSpots.length > 0) {
      takenSpots.pop();
    }
    ships.map((ship) => {
      let setDirection = Math.floor(Math.random() * 2);
      ship.coords = [];
      if (setDirection === 0) {
        //sets to horizontal
        let doggy = 0;
        let hitpoints = ship.hitpoints;
        let letterCoord = Math.floor(Math.random() * 10);
        let numCoord = Math.floor(Math.random() * 10);
        for (let i = 0; i < hitpoints; i++) {
          if (numCoord + i > 9) {
            doggy += 1;
            ship.coords.push(JSON.stringify([letterCoord, numCoord - doggy]));
            takenSpots.push(JSON.stringify([letterCoord, numCoord - doggy]));
          } else {
            ship.coords.push(JSON.stringify([letterCoord, numCoord + i]));
            takenSpots.push(JSON.stringify([letterCoord, numCoord + i]));
          }
        }
        return ship;
      } else {
        //sets to vertical
        let doggy = 0;
        let hitpoints = ship.hitpoints;
        let letterCoord = Math.floor(Math.random() * 10);
        let numCoord = Math.floor(Math.random() * 10);
        for (let i = 0; i < hitpoints; i++) {
          if (letterCoord + i > 9) {
            doggy += 1;
            ship.coords.push(JSON.stringify([letterCoord - doggy, numCoord]));
            takenSpots.push(JSON.stringify([letterCoord - doggy, numCoord]));
          } else {
            ship.coords.push(JSON.stringify([letterCoord + i, numCoord]));
            takenSpots.push(JSON.stringify([letterCoord + i, numCoord]));
          }
        }
        return ship;
      }
    });
  }
  //Verifies there are no overlaps in any of the ship placements. If so, it runs through the function again until there are none.
  function checkPositions() {
    let findDuplicates = (arr) =>
      arr.filter((item, index) => arr.indexOf(item) != index);
    while (findDuplicates(takenSpots).length > 0) {
      placeShips();
    }
  }

  const receiveAttack = (attack) => {
    //stringifying the attack argument causes the coords.some to not match. (either something that is should be stringified isn't or vice versa)
    //replacing attack[0] and attack[1] with target[0] and target[1] causes it to miss
    if (!attackedSqs.includes(JSON.stringify(attack))) {
      let target = JSON.stringify(attack);
      attackedSqs.push(target);
      for (let i = 0; i < ships.length; i++) {
        let coords = ships[i].coords;
        if (
          coords.some((spot) => spot[1] === attack[1] && spot[3] === attack[3])
        ) {
          ships[i].hit(target);
          showHit(attack);
          gameOver();
          return;
        } else {
          showMiss(attack);
        }
      }
    }
  };

  function gameOver() {
    let allSunk = ships.every((ship) => {
      return ship.isSunk() === true;
    });
    if (allSunk) {
      alert("Game over!");
    }
  }

  function setHorizontal() {
    const horizontal = ships.map((ship) => {
      let doggy = 0;
      let hitpoints = ship.hitpoints;
      let letterCoord = Math.floor(Math.random() * 10);
      let numCoord = Math.floor(Math.random() * 10);
      for (let i = 0; i < hitpoints; i++) {
        if (numCoord + i > 9) {
          doggy += 1;
          ship.coords.push(JSON.stringify([letterCoord, numCoord - doggy]));
        } else {
          ship.coords.push(JSON.stringify([letterCoord, numCoord + i]));
        }
      }
      return ship.coords;
    });
    return horizontal;
  }

  function setVertical() {
    const vertical = ships.map((ship) => {
      let doggy = 0;
      let hitpoints = ship.hitpoints;
      let letterCoord = Math.floor(Math.random() * 10);
      let numCoord = Math.floor(Math.random() * 10);
      for (let i = 0; i < hitpoints; i++) {
        if (letterCoord + i > 9) {
          doggy += 1;
          ship.coords.push(JSON.stringify([letterCoord - doggy, numCoord]));
        } else {
          ship.coords.push(JSON.stringify([letterCoord + i, numCoord]));
        }
      }
      return ship.coords;
    });
    return vertical;
  }

  return {
    attackedSqs,
    ships,
    takenSpots,
    grid,
    createBoard,
    receiveAttack,
    placeShips,
    setHorizontal,
    setVertical,
    checkPositions,
  };
};

module.exports = gridFactory;
