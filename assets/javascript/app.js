var timer = 30;
var intervalID;


// Questions
var myQuestions = [
  {
    question: "How many continents are in the world?",
    answers: ["8", "6", "7", "9"],
    correctAnswer: "8"
  },

  {
    question: "On a farm, a kid is a baby?",
    answers: ["Goat", "Horse", "Boy", "Pig"],
    correctAnswer: "Goat"
  },

{
  question: "Which State is called the Volunteer State?",
  answers: ["California", "Indiana", "Tennessee", "Minnesota"],
  correctAnswer: "Tennessee"
},
  
{
  question: "What is the name of Han Solo's ship?",
  answers: ["Millennium Falcon", "YT-1300", "Lando Calrissian", "Sabaac"],
  correctAnswer: "Millennium Falcon"
},
 
{
  question: "What yard line must a football team drive to, to reach the red-zone?",
  answers: ["The Fourty", "The Thirty", "The Twenty", "The Ten"],
  correctAnswer: "The Twenty"
},

{
  question: "What are the two top selling spices in the world?",
  answers: ["Pepper and mustard", "Garlic Salt and Pepper", "Himalayan Salt and Paprika", "Basil and Mustard"],
  correctAnswer: "Pepper and Mustard"
},

{
  question: "What is the only essential vitamin not found in white potatoes?",
  answers: ["Pepper and mustard", "Garlic Salt and Pepper", "Himalayan Salt and Paprika", "Basil and Mustard"],
  correctAnswer: "Pepper and Mustard"
},



$("#start").on("click", run);

//run function
function run() {
  clearInterval(intervalID);
  intervalID = setInterval(decrement, 1000);
}

//decrement function
function decrement() {
  timer--;
  $("#show-number").html("<h1>" + timer + "</h1>");
  if (timer === 0) {
    stop()
  }
}

//stop function
function stop() {
  clearInterval(intervalID)
}
//restart
run()







//---------Pseudo Code--------------//
//---------------------------------//
// Time Remaining re-starts after each question is answered
// Each questions has a multiple choice answer. 
//The user then, clicks on an answer and a "correct" or "incorrect" text pops up along with a GIF
//New question loads
//Once all questions have been answered. the number of correct answers or incorrect answer will display
// The user has  an option to Start over or Play again.