export function randomNumber(n) {
    return Math.floor(Math.random() * n)
}


export function winningBot (cords = [30,44,41, 32, 28, 23,34,64,54]) {

    return cords[Math.floor(Math.random() * cords.length)]
}
