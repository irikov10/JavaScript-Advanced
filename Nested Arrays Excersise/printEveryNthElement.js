function printEveryNthElement(arrayOfStrings, step) {
    let result = [];
    for(let i = 0; i < arrayOfStrings.length; i += step) {
        result.push(arrayOfStrings[i]);
    }
    return result
}
printEveryNthElement(['5','20', '31', '4', '20'], 2)