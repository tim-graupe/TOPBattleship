"use strict";

var _DOM = require("./DOM.js");

var _gameloop = require("./gameloop.js");

var player = document.getElementById('play-area');
var computer = document.getElementById('CPU-area');
(0, _DOM.renderBoard)(player);
(0, _DOM.renderBoard)(computer);