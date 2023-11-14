import { GameBoard } from "./gameboard.js"

export class Player {
    constructor(type, cords) {
        this.type = type
        this.board = new GameBoard([10, 10], cords)
    }
}
// const player1 = new Player('human', [[[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3], [3, 4], [6, 4], [5, 4]]])
// console.log(player1)
// const player2 = new Player('bot', [[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3], [3, 4], [6, 4], [5, 4]])
