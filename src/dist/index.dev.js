"use strict";

var _DOM = require("./DOM.js");

var _gameloop = require("./gameloop.js");

var playerBoard = document.getElementById('play-area');
var computerBoard = document.getElementById('CPU-area');
(0, _DOM.renderBoard)(playerBoard);
(0, _DOM.renderBoard)(computerBoard);