function circleArea(input) {
    let radius = 0;
    let area = 0;

    if(typeof(input) === "number") {
        radius = input;
        area = (Math.PI * (radius * radius)).toFixed(2);
        console.log(area)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}
circleArea(5);