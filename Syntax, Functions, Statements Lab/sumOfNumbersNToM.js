function sumOfNumbersNToM(firstNum, secondNum) {
    let toNum = Number(firstNum);
    let toSecondNum = Number(secondNum);
    let res = 0;

    for(let i = toNum; i <= toSecondNum; i++) {
        res += i;
    }
    console.log(res)
}
sumOfNumbersNToM('1', '5')