var time = 60;
var timerId = null;

var timerDisplay = document.getElementById("timer");
var input = document.getElementById("timeInput");

function updateDisplay() {
    timerDisplay.textContent = time;
}

function countdown() {
    if (time > 0) {
        time = time - 1;
        updateDisplay();
    } else {
        clearInterval(timerId);
        timerId = null;
        alert("Час вичерпано!");
    }
}

document.getElementById("startBtn").onclick = function() {
    if (timerId == null) {
        time = parseInt(input.value);
        updateDisplay();
        timerId = setInterval(countdown, 1000);
    }
}

document.getElementById("pauseBtn").onclick = function() {
    clearInterval(timerId);
    timerId = null;
}

document.getElementById("addBtn").onclick = function() {
    time = time + 10;
    updateDisplay();
}

document.getElementById("subBtn").onclick = function() {
    if (time > 10) {
        time = time - 10;
    } else {
        time = 0;
    }
    updateDisplay();
}