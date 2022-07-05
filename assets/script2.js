const question = document.querySelector('#questionArray');
const choices = Array.from(document.querySelectorAll('.option-text'));
const options = document.querySelector('#choiceArray');
const headerScore = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let validAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    { 
    question: "Commonly used data types DO NOT include:",
    choice1:"strings",
    choice2:"booleans",
    choice3:"alerts",
    choice4:"numbers",
    answer: "alerts",
},
{
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
},
{
    question: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
},
{
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
},

]

const Points_Scored = 100
const Max_Questions = 5

startQuiz= () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter > Max_Questions) {
        localStorage.setItem('mostRecentScore', scores)   
        return window.location.assign('/end.html')
    }
    
    questionCounter++
    options.innerText = `Questions ${questionCounter} of ${Max_Questions}`
    progressBarFull.style.width = `${(questionCounter/Max_Questions) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choices.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    validAnswers = true
}    

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!validAnswers) return
        
        validAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(Points_Scored)
        }
        
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            }, 1000)    
    })
})    
