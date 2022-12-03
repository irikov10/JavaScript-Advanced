function listProcessor(array) {
    let resultArray = [];

    let commands = {
        add: (s) => resultArray.push(s),
        remove: (s) => resultArray = resultArray.filter(e => e != s),
        print: () => console.log(resultArray.join(','))
    }

    for(let el of array) {
        let [command, string] = el.split(' ');
        commands[command](string)
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])