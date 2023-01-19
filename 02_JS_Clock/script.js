const secondPointer = document.querySelector('.seconds');
const minutePointer = document.querySelector('.minutes');
const hourPointer = document.querySelector('.hours');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondPointer.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutePointer.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getMinutes();
    const hourDegrees = ((minutes / 12) * 360) + 90;
    hourPointer.style.transform = `rotate(${hourDegrees}deg)`;
    
    console.log(seconds);
}

setInterval(setDate, 1000);

setDate();