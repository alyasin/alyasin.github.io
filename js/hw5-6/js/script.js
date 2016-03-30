document.getElementById("time").innerHTML = '00:00:00';
document.getElementById("milliseconds").innerHTML = 0;

var start = document.querySelector('.start');
var stop = document.querySelector('.stop');

stop.setAttribute('id', 'displayNone');

var d = new Date();
d.setHours(0, 0, 0, 000);

function timer() {
  myVar = setInterval(myTimer ,1);
  start.setAttribute('id', 'displayNone');
  stop.setAttribute('id', 'displayBlock');
}

function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  var milliseconds = d.getMilliseconds();
  if (milliseconds < 100) {
    milliseconds = '0' + milliseconds
  }
  document.getElementById("milliseconds").innerHTML = milliseconds;
}

function clearInt(myVar) {
  clearInterval(myVar);
  stop.setAttribute('id', 'displayNone');
  start.setAttribute('id', 'displayBlock');
}

