function sumTable() {
    let table = document.querySelectorAll('table tr');
    const sum = document.getElementById('sum');
    let total = 0;

    for(let i = 1; i < table.length; i++) {
        let columns = table[i].children;
        let cost = columns[columns.length - 1].textContent;
        total += Number(cost);
    }

    sum.textContent = total;
}