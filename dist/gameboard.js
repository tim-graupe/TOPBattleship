const { once } = require("form-data");
const { showHit, showMiss, showLocations } = require("../src/DOM.js");
const shipFactory = require("./ship.js");
const gridFactory = () => {
  let grid = [];
  let attackedSqs = [];
  let takenSpots = [];

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

  //Randomly places ships for the computer. Used as an option for the player
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
  //gameOver works but it still needs to disable further attacks.
  function gameOver() {
    let allSunk = ships.every((ship) => {
      return ship.isSunk() === true;
    });
    if (allSunk) {
      alert("Game over!");
    }
  }
//
  function setHorizontal(ship) {
    let squares = document.querySelectorAll("#CPU-area > div");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", () => {
        let letterCoord = JSON.parse(squares[i].id[1]);
        let numCoord = JSON.parse(squares[i].id[3]);
        let doggy = 0;
        let hitpoints = ship.hitpoints;

        for (let j = 0; j < hitpoints; j++) {
          if (numCoord + j > 9) {
            doggy += 1;
            ship.coords.push(JSON.stringify([letterCoord, numCoord - doggy]));
            takenSpots.push(JSON.stringify([letterCoord, numCoord - doggy]));
          } else {
            ship.coords.push(JSON.stringify([letterCoord, numCoord + j]));
            takenSpots.push(JSON.stringify([letterCoord, numCoord + j]));
          }
        }
        showLocations();
      });
    }
  }

  function setVertical(ship) {
    let squares = document.querySelectorAll("#CPU-area > div");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", () => {
        let letterCoord = JSON.parse(squares[i].id[1]);
        let numCoord = JSON.parse(squares[i].id[3]);
        let doggy = 0;
        let hitpoints = ship.hitpoints;

        for (let j = 0; j < hitpoints; j++) {
          if (letterCoord + j > 9) {
            doggy += 1;
            ship.coords.push(JSON.stringify([letterCoord - doggy, numCoord]));
            takenSpots.push(JSON.stringify([letterCoord - doggy, numCoord]));
          } else {
            ship.coords.push(JSON.stringify([letterCoord + j, numCoord]));
            takenSpots.push(JSON.stringify([letterCoord + j, numCoord]));
          }
        }
        showLocations();
      });
    }
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
