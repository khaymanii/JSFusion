document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.getElementById("puzzle-container");
    let tiles = [];
    const size = 4; // 4x4 grid

    function initializePuzzle() {
        let numbers = Array.from(Array(size * size).keys());
        numbers.sort(() => Math.random() - 0.5);

        puzzleContainer.innerHTML = "";
        tiles = [];

        for (let i = 0; i < numbers.length; i++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            if (numbers[i] === 0) {
                tile.classList.add("empty");
            } else {
                tile.textContent = numbers[i];
            }
            tiles.push(tile);
            puzzleContainer.appendChild(tile);
            tile.addEventListener("click", () => moveTile(i));
        }
    }

    function moveTile(index) {
        const emptyIndex = tiles.findIndex(tile => tile.classList.contains("empty"));
        if (isValidMove(index, emptyIndex)) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            puzzleContainer.insertBefore(tiles[index], puzzleContainer.children[emptyIndex]);
            puzzleContainer.insertBefore(tiles[emptyIndex], puzzleContainer.children[index]);

            if (isSolved()) {
                setTimeout(() => {
                    alert("Congratulations! You solved the puzzle!");
                    initializePuzzle();
                }, 100);
            }
        }
    }

    function isValidMove(index, emptyIndex) {
        const row = Math.floor(index / size);
        const emptyRow = Math.floor(emptyIndex / size);
        const col = index % size;
        const emptyCol = emptyIndex % size;

        return (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
               (col === emptyCol && Math.abs(row - emptyRow) === 1);
    }

    function isSolved() {
        for (let i = 0; i < tiles.length - 1; i++) {
            if (tiles[i].textContent != i + 1) {
                return false;
            }
        }
        return true;
    }

    initializePuzzle();
});
