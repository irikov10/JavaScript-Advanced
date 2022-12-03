function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr')
   let searchField = document.getElementById('searchField');
   let resultElement = document.getElementById('result');

   function onClick() {
      for(let row of rows) {
         row.classList.remove('select');
         if(row.innerHTML.includes(searchField.value)) {
            row.className = 'select';
         }
      }

      input.value = '';
   }
}