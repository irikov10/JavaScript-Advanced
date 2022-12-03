function engineeringCompany(array) {
    let carRegister = {};

    for(let line of array) {
        let [car, model, producedCars] = line.split(' | ');

        if(!carRegister.hasOwnProperty(car)) {
           carRegister[car] = {};
        }

        if(!carRegister[car].hasOwnProperty(model)) {
            carRegister[car][model] = 0;
        }

        carRegister[car][model] += Number(producedCars);
    }

    for(let brand in carRegister) {
        console.log(brand);

        Object.entries(carRegister[brand])
        .forEach(el => console.log('###' + el[0] + ' -> ' + el[1]));
    }
}
engineeringCompany(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])