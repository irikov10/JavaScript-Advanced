function sortingNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let resultArr = [];

    while(arr.length) {
        resultArr.push(arr.shift(), arr.pop());
    }
    return resultArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))