
var start = document.querySelector('.start');
var pause = document.querySelector('.pause');

clearInt(0, 'clear');
timerId = -1;

pause.setAttribute('id', 'displayNone');

function timer() {
  timerId = setInterval(myTimer ,1);
  start.setAttribute('id', 'displayNone');
  document.querySelector('.start').innerHTML = 'Cont..';
  pause.setAttribute('id', 'displayBlock');
}

function myTimer() {
  d = new Date();

  var time = d.toLocaleTimeString();
  if (time.length < 8) {
    time = '0' + time;
  }
  document.getElementById("time").innerHTML = time;

  var milliseconds = d.getMilliseconds();
  if (milliseconds < 10) {
    milliseconds = '0' + milliseconds
  }
  if (milliseconds < 100) {
    milliseconds = '0' + milliseconds
  }
  document.getElementById("milliseconds").innerHTML = milliseconds;
}

function clearInt(timerId, button) {
  if (timerId > 0) {
    clearInterval(timerId);
  }
  pause.setAttribute('id', 'displayNone');
  start.setAttribute('id', 'displayBlock');

  if (button === 'clear'){
    document.querySelector('.start').innerHTML = 'Start';
    document.getElementById("time").innerHTML = '00:00:00';
    document.getElementById("milliseconds").innerHTML = 0;
  }
}

