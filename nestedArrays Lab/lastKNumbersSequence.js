function lastKNumbersSequence(n, k){
    let resultArray = [1];

    for (let i = 1; i < n; i++) {
        resultArray[i] = sumK(resultArray, k);
    }

    function sumK(array = resultArray, k) {
        k = array.length > k ? k : array.length;
        let sum = 0;

        for(let i = 1; i <= k; i++) {
            sum += array[array.length - i];
        }
        return sum;
    }
    return resultArray;
}
console.log(lastKNumbersSequence(6, 3))