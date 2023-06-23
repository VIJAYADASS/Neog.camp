// ex 02 read the name of the user
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question(' Who is your favourite cricketer ');
console.log('Hi ' + userName + '!');
