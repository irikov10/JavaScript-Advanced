function adAndRemoveElements(commands) {
    let initialNumber = 0;
    let result = [];
    for (let command of commands) {
        initialNumber++
        switch(command) {
            case 'add': 
                result.push(initialNumber);
            break;
            case 'remove': 
                result.pop(initialNumber);
            break;
        }
    }

    if(result.length !== 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}
adAndRemoveElements(['remove', 'remove', 'remove'])