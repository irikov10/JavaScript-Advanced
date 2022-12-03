function juiceFlavors(array) {
    let juices = new Map();
    let bottles = new Map();

    for(let element of array) {
        let [type, quantity] = element.split(' => ');
        quantity = Number(quantity);
     
        if(!juices.has(type)) {
            juices[type] = 0;
        }
        juices[type] += quantity;

        if(juices[type] >= 1000) {
            if(!bottles.has(type)) {
                bottles.set(type, 0);
            }

            bottles.set(type, bottles.get(type) + parseInt(juices[type] / 1000));
            juices[type] %= 1000;
        }

        juices.set(type, juices[type] + quantity);

        for(let [juice, bottlesQty] of bottles) {
            console.log(juice + ' => ' + bottlesQty);
        }
    }
}

juiceFlavors(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549'])