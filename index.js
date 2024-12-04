
(function() {
    var quizData = [
        { question: "What is the correct syntax to print in console?", answers: ["print()", "console.log()", "echo()"], correctAnswer: 1 },
        { question: "Which data type is NOT supported in JS?", answers: ["Number", "String", "Character"], correctAnswer: 2 },
        { question: "How do you declare a variable in ES5?", answers: ["let", "var", "const"], correctAnswer: 1 },
        { question: "What does 'typeof null' return?", answers: ["null", "undefined", "object"], correctAnswer: 2 },
        { question: "How to create a function?", answers: ["function = myFunc()", "function myFunc()", "create function myFunc()"], correctAnswer: 1 }
    ];

    var currentQuestionIndex = 0;
    var score = 0;

    var questionContainer = document.getElementById('question-container');
    var answersContainer = document.getElementById('answers-container');
    var nextButton = document.getElementById('next');
    var resultsContainer = document.getElementById('results');

    function showQuestion(index) {
        var currentQuestion = quizData[index];
        questionContainer.innerHTML = currentQuestion.question;
        answersContainer.innerHTML = '';

        currentQuestion.answers.forEach(function(answer, i) {
            var button = document.createElement('button');
            button.textContent = answer;
            button.className = 'answer-button';
            button.addEventListener('click', function() {
                if (i === currentQuestion.correctAnswer) {
                    score++;
                }
                nextButton.classList.remove('hidden');
                disableButtons();
            });
            answersContainer.appendChild(button);
        });
    }

    function disableButtons() {
        var buttons = document.querySelectorAll('.answer-button');
        buttons.forEach(function(button) {
            button.disabled = true;
            button.style.backgroundColor = '#95a5a6';
        });
    }

    function showResults() {
        questionContainer.classList.add('hidden');
        answersContainer.classList.add('hidden');
        nextButton.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsContainer.innerHTML = 'You scored ' + score + ' out of ' + quizData.length;
    }

    nextButton.addEventListener('click', function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(currentQuestionIndex);
            nextButton.classList.add('hidden');
        } else {
            showResults();
        }
    });

    showQuestion(currentQuestionIndex);
})();
