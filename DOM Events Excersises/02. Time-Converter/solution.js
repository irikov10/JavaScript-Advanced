function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('daysBtn');
    let minutesButton = document.getElementById('daysBtn');
    let secondsButton = document.getElementById('daysBtn');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let template = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }   

    daysButton.addEventListener('click', onConvert);
    hoursButton.addEventListener('click', onConvert);
    minutesButton.addEventListener('click', onConvert);
    secondsButton.addEventListener('click', onConvert);

    function converter(value, unit) {
        let days = value / template[unit];

        return {
            days: days,
            hours: days * template.hours,
            minutes: days * template.minutes,
            seconds: days * template.seconds
        }
    }

    function onConvert(e) {
        let inputElement = e.target.parentElement.querySelector('input[type="text"]');
        let time = converter(Number(inputElement.value), inputElement.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}