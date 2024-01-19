// Variables in JS

// Variables are containers for data.

// variable Rules

// variable name are case sensative; "a" & "A" is different
// Only letters, digits, underscore(_) ans $ is allowed. (Not even space)
// Only a letter, underscore(_) or $ should be 1st character.
// Reserved words cannot be variable names.


name = "ALok";
console.log(name);
age = 24;
console.log(age);
x = null;
console.log(x);
y = undefined;
console.log(y);



/* 

We use let, const, and var while declaring variables.

var : Variable can be re-declared & updated. A global scope variable.

let : Variable cannot be re-declared but can be updated. A block scope variable.

const : Variable cannot be re-declared or update. A block scope variable.
*/


// in var only recent updated value is shown.
// here only 56 shown because it is recent updated.
// Var can be declared again and again.
var score = 34;
var score = 56;
console.log("Var value " + score)


// let can be declared only once but value can be changed 
let points = 23;
console.log("let value " + points)


// Constants

// constant value can't be changed 
// constant  initialize once and declared once
const value = 18;
console.log("const value " + value)