
// countdown timer variables
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

//Start button
document.getElementById("onclick").addEventListener("click", 
function() {
      }
);

// countdown timer 
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
countdown ()


//questions
var questionCounter=0;

var questionDiv = document.querySelector("#question-title")

var questions = [{
    question:”Question being asked #1?”,
	  choices:[”Boolean, “string”, “function”, “number”]
    correctAnswer: “Function”
}, 
{
	question:”Question being asked #2?”,
	choices:[”choice 1, “choice 2”, “choice 3”, “choice 4”]
correctAnswer: “Function”
	},
  { 
	question:” Question being asked #3?”,
	choices:[”choice 1a, “choice 2a”, “choice 3a”, “choice 4a”]
correctAnswer: “Function”
}];

function renderFirstQuestion(){}
  var question1 = questions[questionCounter];

  //actual question
  var question = question1.question

  var questionh2=document.createElement("h2")
  questionh2.textContent = question;
  questionDiv.appendChild(questionh2)
 
  //array to loop through each element and make a button for each choice
  var choices = question1.choices
  var correctAnswer = question1.correctAnswer
//once they answer the question, the counter increases
  questionCounter++;
