"use strict";

var gridFactory = require("./gameboard.js");

var player = function player(name, turn) {
  //generates game board for player
  var playerBoard = gridFactory();
  var cpuTurn = false;
  var playerShips = playerBoard.ships;

  var attack = function attack() {
    var letterCoord = Math.floor(Math.random() * 10);
    var numCoord = Math.floor(Math.random() * 10);
    var location = [letterCoord, numCoord];
    console.log("location");
  };

  if (cpuTurn === true) {
    attack();
  }

  var placeShip = playerBoard.placeShips(); //alternates between true and false between turns

  return {
    playerBoard: playerBoard,
    playerShips: playerShips,
    turn: turn,
    cpuTurn: cpuTurn,
    attack: attack
  };
};

module.exports = player;