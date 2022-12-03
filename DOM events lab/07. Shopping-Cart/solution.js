function solve() {
   let addButtons = document.querySelectorAll('div button[class="add-product"]');
   let inputElement = document.querySelector('textarea');

   let object = {};
 
   for(let button of addButtons) {
      button.addEventListener('click', addOrReduceTheProduct);
   }

   function addOrReduceTheProduct(e) {
      if(e.target.className === 'add-product') {
         
         let currentElement = e.target.parentElement;

         //price of the product
         let price = Number(currentElement.nextElementSibling.innerHTML);

         //name of the product
         let brandElement = currentElement.previousElementSibling.children[0].innerHTML;

         if(!object[brandElement]) {
            object[brandElement] = 0;
         }

         object[brandElement] += price;

         inputElement.innerHTML += `Added ${brandElement} for ${price.toFixed(2)} to the cart.\n`
      } else if(e.target.className === 'checkout'){
         
         //adding numbers to the sum
         let sum = Number(Object.values(object).reduce((a,b) => a + b),0);

         //setting the textContent of the input element
         textArea.innerHTML += `You bought ${Object.keys(object).join(', ')} for ${sum.toFixed(2)}.`

         Array.from(addButtons).forEach(button => button.disabled = true);
      }
   }
}