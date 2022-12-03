function extract(arr) {
    let biggestNumber = 0;
    let resultArr = [];
    for (let el of arr) {
        let currentNumber = el;

        if(currentNumber >= biggestNumber) {
            biggestNumber = currentNumber;
            resultArr.push(biggestNumber);
        } else {
            continue;
        }
    }
    return resultArr;
}
extract([20, 3, 2, 15, 6, 1])