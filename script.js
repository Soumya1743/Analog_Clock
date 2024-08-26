let dark = document.getElementById('dark');
let container = document.getElementById('container');
let light = document.getElementById('light');
dark.style.display = "none";

let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('minute');
let secondHand = document.getElementById('second');

let time = document.getElementById("current-time");
setInterval(() =>{
    let d = new Date();
    time.innerHTML =d.toLocaleTimeString();
});
time.style.color = "white";
time.style.fontSize = "200%";
time.style.width = "12%";

function dark_light(){
    container.style.backgroundColor = "white";
    light.style.display = "none";
    dark.style.display = "block";
    time.style.color = "black";
}

function fun(){
    container.style.backgroundColor = "black";
    dark.style.display = "none";
    light.style.display = "block";
    time.style.color = "white";
}

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
