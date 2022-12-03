function colorize() {
    const listElement = document.querySelectorAll('table tr');
    let index = 0;
    for (let element of listElement) {
        index++;

        if(index % 2 === 0) {
            element.style.background = 'teal';
        }
    }
}