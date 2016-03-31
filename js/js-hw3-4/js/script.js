var test = {
  
  testBody: document.body,
  testForm: document.createElement('form'),
  testHeader: document.createElement('h2'),
  testButton: document.createElement('button'),
  
  questions: [
    {
      question: 'Вопрос №1',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      multiReturn: true
    },
    {
      question: 'Вопрос №2',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      multiReturn: true
    },
    {
      question: 'Вопрос №3',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      multiReturn: true
    }
  ],

  createForm: function() {
    this.testBody.appendChild(this.testForm);
    this.testForm.className = 'testForm';
  },
  
  createHeader: function(text) {
    this.testForm.appendChild(this.testHeader);
    this.testHeader.className = 'header';
    this.testHeader.innerHTML = text;
  },
  
  createQuestion: function(maxQuestion, maxAnswer) {
    for ( var question = 0; question < maxQuestion; question++) {
      
      var testQuestion = document.createElement('form');
      this.testForm.appendChild(testQuestion);
      testQuestion.className = 'question ' + 'question_' + question;
      testQuestion.innerHTML = '<h2>' + this.questions[question].question + '</h2>';
      
      for (var answer = 0; answer < maxAnswer; answer++) {
        
        var testAnswerLabel = document.createElement('label');
        testQuestion.appendChild(testAnswerLabel);
        testAnswerLabel.className = 'answer ' + 'answer_' + question + '_' + answer;
        
        var testAnswerInput = document.createElement('input');
        testAnswerLabel.appendChild(testAnswerInput);
        testAnswerInput.className = 'checkbox';
        testAnswerInput.setAttribute('type', 'checkbox');
        testAnswerInput.setAttribute('id', 'answer_' + question + '_' + answer);
        
        var testAnswerText = document.createElement('p');
        testAnswerLabel.appendChild(testAnswerText);
        testAnswerText.innerHTML = this.questions[question].answer[answer];
      } 
    }
  },
  
  createButton: function(text) {
    this.testForm.appendChild(this.testButton);
    this.testButton.className = 'testButton';
    this.testButton.innerHTML = '<h2>' + text + '</h2>';
  }
}

test.createForm();
test.createHeader('Тест по программированию');
test.createQuestion(3, 3);
test.createButton('Проверить мои результаты')


