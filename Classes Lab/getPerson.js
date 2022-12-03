function getPerson() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        get tableDetails() {
            let obj = {};
            let result = [];
    
            if(!obj.hasOwnProperty[firstName]) {
                obj[firstName] = lastName, age, email;
            }
    
            result.push(obj);
            return result;
    
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'), 
        new Person('SoftUni'), 
        new Person('Stephan', 'Johnson', 25), 
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
      ];
}
console.log(getPerson())