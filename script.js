/* Add your JavaScript here */
var questionCount = 0;
var BaliScore = 0;
var RomeScore = 0;
var PatagoniaScore = 0;
var TokyoScore = 0;

var result = document.getElementById("result");
var restartButton = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// Add event listeners for each answer
q1a1.addEventListener("click", Bali);
q1a2.addEventListener("click", Rome);
q1a3.addEventListener("click", Patagonia);
q1a4.addEventListener("click", Tokyo);

q2a1.addEventListener("click", Bali);
q2a2.addEventListener("click", Rome);
q2a3.addEventListener("click", Patagonia);
q2a4.addEventListener("click", Tokyo);

q3a1.addEventListener("click", Bali);
q3a2.addEventListener("click", Rome);
q3a3.addEventListener("click", Patagonia);
q3a4.addEventListener("click", Tokyo);

// Add event listener to restart button
restartButton.addEventListener("click", resetQuiz);

// Track answers and update scores
function Bali() {
  BaliScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " BaliScore = " + BaliScore);
  checkIfQuizIsDone();
}

function Rome() {
  RomeScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " RomeScore = " + RomeScore);
  checkIfQuizIsDone();
}

function Patagonia() {
  PatagoniaScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " PatagoniaScore = " + PatagoniaScore);
  checkIfQuizIsDone();
}

function Tokyo() {
  TokyoScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " TokyoScore = " + TokyoScore);
  checkIfQuizIsDone();
}

// Check if the quiz is done
function checkIfQuizIsDone() {
  if (questionCount === 3) {
    console.log("The quiz is done!");
    updateResult(); // Call updateResult function when quiz is done
  }
}

// Determine the quiz outcome
function updateResult() {
  if (BaliScore >= RomeScore && BaliScore >= PatagoniaScore && BaliScore >= TokyoScore) {
    console.log("Your dream destination is Bali!");
    result.innerHTML = "Your dream destination is Bali!";
  } else if (RomeScore >= BaliScore && RomeScore >= PatagoniaScore && RomeScore >= TokyoScore) {
    console.log("Your dream destination is Rome!");
    result.innerHTML = "Your dream destination is Rome!";
  } else if (PatagoniaScore >= BaliScore && PatagoniaScore >= RomeScore && PatagoniaScore >= TokyoScore) {
    console.log("Your dream destination is Patagonia!");
    result.innerHTML = "Your dream destination is Patagonia!";
  } else if (TokyoScore >= BaliScore && TokyoScore >= RomeScore && TokyoScore >= PatagoniaScore) {
    console.log("Your dream destination is Tokyo!");
    result.innerHTML = "Your dream destination is Tokyo!";
  }
}

// Reset quiz
function resetQuiz() {
  // Update the content of the <h2> element with the id result
  result.innerHTML = "Your result is ...";

  // Reset tracking variables
  questionCount = 0;
  BaliScore = 0;
  RomeScore = 0;
  PatagoniaScore = 0;
  TokyoScore = 0;

  console.log("Quiz has been reset.");
}
