const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);
context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);

const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(player.matrix, player.pos);
}   

function createMatrixw(w, h){
    const matrix = [];
    while(h--){
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}


function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = "red";
                context.fillRect(x + offset.x, y + offset.y, 1, 1)
            }
        });

    });

}

const arena = createMatrixw(12, 20);
console.log(arena);
console.table(arena);

function playerDrop() {
    player.pos.y++;
    dropCounter = 0;
}

const player = {
    pos: { x: 5, y: 5 },
    matrix: matrix,
}

dropCounter = 0;
dropInterval = 1000;


let lastTime = 0;
function update(time = 0) {
    let deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', event => {
    if (event.keyCode == 39) {
        player.pos.x++;
    }
    else if (event.keyCode == 37) {
        player.pos.x--;
    }
    else if (event.keyCode = 40) {
        playerDrop();
    }
})
update();



