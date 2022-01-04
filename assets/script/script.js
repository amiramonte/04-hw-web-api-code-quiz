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
    {
        title: "What is 4 + 5?",
        choices: [
            "1", "2", "3", "4"
        ],
        answer: "3",
    },
    {
        title: "What is 3 + 23?",
        choices: [
            "1", "2", "3", "4"
        ],
        answer: "3",
    },
    {
        title: "What is 5 + 9?",
        choices: [
            "1", "2", "3", "4"
        ],
        answer: "3",
    },
];


// Functions


function startQuiz() {
    countDownTimer = setInterval(clockTick, 1000);
    startQuizZoneEl.style.display = "none";
    questionZoneEl.style.display = "block";
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
    resultsZoneEl.style.display = "block";
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

