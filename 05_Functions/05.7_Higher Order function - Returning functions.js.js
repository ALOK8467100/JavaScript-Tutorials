//  Higher Order Function - Returning Function.

// Function returning another function 


let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
};

console.log(compliment("You are good Coder")("Alok"))