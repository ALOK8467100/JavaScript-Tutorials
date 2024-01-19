// Higher Order Function - Callbacks
// Passing function as an Argument (Higher order function example)



let upperCase = function(str){
    return str.toUpperCase();   
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str)
}

console.log(transformer("Hello Programmers",upperCase))


// str is a string which we pass in our transformer function.
// here we pass function as an argument in another function.