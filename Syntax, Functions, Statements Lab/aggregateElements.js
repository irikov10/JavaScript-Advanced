function aggregateElements(arr) {
    let sum = 0;
    let decimalSum = 0;
    let concat = '';

    for(let el of arr) {
        sum += el;
        concat += el;
    }

    for(let i = 0; i < arr.length; i++) {
        decimalSum += 1 / arr[i];
    }
    
    console.log(sum);
    console.log(decimalSum)
    console.log(concat);
}
aggregateElements([1,2,3])