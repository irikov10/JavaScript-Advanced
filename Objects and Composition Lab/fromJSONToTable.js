function fromJSONToTable(json) {
    let parsed = JSON.parse(json);

    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));
    
    let result = `<table>\n`;

    appendHeaders(columnNames);
    appendValues(values);

    function appendHeaders(columnNames) {
        result += `    <tr>`;

        for(let name of columnNames) {
            result += `    <tr>${name}</th>`
        }

        result += `</tr>`
    }

    function appendValues(values) {
        for(let value of values) {
            result += `    <tr>`;
            result += `<td>${escape(value[0])}</td><td>${escape(value[1])}</td>`
        }
    }

    function escape(value) {
        return value.toString().replace('<', '&lt;').replace('>','&gt;');
    }
}
fromJSONToTable([{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}])
// console.log('-------------------------------------------------')
// fromJSONToTable([{"Name":"Pesho", "Score":4, " Grade":8},
// {"Name":"Gosho", "Score":5, " Grade":8},
// {"Name":"Angel", "Score":5.50, " Grade":10}])