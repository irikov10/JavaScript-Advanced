function showText() {
    // this func. changes the style of a hidden element ot show it after executing the func.

    let text = document.getElementById('text');
    let moreInformationButton = document.getElementById('more');

    text.style.display = 'inline';
    moreInformationButton.style.direction = 'none';
}