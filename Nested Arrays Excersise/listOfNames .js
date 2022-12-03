function listOfNames(arr) {
    let sortedArray = arr.sort((a, b) => a.localeCompare(b));
    
    for (let i = 0; i < sortedArray.length; i++) {
        console.log((i + 1) + '.' + sortedArray[i]);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])