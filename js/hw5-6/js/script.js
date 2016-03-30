
var start = document.querySelector('.start');
var pause = document.querySelector('.pause');

clearInt(0, 'clear');

pause.setAttribute('id', 'displayNone');

var d = new Date();
d.setHours(0, 0, 0, 000);

function timer() {
  myVar = setInterval(myTimer ,1);
  start.setAttribute('id', 'displayNone');
  document.querySelector('.start').innerHTML = 'Cont..';
  pause.setAttribute('id', 'displayBlock');
}

function myTimer() {
  var d = new Date();

  var time = d.toLocaleTimeString();
  if (d.toLocaleTimeString() < 10) {
    time = '0' + time;
  }
  document.getElementById("time").innerHTML = time;

  var milliseconds = d.getMilliseconds();
  if (milliseconds < 100) {
    milliseconds = '0' + milliseconds
  }
  document.getElementById("milliseconds").innerHTML = milliseconds;
}

function clearInt(myVar, button) {
  clearInterval(myVar);
  pause.setAttribute('id', 'displayNone');
  start.setAttribute('id', 'displayBlock');

  if (button === 'clear'){
    document.querySelector('.start').innerHTML = 'Start';
    document.getElementById("time").innerHTML = '00:00:00';
    document.getElementById("milliseconds").innerHTML = 0;
  }
}

