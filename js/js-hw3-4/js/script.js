var test = {
  
  testBody: document.body,
  testForm: document.createElement('form'),
  testHeader: document.createElement('h2'),
  testButton: document.createElement('button'),
  
  createForm: function() {
    this.testBody.appendChild(this.testForm);
    this.testForm.classList.add('testForm');
  },
  
  createHeader: function(text) {
    this.testForm.appendChild(this.testHeader);
    this.testHeader.classList.add('header');
    this.testHeader.innerHTML = text;
  },
  
  createQuestion: function(maxQuestion, maxAnswer) {
    for ( var question = 1; question < maxQuestion + 1; question++) {
      
      var testQuestion = document.createElement('form');
      this.testForm.appendChild(testQuestion);
      testQuestion.className = 'question ' + 'question_' + question;
      testQuestion.innerHTML = '<h2>' + question + '. Вопрос №' + question + '</h2>';
      
      for (var answer = 1; answer < maxAnswer + 1; answer++) {
        
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
        testAnswerText.innerHTML = 'Вариант ответа №' + answer;  
      } 
    }
  },
  
  createButton: function(text) {
    this.testForm.appendChild(this.testButton);
    this.testButton.className = 'testButton';
    this.testButton.innerHTML = '<h2>' + text + '</h2>';
  },
}

test.createForm();
test.createHeader('Тест по программированию');
test.createQuestion(3, 3);
test.createButton('Проверить мои результаты')


