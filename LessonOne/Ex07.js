// ex 07 add two parameters
export function exercise4()
{

  function add(number1 , number2)
  {
    var sum = number1 + number2;
    return sum;
  }
  
  var  finalAnswer = add(21,20);
  console.log("the sum of 21 and 20 is : " + finalAnswer);
  console.log("Exercise 4");
  module.exports=exercise4;
}

