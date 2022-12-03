function largestNumber(num1, num2, num3) {
    // let toArr = [num1, num2, num3];
    // let biggestNumber = 0;

    // for (let i = 0; i < toArr.length; i++) {
    //     let firstNumber = toArr[i];

    //     for(let j = 0; j < toArr.length; j++) {
    //         let secondNumber = toArr[j];

    //         if(firstNumber > secondNumber) {
    //             biggestNumber = firstNumber;
    //         }
    //     }
    // }
    // console.log(biggestNumber);

    if (num1 > num2 && num1 > num3) {
        biggestNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        biggestNum = num2;
    } else if (num3 > num1 && num3 > num2) {
        biggestNum = num3;
    }
    console.log(`The largest number is ${biggestNum}.`)
}
largestNumber(-3, -5, -22.5)