function add(a) {
    let sum = a;

    function calculate(b) {
        sum += b;
        return calculate
    }

    calculate.toString = function() { return sum }
    return calculate
}
console.log(add(1))
console.log(add(1)(6)(-3))