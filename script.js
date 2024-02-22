'use strict';

const time = document.getElementById('time');
const stop = document.getElementById('stop');
const alert = document.getElementById('alert');

const addZero = time => time < 10 ? '0' + time : time;

const timeZone = time => time > 12 ? time - 12 : time;

function getTime() {
    const currentTime = new Date();
    time.innerText = `${addZero(timeZone(currentTime.getHours()))} : ${addZero(currentTime.getMinutes())} : ${addZero(currentTime.getSeconds())}`;
}

// for first time rendering, so that we don't have to wait for 1 second
getTime();

// calling getTime after 1 second and keep invoking on the inteval of 1 second until stop event won't trigger
const intervalId = setInterval(getTime, 1000);

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    alert.innerText = 'Refresh page to start the time';
    alert.style.color = 'green';
});