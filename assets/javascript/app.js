// -----------------VARIABLES ---------------------
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let shuffleQuestions, currentQuestion

startButton.addEventListener('click', startGame)

// -----------------FUNCTIONS ---------------------
function startGame () {

startButton.classList.add("hide")
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestion = 0
questionContainerElement.classList.remove('hide')
nextQuestion()
}

function nextQuestion () {
  showQuestion(shuffleQuestions[currentQuestion])
}
//
function showQuestion (question){
  questionElement.innerText = question.question
  question.choices.forEach( answer => {
    const button = document.createElement('button')
    button.innerText =answer.text
    button.classicList.add()
    if(answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBttnElement.appendChild(button)
  })
}

function selectAnswer () {

}

const questions = [
  {
  question: "Which was the first nation to give women the right to vote?",
  choices: [
    {text: "New Zealand", correct: true},
    {text: "France", correct: false},
  ]
}

]
