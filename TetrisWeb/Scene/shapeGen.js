
let shape0 =
    // 0 -->
    //Stick-->
    [0, 1, 0]
    [0, 1, 0]
    [0, 1, 0];

let shape1 =
    // 1 -->
    //L Right-->
    [0, 1, 0]
    [0, 1, 0]
    [0, 1, 1];

let shape2 =
    <!-- 2 -->
    <!--L Left-->
    [0, 1, 0]
    [0, 1, 0]
    [1, 1, 0];

let shape3 =
    // 3 -->
    // S-->
    [0, 0, 0]
    [0, 1, 1]
    [1, 1, 0];

let shape4 =
    // 4 -->
    // Z-->
    [0, 0, 0]
    [1, 1, 0]
    [0, 1, 1];

let shape5 =
    //  5 -->
    // T-->
    [0, 0, 0]
    [0, 1, 0]
    [1, 1, 1];

let shape6 =
    // 6 -->
    // Square-->
    [0, 0, 0]
    [1, 1, 0]
    [1, 1, 0];


let SHAPES =  [shape0, shape1, shape2, shape3, shape4, shape5, shape6];

console.log("test");

let shapeTest = SHAPES[0];
console.log(shapeTest[0][0]);