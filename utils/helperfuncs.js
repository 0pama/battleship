export function randomNumber(n) {
    return Math.floor(Math.random() * n)
}


const seen = new Set(); 

export function winningBot(cords = [30, 44, 41, 32, 28, 23, 34, 64, 54]) {
    const available = cords.filter(c => !seen.has(c));
    
    if (available.length === 0) {
        return -1;
    }

    // Pick a random one from available
    const choice = available[Math.floor(Math.random() * available.length)];

    // Mark it as seen
    seen.add(choice);

    return choice;
}
