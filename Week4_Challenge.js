// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number 
// you passed to the function. For example, if the input is 4 then your function should return 10 
//because 1 + 2 + 3 + 4 = 10.

function sumOfNumbers(number){
    if (number < 0 ){
        return "Please enter a positive number greater than zero."
    }
    let sum = 0;
    for (i=0; i<= number; i++){
        sum = i + sum
    }
    return sum
}

console.log(sumOfNumbers(4))
console.log(sumOfNumbers(-1))
