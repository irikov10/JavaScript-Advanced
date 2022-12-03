function diagonalSums(matrix) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let firstIndex = 0;
    let lastIndex = matrix[0].length - 1;

    for(let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];

        firstDiagonalSum += currentRow[firstIndex++];
        secondDiagonalSum += currentRow[lastIndex--];
    }
    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
}   
diagonalSums([[20, 40], [10, 60]])