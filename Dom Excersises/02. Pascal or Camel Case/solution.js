function solve() {
  let inputNamingConventionElement = document.getElementById("naming-convention");
  console.log(inputNamingConventionElement)
  let inputTextElement = document.getElementById("text").value;
  let result = document.getElementById('result');

  let words = inputTextElement.split(/(\s+)/).filter(x => x != ' ');

  if (inputNamingConventionElement.value == 'Camel Case') {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();

      if(i != 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      }

      result.textContent = words[i];
    }
  } else if (inputNamingConventionElement.value == 'Pascal Case') {
    for(let i = 0; i < words.length; i++) {
      words[i]= words[i].toLowerCase();
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);

      result.textContent = words[i]
    }
  } else {
    return result.textContent = 'Error!'
  }

  let final = words.join('');
  result.textContent = final;
}