"use strict";

var _require = require("form-data"),
    once = _require.once;

var _require2 = require("../src/DOM.js"),
    showHit = _require2.showHit,
    showMiss = _require2.showMiss,
    showLocations = _require2.showLocations;

var shipFactory = require("./ship.js");

var gridFactory = function gridFactory() {
  var grid = [];
  var attackedSqs = [];
  var takenSpots = [];

  function createBoard() {
    for (var i = 0; i < 10; i++) {
      var subGrid = [];

      for (var j = 0; j < 10; j++) {
        subGrid.push(["", "", "", "", "", "", "", "", "", ""]);
      }

      grid.push(subGrid);
    }

    return grid;
  }

  var ships = [shipFactory("Patrol Boat", 2), shipFactory("Submarine", 3), shipFactory("Cruiser", 3), shipFactory("Destroyer", 4), shipFactory("Aircraft Carrier", 5)]; //Randomly places ships for the computer. Used as an option for the player

  function placeShips() {
    while (takenSpots.length > 0) {
      takenSpots.pop();
    }

    ships.map(function (ship) {
      var setDirection = Math.floor(Math.random() * 2);
      ship.coords = [];

      if (setDirection === 0) {
        //sets to horizontal
        var doggy = 0;
        var hitpoints = ship.hitpoints;
        var letterCoord = Math.floor(Math.random() * 10);
        var numCoord = Math.floor(Math.random() * 10);

        for (var i = 0; i < hitpoints; i++) {
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
        var _doggy = 0;
        var _hitpoints = ship.hitpoints;

        var _letterCoord = Math.floor(Math.random() * 10);

        var _numCoord = Math.floor(Math.random() * 10);

        for (var _i = 0; _i < _hitpoints; _i++) {
          if (_letterCoord + _i > 9) {
            _doggy += 1;
            ship.coords.push(JSON.stringify([_letterCoord - _doggy, _numCoord]));
            takenSpots.push(JSON.stringify([_letterCoord - _doggy, _numCoord]));
          } else {
            ship.coords.push(JSON.stringify([_letterCoord + _i, _numCoord]));
            takenSpots.push(JSON.stringify([_letterCoord + _i, _numCoord]));
          }
        }

        return ship;
      }
    });
  } //Verifies there are no overlaps in any of the ship placements. If so, it runs through the function again until there are none.


  function checkPositions() {
    var findDuplicates = function findDuplicates(arr) {
      return arr.filter(function (item, index) {
        return arr.indexOf(item) != index;
      });
    };

    while (findDuplicates(takenSpots).length > 0) {
      placeShips();
    }
  }

  var receiveAttack = function receiveAttack(attack) {
    if (!attackedSqs.includes(JSON.stringify(attack))) {
      var target = JSON.stringify(attack);
      attackedSqs.push(target);

      for (var i = 0; i < ships.length; i++) {
        var coords = ships[i].coords;

        if (coords.some(function (spot) {
          return spot[1] === attack[1] && spot[3] === attack[3];
        })) {
          ships[i].hit(target);
          showHit(attack);
          gameOver();
          return;
        } else {
          showMiss(attack);
        }
      }
    }
  }; //gameOver works but it still needs to disable further attacks.


  function gameOver() {
    var allSunk = ships.every(function (ship) {
      return ship.isSunk() === true;
    });

    if (allSunk) {
      alert("Game over!");
    }
  } // function setHorizontal(ship) {
  //   console.log(ship.name)
  //   let squares = document.querySelectorAll("#CPU-area > div");
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].addEventListener("click", () => {
  //       let letterCoord = JSON.parse(squares[i].id[1]);
  //       let numCoord = JSON.parse(squares[i].id[3]);
  //       let doggy = 0;
  //       let hitpoints = ship.hitpoints;
  //       for (let j = 0; j < hitpoints; j++) {
  //         if (numCoord + j > 9) {
  //           doggy += 1;
  //           ship.coords.push(JSON.stringify([letterCoord, numCoord - doggy]));
  //           takenSpots.push(JSON.stringify([letterCoord, numCoord - doggy]));
  //         } else {
  //           ship.coords.push(JSON.stringify([letterCoord, numCoord + j]));
  //           takenSpots.push(JSON.stringify([letterCoord, numCoord + j]));
  //         }
  //       }
  //       showLocations();
  //     }, {once: true});
  //   }
  // }
  // function setVertical(ship) {
  //   console.log(ship.name)
  //   let squares = document.querySelectorAll("#CPU-area > div");
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].addEventListener("click", () => {
  //       let letterCoord = JSON.parse(squares[i].id[1]);
  //       let numCoord = JSON.parse(squares[i].id[3]);
  //       let doggy = 0;
  //       let hitpoints = ship.hitpoints;
  //       for (let j = 0; j < hitpoints; j++) {
  //         if (letterCoord + j > 9) {
  //           doggy += 1;
  //           ship.coords.push(JSON.stringify([letterCoord - doggy, numCoord]));
  //           takenSpots.push(JSON.stringify([letterCoord - doggy, numCoord]));
  //         } else {
  //           ship.coords.push(JSON.stringify([letterCoord + j, numCoord]));
  //           takenSpots.push(JSON.stringify([letterCoord + j, numCoord]));
  //         }
  //       }
  //       showLocations();
  //       console.log(ship.coords + ship.name)
  //     }, {once: true});
  //   }
  // }


  return {
    attackedSqs: attackedSqs,
    ships: ships,
    takenSpots: takenSpots,
    grid: grid,
    createBoard: createBoard,
    receiveAttack: receiveAttack,
    placeShips: placeShips,
    // setHorizontal,
    // setVertical,
    checkPositions: checkPositions
  };
};

module.exports = gridFactory;