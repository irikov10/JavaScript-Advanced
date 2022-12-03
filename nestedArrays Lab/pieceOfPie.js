function pieceOfPie(array, stringOne, stringTwo) {
    let result;

    for(let el of array) {
        let indexOfFirstElement = array.indexOf(stringOne);
        let indexOfSecondElement = array.indexOf(stringTwo);

        result = array.slice(indexOfFirstElement, indexOfSecondElement + 1);
    }
    return result;

}
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))