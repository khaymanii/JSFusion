
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

let keys = {};
let player = {
    x: 50,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0,
    gravity: 1,
    jumpPower: 15,
    grounded: false
};
let platforms = [
    { x: 0, y: canvas.height - 10, width: canvas.width, height: 10 },
    { x: 200, y: 300, width: 100, height: 10 },
    { x: 400, y: 250, width: 100, height: 10 },
    { x: 600, y: 200, width: 100, height: 10 }
];

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
    player.x += player.dx;

    if (player.y + player.height < canvas.height) {
        player.dy += player.gravity;
    } else {
        player.dy = 0;
        player.grounded = true;
        player.y = canvas.height - player.height;
    }

    platforms.forEach(platform => {
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y < platform.y + platform.height &&
            player.y + player.height > platform.y) {
                player.dy = 0;
                player.grounded = true;
                player.y = platform.y - player.height;
            }
    });
}

function update() {
    clear();
    drawPlayer();
    drawPlatforms();
    newPos();

    requestAnimationFrame(update);
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function jump() {
    if (player.grounded) {
        player.dy = -player.jumpPower;
        player.grounded = false;
    }
}

function keyDown(e) {
    keys[e.key] = true;

    if (keys['ArrowRight']) {
        moveRight();
    }

    if (keys['ArrowLeft']) {
        moveLeft();
    }

    if (keys['ArrowUp']) {
        jump();
    }
}

function keyUp(e) {
    keys[e.key] = false;

    if (!keys['ArrowRight'] && !keys['ArrowLeft']) {
        player.dx = 0;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

update();
