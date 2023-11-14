import { Ship } from "./battleship.js"

export class GameBoard {
    constructor(boardGridSize=[10, 10],cords=[]) {
        this.boardSize = boardGridSize
        this.board = new Array(boardGridSize[0] * boardGridSize[1]).fill(false)
        if(cords.length > 0) {
        this.placeShips(cords)
        }

    }
    placeShips(cords) {
        const ships = cords.map(x => { return { ship: new Ship(x.length), shipscord: x } })
        for (let i = 0; i < ships.length; i++) {
            const ship = ships[i]
            for (const cord of ship.shipscord) {
                const y = cord[0].toString()
                const x = cord[1].toString()
                const index = parseInt(y + x)
                this.board[index] = ship.ship

            }
        }

    }
    recieveAttack(cordinate) {
        const index = parseInt(cordinate)
        if(this.board[index] === true) {
            return
        } else if(this.board[index] === false) {
            this.board[index] = true
            return false
        }
        this.board[index].hit()
        return true

    }
}

// const board = new GameBoard()
// console.log(board.board)
