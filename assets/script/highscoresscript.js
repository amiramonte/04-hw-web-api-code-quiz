// import elements from the high scores html dom
let resetQuizButton = document.querySelector("#reset-quiz");


// functions

function resetQuiz () {
    window.location.href = "index.html";
}


// Event Listeners for button clicks

resetQuizButton.addEventListener("click", resetQuiz);