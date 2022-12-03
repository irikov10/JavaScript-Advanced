function stringLength(stringOne, stringTwo, stringThree) {
    let result = stringOne.length + stringTwo.length + stringThree.length;
    let avg = Math.floor(result / 3);
    console.log(result);
    console.log(avg)
}
stringLength('pasta', '5', '22.3')