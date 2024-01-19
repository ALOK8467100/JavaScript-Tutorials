// Call and apply method.
// We can manually set the value of "this" keyword.
// We can use Call and Apply to change the reference of this keyword.

"use strict"  // it is used basically to know the errors properly. 

let mainPlane = {
    airline: "Fly India",
    iatacode: "FI",
    bookings:[],
    book:function(flightNum,name){  // we take flightNum and passanger name from this function and rest of details from mainPlain object. 
        console.log(`${name} Booked Flight on ${this.airline} with this flight Number ${this.iatacode}${flightNum}`)

    }
}
mainPlane.book(533, "Alok")

// Now see how we can set this keyword manually and use of Call function.

let childPlain = {
    airline: "Child Plain",
    iatacode: "CP",
    bookings:[],
}

let book = mainPlane.book;  // "this" is undefined  aflter the function
// book(655,"Lurie")

book.call(childPlain,687,"Zack")




// Now see "bind" method.
// Here we see one function name greet and his method having user firstName and lastName

//  Now to joint both greet function and its method we use "bind" method to joint these to. 
function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost`)
}

let user = {
    firstName : "Alok",
    lastName : "Kumar"
}

let greets = greet.bind(user);
greets()
