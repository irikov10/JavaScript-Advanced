function areaAndVolumeCalculator(area, vol, data) {
    let parsed = JSON.parse(data);
    let result = [];

    for(let object of parsed) {
        let calculatedArea = area.call(object);
        let calculatedVolume = vol.call(object);

        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        });
    }

    return result;
}

let area = function area() {

    return Math.abs(this.x * this.y);
    
};

let vol = function vol() {

    return Math.abs(this.x * this.y * this.z);
    
};

console.log(areaAndVolumeCalculator(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`))