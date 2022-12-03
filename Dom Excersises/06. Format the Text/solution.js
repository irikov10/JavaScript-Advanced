function solve() {
    // will get the textArea and result
    let textAreaValue = document.getElementById("input").value; 
    let result = document.getElementById("output");
    // must find the number of sentences and split('.')
    let sentences = textAreaValue.split('.').filter(x => x != 0);
    // sentence must have at least 1 character

    while(sentences.length > 0) {
      let textForParagraph = sentences.splice(0, 3).join('. ') + '.';
      let p = document.createElement('p');
      p.textContent = textForParagraph;
      result.appendChild(p)
    }
}