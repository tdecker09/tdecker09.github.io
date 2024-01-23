let board; // array for canvas
let ctx; // ? ctx in guide
let canvas;
let shapeObj;

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


        let curShape = shapeObj; //assign curShape to a shapeObj



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

                //if statement -> if index is true put a square

                ctx.fillStyle = "rgba(0,100,72,0.47)";
                ctx.fillRect(50*boardRow, 50*col, 50, 50);

                var test = true;
                // if(board[shapeRow][col] === 1) {


                    ctx.fillText(col, 300, 20);
                    ctx.fillText(shapeObj.typeIndex.toString(), 20, 20);//test


                    ctx.fillStyle = "rgb(0 100 0)";


                    ctx.fillRect(50*boardRow, 50*col, 50, 50);

                    ctx.fillText(col, 50*boardRow + 20*col, 10);

                    // let c = 0;
                    // for(let r = 0; r < 9; r++) {
                    //     if(r > 3) {
                    //         c = 1;
                    //
                    //         if(r > 6) {
                    //             c = 2
                    //         }
                    //     }
                    //     ctx.fillText(, r * 20, 200 + (20* c))
                    //}

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
        // typeIndex: Math.round(Math.random() * 6),
        typeIndex: 0,


        shapeType: null,
    }

    shapeObj.shapeType =  SHAPES[2];//array

    setup();
    drawShape();
}

window.onload = load();



