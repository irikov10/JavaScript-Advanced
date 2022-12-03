function addItem() {
    let liElement = document.createElement('li');
    let inputElement = document.getElementById('newItemText');

    let items = document.getElementById('items');
    liElement.textContent = inputElement.value;

    items.appendChild(liElement);
    inputElement.value = '';
}