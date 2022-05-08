"use strict";

var gridFactory = require("./gameboard.js");

var player = function player(name, turn) {
  //generates game board for player
  var playerBoard = gridFactory();
  var cpuTurn = false;
  var playerShips = playerBoard.ships;

  var attack = function attack() {
    var mySqs = document.querySelectorAll("#CPU-area > div");
    var location = mySqs[Math.floor(Math.random() * mySqs.length)];
    return location.id;
  }; // if (cpuTurn === true) {
  //   attack();
  // }


  var placeShip = playerBoard.placeShips();
  return {
    playerBoard: playerBoard,
    playerShips: playerShips,
    turn: turn,
    cpuTurn: cpuTurn,
    attack: attack
  };
};

module.exports = player;