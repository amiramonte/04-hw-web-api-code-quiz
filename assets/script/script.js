// import elements from the dom
let startQuizZoneEl = document.querySelector("#start-quiz-zone");
let questionZoneEl = document.querySelector("#question-zone");
let resultsZoneEl = document.querySelector("#results-zone");
let startQuizButtonEl = document.querySelector("start-quiz");



questionZoneEl.style.display = "none";
resultsZoneEl.style.display = "none";


// Functions

function buildQuiz() {

}

function showHighScores() {

}

// Eventlisteners for button clicks

startQuizButtonEl.addEventListener("click", buildQuiz);





// Quiz Questions

let quizQuestions = [
    {
        question: "The function and var are known as what in javascript?",
        answers: {
            a: "Arrays",
            b: "booleans",
            c: "Declaration Statements",
            d: "Data Types",
        },
        correctAnswer: "c"
    },
    {
        question: "In Javascript, what does x === y mean?",
        answers: {
            a: "Both x and y are equal in value only",
            b: "Both x and y are equal in type only",
            c: "Both x and y are equal in value but not type",
            d: "Both x and y are equal in value and type",
        },
        correctAnswer: "d"
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
]