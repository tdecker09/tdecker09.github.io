let board; // array for canvas
let graphic; // ? ctx in guide
let canvas;

//for keyboard presses
document.addEventListener('keydown', keyPress);

    function setup() {
        //create 10x20 array, piece location
        board = [];
        let rows = 10;
        let columns = 20;

        for(let r = 0; r < rows; r++) {
            board[i] = [];
            for(let c = 0; c < columns; c++) {
                board[r][c] = c;
            }
        }

        //make canvas
        canvas = document.getElementById('my-canvas');
        graphic = canvas.getContext('2d')
        //canvas.width =
        //canvas.height =



    }

    function isFilled(x, y) {
        //return true if given grid spot is occupied
        return board[x][y] === 1;
    }

    //make an individual shape object
    let shapeObj = {
        x: 3,
        y: 0,

        //randomly select a shape from SHAPES array
        typeIndex: (Math.random() * 6),

        shapeType : SHAPES[shapeObj.typeIndex],
    }

    // graphically draws shape to canvas based on location on board
    function drawShape() {

        curShape = shapeObj; //assign curShape to a shapeObj



// LEFT OFF HERE: GET SHAPE OBJECT FROM SHAPEGEN CLASS, ACCESS ITS ARRAY FOR SHAPE STRUCTURE

        //go through array, add element to correct spot on game array

        //draw square at x + y coord on canvas
        //graphic.fillStyle = [color]
        //graphic.fillRect(x, y, [int], [int])

        //start building shape in middle top of board
        let boardRow, shapeRow, col;

        for(col = 0; col < 3; col++) {
            for(shapeRow = 0; shapeRow < 3; shapeRow++) {
                boardRow = shapeRow + 3;

                board[boardRow][col] = curShape.shapeType[shapeRow][col]; //transfer shape array onto board array

                //graphically draw board
                graphic.fillStyle = "blue";
                graphic.fillRect(boardRow, col, 15, 15);
            }
        }
    }

    function keyPress() {

}

function load() {
        drawShape();
}

window.onload = load();



