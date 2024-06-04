const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

let player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 75,
    width: 50,
    height: 50,
    dy: 0,
    jumpForce: -15,
    gravity: 0.8
};

let keys = {};
let platforms = [];
const platformCount = 10;
const platformWidth = 100;
const platformHeight = 10;

for (let i = 0; i < platformCount; i++) {
    platforms.push({
        x: Math.random() * (canvas.width - platformWidth),
        y: canvas.height - i * 60 - platformHeight,
        width: platformWidth,
        height: platformHeight
    });
}

function drawPlayer() {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawPlatforms() {
    ctx.fillStyle = '#654321';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
    player.y += player.dy;
    player.dy += player.gravity;

    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = player.jumpForce;
    }

    platforms.forEach(platform => {
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height) {
            player.dy = player.jumpForce;
        }
    });

    if (player.y < canvas.height / 2) {
        platforms.forEach(platform => {
            platform.y -= player.dy;
            if (platform.y > canvas.height) {
                platform.y = 0;
                platform.x = Math.random() * (canvas.width - platformWidth);
            }
        });
    }
}

function update() {
    clear();
    drawPlayer();
    drawPlatforms();
    newPos();

    requestAnimationFrame(update);
}

function moveLeft() {
    player.x -= 5;
    if (player.x < 0) {
        player.x = 0;
    }
}

function moveRight() {
    player.x += 5;
    if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width;
    }
}

function keyDown(e) {
    keys[e.key] = true;

    if (keys['ArrowLeft']) {
        moveLeft();
    }

    if (keys['ArrowRight']) {
        moveRight();
    }
}

function keyUp(e) {
    keys[e.key] = false;
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

update();
