function validate() {
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/g;
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', checkPattern);

    function checkPattern(e) {
        if(pattern.test(e.target.value)) {
            e.target.className = '';
            return;
        }

        e.target.className = 'error';
    }
}