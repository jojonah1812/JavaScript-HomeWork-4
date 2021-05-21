
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


//questions - conditionals
var questionCounter=0;

var questionDiv = document.querySelectoir("#question-title")

var questions = [{
    question:"Question being asked #1?”,
	  choices:["boolean", "string”, “function”, “number”]
    correctAnswer:"Function"
}, 
{
	question:"Question being asked #2?”,
	choices:["choice 1", "choice 2”, “choice 3”,“choice 4”]
  correctAnswer:"Function"
	}, 
  {
	question:"Question being asked #3?”,
	choices:["choice 1a", "choice 2a”, “choice 3”,“choice 4”]
  correctAnswer:"Function"
}];

function renderFirstQuestion(){}
  var question1 = questions[questionCounter];

  var question = question1.question
  var choices = question1.choices
  var correctAnswer = question1.correctAnswer

  questionCounter++;
