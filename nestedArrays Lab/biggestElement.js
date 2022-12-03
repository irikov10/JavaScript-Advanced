function biggestElement(twoDMatrix) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < twoDMatrix.length; i++) {
        let rows = twoDMatrix[i];

        for(j = 0; j < rows.length; j++) {
            let currentNum = rows[j];

            if(biggestNum < currentNum) {
                biggestNum = currentNum;
            }
        }
    }

    return biggestNum;
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )