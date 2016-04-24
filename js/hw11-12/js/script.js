$(function () {

  var html = $('#test').html();
  var questions = [
    {
      question: 'Вопрос №1',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    },
    {
      question: 'Вопрос №2',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    },
    {
      question: 'Вопрос №3',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    }
  ];

  var content = tmpl(html, {
    data: questions
  });

  $('body').append(content);

});

$(function() {
    $('.wrapper-carousel').slider();
});

