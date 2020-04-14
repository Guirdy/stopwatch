// O timer na tela principal do cronometro
let display = document.querySelector('.time')

//botão start e adição do evento click
let btnStart = document.querySelector('#start')
btnStart.addEventListener('click', () => start())

//botão pause e adição do evento click
let btnPause = document.querySelector('#pause')
btnPause.addEventListener('click', () => pause())

//botão reset e adição do evento click
let btnReset = document.querySelector('#reset')
btnReset.addEventListener('click', () => reset())

let hour = 0
let min = 0
let sec = 0

let stopwatch
let btnControl

// Ativa e desativa os botões Start e Pause
function btn() {
    if(btnControl == true) {
        btnStart.style.display = 'none'
        btnPause.style.display = 'block'
    } else {
        btnPause.style.display = 'none'
        btnStart.style.display = 'block'
    }
}

// Função para atualizar o timer
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

// Função para iniciar o cronômetro
function start() {
    stopwatch = setInterval(() => timer(), 1000)
    btnControl = true
    btn()
}

// Função para pausar o cronômetro
function pause() {
    clearInterval(stopwatch)
    btnControl = false
    btn()
}

// Função para resetar o cronômetro
function reset() {
    clearInterval(stopwatch)
    hour = 0
    min = 0
    sec = 0
    btnControl = false
    btn()
    display.innerText = '00:00:00'
}