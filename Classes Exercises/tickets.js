function tickets(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for(let element of array) {
        let [destinationName, price, status] = element.split('|');
        let ticketData = new Ticket(destinationName, Number(price), status);

        result.push(ticketData);
    }
    
    if(criteria === 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if(criteria === 'price') {
        result.sort((a, b) => a.price - b.price);
    } else if(criteria === 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }
  
    return result
}

console.log(tickets(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'))