let display = document.querySelector('.time')
let hour = 0
let min = 0
let sec = 0
let stopwatch

function timer() {
    let time = (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
    display.innerText = time
    sec++
    if(sec > 59) {
        sec = 0
        min++
    }
    if(min > 59) {
        min = 0
        hour++
    }
}

function start() {
    stopwatch = setInterval(() => timer(), 1000)
}

function pause() {
    clearInterval(stopwatch)
}

function reset() {
    clearInterval(stopwatch)
    hour = 0
    min = 0
    sec = 0
    display.innerText = ':)'
}