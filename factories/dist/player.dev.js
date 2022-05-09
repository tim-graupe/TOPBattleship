"use strict";

var gridFactory = require("./gameboard.js");

var player = function player(name) {
  var playerBoard = gridFactory();
  var playerShips = playerBoard.ships; //this works for now as a random attack but eventually it should be "smart" and target adjacent squares when it hits.

  var attack = function attack() {
    var mySqs = document.querySelectorAll("#CPU-area > div");
    var location = mySqs[Math.floor(Math.random() * mySqs.length)];
    return location.id;
  };

  var placeShip = playerBoard.placeShips();
  return {
    playerBoard: playerBoard,
    playerShips: playerShips,
    attack: attack
  };
};

module.exports = player;