function subSum(array, startIndex, endIndex) {
    let sum = 0;

    // · If the first element is not an array, return NaN
    if(!Array.isArray(array)) {
        return NaN;
    }

    // · If the start index is less than zero, consider its value to be a zero
    if(startIndex < 0) {
        startIndex = 0;
    }

    // · If the end index is outside the bounds of the array, assume it points to the last index of the array
    if(endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    for(let i = startIndex; i <= endIndex; i++) {

        sum += Number(array[i]);
    }

    return sum;
}
console.log(subSum([10, 'twenty', 30, 40], 0, 2))