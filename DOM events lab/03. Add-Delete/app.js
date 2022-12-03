function addItem() {
    let items = document.getElementById('items');
    let input = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let anchorTag = document.createElement('a');
    anchorTag.textContent = '[Delete]';
    anchorTag.href = '#';

    anchorTag.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(anchorTag);

    items.appendChild(liElement);

    input.value = '';
}