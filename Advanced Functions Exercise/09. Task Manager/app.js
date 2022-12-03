function solve() {
    //validate inputs
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }

    const [_, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);
    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        let article = document.createElement('article');

        //create element
        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value})`));
        const div = createElement('div', '', 'flex');

        const startButton = createElement('button', 'Start', 'green');
        const deleteButton = createElement('button', 'Delete', 'red');
        const finishButton = createElement('button', 'Finish', 'orange');
        div.appendChild(startButton);
        div.appendChild(deleteButton);

        article.appendChild(div);

        //append to openSection
        openSection.appendChild(article);

        Object.values(input).forEach(input => input.value = '');

        //functionality

        deleteButton.addEventListener('click', onDelete);
        startButton.addEventListener('click', start);
        finishButton.addEventListener('click', finish);

        function onDelete() {
            article.removeChild()
        }

        function start() {
            startButton.remove();
            div.appendChild(finishButton);
            progressSection.appendChild(article);
        }

        function finish() {
            deleteButton.remove();
            finishButton.remove();
            finishSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        const element = document.getElementById(type);
        element.textContent = content;

        if(className){
            element.className = className;
        }

        return element;
    }
}