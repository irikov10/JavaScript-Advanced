function factory(library, orders) {
    let result = [];

    for(let {template, parts} of orders) {
        let current = Object.assign({}, template);
        
        for(let part of parts) {
            current[part] = library[part];
        }
        result.push(current);
    }
    return result;l
}
const library = {

    print: function () {
    
    console.log(`${this.name} is printing a page`);
    
    },
    
    scan: function () {
    
    console.log(`${this.name} is scanning a document`);
    
    },
    
    play: function (artist, track) {
    
    console.log(`${this.name} is playing '${track}' by ${artist}`);
    
    },
    
    };
    
    const orders = [
    
    {
    
    template: { name: 'ACME Printer'},
    
    parts: ['print']
    
    },
    
    {
    
    template: { name: 'Initech Scanner'},
    
    parts: ['scan']
    
    },
    
    {
    
    template: { name: 'ComTron Copier'},
    
    parts: ['scan', 'print']
    
    },
    
    {
    
    template: { name: 'BoomBox Stereo'},
    
    parts: ['play']
    
    }
    
    ];
    
    const products = factory(library, orders); 
    console.log(products)