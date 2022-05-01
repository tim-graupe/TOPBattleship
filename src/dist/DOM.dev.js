"use strict";

var _gameboard = _interopRequireDefault(require("../factories/gameboard.js"));

var _player = _interopRequireDefault(require("../factories/player.js"));

var _ship = _interopRequireDefault(require("../factories/ship.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var board = (0, _gameboard["default"])().createBoard();

function renderBoard() {
  for (var i = 0; i < board.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.textContent = board[i];
    newDiv.setAttribute('class', 'square');
    playArea.appendChild(newDiv);
    boardPositions.push(newDiv);
  }
}

renderBoard();