function focused() {
    let inputElements = document.querySelectorAll('input');

    let arrayOfInputElements = Array.from(inputElements);

    arrayOfInputElements.forEach(el => {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', offFocus);
    })

    function onFocus(e) {
        e.target.parentNode.className = 'focused';
    }

    function offFocus(e) {
        e.target.parentNode.className = '';
    }
}