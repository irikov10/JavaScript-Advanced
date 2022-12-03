function calc() {
    const numberOne = document.getElementById('num1');
    const numberTwo = document.getElementById('num2');
    const sum = document.getElementById('sum');

    sum.value = Number(numberOne.value) + Number(numberTwo.value);
}
