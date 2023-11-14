export class Ship {
    constructor(length) {
        this.length = length 
        this.sunk = false
        this.health = length
    }

    hit() {
        this.health--
    }
    isSunk() {
        return this.health <= 0
    }

}
