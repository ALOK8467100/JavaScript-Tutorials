// 04.1_Introduction to Array

// Arrays in JS
// Collection of items

// Creat Array
//  In Array we put similar data type.
//  We prefer this kind of Array.

let heroes = ["ironman", "hulk", "thor", "batman"];
console.log(heroes);

// array.length
// It shows length of an array.
console.log(heroes.length);

// We can put different data type in array, but we basically avoide, it not a good practice.
let info = ["rahul", 86,"Delhi"];

// Array is type of object
console.log(typeof heroes);  // it shows it's an object.

// Array Indices
// For accesing particular indexes in array we use Array Indices.

let marks = [96,75,48,83,66];
console.log(marks[0]);  // it show's 96 for 0th index

// We can change the value of array at any perticular index.
// We change the marks[array] value at index [3] 83 to 90.
// In JS Array is Mutable
marks[3] = 90;
console.log(marks[3]); // value changed at index [3]. 