// Boolean Values And Comparison Operators

let booleanType = true;
let stringType = "true";

console.log("it shows boolean value = " + typeof booleanType, "it shows string type = " + typeof stringType)

// Methods Return Boolean Values

let email = "alok@gmail.com";

let booleanValue = email.includes("@");
console.log(booleanValue)
// it checks wether @ is present in booleanValue or not if present then return true otherwise return false.



// Comparison Operator Always Return Boolean Value
//  == , === , !== , !=
//  > , >=
//  < , <=

let points = 23
let point = 35
let sum = 56
let total = 87
let num = 12 
console.log(points == "23")
console.log(point === "23")
console.log(sum != "23")
console.log(total < "23")
console.log(num > "23")

/* Now Arithmetic Operations

    let a = 5 let b = 6 
    sum a + b = 11
    Diff a - b = -1
    Multiply a * b = 30
    Div  a/b = 0.8333
    Modulo a%b = 5


    Arithmetic Operations: Presidence

    let a = 6/6 + 2*7 + (7-2)*8 = 55

    1.Brackets ()
    2.Powers **
    3.Multiply/Division/Modulo   * / %  at same level left to right 
    4.Add / Subtract + -   Left to Right priority


    Arithmatic Operations
    let a = 5

    Increment a++ = 6
    Increment a+=2 = 7
    Decrement a-- = 4
    Decrement a-=2 = 3

    Logical Operations

    let a = true let b = flase

    OR a || b = true
    AND a && b = false
    Equality a == b = false
    Non-equality a != b = true

    Greater than a>b 
    Less than a<b
    Greater than equal a>=b
    Less than equal a<=b
    Loose equality ==
    Strict equality ===

    Type Coercion

    let a = 5  let b = "Hi"
    concat a+b = "5Hi"
    Multiply a*b = NaN
    Subtract a-b = Nan


    Mutating vs Non-Mutating methods

                                Mutating               vs                    Non-Mutating
                1. changes variable which called it                     does't changes the variables which called it
                2.example array.push()                                  example array.indexOf()


*/