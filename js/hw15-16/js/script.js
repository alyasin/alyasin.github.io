'use strict';

function GoogleCallback (func, data) {
  window[func](data);
}

$(function(){

  var $search = $('.searchButton');

  $search.on('click', function(e){

    e.preventDefault();

    var $request = $('.requestText').val();

    $(function() {

      $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=" + $request + "&callback=GoogleCallback&context=?",
      function(data){

        var ul = document.createElement("ul");

        $.each(data.results, function(i, val){

          var li = document.createElement("li");

          li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a><p class="greenBlock">'+val.url.slice(0,val.url.indexOf("%"))+"</p><p>"+val.content+"</p>";
          ul.appendChild(li);
        });

        $('.resultsBlock').html(ul);
      });
    });
  });

});
