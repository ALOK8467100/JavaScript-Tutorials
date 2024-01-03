// "Object/array" how "reference" are passed to variable

let arr = [1,2,3,4,5];  // Here we declare and initialize array 

let getRef = arr;  // Here we make reference of Array, it not copy the array, it refer the original array address.

console.log("Original array", arr); 
console.log("getRef array", getRef);
// Both print exact same value no changes appears

console.log("**********")

getRef [3] = 7; // we change [3] value and it changes in both arr and getRef

console.log("Original array", arr); 
console.log("getRef array", getRef);

console.log("**********")

// we use shift method by using this it remove 1st value of array. 
getRef.shift()

console.log("Original array", arr); 
console.log("getRef array", getRef);

console.log("**********")

// Pass by value
// In pass by value we use "Spread" 
// by using "Spread" operator we can make change in new array but that changes not reflect in the original array. 


// After using "Spread" it only copy the array elements not referencing address value of that original array.
// we have original array name [arr] and we made new array using spread method 
// Now to declare array by using in spread method 
            // [..arr]

let arrs = [1,2,3,4,5]
let getValue = [...arrs];


getValue[2] = 20;
console.log("Original array", arrs);
console.log("getValue array" , getValue)

// Now both original and getValue array have different values 

