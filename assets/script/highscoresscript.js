// import elements from the high scores html dom
let resetQuizButton = document.querySelector("#reset-quiz");

let scoreListEl = document.querySelector("#score-list");

let resetHighScoresButton = document.querySelector("#reset-highscores");

// functions

function resetQuiz () {
    window.location.href = "index.html";
}

function postScores() {
    scoreListEl.innerHTML = localStorage.getItem("highscores", "currentHighScores");
}

postScores();


function clearHighScores () {
    localStorage.clear();
    scoreListEl.innerHTML = "";
}


// Event Listeners for button clicks

resetQuizButton.addEventListener("click", resetQuiz);
resetHighScoresButton.addEventListener("click", clearHighScores);