window.addEventListener("load", solve);

function solve() {
  // take the inputs and other elements
    let titleInputElement = document.getElementById('post-title');
    let categoryInputElement = document.getElementById('post-category');
    let contentInputElement = document.getElementById('post-content');
    let reviewList = document.getElementById('review-list');
    let publishButton = document.getElementById('publish-btn');
    let publishedList = document.getElementById('published-list');

    publishButton.addEventListener('click', publish);
  // create liElement then append the information of the input values on the liElement
    function publish(e) {
      e.preventDefault();

      let title = titleInputElement.value;
      let category = categoryInputElement.value;
      let content = contentInputElement.value;

      if(title == '' || category == '' || content == '') {
        return;
      }

      let article = document.createElement('article');

      let titleLiElement = document.createElement('h4');
      titleLiElement.textContent = title;
      let categoryLiElement = document.createElement('p');
      categoryLiElement.textContent = `Category: ${category}`;
      let contentLiElement = document.createElement('p')
      contentLiElement.textContent = `Content: ${content}`;

      article.appendChild(titleLiElement);
      article.appendChild(categoryLiElement);
      article.appendChild(contentLiElement);

      let liElement = document.createElement('li');
      liElement.classList.add('rpost');

      let approveButton = document.createElement('button');
      approveButton.classList = 'action-btn approve';
      approveButton.textContent = 'Approve';

      let editButton = document.createElement('button');
      editButton.classList = 'action-btn edit';
      editButton.textContent = 'Edit'; 

      approveButton.addEventListener('click', (e) => { approve(e, editButton, approveButton) });
      editButton.addEventListener('click', edit);

      liElement.appendChild(article);
      liElement.appendChild(approveButton);
      liElement.appendChild(editButton);
      reviewList.appendChild(liElement);

      titleInputElement.value = '';
      categoryInputElement.value = '';
      contentInputElement.value = '';
    }

    function edit(e) {
      e.preventDefault();
      let data = e.target.parentNode;
      let h4 = data.querySelector('article h4').textContent;
      let categoryPTag = data.querySelector('article p:nth-of-type(1)').textContent;
      let contentPTag = data.querySelector('article p:nth-of-type(2)').textContent;

      titleInputElement.value = h4;
      categoryInputElement.value = categoryPTag.replace('Category: ', '');
      contentInputElement.value = contentPTag.replace('Content: ', '');

      data.parentNode.removeChild(data);
    }

    function approve(e, editButton, approveButton) {
      e.preventDefault();
      let data = e.target.parentElement.parentElement;
      let liElement = data.querySelector('li');

      liElement.removeChild(approveButton);
      liElement.removeChild(editButton);

      publishedList.appendChild(liElement)
      data.remove(data)
    }
  //clear the inputs

  let clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', () => {
    publishedList.innerHTML = '';
  })
}
