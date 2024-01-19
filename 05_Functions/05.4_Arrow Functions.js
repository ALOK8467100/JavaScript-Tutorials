/* Arrow Function(ES6)
    Special from of function expression
    It allows us to write functiuons more faste because,
    1. No need to use function keyword
    2. No ned to use paranthesis() in ncase of single parameter
    3. No need to use curely {} if single line code in function
    4. No need to use return statement if single line code in function

    Normal function expression

    let invitation = function(name){
        console.log(`welcome ${name} to this event`)
    }
    invitation("ALok")
*/

        // Now Arrow function
        
        let  invitation = name => `Welcome ${name} to this event`

        console.log(invitation("Alok"))


function countVowels(str){
    let count = 0;
    for (const char of str) {
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) {
            count++;           
        }
    }
    // console.log(count);
    return count;
}