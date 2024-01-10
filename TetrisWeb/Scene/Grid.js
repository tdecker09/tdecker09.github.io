let board; // array for canvas
let graphic; // ?
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

    function drawShape(shape) {
        // graphically draws shape to canvas based on location on board
        // this method is supposed to have shape object param from shapeGen class !-->

// LEFT OFF HERE: GET SHAPE OBJECT FROM SHAPEGEN CLASS, ACCESS ITS ARRAY FOR SHAPE STRUCTURE

        //go through array, add element to correct spot on game array

        //draw square at x + y coord on canvas
        //graphic.fillStyle = [color]
        //graphic.fillRect(x, y, [int], [int])


    }

    function keyPress() {

}


