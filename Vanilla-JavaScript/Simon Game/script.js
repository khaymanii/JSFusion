const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const startButton = document.getElementById('startButton');

const colors = [green, red, yellow, blue];
let sequence = [];
let userSequence = [];
let level = 0;

function playSound(color) {
    const audio = new Audio(`sounds/${color.id}.mp3`);
    audio.play();
}

function flash(color) {
    color.style.opacity = 1;
    setTimeout(() => color.style.opacity = 0.7, 500);
}

function nextSequence() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
    flashSequence();
}

function flashSequence() {
    let i = 0;
    const interval = setInterval(() => {
        flash(sequence[i]);
        playSound(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
        }
    }, 700);
    userSequence = [];
}

function checkSequence() {
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== sequence[i]) {
            alert('Game Over! You reached level ' + level);
            resetGame();
            return;
        }
    }
    if (userSequence.length === sequence.length) {
        level++;
        setTimeout(nextSequence, 1000);
    }
}

function resetGame() {
    sequence = [];
    userSequence = [];
    level = 0;
    startButton.disabled = false;
}

colors.forEach(color => {
    color.addEventListener('click', () => {
        userSequence.push(color);
        flash(color);
        playSound(color);
        checkSequence();
    });
});

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    nextSequence();
});
