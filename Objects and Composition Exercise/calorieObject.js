function calorieObject(array) {
    let foodAndItsCalories = {};

    for(let i = 0; i < array.length; i += 2) {
        foodAndItsCalories[array[i]] = Number(array[i + 1]);
    }
    console.log(foodAndItsCalories)
}
calorieObject(['Potato', '93', 'Skyr', '63',

'Cucumber', '18', 'Milk', '42'])