// 03.6_Ternary operator

// Ternary Operator
//  So Using if,else condition is so long process
//  so we use Ternary Operator 

// Example of if , else 
let age = 20;
if(age > 18){
    console.log("Qualify");
} else{
    console.log("Fail");
}

// Example of Ternary Operator

let result = age > 18 ? "Qualify" : "Fail"
console.log(result);

// As if , else we use various conditions in Ternary operator we can also use various conditions 

let height = 2.3;
let weight = 55;

let BMI = height > 2.2 ? weight > 54 ? "Qualify in BMI" : "weightIssue" : "HeightIssue"
console.log(BMI);

/* In thsi case we have two conditions 
   one is height and another is weight

   First condition is height, when control goes to height condition and check it condition 
   if it's true then go to second condition
   Second condition is weight
*/ 