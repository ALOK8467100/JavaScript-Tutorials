// Arrays 
// we can use number and string as an index element

let dishes = ['Briyani', 'Chat', "Parathay"];

// Now Array Access
console.log(dishes[2]) // here only index 2nd element printed

// Modify The Array

dishes[0] = "kulcha";
console.log(dishes) // Output of index 0th element modified

// Array Methods
// 1. Join Method (it is used to saperate the element between them)
console.log(dishes.join('-'))

// 2. indexOf  (indexOf is used to find that element is present or not)
console.log(dishes.indexOf("Chat")) // it is case sensitive so exact match of element  

// 3.Concatination Method
// now make now array
// dishes is 1st Array & newDishes is 2nd Array
let newDishes = ["sweet-dish","pani-puri"];
console.log(dishes.concat(newDishes)); 
// After concat 1st Array element comes first and 2nd Array element comes second.

// 4. Length Method
// Its tells about the length of that array element 
console.log(dishes.length)

// 5. Push Method
// It is used to Add any element at last index.
console.log(dishes.push("Chola"))  // In this line we push Chola Array dishes 
console.log(dishes)  // Now see the update in Array dishes.

// 6. Pop Method 
// It is used to remove the element at last index.
console.log("now it pop chola from the array = " + dishes.pop("Chola"))
console.log("now new array without Chola = " + dishes)






