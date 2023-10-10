// Loose equality (==) Vs Strict Equality Operator (===)
// It's output comes in True or Flase

// Loose Equality Operator ==

let age = 22; // Number type value
console.log(age == "22")  // == It focus only one value not on type
// in place of == we can also use != 
console.log( age != "22")

// Strict Equality Operator

console.log(age === "22")    // === it focus on value and type also
// Thats why it shows false in result because age is an string and 22 is number so not matches and show flase 