// import elements from the high scores html dom
let resetQuizButton = document.querySelector("#reset-quiz");

let resetHighScoresButton = document.querySelector("#reset-highscores");

let scoreListEl = document.querySelector("#score-list");

// functions

function resetQuiz () {
    window.location.href = "index.html";
}

function postScores() {
    // set variable where json.parse local storage
    let runningScores = JSON.parse(localStorage.getItem("highscores"));  
    

    
    // set for loop using variable declared above
    for (var i = 0; i < runningScores.length; i++) {


    }


    // put initials and scores headers in html table
    // push vaules from json.parse array to appropriate places in html table
}

postScores();


function clearHighScores () {
    localStorage.clear();
    scoreListEl.innerHTML = "";
}


// Event Listeners for button clicks

resetQuizButton.addEventListener("click", resetQuiz);
resetHighScoresButton.addEventListener("click", clearHighScores);