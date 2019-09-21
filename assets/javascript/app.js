var timer = 10;
var intervalID;
var counter;


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
]

// function startTimer(){
//   var counter = 5;
//   setInterval(function() {
//     counter--;
//     if (counter >= 0) {
//       span = document.getElementById("show-number");
//       span.innerHTML = counter;
//     }
//     if (counter === 0) {
//         alert('sorry, out of time');
//         clearInterval(counter);
//     }
//   }, 1000);
// }

// $("#startClock").click(function(){
//     startTimer();
// });










// $("#startClock").click( function(){
//   var timer = 10;
//   setInterval(function() {
//     counter--;
//      if (timer >= 0) {
//         span = document.getElementById("show-number");
//         span.innerHTML = counter;
//      }
//      if (timer === 0) {
//         alert('sorry, out of time');
//         clearInterval(timer);
//       }
//     }, 1000);
// });




// $(document).ready(function() {
//   var doUpdate = function() {
//     $(".contdown").each(function(){
//       var count = parseInt($(this).html());
//     if (count !== 0) {
//       $(this).html(count - 1);
//     }
//     });
// };
// setInterval(doUpdate, 1000);
// });


// //run function
function run() {
  $("#startClock").click(function run() {
  run= setInterval(decrement, 1000);
    clearInterval(intervalID);
  //intervalID = setInterval(decrement, 1000);
});

//decrement function
function decrement() {
  timer--;
  $("#show-number").html("<h1>" + timer + "</h1>");
  if (timer <= 0) {
    stop()
  }
}

// //stop function
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