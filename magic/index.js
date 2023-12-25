let body = document.querySelector('body');
let box = document.querySelector('#box');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let interval;
let events = function () {

    let color = '123456789ABCDEF';
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        hex += color[Math.floor(Math.random() * 16)];
    }

    if (!hex.includes('undefine')) {
        body.style.backgroundColor = hex;
        box.innerHTML = hex
    }
    else {
        body.style.backgroundColor = 'cyan';
        box.innerHTML = 'cyan'
    }
}

start.addEventListener('click', () => {
    interval=setInterval(events,1000)
})

stop.addEventListener('click', () => {
clearInterval(interval)
})







