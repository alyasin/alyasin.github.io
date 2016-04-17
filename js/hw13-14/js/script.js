'use strict';

$(function () {

  var html = $('#test').html();
  var questions = [
    {
      question: 'Вопрос №1',
      answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      answer: 2
    },
    {
      question: 'Вопрос №2',
      answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      answer: 2
    },
    {
      question: 'Вопрос №3',
      answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      answer: 2
    }
  ];

  localStorage.setItem('test', JSON.stringify(questions));

  questions = JSON.parse(localStorage.getItem('test'));

  var content = tmpl(html, {
    data: questions
  });

  $('body').append(content);

});

$(function() {

  $('input[type=checkbox]').change(function(){

    $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');

  });

});

$(function() {

  $('.testButton').on('click', function () {

    var questions = JSON.parse(localStorage.getItem('test'));
    var correctAnswer = 0;
    var modalColor;

    for (var i = 0; i < questions.length; i++) {

      if ($("#answers_" + i + "_" + questions[i].answer).prop("checked")) {correctAnswer++};

    }

    if (correctAnswer == questions.length) {

      correctAnswer = "Поздравляем, Вы успешно прошли тест!!!";
      modalColor = 'green';

    } else {

      correctAnswer = "Вы провалили тест, количество допущенных ошибок - " + (questions.length - correctAnswer);
      modalColor = 'red';

    }

    var $modal = $('<div class="modal"><h1>' + correctAnswer + '</h1></div>');
    var $overlay = $('<div class="overlay"></div>');

    $modal.css({
      'background-color': modalColor
    })

    $('body').append($overlay);
    $('body').append($modal);

    $modal.one('click', function () {

      localStorage.removeItem('test');

      $modal.remove();
      $overlay.remove();

      location.reload();
    });

  })
});

