document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "What is the capital of France?",
            answers: {
                a: "Berlin",
                b: "Madrid",
                c: "Paris"
            },
            correctAnswer: "c"
        },
        {
            question: "Who is the CEO of Tesla?",
            answers: {
                a: "Bill Gates",
                b: "Elon Musk",
                c: "Jeff Bezos"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: {
                a: "Earth",
                b: "Jupiter",
                c: "Saturn"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];

                for(letter in currentQuestion.answers){
                    answers.push(
                        `<li>
                            <label>
                                <input type="radio" name="question${questionNumber}" value="${letter}">
                                ${letter} :
                                ${currentQuestion.answers[letter]}
                            </label>
                        </li>`
                    );
                }

                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <ul class="answers"> ${answers.join('')} </ul>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach( (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            }
            else{
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});
