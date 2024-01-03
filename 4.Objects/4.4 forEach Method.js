//  forEach method of array

// Its another type of loop which we used to traverse over the array

let dishes = ["Briyani","channy","karahai","chola"]

// So using this kind of array we basically use for loop like this.

for(let i = 0; i< dishes.length;i++){
    console.log(dishes[i])
}

console.log("-----------")

// Using forEach method

dishes.forEach(function(element){
    console.log(element)
})