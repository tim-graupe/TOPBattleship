"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClicks = addClicks;
exports.computer = exports.human = exports.newGameBtn = void 0;

var _gameboard = _interopRequireDefault(require("../factories/gameboard.js"));

var _player = _interopRequireDefault(require("../factories/player.js"));

var _DOM = require("./DOM.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newGameBtn = document.getElementById("new-game-btn");
exports.newGameBtn = newGameBtn;
var human = (0, _player["default"])("Player");
exports.human = human;
var computer = (0, _player["default"])("Computer");
exports.computer = computer;
newGameBtn.addEventListener("click", function () {
  computer.playerBoard.placeShips();
  human.playerBoard.placeShips();
  computer.playerBoard.checkPositions();
  human.playerBoard.checkPositions();
  addClicks();
  (0, _DOM.showLocations)();
});

function addClicks() {
  var squares = document.querySelectorAll("#play-area > div");

  var _loop = function _loop(i) {
    squares[i].addEventListener("click", function () {
      computer.playerBoard.receiveAttack(squares[i].id);
      human.playerBoard.receiveAttack(computer.attack());
    });
  };

  for (var i = 0; i < squares.length; i++) {
    _loop(i);
  } //saving for when 2 player mode is added. move mySqs back to the top of this function when ready.
  // let mySqs = document.querySelectorAll("#CPU-area > div")
  //  for (let j = 0; j < mySqs.length; j++) {
  //   mySqs[j].addEventListener("click", () => {
  //     human.playerBoard.receiveAttack(mySqs[j].id);
  //
  //   });
  // }

} // let ptBt = document.getElementById("pt-boat-btn");
// ptBt.addEventListener("click", () => {
//   human.playerBoard.setVertical(human.playerBoard.ships[0]);
//   ptBt.style.display = 'none';
// })
// let sub = document.getElementById("sub-btn");
// sub.addEventListener("click", () => {
//   human.playerBoard.setVertical(human.playerBoard.ships[1]);
//   sub.style.display = 'none'
// })
// let cruiser = document.getElementById("cruiser-btn");
// cruiser.addEventListener("click", () => {
//   human.playerBoard.setHorizontal(human.playerBoard.ships[2]);
//   cruiser.style.display = 'none'
// })
// let bs = document.getElementById("battleship-btn");
// bs.addEventListener("click", () => {
//   human.playerBoard.setHorizontal(human.playerBoard.ships[3]);
//   bs.style.display = 'none'
// })
// let acc = document.getElementById("aircraft-carrier-btn");
// acc.addEventListener("click", () => {
//   human.playerBoard.setHorizontal(human.playerBoard.ships[4]);
//   acc.style.display = 'none'
// })