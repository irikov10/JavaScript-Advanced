function magicMatrices(matrix) {
    for(let i = 0; i < matrix.length - 1; i++) {
        let currentRow = matrix[i].reduce((a, b) => a + b);
        let nextRow = matrix[i + 1].reduce((a, b) => a + b);

        let sumOfCurrCol = 0;
        let sumOfNextCol = 0;

        for(let j = 0; j < matrix.length; j++) {
            sumOfCurrCol += matrix[i][j];
            sumOfNextCol += matrix[i + 1][j];
        }

        if(currentRow !== nextRow || sumOfCurrCol !== sumOfNextCol) {
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))