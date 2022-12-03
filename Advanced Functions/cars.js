function cars(array) {
    let cars = {};

    let commands = {
        create: (name, inherits, parentElement) => {
            cars[name] = inherits ? Object.create(cars[parentElement]) : {};
        },

        set: (name, key, value) => {
            cars[name][key] = value;
        },

        print: (name) => {
            let array = [];

            for(let el in cars[name]) {
                array.push(`${el}:${cars[name][el]}`);
            }

            console.log(array.join(','));
        }
    }


    for(let entry of array) {
        let [command,name, key, value] = entry.split(' ');
        commands[command](name, key, value);
    }
}
cars(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])