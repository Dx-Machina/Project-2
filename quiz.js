function startQuiz(questions, limit) {
    let tempQuestions = [...questions];
    let score = 0;
    let count = 0;

    let quizContainer = document.getElementById('quizDiv');
    let questionContainer = document.getElementById('questionDiv');
    let questionElement = document.getElementById('question');
    let choicesElement = document.getElementById('choices');
    let resultElement = document.getElementById('result');

    console.log("quizContainer:",quizContainer);
    console.log("questionContainer:",questionContainer);
    console.log("questionElement:",questionElement);
    console.log("choicesElement:",choicesElement);

    // Hide the quiz container and show the question container
    quizContainer.style.display = 'none';
    questionContainer.style.display = 'block';

    function askQuestion() {
        if (count < limit) 
        {
            // Generate a random index
            let randomIndex = Math.floor(Math.random() * tempQuestions.length);

            // Select a question
            let question = tempQuestions[randomIndex];

            // Remove the question from the array to avoid asking it again
            tempQuestions.splice(randomIndex, 1);

            // Display the question
            questionElement.textContent = question.question;

            // Display the question counter
            let questionCounter = document.getElementById('questionCounter');
            questionCounter.textContent = 'Question ' + (count + 1) + ' of ' + limit;

            // Clear previous choices
            choicesElement.innerHTML = '';

            // Display the choices
            question.choices.forEach(function(choice, index) {
                let choiceButton = document.createElement('button');
                choiceButton.textContent = choice;
                choiceButton.addEventListener('click', function() {
                    // Check the answer
                    if (index == question.correctAnswer) {
                        score++;
                    }
                    // Ask the next question
                    count++;
                    askQuestion();
                });
                choicesElement.appendChild(choiceButton);
            });
        } 
        else 
        {
            console.log("Quiz is over! Your score is " + score);
            // Quiz is over
            console.log("resultElement:",resultElement);
            resultElement.textContent = 'Your score is ' + score + ' out of ' + limit;
            choicesElement.innerHTML = '';
            
            // Clear the question
            questionElement.textContent = '';
            
            // Show the submit result button
            let submitButton = document.getElementById('submitResult');
            submitButton.style.display = 'block';
            submitButton.addEventListener('click', function() {
                // Submit the result
                console.log("Submitting the result");

                // Hide the question container
                questionContainer.style.display = 'none';

                // Hide the submit result button
                submitButton.style.display = 'none';

                //hide the result
                resultElement.textContent = '';

                // Show the quiz container
                quizContainer.style.display = 'flex';
                document.getElementById('quizGrid').style.display = 'block';
            });
        }
    }

    // Start the quiz
    askQuestion();
}