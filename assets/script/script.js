// import elements from the dom
let startQuizZoneEl = document.querySelector("#start-quiz-zone");
let questionZoneEl = document.querySelector("#question-zone");
let resultsZoneEl = document.querySelector("#results-zone");
let startQuizButtonEl = document.querySelector("#start-quiz");
let questionTitleEl = document.querySelector("#question-title");
let buttonZoneEl = document.querySelector("#button-zone");



questionZoneEl.style.display = "none";
resultsZoneEl.style.display = "none";


// Countdown Timer

let timeLeft = 60;
let countDownTimer;

let questionIndex = 0

let questions = [
    {
        title: "What is the time?",
        choices: [
            "1", "2", "3", "4"
        ],
        answer: "2",
    },
    {
        title: "What is 1 + 1?",
        choices: [
            "1", "2", "3", "4"
        ],
        answer: "3",
    },
];


// Functions


function startQuiz() {
    countDownTimer = setInterval(clockTick, 1000)
    startQuizZoneEl.style.display = "none";
    questionZoneEl.style.display = "block";
    generateQuestion();
}

function clockTick() {
    timeLeft--;
    if(timeLeft <= 0) {
        clearInterval(countDownTimer);
        document.querySelector("#timer").textContent = "Time Is Up!";
    } else {
        document.querySelector("#timer").textContent = "Timer: " + timeLeft + " seconds remaining";
    }
}


function generateQuestion() {
    let currentQuestion = questions[questionIndex]
    questionTitleEl.textContent = currentQuestion.title;
    currentQuestion.choices.forEach(function(choice) {
        let tempBtn = document.createElement("button");
        tempBtn.textContent = choice;
        tempBtn.setAttribute("class", "question-button");
        tempBtn.setAttribute("value", choice);
        tempBtn.onclick = validateAnswer;
        buttonZoneEl.append(tempBtn);
    })
}

function validateAnswer() {
    let selectedAnswer = this.value;
    let correctAnswer = questions[questionIndex].answer;
}

function endQuiz() {}




// Eventlisteners for button clicks

startQuizButtonEl.addEventListener("click", startQuiz);
















// write 5 multiple choice questions
// Get quiz question to populate in the "question-title" section of "question-zone"
// have multiple choice answers populate in the "button-zone" of the "question-zone"
// have each multiple choice answer populate in the "button-zone" as a button
// have a 'right' or 'wrong' notification populate underneath the 4 multiple choice answers when the right or wrong answer is chosen by the user
// once user selects right or wrong answer, move to the next question
// at end of the 5th question, move to the "results-zone" after user chooses an answer
// after user submits initials on "results-zone" page, move to high scores html page
// user's score and initials should be pushed to local storage
// high scores page should have a 'Go Back' button to redirect to beginning of questions or "question-zone" section
// high scores page should have a 'Reset High scores' button to clear local storage