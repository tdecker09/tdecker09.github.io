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





                    ctx.fillText(shapeObj.shapeType.toString(), 20, 20);//test


                    ctx.fillStyle = "rgb(0 100 0)";

                    for(let r = 0; r < 3; r ++) {
                        for(let c = 0; c < 3; c ++) {
                            if(shapeObj.shapeType[r][c]) {

                                //graphically put shape on the canvas
                                ctx.fillRect(50*(c+3), 50*r, 50, 50);
                                ctx.fillText(shapeObj.shapeType[r][c], 20+10*c, 100+50*r);
                                ctx.fillText(col, 50*boardRow + 20*col, 10);

                                //put shape on bard array
                                board[r][c+3] = 1;
                            }
                        }
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


        shapeType: null,
    }

    shapeObj.shapeType =  SHAPES[shapeObj.typeIndex];//array

    setup();
    drawShape();
}

window.onload = load();



