function fruit(type, weightInGrams, pricePerKilo) {
    let weightInKilo = weightInGrams / 1000;
    let money = pricePerKilo * weightInKilo;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${type}.`);
}   
fruit('orange', 2500, 1.80)