function sumFirstLast(array) {
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    console.log(firstElement + lastElement)
}
sumFirstLast(['20', '30', '40'])