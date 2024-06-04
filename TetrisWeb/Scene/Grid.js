let board; // array for canvas
let ctx; // ? ctx in guide
let canvas;
let shapeObj;
let stoppedShapes; //array for stopped shapes

let rows = 20;
let columns = 10;

function setup() {
    //create 10x20 array, piece location
    board = [];


    //array with moving shape
    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < columns; c++) {
            board[r][c] = c;
        }
    }

    stoppedShapes = [];

    //stopped shape array
    for (let r = 0; r < rows; r++) {
        stoppedShapes[r] = 0;
        for(let c = 0; c < columns; c++) {
            stoppedShapes[r][c] = 0;
        }
    }

    //make canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d")
    ctx.moveTo(0, 0)

    // printArray();
}

function isFilled(x, y) {
    //return true if given grid spot is occupied
    return board[x][y] === 1;
}

//make an individual shape object


// graphically draws shape to canvas based on location on board
function drawShape() {


    let curShape = shapeObj; //assign curShape to a shapeObj

    //start building shape in middle top of board
    let boardRow, shapeRow, col;

    for (col = 0; col < 3; col++) {
        for (shapeRow = 0; shapeRow < 3; shapeRow++) {
            boardRow = shapeRow + 3;

            board[boardRow][col] = curShape.shapeType[shapeRow][col]; //transfer shape array onto board array


            // ctx.fillStyle = "rgba(0,100,72,0.47)";
            // ctx.fillRect(50*boardRow, 50*col, 50, 50);//full box around shape


            ctx.fillText(shapeObj.typeIndex.toString(), 20, 20);//test


            ctx.fillStyle = "rgb(0 100 0)";
        }
    }
    for (let r = 0; r < 3; r++) {//shapeObj.x, y
        for (let c = 0; c < 3; c++) {
            if (shapeObj.shapeType[r][c]) {

                //graphically put shape on the canvas
                // ctx.fillText(shapeObj.shapeType[r][c], 20+10*c, 100+50*r);
                ctx.fillRect(50 * (shapeObj.x + c), 50 * (shapeObj.y + r), 50, 50);

                //put shape on board array
                board[r][c + 3] = 1;


            }
        }
    }
    // console.log(shapeObj.x);
    // console.log(shapeObj.y);

    //put dropping shape on the board array
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) { //array for board

            for (let Sr = 0; Sr < 3; Sr++) {
                for (let Sc = 0; Sc < 3; Sc++) {
                    if(board[Sr][Sc] === 1) {
                        board[r][c] = 1;
                    }
                }
            }

        }
    }
}

function deleteShape() {
    for (let x = shapeObj.x; x < shapeObj.x + 3; x++) {
        for (let y = shapeObj.y; y < shapeObj.y + 3; y++) {
            ctx.fillStyle = "rgb(211,211,211)"; //set to light grey
            ctx.fillRect(50 * x, 50 * y, 50, 50);//full box around shape

            // board[shapeObj.x][shapeObj.y] = 0;
        }
    }
}

//adds current shape to board
//checks shape type
//x, y represents upper left corner
//places shape based on shape type
function addBoard(x, y) {
    for(let sy = 0; sy <= 3; sy++) {
        for(let sx = 0; sx <= 3; sx++) {
            if(shapeObj[sy][sx] === 1) {
                board[x][y] = 1;
                x++;
            }
            y++;
        }
    }
}

function printArray () {
    let table;
    for (let r = 0; r < 10; r++) {
        table = board[r][1];
        document.getElementById("nextPiece").innerHTML = table;
    }
}

function addToArray() {

}

function VertCollision() {
    if(shapeObj.y === 20) { //if current piece reaches bottom of screen

    }
}


//return max and min x values for piece to stay in bounds
function horizCollision(x, y, n) { //returns true if collision is present

    for(let sy = y; sy <= 3; sy++) {
        for (let sx = x ; sx <= 3; sx++) {
            if (board[sx][sy] === 1) {
                if(board[sx + n][sy] === 1 || board[sx + n][sy] === 0 || board[sx + n][sy] === 10 ) {
                    return true;
                }
                return false;
            }
        }
    }
}

function keyPress(key) {
    if (key.keyCode === 37 ) { //when left arrow is pressed
        if (shapeObj.typeIndex === 0) { //straight
            console.log("test");
            if (shapeObj.x > -1) {
                deleteShape();

                shapeObj.x = shapeObj.x - 1;
                console.log(shapeObj.x + " , " + shapeObj.y);

                drawShape();
            }
        } else {
            if (shapeObj.x > 0) { //keep in bounds
                deleteShape();

                shapeObj.x = shapeObj.x - 1;
                console.log(shapeObj.x + " , " + shapeObj.y);

                drawShape();
            }

        }
    }

    if (key.keyCode === 39) { //right arrow

        if (shapeObj.typeIndex === 6 || shapeObj.typeIndex === 2 || shapeObj.typeIndex === 0) { //if shape is square (6), J (2) or straight (0)
            if (shapeObj.x < 8) { //keep in bounds
                deleteShape();

                shapeObj.x = shapeObj.x + 1;
                console.log(shapeObj.x + " , " + shapeObj.y);

                drawShape();
            }
        } else {
            if(shapeObj.x < 7) { //keep in bounds
                deleteShape();

                shapeObj.x = shapeObj.x + 1;
                console.log(shapeObj.x + " , " + shapeObj.y);

                drawShape();
            }
        }
    }

    if (key.keyCode === 40) { //down arrow
        deleteShape();

        shapeObj.y = shapeObj.y + 1;
        console.log(shapeObj.x + " , " + shapeObj.y);

        drawShape();
    }
}

//for keyboard presses
document.addEventListener('keydown', keyPress);

function load() {
    shapeObj = {
        x: 3,
        y: 0,

        //randomly select a shape from SHAPES array
        typeIndex: Math.round(Math.random() * 6),


        shapeType: null,
    }

    shapeObj.shapeType = SHAPES[shapeObj.typeIndex];//array

    setup();
    drawShape();


    // console.log(shapeObj.x);
}

window.onload = load();



