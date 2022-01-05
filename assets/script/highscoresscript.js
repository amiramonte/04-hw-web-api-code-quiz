// import elements from the high scores html dom
let resetQuizButton = document.querySelector("#reset-quiz");

let resetHighScoresButton = document.querySelector("#reset-highscores");

let scoreTableEl = document.querySelector("#score-table");

// functions

function resetQuiz () {
    window.location.href = "index.html";
}

function postScores() {
    // set variable where json.parse local storage
    let runningScores = JSON.parse(localStorage.getItem("highscores"));  
    
    runningScores.sort((a,b) => b.score - a.score);

    // set foreach loop using variable declared above

    runningScores.forEach(function(score) {
        let tempRow = document.createElement("tr");
        let tempInitials = document.createElement("td");
        let tempScore = document.createElement("td");

        tempInitials.textContent = score.initials;
        tempScore.textContent = score.score;

        console.log(score.score);

        tempRow.appendChild(tempInitials);
        tempRow.appendChild(tempScore);

        scoreTableEl.append(tempRow);
    })
        
}

postScores();

function clearHighScores () {
    localStorage.clear();
    scoreTableEl.innerHTML = "";
}


// Event Listeners for button clicks

resetQuizButton.addEventListener("click", resetQuiz);
resetHighScoresButton.addEventListener("click", clearHighScores);