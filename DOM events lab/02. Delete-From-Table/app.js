function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');
    let cellElements =  document.querySelectorAll('tr td:nth-of-type(2)');

    let arrayOfEmails = Array.from(cellElements);
    let targetElements = arrayOfEmails.find(x => x.textContent == inputElement.value);

    if(targetElements) {
        targetElements.parentNode.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}