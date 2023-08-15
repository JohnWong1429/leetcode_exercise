var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = 0;
    let col = cols -1;
    let val;
    while(row<rows&& col >=0){
        val = matrix[row][col]
        if(val == target) return true;
        else if(val > target) col--;
        else row++; 
    }
    return false;
};


function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = 0;
    let col = cols - 1;
    while (row < rows && col >= 0) {
        let val = matrix[row][col];
        if (val === target) {
            return true;
        } else if (val < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
}


let matrix1 =  [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target1= 5;
let matrix2 = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target2 = 20;


console.log(searchMatrix(matrix1,target1));
console.log(searchMatrix(matrix2,target2));