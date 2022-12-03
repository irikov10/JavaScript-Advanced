
class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        let obj = {
            model,
            horsepower,
            price,
            mileage
        }

        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push(obj);
        return `New car added: ${obj.model} - ${obj.horsepower} HP - ${obj.mileage.toFixed(2)} km - ${obj.price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(c => c.model == model);

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        if (car.mileage <= desiredMileage) {
            car.price = car.price;
        } else if (car.mileage - desiredMileage <= 40000) {
            car.price *= 0.95;
        } else if (car.mileage - desiredMileage > 40000) {
            car.price *= 0.9;
        }

        let index = this.availableCars.indexOf(car);
        this.availableCars.splice(index, 1);
        this.soldCars.push({
            model: car.model,
            horsepowers: car.horsepower,
            soldPrice: car.price,
        });
        this.totalIncome += car.price;
        return `${car.model} was sold for ${car.price.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        }

        let result = [];

        result.push('-Available cars:');
        this.availableCars.forEach((car) => {
            result.push(
                `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        });

        return result.join('\n')
    }

    salesReport(criteria) {

        if (criteria === 'horsepower') {
            this.availableCars.sort((a, b) => a.horsepower - b.horsepower);
        } else if (criteria === 'model') {
            this.availableCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }

        let report = [];

        report.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        report.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(car => {
            report.push(`---${car.model} - ${car.horsepowers} HP - ${car.soldPrice.toFixed(2)}$`)
        });

        return report.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);