let { expect } = require('chai');
let { chooseYourCar } = require('./chooseYourCar.js');

describe('choosingType', () => {
    it('test 1', () => {
        expect(() => chooseYourCar.choosingType('Sedan', 'green', 1899)).to.throw("Invalid Year!");
    })

    it('should return invalid year with year param over 2022', () => {
        expect(() => chooseYourCar.choosingType('Sedan', 'green', 2023)).to.throw('Invalid Year!');
    })

    it('should return this type of car is not what you looking for if its not sedan', () => {
        expect(() => chooseYourCar.choosingType('Coupe', 'green', 2012)).to.throw("This type of car is not what you are looking for.")
    });

    it('meets the requirement', () => {
        expect(chooseYourCar.choosingType('Sedan', 'green', 2010)).to.equal("This green Sedan meets the requirements, that you have.")
    })

    it('meets the requirement', () => {
        expect(chooseYourCar.choosingType('Sedan', 'green', 2022)).to.equal("This green Sedan meets the requirements, that you have.")
    })

    it('meets the requirement', () => {
        expect(chooseYourCar.choosingType('Sedan', 'green', 2008)).to.equal("This Sedan is too old for you, especially with that green color.")
    })
})

describe('brandName', () => {
    it('should be invalid array', () => {
        expect(() => chooseYourCar.brandName('Coupe', 4)).to.throw("Invalid Information!");
    })

    it('should not work with these parameters', () => {
        expect(() => chooseYourCar.brandName('BMW', 3)).to.throw("Invalid Information!");
    })

    it('should be invalid with these params', () => {
        expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Mercedes'], '4')).to.throw("Invalid Information!");
    });

    it('should be invalid with these params', () => {
        expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Mercedes'], 4)).to.throw("Invalid Information!");
    })

    it('should be invalid with these params', () => {
        expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Mercedes'], -4)).to.throw("Invalid Information!");
    })

    it('should be invalid with these params', () => {
        expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Mercedes'], 1.85)).to.throw("Invalid Information!");
    })

    it('should be correct', () => {
        expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Mercedes'], 1)).to.equal('BMW, Mercedes');
    })
})

describe('carFuelConsumption', () => {
    it('should return invalid info with first param', () => {
        expect(() => chooseYourCar.carFuelConsumption('100', 7)).to.throw("Invalid Information!");
    });

    it('should return invalid info with second param', () => {
        expect(() => chooseYourCar.carFuelConsumption(100, '7')).to.throw("Invalid Information!");
    });
    
    it('should return is efficient with params 100, 7', () => {
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
    })

    it('should return the car burns too much with params 100 and 8', () => {
        expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal("The car burns too much fuel - 8.00 liters!");
    })

    it('should throw invalid info', () => {
        expect(() => chooseYourCar.carFuelConsumption(-100, -9)).to.throw("Invalid Information!");
    })

    it('should throw invalid info', () => {
        expect(() => chooseYourCar.carFuelConsumption('-100', '-9')).to.throw("Invalid Information!");
    })

    it('should return is efficient with params 100, 5', () => {
        expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal("The car is efficient enough, it burns 5.00 liters/100 km.");
    })
})