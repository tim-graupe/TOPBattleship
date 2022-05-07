import { renderBoard } from "./DOM.js";
import {addClicks} from "./gameloop.js"
const playerBoard = document.getElementById('play-area')
const computerBoard = document.getElementById('CPU-area')
renderBoard(playerBoard)
renderBoard(computerBoard)
