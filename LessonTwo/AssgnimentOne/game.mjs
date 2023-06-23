import { question as _question } from "readline-sync";

var Result = 0;

var userName = _question("what's your name?  ");

console.log("Welcome "+ userName + " This is for Just game, would you try it now?");


// function
function quiz(question, answer)
{
  var userAnswer = _question(question);

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
    question: "Where do you live?",
    answer: "Trichy"
  },
  {
    question: "Are you a Big Marvel Fan?",
    answer: "Yes"
  },
  { 
    question: "who is your favourite in marvel fan?",
    answer: "Ironman"
  },
  { 
    question: "Which year End game movie was released ?",
    answer: "2019"
  }
];

 // the list using a for loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

console.log("Well done!, Your final Result is :",Result);



















 


 