// -----------------VARIABLES ---------------------
const content = document.getElementById("content") //
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question') //
let answerButtonsElement = document.getElementById('answer-buttons') //
let shuffleQuestions, currentQuestion
let scoreHolder = document.getElementById("score"); //
const submitButton = document.getElementById("submit"); //

const questionTracker = 0;
var score = 0;
var questionAsked = true;

function askQ() {

}


startButton.addEventListener('click', startGame)

// -----------------startGame Function ---------------------
function startGame() {
    startButton.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}
// -----------------nextQuestion Function ---------------------
function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestion])
}
// -----------------showQuestion Function ---------------------
function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classicList.add()
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBttnElement.appendChild(button)
    })
}
// -----------------Timer Function ---------------------
function timer(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        minutes = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

// -----------------Questions Array  ---------------------
const questions = [{
        question: "Which was the first nation to give women the right to vote?",
        choices: [
            { text: "New Zealand", correct: true },
            { text: "United States", correct: false },
            { text: "Spain", correct: false },
            { text: "France", correct: false },
        ]
    },
    {
        question: "What is the official nickname of Texas?",
        choices: [
            { text: "The Biggest of Them All", correct: false },
            { text: "The Lonely Star", correct: false },
            { text: "The Lone Star State", correct: true },
            { text: "The Heart of Gold", correct: false },
        ]
    },
    {
        question: "Name the biggest island of the world",
        choices: [
            { text: "Hawaii", correct: false },
            { text: "Greenland", correct: true },
            { text: "New Zealand", correct: false },
            { text: "New Guinea", correct: false },
        ]
    },
    {
        question: "What is the diameter of our Earth",
        choices: [
            { text: "15,450 Kilometers", correct: false },
            { text: "12,930 Kilometers", correct: false },
            { text: "18,423 Kilometers", correct: false },
            { text: "12,742 Kilometers", correct: true },
        ]
    },
    {
        question: "Name the largest continent of the world",
        choices: [
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "South America", correct: false },
            { text: "Europe", correct: false },
        ]
    },
    {
        question: "When was North America affected by Huricane Katrina?",
        choices: [
            { text: "2015", correct: true },
            { text: "2014", correct: false },
            { text: "2016", correct: false },
            { text: "2012", correct: false },
        ]
    }, {
        question: "What year did WWI start?",
        choices: [
            { text: "1920", correct: false },
            { text: "1912", correct: false },
            { text: "1942", correct: false },
            { text: "1914", correct: true },
        ]
    },
    {
        question: "What is the capital of Brasil?",
        choices: [
            { text: "Brasilia", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Sao Paulo", correct: false },
            { text: "Espirito Santo", correct: true },
        ]
    }
]