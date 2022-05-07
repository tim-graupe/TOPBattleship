import { renderBoard } from "./DOM.js";
import {addClicks} from "./gameloop.js"
const player = document.getElementById('play-area')
const computer = document.getElementById('CPU-area')
renderBoard(player)
renderBoard(computer)
