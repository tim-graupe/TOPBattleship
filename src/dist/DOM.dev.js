"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderBoard = renderBoard;

var _gameboard = _interopRequireDefault(require("../factories/gameboard.js"));

var _player = _interopRequireDefault(require("../factories/player.js"));

var _ship = _interopRequireDefault(require("../factories/ship.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var playArea = document.getElementById('play-area');
var board = (0, _gameboard["default"])().createBoard();

function renderBoard() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "square");
      newDiv.setAttribute("id", JSON.stringify([i, j]));
      playArea.appendChild(newDiv);
    }
  }
}