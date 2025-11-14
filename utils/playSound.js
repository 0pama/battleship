const hitSound = new  Audio('../assests/shot_hit.mp3')
const missedSound = new  Audio('../assests/shot_miss.mp3')
const firingSound = new  Audio('../assests/fire_shot.mp3')

export function playSoundEffect(type) {
    if (type === 'fire') {
        firingSound.play().catch(() => {});
        return
    }

    if (type === 'miss') {
        missedSound.play().catch(() => {});
        return
    }

    if (type === 'hit') {
        hitSound.play().catch(() => {});
        return
    }
}


