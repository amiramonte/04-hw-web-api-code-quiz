// import elements from the dom
let startQuizZoneEl = document.querySelector("#start-quiz-zone");
let questionZoneEl = document.querySelector("#question-zone");
let resultsZoneEl = document.querySelector("#results-zone");
let startQuizButtonEl = document.querySelector("#start-quiz");
let questionTitleEl = document.querySelector("#question-title");
let buttonZoneEl = document.querySelector("#button-zone");
let finalScoreEl = document.querySelector("#final-score");
let initialsEl = document.querySelector("#initials");
let submitButton = document.querySelector("#submit-button");


questionZoneEl.style.display = "none";
resultsZoneEl.style.display = "none";


let timeLeft = 60;
let countDownTimer;

let questionIndex = 0

let questions = [
    {
        title: "What type of language is Javascript?",
        choices: [
            "Ojbect Oriented", "Object Based", "Both of the above", "None of the above"
        ],
        answer: "Object Based",
    },
    {
        title: "You have the function highScores(). How do you properly call that function?",
        choices: [
            "highscores", "HighScores();", "highScores();", "highScores"
        ],
        answer: "highScores();",
    },
    {
        title: "In Javascript, the x === y statement implies what?",
        choices: [
            "x and y are equal in value only", "x and y are not equal", "x and y are equal in both value and data type", "x and y are equal in data type but not value"
        ],
        answer: "x and y are equal in both value and data type",
    },
    {
        title: "Which of the following type of variable is visible everywhere in your Javascript code?",
        choices: [
            "local variable", "global variable", "both of the above", "none of the above"
        ],
        answer: "global variable",
    },
    {
        title: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: [
            "concat()", "join()", "pop()", "map()"
        ],
        answer: "join()",
    },
    {
        title: "Which built-in method removes the last element from an array and returns that element?",
        choices: [
            "last()", "get()", "pop()", "join()"
        ],
        answer: "pop()",
    },
];


// Functions

function startQuiz() {
    countDownTimer = setInterval(clockTick, 1000);
    startQuizZoneEl.style.display = "none";
    questionZoneEl.style.display = "flex";
    generateQuestion();
}

function clockTick() {
    timeLeft--;
    if(timeLeft <= 0) {
        document.querySelector("#timer").textContent = "Time Is Up!";
        endQuiz();
    } else {
        document.querySelector("#timer").textContent = "Timer: " + timeLeft + " seconds remaining";
    }
}

function generateQuestion() {
    let currentQuestion = questions[questionIndex]
    questionTitleEl.textContent = currentQuestion.title;
    buttonZoneEl.innerHTML = "";
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
    // console.log(selectedAnswer);
    let correctAnswer = questions[questionIndex].answer;

    if (selectedAnswer !== correctAnswer) {
        timeLeft -= 10;
    }
    questionIndex ++;

    if (questionIndex < questions.length) {
        generateQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(countDownTimer);
    questionZoneEl.style.display = "none";
    resultsZoneEl.style.display = "flex";
    finalScoreEl.textContent = timeLeft;
}

function saveHighScore() {
    let initials = initialsEl.value.trim();
    let newScore = {
        initials: initials, 
        score: timeLeft
    }
    let currentHighScores = JSON.parse(localStorage.getItem("highscores")) || []
    currentHighScores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(currentHighScores));
    window.location.href = "highscores.html";

}


// Eventlisteners for button clicks

startQuizButtonEl.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveHighScore);

