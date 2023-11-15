export function openShipPlacementModal() {
    return new Promise(resolve => {
        const modal = document.createElement("div");
        modal.className = "ship-modal";
        modal.innerHTML = `
            <div class="ship-modal-content">
                <h2>Place your ships</h2>
                <div id="placementGrid" class="placement-grid"></div>
                <button id="finishPlacement" disabled>Finish</button>
            </div>
        `;
        document.body.appendChild(modal);

        const grid = modal.querySelector("#placementGrid");
        const finishBtn = modal.querySelector("#finishPlacement");

        const shipsToPlace = [4,3,3,2,2,2,1];
        let currentShip = 0;
        let horizontal = true;
        const board = Array.from({ length: 10 }, () => Array(10).fill(false));
        const placedShips = [];

        // Build grid
        for (let i = 0; i < 100; i++) {
            const div = document.createElement("div");
            div.className = "placement-cell";

            const x = i % 10;
            const y = Math.floor(i / 10);

            div.oncontextmenu = e => {
                e.preventDefault();
                horizontal = !horizontal;
            };

            div.onclick = () => {
                placeShip(x, y);
            };

            grid.appendChild(div);
        }

        function canPlace(x, y, len, horiz) {
            for (let i = 0; i < len; i++) {
                const nx = x + (horiz ? i : 0);
                const ny = y + (horiz ? 0 : i);

                if (nx > 9 || ny > 9) return false;
                if (board[ny][nx]) return false;
            }
            return true;
        }

        function placeShip(x, y) {
            const len = shipsToPlace[currentShip];
            if (!canPlace(x, y, len, horizontal)) return;

            const coords = [];
            for (let i = 0; i < len; i++) {
                const nx = x + (horizontal ? i : 0);
                const ny = y + (horizontal ? 0 : i);

                board[ny][nx] = true;
                coords.push([nx, ny]);

                const cell = grid.children[ny * 10 + nx];
                cell.classList.add("ship-piece");
            }

            placedShips.push(coords);
            currentShip++;

            if (currentShip === shipsToPlace.length) {
                finishBtn.disabled = false;
            }
        }

        finishBtn.onclick = () => {
            modal.remove();
            resolve(placedShips);
        };
    });
}
