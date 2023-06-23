var readlineSync = require("readline-sync");

var Result = 0;

var userName = readlineSync.question("what's your name?  ");

console.log("Welcome "+ userName + " This is for Just game, would you try it now?");


// function
function quiz(question, answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer)
  {
    console.log("right!");
    Result =  Result + 1; 
    console.log("current result: ",  Result);
    console.log("                        ");
  }
    else
      {
        console.log("wrong!");
        Result =  Result - 1;  
        console.log("current result: ",  Result);
        console.log("                     ");
      }
} 

// array of objects
var questions = [
  {
    question: "what is the dhoni's highest score in ODI?",
    answer: "183"
  },
  {
    question: "what is the  virak kholi highest score in ODI?",
    answer: "183"
  },
  { 
    question: "which player is most Hundred in ODI? ",
    answer: " Sachin"
  },
  { 
    question: "Which year IPL started in india? ",
    answer: " 2008"
  }
];

 // the list using a for loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

console.log("Well done!, Your final Result is :",Result);




















 


 