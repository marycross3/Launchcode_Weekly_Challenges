
const input = require('readline-sync');


function FirstReverse(str) { 

  // code goes here  
  str = str.split('').reverse().join('')
  return str; 

}

// keep this function call here 
let phrase = input.question("Enter a phrase: ")

console.log(FirstReverse(phrase));

//run in terminal using
//node --inspect Week2_Challenge.js