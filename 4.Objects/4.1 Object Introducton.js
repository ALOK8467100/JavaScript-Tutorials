//  Introduction to objects in JavaScript


// How to initalized Object in JavaScript
let car = {
    color : "black",
    model: "2022",
    company : "Hoonda"
}

console.log(car)  // it print whole car object in console

// Accessing the JavaScript Object properties
// 1. first method
         
console.log(car["color"])  // write the object in console function with particular object set in []
console.log(car.color)     // in this we directly write the car.color 


// 2. Second method
// Now if we want that property as dynamic
    
let propertyName = "color";   // Now we use propertyName as variable for Car Object  
// we change color to model,company
console.log(car[propertyName])  
//If we put propertyName in car[propertyName] then its work and changes in future as dynamic variable 
// Suppose if we change propertyName color to model so we simply change in command in propertyName.



// "Modify" the Object Property

car.color = "brown";
console.log(car.color) // Now it changes color from balck to brown. 

// Delete properties of object

let obj = {
    prop1 : "Value1",
    prop2 : "Value2"
}

delete obj.prop1   // Now its deleted from object obj

console.log(obj.prop1)