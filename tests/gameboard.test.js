import { GameBoard } from "../enteties/gameboard";

describe('gameBoard class test', () => {
    test('test gameBoard init', () => {
        let board = new GameBoard()
        expect(board.board.length).toBe(100)
        board = new GameBoard([20,20])
        expect(board.board.length).toBe(400)
        board = new GameBoard([30,20])
        expect(board.board.length).toBe(600)
    })
    test('test ship placement', () => {

        const board = new GameBoard()
        const ship1 = [[1, 0], [1, 1], [2, 0]]
        const ship2 = [[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3],[3, 4], [6, 4], [5, 4]]

        board.placeShips([ship1,ship2])
        expect(board.board[10].length).toBe(ship1.length)
        expect(board.board[11].length).toBe(ship1.length)
        expect(board.board[20].length).toBe(ship1.length)


        expect(board.board[30].length).toBe(ship2.length)
        expect(board.board[44].length).toBe(ship2.length)
        expect(board.board[41].length).toBe(ship2.length)
        expect(board.board[32].length).toBe(ship2.length)
        expect(board.board[28].length).toBe(ship2.length)
        expect(board.board[23].length).toBe(ship2.length)
        expect(board.board[34].length).toBe(ship2.length)
        expect(board.board[64].length).toBe(ship2.length)
        expect(board.board[54].length).toBe(ship2.length)
    })
    test('test board recieve attack', () => {

        let board = new GameBoard()

        const ship1 = [[1, 0], [1, 1], [2, 0]]
        const ship2 = [[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3],[3, 4], [6, 4], [5, 4]]
        board.placeShips([ship1,ship2])

        board.recieveAttack('23')
        board.recieveAttack('23')
        board.recieveAttack('23')
        board.recieveAttack('23')
        expect(board.board[23].health).toBe(ship2.length -4)

        board.recieveAttack('23')
        board.recieveAttack('23')

        expect(board.board[23].health).toBe(ship2.length -6)

        board.recieveAttack('44')
        expect(board.board[23].health).toBe(ship2.length -7)
        expect(board.board[44].health).toBe(ship2.length -7)

         
        expect(board.board[10].health).toBe(ship1.length)
        board.recieveAttack('10')
        board.recieveAttack('10')
        expect(board.board[10].isSunk()).toBe(false)
        board.recieveAttack('10')

        expect(board.board[10].isSunk()).toBe(true)


    })
    //TODO: test safe guard aggainst ship positioning that doesn't make sense 
    //
    // test('', () => {
    //
    //     const board = new GameBoard()
    // })
    // test('', () => {
    //
    //     const board = new GameBoard()
    // })
    // test('', () => {
    //
    //     const board = new GameBoard()
    // })
});
