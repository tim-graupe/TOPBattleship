"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderBoard = renderBoard;
exports.showHit = showHit;
exports.showMiss = showMiss;

var _gameboard = _interopRequireDefault(require("../factories/gameboard.js"));

var _player = _interopRequireDefault(require("../factories/player.js"));

var _ship = _interopRequireDefault(require("../factories/ship.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var playArea = document.getElementById("play-area");
var board = (0, _gameboard["default"])().createBoard();

function renderBoard() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      var square = document.createElement("div");
      square.className = "square";
      square.id = JSON.stringify([i, j]);
      playArea.appendChild(square);
    }
  }
}

function showHit(square) {
  var squareID = document.getElementById(square);
  squareID.style.backgroundColor = "red";
}

function showMiss(square) {
  var squareID = document.getElementById(square);
  squareID.style.backgroundColor = "black";
}