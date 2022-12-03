(function arrayExtension() {
    // let array = [1, 2, 3];

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (number) {
        return this.slice(number)
    }

    Array.prototype.take = function (number) {
        return this.slice(0, number)
    }

    Array.prototype.sum = function () {
        let sum = 0;

        for(let el of this) {
            sum += el;
        }

        return sum;
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})()


var testArray = [1, 2, 3];
testArray.last()