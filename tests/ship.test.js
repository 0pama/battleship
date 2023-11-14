import { Ship } from "../enteties/battleship";  

describe('Ship class test', () => {
    test('ship length and health test',() => {
        const ship1 = new Ship(5)
        expect(ship1.health).toBe(5)
        expect(ship1.length).toBe(5)
    })

    test('ship  hit and sunk test',() => {
        const ship1 = new Ship(5)
        expect(ship1.isSunk()).toBe(!true)
        ship1.hit()
        expect(ship1.isSunk()).toBe(!true)
        expect(ship1.isSunk()).toBe(!true)
        expect(ship1.isSunk()).toBe(!true)
        ship1.hit()
        expect(ship1.isSunk()).toBe(!true)
        ship1.hit()
        expect(ship1.isSunk()).toBe(!true)
        ship1.hit()
        expect(ship1.isSunk()).toBe(!true)
        expect(ship1.isSunk()).toBe(!true)
        expect(ship1.isSunk()).toBe(!true)
        expect(ship1.isSunk()).toBe(!true)
        ship1.hit()
        expect(ship1.isSunk()).toBe(true)
    })
    
    test('ship hit and health test',() => {
        const ship1 = new Ship(5)
        expect(ship1.health).toBe(5)
        ship1.hit()
        expect(ship1.health).toBe(4)
        ship1.hit()
        expect(ship1.health).toBe(3)
        ship1.hit()
        expect(ship1.health).toBe(2)
        ship1.hit()
        expect(ship1.health).toBe(1)
        ship1.hit()
        expect(ship1.health).toBe(0)
    })
})
