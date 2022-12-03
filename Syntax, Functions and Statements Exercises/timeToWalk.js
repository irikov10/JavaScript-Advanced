function timeToWalk(steps, footprintLengthInMeters, speed) {
    let distance = footprintLengthInMeters * steps;
    let speedInSeconds = speed / 3.6;
    let time = distance / speedInSeconds;
    let breaks = Math.floor(distance / 500);
    let min = Math.floor(time / 60);
    let seconds = (time - (min * 60)).toFixed(0);
    let hours = Math.floor(time / 3600);

    min += breaks;
    hours += Math.floor(min / 60);
    min = min % 60;

    let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedMins = min < 10 ? `0${min}` : `${min}`;
    let formattedSecs = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${formattedHours}:${formattedMins}:${formattedSecs}`)
}
timeToWalk(2564, 0.70, 5.5)