import { Player } from "../enteties/player.js";
import { openShipPlacementModal } from "./shipplacment.js";

export async function initGame() {

    const ships = await openShipPlacementModal();
    const player1 = new Player('human',ships);
    const player2 = new Player('bot',[[[3, 0], [4, 4], [4, 1], [3, 2], [2, 8], [2, 3],[3, 4], [6, 4], [5, 4]]])
    const cords = ships
    return [player1, player2,cords]
}




