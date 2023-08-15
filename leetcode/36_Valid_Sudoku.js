var isValidSudoku = function(board) {
    let rowSeen  = new Set();
    let colSeen  = new Set();
    let subSeen  = new Set();
    for(let row=0;row<9;row++){
        rowSeen.clear();
        for(let col=0;col<9;col++){
            let num = board[row][col];
            if(num != '.'){
                if(rowSeen.has(num)){
                    return false;
                } else {
                    rowSeen.add(num);
                }
            }
        }
    }
    for(let col=0;col<9;col++){
        colSeen.clear();
        for(let row=0;row<9;row++){
            let num = board[row][col];
            if(num!='.'){
                if(colSeen.has(num)){
                    return false;
                } else {
                    colSeen.add(num);
                }
            }
        }
    }
    for(let row=0;row<9;row+=3){
        for(let col=0;col<9;col+=3){
            subSeen.clear();
            for(let subRow=row;subRow<row+3;subRow++){
                for(let subCol=col;subCol<col+3;subCol++){
                    let num = board[subRow][subCol];
                    if(num !='.'){
                        if(subSeen.has(num)){
                            return false;
                        } else {
                            subSeen.add(num);
                        }
                    }
                }
            }
        }
    }
    return true;
};



let board1=[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let board2=[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];


console.log(isValidSudoku(board1));
console.log(isValidSudoku(board2));