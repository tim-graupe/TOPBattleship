"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClicks = addClicks;
exports.newGameBtn = void 0;

var _gameboard = _interopRequireDefault(require("../factories/gameboard.js"));

var _player = _interopRequireDefault(require("../factories/player.js"));

var _ship = _interopRequireDefault(require("../factories/ship.js"));

var _DOM = require("./DOM.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newGameBtn = document.getElementById("new-game-btn");
exports.newGameBtn = newGameBtn;
var playArea = document.getElementById("play-area");
var board = (0, _gameboard["default"])().createBoard();
var gf = (0, _gameboard["default"])();
newGameBtn.addEventListener("click", function () {
  (0, _gameboard["default"])();
  gf.placeShips();
  gf.checkPositions();
  gf.createBoard();
  addClicks();
});

function addClicks() {
  var squares = document.querySelectorAll("#play-area > div");
  var ships = (0, _gameboard["default"])().ships;

  for (var i = 0; i < gf.ships.length; i++) {
    console.log(gf.ships[i].coords);
  }

  var _loop = function _loop(_i) {
    squares[_i].addEventListener("click", function () {
      gf.receiveAttack(squares[_i].id);
    });
  };

  for (var _i = 0; _i < squares.length; _i++) {
    _loop(_i);
  }
}