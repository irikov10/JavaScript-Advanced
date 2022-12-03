window.addEventListener("load", solve);

function solve() {
  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let productionYearInputElement = document.getElementById('year');
  let fuelTypeInputElement = document.getElementById('fuel');
  let originalPriceInputElement = document.getElementById('original-cost');
  let sellingPriceInputElement = document.getElementById('selling-price');
  let tableElement = document.getElementById('table-body');
  let soldCarsElement = document.getElementById('cars-list');
  let profitElement = document.getElementById('profit');
  let profitMade = 0;
  let publishButton = document.getElementById('publish');

  publishButton.addEventListener('click', publishCar);

  function publishCar(e) {
    e.preventDefault();
    let make = makeInputElement.value;
    let model = modelInputElement.value;
    let productionYear = productionYearInputElement.value;
    let fuelType = fuelTypeInputElement.value;
    let originalPrice = originalPriceInputElement.value;
    let sellingPrice = sellingPriceInputElement.value;

    if(make == '' || model == '' || productionYear == '' || fuelType == '' || originalPrice == '' || sellingPrice == '' || originalPrice > sellingPrice) {
      return;
    }

    makeInputElement.value = '';
    modelInputElement.value = '';
    productionYearInputElement.value = '';
    fuelTypeInputElement.value = '';
    originalPriceInputElement.value = '';
    sellingPriceInputElement.value = '';

    let tr = document.createElement('tr');
    tr.classList.add('row');
    let makeTd = document.createElement('td');
    makeTd.textContent = make;
    let modelTd = document.createElement('td');
    modelTd.textContent = model;
    let productionYearTd = document.createElement('td');
    productionYearTd.textContent = productionYear;
    let fuelTypeTd = document.createElement('td');
    fuelTypeTd.textContent = fuelType;
    let originalPriceTd = document.createElement('td');
    originalPriceTd.textContent = originalPrice;
    let sellingPriceTd = document.createElement('td');
    sellingPriceTd.textContent = sellingPrice;

    let editButton = document.createElement('button');
    editButton.classList = 'action-btn edit';
    editButton.textContent = 'Edit';

    let sellButton = document.createElement('button');
    sellButton.classList = 'action-btn sell';
    sellButton.textContent = 'Sell';

    let newTd = document.createElement('td');
    newTd.appendChild(editButton);
    newTd.appendChild(sellButton);

    editButton.addEventListener('click', edit);
    sellButton.addEventListener('click', sell);

    tableElement.appendChild(makeTd);
    tableElement.appendChild(modelTd);
    tableElement.appendChild(productionYearTd);
    tableElement.appendChild(fuelTypeTd);
    tableElement.appendChild(originalPriceTd);
    tableElement.appendChild(sellingPriceTd);
    tableElement.appendChild(newTd);
  }

  function edit(e) {
    e.preventDefault();
    let row = e.target.parentNode.parentNode;
    let makeText = row.querySelector('td:nth-of-type(1)');
    let modelText = row.querySelector('td:nth-of-type(2)');
    let prodYearText = row.querySelector('td:nth-of-type(3)');
    let fuelTypeText = row.querySelector('td:nth-of-type(4)');
    let originalPriceText = row.querySelector('td:nth-of-type(5)');
    let sellingPriceText = row.querySelector('td:nth-of-type(6)');

    document.getElementById('make').value = makeText.textContent;
    document.getElementById('model').value = modelText.textContent;
    document.getElementById('year').value = prodYearText.textContent;
    document.getElementById('fuel').value = fuelTypeText.textContent;
    document.getElementById('original-cost').value = originalPriceText.textContent;
    document.getElementById('selling-price').value = sellingPriceText.textContent;
    row.remove();
  } 

  function sell(e) {
    e.preventDefault();
    let row = e.target.parentNode.parentNode;

    let make = row.querySelector('td:nth-of-type(1)').textContent;
    let model = row.querySelector('td:nth-of-type(2)').textContent;
    let productionYear = row.querySelector('td:nth-of-type(3)').textContent;
    let originalPrice = row.querySelector('td:nth-of-type(5)').textContent;
    let sellingPrice = row.querySelector('td:nth-of-type(6)').textContent;
    let liElement = document.createElement('li');
    liElement.classList.add('each-list');

    let makeAndModelSpan = document.createElement('span');
    makeAndModelSpan.textContent = `${make} ${model}`;

    let prodYearSpan = document.createElement('span');
    prodYearSpan.textContent = productionYear;

    let differenceSpan = document.createElement('span');
    let priceDifferential = Number(sellingPrice) - Number(originalPrice);
    differenceSpan.textContent = priceDifferential;

    liElement.appendChild(makeAndModelSpan);
    liElement.appendChild(prodYearSpan);
    liElement.appendChild(differenceSpan);

    soldCarsElement.appendChild(liElement);

    profitMade += priceDifferential;
    profitElement.textContent = `${profitMade.toFixed(2)}`;
    row.remove()
  }
}