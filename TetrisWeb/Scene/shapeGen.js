let SHAPES =  [

    <!-- 0 -->
    <!--Stick-->
    [0, 1, 0,
     0, 1, 0,
     0, 1, 0],

    <!-- 1 -->
    <!--L Right-->
    [0, 1, 0,
     0, 1, 0,
     0, 1, 1],

    <!-- 2 -->
    <!--L Left-->
    [0, 1, 0,
     0, 1, 0,
     1, 1, 0],

    <!-- 3 -->
    <!--S-->
    [0, 0, 0,
     0, 1, 1,
     1, 1, 0],

    <!-- 4 -->
    <!--Z-->
    [0, 0, 0,
     1, 1, 0,
     0, 1, 1],

    <!-- 5 -->
    <!--T-->
    [0, 0, 0,
     0, 1, 0,
     1, 1, 1],

    <!-- 6 -->
    <!--Square-->
    [0, 0, 0,
     1, 1, 0,
     1, 1, 0]
]

const shape = {
    x: 5,
    y: 0,
    <!-- randomly select a shape from SHAPES array -->
    type: (Math.random() * 6),
}