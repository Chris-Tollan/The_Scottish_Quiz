import { questions } from './questions.js';

// parts of the below javascript was completed and amended from the James Q Quick tutorial referenced in the readME for this project//
// Global Selectors - DOM //
const question = document.getElementById('question_text');
const choices = Array.from(document.getElementsByClassName('choice_text'));
const questionCounterNumber = document.getElementById('questionCounter');

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

function startQuiz() {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// load next question and answers //
// set questions to total of 10 //
// when question limit reached save score and navigate to end page //
let getNewQuestion = () => {
    if (questionCounter == 10) {
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterNumber.innerText = questionCounter;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // if correct choice will highlight green
        //if incorrect choice will highlight red
        // will then move to next question after set time
        const classToApply =
            selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementCorrectScore();
        } else {
            incrementIncorrectScore();
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 600);

    });
});

// function for score board to increment by 1 if
// correct choice
function incrementCorrectScore() {

    let correctScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++correctScore;
    localStorage.setItem('newestScore', correctScore);
}

// function for score board to increment by 1 if
// correct choice
function incrementIncorrectScore() {

    let incorrectScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++incorrectScore;

}

// start quiz function for when page has loaded //
document.addEventListener("DOMContentLoaded", function () {
    startQuiz();
});