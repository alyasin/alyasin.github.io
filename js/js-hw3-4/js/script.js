var test = {
  
  testBody: document.body,
  testForm: document.createElement('form'),
  testHeader: document.createElement('h2'),
  fragment: document.createDocumentFragment(),
  testSection: document.createElement('form'),
  testAnswerLabel: document.createElement('label'),
  testAnswerInput: document.createElement('input'),
  testButton: document.createElement('button'),
  
  createForm: function() {
    this.testBody.appendChild(this.testForm);
    this.testForm.classList.add('testForm');
  },
  
  createHeader: function() {
    this.testForm.appendChild(this.testHeader);
    this.testHeader.classList.add('header');
    this.testHeader.innerHTML = 'Тест по программированию';
  },
  
  createSection: function() {
    for ( var i = 1; i < 4; i++) {
      this.testForm.appendChild(this.testSection);
      this.testSection.className = 'question_' + i;
      this.testSection.innerHTML = '<h2>' + i + '. Вопрос №' + i + '</h2>';
      for (var j = 1; j < 4; j++) {
        this.testSection.appendChild(this.testAnswerInput);
        this.testAnswerInput.setAttribute('type', 'checkbox');
        this.testAnswerInput.setAttribute('id', 'answer_' + i + '_' + j);
        this.testSection.appendChild(this.testAnswerLabel);
        this.testAnswerLabel.setAttribute('for', 'answer_' + i + '_' + j);
        this.testAnswerLabel.innerHTML = 'Вариант ответа №' + j;  
//        debugger;
      } 
    }
    this.testForm.appendChild(this.testButton)
  },
  createAnswer: function(i, j) {
  },
}

test.createForm();
test.createHeader();
test.createSection();


