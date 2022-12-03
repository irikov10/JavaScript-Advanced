function search() {
   let list = document.querySelectorAll('ul#towns li');
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for(let town of list) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = '';
   }

   for(let town of list) {
      let text = town.textContent;

      if(text.match(searchText)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`
}
