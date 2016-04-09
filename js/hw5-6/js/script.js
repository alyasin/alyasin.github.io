var timer = (function(){

  var start = document.querySelector('.start');
  var pause = document.querySelector('.pause');
  var clear = document.querySelector('.clear');
  var timerId = -1;
  var dStart = 0;
  var hhStart;
  var mmStart;
  var ssStart;
  var mssStart;

  document.getElementById("time").innerHTML = '00:00:00';
  document.getElementById("milliseconds").innerHTML = 0;

  start.addEventListener('click', function(){

    timerId = setInterval(myTimer, 1);

    start.setAttribute('id', 'displayNone');
    pause.setAttribute('id', 'displayBlock');

    document.querySelector('.start').innerHTML = 'Cont..';
  });

  pause.addEventListener('click', function(){

    if (timerId > -1) {
      clearInterval(timerId);
    }

    pause.setAttribute('id', 'displayNone');
    start.setAttribute('id', 'displayBlock');
  });

  clear.addEventListener('click', function(){

    if (timerId > -1) {
      clearInterval(timerId);
    }

    pause.setAttribute('id', 'displayNone');
    start.setAttribute('id', 'displayBlock');

    document.querySelector('.start').innerHTML = 'Start';
    document.getElementById("time").innerHTML = '00:00:00';
    document.getElementById("milliseconds").innerHTML = 0;

    dStart = 0;
  });

  function myTimer() {

    var d = new Date();
    var hh = new Date().getHours();
    var mm = new Date().getMinutes();
    var ss = new Date().getSeconds();
    var mss = new Date().getMilliseconds()

    if (dStart == 0) {

      hhStart = hh;
      mmStart = mm;
      ssStart = ss;
      mssStart = mss;
      dStart = d;
    }

    hh = hh - hhStart;
    mm = mm - mmStart;
    ss = ss - ssStart;
    mss = mss - mssStart;

    d.setHours(hh, mm, ss, mss);

    var timeString = d.toLocaleTimeString();

    if (timeString.length < 8) {

      timeString = '0' + timeString;
    }

    document.getElementById("time").innerHTML = timeString;

    var milliseconds = d.getMilliseconds();

    if (milliseconds < 10) {

      milliseconds = '0' + milliseconds
    }

    if (milliseconds < 100) {

      milliseconds = '0' + milliseconds
    }

    document.getElementById("milliseconds").innerHTML = milliseconds;
  }


})();

