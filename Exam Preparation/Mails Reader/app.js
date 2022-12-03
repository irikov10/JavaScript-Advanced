function solve() {
    const recipientInputElement = document.getElementById('recipientName');
    const titleInputElement = document.getElementById('title');
    const messageInputElement = document.getElementById('message');
    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');
    const list = document.getElementById('list');
    const sentMails = document.querySelector('.sent-list');
    const deletedMails = document.querySelector('.delete-list');

    addButton.addEventListener('click', addInfo);
    resetButton.addEventListener('click', reset);

    function addInfo(e) {
        e.preventDefault();
        let titleContent = titleInputElement.value;
        let recipient = recipientInputElement.value;
        let message = messageInputElement.value;

        if(titleContent == '' || recipient == '' || message == '') {
            return;
        }

        const liElement = document.createElement('li');

        const title = document.createElement('h4');
        title.textContent = `Title: ${titleContent}`;
        const recipientName = document.createElement('h4');
        recipientName.textContent = `Recipient Name: ${recipient}`;
        const messageSpan = document.createElement('span');
        messageSpan.textContent = message;

        const div = document.createElement('div');
        div.id = 'list-action';

        const sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.id = 'send';
        sendButton.textContent = 'Send';

        sendButton.addEventListener('click', (e) => {
            e.preventDefault();
            const data = e.target.parentElement.parentElement;
            list.removeChild(data);
            div.removeChild(sendButton);

            const spanElementTo = document.createElement('span');
            spanElementTo.textContent = `To: ${recipient}`;

            const spanElementTitle = document.createElement('span');
            spanElementTitle.textContent = `Title: ${titleContent}`;

            let divElement = document.createElement('div');
            divElement.classList.add('btn');

            let button = document.createElement('button');

            button.addEventListener('click', (e) => {
                e.preventDefault();

                let toRemove = e.target.parentElement.parentElement;
                toRemove.removeChild(divElement);
                deletedMails.appendChild(data);
            })

            button.type = 'submit';
            button.classList = 'delete';
            button.textContent = 'Delete';

            divElement.appendChild(button);
            liElement.removeChild(title);
            liElement.removeChild(recipientName);
            liElement.removeChild(messageSpan);
            liElement.removeChild(div);
            liElement.appendChild(spanElementTo);
            liElement.appendChild(spanElementTitle);
            liElement.appendChild(divElement);

            sentMails.appendChild(data);
        });

        const deleteButton = document.createElement('button');

        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            let data = e.target.parentElement.parentElement;

            let listElement = document.createElement('li');
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`;
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleContent}`;

            listElement.appendChild(spanTo);
            listElement.appendChild(spanTitle);
            deletedMails.appendChild(listElement);
        })
        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        deleteButton.textContent = 'Delete';

        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        liElement.appendChild(title);
        liElement.appendChild(recipientName);
        liElement.appendChild(messageSpan);
        liElement.appendChild(div);

        list.appendChild(liElement);

        recipientInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    }

    function reset(e) {
        e.preventDefault();

        recipientInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    }
}
solve()