// Create a function that takes two strings as arguments and returns the number of times the 
// first string (the single character) is found in the second string.

function findChar(char, word){
    char = char.toLowerCase();
    let count = 0;
    word = word.toLowerCase();
    word = word.split("");
    for (let letter of word){
        if (letter == char){
            count +=1;
        }
    }
    return count;
}

console.log(findChar('o', 'Old man yells at cloud'))