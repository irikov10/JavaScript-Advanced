function extract(content) {
    let words = document.getElementById(content).textContent;
    let regExp = /\(([^)]+)\)/g;  
    let result = [];

    let match = regExp.exec(words);

    while(match) {
        result.push(match[1]);
        match = regExp.exec(words);
    }

    return result.join('; ')
}