let menuList = document.getElementById("menuList");

if (menuList) {
    menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }

    else {
        menuList.style.maxHeight = "0px";
    }
}

let toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleMenu);
    }
}

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

document.getElementById('start').addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(updateStopwatch, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
});

function updateStopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    document.getElementById('hours').innerText = pad(hours);
    document.getElementById('minutes').innerText = pad(minutes);
    document.getElementById('seconds').innerText = pad(seconds);
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}