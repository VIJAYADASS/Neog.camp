// ex 08
var readlineSync = require('readline-sync');
score = 0;

function cricket(Batting, Blowing)
{
 
    var userBlowing = readlineSync.question(Batting);

    if(userBlowing === Blowing)
    {
    console.log("Yes, this is a correct !");
    }
    else
    {
    console.log("No,this is not a correct ! ");
    }
}
    cricket("Msd's highest ODI socre is: ? " , " 183"); 
