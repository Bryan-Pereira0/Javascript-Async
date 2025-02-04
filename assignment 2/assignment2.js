//Assignment 2 Task 1
let intervalId;

function startTimer() {
    let counter = 0;
    const duration = parseInt(document.getElementById('duration').value);
    let timer = duration;
    const display = document.getElementById('countdown');
    clearInterval(intervalId);

    intervalId = setInterval(() => {
        timer = duration - counter;
        timer--;
        display.innerHTML = timer;
        counter++;
        if (timer == 0) {
            clearInterval(intervalId);
            alert('Timer Complete!');
        }
    }, 1000);
}

//Assignment 2 Task 2
function showNotification(message, delay) {
    setTimeout(() => {
      alert(message);
    }, delay);
  }
  
  showNotification('Message Delay!', 5000);

//Assignment 2 Task 3
function startRepeatNotification(message, interval) {
    let notificationId = setInterval(() => {
        if (confirm(message)) {
            clearInterval(notificationId);
        }
    }, interval);
}

startRepeatNotification('Repeat Message!', 5000);
