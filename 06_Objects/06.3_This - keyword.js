/*     this keyword
       In each method we have an access of special keyword called "this" 

       "this" keyword represent the object. "Calling" the "method" in which this is "present"
*/
// Now see an example

let person = {
    firstName : "Harry",
    lastName : "Brook", 
    city : "Delhi",  // if we want to change his city or any other property but it not show any change in console,So we use "this" to make it dynamic
    birthyear : 1998,
    Education : "Software engineer",
    getSummary : function(){
        return `Harry Brook lived in Delhi. He is 25 year old. He is a software engineer`
    }
}
console.log(person.getSummary())

// But it not changes in future if we changes his age or cith or educatio profile.
// So for this problem we use "this" keyword to make it dynamic so we can use in future.


//  Step 1 Check in which method we use "this" keyword
//  step 2 Owner of that method( Who is calling those method)

let student = {
    firstName : "Larry",
    lastName : "Willimson", 
    city : "Goa",  // if we want to change his city or any other property but it not show any change in console,So we use "this" to make it dynamic
    birthyear : 2001,
    Education : "Software engineer",
    getSummary : function(){
        return `${this.firstName} ${this.lastName} lived in ${this.city}. He is ${this.birthyear} year old. He is a ${this.Education}`
    }
}
console.log(student.getSummary())


//  Now we can access all the object properties using "this" keyword

