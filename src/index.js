import { renderBoard } from "./DOM.js";
const playerBoard = document.getElementById('play-area')
const computerBoard = document.getElementById('CPU-area')
renderBoard(playerBoard, 0)
renderBoard(computerBoard, 1)
