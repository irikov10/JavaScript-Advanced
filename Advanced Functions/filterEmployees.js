function filterEmployees(employees, criteria) {
    let parsed = JSON.parse(employees);
    let [key, value] = criteria.split('-');


    let result = [];

    for(let employee of parsed) {
        let data = format(employee['first_name'], employee['last_name'], employee['email']);
        
        if(value === 'all' || employee[key] == value) {
            result.push(data)
        }
    }

    result.forEach((element, i) => console.log(`${i}. ${element}`));

    function format(firstName, lastName, email) {
        return `${firstName} ${lastName} - ${email}`
    }
}
filterEmployees(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female')