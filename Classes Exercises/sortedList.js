class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }

    add(element) {
        this.array.push(element);
        this.array = this.array.sort((a,b) => a - b);
        this.size = this.array.length;
    }

    remove(index) {
        if(index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.size = this.array.length;
        } else {
            throw new Error('Invalid index!');
        }
    }

    get(index) {
        if(index >= 0 && index < this.array.length) {
            return this.array[index];
        } else {
            throw new Error('Invalid index!');
        }
    }
    
    size() {
        return this.size;
    }
}


let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1)); 

list.remove(1); console.log(list.get(1))