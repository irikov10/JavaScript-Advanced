function lowestPricesInCities(array) {
    let obj = {};

    for(let el of array) {
        let [townName, productName, price] = el.split(' | ');
        price = Number(price);

        if(!obj[productName]) {
            obj[productName] = {townName, price};
        } else if (obj[productName]) {
            let currentPrice = obj[productName]['price'];

            if(currentPrice > price) {
                obj[productName] = {townName, price};
            }
        }
    }

    for(let [product, value] of Object.entries(obj)) {
        console.log(`${product} -> ${value.price} (${value.townName})`)
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])