window.addEventListener("load", solve);

function solve() {
  let firstNameInputElement = document.getElementById('first-name');
  let lastNameInputElement = document.getElementById('last-name');
  let ageInputElement = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let storyInputElement = document.getElementById('story');
  let genreInputElement = document.getElementById('genre');
  let preview = document.getElementById('preview-list');
  let publishBtn = document.getElementById('form-btn');

  publishBtn.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    let firstName = firstNameInputElement.value;
    let lastName = lastNameInputElement.value;
    let age = ageInputElement.value;
    let title = storyTitle.value;
    let genre = genreInputElement.value;
    let story = storyInputElement.value;

    if (firstName == '' || lastName == '' || age == '' || title == '' || genre == '' || story == '') {
      return;
    }

    let liElement = document.createElement('li');
    liElement.className = 'story-info'

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;

    let agePTag = document.createElement('p');
    agePTag.textContent = `Age: ${age}`;

    let titlePTag = document.createElement('p');
    titlePTag.textContent = `Title: ${title}`;

    let genrePTag = document.createElement('p');
    genrePTag.textContent = `Genre: ${genre}`;

    let storyPTag = document.createElement('p');
    storyPTag.textContent = story;

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save Story';
    saveButton.classList.add('save-btn');

    saveButton.addEventListener('click', (e) => {
      e.preventDefault();

      let mainDiv = document.getElementById('main');
      mainDiv.innerHTML = '';

      let h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!"

      mainDiv.appendChild(h1);
    })

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Story';
    editButton.classList.add('edit-btn');

    editButton.addEventListener('click', (e) => {
      e.preventDefault();

      publishBtn.disabled = false;
      editButton.disabled = true;
      saveButton.disabled = true;
      deleteButton.disabled = true;

      
      firstNameInputElement.value = firstName;
      lastNameInputElement.value = lastName;
      ageInputElement.value = age;
      storyTitle.value = story;
      genreInputElement.value = genre;
      storyInputElement.value = story;
      
      e.target.parentElement.remove()
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Story';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();

      preview.removeChild(liElement);
      publishBtn.disabled = false;
    })


    article.appendChild(h4)
    article.appendChild(agePTag)
    article.appendChild(titlePTag)
    article.appendChild(genrePTag);
    article.appendChild(storyPTag);

    liElement.appendChild(article);
    liElement.appendChild(saveButton)
    liElement.appendChild(editButton)
    liElement.appendChild(deleteButton)

    preview.appendChild(liElement);

    firstNameInputElement.value = ''
    lastNameInputElement.value = ''
    ageInputElement.value = ''
    storyTitle.value = ''
    genreInputElement.value = ''
    storyInputElement.value = ''

    publishBtn.disabled = true;
    saveButton.disabled = false;
    editButton.disabled = false;
    deleteButton.disabled = false
  }

}
