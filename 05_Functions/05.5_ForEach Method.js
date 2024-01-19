//  forEach method of array

// Its another type of loop which we used to traverse over the array

let dishes = ["Briyani","channy","karahai","chola"]

// So using this kind of array we basically use for loop like this.

for(let i = 0; i< dishes.length;i++){
    console.log(dishes[i])
}

console.log("-----------")

// Using forEach method


//  For-Each not create any new arrayn it's work on exixting array

dishes.forEach(function(element){
    console.log(element)
})

// Q. For a given array of number, print the square of each value using the forEach loop.

let nums = [2,3,4,5,6];

nums.forEach((num) => {
    console.log(num * num);             
})