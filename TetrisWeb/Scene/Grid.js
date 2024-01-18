let board; // array for canvas
var ctx; // ? ctx in guide
var canvas;
var shapeObj;

//for keyboard presses
document.addEventListener('keydown', keyPress);

    function setup() {
        //create 10x20 array, piece location
        board = [];
        let rows = 10;
        let columns = 20;

        for(let r = 0; r < rows; r++) {
            board[r] = [];
            for(let c = 0; c < columns; c++) {
                board[r][c] = c;
            }
        }

        //make canvas
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext("2d")
        ctx.moveTo(0,0)



    }

    function isFilled(x, y) {
        //return true if given grid spot is occupied
        return board[x][y] === 1;
    }

    //make an individual shape object



    // graphically draws shape to canvas based on location on board
    function drawShape() {


        var curShape = shapeObj; //assign curShape to a shapeObj



// LEFT OFF HERE: GET SHAPE OBJECT FROM SHAPEGEN CLASS, ACCESS ITS ARRAY FOR SHAPE STRUCTURE

        //go through array, add element to correct spot on game array

        //draw square at x + y coord on canvas
        //graphic.fillStyle = [color]
        //graphic.fillRect(x, y, [int], [int])

        //start building shape in middle top of board
        var boardRow, shapeRow, col;
    ctx.fillText(shapeObj.shapeType, 20, 20);
        for(col = 0; col < 3; col++) {
            for(shapeRow = 0; shapeRow < 3; shapeRow++) {
                boardRow = shapeRow + 3;

                board[boardRow][col] = curShape.shapeType[shapeRow][col]; //transfer shape array onto board array

                //graphically draw board
                ctx.fillStyle = "blue";
                //if statement -> if index is true put a square

                var test = true;
                if(board[boardRow][col] === 1) {
                    ctx.fillStyle = "rgb(200 0 0)";
                    ctx.fillRect(50*boardRow, 50*col, 50, 50);
                }

            }
        }
    }

    function keyPress() {

}

function load() {
    shapeObj = {
        x: 3,
        y: 0,

        //randomly select a shape from SHAPES array
        typeIndex: Math.round(Math.random() * 6),

        shapeType : null,
    }

    shapeObj.shapeType = SHAPES[shapeObj.typeIndex];
        setup();
        drawShape();
}

window.onload = load();



