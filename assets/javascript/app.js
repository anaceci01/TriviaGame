//var timer = 10;
var intervalID;
var counter = 10;


// Questions
var myQuestions = [
  {
    question: "What causes the ocean's tides?",
    answers: ["Orbit of the earth aroun the sun \nGravitational pull of the sun \nGravitational pull of the moon \nRotation of the earth"],
    correctAnswer: "Gravitational pull of the sun"
  },
  

  {
    question: "The water _________ in northern oceans",
    answers: ["Is saltiest", "Spins clockwise", "Freezes often", "Spins counterclockwise"],
    correctAnswer: "Spins clockwise"
  },

  {
    question: "Which was the new ocean named in 2000?",
    answers: ["Artic Ocean", "Pacific Ocean", "Southern Ocean", "Indian Ocean"],
    correctAnswer: "Southern Ocean"
  },

  {
    question: "How much of the world is covered by water?",
    answers: ["70 percent", "50 percent", "30 percent", "15 percent"],
    correctAnswer: "70 percent"
  },

  {
    question: "How many oceans are there today",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },

  {
    question: "Waves are caused by _________",
    answers: ["Gravitational pull of the moon", "Temperature", "Rain", "Wind"],
    correctAnswer: "Wind"
  },

  {
    question: "One cubic foot of ocean water contains over ______ of salt",
    answers: ["4 pounds", "2 pounds", "1 pound", "5 pounds"],
    correctAnswer: "2 pounds"
  },

  {
    question: "The Red Sean and _____ have the saltiest water of all open seas and oceans",
    answers: ["Persian Gulf", "Caspian Sea", "Dead Sea", "Atlantic Ocean"],
    correctAnswer: "Persian Gulf"
  }
]

// ---------------Quiz ------------------
function buildQuiz(){
  var output =[];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      var answers = [];
      for(currentQuestion.answers[0]){
        answers.push('')
      }
    }
  )
}


// -------------Timer---------------------
function startTimer() {
  var counter = 10;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      clearInterval(counter);
    }
  }, 1000);
}

$("#startClock").click(function () {
  startTimer();
});







//---------Pseudo Code--------------//
//---------------------------------//
// Time Remaining re-starts after each question is answered
// Each questions has a multiple choice answer. 
//The user then, clicks on an answer and a "correct" or "incorrect" text pops up along with a GIF
//New question loads
//Once all questions have been answered. the number of correct answers or incorrect answer will display
// The user has  an option to Start over or Play again.