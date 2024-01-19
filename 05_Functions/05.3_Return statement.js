// Returning Values(How to return value from the function)

let ageCalculation = function(birthYear, currentYear ){
    let age = currentYear - birthYear;
    console.log(`Your current age is = ${age}`)
}

ageCalculation(2001,2023)

// But we want out value in return not in console so we can use it further in our program.
let ageCal = function(birthYear, currentYear = 2023){
    let age = currentYear - birthYear;
    console.log(`This age return through console Your current age is = ${age}`)
    return age; // After return, function is end so after that no execution is proceed in program especially in functions
}

console.log("Now age is given through return value which we can use in various functions and programms : " + ageCal(2001))


//we can return our function value in new variable also.

let functionResult = ageCal(2001)