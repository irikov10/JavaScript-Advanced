function greatestDivisor(firstNum, secondNum) {

    while(secondNum) {
        let temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    console.log(firstNum)
}
greatestDivisor(15, 5)
greatestDivisor(2154, 458)