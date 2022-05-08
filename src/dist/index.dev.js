"use strict";

var _DOM = require("./DOM.js");

var playerBoard = document.getElementById('play-area');
var computerBoard = document.getElementById('CPU-area');
(0, _DOM.renderBoard)(playerBoard, 0);
(0, _DOM.renderBoard)(computerBoard, 1);