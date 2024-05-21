// script.js

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const resetButton = document.getElementById('reset-button');
    const columns = 7;
    const rows = 6;
    let currentPlayer = 'red';
    let gameState = Array(rows).fill().map(() => Array(columns).fill(null));
    let isGameOver = false;

    const createBoard = () => {
        board.innerHTML = '';
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = row;
                cell.dataset.col = col;
                board.appendChild(cell);
            }
        }
    };

    const checkWin = (player) => {
        // Check horizontal, vertical, and diagonal connections
        const directions = [
            { x: 0, y: 1 }, // horizontal
            { x: 1, y: 0 }, // vertical
            { x: 1, y: 1 }, // diagonal down-right
            { x: 1, y: -1 } // diagonal down-left
        ];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                if (gameState[row][col] === player) {
                    for (let { x, y } of directions) {
                        if (checkDirection(row, col, x, y, player)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };

    const checkDirection = (row, col, x, y, player) => {
        for (let i = 0; i < 4; i++) {
            if (row + i * x >= rows || col + i * y >= columns || row + i * x < 0 || col + i * y < 0) {
                return false;
            }
            if (gameState[row + i * x][col + i * y] !== player) {
                return false;
            }
        }
        return true;
    };

    const handleClick = (event) => {
        if (isGameOver) return;
        const col = event.target.dataset.col;
        if (col === undefined) return;

        for (let row = rows - 1; row >= 0; row--) {
            if (!gameState[row][col]) {
                gameState[row][col] = currentPlayer;
                document.querySelector(`[data-row='${row}'][data-col='${col}']`).classList.add(currentPlayer);
                if (checkWin(currentPlayer)) {
                    isGameOver = true;
                    alert(`${currentPlayer.toUpperCase()} wins!`);
                }
                currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
                break;
            }
        }
    };

    const resetGame = () => {
        gameState = Array(rows).fill().map(() => Array(columns).fill(null));
        currentPlayer = 'red';
        isGameOver = false;
        createBoard();
    };

    board.addEventListener('click', handleClick);
    resetButton.addEventListener('click', resetGame);

    createBoard();
});

