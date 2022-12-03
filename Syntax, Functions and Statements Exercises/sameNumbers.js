function sameNumbers(numbers) {
    let numbersInString = numbers.toString();
    let firstNum = numbersInString[0];
    let res = "";
    let sum = 0;

    for (let i = 0; i < numbersInString.length; i++) {
        if (firstNum === numbersInString[i]) {
            res = true;
        } else {
            res = false;
        }

        sum += Number(numbersInString[i]);
    }

    console.log(res);
    console.log(sum);
}
sameNumbers(2222222)