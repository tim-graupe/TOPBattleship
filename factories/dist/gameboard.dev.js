"use strict";

var shipFactory = require("./ship.js");

var gridFactory = function gridFactory() {
  //TODO:
  // should be able to report whether or not all of their ships have been sunk.
  // should be able to place ships at specific coordinates by calling the ship factory function.
  //stores missed shots and attacked squares. Misses will be rnumCoordered with a white circle. Hits will be rnumCoordered with a red circle. Attacked squares will store board to avoid the same square being attacked again.
  var grid = [];
  var misses = [];
  var attackedSqs = [];
  var takenSpots = []; //creates game board
  // function createBoard() {
  //   for (let i = 0; i < 10; i++) {
  //     grid.push(["", "", "", "", "", "", "", "", "", ""]);
  //   }
  //   return grid;
  // };

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

  var ships = [shipFactory("Patrol Boat", 2), shipFactory("Submarine", 3), shipFactory("Cruiser", 3), shipFactory("Destroyer", 4), shipFactory("Aircraft Carrier", 5)]; //Randomly places ships. Will be used for CPU player in final product and a way for the player to randomly set their board.

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
    //stringifying the attack argument causes the coords.some to not match. (either something that is should be stringified isn't or vice versa)
    //replacing attack[0] and attack[1] with target[0] and target[1] causes it to miss
    if (!attackedSqs.includes(JSON.stringify(attack))) {
      var target = JSON.stringify(attack);
      attackedSqs.push(target);
      ships.forEach(function (ship) {
        var coords = ship.coords;

        if (coords.some(function (spot) {
          return spot[0] === attack[0] && spot[1] === attack[1];
        })) {
          ship.hit(target);
        } else {
          misses.push(target);
        }
      });
    }
  };

  function setHorizontal() {
    var horizontal = ships.map(function (ship) {
      var doggy = 0;
      var hitpoints = ship.hitpoints;
      var letterCoord = Math.floor(Math.random() * 10);
      var numCoord = Math.floor(Math.random() * 10);

      for (var i = 0; i < hitpoints; i++) {
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
    var vertical = ships.map(function (ship) {
      var doggy = 0;
      var hitpoints = ship.hitpoints;
      var letterCoord = Math.floor(Math.random() * 10);
      var numCoord = Math.floor(Math.random() * 10);

      for (var i = 0; i < hitpoints; i++) {
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
    misses: misses,
    attackedSqs: attackedSqs,
    ships: ships,
    takenSpots: takenSpots,
    grid: grid,
    createBoard: createBoard,
    receiveAttack: receiveAttack,
    placeShips: placeShips,
    setHorizontal: setHorizontal,
    setVertical: setVertical,
    checkPositions: checkPositions
  };
};

module.exports = gridFactory;