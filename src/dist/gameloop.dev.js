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
var human = (0, _player["default"])("Player", true);
exports.human = human;
var computer = (0, _player["default"])("Computer", false);
exports.computer = computer;
newGameBtn.addEventListener("click", function () {
  computer.playerBoard.checkPositions();
  human.playerBoard.checkPositions();
  console.log(computer.playerBoard.ships);
  (0, _DOM.showLocations)();
  addClicks();
});

function addClicks() {
  var squares = document.querySelectorAll("#play-area > div");
  var mySqs = document.querySelectorAll("#CPU-area > div");

  var _loop = function _loop(i) {
    squares[i].addEventListener("click", function () {
      computer.playerBoard.receiveAttack(squares[i].id);
      human.playerBoard.receiveAttack(computer.attack());
    });
  };

  for (var i = 0; i < squares.length; i++) {
    _loop(i);
  }
} //saving for when 2 player mode is added
//  for (let j = 0; j < mySqs.length; j++) {
//   mySqs[j].addEventListener("click", () => {
//     human.playerBoard.receiveAttack(mySqs[j].id);
//
//   });
// }