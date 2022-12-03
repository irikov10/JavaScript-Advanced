function extendPrototype(Classes) {
    Classes.prototype.species = 'Human';
    Classes.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}