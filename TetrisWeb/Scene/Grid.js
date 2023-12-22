let board;

class Grid {
    constructor() {
        <!--create 10x20 array !-->
        board = [];
        let rows = 10;
        let columns = 20;

        for(let r = 0; r < rows; r++) {
            board[i] = [];
            for(let c = 0; c < columns; c++) {
                board[r][c] = c;
            }
        }
    }

    static isFilled(x, y) {
        <!-- return true if given grid spot is occupied !-->
        return board[x][y] === 1;
    }
}


