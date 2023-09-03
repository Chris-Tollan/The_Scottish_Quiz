// Global Selectors - DOM //
const question = document.getElementById('question_text');
const choices = Array.from(document.getElementsByClassName('choice_text'));
const questionCounterNumber = document.getElementById('questionCounter');

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

// list of 40 questions for selection //
let questions = [
    {
        question: "What is the Capital of Scotland?",
        choice1: "London",
        choice2: "Madrid",
        choice3: "Edinburgh",
        choice4: "Belfast",
        correct: 3
    },
    {
        question: "What is Scotlands national dish?",
        choice1: "Curry",
        choice2: "Haggis",
        choice3: "Pizza",
        choice4: "Stir Fry",
        correct: 2
    },
    {
        question: "What is Scotlands national animal?",
        choice1: "Unicorn",
        choice2: "Snake",
        choice3: "Bull",
        choice4: "Goat",
        correct: 1
    },
    {
        question: "What is the highest mountain in Scotland?",
        choice1: "Mount Everest",
        choice2: "Ben Nevis",
        choice3: "Lhotse",
        choice4: "K2",
        correct: 1
    },
    {
        question: "What colours make up the Scotland flag?",
        choice1: "Blue and White",
        choice2: "Red and Blue",
        choice3: "Yellow and Green",
        choice4: "Claret and Amber",
        correct: 1
    },
    {
        question: "Which famous annual festival takes place in every August in Edinburgh?",
        choice1: "TRNSMT",
        choice2: "Glastonbury",
        choice3: "Isle of Wight",
        choice4: "The Fringe",
        correct: 4
    },
    {
        question: "How many counties are in Scotland?",
        choice1: "54",
        choice2: "33",
        choice3: "12",
        choice4: "24",
        correct: 2
    },
    {
        question: "What is Scotlands national instrument?",
        choice1: "Drums",
        choice2: "Flute",
        choice3: "Bagpipes",
        choice4: "Saxophone",
        correct: 3
    },
    {
        question: "What is the Loch Ness monsters nickname?",
        choice1: "Nessie",
        choice2: "Senga",
        choice3: "Bessie",
        choice4: "Helga",
        correct: 1
    },
    {
        question: "What sport was invented in Scotland?",
        choice1: "Darts",
        choice2: "Tennis",
        choice3: "Boxing",
        choice4: "Golf",
        correct: 4
    },
    {
        question: "What is the biggest Loch in Scotland?",
        choice1: "Loch Lomand",
        choice2: "Loch Ness",
        choice3: "Loch Awe",
        choice4: "Loch Goil",
        correct: 1
    },
    {
        question: "How many islands are there in Scotland?",
        choice1: "38",
        choice2: "790",
        choice3: "542",
        choice4: "328",
        correct: 2
    },
    {
        question: "What is the oldest University in Scotland?",
        choice1: "University of the West of Scotland",
        choice2: "St Andrews",
        choice3: "Caledonian",
        choice4: "University of Stirling",
        correct: 2
    },
    {
        question: "Which Scottish actor portrayed James Bond?",
        choice1: "Ewan McGregor",
        choice2: "Gerard Butler",
        choice3: "Sean Connery",
        choice4: "James McAvoy",
        correct: 3
    },
    {
        question: "What is the name of the famous Scottish patern?",
        choice1: "Tartan",
        choice2: "Pinstripe",
        choice3: "Checkered",
        choice4: "Spotted",
        correct: 1
    },
    {
        question: "What is the most popular soft drink in Scotland?",
        choice1: "Coca Cola",
        choice2: "Irn Bru",
        choice3: "Fanta",
        choice4: "Tizer",
        correct: 2
    },
    {
        question: "What is the name of the Scottish flag?",
        choice1: "St Georges Cross",
        choice2: "Saltire",
        choice3: "Bear Flag",
        choice4: "Bonnie Blue Flag",
        correct: 2
    },
    {
        question: "What is the name of the pouch worn at the front of a kilt?",
        choice1: "Purse",
        choice2: "Coin Bag",
        choice3: "Whisky Flap",
        choice4: "Sporran",
        correct: 4
    },
    {
        question: "How long must Scottish Whisky be matured for to become Whisky?",
        choice1: "1 year",
        choice2: "3 years",
        choice3: "8 years",
        choice4: "12 years",
        correct: 2
    },
    {
        question: "Who is the national poet of Scotland?",
        choice1: "Rabbie Burns",
        choice2: "William Wallace",
        choice3: "Walter Scott",
        choice4: "William Dunbar",
        correct: 2
    },

    {
        question: "What Scottish town was once famous for its steel production?",
        choice1: "Motherwell",
        choice2: "Crieff",
        choice3: "Inverness",
        choice4: "Lanark",
        correct: 1
    },
    {
        question: "What is the oldest sport in Scotland?",
        choice1: "Curling",
        choice2: "Darts",
        choice3: "Tennis",
        choice4: "Volleyball",
        correct: 1
    },
    {
        question: "What town is known as the home of Golf?",
        choice1: "Airdrie",
        choice2: "Bellshill",
        choice3: "Cumbernauld",
        choice4: "St Andrews",
        correct: 4
    },
    {
        question: "What is new year called in Scotland?",
        choice1: "Fresh Begin",
        choice2: "Hogmanay",
        choice3: "New In",
        choice4: "Another year",
        correct: 2
    },
    {
        question: "What sport does Andy Murray play?",
        choice1: "Tennis",
        choice2: "Golf",
        choice3: "Fishing",
        choice4: "Long Jump",
        correct: 1
    },
    {
        question: "What are neeps and tatties?",
        choice1: "Potato and Carrot",
        choice2: "Cabbage and Brocolli",
        choice3: "Beans and Rice",
        choice4: "Turnip and Potato",
        correct: 4
    },
    {
        question: "Where is comedian Billy Connelly from?",
        choice1: "Perth",
        choice2: "Aberdeen",
        choice3: "Glasgow",
        choice4: "Edinburgh",
        correct: 3
    },
    {
        question: "What alcohol is Scotlland most famous for producing?",
        choice1: "Wine",
        choice2: "Gin",
        choice3: "Vodka",
        choice4: "Whisky",
        correct: 4
    },
    {
        question: "Which of the following towns is not in Scotland?",
        choice1: "Twat",
        choice2: "Dull",
        choice3: "Peiness",
        choice4: "Bitchfield",
        correct: 4
    },
    {
        question: "How long is the West Highland Way?",
        choice1: "96 miles",
        choice2: "104 miles",
        choice3: "78 miles",
        choice4: "89 miles",
        correct: 1
    },
    {
        question: "When did Scotland become part of the United Kingdom?",
        choice1: "1984",
        choice2: "1680",
        choice3: "1707",
        choice4: "1876",
        correct: 3
    },
    {
        question: "What is the most populated city in Scotland?",
        choice1: "Stirling",
        choice2: "Glasgow",
        choice3: "Dundee",
        choice4: "Aberdeen",
        correct: 2
    },
    {
        question: "What country is to the South West of Scotland?",
        choice1: "Poland",
        choice2: "Australia",
        choice3: "Russia",
        choice4: "Nothern Ireland",
        correct: 4
    },
    {
        question: "A munro is the name given to a Scottish Hill above what height?",
        choice1: "3000 feet",
        choice2: "2500 feet",
        choice3: "7000 feet",
        choice4: "100 feet",
        correct: 1
    },
    {
        question: "Who invented the telephone?",
        choice1: "Albert Speaker",
        choice2: "Robert Chime",
        choice3: "David Ringer",
        choice4: "Alexander Graham Bell",
        correct: 4
    },
    {
        question: "Scotland is home to the oldest what in Europe?",
        choice1: "House",
        choice2: "Turtle",
        choice3: "Tree",
        choice4: "Squid",
        correct: 3
    },
    {
        question: "Where is the Wallace Monument?",
        choice1: "Edinburgh",
        choice2: "Lanark",
        choice3: "Motherwell",
        choice4: "Stirling",
        correct: 4
    },
    {
        question: "What did John Logie Baird invent?",
        choice1: "Television",
        choice2: "Radio",
        choice3: "Internet",
        choice4: "Coffee",
        correct: 1
    },
    {
        question: "Scotland is home to the worlds tallest?",
        choice1: "tree",
        choice2: "hedge",
        choice3: "hill",
        choice4: "thermometer",
        correct: 2
    },
    {
        question: "On what date is St Andrews day?",
        choice1: "July 18th",
        choice2: "January 25th",
        choice3: "November 30th",
        choice4: "March 11th",
        correct: 2
    },


];

function startQuiz() {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// load next question and answers //
// set questions to total of 10 //
// when question limit reached save score and navigate to end page //
getNewQuestion = () => {
    if (questionCounter == 10) {
        return window.location.assign('/end.html');
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

// start quiz function
startQuiz();