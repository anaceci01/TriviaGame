//var timer = 10;
var intervalID;
var currenQuestion = 0;
var score = 0;
var lost = 0;
// holds value of reset clock
var timer;


// Questions

// ---------------Quiz ------------------
// function buildQuiz(){
//   var output =[];
//   myQuestions.forEach(
//     (currentQuestion, questionNumber) => {
//       var answers = [];
//       for(currentQuestion.answers[0]){
//         answers.push('')
//       }
//     }
//   )
// }


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

$("#start-btn btn").click(function () {
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