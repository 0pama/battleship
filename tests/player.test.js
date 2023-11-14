import { Player } from "../enteties/player";

describe('test Player class', () => {
    test('player init', () => {

        const player1 = new Player('human', [[[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3], [3, 4], [6, 4], [5, 4]]])
        expect(player1.type === 'human')
        const player2 = new Player('bot', [[[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3], [3, 4], [6, 4], [5, 4]]])

        expect(player2.type === 'bot')
    });
});
