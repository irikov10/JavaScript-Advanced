function previousDay(year, month, day) {
    let newDate = new Date(year, month - 1, day - 1);
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
}
console.log(previousDay(2016, 10, 1))