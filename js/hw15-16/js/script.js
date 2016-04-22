'use strict';

function GoogleCallback(func, data) {
  window[func](data);
}

$(function () {

  var $search = $('.searchButton');

  $search.on('click', function (e) {

    e.preventDefault();

    var $request = $('.requestText').val();

    $(function () {

      $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=" + $request + "&callback=GoogleCallback&context=?",
        function (data) {

          var ul = document.createElement("ul");

          $.each(data.results, function (i, val) {

            var li = document.createElement("li");

            li.innerHTML = '<a href="' + val.url + '" title="' + val.url + '" target="_blank">' + val.title + '</a><p class="greenBlock">' + val.url.slice(0, val.url.indexOf("%")) + "</p><p>" + val.content + "</p>";
            ul.appendChild(li);
          });

          $('.resultsBlock').html(ul);
        });
    });
  });
});



(function() {
  function Human () {
    this.name = 'Tom';
    this.age = 25;
    this.sex = 'male';
    this.height = 180;
    this.weight = 80;
  }

  function Worker () {};

  Worker.prototype = new Human;

  Worker.prototype.placeWork = 'Grant-Kohrs Ranch';
  Worker.prototype.wages = 2000;
  Worker.prototype.work = function () {
    console.log('To work, the sun still high !!!');
  };

  function Student () {};

  Student.prototype = new Human;

  Student.prototype.studyPlace = 'UCLA';
  Student.prototype.stipend = 1000;
  Student.prototype.watchSeries = function () {
    console.log("Exams are still far - it's time to watch the TV series");
  }

  var newWorker = [];
  var newStudent = [];

  for(var i = 1; i < 3; i++){
    newWorker[i] = new Worker;
    newStudent[i] = new Student;

    console.log('newWorker[', i, '] -', newWorker[i]);
    newWorker[i].work();
    console.log('newStudent[', i, '] -', newStudent[i]);
    newStudent[i].watchSeries();
  }

})();





