function extractText() {
    const items = document.querySelectorAll('li');
    const result = document.getElementById('result');

    for(let el of items) {
        result.value += el.textContent + '\n';
    }
}