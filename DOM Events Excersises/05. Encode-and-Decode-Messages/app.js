function encodeAndDecodeMessages() {
    let textArea = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(e) {
        let encodeMessage = '';
        let input = textArea[0].value;

        for(let i = 0; i < input.length; i++) {
            encodeMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }

        textArea[1].value = encodeMessage;
        textArea[0].value = '';
    }

    function decode(e) {
        let decodeMessage = '';
        let input = textArea[1].value;

        for(let i = 0; i < input.length; i++) {
            decodeMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }

        textArea[1].value = decodeMessage;
    }
}