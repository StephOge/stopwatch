//Global variables
const time_el = document.querySelector('.clock .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let counter = 7460;
let interval = null;


//event listeners

//update timer
function timer () {
    counter++;

    // calculate the time
    let hours = Math.floor(counter / 3600);
    let mins = Math.floor((counter - (hours * 3600)) / 60);
    let secs = counter % 60;
   
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hours < 10) mins = '0' + hours;

    
    time_el.innerHTML = `${hours}:${mins}:${secs}`;
}

timer();