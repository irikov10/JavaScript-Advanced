const { expect } = require('chai');
const { sum } = require('./sumNumbers');

describe('sum', () => {
    it('should take an array as an argument', () => {
        let argument = [1, 2, 3, 4];
        expect(argument).to.be.an('array');
    });

    it('should return NaN if the array has invalid data', () => {
        expect(sum['Steve', 'Misho']).to.be.NaN
    });

    it('should return the sum of all elements', () => {
        expect(sum[1, 2, 3, 4]).to.be.equal(10);
        expect(sum[-2, 5, 1, 6]).to.be.equal(10);
        expect(sum[-1, -2, -3, -4]).to.be.equal(-10);
        expect(sum[1, 3, 4, 1]).to.be.equal(9);
        expect(sum[0, 0, 0, 0]).to.be.equal(0);
    });

    it('should return 0 if the array is empty', () => {
        expect(sum([])).to.be.equal(0)
    })
})
