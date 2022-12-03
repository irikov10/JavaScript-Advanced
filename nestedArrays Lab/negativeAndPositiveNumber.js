function negativeAndPositiveNumber(arr) {
    let result = [];

    for(let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else if (el >= 0 || el > 0) {
            result.push(el);
        }
    }
    console.log(result)
}
negativeAndPositiveNumber([3, -2, -1, 0])