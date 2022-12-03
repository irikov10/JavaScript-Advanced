function townPopulation(arr) {
    let result = arr.map(town => town.split('<->'));
    let townObject = {};
    
    for(let array of result) {
        let townName = array[0];
        let townPopulation = array[1];

        if(!townObject[townName]) {
            townObject[townName] = Number(townPopulation);
            continue;
        }

        townObject[townName] += Number(townPopulation)
    }
    
    for (let [k, v] of Object.entries(townObject)) {
        console.log(`${k}: ${v}`);
    }
}
townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])