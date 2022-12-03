function argumentInfo(...args) {
    let obj = {};

    for(let el of args) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if(!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }
        obj[type] = obj[type] + 1;
    }

    let buff = '';
    for(let [key, value] of Object.entries(obj)) {
        buff += `${key} = ${value}\n`;
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })