"use strict";

var gridFactory = require("./gameboard.js");

var player = function player(name, turn) {
  //generates game board for player
  var playerBoard = gridFactory();
  var cpuTurn = false;
  var playerShips = playerBoard.ships;

  var attack = function attack() {
    var location = [];
    location[0] = Math.floor(Math.random() * 10);
    location[1] = Math.floor(Math.random() * 10);
    return location;
  };

  if (cpuTurn) {
    attack();
  }

  var placeShip = playerBoard.placeShips(); //alternates between true and false between turns

  return {
    playerBoard: playerBoard,
    playerShips: playerShips,
    turn: turn,
    attack: attack
  };
};

module.exports = player;