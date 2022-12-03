let {expects} = require('chai');
let { evenOrOdd } = require("./evenOrOdd");
//describe('functionality', () => {
    describe('will return results when the type is not correct', () => {
    
        it('should return undefined with array', () => {
            expects.equal(evenOrOdd([]), undefined)
        });
    
        it('should return undefined with numbers', () => {
            expects.equal(evenOrOdd(1), undefined);
        });
    
        it('should return undefined with empty object', () => {
            expects.equal(evenOrOdd({}), undefined);
        }) 
    
        it('should return undefined with object argument', () => {
            expects.equal(evenOrOdd({name: 'Goshko'}));
        }) 
    
        it('should return undefined with boolean', () => {
            expects.equal(evenOrOdd(true), undefined)
        }) 
    })

    describe('will return result when the type is string', () => {
        it('should return even with `Game` as an argument', () => {
            expects.equal(evenOrOdd('game'), 'even');
        });

        it('should return even with `Slice` as an argument', () => {
            expects.equal(evenOrOdd('slice'), 'odd');
        });
    })
//})  