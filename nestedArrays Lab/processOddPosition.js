function processOddPosition(arr) {
    let result = arr
    .filter((el, i) => i % 2 !== 0)
    .map((el) => el * 2)
    .reverse();
    
    return result;
}
console.log(processOddPosition([3, 0, 10, 4, 7, 3]))