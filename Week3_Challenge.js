const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
function LongestWord(sen) { 
        
    // code goes here  
    sen = sen.split(" ");
    let index = 0;
    
    let longestWord = sen[0];
    //console.log(sen);
    while (index < sen.length){
        let count = 0;
        word = sen[index].split("")
        for (let i =0; i < word.length; i++){
            count ++;
            if (count > longestWord.length) {
                longestWord = sen[index];
            } 
        }
        index++;
    }

    return longestWord; 

}
    
// keep this function call here 
readline.question('Enter a phrase', sen => {
    console.log(LongestWord(sen));
    readline.close();
});
