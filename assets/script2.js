// Event handlers for the questions panel from mdn web docs DOMContentLoaded
// document.addEventListener('click', (event) => {
//     console.log('DOM fully loaded and parsed');
//     const defaultTime = 75;
//     const timeOffset = 0;
//     let time = 75;
//     let score = 0;
//     let questions = 0;
//     let questionCount = 0;
//     let answers = document.querySelector('#startQuiz button');
// });

// const element = document.getElementById("startQuiz");
// element.addEventListener("click", start);

// function start() {
//     document.getElementById("questions").addEventListener("click", (event) => {
//         event.preventDefault();
//     }
// ,}

var score = 0;
var quizSet = 0;

let start = document.querySelector("#startQuiz");
let questions = document.querySelector("#questions");
let container = document.querySelector("#container");
let maxTime = 76;
let minTime = 0;
let reducedTime = 10;
let ulCreate = document.createElement("ul");


timer.addEventListener("click", function() {
    if (maxTime === 0) {
        maxTime = setInterval(function () {
            minTime--;
            start.textContent = "Time: " + start.textContent;

            if (minTime <= 0) {
                clearInterval(minTime);
                complete();
                start.textContent = "Time's up!";
            }
        }, 1000);
    }    
    render(quizSet);
}); 

function render(quizSet) {
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        var li = document.createElement("li");
        li.classList.add("question");
        li.dataset.id = question.dataset.id;
        li.dataset.name = question.dataset.name;
    }
}

