function evenPosition(arrayOfStrings){
    let resultArr = [];
    for (let i = 0; i < arrayOfStrings.length; i += 2) {
        resultArr.push(arrayOfStrings[i]);
    }

    console.log(resultArr.join(' '))
}
evenPosition(['20', '30', '40', '50', '60'])