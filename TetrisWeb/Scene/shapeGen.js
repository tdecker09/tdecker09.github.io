
const shape0 =
    // 0 -->
    //Stick-->
    [[0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]];

const shape1 =
    // 1 -->
    //L Right-->
   [[0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]];

const shape2 =
    <!-- 2 -->
    <!--L Left-->
   [[0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]];

const shape3 =
    // 3 -->
    // S-->
   [[0, 0, 0],
    [0, 1, 1],
    [1, 1, 0]];

const shape4 =
    // 4 -->
    // Z-->
   [[0, 0, 0],
    [1, 1, 0],
    [0, 1, 1]]

const shape5 =
    //  5 -->
    // T-->
   [[0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]]

const shape6 =
    // 6 -->
    // Square-->
   [[0, 0, 0],
    [1, 1, 0],
    [1, 1, 0]]


const SHAPES = [shape0, shape1, shape2, shape3, shape4, shape5, shape6];

let shapeTest = SHAPES[0];
//
// console.log(SHAPES[0][0][0]);
//
// for(let r = 0; r < 3; r ++) {
//     for(let c = 0; c < 3; c ++) {
//         console.log(shapeTest[r][c]);
//     }
// }
//
//
//
//
// console.log("test");
//
// // let shapeTest = SHAPES[0];
// console.log(SHAPES);
// console.log(shapeTest);