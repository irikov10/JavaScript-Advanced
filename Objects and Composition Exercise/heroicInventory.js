function heroicInventory(array) {
    let result = []

    for(let el of array) {
        let [heroName, level, items] = el.split(' / ');
        items = items ? items.split(', ') : [];
        level = Number(level);

        if(items.length != 0) {
            let obj = {
                name: heroName,
                level: level,
                items: items
            }

            result.push(obj);
        } else {
            let obj = {
                name: heroName,
                level: level,
                items: []
            }
            
            result.push(obj)
        }
    }
    let intoJSON = JSON.stringify(result);
    return intoJSON
}   
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']))