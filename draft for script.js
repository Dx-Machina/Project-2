var currentQuestion, score, choicesContainer, questionElement;

startQuiz(questions, 'choices1', 10);

function startQuiz(questions, questionLimit) 
{
    // Reset current question and score
    currentQuestion = 0;
    questionCount = 0;
    score = 0;



    questionElement = document.getElementById(questionId);

    // Set the choicesContainer and questionElement to the correct elements
    choicesContainer = document.getElementById(choicesId);

    console.log('choicesId:', choicesId);
    console.log('choicesContainer:', choicesContainer);
    

    // Display the first question
    displayQuestion();
  }

function displayQuestion() 
{
    // Clear the previous choices
    while (choicesContainer.firstChild) 
    {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }

    // Set the new question
    var randomIndex = Math.floor(Math.random() * questions.length);
    var question = questions[randomIndex];
    questionElement.textContent = question.question;

    // Set the new choices
    for (var i = 0; i < question.choices.length; i++) {
        var button = document.createElement('button');
        button.textContent = question.choices[i];
        button.value = i;
        button.addEventListener('click', function() 
        {
            // When a choice is clicked, check the answer and go to the next question
            checkAnswer(parseInt(this.value));
            currentQuestion++;
            if (currentQuestion < questions.length) 
            {
                displayQuestion();
            } 
            else 
            {
                // The quiz is over, display the score
                questionElement.textContent = "Quiz over! Your score is " + score;
                choicesContainer.textContent = "";
            }
        });
        choicesContainer.appendChild(button);
    }
}

function checkAnswer(userChoice) 
{
        var question = questions[currentQuestion]; // Get the current question
        if (userChoice === question.correctAnswer) {
            // The user's choice is correct
            score++;
            alert("Correct!");
        } else {
            // The user's choice is incorrect
            alert("Incorrect. The correct answer is " + question.choices[question.correctAnswer] + ".");
        }
}