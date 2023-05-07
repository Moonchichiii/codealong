const midSummer = '02 nov 2023';

function countdown() {
    const midSummerDate = new Date(midSummer);
    const currentDate = new Date();
    
    const totalSeconds = (midSummerDate - currentDate) / 1000;
 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#mins').innerHTML = mins;
    document.querySelector('#seconds').innerHTML = seconds;
}

// initial call
countdown();

// update the countdown every second
setInterval(countdown, 1000);

 

