import gridFactory from "../factories/gameboard.js"
import player from "../factories/player.js"
import shipFactory from "../factories/ship.js"

const newGameBtn = document.getElementById('new-game-btn');

newGameBtn.addEventListener('click', () => {

    let gf = gridFactory()
    gridFactory()
    gf.placeShips()
    gf.checkPositions()
    gf.createBoard()
    console.log(gf.grid)

})





export {newGameBtn}