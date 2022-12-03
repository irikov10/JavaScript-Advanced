function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a, b) => a -b)
    .filter((a, i) => i < 2)
    .join(' ');
    console.log(sorted)
}
smallestTwoNumbers([30, 0, 10, 4, 7, 3])