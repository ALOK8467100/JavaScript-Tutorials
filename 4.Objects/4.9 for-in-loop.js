// for - in Loop (Each iteration return a "Key" of object)
//  this "for - in loop" only used in object

let car = {
    model:2022,
    color:"Black",
    company:"Toyota"
} 

console.log(car)

// Here we print only car model by using for - in loop

for(let key in car){
    console.log(car.model)
}

// Now we want to add the car module in a variable.

let x = "Alok"
for(let key in car){
    x = x + car[key]
}
console.log(x)


// In this variable x having "Alok" we have to add all the car model property
