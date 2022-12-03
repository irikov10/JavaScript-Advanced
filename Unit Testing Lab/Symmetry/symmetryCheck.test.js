let { expects } = require('chai');
let { isSymmetric } = require('./checkForSimmetry');

describe('sum', () => {
    it('should take an array as an argument', () => {
        expects(isSymmetric([])).to.be.true;
    });

    it('should return false for incorrect types', () => {
        expects(isSymmetric(6)).to.be.false;
        expects(isSymmetric({})).to.be.false;
        expects(isSymmetric(19.14)).to.be.false;
        expects(isSymmetric('Misho')).to.be.false;
    });

    it('should return true if the array is symmetric', () => {
        expects(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('should return false if the array is not symmetric', () => {
        expects(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
        expects(isSymmetric([1, 2, 3, 2, 4])).to.be.false;
        expects(isSymmetric([1, '2', 3, 2 , 5])).to.be.false;
        expects(isSymmetric([1, 2, 3, 1, 2])).to.be.false;
    })
})