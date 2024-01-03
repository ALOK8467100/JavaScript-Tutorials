// Function Vs Method

// Method is defined as when a function inside a object
// Basically Methods are some functions declared inside a object

let person = {
    agecalculate : function(birthyear){
        let age = 2023-birthyear;
        return age;
    }
}
console.log(`Current age is ${person.agecalculate(2023)}`)

// here we see a function inside an object.