"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newGameBtn = void 0;

var _gameboard = _interopRequireDefault(require("../factories/gameboard.js"));

var _player = _interopRequireDefault(require("../factories/player.js"));

var _ship = _interopRequireDefault(require("../factories/ship.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newGameBtn = document.getElementById('new-game-btn');
exports.newGameBtn = newGameBtn;
newGameBtn.addEventListener('click', function () {
  var gf = (0, _gameboard["default"])();
  (0, _gameboard["default"])();
  gf.placeShips();
  gf.checkPositions();
  gf.createBoard();
  console.log(gf.grid);
});