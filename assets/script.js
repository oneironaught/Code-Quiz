const question = document.querySelector('#questionArray');
const choices = Array.from(document.querySelectorAll('.option-text'));
const options = document.querySelector('#choiceArray');
const scoreTracker = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let validAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    { 
    question: "Commonly used data types DO NOT include:",
    option1:"strings",
    option2:"booleans",
    option3:"alerts",
    option4:"numbers",
    answer: "alerts",
},
{
    question: "The condition in an if / else statement is enclosed within ____.",
    option1: "quotes",
    option2: "curly brackets",
    option3: "parentheses",
    option4: "parentheses",
    answer: "parentheses"
},
{
    question: "Arrays in Javascript can be used to store ____.",
    option1: "numbers and strings",
    option2: "other arrays",
    option3: "booleans",
    option4: "all of the above",
    answer: "all of the above"
},
{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    option1: "commas",
    option2: "curly brackets",
    option3: "quotes",
    option4: "parenthesis",
    answer: "quotes"
},
{
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    option1: "javaScript",
    option2: "terminal / bash",
    option3: "for loops",
    option4: "console log",
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

incrementScore = num => {
    score +=num
    scoreTracker.innerText = score
}