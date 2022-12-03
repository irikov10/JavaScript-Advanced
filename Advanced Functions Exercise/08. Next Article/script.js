function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    
    return function() {
        //remove the first article
        const firstArticle = articles.shift();
        if(firstArticle != undefined) {
            //construct HTML element
            const article = document.createElement('article');
            article.textContent = firstArticle;
            //display article on page
            content.appendChild(article);
        }
    }
}
