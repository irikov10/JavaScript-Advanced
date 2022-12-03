function carFactory(data) {
    let car = {};
    car.model = data.model;

    let engines = {
        'Small engine': {
            power: 90, volume: 1800
        },

        'Normal engine': {
            power: 120, volume: 2400
        },

        'Monster engine': {
            power: 200, volume: 3500
        }
    }

    if(data.power <= 90) {
        car.engine = engines['Small engine'];
    } else if(data.power <= 120) {
        car.engine = engines['Normal engine'];
    } else {
        car.engine = engines['Monster engine'];
    }

    if(data.carriage === 'hatchback') {
        car.carriage = {
            type: 'hatchback',
            color: data.color
        }
    } else if(data.carriage === 'coupe') {
        car.carriage = {
            type: 'coupe',
            color: data.color
        }
    }

    let wheelsize = data.wheelsize % 2 === 0 ? data.wheelsize - 1 : data.wheelsize;
    car.wheels = new Array(4).fill(wheelsize);

    return car;
}
carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 })