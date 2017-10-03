function createMatrix(w, h){
    const matrix2 = [];
    while(h--){
    matrix2.push(Array(w).fill(0))
    }
}
createMatrix(5, 7)
/*
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);


const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0]
];

function draw(){
    context.fillStyle = `peachpuff`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset){
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = "red";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        })
    })
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0){
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime
    if(dropCounter > dropInterval) {
        player.pos.y++;
        dropCounter = 0;
    }
    draw();
    requestAnimationFrame(update);
}

function playerDrop(){
    player.pos.y++;
    dropCounter = 0;
}
const player = {
    pos : {x:5, y:5},
    matrix : matrix
}

document.addEventListener('keydown', fire =>{
    if(fire.keyCode == 40){
         playerDrop();
    }

    if(fire.keyCode == 39){
        player.pos.x++;
    }

    if(fire.keyCode == 37){
        player.pos.x--;
    }
    
});


function createMatrixw(w, h){
    const matrix = [];
    

}

update();
*/

/*
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

*/