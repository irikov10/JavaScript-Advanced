function storeCatalogue(arr) {
    let storeCatalogue = {};    

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        let letter = product[0];

        if (storeCatalogue.hasOwnProperty(letter) == false) {
            storeCatalogue[letter] = {};
        }
        //storeCatalogue[letter] = {product: price} -> line 13 means this syntax
        storeCatalogue[letter][product] = price;

    }
    let sortedLetters = Object.keys(storeCatalogue).sort((a, b) => a.localeCompare(b))

    for(let letter of sortedLetters) {  
        console.log(letter)
        let sortedProducts = Object.keys(storeCatalogue[letter]).sort((a, b) => a.localeCompare(b));

        for(let product of sortedProducts) {
            console.log(`  ${product}: ${storeCatalogue[letter][product]}`)
        }
    }
}
storeCatalogue(['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])